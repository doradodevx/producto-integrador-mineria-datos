import React from 'react'

export default function VistasMinables() {
  return (
    <article className="space-y-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Vista Minable (Minable View)
        </h1>
        <p className="text-xl text-primary-600">
          Estructuras de datos optimizadas para minería de datos
        </p>
      </header>

      <section className="grid gap-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            ¿Qué es una Vista Minable?
          </h2>
          <div className="space-y-6">
            <p className="text-primary-700">
              Una vista minable es un conjunto de datos estructurados específicamente para 
              la aplicación eficiente de técnicas de minería de datos. Se trata de una vista 
              materializada o derivada de una o más tablas de una base de datos, preparada y 
              optimizada para que los algoritmos de minería puedan operar sobre ella de forma 
              eficiente y útil.
            </p>
            
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Aplicaciones Principales
              </h3>
              <ul className="space-y-2 text-primary-600">
                <li>• Clasificación de datos</li>
                <li>• Técnicas de agrupamiento</li>
                <li>• Reglas de asociación</li>
                <li>• Análisis predictivo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Características Esenciales
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Relevancia
              </h3>
              <p className="text-primary-600">
                Contiene atributos relevantes para el análisis, como información de compras, 
                comportamientos y tiempos. Los datos incluidos deben tener un propósito 
                específico en el análisis.
              </p>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Limpieza y Transformación
              </h3>
              <p className="text-primary-600">
                Ha sido sometida a procesos de limpieza, normalización, transformación o 
                agregación para garantizar la calidad de los datos.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Formato Adecuado
              </h3>
              <p className="text-primary-600">
                Está estructurada en un formato compatible con los algoritmos de minería, 
                donde las filas representan instancias y las columnas representan atributos.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Consistencia y Completitud
              </h3>
              <p className="text-primary-600">
                Los datos son coherentes y, en lo posible, sin valores faltantes que 
                puedan afectar el análisis y la calidad de los resultados.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Objetivos y Beneficios
          </h2>
          <div className="space-y-6">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Ventajas Principales
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-primary-700">
                    <span className="font-medium">Eficiencia:</span> Evita trabajar directamente 
                    sobre datos crudos o no preparados
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-primary-700">
                    <span className="font-medium">Rendimiento:</span> Mejora la velocidad de 
                    ejecución de algoritmos
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-primary-700">
                    <span className="font-medium">Calidad:</span> Facilita la extracción de 
                    conocimiento útil
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-primary-700">
                    <span className="font-medium">Optimización:</span> Reduce el tiempo de 
                    preparación para análisis futuros
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
} 