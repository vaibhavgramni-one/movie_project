const express = require('express');
const middlewares = require('../middlewares/rating');
const { getRating, getRatingPagination, postRating, getRatingMovieId, checkUserRating } = require('../services/rating');


const router = express.Router();

router.post('/api/movieRating', checkUserRating, middlewares.postRatingValidate, async (req, res) => {
    try {

        console.log('creating rating db record');

        const data = await postRating(req.body);

        res.status(201).send({
            status: true,
            message: 'Data Submitted Successsfully',
            data
        });

    } catch (e) {
        res.status(500).json({
            status: false,
            message: 'Internal server error',
            error: {}
        })
    }
})

router.get('/api/movieRating', middlewares.getRatingValidate, async (req, res) => {
    try {

        const { pagination, page } = req.query;

        if (JSON.parse(pagination)) {
            console.log('fetching movie with pagination');

            const limit = parseInt(req.query.limit || '5');
            const skip = parseInt((page - 1) * limit);
            const rating = parseInt(req.query.rating || '1');

            const data = await getRatingPagination({}, { __v: 0, _id: 0, movieId: 0, createdAt: 0, updatedAt: 0 }, limit, skip, { rating });

            res.json({
                status: data.length ? true : false,
                message: data.length ? 'fetch success' : 'no record',
                data
            });

        }

        const data = await getRating({}, { __v: 0, _id: 0, movieId: 0, createdAt: 0, updatedAt: 0 });
        res.json({
            status: data.length ? true : false,
            message: data.length ? 'fetched successfully' : 'no record found',
            data
        })

    } catch (e) {
        res.status(400).json({
            status: false,
            message: 'Bad request',
            error: {}
        })
    }
})

router.get('/api/movieRatingMovieId', middlewares.getRatingMovieId, async (req, res) => {
    try {

        const data = await getRatingMovieId(req.body.movieId);

        res.json({
            status: data.length ? true : false,
            message: data.length ? 'data found' : 'no data found',
            data
        })

    } catch (e) {
        res.status(400).json({
            status: false,
            message: 'Bad Request',
            error: {}
        })
    }
})

module.exports = router
