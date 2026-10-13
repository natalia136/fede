<?php
/* CONFIGURACIÓN DEL SERVIDOR
   1. Copia este archivo en la misma carpeta (api/) con el nombre config.php
   2. Pega tu clave de la API de Anthropic en 'api_key'.
   Este archivo nunca se envía al navegador: la clave queda solo en tu servidor. */
return [
  // Carpeta donde se guardan cuentas y progreso (db.json). Lo más seguro es ponerla FUERA de public_html,
  // por ejemplo '/home/u123456789/domains/tudominio.com/chispa-data'. Si no la cambias usa ../data (protegida).
  'data_dir' => __DIR__ . '/../data',

  'ai' => [
    'enabled' => true,                 // false = apaga toda la IA
    'api_key' => '',                   // ← PEGA AQUÍ TU CLAVE (empieza con sk-ant-)
    'model' => 'claude-haiku-5-5',     // modelo de Claude: el más económico. Para más calidad: 'claude-sonnet-5-5'
    'effort' => 'low',                 // low | medium | high: más alto = más pensado y más costoso
    'max_tokens' => 16000,             // largo máximo de cada respuesta
    'daily_limit_per_user' => 40,      // usos de IA por cuenta al día (0 = sin límite)
    'tasks' => [                       // usos de la IA (las instrucciones están en ai/prompts.json)
      'course' => true,                // crear cursos completos con IA
      'practice' => true,              // "Más ejercicios" de refuerzo
      'explain' => true,               // botón "Nova, explícame"
    ],
  ],
];
