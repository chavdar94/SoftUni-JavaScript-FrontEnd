function solve(array) {
    let parking = new Set()

    for (const item of array){
        let [direction, carNumber] = item.split(', ')
        if (direction === 'IN'){
            parking.add(carNumber)
        } else {
            parking.delete(carNumber)
        }
    }

    if (parking.size === 0){
        console.log('Parking Lot is Empty');
    } else {
        console.log([...parking].sort((a, b) => a.localeCompare(b)).join('\n'));
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])