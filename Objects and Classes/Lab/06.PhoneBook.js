function solve(info) {
    let phoneBook = {}

    for (const personInfo of info) {
        let [name, number] = personInfo.split(' ')
        phoneBook[name] = number
    }

    for (const [name, phone] of Object.entries(phoneBook)) {
        console.log(`${name} -> ${phone}`);
    }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])