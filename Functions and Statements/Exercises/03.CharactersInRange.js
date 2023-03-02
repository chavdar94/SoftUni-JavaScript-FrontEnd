function charsInRange(start, end) {
  let startRange = start.charCodeAt(0);
  let endRange = end.charCodeAt(0);
  let chars = [];

  if (startRange > endRange) {
    // let startPointer = startRange
    // startRange = endRange;
    // endRange = startPointer;
    [startRange, endRange] = [endRange, startRange];
  }

  for (let i = startRange + 1; i < endRange; i++) {
    chars.push(String.fromCharCode(i));
  }

  console.log(chars.join(' '));
}

charsInRange('C', '#');
