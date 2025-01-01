import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-pink-500">
              Beauty Natural
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-center items-center space-x-8">
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/about">Nosotros</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/contact">Contacto</NavLink>
            <Button variant="default" className="bg-pink-500 text-white hover:bg-pink-600">Contact Us</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="/" onClick={toggleMenu}>
                Inicio
              </MobileNavLink>
              <MobileNavLink href="/about" onClick={toggleMenu}>
                Nosotros
              </MobileNavLink>
              <MobileNavLink href="/services" onClick={toggleMenu}>
                Servicios
              </MobileNavLink>
              <MobileNavLink href="/gallery" onClick={toggleMenu}>
              Gallery
              </MobileNavLink>
              <MobileNavLink href="/contact" onClick={toggleMenu}>
                Contacto
              </MobileNavLink>
              <div className="pt-2">
                <Button className="w-full text-white bg-pink-500 hover:bg-pink-600">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-pink-500 transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-pink-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
  >
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-gray-50"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Header;