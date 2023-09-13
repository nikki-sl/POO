// Crie uma classe Animal com os atributos especie e barulho.
// Crie um construtor que receba esses dois atributos e os inicialize.
// Crie um método void fazerBarulho que imprima o barulho do animal.
// Crie os objetos cachorro, gato e vaca com os respectivos barulhos.
// Chame os métodos fazerBarulho de cada um dos objetos.
// Crie um objeto da espécie gato, mas que faça o barulho miovisk e salve numa variável chamada gatoRusso.
// Crie um objeto da especie gatoZumbi, mas que faça o barulho meeh e salve numa variável chamada gatoZumbi.
// Adicione um atributo alive na classe Animal e inicialize com true.
// Crie um método void morrer que altere o atributo alive para false, a não ser que o animal seja um gatoZumbi, porque gatos zumbis não morrem.

// animal especie barulho
// class Animal {
//     especie: string;
//     barulho: string;
//     alive: true;

//     constructor(especie, barulho) {
//         this.especie = "especie";
//         this.barulho = "barulho"

//     }

//     fazerBarulho(): void {
//         console.log(this.barulho)
//     }
// }

// // juntando a especie com o barulho

// const gato = new Animal('gato', 'miau');
// const cachorro = new Animal('cachorro', 'au au');

// gato.fazerBarulho();

class Animal {
  especie: string;
  barulho: string;
  alive: boolean;

  constructor(especie: string, barulho: string) {
    this.especie = especie;
    this.barulho = barulho;
    this.alive = true;
  }

  fazerBarulho(): void {
    console.log(this.barulho);
  }

  morrer(): void {
    if (this.especie !== 'gatoZumbi') {
      this.alive = false;
    }
  }
}

const cachorro = new Animal('cachorro', 'au au');
const gato = new Animal('gato', 'miau');
const vaca = new Animal('vaca', 'moo');

cachorro.fazerBarulho();
gato.fazerBarulho();
vaca.fazerBarulho();

const gatoRusso = new Animal('gato', 'miovisk');
const gatoZumbi = new Animal('gatoZumbi', 'meeh');

gatoRusso.fazerBarulho();
gatoZumbi.fazerBarulho();

gatoRusso.morrer();
gatoZumbi.morrer();

console.log(`O gatoRusso está vivo? ${gatoRusso.alive}`);
console.log(`O gatoZumbi está vivo? ${gatoZumbi.alive}`);
  