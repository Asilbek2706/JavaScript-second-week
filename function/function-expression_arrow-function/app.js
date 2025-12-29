// Function expression
'use strict'
const square = function(num) {
    return num * num
}

console.log(square(10))

// Arrow function
const myFunction = (n) => {
    return n * n
}

console.log(myFunction(5))

const num = son => son * son
console.log(num(3))

const print = () => console.log("Printing...")
print()

const volume = (a, b, c) => a * b * c
console.log(volume(3, 4, 5))