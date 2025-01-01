import { Star, Leaf, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const AboutFeatures = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Star}
            title="Productos Premium"
            description="Formulamos cada producto pensando en la calidad y efectividad para tu piel."
          />
          <FeatureCard
            icon={Leaf}
            title="100% Natural"
            description="Utilizamos ingredientes naturales y orgánicos en todas nuestras fórmulas."
          />
          <FeatureCard
            icon={Sparkles}
            title="Resultados Visibles"
            description="Productos desarrollados y probados para garantizar resultados reales."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-lg transition-shadow duration-300"
  >
    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-pink-500" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default AboutFeatures;