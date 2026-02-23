document.addEventListener("DOMContentLoaded", (event) => {
    var texto = document.getElementById("screen")
    var texto2 = document.getElementById("screen2")
    var texto3 = document.getElementById("screen3")

    document.getElementById("imagen1").addEventListener("mouseenter", () => {

        texto.innerHTML = document.getElementById("imagen1").id
    })
    document.getElementById("imagen1").addEventListener("mouseleave", () => {

        texto.innerHTML = "fuera"
    })
    document.getElementById("imagen2").addEventListener("mouseover", () => {

        texto.innerHTML = document.getElementById("imagen2").id
    })
    document.getElementById("imagen2").addEventListener("mouseleave", () => {

        texto.innerHTML = "fuera"
    })

    window.addEventListener("mousedown", (event) =>{
        texto2.innerHTML = "mouse pressed: " + event.button + " Evento: " + event.type
        texto2.style.backgroundColor = "#ffff00ff"
        
        if (event.button === 0){
            if (event.clientX < window.innerWidth / 2 && event.clientY < window.innerHeight / 2){
                texto3.innerHTML = "Arriba izquierda"
            } else if (event.clientX >= window.innerWidth / 2 && event.clientY < window.innerHeight / 2){
                texto3.innerHTML = "Arriba derecha"
            } else if (event.clientX < window.innerWidth / 2 && event.clientY >= window.innerHeight / 2){       
                texto3.innerHTML = "Abajo izquierda"
            } else if (event.clientX >= window.innerWidth / 2 && event.clientY >= window.innerHeight / 2){
                texto3.innerHTML = "Abajo derecha"
            }
        }
    })

    window.addEventListener("mousemove", (event) =>{
        texto2.innerHTML = "X: " + event.clientX + " Y: " + event.clientY + " Evento: " + event.type
        texto2.style.backgroundColor = "#00ffffff"
    })

    window.addEventListener("keypress", (event) =>{
        texto2.innerHTML = "Key pressed: " + event.key + " Evento: " + event.type
        texto2.style.backgroundColor = "#ffffff" 
    })
    
})

