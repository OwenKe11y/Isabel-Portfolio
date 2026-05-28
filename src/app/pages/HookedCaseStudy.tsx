import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { motion } from 'motion/react';
import hookedImg from '../../imports/image-3.png';

export function HookedCaseStudy() {
  return (
    <CaseStudyLayout
      title="Hooked – Crochet Dating App"
      category="Mobile UX/UI Design"
      accentColor="#D4A5A5"
      heroImage={hookedImg}
      overview="A warm, community-focused dating app that connects crochet enthusiasts through shared creative passion and cozy, intentional interactions."
      role="UX/UI Designer, Branding"
      timeline="6 weeks"
      tools={['Figma', 'Adobe XD', 'Prototyping', 'User Research']}
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
          Traditional dating apps often feel transactional and overwhelming, lacking meaningful connection points
          beyond physical attraction. For niche communities like crochet enthusiasts, there's no dedicated space to
          find romantic partners who share their creative passion.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The challenge was to design a dating app that feels warm, genuine, and community-oriented, using shared
          creative interests as a foundation for meaningful connections rather than superficial matching.
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
        <h2 className="text-4xl font-medium text-foreground mb-6">Research & Insights</h2>
        <div className="space-y-6">
          <div className="bg-card border border-[#D4A5A540] rounded-2xl p-8">
            <h3 className="text-xl font-medium text-foreground mb-4">User Interviews</h3>
            <p className="text-muted-foreground leading-relaxed">
              Conducted interviews with crochet enthusiasts about their dating experiences, creative communities,
              and what they value in relationships. Most expressed frustration with mainstream dating apps and
              wanted connections based on shared hobbies.
            </p>
          </div>
          <div className="bg-card border border-[#D4A5A540] rounded-2xl p-8">
            <h3 className="text-xl font-medium text-foreground mb-4">Key Findings</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D4A5A5] rounded-full mt-2 flex-shrink-0" />
                <span>Users wanted to showcase their crochet projects as conversation starters</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D4A5A5] rounded-full mt-2 flex-shrink-0" />
                <span>Community and friendship were as important as romantic connections</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D4A5A5] rounded-full mt-2 flex-shrink-0" />
                <span>Slow, intentional matching felt more authentic than rapid swiping</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D4A5A5] rounded-full mt-2 flex-shrink-0" />
                <span>Visual identity should feel warm, cozy, and inviting—not corporate</span>
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
              <div className="bg-card border border-[#D4A5A540] rounded-2xl p-6">
                <h4 className="text-lg font-medium text-foreground mb-2">Project Portfolios</h4>
                <p className="text-muted-foreground text-sm">
                  Users share their crochet work as part of their profile, creating authentic conversation starters
                </p>
              </div>
              <div className="bg-card border border-[#D4A5A540] rounded-2xl p-6">
                <h4 className="text-lg font-medium text-foreground mb-2">Thoughtful Matching</h4>
                <p className="text-muted-foreground text-sm">
                  Match algorithm based on crochet styles, creative values, and relationship goals
                </p>
              </div>
              <div className="bg-card border border-[#D4A5A540] rounded-2xl p-6">
                <h4 className="text-lg font-medium text-foreground mb-2">Messaging & Connection</h4>
                <p className="text-muted-foreground text-sm">
                  Warm, supportive messaging system with optional prompts for creative conversation
                </p>
              </div>
              <div className="bg-card border border-[#D4A5A540] rounded-2xl p-6">
                <h4 className="text-lg font-medium text-foreground mb-2">Community Events</h4>
                <p className="text-muted-foreground text-sm">
                  In-app events and meetups for crochet circles, workshops, and social gatherings
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-foreground mb-4">Visual Identity</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The visual design uses a warm, soft color palette inspired by natural yarn tones—dusty pinks, creamy
              beiges, and muted lavenders. Rounded corners and gentle typography create a cozy, welcoming atmosphere
              that reflects the crafting community's values of warmth and creativity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every interaction was designed to feel slow and intentional, avoiding the frantic energy of
              traditional dating apps in favor of thoughtful, meaningful connection.
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
        <h2 className="text-4xl font-medium text-foreground mb-6">Reflection & Learnings</h2>
        <div className="bg-card border border-[#D4A5A540] rounded-2xl p-8 space-y-6">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-3">What I Learned</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D4A5A5] rounded-full mt-2 flex-shrink-0" />
                <span>Niche communities value authenticity and shared passion over broad appeal</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D4A5A5] rounded-full mt-2 flex-shrink-0" />
                <span>Visual identity should reflect the emotional tone of the user experience</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D4A5A5] rounded-full mt-2 flex-shrink-0" />
                <span>Slowing down interactions can create more meaningful digital experiences</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D4A5A5] rounded-full mt-2 flex-shrink-0" />
                <span>Community features can enhance romantic connection rather than distract from it</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>
    </CaseStudyLayout>
  );
}
