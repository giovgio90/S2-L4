/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

const area = (l1, l2) => {
  const total = l1 * l2;
  return total;
};
console.log("ESERCIZIO 1: ", area(4, 2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = (num1, num2) => {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
};
console.log("ESERCIZIO 2: ", crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = (par1) => {
  if (par1 > 19) {
    return Math.abs(par1 - 19) * 3;
  } else {
    return Math.abs(par1 - 19); // Math.abs trasforma il numero negativo in positivo.
  }
};

console.log("ESERCIZIO 3: ", crazyDiff(10));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = (n) => {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

console.log("ESERCIZIO 4: ", boundary(45));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = (str) => {
  if (str.startsWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE " + str;
  }
};

console.log("ESERCIZIO 5: ", epify("EPICODE IS AWESOME"));
console.log("ESERCIZIO 5: ", epify("IS WONDERFUL"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = (num1) => {
  if (num1 % 3 === 0) {
    return num1 + " è multiplo di 3";
  } else if (num1 % 7 === 0) {
    return num1 + " è multiplo di 7";
  } else {
    return num1 + " non è multiplo nè di 3 e nè di 7";
  }
};

console.log("ESERCIZIO 6: ", check3and7(14));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = (stri1) => {
  let splitString = stri1.split(""); //splitta per singolo carattere
  let reverseStr = splitString.reverse(); //li inverte
  let completeString = reverseStr.join(""); // le inserisce come stringa nella varabile completeString
  return completeString;
};

console.log("ESERCIZIO 7: ", reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str) {
  let parole = str.split(" ");

  let finalString = [];
  for (let i = 0; i < parole.length; i++) {
    let firstChar = parole[i].charAt(0);
    console.log(firstChar);
    let uppercaseChar = firstChar.toUpperCase();

    let cutString = parole[i].slice(1);
    let finalWord = uppercaseChar + cutString;
    finalString.push(finalWord);
  }
  console.log(finalString.join(" "));
}

upperFirst("ciao sono giovanni");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = (str) => {
  return str.slice(1, str.length - 1);
};

console.log("ESERCIZIO 9:", cutString("Giovanni"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = (n) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 10));
  }
  return array;
};

console.log("ESERCIZIO 10: ", giveMeRandom(10));
