window.onload = function() {
    getTalleres();
}

async function getTalleres() {
    try {
        const respuesta = await fetch("talleres.json");
        if(!respuesta.ok) throw new Error("Error al cargar el JSON");

        const datosCargados = await respuesta.json();

        crearFormulario(datosCargados);
    } catch (exception) {
        document.getElementById("messages").textContent = "Error. No se puedieron conseguir los datos";
        console.error(exception);
    }
}

/*function crearFormulario(datosCargados) {
    // Seleccionamos el elemento principal dónde vamos a crear el formulario
    let main = document.getElementById("app");

    // Creamos los elementos a insertar uno a uno
    let titulo = document.createElement("h2");
    let textoTitulo = document.createTextNode("Titulo principal");
    titulo.appendChild(textoTitulo);

    // Creamos elementos
    let form = document.createElement("form");
    form.id = "formulario";
    

    let inputNombre = document.createElement("input");
    inputNombre.placeholder = "Nombre Completo";
    inputNombre.required = true;

    let inputCorreo = document.createElement("input");
    inputCorreo.type = "email";
    inputCorreo.placeholder = "tu@email.com";

    let selectTalleres = document.createElement("select");
    datosCargados.forEach(taller => {
        let option = document.createElement("option");
        option.value = taller.id;
        option.textContent = taller.nombre;
        selectTalleres.appendChild(option);
    })

    let botonEnvio = document.createElement("button");
    botonEnvio.type = "submit";
    botonEnvio.textContent = "Confirmar plaza";

    // Asignamos los elementos del formulario al formulario
    form.appendChild(inputNombre);
    form.appendChild(inputCorreo);
    form.appendChild(selectTalleres);
    form.appendChild(botonEnvio);

    // Asignamos los elementos al formulario
    main.append(titulo, form);

    configurarEventos(form, inputNombre, inputCorreo, selectTalleres, datosCargados)
}*/

function crearFormulario(datosCargados) {
    const main = document.getElementById("app");

    // Construimos el HTML como un string (mucho más legible)
    main.innerHTML = `
        <h2>Titulo principal</h2>
        <form id="formulario">
            <input type="text" id="nombre" placeholder="Nombre Completo" required>
            <input type="email" id="correo" placeholder="tu@email.com">
            <select id="selectTalleres">
                ${datosCargados.map(t => `<option value="${t.id}">${t.nombre}</option>`).join('')}
            </select>
            <button type="submit">Confirmar plaza</button>
        </form>
    `;

    // Ahora configuramos los eventos buscando los IDs recién creados
    const form = document.getElementById("formulario");
    configurarEventos(form, datosCargados);
}

function setCookie(nombre, valor, dias) {
    let expiracion = "";
    if (dias) {
        const fecha = new Date();
        fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
        expiracion = "; expires=" + fecha.toUTCString();
    }
    // Guardamos la cookie
    document.cookie = `${nombre}=${valor}${expiracion}; path=/`;
}

function getCookie(nombre) {
    const nombreEQ = nombre + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nombreEQ) == 0) return c.substring(nombreEQ.length, c.length);
    }
    return null;
}

function configurarEventos(form, inputNombre, inputCorreo, selectTalleres, datosCargados) {

    /*function configurarEventos(form, datosCargados) {
    const inputCorreo = form.querySelector('input[type="email"]');
    // ... el resto de la lógica se mantiene igual 
    }*/
    
    inputCorreo.addEventListener('input', () => {
        // Una regex estándar para no complicarse la vida
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const esValido = regex.test(inputCorreo.value);

        // Usamos classList para no destruir otras clases de CSS
        if (esValido) {
            inputCorreo.classList.add('valido');
            inputCorreo.classList.remove('invalido');
        } else {
            inputCorreo.classList.add('invalido');
            inputCorreo.classList.remove('valido');
        }
    });

    // Mostrar descripción del taller (Evento change)
    selectTalleres.addEventListener('change', (e) => {
        const idSeleccionado = e.target.value;
        // Buscamos el taller en el array original de AJAX
        const tallerEncontrado = datosCargados.find(t => t.id == idSeleccionado);

        const cajaMensajes = document.getElementById("messages");
        cajaMensajes.textContent = `Descripción: ${tallerEncontrado.descripcion}`;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        setCookie("usuario_nombre", inputNombre.value, 30);
        if(inputNombre.value.trim().length < 3) {
            alert("El nombre es demasiado corto");
            return;
        }

        document.getElementById("messages").textContent = "¡Inscripción realizada con éxito!";
        form.reset();
    })

}

