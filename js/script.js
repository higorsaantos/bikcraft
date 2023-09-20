//ATIVAR LINKS DO HEADER MENU

//define a nodelist 'links'
const links = document.querySelectorAll('.header-menu a');
//exibe no console a nodelist 'links'
console.log(links);

//criando a função 'ativarLink' que terá 'link' como parâmetro variável
function ativarLink(link) {
  //define a variável 'url' como sendo o href local exibido na tela (window)
  const url = location.href;
  //exibe no console o retorno da variável 'url'
  console.log(url);
  //define a variável 'href' como sendo o href da variável 'link' da função
  const href = link.href;
  //exibe no console o retorno da variável 'href'
  console.log(href);
  //determinando uma condição para executar uma função, se o retorno da variável 'url' conter o retorno da variável 'href' (se for true), execute o código...
  if (url.includes(href)) {
    //adiciona no retorno da variável 'link' a classe '.ativo'
    link.classList.add('ativo');
  }
}

//executa a função 'ativarLink' para todos os itens da nodelist 'links'
links.forEach(ativarLink);


//ATIVAR ITENS DO ORÇAMENTO

//define a variável 'parametros' a partir da consulta da URL atual 
const parametros = new URLSearchParams(location.search);
//exibe no console o retorno da variável 'parametros'
console.log(parametros);

//definindo a função 'ativarProduto', com o espaço reservado de nome 'parametro'
function ativarProduto(parametro) {
  //define a variável 'elemento' que será elemento HTML com o ID retornado pela variável 'parametro'
  const elemento = document.getElementById(parametro);
  //aplica a condição: se a variável 'elemento' existir, execute a linha de código a seguir da condição
  if (elemento) {
    //defina como checked true o radio do 'elemento'
    elemento.checked = true;
  }
}

//executar a função 'ativarProduto' para todos os itens da nodelist 'parametros'
parametros.forEach(ativarProduto);


//PERGUNTAS FREQUENTES

//definindo a nodelist com todos os button em .perguntas
const perguntas = document.querySelectorAll('.perguntas button');
//exibe no console a nodelist da variável 'perguntas'
console.log(perguntas);

//declarando uma função de nome 'ativarPergunta' baseada no parâmetro de event
function ativarPergunta(event) {
  //declarando a variável 'pergunta' como o elemento HTML de retorno ao evento click do mouse 
  const pergunta = event.currentTarget;
  //exibe no console o retorno da variável 'pergunta'
  console.log(pergunta);
  //declarando a variável 'controls' como o retorno do atributo 'aria-controls' da variável 'pergunta'
  const controls = pergunta.getAttribute('aria-controls');
  //exibe no console o retorno da variável 'controls'
  console.log(controls);
  //declarando a variável 'resposta', que vai ser um elemento do HTML que vamos conseguir pelo retorno da variável 'controls'
  const resposta = document.getElementById(controls);
  //exibe no console o retorno da variável 'resposta'
  console.log(resposta);

  //alterna a classe 'ativa' na variável 'resposta'
  resposta.classList.toggle('ativa');
  //declara uma variável chamada 'ativa', essa variável verifica se a variável 'resposta' contém a classe 'ativa', se conter ela retorna o valor de 'true', se não conter ela retorna o valor de 'false'
  const ativa = resposta.classList.contains('ativa');
  //define o atributo 'aria-expanded' da variável 'pergunta' baseado no retorno da variável 'ativa', essa última retorna o valor booleano 'true' ou 'false' dependendo da existência ou não da classe 'ativa'
  pergunta.setAttribute('aria-expanded', ativa);
}

//criando uma função chamada 'eventosPerguntas' que vai ter acesso à pergunta, e 'pergunta' vai ser a variável
function eventosPerguntas(pergunta) {
  //exibe no console cada elemento html retornado com a nodelist 'perguntas'
  console.log(pergunta);
  //adiciona na variável 'pergunta' um escutador de evento que ao click executa a função 'ativarPergunta'
  pergunta.addEventListener('click', ativarPergunta);
}

//criando um loop para todos os itens da nodelist 'perguntas'
perguntas.forEach(eventosPerguntas);

//GALERIA BICICLETAS

//declarando a variável "galeria", que vai ser a nodelist das "img" em ".bicicletas-imagens"
const galeria = document.querySelectorAll('.bicicleta-imagens img');
//declarando a variável "galeriaContainer" que vai ser o container que segura as "img", precisamos pra depois alterar a ordem das imagens no container
const galeriaContainer = document.querySelector('.bicicleta-imagens');
//exibe no console, lado a lado, o retorno das variáveis
console.log(galeria, galeriaContainer);

//declarando a função "trocarImagem", que é baseada no parâmetro de click do event da função "eventosGaleria"
function trocarImagem(event) {
  //declarando que a variável "img" é o elemento HTML que retornar no evento de click
  img = event.currentTarget;
  //exibe no console o retorno da variável "img"
  console.log(img);
  //declarando a variável media, sendo um media query, que vai verificar se a tela tem no mínimo 1000px, ela retorna "true" ou "false"
  const media = matchMedia('(min-width: 1000px)').matches;
  //exibe no console o retorno da verificação da variável "media"
  console.log(media);
  //aplica a condição da variável "media", se for "true" executa a linha abaixo da condição
  if (media) {
    //altera a ordem dos elementos do HTML, colocando em primeiro a variável "img" através do "prepend"
  galeriaContainer.prepend(img);
  }
}

//declarando a função "eventosGaleria", que tem como parâmetro a variável "img"
function eventosGaleria(img) {
  //adicionando a variável "img" um observador de evento, que será retornado no evento de click, executando a função "trocarImagem"
  img.addEventListener('click', trocarImagem);
}

//aplicando a função "eventosGaleria" para todos os itens da nodelist da variável "galeria"
galeria.forEach(eventosGaleria);

//ANIMAÇÃO

new SimpleAnime();