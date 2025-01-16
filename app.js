// Array para armazenar os amigos
let amigos = [];
let  i = 0;
const Resultado = document.getElementById('resultado');
const input = document.getElementById('amigo');

function adicionarAmigo(){
    i++
    amigos[i] = input.value;
    console.log(amigos[i]);
    
    if (input.value =="")
    {
        alert("Por favor digite um nome!");
    }
    input.value = '';
    adicionarAmigo_front(amigos[i]);
 
}
function adicionarAmigo_front(nome)
{
    
     const novoParagrafo = document.createElement('p');
     novoParagrafo.textContent = nome;
     const listaAmigos = document.getElementById('listaAmigos');
     listaAmigos.appendChild(novoParagrafo);
}




function sortearAmigo()
{
    Resultado.innerHTML = "ganhamo";
}