import { FadeIn } from '../components/ui/FadeIn';
import { Seo } from '../components/seo/Seo';

export function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | Lucky Photography"
        description="Read the Lucky Photography privacy policy to understand how inquiry information is collected, used, and protected."
        path="/privacy-policy"
        noIndex
      />
      <div className="pt-20 px-6 max-w-5xl mx-auto pb-32">
        <FadeIn>
          <div className="mb-16">
            <h1 className="font-display-lg text-5xl md:text-7xl uppercase mb-6">Privacy Policy</h1>
            <p className="font-body-lg text-on-surface/60 max-w-3xl">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          <FadeIn delay={0.05}>
            <section className="space-y-4">
              <h2 className="font-headline-md text-3xl uppercase">Overview</h2>
              <p className="font-body-md text-on-surface/70">
                Lucky Photography values your privacy. We currently do not use analytics tools, ad trackers, or third-party profiling services on this website.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className="space-y-4">
              <h2 className="font-headline-md text-3xl uppercase">Information We Collect</h2>
              <p className="font-body-md text-on-surface/70">
                The only personal information we collect is the information you voluntarily submit through our contact form, such as your name, email address, and project details.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.15}>
            <section className="space-y-4">
              <h2 className="font-headline-md text-3xl uppercase">How We Use Your Information</h2>
              <p className="font-body-md text-on-surface/70">
                We use contact form submissions only to respond to your inquiry and communicate with you about photography services you request.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.2}>
            <section className="space-y-4">
              <h2 className="font-headline-md text-3xl uppercase">Data Sharing</h2>
              <p className="font-body-md text-on-surface/70">
                We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.25}>
            <section className="space-y-4">
              <h2 className="font-headline-md text-3xl uppercase">Data Retention</h2>
              <p className="font-body-md text-on-surface/70">
                We retain contact form details only as long as needed to manage communications and provide requested services.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.3}>
            <section className="space-y-4">
              <h2 className="font-headline-md text-3xl uppercase">Your Choices</h2>
              <p className="font-body-md text-on-surface/70">
                If you would like us to update or delete your submitted information, please contact us at hello@luckyphotography.com.
              </p>
            </section>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
