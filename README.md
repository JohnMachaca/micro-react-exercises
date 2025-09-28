# React Mini Ejercicios

Este proyecto contiene una colección de mini ejercicios desarrollados en React para practicar conceptos fundamentales del framework. Cada ejercicio está diseñado para demostrar diferentes aspectos de React como manejo de estado, componentes, routing y más.

## 🚀 Ejercicios Incluidos

- **Contador**: Un contador simple con funciones de incrementar, decrementar y resetear
- Más ejercicios próximamente...

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de construcción rápida para desarrollo frontend
- **React Router DOM** - Enrutamiento para aplicaciones React
- **Tailwind CSS v4** - Framework de CSS para estilos
- **pnpm** - Gestor de paquetes rápido y eficiente

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- pnpm (si no lo tienes instalado: `npm install -g pnpm`)

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd react-mini-excercises
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Ejecutar en modo desarrollo

```bash
pnpm dev
```

El proyecto se ejecutará en `http://localhost:5173`

### 4. Construir para producción

```bash
pnpm build
```

### 5. Previsualizar la construcción

```bash
pnpm preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── BackToMenu.jsx  # Botón para volver al menú principal
│   └── Header.jsx      # Componente de encabezado
├── excercises/         # Ejercicios individuales
│   └── Contador.jsx    # Ejercicio del contador
├── App.jsx             # Componente principal con navegación
├── main.jsx           # Punto de entrada de la aplicación
└── App.css            # Estilos globales con Tailwind CSS
```

## 🎯 Cómo Navegar

1. Inicia la aplicación con `pnpm dev`
2. Ve al menú principal en `http://localhost:5173`
3. Haz clic en cualquier ejercicio para probarlo
4. Usa el botón "Volver al Menú Principal" para regresar

## 🤝 Contribuir

Si quieres agregar más ejercicios:

1. Crea un nuevo componente en la carpeta `excercises/`
2. Agrega la ruta en `main.jsx`
3. Añade el enlace en `App.jsx`
4. Incluye el componente `<BackToMenu />` para navegación

## 📝 Scripts Disponibles

- `pnpm dev` - Ejecuta el servidor de desarrollo
- `pnpm build` - Construye la aplicación para producción
- `pnpm preview` - Previsualiza la construcción de producción
- `pnpm lint` - Ejecuta el linter para revisar el código

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
