<?php
/* Copia este archivo como config.php (en la misma carpeta api/) y ajusta los valores.
   config.php no se sube al repositorio. */
return [
  // Carpeta donde se guarda db.json. Lo más seguro es ponerla FUERA de public_html,
  // por ejemplo: '/home/u123456789/aventura-data'. Si no se define, usa ../data (protegida con .htaccess).
  'data_dir' => __DIR__ . '/../data',
  // Clave de la API de Anthropic para crear cursos con IA y "Nova, explícame". Déjala vacía para desactivar la IA.
  'anthropic_api_key' => '',
];
