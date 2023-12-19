// pages/category/index.js
import {getGoodCatlogListData} from "../../data/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    catlogList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      catlogList: getGoodCatlogListData()
      });
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
  //扫码
openCamera: function () {
  wx.scanCode({
    success: (e) => {
      wx.showModal({
        title: '扫描二维码',
        content: e.result,
        complete: (res) => {
          if (res.cancel) {}
          if (res.confirm) {}
        }
      });
  },
    fail: (e) => {
    wx.showModal({
      title: '扫描二维码',
      content: '扫码失败',
      complete: (res) => {
        if (res.cancel) {}
        if (res.confirm) {}
      }
    });
    },
  });
},
  //切换商品子类显示
  catalogClicked: function(e) {
  // console.log(e);
  const activeIndex = e.target.dataset.index;
  this.setData({activeIndex});
  },
  //跳转到商品子类页
  catlogCardClicked: function(e) {
  wx.showToast({
  title: '未实现子品类页！',
  icon: "error"
  })
  }
})
