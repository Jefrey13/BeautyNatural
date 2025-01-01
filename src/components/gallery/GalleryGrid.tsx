import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    alt: "Productos naturales",
    caption: "Nuestra línea de productos naturales",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    alt: "Ingredientes naturales",
    caption: "Ingredientes seleccionados cuidadosamente",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    alt: "Proceso de elaboración",
    caption: "Proceso artesanal de elaboración",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    alt: "Control de calidad",
    caption: "Riguroso control de calidad",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    alt: "Laboratorio",
    caption: "Nuestro laboratorio de investigación",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    alt: "Desarrollo",
    caption: "Desarrollo de nuevos productos",
  },
];
const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              variants={item}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-lg aspect-square"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center px-4">{image.caption}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            {selectedImage && (
              <div className="relative">
                <img
                  src={images.find(img => img.id === selectedImage)?.src}
                  alt={images.find(img => img.id === selectedImage)?.alt}
                  className="w-full rounded-lg"
                />
                <p className="text-center mt-4 text-gray-600">
                  {images.find(img => img.id === selectedImage)?.caption}
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
export default GalleryGrid;