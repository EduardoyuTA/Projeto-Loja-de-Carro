//Criando uma constante para armazenar um elemento do documento html

const elementosDuvida = document.querySelectorAll(".duvida");

elementosDuvida.forEach(function (duvida) {
  //percorrer cada dúvida dentro da função
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("ativa");
  });
});
