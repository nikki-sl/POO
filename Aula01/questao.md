<h1 align="center"> Respostas </h1>

- O que é TypeScript e como ele se relaciona com o JavaScript?
    - Um conjunto de regras e restrições para avisar dos erros

- Porque dizemos que Typescript é transpilado ao invés de compilado?
   - É uma ferramenta que pega de uma linguagem e troca para outra enquanto o compilador gera um código de máquina

- Qual é a diferença entre variáveis ​​declaradas com var, let e const em TypeScript?
   - var: lugar onde colocamos valores, variavel global, respeita nada
   - let: valores que podem ser mudados, a variavel fica presa dentro do escopo e tempo onde foi posta, não pode ser usada antes da criação
   - const: mesma coisa do let, mas a variavel não muda

- Como você define um tipo explícito para uma variável em TypeScript?
   - Cria a variavel, usa : e diz o que é:
   - Ex: let a: string = "Olá";

- O que é inferência de tipos?
   - É quando mesmo sem colocarmos o tipo dele o typeScript já vai saber.
   - Ex: let num = 7   
   - Ele saberá que num é do tipo number
  
- Qual a diferença entre atribuição de tipo e inicialização de variável? Me dê um exemplo de variável inicializada e não inicializada.
   - A inicialização de variável se concentra em atribuir um valor inicial a uma variável quando ela é criada, enquanto a atribuição de tipo se concentra em definir o tipo de dados que a variável pode armazenar.
   - Ex: let num = number; 
   - mais a frente ela receberá um valor e esse valor ficará no lugar do number

- Qual valor possui uma variável não inicializada?
  - undefind

- Quais os três tipos de dados primitivos em TypeScript?
   - string, number e booleanos

- Quais os três tipos de dados que representam "ausência de valor" em TypeScript? Quando usar cada um deles?
   - undefind: valor não definido, quando não existe valor ou inicialização, quando não foi encontrado. Tipo e valor
   - null: quando não tem um valor, escolha voluntária, dizemos que não tem ninguém. Tipo e valor
   - void: quando não existe retorno, usado em funções

- O que é o tipo any em TypeScript?
  - é uma forma de desativar a verificação de tipos estáticos, a variável pode conter qualquer tipo de valor, permitindo que você atribua valores de qualquer tipo a ela sem gerar erros.


- Crie uma variável que pode ser do tipo string ou number.
   - let objeto: number | string = "abaju"

- Como você declara um array de números em TypeScript?
   - let num: number[] = [10, 20, 30];

- Como converter de string para number em TypeScript?
   - Utiliza parseInt() ou um + na frente para números inteiros

- Como converter de number para string em TypeScript?
   - Utilizando o método toString()

- Dado um número quebrado, como você arredonda ele para baixo?
   - Utiliza math.floor

- Como verificar se uma variável que pode ser null possui um valor?
   - Tu pode usar um if e else, onde mostra um valor se tiver e outro se não tiver

- Se for e while podem fazer a mesma coisa, por que usar um em vez do outro?
   - for: contagem explicita, sabe o final
    1. Passeia pelos valores
    2. Passeia pelas listas de elementos
   - while: contagem implícita, tem um final mas não especifica quanto tempo vai demorar até chegar nele
