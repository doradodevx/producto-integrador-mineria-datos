import React from 'react'
import Image from 'next/image'

export default function AlmacenDatos() {
  return (
    <article className="space-y-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Almacén de Datos
        </h1>
        <p className="text-xl text-primary-600">
          Estructura y diseño de la base de datos para el sistema de gestión de estilismo y maquillaje
        </p>
      </header>

      <section className="grid gap-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
          </h2>
          <div className="space-y-6">
            <div className="relative w-full h-[600px] bg-primary-50 rounded-lg overflow-hidden">
              <Image
                src="/images/database-schema.png"
                alt="Diagrama del esquema de la base de datos"
                fill
                style={{ objectFit: 'contain' }}
                className="p-4"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Diagrama entidad relación
          </h2>
          <div className="space-y-6">
            <div className="relative w-full h-[600px] bg-primary-50 rounded-lg overflow-hidden">
              <Image
                src="/images/entidad-relacion.png"
                alt="Diagrama del esquema de la base de datos"
                fill
                style={{ objectFit: 'contain' }}
                className="p-4"
              />
            </div>
          </div>
        </div>
        

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Relaciones Principales
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-4">Citas y Clientes</h3>
              <p className="text-primary-600">
                Cada cita está asociada a un cliente específico, permitiendo el seguimiento
                del historial de servicios por cliente.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-4">Citas y Empleados</h3>
              <p className="text-primary-600">
                Las citas se asignan a empleados específicos, facilitando la gestión
                de horarios y cargas de trabajo.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-4">Citas y Servicios</h3>
              <p className="text-primary-600">
                Cada cita está vinculada a un servicio específico, lo que permite
                el seguimiento de servicios populares y gestión de recursos.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-4">Pagos y Reseñas</h3>
              <p className="text-primary-600">
                Los pagos y reseñas están vinculados a citas específicas, proporcionando
                una trazabilidad completa de la experiencia del cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
} 