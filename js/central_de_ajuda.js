document.addEventListener("DOMContentLoaded", () => {

    const inputBusca = document.querySelector(".search-box input");
    const botaoBusca = document.querySelector(".search-box button");

    const categorias = document.querySelectorAll(".category-card");
    const faqs = document.querySelectorAll(".faq-card details");

    // ==========================
    // CONTADOR DE RESULTADOS
    // ==========================

    const contador = document.createElement("p");
    contador.style.marginTop = "10px";
    contador.style.fontWeight = "500";
    contador.style.opacity = "0.8";

    document.querySelector(".help-hero").appendChild(contador);

    function atualizarContador(qtd) {
        contador.textContent = `${qtd} resultado(s) encontrado(s)`;
    }

    // ==========================
    // BUSCA
    // ==========================

    function buscar() {

        const termo = inputBusca.value
            .toLowerCase()
            .trim();

        let encontrados = 0;

        categorias.forEach(card => {

            const texto = card.textContent.toLowerCase();

            if (texto.includes(termo) || termo === "") {

                card.style.display = "block";
                encontrados++;

            } else {

                card.style.display = "none";
            }
        });

        faqs.forEach(faq => {

            const texto = faq.textContent.toLowerCase();

            if (texto.includes(termo) || termo === "") {

                faq.style.display = "block";
                encontrados++;

            } else {

                faq.style.display = "none";
            }
        });

        atualizarContador(encontrados);
    }

    inputBusca.addEventListener("keyup", buscar);
    botaoBusca.addEventListener("click", buscar);

    atualizarContador(
        categorias.length + faqs.length
    );

    // ==========================
    // APENAS UM FAQ ABERTO
    // ==========================

    faqs.forEach(faq => {

        faq.addEventListener("toggle", () => {

            if (faq.open) {

                faqs.forEach(outro => {

                    if (outro !== faq) {
                        outro.open = false;
                    }

                });

            }

        });

    });

    // ==========================
    // EFEITO HOVER NOS CARDS
    // ==========================

    categorias.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-8px) scale(1.03)";

            card.style.transition = "0.3s";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0) scale(1)";

        });

    });

    // ==========================
    // ANIMAÇÃO AO ENTRAR NA TELA
    // ==========================

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.animate(
                    [
                        {
                            opacity: 0,
                            transform: "translateY(40px)"
                        },
                        {
                            opacity: 1,
                            transform: "translateY(0)"
                        }
                    ],
                    {
                        duration: 600,
                        fill: "forwards"
                    }
                );

            }

        });

    }, {
        threshold: 0.15
    });

    document
        .querySelectorAll(
            ".category-card, .faq-card, .support-card"
        )
        .forEach(el => observer.observe(el));

    // ==========================
    // BOTÃO DE CHAT
    // ==========================

    const btnChat =
        document.querySelector(".support-card button");

    btnChat.addEventListener("click", () => {

        btnChat.disabled = true;

        btnChat.textContent =
            "Conectando ao suporte...";

        setTimeout(() => {

            btnChat.textContent =
                "Suporte Online ✅";

            btnChat.disabled = false;

        }, 2000);

    });

});