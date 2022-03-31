const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('./model/user')
const cors = require('cors')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())

const urlParser = bodyParser.urlencoded({extended: false})
app.use(bodyParser.json(), urlParser)

const dbURL = 'mongodb+srv://ddaneliuk:3o5OGM3Zi6FmmEJZ@cluster0.m9aic.mongodb.net/social?retryWrites=true&w=majority'

mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((res) => {
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
        });
    })
    .catch(err => console.log(err))

app.post('/signup', async (req, res) => {
    console.log(req.body)
    const user = req.body;

    const takenUserName = await User.findOne({username: user.username})
    const takenUserEmail = await User.findOne({username: user.email})

    if (takenUserName || takenUserEmail) {
        res.json({message: 'Email or username has already taken'})
    }
    else {
        user.password = await bcrypt.hash(req.body.password, 10)

        const dbUser = new User ({
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.password
        })

        await dbUser.save()
        res.json({message:'Success'})
    }
})


