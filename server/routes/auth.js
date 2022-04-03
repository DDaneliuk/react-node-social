const router = require("express").Router();
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {validationJWT} = require("../helpers/validationJWT");

// validateUser
router.get('/', validationJWT, (req, res) => {
    res.json({
        message: [],
        isLoggedIn: true,
        data: {
            id: req.user.id,
            username: req.user.username,
            email: req.user.email,
        },
    })
})

// Register
router.post('/signup', async (req, res) => {
    const user = req.body;

    const takenUserName = await User.findOne({username: user.username})
    const takenUserEmail = await User.findOne({email: user.email})

    if (takenUserName) {
        res.json({message: 'Username has already taken'})
    } else if (takenUserEmail) {
        res.json({message: 'Email has already taken'})
    } else {
        user.password = await bcrypt.hash(req.body.password, 10)

        const dbUser = new User({
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.password
        })

        await dbUser.save()
        res.json({message: 'Success'})
    }
})

// Login
router.post('/login', async (req, res) => {
    const user = req.body;

    User.findOne({username: user.username})
        .then(dbUser => {
            if (!dbUser) {
                return res.json({message: 'Invalid username'})
            }
            bcrypt.compare(user.password, dbUser.password)
                .then(isCorrect => {
                    if (isCorrect) {
                        const payload = {
                            id: dbUser._id,
                            email: dbUser.email,
                            username: dbUser.username,
                        }
                        jwt.sign(
                            payload,
                            'secret',
                            {expiresIn: 36000},
                            (err, token) => {
                                if (err) return res.json({message: err})
                                return res.json({
                                    message: "Success",
                                    token: "Bearer " + token
                                })
                            }
                        )
                    } else {
                        return res.json({
                            message: 'Invalid Username or Password'
                        })
                    }
                })
        })
})

module.exports = router;
