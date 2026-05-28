import { motion } from 'motion/react';
import { Users, LayoutGrid, MessageSquare } from 'lucide-react';

interface CollabProject {
  title: string;
  description: string;
  highlights: string[];
  icon: typeof Users;
  color: string;
}

const projects: CollabProject[] = [
  {
    title: 'Gym Website Redesign',
    description: 'Team UX redesign project focused on improving navigation and user engagement through data-driven design decisions.',
    highlights: [
      'Created wireframes using Balsamiq',
      'Conducted analytics research with Google Analytics',
      'Improved navigation structure and user flow',
      'Collaborative team-based UX process'
    ],
    icon: Users,
    color: '#D4A5A5'
  },
  {
    title: 'Business Prototype Project',
    description: 'Collaborative UX and business project with focus on visual design systems and team coordination.',
    highlights: [
      'Created icon system and visual assets',
      'Organized layout structure and information hierarchy',
      'Collaborated during ideation and planning phases',
      'Aligned design with business objectives'
    ],
    icon: LayoutGrid,
    color: '#B4A5C7'
  },
  {
    title: 'Entrepreneurship Research Project',
    description: 'Research-focused project interviewing a local bakery entrepreneur about business growth during COVID-19.',
    highlights: [
      'Conducted user/stakeholder interviews',
      'Analyzed business needs and user requirements',
      'Documented insights and communication strategies',
      'Applied research methods to real-world context'
    ],
    icon: MessageSquare,
    color: '#C9B8A0'
  }
];

export function CollaborativeProjects() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-medium text-foreground mb-4">
            Collaborative Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Team-based work showcasing collaboration, research, and user-centered problem-solving.
          </p>
          <div className="mt-6 h-1 w-16 bg-primary rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group bg-card border border-border rounded-3xl p-8 hover:border-opacity-50 transition-all duration-300 flex flex-col h-full"
                style={{ borderColor: project.color + '40' }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: project.color + '20' }}
                >
                  <Icon className="w-7 h-7" style={{ color: project.color }} />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-medium text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 pt-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: project.color }}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
