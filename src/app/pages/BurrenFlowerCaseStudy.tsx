import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { motion } from 'motion/react';
import burrenFlowerImg from '../../imports/image.png';

export function BurrenFlowerCaseStudy() {
  return (
    <CaseStudyLayout
      title="Burren Flower Identification App"
      category="Mobile UX/UI Design"
      accentColor="#C9B8A0"
      heroImage={burrenFlowerImg}
      overview="A gamified mobile experience for identifying wildflowers in Ireland's Burren region, combining nature education with engaging interaction design."
      role="UX/UI Designer, Researcher"
      timeline="8 weeks"
      tools={['Figma', 'Adobe XD', 'User Testing', 'Prototyping']}
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
          The Burren region in Ireland is home to unique flora, but many visitors struggle to identify and learn about
          the wildflowers they encounter. Traditional field guides are cumbersome, and existing apps lack engaging,
          accessible experiences that encourage exploration and learning.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The challenge was to create a mobile app that makes flower identification intuitive, educational, and
          enjoyable while respecting the natural environment and ensuring accessibility for all users.
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
        <h2 className="text-4xl font-medium text-foreground mb-6">Research & Discovery</h2>
        <div className="space-y-6">
          <div className="bg-card border border-[#C9B8A040] rounded-2xl p-8">
            <h3 className="text-xl font-medium text-foreground mb-4">User Interviews</h3>
            <p className="text-muted-foreground leading-relaxed">
              Conducted interviews with hikers, nature enthusiasts, and botany students to understand their current
              methods of plant identification and pain points with existing solutions.
            </p>
          </div>
          <div className="bg-card border border-[#C9B8A040] rounded-2xl p-8">
            <h3 className="text-xl font-medium text-foreground mb-4">Key Insights</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C9B8A0] rounded-full mt-2 flex-shrink-0" />
                <span>Users wanted quick, accurate identification without carrying physical guidebooks</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C9B8A0] rounded-full mt-2 flex-shrink-0" />
                <span>Gamification elements increased engagement and learning retention</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C9B8A0] rounded-full mt-2 flex-shrink-0" />
                <span>Location-based features helped users discover flowers in specific areas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C9B8A0] rounded-full mt-2 flex-shrink-0" />
                <span>Accessibility features were essential for users with varying abilities</span>
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
        <h2 className="text-4xl font-medium text-foreground mb-6">Design Solution</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-foreground mb-4">Core Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-[#C9B8A040] rounded-2xl p-6">
                <h4 className="text-lg font-medium text-foreground mb-2">Flower Scanning</h4>
                <p className="text-muted-foreground text-sm">
                  Camera-based identification using image recognition to instantly identify flowers
                </p>
              </div>
              <div className="bg-card border border-[#C9B8A040] rounded-2xl p-6">
                <h4 className="text-lg font-medium text-foreground mb-2">Map Integration</h4>
                <p className="text-muted-foreground text-sm">
                  Location-based discovery showing nearby flowers and popular viewing areas
                </p>
              </div>
              <div className="bg-card border border-[#C9B8A040] rounded-2xl p-6">
                <h4 className="text-lg font-medium text-foreground mb-2">Collection System</h4>
                <p className="text-muted-foreground text-sm">
                  Gamified collection mechanic encouraging users to discover all Burren species
                </p>
              </div>
              <div className="bg-card border border-[#C9B8A040] rounded-2xl p-6">
                <h4 className="text-lg font-medium text-foreground mb-2">Progress Tracking</h4>
                <p className="text-muted-foreground text-sm">
                  Visual progression system with achievements and learning milestones
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-foreground mb-4">Accessibility Considerations</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Designed with inclusive principles from the start, including high-contrast nature-inspired colors,
              screen reader compatibility, voice-guided identification, and adjustable text sizes for outdoor visibility.
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
        <h2 className="text-4xl font-medium text-foreground mb-6">Impact & Learnings</h2>
        <div className="bg-card border border-[#C9B8A040] rounded-2xl p-8 space-y-6">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-3">Key Learnings</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C9B8A0] rounded-full mt-2 flex-shrink-0" />
                <span>Balancing gamification with educational value required careful user testing</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C9B8A0] rounded-full mt-2 flex-shrink-0" />
                <span>Nature-inspired UI design enhanced user connection to the environment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C9B8A0] rounded-full mt-2 flex-shrink-0" />
                <span>Offline functionality was crucial for use in remote natural areas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C9B8A0] rounded-full mt-2 flex-shrink-0" />
                <span>Accessibility features benefited all users, not just those with disabilities</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>
    </CaseStudyLayout>
  );
}
