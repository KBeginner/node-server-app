let fs = require('fs')

// readFile 异步函数
fs.readFile('../static/fs.test.txt', (err, data)=>{
    if (err){
        console.log(err.stack);
        return;
     }
     console.log(data.toString());
})

console.log("程序执行完毕");