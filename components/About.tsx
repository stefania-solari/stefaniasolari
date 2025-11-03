import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-32">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-muted-foreground mb-2 text-sm">[ABOUT]</p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[1px] bg-foreground/20"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-24 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-sm md:text-base leading-relaxed"
          >
            <p>
              I'm a Head of Design with 15+ years of experience, moving fluidly between strategy 
              and craft. I've led teams, built design systems, and delivered complex e-commerce 
              and SaaS products, yet I've never stopped being a designer at heart.
            </p>
            <p>
              I see myself as both a leader and an artisan: I love guiding people with clarity 
              and empathy, but I also enjoy getting hands-on, shaping interfaces, polishing 
              details, and creating experiences that feel simple, beautiful, and meaningful.
            </p>
            <p>
              My journey spans immersive design, AI-driven creativity, and Web3 innovation, 
              always with the same goal: turning complexity into clarity and technology into 
              human-centered experiences.
            </p>
            <p>
              Today, I'm leading design and strategy at Crurated, where we're building digital 
              platforms for the fine wine world, from B2C e-commerce to C2C trading and B2B2C 
              services.
            </p>
            <p>
              I began my career as a painter, drawn to visual storytelling and emotional 
              expression, but I soon discovered my creativity had deeper purpose when placed 
              in service of others. Overcoming impostor syndrome, I've embraced design not 
              only as a craft, but as a tool for community building, inclusion, and emotional 
              connection.
            </p>
            <p>
              This mindset fuels my commitment to creating meaningful, human-centered digital 
              experiences that resonate beyond the screen. I'm also a founder and contributor 
              to projects at the intersection of art, design, and technology.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-12 text-sm"
          >
            <div>
              <p className="text-muted-foreground mb-4">CURRENT</p>
              <div className="space-y-2">
                <p>HEAD OF DESIGN / CRURATED</p>
                <p>FINE WINE DIGITAL PLATFORMS</p>
                <p>E-COMMERCE, TRADING, B2B SERVICES</p>
              </div>
            </div>

            <div>
              <p className="text-muted-foreground mb-4">EDUCATION</p>
              <div className="space-y-2">
                <p>MASTER IN IMMERSIVE ART / LA SALLE BCN</p>
                <p>BACHELOR IN VISUAL ARTS</p>
              </div>
            </div>

            <div>
              <p className="text-muted-foreground mb-4">EXPERTISE</p>
              <div className="space-y-2">
                <p>DESIGN SYSTEMS & STRATEGY</p>
                <p>IMMERSIVE DESIGN (VR/AR)</p>
                <p>AI-DRIVEN CREATIVITY</p>
                <p>WEB3 & SAAS PRODUCTS</p>
                <p>TEAM LEADERSHIP</p>
              </div>
            </div>

            <div>
              <p className="text-muted-foreground mb-4">EXPERIENCE</p>
              <div className="space-y-2">
                <p>15+ YEARS IN DESIGN</p>
                <p>E-COMMERCE & SAAS</p>
                <p>STRATEGY + CRAFT</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
