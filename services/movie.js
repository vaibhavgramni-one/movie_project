const Movie = require('../models/movie');

function getMovie(search , select ) {

    console.log(' fetching movie service called ');

    return new Promise((resolve , reject) => {
        Movie.find(search , select)
        .then(resolve)
        .catch(reject)
    })
}

function postMovie(data) {

    console.log(' creating movie service called ');

    return new Promise((resolve , reject) => {
        const newData = new Movie(data);
        newData.save()
        .then(resolve)
        .catch(reject)
    })
}

module.exports = {
    getMovie,
    postMovie
}