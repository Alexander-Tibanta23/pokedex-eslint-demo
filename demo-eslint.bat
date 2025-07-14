@echo off
echo ========================================
echo    PRACTICA DE ESLINT - POKEDEX
echo ========================================
echo.

echo [1/6] Verificando si Node.js esta instalado...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js no esta instalado
    echo Por favor instala Node.js desde: https://nodejs.org/
    pause
    exit /b 1
)
echo ✓ Node.js encontrado

echo.
echo [2/6] Instalando dependencias...
npm install
if %errorlevel% neq 0 (
    echo ERROR: Error al instalar dependencias
    pause
    exit /b 1
)
echo ✓ Dependencias instaladas

echo.
echo [3/6] Verificando archivos con errores...
npx eslint js-with-errors/ --format compact
echo.

echo [4/6] Intentando corregir errores automaticamente...
npx eslint js-with-errors/ --fix
echo ✓ Correccion automatica completada

echo.
echo [5/6] Verificando errores restantes...
npx eslint js-with-errors/ --format compact
echo.

echo [6/6] Verificando que el codigo limpio no tenga errores...
npx eslint js/ --format compact
echo ✓ Codigo limpio verificado

echo.
echo ========================================
echo    PRACTICA COMPLETADA
echo ========================================
echo.
echo Archivos creados:
echo - js-with-errors/bad-config.js
echo - js-with-errors/bad-api.js  
echo - js-with-errors/bad-ui.js
echo - .eslintrc.json
echo - ESLINT-PRACTICE.md
echo.
echo Comandos utiles:
echo - npm run lint:errors    (verificar errores)
echo - npm run lint:fix       (corregir automaticamente)
echo - npm run lint:report    (generar reporte)
echo.
pause 