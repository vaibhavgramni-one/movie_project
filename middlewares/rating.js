const Joi = require('joi');

const postRatingValidate = (req , res , next) => {
    try{
        console.log('postRatingMiddleware');
        const { error } = Joi.object().keys({

            userId : Joi.string().hex().required(),
            movieId : Joi.string().hex().required(),
            comment : Joi.string().required(),
            rating : Joi.number().required()

        }).validate(req.body);

        if(error) throw error.details[0].message;

        next()

    }catch(e){
        res.status(400).json({
            status : false,
            message : 'Bad Request',
            error : e
        })
    }
}

const getRatingValidate = (req , res , next) => {
    try{
        
        const { error } = Joi.object().keys({
            pagination : Joi.string().required(),
            page: Joi.string().required(),
            limit : Joi.string().required(),
            rating : Joi.string().required()

        }).validate(req.query)

        if(error) throw error.details[0].message;

        next()

    }catch(e){
        res.status(400).json({
            status : false,
            message : 'Bad Request',
            error : e
        })
    }
}

const getRatingMovieId = (req , res , next) => {
    try{
         const { error } = Joi.object().keys({

            movieId : Joi.string().hex().required()

         }).validate(req.body);

         if(error) throw error.details[0].message;

         next()

    }catch(e){
        res.status(400).json({
            status : false,
            message : 'Bad Request',
            error : e
        })
    }   
}

module.exports = {
    postRatingValidate,
    getRatingValidate,
    getRatingMovieId
}