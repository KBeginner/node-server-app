const {router, database, response} = require('../../utils/Middleware')

router.get('/note/getNote', (req, res)=>{
    console.log(__dirname)
    res.sendFile('E:/Workspace/node-server-app/uploads/df53614bebb0b08b2b76c19015765838' );
    // if (!req.query.id) {
    //     res.json(response(400, 'id不能为空'))
    //     return
    // }
    // let result = new Object()
    // database.query(`select * from notes where id='${req.query.id}'`, (err, data)=>{
    //     if (err) {
    //         res.json(response(500, err))
    //     } else {
    //         result.id = data[0].id
    //         result.userId = data[0].userId
    //         result.title = data[0].title
    //         result.content = data[0].content
    //         res.json(response(200, result))
    //     }
    // })
})

module.exports = router