export default function InteligenciaNegocios() {
  return (
    <article className="space-y-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Inteligencia de Negocios (Business Intelligence)
        </h1>
        <p className="text-xl text-primary-600">
          Transformando datos en decisiones estratégicas
        </p>
      </header>

      <section className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            ¿Qué es la Inteligencia de Negocios?
          </h2>
          <p className="text-primary-700 mb-6">
            La Inteligencia de Negocios (BI) es el conjunto de estrategias, aplicaciones, datos, productos,
            tecnologías y arquitecturas técnicas enfocadas a la administración y creación de conocimiento
            mediante el análisis de datos existentes en una organización.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-primary-800 mb-4">Objetivos Principales</h3>
              <ul className="space-y-2 text-primary-700">
                <li>• Acceso a datos confiables y oportunos</li>
                <li>• Transformación de datos en información</li>
                <li>• Toma de decisiones basada en hechos</li>
                <li>• Entendimiento del negocio</li>
              </ul>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-primary-800 mb-4">Beneficios</h3>
              <ul className="space-y-2 text-primary-700">
                <li>• Mejora en la toma de decisiones</li>
                <li>• Optimización de operaciones</li>
                <li>• Identificación de oportunidades</li>
                <li>• Ventaja competitiva</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Componentes de la Inteligencia de Negocios
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">Fuentes de Datos</h3>
              <p className="text-primary-600">Bases de datos operacionales, archivos externos, datos históricos</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">ETL</h3>
              <p className="text-primary-600">Procesos de extracción, transformación y carga de datos</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">Data Warehouse</h3>
              <p className="text-primary-600">Almacén centralizado de datos empresariales</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">Análisis OLAP</h3>
              <p className="text-primary-600">Procesamiento analítico en línea para análisis multidimensional</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">Minería de Datos</h3>
              <p className="text-primary-600">Descubrimiento de patrones y relaciones en los datos</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">Visualización</h3>
              <p className="text-primary-600">Dashboards y reportes para presentación de información</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="bg-primary-100 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6 text-center">
            Ciclo de la Inteligencia de Negocios
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-accent mb-2">1</div>
                <h3 className="text-lg font-medium text-primary-800">Recolección</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-accent mb-2">2</div>
                <h3 className="text-lg font-medium text-primary-800">Integración</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-accent mb-2">3</div>
                <h3 className="text-lg font-medium text-primary-800">Análisis</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-accent mb-2">4</div>
                <h3 className="text-lg font-medium text-primary-800">Acción</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
} 