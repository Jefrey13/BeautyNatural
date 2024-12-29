import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Sparkles, Heart, Star, Leaf, Palette } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

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

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Nuestros Productos</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Descubre nuestra línea completa de productos de belleza naturales y efectivos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full transition-all duration-300 hover:shadow-lg ${service.color} backdrop-blur-sm border-0`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
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
                  <Button
                    className={`mt-4 w-full transition-all duration-300 ${
                      hoveredIndex === index ? "bg-pink-500 hover:bg-pink-600 text-white" : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    Ver productos
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

export default Services;