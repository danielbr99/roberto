import Gasto from './Gasto.js';

var presupuesto = 100000

let actualizarPresupuesto = (event) => {

    let cantidad = parseInt(document.getElementById("cantidad").value)
    if (isNaN(cantidad) || cantidad === 0) {
        document.getElementById("screen").innerHTML = "Por favor, introduce una cantidad válida."
        return;
    }
    crearGasto(event.target.id, cantidad)
    switch (event.target.id) {
        case "agregar":
            agregar(cantidad)
            break;
        case "restar":
            restar(cantidad)
            break;
        default:
            break;
    }
}

let crearGasto = (tipo, cantidad) => {
    var gasto = new Gasto(tipo, cantidad)
    console.log(gasto)
}

let agregar = (cantidad) => {
    if (cantidad < 0) {
        document.getElementById("screen").innerHTML = "La cantidad no puede ser negativa"
    } else {
        presupuesto += cantidad
        document.getElementById("screen").innerHTML = "presupuesto: " + presupuesto
    }
}

let restar = (cantidad) => {
    if (cantidad < 0) {
        document.getElementById("screen").innerHTML = "La cantidad no puede ser negativa"
    } else {
        presupuesto -= cantidad
        document.getElementById("screen").innerHTML = "presupuesto: " + presupuesto
    }
}

let mostrarPresupuesto = () => {
    document.getElementById("screen").innerHTML = "Tu presupuesto actual es de " + presupuesto + " €"
}

export { actualizarPresupuesto, crearGasto, mostrarPresupuesto }