// const menu = document.querySelector(".menu");

// menu.outerHTML; // todo o html do elemento
// menu.innerHTML; // html interno
// menu.innerText; // texto, sem tags

// menu.innerText = "<p>Texto</p>"; // a tag vai como texto
// menu.innerHTML = "<p>Texto</p>"; // a tag é renderizada

// const lista = document.querySelector(".animais-lista");

// lista.parentElement; // pai
// lista.parentElement.parentElement; // pai do pai
// lista.previousElementSibling; // elemento acima
// lista.nextElementSibling; // elemento abaixo

// lista.children; // HTMLCollection com os filhos
// lista.children[0]; // primeiro filho
// lista.children[--lista.children.length]; // último filho

// lista.querySelectorAll("li"); // todas as LI's
// lista.querySelector("li:last-child"); // último filho

// lista.previousElementSibling; // elemento acima
// lista.previousSibling; // node acima

// lista.firstChild; // primeiro node child
// lista.childNodes; // todos os node child

// // const lista = document.querySelector('.animais-lista');
// // const contato = document.querySelector(".contato");
// // const titulo = contato.querySelector(".titulo");
// const mapa = document.querySelector(".mapa");

// // contato.appendChild(lista); // move lista para o final de contato
// // contato.insertBefore(lista, titulo); // insere a lista antes de titulo
// // contato.removeChild(titulo); // remove titulo de contato

// const animais = document.querySelector(".animais");

// const novoH1 = document.createElement("h1");
// novoH1.innerText = "Novo Título";
// novoH1.classList.add("titulo");

// mapa.appendChild(novoH1);

// animais.appendChild(novoH1);

const h1 = document.createElement("h1");
const faq = document.querySelector(".faq");

const cloneH1 = h1.cloneNode(true);

faq.appendChild(cloneH1);
