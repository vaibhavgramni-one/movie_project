const mongoose = require('mongoose');
const Rating = require('../models/rating');

function getRating(search, select) {

    console.log('fetching record service called');

    return new Promise((resolve, reject) => {
        Rating.find(search, select)
            .then(resolve)
            .catch(reject)
    })
}

function getRatingPagination(search, select, limit, skip, sort) {

    console.log('fetching record with pagination service called');

    return new Promise((resolve, reject) => {
        Rating.find(search, select)
            .sort(sort)
            .limit(limit)
            .skip(skip)
            .then(resolve)
            .catch(reject)
    })
}

function getRatingMovieId(movieId) {
    console.log('fetching record with movie id');

    return new Promise((resolve, reject) => {
        Rating.aggregate([
            { $match: { movieId: mongoose.Types.ObjectId(movieId) } },
            { $group: { _id: { rating: "$rating" }, "ratingCount": { $sum: 1 } } }
        ])
            .then(resolve)
            .catch(reject)
    })
}

function postRating(data) {

    console.log('creating rating service called');

    return new Promise((resolve, reject) => {
        const newData = new Rating({
            userId: data.userId,
            movieId: data.movieId,
            rating: parseInt(data.rating),
            comment: data.comment
        });
        newData.save()
            .then(resolve)
            .catch(reject)
    })
}


const checkUserRating = async (req, res, next) => {
    try {

        const data = await Rating.findOne({ userId: req.body.userId })

        if (data) throw ('This user has already provided a rating, cannot do it again !');

        next()

    } catch (e) {
        res.status(500).json({

            status: false,
            message: e.message,
            data: {}
        })
    }
}

module.exports = {
    getRating,
    getRatingPagination,
    postRating,
    getRatingMovieId,
    checkUserRating
}