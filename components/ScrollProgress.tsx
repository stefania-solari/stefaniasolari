import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setShowBackToTop(latest > 0.2);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-foreground origin-left z-50"
        style={{ scaleX }}
      />

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          y: showBackToTop ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-foreground text-background rounded-none border-2 border-foreground hover:bg-background hover:text-foreground transition-colors duration-300 flex items-center justify-center group"
        style={{ pointerEvents: showBackToTop ? "auto" : "none" }}
        aria-label="Back to top"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
      </motion.button>
    </>
  );
}
