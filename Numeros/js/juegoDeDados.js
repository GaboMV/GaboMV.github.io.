document.addEventListener("DOMContentLoaded", function () {
    const simularButton = document.getElementById("simularButton");

    simularButton.addEventListener("click", simularJuegos);
    var cjuev = document.getElementById("cjue");
    var cvv =document.getElementById("cv");
    function simularJuegos() {


        cjue = parseInt(cjuev.value, 10);
        cv = parseInt(cvv.value, 10);

        console.log(cjue)
        console.log(cv)
        const numJuegosInput = document.getElementById("numJuegos");
        const numJuegos = parseInt(numJuegosInput.value, 10);
        console.log(numJuegosInput)
        let gananciaNeta = 0;
        let juegosGanados = 0;

        for (let i = 0; i < numJuegos; i++) {

            const dado1 = Math.floor(Math.random() * 6) + 1;
            const dado2 = Math.floor(Math.random() * 6) + 1;
            const suma = dado1 + dado2;

            if (suma === 7) {
                gananciaNeta = gananciaNeta-cv+cjue; // La casa paga 5 Bs. al jugador
                console.log(gananciaNeta)
            } else {
                gananciaNeta = gananciaNeta +cjue; // El jugador paga 2 Bs. a la casa
                juegosGanados++;
                console.log(gananciaNeta)
            }
        }

        const porcentajeGanados = (juegosGanados / numJuegos) * 100;

        document.getElementById("gananciaNeta").textContent = gananciaNeta;
        document.getElementById("juegosGanados").textContent = juegosGanados;
        document.getElementById("porcentajeGanados").textContent = porcentajeGanados.toFixed(2) + "%";
    }
});
