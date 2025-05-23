import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Minería de Datos',
  description: 'Información sobre minería de datos, inteligencia de negocios y conceptos relacionados',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="h-full">
      <body className={`${inter.className} min-h-full bg-primary-50`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          </main>
          <footer className="bg-primary-100 border-t border-primary-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="text-center text-primary-600 text-sm">
                © {new Date().getFullYear()} Minería de Datos. Todos los derechos reservados.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
} 