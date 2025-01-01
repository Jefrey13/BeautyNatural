import { Clock } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";

const AboutHistory = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Nuestra Historia
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <div>
                      <span className="font-semibold">2018:</span> Fundación de
                      Beauty Natural con productos básicos de skincare.
                    </div>
                    <div>
                      <span className="font-semibold">2019:</span> Expansión de línea
                      de productos y certificación orgánica.
                    </div>
                    <div>
                      <span className="font-semibold">2020:</span> Desarrollo de
                      fórmulas innovadoras y sostenibles.
                    </div>
                    <div>
                      <span className="font-semibold">2021-Presente:</span>{" "}
                      Crecimiento internacional y nuevas líneas premium.
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHistory;