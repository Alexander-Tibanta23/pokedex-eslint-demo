// ========================================
// UI CON ERRORES - ESLint Demo
// ========================================

// ❌ ERROR: Variable no declarada (no-undef)
const elements = {
    searchInput: document.getElementById('searchInput'),
    pokemonCard: document.getElementById('pokemonCard')
}

// ❌ ERROR: Función con demasiada complejidad ciclomática (complexity)
function veryComplexFunction(value) {
    if (value > 0) {
        if (value < 10) {
            if (value % 2 === 0) {
                if (value % 3 === 0) {
                    if (value % 5 === 0) {
                        if (value % 7 === 0) {
                            if (value % 11 === 0) {
                                if (value % 13 === 0) {
                                    if (value % 17 === 0) {
                                        if (value % 19 === 0) {
                                            return 'muy complejo'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return 'simple'
}

// ❌ ERROR: Función con demasiados returns (max-statements)
function tooManyStatements() {
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

// ❌ ERROR: Variable declarada pero no utilizada (no-unused-vars)
function displayPokemon(pokemon) {
    const unusedVar = 'no se usa'
    elements.pokemonCard.innerHTML = `<h2>${pokemon.name}</h2>`
}

// ❌ ERROR: Console.log en producción (no-console)
function debugDisplay(pokemon) {
    console.log('Displaying pokemon:', pokemon)
    displayPokemon(pokemon)
}

// ❌ ERROR: Comparación con == (eqeqeq)
function checkPokemonType(pokemon) {
    if (pokemon.type == 'fire') {
        return 'Fuego'
    }
}

// ❌ ERROR: Variable global no declarada (no-undef)
function globalError() {
    globalVar = 'valor'  // Variable global no declarada
}

// ❌ ERROR: Función con parámetros no utilizados (no-unused-vars)
function unusedParams(used, unused) {
    return used
}

// ❌ ERROR: Bloque try-catch sin manejo de errores (no-empty)
function badErrorHandling() {
    try {
        displayPokemon(null)
    } catch (error) {
        // Bloque catch vacío
    }
}

// ❌ ERROR: Promesa no manejada (no-floating-promises)
function unhandledPromise() {
    fetch('/api/pokemon/1')  // Promesa no manejada
}

// ❌ ERROR: Función async sin await (require-await)
async function asyncWithoutAwait() {
    // Esta función es async pero no usa await
    return 'resultado'
}

// ❌ ERROR: Reasignación de parámetro (no-param-reassign)
function modifyParam(param) {
    param = 'modificado'  // Reasignación de parámetro
    return param
}

// ❌ ERROR: Return en else innecesario (no-else-return)
function unnecessaryElse(value) {
    if (value > 0) {
        return 'positivo'
    } else {
        return 'negativo'  // Return en else innecesario
    }
}

// ❌ ERROR: Múltiples declaraciones en una línea (one-var)
let var1 = 1, var2 = 2, var3 = 3

// ❌ ERROR: Comentario TODO sin formato (no-warning-comments)
// TODO: mejorar la UI

// ❌ ERROR: Espacios en blanco al final (no-trailing-spaces)
const trailingSpacesVar = 'valor'    

// ❌ ERROR: Línea muy larga (max-len)
const veryLongLine = 'Esta es una línea extremadamente larga que excede el límite de caracteres recomendado por ESLint y debería ser dividida en múltiples líneas para mejorar la legibilidad del código'

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

// ❌ ERROR: Espaciado alrededor de operadores (space-infix-ops)
const result=1+2*3

// ❌ ERROR: Paréntesis innecesarios (no-extra-parens)
const unnecessaryParens = (1 + 2)

// ❌ ERROR: Múltiples líneas en blanco (no-multiple-empty-lines)


// ❌ ERROR: Coma final faltante (comma-dangle)
const objectWithoutTrailingComma = {
    key1: 'value1',
    key2: 'value2'  // Falta coma
}

// ❌ ERROR: Export no encontrado (no-undef)
export { nonExistentFunction } 