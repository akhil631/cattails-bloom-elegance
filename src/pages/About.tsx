import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import Reviews from "@/components/Reviews";

const About = () => {
  const deliveryAreas = [
    "Alamo", "Blackhawk", "Danville", "Diablo", 
    "Dublin", "Pleasanton", "San Ramon", "Walnut Creek"
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-semibold mb-6">About Cattails Florist</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Serving the East Bay with elegant floral designs since 1990
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-display font-semibold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For over three decades, Cattails Florist has been creating beautiful floral arrangements 
                that celebrate life's most precious moments. Located in the heart of Danville, California, 
                we've built our reputation on exceptional quality, personalized service, and a deep 
                understanding of the artistry of flowers.
              </p>
              <p>
                What began as a small neighborhood flower shop has grown into one of the East Bay's 
                most trusted florists, serving clients from intimate personal celebrations to grand 
                wedding events. Our team of experienced designers brings creativity, skill, and passion 
                to every arrangement we create.
              </p>
              <p>
                We believe flowers have the power to express emotions words cannot capture. Whether 
                you're celebrating a joyous occasion, expressing sympathy, or simply brightening 
                someone's day, we're here to help you convey your feelings through the timeless beauty 
                of fresh flowers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-semibold mb-12 text-center">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Quality",
                description: "We source only the freshest, highest-quality flowers from trusted growers."
              },
              {
                title: "Creativity",
                description: "Each arrangement is uniquely designed to reflect your vision and style."
              },
              {
                title: "Service",
                description: "Your satisfaction is our priority. We go above and beyond to exceed expectations."
              }
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-card text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-display font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-semibold mb-6">Part of Your Community</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            As a locally-owned business, we're proud to be part of the East Bay community. 
            We've had the privilege of contributing to countless celebrations, supporting local events, 
            and building lasting relationships with our customers. Your trust in us means everything, 
            and we're honored to play a small part in your life's special moments.
          </p>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-semibold mb-8 text-center">
              Areas We Serve
            </h2>
            <Card className="border-0 shadow-card">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 text-center">
                  We proudly offer same-day delivery to the following areas:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {deliveryAreas.map((area, index) => (
                    <div key={index} className="text-center p-3 rounded-lg bg-background">
                      <span className="font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <Reviews />

      {/* Contact Info */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-semibold mb-8 text-center">Visit Us</h2>
          <Card className="border-0 shadow-card">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
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
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a 
                      href="tel:9257369494" 
                      className="text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      (925) 736-9494
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:cattailsflorist@gmail.com" 
                      className="text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      cattailsflorist@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
