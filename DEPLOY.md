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
├── ai/prompts.json
└── api/ (index.php, .htaccess, config.example.php)
```

> Los archivos que empiezan con punto (`.htaccess`) son importantes. Si no los ves, activa "Mostrar archivos ocultos" en el administrador de archivos.

## 2. Activar HTTPS

En **hPanel → Seguridad → SSL**, instala el certificado gratuito para tu dominio. El `.htaccess` ya redirige todo a `https://`, para que las contraseñas viajen cifradas.

## 3. Poner las claves de IA y voz

**La forma más fácil es desde la app.** Entra con la cuenta administradora (la primera que se registró) → **Cuenta → Claves de IA y voz**:

1. Pega la clave de Anthropic, pulsa **Guardar** y luego **Probar la IA**.
2. Pega la clave de ElevenLabs y pulsa **Guardar**.
3. En **Elige la voz**, busca *latina*, *mexicana* o *colombiana*, escucha las muestras y pulsa **Usar en español**. Puedes elegir otra para el inglés.

Las claves quedan en `data/settings.json` (carpeta protegida) y nunca se muestran completas ni llegan a los navegadores. Tienen prioridad sobre `api/config.php`.

### Alternativa: el archivo de configuración

La clave de la API de Anthropic va **solo** en un archivo del servidor. Nunca llega al navegador de quienes usan la app.

1. En el Administrador de archivos entra a `public_html/api/`.
2. Clic derecho sobre **`config.example.php`** → *Copiar* → nómbralo **`config.php`** (en la misma carpeta).
3. Clic derecho sobre `config.php` → *Editar*. Busca esta línea y pega tu clave entre las comillas:

```php
'api_key' => 'sk-ant-...tu clave...',
```

4. Guarda. Listo: abre `https://tudominio.com/api/health` y debe decir `"ai":true`.

En ese mismo archivo puedes ajustar:

| Opción | Para qué sirve |
|---|---|
| `enabled` | `false` apaga toda la IA sin borrar la clave. |
| `model` / `effort` | Qué modelo de Claude se usa y cuánto "piensa". Viene con el más económico (`claude-haiku-5-5`, esfuerzo `low`). Si los cursos con IA salen con errores, sube `effort` a `medium` o usa `claude-sonnet-5-5`. |
| `daily_limit_per_user` | Cuántas veces al día puede usar la IA cada cuenta (protege tu saldo). `0` = sin límite. |
| `tasks` | Activa o desactiva cada uso: `course` (crear cursos), `practice` (más ejercicios), `explain` ("Nova, explícame"). |
| `data_dir` | Dónde se guardan las cuentas. Lo más seguro es una carpeta fuera de `public_html`, por ejemplo `/home/u123456789/domains/tudominio.com/app-data`. |

Las instrucciones que recibe la IA para cada uso están en `ai/prompts.json`. Para agregar un uso nuevo se crea una tarea ahí y se activa en `tasks`.

> Si alguna vez la clave se expone, revócala en la consola de Anthropic y pon una nueva en `config.php`.

## 3b. Voz natural con ElevenLabs (opcional)

Sin esto la app lee con la voz del navegador (elige la latinoamericana más natural que tenga el equipo). Con ElevenLabs suena como una persona.

1. Crea una cuenta en elevenlabs.io. En **Developers → API Keys** crea una clave (empieza con `sk_`).
2. En **Voices → Voice Library** busca voces con filtro de idioma **Spanish** y acento **Latin American** (o Mexican / Colombian). Escucha varias y agrega la que te guste a "My Voices".
3. Abre la voz en **My Voices** y usa **Copy voice ID** (un código de unas 20 letras y números).
4. En `api/config.php`, en el bloque `'voice'`, pega la clave en `'api_key'` y el ID en `'voice_id'`. Si quieres otra voz para el inglés, pon su ID en `'voice_id_en'`.

| Opción | Para qué sirve |
|---|---|
| `model` | `eleven_flash_v2_5` es el más económico (mitad de precio). `eleven_multilingual_v2` suena un poco más natural y cuesta el doble. |
| `stability` / `style` / `speed` | Ajustan la expresividad y la velocidad. |
| `daily_chars_per_user` | Letras nuevas que cada cuenta puede generar al día (0 = sin límite). |

Cada frase se genera **una sola vez** y se guarda en `data/tts/`: si otro niño escucha la misma lección, no se vuelve a pagar. Si se acaba el saldo o el límite del día, la app sigue con la voz del navegador sin romperse.

## 4. Primer uso

1. Abre `https://tudominio.com`.
2. **Crea la primera cuenta: será la administradora.** Desde *Cuenta → Administrar usuarios* podrá ver todas las cuentas, dar o quitar permisos de administrador, cambiar contraseñas y eliminar cuentas.
3. Cada familia crea su cuenta y agrega un perfil por niño (hasta 8).

## 5. Invitar a tus amigos

Tienes dos formas:

- **Que se registren solos:** compárteles el enlace `https://tudominio.com`; cada uno toca *Crear cuenta*.
- **Crearles la cuenta tú:** entra como administradora → *Cuenta → Administrar usuarios → Crear cuenta para un amigo*. Escribe su nombre y email; si dejas la contraseña vacía se genera una automáticamente. Aparece un mensaje listo para copiar y enviar por WhatsApp o correo con el enlace, el email y la contraseña.

> Las contraseñas se guardan cifradas: nadie puede volver a verlas, ni siquiera la administradora. Si alguien la olvida, usa *Cambiar clave* en el panel para darle una nueva.

## 6. Actualizar la app sin perder datos

Para subir una versión nueva, reemplaza `index.html`, `css/`, `js/`, `ai/` y `api/index.php`. **No borres** `data/` (o tu `data_dir`) ni `api/config.php`: ahí están las cuentas, el progreso y tu configuración. El paquete `.zip` no incluye esas carpetas, así que no las sobrescribe.

## 7. Copias de seguridad

Todo está en un solo archivo: `db.json` (en `data_dir`). Descárgalo de vez en cuando desde el administrador de archivos. Para restaurar, súbelo de nuevo al mismo lugar.

## 8. Comprobar que todo está bien

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
