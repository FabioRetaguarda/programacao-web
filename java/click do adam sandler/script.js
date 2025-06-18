let totalcliques = 0;
document.getElementById("cliqueaqui").addEventListener("click", function () {
totalcliques++;
document.getElementById("mensagem").textContent="você clicou " + totalcliques + " vezes";
})