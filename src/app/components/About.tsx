import { motion } from 'motion/react';
import { BookOpen, Scissors, Flower2 } from 'lucide-react';

export function About() {
  const traits = [
    'Empathetic',
    'Calm',
    'Organised',
    'Collaborative',
    'Detail-oriented',
    'User-focused'
  ];

  const interests = [
    { icon: BookOpen, label: 'Reading', color: '#D4A5A5' },
    { icon: Scissors, label: 'Crochet', color: '#B4A5C7' },
    { icon: Flower2, label: 'Nature-inspired creativity', color: '#C9B8A0' }
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
                About
              </h2>
              <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="lg:col-span-9 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                Recent UX Design graduate from Dundalk Institute of Technology with a strong foundation in creating accessible,
                user-centered digital experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a background in spa management and customer experience, I bring a deeply empathetic and people-focused
                approach to design. My work centers on understanding user needs, testing assumptions, and creating intuitive
                interfaces that prioritize accessibility and inclusivity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about usability testing, collaborative design processes, and building digital products that
                feel calm, considered, and meaningful. Whether working on accessibility features, gamified experiences, or
                community-focused platforms, I approach each project with careful attention to user research and thoughtful
                design decisions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Outside of design, I find inspiration in reading, crochet, and nature — all of which inform my calm,
                thoughtful design philosophy and commitment to creating accessible, meaningful experiences.
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid md:grid-cols-3 gap-4"
            >
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + index * 0.1, duration: 0.5 }}
                    className="bg-card border border-border rounded-2xl p-6 hover:border-opacity-50 transition-all group"
                    style={{ borderColor: interest.color + '40' }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                      style={{ backgroundColor: interest.color + '20' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: interest.color }} />
                    </div>
                    <span className="text-foreground text-sm">{interest.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Traits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-8"
            >
              <h3 className="text-sm text-primary tracking-[0.3em] uppercase mb-6">
                Approach
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {traits.map((trait, index) => (
                  <motion.div
                    key={trait}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    className="bg-card border border-border rounded-2xl px-6 py-4 hover:border-primary/50 transition-colors"
                  >
                    <span className="text-foreground font-medium">{trait}</span>
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
