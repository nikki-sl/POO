//modificadores de acesso
//public
//private

class Relogio {
    private hora: number;
    private minuto: number;
    private segundo: number;

    constructor(hora: number, minuto: number, segundo: number) {
        this.hora = 0;
        this.setHora(hora);

        this.minuto = 0;
        this.setMinuto(minuto);

        this.segundo = 0;
        this.setSegundo(segundo);
    }

    public getHora(): number {
        return this.hora;
    }

    public setHora(value: number): void {
        if (value < 0 || value > 23) {
            console.log("fail: hora invalida");
            return;
        }
        if (value != Math.floor(value)) {
            console.log("fail: hora invalida");
            return;
        }
        this.hora = value;
    }

    // Minutos

    public getMinuto(): number {
        return this.minuto;
    }

    public setMinuto(value: number): void {
        if (value < 0 || value > 60) {
            console.log("fail: hora invalida");
            return;
        }
        if (value != Math.floor(value)) {
            console.log("fail: hora invalida");
            return;
        }
        this.minuto = value;
    }

    // Segundos
    public setSegundo(value: number): void {
        if (value < 0 || value > 60) {
            console.log("fail: segundo invalida");
            return;
        }
        if (value != Math.floor(value)) {
            console.log("fail: segundo invalida");
            return;
        }
        this.segundo = value;
    }
    
    toString(): string {
        return `${this.hora}:${this.minuto}:${this.segundo}`
    }
}

//fora da classe

let agora = new Relogio(12, 24, 12);
console.log(agora.toString());
