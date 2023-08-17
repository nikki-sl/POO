/* crie uma variável nome do tipo string e atribua a ela o valor "João";
crie uma variável idade do tipo number e atribua a ela o valor 18;
crie uma constante limite do tipo number e atribua a ela o valor 18;
crie uma variável maiorDeIdade do tipo boolean e atribua a ela o valor false;
faça um if que verifica se idade é maior ou igual a limite e mude o valor de maiorDeIdade para true se for maior ou igual; */

let nome: string = "João";
let idade: number = 18;
const limite: number = 18;
let maiorDeIdade: boolean = false;
if (idade >= limite){
    maiorDeIdade = true;
}

console.log(maiorDeIdade)