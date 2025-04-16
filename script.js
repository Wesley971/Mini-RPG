let playerHp = 20;
let ennemis = [ 
    {name: "Gobelin", hp: 10},
    {name : "squelette", hp: 15},
    {name : "ogre", hp: 20},
    {name : "dragon", hp: 30},
];
let ennemiActuel = ennemis[0]; // Le gobelin

function fight() { 
    let damagePlayer = Math.floor(Math.random() * 3) + 1; // entre 1 et 3
    ennemiActuel.hp = ennemiActuel.hp - damagePlayer;

    let damageMonster = Math.floor(Math.random() * 4); // entre 0 et 3
    playerHp = playerHp - damageMonster;

    if (ennemiActuel.hp <= 0) {
        document.getElementById("story").innerHTML = "Tu as vaincu le monstre !";
    } else if (playerHp <= 0) {
        document.getElementById("story").innerHTML = "Tu es mort !";
    } else {
        document.getElementById("story").innerHTML = 
            `Tu attaques le ${ennemiActuel.name} ! Tu lui fais ${damagePlayer} dégâts ! Il lui reste ${ennemiActuel.hp} HP. <br>` +
            `Le ${ennemiActuel.name} t'attaque ! Il te fait ${damageMonster} dégâts ! Il te reste ${playerHp} HP.`;
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
