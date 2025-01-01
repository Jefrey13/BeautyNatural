import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
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
  );
};

export default ContactForm;