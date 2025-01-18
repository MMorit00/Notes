// 1. 引入mongoose
const mongoose = require('mongoose');

// 2. 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/notes-api', {
    // 使用新的URL解析器
    useNewUrlParser: true,
    // 使用创建索引的新方式
    useCreateIndex: true,
    // 使用新的更新操作方式
    useFindAndModify: false
});


// 添加连接监听
mongoose.connection.on('connected', () => {
    console.log('成功连接到 MongoDB 数据库');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB 连接错误:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB 连接断开');
});