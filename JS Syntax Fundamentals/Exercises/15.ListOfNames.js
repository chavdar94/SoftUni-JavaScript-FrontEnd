function sortNames(names) {
    names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    for (const [index, name] of names.entries()) {
        console.log(`${index + 1}.${name}`);
    }
}

sortNames(["John", "Bob", "Christina", "Ema"]);
