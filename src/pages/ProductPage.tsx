import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/components/CartContext";
import { ArrowLeft, Star, ShoppingBag, Heart, Share2 } from "lucide-react";
import { toast } from "sonner";

// Import product images (same as Shop.tsx)
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

// Same product data as Shop.tsx
const products = [
  {
    id: "cap-1",
    name: "Red Bull Racing Team Cap 2025",
    price: 35,
    originalPrice: 45,
    image: redBullCap,
    category: "caps-hats",
    discount: 22,
    rating: 4.8,
    inStock: true,
    sizes: ["One Size"],
    description: "Official Red Bull Racing team cap for the 2025 season. High-quality cotton construction with embroidered team logos and adjustable strap.",
    features: ["100% Cotton", "Adjustable strap", "Embroidered logos", "Official merchandise"]
  },
  {
    id: "cap-2", 
    name: "Mercedes-AMG Petronas Team Cap",
    price: 32,
    image: mercedesCap,
    category: "caps-hats",
    rating: 4.7,
    inStock: true,
    sizes: ["One Size"],
    description: "Mercedes-AMG Petronas F1 Team official cap. Premium quality with team colors and logo.",
    features: ["Premium materials", "Team colors", "Official licensing", "Comfortable fit"]
  },
  {
    id: "tshirt-1",
    name: "F1 Singapore GP 2025 T-Shirt",
    price: 42,
    originalPrice: 55,
    image: f1OrangeTee,
    category: "t-shirts",
    discount: 24,
    rating: 4.8,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Exclusive F1 Singapore Grand Prix 2025 commemorative t-shirt. Premium cotton blend with vibrant race graphics.",
    features: ["100% Cotton", "Pre-shrunk", "Race graphics", "Limited edition"]
  },
  {
    id: "jacket-1",
    name: "F1 Team Rain Jacket",
    price: 125,
    originalPrice: 165,
    image: f1RainJacket,
    category: "jackets",
    discount: 24,
    rating: 4.9,
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Professional-grade rain jacket worn by F1 teams. Waterproof, breathable, and designed for performance.",
    features: ["Waterproof", "Breathable fabric", "Team-spec design", "Multiple pockets"]
  },
];

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/shop")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shop
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 1 && !selectedSize) {
      toast.error("Please select a size");
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: `${product.id}-${selectedSize || 'onesize'}-${Date.now()}-${i}`,
        name: selectedSize ? `${product.name} (${selectedSize})` : product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        type: 'product'
      });
    }
    
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/shop")}
            className="p-0 h-auto font-normal text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shop
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[600px] object-cover"
              />
              {product.discount && (
                <Badge className="absolute top-4 left-4 bg-red-600 hover:bg-red-700 text-lg px-3 py-1">
                  -{product.discount}%
                </Badge>
              )}
              {!product.inStock && (
                <Badge variant="secondary" className="absolute top-4 right-4 text-lg px-3 py-1">
                  Out of Stock
                </Badge>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-xs">
                  {product.category.replace('-', ' ').toUpperCase()}
                </Badge>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  ({product.rating} rating)
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              {product.features && (
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-3">Key Features:</h3>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 1 && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Size:</label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Quantity */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Quantity:</label>
                <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 h-12 text-base"
                  size="lg"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                
                <Button variant="outline" size="lg" className="h-12">
                  <Heart className="h-5 w-5" />
                </Button>
                
                <Button variant="outline" size="lg" className="h-12">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Stock Status */}
              {product.inStock && (
                <p className="text-sm text-green-600 font-medium">
                  ✓ In Stock - Ready to Ship
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;