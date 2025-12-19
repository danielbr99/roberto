import Persona from "./Persona.js"
import { avgAge } from "./PersonaUtils.js";



var personas = [
    new Persona("Roberto", "Martinez", 22, "roberto.martinez@tuempresa.com"),
    new Persona("Antonio", "Martinez", 25, "roberto.martinez@tuempresa.com"),
    new Persona("Javier", "Martinez", 18, "roberto.martinez@tuempresa.com"),
    new Persona("Eva", "Martinez", 32, "roberto.martinez@tuempresa.com"),
]


let calcularMedia = () => {
    console.log(avgAge(personas))
    document.getElementById("screen").innerHTML = "<div> " + avgAge(personas) + "<div/>"
}

document.getElementById("button").addEventListener("click", calcularMedia)