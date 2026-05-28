import { motion } from "motion/react";
import { type ReactNode } from "react";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

interface CaseStudyLayoutProps {
  title: string;
  category: string;
  accentColor: string;
  heroImage: string;
  overview: string;
  role: string;
  timeline: string;
  tools: string[];
  children: ReactNode;
}

export function CaseStudyLayout({
  title,
  category,
  accentColor,
  heroImage,
  overview,
  role,
  timeline,
  tools,
  children,
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div
              className="text-sm tracking-[0.3em] uppercase font-medium"
              style={{ color: accentColor }}
            >
              {category}
            </div>
            <h1 className="text-5xl md:text-7xl font-medium text-foreground">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              {overview}
            </p>
          </motion.div>

          {/* Project Details Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            <div>
              <div className="text-sm text-muted-foreground mb-2">Role</div>
              <div className="text-lg text-foreground font-medium">{role}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Timeline</div>
              <div className="text-lg text-foreground font-medium">
                {timeline}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Tools</div>
              <div className="text-lg text-foreground font-medium">
                {tools.join(", ")}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="px-6 md:px-12 lg:px-24 pb-20"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl overflow-hidden border"
            style={{ borderColor: accentColor + "40" }}
          >
            <img src={heroImage} alt={title} className="w-full h-auto" />
          </div>
        </div>
      </motion.section>

      {/* Case Study Content */}
      <div className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-4xl mx-auto">{children}</div>
      </div>

      <Footer />
    </div>
  );
}
