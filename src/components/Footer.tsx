import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Cattails Florist</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="https://maps.google.com/?q=9000+Crow+Canyon+Rd,+Suite+M,+Danville,+CA+94506" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-start gap-2 hover:text-foreground transition-smooth">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>9000 Crow Canyon Rd, Suite M<br />Danville, CA 94506</span>
              </a>
              <a href="tel:9257369494" className="flex items-center gap-2 hover:text-foreground transition-smooth">
                <Phone className="h-4 w-4" />
                <span>(925) 736-9494</span>
              </a>
              <a href="mailto:cattailsflorist@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-smooth">
                <Mail className="h-4 w-4" />
                <span>cattailsflorist@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Delivery Areas */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Delivery Areas</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Alamo</li>
              <li>Blackhawk</li>
              <li>Danville</li>
              <li>Diablo</li>
              <li>Dublin</li>
              <li>Pleasanton</li>
              <li>San Ramon</li>
              <li>Walnut Creek</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Shop Flowers
                </Link>
              </li>
              <li>
                <Link to="/weddings" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Wedding Florals
                </Link>
              </li>
              <li>
                <Link to="/subscriptions" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Subscriptions
                </Link>
              </li>
              <li>
                <Link to="/custom-order" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies & Social */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Policies</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recipient must be home. Valid phone required. We may call before delivery.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-accent transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-accent transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cattails Florist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
