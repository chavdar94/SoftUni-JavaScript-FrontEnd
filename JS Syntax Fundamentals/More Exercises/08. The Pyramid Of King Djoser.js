function pyramidBuilder(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let pyramidHeight = 0;

    for (let i = base; i >= increment; i -= 2) {
        if (base === 2 || base === 1) {
            gold += base * base * increment;
            pyramidHeight++;
            break;
        }
        pyramidHeight++;
        let stonesNeeded = (base - 2) ** 2;
        if (pyramidHeight % 5 === 0) {
            lapisLazuli += (base * base - stonesNeeded) * increment;
        } else {
            marble += (base * base - stonesNeeded) * increment;
        }
        base -= 2;
        stone += stonesNeeded * increment;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight * increment)}`);
}

pyramidBuilder(12, 1)