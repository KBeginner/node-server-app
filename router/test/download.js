const {router} = require('../../utils/Middleware')

router.get('/download', (req, res)=>{
    res.download('uploads/'+'3ea5f225044cf52ae765f5b4c755cbc3')
})

module.exports = router