import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { FadeIn } from '../components/ui/FadeIn';
import { portfolioItems } from '../data/portfolio';

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(portfolioItems.map((item) => item.category)))];

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto pb-32">
      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="font-display-lg text-5xl md:text-7xl uppercase mb-6">Archive</h1>
          <p className="font-body-lg text-on-surface/60 max-w-2xl mx-auto">
            A curated selection of our favorite moments captured on film and digital.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-label-sm uppercase tracking-widest px-6 py-2 border transition-shutter ${
                activeCategory === category
                  ? 'bg-white text-black border-white'
                  : 'thin-border hover:bg-white hover:text-black hover:border-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link to={`/project/${item.id}`} className="block group relative overflow-hidden bg-surface-container aspect-[4/5] border thin-border">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 md:items-center md:justify-center md:p-0 md:bg-black/60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="font-headline-md text-white uppercase transition-transform duration-500 md:translate-y-4 md:group-hover:translate-y-0 focus-ring">{item.title}</h3>
                  <p className="font-label-sm text-white/70 uppercase mt-2 tracking-[0.2em]">{item.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
