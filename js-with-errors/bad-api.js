// ========================================
// API CON ERRORES - ESLint Demo
// ========================================

// ❌ ERROR: Import no utilizado (no-unused-vars)
import { UNUSED_IMPORT } from './config.js'

// ❌ ERROR: Variable no declarada (no-undef)
const BASE_URL = POKEAPI_BASE_URL

// ❌ ERROR: Función async sin await (require-await)
async function fetchPokemonData(identifier) {
    // Esta función es async pero no usa await
    const response = fetch(`${BASE_URL}/pokemon/${identifier}`)
    return response.json()
}

// ❌ ERROR: Promesa no manejada (no-floating-promises)
function badFetchFunction() {
    fetch(`${BASE_URL}/pokemon/1`)  // Promesa no manejada
}

// ❌ ERROR: Try-catch sin manejo de errores (no-empty)
async function fetchWithBadErrorHandling() {
    try {
        const response = await fetch(`${BASE_URL}/pokemon/1`)
        return response.json()
    } catch (error) {
        // Bloque catch vacío
    }
}

// ❌ ERROR: Variable declarada pero no utilizada (no-unused-vars)
async function fetchPokemonWithUnusedVar(identifier) {
    const response = await fetch(`${BASE_URL}/pokemon/${identifier}`)
    const data = await response.json()
    const unusedVar = 'no se usa'
    return data
}

// ❌ ERROR: Comparación con == (eqeqeq)
function checkResponseStatus(response) {
    if (response.status == 404) {
        throw new Error('Pokémon no encontrado')
    }
}

// ❌ ERROR: Console.log en producción (no-console)
async function debugFetch(identifier) {
    console.log(`Fetching pokemon: ${identifier}`)
    const response = await fetch(`${BASE_URL}/pokemon/${identifier}`)
    console.log('Response:', response)
    return response.json()
}

// ❌ ERROR: Función con demasiados parámetros (max-params)
function complexFunction(param1, param2, param3, param4, param5, param6) {
    return param1 + param2 + param3 + param4 + param5 + param6
}

// ❌ ERROR: Función muy larga (max-lines-per-function)
function veryLongFunction() {
    const step1 = 'step 1'
    const step2 = 'step 2'
    const step3 = 'step 3'
    const step4 = 'step 4'
    const step5 = 'step 5'
    const step6 = 'step 6'
    const step7 = 'step 7'
    const step8 = 'step 8'
    const step9 = 'step 9'
    const step10 = 'step 10'
    const step11 = 'step 11'
    const step12 = 'step 12'
    const step13 = 'step 13'
    const step14 = 'step 14'
    const step15 = 'step 15'
    const step16 = 'step 16'
    const step17 = 'step 17'
    const step18 = 'step 18'
    const step19 = 'step 19'
    const step20 = 'step 20'
    const step21 = 'step 21'
    const step22 = 'step 22'
    const step23 = 'step 23'
    const step24 = 'step 24'
    const step25 = 'step 25'
    const step26 = 'step 26'
    const step27 = 'step 27'
    const step28 = 'step 28'
    const step29 = 'step 29'
    const step30 = 'step 30'
    return step1 + step2 + step3 + step4 + step5 + step6 + step7 + step8 + step9 + step10 + step11 + step12 + step13 + step14 + step15 + step16 + step17 + step18 + step19 + step20 + step21 + step22 + step23 + step24 + step25 + step26 + step27 + step28 + step29 + step30
}

// ❌ ERROR: Variable global no declarada (no-undef)
function globalVariableError() {
    globalVar = 'valor'  // Variable global no declarada
}

// ❌ ERROR: Reasignación de parámetro (no-param-reassign)
function modifyParameter(param) {
    param = 'modificado'  // Reasignación de parámetro
    return param
}

// ❌ ERROR: Return en else innecesario (no-else-return)
function unnecessaryElseReturn(value) {
    if (value > 0) {
        return 'positivo'
    } else {
        return 'negativo'  // Return en else innecesario
    }
}

// ❌ ERROR: Múltiples declaraciones en una línea (one-var)
let var1 = 1, var2 = 2, var3 = 3

// ❌ ERROR: Comentario TODO sin formato (no-warning-comments)
// TODO: implementar manejo de errores

// ❌ ERROR: Espacios en blanco al final (no-trailing-spaces)
const trailingSpacesVar = 'valor'    

// ❌ ERROR: Línea muy larga (max-len)
const veryLongLine = 'Esta es una línea extremadamente larga que excede el límite de caracteres recomendado por ESLint y debería ser dividida en múltiples líneas para mejorar la legibilidad del código y evitar problemas de formato'

// ❌ ERROR: Comillas inconsistentes (quotes)
const mixedQuotes = {
    "key1": 'value1',
    'key2': "value2"
}

// ❌ ERROR: Punto y coma faltante (semi)
const noSemicolon = 'valor'

// ❌ ERROR: Indentación incorrecta (indent)
function badIndentation() {
const badVar = 'mal indentado'
  const anotherBadVar = 'también mal indentado'
    const thirdBadVar = 'muy mal indentado'
}

// ❌ ERROR: Bloque vacío (no-empty)
function emptyFunction() {
}

// ❌ ERROR: Función con parámetros no utilizados (no-unused-vars)
function unusedParams(used, unused) {
    return used
}

// ❌ ERROR: Export no encontrado (no-undef)
export { nonExistentFunction } 