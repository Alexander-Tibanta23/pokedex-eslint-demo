// ========================================
// CONFIGURACIÓN CON ERRORES - ESLint Demo
// ========================================

// ❌ ERROR: Variable no declarada (no-undef)
POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2'

// ❌ ERROR: Variable no utilizada (no-unused-vars)
const UNUSED_VARIABLE = 'esto no se usa'

// ❌ ERROR: Constante reasignada (no-const-assign)
const TOTAL_POKEMON = 151
TOTAL_POKEMON = 200

// ❌ ERROR: Coma final faltante (comma-dangle)
const POKEMON_TYPES = {
    normal: { name: 'Normal', color: '#a8a878' },
    fire: { name: 'Fuego', color: '#f08030' },
    water: { name: 'Agua', color: '#6890f0' }  // Falta coma
}

// ❌ ERROR: Espaciado inconsistente (indent)
const STAT_COLORS = {
hp: '#ff6b6b',  // Indentación incorrecta
  attack: '#ff8e8e',  // Indentación inconsistente
    defense: '#4ecdc4'  // Indentación excesiva
}

// ❌ ERROR: Punto y coma faltante (semi)
const STORAGE_KEYS = {
    FAVORITES: 'pokemonFavorites'
}  // Falta punto y coma

// ❌ ERROR: Comillas inconsistentes (quotes)
const API_ENDPOINTS = {
    "pokemon": '/pokemon',
    'species': '/pokemon-species',  // Mezcla de comillas
    "evolution": "/evolution-chain"  // Comillas dobles innecesarias
}

// ❌ ERROR: Función no utilizada (no-unused-vars)
function unusedFunction() {
    console.log('Esta función no se usa')
}

// ❌ ERROR: Variable global no declarada (no-undef)
function badFunction() {
    globalVariable = 'valor'  // Variable global no declarada
    return globalVariable
}

// ❌ ERROR: Comparación con == en lugar de === (eqeqeq)
if (TOTAL_POKEMON == 151) {
    console.log('Primera generación')
}

// ❌ ERROR: Console.log en producción (no-console)
console.log('Debug info')

// ❌ ERROR: Comentario TODO sin formato (no-warning-comments)
// TODO: arreglar esto después

// ❌ ERROR: Espacios en blanco al final (no-trailing-spaces)
const trailingSpaces = 'valor'    

// ❌ ERROR: Línea muy larga (max-len)
const veryLongString = 'Esta es una línea extremadamente larga que excede el límite de caracteres recomendado por ESLint y debería ser dividida en múltiples líneas para mejorar la legibilidad del código'

// ❌ ERROR: Múltiples líneas en blanco (no-multiple-empty-lines)


// ❌ ERROR: Espaciado alrededor de operadores (space-infix-ops)
const result=1+2*3

// ❌ ERROR: Paréntesis innecesarios (no-extra-parens)
const unnecessaryParens = (1 + 2)

// ❌ ERROR: Bloque vacío (no-empty)
if (TOTAL_POKEMON > 100) {
}

// ❌ ERROR: Función con parámetros no utilizados (no-unused-vars)
function functionWithUnusedParams(usedParam, unusedParam) {
    return usedParam
}

// ❌ ERROR: Variable declarada pero no utilizada (no-unused-vars)
let declaredButNotUsed = 'valor'

// ❌ ERROR: Import no utilizado (no-unused-vars)
import { unusedImport } from './other-file.js'

// ❌ ERROR: Export no encontrado (no-undef)
export { nonExistentFunction } 