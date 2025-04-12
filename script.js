let playerHp = 20;
let goblinHp = 10;

function fight() { 
    let degatsPlayer = Math.floor(Math.random() * 3) + 1; // entre 1 et 3
    goblinHp = goblinHp - degatsPlayer;

    let degatsGoblin = Math.floor(Math.random() * 4); // entre 0 et 3
    playerHp = playerHp - degatsGoblin;

    if (goblinHp <= 0) {
        document.getElementById("story").innerHTML = "Tu as vaincu le gobelin !";
    } else if (playerHp <= 0) {
        document.getElementById("story").innerHTML = "Tu es mort !";
    } else {
        document.getElementById("story").innerHTML = 
            `Tu attaques le gobelin ! Tu lui fais ${degatsPlayer} dégâts ! Il lui reste ${goblinHp} HP. <br>` +
            `Le gobelin t'attaque ! Il te fait ${degatsGoblin} dégâts ! Il te reste ${playerHp} HP.`;
    }
}
function heal() {
    let heal = Math.floor(Math.random() * 5) + 2;
    playerHp += heal;

    if (playerHp > 20) {
        playerHp = 20;
    }

    document.getElementById("story").innerHTML = `💖 Tu récupères ${heal} HP. Tu as maintenant ${playerHp} HP.`;
}
