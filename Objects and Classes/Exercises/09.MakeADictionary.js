function solve(array) {
    const dictionary = {}

    for (const info of array) {
        let obj = JSON.parse(info)
        for (const [term, definition] of Object.entries(obj)) {
            dictionary[term] = definition
        }
    }

    let sorted = Object.fromEntries(Object.entries(dictionary).sort())

    for (const [term, desc] of Object.entries(sorted)) {
        console.log(`Term: ${term} => Definition: ${desc}`);
    }
}


solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route ' +
    'and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be ' +
    'amplified, transmitted, or recorded."}'
]);