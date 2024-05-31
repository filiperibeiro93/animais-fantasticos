const href = window.location.href;
console.log(href);

const h1Selecionado = document.querySelector('h1');

const h1Classes = h1Selecionado.classList;

function callBackh1() {
  console.log('Clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callBackh1);

// Retorne o url da página atual utilizando o objeto window
function url() {
  return location.href;
}
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const firstElement = document.querySelector('.ativo');

// Retorne a linguagem do navegador
const language = window.navigator.language;
console.log(language);
// Retorne a largura da janela 
const largura = window.innerWidth;
console.log(largura);