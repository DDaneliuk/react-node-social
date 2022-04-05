const router = require("express").Router();
const User = require("../model/user");
const {validationJWT} = require("../helpers/validationJWT");

//GET USER
router.get("/:id", validationJWT, async (req, res) => {
    try {
        const userDB = await User.findById(req.params.id);
        const {password, ...user} = userDB._doc
        console.log(user)
        res.json({user})
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
