let playerHp = 20;
let ennemis = [
  { name: "Gobelin", hp: 10 },
  { name: "squelette", hp: 15 },
  { name: "ogre", hp: 20 },
  { name: "dragon", hp: 30 },
];
let ennemiActuel = ennemis[0]; // Le gobelin

function fight() {
  let damagePlayer = Math.floor(Math.random() * 3) + 1; // entre 1 et 3
  ennemiActuel.hp -= damagePlayer;

  // Affichage initial de l’attaque du joueur
  document.getElementById("story").innerHTML =
    `Tu attaques le ${ennemiActuel.name} ! Tu lui fais ${damagePlayer} dégâts ! Il lui reste ${ennemiActuel.hp} HP. <br>`;

  // Si le monstre est mort
  if (ennemiActuel.hp <= 0) {
    ennemis.shift(); // on l’enlève

    if (ennemis.length > 0) {
      ennemiActuel = ennemis[0];
      document.getElementById("story").innerHTML += 
        `Tu as vaincu le monstre ! Un ${ennemiActuel.name} approche...`;
    } else {
      document.getElementById("story").innerHTML += 
        "🎉 Tu as vaincu tous les monstres ! Victoire !";
    }

    return; // stop ici
  }

  // Sinon, riposte de l’ennemi après 1 seconde
  setTimeout(() => {
    let damageMonster = Math.floor(Math.random() * 4); // entre 0 et 3
    playerHp -= damageMonster;

    if (playerHp <= 0) {
      document.getElementById("story").innerHTML += 
        `Le ${ennemiActuel.name} t'attaque et te fait ${damageMonster} dégâts !<br>` +
        `💀 Tu es mort !`;
    } else {
      document.getElementById("story").innerHTML += 
        `Le ${ennemiActuel.name} t'attaque ! Il te fait ${damageMonster} dégâts ! Il te reste ${playerHp} HP.`;
    }
  }, 1500);
}

// Fonction de soin (pas modifiée, elle est déjà bonne 👍)
function heal() {
  let heal = Math.floor(Math.random() * 5) + 2;
  playerHp += heal;

  if (playerHp > 20) {
    playerHp = 20;
  }

  document.getElementById("story").innerHTML = 
    `💖 Tu récupères ${heal} HP. Tu as maintenant ${playerHp} HP.`;
}
