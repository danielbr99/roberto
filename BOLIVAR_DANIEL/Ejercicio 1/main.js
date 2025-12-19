import CentroComercial from "./CentroComercial.js";

let centroComercial = new CentroComercial("Puerto Venecia", "Z-40", 3, 400000)

centroComercial.toString()

let agregarPlantasYLocales = (numPlantas, numLocales) => {
    let locales = []
    for (let i = 1; i < numLocales + 1; i++) {
        locales.push({
            local: i,
            nombre: ""
        }
        )
    }
    for (let i = 1; i < numPlantas + 1; i++) {
        centroComercial.plantas.push({ planta: i, locales })
    }
    console.log("Agregamos 2 plantas con 4 locales por planta")
}

let modificarNombre = (nombre) => {
    centroComercial.nombre = nombre
    console.log("Nuevo nombre: " + centroComercial.nombre)
}

let modificarDireccion = ({ calle, numero, cp }) => {
    centroComercial.calle = calle
    centroComercial.numero = numero
    centroComercial.cp = cp
    console.log("Nueva dirección: " + centroComercial.calle + " " + centroComercial.numero + ", " + centroComercial.cp)
}

//tienda tipo: {nombre: "", planta: 1, local: 3}

let tiendas = [{ nombre: "Zara", planta: 1, local: 1 }, { nombre: "Pull&Bear", planta: 1, local: 2 }, { nombre: "Primor", planta: 2, local: 3 }]

let asignarTiendas = (...tiendas) => {
    let tiendasArr = [...tiendas]

    centroComercial.plantas.every((element, index) => {

        for (let i = 0; i < tiendasArr[0].length; i++) {

            let tiendaNueva = tiendasArr[0][i]

            for (let n = 0; n < element.locales.length; n++) {
                if (element.planta == tiendaNueva.planta && tiendaNueva.local == element.locales[n].local) {


                    console.log("estoy en la planta " + element.planta + " y el local " + element.locales[n].local)
                    console.log(element.locales[n].local + " será sustituida por " + tiendaNueva.nombre)
                    element.locales[n].nombre = tiendaNueva.nombre
                    console.log(tiendaNueva.nombre + " ahora es la tienda del local " + element.locales[n].local + " de la planta " + element.planta)


                }

            }
        }
        return true
    })
}

let imprimeLocales = () => {
    for (let index = 1; index < centroComercial.plantas.length; index++) {
        for (let n = 0; n < centroComercial.plantas[index].locales.length; n++) {
            console.log("Tienda del local " + centroComercial.plantas[index].locales[n].local + " de la planta " + centroComercial.plantas[index].planta + ": " + centroComercial.plantas[index].locales[n].nombre)

        }
    }
}


agregarPlantasYLocales(2, 4)

asignarTiendas(tiendas)
imprimeLocales()

modificarNombre("Gran casa")
modificarDireccion({ calle: "mario bros", numero: 2, cp: 404 })
