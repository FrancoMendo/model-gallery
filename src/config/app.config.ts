/**
 * Configuración central de la aplicación
 */

export const appConfig = {
  // Información de la aplicación
  app: {
    name: 'Model Gallery',
    description: 'Galería profesional de modelos y actrices',
    version: '1.0.0',
  },

  // Configuración de API
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    timeout: 30000, // 30 segundos
  },

  // Configuración de galería
  gallery: {
    itemsPerPage: 12,
    defaultLayout: 'grid',
    enableLightbox: true,
    enableInfiniteScroll: true,
    lazyLoadImages: true,
  },

  // Configuración de imágenes
  images: {
    quality: 85,
    thumbnailSize: 300,
    maxFileSize: 10 * 1024 * 1024, // 10MB
    allowedFormats: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  },

  // Configuración de SEO
  seo: {
    defaultTitle: 'Model Gallery - Modelos y Actrices Profesionales',
    titleTemplate: '%s | Model Gallery',
    defaultDescription: 'Descubre nuestro portafolio de modelos y actrices profesionales',
    siteUrl: import.meta.env.VITE_SITE_URL || 'https://modelgallery.com',
  },

  // Redes sociales
  socialMedia: {
    instagram: 'https://instagram.com/modelgallery',
    facebook: 'https://facebook.com/modelgallery',
    twitter: 'https://twitter.com/modelgallery',
  },

  // Características habilitadas
  features: {
    enableSearch: true,
    enableFilters: true,
    enableSharing: true,
    enableBooking: true,
    enableContactForm: true,
  },

  // Animaciones
  animations: {
    duration: 300,
    easing: 'ease-in-out',
  },
} as const;

export default appConfig;

