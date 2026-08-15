const DEFAULT_LOCATION = {
  name: "湖北大冶",
  admin: "中国 · 湖北",
  latitude: 30.04,
  longitude: 114.91,
  timezone: "Asia/Shanghai"
};

const DSO_CATALOG = [
  { code: "M31", name: "仙女座星系", type: "星系", ra: 0.712, dec: 41.27, mag: 3.4, minAperture: 50, modes: ["scope", "eye", "camera"], power: "40–60×", view: "明亮核心与淡椭圆外晕", anchor: "奎宿九", steps: ["找到仙女座的奎宿九。", "沿奎宿九到奎宿八的方向延伸。", "保持低倍，寻找中央更亮的椭圆云斑。"] },
  { code: "M42", name: "猎户座大星云", type: "星云", ra: 5.588, dec: -5.45, mag: 4.0, minAperture: 50, modes: ["scope", "eye", "camera"], power: "40–100×", view: "展开的灰白羽翼与四边形核心", anchor: "猎户座腰带三星", steps: ["找到猎户座腰带三星。", "沿腰带向下找到猎户座宝剑。", "宝剑中央的雾状亮斑就是M42。"] },
  { code: "M45", name: "昴星团", type: "疏散星团", ra: 3.79, dec: 24.12, mag: 1.6, minAperture: 0, modes: ["scope", "eye", "camera"], power: "20–50×", view: "一簇明亮蓝白星点", anchor: "金牛座肩部", steps: ["先用肉眼寻找紧密的七颗亮星。", "使用最低倍率，让整团星落在同一视野。", "透明度好时再观察较暗成员星。"] },
  { code: "M13", name: "武仙座大星团", type: "球状星团", ra: 16.695, dec: 36.46, mag: 5.8, minAperture: 70, modes: ["scope"], power: "50–120×", view: "亮圆斑，边缘有颗粒感", anchor: "武仙座四边形", steps: ["找到武仙座四边形。", "确认四边形西侧上下两颗星。", "从上方那颗向下约三分之一处低倍扫描。"] },
  { code: "M22", name: "人马座球状星团", type: "球状星团", ra: 18.607, dec: -23.90, mag: 5.1, minAperture: 60, modes: ["scope"], power: "50–120×", view: "较大的灰白圆球", anchor: "人马座茶壶", steps: ["找到南方低空的人马座茶壶。", "确认壶盖顶部的斗宿四。", "从斗宿四向东北移动约2.5°。"] },
  { code: "M8", name: "礁湖星云", type: "星云", ra: 18.060, dec: -24.38, mag: 6.0, minAperture: 70, modes: ["scope", "camera"], power: "40–70×", view: "星团周围的浅灰雾气", anchor: "人马座茶壶壶嘴", steps: ["找到人马座茶壶的壶嘴。", "沿壶嘴向上约6°寻找一小团星点。", "用余光观察星点周围的雾气。"] },
  { code: "M11", name: "野鸭星团", type: "疏散星团", ra: 18.852, dec: -6.27, mag: 6.3, minAperture: 60, modes: ["scope"], power: "50–120×", view: "密集、略呈三角形的星群", anchor: "盾牌座", steps: ["从牛郎星沿银河向南。", "在盾牌座内寻找较亮的盾牌座β。", "向东南约2°低倍扫描紧密星团。"] },
  { code: "M27", name: "哑铃星云", type: "行星状星云", ra: 19.993, dec: 22.72, mag: 7.5, minAperture: 70, modes: ["scope", "camera"], power: "50–100×", view: "椭圆或哑铃状灰雾", anchor: "箭座箭头", steps: ["在牛郎星北侧找到箭座。", "确认箭头尖端的箭座γ。", "向北约3°做低倍井字扫描。"] },
  { code: "M57", name: "环状星云", type: "行星状星云", ra: 18.893, dec: 33.03, mag: 8.8, minAperture: 80, modes: ["scope", "camera"], power: "80–140×", view: "很小的灰色烟圈", anchor: "天琴座底边双星", steps: ["找到织女星下方的小平行四边形。", "确认底边的渐台二与织女增三。", "瞄准两星之间，居中后再加倍率。"] },
  { code: "NGC 869/884", name: "英仙座双星团", type: "疏散星团", ra: 2.317, dec: 57.13, mag: 4.3, minAperture: 50, modes: ["scope", "eye", "camera"], power: "25–60×", view: "同视野中的两团密集星点", anchor: "仙后座W", steps: ["找到仙后座的W形。", "沿仙后座到英仙座天船三的连线。", "在连线中部寻找双重淡斑。"] },
  { code: "M44", name: "蜂巢星团", type: "疏散星团", ra: 8.667, dec: 19.67, mag: 3.7, minAperture: 0, modes: ["scope", "eye", "camera"], power: "20–50×", view: "宽阔松散的亮星群", anchor: "巨蟹座中央", steps: ["找到双子座与狮子座之间的巨蟹座。", "在巨蟹座中央寻找肉眼淡斑。", "使用最低倍率观察完整星团。"] },
  { code: "M3", name: "猎犬座球状星团", type: "球状星团", ra: 13.703, dec: 28.38, mag: 6.2, minAperture: 70, modes: ["scope"], power: "60–130×", view: "紧致明亮的颗粒状圆斑", anchor: "大角星与常陈一", steps: ["找到大角星与猎犬座常陈一。", "M3位于两星连线附近。", "低倍找到圆斑后逐步加倍率。"] },
  { code: "M5", name: "巨蛇座球状星团", type: "球状星团", ra: 15.31, dec: 2.08, mag: 5.7, minAperture: 70, modes: ["scope"], power: "60–130×", view: "中心明亮的圆形星雾", anchor: "巨蛇座α", steps: ["找到巨蛇座头部区域。", "以巨蛇座α为基准向西南移动。", "低倍扫描后换中高倍观察核心。"] },
  { code: "M81/82", name: "波德星系与雪茄星系", type: "星系对", ra: 9.926, dec: 69.07, mag: 6.9, minAperture: 80, modes: ["scope", "camera"], power: "40–80×", view: "一圆一长的两块淡光", anchor: "北斗天枢", steps: ["找到北斗七星的天枢。", "沿天枢到天璇的反方向延伸。", "低倍慢扫，尝试让两星系进入同一视野。"] }
];

const PLANETS = [
  { body: "Venus", code: "金星", name: "金星", type: "行星", modes: ["scope", "eye", "camera"], power: "50–120×", view: "明亮的盈亏形状", brief: true, steps: ["日落后先在西方低空寻找最亮星点。", "确认太阳完全落下后，再用低倍快速居中。", "观察10–20分钟即可；高度继续下降就转向其他目标。"] },
  { body: "Mars", code: "火星", name: "火星", type: "行星", modes: ["scope", "eye", "camera"], power: "100–160×", view: "橙红色小圆面", steps: ["肉眼寻找橙红色亮星。", "先用低倍确认稳定星像。", "视宁度稳定时再提高倍率。"] },
  { body: "Jupiter", code: "木星", name: "木星", type: "行星", modes: ["scope", "eye", "camera"], power: "80–150×", view: "云带与四颗伽利略卫星", steps: ["肉眼找到非常明亮的星点。", "低倍下先确认成排的卫星。", "用100倍左右观察云带。"] },
  { body: "Saturn", code: "土星", name: "土星", type: "行星", modes: ["scope", "eye", "camera"], power: "80–150×", view: "土星环与土卫六", steps: ["先在黄道附近找到稳定亮点。", "低倍居中后换到100倍左右。", "等高度超过25°再尝试更高倍率。"] },
  { body: "Mercury", code: "水星", name: "水星", type: "行星", modes: ["scope", "eye"], power: "40–100×", view: "低空中的小型盈亏圆面", steps: ["只在太阳完全落下后寻找。", "根据方位在低空用肉眼或双筒确认。", "望远镜低倍居中，避免误扫太阳方向。"] }
];

const state = {
  location: loadJSON("starmap-location", DEFAULT_LOCATION),
  date: "",
  forecast: null,
  offsetSeconds: 28800,
  timezone: "Asia/Shanghai",
  night: null,
  metric: "score",
  targetFilter: "all",
  targets: [],
  selectedTarget: null,
  heading: null,
  map: null,
  marker: null,
  equipment: loadJSON("starmap-equipment", { aperture: 90, focal: 1000, bortle: 5.7, phone: "redmi" }),
  searchTimer: null,
  userPickedDate: false
};

let toastTimer;

function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}
function saveJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* optional persistence */ }
}
function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
function pad(value) { return String(value).padStart(2, "0"); }
function formatInputDate(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}
function addDays(dateString, days) {
  const [y, m, d] = dateString.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d + days));
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
}
function humanDate(dateString) {
  const [, month, day] = dateString.split("-").map(Number);
  return `${month}月${day}日`;
}
function dateAtLocalHour(dateString, hour = 12) {
  const [y, m, d] = dateString.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, hour) - state.offsetSeconds * 1000);
}
function dateFromLocalIso(iso) {
  const [datePart, timePart = "00:00"] = iso.split("T");
  const [y, m, d] = datePart.split("-").map(Number);
  const [hh, mm] = timePart.split(":").map(Number);
  return new Date(Date.UTC(y, m - 1, d, hh, mm) - state.offsetSeconds * 1000);
}
function formatTime(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "--";
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: state.timezone, hour: "2-digit", minute: "2-digit", hour12: false
  }).format(date);
}
function formatCoord(value) { return Number(value).toFixed(3); }
function icon(name) { return `<i data-lucide="${name}"></i>`; }
function refreshIcons() { if (window.lucide) window.lucide.createIcons(); }
function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}
function setLoading(loading) {
  document.querySelector("#loadingLayer").hidden = !loading;
  refreshIcons();
}

function initDate() {
  const input = document.querySelector("#dateInput");
  const today = formatInputDate(new Date());
  input.min = today;
  input.max = addDays(today, 15);
  state.date = today;
  input.value = today;
  document.querySelector("#todayLabel").textContent = `${humanDate(today)} · 自动刷新预报`;
}

function initMap() {
  state.map = L.map("map", { zoomControl: true, attributionControl: true })
    .setView([state.location.latitude, state.location.longitude], 8);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    maxZoom: 19,
    subdomains: "abcd",
    attribution: "&copy; OpenStreetMap &copy; CARTO"
  }).addTo(state.map);
  state.marker = L.marker([state.location.latitude, state.location.longitude]).addTo(state.map);
  state.map.on("click", async (event) => {
    const { lat, lng } = event.latlng;
    await setLocation({
      name: `${formatCoord(lat)}, ${formatCoord(lng)}`,
      admin: "地图选点",
      latitude: lat,
      longitude: lng,
      timezone: "auto"
    }, true);
    reverseGeocode(lat, lng);
  });
}

function updateMap() {
  if (!state.map || !state.marker) return;
  const point = [state.location.latitude, state.location.longitude];
  state.marker.setLatLng(point);
  state.map.setView(point, state.map.getZoom() < 7 ? 8 : state.map.getZoom());
}

async function setLocation(location, refresh = true) {
  state.location = {
    name: location.name || "选定地点",
    admin: location.admin || location.country || "",
    latitude: Number(location.latitude),
    longitude: Number(location.longitude),
    timezone: location.timezone || "auto"
  };
  saveJSON("starmap-location", state.location);
  updateMap();
  renderPlaceStatus();
  if (refresh) await fetchForecast(true);
}

function renderPlaceStatus() {
  document.querySelector("#placeName").textContent = state.location.name;
  document.querySelector("#placeMeta").textContent =
    `${state.location.admin ? `${state.location.admin} · ` : ""}${formatCoord(state.location.latitude)}°, ${formatCoord(state.location.longitude)}° · ${state.timezone}`;
}

function parseCoordinates(value) {
  const match = value.trim().match(/^(-?\d+(?:\.\d+)?)\s*[,，]\s*(-?\d+(?:\.\d+)?)$/);
  if (!match) return null;
  const latitude = Number(match[1]);
  const longitude = Number(match[2]);
  if (Math.abs(latitude) > 90 || Math.abs(longitude) > 180) return null;
  return { latitude, longitude };
}

async function searchLocations(query) {
  const coordinates = parseCoordinates(query);
  if (coordinates) {
    return [{
      name: `${formatCoord(coordinates.latitude)}, ${formatCoord(coordinates.longitude)}`,
      admin1: "经纬度",
      country: "",
      timezone: "auto",
      ...coordinates
    }];
  }
  const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
  url.search = new URLSearchParams({ name: query, count: "6", language: "zh", format: "json" });
  const response = await fetch(url);
  if (!response.ok) throw new Error("地点搜索失败");
  return (await response.json()).results || [];
}

function renderSearchResults(results) {
  const panel = document.querySelector("#searchResults");
  panel.innerHTML = "";
  if (!results.length) {
    const empty = document.createElement("div");
    empty.className = "search-result";
    empty.textContent = "没有找到地点，可直接输入经纬度";
    panel.appendChild(empty);
    panel.hidden = false;
    return;
  }
  results.forEach((result) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "search-result";
    const text = document.createElement("span");
    const title = document.createElement("strong");
    title.textContent = result.name;
    const sub = document.createElement("small");
    sub.textContent = [result.admin1, result.country].filter(Boolean).join(" · ");
    text.append(title, sub);
    const coord = document.createElement("code");
    coord.textContent = `${formatCoord(result.latitude)}, ${formatCoord(result.longitude)}`;
    button.append(text, coord);
    button.addEventListener("click", async () => {
      panel.hidden = true;
      document.querySelector("#locationInput").value = result.name;
      await setLocation({
        name: result.name,
        admin: [result.admin1, result.country].filter(Boolean).join(" · "),
        latitude: result.latitude,
        longitude: result.longitude,
        timezone: result.timezone
      }, true);
    });
    panel.appendChild(button);
  });
  panel.hidden = false;
}

async function runSearch(query) {
  const value = query.trim();
  if (!value) return;
  try {
    document.querySelector("#updateStatus").textContent = "搜索地点…";
    renderSearchResults(await searchLocations(value));
    document.querySelector("#updateStatus").textContent = "请选择搜索结果";
  } catch {
    showToast("地点搜索暂时不可用");
  }
}

async function reverseGeocode(latitude, longitude) {
  try {
    const url = new URL("https://nominatim.openstreetmap.org/reverse");
    url.search = new URLSearchParams({
      lat: latitude, lon: longitude, format: "jsonv2", zoom: "10", "accept-language": "zh-CN"
    });
    const response = await fetch(url, { headers: { Accept: "application/json" } });
    if (!response.ok) return;
    const data = await response.json();
    const name = data.address?.city || data.address?.county || data.address?.town || data.address?.state || data.name;
    if (name) {
      state.location.name = name;
      state.location.admin = [data.address?.state, data.address?.country].filter(Boolean).join(" · ");
      saveJSON("starmap-location", state.location);
      renderPlaceStatus();
    }
  } catch { /* coordinates remain valid without a place name */ }
}

async function locateUser() {
  if (!navigator.geolocation) {
    showToast("此浏览器不支持定位");
    return;
  }
  document.querySelector("#updateStatus").textContent = "等待定位授权…";
  navigator.geolocation.getCurrentPosition(async ({ coords }) => {
    await setLocation({
      name: "我的位置",
      admin: "浏览器定位",
      latitude: coords.latitude,
      longitude: coords.longitude,
      timezone: "auto"
    }, true);
    reverseGeocode(coords.latitude, coords.longitude);
  }, () => {
    showToast("定位未获授权，可搜索城市或点击地图");
    document.querySelector("#updateStatus").textContent = "定位未获授权";
  }, { enableHighAccuracy: true, timeout: 12000, maximumAge: 600000 });
}

function forecastUrl() {
  const params = new URLSearchParams({
    latitude: state.location.latitude,
    longitude: state.location.longitude,
    hourly: [
      "cloud_cover", "cloud_cover_low", "cloud_cover_mid", "cloud_cover_high",
      "precipitation_probability", "precipitation", "visibility",
      "relative_humidity_2m", "temperature_2m", "wind_speed_10m"
    ].join(","),
    daily: "sunrise,sunset",
    timezone: "auto",
    forecast_days: "16"
  });
  return `https://api.open-meteo.com/v1/forecast?${params}`;
}

async function fetchForecast(force = false) {
  setLoading(true);
  document.querySelector("#updateStatus").textContent = "正在获取最新预报…";
  try {
    const response = await fetch(forecastUrl(), { cache: force ? "reload" : "default" });
    if (!response.ok) throw new Error(`天气接口 ${response.status}`);
    const data = await response.json();
    state.forecast = data;
    state.timezone = data.timezone || state.location.timezone || "UTC";
    state.offsetSeconds = data.utc_offset_seconds || 0;
    state.location.timezone = state.timezone;
    saveJSON("starmap-location", state.location);
    saveJSON("starmap-forecast-cache", {
      latitude: state.location.latitude,
      longitude: state.location.longitude,
      savedAt: Date.now(),
      data
    });
    configureDateRange();
    renderAll();
    document.querySelector("#forecastBadge").textContent = "LIVE";
    document.querySelector("#forecastBadge").className = "data-badge";
    document.querySelector("#updateStatus").textContent = `已更新 ${new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}`;
  } catch (error) {
    const cache = loadJSON("starmap-forecast-cache", null);
    if (cache && Math.abs(cache.latitude - state.location.latitude) < .01 && Math.abs(cache.longitude - state.location.longitude) < .01) {
      state.forecast = cache.data;
      state.timezone = cache.data.timezone || state.location.timezone;
      state.offsetSeconds = cache.data.utc_offset_seconds || 0;
      configureDateRange();
      renderAll();
      document.querySelector("#forecastBadge").textContent = "CACHE";
      document.querySelector("#forecastBadge").className = "data-badge cached";
      document.querySelector("#updateStatus").textContent = "网络异常，显示缓存";
    } else {
      document.querySelector("#updateStatus").textContent = "预报获取失败";
      showToast("无法获取预报，请检查网络后重试");
    }
  } finally {
    setLoading(false);
  }
}

function configureDateRange() {
  const dates = state.forecast?.daily?.time || [];
  if (!dates.length) return;
  const input = document.querySelector("#dateInput");
  input.min = dates[0];
  input.max = dates[dates.length - 1];
  const locationToday = new Intl.DateTimeFormat("en-CA", {
    timeZone: state.timezone, year: "numeric", month: "2-digit", day: "2-digit"
  }).format(new Date());
  if (!state.userPickedDate || !dates.includes(state.date)) {
    state.date = dates.includes(locationToday) ? locationToday : dates[0];
    input.value = state.date;
  }
}

function selectedDayIndex() {
  return state.forecast.daily.time.indexOf(state.date);
}

function buildNightData() {
  const dayIndex = selectedDayIndex();
  if (dayIndex < 0) return null;
  const sunsetIso = state.forecast.daily.sunset[dayIndex];
  const sunset = dateFromLocalIso(sunsetIso);
  const sunsetHour = Number(sunsetIso.slice(11, 13));
  const nextDate = addDays(state.date, 1);
  const locationToday = new Intl.DateTimeFormat("en-CA", {
    timeZone: state.timezone, year: "numeric", month: "2-digit", day: "2-digit"
  }).format(new Date());
  const isToday = state.date === locationToday;
  const records = [];
  state.forecast.hourly.time.forEach((time, index) => {
    const date = time.slice(0, 10);
    const hour = Number(time.slice(11, 13));
    const selectedEvening = date === state.date
      && hour >= Math.max(0, sunsetHour - 1)
      && (!isToday || hour <= 22);
    const followingMorning = !isToday && date === nextDate && hour <= 5;
    if (selectedEvening || followingMorning) {
      records.push({
        time,
        date: dateFromLocalIso(time),
        cloud: state.forecast.hourly.cloud_cover[index],
        lowCloud: state.forecast.hourly.cloud_cover_low[index],
        rainProbability: state.forecast.hourly.precipitation_probability[index] ?? 0,
        precipitation: state.forecast.hourly.precipitation[index] ?? 0,
        visibility: state.forecast.hourly.visibility[index],
        humidity: state.forecast.hourly.relative_humidity_2m[index],
        temperature: state.forecast.hourly.temperature_2m[index],
        wind: state.forecast.hourly.wind_speed_10m[index]
      });
    }
  });

  const noon = dateAtLocalHour(state.date, 12);
  const sunTimes = SunCalc.getTimes(noon, state.location.latitude, state.location.longitude);
  const illumination = SunCalc.getMoonIllumination(noon);
  const moonTimes = SunCalc.getMoonTimes(noon, state.location.latitude, state.location.longitude, true);
  records.forEach((record) => {
    const moonPos = SunCalc.getMoonPosition(record.date, state.location.latitude, state.location.longitude);
    record.moonUp = moonPos.altitude > 0;
    record.score = calculateHourScore(record, illumination.fraction);
  });

  let bestIndex = 0;
  let bestScore = -1;
  const candidateCount = Math.max(1, records.length - 1);
  for (let i = 0; i < candidateCount; i++) {
    const slice = records.slice(i, Math.min(records.length, i + 2));
    const average = slice.reduce((sum, item) => sum + item.score, 0) / slice.length;
    if (average > bestScore) {
      bestScore = average;
      bestIndex = i;
    }
  }
  const best = records[bestIndex];
  const end = records[Math.min(records.length - 1, bestIndex + 2)];
  return { records, sunset, sunTimes, illumination, moonTimes, bestIndex, bestScore, best, end };
}

function calculateHourScore(record, moonFraction) {
  const visibilityKm = (record.visibility || 0) / 1000;
  const moonPenalty = record.moonUp ? moonFraction * 22 : 0;
  const score = 105
    - record.cloud * .68
    - record.rainProbability * .16
    - Math.max(0, record.humidity - 78) * .42
    - Math.max(0, 8 - visibilityKm) * 2.1
    - Math.max(0, record.wind - 18) * .45
    - Math.max(0, state.equipment.bortle - 1) * 2.5
    - moonPenalty;
  return Math.round(clamp(score, 0, 100));
}

function scoreDescriptor(score) {
  if (score >= 82) return ["极佳", "云少、透明度和月光条件都很有利。"];
  if (score >= 68) return ["良好", "值得出发，优先利用评分最高的连续窗口。"];
  if (score >= 52) return ["一般", "可以观察明亮目标，暗星云与星系会比较吃力。"];
  if (score >= 35) return ["较差", "只建议追明亮行星、月亮和双星，等待云隙。"];
  return ["不建议", "云、降水或透明度条件不适合正式观测。"];
}

function qualityLabel(value, thresholds, labels) {
  if (value >= thresholds[1]) return labels[2];
  if (value >= thresholds[0]) return labels[1];
  return labels[0];
}
function moonPhaseName(phase) {
  if (phase < .03 || phase > .97) return "新月";
  if (phase < .22) return "娥眉月";
  if (phase < .28) return "上弦月";
  if (phase < .47) return "盈凸月";
  if (phase < .53) return "满月";
  if (phase < .72) return "亏凸月";
  if (phase < .78) return "下弦月";
  return "残月";
}
function compassDirection(azimuth) {
  const names = ["北", "东北", "东", "东南", "南", "西南", "西", "西北"];
  return names[Math.round(((azimuth % 360) + 360) % 360 / 45) % 8];
}
function hourLabel(iso) { return iso.slice(11, 16); }

function renderSummary() {
  const night = state.night;
  const best = night.best;
  const [label, reason] = scoreDescriptor(Math.round(night.bestScore));
  const visibilityKm = best.visibility / 1000;
  const transparency = qualityLabel(visibilityKm, [6, 12], ["较差", "中等", "良好"]);
  const stability = best.wind <= 12 ? "良好" : best.wind <= 22 ? "中等" : "较差";
  const dew = best.humidity >= 92 ? "很高" : best.humidity >= 82 ? "高" : best.humidity >= 72 ? "中等" : "低";
  const moonFraction = night.illumination.fraction;
  const moonInterference = moonFraction < .2 ? "很低" : moonFraction < .5 ? "中等" : moonFraction < .8 ? "较高" : "很高";
  const moonSet = night.moonTimes.set ? formatTime(night.moonTimes.set) : night.moonTimes.alwaysUp ? "整夜可见" : "未升起";

  document.querySelector("#overviewTitle").textContent = `${humanDate(state.date)} · ${state.location.name}`;
  document.querySelector("#todayLabel").textContent = `${humanDate(state.date)} · ${state.location.name}`;
  document.querySelector("#scoreValue").textContent = Math.round(night.bestScore);
  document.querySelector("#scoreLabel").textContent = label;
  document.querySelector("#scoreBar").style.width = `${night.bestScore}%`;
  document.querySelector("#scoreReason").textContent = reason;
  document.querySelector("#bestWindow").textContent = `${hourLabel(best.time)}–${hourLabel(night.end.time)}`;
  document.querySelector("#sunsetValue").textContent = formatTime(night.sunset);
  document.querySelector("#darkValue").textContent = night.sunTimes.night ? formatTime(night.sunTimes.night) : "无完整黑夜";
  document.querySelector("#moonValue").textContent = `${moonPhaseName(night.illumination.phase)} ${Math.round(moonFraction * 100)}% / ${moonSet}`;
  document.querySelector("#cloudMetric").textContent = `${best.cloud}%`;
  document.querySelector("#cloudHint").textContent = `低云 ${best.lowCloud}%`;
  document.querySelector("#transparencyMetric").textContent = transparency;
  document.querySelector("#visibilityHint").textContent = `能见度 ${visibilityKm.toFixed(1)}km`;
  document.querySelector("#seeingMetric").textContent = stability;
  document.querySelector("#windHint").textContent = `风速 ${best.wind.toFixed(1)}km/h`;
  document.querySelector("#dewMetric").textContent = dew;
  document.querySelector("#humidityHint").textContent = `湿度 ${best.humidity}%`;
  document.querySelector("#moonMetric").textContent = moonInterference;
  document.querySelector("#moonHint").textContent = `照明 ${Math.round(moonFraction * 100)}%`;

  const action = createAction(night.bestScore, best);
  document.querySelector("#nextAction").textContent = action.title;
  document.querySelector("#nextActionDetail").textContent = action.detail;
}

function createAction(score, best) {
  if (score < 35) return { title: "先不要架设主镜", detail: "观察云隙和降水雷达，只保留肉眼与手机短曝光。"};
  if (best.humidity >= 92) return { title: `${hourLabel(best.time)}前后出发，并优先防露`, detail: "遮光罩、加热带与目镜盒保持干燥，镜片结露后不要擦。"};
  if (state.night.illumination.fraction > .7 && best.moonUp) return { title: "先看月面、行星与双星", detail: "强月光下跳过低表面亮度星系，等月落后再转深空。"};
  return { title: `${hourLabel(best.time)}进入主观测窗口`, detail: "先低空、后高空；低倍寻找，目标居中后再加倍率。"};
}

const WEATHER_METRICS = {
  score: { title: "观星指数 · 分", field: "score", max: 100, unit: "", insight: "分数综合云量、降水、透明度、湿度、月光和光污染。" },
  cloud: { title: "总云量 · %", field: "cloud", max: 100, unit: "%", insight: "云量越低越好；低云会优先遮挡地平线附近目标。" },
  humidity: { title: "相对湿度 · %", field: "humidity", max: 100, unit: "%", insight: "超过90%时物镜和目镜容易快速结露。" },
  visibility: { title: "能见度 · km", field: "visibility", max: 20, unit: "km", transform: value => value / 1000, insight: "能见度反映低空水汽与颗粒物，越高通常越利于深空对比度。" },
  wind: { title: "风速 · km/h", field: "wind", max: 35, unit: "", insight: "微风有助于驱散水汽；强风会让镜架抖动。" },
  rain: { title: "降水概率 · %", field: "rainProbability", max: 100, unit: "%", insight: "只要有阵雨风险，就为镜筒准备快速防水与收纳方案。" }
};

function renderForecastChart() {
  const metric = WEATHER_METRICS[state.metric];
  const chart = document.querySelector("#forecastChart");
  document.querySelector("#chartTitle").textContent = metric.title;
  document.querySelector("#chartInsight").textContent = metric.insight;
  chart.innerHTML = state.night.records.map((record, index) => {
    const raw = record[metric.field] ?? 0;
    const value = metric.transform ? metric.transform(raw) : raw;
    const display = Number.isInteger(value) ? value : value.toFixed(1);
    const height = Math.max(3, Math.round(clamp(value / metric.max, 0, 1) * 165));
    return `
      <div class="forecast-column">
        <div class="forecast-bar-wrap">
          <div class="forecast-bar ${index === state.night.bestIndex ? "best" : ""}" style="height:${height}px">
            <span>${display}${metric.unit}</span>
          </div>
        </div>
        <time>${hourLabel(record.time)}</time>
      </div>`;
  }).join("");
}

function renderNightPlan() {
  const night = state.night;
  const moon = night.moonTimes;
  const items = [
    { time: formatTime(new Date(night.sunset.getTime() - 30 * 60000)), title: "抵达与架设", text: "在天黑前完成寻星镜校准和镜筒平衡。" },
    { time: formatTime(night.sunset), title: "日落", text: "确认太阳完全落下后，再观察西方低空目标。" },
    { time: night.sunTimes.night ? formatTime(night.sunTimes.night) : "--", title: "天文黑夜", text: "天空背景进入最暗阶段，适合星云和星系。" },
    { time: hourLabel(night.best.time), title: "最佳窗口", text: `综合指数约${Math.round(night.bestScore)}分，优先安排主目标。` },
    {
      time: moon.set ? formatTime(moon.set) : moon.rise ? formatTime(moon.rise) : "--",
      title: moon.set ? "月落" : moon.rise ? "月升" : "月亮状态",
      text: `${moonPhaseName(night.illumination.phase)}，照明${Math.round(night.illumination.fraction * 100)}%。`
    }
  ];
  document.querySelector("#nightPlan").innerHTML = items.map(item => `
    <article class="plan-step"><time>${item.time}</time><strong>${item.title}</strong><p>${item.text}</p></article>
  `).join("");
}

function calculateTargets() {
  if (!window.Astronomy || !state.night.records.length) return [];
  const observer = new Astronomy.Observer(state.location.latitude, state.location.longitude, 0);
  const samples = state.night.records.map(record => record.date);
  const targets = [];

  for (const item of DSO_CATALOG) {
    const positions = samples.map(date => {
      const horizon = Astronomy.Horizon(date, observer, item.ra, item.dec, "normal");
      return { date, altitude: horizon.altitude, azimuth: horizon.azimuth };
    });
    const best = positions.reduce((max, current) => current.altitude > max.altitude ? current : max);
    if (best.altitude < 8) continue;
    const aperturePenalty = Math.max(0, item.minAperture - state.equipment.aperture) * .35;
    const pollutionPenalty = Math.max(0, state.equipment.bortle - 5) * (item.type.includes("星系") || item.type.includes("星云") ? 7 : 3);
    const rank = best.altitude + (9 - item.mag) * 4 - aperturePenalty - pollutionPenalty;
    targets.push({ ...item, ...best, rank, available: state.equipment.aperture >= item.minAperture });
  }

  for (const item of PLANETS) {
    try {
      const body = Astronomy.Body[item.body];
      const planetSamples = item.brief
        ? samples.filter(date => date <= new Date(state.night.sunset.getTime() + 90 * 60000))
        : samples;
      if (!planetSamples.length) continue;
      const positions = planetSamples.map(date => {
        const equator = Astronomy.Equator(body, date, observer, true, true);
        const horizon = Astronomy.Horizon(date, observer, equator.ra, equator.dec, "normal");
        return { date, altitude: horizon.altitude, azimuth: horizon.azimuth };
      });
      const best = positions.reduce((max, current) => current.altitude > max.altitude ? current : max);
      if (best.altitude >= 7) targets.push({ ...item, ...best, mag: -1, minAperture: 0, rank: best.altitude + 55, available: true });
    } catch { /* one unavailable planet should not block the target list */ }
  }

  try {
    const positions = samples.map(date => {
      const equator = Astronomy.Equator(Astronomy.Body.Moon, date, observer, true, true);
      const horizon = Astronomy.Horizon(date, observer, equator.ra, equator.dec, "normal");
      return { date, altitude: horizon.altitude, azimuth: horizon.azimuth };
    });
    const best = positions.reduce((max, current) => current.altitude > max.altitude ? current : max);
    if (best.altitude >= 7 && state.night.illumination.fraction > .04) {
      targets.push({
        code: "月亮", name: moonPhaseName(state.night.illumination.phase), type: "月面",
        modes: ["scope", "eye", "camera"], power: "40–140×", view: "晨昏线附近的环形山与山脉",
        steps: ["先用肉眼确认月亮方位。", "用最低倍率完整观察月面。", "沿晨昏线逐步加倍率寻找阴影细节。"],
        ...best, mag: -12, minAperture: 0, rank: best.altitude + 70, available: true
      });
    }
  } catch { /* optional moon target */ }

  return targets.sort((a, b) => b.rank - a.rank).slice(0, 12);
}

function targetDescription(target) {
  if (!target.available) return `当前口径偏小，仍可尝试，但需要更暗天空与良好透明度。`;
  if (target.body === "Venus") return `日落后暮光窗口内快速观察10–20分钟即可；金星变低后立即转向其他目标。`;
  if (target.altitude < 20) return `最高仰角只有${Math.round(target.altitude)}°，低空水汽影响明显，抓紧窗口。`;
  if (target.type === "行星") return `当晚最高仰角约${Math.round(target.altitude)}°，适合用中高倍率观察。`;
  if (target.modes.includes("eye")) return `肉眼可定位，最高仰角约${Math.round(target.altitude)}°，低倍视野更完整。`;
  return `当晚最高仰角约${Math.round(target.altitude)}°，与当前设备匹配。`;
}

function renderTargets() {
  state.targets = calculateTargets();
  const shown = state.targets.filter(target => state.targetFilter === "all" || target.modes.includes(state.targetFilter));
  const grid = document.querySelector("#targetGrid");
  document.querySelector("#targetIntro").textContent =
    `按${state.equipment.aperture}mm口径、光污染${state.equipment.bortle.toFixed(1)}级和当晚最高仰角排序。`;
  if (!shown.length) {
    grid.innerHTML = `<p class="empty-state">该观测方式下没有达到最低高度的推荐目标。</p>`;
    return;
  }
  grid.innerHTML = shown.slice(0, 8).map(target => `
    <article class="target-card">
      <div class="target-card-top"><span class="target-code">${target.code}</span><span class="target-type">${target.type}</span></div>
      <h3>${target.name}</h3>
      <div class="target-meta">
        <span>${icon("clock-3")}${formatTime(target.date)}</span>
        <span>${icon("move-up")}${Math.round(target.altitude)}°</span>
        <span>${icon("compass")}${compassDirection(target.azimuth)}</span>
      </div>
      <p>${targetDescription(target)}</p>
      <button type="button" data-target-code="${target.code}">${icon("locate-fixed")}查看方向</button>
    </article>
  `).join("");
  refreshIcons();
  grid.querySelectorAll("[data-target-code]").forEach(button => {
    button.addEventListener("click", () => selectTarget(button.dataset.targetCode, true));
  });
  const stillAvailable = state.selectedTarget && state.targets.some(target => target.code === state.selectedTarget.code);
  selectTarget(stillAvailable ? state.selectedTarget.code : shown[0].code, false);
}

function selectTarget(code, scroll) {
  const target = state.targets.find(item => item.code === code);
  if (!target) return;
  state.selectedTarget = target;
  document.querySelector("#selectedTargetName").textContent = `${target.code} · ${target.name}`;
  document.querySelector("#selectedBearing").textContent = `${Math.round(target.azimuth)}° ${compassDirection(target.azimuth)}`;
  document.querySelector("#selectedAltitude").textContent = `仰角 ${Math.round(target.altitude)}°`;
  document.querySelector("#selectedTime").textContent = formatTime(target.date);
  document.querySelector("#selectedPower").textContent = target.power;
  document.querySelector("#selectedView").textContent = target.view;
  document.querySelector("#selectedSteps").innerHTML = target.steps.map(step => `<li>${step}</li>`).join("");
  updateCompassNeedle();
  if (scroll) document.querySelector("#targetInspector").scrollIntoView({ behavior: "smooth", block: "center" });
}

function updateCompassNeedle() {
  if (!state.selectedTarget) return;
  const relative = state.heading === null
    ? state.selectedTarget.azimuth
    : (state.selectedTarget.azimuth - state.heading + 360) % 360;
  document.querySelector("#targetNeedle").style.transform = `rotate(${relative}deg)`;
}

function handleOrientation(event) {
  let heading = null;
  if (typeof event.webkitCompassHeading === "number") heading = event.webkitCompassHeading;
  else if (typeof event.alpha === "number") heading = (360 - event.alpha) % 360;
  if (heading === null || Number.isNaN(heading)) return;
  state.heading = heading;
  document.querySelector("#compassStatus").textContent = `手机朝向${Math.round(heading)}°，箭头显示目标相对方向；请远离金属镜架。`;
  updateCompassNeedle();
}

async function enableCompass() {
  try {
    if (typeof DeviceOrientationEvent === "undefined") throw new Error("此设备没有方向传感器");
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      const permission = await DeviceOrientationEvent.requestPermission();
      if (permission !== "granted") throw new Error("方向权限未获允许");
    }
    window.addEventListener("deviceorientationabsolute", handleOrientation, true);
    window.addEventListener("deviceorientation", handleOrientation, true);
    document.querySelector("#compassStatus").textContent = "指南针已启用，请将手机平放并远离望远镜金属支架。";
  } catch (error) {
    showToast(error.message);
  }
}

function renderEquipment() {
  document.querySelector("#apertureInput").value = state.equipment.aperture;
  document.querySelector("#focalInput").value = state.equipment.focal;
  document.querySelector("#bortleInput").value = state.equipment.bortle;
  document.querySelector("#apertureOutput").textContent = `${state.equipment.aperture} mm`;
  document.querySelector("#focalOutput").textContent = `${state.equipment.focal} mm`;
  document.querySelector("#bortleOutput").textContent = state.equipment.bortle.toFixed(1);
  document.querySelector("#equipmentSummary").textContent =
    `当前按${state.equipment.aperture}mm口径、${state.equipment.focal}mm焦距和光污染${state.equipment.bortle.toFixed(1)}级推荐。`;
  document.querySelectorAll("[data-phone]").forEach(button => {
    button.classList.toggle("active", button.dataset.phone === state.equipment.phone);
  });
  renderPhotoSettings();
}

function renderPhotoSettings() {
  const best = state.night?.best;
  const brightSky = state.equipment.bortle >= 6 || (best && best.cloud > 20);
  const phone = state.equipment.phone;
  let settings;
  let note;
  if (phone === "iphone") {
    settings = [["镜头", "1×主摄"], ["格式", "ProRAW"], ["夜景", brightSky ? "10秒" : "Max"], ["曝光", brightSky ? "-1.0 EV" : "-0.7 EV"]];
    note = "三脚架稳定后再尝试最长夜景时间；不要用数码变焦或强求48MP。";
    document.querySelector("#phoneName").textContent = "iPhone 17 Pro";
  } else {
    const iso = brightSky ? 800 : 1600;
    const shutter = best && best.visibility / 1000 > 12 && state.equipment.bortle < 5 ? 20 : 15;
    settings = [["镜头", "W / 1×"], ["格式", "RAW+JPEG"], ["快门", `${shutter}秒`], ["ISO", `${iso}`], ["白平衡", "4000K"], ["对焦", "∞回退一格"], ["比例", "4:3"], ["定时", "3秒"]];
    note = "星点拖线就把快门缩到10秒；天空发灰时优先降低ISO。";
    document.querySelector("#phoneName").textContent = "Redmi K90 Pro Max";
  }
  document.querySelector("#photoSettings").innerHTML = settings.map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`).join("");
  document.querySelector("#photoNote").textContent = note;
}

function renderAll() {
  if (!state.forecast) return;
  state.night = buildNightData();
  if (!state.night || !state.night.records.length) {
    showToast("所选日期缺少完整小时预报");
    return;
  }
  renderPlaceStatus();
  renderSummary();
  renderForecastChart();
  renderNightPlan();
  renderTargets();
  renderEquipment();
  refreshIcons();
}

function localAdvice(question) {
  const text = question.toLowerCase();
  const bestTarget = state.targets[0];
  if (/雾|露|起雾|结露/.test(text)) return "1. 立即盖好未使用目镜，保持遮光罩伸出。\n2. 让物镜自然回温或使用低功率加热带，绝对不要擦镜片。\n3. 结露加重就改为肉眼观测并及时收镜。";
  if (/云/.test(text)) return `1. 先看云隙方向，不要硬追暗弱目标。\n2. 当前优先尝试${bestTarget?.name || "明亮行星或双星"}。\n3. 连续20分钟无稳定云隙就收镜，保留手机短曝光。`;
  if (/30分钟|半小时|只剩/.test(text)) return `1. 第一目标选${bestTarget?.name || "当前最高目标"}。\n2. 使用低倍快速定位，只为行星和月面加倍率。\n3. 最后5分钟肉眼扫视最清晰的天空区域。`;
  if (/找不到/.test(text)) return `1. 换回最低倍率，并重新确认基准星。\n2. 目标${state.selectedTarget ? `在${compassDirection(state.selectedTarget.azimuth)}方、约${Math.round(state.selectedTarget.altitude)}°高` : "方向请参考目标面板"}。\n3. 在目标位置做小范围井字扫描。`;
  return `1. 主观测窗口是${hourLabel(state.night.best.time)}–${hourLabel(state.night.end.time)}。\n2. 先观察${bestTarget?.name || "最高目标"}，再按仰角从低到高安排。\n3. 湿度${state.night.best.humidity}%，提前准备防露。`;
}

function assistantPrompt(question) {
  const top = state.targets.slice(0, 4).map(target => `${target.name}(${formatTime(target.date)},${Math.round(target.altitude)}°)`).join("、");
  return [
    "你是谨慎简洁的现场观星助手。只给3条可执行建议，每条一句，总计不超过180个汉字。",
    "不要虚构方位或天气，不推荐太阳观测，不让用户擦拭结露镜片。",
    `地点：${state.location.name} ${state.location.latitude.toFixed(2)},${state.location.longitude.toFixed(2)}；日期：${state.date}；时区：${state.timezone}。`,
    `最佳窗口：${hourLabel(state.night.best.time)}-${hourLabel(state.night.end.time)}；指数${Math.round(state.night.bestScore)}；云量${state.night.best.cloud}%；湿度${state.night.best.humidity}%。`,
    `设备：口径${state.equipment.aperture}mm，焦距${state.equipment.focal}mm，光污染${state.equipment.bortle.toFixed(1)}级。`,
    `推荐目标：${top}。`,
    `问题：${question}`
  ].join("\n");
}

async function askAssistant(question) {
  const status = document.querySelector("#aiStatus");
  const output = document.querySelector("#assistantResponse");
  const submit = document.querySelector("#assistantForm button");
  status.textContent = "模型思考中";
  status.className = "ai-status loading";
  output.textContent = "正在结合当前地点与预报生成建议…";
  submit.disabled = true;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const url = `https://text.pollinations.ai/${encodeURIComponent(assistantPrompt(question))}?model=openai-fast&temperature=0.2`;
    const response = await fetch(url, { signal: controller.signal, headers: { Accept: "text/plain" } });
    if (!response.ok) throw new Error();
    const text = (await response.text()).trim();
    if (!text || text.length > 900 || text.startsWith("<")) throw new Error();
    output.textContent = text;
    status.textContent = "AI在线";
    status.className = "ai-status";
  } catch {
    output.textContent = localAdvice(question);
    status.textContent = "本地规则";
    status.className = "ai-status local";
  } finally {
    clearTimeout(timer);
    submit.disabled = false;
  }
}

function bindEvents() {
  document.querySelector("#locationForm").addEventListener("submit", event => {
    event.preventDefault();
    runSearch(document.querySelector("#locationInput").value);
  });
  document.querySelector("#locationInput").addEventListener("input", event => {
    clearTimeout(state.searchTimer);
    const query = event.target.value.trim();
    if (query.length < 2) {
      document.querySelector("#searchResults").hidden = true;
      return;
    }
    state.searchTimer = setTimeout(async () => {
      try { renderSearchResults(await searchLocations(query)); } catch { /* submit remains available */ }
    }, 450);
  });
  document.addEventListener("click", event => {
    if (!event.target.closest(".location-search")) document.querySelector("#searchResults").hidden = true;
  });
  document.querySelector("#locateMe").addEventListener("click", locateUser);
  document.querySelector("#refreshForecast").addEventListener("click", () => fetchForecast(true));
  document.querySelector("#dateInput").addEventListener("change", event => {
    state.date = event.target.value;
    state.userPickedDate = true;
    renderAll();
  });
  document.querySelectorAll("[data-weather]").forEach(button => {
    button.addEventListener("click", () => {
      state.metric = button.dataset.weather;
      document.querySelectorAll("[data-weather]").forEach(item => item.classList.toggle("active", item === button));
      renderForecastChart();
    });
  });
  document.querySelectorAll("[data-target-filter]").forEach(button => {
    button.addEventListener("click", () => {
      state.targetFilter = button.dataset.targetFilter;
      document.querySelectorAll("[data-target-filter]").forEach(item => item.classList.toggle("active", item === button));
      renderTargets();
    });
  });
  document.querySelector("#enableCompass").addEventListener("click", enableCompass);
  ["aperture", "focal", "bortle"].forEach(key => {
    document.querySelector(`#${key}Input`).addEventListener("input", event => {
      state.equipment[key] = Number(event.target.value);
      saveJSON("starmap-equipment", state.equipment);
      if (state.night) {
        state.night.records.forEach(record => {
          record.score = calculateHourScore(record, state.night.illumination.fraction);
        });
        renderAll();
      }
    });
  });
  document.querySelectorAll("[data-phone]").forEach(button => {
    button.addEventListener("click", () => {
      state.equipment.phone = button.dataset.phone;
      saveJSON("starmap-equipment", state.equipment);
      renderEquipment();
    });
  });
  document.querySelector("#redMode").addEventListener("click", () => {
    document.body.classList.toggle("red-mode");
    saveJSON("starmap-red-mode", document.body.classList.contains("red-mode"));
  });
  document.querySelectorAll("[data-prompt]").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelector("#assistantInput").value = button.dataset.prompt;
      askAssistant(button.dataset.prompt);
    });
  });
  document.querySelector("#assistantForm").addEventListener("submit", event => {
    event.preventDefault();
    const input = document.querySelector("#assistantInput");
    const question = input.value.trim();
    if (!question) return input.focus();
    askAssistant(question);
  });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && state.forecast) {
      const cache = loadJSON("starmap-forecast-cache", null);
      if (!cache || Date.now() - cache.savedAt > 30 * 60 * 1000) fetchForecast(true);
    }
  });
}

async function start() {
  initDate();
  initMap();
  bindEvents();
  renderPlaceStatus();
  renderEquipment();
  if (loadJSON("starmap-red-mode", false)) document.body.classList.add("red-mode");
  refreshIcons();
  await fetchForecast();
  setInterval(() => fetchForecast(true), 30 * 60 * 1000);
}

start();
