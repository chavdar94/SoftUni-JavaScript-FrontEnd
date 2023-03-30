function shoppingList(input) {
    const commands = {
        'Urgent': urgent,
        'Unnecessary': unnecessary,
        'Correct': correct,
        'Rearrange': rearrange
    };

    const groceries = input.shift().split('!');


    function urgent(item) {
        if (!groceries.includes(item)) {
            groceries.unshift(item);
        }
    }

    function unnecessary(item) {
        if (groceries.includes(item)) {
            const itemIndex = groceries.indexOf(item);
            groceries.splice(itemIndex, 1);
        }
    }

    function correct(oldItem, newItem) {
        if (groceries.includes(oldItem)) {
            const itemIndex = groceries.indexOf(oldItem);
            groceries[itemIndex] = newItem;
        }
    }

    function rearrange(item) {
        if (groceries.includes(item)) {
            const itemIndex = groceries.indexOf(item);
            const itemName = groceries[itemIndex];
            groceries.splice(itemIndex, 1);
            groceries.push(itemName);
        }
    }


    for (let line of input) {
        if (line === 'Go Shopping!') {
            break;
        }
        line = line.split(' ');
        const command = line[0];
        const item = line[1];

        if (command === 'Correct') {
            const newItem = line[2];
            commands[command](item, newItem);
        } else {
            commands[command](item);
        }

    }

    console.log(groceries.join(', '));
}


shoppingList(
    ["Milk!Pepper!Salt!Water!Banana",
        "Urgent Salt",
        "Unnecessary Grapes",
        "Correct Pepper Onion",
        "Rearrange Grapes",
        "Correct Tomatoes Potatoes",
        "Go Shopping!"]
);