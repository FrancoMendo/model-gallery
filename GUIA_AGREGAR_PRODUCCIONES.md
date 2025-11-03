# 📸 Guía Rápida - Agregar Nuevas Producciones

## 🎯 Sistema de Nomenclatura

Tu sistema usa:
```
item_{producción}_{orden}.JPG
```

**Ejemplo:**
- `item_1_1.JPG` → Producción 1, Foto 1
- `item_1_2.JPG` → Producción 1, Foto 2
- `item_1_3.JPG` → Producción 1, Foto 3
- `item_2_1.JPG` → Producción 2, Foto 1
- `item_2_2.JPG` → Producción 2, Foto 2
- ...y así sucesivamente

## ✅ Pasos para Agregar una Nueva Producción

### 1️⃣ Agrega tus fotos

Coloca las fotos en: `src/assets/images/models/`

**Ejemplo para Producción 2:**
```
src/assets/images/models/
├── item_2_1.JPG  ← Primera foto (será la portada)
├── item_2_2.JPG
├── item_2_3.JPG
├── item_2_4.JPG
└── item_2_5.JPG
```

### 2️⃣ Edita el archivo de datos

Abre: `src/data/productions.data.ts`

Agrega el nuevo objeto en el array `mockProductions`:

```typescript
export const mockProductions: Production[] = [
  {
    id: '1',
    title: 'Sesión Editorial 1',
    // ... (producción existente)
  },
  // AGREGAR AQUÍ NUEVA PRODUCCIÓN ⬇️
  {
    id: '2',  // ← Número de la producción
    title: 'Sesión Fashion Urbana',  // ← Título descriptivo
    description: 'Sesión en exteriores con estilo urbano y moderno.',
    coverImage: '/src/assets/images/models/item_2_1.JPG',  // ← Primera foto
    category: 'Fashion',  // ← Editorial, Fashion, Commercial, Beauty, etc.
    date: new Date('2024-11-15'),  // ← Fecha de la sesión
    location: 'Ciudad - Exteriores',  // ← Ubicación
    photographer: 'Franco',  // ← Fotógrafo
    photos: generatePhotos(2, 5),  // ← (id, cantidad de fotos)
    tags: ['fashion', 'outdoor', 'urbano'],  // ← Tags para búsqueda
  },
];
```

### 3️⃣ ¡Listo! 🎉

Recarga tu navegador y verás la nueva producción en el portfolio.

---

## 📝 Plantilla Rápida para Copiar

```typescript
{
  id: 'X',  // ← Cambia por el número
  title: 'Título de la Sesión',
  description: 'Descripción de la sesión fotográfica.',
  coverImage: '/src/assets/images/models/item_X_1.JPG',  // ← Primera foto
  category: 'Editorial',  // Editorial, Fashion, Commercial, Beauty, Portrait
  date: new Date('2024-11-XX'),
  location: 'Ubicación',
  photographer: 'Franco',
  photos: generatePhotos(X, Y),  // X = id producción, Y = cantidad de fotos
  tags: ['tag1', 'tag2', 'tag3'],
},
```

---

## 🎨 Categorías Disponibles

Usa estas categorías para consistencia:

- `Editorial` - Sesiones editoriales y revista
- `Fashion` - Moda y pasarela
- `Commercial` - Publicidad comercial
- `Beauty` - Belleza y maquillaje
- `Portrait` - Retratos
- `Lifestyle` - Estilo de vida
- `Fitness` - Deportivo y fitness

---

## 📂 Ejemplo Completo: 3 Producciones

```typescript
export const mockProductions: Production[] = [
  // Producción 1: 3 fotos
  {
    id: '1',
    title: 'Sesión Editorial Primavera',
    description: 'Sesión editorial con tonos naturales y luz suave.',
    coverImage: '/src/assets/images/models/item_1_1.JPG',
    category: 'Editorial',
    date: new Date('2024-11-01'),
    location: 'Estudio Principal',
    photographer: 'Franco',
    photos: generatePhotos(1, 3),  // 3 fotos
    tags: ['editorial', 'studio'],
  },
  
  // Producción 2: 5 fotos
  {
    id: '2',
    title: 'Fashion Week Local',
    description: 'Desfile de moda local con diseñadores emergentes.',
    coverImage: '/src/assets/images/models/item_2_1.JPG',
    category: 'Fashion',
    date: new Date('2024-11-10'),
    location: 'Teatro Municipal',
    photographer: 'Franco',
    photos: generatePhotos(2, 5),  // 5 fotos
    tags: ['fashion', 'runway', 'evento'],
  },
  
  // Producción 3: 8 fotos
  {
    id: '3',
    title: 'Campaña Comercial Verano',
    description: 'Campaña publicitaria para marca de ropa de verano.',
    coverImage: '/src/assets/images/models/item_3_1.JPG',
    category: 'Commercial',
    date: new Date('2024-11-20'),
    location: 'Playa - Exteriores',
    photographer: 'Franco',
    photos: generatePhotos(3, 8),  // 8 fotos
    tags: ['commercial', 'verano', 'outdoor'],
  },
];
```

---

## 🔄 Flujo de Trabajo Recomendado

1. **Organiza tus fotos**
   - Selecciona las mejores fotos de la sesión
   - Renómbralas siguiendo la nomenclatura
   - Colócalas en `src/assets/images/models/`

2. **Primera foto = Portada**
   - La foto `item_X_1.JPG` siempre será la portada
   - Elige tu mejor foto para esta posición

3. **Agrega la producción**
   - Copia la plantilla
   - Completa los datos
   - Ajusta el número de fotos en `generatePhotos()`

4. **Verifica**
   - Recarga el navegador
   - Busca errores en la consola
   - Prueba que las imágenes carguen

---

## 🛠️ Función `generatePhotos()` Explicada

```typescript
generatePhotos(productionId, totalPhotos)
```

**Parámetros:**
- `productionId`: Número de la producción (1, 2, 3, etc.)
- `totalPhotos`: Cantidad total de fotos de esa producción

**Genera automáticamente:**
- URLs: `/src/assets/images/models/item_{id}_{número}.JPG`
- IDs únicos: `p{id}-{número}`
- Alt text descriptivo

**Ejemplo:**
```typescript
generatePhotos(2, 3)
// Genera:
// [
//   { id: 'p2-1', url: '/src/assets/images/models/item_2_1.JPG', alt: 'Producción 2 - Foto 1' },
//   { id: 'p2-2', url: '/src/assets/images/models/item_2_2.JPG', alt: 'Producción 2 - Foto 2' },
//   { id: 'p2-3', url: '/src/assets/images/models/item_2_3.JPG', alt: 'Producción 2 - Foto 3' },
// ]
```

---

## ⚡ Tips para Velocidad

### Agregar Producción Rápida (1 minuto)

1. Copia esta plantilla:
```typescript
{
  id: '2',
  title: 'Nueva Sesión',
  description: 'Descripción breve.',
  coverImage: '/src/assets/images/models/item_2_1.JPG',
  category: 'Editorial',
  date: new Date('2024-11-15'),
  location: 'Estudio',
  photographer: 'Franco',
  photos: generatePhotos(2, 4),
  tags: ['editorial'],
},
```

2. Cambia solo estos valores:
   - `id` → Número de producción
   - `title` → Título
   - `coverImage` → `item_X_1.JPG` (X = id)
   - `category` → Tipo de sesión
   - `photos: generatePhotos(X, Y)` → X = id, Y = cantidad de fotos

3. Guarda y recarga 🎉

---

## ❓ FAQ

**¿Qué pasa si me equivoco en el número de fotos?**
- No cargará las fotos que no existan
- La consola mostrará error 404 para las faltantes
- Ajusta el número en `generatePhotos()` y guarda

**¿Puedo cambiar el orden de las fotos?**
- Sí, renombra los archivos cambiando el número de orden
- Recarga el navegador

**¿Puedo usar PNG en lugar de JPG?**
- Sí, pero actualiza la extensión en `generatePhotos()`
- O mejor: convierte todo a JPG para consistencia

**¿Cuántas fotos puedo poner por producción?**
- Sin límite técnico
- Recomendado: 5-15 fotos por sesión
- Óptimo para UX: 8-10 fotos

---

**¡Tu sistema está listo para escalar rápidamente!** 🚀


