const animais = document.getElementById("animais");

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection[0]);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

//const linkInterno = document.querySelector('[href^="#"]');
//console.log(linkInterno);

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

primeiraUl.classList.add("grid-section");

//console.log(gridSectionHTML);
//console.log(gridSectionNode);

//gridSectionNode.forEach(function(item, index) {
//  console.log(item);
//});

//const arrayGrid = Array.from(gridSectionHTML);
//arrayGrid.forEach(function(item, index) {
//  console.log(item);
//});

// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll("img");
imgs.forEach(function (item) {
  console.log(item);
});
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('[src^="img/imagem"]');
imagens.forEach(function (imagem) {
  console.log(imagem);
});
// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
linkInterno.forEach(function (link) {
  console.log(link);
});
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);
// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[--paragrafos.length]);
