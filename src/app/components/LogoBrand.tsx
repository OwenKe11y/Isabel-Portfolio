import { motion } from 'motion/react';

export function LogoBrand() {
  // Placeholder logos - these would be replaced with actual logo images
  const logos = [
    { name: 'Dundalk IT', width: 'w-32' },
    { name: 'Balsamiq', width: 'w-28' },
    { name: 'Google Analytics', width: 'w-36' },
    { name: 'Figma', width: 'w-24' },
    { name: 'Adobe XD', width: 'w-28' },
    { name: 'WordPress', width: 'w-32' }
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-sm text-primary tracking-[0.3em] uppercase mb-4">
            Tools & Platforms
          </div>
          <h3 className="text-2xl text-muted-foreground">
            Selected work and education
          </h3>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className={`${logo.width} h-16 bg-muted/30 rounded-xl flex items-center justify-center border border-border group-hover:border-primary/30 transition-all duration-300 group-hover:bg-muted/50`}>
                <span className="text-xs text-muted-foreground font-medium text-center px-3">
                  {logo.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
