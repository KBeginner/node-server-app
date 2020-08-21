const router = require('express').Router()

// 全局路由
router.use('*', require('./all'))

// 注册账号
router.use('/user/register', require('./user/register'))

// 用户登录
router.use('/user/login', require('./user/login'))

// 退出登录
router.use('/user/logout', require('./user/logout'))

// 获取用户
router.use('/user/getUser', require('./user/getUser'))

module.exports = router