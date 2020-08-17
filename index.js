let express = require('express')
let app = express()

app.listen(30000, ()=>{
    console.log('服务已启动，请打开 localhost:30000 或 127.0.0.1:30000 访问')
})

app.post('/', (req, res)=>{
    res.json('hello wrold')
})