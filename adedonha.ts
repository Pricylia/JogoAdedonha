import {jogador} from "./player";

var readlineSync = require("readline-sync");

let players: Array<jogador> = [];

let jogador1 = new jogador("Ana");
let jogador2 = new jogador("Clara");

function adedonha() {
    console.log("\nAdedonha\n");
    let partidas: number;
    while (true) {
      partidas = readlineSync.questionInt(
        "Quantas partidas voces querem jogar? (2-6)\n> "
      );
      if (partidas <= 1 || partidas > 6)
      console.log("O numero de partidas deve estar entre 2 e 6\n");
      else break;
    }
    return partidas;
}

function alfabeto(){
  let alf = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let letra = Math.floor(Math.random() * alf.length);
  console.log("Letra sorteada: ", alf[letra]);
}

function temas(qtdTema){
  let tema: Array<String> = [];
  for (let i = 0; i < qtdTema; i++) {
   let palavra: String  = readlineSync.question("Digite um tema: \n> ");
    tema.push(palavra);
  }
  return tema;
}

function jogo(){
  let qtdTema;
  while (true) {
    qtdTema = readlineSync.questionInt(
      "Com quantos temas voces querem jogar? (2-6)\n> ");
    if (qtdTema <= 1 || qtdTema > 6)
    console.log("O numero de temas deve estar entre 2 e 6\n");
    else break;
  }
  let temasRecebidos = temas(qtdTema);
  let rodadas = adedonha();
  for (let i = 0; i < rodadas; i++) {
    temaAleatorio(temasRecebidos);
    alfabeto();
    let palavraJogador1 = readlineSync.question("Digite a palavra de acordo com o tema e a letra\n> ")
    jogador1.palavra?.push(palavraJogador1);
  }
  console.log(jogador1.palavra);
}

function temaAleatorio(temas){
  let posicao = Math.floor(Math.random() * temas.length);
  console.log("Tema sorteado: ", temas[posicao]);
}



/*
function jogoInicia(){
    let numeroJogadores: number;
    while (true) {
        numeroJogadores = readlineSync.questionInt(
            "Quantas pessoas vao jogar?\n> "
            );
        if (!(1 < numeroJogadores && numeroJogadores <= 6))
          console.log("O numero de jogadores deve estar entre 2 e 6\n");
        else break;
      }
      for (let i = 1; i < numeroJogadores + 1; i++) {
        const nome: string = readlineSync.question(
            "Jogador ${i} digite seu nome \n>"
          );
      }
      return numeroJogadores;
}
*/

jogo();