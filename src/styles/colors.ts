/**
 * Paleta de colores de la aplicación - Tonos Verde Formal
 * Color base: #467e03
 */

export const colors = {
  // Verde Principal (basado en #467e03)
  primary: {
    50: '#f3f7ed',   // Verde muy claro - fondos sutiles
    100: '#e3efd4',  // Verde claro - hover states
    200: '#c9dfad',  // Verde suave
    300: '#a8ca7e',  // Verde medio claro
    400: '#89b554',  // Verde medio
    500: '#467e03',  // Verde principal ⭐ BASE
    600: '#3d6f03',  // Verde oscuro
    700: '#335c02',  // Verde más oscuro
    800: '#2a4902',  // Verde muy oscuro
    900: '#1f3601',  // Verde casi negro
  },

  // Verde Acento (más cálido para CTAs)
  accent: {
    light: '#6ba912',   // Verde brillante para highlights
    main: '#5a9308',    // Verde vibrante
    dark: '#467e03',    // Verde profundo
  },

  // Grises Profesionales (con leve tinte verde)
  neutral: {
    50: '#f8f9f7',    // Casi blanco con tinte verde
    100: '#f0f2ed',   // Gris muy claro
    200: '#e3e6df',   // Gris claro
    300: '#c9cdc4',   // Gris medio claro
    400: '#9fa499',   // Gris medio
    500: '#707066',   // Gris
    600: '#57574f',   // Gris oscuro
    700: '#3f3f39',   // Gris muy oscuro
    800: '#2a2a26',   // Casi negro
    900: '#1a1a18',   // Negro
  },

  // Colores de Estado
  success: '#5a9308',  // Verde éxito
  warning: '#d4a017',  // Dorado/Amarillo formal
  error: '#b91c1c',    // Rojo formal
  info: '#3b6b8f',     // Azul grisáceo formal

  // Colores Base
  white: '#ffffff',
  black: '#000000',

  // Fondos
  background: {
    primary: '#ffffff',
    secondary: '#f8f9f7',
    tertiary: '#f0f2ed',
    dark: '#1a1a18',
  },

  // Textos
  text: {
    primary: '#1a1a18',      // Negro cálido
    secondary: '#3f3f39',    // Gris oscuro
    tertiary: '#707066',     // Gris medio
    inverse: '#ffffff',      // Blanco
    accent: '#467e03',       // Verde principal
  },

  // Bordes
  border: {
    light: '#e3e6df',
    medium: '#c9cdc4',
    dark: '#9fa499',
  },

  // Sombras (con tinte verde muy sutil)
  shadow: {
    sm: 'rgba(70, 126, 3, 0.05)',
    md: 'rgba(70, 126, 3, 0.1)',
    lg: 'rgba(70, 126, 3, 0.15)',
    xl: 'rgba(70, 126, 3, 0.2)',
  },
} as const;

// Exportar colores individuales para uso directo
export const {
  primary,
  accent,
  neutral,
  success,
  warning,
  error,
  info,
  white,
  black,
  background,
  text,
  border,
  shadow,
} = colors;

export default colors;

