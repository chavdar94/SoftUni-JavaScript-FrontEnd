function carWash(commands) {
    let clean = 0;

    for (const command of commands) {
        switch (command) {
            case 'soap':
                clean += 10;
                break;
            case 'water':
                clean += clean * 0.2;
                break;
            case 'vacuum cleaner':
                clean += clean * 0.25;
                break;
            case 'mud':
                clean *= 0.9;
                break;
        }

    }
    console.log(`The car is ${clean.toFixed(2)}% clean.`);

}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);