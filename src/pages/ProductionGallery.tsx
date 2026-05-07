/**
 * Página de galería de una producción específica
 */

import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import type { Production } from '../types/production.types';
import Lightbox from '../components/gallery/Lightbox';
import Header from '../components/layout/Header';

const API_URL = import.meta.env.VITE_API_URL || "https://api-model-gallery-production.francomendodev.workers.dev";

export const ProductionGallery = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [production, setProduction] = useState<Production | null>(location.state?.production || null);
  const [isLoading, setIsLoading] = useState(!production);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    if (!production && id) {
      const fetchProduction = async () => {
        try {
          const res = await fetch(`${API_URL}/productions/${id}`);
          const data = await res.json();
          if (data.production) {
            const p = data.production;
            const mappedProduction = {
              ...p,
              category: p.type || p.category || "General",
              coverImage: p.coverImage ? `${API_URL}${p.coverImage}` : "https://via.placeholder.com/400x600?text=Sin+Imagen",
              photos: (p.photos || []).map((photo: any) => ({
                ...photo,
                url: `${API_URL}${photo.url}`
              }))
            };
            setProduction(mappedProduction);
          }
        } catch (error) {
          console.error("Error fetching production:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchProduction();
    } else {
      setIsLoading(false);
    }
  }, [id, production]);

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextPhoto = () => {
    if (production) {
      setCurrentPhotoIndex((prev) => 
        prev === production.photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  const previousPhoto = () => {
    if (production) {
      setCurrentPhotoIndex((prev) => 
        prev === 0 ? production.photos.length - 1 : prev - 1
      );
    }
  };

  if (isLoading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Cargando...</h2>
      </div>
    );
  }

  if (!production) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Producción no encontrada</h2>
        <button 
          onClick={() => navigate('/')}
          style={{
            marginTop: '20px',
            padding: '8px 20px',
            backgroundColor: '#467e03',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#3a6802';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#467e03';
          }}
        >
          ← Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f8f9f7',
    }}>
      {/* Header */}
      <Header />

      {/* Botón volver */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '15px 20px 0',
      }}>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'white',
            border: '1px solid #467e03',
            color: '#467e03',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontWeight: '600',
            padding: '6px 14px',
            borderRadius: '20px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#467e03';
            e.currentTarget.style.borderColor = '#467e03';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.borderColor = '#467e03';
            e.currentTarget.style.color = '#467e03';
          }}
        >
          ← Volver
        </button>
      </div>

      {/* Información de la producción */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0px 20px 32px',
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '800',
            color: '#1a1a18',
            marginBottom: '5px',
          }}>
            {production.title}
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#3f3f39',
            lineHeight: '1.6',
            marginBottom: '20px',
          }}>
            {production.description}
          </p>

          <div style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            fontSize: '14px',
            color: '#9fa499',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>📂</span>
              <span>{production.category}</span>
            </div>
            
            {production.date && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>📅</span>
                <span>{new Date(production.date).toLocaleDateString('es-ES')}</span>
              </div>
            )}
            
            {production.location && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>📍</span>
                <span>{production.location}</span>
              </div>
            )}
            
            {production.photographer && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>📷</span>
                <span>{production.photographer}</span>
              </div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🖼️</span>
              <span>{production.photos.length} fotos</span>
            </div>
          </div>
        </div>

        {/* Grid de fotos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {production.photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              style={{
                position: 'relative',
                paddingBottom: '100%',
                backgroundColor: '#e3e6df',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img
                src={`${API_URL}/images/${photo.id}`}
                alt={photo.alt || `Foto ${index + 1}`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                loading="lazy"
              />
              
              {/* Overlay con número */}
            {/*   <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
              }}>
                #{index + 1}
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        photos={production.photos}
        currentIndex={currentPhotoIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextPhoto}
        onPrevious={previousPhoto}
      />
    </div>
  );
};

export default ProductionGallery;

