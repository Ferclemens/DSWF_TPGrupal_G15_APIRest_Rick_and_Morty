# Tecnicatura Superior en Desarrollo de Software - IFTS Nº 29

## Desarrollo de Sistemas Web Front End

- 2025 | 2º Cuatrimestre | Comisión B
- Profesor: Javier Rodriguez Gallardo
- Grupo 15
- integrantes:
  - Branko Haberkon
  - Camila Lerman
  - Matías Lorenzo
  - Martín Morondo
  - Fernando Clemens

## Trabajo Práctico Grupal

- Deploy: https://rickandmortysearchpj.netlify.app/

### Consigna:

En grupos de 4 o 5 personas, creen una aplicación web, bien diseñada que presente los datos de una API Rest a su elección, tienen toda clase de opciones. Desde presentar una tienda online que muestre los productos, hasta una pagina que consuma la famosa PokeAPI, APIs del tiempo, APIs con eventos y actividades culturales de CABA, etc. Sean creativos con la idea y con el diseño porque veremos los trabajos para la última clase del 28 de noviembre.

## Dependencias

- **@emotion/react** ^11.10.4,
- **@emotion/styled** ^11.10.4,
- **@mui/material** ^5.10.4,
- **react** ^18.2.0,
- **react-dom** ^18.2.0,
- **react-router-dom** ^6.3.0

## Estructura del proyecto

```
DSWF_TPGrupal_G15_APIRest_Rick_and_Morty/
├── src/
│   ├── assets/
│   │   ├── 404_rick.webp
│   │   ├── rick-and-morty-under-the-sea.webp
│   │   ├── Rick-and-Morty1.webp
│   │   └── rym.webp
│   ├── components/
│   │   ├── Buscador.jsx
│   │   ├── Buscador.module.css
│   │   ├── Card.jsx
│   │   ├── Card.module.css
│   │   ├── Card404.jsx
│   │   ├── Error.jsx
│   │   ├── Error.module.css
│   │   ├── Footer.jsx
│   │   ├── Footer.module.css
│   │   ├── GetApi.jsx
│   │   ├── HeaderRyM.jsx
│   │   ├── HeaderRyM.module.css
│   │   ├── Modal.jsx
│   │   ├── Modal.module.css
│   │   ├── Paginado.jsx
│   │   ├── Paginado.module.css
│   │   ├── Personajes.jsx
│   │   └── Personajes.module.css
│   └── utils/
│       ├── App.jsx
│       ├── main.jsx
│       └── style.css
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

```

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Ferclemens/DSWF_TPGrupal_G15_APIRest_Rick_and_Morty.git
   cd DSWF_TPGrupal_G15_APIRest_Rick_and_Morty
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Iniciar servidor:
   ```bash
   npm run dev
   ```
