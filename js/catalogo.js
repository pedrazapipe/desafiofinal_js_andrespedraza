/* Inicio objetos */

class Plantas  {
    constructor (planta, tierra, tamaño, stock) {

        this.planta = planta;
        this.tierra = tierra;
        this.tamaño = tamaño;
        this.stock = stock;
        this.activo = true;

    }

    datosPlantas () {

        console.log (`La planta ${this.planta} maneja un sustrato de tipo ${this.tierra} es de tamaño ${this.tamaño} y nos quedan un total de: ${this.stock}.`);
    
    }

};

const SuculentaNormal = new Plantas ("Echeveria elegans", "Normal", "Pequeña", 30);

const Cactus = new Plantas ("Cactus Chin", "Normal", "Mediana", 5);

const Minijardin = new Plantas ("Minijardin", "Normal", "Pequeño", 15);

const CarnivoraDrosera = new Plantas ("Drosera", "Peatmoss", "Pequeña", 10);

const SuculentaPachyveria = new Plantas ("Suculenta Pachyveria", "Normal", "Grande", 2);

const CarnivoraMatamoscas = new Plantas ("Carnivota mata moscas", "Peatmoss", "Pequeña", 5);

// console.log (Carnivora);
// Carnivora.datosPlantas ();
// Minijardin.datosPlantas ();

/* Final Objetos */





/* Inicio Arrays */

const catalogoPlantas = [];

catalogoPlantas.push (new Plantas ("Echeveria elegans", "Normal", "Pequeña", 30));
catalogoPlantas.push (new Plantas ("Cactus Chin", "Normal", "Mediana", 5));
catalogoPlantas.push (new Plantas ("Minijardin", "Normal", "Pequeño", 15));
catalogoPlantas.push (new Plantas ("Drosera", "Peatmoss", "Pequeña", 10));
catalogoPlantas.push (new Plantas ("Suculenta Pachyveria", "Normal", "Grande", 2));
catalogoPlantas.push (new Plantas ("Carnivota mata moscas", "Peatmoss", "Pequeña", 5));

// console.log (catalogoPlantas)

// function datosProductos () {

//     for (let i = 0; i < catalogoPlantas.length; i++) {
//         console.log (catalogoPlantas[i]);
        
//     }

// };

// // datosProductos ()

// const cantidadProductos = catalogoPlantas.sort ((a, b) => {

//     return b.stock - a.stock;

// });

// console.log (cantidadProductos);
 
// const ordenProductos = productos.sort ((orn1, orn2) => {

//     return (orn1.nombre < orn2.nombre) ? - 1 : 1;

// });

// console.log (ordenProductos) 

// console.table (productos);

/* Fin Arrays */

/* Inicio events y DOM */

const botonesCompra = document.querySelectorAll(`.btn__buy`);

const contenedorCompras = document.querySelector (`.productos__comprados`);

botonesCompra.forEach (eventoCompra => {
    eventoCompra.addEventListener(`click`, añadirCompra);

});

function añadirCompra (event) {

    const button = event.target;

    const productos = button.closest(`.productos`);

    const titutoProductos = productos.querySelector (`.titulos__productos`).textContent;

    const precioProductos = productos.querySelector (`.precio__productos`).textContent;

    const fotoProducto = productos.querySelector (`img`).src;


    añadirProductos (titutoProductos, precioProductos, fotoProducto);

}

function añadirProductos (titutoProductos, precioProductos, fotoProducto) {

const tituloElementos = contenedorCompras.getElementsByClassName(
  'titu__plantas'
  );

for (let i = 0; i < tituloElementos.length; i++) {
  
  if (tituloElementos[i].innerText === titutoProductos) {
    
    let elementQuantity = tituloElementos[
        i
    ].parentElement.parentElement.parentElement.querySelector(
        '.cantidadProductos'
    );

      elementQuantity.value++;

      actualizacionDatos();

      return;

    }
  }

    
const productosCreados = document.createElement ("div");

const productosContenidos = `

    <div class="elementos__comprados">

        <div class="producto__carrito">

            <img src= ${fotoProducto} alt="Suculenta Echeveria">

            <h4 class="titu__plantas"> ${titutoProductos} </h4>

            <h5 class="precio__elemento"> ${precioProductos} </h5>

        </div>

        <div>

            <input class="cantidadProductos" type="number" name="" id="" value="1">

        </div>

        <div>

            <button class="borrar__plantas" type="button"> X </button>
        
        </div>


    </div>

`;

productosCreados.innerHTML = productosContenidos;

contenedorCompras.append (productosCreados);



productosCreados.querySelector('.borrar__plantas').addEventListener('click', removerPlantas);

productosCreados.querySelector('.cantidadProductos').addEventListener('change', cambioCantidad);

actualizacionDatos ()

}

function actualizacionDatos() {

    let total = 0; 

    const totalProductos = document.querySelector (".total__productos");
    
    const productosComprados = document.querySelectorAll (".elementos__comprados");
  
    productosComprados.forEach((productoComprado) => {
      const precioElemento = productoComprado.querySelector(
        '.precio__elemento'
      );

      const costoDelItem = Number(
        precioElemento.textContent.replace('$', '')
      );

      const cantidadObjetos = productoComprado.querySelector(
        '.cantidadProductos'
      );

      const cantidadProductos = Number(
        cantidadObjetos.value
      );

      total = total + costoDelItem * cantidadProductos;
    });

    totalProductos.innerHTML = `${total.toFixed(3)}$`;

}


function removerPlantas (event) {

  const buttonClicked = event.target;

  buttonClicked.closest('.elementos__comprados').remove();

  actualizacionDatos ();

}

function cambioCantidad (event) {

  const input = event.target;

  input.value <= 0 ? (input.value = 1) : null;

  actualizacionDatos ();

}

/* Final events y DOM */




/* Inicio Comprar */

const btnComprar = document.querySelector (`.pago__comprar`);

btnComprar.addEventListener (`click`, botonComprar)

function botonComprar () {
  
  const nombresApellidos = prompt (`Tomaremos algunos datos para finalizar el pedido:

  Ingresa tú nombre completo:

  `);

  const correoElectronico = prompt (`Ingresa tu correo electronico:`);

  const numeroContacto = Number ( prompt (`Ingresa tu número de celular o WhatsApp:`) );

  finalPedido (nombresApellidos, correoElectronico, numeroContacto );

}

function finalPedido () {
  alert (`Gracias por comprar con nosotros. Estarémos en contacto con usted en breve para confirmar el pedido y acordar el lugar de entrega.`);

}


/* Final Comprar */



