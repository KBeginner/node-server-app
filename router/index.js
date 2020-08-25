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

// 上传图片
router.use('/', require('./test/upload'))

// 下载图片
router.use('/', require('./test/download'))

// 删除图片
router.use('/', require('./test/delete'))

// 新增笔记
router.use('/', require('./note/addNote'))

// 删除笔记
router.use('/', require('./note/deleteNote'))

// 查询笔记
router.use('/', require('./note/getNote'))

module.exports = router