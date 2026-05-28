import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { motion } from 'motion/react';
import bakeryImg from '../../imports/image-2.png';

export function BakeryCaseStudy() {
  return (
    <CaseStudyLayout
      title="Bakery Business Website"
      category="Responsive Web Design"
      accentColor="#D9B5A3"
      heroImage={bakeryImg}
      overview="A responsive website for a local artisan bakery, bringing their brand story and handmade products to life through thoughtful design and end-to-end UX process."
      role="UX Designer, Web Developer"
      timeline="5 weeks"
      tools={['HTML', 'CSS', 'Figma', 'User Research', 'Branding']}
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
          A local bakery needed an online presence to showcase their handmade products, share their story, and
          provide essential information to customers. They had no existing website and limited brand identity
          beyond their physical storefront.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The goal was to create a warm, inviting website that captured the artisan quality of their baked goods
          while being easy to navigate and mobile-friendly for customers on the go.
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
          <div className="bg-card border border-[#D9B5A340] rounded-2xl p-8">
            <h3 className="text-xl font-medium text-foreground mb-4">Stakeholder Interviews</h3>
            <p className="text-muted-foreground leading-relaxed">
              Met with the bakery owner to understand their business goals, brand values, target audience, and
              vision for their online presence. Learned about their commitment to traditional baking methods and
              community connection.
            </p>
          </div>
          <div className="bg-card border border-[#D9B5A340] rounded-2xl p-8">
            <h3 className="text-xl font-medium text-foreground mb-4">Competitive Analysis</h3>
            <p className="text-muted-foreground leading-relaxed">
              Analyzed local and regional bakery websites to identify common patterns, user expectations, and
              opportunities to differentiate. Most sites felt either too corporate or overly cluttered.
            </p>
          </div>
          <div className="bg-card border border-[#D9B5A340] rounded-2xl p-8">
            <h3 className="text-xl font-medium text-foreground mb-4">User Needs</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D9B5A3] rounded-full mt-2 flex-shrink-0" />
                <span>Quick access to opening hours, location, and contact information</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D9B5A3] rounded-full mt-2 flex-shrink-0" />
                <span>Visual showcase of products to entice visits to the physical bakery</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D9B5A3] rounded-full mt-2 flex-shrink-0" />
                <span>Mobile-friendly design for customers checking hours on the go</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D9B5A3] rounded-full mt-2 flex-shrink-0" />
                <span>Authentic, warm branding that reflects the artisan quality</span>
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
        <h2 className="text-4xl font-medium text-foreground mb-6">Design & Development</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium text-foreground mb-4">Brand Development</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Created a cohesive brand identity inspired by traditional baking—warm earth tones, handwritten
              typography accents, and imagery that emphasized craftsmanship. The color palette featured soft
              peachy tones and warm browns to evoke freshly baked bread and cozy mornings.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-foreground mb-4">Site Structure</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-[#D9B5A340] rounded-2xl p-6">
                <h4 className="text-lg font-medium text-foreground mb-2">Homepage</h4>
                <p className="text-muted-foreground text-sm">
                  Hero section with beautiful product imagery and clear call-to-action for visiting the bakery
                </p>
              </div>
              <div className="bg-card border border-[#D9B5A340] rounded-2xl p-6">
                <h4 className="text-lg font-medium text-foreground mb-2">Products</h4>
                <p className="text-muted-foreground text-sm">
                  Visual gallery of baked goods with descriptions and seasonal offerings
                </p>
              </div>
              <div className="bg-card border border-[#D9B5A340] rounded-2xl p-6">
                <h4 className="text-lg font-medium text-foreground mb-2">About</h4>
                <p className="text-muted-foreground text-sm">
                  Story of the bakery, commitment to quality, and traditional methods
                </p>
              </div>
              <div className="bg-card border border-[#D9B5A340] rounded-2xl p-6">
                <h4 className="text-lg font-medium text-foreground mb-2">Contact</h4>
                <p className="text-muted-foreground text-sm">
                  Location map, hours, contact form, and links to social media
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-foreground mb-4">Responsive Implementation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Built with semantic HTML and CSS, ensuring the site works beautifully across all devices. Focused
              on fast loading times and accessibility, with optimized images and clear navigation structure.
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
        <div className="bg-card border border-[#D9B5A340] rounded-2xl p-8 space-y-6">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-3">Project Outcomes</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D9B5A3] rounded-full mt-2 flex-shrink-0" />
                <span>Successfully launched responsive website with positive client feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D9B5A3] rounded-full mt-2 flex-shrink-0" />
                <span>Increased customer inquiries and foot traffic to physical location</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D9B5A3] rounded-full mt-2 flex-shrink-0" />
                <span>Established cohesive brand identity used across digital and print materials</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-foreground mb-3">Key Learnings</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D9B5A3] rounded-full mt-2 flex-shrink-0" />
                <span>Working directly with stakeholders requires clear communication and expectation management</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D9B5A3] rounded-full mt-2 flex-shrink-0" />
                <span>Small business websites need to prioritize simplicity and essential information</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D9B5A3] rounded-full mt-2 flex-shrink-0" />
                <span>Brand identity should emerge from business values, not design trends</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D9B5A3] rounded-full mt-2 flex-shrink-0" />
                <span>End-to-end ownership from research to launch builds confidence in the full UX process</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>
    </CaseStudyLayout>
  );
}
