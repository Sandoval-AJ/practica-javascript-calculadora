console.log("estoy conectado!!")

//variables
var operandoA
var operandoB
var operacion

//contenedor principal
var container1 = document.getElementById('containerPrincipal');
container1.setAttribute('class','classContainer1')

const calculadora = document.createElement('div');
calculadora.setAttribute('id','idCalculadora')
calculadora.setAttribute('class','classCalculadora')
container1.appendChild(calculadora);

//Todos los botones
var resultado = document.getElementById('cajaResultado');
calculadora.appendChild(resultado);
var reset = document.getElementById('cajaReset');
calculadora.appendChild(reset);
var dividir = document.getElementById('cajaDivi');
calculadora.appendChild(dividir);
var suma = document.getElementById('cajaSuma');
calculadora.appendChild(suma);
var resta = document.getElementById('cajaResta');
calculadora.appendChild(resta);
var multiplicar = document.getElementById('cajaMulti');
calculadora.appendChild(multiplicar);
var siete = document.getElementById('caja7');
calculadora.appendChild(siete);
var ocho = document.getElementById('caja8');
calculadora.appendChild(ocho);
var nueve = document.getElementById('caja9');
calculadora.appendChild(nueve);
var cuatro = document.getElementById('caja4');
calculadora.appendChild(cuatro);
var sinco = document.getElementById('caja5');
calculadora.appendChild(sinco);
var seis = document.getElementById('caja6');
calculadora.appendChild(seis);
var uno = document.getElementById('caja1');
calculadora.appendChild(uno);
var dos = document.getElementById('caja2');
calculadora.appendChild(dos);
var tres = document.getElementById('caja3');
calculadora.appendChild(tres);
var cero = document.getElementById('caja0');
calculadora.appendChild(cero);
var igual = document.getElementById('cajaIgual');
calculadora.appendChild(igual);

//Eventos
uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1"
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2"
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3"
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4"
}
sinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5"
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6"
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7"
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8"
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9"
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0"
}
//reset
reset.onclick = function(e){
    resetear();
}
//cuentas
suma.onclick = function(e){
    operandoA = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoA = resultado.textContent;
    operacion = "-";
    limpiar();
}

multiplicar.onclick = function(e){
    operandoA = resultado.textContent;
    operacion = "*";
    limpiar();
}

dividir.onclick = function(e){
    operandoA = resultado.textContent;
    operacion = "/";
    limpiar();
}
//igual
igual.onclick = function(e){
    operandoB = resultado.textContent;
    resolver();
}
function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent="";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}
function resolver(){
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            limpiar()
            break;
        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB);
            limpiar()
            break;
        case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB);
            limpiar()
            break;
        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB);
            limpiar()
            break;
    }
    resetear();
    resultado.textContent = res;
}


//esto aun se puede mejorar, tiene fallos que tengo que solucionar
