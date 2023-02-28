function solve(array) {
    let catalogue = {};

    for (const line of array) {
        let [name, price] = line.split(' : ');
        let firstChar = name[0];

        if (!catalogue.hasOwnProperty(firstChar)) {
            catalogue[firstChar] = [];
        }
        catalogue[firstChar].push({name, price});
    }

    for (let key of Object.keys(catalogue).sort()) {
        console.log(key);
        for (let prod of catalogue[key].sort((a, b) => a.name.localeCompare(b.name))) {
            console.log(` ${prod.name}: ${prod.price}`);
        }
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);