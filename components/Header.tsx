import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { FilterType } from '../App';

interface HeaderProps {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
}

export function Header({ activeFilter, setActiveFilter }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: id === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(filter);
    scrollToSection('work');
  };

  const filters: FilterType[] = ['ALL', 'DESIGN', 'ART'];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="ml-6 mr-6 md:ml-8 md:mr-8 lg:ml-12 lg:mr-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="hover:opacity-50 transition-opacity duration-300"
          >
            <span className="tracking-tight text-sm">STEFANIA SOLARI</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            {/* Filters */}
            <div className="flex gap-3 border-r border-border/50 pr-6">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterClick(filter)}
                  className={`relative transition-all duration-300 ${
                    activeFilter === filter
                      ? 'opacity-100'
                      : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  {activeFilter === filter && (
                    <span className="absolute -left-2 top-1/2 -translate-y-1/2 text-xs">
                      [
                    </span>
                  )}
                  <span>
                    {filter}
                  </span>
                  {activeFilter === filter && (
                    <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-xs">
                      ]
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Nav Links */}
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:opacity-50 transition-opacity duration-300"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:opacity-50 transition-opacity duration-300"
            >
              CONTACT
            </button>
            
            {/* Admin Link (discrete) */}
            <Link 
              to="/admin"
              className="text-xs opacity-20 hover:opacity-50 transition-opacity duration-300"
              title="Admin Panel"
            >
              ⚙
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden hover:opacity-50 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="flex flex-col gap-4 mt-6 pb-2 text-sm lg:hidden">
            {/* Filters */}
            <div className="flex gap-4 pb-4 border-b border-border/50">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    handleFilterClick(filter);
                    setIsMenuOpen(false);
                  }}
                  className={`transition-opacity duration-300 ${
                    activeFilter === filter
                      ? 'opacity-100'
                      : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  {activeFilter === filter && '[ '}
                  {filter}
                  {activeFilter === filter && ' ]'}
                </button>
              ))}
            </div>

            {/* Nav Links */}
            <button onClick={() => scrollToSection('about')} className="text-left hover:opacity-50 transition-opacity duration-300">
              ABOUT
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:opacity-50 transition-opacity duration-300">
              CONTACT
            </button>
            
            {/* Admin Link (discrete) */}
            <Link 
              to="/admin"
              className="text-xs opacity-20 hover:opacity-50 transition-opacity duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              ⚙ Admin
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
