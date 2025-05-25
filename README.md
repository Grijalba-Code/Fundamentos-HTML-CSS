# Fundamentos-HTML-CSS
DG - TEC: Proyecto Final Fundamentos Web

- Descripción del Proyecto
DG - TEC es una aplicación web desarrollada como proyecto final para la asignatura de Fundamentos Web. El objetivo principal es gestionar un catálogo para la venta de productos tecnológicos, permitiendo registrar nuevos productos, ver el listado completo con paginación, y guardar toda la información directamente en el navegador utilizando localStorage.

Importante: Este proyecto solo funciona correctamente si se ejecuta con la extensión Live Server en VS Code. Si se abre directamente desde el archivo index.html, es posible que algunas funcionalidades no trabajen como se espera debido a restricciones del navegador con el manejo de archivos locales.

Funcionalidades del Proyecto
- Página de Inicio: Muestra un mensaje de bienvenida al usuario.

- Registro de Productos: Formulario para ingresar productos tecnológicos con los siguientes campos requeridos: nombre, categoría, código, serial, modelo, código, precio, imagen y garantia.

- Validación en el campo del código del producto:

1. Debe tener mínimo 8 caracteres.

2. Debe incluir al menos una letra mayúscula, una letra minúscula y dos números.

3. Los demás campos esenciales están marcados como "required" para evitar registros incompletos.

- Indicaciones de Uso: Página informativa que explica cómo registrar correctamente un producto y tambien incluye ejemplos de códigos válidos e inválidos, y advertencias que el sistema mostrará si algún dato no cumple las reglas.

- Vista de Productos: Muestra todos los productos registrados en forma de tarjetas y tiene paginación que permite mostrar 15 productos por página.

- Búsqueda de Productos: Permite buscar productos por tres atributos:

1. Nombre del producto

2. Categoría

3. Modelo

La búsqueda funciona por coincidencia con cualquiera de estos tres atributos.

Esta vista muestra todos los resultados encontrados.

*Tecnologías Utilizadas

1. HTML5: Para la estructura del contenido.

2. CSS3: Para los estilos visuales.

3. JavaScript (Vanilla): Para la lógica del sitio, interacciones y validaciones.

4. localStorage: Para guardar y recuperar los productos registrados desde el navegador.

- Estructura del Proyecto

Fundamentos-HTML-CSS/
├── css/
│   ├── buscar.css
│   ├── index.css
│   ├── indicaciones.css
│   ├── productos.css
│   └── registro.css
│
├── img/
│   ├── IMAGENES DATA/
│   ├── indicaciones 2.PNG
│   ├── INDICACIONES EJEMPLOS.PNG
│   └── Search ico.png
│
├── js/
│   ├── buscar.js
│   ├── data.js
│   ├── productos.js
│   └── registro.js
│
├── pages/
│   ├── buscar.html
│   ├── indicaciones.html
│   ├── productos.html
│   └── registro.html
│
├── index.html               
├── .eslintrc.json           
├── package.json             
└── README.md


- Instrucciones para Ejecutar el Proyecto

1. Clona este repositorio con el git bash o descárgalo en formato ZIP:

==> git clone https://github.com/Grijalba-Code/Fundamentos-HTML-CSS.git

2. Abre la carpeta del proyecto con Visual Studio Code.

3. Instala la extensión Live Server (si aún no la tienes).

4. Haz clic derecho sobre index.html y selecciona "Open with Live Server".

5. Navega entre las páginas para registrar, visualizar, buscar productos y consultar indicaciones.

Nota: No se requieren servidores externos ni librerías adicionales. Todo funciona de forma local en el navegador.

- Persistencia de Datos: Todos los productos que se registran se almacenan en localStorage, lo que permite que la información se conserve incluso si se cierra el navegador.

- Línea de Negocio: Este proyecto está orientado al área tecnológica, facilitando la gestión de productos como:

1. Computadores

2. Periféricos

3. Accesorios tecnológicos

4. Impresoras


Autor:
David Grijalba
Estudiante de Ingeniería de Sistemas - Cuarto semestre
GitHub: Grijalba-Code
DG - TEC => Mantenimiento y venta de equipos tecnológicos

Licencia
Este proyecto es de uso libre con fines académicos.