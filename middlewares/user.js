const Joi = require('joi');

const getUserValidate = (req , res , next) => {
    const { error } = Joi.object().keys().validate(req.body);

    if( error ) return returnResponse(res , error.details[0].message);

    next();
}

const postUserValidate = (req , res , next) => {
    const { error } = Joi.object().keys({
        
        name : Joi.string().min(3).max(30).trim().required(),
        age : Joi.number().min(0).required()

    }).validate(req.body);

    if(error) return returnResponse(res , error.details[0].message);

    next();
}

const returnResponse = (res , error) => {
    res.status(400).json({
        status : false,
        error
    })
}

module.exports = {
    getUserValidate,
    postUserValidate
}