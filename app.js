// 花果地图 - 北京徒步路线四季采集指南
// 数据来源：visitbeijing.com.cn、两步路、户外攻略等公开资料
// 坐标说明：Leaflet 使用 [lat, lng] 格式（纬度在前）

const ROUTES = [
  {
    id: "tenglou-gu",
    name: "藤萝谷",
    location: "怀柔区",
    coordinates: [40.5667, 116.5911],
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
          { name: "酸枣", note: "满山遍野" }
        ]
      }
    ],
    notes: "起点：河防口隧道。驴友称为「北京小魔法森林」，溪流潺潺，爬升不高"
  
  },
  {
    id: "beiling-shan",
    name: "北灵山",
    location: "门头沟区",
    coordinates: [39.9831, 115.4631],
    difficulty: "中等",
    distance: "约11公里（塔儿寺村往返）",
    elevation: "约720米爬升",
    seasons: [
      {
        season: "spring",
        months: [5, 6],
        flowers: ["高山草甸野花", "山丹丹"],
        fruits: [
          { name: "野韭菜", note: "初夏最佳，可包饺子" }
        ]
      }
    ],
    notes: "起点：塔儿寺村。海拔1915米，京西徒步枢纽，野韭菜坡是其标志"
  
  },
  {
    id: "dongling-shan",
    name: "东灵山",
    location: "门头沟区",
    coordinates: [39.9985, 115.4344],
    difficulty: "进阶",
    distance: "约10公里（聚灵峡景区）",
    elevation: "约1300米爬升",
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
          { name: "山楂", note: "野生山楂" }
        ]
      }
    ],
    notes: "北京第一高峰，海拔2303米。起点下马威（GPS: 39.9985, 115.4344），或聚灵峡景区"
  
  },
  {
    id: "huangcao-liang",
    name: "黄草梁",
    location: "门头沟区",
    coordinates: [39.9917, 115.4831],
    difficulty: "入门",
    distance: "约11公里",
    elevation: "约500米",
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
    ],
    notes: "主峰海拔1737米，京西古道驿站，被誉为「驴友后花园」"
  
  },
  {
    id: "houhuayuan",
    name: "后花园（白虎涧）",
    location: "昌平区",
    coordinates: [40.1231, 116.2131],
    difficulty: "入门",
    distance: "约8公里（野葱路线）",
    elevation: "约400米",
    seasons: [
      {
        season: "spring",
        months: [4],
        flowers: ["山桃花", "野花"],
        fruits: [
          { name: "野葱", note: "4月最佳，可做馅饼" }
        ]
      }
    ],
    notes: "又称白虎涧森林公园，地址：昌平区阳坊镇后二路。「燕平八景」之一"
  
  },
  {
    id: "baihe-xiagu",
    name: "白河峡谷",
    location: "密云区",
    coordinates: [40.7231, 116.6831],
    difficulty: "入门",
    distance: "约15公里",
    elevation: "约100米",
    seasons: [
      {
        season: "summer",
        months: [6, 7, 8],
        flowers: [],
        fruits: [
          { name: "野生桑葚", note: "河边桑树，夏季可采" }
        ]
      }
    ],
    notes: "延庆白河堡至密云水库段，著名的「白河徒步道」"
  
  },
  {
    id: "yudi-shan",
    name: "玉渡山",
    location: "延庆区",
    coordinates: [40.5531, 116.0731],
    difficulty: "入门",
    distance: "约5公里",
    elevation: "约200米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山花烂漫", "杜鹃"],
        fruits: []
      },
      {
        season: "summer",
        months: [6, 7, 8],
        flowers: [],
        fruits: [
          { name: "山楂（青）", note: "夏季果实初成" }
        ]
      },
      {
        season: "autumn",
        months: [9, 10],
        flowers: ["彩叶"],
        fruits: [
          { name: "野果", note: "" }
        ]
      }
    ],
    notes: "海拔860米，延庆深山处女地，四季皆宜，高山草甸是其标志景观"
  
  },
  {
    id: "yunmeng-shan",
    name: "云蒙山",
    location: "密云区",
    coordinates: [40.5696, 116.7023],
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
    ],
    notes: "主峰海拔1414米，京郊「小黄山」，地址：密云区与怀柔区交界"
  
  },
  {
    id: "jsek-shan",
    name: "戒台寺-南村",
    location: "门头沟区",
    coordinates: [39.8731, 116.0831],
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
          { name: "核桃", note: "农家核桃树" }
        ]
      }
    ],
    notes: "戒台寺周边，千年古寺，历史悠久"
  
  },
  {
    id: "bjiaotou",
    name: "箭扣长城",
    location: "怀柔区",
    coordinates: [40.4531, 116.5312],
    difficulty: "进阶",
    distance: "约9公里",
    elevation: "约500米",
    seasons: [
      {
        season: "winter",
        months: [12, 1, 2],
        flowers: [],
        fruits: []
      },
      {
        season: "autumn",
        months: [11],
        flowers: [],
        fruits: []
      }
    ],
    notes: "北京最著名野长城段，冬季可攀冰，需一定户外经验"
  
  },
  {
    id: "lingshan",
    name: "灵山（江水河村）",
    location: "门头沟区",
    coordinates: [39.9831, 115.4431],
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
        fruits: []
      }
    ],
    notes: "灵山风景区，冬季雪景出名，夏季草甸花海。起点：江水河村"
  
  },
  {
    id: "laoling",
    name: "老岭-刘家店",
    location: "平谷区",
    coordinates: [40.1531, 117.1231],
    difficulty: "入门",
    distance: "约7公里",
    elevation: "约200米",
    seasons: [
      {
        season: "autumn",
        months: [10],
        flowers: [],
        fruits: [
          { name: "核桃", note: "平谷核桃" },
          { name: "栗子", note: "" }
        ]
      }
    ],
    notes: "平谷区，秋季采摘核桃栗子的好去处"
  },
  {
    id: "jiuyishan",
    name: "九眼楼长城",
    location: "怀柔区",
    coordinates: [40.5031, 116.4712],
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
    ],
    notes: "北京最高的烽火台（海拔1000米+），春天山花遍野"
  },
  {
    id: "longtan-hu",
    name: "龙潭涧",
    location: "怀柔区",
    coordinates: [40.4531, 116.6231],
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
    ],
    notes: "夏季玩水的好地方，溪流清澈"
  },
  {
    id: "xianshi",
    name: "显光寺-灰地",
    location: "昌平区",
    coordinates: [40.2231, 116.2531],
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
    ],
    notes: "昌平山区，春季挖野菜的好去处"
  },

  {
    id: "xiangbala",
    name: "香八拉",
    location: "海淀区·石景山区",
    coordinates: [39.9786, 116.1950],
    difficulty: "入门",
    distance: "约12公里",
    elevation: "约500米",
    seasons: [
      {
        season: "autumn",
        months: [10, 11],
        flowers: [],
        fruits: [
          { name: "山楂", note: "沿线野山楂树" },
          { name: "柿子", note: "秋天成熟" }
        ]
      },
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花", "杏花"],
        fruits: []
      }
    ],
    notes: "香山→八大处环线，北京最经典徒步路线之一。起点香山邮局，终点八大处公园"
  },

  {
    id: "xiangshan-gongyuan",
    name: "香山公园",
    location: "海淀区",
    coordinates: [39.9911, 116.1931],
    difficulty: "入门",
    distance: "约6公里",
    elevation: "约400米",
    seasons: [
      {
        season: "autumn",
        months: [10, 11],
        flowers: [],
        fruits: [
          { name: "柿子", note: "香山后山野柿子" }
        ]
      },
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花", "杏花", "丁香"],
        fruits: []
      }
    ],
    notes: "香山公园内环线，适合全家出行。红叶节期间人流量大，建议早出发"
  },

  {
    id: "miaofengshan",
    name: "妙峰山",
    location: "门头沟区",
    coordinates: [40.0682, 116.0254],
    difficulty: "中等",
    distance: "约15公里",
    elevation: "约900米",
    seasons: [
      {
        season: "summer",
        months: [7, 8],
        flowers: ["野菊花"],
        fruits: [
          { name: "野猕猴桃", note: "8-9月" }
        ]
      },
      {
        season: "autumn",
        months: [9, 10],
        flowers: [],
        fruits: [
          { name: "核桃", note: "9月采收" },
          { name: "栗子", note: "9-10月" },
          { name: "酸枣", note: "满山遍野" }
        ]
      }
    ],
    notes: "京西古道，主峰海拔1291米。玫瑰谷是其特色，6月花开"
  },

  {
    id: "baihuashan",
    name: "百花山",
    location: "门头沟区",
    coordinates: [39.8678, 115.5967],
    difficulty: "中等",
    distance: "约10公里",
    elevation: "约800米",
    seasons: [
      {
        season: "summer",
        months: [6, 7, 8],
        flowers: ["高山草甸野花", "野菊花", "金莲花"],
        fruits: [
          { name: "野草莓", note: "6-7月" },
          { name: "野猕猴桃", note: "9月" }
        ]
      }
    ],
    notes: "北京第三高峰，海拔1991米。高山草甸为华北地区代表景观"
  },

  {
    id: "doufugou",
    name: "豆腐沟-东直门",
    location: "怀柔区",
    coordinates: [40.4567, 116.6050],
    difficulty: "入门",
    distance: "约9公里",
    elevation: "约300米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花", "杏花", "梨花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10],
        flowers: [],
        fruits: [
          { name: "红肖梨", note: "怀柔特产" },
          { name: "核桃", note: "9月" }
        ]
      }
    ],
    notes: "怀柔经典徒步路线，沿沟谷而行，春季花海秋季采果"
  },

  {
    id: "fenghuangling",
    name: "凤凰岭",
    location: "海淀区",
    coordinates: [40.1052, 116.1000],
    difficulty: "入门",
    distance: "约10公里",
    elevation: "约700米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花", "杏花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: [],
        fruits: [
          { name: "山楂", note: "沿线野山楂" },
          { name: "柿子", note: "秋天成熟" }
        ]
      }
    ],
    notes: "海淀区苏家坨镇，京西小黄山之称。与妙峰山相邻，徒步者可串联两峰"
  },

  {
    id: "mutianyu",
    name: "慕田峪长城",
    location: "怀柔区",
    coordinates: [40.4311, 116.5731],
    difficulty: "入门",
    distance: "约8公里",
    elevation: "约500米",
    seasons: [
      {
        season: "autumn",
        months: [10, 11],
        flowers: [],
        fruits: [
          { name: "山楂", note: "沿线野山楂树" },
          { name: "板栗", note: "怀柔特产" }
        ]
      },
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花", "杏花"],
        fruits: []
      }
    ],
    notes: "怀柔区渤海镇，著名长城段之一，植被茂密，春秋皆宜"
  }
];

// Load flowers data from iNaturalist (enhanced flower period data)
let FLOWERS_DATA = [];
let FLOWERS_LOADED = false;

async function loadFlowersData() {
  try {
    const resp = await fetch('./data/flowers.json');
    if (!resp.ok) throw new Error('Failed to load flowers.json');
    const data = await resp.json();
    FLOWERS_DATA = data.flowers || [];
    FLOWERS_LOADED = true;
  } catch (e) {
    console.warn('flowers.json load failed:', e);
  }
}

function findFlowerRecord(name) {
  if (!FLOWERS_LOADED || !name) return null;
  const n = name.toLowerCase();
  for (const f of FLOWERS_DATA) {
    if (f.name.toLowerCase().includes(n) || n.includes(f.name.toLowerCase())) return f;
    if (f.scientificName && f.scientificName.toLowerCase().includes(n)) return f;
  }
  return null;
}

function getFlowerPeriod(name) {
  const rec = findFlowerRecord(name);
  if (rec && rec.flowerPeriod && rec.flowerPeriod.length > 0) return rec.flowerPeriod[0];
  return null;
}

loadFlowersData();

// ─── Flower photo lightbox ────────────────────────────────────────────────

function getFlowerEls() {
  return {
    modal:    document.getElementById('flowerModal'),
    gallery:  document.getElementById('flowerModalGallery'),
    loading:  document.getElementById('flowerModalLoading'),
    error:    document.getElementById('flowerModalError'),
    title:    document.getElementById('flowerModalTitle'),
  };
}

function closeFlowerPhoto() {
  const els = getFlowerEls();
  if (els.modal) els.modal.classList.remove('show');
}

async function showFlowerPhoto(name) {
  const els = getFlowerEls();
  if (!els.modal || !els.gallery || !els.loading || !els.error || !els.title) {
    console.warn('[FlowerPhoto] Modal elements not found — index.html may not be deployed');
    return;
  }

  els.title.textContent = '🌸 ' + name;
  els.gallery.innerHTML = '';
  els.loading.style.display = 'flex';
  els.error.style.display = 'none';
  els.modal.classList.add('show');

  try {
    const encoded = encodeURIComponent(name);
    const resp = await fetch(
      `https://zj.v.api.aa1.cn/api/so-baidu-img/?msg=${encoded}&page=1`,
      { headers: { 'Origin': 'https://huaguo.goye.club' } }
    );
    const d = await resp.json();
    const imgs = Array.isArray(d) ? d : (d.data || []);

    els.loading.style.display = 'none';

    if (imgs.length === 0) {
      els.error.style.display = 'block';
      return;
    }

    // Up to 6 images; use thumbnail for display, hoverUrl for original link
    const html = imgs.slice(0, 6).map(img => {
      const thumb = img.thumbnailUrl || img.hoverUrl || '';
      const orig  = img.hoverUrl || thumb;
      const title = img.oriTitle || '';
      if (!thumb) return '';
      return `<a href="${orig}" target="_blank" class="flower-photo-card" title="${title}">
        <img src="${thumb}" alt="${name}" loading="lazy" />
        <p class="flower-credit">百度图片 · ${title.slice(0, 20)}</p>
      </a>`;
    }).join('');

    if (html) {
      els.gallery.innerHTML = html;
    } else {
      els.error.style.display = 'block';
    }
  } catch (e) {
    console.warn('[FlowerPhoto] Fetch failed:', e);
    els.loading.style.display = 'none';
    els.error.style.display = 'block';
  }
}

// Attach close events only when corresponding elements exist
const _closeBtn = document.getElementById('flowerModalClose');
const _modal    = document.getElementById('flowerModal');
if (_closeBtn) _closeBtn.addEventListener('click', closeFlowerPhoto);
if (_modal)    _modal.addEventListener('click', e => {
  if (e.target === _modal) closeFlowerPhoto();
});

// Leaflet map init
const map = L.map('map').setView([40.1, 116.2], 9);

L.tileLayer('https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
  subdomains: '1234',
  attribution: '© 高德地图',
  maxZoom: 18,
  errorTileUrl: 'https://wprd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
}).addTo(map);

// ─── OSM 山野路径叠加（方案A）──────────────────────────────
const SAC_STYLE = {
  alpine_hiking:              { color: '#d32f2f', weight: 4, opacity: 0.85 },
  demanding_alpine_hiking:    { color: '#e64a19', weight: 4, opacity: 0.80 },
  difficult_alpine_hiking:    { color: '#f44336', weight: 4, opacity: 0.80 },
  demanding_mountain_hiking:  { color: '#ff9800', weight: 3, opacity: 0.75 },
  mountain_hiking:            { color: '#4caf50', weight: 3, opacity: 0.70 },
  hiking:                     { color: '#2196f3', weight: 2, opacity: 0.65 },
};
const SAC_LABELS = {
  alpine_hiking:              '🧗 高山路径',
  demanding_alpine_hiking:    '🔴 艰难高山',
  difficult_alpine_hiking:    '🔴 难度高山',
  demanding_mountain_hiking:  '🟠 中等偏难',
  mountain_hiking:            '🟢 中等难度',
  hiking:                     '🔵 休闲步道',
};

function getStyle(feature) {
  const sac = feature.properties.sac_scale || 'hiking';
  const style = SAC_STYLE[sac] || SAC_STYLE.hiking;
  return { ...style, className: 'osm-trail' };
}

function onEachFeature(feature, layer) {
  const p = feature.properties;
  const sac = p.sac_scale || 'hiking';
  const label = SAC_LABELS[sac] || sac;
  const len = p.approx_km ? `约 ${p.approx_km} km` : '';
  layer.bindPopup(`<strong>${p.name || '无名路径'}</strong><br>${label}${len ? ' · ' + len : ''}`, {
    maxWidth: 200,
    className: 'osm-popup'
  });
}

let _osmTrailsLoaded = false;
let _osmTrailsLayer = null;
let _activeOsmRouteId = null; // 当前显示哪条路线的OSM轨迹

async function loadOSMTrails(bbox, routeId) {
  // 清除旧图层（如果是不同路线）
  if (_osmTrailsLayer) {
    map.removeLayer(_osmTrailsLayer);
    _osmTrailsLayer = null;
  }

  const btn = document.getElementById('routeLoadTrailsBtn');
  if (btn) {
    btn.disabled = true;
    btn.textContent = '加载中…';
  }

  try {
    const query = `[out:json][timeout:30];(way["highway"~"path|footway"]["sac_scale"](${bbox}););out body;>;out skel qt;`;
    const resp = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      body: 'data=' + encodeURIComponent(query),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    const data = await resp.json();

    const nodes = {};
    const ways = [];
    for (const e of data.elements) {
      if (e.type === 'node') nodes[e.id] = [e.lat, e.lon];
      if (e.type === 'way' && e.nodes && e.nodes.length >= 2) ways.push(e);
    }

    const geojson = {
      type: 'FeatureCollection',
      features: ways.map(w => {
        const coords = w.nodes.map(n => nodes[n]).filter(Boolean);
        const km = coords.length > 1
          ? coords.reduce((sum, c, i) => {
              if (i === 0) return 0;
              const dlat = Math.abs(c[0] - coords[i-1][0]);
              const dlng = Math.abs(c[1] - coords[i-1][1]) * Math.cos(c[0] * Math.PI / 180);
              return sum + Math.sqrt(dlat*dlat + dlng*dlng) * 111;
            }, 0).toFixed(1)
          : null;
        return {
          type: 'Feature',
          geometry: { type: 'LineString', coordinates: coords.map(c => [c[1], c[0]]) },
          properties: {
            name: w.tags?.name || '',
            sac_scale: w.tags?.sac_scale || 'hiking',
            approx_km: km
          }
        };
      })
    };

    _osmTrailsLayer = L.geoJSON(geojson, { style: getStyle, onEachFeature }).addTo(map);
    _osmTrailsLoaded = true;
    _activeOsmRouteId = routeId;
    if (btn) {
      btn.textContent = '✅ 路径已加载';
      btn.disabled = true;
    }
    console.log(`[OSM Trails] Loaded ${ways.length} segments for route ${routeId}`);
  } catch (e) {
    console.warn('[OSM Trails] Failed to load:', e);
    if (btn) {
      btn.textContent = '❌ 加载失败';
      btn.disabled = false;
    }
  }
}

function loadOSMTrailsForRoute() {
  if (!activeRouteId) return;
  const route = ROUTES.find(r => r.id === activeRouteId);
  if (!route) return;

  // 如果当前显示的就是这条路线，且已加载过，不重复加载
  if (_activeOsmRouteId === activeRouteId && _osmTrailsLayer) return;

  // 关闭弹窗，让用户直接看到地图上加载的路径
  document.getElementById('modal').classList.remove('show');
  activeRouteId = null;
  renderRouteList();

  const [lat, lng] = route.coordinates;
  // 弹窗关闭后地图放大一级，给用户"进入地图"的反馈
  map.flyTo([lat, lng], 15, { duration: 0.8 });

  const delta = 0.05; // ±0.05度 ≈ ±5km
  const bbox = `${(lat-delta).toFixed(4)},${(lng-delta).toFixed(4)},${(lat+delta).toFixed(4)},${(lng+delta).toFixed(4)}`;
  loadOSMTrails(bbox, route.id);
}

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
let activeRegion = 'all';
let activeRouteId = null;
const markers = {};

// Add markers
ROUTES.forEach(route => {
  const seasons = route.seasons.map(s => s.season);
  const color = SEASON_COLORS[seasons[0]] || '#888';
  const seasonIcon = { spring: '🌸', summer: '🌿', autumn: '🍂', winter: '❄️' };

  const icon = L.divIcon({
    className: 'custom-marker',
    html: `<div style="background:${color};width:28px;height:28px;border-radius:50%;border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:bold;">${seasonIcon[seasons[0]] || '📍'}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });

  const marker = L.marker(route.coordinates, { icon }).addTo(map);
  marker.on('click', () => showRouteDetail(route.id));
  markers[route.id] = marker;
});

// Season filter buttons
document.querySelectorAll('.season-filters .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.season-filters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeSeason = btn.dataset.season;
    renderRouteList();
    updateMarkers();
  });
});

// Region filter buttons
document.querySelectorAll('.region-filters .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.region-filters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeRegion = btn.dataset.region;
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
  if (activeRegion !== 'all' && route.location !== activeRegion) return false;
  if (activeSeason !== 'all') {
    const hasSeason = route.seasons.some(s => s.season === activeSeason);
    if (!hasSeason) return false;
  }
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (query) {
    const fruits = getFruitsForRoute(route);
    const searchable = [
      route.name,
      route.location,
      ...route.seasons.flatMap(s => s.flowers),
      ...fruits.map(f => f.name),
      route.notes || ''
    ].join(' ').toLowerCase();
    if (!searchable.includes(query)) return false;
  }
  return true;
}

function renderRouteList() {
  const container = document.getElementById('routeList');
  const countEl = document.getElementById('routeCount');
  const filtered = ROUTES.filter(matchesFilter);

  if (countEl) countEl.textContent = `共 ${filtered.length} 条路线`;

  if (filtered.length === 0) {
    if (countEl) countEl.textContent = '共 0 条路线';
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
    const seasonMatch = activeSeason === 'all' || route.seasons.some(s => s.season === activeSeason);
    const regionMatch = activeRegion === 'all' || route.location === activeRegion;
    if (seasonMatch && regionMatch) {
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

  map.flyTo(route.coordinates, 13, { duration: 0.8 });

  document.getElementById('modalTitle').textContent = route.name;
  document.getElementById('modalLocation').textContent = `📍 ${route.location}`;
  document.getElementById('modalDifficulty').textContent = `🥾 ${route.difficulty}`;
  document.getElementById('modalDistance').textContent = `📏 ${route.distance}`;
  const elevEl = document.getElementById('modalElevation');
  if (elevEl) elevEl.textContent = `⬆️ ${route.elevation}`;

  const seasonsHtml = route.seasons.map(s => {
    const flowersHtml = s.flowers.length > 0
      ? `<li>🌸 可看花：${s.flowers.map(f => {
        const rec = findFlowerRecord(f);
        const sci = rec && rec.scientificName ? `(${rec.scientificName})` : '';
        const period = getFlowerPeriod(f);
        const label = period ? `${f}${sci}（${period}）` : `${f}${sci}`;
        return `<span class="flower-tag" onclick="showFlowerPhoto('${f.replace(/'/g,"\\'")}')" title="查看iNaturalist图片">${label}</span>`;
      }).join('、')}</li>`
      : '';
    const fruitsHtml = s.fruits.length > 0
      ? `<li>🍎 可采集：${s.fruits.map(f => {
        const rec = findFlowerRecord(f.name);
        const sci = rec && rec.scientificName ? `(${rec.scientificName})` : '';
        const note = f.note ? `（${f.note}）` : '';
        return `<span class="flower-tag" onclick="showFlowerPhoto('${f.name.replace(/'/g,"\\'")}')" title="查看iNaturalist图片">${f.name}${sci}${note}</span>`;
      }).join('、')}</li>`
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

  const notesHtml = route.notes ? `<div class="modal-notes">💬 ${route.notes}</div>` : '';

  document.getElementById('modalSeasons').innerHTML = seasonsHtml;
  const notesEl = document.getElementById('modalNotes');
  if (notesEl) notesEl.innerHTML = notesHtml;

  // 更新路线加载按钮状态
  const trailBtn = document.getElementById('routeLoadTrailsBtn');
  if (trailBtn) {
    if (_activeOsmRouteId === id) {
      trailBtn.textContent = '✅ 路径已加载';
      trailBtn.disabled = true;
    } else {
      trailBtn.textContent = '🗺️ 加载路径';
      trailBtn.disabled = false;
    }
  }

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