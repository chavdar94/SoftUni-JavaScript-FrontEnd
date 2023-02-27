function wordsTracker(array) {
    const [keyWords, ...words] = array;
    const wordsCount = {};

    for (const word of keyWords.split(' ')) {
        wordsCount[word] = 0;
    }

    for (const word of words) {
        if (word in wordsCount) {
            wordsCount[word]++;
        }
    }

    let sorted = Object.entries(wordsCount).sort((a, b) => b[1] - a[1]);
    for (const [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}


wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);

