const getRandomDadJoke = async () => {
    const url = 'https://icanhazdadjoke.com/'
    const jokeStream = await fetch(url, {
        headers: {
            Accept: 'application/json'
        }
    })
    const jsonJoke = await jokeStream.json()
    const joke = jsonJoke.joke
    // console.log(joke)
    return joke
}

const displayJoke = joke => {
    const h1 = document.querySelector('h1')
    h1.innerText = joke
}

const refreshJoke = async () => {
    const joke = await getRandomDadJoke()
    displayJoke(joke)
}

// load first joke
refreshJoke()

setInterval(refreshJoke, 10000)