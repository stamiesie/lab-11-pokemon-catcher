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

const ctx = document.getElementById('chart').getContext('2d');

const data = [12, 19, 3, 5, 2, 3];
const labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelColors,
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: labelColors
        }]
    },
    options: {
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});