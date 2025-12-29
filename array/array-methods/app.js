// concat()
const array1 = [1, 4, 11]
const array2 = [2, 3, 7]
const result = array1.concat(array2)
console.log(array1)
console.log(array2)
console.log(result)

// find()
const findValue = (number) => number === 2
const foundValue = result.find(findValue)
console.log(foundValue)

// filter()
const filterValue = (number) => number > 5
const filteredValue = result.filter(filterValue)
console.log(filteredValue)

// map()
const mappedValues = result.map(number => "Number: " + number) // short function(arrow function)
console.log(mappedValues)

//sort()
const sortedValues = (number1, number2) => number1 - number2
result.sort(sortedValues)
console.log(result)

// const narxlar = [100, 250, 50, 400, 150]
// const natija = narxlar.filter(narx => narx < 200).map(narx => narx * 1.1)
// console.log(natija)

const shaharlar = ["Samarqand", "Andijon", "Toshkent", "Buxoro"]
const natija = shaharlar.sort()
console.log(natija)

const users = ["Ali", "Bobur", "Laylo", "Guli"]
const natija1 = users.every(user => user.length > 2)
console.log(natija1)


// const numbers = [1, 3, 5, 8, 9, 11]
// const natija2 = numbers.some(number => number % 2 === 0)
// console.log(natija2)

const numbers = [5, 12, 8, 130, 44]
const natija2 = numbers.find(number => number > 10)
console.log(natija2)

const friends = ["Ali", "Vali", "G'ani", "Eshmat"]
const natija3 = friends.findIndex(friend => friend === "G'ani")
console.log(natija3)


const words = ["olma", "anor", "behi", "shaftoli", "uzum"]
const natija4 = words.find(word => word.length > 5)
console.log(natija4)

const books = ["JS asoslari", "React dunyosi", "Python", "NodeJS", "Algoritmlar"]
const filterBooks = books.filter(book => book.includes("JS") || book.includes("NodeJS"));
const upperBooks = filterBooks.map(book => book.toUpperCase());
const hasAlgo = upperBooks.some(book => book === "ALGORITMLAR");
console.log(filterBooks)
console.log(upperBooks)
console.log(hasAlgo)

const mevalar = ["olma", "anor", "behi", "banan", "olcha", "kivi"]
const filterMevalar = mevalar.filter(meva => meva.startsWith("ol"))
const gapMevalar = filterMevalar.map(meva => `${meva} mevasini yedim`)
const hasMeva = gapMevalar.some(meva => meva === "olcha mevasini yedim")
console.log(filterMevalar)
console.log(gapMevalar)
console.log(hasMeva)