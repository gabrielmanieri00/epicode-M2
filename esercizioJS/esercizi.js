/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*

 - String: è una parola o una frase, scritta tra virgolette. Come un'etichetta su cui scrivi il tuo nome.
   Esempio: "ciao", 'Gabriel'
 - Number: sono tutti i numeri, sia numeri interi, negativi o positivi, sia con la virgola.
   Esempio: 12, 3.5, -7
 - Boolean: è come un interruttore della luce, può essere solo acceso o spento, i valori sono true (vero) o false (falso).
 - Undefined: in questo caso la variabile esiste ma non ha un valore. Come una scatola che hai preso ma dentro non hai ancora messo niente. 
 - Null: è una scatola che hai svuotato apposta
 - Object: un contenitore con varie informazioni di un'entità 
   Esempio: { nome: "Mario", eta: 8, altezza: 175 }
   Anche gli array sono oggetti: una fila di cassetti numerati (da 0 in poi). Esempio: [1, 2, 3]
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
 Un oggetto è un contenitore che raggruppa più informazioni che riguardano la stessa "cosa".
 Si scrive tra parentesi graffe { } ed è formato da coppie chiave:valore, separate da virgole.
 La chiave è il nome della proprietà, il valore può essere di qualsiasi tipo.
*/
//Esempio: 
let persona = {
  nome: "Gabriel",
  eta: 26,
  studente: true,
}

console.log(persona.nome) // comparirà Gabriel
console.log(persona["eta"]) // comparirà 25

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(12 + 20) // Apparirà 32

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12
console.log(x) // Per far apparire il valore della variabile 

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Gabriel"
console.log(name) 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(4 - x) // Apparirà -8

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john"
let name2 = "John"

console.log(name1 !== name2) // Se appare true -> sono diverse
console.log(name1 === name2) // Oppure così, se appare false -> sono diverse
console.log(name1.toLowerCase() === name2.toLowerCase()) // Se appare true -> in minuscolo sono uguali
console.log(name2) // Appare John -> name2 non è stata modificata
