import { pokemonData } from './data.js';
import { incrementCaught, incrementSeen } from './localStorage.js';

let numberOfTurns = 0;

export function getRandomPokemon() {
    // Use Math.floor and Math.random to get random pokemon from pokemonData array
    const randomIndex = Math.floor(Math.random() * pokemonData.length);

    return pokemonData[randomIndex];
}

export function findByUnderScoreId(array, id) {
    // loop through pokemonData array, find matching id
    for (let item of array) {
        if (item._id === id);

        return item;
    }
}

export function setThreePokemon() {
    // increment numberOfTurns for each random trio
    numberOfTurns++;
    // assign each trio of pokemon to be random using function made above
    let pokeOne = getRandomPokemon();
    let pokeTwo = getRandomPokemon();
    let pokeThree = getRandomPokemon();
    // check if pokemon selections are all unique ids, if not grab three more 
    while (pokeOne.id === pokeTwo.id || pokeOne.id === pokeThree.id || pokeTwo.id === pokeThree.id) {
        pokeOne = getRandomPokemon();
        pokeTwo = getRandomPokemon();
        pokeThree = getRandomPokemon();
    }
    // render randomized pokemon to HTML
    const img1 = renderPokeImage(pokeOne);
    const img2 = renderPokeImage(pokeTwo);
    const img3 = renderPokeImage(pokeThree);

    incrementSeen(pokeOne._id);
    incrementSeen(pokeTwo._id);
    incrementSeen(pokeThree._id);

    // make div for characters 
    const div = document.getElementById('characters');

    // use textContent to clear out div for each new game
    div.textContent = '';

    // append the div to the HTML
    div.append(img1, img2, img3);
}

export function renderPokeImage(pokemonItem) {
    // make an img
    const image = document.createElement('img');

    // assign the image an src
    image.src = pokemonItem.url_image;

    // assign image a class
    image.classList.add('poke-img');

    // make the image a listener to play the game
    image.addEventListener('click', () => {
        incrementCaught(pokemonItem._id);
        // stop game after 10 turns, direct to results page
        if (numberOfTurns <= 10) {
            setThreePokemon();
        } else {
            window.location = './results/index.html';
        }
    });
    return image;
}