# 观星地图

输入城市、区县或经纬度，自动读取当地日期与未来 16 天预报，计算每小时观星指数、最佳观测窗口、月相和当晚可见目标。

页面内置交互地图、90DX 等设备参数、iPhone 17 Pro / Redmi K90 Pro Max 星空摄影建议、目标方位指引、红光模式和 Pollinations AI 现场助手。

Designed by 石浩源。

## 本地运行

```powershell
python -m http.server 4173
```

打开 `http://localhost:4173`。

## 数据与计算

- 天气与地点搜索：Open-Meteo
- 地图：Leaflet + OpenStreetMap / CARTO
- 太阳、月亮与天体位置：SunCalc + Astronomy Engine
- AI 增强：Pollinations 文本模型；不可用时自动降级为本地规则
- 首图：NASA/KSC `KSC-20191031-PH-GEB01_0003`
