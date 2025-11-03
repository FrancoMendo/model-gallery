/**
 * Tipos para producciones/experiencias fotográficas
 */

export interface Photo {
  id: string;
  url: string;
  thumbnail?: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Production {
  id: string;
  title: string;
  description: string;
  coverImage: string; // Imagen principal/portada
  category: string;
  date: Date;
  location?: string;
  photographer?: string;
  photos: Photo[]; // Todas las fotos de esta producción
  tags?: string[];
}

export interface ProductionFilters {
  category?: string;
  searchTerm?: string;
  dateFrom?: Date;
  dateTo?: Date;
}

