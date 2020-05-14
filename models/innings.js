const mongoose = require('mongoose')
const { autoIncrement } = require('mongoose-plugin-autoinc')
require('mongoose-long')(mongoose)
const Schema = mongoose.Schema;

const inningsSchema = new mongoose.Schema({
    innings_id: {
        type: Number,
        unique: true,
        required: true
    },
    score_id: {
        type: Schema.ObjectId,
        ref: 'ScoreCard',
        required: false
    },
    team1_name: {
        type: String,
        required: false
    },
    team2_name: {
        type: String,
        required: false
    },
    team1_run: {
        type: Number,
        required: false
    },
    team2_run: {
        type: Number,
        required: false
    },
    team1_wicket: {
        type: Number,
        required: false
    },
    team2_wicket: {
        type: Number,
        required: false
    },
    team1_p11: {
        type: String,
        required: false
    },
    team2_p11: {
        type: String,
        required: false
    },
    Date: {
        type: String,
        required: false
    },
    updated_on: {
        type: String,
        required: false,
        unique: false
    },
    created_on: {
        type: String,
        required: false,
        unique: false
    }
}, {
    collection: 'innings'
})

inningsSchema.plugin(autoIncrement, {
    model: 'innings',
    field: 'innings_id',
    startAt: 1
})

module.exports = mongoose.model('innings', inningsSchema)