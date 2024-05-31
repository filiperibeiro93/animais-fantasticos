//const imgs = document.querySelectorAll('img');
//console.log(imgs);

//imgs.forEach(img => {
//  console.log(img);
//});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  // console.log(item);
});

// Mostre no console cada parágrado do site

// Mostre o texto dos parágrafos no console

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

