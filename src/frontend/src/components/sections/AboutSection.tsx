import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Globe, Zap } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Happy Customers', value: '50,000+' },
  { icon: Globe, label: 'Countries Served', value: '25+' },
  { icon: Award, label: 'Awards Won', value: '15+' },
  { icon: Zap, label: 'Products Sold', value: '100,000+' },
];

export default function AboutSection() {
  return (
    <div className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About Uttah Electronics
            </h2>
            <p className="text-lg text-muted-foreground">
              Your trusted partner in the world of electronics
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
            <p className="text-muted-foreground text-center text-lg leading-relaxed">
              Since 2020, Uttah Electronics has been at the forefront of delivering cutting-edge
              technology solutions to customers worldwide. We pride ourselves on offering only the
              highest quality products from leading manufacturers, backed by exceptional customer
              service and technical support.
            </p>
            <p className="text-muted-foreground text-center text-lg leading-relaxed mt-6">
              Our mission is to make advanced technology accessible to everyone, whether you're a
              professional seeking the latest tools or a consumer looking for reliable electronics
              for everyday use. We carefully curate our product selection to ensure you get the
              best value and performance.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <p className="text-2xl lg:text-3xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
