// ui.js - Gère l'affichage des éléments du jeu

function updatePlayerUI() {
  let pourcentagePlayer = (player.hp / player.maxHp) * 100;
  document.getElementById("player-hp-bar").style.width = pourcentagePlayer + "%";
  document.getElementById("player-hp-text").innerText = `HP: ${player.hp}`;
  document.getElementById("player-xp-text").innerText = `XP : ${player.xp}`;
  document.getElementById("player-level-text").innerText = `Niveau : ${player.level}`;
}

function updateEnnemiUI() {
  let pourcentageEnnemi = (ennemiActuel.hp / ennemiActuel.maxHp) * 100;
  document.getElementById("enemy-hp-bar").style.width = pourcentageEnnemi + "%";
  document.getElementById("enemy-hp-text").innerText = `HP : ${ennemiActuel.hp}`;
  document.getElementById("enemy-name").innerText = ennemiActuel.name;
  document.getElementById("enemy-image").src = ennemiActuel.image;
}

function updateStory(text) {
  document.getElementById("story").innerHTML = text;
}

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
