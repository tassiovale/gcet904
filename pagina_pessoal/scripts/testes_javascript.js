/**
 * Consoles em JavaScript
 */

// console.log("Iniciando script de notícias da UFRB...");
// console.warn("Isso é um alerta!");
// console.error("Isso é um erro!");

/**
 * Variáveis em JavaScript
 */

let nome = 'João';

// let (recomendado - pode mudar)
let idade = 25;
idade = 26;  // pode reatribuir

// const (recomendado - não pode mudar)
const PI = 3.14159;
// PI = 3; // ERRO!

// Nomea variáveis em camelCase
let meuNomeCompleto = 'Maria Silva';
let valorTotal = 100;

// console.log("Nome:", nome);
// console.log("Idade:", idade);
// console.log("PI:", PI);
// console.log("Meu nome completo:", meuNomeCompleto);
// console.log("Valor total:", valorTotal);

/**
 * Operadores em JavaScript
 */

// Aritméticos
let a = 10;
let b = 3;
// console.log(a + b);  // 13 (soma)
// console.log(a - b);  // 7 (subtração)
// console.log(a * b);  // 30 (multiplicação)
// console.log(a / b);  // 3.333... (divisão)
// console.log(a % b);  // 1 (resto da divisão)
// console.log(a ** b);  // 1000 (exponenciação)

// Incremento/Decremento
let contador = 0;
contador++;  // 1
contador--;  // 0

// Comparação
// console.log(5 == '5');   // true (compara valor)
// console.log(5 === '5');  // false (compara valor E tipo) ✅ USE ESTE
// console.log(5 != '5');   // false
// console.log(5 !== '5');  // true ✅ USE ESTE
// console.log(10 > 5);     // true
// console.log(10 <= 10);   // true

// Lógicos
let temIdade = true;
let temPermissao = false;
// console.log(temIdade && temPermissao);  // false (AND)
// console.log(temIdade || temPermissao);  // true (OR)
// console.log(!temIdade);  // false (NOT)

/**
 * Operadores condicionais e loops
 */

idade = 20;

if (idade >= 18) {
    // console.log('Maior de idade');
} else {
    // console.log('Menor de idade');
}

// if/else if/else
let nota = 75;

if (nota >= 90) {
    // console.log('A');
} else if (nota >= 80) {
    // console.log('B');
} else if (nota >= 70) {
    // console.log('C');
} else {
    // console.log('D');
}

// Ternário (inline if/else)
let status = idade >= 18 ? 'adulto' : 'menor';

// Switch
let dia = 'segunda';

switch (dia) {
    case 'segunda':
        // console.log('Início da semana');
        break;
    case 'sexta':
        // console.log('Sextou!');
        break;
    default:
        // console.log('Dia normal');
}

// for
for (let i = 0; i < 5; i++) {
    // console.log(i);  // 0, 1, 2, 3, 4
}

// while
contador = 0;
while (contador < 3) {
    // console.log(contador);
    contador++;
}

// for...of (arrays)
let frutas = ['maçã', 'banana', 'laranja'];
for (let fruta of frutas) {
    // console.log(fruta);
}

// forEach (método de array)
frutas.forEach(function(fruta, index) {
    // console.log(index, fruta);
});

/**
 * Funções em JavaScript
 */

// Declaração de função
function saudacao(nome) {
    //console.log(`Olá, ${nome}!`);
}

// saudacao('Ana');  // \"Olá, Ana!\"

// Função com múltiplos parâmetros
function somar(a, b) {
    return a + b;
}

//console.log(somar(5, 7));  // 12