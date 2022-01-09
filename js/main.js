/* Inicio carrusel */

const carrucel = document.querySelector(`.imagenes__carrusel`);
const punto = document.querySelectorAll(`.carrucel__punto`);

punto.forEach( ( cadaPunto , i )=> {

    punto[i].addEventListener(`click`,()=>{

        let posicion  = i;
        let operacion = posicion * -33.33;

        carrucel.style.transform = `translateX(${operacion}%)`

        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove(`activo`);
        })
        punto[i].classList.add(`activo`);

    })
});

/* final carrusel */




/* Inicio descuentos */

const desUno = document.querySelector (`.descuento__planta1`);

const desDos = document.querySelector (`.descuento__planta2`);

const desTres = document.querySelector (`.descuento__planta3`);


desUno.addEventListener ("click", descuentoUno);

function descuentoUno (){
    alert (`Nuestras plantas con macetas de gato están en descuento, recuerda revisar nuestro catálogo para saber todas nuestras ofertas.

    Planta con maceta de gato: 25.000 pesos - Antes 32.000 pesos.
    
    `);

};

desDos.addEventListener ("click", descuentoDos);

function descuentoDos (){
    alert (`Nuestras plantas con macetas de gato están en descuento, recuerda revisar nuestro catálogo para saber todas nuestras ofertas.

    Planta con maceta de gato: 20.000 pesos - Antes 28.000 pesos.
    
    `);

};

desTres.addEventListener ("click", descuentoTres);

function descuentoTres (){
    alert (`Nuestras plantas con macetas de gato están en descuento, recuerda revisar nuestro catálogo para saber todas nuestras ofertas.

    Planta con maceta de gato: 28.000 pesos - Antes 36.000 pesos.
    
    `);

};

/* Final descuentos */




/* Inicio TOP productos */

const pediUno = document.querySelector (".pedidos_plantas1");

const pediDos = document.querySelector (".pedidos_plantas2");

const pediTres = document.querySelector (".pedidos_plantas3");


pediUno.addEventListener ("click", pedidoUno);

function pedidoUno (){
    alert (`La Suculenta Pachyveria es una suculenta muy fácil de cuidar ya que requiere de poco cuidado por eso es una de nuestras plantas más pedidas.

    Recuerda hacer el pedido de tu planta ya que quedan muy pocas unidades. 
    
    `);

};

pediDos.addEventListener ("click", pedidoDos);

function pedidoDos (){
    alert (`La planta carnivora atrapa moscas es una de las plantas más populares para tener en interiores.

    Recuerda ir a la pestaña de cátalogo para poder hacer tu pedido  
    
    `);

};

pediTres.addEventListener ("click", pedidoTres);

function pedidoTres (){
    alert (`Los cactus es una suculenta muy fácil de cuidar ya que requiere de poco cuidado por eso es una de nuestras plantas más pedidas.

    Recuerda ir a la pestaña de cátalogo para poder hacer tu pedido  

    `);

};

$("document").ready(function(){
    $(".como__parrafo").hide(400);


    $(".como__titulo").click(function(){
        $(".como__parrafo").show(400);
        
    }); 

    $(".como__parrafo").click(function(){
        $(".como__parrafo").hide(400);
        
    }); 

});

/* Final TOP productos */
