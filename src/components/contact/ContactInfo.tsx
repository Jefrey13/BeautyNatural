import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;