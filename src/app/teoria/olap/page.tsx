export default function OLAP() {
  return (
    <article className="space-y-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Procesamiento Analítico en Línea (OLAP)
        </h1>
        <p className="text-xl text-primary-600">
          Análisis multidimensional de datos en tiempo real
        </p>
      </header>

      <section className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            ¿Qué es OLAP?
          </h2>
          <p className="text-primary-700 mb-6">
            OLAP es un conjunto de herramientas y tecnologías que permiten realizar consultas complejas 
            y análisis multidimensionales sobre grandes volúmenes de datos. Se trata de una metodología 
            utilizada para el análisis de datos de manera interactiva y en tiempo real, permitiendo a los 
            usuarios explorar los datos desde diversas perspectivas o "dimensiones".
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-primary-800 mb-4">Características Principales</h3>
              <ul className="space-y-2 text-primary-700">
                <li>• Análisis multidimensional con cubos OLAP</li>
                <li>• Exploración dinámica de datos</li>
                <li>• Consultas complejas en tiempo real</li>
                <li>• Alto rendimiento en consultas</li>
                <li>• Pre-agregación de datos</li>
              </ul>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-primary-800 mb-4">Beneficios</h3>
              <ul className="space-y-2 text-primary-700">
                <li>• Acceso rápido a datos</li>
                <li>• Análisis detallado y dinámico</li>
                <li>• Navegación entre dimensiones</li>
                <li>• Diferentes niveles de detalle</li>
                <li>• Toma de decisiones informada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            Casos de Uso por Industria
          </h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">Telecomunicaciones</h3>
              <p className="text-primary-600">
                Análisis del uso de planes móviles por región, mes y tipo de cliente para personalizar 
                ofertas, prever picos de uso y mejorar la cobertura en áreas con baja señal.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">Energía</h3>
              <p className="text-primary-600">
                Análisis del consumo eléctrico por zonas y horarios para identificar áreas con mayor 
                demanda, optimizar la distribución y evitar sobrecargas.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-primary-800 mb-3">Logística y Transporte</h3>
              <p className="text-primary-600">
                Análisis de tiempos de entrega por ruta, tipo de carga y vehículo para optimizar rutas, 
                reducir costos y mejorar puntualidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="bg-primary-100 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6 text-center">
            Ventajas del Análisis OLAP
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-primary-800 mb-3">Análisis Empresarial</h3>
                <p className="text-primary-600">
                  Facilita la toma de decisiones estratégicas mediante el análisis profundo de datos 
                  históricos y actuales.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-primary-800 mb-3">Eficiencia Operativa</h3>
                <p className="text-primary-600">
                  Mejora la eficiencia operativa al proporcionar acceso rápido a información crítica 
                  del negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
} 