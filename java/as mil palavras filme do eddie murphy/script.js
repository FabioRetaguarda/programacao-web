const input = document.getElementById('texto');
const contador = document.getElementById('contador');

const palavrasProibidonas = [
  'filha da puta', 'caralho', 'porra', 'desgraça', 'puta',
  'merda', 'bosta', 'jessé', 'negro', 'viado',
  'gay', 'petista', 'lula', 'morte', 'feio',
  'gordo', 'burro', 'lelé', 'maluquete', 'anão',
  'bobão', 'cagar', 'prolapso', 'cuzinho', 'bunda',
  'pinto', 'penis', 'trans', 'bunda mole', 'corno',
  'arrombado', 'vagabundo', 'vagabunda', 'imbecil', 'babaca',
  'aborto', 'chatonildo', 'bobalhão', 'porno',
  'hentai', 'mongoloide', 'tetas', 'seios', 'peitos',
  'melões', 'piroca', 'peituda', 'buceta', 'xibiu',
   'sexo', 'ovario', 'menstruação', 'dedada', 'elu delu',
  'pau no cu','cuzao', 'safado', 'judeu', 'nordestino',
  'broxa', 'calvo', 'tarado', 'putinha', 'ntr',
  'doente', 'tmnc', 'vsf', 'pnc', 'peido',
  'gozo', 'semen', 'fezes', 'coco', 'prostituta',
  'pintudo', 'rabuda', 'rabudo', 'talarico', 'ateu',
  'vegano', 'bebe reborn', 'funkeiro', 'favelado', 'panaca',
  'crossfiteiro', 'bandeclay', 'indio', 'gaucho',
  'racista', 'demente', 'louco', 'chuca', 'lgbt',
  'menage', 'pica', 'one piece', 'neymar', 'bolas', 'mamilos',
   'macaco', 'gravido', 'otaku', 'homossexual',
];

input.addEventListener('input', function() {
  const valorDigitado = input.value.toLowerCase();
  contador.innerText = valorDigitado.length;

  for (let palavra of palavrasProibidonas) {
    if (valorDigitado.includes(palavra)) {
      alert('eu não gosto de ' +palavra+ ', seu fudido');
     
    }
  }
});
