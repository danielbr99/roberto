export default class Gasto {
    constructor(descripcion, cantidad) {
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.fecha = new Date()
    } 
}