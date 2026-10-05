## Práctica 6 · Secuencia de pantallas móviles de Spotify

**Luis Daniel Suarez Escamilla · 10A IDGS**  
Modalidad: individual · Plataforma: Spotify

### Entrega única

- [Abrir el diagrama interactivo de sketches](./spotify-mobile-journeys.html)
- Modelo de referencia: [Práctica 3 · Canvas de Spotify](../Practica_3/README.md)

El diagrama sigue la composición de la referencia: encabezado compacto, selector de rol, un carril de pantallas para **Oyente**, un segundo carril para **Artista**, numeración y flechas de acción entre bocetos, una relación conceptual entre carriles y estados alternos fuera del flujo. Cada teléfono contiene un sketch distinto; al seleccionarlo se abre su propósito, elementos principales y acción siguiente.

La paleta es oscura —negro carbón y grises— con el verde Spotify **#1DB954** como acento predominante para acciones, pasos y señalización. Incluye alternancia de tema, navegación al carril del rol seleccionado, foco accesible y respeto de `prefers-reduced-motion`. El logotipo circular de ecualizador es original; no se utilizan capturas, logotipos ni pantallas oficiales.

### Pantallas del flujo principal

Hay **15 pantallas**: un selector de experiencia propuesto, siete pantallas para Oyente y siete para Artista.

| Carril | Secuencia |
| --- | --- |
| Compartida (supuesto académico) | Selector de experiencia → Oyente / Artista |
| Oyente | Iniciar sesión → Inicio → Buscar → Resultados → Playlist/álbum → Reproduciendo → Tu biblioteca |
| Artista | Acceso → Resumen del artista → Audiencia → Rendimiento de canción → Música y lanzamientos → Detalle de lanzamiento → Perfil del artista |

Fuera del recorrido principal aparecen tres estados: **sin conexión**, **búsqueda sin resultados** y **contenido no disponible**. La conexión entre reproducciones y métricas es solo conceptual y agregada; no representa datos personales ni una actualización en tiempo real. La entrada compartida se marca como supuesto porque Spotify y Spotify for Artists son contextos distintos.

### Evolución de los prompts

1. **Estructura:** solicita dos carriles horizontales, sketches de teléfonos, quince pantallas, pasos numerados, acciones entre pantallas y estados alternos.
2. **Identidad:** fija fondo carbón, superficies grises y el verde **#1DB954** como acento fuerte; solicita símbolo original, texto legible y aviso académico.
3. **Interacción:** pide detalle por pantalla, selección de rol con desplazamiento al carril, tema claro/oscuro, reinicio de selección, navegación por teclado y soporte para movimiento reducido.

### Alcance

Es un único HTML autocontenido con bocetos conceptuales hechos para la práctica. Se basa en funciones públicas generales; no pretende reproducir exactamente la aplicación ni afirma afiliación con Spotify.

