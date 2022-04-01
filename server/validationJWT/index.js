const jwt = require('jsonwebtoken')

function validationJWT(req, res, next){
    const token = req.headers['x-access-token']?.split(' ')[1]

    if (token){
        jwt.verify(token, 'secret', (err, decode) =>{
            if (err) return res.json({
                isLoggedIn: false,
                message: 'Failed To Authenticate'
            })
            req.user = {};
            req.user.id = decode.id
            req.user.username = decode.username
            next()
        })
    } else {
        res.json({message: 'Incorrect user Token', isLoggedIn: false})
    }
}

module.exports = {validationJWT}
