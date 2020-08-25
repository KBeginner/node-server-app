const {router, database, response} = require('../../utils/Middleware')

router.post('/user/register', (req, res)=>{
    if (!req.body.account) {
        res.json(response(400, 'account不能为空'))
        return
    } 
    else if (!req.body.password) {
        res.json(response(400, 'password不能为空'))
        return
    }
    let sql = `insert into users (account, password) values ('${req.body.account}', '${req.body.password}')`
    database.query(sql, (err, data)=>{
        if (err && err.sqlState==23000) {
            res.json(response(400, '该账号已注册'))
            return
        }
        err ? res.json(response(500, err)) : res.json(response(200, '注册成功'))
    })
})

module.exports = router