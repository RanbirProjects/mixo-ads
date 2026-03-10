
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=300&text=React%20+%20TypeScript%20+%20Vite&fontSize=55&color=0:00C6FF,100:0072FF&fontColor=ffffff&animation=fadeIn"/>
</p>

<p align="center">
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&duration=2500&pause=900&color=00C6FF&center=true&vCenter=true&width=900&lines=Modern+React+Development+Template;Fast+Vite+Environment;TypeScript+Ready;Production+Ready+Setup"/>
</p>

---

# 🚀 React + TypeScript + Vite

A modern **React development environment** powered by **Vite and TypeScript**, providing lightning-fast builds and a clean developer experience.

---

# ⚡ Features

✔ Fast **Hot Module Replacement (HMR)**  
✔ **TypeScript support** out of the box  
✔ **ESLint configuration** included  
✔ Optimized **Vite build system**  
✔ Modern **React development workflow**

---

# 🛠 Tech Stack

<p align="center">
<img src="https://skillicons.dev/icons?i=react,typescript,vite,eslint,js,html,css,git,github&perline=6"/>
</p>

---

# 🔌 Available Plugins

### React Fast Refresh (Babel)


@vitejs/plugin-react


Uses **Babel** (or **oxc** with rolldown-vite) for Fast Refresh.

GitHub  
https://github.com/vitejs/vite-plugin-react

---

### React Fast Refresh (SWC)


@vitejs/plugin-react-swc


Uses **SWC** for faster compilation.

GitHub  
https://github.com/vitejs/vite-plugin-react

---

# 🧠 React Compiler

The **React Compiler** is not enabled by default because it may affect development and build performance.

Documentation  
https://react.dev/learn/react-compiler/installation

---

# 🧹 ESLint Configuration

Enable **type-aware lint rules** for production apps.

Example:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json','./tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
🔧 React ESLint Plugins

Optional plugins:

eslint-plugin-react-x
eslint-plugin-react-dom

Example configuration:

import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
  },
])
📦 Installation
npm install
▶ Run Development Server
npm run dev

Open in browser:

http://localhost:5173
🏗 Build
npm run build
npm run preview
