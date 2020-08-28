const {router, database, response, path} = require('../../utils/Middleware')

router.get('/note/getAllNote', (req, res)=>{
    database.query(`select * from notes order by createTime DESC`, (noteErr, noteData)=>{
        if (noteErr) {
            res.json(response(500, noteErr))
            return
        } else {
            let resData = noteData.map(note=>{
                let result = new Object()
                result.id = note.id
                result.userId = note.userId
                result.title = note.title
                result.content = note.content
                new Promise((ok, rej)=>{
                    database.query(`select * from files where noteId='${note.id}'`, (fileErr, fileData)=>{
                        if (fileErr) {
                            res.json(response(500, fileErr))
                            return
                        }
                        ok(fileData)
                    })
                }).then(ok=>result.files=ok)
                return result
            })
            res.json(response(200, resData))
        }
    })
})

module.exports = router