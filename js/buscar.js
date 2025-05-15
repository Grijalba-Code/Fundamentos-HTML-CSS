//BUSCAR PRODUCTO
import { productos } from './data.js';


const btnBuscar = document.querySelector("#buscar");

btnBuscar.addEventListener("click", (event)=>{
    event.preventDefault();

    const valorEntrada = document.querySelector(".search-input").value.trim().toLowerCase();
    const columna1 = document.querySelector(".column_1");
    const cont2 = document.querySelector(".cont2");
    ;

    columna1.innerHTML = ""; //limpiar resultados anteriores cada vez que le doy en buscar, porque al darle a ese boton me aparecen y aparecen cards
    cont2.innerHTML = "";
   

    if (valorEntrada === "") {
        alert("¡Escribe algo para buscar!");
        return;
    }

    //defino un avariable para identificar si encuentra algun producto o no
    //si lo encuentra, le digo que me incremente este numero
    //porque al final si veo que productos encontrados sigue siendo igual a cero, entonces me debe aparecer el texto que NO APARECE NADA.
    let productosEncontrados = 0;
  
    for(let i = 0; i < productos.length; i++){

    const producto = productos[i];

    if(producto.nombre.toLowerCase().includes(valorEntrada)){

    productosEncontrados++;
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
    precioCard.textContent = producto.precio + " $";

  //ahora aqui armo la card
  //el appendchild me sirve para agregar un nodo dentro de otro nodo
  card.appendChild(cardImage);
  card.appendChild(title);
  card.appendChild(body);
  card.appendChild(precioCard);

  columna1.appendChild(card);
        } 
    }

    if (productosEncontrados === 0) {
        const tError = document.createElement("p");
        tError.classList.add("error");
        tError.textContent = "No se encontraron productos";
        cont2.appendChild(tError);
        // columna1.innerHTML = `<p>No se encontraron productos con ese nombre.</p>`;
    }

});

// const buscar = (event) =>{
//   event.preventDefault();
//   const columna1 = document.querySelector(".column_1");
//   for(let i = 0; i < productos.length; i++){

//     const producto = productos[i];

//     if(producto.nombre.toLowerCase().includes(valorEntrada)){
//       //creo la card
//   const card = document.createElement("div");
//   card.classList.add("card");

//   //creo el contenedor para el img
//   const cardImage = document.createElement("div");
//   cardImage.classList.add("card-image");

//   const img = document.createElement("img");
//   img.src = producto.imagen;
//   //Agrego la imagen registrada a la variable img ()
//   cardImage.appendChild(img);

//   //creo el titulo de la card
//   const title = document.createElement("p");
//   title.classList.add("card-title"); 
//   title.textContent = producto.nombre;

//   const body = document.createElement("p");
//   body.classList.add("card-body");
//   body.innerHTML = 
//   //esto es un template literals
//   `<strong>Serial: </strong> ${producto.serial} <br>
//   <strong>Modelo: </strong> ${producto.modelo} <br>
//   <strong>Categoría: </strong> ${producto.categoria} <br>
//   <strong>Código: </strong> ${producto.codigo} <br>
//   <strong>Garantía: </strong> ${producto.garantia}`;

//   const precioCard = document.createElement("p");
//   precioCard.classList.add("footer_card");
//   precioCard.textContent = producto.precio + " $";

//   //ahora aqui armo la card
//   //el appendchild me sirve para agregar un nodo dentro de otro nodo
//   card.appendChild(cardImage);
//   card.appendChild(title);
//   card.appendChild(body);
//   card.appendChild(precioCard);

//   columna1.appendChild(card);
//     } else {
//       console.log("ERROR");
//     }
//   }
// }
