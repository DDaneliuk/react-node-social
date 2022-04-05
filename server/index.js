const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require('cors')
const dotenv = require('dotenv')
// routers
const router = express.Router();
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const profileRoute = require('./routes/profile')

dotenv.config()
const PORT = process.env.PORT || 3001;
const urlParser = bodyParser.urlencoded({extended: false})
const app = express();

app.use(cors())
app.use(router);
app.use(bodyParser.json(), urlParser)

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to DB"))
    .catch(err => console.log(err))

app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/profile', profileRoute)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});



