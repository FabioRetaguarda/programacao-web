let contador = 0;

function aumentar() {
    contador++;
    atualizarDisplay();
}

function diminuir() {
    contador--;
    atualizarDisplay();
}

function atualizarDisplay() {
    document.getElementById("valor").textContent = contador;
}

document.addEventListener("keydown", function(evento) {
    if (evento.key === "+") {
        aumentar();
    } else if (evento.key === "-") {
        diminuir();
    }
});
