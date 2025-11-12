var arraySort = []
var grande = []
var mediana = []
var pequeña = []
var num = []
var star = []
var screen
var numInput
var sizeInput
var radio
var matrix

window.onload = function () {
    screen = document.getElementById("screen")
    numInput = document.getElementById("numberOrder")
    sizeInput = document.getElementById("sizeOrder")
    radio = document.getElementById("radio")
    matrix = document.getElementById("matrix")

    numInput.addEventListener("keypress", function (e) {
        if (e.key == "Enter") {
            e.preventDefault()
            numberSort(e.target.value)
            e.target.value = ""
        }
    })

    sizeInput.addEventListener("keypress", function (e) {
        if (e.key == "Enter") {
            e.preventDefault()
            sizesSort(e.target.value);
            e.target.value = ""
        }
    })

    radio.addEventListener("keypress", function (e) {
        if (e.key == "Enter") {
            e.preventDefault()
            circumference(e.target.value)
            e.target.value = ""
        }
    })

}

function pageBack() {
    window.history.back()
    console.log("hello")
}

function openPop() {
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
    const top = (height - 400) / 2 / systemZoom + dualScreenTop;

    const features = `
        scrollbars=yes,
        width=${500 / systemZoom},
        height=${400 / systemZoom},
        top=${top},
        left=${left}`
        ;

    const newWindow = window.open("https://www.google.com", "google", features);
}

function showPrime() {
    const primes = []
    const threes = []
    for (var i = 2; i <= 499; i++) {
        var isPrime = true;
        for (let n = 2; n < Math.sqrt(i); n++) {
            if (i % n == 0) {
                isPrime = false
                break;
            }

        }
        if (!isPrime) {
            if (i % 3 == 0) {
                threes.push(i)
            }
            primes.push(i)
        }
    }

    screen.innerHTML = "<p>" + primes.length + " no primos</p><br>" + threes
}

function numberSort(num) {
    arraySort.push(num)
    arraySort.sort((a, b) => a - b);
    screen.innerHTML = arraySort
}

function sizesSort(size) {
    var grandes = ["XXL", "XL", "L"]
    var medianas = ["M"]
    var pequeñas = ["S", "XS", "XXS"]

    if (grandes.includes(size)) {
        grande.push(size)
    }
    if (medianas.includes(size)) {
        mediana.push(size)
    }
    if (pequeñas.includes(size)) {
        pequeña.push(size)
    }

    var set = new Set(grande)
    grande = [...set]

    set = new Set(mediana)
    mediana = [...set]

    set = new Set(pequeña)
    pequeña = [...set]

    screen.innerHTML = "<p>Grande: { " + grande + " } Mediana: { " + mediana + " } Pequeña: { " + pequeña + " }<p/>"
}

function circumference(radius) {
    screen.innerHTML = "Circle radius: " + 2 * Math.PI * radius
}

function lottery(option) {
    var count = 0

    switch (option) {
        case "num":
            num = []
            while (count < 5) {
                num.push(Math.floor(Math.random() * 50) + 1)
                count++
            }
            break;
        case "estrella":
            star = []
            while (count < 2) {
                star.push(Math.floor(Math.random() * 10) + 1)
                count++
            }
            break;

        default:

            break;
    }

    screen.innerHTML = "Numeros: " + num + " Estrellas: " + star
}

function createMatrix() {
    e.preventDefault()
    console.log(e.target)
}