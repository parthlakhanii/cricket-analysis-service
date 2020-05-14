'use strict'

const express = require('express')
const routes = express.Router()
const addMatchController = require('../controllers/add-match-data-controller')

routes.post('/matchData', addMatchController.addMatchData)

module.exports = routes