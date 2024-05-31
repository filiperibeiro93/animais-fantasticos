const imgs = document.querySelectorAll('img');
//console.log(imgs);

imgs.forEach(img => {
  console.log(img);
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  // console.log(item);
});

