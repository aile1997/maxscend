# 树牌页面开发规范

## 背景
MAXSCEND 20周年活动，58个合作品牌各有一个树牌页面，通过二维码扫描访问。

## 数据来源
- Excel: `src/assets/树牌信息0324.xlsx`
- Figma 设计: `https://www.figma.com/design/6s5hL8Cwnq3fUiHbTCktr7/Untitled?node-id=106-3042`

## 路由
引入 react-router-dom，动态路由 `/wish-:slug`
例如: `/wish-oppo`, `/wish-mi`, `/wish-asml`

原有5个页面保持在根路径 `/`，不变。

## 页面结构
每个品牌页 = 公共模板 + 品牌变量

### 公共模板（两种树）
- 客户(21个): 树种="娜塔栎"，专属背景图和介绍文案
- 供应商(31个) + 合作伙伴(6个): 树种="水杉"，专属背景图和介绍文案

### 品牌变量
- slug: 路由标识 (如 oppo, mi, asml)
- brandName: 品牌简称 (如 OPPO, Xiaomi, ASML)
- fullName: 全称
- years: 合作年数 (2027 - 合作起始年)
- category: "客户" | "供应商" | "合作伙伴"
- logo: 品牌logo路径

### 动态文案
- 有合作年份的: "在与 {品牌} 携手走过第 {N} 年的这一年"
- 无合作年份的: "在与 {品牌} 携手多年"

### 可上传图片
目录: `public/wish-photos/`
命名: `{slug}.jpg` (如 wish-oppo.jpg)
如果文件不存在则显示默认占位图

## 文件结构
```
public/
  wish-photos/           <- 运维上传品牌树照片
  wish-logos/            <- 品牌logo
src/
  data/wish-brands.ts   <- 58个品牌配置数据
  screens/WishScreen.tsx <- 树牌页面模板组件
```

## 品牌数据 (从Excel提取)
见 src/assets/树牌信息0324.xlsx，共58条:
- 客户21个: OPPO, vivo, Xiaomi, HONOR, 华勤, 龙旗, 移远, 中诺, 天珑, 中兴, 广和通, 传音, XF, TCL, 麦博韦尔, 迅锐, 阳和通, 睿智, 盛隆维, 立讯智通, 歌尔
- 供应商31个: Qnity, 艾森, 中巨芯, 泉意光罩, SOITEC, 北方华创, 盛美, 芯源, 矽电, 广立微, 东方晶源, 欣奕华, 芯上微, 宏泰, ASML, AMAT, KLA, TEL, ARM, 越亚, Tower, 福联, ATX, 通富, 华天, 嘉盛, 科阳, NI, 楷登, 新硅, 广芯
- 合作伙伴6个: 己任, 中金, 天元, 立信, 飞图, 蠡开, 清华无锡院, 市半协

## 现有项目技术栈
- React 19 + TypeScript + Vite
- 纯CSS (index.css)，design-unit 响应式
- 无路由库 (需要新增 react-router-dom)
- 部署: 宝塔静态站 + Cloudflare Workers

## 注意事项
- 保持现有5个页面完全不变
- logo 从 Figma 导出 (node 106:3042 下每个品牌 frame 里有 logo)
- 新对话需要先连接 Figma MCP 获取设计细节
- 参考 Figma 节点 106:2605 (娜塔栎公共模板) 和 106:2727 (水杉公共模板)
