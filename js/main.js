//Arranco de cero para mejorar todo el codigo
//Array de monedas
const moneda =[  
    {simbolo:"$", nombreMoneda:"Dolar", precioMoneda: 291, id:"dolar",precioMonedaDolar: 1},
    {simbolo:"€", nombreMoneda:"Euro",precioMoneda:295, id:"euro",precioMonedaDolar: 1.04},
    {simbolo:"¥", nombreMoneda:"Yen",precioMoneda:1.17, id:"yen",precioMonedaDolar: 0.072},
    {simbolo:"¥", nombreMoneda:"Yuan",precioMoneda:22.91, id:"yuan",precioMonedaDolar: 0.14},
    {simbolo:"₽", nombreMoneda:"Rublo",precioMoneda:2.69, id:"rublo",precioMonedaDolar: 0.016},
    {simbolo:"$", nombreMoneda:"PesoArg",precioMoneda:1, id:"pesoArg",precioMonedaDolar:0.0060},
    {simbolo:"$", nombreMoneda:"PesoChl",precioMoneda:0.18, id:"pesoChl",precioMonedaDolar: 0.0011},
    {simbolo:"$", nombreMoneda:"PesoMex",precioMoneda:8.39, id:"pesoMex",precioMonedaDolar: 0.052}];

//Array de criptos
const cripto = [
    {nombreCripto:"Bitcoin",precioCripto:16582.8, id:"bitcoin"},
    {nombreCripto:"Ethereum",precioCripto:1204.25, id:"ethereum"},
    {nombreCripto:"Usdc",precioCripto:1, id:"usdc"},
    {nombreCripto:"Litecoin",precioCripto:0.01,id:"litecoin"},
    {nombreCripto:"Dai",precioCripto:1, id:"dai"},
    {nombreCripto:"Uniswap",precioCripto:5.79,id:"uniswap"},
    {nombreCripto:"Axs",precioCripto:7.03,id:"axs"},
    {nombreCripto:"Xrp",precioCripto:0.38,id:"xrp"}
]

function seleccionDivisa(moneda){
    const {nombreMoneda, precioMoneda} = moneda;

    return `<div>
                    <h3 class="h3NombreMoneda">${nombreMoneda + moneda.simbolo}</h3>
                    <p>El precio es de pesos Argentinos: $${precioMoneda}</p>
                    <input type="text" id="monto"><strong>¿Cuanto deseas convertir?</strong></input>
                    <button onclick="calcularDivisa(${precioMoneda})">Calcular</button>
                    <p>El total es de pesos Argentinos: </p>
                    <p id="resultado"></p>
                </div>
    `
}

//Hago una funcion que me busque el find de la divisa requerida
function renderDivisa(id){
    let resultDivisa =moneda.find(divisa => divisa.id == id)
    console.log(resultDivisa)
    containerDivisa.innerHTML = seleccionDivisa(resultDivisa)
}

//Hago una funcion que calcule la conversion
function calcularDivisa(precioMoneda){
    let montoIngresado = document.getElementById("monto");
    let resultContainer = document.getElementById("resultado");

    let result = montoIngresado.value * precioMoneda;
    console.log(montoIngresado.value);
    console.log(result)

    resultContainer.innerHTML = `$${result}`
}

function conversionesMultiples(){
   
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
                    <button onclick="calcularMultiples()">Calcular</button>
                    <p>El total es de pesos Argentinos: </p>
                    <p id="resultadoUno"></p>
                    <p id="resultadoDos"></p>
                    <p id="resultadoTres"></p>
                </div>
    `
}

function renderConversionesMultiples(){
    containerConversionesMultiples.innerHTML = conversionesMultiples()
}

function seleccionDivisaDolar(moneda){
    const {nombreMoneda, precioMonedaDolar} = moneda;

    return `<div>
                    <h3 class="h3NombreMoneda">${nombreMoneda + moneda.simbolo}</h3>
                    <p>El precio es de: $${precioMonedaDolar}</p>
                    <input type="text" id="montoDolar"><strong>¿Cuanto deseas convertir?</strong></input>
                    <button onclick="calcularDivisaDolar(${precioMonedaDolar})">Calcular</button>
                    <p>El total es de dolares: </p>
                    <p id="resultadoDolar"></p>
                </div>
    `
}
//Hago una funcion que me busque el find de la divisa requerida
function renderDivisaDolar(id){
    let resultDivisaDolar =moneda.find(divisa => divisa.id == id)
    console.log(resultDivisaDolar)
    containerDivisaDolar.innerHTML = seleccionDivisaDolar(resultDivisaDolar)
}

//Hago una funcion que sirve para hacer los calculos
function calcularDivisaDolar(precioMonedaDolar){
    let montoIngresadoDolar = document.getElementById("montoDolar");
    let resultContainerDolar = document.getElementById("resultadoDolar");
    let resultDolar = montoIngresadoDolar.value * precioMonedaDolar;
    console.log(montoIngresadoDolar.value);
    console.log(resultDolar)

    resultContainerDolar.innerHTML = `$${resultDolar}`
}

//Selecciono el div vacio con getElementById y luego hago una funcion que muestre en el html lo que necesito
function seleccionCripto(cripto){
    const {nombreCripto, precioCripto} = cripto;
    
    return `<div>
                         <h3 class="h3NombreCripto">${nombreCripto}</h3>
                         <p>El precio es de dolares: $${precioCripto}</p>
                         <input type="text" id="montoCripto">¿Cuanto deseas convertir?</input>
                         <button onclick="calcularCripto(${precioCripto})">Calcular</button>
                         <p>El total es de dolares: </p>
                         <p id="resultadoCripto"></p>
                </div>
                `
}
//Hago una funcion que me busque el find de la divisa requerida
function renderCripto(id){
    let resultCripto =cripto.find(cripto => cripto.id == id)
    console.log(resultCripto)
    containerCripto.innerHTML = seleccionCripto(resultCripto)
}

function calcularCripto(precioCripto){
    let montoIngresadoCripto = document.getElementById("montoCripto");
    let resultContainerCripto = document.getElementById("resultadoCripto");

    let resultCripto = montoIngresadoCripto.value * precioCripto;
    console.log(montoIngresadoCripto.value);
    console.log(resultCripto)

    resultContainerCripto.innerHTML = `$${resultCripto}`
}

function conversionesMultiplesBitcoin(){
   
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
                    <p>El total es de pesos Argentinos: </p>
                    <p id="resultadoBitcoinUno"></p>
                    <p id="resultadoBitcoinDos"></p>
                    <p id="resultadoBitcoinTres"></p>
                </div>
    `
}

function renderConversionesMultiplesBitcoin(){
    containerConversionesMultiplesBitcoin.innerHTML = conversionesMultiplesBitcoin()
}

const containerCripto = document.getElementById("containerCripto");
const containerDivisa = document.getElementById('containerDivisa');
const containerDivisaDolar = document.getElementById('containerDivisaDolar');
const containerConversionesMultiples = document.getElementById('containerConversionesMultiples');
const containerConversionesMultiplesBitcoin = document.getElementById('containerConversionesMultiplesBitcoin');


//Guardando las monedas en el local storage
// const monedaString = JSON.stringify(moneda);
// localStorage.setItem('Moneda',monedaString);
// let monedaStorage = JSON.parse(localStorage.getItem('moneda'));

// //Guardando las criptos en el local storage
// const criptoString = JSON.stringify(cripto);
// localStorage.setItem('Cripto',criptoString);
// let criptoStorage = JSON.parse(localStorage.getItem('cripto'));




