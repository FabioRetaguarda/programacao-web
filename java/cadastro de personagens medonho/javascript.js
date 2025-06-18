document.getElementById('formpersonagens').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const nome = document.getElementById('nome').value.trim();
    const classe = document.getElementById('classe').value.trim();
    const forca = document.getElementById('forca').value;
    const defesa = document.getElementById('defesa').value;
    const imagem = document.getElementById('imagem').value.trim();

    const card = document.createElement('div');
    card.classList.add('personagem-card');

    card.innerHTML = `
        <img src="${imagem}" alt="Imagem do personagem ${nome}"/>
        <h3>${nome}</h3>
        <p>Classe: ${classe}</p>
        <p>Força: ${forca}</p>
        <p>Defesa: ${defesa}</p>
    `;

    document.getElementById('listadepersonagens').appendChild(card);

});
