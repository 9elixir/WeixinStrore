// pages/home/index.js
import {getMallBannerListData, getGoodsListData} from "../../data/api"
Page({
  data: {     
    banners: [],      
    goodsList: []   
  },   
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) 
  {     
    let banners = getMallBannerListData();     
    let goodsList = getGoodsListData();    
    // console.log("banners", banners);     
    // console.log("goodsList", goodsList);     
    this.setData({       
      banners,  //banners:banners 的缩写       
      goodsList,  //goodsList:goodsList 的缩写 
    }); 
  },
  onShareAppMessage() { 
  },    
  onClickGoodDetail: function(event) {     
    let goodId = event.currentTarget.dataset.goodId; 
    // console.log(event);     
    if(goodId) {       
      wx.navigateTo(
        { 
          url: "/pages/goods/detail/index?goodId="+goodId
        }
      ) 
    } 
  } ,

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