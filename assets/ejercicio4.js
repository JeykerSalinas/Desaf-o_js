// Declarando Variables
const days = parseInt(prompt("Ingrese cantidad de días"));
let result = "";

let myWeeks = days / 7
let myDays = days % 7;
let myYears = days / 365;

if (days < 7 && days > 0) {
  result = `Soy ${days} días`;
} 

else if (days >= 7 && days < 365) {
  if (days % 7 === 0) {
    result = `Soy ${myWeeks} semanas`;
  } else result = `Soy ${Math.floor(myWeeks)} semanas y ${myDays} días`;
} 

else if (days >= 365) {
  if (days % 365 === 0) {
    result = `Soy ${myYears} años`;
  } else {
      if(days%365%7 === 0){
          result = `Soy ${Math.floor(myYears)} y ${ myWeeks} semanas`
      }

  }
}

console.log(days%365%7);
