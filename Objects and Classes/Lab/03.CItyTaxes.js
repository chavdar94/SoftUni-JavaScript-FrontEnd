function cityTaxes(name, population, treasury) {
    let city = {
        'name': name,
        'population': population,
        'treasury': treasury,
        'taxRate': 10,
    };

    city.collectTaxes = () => city['treasury'] += Math.round(city['population'] * city['taxRate']);
    city.applyGrowth = (percentage) => city['population'] += Math.round(city['population'] * percentage / 100);
    city.applyRecession = (percentage) => city['treasury'] -= Math.round(city['treasury'] * percentage / 100);

    return city;
}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);