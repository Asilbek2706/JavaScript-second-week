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