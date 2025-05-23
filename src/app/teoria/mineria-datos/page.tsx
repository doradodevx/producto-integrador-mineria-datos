export default function MineriaDatos() {
  return (
    <article className="space-y-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Minería de Datos (Data Mining)
        </h1>
        <p className="text-xl text-primary-600">
          Descubriendo patrones y conocimiento en grandes volúmenes de datos
        </p>
      </header>

      <section className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            ¿Qué es la Minería de Datos?
          </h2>
          <p className="text-primary-700 mb-6">
            La Minería de Datos es el proceso de descubrir patrones, correlaciones, tendencias y 
            anomalías significativas en grandes volúmenes de datos. Utiliza técnicas estadísticas, 
            matemáticas y algoritmos de aprendizaje automático para extraer conocimiento útil y 
            relevante de conjuntos de datos que pueden ser complejos o incompletos.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-primary-800 mb-4">Técnicas Principales</h3>
              <ul className="space-y-2 text-primary-700">
                <li>• Clasificación</li>
                <li>• Regresión</li>
                <li>• Clustering (Agrupamiento)</li>
                <li>• Análisis de asociaciones</li>
                <li>• Detección de anomalías</li>
              </ul>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-primary-800 mb-4">Características</h3>
              <ul className="space-y-2 text-primary-700">
                <li>• Proceso exploratorio</li>
                <li>• Análisis automatizado</li>
                <li>• Aprendizaje automático</li>
                <li>• Análisis predictivo</li>
                <li>• Toma de decisiones basada en datos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Casos de Uso por Sector
          </h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-primary-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-primary-800 mb-3">E-Commerce</h3>
              <p className="text-primary-600">
                Análisis del historial de compras e interacciones para recomendar productos 
                relevantes. Utiliza algoritmos de recomendación y análisis de patrones de 
                comportamiento para personalizar la experiencia del usuario.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-primary-800 mb-3">Industria Automotriz</h3>
              <p className="text-primary-600">
                Análisis de preferencias de clientes sobre características de vehículos, 
                permitiendo adaptar la producción y personalizar modelos según las demandas 
                del mercado.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-primary-800 mb-3">Sector Construcción</h3>
              <p className="text-primary-600">
                Análisis de tiempos de construcción y factores que influyen en retrasos para 
                optimizar la planificación y mejorar la eficiencia en futuros proyectos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="bg-primary-100 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6 text-center">
            Beneficios de la Minería de Datos
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Toma de Decisiones Informada
                </h3>
                <p className="text-primary-600">
                  Proporciona insights basados en datos para tomar decisiones estratégicas 
                  más precisas y fundamentadas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Optimización de Procesos
                </h3>
                <p className="text-primary-600">
                  Identifica áreas de mejora y optimización en procesos empresariales 
                  mediante el análisis de datos históricos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
} 