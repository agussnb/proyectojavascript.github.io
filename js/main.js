let criptoBtc = 19220.50;

function conversorCripto(){
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