const playerHp = 20;
const goblinHp = 10;
function fight() { 
    let degats= Math.floor(Math.random() * 3)+1;
    goblinHp = goblinHp - degats;
    document.getElementById("story").innerHTML = `Tu attaques le gobelin ! Tu lui fais ${degats} dégats !Il lui reste ${goblinHP} HP` ;
}
