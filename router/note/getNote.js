const {router, database, response, path} = require('../../utils/Middleware')

router.get('/note/getNote', (req, res)=>{
    if (!req.query.id) {
        res.json(response(400, 'id不能为空'))
        return
    }
    let result = new Object()
    database.query(`select * from notes where id='${req.query.id}'`, (noteErr, noteData)=>{
        if (noteErr) {
            res.json(response(500, noteErr))
            return
        } else {
            database.query(`select * from files where noteId='${req.query.id}'`, (fileErr, fileData)=>{
                if (fileErr) {
                    res.json(response(500, fileErr))
                    return
                }
                result.id = noteData[0].id
                result.userId = noteData[0].userId
                result.title = noteData[0].title
                result.content = noteData[0].content
                result.files = fileData
                res.json(response(200, result))
            })
        }
    })
})

module.exports = router