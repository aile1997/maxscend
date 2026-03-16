const express = require("express");
const initSqlJs = require("sql.js");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const DB_PATH = process.env.DB_PATH || path.join(__dirname, "feedback.db");

async function main() {
  const SQL = await initSqlJs();

  let db;
  if (fs.existsSync(DB_PATH)) {
    const buf = fs.readFileSync(DB_PATH);
    db = new SQL.Database(buf);
  } else {
    db = new SQL.Database();
  }

  db.run(`
    CREATE TABLE IF NOT EXISTS feedback (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now', '+8 hours'))
    )
  `);
  save();

  function save() {
    const data = db.export();
    fs.writeFileSync(DB_PATH, Buffer.from(data));
  }

  const app = express();
  app.use(cors());
  app.use(express.json());

  // Submit feedback
  app.post("/api/feedback", (req, res) => {
    const { content } = req.body;
    if (!content || !content.trim()) {
      return res.status(400).json({ error: "内容不能为空" });
    }
    db.run("INSERT INTO feedback (content) VALUES (?)", [content.trim()]);
    save();
    const row = db.exec("SELECT last_insert_rowid() as id")[0];
    res.json({ id: row.values[0][0] });
  });

  // List feedback
  app.get("/api/feedback", (_req, res) => {
    const result = db.exec("SELECT * FROM feedback ORDER BY id DESC LIMIT 200");
    if (!result.length) return res.json([]);
    const cols = result[0].columns;
    const rows = result[0].values.map((v) => Object.fromEntries(cols.map((c, i) => [c, v[i]])));
    res.json(rows);
  });

  // Admin page
  app.get("/admin", (_req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>反馈管理</title>
  <style>
    *{box-sizing:border-box}
    body{margin:0;padding:24px;font-family:-apple-system,"Segoe UI",sans-serif;background:#f5f5f5}
    h1{font-size:20px;margin:0 0 16px}
    table{width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.1)}
    th,td{padding:12px 16px;text-align:left;border-bottom:1px solid #eee}
    th{background:#fafafa;font-weight:600;font-size:13px;color:#666}
    td{font-size:14px}
    .empty{text-align:center;padding:48px;color:#999}
    .time{white-space:nowrap;color:#888;font-size:13px}
  </style>
</head>
<body>
  <h1>反馈记录</h1>
  <div id="app"><p class="empty">加载中...</p></div>
  <script>
    fetch("/api/feedback").then(r=>r.json()).then(rows=>{
      if(!rows.length){document.getElementById("app").innerHTML='<p class="empty">暂无反馈</p>';return}
      document.getElementById("app").innerHTML='<table><thead><tr><th>#</th><th>内容</th><th>时间</th></tr></thead><tbody>'
        +rows.map(r=>'<tr><td>'+r.id+'</td><td>'+String(r.content).replace(/</g,'&lt;')+'</td><td class="time">'+r.created_at+'</td></tr>').join('')
        +'</tbody></table>';
    });
  </script>
</body>
</html>`);
  });

  app.listen(PORT, () => {
    console.log(`Feedback server: http://localhost:${PORT}`);
    console.log(`Admin panel:     http://localhost:${PORT}/admin`);
  });
}

main().catch(console.error);
