import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Smartphone, Monitor, Headphones, Camera, Watch } from 'lucide-react';

const categories = [
  {
    icon: Cpu,
    title: 'Computing',
    description: 'Laptops, desktops, and accessories for work and play',
  },
  {
    icon: Smartphone,
    title: 'Mobile Devices',
    description: 'Latest smartphones and tablets from top brands',
  },
  {
    icon: Monitor,
    title: 'Displays',
    description: 'High-resolution monitors and smart TVs',
  },
  {
    icon: Headphones,
    title: 'Audio',
    description: 'Premium headphones, speakers, and sound systems',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Professional cameras and imaging equipment',
  },
  {
    icon: Watch,
    title: 'Wearables',
    description: 'Smartwatches and fitness trackers',
  },
];

export default function FeaturedCategoriesSection() {
  return (
    <div className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you need from our wide range of electronics categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-accent/50"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
