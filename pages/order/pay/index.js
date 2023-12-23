// pages/order/pay/index.js
Page({
  /**
  * 页面的初始数据
  */
  data: {
  orderId: "",
  paySuccess: false
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad(options) {
    const orderId = options?.orderId;
    const paySuccess = options?.success == '1' ? true : false;
    this.setData({orderId, paySuccess});
  },
  showOrder() {
    wx.showToast({
    title: '未实现订单查看页',
    icon: "error"
  })
  },
  showHome() {
    wx.switchTab({
    url: '../../home/index',
    })
  },
})
  