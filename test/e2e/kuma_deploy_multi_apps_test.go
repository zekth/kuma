package e2e_test

import (
	"fmt"

	"github.com/kumahq/kuma/pkg/config/core"

	"github.com/gruntwork-io/terratest/modules/k8s"
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"

	. "github.com/kumahq/kuma/test/framework"
)

var _ = Describe("Test App deployment", func() {

	namespaceWithSidecarInjection := func(namespace string) string {
		return fmt.Sprintf(`
apiVersion: v1
kind: Namespace
metadata:
  name: %s
  annotations:
    kuma.io/sidecar-injection: "enabled"
`, namespace)
	}

	var c1 Cluster

	BeforeEach(func() {
		clusters, err := NewK8sClusters(
			[]string{Kuma1},
			Silent)
		Expect(err).ToNot(HaveOccurred())

		c1 = clusters.GetCluster(Kuma1)

		err = NewClusterSetup().
			Install(Kuma(core.Standalone)).
			Install(KumaDNS()).
			Install(YamlK8s(namespaceWithSidecarInjection(TestNamespace))).
			Install(DemoClientK8s()).
			Install(EchoServerK8s()).
			Setup(c1)
		Expect(err).ToNot(HaveOccurred())
	})

	AfterEach(func() {
		_ = k8s.KubectlDeleteFromStringE(c1.GetTesting(), c1.GetKubectlOptions(), namespaceWithSidecarInjection(TestNamespace))
		err := c1.DeleteKuma()
		Expect(err).ToNot(HaveOccurred())
	})

	It("Should deploy two apps", func() {
		pods, err := k8s.ListPodsE(
			c1.GetTesting(),
			c1.GetKubectlOptions(TestNamespace),
			metav1.ListOptions{
				LabelSelector: fmt.Sprintf("app=%s", "demo-client"),
			},
		)
		Expect(err).ToNot(HaveOccurred())
		Expect(pods).To(HaveLen(1))

		clientPod := pods[0]

		Eventually(func() (string, error) {
			_, stderr, err := c1.ExecWithRetries(TestNamespace, clientPod.GetName(), "demo-client",
				"curl", "-v", "-m", "3", "echo-server")
			return stderr, err
		}, "10s", "1s").Should(ContainSubstring("HTTP/1.1 200 OK"))

		Eventually(func() (string, error) {
			_, stderr, err := c1.ExecWithRetries(TestNamespace, clientPod.GetName(), "demo-client",
				"curl", "-v", "-m", "3", "echo-server_kuma-test_svc_80.mesh")
			return stderr, err
		}, "10s", "1s").Should(ContainSubstring("HTTP/1.1 200 OK"))
	})
})
