

let count = (params) => {
    console.log([...params] + " Valores sin tocar  y Valores totales: " + params.length)
    if ([...params].length > 2) {
        [params[0], params[2]] = [params[2], params[0]]
        console.log([...params] + " Valores cambiados")
    }

}

var parametros = ["a", "b", "c"]
count(parametros)


var pin = [1, 2, 3, 4]
var saldo = 10000
var deuda = 0

let validar = () => {
    var params = document.getElementById("pin").value
    var pinArr = [...params]

    if (pinArr.every((element, index) => {
        console.log(element)
        return element == pin[index]
    })) {
        document.getElementById("screen").innerHTML = "<div> Validado <div/>"
        document.getElementById("sacar").disabled = false
        document.getElementById("consultar").disabled = false
    } else{
        document.getElementById("screen").innerHTML = "<div> PIN incorrecto <div/>"
        document.getElementById("sacar").disabled = true
        document.getElementById("consultar").disabled = true
    }

}

let consultar = () => {
    document.getElementById("screen").innerHTML = "<div> Saldo: "+ saldo + " Deuda: " + deuda + " <div/>"
}

let sacar = () => {
    saldo = saldo - 1000
    if(saldo <= 0){
        deuda = deuda + 1000
        saldo = 0
    }
    consultar()
}