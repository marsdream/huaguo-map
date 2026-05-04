# 花果地图 🍎

> 北京徒步路线四季采集指南

在地图上展示北京周边徒步路线，按季节告诉用户能看到什么花、采到什么果。

## 功能

- 🗺️ Leaflet 地图，展示北京周边徒步路线
- 🌸🌿🍂❄️ 季节筛选：春季赏花、夏季乘凉、秋季采摘、冬季观雪
- 🔍 搜索路线、地点、花果名称
- 📋 路线详情：位置、难度、距离、季节花果信息

## 技术栈

- 纯静态 HTML/CSS/JS，无需后端
- Leaflet 地图（OpenStreetMap）
- Cloudflare Pages 托管

## 部署

```bash
# 推送到 GitHub，Cloudflare Pages 自动构建
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/marsdream/huaguo-map.git
git push -u origin main
```

然后在 Cloudflare Dashboard → Pages → 创建项目 → 接入 `huaguo-map` 仓库即可。

## 数据来源

路线数据来自网友经验整理，持续更新中。欢迎提交 PR 补充路线！

## License

MIT
