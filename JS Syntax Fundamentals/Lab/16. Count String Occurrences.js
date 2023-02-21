function countStringOccurrences(text, searchedWord) {
    let words = text.split(' ')
    let count = 0

    for (let word of words){
        if (word === searchedWord){
            count++
        }
    }
    console.log(count)
}

countStringOccurrences('This is a word and it also is a sentence',
'is')