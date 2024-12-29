import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <h1 className="text-9xl font-bold text-pink-500">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Página no encontrada</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
        </div>
        <a href="/">
          <Button className="bg-pink-500 text-white hover:bg-pink-600">
            <Home className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </a>
      </motion.div>
    </div>
  );
};
export default NotFound;