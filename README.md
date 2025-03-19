# Sitio Web Simple con Express

Este proyecto es una aplicación web simple construida con **Express.js** en **Node.js**.

## Funcionalidades

1. Una caja de texto donde el usuario puede escribir y, al presionar la tecla **Enter**, se muestra una ventana emergente con el contenido ingresado.
2. Un botón que cambia el color de fondo y el color del texto de la caja en el siguiente orden:
   - Fondo blanco - Texto negro  
   - Fondo negro - Texto blanco  
   - Fondo celeste - Texto rojo  

---

## Requisitos

- Tener **Node.js** instalado en el sistema.

---

## Instalación

1. Clonar el repositorio o descargar los archivos.
2. Abrir una terminal en la carpeta del proyecto.
3. Instalar las dependencias necesarias con:
   ```bash
   npm install express
   ```

---

## Estructura del proyecto

```
express_textbox_app/
│
├── public/
│   ├── index.html  # Archivo HTML con la interfaz
│   ├── script.js   # Archivo JavaScript con la lógica del cliente
│
└── server.js  # Archivo principal del servidor Express
```

---

## Cómo ejecutar la aplicación

1. Abrir una terminal en la carpeta del proyecto.
2. Ejecutar el siguiente comando para iniciar el servidor:
   ```bash
   node server.js
   ```
3. Abrir el navegador y acceder a: [http://localhost:3000](http://localhost:3000)
