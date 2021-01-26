import { findByUnderScoreId } from './utils.js';

const POKESTATS = 'POKESTATS';

export function getPokeStats() {
    // list of seen and caught, like getCart
    let stats = JSON.parse(localStorage.getItem('POKESTATS'));

    if (!stats) {
        stats = [];
        localStorage.setItem(POKESTATS, JSON.stringify(stats));
    }
    return stats;
}

export function setPokeStats(newStats) {
    // sets to localStorage (key value pair with stringified array - newStats)
    localStorage.setItem(POKESTATS, JSON.stringify(newStats));
}