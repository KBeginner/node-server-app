const {router, session, response} = require('../utils/Middleware')

// 配置session
router.use(session({
    secret: 'session_secret',       // 服务器端生成 session 的签名
    name: 'sessionId',          // 保存在本地cookie的一个名字 默认connect.sid
    resave: false,
    saveUninitialized: true,    // 强制保存 session 即使它并没有变化,。默认为 true
    cookie: {
        maxAge: 1000*60*1       // 过期时间(毫秒)
    }, 
    rolling: true       // 每次请求重置cookie，将重置过期时间（默认false）
}))

router.all('*', (req, res, next)=>{
    // 访问登录和注册接口不需要校验
    // if (req.baseUrl=='/user/login' || res.baseUrl=='/user/register') {
    //     next()
    // } 
    // // 检验登录状态
    // else {
    //     if (!req.session.username) {
    //         res.json(response(403, '无权限访问'))
    //     } else {
    //         next()
    //     }
    // }
    next()
})

module.exports = router