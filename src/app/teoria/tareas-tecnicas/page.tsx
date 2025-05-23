import React from 'react'

export default function TareasTecnicas() {
  return (
    <article className="space-y-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Tareas y Técnicas de Minería de Datos
        </h1>
        <p className="text-xl text-primary-600">
          Descripción detallada de las técnicas más utilizadas en minería de datos
        </p>
      </header>

      <section className="grid gap-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Técnicas Principales
          </h2>
          
          <div className="space-y-6">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Clasificación
              </h3>
              <p className="text-primary-600">
                Es una técnica de minería de datos que asigna elementos de datos a categorías predefinidas.
                Permite organizar y estructurar la información de manera sistemática para su posterior análisis.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Predicción
              </h3>
              <p className="text-primary-600">
                Busca estimar valores futuros o desconocidos basándose en patrones encontrados en los datos históricos.
                Esta técnica es fundamental para la toma de decisiones y la planificación estratégica.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Selección
              </h3>
              <p className="text-primary-600">
                Se enfoca en identificar las variables o características más relevantes dentro de un conjunto de datos.
                Permite optimizar el análisis al concentrarse en los factores más significativos.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Categorización
              </h3>
              <p className="text-primary-600">
                Agrupa datos en categorías significativas basadas en sus características.
                Puede incluir agrupamiento y organización de datos para facilitar su análisis.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Agrupamiento (Clustering)
              </h3>
              <p className="text-primary-600">
                Organiza los datos en grupos o clústeres, donde los elementos dentro de un grupo son más similares 
                entre sí que con los de otros grupos. Esta técnica es especialmente útil para descubrir patrones naturales en los datos.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Asociación
              </h3>
              <p className="text-primary-600">
                Buscan descubrir relaciones entre variables en grandes bases de datos.
                Estas técnicas son fundamentales para identificar patrones de comportamiento y tendencias.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Detección de Anomalías
              </h3>
              <p className="text-primary-600">
                Se utiliza para identificar datos que no se ajustan al comportamiento esperado, conocidos como outliers.
                Es crucial para la detección de fraudes y el control de calidad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
} 