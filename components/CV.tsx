import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Download, X } from 'lucide-react';

interface CVProps {
  onClose?: () => void;
}

export function CV({ onClose }: CVProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Buttons - Hidden when printing */}
      <div className="print:hidden fixed top-8 right-8 z-50 flex gap-3">
        {onClose && (
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 border border-foreground hover:bg-foreground hover:text-background transition-all text-sm"
          >
            <X size={18} />
            <span>CLOSE</span>
          </motion.button>
        )}
        <motion.button
          onClick={handlePrint}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm"
        >
          <Download size={18} />
          <span>SAVE AS PDF</span>
        </motion.button>
      </div>

      {/* CV Content */}
      <div className="max-w-4xl mx-auto px-8 py-16 print:py-8">
        {/* Header */}
        <header className="mb-12 print:mb-8 border-b border-foreground pb-8 print:pb-6">
          <h1 className="text-4xl print:text-3xl mb-4">STEFANIA SOLARI</h1>
          <p className="text-lg print:text-base text-muted-foreground mb-6">
            HEAD OF DESIGN • PRODUCT DESIGNER • UX LEAD
          </p>
          
          <div className="flex flex-wrap gap-6 text-sm print:text-xs">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-muted-foreground" />
              <span>stefania_solari@hotmail.it</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-muted-foreground" />
              <span>London, UK (Remote)</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={16} className="text-muted-foreground" />
              <span>linkedin.com/in/stefaniasolari</span>
            </div>
          </div>
        </header>

        {/* Profile */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-xl print:text-lg mb-4 flex items-center gap-3">
            <span className="text-muted-foreground text-sm print:text-xs">[01]</span>
            PROFILE
          </h2>
          <div className="pl-12 print:pl-8 space-y-3 text-sm print:text-xs leading-relaxed">
            <p>
              Head of Design with 15+ years of experience, moving fluidly between strategy 
              and craft. I've led teams, built design systems, and delivered complex 
              e-commerce and SaaS products, yet I've never stopped being a designer at heart.
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
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-xl print:text-lg mb-4 flex items-center gap-3">
            <span className="text-muted-foreground text-sm print:text-xs">[02]</span>
            EXPERIENCE
          </h2>
          <div className="pl-12 print:pl-8 space-y-8 print:space-y-6">
            {/* CRURATED */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base print:text-sm">CRURATED</h3>
                  <p className="text-sm print:text-xs text-muted-foreground">London, UK (Remote)</p>
                </div>
                <span className="text-sm print:text-xs text-muted-foreground">MAR 2024 — PRESENT</span>
              </div>
              
              {/* Head of Design */}
              <div className="mt-4 mb-3">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm print:text-xs">Head of Design</h4>
                  <span className="text-xs text-muted-foreground">Jan 2025 — Present</span>
                </div>
              </div>

              {/* Lead UX/UI Designer */}
              <div className="mb-3">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm print:text-xs">Lead UX/UI Designer</h4>
                  <span className="text-xs text-muted-foreground">Mar 2024 — Dec 2024</span>
                </div>
              </div>

              <p className="text-sm print:text-xs mb-3 italic">
                Innovative digital company in the fine wine sector, managing a multi-platform 
                ecosystem: B2C e-commerce, C2C NFT trading platform (Crutrade), and B2B2C 
                service for Michelin-starred restaurants and hospitality professionals.
              </p>

              <ul className="space-y-2 text-sm print:text-xs list-disc list-inside">
                <li>Responsible for user experience strategy and direction across all products, leading the design team and ensuring consistent, scalable, human-centered solutions</li>
                <li>Designed Crutrade from scratch: an NFT-based C2C trading platform for rare wines, integrating smart contracts and Web3 technologies</li>
                <li>Led the full redesign of Crurated's e-commerce experience, enhancing purchasing flows, virtual cellar interaction, and auctions integration</li>
                <li>Designed CityService, a B2B2C tool allowing end users to pre-purchase rare wines after booking exclusive dining experiences</li>
                <li>Conducted stakeholder interviews, usability tests, and co-design workshops to align design solutions with both user needs and business goals</li>
                <li>Built and maintained a shared design system used across all platforms, improving consistency and development efficiency</li>
                <li>Collaborated closely with product managers, developers, and marketing teams while mentoring and managing the internal design team with empathy, clarity, and purpose</li>
              </ul>
            </div>

            {/* UNIT9 */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base print:text-sm">SENIOR USER EXPERIENCE DESIGNER</h3>
                  <p className="text-sm print:text-xs text-muted-foreground">UNIT9 — London, UK (Remote)</p>
                </div>
                <span className="text-sm print:text-xs text-muted-foreground">OCT 2022 — FEB 2024</span>
              </div>

              <p className="text-sm print:text-xs mb-3 italic">
                Award-winning global production studio specializing in experiential campaigns, 
                creating high-impact digital products, immersive experiences, and interactive 
                content for major global brands.
              </p>

              <ul className="space-y-2 text-sm print:text-xs list-disc list-inside">
                <li>Led UX process from discovery to delivery for clients in culture, education, lifestyle, entertainment, and emerging technology sectors</li>
                <li>Designed and delivered UX strategies for major global brands including Meta, The Met, Smithsonian Museum, Nike China, Heineken, Coca-Cola, Pepsi, and Bentley</li>
                <li>Created wireframes, user flows, interactive prototypes, and detailed design documentation for web, mobile, and AR/VR applications</li>
                <li>Conducted user research, stakeholder workshops, and usability tests to validate hypotheses and align business goals with user needs</li>
                <li>Collaborated daily with developers, creatives, and producers in agile, fast-paced environments across distributed teams and time zones</li>
                <li>Applied creative problem-solving and rapid prototyping techniques to bring experimental concepts to life under tight deadlines</li>
              </ul>
            </div>

            {/* BV TECH / Aurora Labs */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base print:text-sm">USER EXPERIENCE DESIGNER</h3>
                  <p className="text-sm print:text-xs text-muted-foreground">BV TECH / Aurora Labs (R&D Division) — Milan, Italy (Hybrid)</p>
                </div>
                <span className="text-sm print:text-xs text-muted-foreground">MAY 2021 — OCT 2022</span>
              </div>

              <p className="text-sm print:text-xs mb-3 italic">
                Leading Italian company in cybersecurity, digital trust, and ICT services. Aurora Labs 
                is the R&D division dedicated to developing innovative tools for cybersecurity 
                professionals and critical infrastructure protection.
              </p>

              <ul className="space-y-2 text-sm print:text-xs list-disc list-inside">
                <li>Worked within cross-functional R&D team creating advanced digital solutions for next-generation cyber range training platforms</li>
                <li>Designed MVPs and R&D prototypes focused on network security interfaces, data visualization dashboards, and gamified training environments</li>
                <li>Led full UX process including requirements gathering, user journey mapping, wireframing, and interactive prototyping</li>
                <li>Conducted benchmarking and competitor analysis to guide product strategy and differentiation</li>
                <li>Aligned design decisions with EU cybersecurity directives and national innovation grant goals</li>
                <li>Applied user-centered approach to highly technical domains, contributing to training tools that build real-world cyber defense skills</li>
              </ul>
            </div>

            {/* BEPART - ImaginAr */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base print:text-sm">CO-FOUNDER IMAGINAR | LEAD DESIGNER | FULL-STACK DEVELOPER (MVP)</h3>
                  <p className="text-sm print:text-xs text-muted-foreground">BEPART - The Public Imagination Movement — Milan, Italy (Remote)</p>
                </div>
                <span className="text-sm print:text-xs text-muted-foreground">JAN 2020 — NOV 2023</span>
              </div>

              <p className="text-sm print:text-xs mb-3 italic">
                Cultural innovation studio blending art, emerging technology, and public engagement, 
                transforming cities into canvases through augmented and virtual reality. ImaginAr: 
                grant-funded immersive storytelling platform for layered urban narratives.
              </p>

              <ul className="space-y-2 text-sm print:text-xs list-disc list-inside">
                <li>Co-founded and shaped both creative direction and technical architecture of ImaginAr, an interactive AR tool for spatial urban storytelling</li>
                <li>Led UX/UI design of the mobile app with strong focus on spatial storytelling and accessibility in real-world contexts</li>
                <li>Developed core features using backend tools and Unity for AR, integrating 3D assets and OpenXR workflows</li>
                <li>Collaborated with public sector partners, schools, and museums to co-design experiences with social, civic, and educational value</li>
                <li>Managed cloud infrastructure and versioning pipelines, ensuring platform stability and scalability</li>
                <li>Merged creative technology with social impact, delivering participatory experiences celebrating place, memory, and imagination through immersive media</li>
              </ul>
            </div>

            {/* JoinPad */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base print:text-sm">FULL STACK DEVELOPER | DIGITAL PRODUCT DESIGNER</h3>
                  <p className="text-sm print:text-xs text-muted-foreground">JoinPad — Milan Area, Italy (On-site)</p>
                </div>
                <span className="text-sm print:text-xs text-muted-foreground">JUN 2016 — MAY 2021</span>
              </div>

              <p className="text-sm print:text-xs mb-3 italic">
                Tech company specialized in enterprise solutions for Augmented Reality (AR) and 
                Industrial IoT. Hybrid role combining UX/UI design, Unity development, and full-stack 
                programming for innovative industrial tools.
              </p>

              <ul className="space-y-2 text-sm print:text-xs list-disc list-inside">
                <li>Collaborated with major clients including Samsung, Liquigas, Avio, BTicino, Alstom, translating business requirements into functional digital tools</li>
                <li>Designed and launched MVP for Whuis.com, a B2B platform for real estate sector enabling identity verification and public data access</li>
                <li>Designed and developed B2B and B2C SaaS platforms, focusing on AR interfaces, IoT data visualization, and user-friendly dashboards</li>
                <li>Created spatial UX/UI systems for AR experiences in Unity (C#), integrated with real-time data from IoT sensors</li>
                <li>Contributed to development of XR applications for industrial maintenance and training</li>
                <li>Built full-stack web components using .NET, Angular, and Ionic</li>
                <li>Produced corporate video content including storytelling, scripting, direction, post-production, and visual effects</li>
              </ul>
            </div>

            {/* ildoppiosegno */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base print:text-sm">JUNIOR DIGITAL PRODUCT DESIGNER</h3>
                  <p className="text-sm print:text-xs text-muted-foreground">ildoppiosegno design studio — Milan Area, Italy (Contract)</p>
                </div>
                <span className="text-sm print:text-xs text-muted-foreground">FEB 2012 — DEC 2012</span>
              </div>

              <p className="text-sm print:text-xs mb-3 italic">
                Milan-based multidisciplinary design studio blending product design, visual 
                communication, and interactive experiences. Known for experimental and human-centered 
                approach merging creativity with functionality across digital and physical media.
              </p>

              <ul className="space-y-2 text-sm print:text-xs list-disc list-inside">
                <li>Collaborated on design of mobile app for pilates and yoga classes</li>
                <li>Created custom illustrations and interface graphics to enhance user engagement</li>
                <li>Designed calm, accessible wellness experience aligned with mindfulness principles</li>
              </ul>
            </div>

            {/* Freelance & Visual Art */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base print:text-sm">FREELANCE UX/UI & WEB DESIGNER | STARTUPPER | VISUAL ARTIST</h3>
                  <p className="text-sm print:text-xs text-muted-foreground">Freelance — Parma Area, Italy</p>
                </div>
                <span className="text-sm print:text-xs text-muted-foreground">JAN 2010 — APR 2016</span>
              </div>

              <p className="text-sm print:text-xs mb-3 italic">
                Multidisciplinary practice blending UX/UI design, web development, entrepreneurship, 
                and visual art. Active in design innovation, cultural projects, and traditional painting 
                integrated with digital storytelling.
              </p>

              <ul className="space-y-2 text-sm print:text-xs list-disc list-inside">
                <li>Delivered branding, UX/UI, and WordPress solutions to local SMEs and startups</li>
                <li>Worked on digital storytelling, video mapping, and design for cultural projects</li>
                <li><strong>Plateroom:</strong> Co-founded award-winning platform tracking food provenance, connecting local producers with restaurants, enabling menu exploration and ingredient origin verification</li>
                <li><strong>Samsung Young Design Award (SYDA) - Silver Prize:</strong> Wowindow, transparent device for car windows enabling visual communication between vehicles, early AR concept for urban mobility</li>
                <li><strong>WWI National Contest Winner:</strong> "Il Milite Ignoto" — 20 oil-painted portraits of unknown teenage soldiers, each with QR code linking to custom animations, blending traditional art with digital storytelling</li>
                <li>Held solo exhibition in Parma showcasing artworks that merge traditional painting with interactive digital media</li>
              </ul>
            </div>

            {/* Marc Fraser Design */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base print:text-sm">JUNIOR INDUSTRIAL DESIGNER - RESEARCHER</h3>
                  <p className="text-sm print:text-xs text-muted-foreground">Marc Fraser Design — Melbourne, Australia (Contract)</p>
                </div>
                <span className="text-sm print:text-xs text-muted-foreground">MAR 2009 — APR 2009</span>
              </div>

              <p className="text-sm print:text-xs mb-3 italic">
                Industrial design studio specializing in transforming client needs into product concepts, 
                prototypes, and communication strategies. Led by designer Marc Fraser.
              </p>

              <ul className="space-y-2 text-sm print:text-xs list-disc list-inside">
                <li>Worked on project commissioned by the Australian Government focused on redesigning P-plates (provisional driver license plates) to improve safety and visibility</li>
                <li>Contributed to concept development, prototyping, and material research</li>
                <li>Collaborated with senior designers to align with governmental standards and user needs</li>
              </ul>
            </div>

            {/* Design Innovation srl */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base print:text-sm">INTERN INDUSTRIAL DESIGNER - RESEARCHER</h3>
                  <p className="text-sm print:text-xs text-muted-foreground">Design Innovation srl (BTS Design Innovation) — Milan Area, Italy</p>
                </div>
                <span className="text-sm print:text-xs text-muted-foreground">MAR 2008 — JUN 2008</span>
              </div>

              <p className="text-sm print:text-xs mb-3 italic">
                Milan-based design consultancy specializing in product innovation and R&D, later acquired 
                by BTS Group AB. The studio collaborated with leading brands to transform emerging 
                technologies and materials into new product concepts.
              </p>

              <ul className="space-y-2 text-sm print:text-xs list-disc list-inside">
                <li>Worked within the R&D team for Ariete, focusing on design of new kitchen appliances</li>
                <li>Contributed to concept development, product sketching, and 3D modeling</li>
                <li>Developed early-stage prototypes for small domestic appliances aimed at enhancing everyday usability and aesthetic appeal</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-xl print:text-lg mb-4 flex items-center gap-3">
            <span className="text-muted-foreground text-sm print:text-xs">[03]</span>
            EDUCATION
          </h2>
          <div className="pl-12 print:pl-8 space-y-6 print:space-y-4">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base print:text-sm">MASTER OF SCIENCE IN DIGITAL ARTS AND CREATIVE TECHNOLOGIES</h3>
                  <p className="text-sm print:text-xs text-muted-foreground">La Salle BCN — Barcelona, Spain</p>
                  <p className="text-sm print:text-xs text-muted-foreground italic mt-1">Specialization: Human-Computer Interaction</p>
                </div>
                <span className="text-sm print:text-xs text-muted-foreground">FEB 2024 — JAN 2025</span>
              </div>

              <p className="text-sm print:text-xs mb-3 italic">
                Interdisciplinary program focused on convergence of digital art, emerging technologies, 
                and human experience, offering theoretical and practical tools to create immersive, 
                interactive, and emotionally resonant digital environments.
              </p>

              <div className="mb-3">
                <h4 className="text-sm print:text-xs mb-2">Key Areas:</h4>
                <ul className="space-y-1 text-sm print:text-xs list-disc list-inside">
                  <li>Creative coding, generative systems, and real-time interaction</li>
                  <li>Immersive experience design using TouchDesigner, Unity, VR, and spatial audio</li>
                  <li>Cross-disciplinary collaboration between design, art, and technology</li>
                </ul>
              </div>

              <div className="border-l-2 border-foreground pl-4 print:pl-3">
                <h4 className="text-sm print:text-xs mb-2"><strong>Final Project: "Evolving Garden"</strong></h4>
                <p className="text-sm print:text-xs">
                  A poetic and immersive VR experience where the digital environment transforms in real 
                  time in response to human input. The concept communicates that a garden, just like the 
                  human inner world, is composed of the full spectrum of emotions—both positive and 
                  negative—and that beauty can emerge from emotional complexity. The project explores 
                  how emotional states shape perception and environment, using art and technology as a 
                  bridge between the visible and the felt.
                </p>
              </div>
            </div>

            {/* Talent Garden */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base print:text-sm">MASTER'S DEGREE IN CODE MASTER</h3>
                  <p className="text-sm print:text-xs text-muted-foreground">Talent Garden — Italy</p>
                </div>
                <span className="text-sm print:text-xs text-muted-foreground">2016</span>
              </div>

              <p className="text-sm print:text-xs mb-3 italic">
                Intensive, project-based training program in full-stack web development. The course 
                focused on building modern web applications using Laravel (PHP framework), with strong 
                emphasis on agile methodologies and team-based collaboration.
              </p>

              <div>
                <h4 className="text-sm print:text-xs mb-2">Key Skills:</h4>
                <ul className="space-y-1 text-sm print:text-xs list-disc list-inside">
                  <li>Full-stack development with Laravel, PHP, HTML5/CSS3, JavaScript</li>
                  <li>RESTful API integration and MVC architecture</li>
                  <li>Version control with Git</li>
                  <li>Agile project workflows and team sprints</li>
                  <li>Basic DevOps and deployment practices</li>
                </ul>
              </div>
            </div>

            {/* Politecnico di Milano */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base print:text-sm">BACHELOR'S DEGREE IN PRODUCT DESIGN</h3>
                  <p className="text-sm print:text-xs text-muted-foreground">Politecnico di Milano — Milan, Italy</p>
                </div>
                <span className="text-sm print:text-xs text-muted-foreground">2006 — 2009</span>
              </div>

              <p className="text-sm print:text-xs mb-3 italic">
                Program focused on research and development of industrial products, with emphasis on 
                user-centered methodologies, sustainability, and "Design for All" principles—creating 
                inclusive solutions for people with diverse abilities and needs.
              </p>

              <div className="mb-3">
                <h4 className="text-sm print:text-xs mb-2">Key Areas:</h4>
                <ul className="space-y-1 text-sm print:text-xs list-disc list-inside">
                  <li>Industrial and Product Design</li>
                  <li>Ergonomics and Accessibility</li>
                  <li>Communication and Visual Design</li>
                  <li>3D Modeling and Prototyping</li>
                </ul>
              </div>

              <div className="border-l-2 border-foreground pl-4 print:pl-3">
                <h4 className="text-sm print:text-xs mb-2"><strong>Final Project: "Binario"</strong></h4>
                <p className="text-sm print:text-xs">
                  A therapeutic social game designed to enable blind, deaf, and sighted children to play 
                  together. The project promoted multisensory interaction, inclusive design, and emotional 
                  learning by encouraging cooperation and shared play experiences among children with 
                  different sensory abilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-xl print:text-lg mb-4 flex items-center gap-3">
            <span className="text-muted-foreground text-sm print:text-xs">[04]</span>
            EXPERTISE
          </h2>
          <div className="pl-12 print:pl-8 grid md:grid-cols-2 gap-6 print:gap-4">
            <div>
              <h3 className="text-sm print:text-xs text-muted-foreground mb-3">DESIGN & LEADERSHIP</h3>
              <ul className="space-y-1 text-sm print:text-xs">
                <li>• Product Design (UX/UI)</li>
                <li>• Design Systems</li>
                <li>• User Research & Testing</li>
                <li>• AI-Accelerated Prototyping</li>
                <li>• Design Team Leadership</li>
                <li>• Stakeholder Management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm print:text-xs text-muted-foreground mb-3">TECHNOLOGY & ART</h3>
              <ul className="space-y-1 text-sm print:text-xs">
                <li>• VR/AR (Immersive Design)</li>
                <li>�� Generative Systems</li>
                <li>• Interactive Installations</li>
                <li>• Creative Coding</li>
                <li>• 3D Design & Spatial Computing</li>
                <li>• Web3 & NFT Platforms</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm print:text-xs text-muted-foreground mb-3">INDUSTRIES</h3>
              <ul className="space-y-1 text-sm print:text-xs">
                <li>• Fine Wine & Luxury Goods</li>
                <li>• SaaS Platforms</li>
                <li>• E-commerce (B2B/B2C/B2B2C)</li>
                <li>• Crypto & Blockchain</li>
                <li>• Cybersecurity</li>
                <li>• Real Estate & Industrial AR</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm print:text-xs text-muted-foreground mb-3">TOOLS</h3>
              <ul className="space-y-1 text-sm print:text-xs">
                <li>• Figma, Adobe Suite</li>
                <li>• Unity, Unreal Engine</li>
                <li>• TouchDesigner, Processing</li>
                <li>• Three.js, WebGL</li>
                <li>• Blender, Cinema 4D</li>
                <li>• AI Tools (Midjourney, ComfyUI)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-xl print:text-lg mb-4 flex items-center gap-3">
            <span className="text-muted-foreground text-sm print:text-xs">[04]</span>
            FEATURED PROJECTS (2024)
          </h2>
          <div className="pl-12 print:pl-8 space-y-6 print:space-y-4">
            <div>
              <h3 className="text-base print:text-sm mb-1">IMAGINAR — Mobile AR Platform</h3>
              <p className="text-xs text-muted-foreground mb-2">Design & Development</p>
              <p className="text-sm print:text-xs">
                Markerless, geolocated AR platform for cultural events developed for Bepart. 
                Led complete product development from UX research to Unity implementation, 
                transforming marker-dependent technology into intuitive location-based discovery.
              </p>
            </div>

            <div>
              <h3 className="text-base print:text-sm mb-1">POSTHUMAN — Immersive Installation</h3>
              <p className="text-xs text-muted-foreground mb-2">Interactive Art</p>
              <p className="text-sm print:text-xs">
                Point cloud visualization synchronized with viewer's heartbeat through Pulsoid 
                sensors. Built with TouchDesigner and WebSocket integration, questioning 
                boundaries between organic and digital existence.
              </p>
            </div>

            <div>
              <h3 className="text-base print:text-sm mb-1">ELEGY — Mixed Reality Installation</h3>
              <p className="text-xs text-muted-foreground mb-2">MR Experience</p>
              <p className="text-sm print:text-xs">
                Exploration of grief and isolation through MR headsets with ethereal jellyfish 
                representing emotions. Built with Unreal Engine, Unity MR, and TouchDesigner.
              </p>
            </div>

            <div>
              <h3 className="text-base print:text-sm mb-1">EVOLVING GARDEN — VR Multiplayer</h3>
              <p className="text-xs text-muted-foreground mb-2">Virtual Reality</p>
              <p className="text-sm print:text-xs">
                Multiplayer VR experience where participants explore procedurally generated 
                fractal landscapes. Built in Unity VR with mathematical algorithms creating 
                infinite organic patterns.
              </p>
            </div>

            <div>
              <h3 className="text-base print:text-sm mb-1">LIQUID DREAMS — AI Generative Video</h3>
              <p className="text-xs text-muted-foreground mb-2">AI Art</p>
              <p className="text-sm print:text-xs">
                Experimental video exploring transformation of static imagery into fluid motion 
                through AI using ComfyUI workflows, investigating AI's capacity to imagine 
                temporal progression.
              </p>
            </div>

            <div>
              <h3 className="text-base print:text-sm mb-1">RETUNING — Mobile AI Audio</h3>
              <p className="text-xs text-muted-foreground mb-2">Android Application</p>
              <p className="text-sm print:text-xs">
                Location-based app transforming urban soundscapes through Replicate's AI models. 
                Developed in Unity for Android, reimagining acoustic identity of physical spaces.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-xl print:text-lg mb-4 flex items-center gap-3">
            <span className="text-muted-foreground text-sm print:text-xs">[05]</span>
            EDUCATION
          </h2>
          <div className="pl-12 print:pl-8 space-y-4">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base print:text-sm">MASTER IN IMMERSIVE ART & TECHNOLOGY</h3>
                <span className="text-sm print:text-xs text-muted-foreground">2024</span>
              </div>
              <p className="text-sm print:text-xs text-muted-foreground">La Salle Barcelona</p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base print:text-sm">BACHELOR IN VISUAL ARTS</h3>
                <span className="text-sm print:text-xs text-muted-foreground">2010</span>
              </div>
              <p className="text-sm print:text-xs text-muted-foreground">Fine Arts Academy</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-foreground/20 pt-6 print:pt-4 mt-12 print:mt-8">
          <p className="text-xs text-muted-foreground text-center">
            © 2025 STEFANIA SOLARI — PORTFOLIO AVAILABLE AT STEFANIASOLARI.COM
          </p>
        </footer>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            margin: 1.5cm;
            size: A4;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .print\\:py-8 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          
          .print\\:pb-6 {
            padding-bottom: 1.5rem;
          }
          
          .print\\:mb-8 {
            margin-bottom: 2rem;
          }
          
          .print\\:mb-6 {
            margin-bottom: 1.5rem;
          }
          
          .print\\:space-y-6 > * + * {
            margin-top: 1.5rem;
          }
          
          .print\\:space-y-4 > * + * {
            margin-top: 1rem;
          }
          
          .print\\:gap-4 {
            gap: 1rem;
          }
          
          .print\\:pl-8 {
            padding-left: 2rem;
          }
          
          .print\\:text-3xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
          
          .print\\:text-lg {
            font-size: 1.125rem;
            line-height: 1.75rem;
          }
          
          .print\\:text-base {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          
          .print\\:text-sm {
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
          
          .print\\:text-xs {
            font-size: 0.75rem;
            line-height: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
