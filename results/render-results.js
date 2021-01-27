
// make a render function
export function renderResults(cartItem, pokeChar) {

    // render table elements - one row and three cells for results
    const tr = document.createElement('tr');

    const pokemonTd = document.createElement('td');
    const pokemonCaughtTd = document.createElement('td');
    const pokemonSeenTd = document.createElement('td');

    // replace their text content
    pokemonTd.textContent = pokeChar.pokemon;
    pokemonCaughtTd.textContent = cartItem.caught;
    pokemonSeenTd.textContent = cartItem.seen;

    // append table
    tr.append(pokemonTd, pokemonCaughtTd, pokemonSeenTd);

    return tr;
}









