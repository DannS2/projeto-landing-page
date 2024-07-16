var setaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna =window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex; margin-top:55px"

}

function RolarparaEsquerda () {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaDireita.style = "display:flex; margin-top:55%"
    setaEsquerda.style = "dipslay:none"
}