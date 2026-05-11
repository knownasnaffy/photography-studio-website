import { FadeIn } from '../components/ui/FadeIn';
import { Button } from '../components/ui/Button';
import { Camera } from 'lucide-react'

export function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
            alt="Cinematic photography subject"
            className="object-cover w-full h-full opacity-40 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <FadeIn delay={0.2} direction="down">
            <h2 className="font-label-sm uppercase tracking-[0.3em] text-primary mb-8">
              Based in Ludhiana, Punjab
            </h2>
          </FadeIn>

          <FadeIn delay={0.4} direction="up" className="mb-8">
            <h1 className="font-display-lg text-5xl md:text-[8rem] uppercase leading-[0.9]">
              Lucky <br/> Photography
            </h1>
          </FadeIn>

          <FadeIn delay={0.6} direction="up">
            <p className="font-body-lg max-w-2xl mx-auto text-on-surface/80 mb-12">
              We capture moments that feel like a movie. High-end editorial and cinematic storytelling for your most important days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asLink to="/gallery" variant="primary">
                View Gallery
              </Button>
              <Button asLink to="/contact" variant="outline">
                Inquire Now
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <FadeIn direction="right">
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
              alt="Photographer holding camera"
              className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </FadeIn>

          <div className="flex flex-col justify-center">
            <FadeIn delay={0.2} direction="left">
              <h2 className="font-label-sm text-primary mb-6 uppercase tracking-[0.2em]">Our Philosophy</h2>
              <h3 className="font-headline-lg mb-8 uppercase leading-tight">Every frame <br/>is a story.</h3>
              <p className="font-body-md text-on-surface/70 mb-6">
                We believe in the power of the printed image and the immortality of a captured moment. Our style blends classic editorial fashion with authentic photojournalism.
              </p>
              <p className="font-body-md text-on-surface/70 mb-12">
                We don't just take pictures; we craft cinematic stills of your reality. From intimate elopements to grand celebrations, we look for the light, the emotion, and the lucky accidents that make a photo unforgettable.
              </p>
              <Button asLink to="/contact" variant="ghost" className="self-start uppercase">
                Meet the artist &rarr;
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-32 bg-surface-container/30 border-y thin-border px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="font-label-sm text-primary mb-4 uppercase tracking-[0.2em]">Selected Works</h2>
                <h3 className="font-headline-lg uppercase">Recent Projects</h3>
              </div>
              <Button asLink to="/gallery" variant="outline">
                All Projects
              </Button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Golden Hour Vows", category: "Wedding", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" },
              { title: "The Elopement", category: "Wedding", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" },
              { title: "Raw & Real", category: "Portrait", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden mb-6 h-[500px] border thin-border">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-headline-md text-2xl uppercase group-hover:text-primary transition-colors">{item.title}</h4>
                    <span className="font-label-sm text-on-surface/50 uppercase">{item.category}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="services" className="py-40 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-display-lg text-4xl md:text-6xl uppercase mb-8">Ready to create <br/> something beautiful?</h2>
            <p className="font-body-lg text-on-surface/70 mb-12">
              Currently booking commissions for 2024 and 2025 worldwide.
            </p>
            <Button asLink to="/contact" variant="primary" className="text-xl px-12 py-6">
              Book Your Session
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
