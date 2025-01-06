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
    
    // Populate bio information
    document.getElementById('playerBirthday').innerHTML = `<span class="label">Birthdate:</span> <span class="data">${player.birthday}</span>`;
    document.getElementById('playerMajor').innerHTML = `<span class="label">Major:</span> <span class="data">${player.major}</span>`;
    document.getElementById('playerFood').innerHTML = `<span class="label">Favorite Food:</span> <span class="data">${player.food}</span>`;
    document.getElementById('playerInterests').innerHTML = `<span class="label">Interests:</span> <span class="data">${player.interests}</span>`;
    document.getElementById('playerFunfact').innerHTML = `<span class="label">Fun Fact:</span> <span class="data">${player.funfact}</span>`;
} else {
    document.body.innerHTML = '<p>Player not found.</p>';
}

// Show "Back to Roster" link when scrolled to the bottom
document.addEventListener('DOMContentLoaded', () => {
    const backToRosterLink = document.querySelector('.backtoroster');

    if (backToRosterLink) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            if (scrollPosition >= documentHeight) {
                backToRosterLink.style.opacity = '1'; // Show the link
            } else {
                backToRosterLink.style.opacity = '0'; // Hide the link
            }
        });
    }
});