document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".tab");
    const cards = document.querySelectorAll(".sensor-card");

    const categorias = {
        "Todos": [
            "LiDAR 360°",
            "Câmera Térmica",
            "Detector de Gás",
            "Ultrassom",
            "IMU / Movimento",
            "Umidade & Temp."
        ],

        "Ambientais": [
            "Câmera Térmica",
            "Detector de Gás",
            "Umidade & Temp."
        ],

        "Navegação": [
            "LiDAR 360°",
            "Ultrassom",
            "IMU / Movimento"
        ],

        "Segurança": [
            "Detector de Gás",
            "Câmera Térmica"
        ],

        "Sistema": [
            "IMU / Movimento"
        ]
    };

    // Criar contador
    const contador = document.createElement("p");
    contador.style.marginTop = "15px";
    contador.style.opacity = "0.8";
    contador.style.fontWeight = "500";

    document.querySelector(".page-header").appendChild(contador);

    function atualizarContador() {
        const visiveis = [...cards].filter(
            card => card.style.display !== "none"
        ).length;

        contador.textContent = `${visiveis} sensor(es) exibido(s)`;
    }

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(btn => btn.classList.remove("active"));
            tab.classList.add("active");

            const categoria = tab.textContent.trim();

            cards.forEach(card => {

                const nomeSensor = card.querySelector("h3").textContent;

                if (
                    categoria === "Todos" ||
                    categorias[categoria].includes(nomeSensor)
                ) {

                    card.style.display = "block";

                    card.animate(
                        [
                            { opacity: 0, transform: "translateY(20px)" },
                            { opacity: 1, transform: "translateY(0)" }
                        ],
                        {
                            duration: 300,
                            fill: "forwards"
                        }
                    );

                } else {
                    card.style.display = "none";
                }
            });

            atualizarContador();
        });

    });

    atualizarContador();

    // Efeito hover mais interativo
    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px) scale(1.02)";
            card.style.transition = "0.3s";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) scale(1)";
        });

    });

});