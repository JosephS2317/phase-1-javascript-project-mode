// document.addEventListener('DOMContentLoaded', () => {
//     const searchButton= document.getElementById('searchButton')
//     searchButton.addEventListener('click', createTeamCard)
// })

// const teamSearch = document.getElementsByClassName('search-team')[0]
// const teamDataUrl = "http://localhost:3000/data"
// const currentTeams = document.getElementById('current-teams')
// const searchTeam = searchInput.value.toLowerCase()


//     function searchTeams() {
//         fetch(teamDataUrl)

//       .then((res) => res.json())
//       .then((teams => { 
//             currentTeams.innerHTML = ''
//             teams.forEach(team => {
//                 if (team.name.toLowerCase().includes(searchTeam)) {
//                 createTeamCard(searchTeam)
//                 }
//             }
//         })
//     }

//       .catch((error) => {
//         console.error(error)
//       })
  

//       function createTeamCard(team) {
//         fetch(teamDataUrl)
//           .then((res) => res.json())
//           .then((teams) => {
//             currentTeams.innerHTML = ''
//             teams.forEach((team) => {
//               if (team.name.toLowerCase().includes(searchTeam)) {
//                 const card = document.createElement('div')
//                 card.className = 'card'
//                 currentTeams.appendChild(card)
//                 const name = document.createElement('h3')
//                 name.textContent = `${team.name}`
//                 const logo = document.createElement('img')
//                 logo.className = 'logo'
//                 logo.src = team.logo
//                 const city = document.createElement('h3')
//                 city.textContent = `${team.city}`
//                 currentTeams.appendChild(card)
//               }
//             })
//           })
//           .catch((error) => {
//             console.error(error)
//           })
//       }

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', searchTeams);
  });
  
  const teamSearch = document.getElementsByClassName('search-team')[0];
  const teamDataUrl = "http://localhost:3000/data";
  const currentTeams = document.getElementById('current-teams');
  const teamInput = document.getElementById('searchInput')
  
  function searchTeams() {
    fetch(teamDataUrl)
      .then((res) => res.json())
      .then((teams) => {
        currentTeams.innerHTML = '';
        const foundTeams = teams.filter((team) => team.name.toLowerCase().includes(teamInput.value.toLowerCase()));
        foundTeams.forEach((team) => {
          createTeamCard(team);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  function createTeamCard(team) {
    const card = document.createElement('div');
    card.className = 'card';
    currentTeams.appendChild(card);
  
    const name = document.createElement('h3');
    name.textContent = team.name;
  
    const logo = document.createElement('img');
    logo.className = 'logo';
    logo.src = team.logo;
  
    const city = document.createElement('h3');
    city.textContent = team.city;
  
    card.append(name, logo, city);
  }