alert ('Estudo de Arrays e Objetos: ');

// O que são vetores ou arrays:

// - Como declarar um array
let array = ['String', 3, false];
console.log (array);
console.log (typeof (array));

// - Pode armazenar vários tipos de dados
let array1 = ['String', 5, true, false, ['Array1'], ['Array2']];
console.log (array1);

// - forEach ()
array1.forEach (function (item, index) {console.log (item, index)}) 
// Itera um array

// - pop ()
array1.pop ();
// Remove um item no final do array
console.log (array1);

// - push ()
array1.push ('Novo Item');
// Adiciona um item no final do array
console.log (array1);

// - shift ()
array1.shift ();
// Remove um item no início do array
console.log (array1);

// - unshift ()
array1.unshift ('Novo Item no Início');
// Adiciona um item no início do array
console.log (array1);

// - indexOf ()
// Retorna o índice de um valor;
console.log (array1.indexOf (true));

// - splice ()
array1.splice (1, 3);
// Remove itens pelo seu índice
// (posição inicial para começar a remover, número de posições para remover ->)
console.log (array1);

// - slice ()
   let NovoArray1 = array1.slice (1, 3);
// Retorna uma parte de um array já existente
// (posição inicial para retornar, posição final para retornar -1 ->)
   console.log (NovoArray1);


// Criação e manipulação de objetos:

// - 1º método
let object1 = {string: 'String', number: 1, boolean: true, array: ['Array'], ObjectInterno: {ObjectInterno: 'Objeto Interno'}}
// Seleciona a propriedade a ser mostrada no console com object.propriedade
console.log (object1.boolean);

// - 2º método
let object2 = {string: 'String', number: 1, boolean: true, array2: ['Array'], ObjectInterno: {ObjectInterno: 'Objeto Interno'}}
// Pesquisa o valor armazenado em determinada propriedade com: 
// var propriedade = nome do objeto.propriedade; | Em seguida escrevendo no: console.log (propriedade);
var string = object2.string;
console.log (string);

var number = object2.number;
console.log (number);

var boolean = object2.boolean;
console.log (boolean);

var array2 = object2.array2;
console.log (array2);

// - 3º método
let object3 = {string: 'String', number: 2, boolean: true, array3: ['Array'], ObjectInterno: {ObjectInterno: 'Objeto Interno'}}
// Escolhe as propriedades a serem mostradas com:
// var (propriedade1, propriedade2, ...) = nome do objeto;
var {string, number, boolean, array3} = object3;
// console.log (propriedade1, propriedade2, ...); 
console.log (number, " - ", string, " - ", number, " - ", boolean, " - ", array3);
// Obs: a ordem ou quantidade dos valores não importa