import pokemonData from './data.js';

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


}