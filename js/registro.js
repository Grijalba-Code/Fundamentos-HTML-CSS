//REGISTRO

const formulario = document.getElementById("myForm");



formulario.addEventListener("submit", (evitarReset) => {
  evitarReset.preventDefault(); //evita reseteo de campos al presionar el boton de registrar

  const decimal = /^(?=(?:.*\d){2,})(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,20}$/;
  //\d: numeros del 0 al 9
  //(?=(?:.*\d){2,}) : minimo 2 numeros
  //[a-z]: una minuscula
  //[A-Z]: una mayuscula
  //\s: sin espacios ()
  //{8,20}: de 8 a 20 caracteres

  const nombre = document.getElementById("nombre").value; //ese "nombre" es el ID del input
  console.log(nombre);

  const serial = document.getElementById("serial").value; 
  console.log(serial);

  const modelo = document.getElementById("modelo").value; 
  console.log(modelo);

  const categoria = document.getElementById("categoria").value;
  console.log(categoria);

  const imagen = "../img/IMAGENES DATA/ASUS Dual RTX 4060 (2).webp";
  console.log(imagen);

  const codigo = document.getElementById("codigo").value;
  console.log(codigo);

  const precio = document.getElementById("precio").value;
  console.log(precio);

  const garantia = document.getElementById("garantia").value;
  console.log(garantia);

  const producto = {
    nombre: nombre,
    serial: serial,
    modelo: modelo,
    categoria: categoria,
    imagen: imagen,
    codigo: codigo,
    precio: precio,
    garantia: garantia
};

if(codigo.match(decimal)){
  saveInLocalStorage(producto);
    alert("Producto registrado exitosamente ✅");
    window.location.href = "productos.html";
  } else {
    alert("CODIGO INVALIDO ❌");
    window.location.href = "indicaciones.html";
    //window es como el objeto global del navegador, location viene siendo la URL en donde estoy ahora, y href me deja cambiar esa URL para que cargue otra página
  }
    
  } 
);

const KEY_LOCAL_STORAGE = "productosStorage";

const saveInLocalStorage = (producto) => {
    // Usamos el nombre productosStorage como una "clave" en el localStorage

    //el getItem("productosStorage") me busca si ya hay datos guardados en el navegador con la clave "productosStorage"

    //el JSON.parse me convierte ese texto que es en formato JSON en un array con objetos dentro.
    //el || "[]" sirve para que en caso tal si no hay nada aún, se use un array vacío por defecto. me evita algun error
    const productos = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE) || "[]");

     // Agregamos el nuevo producto al array
    productos.push(producto);

    // Guardamos el array actualizado
    //el metodo stringify lo que hace es que me convierte un objeto o array en un texto string en formato JSON, para guardarlo en localStorage.
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(productos));
};

//entonces el funcionamiento es el siguiente.
//Primero busco en el localStorage si ya hay productos guardados. Como lo que devuelve es texto en formato JSON, lo convierto a array con el metodo .parse
//Si no hay nada, uso un array vacío por defecto que es el || "[]".
// Luego le agrego un nuevo producto con .push() 
// y al final vuelvo a convertir todo a texto en formato JSON con JSON.stringify, porque el localStorage solo acepta strings.
//es como si fuera un ciclo para agregar objetos en formato JSON ya que el localStorage solo recibe strings.



  


