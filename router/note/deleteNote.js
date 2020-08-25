const {router, database, response, multer, fs} = require('../../utils/Middleware')

router.post('/note/deleteNote', (req, res)=>{
    if (!req.body.id) {
        res.json(response(400, 'id不能为空'))
        return
    }
    database.query(`select * from files where noteId='${req.body.id}'`, (err, data)=>{
        if (err) {
            res.json(response(500, err))
            return
        }
        // 删除文件
        data.forEach(el=>fs.unlinkSync(el.path))
        // 左连接删除两表数据
        let sql = `delete notes,files from notes left join files on notes.id=files.id where notes.id='${req.body.id}'`
        database.query(sql, (error, result)=>{
            err? res.json(response(500, err)) : res.json(response(200, '删除成功'))
        })
    })
})

module.exports = router