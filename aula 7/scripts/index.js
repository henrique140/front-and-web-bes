function executar(evento) {

evento.preventDefault();
limparerros();

const nome = document.querySelector("#nome");
const erronome = document.querySelector("#erro-nome");

if (nome.value === "") {
    erronome.textContent = "nome não pode estar vazio!";
    erronome.classList.add("erro");
    erronome.classList.remove("oculto");

}
//() ==> {} função anonima
function limparerros() {
    document.querySelectorAll(".erro").forEach((elemento)=> {
        elemento.classList.remove("erro");
        elemento.classList.add("oculto");
    })
}

}

