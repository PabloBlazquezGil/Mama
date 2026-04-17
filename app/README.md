# Asociación Open Music — Web

Sitio web estático servido con Node.js + Express.

## Estructura del proyecto

```
app/
├── public/              ← Archivos HTML, imágenes, assets
│   ├── index.html       ← Página de inicio
│   ├── obras.html
│   ├── asi-soy.html
│   ├── tarzan.html
│   ├── peter-pan.html
│   ├── hercules.html
│   ├── comunidad.html
│   ├── noticias.html
│   └── images/
├── server.js            ← Servidor Express
├── package.json
└── .gitignore
```

## Desarrollo local

```bash
cd app
npm install
npm start
# → http://localhost:3000
```

## Deploy en Hostinger (Node.js)

### ¿Qué subir?
Sube **solo el contenido de la carpeta `app/`** — NO subas:
- `node_modules/` (Hostinger los instala automáticamente)
- Los scripts `.js` de la raíz (clean-menu.js, fix-hero.js, etc.)

### Pasos en el panel de Hostinger:

1. **Crear la aplicación Node.js** en hPanel → `Websites` → tu dominio → `Node.js`
2. **Versión de Node**: selecciona `18.x` o superior
3. **Application root**: `/` (o la carpeta donde subas los archivos)
4. **Application startup file**: `server.js`
5. **Subir archivos** mediante File Manager o FTP:
   - `server.js`
   - `package.json`
   - `package-lock.json`
   - carpeta `public/` completa
6. En el panel Node.js, pulsar **"Install dependencies"** (equivale a `npm install`)
7. Pulsar **"Restart"** para arrancar la aplicación

### Variables de entorno
No se necesitan variables de entorno. El puerto lo asigna Hostinger automáticamente via `process.env.PORT`.

## Rutas disponibles

| URL | Archivo |
|-----|---------|
| `/` | `public/index.html` |
| `/obras` | `public/obras.html` |
| `/asi-soy` | `public/asi-soy.html` |
| `/tarzan` | `public/tarzan.html` |
| `/peter-pan` | `public/peter-pan.html` |
| `/hercules` | `public/hercules.html` |
| `/comunidad` | `public/comunidad.html` |
| `/noticias` | `public/noticias.html` |
| Cualquier otra | redirige a `index.html` (404) |
