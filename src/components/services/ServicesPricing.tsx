import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
const plans = [
  {
    name: "Básico",
    price: "29",
    description: "Perfecto para comenzar",
    features: [
      "3 productos de cuidado facial",
      "1 producto de cuidado corporal",
      "Envío gratis",
      "Soporte básico",
    ],
  },
  {
    name: "Premium",
    price: "59",
    description: "Para quienes buscan más",
    features: [
      "5 productos de cuidado facial",
      "3 productos de cuidado corporal",
      "1 producto de línea premium",
      "Envío express gratis",
      "Soporte prioritario",
    ],
  },
  {
    name: "VIP",
    price: "99",
    description: "La experiencia completa",
    features: [
      "Todos los productos de cuidado facial",
      "Todos los productos corporales",
      "2 productos premium exclusivos",
      "Envío express garantizado",
      "Soporte 24/7",
      "Consulta personalizada",
    ],
  },
];
const ServicesPricing = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Planes y Precios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra el plan perfecto para tus necesidades de belleza
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/mes</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-pink-500 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                    Seleccionar plan
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
export default ServicesPricing;