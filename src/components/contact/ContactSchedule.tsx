import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";

const ContactSchedule = () => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Horario de atención</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
        <p>Sábados: 10:00 AM - 4:00 PM</p>
      </CardContent>
    </Card>
  );
};

export default ContactSchedule;