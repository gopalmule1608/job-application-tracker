const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const hashPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashPassword
        })

        res.send({
            message: "User Register SucessFully",
            user
        })
    } catch (error) {
        res.send(
            Message = "User Failed",
            console.log(error)
        )
    }
}


const login = async (req, res) => {
    try {

        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(401).send({
                message: 'Invalid email or password'
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        )

        if (!isMatch) {
            return res.status(401).send({
                message: 'Invalid email or password'
            });
        }


        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        )


        res.send(res.status(200).send({
            message: 'Login Successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                password: user.password
            }
        }))

    } catch (error) {
        console.log(error)
    }
}




module.exports = { register, login }