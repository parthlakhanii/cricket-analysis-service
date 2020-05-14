const mongoose = require('mongoose')
const {autoIncrement} = require('mongoose-plugin-autoinc')
require('mongoose-long')(mongoose)
const Schema = mongoose.Schema;

const matchDataSchema = new mongoose.Schema({
    match_data_id:{
        type: Number,
        required: true,
        unique: true
    },
    city : {
        type : String,
        required : false,
        unique : false
    },
    dates : [{
        type : String,
        required : false,
        unique : false
    }],
    gender : {
        type : String,
        required : false,
        unique : false
    },
    match_type : {
        type : String,
        required : false,
    },
    outcome : {
        by: {
            runs: Number
        },
        winner: String,
        required : false,
    },
    overs : {
        type : String,
        required : false,
    },
    player_of_match : [{
        type : String,
        required : false,
    }],
    teams : [{
        type : String,
        required : false,
    }],
    toss : {
        decision: String,
        winner: String,
        required : false,
    },
    umpires : [{
        type : String,
        required : false,
    }],
    venue : {
        type : String,
        required : false,
    }
}, {
    collection : 'match_data'
})

matchDataSchema.plugin(autoIncrement, {
    model : 'match_data',
    field : 'match_data_id',
    startAt : 1
})

module.exports = mongoose.model('match_data',matchDataSchema)