const {router, response, fs} = require('../../utils/Middleware')

router.get('/delete', (req, res)=>{
    fs.unlinkSync('uploads/4d13e66158f1a93b96129071229c9afd')
    res.json(response(200, 'success'))
})

module.exports = router