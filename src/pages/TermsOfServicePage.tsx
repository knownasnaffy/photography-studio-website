import { FadeIn } from '../components/ui/FadeIn';

export function TermsOfServicePage() {
  return (
    <div className="pt-20 px-6 max-w-5xl mx-auto pb-32">
      <FadeIn>
        <div className="mb-16">
          <h1 className="font-display-lg text-5xl md:text-7xl uppercase mb-6">Terms of Service</h1>
          <p className="font-body-lg text-on-surface/60 max-w-3xl">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </FadeIn>

      <div className="space-y-12">
        <FadeIn delay={0.1}>
          <section className="space-y-4">
            <h2 className="font-headline-md text-3xl uppercase">Use of This Website</h2>
            <p className="font-body-md text-on-surface/70">
              By accessing this website, you agree to use it lawfully and respectfully. Content is provided for general information about Lucky Photography services.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.2}>
          <section className="space-y-4">
            <h2 className="font-headline-md text-3xl uppercase">Service Inquiries</h2>
            <p className="font-body-md text-on-surface/70">
              Contact form submissions are treated as inquiries only and do not create a binding booking agreement.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.3}>
          <section className="space-y-4">
            <h2 className="font-headline-md text-3xl uppercase">Intellectual Property</h2>
            <p className="font-body-md text-on-surface/70">
              All images, branding, and written content on this website are the property of Lucky Photography unless otherwise stated, and may not be copied or reused without permission.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.4}>
          <section className="space-y-4">
            <h2 className="font-headline-md text-3xl uppercase">Disclaimer</h2>
            <p className="font-body-md text-on-surface/70">
              This website and its content are provided “as is” without warranties of any kind, express or implied.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.5}>
          <section className="space-y-4">
            <h2 className="font-headline-md text-3xl uppercase">Limitation of Liability</h2>
            <p className="font-body-md text-on-surface/70">
              To the maximum extent permitted by law, Lucky Photography is not liable for damages arising from your use of this website.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.6}>
          <section className="space-y-4">
            <h2 className="font-headline-md text-3xl uppercase">Updates to These Terms</h2>
            <p className="font-body-md text-on-surface/70">
              We may update these terms periodically. Continued use of the website after updates means you accept the revised terms.
            </p>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
