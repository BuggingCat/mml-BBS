// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Low, JSONFile } = require('lowdb');

const app = express();
const port = 3000;

// 设置数据库
const adapter = new JSONFile('db.json');
const db = new Low(adapter);

async function initDB() {
  await db.read();
  db.data ||= { posts: [] };
}

// 中间件
app.use(cors());
app.use(bodyParser.json());

// 获取所有帖子
app.get('/posts', async (req, res) => {
  await initDB();
  res.json(db.data.posts);
});

// 添加帖子
app.post('/posts', async (req, res) => {
  const { content, name, timestamp } = req.body;
  await initDB();
  db.data.posts.push({ content, name, timestamp });
  await db.write();
  res.json({ success: true });
});

// 删除某个帖子
app.delete('/posts/:index', async (req, res) => {
  const index = parseInt(req.params.index);
  await initDB();
  db.data.posts.splice(index, 1);
  await db.write();
  res.json({ success: true });
});

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));

