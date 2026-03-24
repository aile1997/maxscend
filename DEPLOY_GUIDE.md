# MAXSCEND 20周年活动站 - 内网宝塔部署指南

## 基本信息

- 项目类型：纯静态站（无需 Node.js / PHP / 数据库）
- 域名：anniv.maxscend.com
- 部署包：dist-deploy.tar.gz（约 1.7MB）
- 服务器路径：/www/wwwroot/anniv.maxscend.com/

---

## 一、创建站点

1. 登录宝塔面板
2. 网站 → 添加站点
   - 域名：anniv.maxscend.com
   - 根目录：/www/wwwroot/anniv.maxscend.com
   - PHP版本：纯静态
   - 数据库：不创建
3. 提交

---

## 二、上传部署包

1. 宝塔面板 → 文件 → 进入 /www/wwwroot/anniv.maxscend.com/
2. 删除目录下默认生成的所有文件（index.html、404.html 等）
3. 上传 dist-deploy.tar.gz
4. 右键 dist-deploy.tar.gz → 解压 → 解压到当前目录
5. 删除 dist-deploy.tar.gz

解压后目录结构应为：

```
/www/wwwroot/anniv.maxscend.com/
├── index.html          ← 入口文件（必须在根目录）
├── assets/             ← JS + CSS
├── figma-assets/       ← 页面图片资源
└── brand-assets/       ← 品牌故事页资源
```

注意：index.html 必须直接在根目录，不能在子文件夹里。

---

## 三、Nginx 配置

站点设置 → 配置文件，替换 location 块为：

```nginx
location / {
    root /www/wwwroot/anniv.maxscend.com;
    index index.html;
    try_files $uri $uri/ /index.html;
}

# JS/CSS 长期缓存（文件名含 hash，更新后自动失效）
location /assets/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# 图片资源缓存
location /figma-assets/ {
    expires 7d;
    add_header Cache-Control "public";
}

location /brand-assets/ {
    expires 7d;
    add_header Cache-Control "public";
}
```

保存后 Nginx 会自动重载。

---

## 四、SSL 证书（推荐）

1. 站点设置 → SSL
2. 选择 Let's Encrypt → 勾选 anniv.maxscend.com → 申请
3. 开启「强制 HTTPS」

如果内网无法申请 Let's Encrypt，可使用自签证书或跳过此步。

---

## 五、DNS 解析

在域名管理后台添加 A 记录：

| 类型 | 主机记录 | 记录值 |
|------|---------|--------|
| A    | anniv   | 服务器内网IP |

如果是内网 DNS，在内网 DNS 服务器上添加对应解析。

---

## 六、验证

浏览器访问 https://anniv.maxscend.com （或 http://anniv.maxscend.com）

检查项：
- [x] 页面正常加载（有加载动画后显示首页）
- [x] 底部导航 5 个 tab 都能点击切换
- [x] 日程安排页可以上下滚动
- [x] 品牌故事页可以上下滚动
- [x] 现场导览页地图可以左右滑动
- [x] 联系我们页电话按钮可点击
- [x] 手机端访问正常（推荐用微信扫码测试）

---

## 七、更新部署

每次更新只需：
1. 获取新的 dist-deploy.tar.gz
2. 宝塔文件管理 → 进入站点目录
3. 全选删除旧文件
4. 上传新 tar.gz → 解压 → 删除 tar.gz

无需重启任何服务。

---

## 故障排查

| 现象 | 原因 | 解决 |
|------|------|------|
| 白屏 | index.html 不在根目录 | 检查目录结构，index.html 必须在 /www/wwwroot/anniv.maxscend.com/ 下 |
| 样式/图片丢失 | assets 目录缺失 | 重新解压部署包 |
| 404 | Nginx 未配置 try_files | 按第三步配置 Nginx |
| 手机打不开 | DNS 未解析 / 证书问题 | 检查 DNS + SSL 配置 |

---

## 联系

如有部署问题，联系前端开发。
