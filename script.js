let playerHp = 20;
let playerMaxHp = 20;
let playerXp = 0;
let playerLevel = 1;

let ennemis = [
  { name: "Gobelin", hp: 10, maxHp: 10, image: "images/gobelin.png" },
  { name: "Squelette", hp: 15, maxHp: 15, image: "images/squelette.png" },
  { name: "Ogre", hp: 20, maxHp: 20, image: "images/ogre.png" },
  { name: "Dragon", hp: 30, maxHp: 30, image: "images/dragon.png" },
];

let ennemiActuel = ennemis[0];

function finDePartie() {
  document.querySelectorAll("#choices button").forEach(btn => {
    btn.disabled = true;
  });

  if (!document.querySelector(".replay-btn")) {
    const replayButton = document.createElement("button");
    replayButton.textContent = "🔁 Rejouer";
    replayButton.classList.add("replay-btn");
    replayButton.onclick = () => window.location.reload();
    document.getElementById("choices").appendChild(replayButton);
  }
}

function startGame() {
  document.getElementById("intro-screen").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.body.classList.remove("lock-scroll");

  document.getElementById("story").innerHTML =
    "Maelor s’aventure dans les terres brumeuses du Val Ténébreux, guidé par les murmures d’un serment oublié.<br><br>" +
    "Il est le dernier descendant d’un ordre jadis puissant : <strong>L’Ordre Déchu</strong>. Trente années plus tôt, ses membres furent accusés de sorcellerie noire et exécutés sans procès. Leurs cendres dispersées, leur nom effacé des livres... sauf d’un.<br><br>" +
    "Aujourd’hui, quelque chose rôde dans les bois. Les morts se lèvent. Le sang ancien appelle.<br><br>" +
    "Maelor n’est pas là pour sauver le royaume.<br>Il est là pour réclamer ce qui lui revient.";

  document.getElementById("continue-button").style.display = "block";
}

function launchGameplay() {
  document.getElementById("continue-button").style.display = "none";
  document.body.classList.add("game-started");
  document.getElementById("story").innerHTML =
    "Une créature surgit de l’ombre... prépare-toi à combattre !";
}

function fight() {
  if (playerHp <= 0 || ennemis.length === 0) return;

  let damagePlayer = Math.floor(Math.random() * 3) + 1;
  ennemiActuel.hp -= damagePlayer;
  document.getElementById("enemy").classList.add("hit");
  setTimeout(() => {
    document.getElementById("enemy").classList.remove("hit");
  }, 400);

  if (ennemiActuel.hp < 0) ennemiActuel.hp = 0;

  let pourcentageEnnemi = (ennemiActuel.hp / ennemiActuel.maxHp) * 100;
  document.getElementById("enemy-hp-text").innerText = `HP : ${ennemiActuel.hp}`;
  document.getElementById("enemy-hp-bar").style.width = pourcentageEnnemi + "%";

  document.getElementById("story").innerHTML =
    `Tu attaques le ${ennemiActuel.name} ! Tu lui fais ${damagePlayer} dégâts ! Il lui reste ${ennemiActuel.hp} HP. <br>`;

  if (ennemiActuel.hp <= 0) {
    ennemis.shift();
    playerXp += 5;
    if (playerXp >= 10){
      playerLevel = 2 ; 
      document.getElementById("story").innerHTML += `<br>🆙 Tu montes au niveau ${playerLevel} !`;
    }
    document.getElementById("player-xp-text").innerText = `XP : ${playerXp}`;
    document.getElementById("player-level-text").innerText = `Niveau : ${playerLevel}`;

   
    if (ennemis.length > 0) {
      ennemiActuel = ennemis[0];
      document.getElementById("enemy-name").innerText = ennemiActuel.name;
      document.getElementById("enemy-image").src = ennemiActuel.image;
      document.getElementById("enemy-hp-text").innerText = `HP : ${ennemiActuel.hp}`;
      document.getElementById("enemy-hp-bar").style.width =
        (ennemiActuel.hp / ennemiActuel.maxHp) * 100 + "%";
      document.getElementById("story").innerHTML +=
        `Tu as vaincu le monstre ! Un ${ennemiActuel.name} approche...`;
    } else {
      document.getElementById("story").innerHTML +=
        "<br><br>🎉 Tu as vaincu tous les monstres ! Victoire !";
      finDePartie();
    }

    return;
  }

  setTimeout(() => {
    let damageMonster = Math.floor(Math.random() * 4);
    playerHp -= damageMonster;
    document.getElementById("player").classList.add("hit");
    setTimeout(() => {
      document.getElementById("player").classList.remove("hit");
    }, 400);

    if (playerHp < 0) playerHp = 0;

    let pourcentagePlayer = (playerHp / playerMaxHp) * 100;
    document.getElementById("player-hp-bar").style.width = pourcentagePlayer + "%";
    document.getElementById("player-hp-text").innerText = `HP: ${playerHp}`;

    if (playerHp <= 0) {
      document.getElementById("story").innerHTML +=
        `Le ${ennemiActuel.name} t'attaque et te fait ${damageMonster} dégâts !<br>💀 Tu es mort !`;
      finDePartie();
    } else {
      document.getElementById("story").innerHTML +=
        `Le ${ennemiActuel.name} t'attaque ! Il te fait ${damageMonster} dégâts ! Il te reste ${playerHp} HP.`;
    }
  }, 800);
}

function heal() {
  if (playerHp <= 0 || ennemis.length === 0) return;

  let heal = Math.floor(Math.random() * 5) + 2;
  playerHp += heal;

  if (playerHp > playerMaxHp) playerHp = playerMaxHp;

  let pourcentagePlayer = (playerHp / playerMaxHp) * 100;
  document.getElementById("player-hp-bar").style.width = pourcentagePlayer + "%";
  document.getElementById("player-hp-text").innerText = `HP: ${playerHp}`;

  document.getElementById("story").innerHTML =
    `💖 Tu récupères ${heal} HP. Tu as maintenant ${playerHp} HP.`;

  setTimeout(() => {
    let damageMonster = Math.floor(Math.random() * 4);
    playerHp -= damageMonster;
    document.getElementById("player").classList.add("hit");
    setTimeout(() => {
      document.getElementById("player").classList.remove("hit");
    }, 400);

    if (playerHp < 0) playerHp = 0;

    let pourcentagePlayer = (playerHp / playerMaxHp) * 100;
    document.getElementById("player-hp-bar").style.width = pourcentagePlayer + "%";
    document.getElementById("player-hp-text").innerText = `HP: ${playerHp}`;

    if (playerHp <= 0) {
      document.getElementById("story").innerHTML +=
        `Le ${ennemiActuel.name} t'attaque et te fait ${damageMonster} dégâts !<br>💀 Tu es mort !`;
      finDePartie();
    } else {
      document.getElementById("story").innerHTML +=
        `Le ${ennemiActuel.name} t'attaque ! Il te fait ${damageMonster} dégâts ! Il te reste ${playerHp} HP.`;
    }
  }, 800);
}

function run() {
  if (playerHp <= 0 || ennemis.length === 0) return;

  let runChance = Math.random();
  if (runChance < 0.5) {
    document.getElementById("story").innerHTML =
      "Maelor a fui. Mais l’Ordre Déchu l’attend toujours… Souhaites-tu affronter à nouveau ton destin ?";
    finDePartie();
  } else {
    document.getElementById("story").innerHTML = "Tu n'as pas réussi à fuir le combat !";

    setTimeout(() => {
      let damageMonster = Math.floor(Math.random() * 4);
      playerHp -= damageMonster;
      document.getElementById("player").classList.add("hit");
      setTimeout(() => {
        document.getElementById("player").classList.remove("hit");
      }, 400);

      if (playerHp < 0) playerHp = 0;

      let pourcentagePlayer = (playerHp / playerMaxHp) * 100;
      document.getElementById("player-hp-bar").style.width = pourcentagePlayer + "%";
      document.getElementById("player-hp-text").innerText = `HP: ${playerHp}`;

      if (playerHp <= 0) {
        document.getElementById("story").innerHTML +=
          `Le ${ennemiActuel.name} t'attaque et te fait ${damageMonster} dégâts !<br>💀 Tu es mort !`;
        finDePartie();
      } else {
        document.getElementById("story").innerHTML +=
          `Le ${ennemiActuel.name} t'attaque ! Il te fait ${damageMonster} dégâts ! Il te reste ${playerHp} HP.`;
      }
    }, 800);
  }
}
