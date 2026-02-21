import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    name: 'UltraBook Pro 15',
    description: 'High-performance laptop with 16GB RAM and 512GB SSD',
    price: '$1,299',
    badge: 'Best Seller',
    rating: 4.8,
  },
  {
    name: 'SmartPhone X12',
    description: '6.7" OLED display, 5G enabled, triple camera system',
    price: '$899',
    badge: 'New Arrival',
    rating: 4.9,
  },
  {
    name: '4K Monitor Ultra',
    description: '32" 4K UHD display with HDR support and 144Hz refresh',
    price: '$649',
    badge: null,
    rating: 4.7,
  },
  {
    name: 'Wireless Earbuds Pro',
    description: 'Active noise cancellation, 30-hour battery life',
    price: '$249',
    badge: 'Popular',
    rating: 4.6,
  },
  {
    name: 'Smart Watch Elite',
    description: 'Fitness tracking, heart rate monitor, GPS enabled',
    price: '$399',
    badge: null,
    rating: 4.5,
  },
  {
    name: 'Gaming Console Next',
    description: '4K gaming, ray tracing, 1TB storage',
    price: 'Request Quote',
    badge: 'Pre-Order',
    rating: 5.0,
  },
];

export default function FeaturedProductsSection() {
  return (
    <div className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of premium electronics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {product.name}
                  </CardTitle>
                  {product.badge && (
                    <Badge variant="secondary" className="ml-2 shrink-0">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center gap-1 mb-4">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">(120+ reviews)</span>
                </div>
                <p className="text-2xl font-bold text-accent">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full group/btn" variant="outline">
                  <ShoppingCart className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  {product.price === 'Request Quote' ? 'Request Quote' : 'Add to Cart'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
