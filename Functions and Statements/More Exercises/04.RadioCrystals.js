function radioCrystal(array) {
    let desiredThickness = array[0];
    let xRayed = false;


    for (let i = 1; i < array.length; i++) {
        let currentCrystal = array[i];
        console.log(`Processing chunk ${array[i]} microns`);

        let operations = {
            'cut': 0,
            'lap': 0,
            'grind': 0,
            'etch': 0,
        };

        while (currentCrystal !== desiredThickness) {
            while (currentCrystal / 4 >= desiredThickness) {
                currentCrystal /= 4;
                operations['cut']++;
            }
            if (operations['cut'] > 0) {
                console.log(`Cut x${operations['cut']}`);
                console.log('Transporting and washing');
                currentCrystal = Math.floor(currentCrystal);
            }

            while (currentCrystal - currentCrystal * 0.2 >= desiredThickness) {
                currentCrystal *= 0.8;
                operations['lap']++;
            }
            if (operations['lap'] > 0) {
                console.log(`Lap x${operations['lap']}`);
                console.log('Transporting and washing');
                currentCrystal = Math.floor(currentCrystal);
            }


            while (currentCrystal - 20 >= desiredThickness) {
                currentCrystal -= 20;
                operations['grind']++;
            }
            if (operations['grind'] > 0) {
                console.log(`Grind x${operations['grind']}`);
                console.log('Transporting and washing');
                currentCrystal = Math.floor(currentCrystal);
            }


            while (currentCrystal - 2 >= desiredThickness-1) {
                currentCrystal -= 2;
                operations['etch']++;
            }
            if (operations['etch'] > 0) {
                console.log(`Etch x${operations['etch']}`);
                console.log('Transporting and washing');
                currentCrystal = Math.floor(currentCrystal);
            }


            if (currentCrystal < desiredThickness && !xRayed) {
                currentCrystal += 1;
                console.log(`X-ray x1`);
            }
        }
        console.log(`Finished crystal ${currentCrystal} microns`);

    }

}

// radioCrystal([1375, 50000])
radioCrystal([1375, 50000]);