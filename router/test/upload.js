const {router, response, multer} = require('../../utils/Middleware')

let upload = multer({dest: 'uploads/'})         // 当前目录下建立文件夹uploads

router.post('/upload', upload.single('file'), (req, res)=>{
    console.log(req.file)
    res.json(response(200, '上传成功'))
})

module.exports = router