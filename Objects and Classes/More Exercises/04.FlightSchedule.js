function solve(array) {
    const flights = {};

    let flightsArr = array[0];
    let status = array[1];
    let keyStatus = array[2][0];

    for (const flight of flightsArr) {
        let [number, ...destination] = flight.split(' ');
        destination = destination.join(' ')
        flights[number] = {destination, status: null};
    }

    for (const flight of status) {
        let [number, newStatus] = flight.split(' ');
        if (number in flights) {
            flights[number].status = newStatus;
        }
    }

    if (keyStatus === 'Ready to fly') {
        for (const flight of Object.entries(flights)) {
            let flightNumber = flight[0];
            if (flights[flightNumber].status === null) {
                flights[flightNumber].status = 'Ready to fly';
            }
        }
    }

    for (const flight of Object.entries(flights)) {
        let flightNumber = flight[0]
        if (flights[flightNumber].status === keyStatus){
            console.log(`{ Destination: '${flights[flightNumber].destination}', Status: '${flights[flightNumber].status}' }`);
        }
    }
}

// solve([['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
//     ['DL2120 Cancelled',
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK430 Cancelled'],
//     ['Cancelled']
// ]);


solve([['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
        ['DL2120 Cancelled',
            'WN612 Cancelled',
            'WN1173 Cancelled',
            'SK330 Cancelled'],
        ['Ready to fly']
    ]
);