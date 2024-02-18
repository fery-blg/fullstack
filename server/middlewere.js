const jwt = require('jswoswebtoken')

function checkAuth (req , res , next) {
    try {
        const token = req .headers.cookie.split ('=')[1]
        const decoded = jwt.verify(token , process.env.SECRET_KEY)

        if (decoded && decoded.exp < Date.now()) {
            res.clear
    }