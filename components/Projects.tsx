import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectDetail } from "./ProjectDetail";
import { useState, useMemo, useEffect } from "react";
import type { FilterType } from "../App";
import { motion, AnimatePresence } from "motion/react";
import { getProjects, type Project } from "../lib/projectsData";

// ============================================================================
// PROJECTS DATA MANAGEMENT
// ============================================================================
// Projects are now managed through the Admin Panel!
// Access it by navigating to: yoursite.com/#admin
// 
// The admin panel allows you to:
// - Add new projects with all fields
// - Edit existing projects
// - Delete projects
// - Export projects as JSON
// - Import projects from JSON
// - Reset to default projects
//
// All changes are saved in localStorage and persist across sessions.

// ============================================================================
// COMPONENT CODE
// ============================================================================

interface ProjectsProps {
  activeFilter: FilterType;
}

export function Projects({ activeFilter }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  // Load projects from localStorage or use defaults
  useEffect(() => {
    setProjects(getProjects());
  }, []);

  // Listen for storage changes (when admin panel updates projects)
  useEffect(() => {
    const handleStorageChange = () => {
      setProjects(getProjects());
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for hash changes (when returning from admin)
    const handleHashChange = () => {
      if (window.location.hash === '' || window.location.hash === '#work') {
        setProjects(getProjects());
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") return projects;
    return projects.filter((project) => project.type === activeFilter);
  }, [activeFilter, projects]);

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
