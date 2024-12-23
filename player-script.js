// Look up the player by name or number
const player = players.find(p => p.name === playerIdentifier || p.no == playerIdentifier);

if (player) {
    document.getElementById('playerImage').src = player.image;
    document.getElementById('playerImage').alt = player.name;
    document.getElementById('playerName').textContent = player.name;
    document.getElementById('playerDetails').textContent = `${player.pos} | ${player.ht} | ${player.bt}`;
    document.getElementById('playerPosition').textContent = player.pos;
    document.getElementById('playerYear').textContent = player.year;
    document.getElementById('playerHeight').textContent = player.ht;
    document.getElementById('playerWeight').textContent = player.wt;
    document.getElementById('playerHometown').textContent = player.hometown;
    document.getElementById('playerSchool').textContent = player.school;
    document.getElementById('playerBT').textContent = player.bt;
} else {
    document.body.innerHTML = '<p>Player not found.</p>';
}
