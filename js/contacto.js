/* Inicio contacto */

$("body").append(`    <!-- inicio main -->

<main class="plantas__contacto">

    <!-- incio contacto básico -->

    <section class="contactob">

        <h2>Contacto básico</h2>

            <ul class="contacto">

                <li>Correo: sonninsuculentas@gmail.com</li>
                <li>Numero de WhatsApp: +57 (numero) </li>
                <li><a href="">Discord</a></li>

            </ul>

    </section>

    <!-- final contacto básico -->



    <!-- inicio Contacto profecional con formulario -->

    <section class="formulario__contacto">

        <h2>Contacto profesional y publicitario</h2>

            <!--inicio datos-->

            <form class="target" action="sonninsuculentas@gmail.com" method="POST" enctype="application/x-www-form-urlencoded" >

                <div class="form1">

                    <label class="nombre" for="Nombre">Nombres:</label>
                    <input id="nombre"  class="nombre" type="text" name="nombre" placeholder="Nombre">

                    <label class="apellido" for="Apellido">Apellidos:</label>
                    <input id="apellido"  class="apellido" type="text" name="Apellido" placeholder="Apellido">

                </div>

                <div class="form1">

                    <label class="correo" for="Correo">Correo:</label>
                    <input id="correo"  class="correo" type="email" name="Correo" id="" placeholder="Correo electronico">

                    <label class="numero" for="Numero de contacto">Numero:</label>
                    <input class="numero" type="text" name="Numero de contacto" id="" placeholder="Numero de contacto">

                </div>

                <div class="form1">

                    <label class="pais" for="pais">Pais:</label>
                    <input class="pais" type="pais" placeholder="Pais">

                    <label class="ciudad" for="ciudad">Ciudad:</label>
                    <input class="ciudad" type="text" placeholder="Ciudad">

                </div>

                <div class="form1">

                    <label class="text__plantas" for="Texto que nos envian">Escribenos:</label>
                    <textarea class="text" name="Texto que nos envian" placeholder="¿Cómo te podemos ayudar?" id="" cols="30" rows="10"></textarea>

                    <input class="enviar__plantas" type="submit" value="Enviar">
                    <input class="reset__plantas" type="reset" value="reset">

                </div>

            </form>

            <!-- final datos -->

            <div class="info__contato"></div>

    </section>

    <!-- final Contacto profecional con formulario -->
    
</main>


    <!-- final main -->

    <!-- Inicio footer -->

<footer class="footer__plantas">


    <div class="footer__info">

        <ul>

            <h2>Más información</h2>

            <li>Tiendas</li>
            <li>Nosotros</li>
            <li>Catálogo</li>
            <li>Contacto</li>

        </ul>

    </div>


    <div class="footer__contacto">

        <ul>

            <h2>Contacto</h2>

            <li>sonninsuculentas@gmail.com</li>
            <li>Numero de contacto: +57 777777777</li>

        </ul>

    </div>


    <div class="footer__pagos">

        <h2>Métodos de pago</h2>

        <img src="../multimedia/medios_de_pago.png" alt="Medios de pago">

    </div>

</footer>

`);

/* Final contacto */



/* Inicio Ajax y summit */


$(`.formulario__contacto`).change(function(){
    console.log (`prueba de funcion change.`)

});

$(`.target`).submit(function( event ) {
    console.log (`Hola, estoy funcionando`);
    event.preventDefault();
  });


/* $("document").ready(function(){
    $(".enviar__plantas").click(function(){

        const urlPHP = "server.php"
        const nombre = document.getElementById (`nombre`).value;
        const apellido = document.getElementById (`apellido`).value;
        const correo = document.getElementById (`correo`).value; 

        const datos = `Non=`+ nombre + `&Ape=` + apellido + `&Cor=` + correo;


        $.ajax({

            methot: "POST",
            url: urlPHP,
            data: datos,

            success: function (response) {
                $(`.info__contato`).html(response)
            }
        });

    });

});
 */


/* Final Ajax y summit */