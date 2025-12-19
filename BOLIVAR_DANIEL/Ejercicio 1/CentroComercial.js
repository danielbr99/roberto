export default class CentroComercial {
    constructor(nombre, calle, numero, cp) {
        this.nombre= nombre
        this.calle = calle
        this.numero = numero
        this.cp = cp
        this.plantas = [
        {
            planta: 0, 
            locales: [{local: 0, nombre: ""}] 
        }
    ];
    }

    toString(){
        console.log("Construido nuevo centro comercial: " + this.nombre + " Calle: " + this.calle + " nº: "+ this.numero + " CP: " + this.cp)
    }

}