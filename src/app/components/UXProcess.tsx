import { motion } from 'motion/react';
import { Search, Users, PenTool, Layout, TestTube, UserCheck, RefreshCw } from 'lucide-react';

interface ProcessStep {
  title: string;
  icon: typeof Search;
  color: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    title: 'Research',
    icon: Search,
    color: '#D4C5A0',
    description: 'Understanding user needs through interviews, surveys, and analysis'
  },
  {
    title: 'Personas',
    icon: Users,
    color: '#D4A5A5',
    description: 'Creating user personas to guide design decisions'
  },
  {
    title: 'Wireframing',
    icon: PenTool,
    color: '#B4A5C7',
    description: 'Sketching layouts and information architecture'
  },
  {
    title: 'Prototyping',
    icon: Layout,
    color: '#C9B8A0',
    description: 'Building interactive prototypes for testing and validation'
  },
  {
    title: 'Testing',
    icon: TestTube,
    color: '#D9B5A3',
    description: 'Conducting usability tests to identify pain points'
  },
  {
    title: 'Accessibility',
    icon: UserCheck,
    color: '#C89B88',
    description: 'Ensuring inclusive design for all users'
  },
  {
    title: 'Iteration',
    icon: RefreshCw,
    color: '#D4C5A0',
    description: 'Refining designs based on feedback and insights'
  }
];

export function UXProcess() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-32 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-medium text-foreground mb-6">
            UX Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A thoughtful, user-centered approach to design that prioritizes accessibility,
            research, and continuous improvement.
          </p>
          <div className="mt-6 h-1 w-16 bg-primary rounded-full mx-auto" />
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div
                  className="bg-card border border-border rounded-3xl p-8 h-full hover:border-opacity-50 transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: step.color + '40' }}
                >
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: step.color + '20' }}
                  >
                    <Icon className="w-8 h-8" style={{ color: step.color }} />
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-6 right-6 text-4xl font-medium opacity-10">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-medium text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (desktop only) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-3 w-6 h-px bg-border" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
