# Taller: Random Testing en Aplicaciones Web

Este proyecto implementa técnicas de **Monkey Testing** utilizando **Cypress.io**, como parte del taller de random testing en aplicaciones web.

## Requisitos

- Node.js >= 20.0.0
- npm (Node Package Manager)

Verifica tu versión de Node.js con:

```bash
node -v
npm -v
```

## Instalación

1. Clona o descarga este repositorio.
2. Abre una terminal en el directorio del proyecto.
3. Instala las dependencias ejecutando:

```bash
npm install
```

## Ejecución de las Pruebas

### Modo interactivo (con interfaz gráfica)

```bash
npm run test:ui
```

- Se abrirá la interfaz de Cypress.
- Selecciona el archivo `monkey_testing.cy.js` en la carpeta `cypress/e2e`.
- Observa cómo los monkeys interactúan con la página.

### Modo headless (desde la terminal)

```bash
npm run test
```
- Ejecuta las pruebas directamente en la terminal.

## Descripción de las Pruebas

- **randomClick(monkeysLeft)**:
    - Realiza clicks aleatorios en enlaces visibles de la página hasta completar el número de acciones definido.

- **randomEvent(monkeysLeft)**:
    - Ejecuta eventos aleatorios entre:
        - Click en un enlace.
        - Llenado de un campo de texto.
        - Selección en un combo box.
        - Click en un botón.
    - Se ejecuta recursivamente hasta terminar todos los eventos.

## Detalles adicionales

- El sitio web de prueba es: [https://losestudiantes.co](https://losestudiantes.co)
- Es normal que durante la ejecución ocurran errores si el elemento seleccionado desaparece o no es interactuable.
