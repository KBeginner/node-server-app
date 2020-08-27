// 中间件
const express = require('express')
const session = require('express-session')      // 登录校验
const multer = require('multer')                // 上传文件
const fs = require('fs')
const path = require('path')
const moment = require('moment')
// 公用文件
const database = require('./connectDB')
const response = require('./httpRes')

module.exports = {
    session : session, 
    multer : multer,
    fs : fs,
    path : path,
    moment : moment,
    router : express.Router(),
    database : database,
    response : response
}