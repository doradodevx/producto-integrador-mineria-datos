export default function Home() {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary-900">
          Minería de Datos
        </h1>
        <p className="text-xl text-primary-600 max-w-2xl mx-auto">
          Explora el mundo del análisis de datos y la inteligencia de negocios
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-primary-700 text-center max-w-3xl mx-auto">
          Bienvenido a nuestro portal informativo sobre Minería de Datos, Inteligencia de Negocios
          y conceptos relacionados. Aquí encontrarás información detallada sobre diversos temas
          fundamentales en el campo del análisis de datos.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">
              Base Teórica
            </h2>
            <p className="text-primary-600">
              Explora los conceptos fundamentales, desde la sociedad de la información hasta
              las técnicas avanzadas de minería de datos.
            </p>
            <ul className="mt-4 space-y-2 text-primary-700">
              <li>• Sociedad de la información</li>
              <li>• Inteligencia de negocios</li>
              <li>• Proceso KDD</li>
              <li>• Técnicas de minería</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">
              Resultados
            </h2>
            <p className="text-primary-600">
              Descubre las aplicaciones prácticas, herramientas de análisis y visualización
              de datos a través de paneles gerenciales.
            </p>
            <ul className="mt-4 space-y-2 text-primary-700">
              <li>• Almacén de datos</li>
              <li>• Herramientas de análisis</li>
              <li>• Técnicas de análisis</li>
              <li>• Panel Gerencial</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-16 bg-primary-100 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-primary-800 mb-4 text-center">
          ¿Por qué estudiar Minería de Datos?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-primary-800 mb-2">Toma de Decisiones</h3>
            <p className="text-primary-600">Mejora la toma de decisiones basada en datos</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-primary-800 mb-2">Patrones Ocultos</h3>
            <p className="text-primary-600">Descubre patrones y tendencias en grandes volúmenes de datos</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-primary-800 mb-2">Ventaja Competitiva</h3>
            <p className="text-primary-600">Obtén ventajas competitivas en el mercado actual</p>
          </div>
        </div>
      </section>
    </div>
  )
} 