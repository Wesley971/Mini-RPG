let playerHp = 20;
let goblinHp = 10;

function fight() { 
    let degats = Math.floor(Math.random() * 3) + 1; // entre 1 et 3
    goblinHp = goblinHp - degats;

    if (goblinHp <= 0) {
        document.getElementById("story").innerHTML = "Tu as vaincu le gobelin !";
    } else {
        document.getElementById("story").innerHTML = `Tu attaques le gobelin ! Tu lui fais ${degats} dégâts ! Il lui reste ${goblinHp} HP.` ;
    }
}
