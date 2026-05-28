import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Sparkles, ArrowRight } from 'lucide-react';

export function ExperimentalWorkCTA() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-secondary border border-border p-12 md:p-16"
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-primary" />
                <h2 className="text-4xl md:text-5xl font-medium text-foreground">
                  Experimental Work
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore creative side projects, design experiments, and visual explorations including
                book covers, social media design, podcast artwork, typography, and more.
              </p>

              <Link
                to="/experimental-work"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 hover:gap-4 group"
              >
                <span className="font-medium">View Creative Projects</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right - Preview Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-card border rounded-2xl p-6 hover:border-[#D4A5A5] transition-colors"
                style={{ borderColor: '#D4A5A540' }}
              >
                <div className="w-10 h-10 rounded-full bg-[#D4A5A520] flex items-center justify-center mb-3">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-sm font-medium text-foreground">Book Covers</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-card border rounded-2xl p-6 hover:border-[#B4A5C7] transition-colors mt-8"
                style={{ borderColor: '#B4A5C740' }}
              >
                <div className="w-10 h-10 rounded-full bg-[#B4A5C720] flex items-center justify-center mb-3">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-sm font-medium text-foreground">Social Media</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-card border rounded-2xl p-6 hover:border-[#C9B8A0] transition-colors"
                style={{ borderColor: '#C9B8A040' }}
              >
                <div className="w-10 h-10 rounded-full bg-[#C9B8A020] flex items-center justify-center mb-3">
                  <span className="text-2xl">🎙️</span>
                </div>
                <h3 className="text-sm font-medium text-foreground">Podcast Art</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-card border rounded-2xl p-6 hover:border-[#D9B5A3] transition-colors mt-8"
                style={{ borderColor: '#D9B5A340' }}
              >
                <div className="w-10 h-10 rounded-full bg-[#D9B5A320] flex items-center justify-center mb-3">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-sm font-medium text-foreground">Typography</h3>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
