const imagem = document.querySelector("img");

function callback(event) {
  console.log(event);
}

imagem.addEventListener("click", callback);

console.log(imagem);

const animaisLista = document.querySelector(".animais-lista");

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

// animaisLista.addEventListener("click", executarCallback);

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener("click", clickNoLink);

const img = document.querySelector("img");

function callback(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute("src"));
}

img.addEventListener("click", callback);

const h1 = document.querySelector("h1");

function callback(event) {
  console.log(event.type, event);
}

//h1.addEventListener("click", callback);
//h1.addEventListener("mouseenter", callback);
//window.addEventListener("scroll", callback);
//window.addEventListener("resize", callback);
// window.addEventListener("keydown", callback);

function handleKeyboard(event) {
  if (event.key === "f") {
    document.body.classList.toggle("fullscreen");
  }
  console.log(event.key);
}

window.addEventListener("keydown", handleKeyboard);

const imgs = document.querySelectorAll("img");

function imgSrc(event) {
  const src = event.currentTarget.getAttribute("src");
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener("click", imgSrc);
});

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');
console.log(linksInternos);
function click(event) {
  event.preventDefault();
  // console.log(event.currentTarget);
  // console.log(event.target);
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
  // this.classList.add("ativo");
}

linksInternos.forEach((link) => {
  link.addEventListener("click", click);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// const todosElementos = document.querySelectorAll("body *");
// function handleElemento(event) {
//   console.log(event.currentTarget);
// }
// todosElementos.forEach((elemento) => {
//   elemento.addEventListener("click", handleElemento);
// });
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// function removeElemento(event) {
//   event.currentTarget.remove();
// }
// todosElementos.forEach((elemento) => {
//   elemento.addEventListener("click", removeElemento);
// });
// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleClickT(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", handleClickT);
