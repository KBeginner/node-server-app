const router = require('express').Router()

// 全局路由
router.use('*', require('./all'))

// 注册账号
router.use('/', require('./user/register'))

// 用户登录
router.use('/', require('./user/login'))

// 退出登录
router.use('/', require('./user/logout'))

// 获取用户
router.use('/', require('./user/getUser'))

module.exports = router