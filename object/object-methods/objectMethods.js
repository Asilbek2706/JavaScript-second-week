'use strict'
const frontendDeveloper = {
    name: "Asilbek",
    age: 20,
    greeting: function() {
        const userName = prompt("Enter your name: ")
        return `Hello ${userName}, My name is ` + this.name
    }
}

console.log(frontendDeveloper.greeting())

// Special methods
/* Object.keys() */
const developer = {
    name: "Asilbek",
    age: 20,
    greeting: function() {
        const userName = prompt("Enter your name: ")
        return `Hello ${userName}`
    }
}

console.log(Object.keys(developer))

/* Object.values() */
console.log(Object.values(developer))

/* Object.entries */
console.log(Object.entries(developer))

const car = {
    model: "Malibu",
    color: "black",
    year: 2023,
    coming: 5000,
    carFunction: function() { 
        return `My car is ${this.model} and it color is ${this.color}`
    }
}

console.log(car.carFunction())