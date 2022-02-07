// Declarando variables
let num1
let num2
// Bucle
do{
num1 = Number(prompt("Ingrese un número mayor a cero"));
num2 = Number(prompt("Ingrese otro número mayor a cero"));

}while(num1===num2 || num1===0 || num2===0 || isNaN(num1) || isNaN(num2))
//Operaciones
const mySum = num1 + num2;
const mySub = num1 - num2;
const myDiv = num1 / num2;
const myMult = num1 * num2;
const myMod = num1 % num2;
//Impresión
document.write(`Suma = ${mySum} <br>`);
document.write(`Resta = ${mySub} <br>`);
document.write(`División = ${myDiv} <br>`);
document.write(`Multiplicación = ${myMult} <br>`);
document.write(`Módulo = ${myMod} <br>`);
