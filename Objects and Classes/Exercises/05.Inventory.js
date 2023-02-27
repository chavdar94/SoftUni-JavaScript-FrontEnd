function solve(array) {
    let heroes = [];

    for (const heroInfo of array) {
        let [name, level, ...items] = heroInfo.split(' / ');
        let hero = {
            'name': name,
            'level': Number(level),
            'items': items
        };
        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }

}

solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
])