const targets = [
  {
    id: "m22", code: "M22", name: "球状星团", difficulty: "easy", difficultyLabel: "容易",
    time: "20:30–22:30", power: "50× → 100×", appearance: "灰白圆球，边缘有颗粒感",
    bearing: 174, altitude: 36, bearingTime: "21:00", anchor: "斗宿四（人马座 λ）",
    summary: "南方最容易确认的球状星团之一，低空湿气会削弱边缘星点。",
    steps: ["找到南方低空的“人马座茶壶”。", "确认壶盖顶部的斗宿四。", "从斗宿四向东北移动约2.5°，用20mm目镜扫入灰白圆球。"]
  },
  {
    id: "m8", code: "M8", name: "礁湖星云", difficulty: "medium", difficultyLabel: "挑战",
    time: "20:30–22:00", power: "40× → 60×", appearance: "疏散星团外包着淡雾",
    bearing: 183, altitude: 36, bearingTime: "21:00", anchor: "人马座茶壶壶嘴",
    summary: "星团比星云容易；光污染下星云只是浅灰薄雾，有UHC滤镜会更明显。",
    steps: ["先找到人马座茶壶的壶嘴。", "沿壶嘴向上约6°寻找一小团星点。", "保持低倍并用余光观察星点周围的灰白雾气。"]
  },
  {
    id: "m11", code: "M11", name: "野鸭星团", difficulty: "easy", difficultyLabel: "容易",
    time: "20:30–23:00", power: "50× → 100×", appearance: "密集、略呈三角形的细碎星群",
    bearing: 165, altitude: 53, bearingTime: "21:00", anchor: "牛郎星与盾牌座",
    summary: "非常适合90mm折射镜，密集星点的观感通常胜过暗弱星云。",
    steps: ["找到东南方明亮的牛郎星。", "沿银河方向向南下移到盾牌座，寻找较亮的盾牌座 β。", "在其东南约2°低倍扫描，星团会表现为紧密颗粒。"]
  },
  {
    id: "m13", code: "M13", name: "武仙座大星团", difficulty: "easy", difficultyLabel: "容易",
    time: "20:30–23:30", power: "50× → 100×", appearance: "亮圆斑，边缘可能分解成星点",
    bearing: 294, altitude: 70, bearingTime: "21:00", anchor: "武仙座四边形",
    summary: "位置高、亮度好，是今晚成功率最高的球状星团。",
    steps: ["从织女星向西寻找武仙座的四边形。", "找到四边形西侧上下两颗星。", "从上方那颗向下走约三分之一距离，低倍即可看到圆形棉球。"]
  },
  {
    id: "m27", code: "M27", name: "哑铃星云", difficulty: "medium", difficultyLabel: "挑战",
    time: "21:00–00:00", power: "50× → 100×", appearance: "较大的椭圆或哑铃状灰雾",
    bearing: 101, altitude: 65, bearingTime: "21:00", anchor: "箭座 γ（箭头）",
    summary: "比M57更大、更亮，但目标附近缺少特别明亮的基准星。",
    steps: ["在牛郎星北侧找到箭座的小箭头形状。", "确认箭头尖端的箭座 γ。", "从箭头向北移动约3°，低倍井字扫描一块椭圆灰雾。"]
  },
  {
    id: "m57", code: "M57", name: "环状星云", difficulty: "medium", difficultyLabel: "挑战",
    time: "21:00–00:00", power: "50× → 100×", appearance: "很小的灰色烟圈",
    bearing: 68, altitude: 81, bearingTime: "21:00", anchor: "渐台二与织女增三",
    summary: "接近头顶，镜架姿势会有些别扭；低倍像虚焦星点，高倍才能确认环形。",
    steps: ["找到织女星及其下方的小平行四边形。", "确认底边的渐台二和织女增三。", "把寻星镜瞄在两星之间略偏织女增三处，居中后换100×。"]
  },
  {
    id: "m31", code: "M31", name: "仙女座星系", difficulty: "easy", difficultyLabel: "容易",
    time: "23:00以后", power: "40× → 50×", appearance: "明亮核心与淡椭圆外晕",
    bearing: 58, altitude: 36, bearingTime: "23:00", anchor: "奎宿九（仙女座 β）",
    summary: "光污染下主要看到星系核心，低倍比高倍更合适。",
    steps: ["在东北方找到仙女座的奎宿九。", "沿奎宿九到奎宿八的方向前进。", "再延长大致相同距离，低倍寻找中央更亮的椭圆云斑。"]
  },
  {
    id: "double", code: "NGC 869/884", name: "英仙座双星团", difficulty: "easy", difficultyLabel: "容易",
    time: "23:30以后", power: "40× → 50×", appearance: "同视野内两团密集星点",
    bearing: 36, altitude: 24, bearingTime: "23:00", anchor: "仙后座 W 与英仙座",
    summary: "低倍视野极具层次，午夜后高度继续上升。",
    steps: ["找到东北方仙后座的 W。", "再找到更低处英仙座最亮的天船三。", "在两者连线中间偏仙后座处寻找双重淡斑，再用低倍确认。"]
  }
];

const phoneProfiles = {
  redmi: {
    name: "Redmi K90 Pro Max",
    label: "专业模式",
    settings: [
      ["镜头", "W / 1×主摄"], ["格式", "RAW + JPEG"],
      ["快门", "15秒"], ["ISO", "1600"],
      ["白平衡", "4000K"], ["对焦", "∞ 回退一格"],
      ["比例", "4:3"], ["定时", "3秒"]
    ],
    note: "天空发灰时改为ISO 800、10–15秒；星点拖线时优先把快门缩到10秒。关闭AI、HDR和高像素模式。",
    copy: "Redmi K90 Pro Max 银河参数：专业模式，W/1×主摄，RAW+JPEG，15秒，ISO 1600，白平衡4000K，手动对焦∞后回退一格，4:3，3秒定时，关闭AI/HDR/高像素模式。"
  },
  iphone: {
    name: "iPhone 17 Pro",
    label: "原生夜景模式",
    settings: [
      ["镜头", "1×主摄"], ["格式", "Apple ProRAW"],
      ["夜景", "先10秒"], ["曝光", "-0.7 EV"],
      ["第二组", "Max / 30秒"], ["暗场曝光", "-1.0 EV"],
      ["比例", "4:3"], ["定时", "3秒"]
    ],
    note: "三脚架完全稳定后才会出现最长夜景时间。不要使用0.5×、2×裁切或强求48MP；夜景自动降到12MP属于正常。",
    copy: "iPhone 17 Pro 银河参数：照片模式，1×主摄，4:3，Apple ProRAW，关闭闪光灯与Live Photo，先拍夜景10秒、-0.7EV、3秒定时；稳定后再拍Max/30秒、-1.0EV。"
  }
};

const forecast = {
  times: ["19:00", "20:00", "21:00", "22:00", "23:00", "00:00", "01:00"],
  cloud: {
    title: "总云量 · %", values: [12, 12, 16, 1, 2, 2, 3], unit: "%",
    max: 100, reading: "最清晰窗口集中在21:00–23:00；云少，但模型之间仍有分歧。"
  },
  humidity: {
    title: "相对湿度 · %", values: [83, 84, 85, 89, 92, 94, 96], unit: "%",
    max: 100, reading: "湿度整夜上升。23:00后注意物镜结露，遮光罩不要提前收起。"
  },
  visibility: {
    title: "能见度 · km", values: [7.6, 9.4, 10.4, 7.9, 7.4, 6.2, 6.2], unit: "km",
    max: 12, reading: "21:00前后透明度相对最好；午夜后低空目标对比度会继续下降。"
  },
  wind: {
    title: "10米风速 · km/h", values: [3.7, 1.8, 0.6, 1.9, 1.9, 2.0, 3.7], unit: "",
    max: 10, reading: "风力很弱，望远镜较稳定；同时也意味着水汽不易被吹散。"
  }
};

const storage = {
  get(key, fallback = []) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // The guide remains usable when storage is unavailable.
    }
  }
};

let selectedTarget = targets[0];
let currentHeading = null;
let toastTimer;

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderForecast(metric = "cloud") {
  const data = forecast[metric];
  document.querySelector("#forecastTitle").textContent = data.title;
  document.querySelector("#forecastReading").textContent = data.reading;
  document.querySelector("#forecastChart").innerHTML = data.values.map((value, index) => {
    const height = Math.max(3, Math.round((value / data.max) * 145));
    return `
      <div class="forecast-column">
        <div class="forecast-bar-wrap">
          <div class="forecast-bar" style="height:${height}px"><span>${value}${data.unit}</span></div>
        </div>
        <time>${forecast.times[index]}</time>
      </div>
    `;
  }).join("");
  document.querySelectorAll("[data-weather]").forEach((button) => {
    button.classList.toggle("active", button.dataset.weather === metric);
  });
}

function updateNowRecommendation() {
  const now = new Date();
  const stages = [
    ["2026-08-15T18:40:00+08:00", "先整理装备，18:40开始架设", "今晚优先使用20mm目镜寻找目标，10mm目镜负责月面、双星与土星。"],
    ["2026-08-15T19:05:00+08:00", "架设90DX并校准寻星镜", "用远处建筑校准，日落前不要让望远镜扫过西方太阳。"],
    ["2026-08-15T20:28:00+08:00", "抢看西南方月牙与金星", "月亮20:28落下，金星约21:02落下，这是不可回头的窗口。"],
    ["2026-08-15T21:15:00+08:00", "先看南方的M22、M8与M11", "它们正在较好高度，之后会逐渐西沉。"],
    ["2026-08-15T23:00:00+08:00", "转向M13、M27与M57", "天文暮光已经结束，月亮也已落下，适合挑战淡目标。"],
    ["2026-08-15T23:30:00+08:00", "东北方寻找M31与双星团", "保持低倍，光污染下主要寻找明亮核心与密集星点。"],
    ["2026-08-16T00:30:00+08:00", "土星已经进入较好高度", "100×观察土星环与泰坦，视宁稳定时再尝试更高倍率。"],
    ["2026-08-16T05:00:00+08:00", "放下望远镜看流星", "面向东北至头顶，后半夜湿度高，镜片结露就及时收镜。"]
  ];
  const start = new Date("2026-08-15T12:00:00+08:00");
  const end = new Date("2026-08-16T05:00:00+08:00");
  let title = stages[0][1];
  let detail = stages[0][2];
  let label = "此刻建议";
  let timeText = "计划日期 08.15";

  if (now >= start && now <= end) {
    for (const [until, stageTitle, stageDetail] of stages) {
      if (now < new Date(until)) {
        title = stageTitle;
        detail = stageDetail;
        const minutes = Math.max(0, Math.round((new Date(until) - now) / 60000));
        timeText = minutes < 60 ? `${minutes}分钟窗口` : `${Math.floor(minutes / 60)}小时${minutes % 60}分`;
        break;
      }
    }
  } else {
    label = "固定计划";
    title = "这是2026年8月15日的大冶观星路线";
    detail = "页面保留了当晚天气、方位和设备参数，适合作为现场记录与复盘。";
  }
  document.querySelector("#nowLabel").textContent = label;
  document.querySelector("#nowTitle").textContent = title;
  document.querySelector("#nowDetail").textContent = detail;
  document.querySelector("#nowTime").textContent = timeText;
}

function renderTargets(filter = "all") {
  const grid = document.querySelector("#targetGrid");
  grid.innerHTML = targets.map((target) => `
    <article class="target-card" data-difficulty="${target.difficulty}" ${filter !== "all" && filter !== target.difficulty ? "hidden" : ""}>
      <div class="target-card-top">
        <span class="target-code">${target.code}</span>
        <span class="difficulty ${target.difficulty}">${target.difficultyLabel}</span>
      </div>
      <h3>${target.name}</h3>
      <div class="target-meta">
        <span>${icon("clock-3")}${target.time}</span>
        <span>${icon("search")}${target.power.split(" → ")[0]}</span>
      </div>
      <p>${target.summary}</p>
      <button class="target-find" type="button" data-target="${target.id}">${icon("locate-fixed")}寻星</button>
    </article>
  `).join("");
  refreshIcons();

  grid.querySelectorAll(".target-find").forEach((button) => {
    button.addEventListener("click", () => {
      selectTarget(button.dataset.target);
      document.querySelector("#finder").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderFinderList() {
  const list = document.querySelector("#finderList");
  list.innerHTML = targets.map((target, index) => `
    <button class="finder-option ${index === 0 ? "active" : ""}" type="button" role="option" aria-selected="${index === 0}" data-target="${target.id}">
      <span>${target.code}</span><span>${target.bearing}°</span>
    </button>
  `).join("");
  list.querySelectorAll(".finder-option").forEach((button) => {
    button.addEventListener("click", () => selectTarget(button.dataset.target));
  });
}

function selectTarget(id) {
  selectedTarget = targets.find((target) => target.id === id) || targets[0];
  document.querySelectorAll(".finder-option").forEach((button) => {
    const active = button.dataset.target === selectedTarget.id;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelector("#finderName").textContent = `${selectedTarget.code} ${selectedTarget.name}`;
  document.querySelector("#bearingValue").textContent = `${selectedTarget.bearing}°`;
  document.querySelector("#altitudeValue").textContent = `仰角 ${selectedTarget.altitude}° · ${selectedTarget.bearingTime}`;
  document.querySelector("#anchorStar").textContent = selectedTarget.anchor;
  document.querySelector("#finderPower").textContent = selectedTarget.power;
  document.querySelector("#finderAppearance").textContent = selectedTarget.appearance;
  document.querySelector("#routeSteps").innerHTML = selectedTarget.steps.map((step) => `<li>${step}</li>`).join("");
  updateNeedle();
}

function updateNeedle() {
  const relative = currentHeading === null
    ? selectedTarget.bearing
    : (selectedTarget.bearing - currentHeading + 360) % 360;
  document.querySelector("#targetNeedle").style.transform = `rotate(${relative}deg)`;
}

function handleOrientation(event) {
  let heading = null;
  if (typeof event.webkitCompassHeading === "number") {
    heading = event.webkitCompassHeading;
  } else if (event.absolute && typeof event.alpha === "number") {
    heading = (360 - event.alpha) % 360;
  } else if (typeof event.alpha === "number") {
    heading = (360 - event.alpha) % 360;
  }
  if (heading === null || Number.isNaN(heading)) return;
  currentHeading = heading;
  document.querySelector("#sensorStatus").textContent = `手机朝向 ${Math.round(heading)}°；箭头指向目标相对方向。`;
  updateNeedle();
}

async function enableCompass() {
  const status = document.querySelector("#sensorStatus");
  try {
    if (typeof DeviceOrientationEvent === "undefined") {
      throw new Error("此设备没有提供方向传感器。");
    }
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      const permission = await DeviceOrientationEvent.requestPermission();
      if (permission !== "granted") throw new Error("方向权限未获允许。");
    }
    window.addEventListener("deviceorientationabsolute", handleOrientation, true);
    window.addEventListener("deviceorientation", handleOrientation, true);
    status.textContent = "指南针已启用，请将手机平放并远离金属镜架。";
    showToast("指南针已启用");
  } catch (error) {
    status.textContent = `${error.message} 仍可直接按方位角寻找。`;
  }
}

function setupPlan() {
  const completed = new Set(storage.get("stargazing-plan"));
  const items = [...document.querySelectorAll(".timeline-item")];

  const sync = () => {
    items.forEach((item) => {
      const done = completed.has(item.dataset.planId);
      const button = item.querySelector(".timeline-check");
      button.setAttribute("aria-pressed", String(done));
      button.innerHTML = icon(done ? "check" : "circle");
      item.classList.toggle("is-complete", done);
    });
    const count = completed.size;
    document.querySelector("#progressText").textContent = `${count} / ${items.length} 已完成`;
    document.querySelector("#progressBar").style.width = `${(count / items.length) * 100}%`;
    storage.set("stargazing-plan", [...completed]);
    refreshIcons();
  };

  items.forEach((item) => {
    item.querySelector(".timeline-check").addEventListener("click", () => {
      const id = item.dataset.planId;
      completed.has(id) ? completed.delete(id) : completed.add(id);
      sync();
    });
  });

  document.querySelector("#resetPlan").addEventListener("click", () => {
    completed.clear();
    sync();
    showToast("今晚计划已重置");
  });
  sync();
}

function setupGear() {
  const checked = new Set(storage.get("stargazing-gear"));
  const items = [...document.querySelectorAll(".gear-item")];
  const sync = () => {
    items.forEach((item) => {
      const done = checked.has(item.dataset.gearId);
      item.setAttribute("aria-pressed", String(done));
      item.querySelector("i, svg")?.remove();
      item.insertAdjacentHTML("afterbegin", icon(done ? "square-check-big" : "square"));
    });
    storage.set("stargazing-gear", [...checked]);
    refreshIcons();
  };
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.dataset.gearId;
      checked.has(id) ? checked.delete(id) : checked.add(id);
      sync();
    });
  });
  sync();
}

function renderPhone(key) {
  const profile = phoneProfiles[key];
  document.querySelector("#phoneName").textContent = profile.name;
  document.querySelector("#phoneModeLabel").textContent = profile.label;
  document.querySelector("#settingsGrid").innerHTML = profile.settings.map(([name, value]) => `
    <div class="setting-row"><dt>${name}</dt><dd>${value}</dd></div>
  `).join("");
  document.querySelector("#settingsNote").textContent = profile.note;
  document.querySelector("#copySettings").dataset.copy = profile.copy;
  document.querySelectorAll(".phone-switch button").forEach((button) => {
    const active = button.dataset.phone === key;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

async function copySettings() {
  try {
    await navigator.clipboard.writeText(document.querySelector("#copySettings").dataset.copy);
    showToast("拍摄参数已复制");
  } catch {
    showToast("浏览器未允许复制，请截屏保存");
  }
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function setupControls() {
  document.querySelectorAll("[data-weather]").forEach((button) => {
    button.addEventListener("click", () => renderForecast(button.dataset.weather));
  });
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
      renderTargets(button.dataset.filter);
    });
  });
  document.querySelectorAll(".phone-switch button").forEach((button) => {
    button.addEventListener("click", () => renderPhone(button.dataset.phone));
  });
  document.querySelector("#copySettings").addEventListener("click", copySettings);
  document.querySelector("#enableCompass").addEventListener("click", enableCompass);
  document.querySelector("#nightToggle").addEventListener("click", () => {
    document.body.classList.toggle("red-mode");
    const enabled = document.body.classList.contains("red-mode");
    storage.set("stargazing-red-mode", enabled);
    showToast(enabled ? "已进入红光模式" : "已退出红光模式");
  });
  if (storage.get("stargazing-red-mode", false) === true) {
    document.body.classList.add("red-mode");
  }
}

function localAdvice(question) {
  const text = question.toLowerCase();
  if (/雾|露|结露|起雾/.test(text)) {
    return "1. 立即停止加倍率，盖好未使用的目镜。\n2. 物镜轻微结露时让镜筒自然回温或使用低功率加热带，绝对不要擦镜片。\n3. 转为肉眼辨认夏季大三角；结露加重就收镜。";
  }
  if (/m57|环状|找不到/.test(text)) {
    return "1. 换回20mm目镜，找到织女星下方的小平行四边形。\n2. 把渐台二与织女增三放进寻星镜，瞄准两星之间略偏织女增三处。\n3. 先找一颗“虚焦小星”，居中后换10mm并用余光确认烟圈。";
  }
  if (/云/.test(text)) {
    return "1. 不追暗星云，先观察云隙中的织女星、牛郎星和辇道增七。\n2. 南方清就看M11/M22，东方清就等待土星，东北清就看M31。\n3. 连续20分钟无明显云隙就盖镜，保留手机拍摄机会。";
  }
  if (/30分钟|半小时|来不及|只剩/.test(text)) {
    return "1. 先看M11野鸭星团，低倍下最容易获得细节。\n2. 随后看M13；若已到23:30，直接把第二目标换成土星与泰坦。\n3. 最后留5分钟用肉眼扫视夏季大三角。";
  }
  if (/土星|模糊|很糊|抖/.test(text)) {
    return "1. 先退回50×并确认镜筒、地面与调焦座稳定。\n2. 等土星升到23:30以后，再用100×；今晚不要急着叠加2×巴罗镜。\n3. 若星像持续翻滚或有彩边，这是低空大气影响，等待比加倍率更有效。";
  }
  if (/银河|拍照|摄影/.test(text)) {
    return "1. 镜头朝东南偏南、仰角45°–55°，使用1×主摄。\n2. Redmi先用RAW、15秒、ISO1600、4000K；天空发灰就降到ISO800。\n3. 连拍10张且不要移动三脚架，现场只检查星点是否拖线。";
  }
  return "1. 先根据天空最清的方向选择目标，不要按清单硬追。\n2. 20mm目镜负责寻找，目标居中后才换10mm。\n3. 优先级按M11、M13、M27、土星排列；湿度升高时提前处理结露。";
}

function buildAssistantPrompt(question) {
  const completed = storage.get("stargazing-plan", []);
  return [
    "你是谨慎、简洁的现场观星助手。只给3条可执行建议，每条一句，不超过180个汉字。",
    "不要改写或猜测方位，不要推荐太阳观测，不要让用户擦拭结露镜片。",
    "固定事实：地点湖北大冶30.04N,114.91E；日期2026-08-15晚；光污染5.7级；设备星特朗90DX，20mm约50倍、10mm约100倍；月落20:28；土星23:30后更好；湿度83%升至94%以上。",
    "优先目标：M11、M13、M27、M57、M31、英仙座双星团、土星与泰坦。",
    `已完成计划项：${completed.length ? completed.join("、") : "暂无"}`,
    `现场问题：${question}`
  ].join("\n");
}

async function requestAIAdvice(question) {
  const status = document.querySelector("#aiStatus");
  const responseText = document.querySelector("#aiResponse p");
  const submit = document.querySelector("#aiForm button");
  status.textContent = "模型思考中";
  status.className = "ai-status loading";
  responseText.textContent = "正在结合今晚条件生成建议…";
  submit.disabled = true;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const prompt = buildAssistantPrompt(question);
    const url = `https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=openai-fast&temperature=0.2&seed=8152026`;
    const response = await fetch(url, { signal: controller.signal, headers: { Accept: "text/plain" } });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const answer = (await response.text()).trim();
    if (!answer || answer.length > 900 || answer.startsWith("<")) throw new Error("无有效响应");
    responseText.textContent = answer;
    status.textContent = "AI在线";
    status.className = "ai-status";
  } catch {
    responseText.textContent = localAdvice(question);
    status.textContent = "本地规则";
    status.className = "ai-status local";
  } finally {
    clearTimeout(timer);
    submit.disabled = false;
  }
}

function setupAssistant() {
  const form = document.querySelector("#aiForm");
  const input = document.querySelector("#aiQuestion");
  document.querySelectorAll("[data-prompt]").forEach((button) => {
    button.addEventListener("click", () => {
      input.value = button.dataset.prompt;
      requestAIAdvice(input.value);
    });
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question) {
      input.focus();
      return;
    }
    requestAIAdvice(question);
  });
}

renderForecast();
updateNowRecommendation();
renderTargets();
renderFinderList();
selectTarget("m22");
renderPhone("redmi");
setupPlan();
setupGear();
setupControls();
setupAssistant();
refreshIcons();
