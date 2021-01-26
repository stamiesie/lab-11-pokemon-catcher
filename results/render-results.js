// import stats and id function
import { getPokeStats } from '../localStorage.js';
import { pokemonData } from '../data.js';
import { findByUnderScoreId } from '../utils.js';

// make a render function
export function renderResults() {
    // pull in pokestats
    const pokeStats = getPokeStats();

    // find matching ids in the pokestats by looping
    for (let item of pokeStats) {
        const pokeChar = findByUnderScoreId(pokemonData, item.id);

        // render table elements - one row and three cells for results
        const tr = document.createElement('tr');
        const pokemonTd = document.createElement('td');
        const pokemonCaughtTd = document.createElement('td');
        const pokemonSeenTd = document.createElement('td');

        // replace their text content
        pokemonTd.textContent = pokeChar.pokemon;
        pokemonCaughtTd.textContent = item.caught;
        pokemonSeenTd.textContent = item.seen;

        // append table
        tr.append(pokemonTd, pokemonCaughtTd, pokemonSeenTd);

        return tr;
    }
}









