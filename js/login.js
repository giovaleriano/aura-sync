const form = document.getElementById("loginForm");
const criarConta = document.getElementById("criarConta");
const msg = document.getElementById("mensagem");

function senhaForte(senha){

    const regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;

    return regex.test(senha);
}

criarConta.addEventListener("click", () => {

    const email =
    document.getElementById("email").value.trim();

    const senha =
    document.getElementById("senha").value.trim();

    if(!email){

        msg.innerText =
        "Digite um e-mail.";

        return;
    }

    if(!senhaForte(senha)){

        msg.innerText =
        "A senha deve ter 8 caracteres, letras, números e símbolo.";

        return;
    }

    localStorage.setItem(
        "usuarioEmail",
        email
    );

    localStorage.setItem(
        "usuarioSenha",
        senha
    );

    localStorage.setItem(
        "primeiroAcesso",
        "true"
    );

    msg.innerText =
    "Conta criada com sucesso!";
});

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email =
    document.getElementById("email").value.trim();

    const senha =
    document.getElementById("senha").value.trim();

    const emailSalvo =
    localStorage.getItem("usuarioEmail");

    const senhaSalva =
    localStorage.getItem("usuarioSenha");

    if(
        email === emailSalvo &&
        senha === senhaSalva
    ){

        const primeiro =
        localStorage.getItem("primeiroAcesso");

        if(primeiro === "true"){

            localStorage.setItem(
                "primeiroAcesso",
                "false"
            );

            window.location.href =
            "boasvindas.html";

        }else{

            window.location.href =
            "home.html";

        }

    }else{

        msg.innerText =
        "E-mail ou senha inválidos.";
    }

});