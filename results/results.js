import { getPokeStats } from '../localStorage.js';
import { findByUnderScoreId } from '../utils.js';
import { pokemonData } from '../data.js';
import { renderResults } from './render-results.js';

const table = document.getElementById('results-table');
const newGameButton = document.getElementById('new-game-button');

const resultsData = getPokeStats();

for (let item of resultsData) {
    const pokeChar = findByUnderScoreId(pokemonData, item._id);

    let tr = renderResults(item, pokeChar);

    table.append(tr);
}

newGameButton.addEventListener('click', () => {
    localStorage.removeItem('POKESTATS');
    window.location = '../';
});