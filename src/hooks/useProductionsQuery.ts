import { useQuery } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL || "https://api-model-gallery-production.francomendodev.workers.dev";

export const fetchProductions = async () => {
  const res = await fetch(`${API_URL}/productions`);
  if (!res.ok) throw new Error('Error al cargar las producciones');
  const data = await res.json();

  return (data.productions || []).map((p: any) => ({
    ...p,
    category: p.type || p.category || "General",
    coverImage: p.coverImage
      ? `${API_URL}${p.coverImage}`
      : "https://via.placeholder.com/400x600?text=Sin+Imagen",
    photos: (p.photos || []).map((photo: any) => ({
      ...photo,
      url: `${API_URL}${photo.url}`
    }))
  }));
};

export const useProductionsQuery = () => {
  return useQuery({
    queryKey: ['productions'],
    queryFn: fetchProductions,
    staleTime: Infinity, // The data will never be considered stale automatically
    gcTime: 1000 * 60 * 60 * 24, // Keep in garbage collection cache for 24 hours
  });
};
