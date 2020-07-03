import service from './request'
import qs from 'qs'

// // 产品列表 （首字母分组）
// export const productlist = params => {
//     return service({
//         url: '/linkerp/product/list',
//         method: 'get',
//         params
//     })
// };

// // 删除型号
// export const productmodeldelete = modelId => {
//     return service({
//         url: '/linkerp/product/model/delete/' + modelId,
//         method: 'post'
//     })
// };

// 客户询价
export const customerInquiry = params => {
    return service({
        url: '/dataAnalysis/customerInquiry',
        method: 'get',
        params
    })
};


// 销售报价
export const salesQuote = params => {
    return service({
        url: '/dataAnalysis/salesQuote',
        method: 'get',
        params
    })
};
// 销售订单
export const salesOrder = params => {
    return service({
        url: '/dataAnalysis/salesOrder',
        method: 'get',
        params
    })
};
// 采购报价
export const purchaseQuotation = params => {
    return service({
        url: '/dataAnalysis/purchaseQuotation',
        method: 'get',
        params
    })
};
// 采购订单
export const purchaseOrder = params => {
    return service({
        url: '/dataAnalysis/purchaseOrder',
        method: 'get',
        params
    })
};
// 比例采购报价/客户询价
export const purchaseCustomer = params => {
    return service({
        url: '/dataAnalysis/purchaseCustomer',
        method: 'get',
        params
    })
};

// 比例 销售报价/销售订单
export const salesQuoteOrder = params => {
    return service({
        url: '/dataAnalysis/salesQuoteOrder',
        method: 'get',
        params
    })
};

// 部门 各区域近期业绩柱形图
export const departmentPerformance = params => {
    return service({
        url: '/dataAnalysis/departmentPerformance',
        method: 'get',
        params
    })
};

// 公司采购报价数 客户询价数 销售订单数 销售报价数
export const cpiRatio = params => {
    return service({
        url: '/dataAnalysis/cpiRatio',
        method: 'get',
        params
    })
};

// 销售部门查询客户询价
export const departmentCustomerInquiry = params => {
    return service({
        url: '/dataAnalysis/departmentCustomerInquiry',
        method: 'get',
        params
    })
};

//  根据销售部门查询销售报价
export const departmentalSalesQuotation = params => {
    return service({
        url: '/dataAnalysis/departmentalSalesQuotation',
        method: 'get',
        params
    })
};
//  销售部门查询销售订单
export const departmentalSalesOrder = params => {
    return service({
        url: '/dataAnalysis/departmentalSalesOrder',
        method: 'get',
        params
    })
};
//  采购部门 采购报价
export const purchasingDepartment = params => {
    return service({
        url: '/dataAnalysis/purchasingDepartment',
        method: 'get',
        params
    })
};
//  采购部 采购订单
export const purchaseDepartmentOrder = params => {
    return service({
        url: '/dataAnalysis/purchaseDepartmentOrder',
        method: 'get',
        params
    })
};