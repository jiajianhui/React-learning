// 导入express
const express = require('express')
const cors = require('cors'); // 引入cors模块；允许前端通过不同的端口来访问资源。

// 创建对象
const app = express()

app.use(cors())

// 设置静态资源中间件
app.use(express.static(__dirname + '/public'))

// 创建路由
app.get('/', (req, res) => {
    res.send('hello express')
})

// 监听端口、启动服务
app.listen(9000, () => {
    console.log('服务已启动……');
    
})