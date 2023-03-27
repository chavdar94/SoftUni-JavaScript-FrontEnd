function thePianist(piecesArray) {
    let n = Number(piecesArray.shift())
    let pieces = {}
    let commandIsStop = false

    for (let i = 0; i < n; i++) {
        const [piece, composer, key] = piecesArray.shift().split('|')
        pieces[piece] = {piece, composer, key}
    }

    for (let newPiece of piecesArray) {
        if (newPiece === 'Stop'){
            commandIsStop = true
            break;
        }
        const currentPiece = newPiece.split('|')
        const command = currentPiece[0]
        const piece = currentPiece[1]

        if (command === 'Add'){
            const composer = currentPiece[2]
            const key = currentPiece[3]

            if (piece in pieces) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = {piece, composer, key}
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command === 'Remove') {
            if (piece in pieces) {
                delete pieces[piece]
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            const newKey = currentPiece[2]
            if(piece in pieces) {
                pieces[piece].key = newKey
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    if (commandIsStop) {
        for (const el in pieces) {
            const { piece, composer, key } = pieces[el]
            console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
        }
    }
}


thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])