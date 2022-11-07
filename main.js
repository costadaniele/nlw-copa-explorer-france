function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="/assets/${player1}.svg" alt="bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="/assets/${player2}.svg" alt="bandeira de ${player2}" />
    </li>
    
    `
}

let delay = -0.3;

function createCard(date, day, games) {
    delay = delay + 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}

document.querySelector('#cards').innerHTML = 
        createCard("22/11", "terça",
            createGame("france", "16:00", "australia") 
        ) + 
        createCard("26/11", "sábado",
            createGame("france", "13:00", "denmark") 
        ) + 
        createCard("30/11", "quarta",
            createGame("tunisia", "12:00", "france")
        )

/*

document.querySelector('#cards').innerHTML = `
        ${createCard("24/11", "quinta",
            createGame("brazil", "16:00", "serbia") + 
            createGame("brazil", "16:00", "serbia")
        )}
        ${createCard("28/11", "segunda",
            createGame("brazil", "13:00", "switzerland") + 
            createGame("portugal", "16:00", "uruguay")
        )}
        ${createCard("02/12", "sexta",
            createGame("brazil", "16:00", "cameroon") +
            createGame("brazil", "16:00", "serbia")
        )} 
`

*/