import { Heart, Leaf, Star, Sparkles, Award, Clock } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 opacity-70" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Nuestra Historia
          </h2>
          <p className="text-gray-600 text-lg">
            Desde 2018, nos hemos dedicado a crear productos cosméticos que conectan
            a las personas con su belleza natural de manera responsable y sostenible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={Star}
            title="Productos Premium"
            description="Formulamos cada producto pensando en la calidad y efectividad para tu piel."
          />
          <FeatureCard
            icon={Leaf}
            title="100% Natural"
            description="Utilizamos ingredientes naturales y orgánicos en todas nuestras fórmulas."
          />
          <FeatureCard
            icon={Sparkles}
            title="Resultados Visibles"
            description="Productos desarrollados y probados para garantizar resultados reales."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Nuestra Visión
                </h3>
                <p className="text-gray-600">
                  Ser líderes en cosmética natural, inspirando a las personas a
                  cuidar su piel con productos puros y efectivos, creando un impacto
                  positivo en el bienestar y la autoestima.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Nuestros Valores
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full" />
                    Calidad y pureza en cada producto
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full" />
                    Compromiso con la belleza natural
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full" />
                    Innovación y desarrollo constante
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full" />
                    Sostenibilidad y respeto al medio ambiente
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Nuestra Historia
                </h3>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <span className="font-semibold">2018:</span> Fundación de
                    Beauty Natural con productos básicos de skincare.
                  </div>
                  <div>
                    <span className="font-semibold">2019:</span> Expansión de línea
                    de productos y certificación orgánica.
                  </div>
                  <div>
                    <span className="font-semibold">2020:</span> Desarrollo de
                    fórmulas innovadoras y sostenibles.
                  </div>
                  <div>
                    <span className="font-semibold">2021-Presente:</span>{" "}
                    Crecimiento internacional y nuevas líneas premium.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-pink-100/50 via-purple-100/50 to-rose-100/50 rounded-lg p-8 backdrop-blur-sm">
          <div className="absolute inset-0 bg-white/40 rounded-lg" />
          <div className="relative">
            <h3 className="text-2xl font-bold text-secondary mb-6 text-center">
              ¿Por Qué Elegirnos?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-pink-500" />
                    </div>
                    <h4 className="font-semibold text-lg">Calidad Premium</h4>
                  </div>
                  <p className="text-gray-600">
                    Más de 5 años creando productos de belleza con ingredientes de
                    la más alta calidad.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-pink-500" />
                    </div>
                    <h4 className="font-semibold text-lg">100% Natural</h4>
                  </div>
                  <p className="text-gray-600">
                    Productos formulados con ingredientes naturales y sostenibles.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-pink-500" />
                    </div>
                    <h4 className="font-semibold text-lg">Resultados Reales</h4>
                  </div>
                  <p className="text-gray-600">
                    Eficacia comprobada y resultados visibles en tu piel.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-lg transition-shadow duration-300">
    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-pink-500" />
    </div>
    <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;