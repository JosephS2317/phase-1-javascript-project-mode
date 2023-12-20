const teamCreator = document.querySelector('.container')
const teamDataUrl = "http://localhost:3000/data";
const currentTeams = document.getElementById('current-teams')

function createteamCard(team) {
    const card = document.createElement('div')
    card.className = 'card'
    currentTeams.appendChild(card)

    const name = document.createElement('h3')
    name.textContent = `${team.name}`
    const logo = document.createElement('img')
    logo.className = 'logo'
    logo.src = team.logo
    card.append(name, logo)

}

document.addEventListener('DOMContentLoaded', () => {
    fetch(teamDataUrl)
        .then(res => res.json())
        .then(data => {
            const teams = data
            teams.forEach(team =>{
                createteamCard(team)
            })
        })
})