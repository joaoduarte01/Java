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
*/

console.log("Manipulação de Strings")
let prompt('Digite uma palavra:')
inverterTexto(texto);
function inverterTexto (texto){
    invertida = texto.split('').reverse().join('')
    console.log("Invertida")
}