/**
 * Exportación centralizada de todos los tipos
 */

export * from './model.types';
export * from './gallery.types';

// Tipos comunes de la aplicación
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface ErrorResponse {
  message: string;
  code?: string;
  details?: unknown;
}

