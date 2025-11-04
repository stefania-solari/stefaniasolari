import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  images: string[];
  // Optional case study fields
  challenge?: string;
  concept?: string;
  process?: string;
  techStack?: string[];
  features?: string[];
  outcomes?: string;
  role?: string;
}

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalProjects: number;
}

export function ProjectDetail({
  project,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalProjects,
}: ProjectDetailProps) {
  const [direction, setDirection] = useState(0);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Navigate with arrow keys
  useEffect(() => {
    const handleArrow = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setDirection(-1);
        onPrev();
      }
      if (e.key === "ArrowRight") {
        setDirection(1);
        onNext();
      }
    };
    window.addEventListener("keydown", handleArrow);
    return () => window.removeEventListener("keydown", handleArrow);
  }, [onNext, onPrev]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleNextClick = () => {
    setDirection(1);
    onNext();
  };

  const handlePrevClick = () => {
    setDirection(-1);
    onPrev();
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 20 : -20,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-background"
    >
      {/* Close button - minimal top-right */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onClick={onClose}
        className="fixed top-8 right-8 z-20 hover:opacity-70 transition-all duration-300 hover:rotate-90 p-2 bg-background/80 backdrop-blur-sm"
        aria-label="Close"
      >
        <X size={20} />
      </motion.button>

      {/* Navigation arrows - subtle */}
      <motion.button
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ delay: 0.3 }}
        onClick={handlePrevClick}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 hover:opacity-100 hover:-translate-x-1 p-2"
        aria-label="Previous project"
      >
        <ChevronLeft size={28} />
      </motion.button>
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ delay: 0.3 }}
        onClick={handleNextClick}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 hover:opacity-100 hover:translate-x-1 p-2"
        aria-label="Next project"
      >
        <ChevronRight size={28} />
      </motion.button>

      {/* Project counter - minimal bottom */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 text-xs text-muted-foreground/60 font-mono flex items-center gap-6"
      >
        <span>
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {String(currentIndex + 1).padStart(2, '0')}
          </motion.span>
          {" / "}
          {String(totalProjects).padStart(2, '0')}
        </span>
        <span className="opacity-40 hidden md:inline">ESC / ← →</span>
      </motion.div>

      {/* Content - Behance style */}
      <div className="h-full overflow-y-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={project.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Hero image - full width */}
            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-[70vh] md:h-[85vh] bg-muted overflow-hidden"
            >
              <ImageWithFallback
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Project info section - centered, Behance style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32 text-center"
            >
              {/* Title */}
              <h1 className="mb-6 tracking-tight text-3xl md:text-4xl">
                {project.title}
              </h1>

              {/* Meta info */}
              <div className="flex items-center justify-center gap-6 mb-12 text-sm text-muted-foreground">
                <span className="uppercase tracking-wider">{project.category}</span>
                <span className="text-border">•</span>
                <span>{project.year}</span>
              </div>

              {/* Description */}
              {project.description && (
                <div className="max-w-2xl mx-auto">
                  <p className="text-muted-foreground leading-loose text-base md:text-lg">
                    {project.description}
                  </p>
                </div>
              )}
            </motion.div>

            {/* Case Study Sections - only shown if data exists */}
            {(project.challenge || project.concept || project.process || project.techStack || project.features || project.outcomes || project.role) && (
              <div className="border-t border-border/40">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-32 space-y-20 md:space-y-32"
                >
                  {/* Role */}
                  {project.role && (
                    <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
                      <h3 className="text-xs uppercase tracking-wider text-muted-foreground/60">
                        Role
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.role}
                      </p>
                    </div>
                  )}

                  {/* Challenge */}
                  {project.challenge && (
                    <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
                      <h3 className="text-xs uppercase tracking-wider text-muted-foreground/60">
                        Challenge
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                  )}

                  {/* Concept */}
                  {project.concept && (
                    <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
                      <h3 className="text-xs uppercase tracking-wider text-muted-foreground/60">
                        Concept
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.concept}
                      </p>
                    </div>
                  )}

                  {/* Process */}
                  {project.process && (
                    <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
                      <h3 className="text-xs uppercase tracking-wider text-muted-foreground/60">
                        Design Process
                      </h3>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {project.process}
                      </p>
                    </div>
                  )}

                  {/* Tech Stack */}
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
                      <h3 className="text-xs uppercase tracking-wider text-muted-foreground/60">
                        Technical Stack
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="px-4 py-2 border border-border/60 text-sm text-muted-foreground hover:border-foreground/40 transition-colors duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
                      <h3 className="text-xs uppercase tracking-wider text-muted-foreground/60">
                        Key Features
                      </h3>
                      <ul className="space-y-4">
                        {project.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="text-muted-foreground leading-relaxed flex gap-4"
                          >
                            <span className="text-foreground/40 select-none">—</span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Outcomes */}
                  {project.outcomes && (
                    <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
                      <h3 className="text-xs uppercase tracking-wider text-muted-foreground/60">
                        Outcomes
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.outcomes}
                      </p>
                    </div>
                  )}
                </motion.div>
              </div>
            )}

            {/* Additional images - full width with generous spacing */}
            {project.images.length > 1 && (
              <div className="space-y-20 md:space-y-32 pb-32">
                {project.images.slice(1).map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full"
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${project.title} - Image ${index + 2}`}
                      className="w-full h-auto"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
