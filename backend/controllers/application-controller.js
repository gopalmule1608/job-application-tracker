
const getApplication = (req, res) => {
    res.send({
        message: "data fetch sucessfully",
        user: req.user
    })
}

const addApplication = (req, res) => {
    res.send('data fetched sucessfully')
}

const editApplication = (req, res) => {
    res.send('data fetched sucessfully')
}

const deletelication = (req, res) => {
    res.send('data fetched sucessfully')
}



module.exports = { getApplication, addApplication, editApplication, deletelication }