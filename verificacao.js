/*

console.log("Verificador Números Par e Ímpar");

let numero = prompt("Digite seu número:");

function verificadorPar(numero){

    if(numero %2 === 0){
        console.log(numero + " é igual a par.");
    }
    else{
        console.log(numero + " é igual a ímpar.");
    }

}
verificadorPar(numero);



console.log ("Operações Matemáticas Simples") 
let numero = parseFloat("Digite um número:")
function calcular(num1,num2) {

    const soma = num1 + num2;
    const subtracao = num1 + num2;
    const multiplicação = num1 + num2;
    console.log(soma)
    console.log(subtracao)
    console.log(multiplicação)
    if(num2 ===0)
        console.log("Não da pra dividir por 0!")
    else{
        const divisao = num1 / num2;
        console.log(divisao)
    }
}
calcular(n1,n2);

console.log ("Laço While que imprime de 10 até 1 no console")

for (let i = 10; i > 0; i--){
    console.log("Contagem Regressiva")
}


console.log("Manipulação de Strings")
let prompt ('Digite uma palavra:')
inverterTexto(texto);
function inverterTexto (texto){
    invertida = texto.split('').reverse().join('')
    console.log("Invertida")
}

let palavra = prompt('Qual palavra deseja saber o numerode caracteres?')

function contarCaracteres() {
  console.log(palavra + " - " + palavra.length + " caracteres")
}

contarCaracteres()

const carro = {
    marca: "Koenigsegg",
    modelo: "Agera",
    ano: 2010,
    printModel: function () {
        console.log("O modelo do carro é " + this.modelo)
    }
}

carro.printModel()  

function mensagemPersonalizada() {
    let nome = prompt("Qual seu nome?");
    const mensagem = "Olá! ";
    console.log(mensagem + nome);
}

mensagemPersonalizada()

function media() {
    let n1 = prompt("Qual a primeira nota?")*1;
    let n2 = prompt("Qual a segunda nota?")*1;
    let n3 = prompt("Qual a terceira nota?")*1;
    let mediaFinal = ((n1 + n2 + n3)/3.0);
    console.log("Sua média final é " + mediaFinal.toFixed(2));
}

media()

let mult3 = [];
let nmult3 = [];
let a = 0;
let b = 0;

for (let i = 1; i < 21; i++) {
    if(i % 3 == 0){
        mult3[a] = i;
        a++;
    } else {
        nmult3[b] = i;
        b++;
    }
} 

function tabelation() {
    console.log("Multiplos de 3: " + mult3);
    console.log("Não multiplos de 3: " + nmult3);
}

tabelation()

function verificarPalindromo() {
    let palavra = prompt("Qual palavra deseja saber se é um palindromo");
    let palavracontra = palavra.split('').reverse().join('');
    
    if(palavra == palavracontra) {
        console.log("Essa palavra é um palindromo");
    } else {
        console.log("Essa palavra não é um palindromo");
    }
}

verificarPalindromo()

function verificarSinal() {
    let num = prompt("Qual o numero que deseja verificar?")
    if(num > 0){
        console.log("O número é positivo")
    } else if(num < 0) {
        console.log("O número é negativo")
    } else {
        console.log("O número é zero")
    }
}

verificarSinal()

//EX12
function converterTemperatura() {
    const temp = prompt("qual temperatura em celius deseja converter?")
    let tempFaren = (temp*1.8)+32;
    console.log("A temperatura" + temp, "em celsius, é igual a " +tempFaren," em Fahrenheit")
}

converterTemperatura()

let i13 = 1;
let soma = 0;

while (i <= 100) {
  soma = i + soma;
  i++;
}

console.log(soma);

const troca = prompt("escreva uma frase que tenha a palavra azul")

function substituirPalavra() {
  console.log(troca.replace(/Azul/g || /azul/g, "Vermelho"));
}

substituirPalavra();

let palav = prompt("Digite uma palavra");

function verificarTamanho (palav) {
  if(palav.length > 10) {
    console.log("Tem mais de 10 caracteres aí");
  } else {
    console.log("Tem menos de 10 caracteres aí");
  }
}

verificarTamanho ();

const fruta = ["maça", "banana", "fruta do dragão", "abacate", "morango"];

console.log(fruta[2]);

let nome = prompt("Digite seu nome");
const saudacao = "Bem-vindo(a)"

function saudacao (nome, saudacao) {
  console.log(saudacao, nome);
}

saudacao();

let nota = prompt("Digite sua nota final");

function verificarAprovacao (nota) {
  if(nota >= 6){
    console.log("Aprovado(a)");
  } else {
    console.log("Reprovado(a)");
  }
}
  
verificarAprovacao ();

let pares = [];
let c = 0;

for (let num = 0; num <= 30; num++) {
  if(num % 2 == 0) {
    pares[c] = num;
    c++;
  }
}

console.log("Números pares entre 0 e 30 " + pares);

//EX20
function contarVogais() {
    let palavra = prompt("Qual palavra deseja saber a quantidade de vogais?");
    letras = palavra.split('');
    let numVoga = 0;
    for (let i = 0; i <= palavra.length; i++) {
        if ((letras[i] == 'a') || (letras[i] == 'e') || (letras[i] == 'i') || (letras[i] == 'o') || (letras[i] == 'u')) {
            numVoga++;
        }
    }
    console.log("O número de vogais da palavra é: " + numVoga);
}

contarVogais()

let array = [1, 2, 3];

function somarArray(){
  console.log(array.reduce((partialSum, a) => partialSum + a, 0))
}

somarArray(array)

let numero = prompt("Qual o número?");

function dobrarNumero(){
  console.log(numero * 2);
}

dobrarNumero(numero);

let x = 1;

function pares(x){
  while (x <= 20){
    x++;
    if (x % 2 == 0){
      console.log(x);
    }
  }
}

pares(x)

*/