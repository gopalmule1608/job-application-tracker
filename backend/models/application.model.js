const mongoose = require('mongoose')

const ApplicationSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    jobTitle: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    jobUrl: {
        type: String,
        trim: true
    },
    applicationDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    status: {
        type: String,
        enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
        default: 'Applied'
    },
    notes: {
        type: String,
        trim: true
    }

}, {
    timestamps: true
})
const Application = mongoose.model('Application', ApplicationSchema)

module.exports = Application
