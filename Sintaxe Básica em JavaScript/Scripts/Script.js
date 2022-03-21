alert ("Estudo de Estrutras Condicionais");

// Estruturas de Decisão:

// - if, else if e else
var jogador1 = 0;
var jogador2 = 0;
var placar;

// - if ternário | Condição ? Instrução 1 : Instrução 2
jogador1 != -1 && jogador2 != -1 ? console.log ("Jogadores Válidos!") : console.log ("Jogadores Inválidos!");

if (jogador1 > 0 && jogador2 == 0){
    console.log ("O jogador 1 marcou ponto!");
    placar = jogador1 > jogador2;
}
else if (jogador2 > 0 && jogador1 == 0){
    console.log ("O jogador 2 marcou ponto!");
    placar = jogador2 > jogador1;
}
else {
    console.log ("Ninguém marcou ponto.");
}

// - switch / case
switch (placar){
    case placar = jogador1 > jogador2:
    console.log ("O jogador 1 venceu!");
    break;

    case placar = jogador2 > jogador1:
    console.log ("O jogador 2 venceu!");
    break;

    default:
    console.log ("Ninguém venceu.");
}
    
// - Ninho de if
var player1 = 0;
var player2 = 0;
// Podemos usar if dentro de outro if
if (player1 != -1 && player2 != -1){
if (player1 > 0){
    console.log ("Jogador 1 marcou ponto!");
}
if (player2 > 0){
    console.log ("Jogador 2 marcou ponto!");
}
else {
    console.log ("Ninguém marcou ponto.");
}
}


// Estruturas de Repetição:

// - for
let array = ['V1', 'V2', 'V3', 'V4', 'V5'];
let object = {Prop1: 'V1', Prop2: 'V2', Prop3: 'V3'}

for (let e = 0; e < array.length; e++){  
    console.log (array [e]);
}

// - for / in
// Com array
for (i in array){
    console.log (array [i]);
}
// Com object
for (i in object){
    console.log (i);
}

// - for / of
// Com array 
for (o in array) {
    console.log (array [o]);
} 
// Com object
for (o of object.Prop1){
// O for / of não funciona com objetos, pois as propriedades variam, diferentemente dos índices, 
// que em um array sempre serão números inteiros. Mas ainda é possível pegar o valor, porém
// cada caractere dentro do valor será impresso em linhas separdas
    console.log (o);    
}

// - while
var While = 0;

while (While < 5){
    console.log (array [While]);
    While ++;
}

// - do / while
var doWhile = 0;

do {
    doWhile++;
    console.log (doWhile);
} while (doWhile < 10);