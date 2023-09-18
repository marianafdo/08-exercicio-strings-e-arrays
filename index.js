// MARIANA FERNANDES DE OLIVEIRA

//A. Exercícios de interpretação de código
// 1.
// a. undefined;
// b. null;
// c. 11;
// d. 3;
// e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13;
// f. 9

// 2. SUBI NUM ÔNIBUS EM MIRROCOS, 27;

// B. Exercícios de escrita de código

let nomeDoUsuario = prompt("Qual seu nome?");
let emailDoUsuario = prompt("Qual seu email?");

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`);

// 2.
let comidasPreferidas = ["pizza", "hamburguer", "açaí", "batata frita", "cachorro-quente"];
console.log(comidasPreferidas);

console.log("Essas são minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

let comidaDoUsuario = prompt("Qual sua comida preferida?");
comidasPreferidas[1] = comidaDoUsuario;

console.log(comidasPreferidas);
 


// 3. 
let listaDeTarefas = [];    
let primeiraTarefa = prompt("Cite uma tarefa que você faz no seu dia");
listaDeTarefas.push(primeiraTarefa);

let segundaTarefa = prompt("Cite uma tarefa que você faz no seu dia");
listaDeTarefas.push(segundaTarefa);

let terceiraTarefa = prompt("Cite uma tarefa que você faz no seu dia");
listaDeTarefas.push(terceiraTarefa);

console.log(listaDeTarefas); 

let tarefaFeita = prompt(`Qual das três tarefas você já realizou? Digite 0 para ${primeiraTarefa}. Digite 1 para ${segundaTarefa} ou digite 2 para ${terceiraTarefa}`);

listaDeTarefas.splice(tarefaFeita, 1);
console.log(listaDeTarefas);



// DESAFIOS
let frase = prompt("Digite uma frase");
let a = frase.split(" ")
console.log(a)

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
console.log(frutas.length);
console.log(frutas.indexOf("Abacaxi"));
