import Image from 'next/image'

export default function ProcesoKDD() {
  return (
    <article className="space-y-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Proceso KDD (Knowledge Discovery in Databases)
        </h1>
        <p className="text-xl text-primary-600">
          Descubrimiento de Conocimiento en Bases de Datos
        </p>
      </header>

      <section className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            ¿Qué es el proceso KDD?
          </h2>
          <p className="text-primary-700 mb-6">
            Es un procedimiento estructurado que busca extraer información valiosa, novedosa 
            y comprensible a partir de grandes volúmenes de datos. Es un proceso iterativo 
            donde los hallazgos en etapas siguientes pueden requerir revisiones o ajustes 
            en fases anteriores para optimizar los resultados.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-primary-800 mb-4">
              Características del Proceso
            </h3>
            <ul className="space-y-2 text-primary-700 list-disc pl-6">
              <li>Proceso iterativo y flexible</li>
              <li>Las primeras fases determinan el éxito de las siguientes</li>
              <li>Permite ajustes y optimizaciones continuas</li>
              <li>Enfoque en la extracción de conocimiento útil y válido</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Etapas del Proceso KDD
          </h2>
          <div className="grid gap-6">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                1. Integración y Recopilación de Datos
              </h3>
              <p className="text-primary-600">
                Reunión de datos de diversas fuentes, tanto internas como externas. 
                Se asegura que los datos sean relevantes y estén en un formato adecuado 
                para su análisis posterior.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                2. Selección y Limpieza de Datos
              </h3>
              <p className="text-primary-600">
                Depuración de datos para eliminar inconsistencias, redundancias y errores. 
                Manejo de valores desconocidos o nulos y aplicación de técnicas estadísticas 
                para su reemplazo cuando sea necesario.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                3. Transformación o Reducción de Datos
              </h3>
              <p className="text-primary-600">
                Transformación de datos mediante normalización, discretización o creación de 
                nuevas variables. Incluye reducción de dimensiones y agregación de datos.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                4. Minería de Datos
              </h3>
              <p className="text-primary-600">
                Aplicación de técnicas y algoritmos específicos para extraer patrones, 
                tendencias o relaciones significativas de los datos.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                5. Evaluación e Interpretación
              </h3>
              <p className="text-primary-600">
                Evaluación de la validez y utilidad de los patrones descubiertos. 
                Análisis de relevancia, precisión y aplicabilidad en el contexto específico.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                6. Difusión y Uso del Conocimiento
              </h3>
              <p className="text-primary-600">
                Comunicación de resultados a los stakeholders e implementación de mecanismos 
                para monitorear la aplicación del conocimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="bg-primary-100 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6 text-center">
            Interrelación de las Etapas
          </h2>
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Integración → Selección y Limpieza
              </h3>
              <p className="text-primary-600">
                La calidad de la recopilación inicial impacta directamente en la precisión 
                de los resultados posteriores.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Preparación → Minería
              </h3>
              <p className="text-primary-600">
                Una correcta preparación de datos es crucial para obtener resultados 
                precisos en la fase de minería.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Minería → Evaluación
              </h3>
              <p className="text-primary-600">
                Los resultados de la minería deben ser validados y pueden requerir 
                ajustes en fases anteriores.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Evaluación → Difusión
              </h3>
              <p className="text-primary-600">
                El conocimiento validado se traduce en acciones concretas y se 
                monitorea su impacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6 text-center">
            Diagrama del Proceso KDD
          </h2>
          <div className="relative w-full aspect-video">
            <Image
              src="/images/proceso-kdd-diagram.png"
              alt="Diagrama del Proceso KDD"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <p className="text-primary-600 text-center mt-4">
            Representación gráfica de las etapas del proceso KDD y sus interrelaciones
          </p>
        </div>
      </section>
    </article>
  )
} 