import service from './request'
import qs from 'qs'

// export const test = params => {
//     return service({
//         url: '/linkerp/enquiry/specType',
//         method: 'get',
//         params
//     })
// };

// export const test = data => {
//     return service({
//         url: '/linkerp/salesOffer/export',
//         method: 'POST',
//         responseType: 'blob',
//         data
//     })  
// };

//  统计采购申请单状态
export const countBuyerApplyStatus = params => {
    return service({
        url: '/linkerp/orderSearch/countBuyerApplyStatus',
        method: 'get',
        params
    })
};

//  统计销售订单状态
export const countSalesStatus = params => {
    return service({
        url: '/linkerp/orderSearch/countSalesStatus',
        method: 'get',
        params
    })
};

//  统计采购订单状态
export const countBuyerStatus = params => {
    return service({
        url: '/linkerp/orderSearch/countBuyerStatus',
        method: 'get',
        params
    })
};

//  入库订单状态
export const countGodownEntryStatus = params => {
    return service({
        url: '/linkerp/orderSearch/countGodownEntryStatus',
        method: 'get',
        params
    })
};
//  出库订单状态
export const countStockOutStatus = params => {
    return service({
        url: '/linkerp/orderSearch/countStockOutStatus',
        method: 'get',
        params
    })
};

//  调拨单
export const countInvoiceStatus = params => {
    return service({
        url: '/linkerp/orderSearch/countInvoiceStatus',
        method: 'get',
        params
    })
};

//  发运单
export const countShippingStatus = params => {
    return service({
        url: '/linkerp/orderSearch/countShippingStatus',
        method: 'get',
        params
    })
};

// 订单租页面整体查询
export const queryOverAll = data => {
    return service({
        url: '/linkerp/orderSearch/queryOverAll',
        method: 'post',
        data
    })
};

// 查询用户列表（用于下拉）
export const selectData = params => {
    return service({
        url: '/linkerp/user/selectData',
        method: 'get',
        params
    })
};

// 采购申请单查询
export const queryBuyerApply = data => {
    return service({
        url: '/linkerp/orderSearch/queryBuyerApply',
        method: 'post',
        data
    })
};
// 销售订单查询
export const SalesOrdersOfBeing = data => {
    return service({
        url: '/linkerp/salesOrder/SalesOrdersOfBeing',
        method: 'post',
        data
    })
};

// 入库
export const queryEntryList = data => {
    return service({
        url: '/linkerp/godownEntry/queryEntryList',
        method: 'post',
        data
    })
};

// 查询所有（第一方）公司信息（用于下拉）
export const companyAll = params => {
    return service({
        url: '/linkerp/user/companyAll',
        method: 'get',
        params
    })
};

// 删除采购订单
export const buyerOrderdel = params => {
    return service({
        url: '/linkerp/buyerOrder/del',
        method: 'post',
        params
    })
};
//  删除销售订单
export const delSalesOrder = params => {
    return service({
        url: '/linkerp/salesOrder/delSalesOrder',
        method: 'post',
        params
    })
};
//   编辑采购订单
export const editBuyerOrder = params => {
    return service({
        url: '/linkerp/buyerOrder/editBuyerOrder',
        method: 'post',
        params
    })
};
// 采购订单列表
export const orderList = data => {
    return service({
        url: '/linkerp/buyerOrder/orderList',
        method: 'post',
        data
    })
};
//  新增销售订单
export const insertSalesOrder = data => {
    return service({
        url: '/linkerp/salesOrder/insertSalesOrder',
        method: 'post',
        data
    })
};
// 新增采购订单
export const addBuyerOrder = data => {
    return service({
        url: '/linkerp/buyerOrder/addBuyerOrder',
        method: 'post',
        data
    })
};
// 新增入库单
export const addGodownEntry = data => {
    return service({
        url: '/linkerp/godownEntry/addGodownEntry',
        method: 'post',
        data
    })
};
// 21
//   删除入库单
// export const godownEntrydel = data => {
//     return service({
//         url: '/linkerp/godownEntry/del',
//         method: 'post',
//         data
//     })
// };

// 导出采购订单
export const exportBuyerOrder = data => {
    return service({
        url: '/linkerp/buyerOrder/exportBuyerOrder',
        method: 'post',
        data
    })
};
// 导出销售订单
export const exportSalesOrderList = data => {
    return service({
        url: '/linkerp/salesOrder/exportSalesOrderList',
        method: 'post',
        data
    })
};
//  导出入库单列表
export const exportOrder = params => {
    return service({
        url: '/linkerp/godownEntry/exportOrder',
        method: 'get',
        params
    })
};