// Prática 01
/* Fiz tudo, a parte inicial foi bem de boa, na parte final eu consegui fazer mas pra mim isso estava de forma errada, tipo uma gambiarra ai pedi ajuda a Rayme e ela me ajudou a entender. Acho que levei uns 40min */
 
let numeros: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // criar o vetor
numeros.pop() // tira o 9 
numeros.shift() // tira o 0

console.log(numeros) 

numeros.unshift(0) // coloca no começo
numeros.push(9) // coloca no final

numeros.splice(5, 1) // remover o 5

console.log(numeros)

let removedElements = numeros.splice(5, 0, 70); // na mesma posição onde o 5 foi retirada, coloca o 70

console.log(numeros)