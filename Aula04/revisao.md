# Revisão Arrays

- Qual as duas formas de criar um array, tanto usando `tipo[]` como usando `new Array<tipo>`? Qual a sintaxe para cada um deles?
  - const numeros: number[] = [1, 2, 3, 4, 5];
  - const numeros: Array<number> = new Array<number>(1, 2, 3, 4, 5)
  
- length é um método ou um atributo da classe Array?
  - É um atributo ou uma propriedade do objeto array.
  
- Para que serve o length?
  - Para percorrer até o último item e pode também determinar quantos elementos dentro do array
  
- Quais os métodos para inserir no fim e inserir no começo do array? O que esses métodos retornam?
  - push adiciona um ou mais elementos no final do array e retorna o novo comprimento do array.
  - unshift adiciona um ou mais elementos no início do array e retorna o novo comprimento do array.
  
- Quais os métodos para remover do fim e remover do começo do array? O que eles retornam?
  - pop remove e retorna o último elemento do array.
  - shift remove e retorna o primeiro elemento do array.
  
- O que acontece se eu tentar remover algo do fim de um array vazio?
  - Retorna undefind
  
- Para que serve a função splice e o que são os parâmetros delas?
  - Ela pode ser usada para modificar o array em um ponto específico:
  recebe parâmetros:
  1. Local onde vai fazer a modificação
  2. Quantidade de itens que vai mudar
  3. Elemento que será inserido
  
- A função splice retorna que tipo de dado?
  - number
  
- Quais as duas forma de fazer um for para percorrer um array?
  - Pode usar o for of elem que vai percorrer os nomes dos elementos dentro do array e o for let i que vai percorrer pelos indices dentro do array

- Cite dois casos que eu não consigo resolver utilizando o `for of`.
  - quando quer achar algo espefico dentro dele já que ele não tem acesso ao indice e quando quer fazer uma modificação

- Como seria um laço para percorrer o elemento de trás pra frente?
  - for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i])
    }
  
- Se eu tiver um array de números e quiser dobrar o valor de cada elemento do array, por que eu não consigo fazer com o `for of`?
  - Não tem acesso aos indices um por um, se tu tentar modificar pode acabar criando outro, mas não vai chegar a alterar o array inicial

- Como funciona a função `indexOf`?
  - Ela procura o item em uma posição, tu chama o nome do vetor, coloca o .indexOf() e o que tu tá procurando dentro do parentese, se tiver ele retorna a posição onde tá e se não tiver retorna -1
  
- Se eu tenho uma lista de nomes chamada `nomes` como eu faço pra imprimir um nome por linha, mas sem utilizar o `for`, utilizando apenas a função `join` e o `console.log()`?
  - Tu usa o \n:  
    let test = numero.join("\n")
    console.log(test)