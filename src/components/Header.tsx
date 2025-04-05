
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <span className="absolute inset-0 rounded-full bg-peekly-orange animate-pulse opacity-75"></span>
            <span className="absolute inset-0 flex items-center justify-center text-2xl">🦊</span>
          </div>
          <span className="text-2xl font-heading font-bold text-peekly-dark">Peekly</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors">
            Benefits
          </a>
          <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors">
            Testimonials
          </a>
          <Button asChild variant="outline" className="ml-4">
            <a href="#contact">Contact</a>
          </Button>
          <Button asChild className="bg-peekly-orange hover:bg-peekly-orange/90">
            <a href="#try-demo">Try Demo</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-peekly-dark"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 animate-fade-in-up">
          <a 
            href="#how-it-works" 
            className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#benefits" 
            className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Benefits
          </a>
          <a 
            href="#testimonials" 
            className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <Button asChild variant="outline" className="w-full">
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </Button>
          <Button asChild className="w-full bg-peekly-orange hover:bg-peekly-orange/90">
            <a href="#try-demo" onClick={() => setIsMenuOpen(false)}>Try Demo</a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
