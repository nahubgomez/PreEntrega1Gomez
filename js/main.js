
//! CARGA DATOS PARA REGISTRO


alert("Te damos la bienvenida a ScaniaArgentina.\nPor favor, regístrate para comenzar a comprar.");

let username = "";
let password = "";

while (username === "") {
  username = prompt("Ingresa un nombre de usuario: ");
}

while (password === "" || password.length < 8 || password.length > 14) {
  password = prompt("Ingresa una contraseña (entre 8 y 16 caracteres): ");
}

alert("Registro exitoso.\nTe damos la bienvenida a nuestra tienda " + username);

console.log("Guarda esta información en un lugar seguro para tus futuras compras.\nNombre de usuario: " + username + "\n" + "Contraseña: " + password) + "\n";




//LISTA DE PRODUCTOS EN STOCK
const productos = [
  { nombre: "scania rojo", precio: 35000 },
  { nombre: "scania azul marino", precio: 20020 },
  { nombre: "scania verde", precio: 25500 },
  { nombre: "scania rojo diablo ", precio: 13555 },
  { nombre: "scania 2024 EDICION LIMITADA", precio: 13555 },
  { nombre: "scania 2024 gama media", precio: 56555 },


];
let carrito = [];


let seleccion = prompt("hola desea comprar algo si o no?");

while (seleccion != "si" && seleccion != "no") {
  alert("por favor ingresa una de las opciones, si o no");
  seleccion = prompt("hola desea comprar algo si o no");
}

if (seleccion == "si") {
  alert("LES PRESENTO MI LISTA DE PRODUCTOS A LA VENTA ESTE 2024");
  let todoslosCamiones = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
  alert(todoslosCamiones.join(" - "));
} else if (seleccion == "no") {
  alert("Gracias por navegar en nuestra pagina web, hasta pronto!");
}


while (seleccion != "no") {
  let producto = prompt("agrega un producto a tu carrito!");
  let precio = 0;


  if (
    productos == " scania rojo " ||
    productos == " scania azul marino " ||
    productos == " scania verde " ||
    productos == " scania rojo diablo " ||
    productos == " scania 2024 EDICION LIMITADA " ||
    productos == " scania 2024 gama media "
  ) {

    function calcularIva(total) {
      return 1.21 * total
    }



    switch (producto) {
      case "scania rojo":
        precio = 35000;
        break;
      case "scania azul marino":
        precio = 20020;
        break;
      case "scania verde":
        precio = 25500;
        break;
      case "scania rojo diablo":
        precio = 13555;
        break;
      case "scania 2024 EDICION LIMITADA":
        precio = 13555;
        break;
      case "scania 2024 gama media":
        precio = 56555;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("cuantos camiones quiere comprar?"));

    carrito.push({ producto, unidades, precio });
    console.log(carrito);
  } else {
    alert("no tenemos ese prodcto");
  }


  seleccion = prompt("desea seguir comprando si o no");


  carrito.forEach((carritoFinal) => {
    console.log(
      `"producto:" ${carritoFinal.producto}, "unidades:" ${carritoFinal.unidades}, "total a pagar por producto:" ${carritoFinal.unidades * carritoFinal.precio
      }`
    );
  });
  break;
}



const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(`el total a pagar por su compra es de:  ${total}`);


//OBJETOS JS
//estructura con semantica

const producto1 = {
	nombre: "scania rojo",
	precio: 35000,
	disponibilidad: true
}

const producto2 = {
	nombre: "scania azul marino",
	precio: 20020,
	disponibilidad: true
}

producto1.precio = 45000;

alert("Hoy lunes tenemos una oferta del dia de " + producto1.nombre + " y " + producto2.nombre + " a tan solo $" + 60000);




//ARRAYS
// FILTRAR BÚSQUEDA 

prompt(" Busquemos el vehiculo que tanto te gusta ");
let marca = prompt(" Ingresar marca ");
let year = Number(prompt(" Ingresar año "));
let minimo = Number(prompt(" Ingresar minimo "));
let maximo = Number(prompt(" Ingresar maximo "));
let color = (prompt(" Ingresar color "));

function mostrarCamiones(camion) {
  camion.forEach((camion) =>
    console.log(
      camion.marca +
      " - " +
      camion.modelo +
      " - " +
      camion.year +
      " - " +
      camion.precio +
      " - Color " +
      camion.color
    )
  );
}

//FILTRAR

function filtrarCamion() {
  const resultado = camion
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarColor);
  if (resultado.length > 0) {
    mostrarCamiones(resultado);
  } else {
    alert(" LO QUE USTEDE ESTA BUSCANDO, NO SE ENCUENTRA EN STOCK");
  }
}


//seciones de filtrado

function filtrarMarca(camion) {
  if (marca) {
    return camion.marca === marca;
  }
  return camion;
}

function filtrarYear(camion) {
  if (year) {
    return camion.year === year;
  }
  return camion;
}

function filtrarMinimo(camion) {
  if (minimo) {
    return camion.precio >= minimo;
  }
  return camion;
}

function filtrarMaximo(camion) {
  if (maximo) {
    return camion.precio <= maximo;
  }
  return camion;
}


function filtrarColor(camion) {
  if (color) {
    return camion.color === color;
  }
  return camion;
}


filtrarCamion(camion); 






