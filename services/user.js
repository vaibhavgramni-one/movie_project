const User = require('../models/user');

function postUser(data) {
    return new Promise((resolve , reject) => {
        const user = new User({
            name : data.name,
            age : parseInt(data.age)
        })

        user.save()
        .then(resolve)
        .catch(reject)
    })
}

function getUser(search , select) {
    return new Promise(( resolve , reject ) => {
        const data = User.find(search , select)
        .then(resolve)
        .catch(reject)
    })
}

module.exports = {
    postUser,
    getUser
}
