const listaAnimais = document.querySelector(".animais-lista");

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const section = document.querySelector(".animais");

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

const primeiroh2 = document.querySelector("h2");
console.log(primeiroh2);
const rect = primeiroh2.getBoundingClientRect();
console.log(rect);

if (rect.top < 0) {
  console.log("passou do elemento");
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.scrollY // window.pageYOffset
);

const small = window.matchMedia("(max-width: 600px)").matches;
console.log(small);

if (small) {
  console.log("usuário mobile");
} else {
  console.log("usuário desktop");
}

// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector("img");
console.log(img.offsetTop);
// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((img) => {
    console.log(img.offsetWidth);
    soma += img.offsetWidth;
  });
  console.log(soma);
}
window.onload = function () {
  somaImagens();
};
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");
links.forEach((link) => {
  if (link.offsetHeight >= 48 && link.offsetWidth >= 48) {
    console.log("é maior", link.innerText);
  }
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menorQue720 = window.matchMedia("(max-width: 720px)").matches;
if (menorQue720) {
  document.querySelector(".menu").classList.add("menu-mobile");
}
