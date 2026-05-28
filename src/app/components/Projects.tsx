import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import burrenFlowerImg from '../../imports/image.png';
import accessibilityImg from '../../imports/image-4.png';
import bakeryImg from '../../imports/image-2.png';
import hookedImg from '../../imports/image-3.png';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  featured?: boolean;
  accentColor?: string;
  route: string;
}

const projects: Project[] = [
  {
    title: 'Burren Flower Identification App',
    category: 'Mobile UX/UI Design',
    description: 'A gamified mobile experience for identifying wildflowers in Ireland\'s Burren region. Features include map integration, flower scanning, collection systems, and progression mechanics. Designed with a nature-inspired UI and strong focus on accessibility and intuitive interaction.',
    tags: ['UX Research', 'Mobile Design', 'Gamification', 'Accessibility'],
    image: burrenFlowerImg,
    featured: true,
    accentColor: '#C9B8A0',
    route: '/case-studies/burren-flower-app'
  },
  {
    title: 'Neurodivergent Accessibility Web Project',
    category: 'Inclusive Design',
    description: 'A responsive website designed for ADHD, autism, and anxiety-friendly experiences. Implemented calming interactions, focus toggles, and supportive notifications. Built with HTML, CSS, and JavaScript, emphasizing thoughtful UX reasoning and inclusive design principles.',
    tags: ['Accessibility', 'Web Development', 'Inclusive Design', 'User Research'],
    image: accessibilityImg,
    accentColor: '#B4A5C7',
    route: '/case-studies/accessibility-project'
  },
  {
    title: 'Hooked – Crochet Dating App',
    category: 'Mobile UX/UI Design',
    description: 'A cozy modern dating app connecting crochet enthusiasts. Features a warm, soft visual identity with onboarding flows, messaging systems, user profiles, and matching algorithms. Designed as a community-focused and accessible experience.',
    tags: ['UX Design', 'Prototyping', 'Community Design', 'Branding'],
    image: hookedImg,
    accentColor: '#D4A5A5',
    route: '/case-studies/hooked-app'
  },
  {
    title: 'Bakery Business Website',
    category: 'Responsive Web Design',
    description: 'A responsive HTML/CSS website for a local baking business. Led the project from research through implementation, creating branding aligned with the artisan aesthetic. Independent project showcasing end-to-end UX process.',
    tags: ['Web Design', 'HTML/CSS', 'Branding', 'User Research'],
    image: bakeryImg,
    accentColor: '#D9B5A3',
    route: '/case-studies/bakery-website'
  }
];

export function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-32 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-medium text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className={`group relative overflow-hidden rounded-3xl bg-card border transition-all duration-500 ${
                project.featured ? 'lg:h-[600px]' : 'lg:h-[500px]'
              }`}
              style={{ borderColor: project.accentColor + '40' }}
            >
              <div className="grid lg:grid-cols-2 h-full">
                {/* Image Column */}
                <div className="relative overflow-hidden order-2 lg:order-1 h-64 lg:h-full">
                  
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Column */}
                <div className="relative p-8 md:p-12 flex flex-col justify-center order-1 lg:order-2">
                  <div className="space-y-6">
                    <div>
                      <div
                        className="text-sm tracking-[0.3em] uppercase mb-3 font-medium"
                        style={{ color: project.accentColor }}
                      >
                        {project.category}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-medium text-foreground mb-4 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 border rounded-full text-sm text-foreground transition-all duration-300 hover:border-opacity-80"
                          style={{
                            backgroundColor: project.accentColor + '10',
                            borderColor: project.accentColor + '30'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <Link
                      to={project.route}
                      className="inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 mt-4 font-medium"
                      style={{ color: project.accentColor }}
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
