const {router, database, response} = require('../../utils/Middleware')

router.get('*', (req, res)=>{
    console.log('login')
    if (!req.query.account) {
        res.json(response(400, 'account不能为空'))
        return
    } 
    else if (!req.query.password) {
        res.json(response(400, 'password不能为空'))
        return
    }
    let sql = `select * from users where account='${req.query.account}'`
    database.query(sql, (err, data)=>{
        if (err) {
            res.json(response(500, err))
        } else {
            if (data[0].password==req.query.password) {
                req.session.username = req.query.account
                res.json(response(200, '登录成功'))
            } else {
                res.json(response(400, '密码错误'))
            }
        }
    })
})

module.exports = router