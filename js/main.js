let criptoBtc = 19220.50;

function conversorCriptoBtc(){
//Obtengo elements html
let conversorDolar = document.getElementById("dolarFilaUno");
let conversorCripto = document.getElementById("criptoFilaUno");

//Escribo valores de los elementos html y leo
let  valueIngresado = document.getElementById("dolarFilaUno").value;
let valueConvertido = valueIngresado / criptoBtc

//Y aca deberia teoricamente settear los valores xd
conversorCripto.setAttribute("value" , valueConvertido);

    // console.log('El valor de calculodoDolarCripto es ' + conversorCripto)
}
let criptoEther = 14.75;
function conversorCriptoEther(){
    //Obtengo los elementos de html
let conversorBtc = document.getElementById("btcFilaDos");
let conversorEther = document.getElementById("etherFilaDos")

//Escribo los valores de los elementos y los leo
let valueIngresadoDos = document.getElementById("btcFilaDos").value;
let valueConvertidoDos = valueIngresadoDos * criptoEther

//Ahora setteo los valores
conversorEther.setAttribute("value", valueConvertidoDos);
}
