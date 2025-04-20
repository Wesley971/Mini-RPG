let playerHp = 20;
let playerMaxHp = 20;
let ennemis = [
  { name: "Gobelin", hp: 10, maxHp: 10 },
  { name: "Squelette", hp: 15, maxHp: 15 },
  { name: "Ogre", hp: 20, maxHp: 20 },
  { name: "Dragon", hp: 30, maxHp: 30 },
];
let ennemiActuel = ennemis[0];

function fight() {
  let damagePlayer = Math.floor(Math.random() * 3) + 1;
  ennemiActuel.hp -= damagePlayer;
  if (ennemiActuel.hp < 0) ennemiActuel.hp = 0;

  // Met à jour l'affichage de l'ennemi
  let pourcentageEnnemi = (ennemiActuel.hp / ennemiActuel.maxHp) * 100;
  document.getElementById("enemy-hp-text").innerText = `HP : ${ennemiActuel.hp}`;
  document.getElementById("enemy-hp-bar").style.width = pourcentageEnnemi + "%";

  document.getElementById("story").innerHTML =
    `Tu attaques le ${ennemiActuel.name} ! Tu lui fais ${damagePlayer} dégâts ! Il lui reste ${ennemiActuel.hp} HP. <br>`;

  if (ennemiActuel.hp <= 0) {
    ennemis.shift();

    if (ennemis.length > 0) {
      ennemiActuel = ennemis[0];
      document.getElementById("enemy-name").innerText = ennemiActuel.name;
      document.getElementById("enemy-hp-text").innerText = `HP : ${ennemiActuel.hp}`;
      document.getElementById("enemy-hp-bar").style.width = (ennemiActuel.hp / ennemiActuel.maxHp) * 100 + "%";
      document.getElementById("story").innerHTML += `Tu as vaincu le monstre ! Un ${ennemiActuel.name} approche...`;
    } else {
      document.getElementById("story").innerHTML += "<br><br>🎉 Tu as vaincu tous les monstres ! Victoire !";
    }

    return;
  }

  // Riposte de l’ennemi après 1.5s
  setTimeout(() => {
    let damageMonster = Math.floor(Math.random() * 4);
    playerHp -= damageMonster;
    if (playerHp < 0) playerHp = 0;

    // MAJ barre et texte du joueur
    let pourcentagePlayer = (playerHp / playerMaxHp) * 100;
    document.getElementById("player-hp-bar").style.width = pourcentagePlayer + "%";
    document.getElementById("player-hp-text").innerText = `HP: ${playerHp}`;

    if (playerHp <= 0) {
      document.getElementById("story").innerHTML += 
        `Le ${ennemiActuel.name} t'attaque et te fait ${damageMonster} dégâts !<br>💀 Tu es mort !`;
    } else {
      document.getElementById("story").innerHTML += 
        `Le ${ennemiActuel.name} t'attaque ! Il te fait ${damageMonster} dégâts ! Il te reste ${playerHp} HP.`;
    }
  }, 1500);
}

function heal() {
  let heal = Math.floor(Math.random() * 5) + 2;
  playerHp += heal;
  if (playerHp > playerMaxHp) playerHp = playerMaxHp;

  let pourcentagePlayer = (playerHp / playerMaxHp) * 100;
  document.getElementById("player-hp-bar").style.width = pourcentagePlayer + "%";
  document.getElementById("player-hp-text").innerText = `HP: ${playerHp}`;

  document.getElementById("story").innerHTML = 
    `💖 Tu récupères ${heal} HP. Tu as maintenant ${playerHp} HP.`;
}
