import React from 'react'

export default function TecnicasMineria() {
  return (
    <article className="space-y-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Técnicas de Minería de Datos
        </h1>
        <p className="text-xl text-primary-600">
          Métodos y algoritmos para el descubrimiento de conocimiento en datos
        </p>
      </header>

      <section className="grid gap-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            1. Clasificación (Classification)
          </h2>
          <div className="space-y-6">
            <p className="text-primary-700">
              La clasificación es una técnica supervisada que consiste en predecir la clase o 
              categoría a la que pertenece una instancia de datos, basándose en un conjunto 
              de datos de entrenamiento previamente etiquetado.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Algoritmos Comunes
                </h3>
                <ul className="space-y-2 text-primary-600">
                  <li>• Árboles de decisión (Decision Trees)</li>
                  <li>• Máquinas de vectores de soporte (SVM)</li>
                  <li>• Redes neuronales artificiales (ANN)</li>
                  <li>• Naive Bayes</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Aplicaciones
                </h3>
                <ul className="space-y-2 text-primary-600">
                  <li>• Diagnóstico médico</li>
                  <li>• Detección de fraudes</li>
                  <li>• Evaluación crediticia</li>
                  <li>• Clasificación de correos spam</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            2. Regresión (Regression)
          </h2>
          <div className="space-y-6">
            <p className="text-primary-700">
              La regresión es una técnica supervisada que se utiliza para predecir un valor 
              numérico continuo en función de variables independientes.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Tipos Comunes
                </h3>
                <ul className="space-y-2 text-primary-600">
                  <li>• Regresión lineal</li>
                  <li>• Regresión logística</li>
                  <li>• Regresión múltiple</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Aplicaciones
                </h3>
                <ul className="space-y-2 text-primary-600">
                  <li>• Predicción de ventas</li>
                  <li>• Modelado de precios</li>
                  <li>• Análisis de tendencias financieras</li>
                  <li>• Proyección de demanda</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            3. Agrupamiento (Clustering)
          </h2>
          <div className="space-y-6">
            <p className="text-primary-700">
              El agrupamiento es una técnica no supervisada que agrupa objetos similares dentro 
              del mismo grupo o "cluster", sin etiquetas predefinidas.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Algoritmos Comunes
                </h3>
                <ul className="space-y-2 text-primary-600">
                  <li>• K-means</li>
                  <li>• DBSCAN</li>
                  <li>• Hierarchical Clustering</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Aplicaciones
                </h3>
                <ul className="space-y-2 text-primary-600">
                  <li>• Segmentación de clientes</li>
                  <li>• Análisis de comportamiento</li>
                  <li>• Detección de patrones de uso</li>
                  <li>• Bioinformática</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            4. Reglas de Asociación (Association Rules)
          </h2>
          <div className="space-y-6">
            <p className="text-primary-700">
              Consiste en descubrir relaciones interesantes y patrones ocultos entre variables 
              dentro de grandes conjuntos de datos.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Algoritmos Clásicos
                </h3>
                <ul className="space-y-2 text-primary-600">
                  <li>• Apriori</li>
                  <li>• FP-Growth</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Aplicaciones
                </h3>
                <ul className="space-y-2 text-primary-600">
                  <li>• Análisis de canasta de mercado</li>
                  <li>• Recomendaciones de productos</li>
                  <li>• Estrategias de cross-selling</li>
                  <li>• Optimización de inventario</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            5. Detección de Anomalías (Anomaly Detection)
          </h2>
          <div className="space-y-6">
            <p className="text-primary-700">
              Identifica datos que se desvían significativamente del comportamiento normal o 
              esperado, conocidos como "outliers".
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Técnicas Utilizadas
                </h3>
                <ul className="space-y-2 text-primary-600">
                  <li>• Modelos estadísticos</li>
                  <li>• K-NN</li>
                  <li>• Autoencoders</li>
                  <li>• Isolation Forest</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Aplicaciones
                </h3>
                <ul className="space-y-2 text-primary-600">
                  <li>• Seguridad informática</li>
                  <li>• Análisis de fraudes</li>
                  <li>• Supervisión industrial</li>
                  <li>• Control de calidad</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            6. Reducción de Dimensionalidad
          </h2>
          <div className="space-y-6">
            <p className="text-primary-700">
              Reduce el número de variables en un conjunto de datos, manteniendo la información 
              más relevante para facilitar el análisis.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Métodos Populares
                </h3>
                <ul className="space-y-2 text-primary-600">
                  <li>• Análisis de componentes principales (PCA)</li>
                  <li>• t-SNE</li>
                  <li>• LDA (Linear Discriminant Analysis)</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Aplicaciones
                </h3>
                <ul className="space-y-2 text-primary-600">
                  <li>• Visualización de datos</li>
                  <li>• Mejora de rendimiento en modelos de ML</li>
                  <li>• Eliminación de ruido</li>
                  <li>• Preprocesamiento para clustering</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            7. Minería de Texto (Text Mining / NLP)
          </h2>
          <div className="space-y-6">
            <p className="text-primary-700">
              Procesa y analiza grandes cantidades de texto no estructurado para extraer 
              conocimiento útil.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Técnicas Usadas
                </h3>
                <ul className="space-y-2 text-primary-600">
                  <li>• Análisis de sentimientos</li>
                  <li>• Extracción de entidades</li>
                  <li>• Clasificación de documentos</li>
                  <li>• Topic modeling (LDA, NMF)</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Aplicaciones
                </h3>
                <ul className="space-y-2 text-primary-600">
                  <li>• Análisis de opiniones en redes sociales</li>
                  <li>• Soporte al cliente automatizado</li>
                  <li>• Procesamiento de encuestas</li>
                  <li>• Indexación y recuperación de información</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            8. Series de Tiempo (Time Series Analysis)
          </h2>
          <div className="space-y-6">
            <p className="text-primary-700">
              Analiza datos secuenciales recogidos a lo largo del tiempo para identificar 
              patrones, tendencias o estacionalidades.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Métodos Comunes
                </h3>
                <ul className="space-y-2 text-primary-600">
                  <li>• ARIMA</li>
                  <li>• Prophet</li>
                  <li>• LSTM (redes neuronales para series)</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Aplicaciones
                </h3>
                <ul className="space-y-2 text-primary-600">
                  <li>• Pronóstico financiero</li>
                  <li>• Predicción del clima</li>
                  <li>• Monitoreo de sensores</li>
                  <li>• Planificación de la demanda</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
} 