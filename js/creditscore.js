//mirror cooperative  current rate
//convenience and speed  
let prevousYearPrice = 100


let rate = 0.2 


const creditLimit = (prevousYearPrice,currentYearQuantity,rate)=>currentYearQuantity*prevousYearPrice*rate

console.log(creditLimit(prevousYearPrice,currentYearQuantity,rate))

document.querySelector("#creditscore").innerHTML =`You qualify for up to Ksh ${creditLimit(prevousYearPrice,currentYearQuantity,rate)}`