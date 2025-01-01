import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-pink-50 to-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Contacto
          </h1>
          <p className="text-xl text-gray-600">
          Estamos aquí para ayudarte a encontrar los productos perfectos para ti.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;