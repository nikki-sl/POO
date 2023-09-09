<h1 align="center"> Respostas </h1>

+ O que é TypeScript e como ele se relaciona com o JavaScript?
    Um conjunto de regras e restrições para avisar dos erros
</br>
+ Porque dizemos que Typescript é transpilado ao invés de compilado?
    É uma ferramenta que pega de uma linguagem e troca para outra enquanto o compilador gera um código de máquina
</br>
+ Qual é a diferença entre variáveis ​​declaradas com var, let e const em TypeScript?
    var: lugar onde colocamos valores, variavel global, respeita nada
    let: valores que podem ser mudados, a variavel fica presa dentro do escopo e tempo onde foi posta, não pode ser usada antes da criação
    const: mesma coisa do let, mas a variavel não muda
</br>
+ Como você define um tipo explícito para uma variável em TypeScript?
    Cria a variavel, usa : e diz o que é:
    Ex: let a: string = "Olá";
</br>
+ O que é inferência de tipos?
</br>
+ Qual a diferença entre atribuição de tipo e inicialização de variável? Me dê um exemplo de variável inicializada e não inicializada.
</br>
+ Qual valor possui uma variável não inicializada?
</br>
+ Quais os três tipos de dados primitivos em TypeScript?
    string, number e booleanos
</br>
+ Quais os três tipos de dados que representam "ausência de valor" em TypeScript? Quando usar cada um deles?
    undefind - valor não definido, quando não existe valor ou inicialização, quando não foi encontrado. Tipo e valor
    null - quando não tem um valor, escolha voluntária, dizemos que não tem ninguém. Tipo e valor
    void - quando não existe retorno, usado em funções
</br>
+ O que é o tipo any em TypeScript?
</br>

+ Crie uma variável que pode ser do tipo string ou number.
    let objeto: number | string = "abaju"
</br>
+ Como você declara um array de números em TypeScript?
   let fruta: string[] = ["maçã", "banana", "laranja"]
</br>
+ Como converter de string para number em TypeScript?
    Utiliza parseInt() ou um + na frente para números inteiros e parseFloat() para números com vírgula
</br>
+ Como converter de number para string em TypeScript?
    Utilizando o método toString()
</br>
+ Dado um número quebrado, como você arredonda ele para baixo?
    Utiliza math.floor
</br>
+ Como verificar se uma variável que pode ser null possui um valor?
    Tu pode usar um if e else, onde mostra um valor se tiver e outro se não tiver
</br>
+ Se for e while podem fazer a mesma coisa, por que usar um em vez do outro?
    for - contagem explicita, sabe o final
    1. Passeia pelos valores
    2. Passeia pelas listas de elementos
    while - contagem implícita, tem um final mas não especifica quanto tempo vai demorar até chegar nele
