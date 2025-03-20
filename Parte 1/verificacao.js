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