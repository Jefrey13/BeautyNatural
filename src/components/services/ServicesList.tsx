import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Sparkles, Heart, Star, Leaf, Palette } from "lucide-react";
import { Button } from "../ui/button";
const services = [
  {
    title: "Cuidado facial",
    description: "Productos especializados para el cuidado diario de tu rostro.",
    icon: Sparkles,
    color: "bg-gradient-to-br from-pink-500/10 to-purple-500/10",
  },
  {
    title: "Cuidado corporal",
    description: "Tratamientos completos para nutrir y embellecer tu piel.",
    icon: Heart,
    color: "bg-gradient-to-br from-rose-500/10 to-pink-500/10",
  },
  {
    title: "Línea premium",
    description: "Productos exclusivos con ingredientes de alta gama.",
    icon: Star,
    color: "bg-gradient-to-br from-purple-500/10 to-blue-500/10",
  },
  {
    title: "Productos naturales",
    description: "Cosméticos elaborados con ingredientes 100% naturales.",
    icon: Leaf,
    color: "bg-gradient-to-br from-emerald-500/10 to-green-500/10",
  },
  {
    title: "Maquillaje",
    description: "Productos para realzar tu belleza natural.",
    icon: Palette,
    color: "bg-gradient-to-br from-violet-500/10 to-indigo-500/10",
  },
];
const ServicesList = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full ${service.color} backdrop-blur-sm border-0`}>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-white/10 backdrop-blur-sm p-2 mb-4">
                    <service.icon className="w-full h-full" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                    Ver más
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesList;