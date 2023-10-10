// pages/home/index.js
Page({
  data: {     
    banners: [       
      {         
        imgurl:"//img11.360buyimg.com/pop/s1180x940_jfs/t1/120230/5/30351/61851/63ff2380F1027c53c/f8c95bb19669d5f0.jpg.avif",       
        goodId:"AMD7000" 
      }, {         
        imgurl:"//m.360buyimg.com/babel/jfs/t1/103254/5/31511/161687/63fef7ceF041f2ccc/9b6e8fb23faeaa36.png",        
        goodId:"THREEBODY1-3" 
      }, { 
        imgurl:"//img30.360buyimg.com/babel/s1580x830_jfs/t1/188382/20/33547/20174/63fdb9c9F4f84069f/28daa90392ab9e5a.jpg!cc_1580x830.webp",         
        goodId:"i712700KF" 
      }, {         
        imgurl:"//img12.360buyimg.com/pop/s1180x940_jfs/t1/142482/37/34739/75399/63fdee97Fa448e48d/d08716d72b235cea.jpg.avif",         
        goodId:"DELL274K" 
      } 
    ],      
    goodsList: [ 
      { goodId: "i712700KF", 
        title: "英特尔(Intel) i7-12700KF 12代 酷睿 处理器 12核20线程 单核睿频至高可达5.0Ghz 25M三级缓存 台式机CPU", 
        tag: "12核20线程",       
        price: 2299.00,       
        previewImgs: [ 
        "//img14.360buyimg.com/n1/s450x450_jfs/t1/109624/40/32269/83205/635b52f0E4b294064/0f5659e22ce6c94e.jpg.avif", 
        ],     
     }, 
      { goodId: "AMD7000", 
        title: "AMD 7000系列 锐龙9 7950X 处理器 (r9) 5nm 16核32线程 加速频率至高5.7Ghz 170W AM5接口 盒装CPU",      
        tag: "Zen4架构至高可达5.7GHz", 
        price: 3999.00,        
        previewImgs: [ 
        "//img12.360buyimg.com/n7/jfs/t1/112096/28/31645/79248/63ff1d8eF84dd2a24/e2731f5d2b0b1e3c.jpg.avif", 
        ],     
     }, 
      { goodId: "AppleA2892",      
        title: "Apple iPhone 14 Pro (A2892) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机", 
        tag: "喜爱此刻入手", 
        price: 9899.00,       
        previewImgs: [ 
        "//img14.360buyimg.com/n7/jfs/t1/109054/20/34853/31178/6400933aF32966358/77bbf161de613058.jpg.avif", ],     
      }, 
      { goodId: "DELL274K", 
      title: "戴尔（DELL）27英寸 办公显示器 4K IPS 内置音箱 旋转升降 FreeSync 电脑显示屏 S2721QS 防蓝光版",       
      tag:"按规则晒单赠50元E卡",
       price: 2499.00,       
      previewImgs: [ 
        "//img10.360buyimg.com/n7/jfs/t1/196695/19/33436/99681/63fd707aFf0cbcd62/0faafc816642ca67.jpg.avif", 
      ],     }, 
      { goodId: "JavaScript-v7", 
        title: "JavaScript 指南 原书第7版 犀牛书JS高级程序设计 [JavaScript: The Definitive Guide, Seventh Edition]", 
        tag: "全球畅销25年犀牛书全新升级", 
        price: 95.90, 
        previewImgs: [ 
        "//img11.360buyimg.com/n1/jfs/t1/168129/39/12442/160552/604f0770Ea958d39e/eb8ded5b1973f8dc.jpg.avif", 
        ],     
        }, 
      { goodId: "CSS-GUIDE-v4", 
        title: "CSS权威指南（第四版）（上下册）",       
        tag: "国际公认的HTML、CSS和Web标准领域的专家全新力作", 
        price: 99.00,       previewImgs: [ 
        "//img10.360buyimg.com/n1/jfs/t1/29898/23/13805/456931/5ca2c8a9Ec11849e4/0a09f5c31c511cb3.jpg.avif" 
      ],     
      }, 
      { goodId: "THREEBODY1-3", 
      title: "中国科幻基石丛书：三体全集（套装1-3册）",       tag: "第73届世界科幻雨果奖获奖作品", 
      price: 46.50,       previewImgs: [ 
        "//img14.360buyimg.com/n1/s200x200_jfs/t1/118930/5/31419/105418/63610836E19bf3f87/73ed9b1246dc5d27.jpg.avif", 
      ],     
      },
      { goodId: "MZ-V8P1T0BW", 
      title: "三星（SAMSUNG）1TB SSD固态硬盘 M.2接口(NVMe协议 PCIe 4.0 x4) 980 PRO （MZ-V8P1T0BW）",      tag: "1TB读速高达7000MB/s!", 
      price: 699.00, 
      previewImgs: [   "//img13.360buyimg.com/n1/s450x450_jfs/t1/104599/17/30977/94881/64004892F25f006e8/c08b358b6625f145.jpg.avif", 
      ], 
      } 
    ]   
  },   
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})