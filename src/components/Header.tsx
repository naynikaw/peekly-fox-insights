
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/32c7a0ad-7bb8-437b-a840-96df303ec58c.png" 
            alt="Peekly Fox Logo" 
            className="h-12 md:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/pricing" className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors">
            Pricing
          </Link>
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
          <Link
            to="/pricing"
            className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
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
