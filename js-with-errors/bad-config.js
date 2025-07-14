// ========================================
// CONFIGURACIÓN CON ERRORES - ESLint Demo
// ========================================

POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2'

const UNUSED_VARIABLE = 'esto no se usa'

const TOTAL_POKEMON = 151
TOTAL_POKEMON = 200

const POKEMON_TYPES = {
    normal: { name: 'Normal', color: '#a8a878' },
    fire: { name: 'Fuego', color: '#f08030' },
    water: { name: 'Agua', color: '#6890f0' }
}
const STAT_COLORS = {
hp: '#ff6b6b',
  attack: '#ff8e8e',
    defense: '#4ecdc4'
}

const STORAGE_KEYS = {
    FAVORITES: 'pokemonFavorites'
}  

const API_ENDPOINTS = {
    "pokemon": '/pokemon',
    'species': '/pokemon-species', 
    "evolution": "/evolution-chain"
}

function unusedFunction() {
    console.log('Esta función no se usa')
}

function badFunction() {
    globalVariable = 'valor'
    return globalVariable
}

if (TOTAL_POKEMON == 151) {
    console.log('Primera generación')
}

console.log('Debug info')

// TODO: arreglar esto después

const trailingSpaces = 'valor'    

const veryLongString = 'Esta es una línea extremadamente larga que excede el límite de caracteres recomendado por ESLint y debería ser dividida en múltiples líneas para mejorar la legibilidad del código'






const result=1+2*3

const unnecessaryParens = (1 + 2)

if (TOTAL_POKEMON > 100) {
}

function functionWithUnusedParams(usedParam, unusedParam) {
    return usedParam
}

let declaredButNotUsed = 'valor'
// ❌ ERROR: Import no utilizado (no-unused-vars)
import { unusedImport } from './other-file.js'

export { nonExistentFunction } 