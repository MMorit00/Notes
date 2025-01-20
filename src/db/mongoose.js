// 1. 引入mongoose
const mongoose = require("mongoose");

const MONGODB_URL = "mongodb://127.0.0.1:27017/notes-api";

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((error) => {
    console.log("MongoDB 连接错误:", error);
  });

// 添加连接监听
mongoose.connection.on("connected", () => {
  console.log("成功连接到 MongoDB 数据库");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB 连接错误:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB 连接断开");
});
