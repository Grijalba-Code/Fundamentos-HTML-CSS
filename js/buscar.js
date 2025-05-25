//BUSCAR PRODUCTO
import { productos } from './data.js';

const convertirApeso = (numero, moneda) => {
  const convercion = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: moneda,
    minimumFractionDigits: "" //le quito el fractionDigits
  });
  return convercion.format(numero);
};

const obtenerProductosCombinados = () => {
  const productosLocal = JSON.parse(localStorage.getItem("productosStorage") || "[]");
  //el metodo concat sirve para concatenar arrays
  return productos.concat(productosLocal);
}

// Esta variable ahora será dinámica según localStorage o data.js
//es como si esta variable fuera u nuevo array en el que podré guardar productos nuevos
let productosMostrar = obtenerProductosCombinados();


const btnBuscar = document.querySelector("#buscar");
// const formulario = document.querySelectorAll(".myForm")


btnBuscar.addEventListener("click", (event)=>{
    event.preventDefault();

    const valorEntrada = document.querySelector(".nombre").value.trim().toLowerCase();
    const valoreEntradaCategoria = document.querySelector(".categoria").value.trim().toLowerCase();
    const valorEntradaModelo = document.querySelector(".modelo").value.trim().toLowerCase();
    const columna1 = document.querySelector(".column_1");
    const cont2 = document.querySelector(".cont2");
    let p2 = document.createElement("p");
    

    columna1.innerHTML = ""; //limpiar resultados anteriores cada vez que le doy en buscar, porque al darle a ese boton me aparecen y aparecen cards
    cont2.innerHTML = "";
   

    if (valoreEntradaCategoria === "" && valorEntrada === "" && valorEntradaModelo === "") {
        alert("¡NO DEJES LOS CAMPOS VACIOS");
        return;
    }

    //defino un avariable para identificar si encuentra algun producto o no
    //si lo encuentra, le digo que me incremente este numero
    //porque al final si veo que productos encontrados sigue siendo igual a cero, entonces me debe aparecer el texto que NO APARECE NADA.
    let productosEncontrados = false;

    p2.textContent = "CARGANDO ...";
    p2.classList.add("cargando");
    cont2.appendChild(p2);

    // defino esta variable para guardar las cards que se generen
    let cardsGeneradas = [];

    for(let i = 0; i < productosMostrar.length; i++){
    const producto = productosMostrar[i];

    if(producto.nombre.toLowerCase().includes(valorEntrada) && producto.categoria.toLowerCase().includes(valoreEntradaCategoria) && producto.modelo.toLowerCase().includes(valorEntradaModelo)){

    productosEncontrados = true;
    
    //creo la card
    const card = document.createElement("div");
    card.classList.add("card");

    //creo el contenedor para el imga
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

        cardsGeneradas.push(card);
        
        } 
    };
    
    
    miPromesa(productosEncontrados)
    .then((resolve)=>{
      console.log(resolve);
      for (let i = 0; i < cardsGeneradas.length; i++) {
        columna1.appendChild(cardsGeneradas[i]);
      }
      p2.textContent = "";
      
    })
    .catch((reject)=>{
      console.log(reject);
        
        p2.textContent = reject;
        cont2.appendChild(p2);
    });
    
    limpiarCampos();
});


function miPromesa(productosE) {
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
          if(productosE === true){
              resolve("VISTA EXITOSA");
          } else {
            reject("NO SE ENCONTRARON PRODUCTOS");
          };
        }, 2000);
    });
};


function limpiarCampos () {
  document.querySelector(".nombre").value = "";
  document.querySelector(".categoria").value = "";
  document.querySelector(".modelo").value = "";
};
