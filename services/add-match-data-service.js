'use strict'

const {logger, httpStatusCode, generateSuccessResponse} = require('../lib/utils')
const country = require('../models/match-data')

const addMatchData = async(body) => {
    try {
        let response;
        response = await country.insertMany(body)
        logger.debug('Inserted match data from service = %j',response)
        return generateSuccessResponse(response, 'match data added succesfully')
    } catch(error) {
        console.log('Error while inserting match data from service = %j', error)
        return generateSuccessResponse(error, 'Error while inserting match data', httpStatusCode.INTERNAL_SERVER_ERROR)
    }
}



module.exports = {
    addMatchData
}