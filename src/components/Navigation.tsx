'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Cerrar el menú móvil cuando se cambia de ruta
  useEffect(() => {
    setIsOpen(false)
  }, [activeSection])

  const menuItems = [
    {
      title: 'Base Teórica',
      items: [
        { name: 'Sociedad de la información', href: '/teoria/sociedad-informacion' },
        { name: 'Inteligencia de negocios', href: '/teoria/inteligencia-negocios' },
        { name: 'OLAP', href: '/teoria/olap' },
        { name: 'Minería de datos', href: '/teoria/mineria-datos' },
        { name: 'Proceso KDD', href: '/teoria/proceso-kdd' },
        { name: 'Tareas y técnicas', href: '/teoria/tareas-tecnicas' },
        { name: 'Herramientas ETL', href: '/teoria/herramientas-etl' },
        { name: 'Vista minable', href: '/teoria/vista-minable' },
        { name: 'Herramientas de minería', href: '/teoria/herramientas-mineria' },
        { name: 'Técnicas de minería', href: '/teoria/tecnicas-mineria' },
        { name: 'Bibliografías', href: '/teoria/bibliografias' },
      ],
    },
    {
      title: 'Resultados',
      items: [
        { name: 'Almacén de datos', href: '/resultados/almacen-datos' },
        { name: 'Herramientas de análisis', href: '/resultados/herramientas-analisis' },
        { name: 'Técnicas de análisis', href: '/resultados/tecnicas-analisis' },
        { name: 'Panel Gerencial', href: '/resultados/panel-gerencial' },
      ],
    },
  ]

  return (
    <nav className="bg-primary-50 border-b border-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link 
                href="/" 
                className="text-xl font-bold text-primary-800 hover:text-primary-600 transition-colors"
                onClick={() => setActiveSection('')}
              >
                Minería de Datos
              </Link>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((section) => (
              <div key={section.title} className="relative group">
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${activeSection === section.title 
                      ? 'text-accent bg-primary-100' 
                      : 'text-primary-600 hover:text-primary-800 hover:bg-primary-100'
                    }`}
                  onClick={() => setActiveSection(section.title)}
                >
                  {section.title}
                </button>
                <div className="absolute z-10 left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <div className="py-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-primary-700 hover:text-accent hover:bg-primary-50 transition-colors"
                        onClick={() => setActiveSection(section.title)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-500 hover:text-primary-700 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-primary-50">
          {menuItems.map((section) => (
            <div key={section.title} className="space-y-1">
              <div className="px-3 py-2 text-base font-medium text-primary-900 border-b border-primary-200">
                {section.title}
              </div>
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-primary-700 hover:text-accent hover:bg-primary-100 transition-colors"
                  onClick={() => setActiveSection(section.title)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation 