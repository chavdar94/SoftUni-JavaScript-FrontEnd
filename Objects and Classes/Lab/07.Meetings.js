function solve(array) {
    let meetings = {};

    for (const info of array) {
        let [day, person] = info.split(' ');

        if (meetings.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }else {
            meetings[day] = person
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}

solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);