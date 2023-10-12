// pages/goods/detail/index.js
import {getGoodDataById} from "../../../data/api"
let goodId;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodDetail: {},     
    goodCountInCart: 0, 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      // console.log(options);     
      goodId = options?.goodId;         
      // good.goodId = "1234";     
      if(goodId) {       
        this.setData({         
          goodDetail: getGoodDataById(goodId), 
    }); 
  } 
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

  },
  onShareAppMessage() { 
 
  },   
   onClickGoodCommnts(event) {     
      wx.showToast({ 
      title: "未实现评论详情页!", 
      icon: "error" 

    }) 
  },    onClickStore(event) {     wx.showToast({ 
      title: "未实现店铺详情页!", 
      icon: "error" 
    }) 
  }, 
 
  //跳转到购物车页 
  gotoCartPage() {     wx.switchTab({       url: '../../cart/index', 
    }) 
  }, 
 
  //点击了购物车图标 
  onClickCart(event) {     this.gotoCartPage(); 
  }, 
 
  //点击了“加入购物车” 
  onClickAddCart(event) {     this.gotoCartPage(); 
  }, 
 
  //点击了“立即购买” 
  onClickBuyNow(event) { 
    wx.showToast({ 
      title: "未实现订单功能!",       icon: "error" 
    }) 
  } 
     
}) 