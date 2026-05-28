import { motion } from 'motion/react';

export function Experience() {
  const highlights = [
    'Led customer experience initiatives across spa operations',
    'Managed team coordination and collaborative problem-solving',
    'Created calm, welcoming environments for diverse clientele',
    'Developed strong communication and empathy skills',
    'Supervised operations and quality standards',
    'Built lasting client relationships through attentive service'
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="sticky top-32">
              <h2 className="text-5xl md:text-6xl font-medium text-foreground">
                Experience
              </h2>
              <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-8 bottom-8 w-px bg-border hidden md:block" />

              {/* Experience Card */}
              <div className="relative md:pl-12 space-y-8">
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] top-8 w-2 h-2 bg-primary rounded-full hidden md:block" />

                <div className="bg-card border border-border rounded-3xl p-8 md:p-10 space-y-6 hover:border-primary/30 transition-colors duration-300">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl md:text-3xl font-medium text-foreground">
                        Spa Therapist / Supervisor / Assistant Manager
                      </h3>
                    </div>
                    <div className="text-primary font-medium">2020 – 2025</div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Progressed from Spa Therapist to Assistant Spa Manager, gaining extensive experience in customer-centered
                    service, team leadership, and creating welcoming experiences. This role developed core competencies
                    directly transferable to UX design: deep empathy for user needs, collaborative problem-solving,
                    communication across diverse audiences, and creating calm, accessible environments.
                  </p>

                  {/* Highlights */}
                  <div className="pt-4">
                    <h4 className="text-sm text-primary tracking-[0.3em] uppercase mb-4">
                      Transferable UX Skills
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-foreground leading-relaxed">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Education */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="bg-card border border-border rounded-3xl p-8 md:p-10 space-y-4 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="absolute left-[-4px] w-2 h-2 bg-primary rounded-full hidden md:block" />

                  <h3 className="text-2xl md:text-3xl font-medium text-foreground">
                    UX Design Graduate
                  </h3>
                  <div className="text-primary font-medium">Dundalk Institute of Technology</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive UX design education focusing on user research, accessibility, prototyping, and
                    user-centered design principles.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
