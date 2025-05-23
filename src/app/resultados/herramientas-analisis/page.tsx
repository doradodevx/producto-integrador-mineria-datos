import React from 'react'
import Image from 'next/image'
import { getImagePath } from '@/utils/imageLoader'

export default function HerramientasAnalisis() {
  return (
    <article className="space-y-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Herramientas de Análisis
        </h1>
        <p className="text-xl text-primary-600">
          Herramientas utilizadas para el análisis y gestión de datos en el sistema
        </p>
      </header>

      <section className="grid gap-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            PostgreSQL
          </h2>
          <div className="space-y-6">
            <div className="relative w-full h-[500px] bg-primary-50 rounded-lg overflow-hidden">
              <Image
                src={getImagePath('/images/postgresql-interface.png')}
                alt="Interfaz de PostgreSQL"
                fill
                style={{ objectFit: 'contain' }}
                className="p-4"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Características Principales
                </h3>
                <ul className="space-y-2 text-primary-700">
                  <li>• Sistema de gestión de bases de datos relacional</li>
                  <li>• Soporte completo para transacciones ACID</li>
                  <li>• Herramientas avanzadas de consulta y análisis</li>
                  <li>• Alta escalabilidad y rendimiento</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Funcionalidades
                </h3>
                <ul className="space-y-2 text-primary-700">
                  <li>• Gestión de datos estructurados</li>
                  <li>• Consultas SQL avanzadas</li>
                  <li>• Índices y optimización de consultas</li>
                  <li>• Respaldos y recuperación de datos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Gestión de Datos
          </h2>
          <div className="space-y-6">
            <div className="relative w-full h-[500px] bg-primary-50 rounded-lg overflow-hidden">
              <Image
                src={getImagePath('/images/data-management.png')}
                alt="Gestión de datos"
                fill
                style={{ objectFit: 'contain' }}
                className="p-4"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Capacidades de Análisis
                </h3>
                <ul className="space-y-2 text-primary-700">
                  <li>• Visualización de datos en tiempo real</li>
                  <li>• Filtrado y búsqueda avanzada</li>
                  <li>• Exportación de resultados</li>
                  <li>• Generación de reportes</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-3">
                  Beneficios
                </h3>
                <ul className="space-y-2 text-primary-700">
                  <li>• Toma de decisiones informada</li>
                  <li>• Mejora en la eficiencia operativa</li>
                  <li>• Control y seguimiento de métricas</li>
                  <li>• Optimización de recursos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
} 