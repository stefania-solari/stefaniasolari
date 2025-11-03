import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ScrollProgress } from "./components/ScrollProgress";
import { CV } from "./components/CV";
import { useState, useEffect } from "react";

export type FilterType = "ALL" | "DESIGN" | "ART";

export default function App() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");
  const [showCV, setShowCV] = useState(false);

  // Handle URL changes for CV view
  useEffect(() => {
    const handleHashChange = () => {
      setShowCV(window.location.hash === '#cv');
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Show CV view
  if (showCV) {
    return <CV onClose={() => {
      window.location.hash = '';
      setShowCV(false);
    }} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <main>
        <Hero />
        <Projects activeFilter={activeFilter} />
        <About />
        <Contact />
      </main>
    </div>
  );
}