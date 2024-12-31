// Look up the player by name or number
const player = players.find(p => p.name === playerIdentifier || p.no == playerIdentifier);

if (player) {
    document.getElementById('playerImage').src = player.image;
    document.getElementById('playerNo').textContent = player.no;
    document.getElementById('playerName').textContent = player.name;
    document.getElementById('playerPosition').innerHTML = `<span class="label">Position:</span> <span class="data">${player.pos}</span>`;
    document.getElementById('playerYear').innerHTML = `<span class="label">Year:</span> <span class="data">${player.year}</span>`;
    document.getElementById('playerHeight').innerHTML = `<span class="label">Height:</span> <span class="data">${player.ht}</span>`;
    document.getElementById('playerBT').innerHTML = `<span class="label">B/T:</span> <span class="data">${player.bt}</span>`;
    document.getElementById('playerHometown').innerHTML = `<span class="label">Hometown:</span> <span class="data">${player.hometown}</span>`;
    document.getElementById('playerSchool').innerHTML = `<span class="label">School:</span> <span class="data">${player.school}</span>`;
} else {
    document.body.innerHTML = '<p>Player not found.</p>';
}