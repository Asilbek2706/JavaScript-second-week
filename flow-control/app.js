let age = 25;
let coupon = false;

if (coupon === true) {
    console.log("Bepul (Kupon bor)");
} else if (age < 7) {
    console.log("Bepul (Yosh bola)");
} else if (age >= 7 && age <= 18) { 
    console.log("5,000 so'm");
} else if (age > 18 && age < 65) { 
    console.log("15,000 so'm");
} else if (age >= 65) {
    console.log("8,000 so'm");
} else {
    console.log("Noma'lum yosh");
}


let number = 15

if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz")
} else if (number % 3 === 0) {
    console.log("Fizz")
} else if (number % 5 === 0) {
    console.log("Buzz")
} else {
    console.log("log the number itself")
}