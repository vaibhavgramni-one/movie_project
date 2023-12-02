const Joi = require('joi');

const postMovieValidate = (req , res , next) => {
    try{
        const { error } = Joi.object().keys({

            name : Joi.string().trim().required()
    
        }).validate(req.body);
    
        if(error) throw error.details[0].message;
    
        next()

    }catch(e){
        
        res.status(400).send(e);
    }
}

module.exports = {
    postMovieValidate
}