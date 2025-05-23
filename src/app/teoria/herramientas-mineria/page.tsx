import React from 'react'

export default function HerramientasMineria() {
  return (
    <article className="space-y-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Herramientas de Minería de Datos
        </h1>
        <p className="text-xl text-primary-600">
          Software libre para análisis y minería de datos
        </p>
      </header>

      <section className="grid gap-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Introducción
          </h2>
          <p className="text-primary-700">
            Existen diversas herramientas de software libre para la minería de datos que han 
            sido destacadas por su funcionalidad y versatilidad. Estas herramientas ofrecen 
            una amplia gama de funcionalidades para abordar diversas tareas de minería de 
            datos y aprendizaje automático, adaptándose a diferentes necesidades y niveles 
            de experiencia.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Herramientas Principales
          </h2>
          <div className="space-y-6">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Orange
              </h3>
              <div className="space-y-4">
                <p className="text-primary-600">
                  Suite de software para minería de base de datos y aprendizaje automático 
                  basado en componentes.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2 text-primary-700">
                    <li>• Front-end de programación visual para análisis exploratorio</li>
                    <li>• Potentes herramientas de visualización de datos</li>
                    <li>• Librerías para Python y secuencias de comando</li>
                    <li>• Interfaz fácil y versátil</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                RapidMiner
              </h3>
              <div className="space-y-4">
                <p className="text-primary-600">
                  Ambiente de experimentos en aprendizaje automático y minería de datos, 
                  anteriormente conocido como YALE.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2 text-primary-700">
                    <li>• Interfaz gráfica intuitiva</li>
                    <li>• Operadores anidables para experimentos complejos</li>
                    <li>• Configuración mediante archivos XML</li>
                    <li>• Aplicable en investigación y entornos empresariales</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Weka
              </h3>
              <div className="space-y-4">
                <p className="text-primary-600">
                  Suite de software para máquinas de aprendizaje con soporte para múltiples 
                  tareas de minería de datos.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2 text-primary-700">
                    <li>• Pre procesamiento de datos</li>
                    <li>• Agrupamiento y clasificación</li>
                    <li>• Regresión y visualización</li>
                    <li>• Selección de características</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                jHepWork
              </h3>
              <div className="space-y-4">
                <p className="text-primary-600">
                  Framework para análisis de datos libre y de código abierto con interfaz 
                  de usuario comprensible.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2 text-primary-700">
                    <li>• Entorno de análisis de datos integrado</li>
                    <li>• Utiliza paquetes de código abierto</li>
                    <li>• Interfaz de usuario intuitiva</li>
                    <li>• Alternativa competitiva a programas comerciales</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                KNIME
              </h3>
              <div className="space-y-4">
                <p className="text-primary-600">
                  Plataforma de código abierto para integración, procesamiento y análisis de datos.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2 text-primary-700">
                    <li>• Creación visual de flujos de datos</li>
                    <li>• Ejecución selectiva de pasos de análisis</li>
                    <li>• Vistas interactivas de resultados</li>
                    <li>• Interfaz fácil de usar y comprensible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
} 