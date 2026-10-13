# Aventura Escolar

App web para estudiar en familia: el currículo de cada país y grado, juegos en estilo de lecciones cortas, jefes, duelos, plan semanal, cursos creados con IA y cuentas con perfiles por niño.

## Cómo usarla

**Con cuentas (recomendado):** necesita Node 18 o superior.

```bash
node server.js
```

Abre http://localhost:3000. La primera cuenta que se registre es **administradora** y puede ver y gestionar las demás cuentas desde *Cuenta → Administrar usuarios*.

- Cada cuenta (un adulto, con email y contraseña) puede tener hasta 8 perfiles de niños.
- Todo se guarda en `data/db.json`. Las contraseñas se guardan cifradas con scrypt. La carpeta `data/` no se sube al repositorio.
- Opcional: `ANTHROPIC_API_KEY=... node server.js` activa la IA (crear cursos y "Nova, explícame") sin poner la clave en el navegador.
- Opcional: `PORT=8080 node server.js` cambia el puerto.

**Sin servidor:** abre `index.html` directamente. Funciona en modo local (un solo perfil, guardado en el navegador).

## Archivos

- `server.js`: servidor y API de cuentas (sin dependencias).
- `index.html`, `css/styles.css`: la interfaz.
- `js/app.js`: la lógica de la app.
- `js/curriculum.js`: temas, bancos de preguntas y cursos listos.
- `js/countries.js`: grados, materias y preguntas propias de cada país.
