import { Link, useLocation } from "react-router-dom";
import { Phone, MapPin, ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "Weddings & Events", path: "/weddings" },
    
    { label: "Custom Order", path: "/custom-order" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Utility Bar */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:9257369494" className="flex items-center gap-2 text-muted hover:text-foreground transition-smooth">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">(925) 736-9494</span>
            </a>
            <a 
              href="https://maps.google.com/?q=9000+Crow+Canyon+Rd,+Suite+M,+Danville,+CA+94506" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-foreground transition-smooth"
            >
              <MapPin className="h-4 w-4" />
              <span className="hidden md:inline">Danville, CA</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 relative">
          <Link to="/" className="absolute left-4 text-2xl font-display font-semibold tracking-tight">
            Cattails Florist
          </Link>
          
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-smooth",
                  isActive(link.path)
                    ? "bg-surface text-foreground"
                    : "text-muted hover:text-foreground hover:bg-surface/50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button - simplified for now */}
          <Button variant="ghost" size="icon" className="lg:hidden absolute right-4">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
