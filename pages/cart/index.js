// pages/cart/index.js
import {getCartData, updateCartData, createOrderFromCart} from "../../data/api"
//购物车状态
let cartState = [
// {goodId:0, selected:true, count:2}
];
Page({
/**
* 页面的初始数据
*/
data: {
cartData: [],
},
/**
* 生命周期函数--监听页面显示
*/
onShow() {
this.renderCartState();
},
//更新购物车 UI
renderCartState() {
const cartData = getCartData();
// console.log(cartData);
this.setData({
cartData
});
this.initCartState();
},
//初始化购物车状态
initCartState() {
cartState.length = 0;
let goodsTree = this.data.cartData?.goodsTree;
let goodsList;
if(goodsTree) {
goodsTree.forEach(storeItem => {
if(goodsList = storeItem?.goodsList) {
goodsList.forEach(good => {
cartState.push({
goodId: good.goodId,
selected: good.selected,
count: good.count,
});
});
}
});
}
},
//合并购物车状态
mergeCartState(deltaCartState) {
  cartState.map(oldState => {
    let newState = deltaCartState.find(state => state.goodId=== oldState.goodId);
  if(newState) {
    newState.goodId != undefined && (oldState.goodId = newState.goodId);
    newState.selected != undefined && (oldState.selected =newState.selected);
    newState.count != undefined && (oldState.count = newState.count); 
  }
});
},

//将更新的购物车数据发给后台
postCartState() {
  updateCartData(cartState);
},
//刷新 UI 界面的状态
freshCartState(deltaCartState) {
  this.initCartState();
  this.mergeCartState(deltaCartState);
  this.postCartState();
  this.renderCartState();
},
//跳转到店铺页面
storeLinkClicked(e) {
  wx.showToast({
  title: '未实现店铺页！',
  icon: "error"
})
},
//跳转到商品页面
goodItemClicked(e) {
  let goodId = e.currentTarget.dataset.goodId;
  wx.navigateTo({
    url: '/pages/goods/detail/index?goodId='+goodId,
  })
},
//选中/取消一个店铺所有商品
toggleStoreEntry(e) {
  let storeIdx = e.currentTarget.dataset.storeIdx;
  let goodsTree = this.data.cartData?.goodsTree;
  let goodsList;
  let deltaState = [];
  if(goodsTree) {
    let store = goodsTree[storeIdx];
    store.selected = !store.selected;
    if(goodsList = store?.goodsList) {
      goodsList.forEach(
        good => {deltaState.push({
          goodId: good.goodId,
          selected: store.selected,
          count: good.count,
          });
        }
      );
    }
  }
  this.freshCartState(deltaState);
},
//更新一个商品的选中/数量
updateGoodEntry(e, action) {
  let goodId = e.target.dataset.goodId;
  let targetGood = cartState.find(good => good.goodId === goodId);
  action(targetGood);
  this.postCartState();
  this.renderCartState();
},
//选中/取消一个商品
toggleGoodEntry(e) {
  this.updateGoodEntry(e, targetGood => targetGood.selected= !targetGood.selected);
},
//减少一个商品数量
goodCountMinus(e) {
  this.updateGoodEntry(e, targetGood => targetGood.count > 0? --targetGood.count : targetGood.count = 0);
},
//增加一个商品数量
goodCountPlus(e) {
  this.updateGoodEntry(e, targetGood => ++targetGood.count);
},
//检查是否是正整数
changeValue(e) {
  const value = String(e.detail.value).split('.')[0].replace(/[^0-9]/g, '') || 0;
  this.updateGoodEntry(e, targetGood => targetGood.count = value);
  return value;
},
//正在输入
handleInput(e) {
// this.changeValue(e);
},
//失去焦点
handleBlur(e) {
  this.changeValue(e);
},
//选中/取消所有商品
toggleAllEntry(e) {
  let allSelected = this.data.allSelected= !this.data.allSelected;
  cartState.map(good => good.selected = allSelected);
  this.postCartState();
  this.renderCartState();
// this.setData({allSelected});
},
//去结算
onClickToConfirm(e) {
  if(this.data.cartData.totalPrice <= 0) {
    return;
    }
    createOrderFromCart();
    wx.navigateTo({
    url: '/pages/order/confirm/index',
    })
  }
})