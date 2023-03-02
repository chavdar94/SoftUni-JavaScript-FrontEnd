function garageFunc(garageInfo) {
    let garage = {};

    for (const info of garageInfo) {
        let currentGarage = info.split(' - ');
        if (!(currentGarage[0] in garage)) {
            garage[currentGarage[0]] = {};
            garage[currentGarage[0]].cars = []
        }
        for (let i = 1; i < currentGarage.length; i++) {
            let carInfo = currentGarage[i].split(', ');
            const obj = {}
            for (const carInfoElement of carInfo) {
                let info = carInfoElement.split(': ');
                obj[info[0]] = info[1]
            }
            garage[currentGarage[0]].cars.push(obj);
        }
    }


    for (const key in garage){
        console.log(`Garage № ${key}`);
        let cars = garage[key].cars
        for (const car of cars){
            const props = []
            for (const property in car){
                props.push(`${property} - ${car[property]}`)
            }
            console.log(`--- ${props.join(', ')}`);
        }
    }
}


garageFunc(
    ['1 - color: blue, fuel type: diesel',
        '1 - color: red, manufacture: Audi', '2 - fuel type: petrol',
        '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']
);