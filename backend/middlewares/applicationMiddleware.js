const jwt = require('jsonwebtoken')


const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Unautorized' })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        console.log(decoded)

        if (!decoded) {
            return res.status(401).json({ message: 'Unautorized' })
        }

        req.user = decoded

        next()


    } catch (error) {
        console.log(error)
    }
}


module.exports = authMiddleware