//前端只import本文件 
export {   
  mockgetGoodsListData as getGoodsListData,   
  mockgetGoodDataById as getGoodDataById,   
  mockgetMallBannerListData as getMallBannerListData,
  mockgetGoodCatlogListData as getGoodCatlogListData, 
  } from "./mockMallData"

export {
  mockgetUserData as getUserData,

  mockgetGoodCountInCart as getGoodCountInCart,
  mockgetCartData as getCartData,
  mockupdateCartData as updateCartData,
  mockaddtoCart as addtoCart,
  mockdeletefromCart as deletefromCart,

  mockcreateOrder as createOrder,
  mockcreateOrderFromStore as createOrderFromStore,
  mockcreateOrderFromCart as createOrderFromCart,
  mockgetOrderOnPaying as getOrderOnPaying,
  mockgetOrderStatusSummary as getOrderStatusSummary,
  mockupdateOrderStatus as updateOrderStatus,

  } from "./mockUserData"