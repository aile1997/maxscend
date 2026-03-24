# MAXSCEND 20th Anniversary - 全局架构文档

## 项目概述

卓胜微 20 周年合作伙伴大会活动微站，包含主站（活动信息）+ 60 个品牌树牌独立页面。

**线上地址：** `anniv.maxscend.com`（内网宝塔）/ `maxscend.1622598684.workers.dev`（Cloudflare）

## 技术栈

| 层 | 技术 | 说明 |
|---|---|---|
| 框架 | React 19 + TypeScript | SPA，Vite 构建 |
| 路由 | react-router-dom v7 | `/` 主站，`/:slug` 树牌页 |
| 样式 | 纯 CSS（index.css） | design-unit 体系，1du = viewport/402 |
| 图片缩放 | react-zoom-pan-pinch | 仅导览页地图放大 |
| 部署 | 纯静态 dist/ | Cloudflare Pages + 宝塔 Nginx |
| 后端 | Node.js + Express + SQLite | 反馈收集 + 树牌后台管理（待建） |

## 目录结构

```
maxscend/
  index.html              # 入口 HTML（含 boot-screen 加载页）
  vite.config.ts          # Vite 配置
  public/
    figma-assets/         # 主站 SVG/图片资源
    brand-assets/         # 品牌故事页资源
    wish-assets/          # 树牌公共资源（KV背景、纸张背景等）
    wish-logos/           # 60个品牌 SVG logo
    wish-photos/          # 运维上传的树照片（{slug}.jpg）
  src/
    main.tsx              # 入口：BrowserRouter 路由分发
    App.tsx               # 主站 SPA（5个 tab 页面）
    index.css             # 全局样式（~1500行）
    content.ts            # 文案/日程/联系人数据
    designAssets.ts       # 资源路径常量
    types.ts              # TypeScript 类型定义
    data/
      wish-brands.ts      # 60个品牌配置数据
    screens/
      HomeScreen.tsx      # 活动首页
      AgendaScreen.tsx    # 日程安排（主会场+分会场）
      BrandStoryScreen.tsx # 品牌故事
      GuideScreen.tsx     # 现场导览（地图+lightbox）
      ContactScreen.tsx   # 联系我们（电话+反馈）
      WishScreen.tsx      # 树牌页面模板（60个品牌共用）
    components/
      BottomNav.tsx       # 底部导航栏
      EventBackdrop.tsx   # 活动背景（Group 251 SVG）
      Icons.tsx           # 图标组件
  server/                 # 后端（待完善）
    index.js              # Express + SQLite
    feedback.db           # 反馈数据库
  dist/                   # 构建产物
  dist-deploy.tar.gz      # 部署包
```

## 路由架构

```
main.tsx (BrowserRouter)
  ├── /:slug        → WishScreen       # 匹配 wish-brands.ts 里的 slug
  └── /             → App              # 主站 SPA
                         ├── home      → HomeScreen
                         ├── agenda    → AgendaScreen
                         ├── story     → BrandStoryScreen
                         ├── guide     → GuideScreen
                         └── contact   → ContactScreen
```

**主站导航**：底部 Tab 切换（useState），不产生浏览器历史记录。
**树牌页面**：独立路由，如 `/wish-oppo`、`/wish-asml`，直接访问。

## 设计体系

**设计单位 (design-unit)**：`--design-unit: calc(min(100vw, 430px) / 402)`

Figma 设计稿宽 402px，所有尺寸用 `calc(N * var(--design-unit))` 换算。最大宽度限制 430px。

树牌页面用独立的 `--du` 变量，同样基于 402px。

## 数据流

### 主站数据
- `content.ts`：静态数据（日程、联系人、场地信息）
- `designAssets.ts`：资源路径映射

### 树牌数据
- `wish-brands.ts`：60个品牌配置（slug、名称、年数、树种）
- 品牌 logo：`/wish-logos/{slug}.svg`（从 Figma 导出）
- 树照片：`/wish-photos/{slug}.jpg`（运维上传，fallback 默认图）

### 两套树模板
| 模板 | 树种 | 适用 | 品牌数 |
|---|---|---|---|
| 娜塔栎 | 客户 | OPPO、vivo、小米等 | 21 |
| 水杉 | 供应商 + 合作伙伴 | ASML、ARM、中金等 | 39 |

## 加载策略

### 主站
1. `index.html` 的 boot-screen（纯 HTML/CSS，无 JS 依赖）
2. React 挂载后预加载所有主站资源
3. 资源就绪 + MIN_SPLASH_MS(1.4s) 后隐藏 boot-screen
4. 从外部链接返回时跳过 splash（sessionStorage 记录）

### 树牌页面
1. 复用 boot-screen 作为加载指示
2. 动态预加载当前品牌的 6 张图片（KV、logo、照片等）
3. 预加载完成后调用 `__bootScreen.finish()` 显示页面

## 部署

### Cloudflare Pages（公网测试）
- GitHub 自动部署，push 即生效
- 域名：`maxscend.1622598684.workers.dev`

### 宝塔（内网生产）
1. `npm run build` 生成 dist/
2. `tar -czf dist-deploy.tar.gz -C dist .`
3. 上传到宝塔 `/www/wwwroot/anniv.maxscend.com/`
4. Nginx 配置 `try_files $uri $uri/ /index.html`（SPA fallback）

## 待办事项

### 1. 品牌 logo 适配
新上传的 PNG 格式 logo 需要在 WishScreen 里适配（当前代码引用 `.svg`，新 logo 是 `.png`）。

### 2. 树牌后台管理系统
- 60 个品牌模块，每个支持上传多张图片 + 编辑两行文字
- 上传的内容渲染为横向滑动卡片
- 技术方案：Express + SQLite + 简易管理界面
- 接口：`POST /api/wish/:slug/upload`、`GET /api/wish/:slug`

### 3. 投诉/反馈管理
- 已有 `POST /api/feedback` 接口
- 需要在后台管理界面中加入反馈列表查看功能

### 4. 加载页重做
- 需要按 Figma 设计稿（node 121:10）重新实现
- 使用百分比布局适配不同屏幕
- 文案更新为"卓胜微 20 周年庆暨合作伙伴大会"
