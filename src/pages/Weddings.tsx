import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Upload } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import weddingHero from "@/assets/wedding-hero.jpg";

const Weddings = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will integrate with email workflow via Lovable Cloud
    toast.success("Thank you! We'll contact you within 24 hours to discuss your wedding florals.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setDate(undefined);
  };

  const styles = [
    {
      title: "Romantic",
      description: "Soft pastels, garden roses, and lush greenery for a dreamy aesthetic",
      image: weddingHero,
    },
    {
      title: "Modern",
      description: "Clean lines, bold blooms, and contemporary designs",
      image: weddingHero,
    },
    {
      title: "Rustic",
      description: "Wildflowers, textured foliage, and natural elements",
      image: weddingHero,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={weddingHero} 
            alt="Wedding bouquet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-background/95" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-semibold text-background mb-4 tracking-tight">
            Wedding Florals
          </h1>
          <p className="text-xl text-background/90 font-light">
            Bespoke arrangements for your special day
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-display font-semibold mb-6">Your Vision, Our Expertise</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Cattails Florist, we believe your wedding flowers should reflect your unique love story. 
            With over 30 years of experience, we work closely with you to design stunning floral arrangements 
            that perfectly complement your wedding style, venue, and color palette.
          </p>
        </div>
      </section>

      {/* Style Galleries */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-display font-semibold mb-12 text-center">Wedding Styles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-smooth overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={style.image} 
                  alt={style.title}
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-display font-semibold text-xl mb-2">{style.title}</h3>
                <p className="text-muted-foreground">{style.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Consultation Form */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-semibold mb-4">Book a Consultation</h2>
              <p className="text-lg text-muted-foreground">
                Let's start planning your perfect wedding florals
              </p>
            </div>

            <Card className="border-0 shadow-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(925) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Event Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your vision</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Share details about your wedding style, colors, venue, or any inspiration you have..."
                      rows={5}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="moodboard">Moodboard / Inspiration (optional)</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-smooth cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload images or drag and drop
                      </p>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full hover-scale">
                    Request Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Weddings;
