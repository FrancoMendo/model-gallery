/**
 * Funciones de formateo y utilidades
 */

/**
 * Formatea una fecha a string legible
 */
export const formatDate = (date: Date | string, locale = 'es-ES'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Formatea altura de cm a formato legible
 */
export const formatHeight = (heightInCm: number): string => {
  const feet = Math.floor(heightInCm / 30.48);
  const inches = Math.round((heightInCm % 30.48) / 2.54);
  return `${heightInCm}cm (${feet}'${inches}")`;
};

/**
 * Genera un slug a partir de un string
 */
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
    .replace(/[^\w\s-]/g, '') // Eliminar caracteres especiales
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/--+/g, '-') // Reemplazar múltiples guiones
    .trim();
};

/**
 * Trunca un texto a un número específico de palabras
 */
export const truncateText = (text: string, maxLength: number, suffix = '...'): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + suffix;
};

/**
 * Formatea un número con separadores de miles
 */
export const formatNumber = (num: number, locale = 'es-ES'): string => {
  return num.toLocaleString(locale);
};

/**
 * Genera una URL amigable para compartir
 */
export const createShareUrl = (baseUrl: string, slug: string): string => {
  return `${baseUrl}/model/${slug}`;
};

/**
 * Obtiene las iniciales de un nombre
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

