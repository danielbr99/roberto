import { actualizarPresupuesto, mostrarPresupuesto } from './GastoUtils.js';

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("agregar").addEventListener("click", actualizarPresupuesto)
    document.getElementById("restar").addEventListener("click", actualizarPresupuesto)
    document.getElementById("ver").addEventListener("click", mostrarPresupuesto)
})
