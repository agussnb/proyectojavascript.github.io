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

//Funcion con for para conversion de pesos a usd
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

for(let i = 0; i<=5; i=i+1){
    function conversorEuro(){
        const elementoEuro = ['primerValor','segundoValor','tercerValor','cuartoValor'];
        elementoEuro[0] = document.getElementById('cincoEuros');
        elementoEuro[1] = document.getElementById('quinceEuros');
        elementoEuro[2] = document.getElementById('veinticincoEuros');
        elementoEuro[3] = document.getElementById('cincuentaEuros');
        const precioEuro = 295;
        const elementoPesos = document.querySelectorAll(".tdPesosArg");
        //Agarro los valores de pesos
        const euroConvertido = [1,2,3,4];
        euroConvertido[0] = document.getElementById('pesosConvertidosCinco');
        euroConvertido[1] = document.getElementById('pesosConvertidosSeis');
        euroConvertido[2] = document.getElementById('pesosConvertidosSiete');
        euroConvertido[3] = document.getElementById('pesosConvertidosOcho');
        //Leo los valores que agarre
        const valorIngresadoEuro = [1,2,3,4];
        valorIngresadoEuro[0] = document.getElementById('cincoEuros').value;
        valorIngresadoEuro[1] = document.getElementById('quinceEuros').value;
        valorIngresadoEuro[2] = document.getElementById('veinticincoEuros').value;
        valorIngresadoEuro[3] = document.getElementById('cincuentaEuros').value;
        //Hago la conversion
        const valorConvertidoEuros = [1,2,3,4];
        valorConvertidoEuros[0] = valorIngresadoEuro[0] * precioEuro;
        valorConvertidoEuros[1] = valorIngresadoEuro[1] * precioEuro;
        valorConvertidoEuros[2] = valorIngresadoEuro[2] * precioEuro;
        valorConvertidoEuros[3] = valorIngresadoEuro[3] * precioEuro;
        //Seteo
        euroConvertido[0].setAttribute("value",valorConvertidoEuros[0]);
        euroConvertido[1].setAttribute("value",valorConvertidoEuros[1]);
        euroConvertido[2].setAttribute("value",valorConvertidoEuros[2]);
        euroConvertido[3].setAttribute("value",valorConvertidoEuros[3]);
    }
}
for(let i = 0; i<5; i=i1+1){
    function conversorYen(){
        const elementoYen = [0,1,2,3];
        //Agarro los valores de los yenes
        elementoYen[0] = document.getElementById('cincoYens');
        elementoYen[1] = document.getElementById('quinceYens');
        elementoYen[2] = document.getElementById('veinticincoYens');
        elementoYen[3] = document.getElementById('cincuentaYens');
        const precioYen = 1.06;
        //Agarro los valores de los pesos
        const yenConvertido = [0,1,2,3];
        yenConvertido[0] = document.getElementById('pesosConvertidosNueve');
        yenConvertido[1] = document.getElementById('pesosConvertidosDiez');
        yenConvertido[2] = document.getElementById('pesosConvertidosOnce');
        yenConvertido[3] = document.getElementById('pesosConvertidosDoce');
        //Leo los valores ingresados
        const valorIngresadoYen = [0,1,2,3];
        valorIngresadoYen[0] = document.getElementById('cincoYens').value;
        valorIngresadoYen[1] = document.getElementById('quinceYens').value;
        valorIngresadoYen[2] = document.getElementById('veinticincoYens').value;
        valorIngresadoYen[3] = document.getElementById('cincuentaYens').value;
        //Hago la conversion
        const valorConvertidoYen = [0,1,2,3];
        valorConvertidoYen[0] = valorIngresadoYen[0] * precioYen;
        valorConvertidoYen[1] = valorIngresadoYen[1] * precioYen;
        valorConvertidoYen[2] = valorIngresadoYen[2] * precioYen;
        valorConvertidoYen[3] = valorIngresadoYen[3] * precioYen;
        //Seteo los valores nuevos
        yenConvertido[0].setAttribute('value',valorConvertidoYen[0]);
        yenConvertido[1].setAttribute('value',valorConvertidoYen[1]);
        yenConvertido[2].setAttribute('value',valorConvertidoYen[2]);
        yenConvertido[3].setAttribute('value',valorConvertidoYen[3]);


    }
}


function SeleccionCriptomoneda(criptomonedaRecibida){
    this.nombre = criptomonedaRecibida
//Switch con conversor de criptos 
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
//Funcion para ocultar las criptos y que solo sean visibles cuando seleccionas una con el boton
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

//Objetos que si en algun momento necesito dejare de comentarlos
// const btc = new Criptomoneda("Bitcoin");
// const eth = new Criptomoneda("Ethereum");
// const usdc = new Criptomoneda("Usdc");
// const ltc = new Criptomoneda("Litecoin");
// const dai = new Criptomoneda("Dai");
// const uni = new Criptomoneda("Uniswap");
// const axs = new Criptomoneda("Axs");
// const xrp = new Criptomoneda("Xrp");

