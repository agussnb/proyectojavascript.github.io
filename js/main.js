let criptoBtc = 19220.50;

function conversorCriptoBtc() {
    //Obtengo elements html

    let conversorCripto = document.getElementById("criptoFilaUno");
    let conversorDolar = document.getElementById("dolarFilaUno");

    //Escribo valores de los elementos html y leo
    let valueIngresado = document.getElementById("criptoFilaUno").value;
    let valueConvertido = valueIngresado * criptoBtc;

    //Y aca deberia teoricamente settear los valores xd
    conversorDolar.setAttribute("value", valueConvertido);


}
let criptoEther = 0.00075;

function conversorCriptoEther() {
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

function conversorCriptoUsdc() {
    //Obtengo los elementos de html
    let conversorUsdc = document.getElementById("criptoUsdc");
    let conversorUsdcDolar = document.getElementById("dolarUsdc");
    //Escribo los valores de los elementos y los leo

    let valueIngresadoTres = document.getElementById("criptoUsdc").value;
    let valueConvertidoTres = valueIngresadoTres / usdc
    //Ahora setteo los valores
    conversorUsdcDolar.setAttribute("value", valueConvertidoTres);
}
let litecoin = 53.58

function conversorCriptoLtc() {
    //Obtengo los elementos de html
    let conversorLtc = document.getElementById("criptoLitecoin");
    let conversorLtcDolar = document.getElementById("dolarLtc");
    //Escribo los valores de los elementos y los leo

    let valueIngresadoCuatro = document.getElementById("criptoLitecoin").value;
    let valueConvertidoCuatro = valueIngresadoCuatro * litecoin
    //Ahora setteo los valores
    conversorLtcDolar.setAttribute("value", valueConvertidoCuatro);
}
let dai = 0.999553

function conversorCriptoDai() {
    //Obtengo los elementos de html
    let conversorDai = document.getElementById("criptoDai");
    let conversorDaiDolar = document.getElementById("dolarDai");
    //Escribo los valores de los elementos y los leo

    let valueIngresadoCinco = document.getElementById("criptoDai").value;
    let valueConvertidoCinco = valueIngresadoCinco * dai
    //Ahora setteo los valores
    conversorDaiDolar.setAttribute("value", valueConvertidoCinco);

}
let uni = 6.28

function conversorCriptoUniswap() {
    //Obtengo los elementos de html
    let conversorUniswap = document.getElementById("criptoUniswap");
    let conversorUniDolar = document.getElementById("dolarUniswap");
    //Escribo los valores de los elementos y los leo

    let valueIngresadoSeis = document.getElementById("criptoUniswap").value;
    let valueConvertidoSeis = valueIngresadoSeis * uni
    //Ahora setteo los valores
    conversorUniDolar.setAttribute("value", valueConvertidoSeis);
}
let axs = 0.00006691

function conversorCriptoAxs() {
    //Obtengo los elementos de html
    let conversorAxs = document.getElementById("criptoAxs");
    let conversorAxsDolar = document.getElementById("dolarAxs");
    //Escribo los valores de los elementos y los leo

    let valueIngresadoSiete = document.getElementById("criptoAxs").value;
    let valueConvertidoSiete = valueIngresadoSiete * axs
    //Ahora setteo los valores
    conversorAxsDolar.setAttribute("value", valueConvertidoSiete);
}
let xrp = 0.462763

function conversorCriptoXrp() {
    //Obtengo los elementos de html
    let conversorXrp = document.getElementById("criptoXrp");
    let conversorXrpDolar = document.getElementById("dolarXrp");
    //Escribo los valores de los elementos y los leo

    let valueIngresadoOcho = document.getElementById("criptoXrp").value;
    let valueConvertidoOcho = valueIngresadoOcho * xrp;
    //Ahora setteo los valores
    conversorXrpDolar.setAttribute("value", valueConvertidoOcho);

}

//For con funcion para convertir de dolar a peso arg
for (let i = 0; i <= 5; i = i + 1) {
    function conversorDolarPeso() {
        //Agarro valores html
        let precioDolar = 291;
        let cincoDolares = document.getElementById("cincoDolares");
        let quinceDolares = document.getElementById("quinceDolares");
        let veinticincoDolares = document.getElementById("veinticincoDolares");
        let cincuentaDolares = document.getElementById("cincuentaDolares");
        //Lo mismo q arriba pero con los pesos
        let dolarConvertido = document.getElementById("pesosConvertidos")
        let dolarConvertidoDos = document.getElementById("pesosConvertidosDos")
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
        setearValores(valorConvertido, valorConvertidoDos, valorConvertidoTres, valorConvertidoCuatro)

    }
    function setearValores(valorConvertido, valorConvertidoDos, valorConvertidoTres, valorConvertidoCuatro){
        let dolarConvertido = document.getElementById("pesosConvertidos")
        let dolarConvertidoDos = document.getElementById("pesosConvertidosDos")
        let dolarConvertidoTres = document.getElementById("pesosConvertidosTres")
        let dolarConvertidoCuatro = document.getElementById("pesosConvertidosCuatro")

        dolarConvertido.setAttribute("value", valorConvertido);
        dolarConvertidoDos.setAttribute("value", valorConvertidoDos);
        dolarConvertidoTres.setAttribute("value", valorConvertidoTres);
        dolarConvertidoCuatro.setAttribute("value", valorConvertidoCuatro);
   }
}
//For con funcion para convertir de euro a peso arg
for (let i = 0; i <= 5; i = i + 1) {
    function conversorEuro() {
        const elementoEuro = ['primerValor', 'segundoValor', 'tercerValor', 'cuartoValor'];
        elementoEuro[0] = document.getElementById('cincoEuros');
        elementoEuro[1] = document.getElementById('quinceEuros');
        elementoEuro[2] = document.getElementById('veinticincoEuros');
        elementoEuro[3] = document.getElementById('cincuentaEuros');
        const precioEuro = 295;
        const elementoPesos = document.querySelectorAll(".tdPesosArg");
        //Agarro los valores de pesos
        const euroConvertido = [1, 2, 3, 4];
        euroConvertido[0] = document.getElementById('pesosConvertidosCinco');
        euroConvertido[1] = document.getElementById('pesosConvertidosSeis');
        euroConvertido[2] = document.getElementById('pesosConvertidosSiete');
        euroConvertido[3] = document.getElementById('pesosConvertidosOcho');
        //Leo los valores que agarre
        const valorIngresadoEuro = [1, 2, 3, 4];
        valorIngresadoEuro[0] = document.getElementById('cincoEuros').value;
        valorIngresadoEuro[1] = document.getElementById('quinceEuros').value;
        valorIngresadoEuro[2] = document.getElementById('veinticincoEuros').value;
        valorIngresadoEuro[3] = document.getElementById('cincuentaEuros').value;
        //Hago la conversion
        const valorConvertidoEuros = [1, 2, 3, 4];
        valorConvertidoEuros[0] = valorIngresadoEuro[0] * precioEuro;
        valorConvertidoEuros[1] = valorIngresadoEuro[1] * precioEuro;
        valorConvertidoEuros[2] = valorIngresadoEuro[2] * precioEuro;
        valorConvertidoEuros[3] = valorIngresadoEuro[3] * precioEuro;
        //Seteo
        euroConvertido[0].setAttribute("value", valorConvertidoEuros[0]);
        euroConvertido[1].setAttribute("value", valorConvertidoEuros[1]);
        euroConvertido[2].setAttribute("value", valorConvertidoEuros[2]);
        euroConvertido[3].setAttribute("value", valorConvertidoEuros[3]);
    }
}
//For con funcion para convertir de yen a peso arg
for (let i = 0; i < 5; i = i + 1) {
    function conversorYen() {
        const elementoYen = [0, 1, 2, 3];
        //Agarro los valores de los yenes
        elementoYen[0] = document.getElementById('cincoYens');
        elementoYen[1] = document.getElementById('quinceYens');
        elementoYen[2] = document.getElementById('veinticincoYens');
        elementoYen[3] = document.getElementById('cincuentaYens');
        const precioYen = 1.06;
        //Agarro los valores de los pesos
        const yenConvertido = [0, 1, 2, 3];
        yenConvertido[0] = document.getElementById('pesosConvertidosNueve');
        yenConvertido[1] = document.getElementById('pesosConvertidosDiez');
        yenConvertido[2] = document.getElementById('pesosConvertidosOnce');
        yenConvertido[3] = document.getElementById('pesosConvertidosDoce');
        //Leo los valores ingresados
        const valorIngresadoYen = [0, 1, 2, 3];
        valorIngresadoYen[0] = document.getElementById('cincoYens').value;
        valorIngresadoYen[1] = document.getElementById('quinceYens').value;
        valorIngresadoYen[2] = document.getElementById('veinticincoYens').value;
        valorIngresadoYen[3] = document.getElementById('cincuentaYens').value;
        //Hago la conversion
        const valorConvertidoYen = [0, 1, 2, 3];
        valorConvertidoYen[0] = valorIngresadoYen[0] * precioYen;
        valorConvertidoYen[1] = valorIngresadoYen[1] * precioYen;
        valorConvertidoYen[2] = valorIngresadoYen[2] * precioYen;
        valorConvertidoYen[3] = valorIngresadoYen[3] * precioYen;
        //Seteo los valores nuevos
        yenConvertido[0].setAttribute('value', valorConvertidoYen[0]);
        yenConvertido[1].setAttribute('value', valorConvertidoYen[1]);
        yenConvertido[2].setAttribute('value', valorConvertidoYen[2]);
        yenConvertido[3].setAttribute('value', valorConvertidoYen[3]);
    }
}
//For con funcion para convertir de yuan a peso arg
for (let i = 0; i < 5; i = i + 1) {
    function conversorYuan() {
        const elementoYuan = [0, 1, 2, 3];
        //Agarro los valores de los Yuans
        elementoYuan[0] = document.getElementById('cincoYuans');
        elementoYuan[1] = document.getElementById('quinceYuans');
        elementoYuan[2] = document.getElementById('veinticincoYuans');
        elementoYuan[3] = document.getElementById('cincuentaYuans');
        const precioYuan = 22.03;
        //Agarro los valores de los pesos
        const YuanConvertido = [0, 1, 2, 3];
        YuanConvertido[0] = document.getElementById('pesosConvertidosTrece');
        YuanConvertido[1] = document.getElementById('pesosConvertidosCatorce');
        YuanConvertido[2] = document.getElementById('pesosConvertidosQuince');
        YuanConvertido[3] = document.getElementById('pesosConvertidosDieciseis');
        //Leo los valores ingresados
        const valorIngresadoYuan = [0, 1, 2, 3];
        valorIngresadoYuan[0] = document.getElementById('cincoYuans').value;
        valorIngresadoYuan[1] = document.getElementById('quinceYuans').value;
        valorIngresadoYuan[2] = document.getElementById('veinticincoYuans').value;
        valorIngresadoYuan[3] = document.getElementById('cincuentaYuans').value;
        //Hago la conversion
        const valorConvertidoYuan = [0, 1, 2, 3];
        valorConvertidoYuan[0] = valorIngresadoYuan[0] * precioYuan;
        valorConvertidoYuan[1] = valorIngresadoYuan[1] * precioYuan;
        valorConvertidoYuan[2] = valorIngresadoYuan[2] * precioYuan;
        valorConvertidoYuan[3] = valorIngresadoYuan[3] * precioYuan;
        //Seteo los valores nuevos
        YuanConvertido[0].setAttribute('value', valorConvertidoYuan[0]);
        YuanConvertido[1].setAttribute('value', valorConvertidoYuan[1]);
        YuanConvertido[2].setAttribute('value', valorConvertidoYuan[2]);
        YuanConvertido[3].setAttribute('value', valorConvertidoYuan[3]);
    }
}
//For con funcion para convertir de rublo a peso arg
for (let i = 0; i < 5; i = i + 1) {
    function conversorRublo() {
        const elementoRublo = [0, 1, 2, 3];
        //Agarro los valores de los Rublos
        elementoRublo[0] = document.getElementById('cincoRublos');
        elementoRublo[1] = document.getElementById('quinceRublos');
        elementoRublo[2] = document.getElementById('veinticincoRublos');
        elementoRublo[3] = document.getElementById('cincuentaRublos');
        const precioRublo = 2.55;
        //Agarro los valores de los pesos
        const RubloConvertido = [0, 1, 2, 3];
        RubloConvertido[0] = document.getElementById('pesosConvertidosDiecisiete');
        RubloConvertido[1] = document.getElementById('pesosConvertidosDieciocho');
        RubloConvertido[2] = document.getElementById('pesosConvertidosDiecinueve');
        RubloConvertido[3] = document.getElementById('pesosConvertidosVeinte');
        //Leo los valores ingresados
        const valorIngresadoRublo = [0, 1, 2, 3];
        valorIngresadoRublo[0] = document.getElementById('cincoRublos').value;
        valorIngresadoRublo[1] = document.getElementById('quinceRublos').value;
        valorIngresadoRublo[2] = document.getElementById('veinticincoRublos').value;
        valorIngresadoRublo[3] = document.getElementById('cincuentaRublos').value;
        //Hago la conversion
        const valorConvertidoRublo = [0, 1, 2, 3];
        valorConvertidoRublo[0] = valorIngresadoRublo[0] * precioRublo;
        valorConvertidoRublo[1] = valorIngresadoRublo[1] * precioRublo;
        valorConvertidoRublo[2] = valorIngresadoRublo[2] * precioRublo;
        valorConvertidoRublo[3] = valorIngresadoRublo[3] * precioRublo;
        //Seteo los valores nuevos
        RubloConvertido[0].setAttribute('value', valorConvertidoRublo[0]);
        RubloConvertido[1].setAttribute('value', valorConvertidoRublo[1]);
        RubloConvertido[2].setAttribute('value', valorConvertidoRublo[2]);
        RubloConvertido[3].setAttribute('value', valorConvertidoRublo[3]);
    }
}
//For con funcion para convertir de peso chileno a peso arg
for (let i = 0; i < 5; i = i + 1) {
    function conversorPesoChileno() {
        const elementoPesoChileno = [0, 1, 2, 3];
        //Agarro los valores de los PesoChilenos
        elementoPesoChileno[0] = document.getElementById('cincoPesosChilenos');
        elementoPesoChileno[1] = document.getElementById('quincePesosChilenos');
        elementoPesoChileno[2] = document.getElementById('veinticincoPesosChilenos');
        elementoPesoChileno[3] = document.getElementById('cincuentaPesosChilenos');
        const precioPesoChileno = 0.17;
        //Agarro los valores de los pesos
        const PesoChilenoConvertido = [0, 1, 2, 3];
        PesoChilenoConvertido[0] = document.getElementById('pesosConvertidosVeintiuno');
        PesoChilenoConvertido[1] = document.getElementById('pesosConvertidosVeintidos');
        PesoChilenoConvertido[2] = document.getElementById('pesosConvertidosVeintitres');
        PesoChilenoConvertido[3] = document.getElementById('pesosConvertidosVeinticuatro');
        //Leo los valores ingresados
        const valorIngresadoPesoChileno = [0, 1, 2, 3];
        valorIngresadoPesoChileno[0] = document.getElementById('cincoPesosChilenos').value;
        valorIngresadoPesoChileno[1] = document.getElementById('quincePesosChilenos').value;
        valorIngresadoPesoChileno[2] = document.getElementById('veinticincoPesosChilenos').value;
        valorIngresadoPesoChileno[3] = document.getElementById('cincuentaPesosChilenos').value;
        //Hago la conversion
        const valorConvertidoPesoChileno = [0, 1, 2, 3];
        valorConvertidoPesoChileno[0] = valorIngresadoPesoChileno[0] * precioPesoChileno;
        valorConvertidoPesoChileno[1] = valorIngresadoPesoChileno[1] * precioPesoChileno;
        valorConvertidoPesoChileno[2] = valorIngresadoPesoChileno[2] * precioPesoChileno;
        valorConvertidoPesoChileno[3] = valorIngresadoPesoChileno[3] * precioPesoChileno;
        //Seteo los valores nuevos
        PesoChilenoConvertido[0].setAttribute('value', valorConvertidoPesoChileno[0]);
        PesoChilenoConvertido[1].setAttribute('value', valorConvertidoPesoChileno[1]);
        PesoChilenoConvertido[2].setAttribute('value', valorConvertidoPesoChileno[2]);
        PesoChilenoConvertido[3].setAttribute('value', valorConvertidoPesoChileno[3]);
    }
}
//For con funcion para convertir de peso mex a peso arg
for (let i = 0; i < 5; i = i + 1) {
    function conversorPesoMexicano() {
        const elementoPesoMexicano = [0, 1, 2, 3];
        //Agarro los valores de los PesoMexicanos
        elementoPesoMexicano[0] = document.getElementById('cincoPesosMexicanos');
        elementoPesoMexicano[1] = document.getElementById('quincePesosMexicanos');
        elementoPesoMexicano[2] = document.getElementById('veinticincoPesosMexicanos');
        elementoPesoMexicano[3] = document.getElementById('cincuentaPesosMexicanos');
        const precioPesoMexicano = 8.10;
        //Agarro los valores de los pesos
        const PesoMexicanoConvertido = [0, 1, 2, 3];
        PesoMexicanoConvertido[0] = document.getElementById('pesosConvertidosVeinticinco');
        PesoMexicanoConvertido[1] = document.getElementById('pesosConvertidosVeintiseis');
        PesoMexicanoConvertido[2] = document.getElementById('pesosConvertidosVeintisiete');
        PesoMexicanoConvertido[3] = document.getElementById('pesosConvertidosVeintiocho');
        //Leo los valores ingresados
        const valorIngresadoPesoMexicano = [0, 1, 2, 3];
        valorIngresadoPesoMexicano[0] = document.getElementById('cincoPesosMexicanos').value;
        valorIngresadoPesoMexicano[1] = document.getElementById('quincePesosMexicanos').value;
        valorIngresadoPesoMexicano[2] = document.getElementById('veinticincoPesosMexicanos').value;
        valorIngresadoPesoMexicano[3] = document.getElementById('cincuentaPesosMexicanos').value;
        //Hago la conversion
        const valorConvertidoPesoMexicano = [0, 1, 2, 3];
        valorConvertidoPesoMexicano[0] = valorIngresadoPesoMexicano[0] * precioPesoMexicano;
        valorConvertidoPesoMexicano[1] = valorIngresadoPesoMexicano[1] * precioPesoMexicano;
        valorConvertidoPesoMexicano[2] = valorIngresadoPesoMexicano[2] * precioPesoMexicano;
        valorConvertidoPesoMexicano[3] = valorIngresadoPesoMexicano[3] * precioPesoMexicano;
        //Seteo los valores nuevos
        PesoMexicanoConvertido[0].setAttribute('value', valorConvertidoPesoMexicano[0]);
        PesoMexicanoConvertido[1].setAttribute('value', valorConvertidoPesoMexicano[1]);
        PesoMexicanoConvertido[2].setAttribute('value', valorConvertidoPesoMexicano[2]);
        PesoMexicanoConvertido[3].setAttribute('value', valorConvertidoPesoMexicano[3]);
    }
}

function SeleccionCriptomoneda(criptomonedaRecibida) {
    this.nombre = criptomonedaRecibida
    //Switch con conversor de criptos 
    switch (this.nombre) {
        case "Bitcoin":
            ocultarTodasCriptos();
            setTimeout(() => {
                let elementoBtc = document.querySelectorAll(".trBitcoin");
                elementoBtc[0].removeAttribute("hidden");
                elementoBtc[1].removeAttribute("hidden");
            }, 250)

            break;
        case "Ethereum":
            ocultarTodasCriptos();
            setTimeout(() => {
                let elementoEth = document.querySelectorAll(".trEthereum");
                elementoEth[0].removeAttribute("hidden");
                elementoEth[1].removeAttribute("hidden");
            }, 250)

            break;
        case "Usdc":
            ocultarTodasCriptos();
            setTimeout(() => {
                let elementoUsdc = document.querySelectorAll(".trUsdc");
                elementoUsdc[0].removeAttribute("hidden");
                elementoUsdc[1].removeAttribute("hidden");
            }, 250)

            break;
        case "Litecoin":
            ocultarTodasCriptos();
            setTimeout(() => {
                let elementoLtc = document.querySelectorAll(".trLitecoin");
                elementoLtc[0].removeAttribute("hidden");
                elementoLtc[1].removeAttribute("hidden");
            }, 250)

            break;
        case "Dai":
            ocultarTodasCriptos();
            setTimeout(() => {
                let elementoDai = document.querySelectorAll(".trDai");
                elementoDai[0].removeAttribute("hidden");
                elementoDai[1].removeAttribute("hidden");
            }, 250)

            break;
        case "Uniswap":
            ocultarTodasCriptos();
            setTimeout(() => {
                let elementoUni = document.querySelectorAll(".trUniswap");
                elementoUni[0].removeAttribute("hidden");
                elementoUni[1].removeAttribute("hidden");
            }, 250)

            break;
        case "Axs":
            ocultarTodasCriptos();
            setTimeout(() => {
                let elementoAxs = document.querySelectorAll(".trAxs");
                elementoAxs[0].removeAttribute("hidden");
                elementoAxs[1].removeAttribute("hidden");
            }, 250)

            break;
        case "Xrp":
            ocultarTodasCriptos();
            setTimeout(() => {
                let elementoXrp = document.querySelectorAll(".trXrp");
                elementoXrp[0].removeAttribute("hidden");
                elementoXrp[1].removeAttribute("hidden");
            }, 250)

            break;
            // default: 

    }
}
//Funcion para ocultar las criptos y que solo sean visibles cuando seleccionas una con el boton
function ocultarTodasCriptos() {
    let elementoBtc = document.querySelectorAll(".trBitcoin");
    elementoBtc[0].setAttribute("hidden", 'true');
    elementoBtc[1].setAttribute("hidden", 'true');

    let elementoEtc = document.querySelectorAll(".trEthereum");
    elementoEtc[0].setAttribute("hidden", 'true');
    elementoEtc[1].setAttribute("hidden", 'true');

    let elementoUsdc = document.querySelectorAll(".trUsdc");
    elementoUsdc[0].setAttribute("hidden", 'true');
    elementoUsdc[1].setAttribute("hidden", 'true');

    let elementoLtc = document.querySelectorAll(".trLitecoin");
    elementoLtc[0].setAttribute("hidden", 'true');
    elementoLtc[1].setAttribute("hidden", 'true');

    let elementoDai = document.querySelectorAll(".trDai");
    elementoDai[0].setAttribute("hidden", 'true');
    elementoDai[1].setAttribute("hidden", 'true');

    let elementoUni = document.querySelectorAll(".trUniswap");
    elementoUni[0].setAttribute("hidden", 'true');
    elementoUni[1].setAttribute("hidden", 'true');

    let elementoAxs = document.querySelectorAll(".trAxs");
    elementoAxs[0].setAttribute("hidden", 'true');
    elementoAxs[1].setAttribute("hidden", 'true');

    let elementoXrp = document.querySelectorAll(".trXrp");
    elementoXrp[0].setAttribute("hidden", 'true');
    elementoXrp[1].setAttribute("hidden", 'true');
}
//Funcion para seleccionar divisa
function SeleccionDivisa(divisaRecibida) {
    this.nombreDivisa = divisaRecibida;
    switch (this.nombreDivisa) {
        case "Dolar":
            console.log("Entre en case dolar")
            ocultarTodasDivisas();
            console.log("sigo en el case dolar")
            setTimeout(() => {
                let elementoDolar = document.querySelectorAll(".trDolar");
                elementoDolar[0].removeAttribute("hidden");
                elementoDolar[1].removeAttribute("hidden");
                elementoDolar[2].removeAttribute("hidden");
                elementoDolar[3].removeAttribute("hidden");
                elementoDolar[4].removeAttribute("hidden");
                elementoDolar[5].removeAttribute("hidden");
                elementoDolar[6].removeAttribute("hidden");
                elementoDolar[7].removeAttribute("hidden");
                elementoDolar[8].removeAttribute("hidden");
            }, 250)
            break;
        case "Euro":
            console.log("Entre en el case euro");
            ocultarTodasDivisas();
            console.log("sigo en el case euro");
            setTimeout(() => {
                let elementoEuro = document.querySelectorAll(".trEuro");
                elementoEuro[0].removeAttribute("hidden");
                elementoEuro[1].removeAttribute("hidden");
                elementoEuro[2].removeAttribute("hidden");
                elementoEuro[3].removeAttribute("hidden");
                elementoEuro[4].removeAttribute("hidden");
                elementoEuro[5].removeAttribute("hidden");
                elementoEuro[6].removeAttribute("hidden");
                elementoEuro[7].removeAttribute("hidden");
                elementoEuro[8].removeAttribute("hidden");
            }, 250)
            break;
        case "Yen":
            console.log("Entre en el case yen");
            ocultarTodasDivisas();
            console.log("sigo en el case yen");
            setTimeout(() => {
                let elementoYen = document.querySelectorAll(".trYen");
                elementoYen[0].removeAttribute("hidden");
                elementoYen[1].removeAttribute("hidden");
                elementoYen[2].removeAttribute("hidden");
                elementoYen[3].removeAttribute("hidden");
                elementoYen[4].removeAttribute("hidden");
                elementoYen[5].removeAttribute("hidden");
                elementoYen[6].removeAttribute("hidden");
                elementoYen[7].removeAttribute("hidden");
                elementoYen[8].removeAttribute("hidden");
            }, 250)
            break;
        case "Yuan":
            console.log("Entre en el case yuan");
            ocultarTodasDivisas();
            console.log("sigo en el case Yuan");
            setTimeout(() => {
                let elementoYuan = document.querySelectorAll(".trYuan");
                elementoYuan[0].removeAttribute("hidden");
                elementoYuan[1].removeAttribute("hidden");
                elementoYuan[2].removeAttribute("hidden");
                elementoYuan[3].removeAttribute("hidden");
                elementoYuan[4].removeAttribute("hidden");
                elementoYuan[5].removeAttribute("hidden");
                elementoYuan[6].removeAttribute("hidden");
                elementoYuan[7].removeAttribute("hidden");
                elementoYuan[8].removeAttribute("hidden");
            }, 250)
            break;
        case "Rublo":
            console.log("Entre en el case Rublo");
            ocultarTodasDivisas();
            console.log("sigo en el case Rublo");
            setTimeout(() => {
                let elementoRublo = document.querySelectorAll(".trRublo");
                elementoRublo[0].removeAttribute("hidden");
                elementoRublo[1].removeAttribute("hidden");
                elementoRublo[2].removeAttribute("hidden");
                elementoRublo[3].removeAttribute("hidden");
                elementoRublo[4].removeAttribute("hidden");
                elementoRublo[5].removeAttribute("hidden");
                elementoRublo[6].removeAttribute("hidden");
                elementoRublo[7].removeAttribute("hidden");
                elementoRublo[8].removeAttribute("hidden");
            }, 250)
            break;
            case "PesoChileno":
                console.log("Entre en el case PesoChileno");
                ocultarTodasDivisas();
                console.log("sigo en el case PesoChileno");
                setTimeout(() => {
                    let elementoPesoChileno = document.querySelectorAll(".trPesoChileno");
                    elementoPesoChileno[0].removeAttribute("hidden");
                    elementoPesoChileno[1].removeAttribute("hidden");
                    elementoPesoChileno[2].removeAttribute("hidden");
                    elementoPesoChileno[3].removeAttribute("hidden");
                    elementoPesoChileno[4].removeAttribute("hidden");
                    elementoPesoChileno[5].removeAttribute("hidden");
                    elementoPesoChileno[6].removeAttribute("hidden");
                    elementoPesoChileno[7].removeAttribute("hidden");
                    elementoPesoChileno[8].removeAttribute("hidden");
                }, 250)
                break;
                case "PesoMexicano":
                    console.log("Entre en el case PesoMexicano");
                    ocultarTodasDivisas();
                    console.log("sigo en el case PesoMexicano");
                    setTimeout(() => {
                        let elementoPesoMexicano = document.querySelectorAll(".trPesoMexicano");
                        elementoPesoMexicano[0].removeAttribute("hidden");
                        elementoPesoMexicano[1].removeAttribute("hidden");
                        elementoPesoMexicano[2].removeAttribute("hidden");
                        elementoPesoMexicano[3].removeAttribute("hidden");
                        elementoPesoMexicano[4].removeAttribute("hidden");
                        elementoPesoMexicano[5].removeAttribute("hidden");
                        elementoPesoMexicano[6].removeAttribute("hidden");
                        elementoPesoMexicano[7].removeAttribute("hidden");
                        elementoPesoMexicano[8].removeAttribute("hidden");
                    }, 250)
                    break;
            }
}

//Funcion para ocultar las divisas
function ocultarTodasDivisas() {
    //Dolar
    let elementoDolar = document.querySelectorAll(".trDolar");
    elementoDolar[0].setAttribute("hidden", "true");
    elementoDolar[1].setAttribute("hidden", "true");
    elementoDolar[2].setAttribute("hidden", "true");
    elementoDolar[3].setAttribute("hidden", "true");
    elementoDolar[4].setAttribute("hidden", "true");
    elementoDolar[5].setAttribute("hidden", "true");
    elementoDolar[6].setAttribute("hidden", "true");
    elementoDolar[7].setAttribute("hidden", "true");
    elementoDolar[8].setAttribute("hidden", "true");
    //Euro
    let elementoEuro = document.querySelectorAll(".trEuro");
    elementoEuro[0].setAttribute("hidden", "true");
    elementoEuro[1].setAttribute("hidden", "true");
    elementoEuro[2].setAttribute("hidden", "true");
    elementoEuro[3].setAttribute("hidden", "true");
    elementoEuro[4].setAttribute("hidden", "true");
    elementoEuro[5].setAttribute("hidden", "true");
    elementoEuro[6].setAttribute("hidden", "true");
    elementoEuro[7].setAttribute("hidden", "true");
    elementoEuro[8].setAttribute("hidden", "true");
    //Yen
    let elementoYen = document.querySelectorAll(".trYen");
    elementoYen[0].setAttribute("hidden", "true");
    elementoYen[1].setAttribute("hidden", "true");
    elementoYen[2].setAttribute("hidden", "true");
    elementoYen[3].setAttribute("hidden", "true");
    elementoYen[4].setAttribute("hidden", "true");
    elementoYen[5].setAttribute("hidden", "true");
    elementoYen[6].setAttribute("hidden", "true");
    elementoYen[7].setAttribute("hidden", "true");
    elementoYen[8].setAttribute("hidden", "true");
    //Yuan
    let elementoYuan = document.querySelectorAll(".trYuan");
    elementoYuan[0].setAttribute("hidden", "true");
    elementoYuan[1].setAttribute("hidden", "true");
    elementoYuan[2].setAttribute("hidden", "true");
    elementoYuan[3].setAttribute("hidden", "true");
    elementoYuan[4].setAttribute("hidden", "true");
    elementoYuan[5].setAttribute("hidden", "true");
    elementoYuan[6].setAttribute("hidden", "true");
    elementoYuan[7].setAttribute("hidden", "true");
    elementoYuan[8].setAttribute("hidden", "true");
    //Rublo
    let elementoRublo = document.querySelectorAll(".trRublo");
    elementoRublo[0].setAttribute("hidden", "true");
    elementoRublo[1].setAttribute("hidden", "true");
    elementoRublo[2].setAttribute("hidden", "true");
    elementoRublo[3].setAttribute("hidden", "true");
    elementoRublo[4].setAttribute("hidden", "true");
    elementoRublo[5].setAttribute("hidden", "true");
    elementoRublo[6].setAttribute("hidden", "true");
    elementoRublo[7].setAttribute("hidden", "true");
    elementoRublo[8].setAttribute("hidden", "true");
    //Peso Chileno
    let elementoPesoChileno = document.querySelectorAll(".trPesoChileno");
    elementoPesoChileno[0].setAttribute("hidden", "true");
    elementoPesoChileno[1].setAttribute("hidden", "true");
    elementoPesoChileno[2].setAttribute("hidden", "true");
    elementoPesoChileno[3].setAttribute("hidden", "true");
    elementoPesoChileno[4].setAttribute("hidden", "true");
    elementoPesoChileno[5].setAttribute("hidden", "true");
    elementoPesoChileno[6].setAttribute("hidden", "true");
    elementoPesoChileno[7].setAttribute("hidden", "true");
    elementoPesoChileno[8].setAttribute("hidden", "true");
    //Peso Mexicano
    let elementoPesoMexicano = document.querySelectorAll(".trPesoMexicano");
    elementoPesoMexicano[0].setAttribute("hidden", "true");
    elementoPesoMexicano[1].setAttribute("hidden", "true");
    elementoPesoMexicano[2].setAttribute("hidden", "true");
    elementoPesoMexicano[3].setAttribute("hidden", "true");
    elementoPesoMexicano[4].setAttribute("hidden", "true");
    elementoPesoMexicano[5].setAttribute("hidden", "true");
    elementoPesoMexicano[6].setAttribute("hidden", "true");
    elementoPesoMexicano[7].setAttribute("hidden", "true");
    elementoPesoMexicano[8].setAttribute("hidden", "true");
}
//Funcion para saber si una criptomoneda esta o no en la pagina

    // const criptomonedaSeleccionado = [{nombre:'Bitcoin'},
    // {nombre:'Ethereum'},
    // {nombre:'Usdc'},
    // {nombre:'Litecoin'},
    // {nombre:'Dai'},
    // {nombre:'Uniswap'},
    // {nombre:'Axs'},
    // {nombre:'Xrp'}]
    // const divisaSeleccionado = [{nombre:'Dolar'},
    // {nombre:'Euro'},
    // {nombre:'Yen'},
    // {nombre:'Yuan'},
    // {nombre:'Rublo'},
    // {nombre:'Peso Argentino'},
    // {nombre:'Peso Chileno'},
    // {nombre:'Peso Mexicano'}]
let criptoRecibido; 
let divisaRecibida;
function cargarCriptoSeleccionada(nombreCriptoRecibido){
  
    let botonCriptoHtml = document.getElementById('criptoIntroducida');
    botonCriptoHtml.setAttribute("value",nombreCriptoRecibido);

   criptoRecibido = nombreCriptoRecibido;

}
function cargarDivisaSeleccionada(nombreDivisaRecibida){
    let botonDivisaHtml = document.getElementById('divisaIntroducida');
    botonDivisaHtml.setAttribute("value",nombreDivisaRecibida);

   divisaRecibida = nombreDivisaRecibida;

}
function conversionSeleccionada(){
    let botonConversionHtml = document.getElementById('confirmacionConversion');
    let confirmacionConversionSeleccionada = "SI";
    let negacionConversionSeleccionada = "NO";
    console.log("Antes del switch")
   
    
    switch(criptoRecibido){
        case "Bitcoin":
            console.log("Case bitcoin");
            switch(divisaRecibida){
                case "Dolar":
                    botonConversionHtml.setAttribute("value",confirmacionConversionSeleccionada);
                    console.log("case dolar del case bitcoin");
                    break;
                case "Euro":
                    botonConversionHtml.setAttribute("value",negacionConversionSeleccionada);
                    break;
                case "Yen":
                    botonConversionHtml.setAttribute("value",negacionConversionSeleccionada);
                    break;
                case "Yuan":
                    botonConversionHtml.setAttribute("value",negacionConversionSeleccionada);
                    break;
                case "Rublo":
                    botonConversionHtml.setAttribute("value",negacionConversionSeleccionada);
                    break;
                case "Peso Argentino":
                    botonConversionHtml.setAttribute("value",negacionConversionSeleccionada);
                    break;
                case "Peso Chileno":
                    botonConversionHtml.setAttribute("value",negacionConversionSeleccionada);
                    break;
                case "Peso Mexicano":
                    botonConversionHtml.setAttribute("value",negacionConversionSeleccionada);
                    break;
            }
        break;
    case "Ethereum":
            switch(cargarDivisaSeleccionada){
                case "Dolar":
                    botonConversionHtml.setAttribute("value",confirmacionConversionSeleccionada);
                    break;
                case "Euro":
                    botonConversionHtml.setAttribute("value",negacionConversionSeleccionada);
                    // break;
                case "Yen":
                    botonConversionHtml.setAttribute("value",negacionConversionSeleccionada);
                    break;
                case "Yuan":
                    botonConversionHtml.setAttribute("value",negacionConversionSeleccionada);
                    break;
                case "Rublo":
                    botonConversionHtml.setAttribute("value",negacionConversionSeleccionada);
                    break;
                case "Peso Argentino":
                    botonConversionHtml.setAttribute("value",negacionConversionSeleccionada);
                    break;
                case "Peso Chileno":
                    botonConversionHtml.setAttribute("value",negacionConversionSeleccionada);
                    break;
                case "Peso Mexicano":
                    botonConversionHtml.setAttribute("value",negacionConversionSeleccionada);
                    break;
            }
    }
    console.log('despues del switch');
}
