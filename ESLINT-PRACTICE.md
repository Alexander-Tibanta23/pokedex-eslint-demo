# 🛠️ Práctica de ESLint - Pokédex Interactiva

Esta práctica te ayudará a aprender cómo usar ESLint para detectar y corregir errores en código JavaScript.

## 📁 Estructura de la Práctica

```
pokedex-eslint-demo/
├── js/                    # Código limpio y funcional
├── js-with-errors/        # Archivos con errores intencionales
│   ├── bad-config.js      # Errores de configuración
│   ├── bad-api.js         # Errores de API
│   └── bad-ui.js          # Errores de UI
├── .eslintrc.json         # Configuración de ESLint
├── ESLINT-PRACTICE.md     # Esta guía
└── package.json           # Dependencias (se creará)
```

## 🎯 Objetivos de la Práctica

1. **Instalar y configurar ESLint**
2. **Identificar diferentes tipos de errores**
3. **Corregir errores automáticamente**
4. **Entender las reglas de ESLint**
5. **Mejorar la calidad del código**

## 🚀 Instalación y Configuración

### 1. Inicializar el proyecto
```bash
npm init -y
```

### 2. Instalar ESLint
```bash
npm install eslint --save-dev
```

### 3. Inicializar ESLint
```bash
npx eslint --init
```

### 4. Verificar la configuración
```bash
npx eslint --version
```

## 🔍 Tipos de Errores Incluidos

### 📝 **Errores de Estilo (Style Errors)**
- **Indentación incorrecta** (`indent`)
- **Comillas inconsistentes** (`quotes`)
- **Punto y coma faltante** (`semi`)
- **Espacios en blanco al final** (`no-trailing-spaces`)
- **Líneas muy largas** (`max-len`)
- **Múltiples líneas en blanco** (`no-multiple-empty-lines`)

### 🔧 **Errores de Variables (Variable Errors)**
- **Variable no declarada** (`no-undef`)
- **Variable no utilizada** (`no-unused-vars`)
- **Constante reasignada** (`no-const-assign`)
- **Variable global no declarada** (`no-undef`)

### ⚙️ **Errores de Funciones (Function Errors)**
- **Función async sin await** (`require-await`)
- **Promesa no manejada** (`no-floating-promises`)
- **Función muy larga** (`max-lines-per-function`)
- **Demasiados parámetros** (`max-params`)
- **Complejidad ciclomática alta** (`complexity`)

### 🚨 **Errores de Lógica (Logic Errors)**
- **Comparación con == en lugar de ===** (`eqeqeq`)
- **Bloque vacío** (`no-empty`)
- **Return en else innecesario** (`no-else-return`)
- **Reasignación de parámetros** (`no-param-reassign`)

### 🏭 **Errores de Producción (Production Errors)**
- **Console.log en producción** (`no-console`)
- **Comentarios TODO sin formato** (`no-warning-comments`)
- **Import/export no encontrado** (`no-undef`)

## 🛠️ Comandos de ESLint

### Verificar archivos específicos
```bash
# Verificar un archivo
npx eslint js-with-errors/bad-config.js

# Verificar múltiples archivos
npx eslint js-with-errors/*.js

# Verificar toda la carpeta
npx eslint js-with-errors/
```

### Corregir errores automáticamente
```bash
# Corregir errores que se pueden arreglar automáticamente
npx eslint js-with-errors/bad-config.js --fix

# Corregir todos los archivos
npx eslint js-with-errors/*.js --fix
```

### Generar reportes
```bash
# Reporte en formato JSON
npx eslint js-with-errors/ --format json > report.json

# Reporte en formato HTML (requiere eslint-formatter-html)
npx eslint js-with-errors/ --format html > report.html
```

## 📋 Ejercicios Prácticos

### Ejercicio 1: Análisis Inicial
```bash
# 1. Ejecuta ESLint en todos los archivos con errores
npx eslint js-with-errors/

# 2. Cuenta cuántos errores hay en total
npx eslint js-with-errors/ --format compact | wc -l
```

### Ejercicio 2: Corrección Automática
```bash
# 1. Intenta corregir errores automáticamente
npx eslint js-with-errors/ --fix

# 2. Verifica qué errores quedaron sin corregir
npx eslint js-with-errors/
```

### Ejercicio 3: Corrección Manual
```bash
# 1. Abre cada archivo y corrige manualmente los errores restantes
# 2. Verifica que no queden errores
npx eslint js-with-errors/
```

### Ejercicio 4: Comparación con Código Limpio
```bash
# 1. Verifica que el código limpio no tenga errores
npx eslint js/

# 2. Compara las reglas aplicadas
npx eslint js/ --format json > clean-report.json
npx eslint js-with-errors/ --format json > errors-report.json
```

## 📊 Interpretación de Errores

### Niveles de Severidad
- **Error (2)**: Problema que puede causar bugs
- **Warning (1)**: Problema que puede causar problemas
- **Off (0)**: Regla desactivada

### Formato de Salida
```
file.js:line:column: severity message (rule-name)
```

### Ejemplo de Salida
```
js-with-errors/bad-config.js
  1:1  error    'POKEAPI_BASE_URL' is not defined  no-undef
  4:7  error    'UNUSED_VARIABLE' is assigned a value but never used  no-unused-vars
  7:1  error    Assignment to constant variable  no-const-assign
```

## 🔧 Configuración Avanzada

### Personalizar Reglas
Edita `.eslintrc.json` para ajustar las reglas:

```json
{
  "rules": {
    "no-console": "off",        // Desactivar regla
    "max-len": ["error", 100],  // Cambiar límite
    "quotes": ["error", "double"] // Cambiar preferencia
  }
}
```

### Ignorar Archivos
Crear `.eslintignore`:
```
node_modules/
dist/
*.min.js
```

### Configuración por Archivo
```javascript
/* eslint-disable no-console */
console.log('Este console.log está permitido');
/* eslint-enable no-console */
```

## 🎯 Mejores Prácticas

### 1. **Integración en el Flujo de Trabajo**
- Ejecutar ESLint antes de commits
- Configurar en tu IDE
- Usar en CI/CD

### 2. **Configuración del Equipo**
- Usar configuración compartida
- Documentar reglas personalizadas
- Revisar configuración regularmente

### 3. **Corrección Gradual**
- Corregir errores críticos primero
- Usar `--fix` para correcciones automáticas
- Revisar cambios antes de aplicar

## 📚 Recursos Adicionales

- [ESLint Documentation](https://eslint.org/docs/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [ESLint Configurations](https://eslint.org/docs/user-guide/configuring/)
- [ESLint Best Practices](https://eslint.org/docs/developer-guide/)

## ✅ Checklist de Completitud

- [ ] ESLint instalado y configurado
- [ ] Errores identificados en archivos de práctica
- [ ] Errores corregidos automáticamente
- [ ] Errores corregidos manualmente
- [ ] Código limpio verificado
- [ ] Configuración personalizada probada
- [ ] Reportes generados y analizados

---

**¡Feliz práctica de ESLint!** 🎉✨ 