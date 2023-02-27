function solve(moviesArray) {
    let movies = {};

    for (const movie of moviesArray) {
        if (movie.includes('addMovie')) {
            let movieName = movie.split('addMovie ')[1];
            movies[movieName] = {};
            movies[movieName].name = movieName;
        } else if (movie.includes('directedBy')) {
            let [movieName, movieDirector] = movie.split(' directedBy ');
            if (movieName in movies) {
                movies[movieName].director = movieDirector;
            }
        } else if (movie.includes('onDate')) {
            let [movieName, movieDate] = movie.split(' onDate ');
            if (movieName in movies) {
                movies[movieName].date = movieDate;
            }
        }
    }

    for (let [key, value] of Object.entries(movies)) {
        if (movies[key].hasOwnProperty('name')
        && movies[key].hasOwnProperty('director')
        && movies[key].hasOwnProperty('date')){
            console.log(JSON.stringify(value));
        }
    }

}

// solve([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]);

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);