document.addEventListener("DOMContentLoaded", () => {

    const tabs  = document.querySelectorAll(".tab");
    const cards = document.querySelectorAll(".sensor-card");

    const categorias = {
        "Todos": [
            "Gases Inflamáveis e Fumaça",
            "Álcool e Gases Combustíveis",
            "Monóxido de Carbono",
            "Odometria e Cinemática Relativa",
            "Ultrassônico — Proximidade e Distância"
        ],
        "Gases": [
            "Gases Inflamáveis e Fumaça",
            "Álcool e Gases Combustíveis",
            "Monóxido de Carbono"
        ],
        "Navegação": [
            "Odometria e Cinemática Relativa"
        ],
        "Proximidade": [
            "Ultrassônico — Proximidade e Distância"
        ]
    };

    // Contador de sensores visíveis
    const contador = document.createElement("p");
    contador.style.marginTop   = "10px";
    contador.style.opacity     = "0.7";
    contador.style.fontWeight  = "500";
    contador.style.fontSize    = "14px";
    contador.style.color       = "#94A3B8";
    document.querySelector(".page-header").appendChild(contador);

    function atualizarContador() {
        const visiveis = [...cards].filter(
            card => card.style.display !== "none"
        ).length;
        contador.textContent = `${visiveis} sensor(es) exibido(s)`;
    }

    function mostrarCard(card) {
        card.style.display = "flex";
        card.animate(
            [
                { opacity: 0, transform: "translateY(20px)" },
                { opacity: 1, transform: "translateY(0)"   }
            ],
            { duration: 300, fill: "forwards" }
        );
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {

            tabs.forEach(btn => btn.classList.remove("active"));
            tab.classList.add("active");

            const categoria = tab.textContent.trim();

            cards.forEach(card => {
                const nome = card.querySelector("h3").textContent.trim();

                if (categoria === "Todos" || categorias[categoria]?.includes(nome)) {
                    mostrarCard(card);
                } else {
                    card.style.display = "none";
                }
            });

            atualizarContador();
        });
    });

    atualizarContador();

    // Hover interativo
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform  = "translateY(-8px) scale(1.02)";
            card.style.transition = "0.3s";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) scale(1)";
        });
    });

});