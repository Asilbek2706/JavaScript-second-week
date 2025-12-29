'use strict'
/* Create array */
// literal
const languages = ['python', 'javascript', 'go', 'java', 'c', 'c++']

// with 'new' key words
const programs = new Array('js', 'go')

// empty
const emptyArray = []

// number
const numberArray = [1, 2, 3, -2, 45]

// string
const namesArray = ['Asilbek', 'Ruxshona']

// mixed array
const mixedArray = ['Asilbek', -5, false, null]
console.log(mixedArray)

/* Take an array */
const helloArray = ['h', 'e', 'l', 'l', 'o']
console.log(helloArray[0])
console.log(helloArray[3])

/* Push an element */
// push add an element in the end
let program = ['js', 'java']
program.push('go')
console.log(program)

// unshift  add an element in the front
let idCards = ['ABT24CCS014', 'ABT24CCS015']
idCards.unshift('ABT24CCS016')
console.log(idCards)

/* Change an element from an array */
const helloWorld = ["hello", "World"]
helloWorld[1] = "Asilbek"
console.log(helloWorld)

/* Delete the element from array */
// pop can delete an element in the end of the array
// I use from helloArray = ['h', 'e', 'l', 'l', 'o']
const delHello = helloArray.pop()
console.log(helloArray) // ['h', 'e', 'l', 'l']
console.log(delHello) // o

// shift can delete an element in the front of the array
// I use languages = ['python', 'javascript', 'go', 'java', 'c', 'c++']
const shiftArray = languages.shift()
console.log(languages) // ['javascript', 'go', 'java', 'c', 'c++']
console.log(shiftArray) // python

/* length of array */
// I use languages = ['javascript', 'go', 'java', 'c', 'c++']
console.log(languages.length) // 5