/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3
    }
    return num1 + num2
}

let A = 8
let B = 8
console.log(`crazySum(${A}, ${B}) = ${crazySum(A, B)}`)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
        return true
    }
    return false
}

let boundaryNum = 400
console.log(`boundary(${boundaryNum}) = ${boundary(boundaryNum)}`)

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(string) {
    let letters = string.split('')
    letters = letters.reverse()
    let reversed = letters.join('')
    return reversed
}

let reverseText = "GABRIEL"
console.log(`reverseString("${reverseText}") = ${reverseString(reverseText)}`)

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(string1) {
    let words = string1.split(' ')
    for (let i = 0; i < words.length; i++) {
        const firstLetter = words[i].charAt(0).toUpperCase()
        words[i] = firstLetter + words[i].slice(1)
    }
    let result = words.join(' ')
    return result
}

let upperText = "ciao prova di stringa"
console.log(`upperFirst("${upperText}") = ${upperFirst(upperText)}`)

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        let num = Math.random() * 11
        let intNum = Math.floor(num)
        arr.push(intNum)
    }
    return arr
}

let randomCount = 8
console.log(`giveMeRandom(${randomCount}) = [${giveMeRandom(randomCount).join(", ")}]`)

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    return l1 * l2
}

let side1 = 4
let side2 = 5
console.log(`area(${side1}, ${side2}) = ${area(side1, side2)}`)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num) {
    let diff = Math.abs(num - 19)
    if (diff > 19) {
        return diff * 3
    }
    return diff
}

let diffNum = 47
console.log(`crazyDiff(${diffNum}) = ${crazyDiff(diffNum)}`)

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function codify(string) {
    if (string.startsWith("code")) {
        return string
    }
    return "code" + string
}

let codifyText = "prova senza code"
console.log(`codify("${codifyText}") = ${codify(codifyText)}`)

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(num) {
    if (num % 3 === 0 || num % 7 === 0) {
        return true
    }
    return false
}

let checkNum = 11
console.log(`check3and7(${checkNum}) = ${check3and7(checkNum)}`)

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(string) {
    string = string.slice(1, -1)
    return string
}

let cutText = "EPICODE"
console.log(`cutString("${cutText}") = ${cutString(cutText)}`)
