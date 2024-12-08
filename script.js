const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

//1
  document.body.innerHTML += `<div><h3>Úkol 1 - Vypište do stránky všechna čísla.</h3> ${numbers}</div>`

//2
numbers.forEach(number => {
    document.body.innerHTML += `<div><h3>Úkol 2 - Vypište do stránky druhé mocniny všech čísel.</h3> ${number * number}</div>`
})

//3
const negativeNumbers = numbers.filter(number => number < 0) 
document.body.innerHTML += `<div><h3>Úkol 3 - Vypište do stránky pouze záporná čísla.</h3>${negativeNumbers}</div>`

//4
numbers.forEach(number => {
    document.body.innerHTML += `<div><h3>Úkol 4 - Vypište do stránky absolutní hodnotu všech čísel.</h3>${Math.abs(number)}</div>`
})

//5
const evenNumbers = numbers.filter(number => number % 2 === 0)
document.body.innerHTML += `<div><h3>Úkol 5 - Vypište do stránky pouze sudá čísla.</h3>${evenNumbers}</div>`

//6
const divisibleByThree = numbers.filter(number => Math.abs(number) % 3 === 0)
document.body.innerHTML += `<div><h3>Úkol 6 - Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.</h3>${divisibleByThree}</div>`

//7
const fromFive = numbers.map(number => Math.abs(number - 5))
document.body.innerHTML += `<div><h3>Úkol 7 - Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.</h3>${fromFive}</div>`

//8
const fromFiveSquared = numbers.map(number => {
    const fromFive2 = Math.abs(number - 5)
    return fromFive2 * fromFive2
})
document.body.innerHTML += `<div><h3>Úkol 8 - Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.</h3>${fromFiveSquared}</div>`

//9
document.body.innerHTML += `<div><h3>Úkol 9 - Spočítejte, kolik je v seznamu záporných čísel.</h3>${negativeNumbers.length}</div>`

//10
let sum = 0
numbers.forEach(number => sum += number)
document.body.innerHTML += `<div><h3>Úkol 10 - Spočítejte součet všech čísel v poli.</h3>${sum}</div>`

//11
const average = sum / numbers.length
document.body.innerHTML += `<div><h3>Úkol 11 - Spočítejte průměr všech čísel v poli.</h3>${average}</div>`


//12
let sumPositive = 0
numbers.forEach(number => {
  if(number > 0){
    sumPositive += number
  }
})
document.body.innerHTML += `<div><h3>Úkol 12 - Spočítejte součet všech kladných čísel v poli.</h3>${sumPositive}</div>`

