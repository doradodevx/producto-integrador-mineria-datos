import React from 'react'
import Image from 'next/image'

export default function PanelGerencial() {
  return (
    <article className="space-y-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Panel Gerencial
        </h1>
        <p className="text-xl text-primary-600">
          Visualización y análisis de resultados para la toma de decisiones
        </p>
      </header>

      <section className="grid gap-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Pantalla del resultado de la técnica (tarea) de minería de datos
          </h2>
          <div className="space-y-6">
            <div className="relative w-full h-[500px] bg-primary-50 rounded-lg overflow-hidden">
              <Image
                src="/images/mineria-resultados.png"
                alt="Resultados de la técnica de minería de datos"
                fill
                style={{ objectFit: 'contain' }}
                className="p-4"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Indicadores Clave
                </h3>
                <ul className="space-y-2 text-primary-700">
                  <li>• Patrones de comportamiento de clientes</li>
                  <li>• Tendencias de servicios más solicitados</li>
                  <li>• Distribución de niveles de lealtad</li>
                  <li>• Métricas de satisfacción</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Análisis de Resultados
                </h3>
                <ul className="space-y-2 text-primary-700">
                  <li>• Segmentación efectiva de clientes</li>
                  <li>• Identificación de oportunidades</li>
                  <li>• Optimización de recursos</li>
                  <li>• Predicciones de demanda</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Dashboard de Avance
          </h2>
          <div className="space-y-6">
            <div className="relative w-full h-[500px] bg-primary-50 rounded-lg overflow-hidden">
              <Image
                src="/images/dashboard-avance.png"
                alt="Dashboard mostrando métricas y avances"
                fill
                style={{ objectFit: 'contain' }}
                className="p-4"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Métricas de Seguimiento
                </h3>
                <ul className="space-y-2 text-primary-700">
                  <li>• KPIs de rendimiento</li>
                  <li>• Progreso de objetivos</li>
                  <li>• Indicadores de crecimiento</li>
                  <li>• Métricas de eficiencia</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Beneficios del Dashboard
                </h3>
                <ul className="space-y-2 text-primary-700">
                  <li>• Visualización en tiempo real</li>
                  <li>• Toma de decisiones informada</li>
                  <li>• Seguimiento de objetivos</li>
                  <li>• Identificación de áreas de mejora</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
} 