// Atividade da aula

let write = (text: any) => console.log(text); // muda o console.log pra write

function existe(numeros: number[], numero: number): boolean {
	for (let elem of numeros) 
		if(elem == numero) 
			return true;
	return false;
}

function indexOf(numeros: number[], numero: number): number {
	for (let i in numeros)
		if (numeros[i] == numero)
			return +i;
	return -1;
}

function ehImpar(numero: number): boolean {
    return numero % 2 !== 0;
}

function primeiroImpar(numeros: number[], numero: number): number {
    for (let i in numeros)
		if (ehImpar(numeros[i]))
			return +i;
	return -1;
}

function menor(vet: number[], numero: number): number {
    let ref = 0;
    for (let i = 1; i < vet.length; i++){
        if (vet[i] < vet[ref]){
            ref = i;
        }
    }
    return ref;
}

function menorImpar(vet: number[], numero: number): number {
    let ref = -1;
    for (let i = 0; i < vet.length; i++){
        if(ehImpar(vet[i]) && (ref == -1 || (vet[i] < vet[ref]))){
            ref = i;
        }
    } return ref;
}

// filtragem
function getImpares(vet: number[]): number[] {
    let nova: number[] = [];
    for (let elem of vet)
        if(ehImpar(elem))
            nova.push(elem)
    return nova;
}

function main() { // cria a lista de números e pergunta se existe o numero 7
	let numeros = [4, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	write(primeiroImpar(numeros, 7));
    write(getImpares(numeros));
}

main();