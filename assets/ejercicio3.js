// Declarando variable
const temp = Number(prompt("Ingrese temperatura en grados celcius"));
//Operación
const kelvin = temp + 273.15;
const fahrenheit = (temp * (9/5))+32;
//Resultado
document.write(`${temp} ºC <br>`);
document.write(`${kelvin} K <br>`);
document.write(`${fahrenheit} ºF<br>`);
