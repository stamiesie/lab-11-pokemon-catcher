// Seen function
export function makeSeenArray(arrOfObj) {
    // make an empty array for seen items to be collected into
    const seenArray = [];

    // loop through array to find seen items
    for (let item of arrOfObj) {

        // push seen items to new array created above
        seenArray.push(item.seen);
    }
    // return array of only seen items
    return seenArray;
}

// Caught function
export function makeCaughtArray(arrOfObj) {
    // make an empty array for caught items to be collected into
    const caughtArray = [];

    // loop through array to find caught items
    for (let item of arrOfObj) {

        // push caught items to new array created above
        caughtArray.push(item.caught);
    }
    // return array of only caught items
    return caughtArray;
}

// Label function
export function makeLabelArray(arrOfObj) {
    // make an empty array for pokemon names to be collected into
    const nameArray = [];

    // loop through array to find names
    for (let item of arrOfObj) {

        // push names to new array created above
        nameArray.push(item.name);
    }
    // return array of only pokemon names
    return nameArray;
}