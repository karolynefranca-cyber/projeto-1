const botoes = document.querySelectorAll("button")
console.log(botoes)

botoes.forEach(function(botao){
    let curtiu = false;
    botao.addEventListener("click", botaoClicando)

    function botaoClicando(){
        console.log("botao clicando")
        let texto= botao.querySelector("span")
        texto.textContent++

    }
})