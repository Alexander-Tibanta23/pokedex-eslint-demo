// ========================================
// API CON ERRORES - ESLint Demo
// ========================================

import { UNUSED_IMPORT } from './config.js'
const BASE_URL = POKEAPI_BASE_URL

async function fetchPokemonData(identifier) {
    const response = fetch(`${BASE_URL}/pokemon/${identifier}`)
    return response.json()
}

function badFetchFunction() {
    fetch(`${BASE_URL}/pokemon/1`)
}

async function fetchWithBadErrorHandling() {
    try {
        const response = await fetch(`${BASE_URL}/pokemon/1`)
        return response.json()
    } catch (error) {

    }
}

async function fetchPokemonWithUnusedVar(identifier) {
    const response = await fetch(`${BASE_URL}/pokemon/${identifier}`)
    const data = await response.json()
    const unusedVar = 'no se usa'
    return data
}

function checkResponseStatus(response) {
    if (response.status == 404) {
        throw new Error('Pokémon no encontrado')
    }
}

async function debugFetch(identifier) {
    console.log(`Fetching pokemon: ${identifier}`)
    const response = await fetch(`${BASE_URL}/pokemon/${identifier}`)
    console.log('Response:', response)
    return response.json()
}

function complexFunction(param1, param2, param3, param4, param5, param6) {
    return param1 + param2 + param3 + param4 + param5 + param6
}

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

function globalVariableError() {
    globalVar = 'valor'
}

function modifyParameter(param) {
    param = 'modificado'
    return param
}

function unnecessaryElseReturn(value) {
    if (value > 0) {
        return 'positivo'
    } else {
        return 'negativo'
    }
}

let var1 = 1, var2 = 2, var3 = 3

// TODO: implementar manejo de errores

const trailingSpacesVar = 'valor'    

const veryLongLine = 'Esta es una línea extremadamente larga que excede el límite de caracteres recomendado por ESLint y debería ser dividida en múltiples líneas para mejorar la legibilidad del código y evitar problemas de formato'

const mixedQuotes = {
    "key1": 'value1',
    'key2': "value2"
}

const noSemicolon = 'valor'

function badIndentation() {
const badVar = 'mal indentado'
  const anotherBadVar = 'también mal indentado'
    const thirdBadVar = 'muy mal indentado'
}

function emptyFunction() {
}

function unusedParams(used, unused) {
    return used
}

export { nonExistentFunction } 