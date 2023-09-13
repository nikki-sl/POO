class Coelho {
    alive: boolean;
    cozido: boolean;
    patas: number;

    constructor() {
        this.alive = true;
        this.cozido = false;
        this.patas = 4;
    }

    matar(): void {
        if(this.alive) {
            console.log("Matando coelho");
            this.alive = false;
        } else {
            console.log("Já está morto");
        }
    }

    cozinhar(): void {
        if(this.alive) {
            console.log("Coelho fugindo");
            return
        } 
        console.log("coelho cozido");
        this.cozido = true;
    }

    comer(): void {
        if(!this.cozido) {
            console.log("cru é mais molinho, você vai morrer");
            this.alive = false;
            this.patas = 0;
            return
        }
        if (this.patas > 0) {
            console.log("nhac nhac");
            this.patas--;
            return;
        }
        console.log("Coelho sem patas, eca");
    }
}

let pernalonga = new Coelho();
pernalonga.matar();
pernalonga.cozinhar();
pernalonga.comer();
pernalonga.comer();
pernalonga.comer();
pernalonga.comer();
pernalonga.comer();
