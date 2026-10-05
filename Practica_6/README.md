# Práctica 06: Diagrama de Secuencia de Pantallas (Sketches) de Aplicación Móvil con 2 Roles

**Estudiante:** Luis Daniel Suarez Escamilla · 10A IDGS  
**Modalidad:** Individual · **Plataforma:** Spotify  
**Firmas requeridas:** 20 · **Fecha de entrega indicada:** viernes 10 de octubre de 2026

### Entregables

- [Abrir en GitHub Pages](https://danny88e.github.io/Practicas_Integradora_230040/Practica_6/spotify-mobile-journeys.html) ✅💯


### Objetivo de la práctica

Representar la experiencia de una aplicación móvil mediante una secuencia de pantallas para al menos dos roles y un mínimo de quince pantallas compartidas y específicas. El resultado es un diagrama interactivo de baja fidelidad que muestra acciones, transiciones y estados alternos.

### Estructura del diagrama

El artefacto es un solo HTML autocontenido. Presenta dos carriles horizontales, con sketches dentro de marcos de teléfono, numeración y flechas con acciones entre pantallas:

| Carril | Pantallas en orden |
| --- | --- |
| Oyente | Iniciar sesión → Inicio → Buscar → Resultados → Playlist / álbum → Reproduciendo → Tu biblioteca |
| Artista | Acceso de artista → Resumen del artista → Audiencia → Rendimiento de canción → Música y lanzamientos → Detalle de lanzamiento → Perfil del artista |

El selector de experiencia separa ambos recorridos y es una convención académica, no una afirmación de que Spotify y Spotify for Artists compartan un único inicio de sesión. Se incluyen, fuera del flujo principal, los estados **Sin conexión**, **Búsqueda sin resultados** y **Contenido no disponible**. Una relación entre carriles explica de manera conceptual cómo las reproducciones agregadas se vinculan con las estadísticas de audiencia, sin representar seguimiento de datos individuales ni actualización en tiempo real.

### Diseño e interacción

- Paleta oscura de negro carbón y grises con verde **#1DB954** como acento principal.
- Sketches originales y distintos por pantalla; sin capturas, logotipos ni diseños oficiales.
- Selección de rol con navegación al carril correspondiente, realce y foco accesible.
- Detalle de pantalla con propósito, elementos principales y acción siguiente.
- Tema claro/oscuro, controles de teclado, región de anuncios accesibles y respeto de `prefers-reduced-motion`.
- Diseño adaptable: desplazamiento horizontal por carril en pantallas estrechas.

### Evolución de los prompts

Los siguientes ejemplos resumen las instrucciones usadas para definir y mejorar el diagrama:

#### Prompt v1 · Estructura y recorridos

> Diseña un diagrama de secuencia de pantallas móviles para Spotify con dos roles: Oyente y Artista. Organiza la experiencia en dos carriles horizontales y usa bocetos originales de baja fidelidad dentro de marcos de teléfono. Incluye al menos 15 pantallas en total, compartidas y específicas de cada rol. Para Oyente muestra el recorrido Iniciar sesión → Inicio → Buscar → Resultados → Playlist o álbum → Reproduciendo → Tu biblioteca. Para Artista muestra Acceso → Resumen → Audiencia → Rendimiento de canción → Música y lanzamientos → Detalle de lanzamiento → Perfil del artista. Numera los pasos y etiqueta cada transición con una acción breve. Agrega fuera del flujo principal los estados Sin conexión, Búsqueda sin resultados y Contenido no disponible. Incluye una relación conceptual entre reproducciones agregadas y estadísticas de audiencia. No inventes funciones privadas ni presentes los bocetos como pantallas oficiales; identifica los supuestos académicos.

#### Prompt v2 · Identidad visual

> Mantén los dos recorridos y el contenido definidos. Aplica un tema oscuro de negro carbón y grises, usando el verde Spotify #1DB954 como acento principal para botones, numeración y flechas. Conserva buen contraste y legibilidad en móvil y escritorio. Crea un símbolo musical geométrico original; no copies el logotipo, la tipografía, capturas ni pantallas de Spotify. Incluye el nombre del estudiante, grupo y una nota de que es un ejercicio académico no afiliado a Spotify.

#### Prompt v3 · Interacciones y accesibilidad

> Conserva el mismo diseño, número de pantallas y orden de los recorridos. Haz que las pantallas sean seleccionables y muestren un panel con propósito, elementos del boceto y acción siguiente. Al seleccionar Oyente o Artista, desplázate al carril correspondiente, resáltalo brevemente, atenúa el otro y mueve el foco al encabezado; permite restablecer la selección sin desplazar la vista. Añade alternancia de tema claro/oscuro. En los estados alternos agrega cursor interactivo, realce al pasar el mouse y un panel informativo al hacer clic. Mantén navegación por teclado, foco visible, anuncios accesibles y respeto de prefers-reduced-motion.

### Alcance y atribución

La selección común y los sketches son propuestas para esta actividad, basadas en funciones públicas generales. El diagrama no intenta reproducir exactamente las interfaces de Spotify y no está afiliado con Spotify.

## Evidencia

Las capturas documentan el diagrama en escritorio, ambos recorridos, los estados alternos y el tema claro.

### 1. Recorrido del oyente

![Evidencia 1: encabezado y recorrido de pantallas del oyente](./Evidencia/1.png)

### 2. Recorrido del artista y estados alternos

![Evidencia 2: pantallas del artista y estados alternos](./Evidencia/2.png)

### 3. Tema claro

![Evidencia 3: diagrama en tema claro](./Evidencia/3.png)

### 4. Carril del artista en tema claro

![Evidencia 4: recorrido del artista y estados alternos en tema claro](./Evidencia/4.png)


## Autor

**Luis Daniel Suarez Escamilla** / [@Danny88e](https://github.com/Danny88e)
