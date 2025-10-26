import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Award, Calendar, Star } from "lucide-react";
import Reviews from "@/components/Reviews";
import heroBanner from "@/assets/hero-banner.jpg";
import productRoses from "@/assets/product-roses.jpg";
import productTulips from "@/assets/product-tulips.jpg";
import productOrchid from "@/assets/product-orchid.jpg";
import productHydrangea from "@/assets/product-hydrangea.jpg";

const Home = () => {
  const bestsellers = [
    { id: 1, name: "Garden Roses", price: "$85", image: productRoses, note: "Romantic & timeless" },
    { id: 2, name: "Spring Tulips", price: "$65", image: productTulips, note: "Fresh & vibrant" },
    { id: 3, name: "Elegant Orchid", price: "$95", image: productOrchid, note: "Lasting beauty" },
    { id: 4, name: "Blue Hydrangea", price: "$75", image: productHydrangea, note: "Classic elegance" },
  ];

  const features = [
    {
      icon: Truck,
      title: "Same-Day Delivery",
      description: "Order by 2 PM for same-day delivery across Danville and surrounding areas."
    },
    {
      icon: Award,
      title: "Designer's Choice",
      description: "Let our expert florists create a stunning arrangement with the freshest blooms."
    },
    {
      icon: Calendar,
      title: "Wedding Consults",
      description: "Book a personalized consultation for your special day. We create bespoke florals."
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBanner} 
            alt="Seasonal floral arrangement"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background/90" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-background mb-6 tracking-tight">
            Seasonal Florals,<br />Thoughtfully Crafted
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8 font-light">
            Elegant arrangements for every occasion
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="h-12 px-8 bg-background text-foreground hover:bg-background/90 shadow-elegant">
                Shop Now
              </Button>
            </Link>
            <Link to="/weddings">
              <Button size="lg" variant="outline" className="h-12 px-8 border-2 border-background text-background hover:bg-background hover:text-foreground">
                Plan a Wedding
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-smooth hover-scale">
              <CardContent className="p-8 text-center">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-semibold mb-4">Bestsellers</h2>
          <p className="text-lg text-muted-foreground">Our most loved arrangements</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product) => (
            <Card key={product.id} className="border-0 shadow-card hover:shadow-hover transition-smooth overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-1">{product.note}</p>
                <h3 className="font-display font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold">{product.price}</span>
                  <Button size="sm" variant="outline" className="hover-scale">
                    Quick Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Delivery Banner */}
      <section className="bg-surface py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-semibold mb-4">Same-Day Delivery Available</h2>
          <p className="text-lg text-muted-foreground mb-2">
            Serving Alamo, Blackhawk, Danville, Diablo, Dublin, Pleasanton, San Ramon, and Walnut Creek
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Orders placed by 2 PM qualify for same-day delivery
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="hover-scale">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-3xl font-display font-semibold mb-1">4.9/5</p>
            <p className="text-muted-foreground">Customer Rating</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p className="text-3xl font-display font-semibold mb-1">30+ Years</p>
            <p className="text-muted-foreground">Serving the Community</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Truck className="h-8 w-8 mx-auto mb-3 text-accent" />
            <p className="text-3xl font-display font-semibold mb-1">Same Day</p>
            <p className="text-muted-foreground">Local Delivery</p>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-semibold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground">Real reviews from real customers</p>
          </div>
          <Reviews />
        </div>
      </section>
    </div>
  );
};

export default Home;
