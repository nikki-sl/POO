/* Comando da questão:
faça um vetor de nomes do tipo number ou null e adicione a ele os valores 1, 2, null, 4, 0, null;
faça um for que imprime cada nome do vetor de nomes utilizando console.log apenas se o valor não for null;

    Relatório:
O que foi feito?

Quanto tempo levei para fazer?

O que aprendi?

 */

let nomes: Array<number | null> = [ 1, 2, null, 4, 0, null ]
for(const nome of nomes){
    if(nome != null){
        console.log(nome)
    }
   
}
