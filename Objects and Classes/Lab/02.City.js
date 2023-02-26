function solve(city) {
    for (const [key, value] of Object.entries(city)) {
        console.log(`${key} -> ${value}`);
    }
}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});

