
let amigos = [];
let i = 0;
const Resultado = document.getElementById('resultado');
const input = document.getElementById('amigo');

function adicionarAmigo() {
    if (input.value == "") {
        alert("Por favor digite um nome!");
    }

    else {


        amigos[i] = input.value;
        adicionarAmigo_front(amigos[i]);
        console.log(amigos[i]);
        i++
    }

    input.value = '';



}

function sortearAmigo() {
    let click = true;
    const sorteado = Math.floor(Math.random() * amigos.length);
    

    if (amigos.length <= 0) {
        alert("Por favor preencha a lista de amigos!");
    }
    else {
        let usuario = prompt("Digite seu nome");
        if (usuario == amigos[sorteado]) {
            alert("Ops, você se sorteou, refaça novamente");

        }
        else {



            Resultado.innerHTML = usuario + " Seu amigo Secreto é " + amigos[sorteado];
        }
    }



}

function adicionarAmigo_front(nome) {

    const novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = nome;
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.appendChild(novoParagrafo);
}