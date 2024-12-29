
const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">

      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Términos y Condiciones</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
            <p className="text-gray-600 mb-4">
              Al acceder y utilizar el sitio web de Beauty Natural, usted acepta estos términos y condiciones en su totalidad.
              Si no está de acuerdo con estos términos y condiciones o cualquier parte de estos términos y condiciones, no debe utilizar este sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Uso del Sitio Web</h2>
            <p className="text-gray-600 mb-4">
              Este sitio web está diseñado para proporcionar información general sobre nuestros productos y servicios.
              No debe utilizar este sitio web de ninguna manera que cause, o pueda causar, daño al sitio web o deterioro
              de la disponibilidad o accesibilidad del sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Términos de Productos</h2>
            <p className="text-gray-600 mb-4">
              Todos los productos mostrados en nuestro sitio web están sujetos a disponibilidad.
              Nos reservamos el derecho de descontinuar cualquier producto en cualquier momento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Política de Pago y Reembolso</h2>
            <p className="text-gray-600 mb-4">
              Aceptamos varios métodos de pago y procesamos todos los reembolsos de acuerdo con las leyes aplicables.
              Los reembolsos se procesan dentro de los 14 días posteriores a la solicitud aprobada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Contacto</h2>
            <p className="text-gray-600">
              Si tiene alguna pregunta sobre estos términos y condiciones, por favor contáctenos en:
              <br />
              <a href="mailto:info@beautynatural.com" className="text-pink-500 hover:text-pink-600">
                info@beautynatural.com
              </a>
            </p>
          </section>
        </div>
      </main>

    </div>
  );
};

export default Terms;