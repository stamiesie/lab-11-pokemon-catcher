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

export function incrementSeen(_id) {
    const stats = getPokeStats();
    // check if seen before
    const poke = findByUnderScoreId(stats, _id);

    // if hasn't been seen before, initialize a new object
    if (!poke) {
        const newStat = {
            _id: _id,
            seen: 1,
            caught: 0,
        };
        stats.push(newStat);
    } else {
        // increment seen amount if it's been seen
        poke.seen++;
    }
    setPokeStats(stats);
}

export function incrementCaught(_id) {
    const stats = getPokeStats();
    // check if caught before
    const poke = findByUnderScoreId(stats, _id);

    poke.caught++;

    setPokeStats(stats);
}