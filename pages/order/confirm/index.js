// pages/order/confirm/index.js
import {getOrderOnPaying, updateOrderStatus} from "../../../data/api"
import {OrderStatus} from "../../../data/config"
Page({
  /**
  * 页面的初始数据
  */
  data: {
  orderData: {}
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad(options) {
    let orderData = getOrderOnPaying();
    // console.log("orderData: ", orderData);
    this.setData({orderData});
  },
  //点击了收货地址连接
  addressClicked: function () {
    wx.showToast({
    title: '未实现修改地址',
    icon: "error"
    })
  },
  couponClicked: function () {
    wx.showToast({
    title: '未实现优惠券',
    icon: "error"
    })
  },
  fapiaoClicked: function () {
    wx.showToast({
    title: '发票未实现',
    icon: "error"
  })
  },
  ordernotesClicked: function () {
    wx.showToast({
    title: '未实现订单备注',
    icon: "error"
  })
  },
  //点击了“去结算”
  onClickTopay: function (e) {
  const {orderId} = e.currentTarget.dataset;
  let url = '/pages/order/pay/index?orderId=' + orderId + '&success=';
  wx.requestPayment({
    timeStamp: '',
    nonceStr: '',
    package: '',
    signType: 'MD5',
    paySign: '',
    success(res) {
    console.log('pay success', res);
    updateOrderStatus({
      orderId,
      status: OrderStatus.PENDING_DELIVERY
    });
    wx.navigateTo({
      url: url + '1',
    });
    },
    fail(res) {
      console.log('pay fail', res);
      updateOrderStatus({
        orderId,
        status: OrderStatus.PENDING_PAYMENT
      });
      wx.navigateTo({
        url: url + '0',
      });
    }
  });
  }
})
  