// function solve(townsInfo) {
//
//     let towns = [];
//
//     for (const townObj of townsInfo) {
//         let [name, latitude, longitude] = townObj.split(' | ');
//
//         const town = {
//             'town': name,
//             'latitude': Number(latitude).toFixed(2),
//             'longitude': Number(longitude).toFixed(2)
//         };
//
//         towns.push(town);
//     }
//
//     for (const town of towns) {
//         console.log(town);
//     }
// }
//
//
// solve(['Sofia | 42.696552 | 23.32601',
//     'Beijing | 39.913818 | 116.363625']);

function solve(townsInfo) {

    class Town {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = latitude.toFixed(2);
            this.longitude = longitude.toFixed(2);
        }

        townInfo() {
            console.log(`{ town: '${this.town}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`);
        }
    }

    let towns = [];

    for (const townObj of townsInfo) {
        let [name, latitude, longitude] = townObj.split(' | ');

        towns.push(new Town(name, Number(latitude), Number(longitude)));
    }

    for (const town of towns) {
        town.townInfo();
    }
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);