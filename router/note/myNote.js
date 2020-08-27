const {router, database, response, path} = require('../../utils/Middleware')

router.get('/note/getNote', (req, res)=>{
    if (!req.query.userId) {
        res.json(response(400, 'userId不能为空'))
        return
    }
    database.query(`select * from notes where userId='${req.query.userId}'`, (noteErr, noteData)=>{
        if (noteErr) {
            res.json(response(500, noteErr))
            return
        } else {
            noteData.map(note=>{
                database.query(`select * from files where noteId='${note.id}'`, (fileErr, fileData)=>{
                    if (fileErr) {
                        res.json(response(500, fileErr))
                        return
                    }
                    let result = new Object()
                    result.id = note.id
                    result.userId = note.userId
                    result.title = note.title
                    result.content = note.content
                    result.files = fileData
                    return result
                })
            })
            res.json(response(200, noteData))
        }
    })
})

module.exports = router