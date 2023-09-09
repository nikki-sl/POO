/* Comando da questão:
crie uma função que recebe uma idade e retorna criança se a idade for menor que 12, adolescente se a idade for menor que 18 e adulto se a idade for maior ou igual a 18;
chame a função para alguns valores de idade e imprima os resultados utilizando console.log; 

    Relatório:
O que foi feito?

Quanto tempo levei para fazer?

O que aprendi?

*/

function fase(idade: number){
    if(idade < 12){
        return "criança";
    } else if (idade < 18){
        return "adolescente";
    } else {
        return "adulto";
    }
}

console.log(fase(15))
console.log(fase(10))
console.log(fase(26))
console.log(fase(18))