/**
 * Tipos relacionados con la galería de imágenes
 */

import { Photo } from './model.types';

export interface GalleryState {
  photos: Photo[];
  filteredPhotos: Photo[];
  selectedPhoto: Photo | null;
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  layout: GalleryLayout;
  sortBy: SortOption;
}

export enum GalleryLayout {
  GRID = 'grid',
  MASONRY = 'masonry',
  CAROUSEL = 'carousel',
  SLIDESHOW = 'slideshow',
}

export enum SortOption {
  NEWEST = 'newest',
  OLDEST = 'oldest',
  POPULAR = 'popular',
  RANDOM = 'random',
}

export interface GalleryFilters {
  category?: string;
  tags?: string[];
  dateFrom?: Date;
  dateTo?: Date;
  orientation?: 'portrait' | 'landscape' | 'square';
}

export interface LightboxState {
  isOpen: boolean;
  currentIndex: number;
  photos: Photo[];
}

