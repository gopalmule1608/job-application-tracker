require('dotenv').config();

const express = require('express')
const app = express();
const coonectDb = require('./config/mongodb')
const cors = require('cors');
const authMiddleware = require('./middlewares/applicationMiddleware');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use('/api/auth', require('./routes/user.route'))
app.use('/api/application', authMiddleware, require('./routes/application.route'))


coonectDb()
app.listen(process.env.PORT, () => {
    console.log("Server strat... port 3000")
})