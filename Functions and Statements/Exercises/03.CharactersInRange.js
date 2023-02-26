function charsInRange(start, end) {
    let startRange = start.charCodeAt(0);
    let endRange = end.charCodeAt(0);
    let chars = [];

    if (startRange > endRange) {
        startRange = end.charCodeAt(0);
        endRange = start.charCodeAt(0);
    }

    for (let i = startRange + 1; i < endRange; i++) {
        chars.push(String.fromCharCode(i));
    }

    console.log(chars.join(' '));
}