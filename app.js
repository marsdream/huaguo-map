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
        flowers: ["藤萝花海","山桃花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [9],
        flowers: ["秋叶"],
        fruits: [
          { name: "野生猕猴桃", note: "酸甜，9月最佳" },
          { name: "酸枣", note: "满山遍野" },
        ],
      },
    ],
    rlevel: 4,
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
        flowers: ["高山草甸野花","山丹丹"],
        fruits: [
          { name: "野韭菜", note: "初夏最佳，可包饺子" },
        ],
      },
    ],
    rlevel: 7,
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
          { name: "野韭菜", note: "山顶草甸可采" },
        ],
      },
      {
        season: "autumn",
        months: [10],
        flowers: ["彩叶"],
        fruits: [
          { name: "山楂", note: "野生山楂" },
        ],
      },
    ],
    rlevel: 8,
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
          { name: "山楂", note: "" },
        ],
      },
    ],
    rlevel: 6,
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
        flowers: ["山桃花","野花"],
        fruits: [
          { name: "野葱", note: "4月最佳，可做馅饼" },
        ],
      },
    ],
    rlevel: 2,
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
          { name: "野生桑葚", note: "河边桑树，夏季可采" },
        ],
      },
    ],
    rlevel: 4,
    notes: "延庆白河堡至密云水库段，著名的「白河徒步道」"
  },
  {
    id: "yudi-shan",
    name: "玉渡山",
    location: "延庆区",
    coordinates: [40.5316, 115.8990],
    difficulty: "入门",
    distance: "约5公里",
    elevation: "约900米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山花烂漫","杜鹃"],
        fruits: []
      },
      {
        season: "summer",
        months: [6, 7, 8],
        flowers: [],
        fruits: [
          { name: "山楂（青）", note: "夏季果实初成" },
        ],
      },
      {
        season: "autumn",
        months: [9, 10],
        flowers: ["彩叶"],
        fruits: [
          { name: "野果", note: "" },
        ],
      },
    ],
    rlevel: 4,
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
          { name: "野果", note: "山里各种野果" },
        ],
      },
    ],
    rlevel: 5,
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
        flowers: ["山桃花","杏花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10],
        flowers: ["秋景"],
        fruits: [
          { name: "核桃", note: "农家核桃树" },
        ],
      },
    ],
    rlevel: 3,
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
      },
    ],
    rlevel: 8,
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
      },
    ],
    rlevel: 7,
    notes: "灵山风景区，冬季雪景出名，夏季草甸花海。起点：江水河村"
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
      },
    ],
    rlevel: 6,
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
          { name: "野生桑葚", note: "" },
        ],
      },
    ],
    rlevel: 3,
    notes: "夏季玩水的好地方，溪流清澈"
  },
  {
    id: "xiangbala",
    name: "香八拉",
    location: "海淀区·石景山区",
    coordinates: [39.982685, 116.215855],
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
          { name: "柿子", note: "秋天成熟" },
        ],
      },
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花"],
        fruits: []
      },
    ],
    rlevel: 2,
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
          { name: "柿子", note: "香山后山野柿子" },
        ],
      },
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花","丁香"],
        fruits: []
      },
    ],
    rlevel: 1,
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
          { name: "野猕猴桃", note: "8-9月" },
        ],
      },
      {
        season: "autumn",
        months: [9, 10],
        flowers: [],
        fruits: [
          { name: "核桃", note: "9月采收" },
          { name: "栗子", note: "9-10月" },
          { name: "酸枣", note: "满山遍野" },
        ],
      },
    ],
    rlevel: 1,
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
        flowers: ["高山草甸野花","野菊花","金莲花"],
        fruits: [
          { name: "野草莓", note: "6-7月" },
          { name: "野猕猴桃", note: "9月" },
        ],
      },
    ],
    rlevel: 1,
    notes: "北京第三高峰，海拔1991米。高山草甸为华北地区代表景观"
  },
  {
    id: "bawangshan",
    name: "百望山",
    location: "海淀区",
    coordinates: [40.0326, 116.2545],
    difficulty: "入门",
    distance: "约8公里（健身步道）",
    elevation: "约155米",
    seasons: [
      {
        season: "spring",
        months: [3, 4, 5],
        flowers: ["山桃花","杏花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "柿子", note: "野柿子树" },
        ],
      },
    ],
    rlevel: 1,
    notes: "太行山余脉最东端，主峰海拔210米。距颐和园北3公里，森林覆盖率95%以上，京郊最近的城市森林公园之一"
  },
  {
    id: "badachu",
    name: "八大处公园",
    location: "海淀区",
    coordinates: [39.9537, 116.1800],
    difficulty: "入门",
    distance: "约5公里（景区内）",
    elevation: "约300米",
    seasons: [
      {
        season: "spring",
        months: [3, 4],
        flowers: ["山桃花","杏花","迎春","连翘"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "柿子", note: "古树区周边野柿子" },
        ],
      },
    ],
    rlevel: 1,
    notes: "香八拉经典路线的终点，三山八刹十二景，隋唐古刹。春季万杏齐发，秋季红叶漫山"
  },
  {
    id: "fenghuangling",
    name: "凤凰岭",
    location: "海淀区",
    coordinates: [40.1052, 116.1],
    difficulty: "入门",
    distance: "约10公里",
    elevation: "约700米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: [],
        fruits: [
          { name: "山楂", note: "沿线野山楂" },
          { name: "柿子", note: "秋天成熟" },
        ],
      },
    ],
    rlevel: 2,
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
          { name: "板栗", note: "怀柔特产" },
        ],
      },
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花"],
        fruits: []
      },
    ],
    rlevel: 2,
    notes: "怀柔区渤海镇，著名长城段之一，植被茂密，春秋皆宜"
  },
  {
    id: "hongluosi",
    name: "红螺寺",
    location: "怀柔区",
    coordinates: [40.3773, 116.6241],
    difficulty: "入门",
    distance: "约8公里",
    elevation: "约700米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["紫藤","山桃花","杏花","梨花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "板栗", note: "周边栗子树" },
          { name: "山楂", note: "野生山楂" },
        ],
      },
    ],
    rlevel: 2,
    notes: '怀柔区红螺寺村，千年古刹，北方佛教名山。有"南有普陀，北有红螺"之说，春天紫藤花开，秋天红叶漫山'
  },
  {
    id: "shenglian",
    name: "圣莲山",
    location: "房山区",
    coordinates: [39.8468, 115.7319],
    difficulty: "入门",
    distance: "约8公里",
    elevation: "约900米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花","映山红"],
        fruits: []
      },
      {
        season: "autumn",
        months: [9, 10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "野果", note: "山间各种野果" },
        ],
      },
    ],
    rlevel: 2,
    notes: '房山区史家营乡，因山体酷似莲花瓣而得名，海拔900米以上，被称为"京都第一奇山"。兼具自然风光与道佛古迹'
  },
  {
    id: "shuichangcheng",
    name: "水长城",
    location: "怀柔区",
    coordinates: [40.3170, 116.6320],
    difficulty: "入门",
    distance: "约10公里",
    elevation: "约500米",
    seasons: [
      {
        season: "spring",
        months: [3, 4],
        flowers: ["桃花","杏花","梨花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "板栗", note: "怀柔特产" },
          { name: "山楂", note: "沿线野山楂" },
        ],
      },
    ],
    rlevel: 2,
    notes: "怀柔区九渡河镇，黄花城水长城。长城入水的独特地貌，三季有花四季有景，春天桃花与湖面同框，秋天红叶彩叶"
  },
  {
    id: "pofengling",
    name: "坡峰岭",
    location: "房山区",
    coordinates: [39.6961, 115.8448],
    difficulty: "入门",
    distance: "约6公里（环形步道）",
    elevation: "约700米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["黄栌花","山花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "柿子", note: "秋季成熟" },
          { name: "山楂", note: "野山楂" },
        ],
      },
    ],
    rlevel: 2,
    notes: "房山区周口店镇，以黄栌红叶著称，华北最大野生黄栌聚集地。每逢秋天万山红遍，被《国家地理》誉为华北最壮观山地红叶景观"
  },
  {
    id: "shangfangshan",
    name: "上方山",
    location: "房山区",
    coordinates: [39.6822, 115.8168],
    difficulty: "入门",
    distance: "约10公里",
    elevation: "约860米",
    seasons: [
      {
        season: "spring",
        months: [3, 4, 5],
        flowers: ["山桃花","杏花","野花","映山红"],
        fruits: []
      },
      {
        season: "summer",
        months: [7, 8],
        flowers: [],
        fruits: [
          { name: "野猕猴桃", note: "森林深处野生猕猴桃" },
          { name: "野果", note: "山间各种野果" },
        ],
      },
    ],
    rlevel: 2,
    notes: "房山区韩村河镇上方山国家森林公园，森林覆盖率90%以上，植物种类达625种。有雲水洞、天竺寺等景点，春赏山花秋观彩叶"
  },
  {
    id: "shuiquangou",
    name: "水泉沟",
    location: "延庆区",
    coordinates: [40.5567, 116.0040],
    difficulty: "进阶",
    distance: "约10公里",
    elevation: "约400米",
    seasons: [
      {
        season: "spring",
        months: [3, 4],
        flowers: ["山桃花","杏花","野花"],
        fruits: []
      },
      {
        season: "summer",
        months: [6, 7, 8],
        flowers: [],
        fruits: [
          { name: "野果", note: "峡谷沿线山果" },
        ],
      },
    ],
    rlevel: 4,
    notes: "延庆区白河峡谷水泉沟，经典溯溪徒步路线。峡谷幽深，溪水清澈，春秋赏花、夏季溯溪玩水，环境清幽人少"
  },
  {
    id: "jingxigudao",
    name: "京西古道",
    location: "门头沟区",
    coordinates: [39.9668, 116.0490],
    difficulty: "进阶",
    distance: "约15公里",
    elevation: "约500米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [9, 10, 11],
        flowers: ["野菊"],
        fruits: [
          { name: "柿子", note: "沿线野柿子" },
          { name: "山楂", note: "野生山楂" },
        ],
      },
    ],
    rlevel: 4,
    notes: '门头沟区王平镇，千年京西古道。商旅往来古道，马帮铃铛历史，春秋景色最佳，秋季野菊金黄一片，被称为"野花天堂"'
  },
  {
    id: "jingmenrailway",
    name: "京门铁路",
    location: "门头沟区",
    coordinates: [39.9734, 116.0048],
    difficulty: "进阶",
    distance: "约10公里",
    elevation: "约300米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花","野花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "野果", note: "沿线山野果" },
        ],
      },
    ],
    rlevel: 4,
    notes: '门头沟区色树坟村，京门铁路遗址徒步。火车轨道留存，自然回归的"野生铁路"，两侧山花绿植覆盖，文艺清新人少'
  },
  {
    id: "cuiniaogu",
    name: "翠鸟谷",
    location: "延庆区",
    coordinates: [40.6369, 116.5235],
    difficulty: "进阶",
    distance: "约8公里",
    elevation: "约300米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花","野花"],
        fruits: []
      },
      {
        season: "summer",
        months: [6, 7, 8],
        flowers: [],
        fruits: [
          { name: "野果", note: "峡谷山野果" },
        ],
      },
    ],
    rlevel: 4,
    notes: "延庆区原生态河谷，火山岩峡谷地貌。夏季溯溪玩水、冬季冰瀑，芦苇荡与峡谷趣味性强，人少景美免费"
  },
  {
    id: "qingchashan",
    name: "清茶山",
    location: "门头沟区",
    coordinates: [40.0633, 115.7844],
    difficulty: "进阶",
    distance: "约10公里",
    elevation: "约1000米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花","映山红"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "野果", note: "山顶野果" },
        ],
      },
    ],
    rlevel: 4,
    notes: "门头沟区雁翅镇珠窝村，海拔1020米。可俯瞰珍珠湖与永定河峡谷，山顶视野开阔，春秋皆宜"
  },
  {
    id: "dajuesanfeng",
    name: "大觉寺三峰环穿",
    location: "海淀区",
    coordinates: [40.0544, 116.1169],
    difficulty: "进阶",
    distance: "约22公里",
    elevation: "约1700米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "野果", note: "山间野果" },
        ],
      },
    ],
    rlevel: 5,
    notes: "海淀区大觉寺出发，穿越北尖、阳台山、妙峰山三峰后回到大觉寺。北京最经典户外拉练路线之一，全程约22公里，累计爬升约1700米，适合有一定体力基础的徒步者"
  },
  {
    id: "hongluosanxian",
    name: "红螺三险",
    location: "房山区",
    coordinates: [39.6888, 115.8575],
    difficulty: "挑战",
    distance: "约12公里",
    elevation: "约800米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "野果", note: "山间野果" },
        ],
      },
    ],
    rlevel: 6,
    notes: "房山区红螺三险，北京十大惊险路线之一。山体复杂，植被茂密，多断崖岔路，动植物资源丰富，夏季徒步需注意安全"
  },
  {
    id: "heilongmijing",
    name: "黑龙秘境",
    location: "密云区",
    coordinates: [40.3771, 116.8434],
    difficulty: "挑战",
    distance: "约15公里",
    elevation: "约600米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花","映山红"],
        fruits: []
      },
      {
        season: "summer",
        months: [6, 7, 8],
        flowers: [],
        fruits: [
          { name: "野果", note: "山谷沿线野果" },
        ],
      },
    ],
    rlevel: 6,
    notes: "密云区云蒙山区域，穿越黑龙潭、天仙瀑等秘境。峡谷幽深，溪水潺潺，原始自然，是北京周边经典穿越路线之一"
  },
  {
    id: "gouyashan",
    name: "狗牙山",
    location: "门头沟区",
    coordinates: [40.0417, 115.7605],
    difficulty: "挑战",
    distance: "约10公里",
    elevation: "约960米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "野果", note: "山脊野果" },
        ],
      },
    ],
    rlevel: 6,
    notes: "门头沟区雁翅镇碣石村，又名碣石岭。主峰海拔960米，因山脊形似狗牙而得名。十大夺命路线之一，险峻刺激，不适合夏季出行"
  },
  {
    id: "tietuoshan",
    name: "铁坨山",
    location: "门头沟区",
    coordinates: [39.9034, 116.0306],
    difficulty: "挑战",
    distance: "约10公里",
    elevation: "约1100米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "野果", note: "山间野果" },
        ],
      },
    ],
    rlevel: 6,
    notes: '门头沟区潭柘寺西北，北京百慕大。位于门头沟与房山交界处，海拔约1100米，地形复杂，植被覆盖率高，被称为"北京百慕大"'
  },
  {
    id: "nanbeiti",
    name: "南北梯",
    location: "房山区",
    coordinates: [39.6494, 115.7972],
    difficulty: "挑战",
    distance: "约8公里",
    elevation: "约600米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "野果", note: "山间野果" },
        ],
      },
    ],
    rlevel: 6,
    notes: "房山区圣水峪村青银沟，北京十大夺命路线之一。两条险峻山脊小路，曲折凹凸，险峻刺激，适合有经验的徒步者"
  },
  {
    id: "yingshushan",
    name: "樱树山",
    location: "门头沟区",
    coordinates: [40.0136, 116.0909],
    difficulty: "挑战",
    distance: "约8公里",
    elevation: "约700米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "野果", note: "山间野果" },
        ],
      },
    ],
    rlevel: 6,
    notes: "门头沟区军庄，京西徒步路线。山势有特点，植被丰富，春秋景色宜人，适合有一定经验的徒步者"
  }
  ,
  {
    id: "dongbeiling",
    name: "东北灵连穿",
    location: "门头沟区",
    coordinates: [40.0320, 115.4605],
    difficulty: "挑战",
    distance: "约25公里",
    elevation: "约2000米",
    seasons: [
      {
        season: "summer",
        months: [6, 7, 8],
        flowers: ["野花","野韭菜"],
        fruits: []
      },
      {
        season: "autumn",
        months: [9, 10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "野果", note: "高山野果" },
        ],
      },
    ],
    rlevel: 7,
    notes: "穿越东灵山和北灵山，北京顶级穿越路线。东灵山海拨2303米（北京最高峰），北灵山海拔约1900米，草甸丰美。强度大，适合有丰富经验的徒步者"
  },
  {
    id: "daxiaohaietu",
    name: "大、小海坨",
    location: "延庆区",
    coordinates: [40.4570, 115.9746],
    difficulty: "挑战",
    distance: "约15公里",
    elevation: "约1800米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花","杜鹃"],
        fruits: []
      },
      {
        season: "summer",
        months: [6, 7, 8],
        flowers: ["野花","高山草甸"],
        fruits: [
          { name: "野果", note: "高山野果" },
        ],
      },
    ],
    rlevel: 7,
    notes: "延庆区与河北省交界处，大海坨海拔2241米（北京第二高峰），小海坨海拔约2199米。高山草甸风光壮美，冬季可滑雪，是北京户外圈的明星路线"
  }
  ,
  {
    id: "danbianqiang",
    name: "单边墙",
    location: "密云区",
    coordinates: [40.6922, 117.1638],
    difficulty: "极限",
    distance: "约8公里",
    elevation: "约900米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "野果", note: "山野果" },
        ],
      },
    ],
    rlevel: 8,
    notes: "密云区古北口司马台长城单边墙，海拔约900米。长城三险之首，山脊狭窄如单边，奇险无比，只适合专业徒步者"
  }
  ,
  {
    id: "shibapan",
    name: "十八盘",
    location: "密云区",
    coordinates: [40.6800, 117.1500],
    difficulty: "极限",
    distance: "约10公里",
    elevation: "约800米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "野果", note: "山野果" },
        ],
      },
    ],
    rlevel: 8,
    notes: "密云区古北口长城区域，徒步路线曲折陡峭。沿途古迹众多，穿越古老长城遗址，难度大，适合有丰富经验的徒步者"
  }
  ,
  {
    id: "fenghuangshixian",
    name: "凤凰十险",
    location: "海淀区",
    coordinates: [40.1132, 116.1210],
    difficulty: "极限",
    distance: "约10公里",
    elevation: "约800米",
    seasons: [
      {
        season: "spring",
        months: [4, 5],
        flowers: ["山桃花","杏花"],
        fruits: []
      },
      {
        season: "autumn",
        months: [10, 11],
        flowers: ["红叶"],
        fruits: [
          { name: "野果", note: "山野果" },
        ],
      },
    ],
    rlevel: 9,
    notes: "海淀区凤凰岭，京城顶级挑战路线。因山势险峻、需跨越十个危险路段而得名，只有极少数资深徒步者才能完成"
  }
]

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
  // Zoom map back in from 13 → 14 after closing flower modal
  if (typeof map !== 'undefined') {
    map.setZoom(14);
  }
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
let _trailheadMarker = null;  // 徒步路线起点标记（旗帜图标，可点击查看难度）

async function loadOSMTrails(bbox, routeId, routeCoordinates) {
  // 清除旧图层（如果是不同路线）
  if (_osmTrailsLayer) {
    map.removeLayer(_osmTrailsLayer);
    _osmTrailsLayer = null;
  }

  // 清除旧的起点标记
  if (_trailheadMarker) {
    map.removeLayer(_trailheadMarker);
    _trailheadMarker = null;
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
      btn.textContent = '✅ 已加载';
      btn.disabled = true;
    }

    // ── 从实际轨迹几何中提取起点和终点坐标 ──
    // GeoJSON coordinates 是 [lng, lat]，Leaflet 需要 [lat, lng]
    const trailStart = geojson.features.length > 0 && geojson.features[0].geometry.coordinates.length > 0
      ? geojson.features[0].geometry.coordinates[0]  // 第一条线的第一个点
      : null;
    const lastFeat = geojson.features[geojson.features.length - 1];
    const trailEnd = lastFeat && lastFeat.geometry.coordinates.length > 0
      ? lastFeat.geometry.coordinates[lastFeat.geometry.coordinates.length - 1]  // 最后一条线的最后一个点
      : null;

    const route = ROUTES.find(r => r.id === routeId);
    const difficultyLabel = route ? `${route.difficulty} · ${route.distance}` : '徒步路线';

    // ── 起点：旗帜标记（点击显示详情） ──
    // 优先用离 routeCoordinates 最近的端点作为"起点"
    let flagPos = trailStart;
    if (trailStart && trailEnd && routeCoordinates) {
      const dStart = Math.hypot(trailStart[1] - routeCoordinates[0], trailStart[0] - routeCoordinates[1]);
      const dEnd   = Math.hypot(trailEnd[1]   - routeCoordinates[0], trailEnd[0]   - routeCoordinates[1]);
      flagPos = dStart <= dEnd ? trailStart : trailEnd; // 离原坐标近的作为起点
    }

    const flagIcon = L.divIcon({
      className: 'trailhead-marker',
      html: `<div style="
        background:#fff;border:2px solid #e91e63;border-radius:8px;
        padding:4px 8px;font-size:12px;font-weight:bold;color:#e91e63;
        box-shadow:0 2px 8px rgba(0,0,0,0.25);white-space:nowrap;
        cursor:pointer;line-height:1.4;
      ">🚩 ${difficultyLabel}</div>`,
      iconSize: [120, 28],
      iconAnchor: [60, 14]
    });
    _trailheadMarker = L.marker([flagPos[1], flagPos[0]], { icon: flagIcon }).addTo(map);
    _trailheadMarker.on('click', () => {
      activeRouteId = routeId;
      renderRouteList();
      document.getElementById('modal').classList.add('show');
    });

    // ── 终点：徒步小人标记 ──
    if (trailEnd) {
      const endPos = flagPos === trailStart ? trailEnd : trailStart;
      const hikerIcon = L.divIcon({
        className: 'trailhead-marker',
        html: `<div style="
          background:#fff;border:2px solid #4caf50;border-radius:50%;
          width:28px;height:28px;display:flex;align-items:center;justify-content:center;
          font-size:15px;box-shadow:0 2px 6px rgba(0,0,0,0.3);cursor:pointer;
        ">🥾</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });
      const endMarker = L.marker([endPos[1], endPos[0]], { icon: hikerIcon }).addTo(map);
      endMarker.on('click', () => {
        activeRouteId = routeId;
        renderRouteList();
        document.getElementById('modal').classList.add('show');
      });
    }

    // 飞到起点坐标
    map.flyTo([flagPos[1], flagPos[0]], 14, { duration: 1.0 });

    console.log(`[OSM Trails] Loaded ${ways.length} segments for route ${routeId}, flag:${flagPos} end:${trailEnd}`);
    return flagPos;
  } catch (e) {
    console.warn('[OSM Trails] Failed to load:', e);
    if (btn) {
      btn.textContent = '❌ 加载失败';
      btn.disabled = false;
    }
    return null;
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
  const delta = 0.05; // ±0.05度 ≈ ±5km
  const bbox = `${(lat-delta).toFixed(4)},${(lng-delta).toFixed(4)},${(lat+delta).toFixed(4)},${(lng+delta).toFixed(4)}`;
  // 传递 routeCoordinates，loadOSMTrails 会自动找到实际起点并飞过去
  loadOSMTrails(bbox, route.id, route.coordinates);
}

// 导航前往：调用高德地图 web URI
function navigateToRoute() {
  if (!activeRouteId) return;
  const route = ROUTES.find(r => r.id === activeRouteId);
  if (!route) return;
  const [lat, lng] = route.coordinates;
  // 高德地图 web 导航 URL，lon,lat,name
  const url = `https://uri.amap.com/navigation?to=${lng},${lat},${encodeURIComponent(route.name)}&mode=car&callnative=1`;
  window.open(url, '_blank');
}

// Season colors
const SEASON_COLORS = {
  spring: '#e91e63',
  summer: '#4caf50',
  autumn: '#ff9800',
  winter: '#2196f3'
};

const SEASON_NAMES = {
  spring: '🌸 春',
  summer: '🌿 夏',
  autumn: '🍂 秋',
  winter: '❄️ 冬'
};

let activeSeason = 'all';
let activeRegion = 'all';
let activeLevel = 'all';
let activeRouteId = null;
const markers = {};

// Add markers
ROUTES.forEach(route => {
  const seasons = route.seasons.map(s => s.season);
  const color = SEASON_COLORS[seasons[0]] || '#888';
  const seasonIcon = { spring: '🌸', summer: '🌿', autumn: '🍂', winter: '❄️' };

  const icon = L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      display:flex;align-items:center;gap:0;
      background:#fff;border-radius:14px;
      border:2.5px solid ${color};
      box-shadow:0 2px 8px rgba(0,0,0,0.25);overflow:hidden;
      width:42px;height:26px;
    ">
      <div style="width:22px;height:22px;background:${color};display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff;flex-shrink:0;">${seasonIcon[seasons[0]] || '📍'}</div>
      <div style="flex:1;text-align:center;font-size:13px;line-height:1;">🥾</div>
    </div>`,
    iconSize: [42, 26],
    iconAnchor: [21, 13]
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
document.querySelectorAll('.filter-block#regionBlock .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#regionBlock .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeRegion = btn.dataset.region;
    renderRouteList();
    updateMarkers();
  });
});

// Filter block collapse/expand toggles
document.querySelectorAll('.filter-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    const block = document.getElementById(target + 'Block');
    if (block) block.classList.toggle('expanded');
  });
});

// Level filter buttons
document.querySelectorAll('.filter-block#levelBlock .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#levelBlock .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeLevel = btn.dataset.level;
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
  if (activeLevel !== 'all' && route.rlevel !== parseInt(activeLevel)) return false;
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
    // All unique flower names across seasons
    const allFlowers = [...new Set(route.seasons.flatMap(s => s.flowers))];
    const flowerTags = allFlowers.slice(0, 4).map(f =>
      `<span class="flower-tag" onclick="event.stopPropagation(); showFlowerPhoto('${f.replace(/'/g,"\\'")}')">${f}</span>`
    ).join('、');
    const fruitTags = fruits.slice(0, 3).map(f =>
      `<span class="fruit-tag" onclick="event.stopPropagation(); showFlowerPhoto('${f.name.replace(/'/g,"\\'")}')">🍎 ${f.name}</span>`
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
        ${flowerTags ? `<div style="margin-top:6px;display:flex;flex-wrap:wrap;gap:4px;font-size:12px;color:#c2185b;">${flowerTags}</div>` : ''}
        ${fruits.length > 0 ? `<div style="margin-top:4px;display:flex;flex-wrap:wrap;gap:4px;">${fruitTags}${fruits.length > 3 ? `<span style="font-size:11px;color:#888;">+${fruits.length - 3}</span>` : ''}</div>` : ''}
      </div>
    `;
  }).join('');
}

function updateMarkers() {
  ROUTES.forEach(route => {
    const marker = markers[route.id];
    const seasonMatch = activeSeason === 'all' || route.seasons.some(s => s.season === activeSeason);
    const regionMatch = activeRegion === 'all' || route.location === activeRegion;
    const levelMatch = activeLevel === 'all' || route.rlevel === parseInt(activeLevel);
    if (seasonMatch && regionMatch && levelMatch) {
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
      trailBtn.textContent = '✅ 已加载';
      trailBtn.disabled = true;
    } else {
      trailBtn.textContent = '🗺️ 加载徒步路线';
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