import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import productRoses from "@/assets/product-roses.jpg";
import productTulips from "@/assets/product-tulips.jpg";
import productOrchid from "@/assets/product-orchid.jpg";
import productHydrangea from "@/assets/product-hydrangea.jpg";

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 200]);
  
  const products = [
    { id: 1, name: "Garden Roses", price: 85, category: "Roses", image: productRoses, note: "Romantic & timeless" },
    { id: 2, name: "Spring Tulips", price: 65, category: "Tulips", image: productTulips, note: "Fresh & vibrant" },
    { id: 3, name: "Elegant Orchid", price: 95, category: "Orchids", image: productOrchid, note: "Lasting beauty" },
    { id: 4, name: "Blue Hydrangea", price: 75, category: "Hydrangeas", image: productHydrangea, note: "Classic elegance" },
    { id: 5, name: "Pink Rose Bouquet", price: 95, category: "Roses", image: productRoses, note: "Premium selection" },
    { id: 6, name: "White Tulip Arrangement", price: 70, category: "Tulips", image: productTulips, note: "Pure elegance" },
    { id: 7, name: "Phalaenopsis Orchid", price: 120, category: "Orchids", image: productOrchid, note: "Exotic beauty" },
    { id: 8, name: "Hydrangea Garden Mix", price: 85, category: "Hydrangeas", image: productHydrangea, note: "Abundant blooms" },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-display font-semibold mb-4">Shop Flowers</h1>
          <p className="text-lg text-muted-foreground">Browse our collection of seasonal arrangements</p>
        </div>

        {/* Filters & Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="border-0 shadow-card sticky top-24">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-display font-semibold mb-3">Category</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Flowers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Flowers</SelectItem>
                      <SelectItem value="roses">Roses</SelectItem>
                      <SelectItem value="tulips">Tulips</SelectItem>
                      <SelectItem value="orchids">Orchids</SelectItem>
                      <SelectItem value="hydrangeas">Hydrangeas</SelectItem>
                      <SelectItem value="lilies">Lilies</SelectItem>
                      <SelectItem value="plants">Plants</SelectItem>
                      <SelectItem value="sympathy">Sympathy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="font-display font-semibold mb-3">Occasion</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Occasion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Occasion</SelectItem>
                      <SelectItem value="birthday">Birthday</SelectItem>
                      <SelectItem value="anniversary">Anniversary</SelectItem>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="sympathy">Sympathy</SelectItem>
                      <SelectItem value="congratulations">Congratulations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="font-display font-semibold mb-3">Price Range</h3>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={200}
                    step={5}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-semibold mb-3">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {['red', 'pink', 'white', 'yellow', 'purple', 'mixed'].map((color) => (
                      <Button
                        key={color}
                        variant="outline"
                        size="sm"
                        className="capitalize"
                      >
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">{products.length} products</p>
              <Select defaultValue="featured">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
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
                      <span className="text-xl font-semibold">${product.price}</span>
                      <Button size="sm" variant="outline" className="hover-scale">
                        Quick Add
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
