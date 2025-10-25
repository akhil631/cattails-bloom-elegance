import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will integrate with email workflow via Lovable Cloud
    toast.success("Thank you for your message! We'll respond within 24 hours.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-semibold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions or to place an order.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-display font-semibold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Whether you need help choosing the perfect arrangement, want to discuss wedding florals, 
                or have a question about delivery, we're here to help.
              </p>
            </div>

            <Card className="border-0 shadow-card">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Visit Us</h4>
                    <a 
                      href="https://maps.google.com/?q=9000+Crow+Canyon+Rd,+Suite+M,+Danville,+CA+94506" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      9000 Crow Canyon Rd, Suite M<br />
                      Danville, CA 94506
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <a 
                      href="tel:9257369494" 
                      className="text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      (925) 736-9494
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <a 
                      href="mailto:cattailsflorist@gmail.com" 
                      className="text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      cattailsflorist@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Hours</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <Button 
                size="lg" 
                className="w-full hover-scale"
                asChild
              >
                <a 
                  href="https://maps.google.com/?q=9000+Crow+Canyon+Rd,+Suite+M,+Danville,+CA+94506" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us how we can help..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full hover-scale">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093697!2d-122.0!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDAwJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cattails Florist Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Policy */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold mb-4">Delivery Information</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>• Same-day delivery available for orders placed before 2:00 PM</p>
                <p>• Delivery to Alamo, Blackhawk, Danville, Diablo, Dublin, Pleasanton, San Ramon, and Walnut Creek</p>
                <p>• Recipient must be home to receive delivery</p>
                <p>• Valid contact phone number required for all deliveries</p>
                <p>• We may call before delivery to confirm recipient availability</p>
                <p>• Flowers cannot be left outside in extreme heat</p>
                <p>• Substitutions may occur to ensure freshness and quality</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
