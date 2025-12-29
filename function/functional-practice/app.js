/* Even or Odd */
// Function declaration

function evenOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`)
    } else {
        console.log(`${number} is odd`)
    }
}

console.log(evenOdd(5))
console.log(evenOdd(15368))

// Function expression
const evenOrOdd = function(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even`)
    } else {
        console.log(`${num} is odd`)
    }
}

console.log(evenOrOdd(9561))
console.log(evenOrOdd(8))

// Arrow function
const evenOddArrow = n => {
    if (n % 2 === 0) {
        console.log(`${n} is even`)
    } else {
        console.log(`${n} is odd`)
    }
}

console.log(evenOddArrow(9))
