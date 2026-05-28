import { Mail, Linkedin, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column - Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary text-sm tracking-[0.3em] uppercase"
            >
              Junior UX Designer
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground"
            >
              Isabel
              <br />
              O'Toole
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Creating calm, accessible and meaningful digital experiences through thoughtful UX design.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={handleScrollToProjects}
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 hover:gap-4"
          >
            <span className="font-medium">View Projects</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-6 lg:pl-12"
        >
          <div className="space-y-4">
            <a
              href="https://www.linkedin.com/in/isabelotoole"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Connect</div>
                <div className="font-medium">LinkedIn</div>
              </div>
            </a>

            <a
              href="mailto:isabel@example.com"
              className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium">isabel@example.com</div>
              </div>
            </a>

            <div className="flex items-center gap-4 text-foreground">
              <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-medium">Galway, Ireland</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
