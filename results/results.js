import { getPokeStats } from '../localStorage.js';
import { findByUnderScoreId } from '../utils.js';
import { pokemonData } from '../data.js';
import { renderResults } from './render-results.js';
import { makeSeenArray, makeCaughtArray, makeLabelArray } from './mungeUtls.js';

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

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: makeLabelArray(resultsData),
        datasets: [
            {
                label: '# of times seen',
                data: makeSeenArray(resultsData),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: '# of times caught',
                data: makeCaughtArray(resultsData),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }

        ]
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