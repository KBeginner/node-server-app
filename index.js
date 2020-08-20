const express = require('express')
const bodyParser = require('body-parser')       // 请求体解析中间件
const cors = require('cors')                    // 解决跨域中间件
const app = express()   

app.use(bodyParser.json())              // 解析 application/json
app.use(bodyParser.urlencoded({ extended: true }))        // 解析 application/x-www-form-urlencoded

// 监听器
app.listen(30000, ()=>{
    console.log('服务已启动，请打开 localhost:30000 或 127.0.0.1:30000 访问')
})

// 解决跨域问题
app.use(cors({
    origin: ['localhost:8080'],         // 指定接收的地址
    methods: ['GET', 'POST'],           // 接受跨域的请求方法
    allowedHeaders: ['Content-Type','Authorization']        // 指定header
}))

/* 引入路由（接口） */

// 全局拦截
app.use('*', require('./routes/all'))
// 注册账号
app.use('/user/register', require('./routes/user/register'))
// 获取用户
app.use('/user/getUser', require('./routes/user/getUser'))



