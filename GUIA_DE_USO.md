# 🚀 Guía de Uso - Model Gallery

## ✅ ¿Qué se ha implementado?

### 1. **Página Principal (Home)**
- Muestra todas las producciones/experiencias fotográficas
- Barra de búsqueda para filtrar por título o descripción
- Filtros por categoría
- Grid responsive de tarjetas de producción
- Cada tarjeta muestra:
  - Imagen de portada
  - Título y descripción
  - Categoría
  - Cantidad de fotos
  - Fecha, ubicación y fotógrafo

### 2. **Página de Galería de Producción**
- Al hacer clic en una tarjeta, se abre la galería completa
- Muestra todas las fotos de esa producción
- Grid responsive de fotos
- Al hacer clic en una foto, se abre en modo Lightbox

### 3. **Lightbox (Visualizador de Fotos)**
- Muestra la foto en pantalla completa
- Navegación con flechas (izquierda/derecha)
- Navegación con teclado:
  - `←` Foto anterior
  - `→` Foto siguiente
  - `Esc` Cerrar
- Contador de fotos (ej: 1/10)
- Botón de cerrar
- Fondo oscuro semi-transparente

## 📂 Estructura de Datos

La aplicación usa una estructura basada en "Producciones":

```typescript
Production {
  id: string
  title: string                // Título de la sesión
  description: string          // Descripción
  coverImage: string          // Imagen principal (portada)
  category: string            // Categoría (Editorial, Fashion, etc.)
  date: Date                  // Fecha de la sesión
  location: string            // Ubicación
  photographer: string        // Fotógrafo
  photos: Photo[]            // Array de todas las fotos
  tags: string[]             // Tags para búsqueda
}
```

## 🎯 Cómo Usar la Aplicación

### 1. **Iniciar el servidor de desarrollo**

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### 2. **Agregar más fotos**

Para agregar una nueva producción con sus fotos:

1. **Organiza tus fotos por carpeta:**
   ```
   src/assets/images/models/
   ├── sesion-editorial/
   │   ├── foto1.jpg
   │   ├── foto2.jpg
   │   └── foto3.jpg
   └── sesion-fashion/
       ├── foto1.jpg
       └── foto2.jpg
   ```

2. **Edita el archivo `src/data/productions.data.ts`:**

```typescript
export const mockProductions: Production[] = [
  {
    id: '1',
    title: 'Sesión de Prueba',
    description: 'Primera sesión fotográfica...',
    coverImage: '/src/assets/images/models/test.JPG',
    category: 'Editorial',
    date: new Date('2024-11-01'),
    location: 'Estudio Principal',
    photographer: 'Franco',
    photos: [
      {
        id: 'p1',
        url: '/src/assets/images/models/test.JPG',
        alt: 'Sesión de prueba - Foto 1',
      },
      // Agregar más fotos aquí
    ],
    tags: ['editorial', 'studio', 'test'],
  },
  // AGREGAR NUEVA PRODUCCIÓN AQUÍ
  {
    id: '2',
    title: 'Sesión Editorial Fashion',
    description: 'Sesión de moda en exteriores',
    coverImage: '/src/assets/images/models/sesion-editorial/foto1.jpg',
    category: 'Fashion',
    date: new Date('2024-11-15'),
    location: 'Parque Central',
    photographer: 'Franco',
    photos: [
      {
        id: 'p2-1',
        url: '/src/assets/images/models/sesion-editorial/foto1.jpg',
        alt: 'Fashion Editorial - Foto 1',
      },
      {
        id: 'p2-2',
        url: '/src/assets/images/models/sesion-editorial/foto2.jpg',
        alt: 'Fashion Editorial - Foto 2',
      },
      {
        id: 'p2-3',
        url: '/src/assets/images/models/sesion-editorial/foto3.jpg',
        alt: 'Fashion Editorial - Foto 3',
      },
    ],
    tags: ['fashion', 'outdoor', 'editorial'],
  },
];
```

### 3. **Categorías recomendadas**

Usa categorías consistentes para que los filtros funcionen bien:
- `Editorial`
- `Fashion`
- `Commercial`
- `Beauty`
- `Fitness`
- `Portrait`
- `Runway`
- `Lifestyle`

## 🎨 Funcionalidades Principales

### **Página de Inicio**
- **Búsqueda en tiempo real**: Filtra mientras escribes
- **Filtros por categoría**: Botones para filtrar rápidamente
- **Cards interactivos**: Efecto hover con elevación
- **Responsive**: Se adapta a móviles, tablets y desktop

### **Galería de Producción**
- **Información completa**: Muestra todos los detalles de la sesión
- **Grid de fotos**: Todas las fotos organizadas en cuadrícula
- **Numeración**: Cada foto tiene su número
- **Botón volver**: Regresa a la página principal

### **Lightbox**
- **Pantalla completa**: Visualización inmersiva
- **Navegación fluida**: Transiciones suaves entre fotos
- **Controles intuitivos**: Botones grandes y claros
- **Información contextual**: Muestra descripción de la foto

## 📱 Responsive Design

La aplicación se adapta automáticamente a:
- 📱 **Móviles** (320px+): 1 columna
- 📱 **Tablets** (768px+): 2 columnas
- 💻 **Desktop** (1024px+): 3 columnas
- 🖥️ **Pantallas grandes** (1280px+): 3-4 columnas

## 🚀 Próximas Mejoras Sugeridas

### Corto plazo:
1. ✅ **Script automático** para cargar fotos desde carpetas
2. ✅ **Optimización de imágenes** (thumbnails automáticos)
3. ✅ **Carga lazy** de imágenes fuera del viewport
4. ✅ **Animaciones de entrada** (fade in, slide up)

### Mediano plazo:
1. 📤 **Sistema de carga de imágenes** (drag & drop)
2. 🏷️ **Tags clickeables** para filtrar
3. ❤️ **Sistema de favoritos**
4. 📤 **Compartir en redes sociales**
5. 💬 **Sistema de comentarios**

### Largo plazo:
1. 🔐 **Panel de administración** para gestionar producciones
2. 🗄️ **Base de datos** (Firebase, Supabase, o MongoDB)
3. 👥 **Sistema de usuarios** y permisos
4. 📊 **Estadísticas** de visualizaciones
5. 🌍 **Internacionalización** (múltiples idiomas)

## 🎬 Ejemplo de Uso Completo

### Escenario: Nueva sesión fotográfica

1. **Organizas tus fotos:**
   ```
   src/assets/images/models/maria-lopez-2024/
   ├── portada.jpg      ← Esta será la coverImage
   ├── foto1.jpg
   ├── foto2.jpg
   ├── foto3.jpg
   └── foto4.jpg
   ```

2. **Agregas la producción en `productions.data.ts`:**
   ```typescript
   {
     id: '3',
     title: 'María López - Sesión Beauty',
     description: 'Sesión de belleza con enfoque en maquillaje y expresiones naturales',
     coverImage: '/src/assets/images/models/maria-lopez-2024/portada.jpg',
     category: 'Beauty',
     date: new Date('2024-11-20'),
     location: 'Estudio Luz Natural',
     photographer: 'Franco',
     photos: [
       {
         id: 'ml-1',
         url: '/src/assets/images/models/maria-lopez-2024/foto1.jpg',
         alt: 'María López - Close up maquillaje',
       },
       // ... más fotos
     ],
     tags: ['beauty', 'makeup', 'studio', 'portrait'],
   }
   ```

3. **Guardas y recargas** la página

4. **Resultado:**
   - ✅ Aparece en la página principal
   - ✅ Se puede buscar por nombre o tags
   - ✅ Se filtra por categoría "Beauty"
   - ✅ Al hacer clic, muestra todas las 4 fotos
   - ✅ Las fotos se pueden ver en lightbox

## 🛠️ Personalización

### Cambiar colores:
Edita `src/pages/Home.tsx` y busca los colores hexadecimales:
- `#3b82f6` - Azul primario
- `#6b7280` - Gris texto
- `#f9fafb` - Fondo claro

### Cambiar grid:
En `Home.tsx`, línea ~191:
```typescript
gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))'
// Cambia 320px por el ancho mínimo deseado
```

### Cambiar tamaño de las fotos en galería:
En `ProductionGallery.tsx`, línea ~138:
```typescript
gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
```

## ⚡ Tips de Performance

1. **Usa WebP** para las imágenes (mejor compresión)
2. **Genera thumbnails** de 400px de ancho para las previews
3. **Nombres de archivo** descriptivos (facilita debugging)
4. **No subas fotos** de más de 2MB por archivo
5. **Resolución óptima**: 
   - Portada: 800x600px
   - Fotos galería: 1200x1600px

## 📧 Contacto y Soporte

Para dudas o mejoras, contacta a Franco.

---

¡Disfruta tu galería fotográfica! 📸✨

