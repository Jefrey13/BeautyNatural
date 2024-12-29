import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1564419379075-584260fc947b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENyZW1hJTIwZmFjaWFsJTIwbmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Crema facial natural",
    caption: "Nuestra crema facial con ingredientes 100% naturales",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1704297004668-502f3bfdb429?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFNlcnVtJTIwaGlkcmF0YW50ZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Serum hidratante",
    caption: "Serum hidratante con vitamina C",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFzY2FyaWxsYSUyMGZhY2lhbHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Mascarilla facial",
    caption: "Mascarilla facial purificante",
  },
  // Add more images as needed
];

const Gallery = () => {
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
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
          Nuestra Galería
        </h2>
        
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
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center px-4">{image.caption}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button
            // size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white"
          >
            Ver Galería Completa
          </Button>
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>
                {selectedImage && images.find(img => img.id === selectedImage)?.alt}
              </DialogTitle>
              <DialogDescription>
                {selectedImage && images.find(img => img.id === selectedImage)?.caption}
              </DialogDescription>
            </DialogHeader>
            <div className="relative">
              {selectedImage && (
                <img
                  src={images.find(img => img.id === selectedImage)?.src}
                  alt={images.find(img => img.id === selectedImage)?.alt}
                  className="w-full rounded-lg"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;