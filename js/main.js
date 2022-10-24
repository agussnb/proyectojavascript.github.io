let criptoBtc = 19220.50;
function conversorCriptoBtc(){
//Obtengo elements html

let conversorCripto = document.getElementById("criptoFilaUno");
let conversorDolar = document.getElementById("dolarFilaUno");

//Escribo valores de los elementos html y leo
let valueIngresado = document.getElementById("criptoFilaUno").value;
let valueConvertido = valueIngresado * criptoBtc;

//Y aca deberia teoricamente settear los valores xd
conversorDolar.setAttribute("value" , valueConvertido);

   
}
let criptoEther = 0.00075;
function conversorCriptoEther(){
    //Obtengo los elementos de html
let conversorEther = document.getElementById("CriptoEth");
let conversorEtherDolar = document.getElementById("dolarEth")

//Escribo los valores de los elementos y los leo
let valueIngresadoDos = document.getElementById("CriptoEth").value;
let valueConvertidoDos = valueIngresadoDos / criptoEther

//Ahora setteo los valores
conversorEtherDolar.setAttribute("value", valueConvertidoDos);
}
let usdc = 0.999108
function conversorCriptoUsdc(){
    //Obtengo los elementos de html
    let conversorUsdc = document.getElementById("criptoUsdc");
    let conversorUsdcDolar = document.getElementById("dolarUsdc");
    //Escribo los valores de los elementos y los leo

    let valueIngresadoTres = document.getElementById("criptoUsdc").value;
    let valueConvertidoTres = valueIngresadoTres / usdc
    //Ahora setteo los valores
    conversorUsdcDolar.setAttribute("value",valueConvertidoTres);
}
let litecoin =53.58
function conversorCriptoLtc(){
    //Obtengo los elementos de html
    let conversorLtc = document.getElementById("criptoLitecoin");
    let conversorLtcDolar = document.getElementById("dolarLtc");
    //Escribo los valores de los elementos y los leo

    let valueIngresadoCuatro = document.getElementById("criptoLitecoin").value;
    let valueConvertidoCuatro = valueIngresadoCuatro * litecoin
        //Ahora setteo los valores
     conversorLtcDolar.setAttribute("value",valueConvertidoCuatro);
}
let dai =0.999553
function conversorCriptoDai(){
     //Obtengo los elementos de html
     let conversorDai = document.getElementById("criptoDai");
     let conversorDaiDolar = document.getElementById("dolarDai");
     //Escribo los valores de los elementos y los leo
 
     let valueIngresadoCinco = document.getElementById("criptoDai").value;
     let valueConvertidoCinco = valueIngresadoCinco * dai
         //Ahora setteo los valores
      conversorDaiDolar.setAttribute("value",valueConvertidoCinco);

}
let uni =6.28
function conversorCriptoUniswap(){
//Obtengo los elementos de html
let conversorUniswap = document.getElementById("criptoUniswap");
let conversorUniDolar = document.getElementById("dolarUniswap");
//Escribo los valores de los elementos y los leo

let valueIngresadoSeis = document.getElementById("criptoUniswap").value;
let valueConvertidoSeis = valueIngresadoSeis * uni
    //Ahora setteo los valores
 conversorUniDolar.setAttribute("value",valueConvertidoSeis);
}
let axs =0.00006691
function conversorCriptoAxs(){
//Obtengo los elementos de html
let conversorAxs = document.getElementById("criptoAxs");
let conversorAxsDolar = document.getElementById("dolarAxs");
//Escribo los valores de los elementos y los leo

let valueIngresadoSiete = document.getElementById("criptoAxs").value;
let valueConvertidoSiete = valueIngresadoSiete * axs
    //Ahora setteo los valores
 conversorAxsDolar.setAttribute("value",valueConvertidoSiete);
}
let xrp =0.462763
function conversorCriptoXrp(){
    //Obtengo los elementos de html
let conversorXrp = document.getElementById("criptoXrp");
let conversorXrpDolar = document.getElementById("dolarXrp");
//Escribo los valores de los elementos y los leo

let valueIngresadoOcho = document.getElementById("criptoXrp").value;
let valueConvertidoOcho = valueIngresadoOcho * xrp;
    //Ahora setteo los valores
 conversorXrpDolar.setAttribute("value",valueConvertidoOcho);

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
function MonedaDivisa(n, o, v,){
    this.nombre = n;
    this.origen = o;
    this.valor = v;
}
const dolar = new MonedaDivisa("Dolar", "Estados Unidos", "291");
const euro = new MonedaDivisa("Euro", "Union Europea", "313");
const yen = new MonedaDivisa("Yen", "Japon","1,02");
const realBr = new MonedaDivisa("Real Brasileño","Brasil","29,42");


function SeleccionCriptomoneda(criptomonedaRecibida){
    this.nombre = criptomonedaRecibida

switch(this.nombre){
    case "Bitcoin":
    alert("Usted eligio Bitcoin");
    ocultarTodasCriptos();
    setTimeout(()=>{let elementoBtc = document.querySelectorAll(".trBitcoin");
    elementoBtc[0].removeAttribute("hidden");
    elementoBtc[1].removeAttribute("hidden");},250)
    
  
    break;
    case "Ethereum":
     alert("Usted eligio Ethereum");
     ocultarTodasCriptos();
     setTimeout(()=>{ let elementoEth = document.querySelectorAll(".trEthereum");
     elementoEth[0].removeAttribute("hidden");
     elementoEth[1].removeAttribute("hidden");
     },250)
   
    break;
    case "Usdc":
     alert("Usted eligio Usdc");
     ocultarTodasCriptos();
     setTimeout(()=>{let elementoUsdc = document.querySelectorAll(".trUsdc");
     elementoUsdc[0].removeAttribute("hidden");
     elementoUsdc[1].removeAttribute("hidden");
     },250)
    
    break;
    case "Litecoin":
     alert("Usted eligio Litecoin");
     ocultarTodasCriptos();
     setTimeout(()=>{let elementoLtc = document.querySelectorAll(".trLitecoin");
     elementoLtc[0].removeAttribute("hidden");
     elementoLtc[1].removeAttribute("hidden");
    },250)
    
    break;
    case "Dai":
     alert("Usted eligio Dai");
     ocultarTodasCriptos();
     setTimeout(()=>{let elementoDai = document.querySelectorAll(".trDai");
     elementoDai[0].removeAttribute("hidden");
     elementoDai[1].removeAttribute("hidden");
     },250)
    
    break;
    case "Uniswap":
     alert("Usted eligio Uniswap");
     ocultarTodasCriptos();
     setTimeout(()=>{let elementoUni = document.querySelectorAll(".trUniswap");
     elementoUni[0].removeAttribute("hidden");
     elementoUni[1].removeAttribute("hidden");
     },250)
    
    break;
    case "Axs":
     alert("Usted eligio Axs");
     ocultarTodasCriptos();
     setTimeout(()=>{let elementoAxs = document.querySelectorAll(".trAxs");
     elementoAxs[0].removeAttribute("hidden");
     elementoAxs[1].removeAttribute("hidden");
     },250)
    
    break;
    case "Xrp":
     alert("Usted eligio Xrp");
     ocultarTodasCriptos();
     setTimeout(()=>{let elementoXrp = document.querySelectorAll(".trXrp");
     elementoXrp[0].removeAttribute("hidden");
     elementoXrp[1].removeAttribute("hidden");
    },250)
    
    break;
    // default: 
    // Criptomoneda =alert("La criptomoneda que selecciono no es soportada por esta pagina o es incorrecta");
}
}
function ocultarTodasCriptos(){
    let elementoBtc = document.querySelectorAll(".trBitcoin");
    elementoBtc[0].setAttribute("hidden", 'true');
    elementoBtc[1].setAttribute("hidden",'true');

    let elementoEtc = document.querySelectorAll(".trEthereum");
    elementoEtc[0].setAttribute("hidden", 'true');
    elementoEtc[1].setAttribute("hidden",'true');

    let elementoUsdc= document.querySelectorAll(".trUsdc");
    elementoUsdc[0].setAttribute("hidden", 'true');
    elementoUsdc[1].setAttribute("hidden",'true');

    let elementoLtc = document.querySelectorAll(".trLitecoin");
    elementoLtc[0].setAttribute("hidden", 'true');
    elementoLtc[1].setAttribute("hidden",'true');

    let elementoDai = document.querySelectorAll(".trDai");
    elementoDai[0].setAttribute("hidden", 'true');
    elementoDai[1].setAttribute("hidden",'true');

    let elementoUni = document.querySelectorAll(".trUniswap");
    elementoUni[0].setAttribute("hidden", 'true');
    elementoUni[1].setAttribute("hidden",'true');

    let elementoAxs = document.querySelectorAll(".trAxs");
    elementoAxs[0].setAttribute("hidden", 'true');
    elementoAxs[1].setAttribute("hidden",'true');

    let elementoXrp = document.querySelectorAll(".trXrp");
    elementoXrp[0].setAttribute("hidden", 'true');
    elementoXrp[1].setAttribute("hidden",'true');

    

}

// const btc = new Criptomoneda("Bitcoin");
// const eth = new Criptomoneda("Ethereum");
// const usdc = new Criptomoneda("Usdc");
// const ltc = new Criptomoneda("Litecoin");
// const dai = new Criptomoneda("Dai");
// const uni = new Criptomoneda("Uniswap");
// const axs = new Criptomoneda("Axs");
// const xrp = new Criptomoneda("Xrp");

