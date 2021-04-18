const res = num.map(function (numero){
        // console.log(numero,"indice: ",index);
        return numero * 2 
 })

// arrow function
const res = num.map( (numero) => {
    return numero * 2
})

// arrow function  con un solo argomento nella callback posso omettere le parentesi tonde
const res = num.map( numero => {
    return numero * 2
})

// arrow function  con un solo argomento nella callback posso omettere le parentesi tonde
// se la funzione di callback contiene una sola riga di codice posso omettere le parentesi graffe e il return
const res = num.map( numero => numero * 2 ) 

console.log(res)

// function expression
let sum = (a, b) => a + b;

// function expression
let sum = function(a,b) {
    return a + b;
}

function sum(a,b){
    return a + b ;
}

// quadrato di un numero
// ES5 
function square(n) {
    const res = n * n 
    return res
}
const res = square(5) // console.log(25)

// function expression ES5
const square = function(n){
    return n * n
}

const res = square(5) // console.log(25)


// function expression con arrow function ES6
const square = (n) => {return n * n}
const square = n => n * n;

square(5)

const numeri = [5,3,2]
const quadrati = numeri.map(n => n * n) ; // -> array.filter
const quadratiPari = quadrati.filter(n => n % 2 === 0);

const quadratiPari = numeri.map(n => n * n).filter(n => n % 2 === 0);
