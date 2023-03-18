function extractText() {
    const elements = Array.from(document.getElementById('items').children)
    const textArea = document.getElementById('result')

    for (const el of elements) {
        textArea.textContent += el.textContent + '\n'
    }
}