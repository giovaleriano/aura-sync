const form = document.getElementById("loginForm");
const criarConta = document.getElementById("criarConta");
const msg = document.getElementById("mensagem");

function senhaForte(senha){

    const regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;

    return regex.test(senha);
}

criarConta.addEventListener("click", () => {

    const usuario =
    document.getElementById("usuario").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const senha =
    document.getElementById("senha").value.trim();

    if(!usuario){

        msg.innerText =
        "Digite um usuário.";

        return;
    }

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
        "usuarioNome",
        usuario
    );

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

    const usuario =
    document.getElementById("usuario").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const senha =
    document.getElementById("senha").value.trim();

    const usuarioSalvo =
    localStorage.getItem("usuarioNome");

    const emailSalvo =
    localStorage.getItem("usuarioEmail");

    const senhaSalva =
    localStorage.getItem("usuarioSenha");

    if(
        usuario === usuarioSalvo &&
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
        "Usuário, e-mail ou senha inválidos.";
    }

});