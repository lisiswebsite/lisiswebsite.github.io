// Generate sidebar links
document.addEventListener('DOMContentLoaded', () => {
    const playerLinksContainer = document.getElementById('player-links');
    if (playerLinksContainer) {
        players.forEach(player => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');

            // Check if the current page is within the players folder
            const isPlayerPage = window.location.pathname.includes('/players/');
            link.href = isPlayerPage ? player.bioLink : `players/${player.bioLink}`;

            const img = document.createElement('img');
            img.src = player.image;
            img.alt = player.name;
            img.className = 'sidebar-player-img';

            const playerInfo = document.createElement('div');
            playerInfo.className = 'sidebar-player-info';

            const playerNo = document.createElement('div');
            playerNo.className = 'sidebar-player-no';
            playerNo.textContent = `#${player.no}`;

            const playerName = document.createElement('div');
            playerName.className = 'sidebar-player-name';
            playerName.textContent = player.name;

            const playerPos = document.createElement('div');
            playerPos.className = 'sidebar-player-pos';
            playerPos.textContent = player.pos;

            playerInfo.appendChild(playerNo);
            playerInfo.appendChild(playerName);
            playerInfo.appendChild(playerPos);

            link.appendChild(img);
            link.appendChild(playerInfo);
            listItem.appendChild(link);
            playerLinksContainer.appendChild(listItem);

            // Scroll to the specific player if on their page
            if (isPlayerPage && window.location.pathname.includes(player.bioLink)) {
                listItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
});