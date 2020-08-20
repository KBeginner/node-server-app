const mysql = require('mysql')

// 数据库链接配置
const config = {
    database: 'community',
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    connectTimeout: 5000,           // 链接超时
    multipleStatements: true       // 是否允许一个query中包含多条sql语句
}

module.exports = mysql.createConnection(config)