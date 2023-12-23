//订单状态
export const OrderStatus = {
  CREATED: 10, // 已创建，待确认
  PENDING_PAYMENT: 30, // 已确认，待支付
  PENDING_DELIVERY: 40, // 待发货
  PENDING_RECEIPT: 50, // 待收货
  COMPLETE_SHIPPED: 90, // 已完成/待评价
  COMPLETE_COMMENTED: 100, // 已完成/已评价
  CANCELED_EXPIRED: 101, // 已取消，支付超时
  CANCELED_NOT_PAYMENT: 102, // 已取消，未支付主动取消
  CANCELED_AFTER_PAYMENT: 103, // 已取消，已支付主动取消
  CANCELED_DECLINED: 104, // 已取消，拒收
  };
  