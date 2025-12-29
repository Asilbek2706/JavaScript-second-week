// korsatilgan chegaradagi raqamni toping
const inRange = (min, max, number) => {
    if (number >= min && number <= max) {
        console.log(`Berilgan ${number} soni ${min} va ${max} orasida`)
    } else {
        console.log(`Berilgan son ${min} va ${max} orasida emas`)

    }
}

const minRange = 10
const maxRange = 30
const givenNumber = 20

console.log(inRange(minRange, maxRange, givenNumber))


// Brilgan ikki son ustida arifmetik amal bajarish
const simpleCalculator = (num1, num2, oper) => {
    switch (oper) {
        case '+':
            console.log(`Yig'indi: ${num1 + num2}`)
            break
        case '-':
            console.log(`Ayirma: ${num1 - num2}`)
            break
        case '*':
            console.log(`Ko'paytma: ${num1 * num2}`)
            break
        case '/':
            console.log(`Bo'linma: $num1 / num2`)
            break
        default:
            console.log('Invalid input')
    }
}

console.log(simpleCalculator(5, 10, '*'))

// Berilgan massivdagi eng katta qiymatga ega element