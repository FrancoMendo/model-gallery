# 🔍 Diagnóstico de Navegación - Pantalla en Blanco

## Pasos para Resolver el Problema

### 1️⃣ Verificar que el servidor esté corriendo

```bash
# Iniciar el servidor de desarrollo
npm run dev
```

Deberías ver algo como:
```
VITE v7.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 2️⃣ Abrir la consola del navegador

1. Abre Chrome/Firefox/Edge
2. Ve a `http://localhost:5173`
3. Presiona `F12` o `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
4. Ve a la pestaña **Console**
5. Busca errores en rojo

### 3️⃣ Errores Comunes y Soluciones

#### Error: "Cannot find module 'react-router-dom'"
**Solución:**
```bash
npm install react-router-dom
```

#### Error: "Failed to resolve import"
**Solución:**
```bash
# Detener el servidor (Ctrl+C)
# Limpiar caché y reinstalar
rm -rf node_modules
npm install
npm run dev
```

#### Error: Rutas de imágenes incorrectas
La imagen `test.JPG` debe estar en:
```
src/assets/images/models/test.JPG
```

### 4️⃣ Verificación Manual

Copia y pega este código de prueba en `src/App.tsx`:

```tsx
function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'red' }}>PRUEBA - Si ves esto, React funciona</h1>
      <p>El servidor está corriendo correctamente</p>
    </div>
  );
}

export default App;
```

Si ves el mensaje rojo, significa que:
- ✅ React está funcionando
- ✅ El servidor está corriendo
- ❌ El problema está en el Router o componentes

Luego restaura el código original.

### 5️⃣ Verificar Estructura de Archivos

Ejecuta este comando para ver la estructura:

```bash
# Windows PowerShell
tree /F src /A

# O simplemente lista los archivos
dir src\pages
dir src\components
```

Debes tener:
```
src/
├── pages/
│   ├── Home.tsx
│   ├── Gallery.tsx
│   ├── ModelDetail.tsx
│   └── ProductionGallery.tsx
├── components/
│   └── productions/
│       └── ProductionCard.tsx
├── data/
│   └── productions.data.ts
└── App.tsx
```

### 6️⃣ Revisar package.json

Ejecuta:
```bash
cat package.json
```

O ábrelo y verifica que tenga:
```json
{
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^6.x.x"
  }
}
```

## 🔧 Solución Rápida (Reset Completo)

Si nada funciona, prueba esto:

```bash
# 1. Detén el servidor (Ctrl+C)

# 2. Limpia node_modules y caché
rm -rf node_modules
rm package-lock.json

# 3. Reinstala todo
npm install

# 4. Verifica que react-router-dom esté instalado
npm list react-router-dom

# 5. Inicia de nuevo
npm run dev
```

## 🐛 Debugging Avanzado

### Opción 1: Verificar con DevTools

En la consola del navegador, ejecuta:
```javascript
// Esto debe retornar un objeto
console.log(window.React);

// Esto debe mostrar la versión
console.log(React.version);
```

### Opción 2: Revisar Network Tab

1. Abre DevTools (F12)
2. Ve a la pestaña **Network**
3. Recarga la página (F5)
4. Busca archivos con estado **404** o **Failed**

### Opción 3: Ver mensajes de Vite

En la terminal donde corre `npm run dev`, busca:
- ✅ Mensajes en verde = OK
- ⚠️ Mensajes en amarillo = Advertencias
- ❌ Mensajes en rojo = Errores

## 📝 Checklist de Verificación

- [ ] Node.js instalado (versión 18+)
- [ ] `npm install` ejecutado sin errores
- [ ] `react-router-dom` instalado
- [ ] Servidor corriendo en puerto 5173
- [ ] Navegador en `http://localhost:5173`
- [ ] Consola sin errores
- [ ] Archivo `src/pages/Home.tsx` existe
- [ ] Archivo `src/data/productions.data.ts` existe
- [ ] Archivo `src/components/productions/ProductionCard.tsx` existe

## 🚨 Si Sigue sin Funcionar

Comparte:
1. Captura de pantalla de la consola del navegador
2. Output completo de la terminal donde corre `npm run dev`
3. Output de `npm list react-router-dom`
4. Output de `npm --version` y `node --version`

---

## ✅ Solución Confirmada

Una vez que identifiquemos el error exacto, actualizaremos este documento con la solución.

