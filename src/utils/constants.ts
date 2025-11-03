/**
 * Constantes de la aplicación
 */

export const APP_NAME = 'Model Gallery';
export const APP_DESCRIPTION = 'Galería profesional de modelos y actrices';

// Configuración de paginación
export const ITEMS_PER_PAGE = 12;
export const MAX_ITEMS_PER_PAGE = 50;

// Configuración de imágenes
export const IMAGE_QUALITY = 85;
export const THUMBNAIL_SIZE = 300;
export const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

// Breakpoints responsive
export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Colores comunes (si no usas un sistema de diseño)
export const COLORS = {
  primary: '#3b82f6',
  secondary: '#8b5cf6',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  dark: '#1f2937',
  light: '#f9fafb',
} as const;

// Rutas de navegación
export const ROUTES = {
  HOME: '/',
  GALLERY: '/gallery',
  MODEL_DETAIL: '/model/:slug',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

// Categorías de modelos
export const MODEL_CATEGORIES = [
  { value: 'fashion', label: 'Moda' },
  { value: 'commercial', label: 'Comercial' },
  { value: 'editorial', label: 'Editorial' },
  { value: 'runway', label: 'Pasarela' },
  { value: 'fitness', label: 'Fitness' },
  { value: 'plus_size', label: 'Plus Size' },
  { value: 'actor', label: 'Actor' },
  { value: 'actress', label: 'Actriz' },
] as const;

// Mensajes de error comunes
export const ERROR_MESSAGES = {
  GENERIC: 'Ha ocurrido un error. Por favor, intenta de nuevo.',
  NETWORK: 'Error de conexión. Verifica tu conexión a internet.',
  NOT_FOUND: 'No se encontró el recurso solicitado.',
  UNAUTHORIZED: 'No tienes permisos para realizar esta acción.',
  VALIDATION: 'Por favor, verifica los datos ingresados.',
} as const;

