let tela = document.querySelector("#tela-de-pintura")

let corAzul = document.querySelector("#pincel-azul")
let corRoxo = document.querySelector("#pincel-roxo")
let corVinho = document.querySelector("#pincel-vinho")
let corVermelho = document.querySelector("#pincel-vermelho")
let corDourado = document.querySelector("#pincel-dourado")
let corVerde = document.querySelector("#pincel-verde")
let corLaranja = document.querySelector("#pincel-laranja")
let corCoral = document.querySelector("#pincel-coral")
let corAzulp = document.querySelector("#pincel-azulp")

corAzul.addEventListener("click", azul);
corRoxo.addEventListener("click", roxo);
corVinho.addEventListener("click", vinho);
corVermelho.addEventListener("click", vermelho);
corDourado.addEventListener("click", dourado);
corVerde.addEventListener("click", verde);
corLaranja.addEventListener("click", laranja);
corCoral.addEventListener("click", coral);
corAzulp.addEventListener("click", azulp);
let nomeCor = document.querySelector("h3")


function azul() {
    tela.style.background ="blue";
    nomeCor.innerHTML = "Azul";
}

function roxo() {
    tela.style.background ="purple";
    nomeCor.innerHTML = "roxo";
}

function vinho() {
    tela.style.background ="#800020";
    nomeCor.innerHTML = "vinho";
}

function vermelho() {
    tela.style.background ="red";
    nomeCor.innerHTML = "vermelho";
}

function dourado() {
    tela.style.background ="#D4AF37";
    nomeCor.innerHTML = "dourado";
}

function verde() {
    tela.style.background ="#708238";
    nomeCor.innerHTML = "verde";
}

function laranja() {
    tela.style.background ="#CC5500";
    nomeCor.innerHTML = "laranja";
}

function coral() {
    tela.style.background ="#FF7F50";
    nomeCor.innerHTML = "coral";
}

function azulp() {
    tela.style.background ="#005F6B";
    nomeCor.innerHTML = "Azul Petróleo";
}