

//首页banner滚动图 
let mockBannerData = [ 
  { imgurl:"//img11.360buyimg.com/pop/s1180x940_jfs/t1/120230/5/30351/61851/63ff2380F1027c53c/f8c95bb19669d5f0.jpg.avif",    
    goodId:"AMD7000" 
  }, 
  {     
    imgurl:"//m.360buyimg.com/babel/jfs/t1/103254/5/31511/161687/63fef7ceF041f2ccc/9b6e8fb23faeaa36.png",     
    goodId:"THREEBODY1-3" 
  }, 
  { 
    imgurl:"//img30.360buyimg.com/babel/s1580x830_jfs/t1/188382/20/33547/20174/63fdb9c9F4f84069f/28daa90392ab9e5a.jpg!cc_1580x830.webp",     
    goodId:"i712700KF" 
  }, 
  {  
    imgurl:"//img12.360buyimg.com/pop/s1180x940_jfs/t1/142482/37/34739/75399/63fdee97Fa448e48d/d08716d72b235cea.jpg.avif", 
    goodId:"DELL274K"
  }
];
 
//商品数据库 
let mockGoodData = [ 
  { goodId: "i712700KF",  
  //商品标识符ID   
  title: "英特尔(Intel) i7-12700KF 12代 酷睿 处理器 12核20线程 单核睿频至高可达5.0Ghz 25M三级缓存 台式机CPU", 
  //商品名称  
  tag: "12核20线程",  
  //首页显示的红色标签 
  price: 2299.00,   
  //价格   
  soldNum: 502323,  
  //已售件数   
  ratingNum: 15600,
  //评价数量   
  rating:52,   
  //评分分数   
  storeName: "诚信数码旗舰店", 
  //店铺名称   
  previewImgs: 
    [  
    //预览图片，用于首页商品卡片和详情页轮播 
    "//img14.360buyimg.com/n1/s450x450_jfs/t1/109624/40/32269/83205/635b52f0E4b294064/0f5659e22ce6c94e.jpg.avif", 
    "//img14.360buyimg.com/n1/s450x450_jfs/t1/205396/17/21186/302039/6255563cE8cbfa1eb/e9068d8ed6a83787.jpg.avif", 
    "//img14.360buyimg.com/n1/s450x450_jfs/t1/69510/32/18865/159962/628ef548E46d50147/8ed3f229e6ebc9c2.jpg.avif" 
    ], 
  descImgs: [ //详情图片，用于展示商品详情 
    "//img30.360buyimg.com/sku/jfs/t1/186384/15/30450/109598/63749cc4E9b054ca8/20b64916000609f4.jpg.avif", 
    "//img30.360buyimg.com/sku/jfs/t1/219237/13/3710/571512/6189f981E7326912e/63dab050207bd4bf.jpg.avif", 
    "//img30.360buyimg.com/sku/jfs/t1/223101/21/1943/492558/6189f981Ec602cbb6/9cf06434766ae175.jpg.avif" 
    ] 
  }, 
  { 
    goodId: "AMD7000", 
    title: "AMD 7000系列 锐龙9 7950X 处理器 (r9) 5nm 16核32线程 加速频率至高5.7Ghz 170W AM5接口 盒装CPU",   tag: "Zen4架构至高可达5.7GHz", 
    price: 3999.00,   soldNum: 62134,   ratingNum: 10560,   rating: 97.1, 
    storeName: "诚信数码旗舰店", 
    previewImgs: 
    [ 
    "//img12.360buyimg.com/n7/jfs/t1/112096/28/31645/79248/63ff1d8eF84dd2a24/e2731f5d2b0b1e3c.jpg.avif", 
    "//img30.360buyimg.com/sku/jfs/t1/135676/34/30559/58343/63a9595bEb8c3808a/38ca607c5291a383.jpg.avif", 
    "//img12.360buyimg.com/n1/s450x450_jfs/t1/15693/28/24413/66554/63315ebbEc22050af/02518845fa9d6e3d.jpg.avif", 
    "//img30.360buyimg.com/sku/jfs/t1/32703/6/17894/78036/63315fdfE6b8b2d90/1c3c6d759638f846.jpg.avif" 
    ],   
    descImgs: 
    [ 
    "//img30.360buyimg.com/sku/jfs/t1/15451/8/20153/43455/63a56021E09dfd3cc/5c51536c2362bc87.jpg.avif", 
    "//img30.360buyimg.com/sku/jfs/t1/2415/17/19101/70669/63315fdfEccc7e9ca/0251c74ab954ca7a.jpg.avif", 
    "//img30.360buyimg.com/sku/jfs/t1/97372/31/31906/60638/63315fdfE7aae7c7b/81924c164f195b47.jpg.avif" 
    ] 
  }, 
  { 
    goodId: "AppleA2892",  
    title: "Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机",   
    tag: "喜爱此刻入手", 
    price: 9899.00,   
    soldNum: 1540324,   
    ratingNum: 502560,   
    rating: 96.5,   
    storeName: "Apple旗舰店",   
    previewImgs: 
    [ 
    "//img14.360buyimg.com/n7/jfs/t1/109054/20/34853/31178/6400933aF32966358/77bbf161de613058.jpg.avif", 
    "//img14.360buyimg.com/n1/s450x450_jfs/t1/114685/29/30239/19477/63191dc3E28765f27/d8aae16330834a26.jpg.avif", 
    "//img14.360buyimg.com/n1/s450x450_jfs/t1/107147/27/32678/32958/63191dd7E0896c357/538a8106fafdf392.jpg.avif", 
    "//img14.360buyimg.com/n1/s450x450_jfs/t1/94898/35/30744/10759/63191dcaEb942eb41/cee02e5cca7918dc.jpg.avif" 
     ],   
  descImgs: [ "https://img13.360buyimg.com/cms/jfs/t1/48115/7/21042/385251/63db24e7F3f318382/6bd0d599482ed6be.jpg.avif", ] 
  }, 
  {   
    goodId: "DELL274K", 
    title: "戴尔（DELL）27英寸 办公显示器 4K IPS 内置音箱 旋转升降 FreeSync 电脑显示屏 S2721QS 防蓝光版",   tag:"按规则晒单赠50元E卡", 
    price: 2499.00,   
    soldNum: 214324,   
    ratingNum: 53245,   
    rating: 96.3,   
    storeName: "Dell旗舰店",   
    previewImgs: [ 
    "//img10.360buyimg.com/n7/jfs/t1/196695/19/33436/99681/63fd707aFf0cbcd62/0faafc816642ca67.jpg.avif", 
    "//img10.360buyimg.com/n1/jfs/t1/159776/31/16537/350537/6065a4f9E4f56e76d/4e8cd8fb380b0f60.jpg.avif", 
    "//img10.360buyimg.com/n1/jfs/t1/223354/11/19720/91067/6316b7cfE54f24230/4a31ccaf1225bbe3.jpg.avif" 
  ],   
  descImgs: [ 
    "//img30.360buyimg.com/sku/jfs/t1/210039/30/26944/111927/6333fef8E6f3e5d26/9e501394c86137be.jpg.avif" 
  ] 
  }, 
  {   
  goodId: "JavaScript-v7", 
  title: "JavaScript 指南 原书第7版 犀牛书JS高级程序设计 [JavaScript: The Definitive Guide, Seventh Edition]", 
  tag: "全球畅销25年犀牛书全新升级", 
  price: 95.90,   soldNum: 130443, 
  ratingNum: 52445,   rating: 98.2, storeName: "诚信图书旗舰店", 
  previewImgs: [ 
    "//img11.360buyimg.com/n1/jfs/t1/168129/39/12442/160552/604f0770Ea958d39e/eb8ded5b1973f8dc.jpg.avif", 
    "//img11.360buyimg.com/n1/jfs/t1/165644/7/13367/168401/6052e436E03fcd834/2bc5e486ca00fdb8.jpg.avif" 
  ],   
  descImgs: [ 
    "//img30.360buyimg.com/vc/jfs/t1/34533/5/20419/485136/63870b0fEc8d7cfa1/c57f857274e58d98.jpg" 
  ] 
  }, 
  {   
  goodId: "CSS-GUIDE-v4", 
  title: "CSS权威指南（第四版）（上下册）",   
  tag: "国际公认的HTML、CSS和Web标准领域的专家全新力作", 
  price: 99.00,   
  soldNum: 53443,   
  ratingNum: 12445,   
  rating: 97.2, 
  storeName: "诚信图书旗舰店", 
  previewImgs: [ 
    "//img10.360buyimg.com/n1/jfs/t1/29898/23/13805/456931/5ca2c8a9Ec11849e4/0a09f5c31c511cb3.jpg.avif" 
  ],   
  descImgs: [ 
    "//img10.360buyimg.com/bookDetail/jfs/t1/23839/4/13581/1041405/5ca2ceddE2c41725e/ccf1d3033532dfb1.jpg" 
  ] 
  }, 
  { 
  goodId: "THREEBODY1-3", 
  title: "中国科幻基石丛书：三体全集（套装1-3册）", 
  tag: "第73届世界科幻雨果奖获奖作品", 
  price: 46.50,   soldNum: 4003234,   ratingNum: 1088313,   rating: 98.3, 
  storeName: "诚信图书旗舰店", 
  previewImgs: [ 
    "//img14.360buyimg.com/n1/s200x200_jfs/t1/118930/5/31419/105418/63610836E19bf3f87/73ed9b1246dc5d27.jpg.avif", 
    "//img14.360buyimg.com/n1/jfs/t1/116732/20/3010/504556/5ea54efbE47a8558a/9970e62e424c1325.jpg.avif", 
    "//img14.360buyimg.com/n1/jfs/t1/111867/25/2948/625332/5ea54f00Eac094b91/d3b601eaf9dfc156.jpg.avif" 
  ],  
  descImgs: [ 
    "//img30.360buyimg.com/vc/jfs/t1/118394/20/17242/2649428/5f55cff1Ed84e2044/f611db2d1f18ef56.jpg" 
  ] }, 
  {   
  goodId: "MZ-V8P1T0BW", 
  title: "三星（SAMSUNG）1TB SSD固态硬盘 M.2接口(NVMe协议 PCIe 4.0 x4) 980 PRO （MZ-V8P1T0BW）",   
  tag: "1TB读速高达7000MB/s!",   
  price: 699.00,   
  soldNum: 1020023, 
  ratingNum: 32400,   rating: 97.3, 
  storeName: "三星存储旗舰店", 
  previewImgs: [ 
      "//img13.360buyimg.com/n1/s450x450_jfs/t1/104599/17/30977/94881/64004892F25f006e8/c08b358b6625f145.jpg.avif", 
      "//img11.360buyimg.com/n1/s450x450_jfs/t1/212492/8/16676/111376/624c11e2E5b51977f/399e3708068c2aa6.jpg.avif", 
      "//img13.360buyimg.com/n1/s450x450_jfs/t1/104934/29/24437/202460/62ce87f1E922e5256/e31dd93d7f62fa29.jpg.avif" 
    ],   
    descImgs: [ 
      "//img30.360buyimg.com/sku/jfs/t1/116304/14/32437/94704/634289b8E0fc55b8c/eca601f43883c936.jpg.avif" 
    ] 
  } 
  ]; 
   
  //获取商品数据，以idx索引 
  function getGoodDataByIdx(idx) {   
    return idx < mockGoodData.length ? mockGoodData[idx] : null; 
  } 
   
  //获取商品数据，以goodId查找 
  export function mockgetGoodDataById(goodId) {   
    return mockGoodData.find((item)=>item.goodId === goodId); 
  } 
   
  //获取商品列表 
  export function mockgetGoodsListData(args) { 
    let baseIdx = 0; 
  let length = 10; if(args) { 
      baseIdx = args.data;     length = args.length; 
    }   return new Array(length).fill(0).map( 
      (_, idx)=>getGoodDataByIdx(idx + baseIdx) 
    ); 
  } 
   
  //获取上商城的banner图片list 
  export function mockgetMallBannerListData() {  
     return mockBannerData; 
  } 
   
  //商品品类数据
let mockCatlogData = [{
  title: "手机",
  subList: new Array(20).fill({
  title: "手机品类",
  image: "//img11.360buyimg.com/n7/jfs/t1/122119/40/30036/19077/6343f73eEe1bb7c9b/67e372591ec1d308.jpg.avif"
  })
  },{
  title: "数码",
  subList: new Array(10).fill({
    title: "数码品类",
    image: "//img10.360buyimg.com/n3/jfs/t2971/15/167732091/93002/204c1016/574d9d9aNe4e6fa7a.jpg"
  })
},{
    title: "图书",
    subList: new Array(5).fill({
    title: "图书品类",
    image: "//img12.360buyimg.com/n3/jfs/t1/136498/30/6868/364458/5f3276adEd05c78ef/2210770765ad8771.jpg"
    })
    },{
    title: "男装",
    subList: null
    },{
    title: "女装",
    subList: null
    },{
    title: "母婴",
    subList: null
    },{
    title: "百货",
    subList: null
    }];
//获取商品分类数据
export function mockgetGoodCatlogListData() {
  return mockCatlogData;
}
    