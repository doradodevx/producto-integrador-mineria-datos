/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Necesario para generar archivos estáticos
  images: {
    unoptimized: true, // Necesario para exportación estática
  },
  basePath: '/producto-integrador-mineria-datos', // Nombre correcto del repositorio
}

module.exports = nextConfig 