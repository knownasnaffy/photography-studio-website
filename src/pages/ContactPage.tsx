import { FadeIn } from '../components/ui/FadeIn';
import { Button } from '../components/ui/Button';

export function ContactPage() {
  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

        <div>
          <FadeIn>
            <h1 className="font-display-lg text-5xl md:text-7xl uppercase mb-8 leading-none">Let's <br/>Connect.</h1>
            <p className="font-body-lg text-on-surface/70 mb-12">
              Whether you're planning an intimate elopement or a global commercial campaign, we'd love to hear your vision.
            </p>

            <div className="space-y-8 mb-16">
              <div>
                <h3 className="font-label-sm text-primary uppercase tracking-[0.2em] mb-2">Email</h3>
                <a href="mailto:hello@luckyphotography.com" className="font-headline-md text-2xl uppercase hover:text-primary transition-colors">
                  hello@luckyphotography.com
                </a>
              </div>
              <div>
                <h3 className="font-label-sm text-primary uppercase tracking-[0.2em] mb-2">Studio</h3>
                <p className="font-body-md text-on-surface/70">
                  123 Arts District Blvd.<br/>Los Angeles, CA 90013
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div>
          <FadeIn delay={0.2}>
            <form className="space-y-8 bg-surface-container/30 p-8 md:p-12 border thin-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="font-label-sm text-on-surface/60 uppercase mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="bg-transparent border-b thin-border py-2 px-3 text-on-surface font-body-md transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="font-label-sm text-on-surface/60 uppercase mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="bg-transparent border-b thin-border py-2 px-3 text-on-surface font-body-md transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="font-label-sm text-on-surface/60 uppercase mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="bg-transparent border-b thin-border py-2 px-3 text-on-surface font-body-md transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="inquiryType" className="font-label-sm text-on-surface/60 uppercase mb-2">Inquiry Type</label>
                <select
                  id="inquiryType"
                  className="bg-transparent border-b thin-border py-2 px-3 text-on-surface font-body-md transition-colors focus:outline-none focus:border-b-primary"
                >
                  <option className="bg-background">Wedding / Elopement</option>
                  <option className="bg-background">Portrait Session</option>
                  <option className="bg-background">Commercial / Editorial</option>
                  <option className="bg-background">Other</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="font-label-sm text-on-surface/60 uppercase mb-2">Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  className="bg-transparent border-b thin-border py-2 px-3 text-on-surface font-body-md transition-colors resize-none"
                  placeholder="Tell us about your timeline, location, and vision..."
                ></textarea>
              </div>

              <Button type="button" variant="primary" className="w-full mt-4">
                Send Inquiry
              </Button>
            </form>
          </FadeIn>
        </div>

      </div>
    </div>
  );
}
