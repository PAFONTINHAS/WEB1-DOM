// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

const array= ['Hans Solo Atirou Primeiro', 'One Ring to Rule them All', 'Luke eu sou seu pai']
//

const text = document.querySelectorAll(".mensagem2");
const btnText = document.getElementById("btn-mudar-texto"); 
btnText.addEventListener("click", function () {
  text.forEach((element, index )=> {

    if(array[index]){
      element.textContent = array[index];
    }  
  });
});