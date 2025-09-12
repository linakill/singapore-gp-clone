import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Category {
  id: string;
  name: string;
  image: string;
  itemCount: number;
  gradient: string;
  icon: string;
}

const categories: Category[] = [
  {
    id: 'caps-hats',
    name: 'Caps & Hats',
    image: '/placeholder.svg',
    itemCount: 5,
    gradient: 'from-red-600 via-red-700 to-red-800',
    icon: ''
  },
  {
    id: 't-shirts',
    name: 'T-Shirts',
    image: '/placeholder.svg',
    itemCount: 5,
    gradient: 'from-blue-600 via-blue-700 to-blue-800',
    icon: ''
  },
  {
    id: 'jackets',
    name: 'Jackets',
    image: '/placeholder.svg',
    itemCount: 3,
    gradient: 'from-emerald-600 via-emerald-700 to-emerald-800',
    icon: ''
  },
  {
    id: 'polos',
    name: 'Polo Shirts',
    image: '/placeholder.svg',
    itemCount: 3,
    gradient: 'from-purple-600 via-purple-700 to-purple-800',
    icon: ''
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: '/placeholder.svg',
    itemCount: 4,
    gradient: 'from-orange-600 via-orange-700 to-orange-800',
    icon: ''
  },
  {
    id: 'collectibles',
    name: 'Collectibles',
    image: '/placeholder.svg',
    itemCount: 3,
    gradient: 'from-pink-600 via-pink-700 to-pink-800',
    icon: ''
  }
];

interface CategoryCarouselProps {
  onCategorySelect: (categoryId: string) => void;
  selectedCategory: string;
}

export const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ 
  onCategorySelect, 
  selectedCategory 
}) => {
  return (
    <div className="py-8 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 animate-fade-in">Shop by Category</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: false,
            skipSnaps: false,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {categories.map((category, index) => (
              <CarouselItem 
                key={category.id} 
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl group border-0 overflow-hidden ${
                    selectedCategory === category.id ? 'ring-2 ring-primary/50 scale-105' : ''
                  }`}
                  onClick={() => onCategorySelect(category.id)}
                >
                  <CardContent className="p-0 relative">
                    <div className={`h-24 bg-gradient-to-br ${category.gradient} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300"></div>
                      <h3 className="text-white font-semibold text-base z-10 text-center px-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                        {category.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex hover:scale-110 transition-transform duration-200" />
          <CarouselNext className="hidden md:flex hover:scale-110 transition-transform duration-200" />
        </Carousel>
      </div>
    </div>
  );
};