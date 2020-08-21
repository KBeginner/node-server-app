const {router, database, response} = require('../../utils/Middleware')

router.get('*', (req, res)=>{
    console.log('logout')
    req.session.username = null
    res.json(response(200, '退出成功'))
})

module.exports = router