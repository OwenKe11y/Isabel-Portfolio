import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles } from 'lucide-react';

interface CreativeProject {
  title: string;
  category: string;
  color: string;
  size?: 'small' | 'medium' | 'large';
  image?: string;
}

const creativeProjects: CreativeProject[] = [
  {
    title: 'Book Cover Concepts',
    category: 'Editorial Design',
    color: '#D4A5A5',
    size: 'large',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80'
  },
  {
    title: 'Social Media Design',
    category: 'Digital Content',
    color: '#B4A5C7',
    size: 'medium'
  },
  {
    title: 'Podcast Cover Design',
    category: 'Branding',
    color: '#C9B8A0',
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&q=80'
  },
  {
    title: 'Typography Explorations',
    category: 'Type Design',
    color: '#D9B5A3',
    size: 'small'
  },
  {
    title: 'Accessibility Experiments',
    category: 'UX Research',
    color: '#C89B88',
    size: 'small'
  },
  {
    title: 'UI Concept Work',
    category: 'Interface Design',
    color: '#D4C5A0',
    size: 'medium'
  }
];

export function ExperimentalWork() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-32 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h2 className="text-5xl md:text-6xl font-medium text-foreground">
              Experimental Work
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Creative explorations, side projects, and visual experiments that push boundaries
            and explore new ideas.
          </p>
          <div className="mt-6 h-1 w-16 bg-primary rounded-full" />
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {creativeProjects.map((project, index) => {
            const sizeClasses = {
              small: 'md:row-span-1',
              medium: 'md:row-span-2',
              large: 'md:row-span-3 lg:col-span-2'
            };

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`group relative overflow-hidden rounded-3xl ${sizeClasses[project.size || 'medium']}`}
              >
                <div
                  className="relative h-full min-h-[280px] border border-border hover:border-opacity-50 transition-all duration-500 rounded-3xl overflow-hidden"
                  style={{ borderColor: project.color + '40' }}
                >
                  {/* Background */}
                  {project.image ? (
                    <>
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    </>
                  ) : (
                    <div
                      className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ backgroundColor: project.color }}
                    />
                  )}

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div
                      className="text-xs tracking-[0.2em] uppercase mb-2 font-medium"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Decorative Element */}
                    <div
                      className="w-12 h-1 mt-4 rounded-full group-hover:w-20 transition-all duration-300"
                      style={{ backgroundColor: project.color }}
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground italic">
            Always exploring new ways to blend creativity with user-centered design principles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
