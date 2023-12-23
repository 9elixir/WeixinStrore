import { mockgetGoodDataById } from "./mockMallData";
import { OrderStatus } from "./config";
//----------模拟购物车----------//
//模拟购物车状态
let mockCart = [{
    goodId: "AMD7000",
    selected: false,
    count: 1,
    },{
    goodId: "JavaScript-v7",
    selected: true,
    count:2,
    },{
    goodId: "CSS-GUIDE-v4",
    selected: true,
    count:1,
    },{
    goodId: "THREEBODY1-3",
    selected: true,
    count: 3,
    }];
//将后台购物车更新为购物车页面返回的购物车数据
function mockupdateCartData(newCart) {
    mockCart = newCart;
    }
//增加商品
function mockaddtoCart({goodId, count}) {
    let slot = mockCart.find(good => good.goodId === goodId);
    if(slot) {
        slot.count++;
        slot.selected = true;
    } else {
    mockCart.push({
      goodId,
      selected: true,
      count
    });
    }
}
//删除商品
function mockdeletefromCart(goodId) {
  const index = mockCart.findIndex(item => item.goodId === goodId);
  if (index > -1) {
    mockCart.splice(index, 1);
  }
}
//获取购物车内的商品列表
function genCartOrderList() {
    return mockCart.map(order=> {const good = mockgetGoodDataById(order.goodId);
    return {
    goodId: good.goodId,
    title: good.title,
    price: good.price,
    storeName: good.storeName,
    image: good.previewImgs[0],
    count: order.count,
    selected: order.selected
  }
});
}
//从扁平的商品数组转换成购物车界面便于显示的树形结构，按照商店名称分类
//[{goodID, storeName}] -> [{storeName, goodsList:[{goodId}]}]
function buildGoodsTree(goodsList) {
    const goodsTree = [];
    goodsList.forEach(goodItem => {
    const goodId = goodItem.goodId;
    const storeName = goodItem.storeName;
    let exsitStoreItem = goodsTree.find(storeItem => storeItem?.storeName === storeName);
    if(exsitStoreItem) {
        exsitStoreItem.goodsList.push(goodItem);
        if(!goodItem.selected) {
            exsitStoreItem.selected = false;
        }
    } else {
      goodsTree.push({//create new entry
        selected: goodItem.selected,
        storeName: storeName,
        goodsList: [goodItem]
      });
    }
    });
  return goodsTree;
}
//计算商品总价
function calcTotalPrice(goodsList) {
    return goodsList.reduce((sum, current) => current.selected ?sum + current.price * current.count 
    :sum, 0);
}
//计算商品总数
function calcTotalCount(goodsList) {
    return goodsList.reduce((sum, current) => current.selected ?sum + current.count : sum, 0);
}
//计算是否全部选中
function calcAllSelectedState(goodsList) {
  return goodsList.reduce((acc, current) => acc && current.selected, true) && goodsList.length > 0;
}
//获取购物车数据
function mockgetCartData() {
      let goodsList = genCartOrderList();
      // console.log(goodsList);
      let totalPrice = calcTotalPrice(goodsList);
      let totalCount = calcTotalCount(goodsList);
      let allSelected = calcAllSelectedState(goodsList);
      let goodsTree = buildGoodsTree(goodsList);
      let renderTree = {
        totalPrice,
        totalCount,
        allSelected,
        goodsTree
    };
      console.log(renderTree);
      return renderTree;
}
//获取购物车内商品 goodId 的数量
function mockgetGoodCountInCart(goodId) {
      let good = mockCart.find(good => good.goodId == goodId);
      return good ? good.count : 0;
}
    
//计算处于 status 状态的订单数量
function calcOrderStatusCount(status) {
  return mockOrderList.filter(order => order.status == Number(status)).length;
}
//获取订单个状态的数量
function mockgetOrderStatusSummary() {
  return {
    count_CREATED: calcOrderStatusCount(OrderStatus.CREATED),
    count_PENDING_PAYMENT: calcOrderStatusCount(OrderStatus.PENDING_PAYMENT),
    count_PENDING_DELIVERY: calcOrderStatusCount(OrderStatus.PENDING_DELIVERY),
    count_PENDING_RECEIPT: calcOrderStatusCount(OrderStatus.PENDING_RECEIPT),
  }
}
  let mockOrderList = [
    // { //订单模拟数据
    // orderId: "order_2000_01", //订单 id
    // create_time:{},
    // status: OrderStatus.PENDING_PAYMENT,
    // address: mockUserInfo.addresses[0], //配送地址
    // goodsList: [{ //商品列表
    // goodId: "i712700KF",
    // price: 2299.00,
    // count: 1,
    // storeName:"",
    // image:"",
    // },{
    // goodId: "AMD7000",
    // price: 3999.00,
    // count:2,
    // storeName:"",
    // image:"",
    // }],
    // totalCount: 0,
    // totalPrice: 0,
    // shippingFeel:6, //运费
    // couponData:{}, //优惠券
    // fapiaoData:{}, //发票信息
    // noteData:{} //订单备注
    // }
    ];
let orderOnPaying;

//获取当前正在处理的订单
function mockgetOrderOnPaying() {
  if(orderOnPaying) {
    let total = {
    totalCount: 0,
    totalPrice: 0,
  };
  //增加额外的商店名称等数据
  let goodsList = orderOnPaying.goodsList;
  total = goodsList.reduce((sum, current) => {
    const good = mockgetGoodDataById(current.goodId);
    current.storeName = good.storeName;
    current.image = good.previewImgs[0];
    return {
      totalCount: sum.totalCount + current.count,
      totalPrice: sum.totalPrice + current.price * current.count
    };
  }, total);
    orderOnPaying.totalCount = total.totalCount;
    orderOnPaying.totalPrice = total.totalPrice;
    }
  return orderOnPaying;
}
//更新订单状态
function mockupdateOrderStatus({orderId, status}) {
  let order = mockOrderList.find(order => order.orderId === orderId);
  order && (order.status = status);
}
//新建订单
function mockcreateOrder(goodsList) {
  let now = Date.now();
  let newOrder = {
  create_time: now,
  orderId: "order_" + now + Math.random() * 100,
  status: OrderStatus.PENDING_PAYMENT,
  address: "北京市海淀区西土城路 10 号",
  goodsList: goodsList,
  // totalCount: 0,
  // totalPrice: 0,
  shippingFeel: 6,
  couponData:{},
  fapiaoData:{},
  noteData:{}
  };
  //加入订单池
  mockOrderList.push(newOrder);
  //当前正在处理的订单
  orderOnPaying = newOrder;
}
//从商品页直接下单
function mockcreateOrderFromStore(goodId) {
  const good = mockgetGoodDataById(goodId);
  if(!good) {
    console.log("unknow gooId: %s", goodId);
    return;
  }
  // console.log(good);
  mockcreateOrder([{
    goodId: goodId,
    price: good.price,
    count: 1,
    storeName: good.storeName,
    image: good.previewImgs[0],
  }]);
}
//从购物车过来的新建订单
function mockcreateOrderFromCart() {
  let goodsList = genCartOrderList();
  goodsList = goodsList.filter(good => good.selected);
  mockcreateOrder(goodsList);
  //从购物车删除已提交订单的商品
  goodsList.forEach(good => mockdeletefromCart(good.goodId));
  console.log("mockCart: ", mockCart);
  console.log("mockOrderList: ", mockOrderList);
}

//----------模拟用户----------//
const thisUserId = "user_001";
//模拟用户数据
const mockUserInfo = {
  useId: thisUserId,
  avatarUrl:'//img13.360buyimg.com/n2/jfs/t1/144236/8/15597/159562/5fbe2d66Eec158af8/944000d400745e83.jpg',
  nickName: '测试账户',
  addresses: ["北京市海淀区西土城路 10 号"],
  cart: mockCart,
  orderList: mockOrderList
};
//获取用户信息
  export function mockgetUserData() {
  return mockUserInfo;
}

module.exports = {
  mockgetUserData,

  mockgetGoodCountInCart,
  mockgetCartData,
  mockupdateCartData,
  mockaddtoCart,
  mockdeletefromCart,

  mockcreateOrder,
  mockcreateOrderFromStore,
  mockcreateOrderFromCart,
  mockgetOrderOnPaying,
  mockgetOrderStatusSummary,
  mockupdateOrderStatus,
}