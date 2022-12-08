//   ---------------   Alumno:/Agustin Barrero/Comision:/45200 ----------------------------
//------------------------------
//Array de monedas

async function cargarDatos(){
    const urlAPI = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json'
    const res = await fetch(urlAPI);
    const datos = await res.json();
    return datos

}

async function APILeida(){
    const monedaAPI = await cargarDatos();
    const divAPI = document.querySelector('#divAPI');
    divAPI.innerHTML =  `
    <p class='parrafoIndexDivisas'>
    Estas son, las divisias disponibles para convertir a pesos argentinos, o dolares,:</p>
    <ul>
        <li><strong>${monedaAPI.usd}</strong> (Dolar Estadounidense) <img class='banderas' src='/imagenes/bandera-usa.jpg'></img>
        <br>
        <br>
        </li>
        <li><strong>${monedaAPI.eur}</strong> (Europa) <img class='banderas' src='/imagenes/bandera-europa.png'></img>
        <br>
        <br>
        </li>
        <li><strong>${monedaAPI.jpy}</strong> (Yen japones) <img class='banderas' src='/imagenes/bandera-japon.png'></img>
        <br>
        <br>
        </li>
        <li><strong>${monedaAPI.cny}</strong> (Yuan chino) <img class='banderas' src='/imagenes/bandera-china.png'></img>
        <br>
        <br>
        </li>
        <li><strong>${monedaAPI.rub}</strong> (Rublo ruso) <img class='banderas' src='/imagenes/bandera-rusia.png'></img>
        <br>
        <br>
        </li>
        <li><strong>${monedaAPI.ars}</strong> (Peso argentino) <img class='banderas' src='/imagenes/bandera-argentina.png'></img>
        <br>
        <br>
        </li>
        <li><strong>${monedaAPI.clp}</strong> (Peso chileno) <img class='banderas' src='/imagenes/bandera-chile.png'></img>
        <br>
        <br>
        </li>
        <li><strong>${monedaAPI.mxn}</strong> (Peso mexicano) <img class='banderas' src='/imagenes/bandera-mexico.png'></img>
        <br>
        <br>
        </li>
    </ul>`
}
APILeida()

const moneda = [{
        simbolo: "$",
        nombreMoneda: "Dolar",
        precioMoneda: 291,
        id: "dolar",
        precioMonedaDolar: 1
    },
    {
        simbolo: "€",
        nombreMoneda: "Euro",
        precioMoneda: 295,
        id: "euro",
        precioMonedaDolar: 1.04
    },
    {
        simbolo: "¥",
        nombreMoneda: "Yen",
        precioMoneda: 1.17,
        id: "yen",
        precioMonedaDolar: 0.072
    },
    {
        simbolo: "¥",
        nombreMoneda: "Yuan",
        precioMoneda: 22.91,
        id: "yuan",
        precioMonedaDolar: 0.14
    },
    {
        simbolo: "₽",
        nombreMoneda: "Rublo",
        precioMoneda: 2.69,
        id: "rublo",
        precioMonedaDolar: 0.016
    },
    {
        simbolo: "$",
        nombreMoneda: "PesoArg",
        precioMoneda: 1,
        id: "pesoArg",
        precioMonedaDolar: 0.0060
    },
    {
        simbolo: "$",
        nombreMoneda: "PesoChl",
        precioMoneda: 0.18,
        id: "pesoChl",
        precioMonedaDolar: 0.0011
    },
    {
        simbolo: "$",
        nombreMoneda: "PesoMex",
        precioMoneda: 8.39,
        id: "pesoMex",
        precioMonedaDolar: 0.052
    }
];

const cripto = [{
        nombreCripto: "Bitcoin",
        precioCripto: 16582.8,
        id: "bitcoin"
    },
    {
        nombreCripto: "Ethereum",
        precioCripto: 1204.25,
        id: "ethereum"
    },
    {
        nombreCripto: "Usdc",
        precioCripto: 1,
        id: "usdc"
    },
    {
        nombreCripto: "Litecoin",
        precioCripto: 0.01,
        id: "litecoin"
    },
    {
        nombreCripto: "Dai",
        precioCripto: 1,
        id: "dai"
    },
    {
        nombreCripto: "Uniswap",
        precioCripto: 5.79,
        id: "uniswap"
    },
    {
        nombreCripto: "Axs",
        precioCripto: 7.03,
        id: "axs"
    },
    {
        nombreCripto: "Xrp",
        precioCripto: 0.38,
        id: "xrp"
    }
]

const seleccionDivisa = (moneda) => {
    const {
        nombreMoneda,
        precioMoneda,
        simbolo
    } = moneda;
    return `<div>
                    <h3 class="h3NombreMoneda">${nombreMoneda + simbolo}</h3>
                    <p>El precio es de: $${precioMoneda}</p>
                    <input type="number" id="monto"><strong>¿Cuanto deseas convertir?</strong></input>
                    <button id="btnCalcularDivisa" onclick="calcularDivisa(${precioMoneda})">Calcular</button>
                    <p>El total es de pesos: </p>
                    <p id="resultado"></p>
                </div>
    `
}
const containerDivisa = document.getElementById('containerDivisa');
    function buscarDivisa(id) {
    let resultDivisa = moneda.find(divisa => divisa.id == id);
    containerDivisa.innerHTML =  seleccionDivisa(resultDivisa);
}

//Hago una funcion que sirve para hacer los calculos
 function calcularDivisa(precioMoneda) {
    let montoIngresado = document.getElementById("monto");
    let resultContainer = document.getElementById("resultado");
    let result = montoIngresado.value * precioMoneda;
    resultContainer.innerHTML = `$${result}`
    const btnCalcularDivisa = document.querySelector('#btnCalcularDivisa');
    btnCalcularDivisa.addEventListener('click', swal.fire('Resultado', 'El resultado es de pesos argentinos: ' + (result), 'success', 2000))
    if (montoIngresado.value <= 0 || NaN) {
        swal.fire('Error', 'No se puede realizar la conversion de un numero igual o menor a 0, por favor intenta con otro numero', 'error', 2000)
        resultContainer.innerHTML = ``
    }
 


}
function conversionesMultiples() {

    return `<div>
                    <table>
                    <tr><th>Opcion 1</th>
                            <td><input id="montoUno" type="number"><strong>¿Cuantos dolares queres convertir a pesos Argentinos?</strong></input></td>
                    </tr>
                    <tr><th>Opcion 2</th>
                            <td><input id="montoDos" type="number"><strong>¿Cuantos dolares queres convertir a pesos Argentinos?</strong></input></td>
                    </tr>
                    <tr><th>Opcion 3</th>
                            <td><input id="montoTres" type="number"><strong>¿Cuantos dolares queres convertir a pesos Argentinos?</strong></input></td>
                    </tr>
                    <br>
                    </table>
                    <button id="btnCalculoMultipleCripto" onclick="calcularMultiples()">Calcular</button>
                    <p>El total es de pesos Argentinos: </p>
                    <p id="resultadoUno"></p>
                    <p id="resultadoDos"></p>
                    <p id="resultadoTres"></p>
                </div>
    `
}
const containerConversionesMultiples = document.getElementById('containerConversionesMultiples');

function renderConversionesMultiples() {
    containerConversionesMultiples.innerHTML = conversionesMultiples()
}
for (let i = 0; i <= 3; i = i + 1) {
    function calcularMultiples() {
        let precioDolar = 291
        let montoIngresadoUno = document.getElementById('montoUno');
        let montoIngresadoDos = document.getElementById('montoDos');
        let montoIngresadoTres = document.getElementById('montoTres');

        let resultadoContainerUno = document.getElementById('resultadoUno');
        let resultadoContainerDos = document.getElementById('resultadoDos');
        let resultadoContainerTres = document.getElementById('resultadoTres');

        let resultadoUno = montoIngresadoUno.value * precioDolar;
        let resultadoDos = montoIngresadoDos.value * precioDolar;
        let resultadoTres = montoIngresadoTres.value * precioDolar;

        resultadoContainerUno.innerHTML = `$${resultadoUno}`
        resultadoContainerDos.innerHTML = `$${resultadoDos}`
        resultadoContainerTres.innerHTML = `$${resultadoTres}`
    }
}


function seleccionDivisaDolar(moneda) {
    const {
        nombreMoneda,
        precioMonedaDolar,
        simbolo
    } = moneda;

    return `<div>
                    <h3 class="h3NombreMoneda">${nombreMoneda + simbolo}</h3>
                    <p>El precio es de: $${precioMonedaDolar}</p>
                    <input type="number" id="montoDolar"><strong>¿Cuanto deseas convertir?</strong></input>
                    <button id="btnCalcularDivisaDolar" onclick="calcularDivisaDolar(${precioMonedaDolar})">Calcular</button>
                    <p>El total es de dolares: </p>
                    <p id="resultadoDolar"></p>
                </div>
    `
}
//Hago una funcion que me busque el find de la divisa requerida
function renderDivisaDolar(id) {
    const containerDivisaDolar = document.getElementById('containerDivisaDolar');

    let resultDivisaDolar = moneda.find(divisa => divisa.id == id)
    containerDivisaDolar.innerHTML = seleccionDivisaDolar(resultDivisaDolar)
    
}

//Hago una funcion que sirve para hacer los calculos
function calcularDivisaDolar(precioMonedaDolar) {
    let montoIngresadoDolar = document.getElementById("montoDolar");
    let resultContainerDolar = document.getElementById("resultadoDolar");
    let resultDolar = montoIngresadoDolar.value * precioMonedaDolar;
    resultContainerDolar.innerHTML = `$${resultDolar}`
  
    const btnCalcularDivisaDolar = document.querySelector('#btnCalcularDivisaDolar')
    btnCalcularDivisaDolar.addEventListener('click', swal.fire('Resultado', 'El resultado es dolares: ' + (resultDolar), 'success', 2000) )
    if (montoIngresadoDolar.value <= 0 || NaN ) {
        swal.fire('Error', 'No se puede realizar la conversion de un numero igual o menor a 0, por favor intenta con otro numero', 'error', 2000)
        resultContainerDolar.innerHTML = ``
    }
}

//Selecciono el div vacio con getElementById y luego hago una funcion que muestre en el html lo que necesito
function seleccionCripto(cripto) {
    const {
        nombreCripto,
        precioCripto
    } = cripto;

    return `<div>
                         <h3 class="h3NombreCripto">${nombreCripto}</h3>
                         <p>El precio es de dolares: $${precioCripto}</p>
                         <input type="number" id="montoCripto">¿Cuanto deseas convertir?</input>
                         <button id="btnCalcularCripto" onclick="calcularCripto(${precioCripto})">Calcular</button>
                         <p>El total es de dolares: </p>
                         <p id="resultadoCripto"></p>
                </div>
                `
}
//Hago una funcion que me busque el find de la divisa requerida
const containerConversionesMultiplesBitcoin = document.getElementById('containerConversionesMultiplesBitcoin');

function renderCripto(id) {
    let resultCripto = cripto.find(cripto => cripto.id == id)
    const containerCripto = document.getElementById("containerCripto");
    containerCripto.innerHTML = seleccionCripto(resultCripto)
}

function calcularCripto(precioCripto) {
    let montoIngresadoCripto = document.getElementById("montoCripto");
    let resultContainerCripto = document.getElementById("resultadoCripto");
    let resultCripto = montoIngresadoCripto.value * precioCripto;
    resultContainerCripto.innerHTML = `$${resultCripto}`

    const btnCalcularCripto = document.querySelector('#btnCalcularCripto');
    btnCalcularCripto.addEventListener('click', swal.fire('Resultado', 'El resultado es de dolares: ' + (resultCripto), 'success', 2000))
if (montoIngresadoCripto.value <= 0 || NaN) {
    swal.fire('Error', 'No se puede realizar la conversion de un numero igual o menor a 0, por favor intenta con otro numero', 'error', 2000)
    resultContainerCripto.innerHTML = ``
}
}



function conversionesMultiplesBitcoin() {

    return `<div>
                    <table>
                    <tr><th>Opcion 1</th>
                            <td><input id="montoBitcoinUno" type="number"><strong>¿Cuantos Btc queres convertir a dolares?</strong></input></td>
                    </tr>
                    <tr><th>Opcion 2</th>
                            <td><input id="montoBitcoinDos" type="number"><strong>¿Cuantos Btc queres convertir a dolares?</strong></input></td>
                    </tr>
                    <tr><th>Opcion 3</th>
                            <td><input id="montoBitcoinTres" type="number"><strong>¿Cuantos Btc queres convertir a dolares?</strong></input></td>
                    </tr>
                    <br>
                    </table>
                    <button onclick="calcularMultiplesBitcoin()">Calcular</button>
                    <p>El total es de dolares: </p>
                    <p id="resultadoBitcoinUno"></p>
                    <p id="resultadoBitcoinDos"></p>
                    <p id="resultadoBitcoinTres"></p>
                </div>
    `
}

function renderConversionesMultiplesBitcoin() {
    containerConversionesMultiplesBitcoin.innerHTML = conversionesMultiplesBitcoin()
}

for (let i = 0; i <= 3; i = i + 1) {
    function calcularMultiplesBitcoin() {
       const precioBitcoin = 16582.8;   
       const precioEthereum =  1204.25;
       const precioLitecoin = 0.01
        let montoIngresadoBitcoinUno = document.getElementById('montoBitcoinUno');
        let montoIngresadoEthereum = document.getElementById('montoBitcoinDos');
        let montoIngresadoLitecoin = document.getElementById('montoBitcoinTres');

        let resultadoContainerBitcoinUno = document.getElementById('resultadoBitcoinUno');
        let resultadoContainerEthereum = document.getElementById('resultadoBitcoinDos');
        let resultadoContainerLitecoin = document.getElementById('resultadoBitcoinTres');

        let resultadoBitcoinUno = montoIngresadoBitcoinUno.value * precioBitcoin;
        let resultadoEthereum = montoIngresadoEthereum.value * precioEthereum;
        let resultadoLitecoin = montoIngresadoLitecoin.value * precioLitecoin;

        resultadoContainerBitcoinUno.innerHTML = `$${resultadoBitcoinUno}`
        resultadoContainerEthereum.innerHTML = `$${resultadoEthereum}`
        resultadoContainerLitecoin.innerHTML = `$${resultadoLitecoin}`
    }
}




//Guardando las monedas en el local storage

const monedaString = JSON.stringify(moneda);
localStorage.setItem('Moneda',monedaString);
let monedaStorage = JSON.parse(localStorage.getItem('moneda'));

//Guardando las criptos en el local storage
const criptoString = JSON.stringify(cripto);
localStorage.setItem('Cripto',criptoString);
let criptoStorage = JSON.parse(localStorage.getItem('cripto'));