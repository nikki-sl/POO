// Prática 02
// fiz tudo, sozinha, aprendi tudo, acho que levei uns 40min pois eu fazia em partes enquanto via a aula gravada


let vazio: number[] = []
for (let i = 10; i < 21; i++) {
    vazio.push(i);
    console.log(vazio);
}

for (let i = 0; i < vazio.length; i++ ) {
    vazio[i] = vazio[i] + 1;
    console.log("[" + vazio.join("/n") + "]");
}

