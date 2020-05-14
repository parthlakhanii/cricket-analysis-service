'use strict'
const addMatchService = require('../services/add-match-data-service')
const { httpStatusCode, generateSendErrorResponse} = require('../lib/utils')

const addMatchData = async (req, res) => {
    try {
        let response = null
        if (req.body) {
            response = await addMatchService.addMatchData(req.body)
        }
        const statusCode = response.status_code || httpStatusCode.OK
        return res.status(statusCode).send(response)
    } catch (error) {
        console.log('error - controller')
        console.log(error)
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while inserting Match data'))
    }
}

module.exports = {
    addMatchData
}