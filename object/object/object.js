const developer = {
    name: "Asilbek",
    age: 20
}
console.log(developer)
console.log(typeof developer)

// take value from object
console.log(developer.name)
console.log(developer['age'])

// nested object

const webDeveloper = {
    userName: "Asilbek",
    idCard: 1,
    address: {
        country: "Uzbekistan",
        city: "Bukhara",
        home: 39
    }
}

console.log(webDeveloper)
console.log(webDeveloper.address)
console.log(webDeveloper.address.city)

// object methods
const frontendDeveloper = {
    name: "Asilbek",
    age: 20,
    greeting: function() {
        const userName = prompt("Enter your name: ")
        return `Hello ${userName}`
    }
}

console.log(frontendDeveloper.greeting())