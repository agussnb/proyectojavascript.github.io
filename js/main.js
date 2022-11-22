//Arranco de cero para mejorar todo el codigo

//------------- Array con las monedas

const moneda = [
    {simbolo:"$", nombreMoneda:"Dolar", precioMoneda: 291, id:"dolar"},
    {simbolo:"€", nombreMoneda:"Euro",precioMoneda:295, id:"euro"},
    {simbolo:"¥", nombreMoneda:"Yen",precioMoneda:1.17, id:"yen"},
    {simbolo:"¥", nombreMoneda:"Yuan",precioMoneda:22.91, id:"yuan"},
    {simbolo:"₽", nombreMoneda:"Rublo",precioMoneda:2.69, id:"rublo"},
    {simbolo:"$", nombreMoneda:"PesoArg",precioMoneda:1, id:"pesoArg"},
    {simbolo:"$", nombreMoneda:"PesoChl",precioMoneda:0.18, id:"pesoChl"},
    {simbolo:"$", nombreMoneda:"PesoMex",precioMoneda:8.39, id:"pesoMex"}
]
//Selecciono el div vacio con getElementById y luego hago una funcion que muestre en el html lo que necesito
const containerDivisa = document.getElementById('containerDivisa');
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
//Hago una funcion que sirve para hacer los calculos
function calcularDivisa(precioMoneda){
    let montoIngresado = document.getElementById("monto");
    let resultContainer = document.getElementById("resultado");

    let result = montoIngresado.value * precioMoneda;
    console.log(montoIngresado.value);
    console.log(result)

    resultContainer.innerHTML = `$${result}`
}
const containerConversionesMultiples = document.getElementById('containerConversionesMultiples');
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
for(let i=0; i<=3; i=i+1){
    function calcularMultiples(){
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


// Arranco con la parte de las criptos

//-----------------------------------------------------------------------------------------------------------------------------------------------------

//Array con las criptos
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
//Selecciono el div vacio con getElementById y luego hago una funcion que muestre en el html lo que necesito
const containerCripto = document.getElementById("containerCripto");
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
//Hago una funcion que sirve para hacer los calculos
function calcularCripto(precioCripto){
    let montoIngresadoCripto = document.getElementById("montoCripto");
    let resultContainerCripto = document.getElementById("resultadoCripto");

    let resultCripto = montoIngresadoCripto.value * precioCripto;
    console.log(montoIngresadoCripto.value);
    console.log(resultCripto)

    resultContainerCripto.innerHTML = `$${resultCripto}`
}