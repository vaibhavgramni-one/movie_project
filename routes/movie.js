const express = require('express');
const Movie = require('../models/movie');
const middlewares = require('../middlewares/movie');
const { getMovie , postMovie } = require('../services/movie');


const router =  express.Router()

router.post('/api/movies' , middlewares.postMovieValidate ,async (req , res) => {
    try{
        console.log('creating movie db record');

        const movie = await postMovie(req.body);
        res.status(201).json({
            status : true,
            message : 'submitted successfully',
            data : movie
        })
        
    }catch(error){
        res.status(400).send()
        res.status(400).json({
            status : false,
            message : 'Bad request',
            erorr : {}
        })

    }
})

router.get('/api/movies' , async (req , res) => {
    try{

        console.log('fetching movie record');

        let movie;

        const { search } = req.query;

        console.log(search);

        if(JSON.parse(search)){
            
            const name = new RegExp( `${ req.query['name'] ? req.query['name'] : '' }` , 'gi');
            
            console.log(name);

            const look = {
                name : name,
                }

            console.log(look);

            movie = await getMovie(look , {__v : 0 , createdAt : 0 , updatedAt : 0})
            
            console.log(movie);
        }
        else{

            movie = await getMovie({} , { __v : 0 , createdAt : 0 , updatedAt : 0 });
        
        }

        res.json({
            status : movie.length ? true : false,
            message : movie.length ? 'data found' : 'no record found',
            data : movie
        });

    }catch(e){
        res.status(400).json({
            status : false,
            message : 'Bad request',
            error : {}
        });
    }
})

module.exports = router
