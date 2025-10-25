import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const CustomOrder = () => {
  const [budget, setBudget] = useState([100]);
  const [date, setDate] = useState<Date>();
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occasion: "",
    allergies: "",
    notes: "",
  });

  const colors = [
    { name: "Red", value: "red", hex: "#EF4444" },
    { name: "Pink", value: "pink", hex: "#EC4899" },
    { name: "White", value: "white", hex: "#FFFFFF" },
    { name: "Yellow", value: "yellow", hex: "#F59E0B" },
    { name: "Purple", value: "purple", hex: "#A855F7" },
    { name: "Orange", value: "orange", hex: "#F97316" },
    { name: "Blue", value: "blue", hex: "#3B82F6" },
    { name: "Mixed", value: "mixed", hex: "linear-gradient(45deg, #EF4444, #EC4899, #3B82F6)" },
  ];

  const toggleColor = (colorValue: string) => {
    setSelectedColors(prev => 
      prev.includes(colorValue) 
        ? prev.filter(c => c !== colorValue)
        : [...prev, colorValue]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will integrate with email workflow via Lovable Cloud
    toast.success("Order submitted! We'll contact you within 24 hours to confirm details.");
    setFormData({ name: "", email: "", phone: "", occasion: "", allergies: "", notes: "" });
    setBudget([100]);
    setDate(undefined);
    setSelectedColors([]);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-display font-semibold mb-4">Custom Order</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create a unique arrangement tailored perfectly to your needs
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div className="space-y-6">
                  <h3 className="text-xl font-display font-semibold">Your Information</h3>
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
                      <Label htmlFor="occasion">Occasion</Label>
                      <Input
                        id="occasion"
                        value={formData.occasion}
                        onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                        placeholder="Birthday, Anniversary, etc."
                      />
                    </div>
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-4">
                  <h3 className="text-xl font-display font-semibold">Budget</h3>
                  <div className="space-y-4">
                    <Slider
                      value={budget}
                      onValueChange={setBudget}
                      max={500}
                      min={50}
                      step={10}
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">$50</span>
                      <div className="text-center">
                        <div className="text-3xl font-display font-semibold">${budget[0]}</div>
                        <div className="text-sm text-muted-foreground">Your budget</div>
                      </div>
                      <span className="text-sm text-muted-foreground">$500</span>
                    </div>
                  </div>
                </div>

                {/* Color Palette */}
                <div className="space-y-4">
                  <h3 className="text-xl font-display font-semibold">Color Palette</h3>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.value}
                        type="button"
                        onClick={() => toggleColor(color.value)}
                        className={cn(
                          "aspect-square rounded-xl border-2 transition-smooth relative overflow-hidden",
                          selectedColors.includes(color.value) 
                            ? "border-foreground scale-95" 
                            : "border-border hover:border-accent"
                        )}
                        style={{ 
                          background: color.hex,
                          ...(color.value === 'white' && { border: '2px solid #E5E7EB' })
                        }}
                        aria-label={color.name}
                      >
                        {selectedColors.includes(color.value) && (
                          <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
                            <div className="h-6 w-6 rounded-full bg-background flex items-center justify-center">
                              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Delivery Date */}
                <div className="space-y-4">
                  <h3 className="text-xl font-display font-semibold">Delivery Date</h3>
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
                        {date ? format(date, "PPP") : <span>Select delivery date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="pointer-events-auto"
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Additional Details */}
                <div className="space-y-4">
                  <h3 className="text-xl font-display font-semibold">Additional Details</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="allergies">Allergies or Dislikes</Label>
                    <Input
                      id="allergies"
                      value={formData.allergies}
                      onChange={(e) => setFormData({...formData, allergies: e.target.value})}
                      placeholder="Any flowers to avoid?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Special Instructions</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      placeholder="Share any specific requests, style preferences, or details about the recipient..."
                      rows={5}
                    />
                  </div>
                </div>

                {/* Summary */}
                <Card className="bg-surface border-0">
                  <CardContent className="p-6">
                    <h4 className="font-display font-semibold mb-3">Order Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="font-medium">${budget[0]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Colors:</span>
                        <span className="font-medium">
                          {selectedColors.length > 0 ? `${selectedColors.length} selected` : "Not specified"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Delivery:</span>
                        <span className="font-medium">
                          {date ? format(date, "MMM d, yyyy") : "Not specified"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button type="submit" size="lg" className="w-full hover-scale">
                  Submit Custom Order
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll contact you within 24 hours to confirm your custom arrangement
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomOrder;
