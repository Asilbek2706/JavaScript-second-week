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
// Berilgan massivdagi eng katta qiymatga ega element