alert ('Estudo de Variáveis');

// Tipos primitivos:

// - boolean 
var VouF = false;
console.log (typeof (VouF));

// - number
var Nqualquer = 1;
console.log (typeof (Nqualquer));

// - string
var nome = 'Luiz';
console.log (typeof (nome));


// Como declarar:

// - var
var variavel = 'Luiz'
// Variável do tipo genérico var pode ser alterada durante a execução do script, Ex:
variavel = 'Gustavo' 
console.log (variavel);

// - let
let variavel2 = 'Luiz'
// Variável do tipo genérico let também permite alteração durante a execução do script, Ex:
variavel2 = 'Guilherme'
console.log (variavel2);

// - const
const constante = 727;
// Variável do tipo genérico const não pode ser alterada durante a execução do script.
console.log (constante);


// Escopos Global e Local:

// - Escopo global
var EscGlobal = 'Global';
console.log (EscGlobal);
// Variável EscGlobal vista por todo o código

// - Escopo local
function EscopoLocal () {
let EscLocal = 'Local';
// Variável EscLocal está sendo vista apenas pela função
console.log (EscLocal);
}
EscopoLocal ();
// Portanto, para mostrar a variável no console, é necessário chamar a função


// Diferenças entre:

// - Atribuição
var atrib = 'Atribuição';
// Mostra o valor atribuído no console
console.log (atrib);

// - Comparação
var comp = '0' == 0;
// Se a comparação em valor for verdadeira, será mostrado 'true' no console
console.log (comp);

// - Comparação Idêntica
var compI = 0 === 0;
// Se a comparação em valor e TIPO for verdadeira, será mostrado 'true' no console 
console.log (compI);


// Operadores Aritméticos:

// - Adição
var Ad = 1 + 2;
console.log (Ad);

// - Subtração
var Sub = 5 - 4;
console.log (Sub);

// - Multiplicação
var Mult = 3 * 3;
console.log (Mult);

// - Divisão Real
var DivReal = 10 / 2;
console.log (DivReal);

// - Resto da Divisão
var Resto = 10 % 4;
console.log (Resto);

// - Potenciação
var Pot = 2 ** 2;
console.log (Pot);


// Operadores Relacionais:

// - Maior que
var MaiorQ = 6 > 5;
console.log (MaiorQ);

// - Menor que
var MenorQ = 1 < 2;
console.log (MenorQ);

// - Maior ou igual
var MaiorI = 8 >= 7;
console.log (MaiorI);

// - Menor ou igual
var MenorI = 9 <= 10;
console.log (MenorI);


// Operadores Lógicos:

// - e
var e = true && false;
// Para ser true, as duas condições precisam ser true
console.log (e); 

// - ou
var ou = true || true
// Qualquer uma das condições true o resultado é true
console.log (ou);

// - não
var nao = !true;
// Inverte o valor atribuído a nao
console.log (nao);
