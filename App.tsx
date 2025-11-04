import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ScrollProgress } from "./components/ScrollProgress";
import { CV } from "./components/CV";
import { Admin } from "./components/Admin";
import { AdminLogin } from "./components/AdminLogin";
import { useState, useEffect } from "react";

export type FilterType = "ALL" | "DESIGN" | "ART";

function HomePage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");

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

function CVPage() {
  return <CV onClose={() => window.history.back()} />;
}

function AdminPage() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // Check admin authentication on mount
  useEffect(() => {
    const isAuth = sessionStorage.getItem("admin_authenticated") === "true";
    setIsAdminAuthenticated(isAuth);
  }, []);

  // Handle logout
  const handleLogout = () => {
    sessionStorage.removeItem("admin_authenticated");
    setIsAdminAuthenticated(false);
    window.location.href = "/";
  };

  if (!isAdminAuthenticated) {
    return (
      <AdminLogin
        onLogin={() => setIsAdminAuthenticated(true)}
        onClose={() => (window.location.href = "/")}
      />
    );
  }

  return <Admin onClose={handleLogout} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
