# 📋 Instrucciones - Personalizar Header

## ✨ Header Mejorado Creado

He creado un header profesional con:
- ✅ Foto de perfil circular con borde verde
- ✅ Nombre y rol del modelo/actriz
- ✅ Navegación central
- ✅ Botones de redes sociales (Instagram y Email)
- ✅ Diseño responsive
- ✅ Efectos hover elegantes

## 🎨 Vista del Nuevo Header

```
┌────────────────────────────────────────────────────────┐
│ [👤]  Franco Model        [Inicio][Acerca][Contacto]  │
│      Modelo & Actriz      [📷] [✉️]                   │
└────────────────────────────────────────────────────────┘
```

## 🔧 Personalizar el Header

### 1. Editar Información Personal

Abre el archivo: `src/config/profile.config.ts`

```typescript
export const profileConfig = {
  name: 'TU NOMBRE AQUÍ',              // ← Cambia esto
  photo: '/src/assets/images/profile.jpg', // ← Ruta a tu foto
  role: 'Modelo & Actriz Profesional', // ← Tu rol/especialización
  
  social: {
    instagram: {
      url: 'https://instagram.com/TU_USUARIO',  // ← Tu Instagram
      username: '@tu_usuario',                   // ← Tu @
    },
    email: {
      address: 'tu@email.com',                   // ← Tu email
      subject: 'Consulta desde Model Gallery',
    },
  },

  bio: 'Tu biografía aquí...', // ← Opcional, para usar en otras páginas
};
```

### 2. Agregar tu Foto de Perfil

**Opción A: Foto Local**

1. Coloca tu foto en: `src/assets/images/profile.jpg`
2. Puede ser `.jpg`, `.png` o `.webp`
3. Tamaño recomendado: **500x500px** mínimo
4. La imagen se mostrará circular automáticamente

**Opción B: Usar Foto Externa (URL)**

```typescript
photo: 'https://tu-servidor.com/imagen.jpg',
```

**Opción C: Si no tienes foto aún**

El header mostrará automáticamente la **inicial de tu nombre** en un círculo verde:

```
┌──┐
│ F │  ← Primera letra de "Franco Model"
└──┘
```

### 3. Configurar Redes Sociales

**Instagram:**
```typescript
instagram: {
  url: 'https://instagram.com/tu_usuario_real',
  username: '@tu_usuario_real',
}
```

**Email:**
```typescript
email: {
  address: 'contacto@tudominio.com',
  subject: 'Consulta de trabajo - Model Gallery',
}
```

El botón de email abrirá automáticamente el cliente de correo del usuario.

## 🎨 Características del Nuevo Header

### Foto de Perfil
- ✅ Circular con borde verde (#467e03)
- ✅ 50x50px
- ✅ Responsive
- ✅ Fallback a inicial si no hay imagen

### Nombre y Rol
- ✅ Nombre en negrita (#1a1a18)
- ✅ Rol en gris (#707066)
- ✅ Layout vertical

### Botones Sociales
- ✅ Iconos SVG (Instagram y Email)
- ✅ Efecto hover: fondo verde y zoom
- ✅ Circulares 40x40px
- ✅ Tooltips accesibles

### Navegación
- ✅ Links centrados
- ✅ Hover cambia color
- ✅ Link activo en verde (#467e03)

### Responsive
- ✅ Desktop: Todo visible
- ✅ Tablet: Navegación oculta → menú hamburguesa
- ✅ Móvil: Menú desplegable

## 📱 Responsive Breakpoints

```css
/* Desktop: > 768px */
- Foto + Nombre + Navegación + Redes = Visible

/* Tablet/Móvil: ≤ 768px */
- Foto + Nombre + Redes = Visible
- Navegación → Menú hamburguesa (3 líneas)
- Click abre menú desplegable
```

## 🎯 Ejemplo de Configuración Real

```typescript
export const profileConfig = {
  name: 'Ana García',
  photo: '/src/assets/images/models/ana-profile.jpg',
  role: 'Modelo de Moda Internacional',
  
  social: {
    instagram: {
      url: 'https://instagram.com/anagarcia_model',
      username: '@anagarcia_model',
    },
    email: {
      address: 'contacto@anagarcia.com',
      subject: 'Propuesta de Colaboración',
    },
  },

  bio: 'Modelo profesional con 8 años de experiencia en pasarelas internacionales y campañas comerciales.',
};
```

## 🔄 Agregar Más Redes Sociales

Si quieres agregar más redes (Facebook, LinkedIn, TikTok):

1. **Actualiza `profile.config.ts`:**

```typescript
social: {
  instagram: { ... },
  email: { ... },
  // NUEVO:
  linkedin: {
    url: 'https://linkedin.com/in/tu-perfil',
  },
  tiktok: {
    url: 'https://tiktok.com/@tu_usuario',
    username: '@tu_usuario',
  },
}
```

2. **Agrega los botones en `Header.tsx`:**

Busca la sección de redes sociales y agrega:

```tsx
{/* LinkedIn */}
<a
  href={profileConfig.social.linkedin.url}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  style={{ /* mismos estilos que Instagram */ }}
>
  <svg>
    {/* Icono de LinkedIn */}
  </svg>
</a>
```

## 🎨 Personalizar Colores del Header

Si quieres cambiar colores específicos del header:

```typescript
// En Header.tsx, busca estos valores:

border: '2px solid #467e03',        // Borde de foto
backgroundColor: '#467e03',         // Fondo hover botones
color: '#467e03',                   // Color links activos
borderBottom: '1px solid #e3e6df',  // Borde inferior header
```

## ✅ Checklist de Personalización

- [ ] Cambiar nombre en `profile.config.ts`
- [ ] Cambiar rol/especialización
- [ ] Agregar foto de perfil en `src/assets/images/`
- [ ] Actualizar URL de Instagram
- [ ] Actualizar dirección de email
- [ ] Probar que los botones sociales funcionan
- [ ] Revisar en móvil que el menú hamburguesa aparezca

## 🚀 Resultado Final

Deberías ver:

```
┌───────────────────────────────────────────────────┐
│ [🖼️] Franco Model    [Inicio][Acerca][Contacto]  │
│     Modelo & Actriz   [📷 Instagram] [✉️ Email]   │
└───────────────────────────────────────────────────┘
```

Con efectos hover elegantes y completamente funcional.

---

**🎉 ¡Tu header profesional está listo!**

Ahora personalízalo con tu información.

