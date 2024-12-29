
const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Política de Privacidad</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
            <p className="text-gray-600 mb-4">
              En Beauty Natural, nos comprometemos a proteger su privacidad y a procesar sus datos personales
              de manera transparente y segura. Esta política de privacidad explica cómo recopilamos,
              utilizamos y protegemos su información personal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Datos que Recopilamos</h2>
            <p className="text-gray-600 mb-4">
              Recopilamos la siguiente información:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Nombre y datos de contacto</li>
              <li>Información de la cuenta</li>
              <li>Historial de compras</li>
              <li>Preferencias de productos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Uso de sus Datos</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos su información personal para:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Procesar sus pedidos</li>
              <li>Mejorar nuestros productos y servicios</li>
              <li>Personalizar su experiencia</li>
              <li>Enviar comunicaciones de marketing (con su consentimiento)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Sus Derechos</h2>
            <p className="text-gray-600 mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Acceder a sus datos personales</li>
              <li>Corregir datos inexactos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Contacto</h2>
            <p className="text-gray-600">
              Si tiene preguntas sobre nuestra política de privacidad, contáctenos en:
              <br />
              <a href="mailto:privacy@beautynatural.com" className="text-pink-500 hover:text-pink-600">
                privacy@beautynatural.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Privacy;