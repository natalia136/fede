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

  // Voz natural con ElevenLabs (opcional). Sin clave, la app usa la voz del navegador.
  // Los audios se guardan en data/tts: cada frase se paga una sola vez aunque la escuchen muchos niños.
  'voice' => [
    'enabled' => true,
    'api_key' => '',                   // ← PEGA AQUÍ TU CLAVE DE ELEVENLABS (Developers → API Keys)
    'voice_id' => '',                  // ← ID de la voz en español latino (Voices → la voz → "Copy voice ID")
    'voice_id_en' => '',               // opcional: otra voz para leer en inglés (vacío = usa la misma)
    'model' => 'eleven_flash_v2_5',    // el más económico (mitad de precio). Más natural: 'eleven_multilingual_v2'
    'stability' => 0.5,                // 0 a 1: más bajo = más expresiva, más alto = más estable
    'similarity' => 0.75,              // 0 a 1: parecido a la voz original
    'style' => 0.2,                    // 0 a 1: más alto = más actuada (un poco más lenta)
    'speed' => 0.95,                    // 0.7 a 1.2: velocidad de lectura
    'daily_chars_per_user' => 20000,   // letras nuevas por cuenta al día (0 = sin límite). Lo ya guardado no cuenta.
  ],
];
