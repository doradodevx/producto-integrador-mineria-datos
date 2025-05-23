import React from 'react'

export default function HerramientasETL() {
  return (
    <article className="space-y-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Herramientas ETL y Procesamiento de Datos
        </h1>
        <p className="text-xl text-primary-600">
          Técnicas y conceptos para la selección, transformación y limpieza de datos
        </p>
      </header>

      <section className="grid gap-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            1. Selección de Datos
          </h2>
          <div className="space-y-6">
            <p className="text-primary-700">
              Este proceso implica identificar y extraer los datos relevantes para el análisis, 
              asegurando que sean representativos y adecuados para los objetivos establecidos.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Definición de Variables
                </h3>
                <p className="text-primary-600">
                  Determinar las variables objetivo (a predecir o analizar) y las variables 
                  independientes (predictores o explicativas).
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Muestreo
                </h3>
                <p className="text-primary-600">
                  Seleccionar una porción representativa del conjunto de datos para facilitar 
                  el análisis y reducir costos computacionales.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            2. Limpieza de Datos
          </h2>
          <div className="space-y-6">
            <p className="text-primary-700">
              Se centra en identificar y corregir errores o inconsistencias en los datos para 
              mejorar su calidad.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Manejo de Valores Faltantes
                </h3>
                <p className="text-primary-600">
                  Imputar valores ausentes o eliminar registros incompletos según la cantidad 
                  y relevancia de los datos faltantes.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Detección de Duplicados
                </h3>
                <p className="text-primary-600">
                  Identificar y remover registros duplicados que puedan sesgar los resultados 
                  del análisis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            3. Transformación de Datos
          </h2>
          <div className="space-y-6">
            <p className="text-primary-700">
              Este proceso adapta los datos al formato requerido por las técnicas de modelado y análisis.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Normalización y Estandarización
                </h3>
                <p className="text-primary-600">
                  Ajustar las escalas de las variables para una distribución uniforme, 
                  facilitando comparaciones y mejorando el rendimiento.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Reducción de Dimensionalidad
                </h3>
                <p className="text-primary-600">
                  Disminuir variables mediante técnicas como PCA, conservando la información 
                  relevante y eliminando redundancias.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Herramientas ETL Populares
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Informática PowerCenter
              </h3>
              <p className="text-primary-600">
                Herramienta líder en el mercado que ofrece soluciones integrales para la 
                integración de datos.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                IBM WebSphere DataStage
              </h3>
              <p className="text-primary-600">
                Permite diseñar, desarrollar y ejecutar procesos de integración de datos.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Microsoft SSIS
              </h3>
              <p className="text-primary-600">
                Plataforma de integración de datos que forma parte de Microsoft SQL Server.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Tecnologías de Almacenamiento
          </h2>
          <div className="space-y-6">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Data Warehouse
              </h3>
              <p className="text-primary-600">
                Colección de datos orientada a un ámbito específico de la organización, 
                integrada y no volátil, que ayuda en la toma de decisiones.
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-primary-700">• Amazon Redshift</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-primary-700">• Google BigQuery</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-primary-700">• Snowflake</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-primary-700">• Teradata</span>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                Data Marts
              </h3>
              <p className="text-primary-600">
                Subconjunto de un Data Warehouse centrado en áreas específicas de negocio 
                como ventas, finanzas o marketing.
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-primary-700">• Finance Data Mart</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-primary-700">• Retail Sales Data Mart</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-primary-700">• HR Data Mart</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-primary-700">• Customer Analytics Data Mart</span>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">
                MOLAP
              </h3>
              <p className="text-primary-600">
                Tecnología de procesamiento analítico en línea que permite el análisis de datos 
                desde múltiples perspectivas mediante matrices multidimensionales optimizadas.
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-primary-700">• Microsoft SSAS</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-primary-700">• Oracle Essbase</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-primary-700">• IBM Cognos TM1</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-primary-700">• SAP BW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
} 