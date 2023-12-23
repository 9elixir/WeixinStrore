// pages/user/index.js
import {getUserData, getOrderStatusSummary} from "../../data/api"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userData: {},
    orderData: {}
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      userData: getUserData(),
      orderData: getOrderStatusSummary()
      });
  },
  handleTodo(e) {
    wx.showToast({
    title: '未实现',
    icon: "error"
    })
  }
})