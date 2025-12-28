'use strict'
function myFunction(num1, num2) {
    return num1 + num2
}

console.log(myFunction(50, 40))

function mySecondFunction(num1, num2) {
    console.log(num1 * num2)
}

const result = mySecondFunction(6, 5)
console.log(result)

// ----------------------------------

console.log(square(2))

function square(num) {
    return num * num
}

console.log(square(10))

// Addition
function hello(name) {
    return `Hello ${name}`
}

console.log(hello("Asilbek"))


function ayirma() {
    let n1 = prompt("Ayiruvchini kiriting: ")
    let n2 = prompt("Ayiriluvchini kiriting: ")

    let result = Number(n1) - Number(n2)

    return result
}

console.log(ayirma())


function peremeteriniHisobla() {
    let boy = prompt("Bo'yini kirit: ")
    let eni = prompt("Enini kirit: ")
    let result = (Number(boy) + Number(eni)) * 2
    return result
}

alert(peremeteriniHisobla())