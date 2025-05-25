//importo el array de objetos que está en data.js para acceder a ello
import { productos } from './data.js';

console.log(productos.length);

const obtenerProductosCombinados = () => {
  const productosLocal = JSON.parse(localStorage.getItem("productosStorage") || "[]");
  //el metodo concat sirve para concatenar arrays
  return productos.concat(productosLocal);
};

// Esta variable ahora será dinámica según localStorage o data.js
//es como si esta variable fuera u nuevo array en el que podré guardar productos nuevos
let productosMostrar = obtenerProductosCombinados();

const convertirApeso = (numero, moneda) => {
  const convercion = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: moneda,
    minimumFractionDigits: "" //le quito el fractionDigits
  });
  return convercion.format(numero);
};

//paginacion
let paginaActual = 1;
let productosPorPagina = 15;



const mostrarPagina = (pagina) => {
  const columna1 = document.querySelector(".column_1");
  
  //calculo el indice del primer producto que quiero mostrar
  //(0 al 15)
  let inicio = (pagina - 1) * productosPorPagina;
  let fin = pagina * productosPorPagina;

  for(let i = inicio; i < fin && i < productosMostrar.length; i++){
  const producto = productosMostrar[i];

  //creo la card
  const card = document.createElement("div");
  card.classList.add("card");

  //creo el contenedor para el img
  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");

  const img = document.createElement("img");
  img.src = producto.imagen;
  //Agrego la imagen registrada a la variable img ()
  cardImage.appendChild(img);

  //creo el titulo de la card
  const title = document.createElement("p");
  title.classList.add("card-title"); 
  title.textContent = producto.nombre;

  const body = document.createElement("p");
  body.classList.add("card-body");
  body.innerHTML = 
  //esto es un template literals
  `<strong>Serial: </strong> ${producto.serial} <br>
  <strong>Modelo: </strong> ${producto.modelo} <br>
  <strong>Categoría: </strong> ${producto.categoria} <br>
  <strong>Código: </strong> ${producto.codigo} <br>
  <strong>Garantía: </strong> ${producto.garantia}`;

  const precioCard = document.createElement("p");
  precioCard.classList.add("footer_card");
  precioCard.textContent = convertirApeso(producto.precio, 'COP') + " $";
  //ahora aqui armo la card
  //el appendchild me sirve para agregar un nodo dentro de otro nodo
  card.appendChild(cardImage);
  card.appendChild(title);
  card.appendChild(body);
  card.appendChild(precioCard);

  columna1.appendChild(card);
  }
};

mostrarPagina(paginaActual);

//================

const btnSig = document.querySelector("#siguiente");
const btnAnt = document.querySelector("#anterior");
const page = document.querySelector("#page");

page.textContent = "Pagina " + paginaActual;

btnSig.addEventListener("click", ()=>{
  if(paginaActual < (productos.length / productosPorPagina)){
    paginaActual++;
    page.textContent = "Pagina " + paginaActual; //ya es solo pagina actual porque se incrementa como lo escribí arriba
    const columna1 = document.querySelector(".column_1");
    columna1.innerHTML = "";
    mostrarPagina(paginaActual);
  }
});

btnAnt.addEventListener("click", ()=>{
    if(paginaActual>1){
    paginaActual--;
    page.textContent = "Pagina " + paginaActual; ////ya es solo pagina actual porque se incrementa como lo escribí arriba
    const columna1 = document.querySelector(".column_1");
    columna1.innerHTML = "";
    mostrarPagina(paginaActual);
  }
});

// const siguienteBtn = () => {
//   //cuando llegue a la ultima pagina no va a seguir (para eso es la división) "total de paginas que hay"
//   if(paginaActual < (productos.length / productosPorPagina)){
//     paginaActual++;
//     const columna1 = document.querySelector(".column_1");
//   columna1.innerHTML = "";
//     mostrarPagina(paginaActual);
//   }
// }

// const anteriorBtn = () => {
//   if(paginaActual>1){
//     paginaActual--;
//     const columna1 = document.querySelector(".column_1");
//   columna1.innerHTML = "";
//   mostrarPagina(paginaActual);
//   }
// }

//el window  debo ponerlo porque en mi html estan con Onclick
//es para que me vea estos botones de manera global. Porque el type module lo que hace es poner privado el archivo .js

//Entonces todo lo que declare como las funciones y variables queda privado solo para este archivo. No se guarda en window (globalmente).
// window.siguienteBtn = siguienteBtn;
// window.anteriorBtn = anteriorBtn;

//EL ONCLICK BUSCA FUNCION EN WINDOW
//EL ADDEVENTlISTENER NO
