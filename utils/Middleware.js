const express = require('express')
const database = require('./connectDB')
const response = require('./httpRes')

module.exports = {
    router : express.Router(),
    database : database,
    response : response
}