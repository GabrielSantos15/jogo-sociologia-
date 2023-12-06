let difficulty = 1;


const problemasSociais = ["Violência","Desemprego","Pobreza","Criminalidade"]

const enemy = () => {
  return new Monster({
    raio: (Math.random()*100 + 50) * (difficulty / 2),
    position: {
      x: Math.random() * mapa.width,
      y: Math.random() * mapa.height,
    },
    speed: Math.floor(Math.random()* difficulty) + 0.5,
    vida: 100,
    dano: 10 * difficulty,
    delayDano: 0,
    dificuldade: problemasSociais[Math.floor(Math.random()*problemasSociais.length)],
    color: `hsl(0, ${Math.random()*100}%, ${Math.random()*40+10}%)`,
  });
};

function colisionTiro(a,b){
  let distanciaX = a.position.x - b.position.x
  let distanciaY = a.position.y - b.position.y

  let distacia = Math.sqrt(Math.pow(distanciaX, 2)+Math.pow(distanciaY ,2 ))
  
 return (distacia < a.raio + b.raio)
}

function colisionPlayer(mob, player) {
  let distX = Math.abs(mob.position.x - player.position.x - player.width / 2);
  let distY = Math.abs(mob.position.y - player.position.y - player.height / 2);
 
  if (distX > (player.width / 2 + mob.raio)) { return false; }
  if (distY > (player.height / 2 + mob.raio)) { return false; }
 
  if (distX <= (player.width / 2)) { return true; } 
  if (distY <= (player.height / 2)) { return true; }
 
  let dx = distX - player.width / 2;
  let dy = distY - player.height / 2;
  return (dx * dx + dy * dy <= mob.raio * mob.raio);
 }