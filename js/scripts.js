
/*

Case Sensitive= letras maiusculas e minusculas

var= escopo global
let= escopo local
const= constante

por tag: getElementByTagName()
por id: getElementById()
por nome:getElementByName()
por classe:getElementByClassName()
por Selector: querySelector()

*/

let mapa = document.querySelector("#mapa")
let nome = window.document.getElementById("nome")
let cirilo = document.querySelector("#cirilo")
let nomeOk = false
let ciriloOk = false


nome.style.width = '100%'

function validaNome() {
    let txt = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txt.innerHTML = "Nome inválido"
        txt.style.color = "red"
    } else {
        txt.innerHTML = "Nome válido"
        txt.style.color = "green"
        nomeOk = true
    }
}

function validaCirilo() {

    let txtCirilo = document.querySelector("#txtCirilo")

    if (cirilo.value.length >= 100) {
        txtCirilo.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres."
        txtCirilo.style.color = "red"
        txtCirilo.style.display = "block"
    } else {
        txtCirilo.style.display = "none"
        ciriloOk = true
    }
}


function enviar() {
    if (nomeOk == false || ciriloOk == false) {
        alert("Preencha corretamente antes de enviar.")
    } else {
        alert("Muito obrigado pela contribuição, " + nome.value + "!")
    }

}


function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}


function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "300px"
}



function changeTheme(){
    document.body.classList.toogle("dark-theme")
}

