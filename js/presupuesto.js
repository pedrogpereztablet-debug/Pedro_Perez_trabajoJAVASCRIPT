/****************** Primera Parte ******************/
/****************** Primera Parte ******************/

/********************* Validar Formulario *********************/

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", validarFormulario);


function validarFormulario(evento) {

    // Borrar errores anteriores
    document.querySelectorAll(".error").forEach(function(error) {
        error.remove();
    });

    // Variable para saber si existe algún error

    let hayErrores = false;


    /********************* Validar Nombre *********************/

    const nombre = document.getElementById("nombre").value;

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ ]+$/.test(nombre) || nombre.length > 15) {

    /**motrarError, id, mensaje p  */

        mostrarError(
            "nombre",
            "*El nombre solo puede contener letras y un máximo de 15 caracteres"
        );

        hayErrores = true;
    }


    /********************* Validar Apellido *********************/

    const apellido = document.getElementById("apellido").value;

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ ]+$/.test(apellido) || apellido.length > 40) {

    /**motrarError, id, mensaje p  */

        mostrarError(
            "apellido",
            "*El apellido solo puede contener letras y un máximo de 40 caracteres"
        );

        hayErrores = true;
    }


    /********************* Validar Teléfono *********************/

    const telefono = document.getElementById("telefono").value;

    if (!/^[0-9]+$/.test(telefono) || telefono.length !== 9) {

    /**motrarError, id, mensaje p  */

        mostrarError(
            "telefono",
            "*El teléfono solo puede contener números y debe tener exactamente 9 dígitos"
        );

        hayErrores = true;
    }


    /********************* Validar Email *********************/

    const email = document.getElementById("email").value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

    /**motrarError, id, mensaje p  */
    
        mostrarError(
            "email",
            "*Tiene que introducir un formato de email válido"
        );

        hayErrores = true;
    }


    /********************* Evitar envío *********************/

    if (hayErrores) {
        evento.preventDefault();
    }
}


/********************* Mostrar Error *********************/

function mostrarError(idCampo, mensaje) {

    const campo = document.getElementById(idCampo);

    const error = document.createElement("p");

    error.textContent = mensaje;

    error.classList.add("error");

    campo.insertAdjacentElement("afterend", error);
}


/***************** Segunda Parte ******************************/
/***************** Segunda Parte ******************************/

/********************* Obtener elementos *********************/

const producto = document.getElementById("producto");

const plazo = document.getElementById("plazo");

const extras = document.querySelectorAll(".extra");

const presupuestoFinal = document.getElementById("presupuestoFinal");


/********************* Actualizar presupuesto *********************/

producto.addEventListener("change", calcularPresupuesto);

plazo.addEventListener("input", calcularPresupuesto);

extras.forEach(function(extra) {
    extra.addEventListener("change", calcularPresupuesto);
});


/********************* Calcular Presupuesto *********************/

function calcularPresupuesto() {

    // Obtener precio del producto

    let precio = Number(producto.value);


    /********************* Obtener plazo y descuentos según plazo *********************/

    const dias = Number(plazo.value);


    // Si el usuario borra el plazo, vuelve valor 1 dia minimo

    if (plazo.value === "") {
        plazo.value = 1;
    }

    let descuento = 0;

    if (dias >= 1 && dias <= 30) {

        descuento = 0;

    } else if (dias >= 31 && dias <= 60) {

        descuento = 0.05;

    } else if (dias >= 61) {

        descuento = 0.10;
    }


    /********************* Sumar extras *********************/

    let precioExtras = 0;

    extras.forEach(function(extra) {

        if (extra.checked) {
            precioExtras += Number(extra.value);
        }

    });


    /********************* Precio final *********************/

    let subtotal = precio + precioExtras;

    let valorDescuento = subtotal * descuento;

    let total = subtotal - valorDescuento;


    /********************* Mostrar resultado *********************/

    presupuestoFinal.value = total.toFixed(2) + " €";
}