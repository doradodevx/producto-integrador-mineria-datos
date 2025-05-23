import React from 'react'

export default function Bibliografia() {
  return (
    <article className="space-y-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Bibliografía
        </h1>
        <p className="text-xl text-primary-600">
          Referencias y fuentes de información
        </p>
      </header>

      <section className="grid gap-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <ol className="list-decimal space-y-6 text-primary-700">
                <li className="pl-2">
                  El rincón de JMACOE (Viernes, 22 de enero de 2016). 5 del mejor software 
                  de minería de datos de Código Libre y Abierto [Mensaje en un blog]. 
                  Recuperado de: 
                  <a 
                    href="http://blog.jmacoe.com/gestion_ti/base_de_datos/5-mejores-software-mineria-datos-codigo-libre-abierto/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 break-words"
                  >
                    http://blog.jmacoe.com/gestion_ti/base_de_datos/5-mejores-software-mineria-datos-codigo-libre-abierto/
                  </a>
                </li>

                <li className="pl-2">
                  Hernández, J. (2004). Exploración y selección. En Introducción a la 
                  minería de datos. Pp.97-133. Madrid (España): Pearson Educación S.A.
                </li>

                <li className="pl-2">
                  Dia (Versión 0.97.2) [software]. (2014). The Dia Developers. 
                  Obtenido de 
                  <a 
                    href="http://dia-installer.de/index.html.es" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 ml-1"
                  >
                    http://dia-installer.de/index.html.es
                  </a>
                </li>

                <li className="pl-2">
                  MySQL Workbench (Versión 6.3) [software]. (2016). Oracle Corporation. 
                  Obtenido de 
                  <a 
                    href="https://www.mysql.com/products/workbench/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 ml-1"
                  >
                    https://www.mysql.com/products/workbench/
                  </a>
                </li>

                <li className="pl-2">
                  Beltrán Martínez Beatriz. MINERÍA DE DATOS. Métodos de Minería de Datos. 
                  Recuperado de 
                  <a 
                    href="https://www.cs.buap.mx/~bbeltran/NotasMD.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 ml-1"
                  >
                    https://www.cs.buap.mx/~bbeltran/NotasMD.pdf
                  </a>
                </li>

                <li className="pl-2">
                  Cristina Ortega. Minería de datos: Qué es, ventajas, técnicas y cómo realizarla. 
                  Recuperado de 
                  <a 
                    href="https://www.questionpro.com/blog/es/mineria-de-datos/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 ml-1"
                  >
                    https://www.questionpro.com/blog/es/mineria-de-datos/
                  </a>
                </li>

                <li className="pl-2">
                  Astera. (2024). Las 10 mejores técnicas de minería de datos. 
                  <a 
                    href="https://www.astera.com/es/type/blog/top-10-data-mining-techniques/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 ml-1"
                  >
                    https://www.astera.com/es/type/blog/top-10-data-mining-techniques/
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
} 