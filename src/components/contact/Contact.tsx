import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [googleMapsKey, setGoogleMapsKey] = useState("");
  const center = { lat: 40, lng: -74.5 }; // Default coordinates

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const mapContainerStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '0.5rem'
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-pink-50 to-white">
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
          className="text-left mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Estamos aquí para ayudarte a encontrar los productos perfectos para ti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Nombre" className="bg-white" />
                    <Input placeholder="Email" type="email" className="bg-white" />
                  </div>
                  <Input placeholder="Asunto" className="bg-white" />
                  <Textarea
                    placeholder="Tu mensaje"
                    className="min-h-[150px] bg-white"
                  />
                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                    <Send className="mr-2 h-4 w-4" /> Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-pink-500" />
                  <p>123 Calle Belleza, Ciudad Cosmética</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-pink-500" />
                  <p>+1 234 567 890</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-pink-500" />
                  <p>info@beautynatural.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Horario de atención</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                <p>Sábados: 10:00 AM - 4:00 PM</p>
              </CardContent>
            </Card>
          
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 w-screen"
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249677.27669890382!2d-86.42327902765145!3d12.097946165906164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71560dd907880b%3A0x6c5ef4a2144f4c6a!2sManagua!5e0!3m2!1ses!2sni!4v1735515480465!5m2!1ses!2sni" className="w-full" height="400" loading="lazy"></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;