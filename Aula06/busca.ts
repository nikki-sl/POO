
function inside(vet: number[], value: number): boolean {
    for (let elem in vet)
        if (vet[elem] == value)
             return true;
        return false;
}

function index_of(vet: number[], value: number): number {
    for (let i = 0; i < vet.length; i++)
            if (vet[i] == value)
                return[i];
        return -1;   
}

function find_if(vet: number[]): number {
    
    return -1;
}

function min_element(vet: number[]): number {
    let ref = -1;
    for (let i = 0; i < vet.length; i++) {
        if (ref == -1 || vet[i] < vet[ref]){
            ref = i;
        } 
    } return ref;
   
} 


function find_min_if(vet: number[]): number {
    return -1;
}



// -------------------------- MAIN --------------------------

let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);

function main() {
    while (true) {
        let line = input();
        write("$" + line);
        let args = line.split(" ");

        if (args[0] === "end")   { 
            break;
        }
        else if (args[0] === "in"){
            write(inside(to_vet(args[1]), +args[2]) ? "true" : "false"); 
        }
        else if (args[0] === "index_of"){
            write(index_of(to_vet(args[1]), +args[2])); 
        }
        else if (args[0] === "find_if"){
            write(find_if(to_vet(args[1]))); 
        }
        else if (args[0] === "min_element"){
            write(min_element(to_vet(args[1])));
        }
        else if (args[0] === "find_min_if"){
            write(find_min_if(to_vet(args[1])));
        }
        else {
            write("fail: Comando inválido");
        }
    }
}

main();



// Função auxiliar para converter de string para vetor
// "[1,2,3,4]" para [1, 2, 3, 4]
function to_vet(token: string): number[] {
    let size = token.length;
    let inside = token.substring(1, size - 1);
    return inside === "" ? [] : inside.split(",").map(x => +x)
}

