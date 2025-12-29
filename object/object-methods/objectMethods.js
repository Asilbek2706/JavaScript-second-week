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