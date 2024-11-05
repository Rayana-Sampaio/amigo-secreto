let listaAmigos = [];

function adicionar(){
    let nomeAmigo = document.getElementById ('nome-amigo');
    let nomeMaiusculo = nomeAmigo.value.toUpperCase();

    if (!nomeAmigo.value || listaAmigos.includes (nomeMaiusculo)){
        alert ('Verifique o campo do nome (está vazio ou nome já inserido)');
        return;
    }
   
    let amigos = document.getElementById ('lista-amigos');
    listaAmigos.push (nomeMaiusculo);

    if(amigos.textContent == ''){
            amigos.textContent = nomeMaiusculo;
        }else{ 
            amigos.textContent = amigos.textContent + ', ' + nomeMaiusculo;
        }
    
    nomeAmigo.value = '';
    atualizarLista();
    atualizarSorteio();
}

function sortear(){
    if (listaAmigos.length < 4){
        alert ('Insira pelo menos 4 participantes');
        return;
    }

    embaralharLista(listaAmigos);
    let listaSorteio = document.getElementById ('lista-sorteio');
    
    for(let i=0; i < listaAmigos.length; i++){
        if(i == listaAmigos.length-1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + '->' + listaAmigos[0] + '<br>';
        }else{
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + '->' + listaAmigos[i+1] + '<br>';
        }
    }
}

function embaralharLista(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    listaAmigos = [];
    document.getElementById ('lista-amigos').innerHTML = '';
    document.getElementById ('lista-sorteio').innerHTML = '';
}


function excluirAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = '';
}


function atualizarLista() {
    let amigos = document.getElementById('lista-amigos');
    amigos.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = listaAmigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });

        // Adiciona o parágrafo à lista
        amigos.appendChild(paragrafo);
    }
}


