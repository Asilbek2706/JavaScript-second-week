for (let i = 0; i < 10; i++) {
    console.log(i)
}

let sum = 0

for (let a = 1; a <= 10; a++) {
    sum += a
}
console.log(sum)


//break
for (let b = 1; b <= 5; b++) {
    if (b === 3) {
        break
    }
    console.log(b)
}

// continue
for (let c = 1; c <= 5; c++) {
    if (c === 3) {
        continue
    }
    console.log(c)
}