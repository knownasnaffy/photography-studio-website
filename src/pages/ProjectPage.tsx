import { useParams, Link } from 'react-router-dom';
import { FadeIn } from '../components/ui/FadeIn';
import { portfolioItems } from '../data/portfolio';
import { Button } from '../components/ui/Button';
import { Seo } from '../components/seo/Seo';

export function ProjectPage() {
  const { id } = useParams();
  const project = portfolioItems.find(p => p.id === Number(id));

  if (!project) {
    return (
      <>
        <Seo
          title="Project Not Found"
          description="The portfolio project you are looking for does not exist. Browse all photography projects in the Lucky Photography archive."
          path="/gallery"
          noIndex
        />
        <div className="pt-32 px-6 max-w-7xl mx-auto pb-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="font-display-lg text-4xl uppercase mb-4">Project Not Found</h1>
          <Button asLink to="/gallery" variant="outline">
            Back to Archive
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <Seo
        title={`${project.title} | Photography Project`}
        description={`${project.description} Explore the full ${project.category.toLowerCase()} story from Lucky Photography.`}
        path={`/project/${project.id}`}
        image={project.img}
        type="article"
        keywords={[
          `${project.category.toLowerCase()} photography`,
          `${project.location} photographer`,
          `${project.client} photography project`,
          'cinematic photo story',
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          image: project.images,
          creator: {
            '@type': 'Organization',
            name: 'Lucky Photography',
            url: 'https://www.luckyphotography.com/',
          },
          locationCreated: project.location,
          datePublished: project.date,
          url: `https://www.luckyphotography.com/project/${project.id}`,
        }}
      />
      <div className="pb-32">
      {/* Project Hero */}
      <section className="relative h-[60vh] w-full flex flex-col justify-end p-6 md:p-16 border-b thin-border">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover opacity-30 grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto">
          <FadeIn direction="up">
            <Link to="/gallery" className="inline-flex items-center text-primary font-label-sm uppercase tracking-widest hover:text-white transition-colors mb-8">
              &larr; Back to Archive
            </Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <h1 className="font-display-lg text-5xl md:text-8xl uppercase leading-none mb-4">{project.title}</h1>
                <p className="font-label-sm uppercase tracking-[0.2em] text-on-surface/60">{project.category}</p>
              </div>

              <div className="grid grid-cols-2 gap-x-12 gap-y-4 font-label-sm uppercase tracking-widest text-on-surface/80">
                <div>
                  <span className="block text-primary/70 mb-1">Client</span>
                  <span>{project.client}</span>
                </div>
                <div>
                  <span className="block text-primary/70 mb-1">Date</span>
                  <span>{project.date}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-primary/70 mb-1">Location</span>
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="font-body-lg text-xl md:text-3xl leading-relaxed text-on-surface/80 italic">
            "{project.description}"
          </p>
        </FadeIn>
      </section>

      {/* Project Images */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.images.map((imgSrc, index) => (
            <FadeIn
              key={index}
              delay={index * 0.15}
              className={index === 0 || index === project.images.length - 1 ? "md:col-span-2" : ""}
            >
              <div className="border thin-border bg-surface-container overflow-hidden group">
                <img
                  src={imgSrc}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.02]"
                  style={{ minHeight: index === 0 ? '70vh' : '50vh' }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Next Project / CTA */}
      <section className="mt-32 px-6 text-center">
        <FadeIn>
          <h2 className="font-headline-md text-3xl uppercase mb-8">Inspired?</h2>
          <Button asLink to="/contact" variant="primary">
            Start a Conversation
          </Button>
        </FadeIn>
      </section>
      </div>
    </>
  );
}
