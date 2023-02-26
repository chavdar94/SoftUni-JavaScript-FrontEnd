function solve(info) {
    let addressBook = {};

    for (const personInfo of info) {
        let [name, number] = personInfo.split(':');
        addressBook[name] = number;
    }

    const sorted = Object.fromEntries(
        Object.entries(addressBook)
            .sort((a, b) => a[0].localeCompare(b[0]))
    )

    for (const [name, address] of Object.entries(sorted)) {
        console.log(`${name} -> ${address}`);
    }
}


solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);