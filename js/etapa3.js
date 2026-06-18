/*
LogicChat - arquivo inicial do aluno

A página HTML e o CSS já estão prontos.
Nesta atividade, você vai completar apenas a lógica em JavaScript.

Use as etapas do documento da atividade.
Quando terminar uma etapa, teste no navegador antes de avançar.
*/

'use strict';

// Elementos principais da tela
const autorMensagem = document.getElementById('autorMensagem');
const textoMensagem = document.getElementById('textoMensagem');
const btnEnviar = document.getElementById('btnEnviar');
const btnLimpar = document.getElementById('btnLimpar');
const arquivoTxt = document.getElementById('arquivoTxt');
const btnCarregarArquivo = document.getElementById('btnCarregarArquivo');
const campoFiltro = document.getElementById('campoFiltro');
const btnFiltrar = document.getElementById('btnFiltrar');
const btnMostrarTodas = document.getElementById('btnMostrarTodas');
const btnResumo = document.getElementById('btnResumo');
const listaMensagens = document.getElementById('listaMensagens');
const statusChat = document.getElementById('statusChat');
const resultadoResumo = document.getElementById('resultadoResumo');

// O array abaixo será usado nas próximas etapas.
let mensagens = [];
let totalMensagens = 0;

// ETAPA 3
// Separe o programa em funções menores.
function limparTexto(texto) {
    return texto.trim();
}

function autorValido(autor) {
    return autor === 'aluno' || autor === 'bot' || autor === 'sistema';
}

function nomeDoAutor(autor) {
    if (autor === 'aluno') {
        return 'Aluno';
    }
    if (autor === 'bot') {
        return 'Bot';
    }
    return 'Sistema';
}

function criarMensagem(autor, texto) {
    if (!autorValido(autor)) {
        autor = 'sistemas';
    }
    return {
        autor: autor,
        texto: texto,
        hora: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit'})
    };
}

function renderizarMensagem(mensagem) {
    const caixa = document.createElement('div');
    caixa.className = 'message message--' + mensagem.autor;

    const meta = document.createElement('span');
    meta.className = 'message__meta';
    meta.textContent = nomeDoAutor(mensagem.autor) + ' • ' + mensagem.hora;

    const paragrafo = document.createElement('p');
    paragrafo.textContent = mensagem.texto;

    caixa.appendChild(meta)
    caixa.appendChild(paragrafo)
    listaMensagens.appendChild(caixa);
}


function enviarMensagem() {
    const autor = autorMensagem.value;
    const texto = limparTexto(textoMensagem.value);
    
    if(texto == '') {
        statusChat.textContent = 'Digite uma mensagem antes de enviar.';
        return
    }


    if (totalMensagens === 0) {
        listaMensagens.innerHTML = '';
    }

    const mensagem = criarMensagem(autor, texto);
    renderizarMensagem(mensagem);

    
    totalMensagens++;
    statusChat.textContent = totalMensagens + 'mensagem(ns) enviada(s) no chat.';
    textoMensagem.value = '';
}


// ETAPA 2
// Use o valor do select para mudar o tipo da mensagem: aluno, bot ou sistema.



// ETAPA 4
// Guarde mensagens em um array e renderize usando repetição.

// ETAPA 5
// Leia mensagens de um arquivo TXT escolhido pelo usuário.

// ETAPA 6
// Crie filtro e resumo do chat.

btnEnviar.addEventListener('click', enviarMensagem);

btnLimpar.addEventListener('click', function () {
    mensagens = [];
    totalMensagens = 0;
    listaMensagens.innerHTML = '<div class="empty-state"><strong>Chat vazio</strong><span>Use o painel ao lado para começar.</span></div>';
    statusChat.textContent = 'Nenhuma mensagem carregada.';
    resultadoResumo.textContent = 'O resumo aparecerá aqui.';
});

btnCarregarArquivo.addEventListener('click', function () {
    alert('Complete a Etapa 5 para ler arquivos TXT.');
});

btnFiltrar.addEventListener('click', function () {
    alert('Complete a Etapa 6 para filtrar mensagens.');
});

btnMostrarTodas.addEventListener('click', function () {
    alert('Complete a Etapa 6 para mostrar todas as mensagens.');
});

btnResumo.addEventListener('click', function () {
    alert('Complete a Etapa 6 para gerar o resumo.');
});
