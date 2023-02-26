function convertToObject(string) {
    // let obj = JSON.parse(string)
    for (const [key, value] of Object.entries(JSON.parse(string))) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')