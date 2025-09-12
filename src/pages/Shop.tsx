import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Cart } from "@/components/Cart";

import { useCart } from "@/components/CartContext";
import { Heart, ShoppingCart, User, Search, ShoppingBag, Star } from "lucide-react";
import { toast } from "sonner";

// Import product images
import f1OrangeTee from "@/assets/products/f1-orange-tee.jpg";
import f1BlueTee from "@/assets/products/f1-blue-tee.jpg";
import circuitPolo from "@/assets/products/circuit-polo.jpg";
import trackJacket from "@/assets/products/track-jacket.jpg";
import redBullCap from "@/assets/products/red-bull-cap.jpg";
import mercedesCap from "@/assets/products/mercedes-cap.jpg";
import ferrariCap from "@/assets/products/ferrari-cap.jpg";
import mclarenCap from "@/assets/products/mclaren-cap.jpg";
import astonMartinCap from "@/assets/products/aston-martin-cap.jpg";
import f1RainJacket from "@/assets/products/f1-rain-jacket.jpg";
import redBullJacket from "@/assets/products/red-bull-jacket.jpg";
import mercedesWindbreaker from "@/assets/products/mercedes-windbreaker.jpg";
import f1Gloves from "@/assets/products/f1-gloves.jpg";
import f1Keychain from "@/assets/products/f1-keychain.jpg";
import f1Lanyard from "@/assets/products/f1-lanyard.jpg";
import f1CarModel from "@/assets/products/f1-car-model.jpg";
import f1HelmetReplica from "@/assets/products/f1-helmet-replica.jpg";
import f1TrophyReplica from "@/assets/products/f1-trophy-replica.jpg";
import f1PosterCollection from "@/assets/products/f1-poster-collection.jpg";

// Mock product data with F1 merchandise
const products = [
  // Caps & Hats
  {
    id: "cap-1",
    name: "Red Bull Racing Team Cap 2025",
    price: 35,
    originalPrice: 45,
    image: redBullCap,
    category: "caps-hats",
    discount: 22,
    rating: 4.8,
    inStock: true
  },
  {
    id: "cap-2", 
    name: "Mercedes-AMG Petronas Team Cap",
    price: 32,
    image: mercedesCap,
    category: "caps-hats",
    rating: 4.7,
    inStock: true
  },
  {
    id: "cap-3",
    name: "Ferrari Scuderia SF Team Cap",
    price: 38,
    image: ferrariCap, 
    category: "caps-hats",
    rating: 4.9,
    inStock: true
  },
  {
    id: "cap-4",
    name: "McLaren Papaya Team Cap",
    price: 34,
    image: mclarenCap,
    category: "caps-hats", 
    rating: 4.6,
    inStock: false
  },
  {
    id: "cap-5",
    name: "Aston Martin F1 Team Cap",
    price: 36,
    image: astonMartinCap,
    category: "caps-hats",
    rating: 4.5,
    inStock: true
  },

  // T-Shirts
  {
    id: "tshirt-1",
    name: "F1 Singapore GP 2025 T-Shirt",
    price: 42,
    originalPrice: 55,
    image: f1OrangeTee,
    category: "t-shirts",
    discount: 24,
    rating: 4.8,
    inStock: true
  },
  {
    id: "tshirt-2",
    name: "Red Bull Racing Driver T-Shirt",
    price: 45,
    image: f1BlueTee,
    category: "t-shirts",
    rating: 4.7,
    inStock: true
  },
  {
    id: "tshirt-3",
    name: "Mercedes Lewis Hamilton T-Shirt",
    price: 48,
    image: f1BlueTee,
    category: "t-shirts",
    rating: 4.9,
    inStock: true
  },
  {
    id: "tshirt-4",
    name: "Ferrari Charles Leclerc T-Shirt",
    price: 46,
    image: f1OrangeTee,
    category: "t-shirts",
    rating: 4.8,
    inStock: true
  },
  {
    id: "tshirt-5",
    name: "McLaren Lando Norris T-Shirt",
    price: 44,
    image: f1BlueTee,
    category: "t-shirts",
    rating: 4.6,
    inStock: false
  },

  // Jackets
  {
    id: "jacket-1",
    name: "F1 Team Rain Jacket",
    price: 125,
    originalPrice: 165,
    image: f1RainJacket,
    category: "jackets",
    discount: 24,
    rating: 4.9,
    inStock: true
  },
  {
    id: "jacket-2",
    name: "Red Bull Racing Softshell Jacket",
    price: 145,
    image: redBullJacket,
    category: "jackets",
    rating: 4.8,
    inStock: true
  },
  {
    id: "jacket-3",
    name: "Mercedes Team Windbreaker",
    price: 135,
    image: mercedesWindbreaker,
    category: "jackets",
    rating: 4.7,
    inStock: true
  },

  // Polo Shirts
  {
    id: "polo-1",
    name: "F1 Official Polo Shirt",
    price: 65,
    originalPrice: 85,
    image: circuitPolo,
    category: "polos",
    discount: 24,
    rating: 4.8,
    inStock: true
  },
  {
    id: "polo-2",
    name: "Ferrari Team Polo",
    price: 72,
    image: circuitPolo,
    category: "polos",
    rating: 4.9,
    inStock: true
  },
  {
    id: "polo-3",
    name: "McLaren Racing Polo",
    price: 68,
    image: circuitPolo,
    category: "polos",
    rating: 4.7,
    inStock: true
  },

  // Accessories
  {
    id: "acc-1",
    name: "F1 Keychain Collection",
    price: 15,
    image: f1Keychain,
    category: "accessories",
    rating: 4.5,
    inStock: true
  },
  {
    id: "acc-2",
    name: "F1 Racing Gloves",
    price: 55,
    image: f1Gloves,
    category: "accessories", 
    rating: 4.7,
    inStock: true
  },
  {
    id: "acc-3",
    name: "F1 Team Lanyard",
    price: 12,
    image: f1Lanyard,
    category: "accessories",
    rating: 4.4,
    inStock: true
  },
  {
    id: "acc-4",
    name: "F1 Car Model 1:43",
    price: 89,
    image: f1CarModel,
    category: "accessories",
    rating: 4.9,
    inStock: true
  },

  // Collectibles
  {
    id: "coll-1",
    name: "Signed F1 Racing Helmet Replica",
    price: 299,
    originalPrice: 399,
    image: f1HelmetReplica,
    category: "collectibles",
    discount: 25,
    rating: 5.0,
    inStock: true
  },
  {
    id: "coll-2",
    name: "F1 Championship Trophy Replica",
    price: 199,
    image: f1TrophyReplica,
    category: "collectibles",
    rating: 4.8,
    inStock: true
  },
  {
    id: "coll-3",
    name: "Vintage F1 Poster Collection",
    price: 75,
    image: f1PosterCollection,
    category: "collectibles",
    rating: 4.6,
    inStock: true
  }
];

const categories = ["all", "caps-hats", "t-shirts", "jackets", "polos", "accessories", "collectibles"];

const Shop = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartAnimation, setCartAnimation] = useState(false);
  const { } = useCart();

  // Animation on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [selectedCategory]);

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const categoryLabels: { [key: string]: string } = {
    "all": "All Products",
    "caps-hats": "Caps & Hats", 
    "t-shirts": "T-Shirts",
    "jackets": "Jackets",
    "polos": "Polo Shirts",
    "accessories": "Accessories",
    "collectibles": "Collectibles"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="font-medium">🏎️ Singapore GP 2025 Special - Free shipping on orders over $75!</p>
        </div>
      </div>

      {/* Shop Header */}
      <div className="border-b bg-muted/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  {categoryLabels[category]}
                </Button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full lg:w-64"
                />
              </div>
              
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              
              <Cart />
              
              <Button variant="outline" size="icon">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Sort Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">
              {categoryLabels[selectedCategory]} 
              <span className="text-muted-foreground text-lg ml-2">
                ({filteredProducts.length} products)
              </span>
            </h1>
          </div>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Customer Rating</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id}
              className="product-card group cursor-pointer border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105 opacity-0"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.discount && (
                    <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-700">
                      -{product.discount}%
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge variant="secondary" className="absolute top-2 right-2">
                      Out of Stock
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.rating})
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-lg">No products found</p>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default Shop;