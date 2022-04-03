const router = require("express").Router();
const User = require("../model/user");
const {validationJWT} = require("../helpers/validationJWT");

// get all users with pagination
router.get('/', validationJWT, async (req, res) => {
    const page = req.query.page
    const limit = req.query.limit
    const startIndex = (page - 1) * limit;
    const totalCount = await User.count()
    if (page < 0 || page === 0) {
        res.json({message: "Invalid page number"})
    }
    const users = await User.find().skip(startIndex).limit(limit)
    res.json({
        totalCount: totalCount,
        page: page,
        limit: limit,
        users: users
    })
})

module.exports = router;
