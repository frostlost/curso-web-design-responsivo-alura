function pega(elemento) {

    return document.querySelector(elemento);
}


var html = pega("html");
var botaoMenuAbrir = pega(".menu-abrir");
var botaoMenuFechar = pega(".menu-fechar");

botaoMenuAbrir.addEventListener("click", function() {

    html.classList.add("menu-ativo");
    botaoMenuFechar.classList.remove('invisivel');
});

botaoMenuFechar.addEventListener("click", function() {

    html.classList.remove("menu-ativo");
    this.classList.add('invisivel');
});

html.addEventListener("click", function(event) {

    if (event.target === this) {
        html.classList.remove("menu-ativo");
        botaoMenuFechar.classList.add('invisivel');
    }
});
