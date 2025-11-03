import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectDetail } from "./ProjectDetail";
import { useState, useMemo } from "react";
import type { FilterType } from "../App";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================================
// PROJECT TYPE DEFINITION
// ============================================================================
interface Project {
  id: number;
  title: string;
  category: string;
  type: "DESIGN" | "ART";
  year: string;
  description: string;
  images: string[];
  
  // Optional fields for detailed case studies (mainly for DESIGN projects)
  role?: string;
  challenge?: string;
  concept?: string;
  process?: string;
  techStack?: string[];
  features?: string[];
  outcomes?: string;
}

// ============================================================================
// IMAGE HOSTING INSTRUCTIONS
// ============================================================================
// To use your own images instead of Unsplash:
// 1. Create a public GitHub repository (e.g., "portfolio-images")
// 2. Upload images to an "images" folder
// 3. Get raw URLs: click image > "Raw" button
// 4. Format: https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/images/filename.jpg
// 5. Replace Unsplash URLs below with your GitHub raw URLs

// ============================================================================
// PROJECTS DATA
// ============================================================================

const projects: Project[] = [

  // ==========================================================================
  // ART PROJECTS
  // ==========================================================================

  {
    id: 1,
    title: "POSTHUMAN",
    category: "IMMERSIVE INSTALLATION",
    type: "ART",
    year: "2024",
    description: "Interactive installation that visualizes the connection between human physiology and digital space. A point cloud star formation pulses in real-time, synchronized with the viewer's heartbeat through Pulsoid biometric sensors. Built with TouchDesigner and WebSocket integration, the work questions the boundaries between organic and digital existence. Created at La Salle Barcelona.",
    images: [
      "https://images.unsplash.com/photo-1598085936039-5bb9ec066589?w=1600&q=80",
      "https://images.unsplash.com/photo-1752436365654-de0ebc45784b?w=1600&q=80",
    ],
  },

  {
    id: 2,
    title: "LIQUID DREAMS",
    category: "AI GENERATIVE VIDEO",
    type: "ART",
    year: "2024",
    description: "Experimental video work exploring the transformation of static imagery into fluid motion through AI. Using ComfyUI workflows, static images are processed and animated, creating dreamlike sequences that exist between photography and cinema. The project investigates AI's capacity to imagine movement and temporal progression from frozen moments. Developed at La Salle Barcelona.",
    images: [
      "https://images.unsplash.com/photo-1603739592262-e66a6708e141?w=1600&q=80",
      "https://images.unsplash.com/photo-1645930916050-523c86d40078?w=1600&q=80",
    ],
  },

  {
    id: 3,
    title: "EVOLVING GARDEN",
    category: "VR MULTIPLAYER",
    type: "ART",
    year: "2024",
    description: "Multiplayer virtual reality experience where participants collectively explore and shape fractal landscapes. Built in Unity VR, the environment continuously evolves through mathematical algorithms, creating infinite organic patterns. Multiple users can inhabit and navigate these procedurally generated worlds simultaneously, experiencing the same ever-changing fractal ecosystem. Produced at La Salle Barcelona.",
    images: [
      "https://images.unsplash.com/photo-1698050683094-b7e0e57ea903?w=1600&q=80",
      "https://images.unsplash.com/photo-1570815306083-0ac614f81f60?w=1600&q=80",
    ],
  },

  {
    id: 4,
    title: "RETUNING",
    category: "MOBILE AI AUDIO",
    type: "ART",
    year: "2024",
    description: "Location-based Android application that transforms urban environments into sonic compositions. Users collect ambient sounds from their surroundings, which are then processed and regenerated through Replicate's AI models. The app creates new audio interpretations of local soundscapes, reimagining the acoustic identity of physical spaces. Developed in Unity for Android at La Salle Barcelona.",
    images: [
      "https://images.unsplash.com/photo-1692838952665-a7a9577fde9e?w=1600&q=80",
      "https://images.unsplash.com/photo-1716738677702-69106c7eb80f?w=1600&q=80",
    ],
  },

  {
    id: 5,
    title: "ELEGY",
    category: "MIXED REALITY INSTALLATION",
    type: "ART",
    year: "2024",
    description: "Mixed reality installation exploring grief, isolation, and emotional communication. Participants wearing MR headsets are immersed in an environment populated by ethereal jellyfish representing emotions. As external touch occurs, the jellyfish turn red, symbolizing painful emotions and the fraught channels of communication during mourning. The work creates a powerful metaphor for isolation—the person in MR remains enclosed in their own world even when physically surrounded by others. Built with Unreal Engine, Unity MR, and TouchDesigner at La Salle Barcelona.",
    images: [
      "https://images.unsplash.com/photo-1593097837414-97a06cdc8394?w=1600&q=80",
      "https://images.unsplash.com/photo-1592901475831-4fb0be405fc9?w=1600&q=80",
    ],
  },

  {
    id: 6,
    title: "TESSUTO",
    category: "GENERATIVE AUDIOVISUAL",
    type: "ART",
    year: "2024",
    description: "Audiovisual exploration built with Processing and p5.js that creates a meditative, rhythmic experience. A central circle pulses in response to audio input, while two flowing curved lines—one azure, one pink—weave and dance around it using Perlin noise algorithms. The hand-drawn aesthetic and weaving motion give the piece its name. The composition evokes tranquility and creates visual rhythms that breathe with sound. Created at La Salle Barcelona.",
    images: [
      "https://images.unsplash.com/photo-1641924875397-5324016b96bb?w=1600&q=80",
      "https://images.unsplash.com/photo-1580311033297-86d67ea2fdb4?w=1600&q=80",
    ],
  },

  // ==========================================================================
  // DESIGN PROJECTS - UX/PRODUCT DESIGN
  // ==========================================================================

  {
    id: 7,
    title: "IMAGINAR",
    category: "MOBILE AR PLATFORM",
    type: "DESIGN",
    year: "2024",

    // SHORT DESCRIPTION (appears in grid view)
    description: "Mobile platform for markerless, geolocated Augmented Reality events developed for Bepart, a non-profit organization employing AR to fill cities with art, design, and cultural content. ImaginAR transforms how audiences interact with AR experiences during festivals and cultural events, replacing marker-dependent technology with intuitive location-based discovery of 3D artworks.",

    images: [
      "https://images.unsplash.com/photo-1665594915243-970a1e128ba7?w=1600&q=80",
      "https://images.unsplash.com/photo-1758523670550-223a01cd7764?w=1600&q=80",
      "https://images.unsplash.com/photo-1502185635613-0a5b2e78efea?w=1600&q=80",
    ],

    // CASE STUDY DETAILS (appears in detail view)
    
    role: "Lead Designer & Developer — Responsible for complete product development including UX research, UI design system, prototyping, Unity development, markerless AR implementation, and backend architecture.",

    challenge: "Bepart's existing marker-based AR app forced users to physically locate specific markers to trigger isolated artworks, creating a fragmented experience. The technology limited mobility, prevented interconnected narratives across multiple pieces, and functioned primarily as a content database without cohesive UX. The goal was to eliminate markers entirely, enable fluid spatial exploration, and create a platform where artworks could be contextually connected within single events.",

    concept: "ImaginAR reimagines AR cultural experiences through markerless geolocation technology. Instead of hunting for physical markers, users naturally discover artworks as they move through festival spaces—the city itself becomes the canvas. The platform allows event organizers to curate interconnected AR exhibitions where pieces respond to proximity, time, and user interaction patterns, creating cohesive artistic narratives across physical locations.",

    // PROCESS - Use \\n\\n for section breaks, \\n for line breaks
    process: `DISCOVERY & RESEARCH
Conducted user interviews and surveys with Bepart community, festival attendees, and curators to identify pain points in marker-based AR. Key findings: users wanted freedom of movement, organizers needed to link artworks thematically, and both groups found marker placement restrictive.

UX STRATEGY & PERSONAS
Developed personas for festival-goers, casual explorers, and event organizers. Mapped user flows eliminating friction points from marker discovery. Created wireframes prioritizing intuitive navigation between map view and AR camera.

PROTOTYPING & TESTING
Iterated through low to high-fidelity prototypes testing geofence trigger distances, UI clarity during AR experiences, and CMS workflows for organizers. Conducted usability tests with target users to validate interaction paradigms.

TECHNICAL IMPLEMENTATION
Developed markerless AR using Unity AR Foundation with GPS-based spatial anchoring. Engineered proximity-detection system replacing marker scanning. Built backend enabling organizers to define geofences, upload 3D assets, and orchestrate multi-artwork experiences.`,

    techStack: [
      "Unity AR Foundation",
      "C# / Unity",
      "GPS Geolocation Services",
      "Figma (UI/UX)",
      "Blender (3D Assets)",
      "Firebase Backend",
    ],

    features: [
      "Markerless AR Technology — Eliminates physical markers through GPS geofencing and spatial anchoring",
      "Connected Artwork Narratives — Multiple AR pieces within events can be thematically linked and respond contextually",
      "Event Organizer CMS — Intuitive backend for curators to upload 3D models, define geofences, and orchestrate multi-artwork exhibitions",
      "Proximity-Based Discovery — Real-time map shows nearby AR experiences with distance indicators and automatic triggers",
      "Fluid Spatial Navigation — Seamless transitions between map exploration and AR camera without scanning markers",
      "Offline Performance — Pre-caching system ensures smooth experiences in crowded festival environments with low connectivity",
    ],

    outcomes: "ImaginAR successfully transformed Bepart's AR platform from a marker-dependent database into an inclusive, spatially-aware cultural tool. By eliminating markers and enabling interconnected artworks, the platform empowers users to explore festival spaces freely while experiencing cohesive artistic narratives. The project demonstrates how markerless AR technology can democratize access to digital art, creating scalable solutions for museums, festivals, and cultural institutions seeking to layer immersive experiences onto physical environments.",
  },

  // ==========================================================================
  // ADD NEW PROJECTS HERE
  // ==========================================================================
  // Copy the template below and fill in your project details
  
  /*
  {
    id: 8, // Increment this number
    title: "PROJECT TITLE",
    category: "PROJECT CATEGORY",
    type: "DESIGN", // or "ART"
    year: "2024",
    description: "Brief description that appears in the grid view. Keep it concise but informative.",
    images: [
      "https://images.unsplash.com/photo-xxxxx?w=1600&q=80",
      "https://images.unsplash.com/photo-xxxxx?w=1600&q=80",
    ],
    
    // Optional fields for DESIGN projects with case studies:
    role: "Your role in the project",
    challenge: "What problem were you solving?",
    concept: "Core concept and vision",
    process: "Step by step process with \\n\\n for section breaks",
    techStack: ["Tech 1", "Tech 2", "Tech 3"],
    features: ["Feature 1 — Description", "Feature 2 — Description"],
    outcomes: "Results and impact of the project",
  },
  */

];

// ============================================================================
// COMPONENT CODE - NO NEED TO EDIT BELOW
// ============================================================================

interface ProjectsProps {
  activeFilter: FilterType;
}

export function Projects({ activeFilter }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") return projects;
    return projects.filter((project) => project.type === activeFilter);
  }, [activeFilter]);

  const handleNext = () => {
    if (selectedProject === null) return;
    setSelectedProject((selectedProject + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    if (selectedProject === null) return;
    setSelectedProject(
      selectedProject === 0 ? filteredProjects.length - 1 : selectedProject - 1
    );
  };

  return (
    <>
      <section id="work" className="min-h-screen px-6 py-24">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-20"
          >
            <p className="text-muted-foreground mb-2 text-sm">
              [SELECTED WORKS {activeFilter !== "ALL" && `/ ${activeFilter}`}]
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-[1px] bg-foreground/20"
            />
          </motion.div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.button
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onClick={() => setSelectedProject(index)}
                className="group text-left relative overflow-hidden"
              >
                <div className="relative aspect-[3/4] bg-muted overflow-hidden border border-transparent hover:border-foreground/10 transition-all duration-300">
                  <ImageWithFallback
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  
                  {/* Overlay info */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="tracking-tight text-white">
                        {project.title}
                      </h3>
                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-white/60 text-xs mt-1 font-mono"
                      >
                        VIEW →
                      </motion.span>
                    </div>
                    <div className="flex gap-4 text-white/70 text-sm font-mono">
                      <span className="uppercase tracking-wider">{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                  </motion.div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/0 group-hover:border-white/30 transition-all duration-500" />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {selectedProject !== null && (
          <ProjectDetail
            project={filteredProjects[selectedProject]}
            onClose={() => setSelectedProject(null)}
            onNext={handleNext}
            onPrev={handlePrev}
            currentIndex={selectedProject}
            totalProjects={filteredProjects.length}
          />
        )}
      </AnimatePresence>
    </>
  );
}
