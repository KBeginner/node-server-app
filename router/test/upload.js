const {router, response, multer, path} = require('../../utils/Middleware')

let upload = multer({dest: 'uploads/'})         // 当前目录下建立文件夹uploads

router.post('/upload', upload.single('file'), (req, res)=>{
    const defPath = path.join(__dirname, '../../')
    console.log(__dirname, '__dirname')
    console.log(__filename, '__filename')
    console.log(defPath, 'defPath')
    res.json(response(200, '上传成功'))
})

module.exports = router