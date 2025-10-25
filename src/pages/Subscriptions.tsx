import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { toast } from "sonner";

const Subscriptions = () => {
  const plans = [
    {
      name: "Weekly",
      price: "$65",
      frequency: "per week",
      description: "Fresh blooms every week",
      features: [
        "Seasonal arrangement",
        "Designer's choice",
        "Free delivery",
        "Flexible scheduling",
        "Cancel anytime"
      ]
    },
    {
      name: "Bi-Weekly",
      price: "$60",
      frequency: "per delivery",
      description: "Perfect balance of freshness",
      features: [
        "Premium arrangements",
        "Designer's choice",
        "Free delivery",
        "Flexible scheduling",
        "Cancel anytime"
      ],
      popular: true
    },
    {
      name: "Monthly",
      price: "$85",
      frequency: "per month",
      description: "Luxury blooms monthly",
      features: [
        "Large premium arrangement",
        "Designer's choice",
        "Free delivery",
        "Priority scheduling",
        "Cancel anytime"
      ]
    }
  ];

  const handleSubscribe = (planName: string) => {
    // Will integrate with Stripe via Lovable Cloud
    toast.success(`You selected the ${planName} plan. Redirecting to checkout...`);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-semibold mb-6">Flower Subscriptions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Brighten your home or office with fresh, seasonal arrangements delivered on your schedule
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={cn(
                "border-0 shadow-card hover:shadow-hover transition-smooth relative overflow-hidden",
                plan.popular && "ring-2 ring-accent"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-display font-semibold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.frequency}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full hover-scale" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  onClick={() => handleSubscribe(plan.name)}
                >
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-semibold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Choose Your Plan", description: "Select delivery frequency that fits your lifestyle" },
              { step: "2", title: "Set Your Preferences", description: "Tell us about your style and color preferences" },
              { step: "3", title: "We Create", description: "Our designers craft fresh arrangements weekly" },
              { step: "4", title: "Enjoy", description: "Receive beautiful blooms at your doorstep" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-semibold text-accent">{item.step}</span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="container mx-auto px-4 py-20">
        <Card className="border-0 shadow-card max-w-3xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-display font-semibold mb-4">Delivery Information</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>✓ Free delivery to Alamo, Blackhawk, Danville, Diablo, Dublin, Pleasanton, San Ramon, and Walnut Creek</p>
              <p>✓ Flexible delivery scheduling - choose your preferred day</p>
              <p>✓ Recipient must be home to receive delivery</p>
              <p>✓ Valid contact phone number required</p>
              <p>✓ Pause or cancel your subscription anytime</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

export default Subscriptions;
