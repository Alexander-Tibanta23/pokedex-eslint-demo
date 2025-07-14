# Guía de Desarrollo - Pokédex Interactiva

Esta guía explica cómo trabajar con la estructura modular del proyecto.

## 📁 Estructura de Carpetas

```
pokedex-eslint-demo/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   ├── main.js         # Punto de entrada
│   ├── config.js       # Configuración
│   ├── state.js        # Estado global
│   ├── dom.js          # Manipulación del DOM
│   ├── api.js          # Comunicación con API
│   ├── ui.js           # Interfaz de usuario
│   ├── favorites.js    # Lógica de favoritos
│   ├── comparison.js   # Lógica de comparación
│   └── search.js       # Funciones de búsqueda
├── assets/             # Assets estáticos
└── README.md           # Documentación principal
```

## 🏗️ Arquitectura de Módulos

### Principios de Diseño

1. **Separación de Responsabilidades**: Cada módulo tiene una función específica
2. **Inmutabilidad**: El estado se actualiza solo a través de funciones específicas
3. **Composición**: Los módulos se combinan para crear funcionalidad compleja
4. **Reutilización**: Las funciones se pueden usar en múltiples contextos

### Flujo de Datos

```
User Action → main.js → módulo específico → state.js → ui.js → DOM
```

## 🔧 Trabajando con Módulos

### Agregar una Nueva Funcionalidad

1. **Identifica el módulo apropiado**:
   - `api.js` - Para nuevas llamadas a la API
   - `ui.js` - Para nuevas interfaces
   - `state.js` - Para nuevo estado global
   - Crear nuevo módulo si es necesario

2. **Crea las funciones necesarias**:
   ```javascript
   // En el módulo apropiado
   export function nuevaFuncionalidad() {
       // Implementación
   }
   ```

3. **Importa en main.js**:
   ```javascript
   import { nuevaFuncionalidad } from './modulo.js';
   
   // En setupEventListeners()
   elemento.addEventListener('click', nuevaFuncionalidad);
   ```

### Ejemplo: Agregar un Filtro por Tipo

1. **Crear función en search.js**:
   ```javascript
   export function filterByType(type) {
       // Lógica de filtrado
   }
   ```

2. **Agregar al estado en state.js**:
   ```javascript
   export let currentFilter = null;
   
   export function setCurrentFilter(filter) {
       currentFilter = filter;
   }
   ```

3. **Crear UI en ui.js**:
   ```javascript
   export function showTypeFilter() {
       // Mostrar selector de tipos
   }
   ```

4. **Conectar en main.js**:
   ```javascript
   import { filterByType } from './search.js';
   import { showTypeFilter } from './ui.js';
   
   // Agregar event listener
   ```

## 📝 Convenciones de Código

### Nomenclatura

- **Archivos**: `camelCase.js` (ej: `pokemonCard.js`)
- **Funciones**: `camelCase` (ej: `fetchPokemonData`)
- **Constantes**: `UPPER_SNAKE_CASE` (ej: `POKEAPI_BASE_URL`)
- **Variables**: `camelCase` (ej: `currentPokemon`)

### Estructura de Módulos

```javascript
// ========================================
// NOMBRE DEL MÓDULO
// ========================================

import { ... } from './otro-modulo.js';

// Constantes del módulo
const MODULE_CONSTANT = 'value';

// Funciones principales
export function mainFunction() {
    // Implementación
}

// Funciones auxiliares (no exportadas)
function helperFunction() {
    // Implementación
}
```

### Documentación

Cada función exportada debe tener documentación JSDoc:

```javascript
/**
 * Descripción de la función
 * @param {string} param1 - Descripción del parámetro
 * @param {number} param2 - Descripción del parámetro
 * @returns {Object} Descripción del valor de retorno
 */
export function exampleFunction(param1, param2) {
    // Implementación
}
```

## 🧪 Testing

### Estructura de Tests (Futuro)

```
tests/
├── unit/
│   ├── api.test.js
│   ├── state.test.js
│   └── ui.test.js
├── integration/
│   └── search.test.js
└── e2e/
    └── app.test.js
```

### Ejemplo de Test Unitario

```javascript
// tests/unit/api.test.js
import { fetchPokemonData } from '../../js/api.js';

describe('API Module', () => {
    test('should fetch pokemon data', async () => {
        const data = await fetchPokemonData('pikachu');
        expect(data.name).toBe('pikachu');
    });
});
```

## 🚀 Deployment

### Servidor Local

```bash
# Python 3
python -m http.server 8000

# Node.js (si se instala)
npx serve .

# PHP
php -S localhost:8000
```

### Producción

1. **Minificar CSS y JS** (futuro)
2. **Optimizar imágenes** (futuro)
3. **Configurar CORS** si es necesario
4. **Configurar caché** para assets estáticos

## 🔍 Debugging

### Console Logs

```javascript
// Para debugging temporal
console.log('Debug:', variable);

// Para debugging de módulos
console.log('[ModuleName]', 'message:', data);
```

### DevTools

- **Network Tab**: Verificar llamadas a la API
- **Console**: Errores y logs
- **Elements**: Inspeccionar DOM
- **Application**: Verificar localStorage

## 📚 Recursos Útiles

- [MDN - JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [PokéAPI Documentation](https://pokeapi.co/docs/v2)
- [ES6 Import/Export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [CSS Grid & Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)

## 🤝 Contribuciones

1. **Fork** el repositorio
2. **Crea** una rama para tu feature
3. **Sigue** las convenciones de código
4. **Testea** tu funcionalidad
5. **Documenta** los cambios
6. **Envía** un pull request

---

¡Feliz desarrollo! 🎮✨ 