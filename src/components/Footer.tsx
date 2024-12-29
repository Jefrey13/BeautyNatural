import { Heart, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Navegación */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-pink-300 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-pink-300 transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-pink-300 transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-300 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Av. Principal 123, Ciudad</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@beautynatural.com</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-pink-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="hover:text-pink-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="hover:text-pink-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Suscríbete para recibir nuestras novedades</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Tu email"
                className="bg-white/10"
              />
              <Button className="bg-pink-500 hover:bg-pink-600">
                Suscribir
              </Button>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span>© 2024 Beauty Natural.</span>
              <Heart size={16} className="text-pink-500" />
            </div>
            <div className="flex gap-4">
              <a
                href="/terms"
                className="hover:text-pink-300 transition-colors"
              >
                Términos y Condiciones
              </a>
              <a
                href="/privacy"
                className="hover:text-pink-300 transition-colors"
              >
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;