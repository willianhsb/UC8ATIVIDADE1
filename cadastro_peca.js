let readlineSync = require('readline-sync');
var nomePeca;
var pesoPeca;
var capacidade = 9;

nomePeca = readlineSync.question("Informe o Nome da Peca: ");
pesoPeca = readlineSync.question("Informe o Peso da Peca: ");

if( pesoPeca > 100){
    //Condição Verdadeira
    if(capacidade > 10){
        //Condição Verdadeira
        console.log("Não Cadastrar, Capacidade máxima atingida!");
    }else if(nomePeca.length < 3){
        console.log("Não Cadastrar, Nome Invalido!"); //Condição Verdadeira
    }else{
        console.log("Peca Cadastrada com SUCESSO!!!!"); //Condição Falsa
    }
}else{
    console.log("Não Cadastrar, Peso Insuficiente!") //Condição Falsa
}