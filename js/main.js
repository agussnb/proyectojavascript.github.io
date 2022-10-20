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

//Aca voy a empezar con el for para calcular a la vez varias cantidades de plata de diferentes divisas
for(let i = 0; i<=5; i=i+1){
    function conversorDolarPeso(){
        //Agarro valores html
        let precioDolar = 291;
        let cincoDolares = document.getElementById("cincoDolares");
        let quinceDolares = document.getElementById("quinceDolares");
        let veinticincoDolares = document.getElementById("veinticincoDolares");
        let cincuentaDolares = document.getElementById("cincuentaDolares");
        //Lo mismo q arriba pero con los pesos
        let dolarConvertido = document.getElementById("pesosConvertidos")
        let dolarConvertidoDos= document.getElementById("pesosConvertidosDos")
        let dolarConvertidoTres = document.getElementById("pesosConvertidosTres")
        let dolarConvertidoCuatro = document.getElementById("pesosConvertidosCuatro")
        //Aca leo esos valores q agarre
        let valorIngresado = document.getElementById("cincoDolares").value;
        let valorIngresadoDos = document.getElementById("quinceDolares").value;
        let valorIngresadoTres = document.getElementById("veinticincoDolares").value;
        let valorIngresadoCuatro = document.getElementById("cincuentaDolares").value;
        //Hago la conversion
        let valorConvertido = valorIngresado * precioDolar;
        let valorConvertidoDos = valorIngresadoDos * precioDolar;
        let valorConvertidoTres = valorIngresadoTres * precioDolar;
        let valorConvertidoCuatro = valorIngresadoCuatro * precioDolar;
        //Y setteo los valores nuevos convertidos
        dolarConvertido.setAttribute("value", valorConvertido);
        dolarConvertidoDos.setAttribute("value", valorConvertidoDos);
        dolarConvertidoTres.setAttribute("value", valorConvertidoTres);
        dolarConvertidoCuatro.setAttribute("value", valorConvertidoCuatro);
        
    }
} 
