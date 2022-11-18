//Arranco de cero para mejorar todo el codigo

//------------- Array con las monedas

const moneda = [
    {ejemplo:"5 Usd$", nombreMoneda:"Dolar", precioMoneda: 291, id:"dolar"},
    {ejemplo:"5 Eu€", nombreMoneda:"Euro",precioMoneda:295, id:"euro"},
    {ejemplo:"5 Jpy¥", nombreMoneda:"Yen",precioMoneda:1.17, id:"yen"},
    {ejemplo:"5 Cny¥", nombreMoneda:"Yuan",precioMoneda:22.91, id:"yuan"},
    {ejemplo:"5 Rub₽", nombreMoneda:"Rublo",precioMoneda:2.69, id:"rublo"},
    {ejemplo:"5 Arg$", nombreMoneda:"PesoArg",precioMoneda:1, id:"pesoArg"},
    {ejemplo:"5 Chl$", nombreMoneda:"PesoChl",precioMoneda:0.18, id:"pesoChl"},
    {ejemplo:"5 Mex$", nombreMoneda:"PesoMex",precioMoneda:8.39, id:"pesoMex"}
]
//Selecciono el div vacio con getElementById y luego hago una funcion que muestre en el html lo que necesito
const containerDivisa = document.getElementById('containerDivisa');
function seleccionDivisa(moneda){
    const {nombreMoneda, precioMoneda} = moneda

    return `<div>
                    <h3>${nombreMoneda}</h3>
                    <p>El precio es de: $${precioMoneda}</p>
                    <input type="text" id="monto">¿Cuanto deseas convertir?</input>
                    <button onclick="calcular(${precioMoneda})">Calcular</button>
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
function calcular(precioMoneda){
    let montoIngresado = document.getElementById("monto");
    let resultContainer = document.getElementById("resultado");

    let result = montoIngresado.value * precioMoneda;
    console.log(montoIngresado.value);
    console.log(result)

    resultContainer.innerHTML = `$${result}`
}