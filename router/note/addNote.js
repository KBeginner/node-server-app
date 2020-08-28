const {router, database, response, multer, moment} = require('../../utils/Middleware')

let uploads = multer({dest:'uploads/'})

router.post('/note/addNote', uploads.array('files', 5),  (req, res)=>{
    let params = req.body
    if (!params.userId) {
        res.json(response(400, 'userId不能为空'))
        return
    }
    else if (!params.title) {
        res.json(response(400, 'title不能为空'))
        return
    } 
    else if (req.files.length<=0) {
        res.json(response(400, 'files不能为空'))
        return
    }
    let createTime = moment().format('YYYY-MM-DD HH:mm:ss')
    let sql = `insert into notes (userId, title, content, createTime) values ('${params.userId}', '${params.title}', '${params.content}', '${createTime}')`
    database.query(sql, (err, data)=>{
        if (err) {
            res.json(response(500, err))   
            return
        } else {
            req.files.forEach(el=>{
                let fileSQL = `insert into files (noteId, path, fileName) values ('${data.insertId}', '${el.destination+el.filename}', '${el.originalname}')`
                database.query(fileSQL, (error, result)=>{
                    if (error) {
                        res.json(response(500, '上传图片报错'))
                    }
                })
            })
            res.json(response(200, '添加成功'))
        }
        
    })
})

module.exports = router