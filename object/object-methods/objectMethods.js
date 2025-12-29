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


const phones = [
    { name: "iPhone 15", price: 1200, color: "black" },
    { name: "Samsung S23", price: 1000, color: "white" },
    { name: "Redmi Note 12", price: 300, color: "blue" }
]

const filterPhones = phones.filter(phone => phone.price > 500).map(phone => phone.name)
console.log(filterPhones)


const products = [
    { name: "Laptop", category: "Electronics", price: 1200, isAvailable: true },
    { name: "Coffee Maker", category: "Home", price: 150, isAvailable: false },
    { name: "Smartphone", category: "Electronics", price: 800, isAvailable: true },
    { name: "Desk Lamp", category: "Home", price: 50, isAvailable: true },
    { name: "Headphones", category: "Electronics", price: 200, isAvailable: true }
]

const filterProducts = products
    .filter(p => p.category === "Electronics")
    .filter(p => p.isAvailable === true)
    .map(p => `${p.name} - ${p.price * 1.1}$`)

    console.log(filterProducts)
