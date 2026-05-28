import { motion } from 'motion/react';

const uxSkills = [
  { name: 'User Research', color: '#D4C5A0' },
  { name: 'Wireframing', color: '#D4A5A5' },
  { name: 'Prototyping', color: '#B4A5C7' },
  { name: 'Usability Testing', color: '#C9B8A0' },
  { name: 'Accessibility Design', color: '#D9B5A3' },
  { name: 'Interaction Design', color: '#C89B88' },
  { name: 'Personas & User Flows', color: '#D4C5A0' },
  { name: 'Responsive Design', color: '#D4A5A5' }
];

const tools = [
  { name: 'Figma', color: '#B4A5C7' },
  { name: 'Adobe XD', color: '#C9B8A0' },
  { name: 'Photoshop', color: '#D9B5A3' },
  { name: 'WordPress', color: '#C89B88' },
  { name: 'VS Code', color: '#D4C5A0' },
  { name: 'GitHub', color: '#D4A5A5' },
  { name: 'Google Analytics', color: '#B4A5C7' },
  { name: 'HTML & CSS', color: '#C9B8A0' }
];

export function Skills() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-32 bg-secondary/30">
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
                Skills
              </h2>
              <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
            </div>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <div className="lg:col-span-9 space-y-16">
            {/* UX Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-sm text-primary tracking-[0.3em] uppercase mb-8">
                UX Capabilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {uxSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                    className="group relative overflow-hidden bg-card border rounded-2xl p-6 hover:border-opacity-70 transition-all duration-300"
                    style={{ borderColor: skill.color + '30' }}
                  >
                    <div className="relative z-10">
                      <div className="text-lg font-medium text-foreground">
                        {skill.name}
                      </div>
                    </div>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: skill.color + '08' }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-sm text-primary tracking-[0.3em] uppercase mb-8">
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                    className="bg-card border rounded-2xl p-5 text-center hover:border-opacity-70 transition-all duration-300"
                    style={{
                      borderColor: tool.color + '30',
                      backgroundColor: tool.color + '05'
                    }}
                  >
                    <span className="text-foreground font-medium">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
