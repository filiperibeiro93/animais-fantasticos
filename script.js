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

animaisLista.addEventListener("click", executarCallback);

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
