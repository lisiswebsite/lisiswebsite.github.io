// Function to dynamically render the roster based on selected view
function renderRoster(view) {
    const rosterSection = document.getElementById('roster');
    rosterSection.innerHTML = ''; // Clear the section before rendering

    if (view === 'list') {
        // List View
        let table = '<table>';
        table += '<tbody>'; // No <thead> for list view
        players.forEach(player => {
            table += `
                <tr class="list-player-row">
                    <td><img src="${player.image}" alt="${player.name}" class="player-img"></td>
                    <td>
                        <div class="player-left">
                            <p class="player-details-small">${player.pos} | ${player.ht} | ${player.bt}</p>
                            <p class="player-name">${player.name}</p>  <!-- Updated class here -->
                        </div>
                    </td>
                    <td>
                        <div class="player-right">
                            <p class="player-details-small">${player.year} | ${player.hometown} | ${player.school}</p>
                            <a href="${player.bioLink}" class="player-bio-link">Full Bio</a>
                        </div>
                    </td>
                </tr>`;
        });
        table += '</tbody></table>';
        rosterSection.innerHTML = table;
    } else if (view === 'grid') {
        // Grid View
        rosterSection.className = 'grid-view';
        let table = `
            <table>
                <thead>
                    <tr>
                        <th>NO.</th>
                        <th>NAME</th>
                        <th>POS.</th>
                        <th>YEAR</th>
                        <th>HT.</th>
                        <th>HOMETOWN</th>
                        <th>HIGH SCHOOL/PREVIOUS SCHOOL</th>
                        <th>B/T</th>
                    </tr>
                </thead>
                <tbody>`;
        players.forEach(player => {
            table += `
                <tr>
                    <td>${player.no}</td>
                    <td>${player.name}</td>
                    <td>${player.pos}</td>
                    <td>${player.year}</td>
                    <td>${player.ht}</td>
                    <td>${player.hometown}</td>
                    <td>${player.school}</td>
                    <td>${player.bt}</td>
                </tr>`;
        });
        table += '</tbody></table>';
        rosterSection.innerHTML = table;
    } else if (view === 'cards') {
        // Cards View
        rosterSection.className = 'cards-view';
        players.forEach(player => {
            rosterSection.innerHTML += `
                <div class="player-card">
                    <img src="${player.image}" alt="${player.name}" class="player-img-card">
                    <p>#${player.no}</p>
                    <h2><strong>${player.name}</strong></h2>
                    <p>${player.pos}</p>
                    <p>${player.ht} / ${player.year} / ${player.bt}</p>
                    <p>${player.hometown} / ${player.school}</p>
                </div>`;
        });
    }
}

// Event listener for the dropdown menu
function changeView() {
    const view = document.getElementById('viewSelect').value;
    renderRoster(view);
}

// Initial render with default view
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('viewSelect').value = 'list'; // Set dropdown to List View by default
    renderRoster('list'); // Set default view to 'list'
});