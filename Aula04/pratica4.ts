// Prática 04

class Pessoa {
   nomes: string;
   idade: number;

   constructor(nomes:string, idade:number){
    this.nomes =  nomes;
    this.idade = idade;
    }

}
    let pessoas: Pessoa[] = [
        new Pessoa("Jose", 20),
        new Pessoa("Maria", 30),
        new Pessoa("João", 40),
    ];

    // pegar os nomes e imprimir
    for (let elem of pessoas){
        console.log(elem.nomes)
    }
    // pegar idades e calcular
    let soma: number = 0;
    for (let i = 0; i < pessoas.length; i++ ) {
        soma += pessoas[i].idade;
    }

    console.log(soma)