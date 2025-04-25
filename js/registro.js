const formulario = document.getElementById("myForm");

formulario.addEventListener("submit", (evitarReset) => {
  evitarReset.preventDefault(); //evita reseteo de campos al presionar registrar

  const nombre = document.getElementById("nombre").value; //ese ["nombre"] es el ID del input
  console.log(nombre);

  const serial = document.getElementById("serial").value; //ese ["nombre"] es el ID del input
  console.log(serial);

  const modelo = document.getElementById("modelo").value; //ese "nombre" es el ID del input
  console.log(modelo);

  const categoria = document.getElementById("categoria").value;
  console.log(categoria);

  const imagen = document.getElementById("imagen").value;
  console.log(imagen);

  const codigo = document.getElementById("codigo").value;
  console.log(codigo);

  const precio = document.getElementById("precio").value;
  console.log(precio);

  const garantia = document.getElementById("garantia").value;
  console.log(garantia);
});
