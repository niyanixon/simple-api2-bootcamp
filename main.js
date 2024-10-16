

document.querySelector('button').addEventListener('click', findPlayer)

function findPlayer(){
    const userInput = document.querySelector('input').value
    const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${userInput}`

    fetch(url)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            
            document.querySelector('.favplayer').innerText = data.player[0].strPlayer
            document.querySelector('.sportsteam').innerText = `Team: ${data.player[0].strTeam}`
            document.querySelector('img').src = data.player[0].strThumb
            document.querySelector('.position').innerText = `Position: ${data.player[0].strPosition}`
            document.querySelector('.number').innerText = `Number: ${data.player[0].strNumber}`
        
        })
          .catch(error => {
           console.log(`${error}`)
          });

}
