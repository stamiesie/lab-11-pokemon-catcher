import { getPokeStats } from '../localStorage.js';
import { findByUnderScoreId } from '../utils.js';
import { pokemonData } from '../data.js';
import { renderResults } from './render-results.js';

const table = document.getElementById('results-table');

const resultsData = getPokeStats();

for (let item of resultsData) {
    const pokeChar = findByUnderScoreId(pokemonData, item._id);
    console.log(pokeChar);
    let tr = renderResults(item, pokeChar);

    table.append(tr);
}