import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle animated grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated accent corner brackets */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-12 left-12 w-20 h-20 border-l-2 border-t-2 border-foreground pointer-events-none hidden md:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="absolute bottom-12 right-12 w-20 h-20 border-r-2 border-b-2 border-foreground pointer-events-none hidden md:block"
      />

      <div className="max-w-6xl w-full relative z-10">
        <div className="space-y-12">
          {/* Eyebrow with stagger animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-sm tracking-wide flex items-center gap-3"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="h-[1px] bg-foreground/30"
              />
              STEFANIA SOLARI
            </motion.p>

            {/* Main headline with parallax effect */}
            <div className="relative">
              <motion.h1
                style={{
                  x: mousePosition.x * 0.5,
                  y: mousePosition.y * 0.5,
                }}
                className="text-4xl md:text-6xl lg:text-8xl tracking-tight leading-[0.95]"
              >
                {["IMMERSIVE", " "].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      display: "inline-block",
                      marginRight: word === " " ? "0.3em" : 0,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  DESIGN
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative inline-block text-muted-foreground"
                >
                  & INTERACTIVE ART
                  {/* Animated underline */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-foreground origin-left opacity-20"
                  />
                </motion.span>
              </motion.h1>
            </div>
          </motion.div>

          {/* Description with subtle parallax */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              x: mousePosition.x * -0.3,
              y: mousePosition.y * -0.3,
            }}
          >
            <p className="text-muted-foreground max-w-xl text-sm md:text-base leading-relaxed">
              Creating immersive experiences and generative systems at the intersection
              of art, technology, and human perception. Exploring new forms of expression
              through computational processes and spatial design.
            </p>
          </motion.div>

          {/* Animated scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="pt-12"
          >
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-start gap-2"
            >
              <span className="text-xs text-muted-foreground/40 tracking-wider">SCROLL</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
