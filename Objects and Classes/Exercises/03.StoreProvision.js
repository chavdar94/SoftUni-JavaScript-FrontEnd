function storeProvisions(firstArray, secondArray) {
    let storeItems = {};

    for (let i = 0; i < firstArray.length - 1; i += 2) {
        let itemName = firstArray[i]
        storeItems[itemName] = Number(firstArray[i + 1])
    }

    for (let j = 0; j < secondArray.length - 1; j += 2) {
        if (storeItems.hasOwnProperty(secondArray[j])) {
            storeItems[secondArray[j]] += Number(secondArray[j + 1]);
        } else {
            storeItems[secondArray[j]] = Number(secondArray[j + 1]);
        }
    }


    for (const storeItem in storeItems) {
        console.log(`${storeItem} -> ${storeItems[storeItem]}`);
    }
}

storeProvisions([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);