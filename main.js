
const productos = [
    { nombre: "rojo", precio: 555 },
    { nombre: "verde", precio: 450 },
    { nombre: "azul", precio: 690 },
    { nombre: "nuevo", precio: 780 },
    
   
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
        productos == " Rojo " ||
        productos == " 2023 " ||
        productos == " azul " ||
        productos == " verde"
    ) {

        function calcularIva (total){
            return 1.21 * total
        }
   

        
      switch (producto) {
        case "rojo":
          precio = 500;
          break;
        case "azul":
          precio = 100;
          break;
        case "2023":
          precio = 150;
          break;
        case "verde":
          precio = 400;
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
          `"producto:" ${carritoFinal.producto}, "unidades:" ${carritoFinal.unidades}, "total a pagar por producto:" ${
            carritoFinal.unidades * carritoFinal.precio
          }`
        );
      });
      break;
    }
  
  
  
  const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
  console.log(`el total a pagar por su compra es de:  ${total}`);  