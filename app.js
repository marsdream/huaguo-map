// 花果地图 - 北京徒步路线四季采集指南
// 数据来源：调研文档 + 网友经验

const ROUTES = [
  {
    id: "tenglou-gu",
    name: "藤萝谷",
    location: "怀柔区",
    coordinates: [116.5412, 40.4231],
    difficulty: "入门",
    distance: "约8公里",
    elevation: "约400米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["藤萝花海", "山桃花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [9],
        flowers: ["秋叶"],
        fruits: [
          { name: "野生猕猴桃", note: "酸甜，9月最佳" },
          { name: "酸枣", note: "" }
        ]
      }
    ]
  },
  {
    id: "beiling-shan",
    name: "北灵山",
    location: "门头沟区",
    coordinates: [115.4631, 39.9931],
    difficulty: "中等",
    distance: "约12公里",
    elevation: "约600米",
    seasons: [
      {
        season: "spring",
        months: [5, 6],
        flowers: ["高山草甸野花", "山丹丹"],
        fruits: [
          { name: "野韭菜", note: "可包饺子、做馅饼" },
          { name: "山葱", note: "辛辣可食" }
        ]
      }
    ]
  },
  {
    id: "dongling-shan",
    name: "东灵山",
    location: "门头沟区",
    coordinates: [115.4428, 39.9803],
    difficulty: "中等",
    distance: "约10公里",
    elevation: "约700米",
    seasons: [
      {
        season: "spring",
        months: [5],
        flowers: ["山花烂漫"],
        fruits: [
          { name: "野韭菜", note: "山顶草甸可采" }
        ]
      },
      {
        season: "autumn",
        months: [10],
        flowers: ["彩叶"],
        fruits: [
          { name: "山楂", note: "野生山楂，酸甜" }
        ]
      }
    ]
  },
  {
    id: "huangcao-liang",
    name: "黄草梁",
    location: "门头沟区",
    coordinates: [115.4831, 39.9917],
    difficulty: "入门",
    distance: "约8公里",
    elevation: "约300米",
    seasons: [
      {
        season: "autumn",
        months: [10],
        flowers: ["秋草金黄"],
        fruits: [
          { name: "酸枣", note: "漫山遍野" },
          { name: "山楂", note: "" }
        ]
      }
    ]
  },
  {
    id: "houhuayuan",
    name: "后花园（白虎涧）",
    location: "昌平区",
    coordinates: [116.2131, 40.1231],
    difficulty: "入门",
    distance: "约6公里",
    elevation: "约200米",
    seasons: [
      {
        season: "spring",
        months: [4],
        flowers: ["山桃花", "野花"],
        fruits: [
          { name: "野葱", note: "可做馅饼" },
          { name: "野蒜", note: "" }
        ]
      }
    ]
  },
  {
    id: "baihe-xiagu",
    name: "白河峡谷",
    location: "密云区",
    coordinates: [116.6831, 40.7231],
    difficulty: "入门",
    distance: "约15公里",
    elevation: "约100米",
    seasons: [
      {
        season: "summer",
        months: [6, 7, 8],
        flowers: [],
        fruits: [
          { name: "野生桑葚", note: "河边桑树" }
        ]
      }
    ]
  },
  {
    id: "yudi-shan",
    name: "玉渡山",
    location: "延庆区",
    coordinates: [116.0731, 40.5531],
    difficulty: "入门",
    distance: "约7公里",
    elevation: "约200米",
    seasons: [
      {
        season: "summer",
        months: [6, 7, 8],
        flowers: ["野花", "高山花海"],
        fruits: [
          { name: "山楂（微青）", note: "夏季果实初成" }
        ]
      }
    ]
  },
  {
    id: "jsek-shan",
    name: "戒台寺-南村",
    location: "门头沟区",
    coordinates: [116.0831, 39.8731],
    difficulty: "入门",
    distance: "约5公里",
    elevation: "约150米",
    seasons: [
      {
        season: "spring",
        months: [4],
        flowers: ["山桃花", "杏花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10],
        flowers: ["秋景"],
        fruits: [
          { name: "核桃", note: "农家核桃树" },
          { name: "栗子", note: "" }
        ]
      }
    ]
  },
  {
    id: "bjiaotou",
    name: "箭扣长城",
    location: "怀柔区",
    coordinates: [116.5312, 40.4531],
    difficulty: "进阶",
    distance: "约9公里",
    elevation: "约500米",
    seasons: [
      {
        season: "winter",
        months: [12, 1, 2],
        flowers: [],
        fruits: []
      }
    ]
  },
  {
    id: "yunmeng-shan",
    name: "云蒙山",
    location: "密云区",
    coordinates: [116.6431, 40.5831],
    difficulty: "中等",
    distance: "约11公里",
    elevation: "约600米",
    seasons: [
      {
        season: "autumn",
        months: [10, 11],
        flowers: [],
        fruits: [
          { name: "野果", note: "山里各种野果" }
        ]
      }
    ]
  },
  {
    id: "lingshan",
    name: "灵山（江水河村）",
    location: "门头沟区",
    coordinates: [115.4431, 39.9831],
    difficulty: "中等",
    distance: "约10公里",
    elevation: "约700米",
    seasons: [
      {
        season: "winter",
        months: [12, 1, 2],
        flowers: [],
        fruits: []
      },
      {
        season: "summer",
        months: [7, 8],
        flowers: ["亚高山草甸野花"],
        fruits: [
          { name: "野韭菜", note: "" }
        ]
      }
    ]
  },
  {
    id: "laoling",
    name: "老岭-刘家店",
    location: "平谷区",
    coordinates: [117.1231, 40.1531],
    difficulty: "入门",
    distance: "约7公里",
    elevation: "约200米",
    seasons: [
      {
        season: "autumn",
        months: [10],
        flowers: [],
        fruits: [
          { name: "核桃", note: "" },
          { name: "栗子", note: "" }
        ]
      }
    ]
  },
  {
    id: "jiuyishan",
    name: "九眼楼长城",
    location: "怀柔区",
    coordinates: [116.4712, 40.5031],
    difficulty: "中等",
    distance: "约10公里",
    elevation: "约500米",
    seasons: [
      {
        season: "spring",
        months: [5],
        flowers: ["山花"],
        fruits: []
      }
    ]
  },
  {
    id: "longtan-hu",
    name: "龙潭涧",
    location: "怀柔区",
    coordinates: [116.6231, 40.4531],
    difficulty: "入门",
    distance: "约6公里",
    elevation: "约100米",
    seasons: [
      {
        season: "summer",
        months: [7, 8],
        flowers: [],
        fruits: [
          { name: "野生桑葚", note: "" }
        ]
      }
    ]
  },
  {
    id: "xianshi",
    name: "显式山",
    location: "昌平区",
    coordinates: [116.2531, 40.2231],
    difficulty: "入门",
    distance: "约5公里",
    elevation: "约150米",
    seasons: [
      {
        season: "spring",
        months: [4],
        flowers: ["野花"],
        fruits: [
          { name: "野菜", note: "可食用的各种野菜" }
        ]
      }
    ]
  }
];

// Leaflet map init
const map = L.map('map').setView([40.15, 116.3], 9);

L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
  subdomains: '1234',
  attribution: '© 高德地图',
  maxZoom: 18
}).addTo(map);

// Season colors
const SEASON_COLORS = {
  spring: '#e91e63',
  summer: '#4caf50',
  autumn: '#ff9800',
  winter: '#2196f3'
};

const SEASON_NAMES = {
  spring: '🌸 春季',
  summer: '🌿 夏季',
  autumn: '🍂 秋季',
  winter: '❄️ 冬季'
};

let activeSeason = 'all';
let activeRouteId = null;
const markers = {};

// Add markers
ROUTES.forEach(route => {
  const seasons = route.seasons.map(s => s.season);
  const color = SEASON_COLORS[seasons[0]] || '#888';

  const icon = L.divIcon({
    className: 'custom-marker',
    html: `<div style="background:${color};width:28px;height:28px;border-radius:50%;border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;">${seasons.includes('spring') ? '🌸' : seasons.includes('summer') ? '🌿' : seasons.includes('winter') ? '❄️' : '🍂'}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });

  const marker = L.marker(route.coordinates, { icon }).addTo(map);
  marker.on('click', () => showRouteDetail(route.id));
  markers[route.id] = marker;
});

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeSeason = btn.dataset.season;
    renderRouteList();
    updateMarkers();
  });
});

// Search
document.getElementById('searchInput').addEventListener('input', renderRouteList);

function getSeasonIcon(season) {
  const icons = { spring: '🌸', summer: '🌿', autumn: '🍂', winter: '❄️' };
  return icons[season] || '';
}

function getSeasonLabel(season) {
  return SEASON_NAMES[season] || season;
}

function getFruitsForRoute(route) {
  const fruits = [];
  route.seasons.forEach(s => {
    s.fruits.forEach(f => {
      if (!fruits.find(x => x.name === f.name)) {
        fruits.push(f);
      }
    });
  });
  return fruits;
}

function matchesFilter(route) {
  // Season filter
  if (activeSeason !== 'all') {
    const hasSeason = route.seasons.some(s => s.season === activeSeason);
    if (!hasSeason) return false;
  }
  // Search filter
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (query) {
    const fruits = getFruitsForRoute(route);
    const searchable = [
      route.name,
      route.location,
      ...route.seasons.flatMap(s => s.flowers),
      ...fruits.map(f => f.name)
    ].join(' ').toLowerCase();
    if (!searchable.includes(query)) return false;
  }
  return true;
}

function renderRouteList() {
  const container = document.getElementById('routeList');
  const filtered = ROUTES.filter(matchesFilter);

  if (filtered.length === 0) {
    container.innerHTML = '<div style="padding:20px;text-align:center;color:#999;font-size:14px;">没有找到符合条件的路线</div>';
    return;
  }

  container.innerHTML = filtered.map(route => {
    const fruits = getFruitsForRoute(route);
    const seasonTags = route.seasons.map(s =>
      `<span class="season-tag ${s.season}">${getSeasonIcon(s.season)} ${getSeasonLabel(s.season)}</span>`
    ).join('');
    const activeClass = route.id === activeRouteId ? ' active' : '';
    const fruitTags = fruits.slice(0, 3).map(f =>
      `<span class="fruit-tag">🍎 ${f.name}</span>`
    ).join(' ');
    return `
      <div class="route-card${activeClass}" onclick="showRouteDetail('${route.id}')">
        <div class="route-card-title">
          <span>${route.name}</span>
        </div>
        <div class="route-card-meta">
          <span>📍 ${route.location}</span>
          <span>🥾 ${route.difficulty}</span>
        </div>
        <div style="margin-top:6px;display:flex;flex-wrap:wrap;gap:4px;align-items:center;">
          ${seasonTags}
        </div>
        ${fruits.length > 0 ? `<div style="margin-top:6px;display:flex;flex-wrap:wrap;gap:4px;">${fruitTags}${fruits.length > 3 ? `<span style="font-size:11px;color:#888;">+${fruits.length - 3}</span>` : ''}</div>` : ''}
      </div>
    `;
  }).join('');
}

function updateMarkers() {
  ROUTES.forEach(route => {
    const marker = markers[route.id];
    if (activeSeason === 'all' || route.seasons.some(s => s.season === activeSeason)) {
      marker.addTo(map);
    } else {
      marker.remove();
    }
  });
}

function showRouteDetail(id) {
  const route = ROUTES.find(r => r.id === id);
  if (!route) return;
  activeRouteId = id;
  renderRouteList();

  // Center map
  map.flyTo(route.coordinates, 13, { duration: 0.8 });

  // Build modal content
  document.getElementById('modalTitle').textContent = route.name;
  document.getElementById('modalLocation').textContent = `📍 ${route.location}`;
  document.getElementById('modalDifficulty').textContent = `🥾 ${route.difficulty}`;
  document.getElementById('modalDistance').textContent = `📏 ${route.distance}`;

  const seasonsHtml = route.seasons.map(s => {
    const flowersHtml = s.flowers.length > 0
      ? `<li>🌸 可看花：${s.flowers.join('、')}</li>`
      : '';
    const fruitsHtml = s.fruits.length > 0
      ? `<li>🍎 可采集：${s.fruits.map(f => f.name + (f.note ? `（${f.note}）` : '')).join('、')}</li>`
      : '';
    const months = s.months.map(m => ['元','二','三','四','五','六','七','八','九','十','十一','十二'][m-1] + '月').join('、');
    return `
      <div class="season-block ${s.season}">
        <h4>${getSeasonIcon(s.season)} ${getSeasonLabel(s.season)}（${months}）</h4>
        <ul>
          ${flowersHtml}
          ${fruitsHtml}
          ${!flowersHtml && !fruitsHtml ? '<li>特色季节，可欣赏自然风光</li>' : ''}
        </ul>
      </div>
    `;
  }).join('');

  document.getElementById('modalSeasons').innerHTML = seasonsHtml;
  document.getElementById('modal').classList.add('show');
}

// Close modal
document.getElementById('modalClose').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('show');
  activeRouteId = null;
  renderRouteList();
});

document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) {
    document.getElementById('modal').classList.remove('show');
    activeRouteId = null;
    renderRouteList();
  }
});

// Init
renderRouteList();
