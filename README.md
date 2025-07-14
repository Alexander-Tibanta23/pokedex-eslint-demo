# Pokédex Interactiva - Versión Modular

Una Pokédex interactiva construida con JavaScript modular, que permite buscar, visualizar y comparar Pokémon de la primera generación.

## 🚀 Características

- **Búsqueda de Pokémon**: Por nombre o número (1-151)
- **Búsqueda aleatoria**: Descubre Pokémon al azar
- **Sistema de favoritos**: Guarda tus Pokémon favoritos en localStorage
- **Comparador**: Compara dos Pokémon lado a lado
- **Información detallada**: Estadísticas, habilidades, tipos y evolución
- **Interfaz moderna**: Diseño responsive con animaciones
- **Arquitectura modular**: Código organizado en módulos ES6

## 📁 Estructura del Proyecto

```
pokedex-eslint-demo/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   ├── main.js         # Punto de entrada de la aplicación
│   ├── config.js       # Configuración y constantes
│   ├── state.js        # Estado global de la aplicación
│   ├── dom.js          # Referencias y manipulación del DOM
│   ├── api.js          # Funciones de comunicación con la API
│   ├── ui.js           # Funciones de interfaz de usuario
│   ├── favorites.js    # Lógica de favoritos
│   ├── comparison.js   # Lógica de comparación
│   └── search.js       # Funciones de búsqueda
├── assets/             # Carpeta para futuros assets
└── README.md           # Documentación
```

## 🏗️ Arquitectura Modular

### Módulos Principales

1. **`config.js`**: Configuración centralizada
   - URLs de la API
   - Tipos de Pokémon y colores
   - Constantes de la aplicación

2. **`state.js`**: Gestión del estado global
   - Pokémon actual
   - Lista de favoritos
   - Estado del comparador

3. **`dom.js`**: Manipulación del DOM
   - Referencias a elementos
   - Funciones de utilidad para el DOM
   - Validación de elementos

4. **`api.js`**: Comunicación con la API
   - Fetch de datos de Pokémon
   - Manejo de errores de red
   - Obtención de datos completos

5. **`ui.js`**: Interfaz de usuario
   - Visualización de Pokémon
   - Manejo de modales
   - Funciones de loading y errores

6. **`favorites.js`**: Sistema de favoritos
   - Agregar/remover favoritos
   - Persistencia en localStorage
   - Modal de favoritos

7. **`comparison.js`**: Comparador de Pokémon
   - Agregar Pokémon al comparador
   - Visualización de comparación
   - Limpieza del comparador

8. **`search.js`**: Funciones de búsqueda
   - Búsqueda por nombre/número
   - Búsqueda aleatoria
   - Validación de entrada

9. **`main.js`**: Punto de entrada
   - Inicialización de la aplicación
   - Configuración de event listeners
   - Orquestación de módulos

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Módulos, async/await, arrow functions
- **PokeAPI**: API REST para datos de Pokémon
- **Font Awesome**: Iconos
- **Google Fonts**: Tipografía Orbitron

## 🎯 Funcionalidades

### Búsqueda
- Busca Pokémon por nombre (ej: "pikachu", "charizard")
- Busca por número (ej: 25, 006)
- Búsqueda aleatoria con un clic
- Validación de entrada y manejo de errores

### Visualización
- Información completa del Pokémon
- Estadísticas con barras de progreso
- Tipos con colores distintivos
- Cadena evolutiva
- Imágenes oficiales de alta calidad

### Favoritos
- Agregar/remover Pokémon de favoritos
- Persistencia en localStorage
- Modal con lista de favoritos
- Contador de favoritos

### Comparación
- Comparar dos Pokémon lado a lado
- Información básica de comparación
- Limpieza automática del comparador

## 🚀 Cómo Usar

1. **Clona o descarga el proyecto**
2. **Abre `index.html` en tu navegador**
3. **¡Disfruta explorando Pokémon!**

### Ejemplos de Búsqueda
- Escribe "pikachu" y presiona Enter
- Busca el número "25"
- Usa el botón "Aleatorio" para descubrir Pokémon

## 🔧 Desarrollo

### Estructura de Módulos

Cada módulo tiene responsabilidades específicas y se comunica con otros módulos a través de imports/exports ES6. Todos los módulos están organizados en la carpeta `js/`:

```javascript
// Ejemplo de importación (desde cualquier archivo en js/)
import { fetchPokemonData } from './api.js';
import { displayPokemon } from './ui.js';
```

### Agregar Nuevas Funcionalidades

1. **Identifica el módulo apropiado** para tu funcionalidad
2. **Crea las funciones necesarias** en el módulo correspondiente
3. **Exporta las funciones** que necesiten ser usadas en otros módulos
4. **Importa y usa** las funciones en `main.js` o el módulo correspondiente

### Mejores Prácticas

- **Separación de responsabilidades**: Cada módulo tiene una función específica
- **Inmutabilidad**: El estado se actualiza a través de funciones específicas
- **Manejo de errores**: Cada módulo maneja sus propios errores
- **Documentación**: Funciones documentadas con JSDoc

## 📱 Responsive Design

La aplicación es completamente responsive y funciona en:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1200px+)

## 🎨 Personalización

### Colores y Tipos
Los colores de los tipos de Pokémon se pueden modificar en `js/config.js`:

```javascript
export const POKEMON_TYPES = {
    fire: { name: 'Fuego', color: '#f08030' },
    // ... más tipos
};
```

### Estilos
Los estilos se pueden personalizar en `css/styles.css` manteniendo la estructura modular.

## 🔮 Futuras Mejoras

- [ ] Soporte para más generaciones de Pokémon
- [ ] Filtros por tipo y estadísticas
- [ ] Modo oscuro/claro
- [ ] Animaciones más avanzadas
- [ ] PWA (Progressive Web App)
- [ ] Tests unitarios

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

¡Disfruta explorando el mundo Pokémon! 🎮✨