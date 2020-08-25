const {router, database, response} = require('../../utils/Middleware')

router.get('/user/getUser', (req, res)=>{
    if (!req.query.id) {
        res.json(response(400, 'id不能为空'))
        return
    }
    database.query(`select * from users where id='${req.query.id}'`, (err, data)=>{
        err ? res.json(response(500, err)) : res.json(response(200, data))
    })
})

module.exports = router