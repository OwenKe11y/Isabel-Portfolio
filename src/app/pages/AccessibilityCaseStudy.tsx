import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { motion } from 'motion/react';
import accessibilityImg from '../../imports/image-4.png';

export function AccessibilityCaseStudy() {
  return (
    <CaseStudyLayout
      title="Neurodivergent Accessibility Web Project"
      category="Inclusive Design"
      accentColor="#B4A5C7"
      heroImage={accessibilityImg}
      overview="A responsive website designed specifically for neurodivergent users, creating calm, supportive digital experiences for people with ADHD, autism, and anxiety."
      role="UX Designer, Web Developer"
      timeline="10 weeks"
      tools={['HTML', 'CSS', 'JavaScript', 'User Testing', 'Accessibility Audits']}
    >
      {/* Problem Statement */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-4xl font-medium text-foreground mb-6">The Challenge</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Most websites are designed for neurotypical users, often creating overwhelming, anxiety-inducing experiences
          for neurodivergent individuals. Bright colors, animations, complex navigation, and sensory overload make
          digital spaces inaccessible for many.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The goal was to design and build a responsive website that prioritizes the needs of neurodivergent users
          through thoughtful interaction design, calming visual elements, and customizable accessibility features.
        </p>
      </motion.section>

      {/* Research */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-4xl font-medium text-foreground mb-6">Research & Understanding</h2>
        <div className="space-y-6">
          <div className="bg-card border border-[#B4A5C740] rounded-2xl p-8">
            <h3 className="text-xl font-medium text-foreground mb-4">User Needs Analysis</h3>
            <p className="text-muted-foreground leading-relaxed">
              Extensive research into neurodivergent user experiences, including interviews with individuals with
              ADHD, autism, and anxiety disorders, plus review of existing accessibility guidelines and studies.
            </p>
          </div>
          <div className="bg-card border border-[#B4A5C740] rounded-2xl p-8">
            <h3 className="text-xl font-medium text-foreground mb-4">Design Principles</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#B4A5C7] rounded-full mt-2 flex-shrink-0" />
                <span>Reduce sensory overload through calm color palettes and minimal animations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#B4A5C7] rounded-full mt-2 flex-shrink-0" />
                <span>Provide user control over interface elements and notifications</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#B4A5C7] rounded-full mt-2 flex-shrink-0" />
                <span>Create predictable, consistent navigation patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#B4A5C7] rounded-full mt-2 flex-shrink-0" />
                <span>Support different focus and attention patterns</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Design Process */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-4xl font-medium text-foreground mb-6">Inclusive Design Features</h2>
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border border-[#B4A5C740] rounded-2xl p-6">
              <h4 className="text-lg font-medium text-foreground mb-2">Focus Mode Toggle</h4>
              <p className="text-muted-foreground text-sm">
                Users can enable a distraction-free mode that removes non-essential elements and simplifies the interface
              </p>
            </div>
            <div className="bg-card border border-[#B4A5C740] rounded-2xl p-6">
              <h4 className="text-lg font-medium text-foreground mb-2">Calming Interactions</h4>
              <p className="text-muted-foreground text-sm">
                Gentle transitions, soft colors, and optional reduced motion for anxiety-friendly browsing
              </p>
            </div>
            <div className="bg-card border border-[#B4A5C740] rounded-2xl p-6">
              <h4 className="text-lg font-medium text-foreground mb-2">Supportive Notifications</h4>
              <p className="text-muted-foreground text-sm">
                Kind, patient messaging with user-controlled timing and frequency settings
              </p>
            </div>
            <div className="bg-card border border-[#B4A5C740] rounded-2xl p-6">
              <h4 className="text-lg font-medium text-foreground mb-2">Customizable Layout</h4>
              <p className="text-muted-foreground text-sm">
                Adjustable text sizes, spacing, and color contrasts to suit individual sensory needs
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-foreground mb-4">Technical Implementation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Built with HTML, CSS, and JavaScript, emphasizing semantic HTML for screen reader compatibility,
              CSS custom properties for user-controlled theming, and vanilla JavaScript for lightweight,
              predictable interactions without framework overhead.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Outcomes */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-4xl font-medium text-foreground mb-6">Impact & Reflection</h2>
        <div className="bg-card border border-[#B4A5C740] rounded-2xl p-8 space-y-6">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-3">What I Learned</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#B4A5C7] rounded-full mt-2 flex-shrink-0" />
                <span>Inclusive design requires deep empathy and continuous user feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#B4A5C7] rounded-full mt-2 flex-shrink-0" />
                <span>Giving users control over their experience is more valuable than prescriptive solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#B4A5C7] rounded-full mt-2 flex-shrink-0" />
                <span>Accessibility features designed for neurodivergent users often benefit everyone</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#B4A5C7] rounded-full mt-2 flex-shrink-0" />
                <span>Testing with real users from diverse neurodivergent communities is essential</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed italic">
              This project deepened my commitment to accessibility-first design and reinforced that thoughtful
              UX design should center the needs of those most impacted by design decisions.
            </p>
          </div>
        </div>
      </motion.section>
    </CaseStudyLayout>
  );
}
