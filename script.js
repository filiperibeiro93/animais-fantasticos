const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

const primeiroh2 = document.querySelector('h2');
console.log(primeiroh2);
const rect = primeiroh2.getBoundingClientRect();
console.log(rect);

if (rect.top < 0) {
  console.log('passou do elemento');
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.scrollY, // window.pageYOffset
);

const small = window.matchMedia('(max-width: 600px)').matches;
console.log(small);

if (small) {
  console.log('usuário mobile');
} else {
  console.log('usuário desktop');
}