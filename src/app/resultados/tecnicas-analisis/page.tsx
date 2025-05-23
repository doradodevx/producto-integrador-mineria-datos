import React from 'react'
import Image from 'next/image'
import { getImagePath } from '@/utils/imageLoader'

export default function TecnicasAnalisis() {
  return (
    <article className="space-y-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Aplicación de minería de datos
        </h1>
      </header>

      <section className="grid gap-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Técnica categorización de minería de datos utilizando su vista minable
          </h2>
          <div className="space-y-6">
            <div className="relative w-full h-[500px] bg-primary-50 rounded-lg overflow-hidden">
              <Image
                src={getImagePath('/images/categorizacion-mineria.png')}
                alt="Análisis de categorización de minería de datos"
                fill
                style={{ objectFit: 'contain' }}
                className="p-4"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Características del Análisis
                </h3>
                <ul className="space-y-2 text-primary-700">
                  <li>• Identificación de patrones de comportamiento</li>
                  <li>• Segmentación de clientes por nivel de lealtad</li>
                  <li>• Análisis de frecuencia de servicios</li>
                  <li>• Clasificación por preferencias</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Beneficios
                </h3>
                <ul className="space-y-2 text-primary-700">
                  <li>• Mejora en la personalización de servicios</li>
                  <li>• Optimización de recursos</li>
                  <li>• Identificación de tendencias</li>
                  <li>• Toma de decisiones estratégicas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Técnica predicción de minería de datos utilizando su vista minable
          </h2>
          <div className="space-y-6">
            <div className="relative w-full h-[500px] bg-primary-50 rounded-lg overflow-hidden">
              <Image
                src={getImagePath('/images/prediccion-mineria.png')}
                alt="Análisis predictivo de minería de datos"
                fill
                style={{ objectFit: 'contain' }}
                className="p-4"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Elementos del Análisis Predictivo
                </h3>
                <ul className="space-y-2 text-primary-700">
                  <li>• Predicción de demanda de servicios</li>
                  <li>• Análisis de tendencias temporales</li>
                  <li>• Proyección de preferencias</li>
                  <li>• Estimación de recursos necesarios</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Impacto en el Negocio
                </h3>
                <ul className="space-y-2 text-primary-700">
                  <li>• Planificación eficiente de recursos</li>
                  <li>• Anticipación a cambios en la demanda</li>
                  <li>• Mejora en la satisfacción del cliente</li>
                  <li>• Optimización de inventario</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
} 