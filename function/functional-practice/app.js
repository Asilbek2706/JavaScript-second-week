'use strict'
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

/* bigger than */
// Function declaration

/**
 * function biggerTwoDec(number1, number2) {
    if (number1 > number2) {
        console.log(`${number1} is big`)
    } else {
        console.log(`${number2} is big`)
    }
}
 */
function biggerTwoDec(number1, number2) {
    if (number1 >= number2) {
        return number1
    }
    return number2
}

console.log(biggerTwoDec(4, 10))
console.log(biggerTwoDec(50, 5))

// Function expression
/**
 * const biggerTwoExp = function(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is big`)
    } else {
        console.log(`${num2} is big`)
    }
}
 */

const biggerTwoExp = function(num1, num2) {
    if (num1 >= num2) {
        return num1
    }
    return num2
}

console.log(biggerTwoExp(1100, 1000))

// Arrow function
/**
 * const biggerTwoArrow = (n1, n2) => {
    if (n1 > n2) {
        console.log(`${n1} is big`)
    } else {
        console.log(`${n2} is big`)
    }
}
 */

const biggerTwoArrow = (n1, n2) => {
    if (n1 >= n2) {
        return n1
    }
    return n2
}

console.log(biggerTwoArrow(999, 1001))

/* inverse of a given number */
// Function declaration
function reverseDec(number) {
    const numberStr = String(number)
    const reversedStr = numberStr.split('').reverse().join('')
    return Number(reversedStr)
}

console.log(reverseDec(45682))

// Function expression

const reverseExp = function(num) {
    const numStr = String(num)
    const reversedString = numStr.split('').reverse().join('')
    return Number(reversedString)
}

console.log(reverseExp(12))

// Arrow function
const reverseArrow = n => {
    const nStr = String(n)
    const reversedN = nStr.split('').reverse().join('')
    return Number(reversedN)
}

console.log(reverseArrow(235))