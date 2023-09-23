//programa que dada la edad de una persona indique si es mayor o menor de edad//*

/*var edad = prompt("ingrese su edad:");
edad = parseInt(edad);
if (edad >= 18){
    alert("eres mayor de edad.");
} else{
    alert("eres menor de edad");
}*/

/*ejercicio 2*/
/*let promedio = prompt("ingrese el promedio de sus notas");
let examfin = prompt("ingrese la nota del examen final");
let trabfin = prompt("ingrese la nota del trabajo final");
let ppromed = 55/100;
let promexa = 30/100;
let ptrabfin = 15/100;
let pprom = parseInt = (promedio*ppromed);
let proe = parseInt = (examfin*promexa);
let ptra = parseInt = (trabfin*ptrabfin);
let califin= parseInt(pprom)+parseInt(proe)+parseInt(ptra);



/*if (califin >= 10)
   alert("aprobaste");
} else {( califin <= 1)
    alert("reprobado")
}*/

/*let A= prompt("ingrese el numero A")
let B= prompt("ingrese el numero B")
if (A<= B){
    alert("A es mayor que B");
}else {(A>=B)
    alert("B es menor que A");
}*/

/*que lea dos numeros y los imprima de manera ascendente*/

/*var num1 = parseFloat(prompt("ingrese el valor del primer numero: "));
var num2 = parseFloat(prompt("ingrese el valor del segundo numero: "));
if (num1<num2) {
    console("Numeros en orden ascendente:" , num1, ",", num2)
}else {
    console("numeros en orden ascendente:", num2, ",", num1);
}*/

/* dado el peso de una persona
A. si el peso es menor o igual a 40kl, muestra el mensaje persona baja de peso
B. si el peso es entre 41 y 70k muestre el mensaje, persona peso promedio
C. si el peso es mayor a 71k muestre el mensaje, persona con sobrepeso*/

/*var peso = prompt("ingrese su peso:");
peso = parseInt(peso);
if (peso<= 40){
    alert("persona baja de peso");
} else if (peso> 41,peso< 70){
    alert("persona peso promedio");

} if (peso>= 71){
    alert("persona con sobrepeso")
}*/

/*EJERCICIO 6*/

/*let dia = prompt("ingrese un numero del 1 al 7")
dia = parseInt(dia);
if (dia < 1 || dia > 7){
    alert("escribiste un numero fuera del rango. Escribe un numero entre 1 y 7");
} else{
    switch (dia){
        case 1:
            alert("dia 1: lunes");
            break;
        case 2:
            alert("dia 2: martes");   
            break; 
        case 3:
             alert("dia 3: miercoles");   
             break;
        case 4:
            alert("dia 4: jueves");   
            break;
        case 5:
            alert("dia 5: viernes");   
            break;      
        case 6:
             alert("dia 6: sabado");   
            break;
        case 7:
        alert("dia 7: domingo");   
         break;
    }
}*/

/*EJERCICIO7*/

/*let compra = prompt("ingresa el valor de compra")
compra = parseInt(compra);
if (compra >= 1000){
    descuento = 0.2 * compra;
}else{
    descuento = 0.05 * compra;
}
total = compra - descuento;
alert(" el total a pagar es: "+ total + " pesos");*/

/*EJERCICIO8*/

/*let horastrabajadas = prompt("ingrese total de horas trabajadas");
horastrabajadas = parseInt(horastrabajadas)
if (horastrabajadas <= 40) {
    salario = horastrabajadas * 16000;
}else{
    salario = 40 * 16000 + (horastrabajadas - 40) * 20000;
}
alert("el salario semanal es de " + salario + "pesos");*/

/*EJERCICIO 9*/

/*var nomnre1 = prompt("ingrese su nombre")
var edad1 = prompt("ingrese su edad")

var nomnre2 = prompt("ingrese su nombre")
var edad2 = prompt("ingrese su edad")
if (edad1> edad2); {
    alert(nomnre1 + "es mayor que " + nomnre2);

    alert(nomnre2 + "es mayor que" + nomnre1);
}*/
/*ejercicio 10*/

/*const cantidadCamisas = parseInt(prompt("Ingrese la cantidad de camisas:"));
var precioPorCamisa = parseFloat(prompt("Ingrese el precio por camisa:"));

var totalSinDescuento = cantidadCamisas * precioPorCamisa;
let descuento = 0;
if (cantidadCamisas >= 3) {
  descuento = 0.2; // 20% de descuento
} else {
  descuento = 0.1; // 10% de descuento
}var  totalConDescuento = totalSinDescuento - totalSinDescuento * descuento;
alert("total a pagar" + totalConDescuento)

/*ejercicio11*/

/*var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));

var resultado;

if (numero1 === numero2) {
    resultado = numero1 * numero2;
  } else if (numero1 > numero2) {
    resultado = numero1 - numero2;
  } else {
    resultado = numero1 + numero2;
    alert("el resultado es" + resultado);
  }*/