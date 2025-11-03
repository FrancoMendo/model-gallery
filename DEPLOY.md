# 🚀 Guía de Despliegue en Cloudflare Pages

## Configuración

El proyecto está configurado para desplegarse en Cloudflare Pages/Workers con las siguientes características:

### Archivos de Configuración

#### `wrangler.json`
```json
{
  "name": "model-gallery",
  "compatibility_date": "2025-11-03",
  "assets": {
    "directory": "./dist",
    "html_handling": "auto-trailing-slash",
    "not_found_handling": "single-page-application"
  }
}
```

**Opciones importantes:**
- `html_handling: "auto-trailing-slash"`: Maneja automáticamente las URLs con y sin trailing slash
- `not_found_handling: "single-page-application"`: Redirige todas las rutas no encontradas a `index.html` (necesario para React Router)

#### `public/_headers`
Headers de seguridad y caché optimizados:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

## 🔧 Comandos de Despliegue

### 1. Build + Deploy automático
```bash
npm run deploy
```

### 2. Deploy manual (después de build)
```bash
npm run build
npx wrangler deploy
```

### 3. Deploy directo con Wrangler
```bash
npx wrangler deploy --assets=./dist
```

## 📋 Proceso de Despliegue

### Primera vez (Configuración inicial)

1. **Instalar Wrangler** (si no lo tienes):
   ```bash
   npm install -g wrangler
   ```

2. **Autenticarse en Cloudflare**:
   ```bash
   wrangler login
   ```

3. **Ejecutar el deploy**:
   ```bash
   npm run deploy
   ```

### Despliegues siguientes

Simplemente ejecuta:
```bash
npm run deploy
```

## 🌐 Configuración de Dominio

### Cloudflare Pages
Una vez desplegado, tu sitio estará disponible en:
```
https://model-gallery.pages.dev
```

### Dominio Personalizado
Para configurar un dominio personalizado:

1. Ve a tu proyecto en Cloudflare Pages
2. Navega a "Custom domains"
3. Agrega tu dominio
4. Sigue las instrucciones de DNS

## 🔒 Variables de Entorno

Si necesitas variables de entorno en producción:

1. **Via Cloudflare Dashboard**:
   - Ve a tu proyecto → Settings → Environment variables
   - Agrega las variables necesarias

2. **Via wrangler.toml** (alternativa):
   ```toml
   [env.production]
   API_URL = "https://api.example.com"
   ```

## ⚠️ Notas Importantes

### Rutas de React Router
Gracias a la configuración `not_found_handling: "single-page-application"`, todas las rutas de tu aplicación funcionarán correctamente:
- `/` → Home
- `/production/:id` → Galería de producción
- `/about` → Acerca de
- `/contact` → Contacto

### Assets y Caché
Los archivos en `/assets/*` tienen caché de 1 año (immutable), perfecto para:
- JavaScript bundles
- CSS
- Imágenes (aunque las tuyas están en `/src/assets/images/models/`)

### Limitaciones de Cloudflare Workers/Pages
- Tamaño máximo por asset: 25 MB
- Total de assets: hasta 20,000 archivos
- Workers script: 10 MB después de compresión

## 🐛 Troubleshooting

### Error: "Infinite loop detected"
**Solución**: No usar archivo `_redirects` estándar. Usar la configuración de `wrangler.json` en su lugar.

### Error: "Asset too large"
**Solución**: Optimizar imágenes antes de hacer el build:
```bash
# Instalar herramienta de optimización
npm install -D imagemin-cli imagemin-mozjpeg

# Optimizar imágenes
npx imagemin src/assets/images/models/*.JPG --out-dir=src/assets/images/models/optimized
```

### Error: "Too many assets"
**Solución**: Revisar que no estés incluyendo archivos innecesarios en `dist/`. Agregar al `.gitignore`:
```
dist/
node_modules/
.env
```

## 📊 Monitoreo

Después del despliegue, puedes monitorear tu aplicación en:
- **Analytics**: Cloudflare Dashboard → Analytics
- **Logs**: Cloudflare Dashboard → Logs
- **Performance**: Cloudflare Dashboard → Speed

## 🔄 CI/CD (Opcional)

Para automatizar el despliegue con GitHub Actions:

```yaml
# .github/workflows/deploy.yml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```

## 📚 Recursos Adicionales

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [React Router con Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-application/)

---

**¡Listo!** Tu aplicación Model Gallery está configurada para desplegarse en Cloudflare Pages. 🎉

