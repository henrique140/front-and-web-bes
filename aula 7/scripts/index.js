function executar(evento) {
  evento.preventDefault();
  limparErros();

  const nome = document.querySelector("#nome");
  const erroNome = document.querySelector("#erro-nome");

  if(nome.value === "") {
    erroNome.textContent = "Nome não pode estar vazio!";
    erroNome.classList.add("erro");
    erroNome.classList.remove("oculto");
  }  

  const idade = document.querySelector("#idade");
  const erroIdade = document.querySelector("#erro-idade");

  if (idade.value === "") {
    erroIdade.textContent = "Idade não pode estar vazio";
    erroIdade.classList.add("erro");
    erroIdade.classList.remove("oculto");
  } else if (Number(idade.value) < 18) {
    erroIdade.textContent = "É necessário ter 18 anos!";
    erroIdade.classList.add("erro");
    erroIdade.classList.remove("oculto");
  }

  // TODO: ADICIONAR VALIDAR UM E-MAIL UTILIZANDO UM REGEX
  const email = document.querySelector("#email");
  const erroEmail = document.querySelector("#erro-email");
  const REGEX = /^[a-zA-Z1-9._%+-]+@[a-zA-Z1-9._%+-]+\.[a-zA-Z]{2,}$/;
  
  if (email.value === "") {
    erroEmail.textContent = "Email Não pode estar vazio!";
    erroEmail.classList.add("erro");
    erroEmail.classList.remove("oculto");
  } else if(!REGEX.test(email.value)) {
    erroEmail.textContent = "COLOQUE UM EMAIL VALIDO!";
    erroEmail.classList.add("erro");
    erroEmail.classList.remove("oculto");
  }


  const termos = document.querySelector('#termos');
  const erroTermos = document.querySelector('#erro-termos');
  if (!termos.checked) {
      erroTermos.textContent = 'Você deve aceitar os termos';
      erroTermos.classList.add("erro");
      erroTermos.classList.remove("oculto");
  }


  const valido = document.querySelectorAll(".erro").length === 0;
  if (valido) {
    concluido.textContent = 'Formulário enviado com sucesso!';
    concluido.classList.add("sucesso");
    concluido.classList.remove("oculto");
  } else {
    concluido.textContent = 'Corrija antes de seguir!';
    concluido.classList.add("erro");
    concluido.classList.remove("oculto");
  }


}

function limparErros() {
  document.querySelectorAll(".erro").forEach((elemento) => {
    elemento.classList.remove("erro");
    elemento.classList.add("oculto");
  });
}