# 📸 Guía de Gestión de Imágenes

## 🗂️ Estructura de Carpetas

### Ubicación de las Imágenes en Producción

Las imágenes deben estar en la carpeta `public/` para que estén disponibles en producción:

```
public/
  └── images/
      └── models/
          ├── production_2_item_1.JPG
          ├── production_2_item_2.JPG
          ├── ...
          └── user_avatar.JPG
```

### ⚠️ NO usar `src/assets/` para imágenes grandes

Las imágenes en `src/assets/` solo están disponibles en desarrollo con Vite. En producción deben estar en `public/`.

## 📝 Nomenclatura de Archivos

### Fotos de Producciones
```
production_{productionId}_item_{itemNumber}.JPG
```

Ejemplos:
- `production_2_item_1.JPG`
- `production_3_item_10.JPG`

### Avatar de Usuario
```
user_avatar.JPG
```

## 🔧 Agregar Nuevas Producciones

### 1. Agregar las Imágenes

Coloca tus imágenes en `public/images/models/` siguiendo la nomenclatura:

```bash
# Ejemplo: Producción 7 con 5 fotos
public/images/models/production_7_item_1.JPG
public/images/models/production_7_item_2.JPG
public/images/models/production_7_item_3.JPG
public/images/models/production_7_item_4.JPG
public/images/models/production_7_item_5.JPG
```

### 2. Actualizar `productions.data.ts`

Agrega tu producción al array `mockProductions`:

```typescript
{
  id: '7',
  title: 'Título de tu Producción',
  description: 'Descripción detallada...',
  coverImage: '/images/models/production_7_item_1.JPG',
  category: 'Editorial', // o 'Comercial', 'Artística', 'Polaroid'
  date: new Date('2025-11-03'),
  location: 'Ubicación',
  photographer: 'Nombre del Fotógrafo',
  photos: generatePhotos(7, 5), // 7 = productionId, 5 = número de fotos
  tags: ['tag1', 'tag2', 'tag3'],
}
```

### 3. Build y Deploy

```bash
npm run deploy
```

## 🖼️ Rutas de Imágenes

### En el Código

Todas las rutas deben usar `/images/models/`:

```typescript
// ✅ CORRECTO
coverImage: '/images/models/production_2_item_1.JPG'

// ❌ INCORRECTO (solo funciona en desarrollo)
coverImage: '/src/assets/images/models/production_2_item_1.JPG'
```

### La función `generatePhotos()`

Esta función genera automáticamente las rutas de todas las fotos:

```typescript
const generatePhotos = (productionId: number, totalPhotos: number) => {
  return Array.from({ length: totalPhotos }, (_, index) => ({
    id: `p${productionId}-${index + 1}`,
    url: `/images/models/production_${productionId}_item_${index + 1}.JPG`,
    alt: "",
  }));
};
```

## 🎨 Avatar de Usuario

### Cambiar el Avatar

1. Reemplaza el archivo en `public/images/models/user_avatar.JPG`
2. O actualiza la ruta en `src/config/profile.config.ts`:

```typescript
export const profileConfig = {
  name: 'Magalí Matas',
  photo: '/images/models/user_avatar.JPG',
  role: 'Modelo & Actriz Profesional',
  // ...
};
```

## 📊 Optimización de Imágenes

### Tamaños Recomendados

- **Fotos de producciones**: Max 2000px en el lado más largo
- **Avatar**: 500x500px (cuadrado)
- **Calidad JPG**: 80-90%

### Herramientas de Optimización

#### Usando ImageMagick (Windows)
```powershell
# Instalar con Chocolatey
choco install imagemagick

# Redimensionar y optimizar
magick convert input.jpg -resize 2000x2000> -quality 85 output.jpg
```

#### Usando Node.js
```bash
# Instalar sharp
npm install --save-dev sharp

# Crear script de optimización
node optimize-images.js
```

Ejemplo `optimize-images.js`:
```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images/models';
const files = fs.readdirSync(inputDir);

files.forEach(file => {
  if (file.endsWith('.JPG')) {
    sharp(path.join(inputDir, file))
      .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toFile(path.join(inputDir, 'optimized_' + file));
  }
});
```

## 🚨 Troubleshooting

### Las imágenes no se ven en producción

**Problema**: Las rutas apuntan a `/src/assets/`

**Solución**:
1. Mover imágenes a `public/images/models/`
2. Actualizar rutas en el código a `/images/models/`
3. Hacer rebuild y redeploy

### Error 404 en imágenes

**Problema**: Nomenclatura incorrecta o imágenes faltantes

**Solución**:
1. Verificar que los nombres coincidan exactamente
2. Las extensiones deben ser `.JPG` (mayúsculas)
3. Verificar que existan en `public/images/models/`

### Imágenes muy pesadas

**Problema**: Tiempos de carga lentos

**Solución**:
1. Optimizar imágenes antes de subirlas
2. Usar herramientas de compresión
3. Considerar lazy loading (ya implementado)

## 📦 Backup de Imágenes

### Recomendación

Mantén un backup de tus imágenes originales fuera del proyecto:

```
Backups/
  └── model_gallery/
      └── images/
          ├── raw/           # Imágenes originales sin procesar
          ├── edited/        # Imágenes editadas pero sin optimizar
          └── optimized/     # Imágenes listas para producción
```

---

**Nota**: Las imágenes en `public/` se copian automáticamente a `dist/` durante el build y se despliegan en Cloudflare Pages.

