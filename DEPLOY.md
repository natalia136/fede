# Publicar Aventura Escolar en Hostinger

La app funciona en cualquier plan de Hostinger con PHP (hosting compartido Premium, Business o Cloud). No necesita base de datos MySQL: las cuentas y el progreso se guardan en un archivo JSON protegido.

## 1. Subir los archivos

1. Entra a **hPanel → Sitios web → Administrar → Administrador de archivos**.
2. Abre la carpeta **`public_html`** (o la carpeta del subdominio, si la usarás en uno).
3. Sube el contenido del paquete `aventura-escolar-hostinger.zip` y descomprímelo ahí (clic derecho → *Extraer*). Debe quedar así:

```
public_html/
├── .htaccess
├── index.html
├── css/styles.css
├── js/ (app.js, art.js, curriculum.js, countries.js, content/…)
└── api/ (index.php, .htaccess, config.sample.php)
```

> Los archivos que empiezan con punto (`.htaccess`) son importantes. Si no los ves, activa "Mostrar archivos ocultos" en el administrador de archivos.

## 2. Activar HTTPS

En **hPanel → Seguridad → SSL**, instala el certificado gratuito para tu dominio. El `.htaccess` ya redirige todo a `https://`, para que las contraseñas viajen cifradas.

## 3. Configuración (recomendado)

1. En la carpeta `api/`, copia `config.sample.php` como **`config.php`**.
2. Edita `config.php`:
   - **`data_dir`**: carpeta donde se guarda `db.json`. Lo más seguro es ponerla **fuera de `public_html`**. En el administrador de archivos sube un nivel desde `public_html`, crea una carpeta `aventura-data` y copia su ruta completa (se ve arriba, algo como `/home/u123456789/domains/tudominio.com/aventura-data`).
     Si no lo cambias, se usa `public_html/data`, que queda protegida por `.htaccess`.
   - **`anthropic_api_key`** (opcional): tu clave de la API de Anthropic para crear cursos con IA y el botón "Nova, explícame". Sin clave, todo lo demás funciona igual.

## 4. Primer uso

1. Abre `https://tudominio.com`.
2. **Crea la primera cuenta: será la administradora.** Desde *Cuenta → Administrar usuarios* podrá ver todas las cuentas, dar o quitar permisos de administrador, cambiar contraseñas y eliminar cuentas.
3. Cada familia crea su cuenta y agrega un perfil por niño (hasta 8).

## 5. Copias de seguridad

Todo está en un solo archivo: `db.json` (en `data_dir`). Descárgalo de vez en cuando desde el administrador de archivos. Para restaurar, súbelo de nuevo al mismo lugar.

## 6. Comprobar que todo está bien

- `https://tudominio.com/api/health` debe responder `{"ok":true,...}`.
- `https://tudominio.com/data/db.json` debe dar **error 404 o 403** (nunca mostrar el archivo).

## Problemas comunes

| Síntoma | Solución |
|---|---|
| Sale la pantalla de configuración en vez del inicio de sesión | `api/health` no responde. Revisa que la carpeta `api/` y su `.htaccess` se subieron. |
| "Tu sesión terminó" justo después de entrar | El hosting quitó la cabecera de sesión. La app ya envía una alternativa; si persiste, escribe al soporte de Hostinger pidiendo que no filtren la cabecera `Authorization`. |
| "No se pudo abrir la base de datos" | La carpeta de `data_dir` no existe o no tiene permisos de escritura (755 o 700). |

## Alternativa: VPS de Hostinger

En un VPS también puedes usar el servidor Node incluido (`node server.js`, puerto 3000) detrás de Nginx con HTTPS. Para hosting compartido, usa la versión PHP descrita arriba.
