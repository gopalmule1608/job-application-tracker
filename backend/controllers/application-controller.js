const Application = require("../models/application.model")

const getAllApplication = async (req, res) => {
    try {
        const applications = await Application.find()

        res.status(200).json({
            message: "Applications Fectch Sucessfully",
            applications
        })

    } catch (error) {
        console.log(error)
    }
}

const getApplication = async (req, res) => {
    try {
        const { id } = req.params
        const application = await Application.findById(id)
        res.status(200).json({
            message: "Application Fetch Sucessfullly",
            application
        })
    } catch (error) {
        console.log(error)
    }
}

const createApplication = async (req, res) => {
    try {
        const formData = req.body

        const data = {
            userId: req.user.id,
            ...formData
        }

        const application = await Application.create(data)

        res.status(200).json({
            message: "Application Create Sucessfully",
            application
        })

    } catch (error) {
        console.log(error)
    }
}

const updateApplication = async (req, res) => {
    try {
        const { id } = req.params
        const formData = req.body

        const application = await Application.findByIdAndUpdate(id, formData, { new: true })

        res.status(200).json({
            message: "Application Update Sucessfullly",
            application
        })
    } catch (error) {
        console.log(error)
    }
}

const deleteApplication = async (req, res) => {
    try {
        const { id } = req.params
        const application = await Application.findByIdAndDelete(id)

        res.status(200).json({
            message: "Application Delete Sucessfullly",
            application
        })
    } catch (error) {
        console.log(error)
    }
}







module.exports = { getAllApplication, createApplication, getApplication, updateApplication ,deleteApplication}