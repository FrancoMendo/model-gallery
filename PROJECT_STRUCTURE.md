# 📁 Estructura del Proyecto - Model Gallery

Esta es una aplicación de galería de fotos para modelos y actrices construida con **React + TypeScript + Vite**.

## 🏗️ Estructura de Directorios

```
model_galery/
│
├── public/                      # Archivos estáticos públicos
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── assets/                  # Recursos estáticos (imágenes, iconos, fuentes)
│   │   ├── images/
│   │   │   ├── models/          # Fotos de modelos y actrices
│   │   │   └── banners/         # Imágenes de banners y hero sections
│   │   └── icons/               # Iconos SVG y otros
│   │
│   ├── components/              # Componentes reutilizables de React
│   │   ├── common/              # Componentes comunes (Button, Card, Input, etc.)
│   │   ├── gallery/             # Componentes específicos de galería
│   │   ├── layout/              # Componentes de layout (Header, Footer, Sidebar)
│   │   └── models/              # Componentes relacionados con modelos
│   │
│   ├── pages/                   # Páginas/Vistas principales de la aplicación
│   │   ├── Home.tsx
│   │   ├── Gallery.tsx
│   │   ├── ModelDetail.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   │
│   ├── hooks/                   # Custom React Hooks
│   │   ├── useGallery.ts
│   │   ├── useFilter.ts
│   │   └── useInfiniteScroll.ts
│   │
│   ├── services/                # Servicios para llamadas a API
│   │   ├── api.ts
│   │   └── modelService.ts
│   │
│   ├── types/                   # Definiciones de tipos de TypeScript
│   │   ├── model.types.ts
│   │   ├── gallery.types.ts
│   │   └── index.ts
│   │
│   ├── utils/                   # Funciones auxiliares y helpers
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   └── constants.ts
│   │
│   ├── styles/                  # Estilos globales
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── themes/
│   │
│   ├── contexts/                # React Context para estado global
│   │   ├── GalleryContext.tsx
│   │   └── ThemeContext.tsx
│   │
│   ├── config/                  # Archivos de configuración
│   │   └── app.config.ts
│   │
│   ├── data/                    # Datos mock o estáticos
│   │   └── models.data.ts
│   │
│   ├── App.tsx                  # Componente principal de la aplicación
│   ├── main.tsx                 # Punto de entrada de la aplicación
│   └── vite-env.d.ts           # Definiciones de tipos para Vite
│
├── .env                         # Variables de entorno (no commitear)
├── .env.example                 # Ejemplo de variables de entorno
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 📂 Descripción de Carpetas

### 📦 `/src/components/`
Contiene todos los componentes reutilizables organizados por categoría:

- **`common/`**: Componentes básicos reutilizables en toda la app
  - Button, Card, Input, Modal, Loader, etc.

- **`gallery/`**: Componentes específicos para la funcionalidad de galería
  - GalleryGrid, GalleryItem, ImageViewer, Lightbox, FilterBar, etc.

- **`layout/`**: Componentes de estructura y navegación
  - Header, Footer, Navbar, Sidebar, Container, etc.

- **`models/`**: Componentes relacionados con modelos/actrices
  - ModelCard, ModelProfile, ModelStats, BookingForm, etc.

### 📄 `/src/pages/`
Páginas principales de la aplicación (vistas completas):
- `Home.tsx`: Página de inicio
- `Gallery.tsx`: Vista de galería completa
- `ModelDetail.tsx`: Perfil detallado de modelo/actriz
- `About.tsx`: Página sobre nosotros
- `Contact.tsx`: Página de contacto

### 🪝 `/src/hooks/`
Custom hooks de React para lógica reutilizable:
- `useGallery`: Manejo de estado de galería
- `useFilter`: Lógica de filtrado y búsqueda
- `useInfiniteScroll`: Paginación infinita
- `useImageLazyLoad`: Carga diferida de imágenes

### 🌐 `/src/services/`
Servicios para comunicación con APIs y backend:
- `api.ts`: Configuración base de API
- `modelService.ts`: Operaciones CRUD de modelos
- `uploadService.ts`: Manejo de subida de imágenes

### 📝 `/src/types/`
Definiciones de tipos de TypeScript:
```typescript
// model.types.ts
export interface Model {
  id: string;
  name: string;
  age: number;
  height: number;
  photos: Photo[];
  // ...
}
```

### 🛠️ `/src/utils/`
Funciones auxiliares y constantes:
- `formatters.ts`: Formateo de fechas, números, etc.
- `validators.ts`: Validaciones de formularios
- `constants.ts`: Constantes de la aplicación

### 🎨 `/src/styles/`
Estilos globales y temas:
- Variables CSS
- Reset/normalize
- Temas (claro/oscuro)

### 🔄 `/src/contexts/`
Contextos de React para estado global:
- `GalleryContext`: Estado de galería
- `ThemeContext`: Tema de la aplicación
- `AuthContext`: Autenticación (si aplica)

### ⚙️ `/src/config/`
Archivos de configuración de la aplicación:
```typescript
export const appConfig = {
  apiUrl: import.meta.env.VITE_API_URL,
  imagesPerPage: 12,
  // ...
}
```

### 💾 `/src/data/`
Datos mock para desarrollo:
- `models.data.ts`: Datos de ejemplo de modelos

## 🎯 Convenciones y Mejores Prácticas

### Nomenclatura
- **Componentes**: PascalCase (`ModelCard.tsx`)
- **Hooks**: camelCase con prefijo `use` (`useGallery.ts`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Tipos**: PascalCase con sufijo `.types.ts` (`model.types.ts`)
- **Constantes**: UPPER_SNAKE_CASE

### Organización de Componentes
Cada componente puede tener su propia carpeta si incluye:
```
ModelCard/
  ├── ModelCard.tsx
  ├── ModelCard.styles.css
  ├── ModelCard.test.tsx
  └── index.ts
```

### Imports
Usar imports absolutos configurados en `tsconfig.json`:
```typescript
import { ModelCard } from '@/components/models';
import { formatDate } from '@/utils/formatters';
```

## 🚀 Próximos Pasos

1. Instalar dependencias adicionales según necesites:
   - React Router para navegación
   - Estado global (Zustand, Redux, etc.)
   - UI Library (Tailwind, Material-UI, etc.)
   - React Query para fetching de datos

2. Configurar variables de entorno en `.env`

3. Implementar componentes base en `components/common/`

4. Crear tipos en `types/` antes de implementar lógica

5. Desarrollar páginas principales

## 📚 Recursos Útiles

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)

