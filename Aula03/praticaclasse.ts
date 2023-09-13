/*
O que foi feito?
  foi criado uma classe de animais onde eles fazem barulhos e acabam morrendo

Com quem fez?
  Eu estava fazendo de certa forma só mas quando eu empacava em algo que não sabia em específico pedi ajuda de amigos programadores que me ajudassem

Quanto tempo levou?
  Acho que foi umas 2h pois era meio intercalado

O que aprendeu?
  praticamente tudo que foi feito na questão eu não sabia, apanhei muito pro código porque eu sabia que estava faltando certas coisas para dar certo, mas não conseguia sair do canto, mas o constructor bom de se usar, os nomes me confundiram muito e tava com um pouco de dificuldade de onde colocar certas coisas mas acho que com a atividade tá sendo melhor entender, mas acho que mais pra frente vou tentar refazer e revisar novamente.


COMANDO DA QUESTÂO

Crie uma classe Animal com os atributos especie e barulho.
Crie um construtor que receba esses dois atributos e os inicialize.
Crie um método void fazerBarulho que imprima o barulho do animal.
Crie os objetos cachorro, gato e vaca com os respectivos barulhos
Chame os métodos fazerBarulho de cada um dos objetos.
Crie um objeto da espécie gato, mas que faça o barulho miovisk e salve numa variável chamada gatoRusso.
Crie um objeto da especie gatoZumbi, mas que faça o barulho meeh e salve numa variável chamada gatoZumbi.
Adicione um atributo alive na classe Animal e inicialize com true.
Crie um método void morrer que altere o atributo alive para false, a não ser que o animal seja um gatoZumbi, porque gatos zumbis não morrem.

*/

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
    if(this.especie === "gatoZumbi"){
      console.log("gato zumbi não morre");
    } else {
      this.alive = false;
    }
  }
}

const gato = new Animal('gato', 'miau');
const cachorro = new Animal('cachorro', 'au au');
const vaca = new Animal('vaca', 'muu');

const gatoRusso = new Animal('gato', 'miovisk');
const gatoZumbi = new Animal('gatoZumbi', 'meeh');

gato.fazerBarulho();
cachorro.fazerBarulho();
vaca.fazerBarulho();
gatoRusso.fazerBarulho();
gatoZumbi.fazerBarulho();
gatoZumbi.morrer();
