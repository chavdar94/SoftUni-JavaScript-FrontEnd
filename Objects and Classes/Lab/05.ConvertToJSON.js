function convertToJSON(firstName, lastName, hairColor) {
    let obj = {
        'name': firstName,
        'lastName': lastName,
        'hairColor': hairColor
    }

    let jsonObj = JSON.stringify(obj)
    console.log(jsonObj);
}

convertToJSON('George', 'Jones', 'Brown')