import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-12 lg:px-24 py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Main Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="space-y-8 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground max-w-4xl leading-tight">
              Currently open to UX, accessibility, and user-centered design opportunities.
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full" />
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.a
              href="mailto:isabel@example.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="group bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Email</div>
                <div className="text-lg font-medium text-foreground">isabel@example.com</div>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/isabelotoole"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="group bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Connect</div>
                <div className="text-lg font-medium text-foreground">LinkedIn</div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-card border border-border rounded-3xl p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Location</div>
                <div className="text-lg font-medium text-foreground">Galway, Ireland</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-muted-foreground">
            © {currentYear} Isabel O'Toole. All rights reserved.
          </div>
          <div className="text-muted-foreground text-sm">
            Designed with accessibility and intention
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
