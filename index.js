const teamCreator = document.getElementsByClassName('add-team')[0]
const teamDataUrl = "http://localhost:3000/data";
const currentTeams = document.getElementById('current-teams')


function createTeamCard(team) {
    const card = document.createElement('div')
    card.className = 'card'
    currentTeams.appendChild(card)

    const name = document.createElement('h3')
    name.textContent = `${team.name}`
    const logo = document.createElement('img')
    logo.className = 'logo'
    logo.src = team.logo
    card.append(name, logo)
    console.log(team)

}

teamCreator.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    
    e.preventDefault()
    
    let newTeam = {
        city: e.target.city.value,
        name: e.target.name.value,
        logo: e.target.elements.image.value,
    };
    function postTeam(newTeam){
        fetch(teamDataUrl, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newTeam)
        })
        .then (res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
        
    }
    teamCreator.reset()
    postTeam(newTeam)
    createTeamCard(newTeam)
}






document.addEventListener('DOMContentLoaded', () => {
    fetch(teamDataUrl)
        .then(res => res.json())
        .then(data => {
            const teams = data
            teams.forEach(team =>{
                createTeamCard(team)
            })
        })
})