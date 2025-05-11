function gainXp(xp) {
  player.xp += xp;
  let newLevel = Math.floor(player.xp / 10) + 1;

  if (newLevel > player.level) {
    player.level = newLevel;
    return true;
  }

  return false;
}
