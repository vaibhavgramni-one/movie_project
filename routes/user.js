const express = require('express');
const User = require('../models/user');
const middlewares = require('../middlewares/user');
const { getUser , postUser } = require('../services/user');


const router = new express.Router();

router.post('/api/users' , middlewares.postUserValidate , async (req , res) => {
    try{

        console.log('creating user db record');

        const user = await postUser(req.body);

        res.status(201).json({
            status : true,
            message : 'User created successfully',
            data : user
        })

    }catch(e){
        res.status(500).json({
            status : false,
            message : 'Internal Server Error',
            error : {}
        })
    }
})

router.get('/api/users' , middlewares.getUserValidate , async(req, res) => {
    try{

        const data = await getUser({} , { __v : 0 });

        res.json({
            status : data.length ? true : false,
            message : data.length ? 'data found' : 'no data found',
            data
        })
    }catch(e){
        res.status(400).json({
            status : false,
            message : 'Bad Request',
            error : {}
        })
    }
})

module.exports = router;