
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

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
          <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors">
            Benefits
          </a>
          {/* Explore Peekly Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors flex items-center gap-1">
                Explore Peekly <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-[450px] bg-white p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <DropdownMenuLabel className="font-heading text-sm font-medium text-peekly-orange">By Industry</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link to="/industry/ecommerce" className="w-full cursor-pointer">For E-Commerce Brands</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/industry/saas" className="w-full cursor-pointer">For SaaS Companies</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/industry/solopreneurs" className="w-full cursor-pointer">For Solopreneurs and Lean Teams</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/industry/smb" className="w-full cursor-pointer">For SMBs</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/industry/marketing-agencies" className="w-full cursor-pointer">For Marketing Agencies</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </div>
                
                <div>
                  <DropdownMenuLabel className="font-heading text-sm font-medium text-peekly-orange">By Team</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link to="/team/marketers" className="w-full cursor-pointer">For Marketers</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/team/founders" className="w-full cursor-pointer">For Founders and Executives</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/team/product" className="w-full cursor-pointer">For Product Managers</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/team/growth" className="w-full cursor-pointer">For Growth Teams</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button asChild className="bg-peekly-orange hover:bg-peekly-orange/90">
            <a href="https://tally.so/r/mKRDp7" target="_blank" rel="noopener noreferrer">Join the Waitlist</a>
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
          
          {/* Mobile Explore Menu */}
          <div className="border-t border-gray-100 pt-2">
            <p className="text-sm font-medium text-peekly-orange py-2">Explore Peekly</p>
            
            <p className="text-xs font-medium text-gray-500 py-2 pl-2">By Industry</p>
            <Link 
              to="/industry/ecommerce" 
              className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors py-2 pl-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              For E-Commerce Brands
            </Link>
            <Link 
              to="/industry/saas" 
              className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors py-2 pl-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              For SaaS Companies
            </Link>
            <Link 
              to="/industry/solopreneurs" 
              className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors py-2 pl-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              For Solopreneurs and Lean Teams
            </Link>
            <Link 
              to="/industry/smb" 
              className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors py-2 pl-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              For SMBs
            </Link>
            <Link 
              to="/industry/marketing-agencies" 
              className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors py-2 pl-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              For Marketing Agencies
            </Link>
            
            <p className="text-xs font-medium text-gray-500 py-2 pl-2 mt-2">By Team</p>
            <Link 
              to="/team/marketers" 
              className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors py-2 pl-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              For Marketers
            </Link>
            <Link 
              to="/team/founders" 
              className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors py-2 pl-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              For Founders and Executives
            </Link>
            <Link 
              to="/team/product" 
              className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors py-2 pl-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              For Product Managers
            </Link>
            <Link 
              to="/team/growth" 
              className="text-sm font-medium text-gray-600 hover:text-peekly-orange transition-colors py-2 pl-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              For Growth Teams
            </Link>
          </div>
          
          <Button asChild className="w-full bg-peekly-orange hover:bg-peekly-orange/90">
            <a 
              href="https://tally.so/r/mKRDp7" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => setIsMenuOpen(false)}
            >
              Join the Waitlist
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
