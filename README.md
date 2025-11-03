# 📸 Model Gallery

Aplicación web moderna para galería de fotos de modelos y actrices, construida con **React**, **TypeScript** y **Vite**.

## ✨ Características

- 🎨 Galería de fotos responsive y moderna
- 🔍 Búsqueda y filtrado de modelos
- 📱 Diseño móvil first
- ⚡ Carga rápida con lazy loading de imágenes
- 🎭 Perfiles detallados de modelos y actrices
- 📊 Sistema de categorización
- 🌙 Soporte para tema oscuro
- ♿ Accesibilidad mejorada

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Navegar al directorio
cd model_galery

# Instalar dependencias
npm install

# Copiar archivo de variables de entorno
cp .env.example .env

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
src/
├── assets/          # Recursos estáticos (imágenes, iconos)
├── components/      # Componentes React reutilizables
│   ├── common/      # Componentes genéricos (Button, Card, etc.)
│   ├── gallery/     # Componentes de galería
│   ├── layout/      # Header, Footer, etc.
│   └── models/      # Componentes de modelos
├── config/          # Configuración de la app
├── contexts/        # React Context para estado global
├── data/            # Datos mock para desarrollo
├── hooks/           # Custom React hooks
├── pages/           # Páginas/Vistas principales
├── services/        # Servicios de API
├── styles/          # Estilos globales
├── types/           # Definiciones de TypeScript
└── utils/           # Funciones auxiliares
```

Ver [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) para más detalles.

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza el build de producción
- `npm run lint` - Ejecuta el linter

## 🧩 Tecnologías

- **React 19** - Librería UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **ESLint** - Linting de código

## 📚 Próximos Pasos

1. **Instalar dependencias adicionales:**
   ```bash
   # React Router para navegación
   npm install react-router-dom
   
   # Librería de UI (opcional)
   npm install tailwindcss postcss autoprefixer
   
   # Estado global (opcional)
   npm install zustand
   
   # React Query para datos (opcional)
   npm install @tanstack/react-query
   ```

2. **Configurar variables de entorno** en `.env`

3. **Implementar backend/API** o conectar con servicio existente

4. **Añadir sistema de autenticación** si es necesario

5. **Optimizar imágenes** y configurar CDN

## 🎨 Personalización

### Colores y estilos

Edita `src/styles/variables.css` para personalizar los colores, tipografía y espaciados.

### Configuración de la app

Modifica `src/config/app.config.ts` para ajustar la configuración general de la aplicación.

## 📝 Convenciones de Código

- **Componentes**: PascalCase (`ModelCard.tsx`)
- **Hooks**: camelCase con prefijo `use` (`useGallery.ts`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Tipos**: PascalCase con sufijo `.types.ts` (`model.types.ts`)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y confidencial.

## 📧 Contacto

Para más información, contacta a [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)

---

Desarrollado con ❤️ para mostrar el talento de modelos y actrices profesionales.
