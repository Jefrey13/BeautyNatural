import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617221082509-fd8ae54c1769?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10" />
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl ml-0 md:ml-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
            Descubre tu belleza{" "}
            <span className="text-primary">natural.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
            Desde 2018, creamos productos cosméticos naturales que realzan tu belleza única,
            combinando la ciencia moderna con ingredientes puros y sostenibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg bg-pink-500 hover:bg-pink-600 text-white">
              Explorar productos
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Conoce más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;