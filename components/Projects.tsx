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
      <section id="work" className="min-h-screen py-32">
        <div className="max-w-7xl mx-auto">
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
            className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-16 md:gap-y-20"
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
                <div className="relative aspect-[3/4] bg-muted/30 overflow-hidden border border-border/20 hover:border-foreground/20 transition-all duration-500">
                  <ImageWithFallback
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
                  />
                  
                  {/* Minimal corner accent */}
                  <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-foreground/0 group-hover:border-foreground/40 transition-all duration-500" />
                </div>
                
                {/* Info below image - always visible */}
                <div className="mt-4 space-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="tracking-tight">
                      {project.title}
                    </h3>
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      →
                    </motion.span>
                  </div>
                  <div className="flex gap-4 text-muted-foreground">
                    <span className="uppercase tracking-wider">{project.category}</span>
                    <span>{project.year}</span>
                  </div>
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
