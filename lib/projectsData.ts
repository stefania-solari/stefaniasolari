// ============================================================================
// PROJECT TYPE DEFINITION
// ============================================================================

export interface Project {
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
// DEFAULT PROJECTS DATA
// ============================================================================

export const defaultProjects: Project[] = [
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
  {
    id: 7,
    title: "IMAGINAR",
    category: "MOBILE AR PLATFORM",
    type: "DESIGN",
    year: "2024",
    description: "Mobile platform for markerless, geolocated Augmented Reality events developed for Bepart, a non-profit organization employing AR to fill cities with art, design, and cultural content. ImaginAR transforms how audiences interact with AR experiences during festivals and cultural events, replacing marker-dependent technology with intuitive location-based discovery of 3D artworks.",
    images: [
      "https://images.unsplash.com/photo-1665594915243-970a1e128ba7?w=1600&q=80",
      "https://images.unsplash.com/photo-1758523670550-223a01cd7764?w=1600&q=80",
      "https://images.unsplash.com/photo-1502185635613-0a5b2e78efea?w=1600&q=80",
    ],
    role: "Lead Designer & Developer — Responsible for complete product development including UX research, UI design system, prototyping, Unity development, markerless AR implementation, and backend architecture.",
    challenge: "Bepart's existing marker-based AR app forced users to physically locate specific markers to trigger isolated artworks, creating a fragmented experience. The technology limited mobility, prevented interconnected narratives across multiple pieces, and functioned primarily as a content database without cohesive UX. The goal was to eliminate markers entirely, enable fluid spatial exploration, and create a platform where artworks could be contextually connected within single events.",
    concept: "ImaginAR reimagines AR cultural experiences through markerless geolocation technology. Instead of hunting for physical markers, users naturally discover artworks as they move through festival spaces—the city itself becomes the canvas. The platform allows event organizers to curate interconnected AR exhibitions where pieces respond to proximity, time, and user interaction patterns, creating cohesive artistic narratives across physical locations.",
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
];

// ============================================================================
// STORAGE KEY
// ============================================================================

const STORAGE_KEY = "portfolio_projects";

// ============================================================================
// DATA MANAGEMENT FUNCTIONS
// ============================================================================

export const getProjects = (): Project[] => {
  if (typeof window === "undefined") return defaultProjects;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error loading projects from localStorage:", error);
  }
  
  return defaultProjects;
};

export const saveProjects = (projects: Project[]): void => {
  if (typeof window === "undefined") return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (error) {
    console.error("Error saving projects to localStorage:", error);
  }
};

export const addProject = (project: Omit<Project, "id">): void => {
  const projects = getProjects();
  const maxId = projects.reduce((max, p) => Math.max(max, p.id), 0);
  const newProject = { ...project, id: maxId + 1 };
  saveProjects([...projects, newProject]);
};

export const updateProject = (id: number, project: Partial<Project>): void => {
  const projects = getProjects();
  const index = projects.findIndex(p => p.id === id);
  if (index !== -1) {
    projects[index] = { ...projects[index], ...project };
    saveProjects(projects);
  }
};

export const deleteProject = (id: number): void => {
  const projects = getProjects();
  saveProjects(projects.filter(p => p.id !== id));
};

export const resetToDefault = (): void => {
  saveProjects(defaultProjects);
};

export const exportProjects = (): string => {
  return JSON.stringify(getProjects(), null, 2);
};

export const importProjects = (jsonString: string): boolean => {
  try {
    const projects = JSON.parse(jsonString);
    if (Array.isArray(projects)) {
      saveProjects(projects);
      return true;
    }
  } catch (error) {
    console.error("Error importing projects:", error);
  }
  return false;
};
