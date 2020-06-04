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
// // 型号导入
// export const productmodelimport = data => {
//     return service({
//         url: '/linkerp/product/model/import',
//         method: 'post',
//         data: qs.stringify(data, {indices: false})
//     })
// };

// 查看未关联到账单
export const productlist = params => {
    return service({
        url: '/linkerp/arrivalBill/inquire',
        method: 'get',
        params
    })
};

// 到账单 待销账列表
export const invoiceLinked = params => {
    return service({
        url: '/linkerp/arrivalBill/invoiceLinked',
        method: 'get',
        params
    })
};

// 查询付款单
export const linkedPaymentSlip = params => {
    return service({
        url: '/linkerp/receipt/linkedPaymentSlip',
        method: 'get',
        params
    })
};

// 未关联到账单
export const inquirep = params => {
    return service({
        url: '/linkerp/arrivalBill/inquire',
        method: 'get',
        params
    })
};

// 到账单全部
export const allBills = params => {
    return service({
        url: '/linkerp/arrivalBill/allBills',
        method: 'get',
        params
    })
};

// 销账明细列表
export const writeOffDetails = params => {
    return service({
        url: '/linkerp/arrivalBill/writeOffDetails',
        method: 'get',
        params
    })
};

// 查询付款单
export const receiptreceipt = params => {
    return service({
        url: '/linkerp/receipt/receipt',
        method: 'get',
        params
    })
};

// 冲账明细
export const chargebackDetails = params => {
    return service({
        url: '/linkerp/receipt/chargebackDetails',
        method: 'get',
        params
    })
};

// 应收款
export const receivableList = params => {
    return service({
        url: '/linkerp/collectionPayment/receivableList',
        method: 'get',
        params
    })
};

// 已收款
export const paidFor = params => {
    return service({
        url: '/linkerp/collectionPayment/paidFor',
        method: 'get',
        params
    })
};

//  已收款人民币总额
export const sumOfRMB = params => {
    return service({
        url: '/linkerp/collectionPayment/sumOfRMB',
        method: 'get',
        params
    })
};

//   收款汇总
export const collectionGatherList = params => {
    return service({
        url: '/linkerp/collectionPayment/collectionGatherList',
        method: 'get',
        params
    })
};

//  费用单列表
export const financeBill = params => {
    return service({
        url: '/linkerp/financeBill/list',
        method: 'get',
        params
    })
};

//   应付款
export const duesList = params => {
    return service({
        url: '/linkerp/collectionPayment/duesList',
        method: 'get',
        params
    })
};

//    已付款
export const paidList = params => {
    return service({
        url: '/linkerp/collectionPayment/paidList',
        method: 'get',
        params
    })
};

//  付款汇总
export const paymentGatherList = params => {
    return service({
        url: '/linkerp/collectionPayment/paymentGatherList',
        method: 'get',
        params
    })
};

//  开票申请列表
export const invoiceList = params => {
    return service({
        url: '/linkerp/financeInvoice/invoiceList',
        method: 'get',
        params
    })
};

//  销售发票列表
export const saleInvoiceList = params => {
    return service({
        url: '/linkerp/financeInvoice/saleInvoiceList',
        method: 'get',
        params
    })
};

//  采购发票列表
export const buyerInvoiceList = params => {
    return service({
        url: '/linkerp/financeInvoice/buyerInvoiceList',
        method: 'get',
        params
    })
};

// 下拉
//  财务科目
export const financialAccount = params => {
    return service({
        url: '/linkerp/dict/financialAccount',
        method: 'get',
        params
    })
};
// 科目明细
export const accountDetails = params => {
    return service({
        url: '/linkerp/dict/accountDetails',
        method: 'get',
        params
    })
};
// 货币
export const currencyCode = params => {
    return service({
        url: '/linkerp/dict/currencyCode',
        method: 'get',
        params
    })
};
// 税率
export const taxRate = params => {
    return service({
        url: '/linkerp/dict/taxRate',
        method: 'get',
        params
    })
};

// 银行
export const bank = params => {
    return service({
        url: '/linkerp/dict/bank',
        method: 'get',
        params
    })
};
// 录入人
export const selectData = params => {
    return service({
        url: '/linkerp/user/selectData',
        method: 'get',
        params
    })
};
// 收款单位
export const selectunit = params => {
    return service({
        url: '/linkerp/payer/selectData',
        method: 'get',
        params
    })
};

// 业务员
export const salesman = params => {
    return service({
        url: '/linkerp/arrivalBill/salesman',
        method: 'get',
        params
    })
};
// 客户名称
export const customerPullDown = params => {
    return service({
        url: '/linkerp/collectionPayment/customerPullDown',
        method: 'get',
        params
    })
};
// 供应商名称
export const vendorNameDropDown = params => {
    return service({
        url: '/linkerp/collectionPayment/vendorNameDropDown',
        method: 'get',
        params
    })
};
// 付款单位
export const departmentPullDown = params => {
    return service({
        url: '/linkerp//collectionPayment/departmentPullDown',
        method: 'get',
        params
    })
};

// 汇率
export const currencyExchangeRateList = params => {
    return service({
        url: '/linkerp/dict/currencyExchangeRateList',
        method: 'get',
        params
    })
};

// 客户代码
export const codeDropDown = params => {
    return service({
        url: '/linkerp/collectionPayment/codeDropDown',
        method: 'get',
        params
    })
};

// 客户类型
export const customerType = params => {
    return service({
        url: '/linkerp/dict/customerType',
        method: 'get',
        params
    })
};

//国家
export const states = params => {
    return service({
        url: '/linkerp/dict/states',
        method: 'get',
        params
    })
};

//付款条件前
export const paymentBefore = params => {
    return service({
        url: '/linkerp/dict/paymentBefore',
        method: 'get',
        params
    })
};

//付款条件后
export const paymentRear = params => {
    return service({
        url: '/linkerp/dict/paymentRear',
        method: 'get',
        params
    })
};

// 供应商代码
export const vendorCodeDropDown = params => {
    return service({
        url: '/linkerp/collectionPayment/vendorCodeDropDown',
        method: 'get',
        params
    })
};

// 供应商类型
export const supplierType = params => {
    return service({
        url: '/linkerp/dict/supplierType',
        method: 'get',
        params
    })
};

//  新增到账单
export const arrivalBillAdd = data => {
    return service({
        url: '/linkerp/arrivalBill/arrivalBillAdd',
        method: 'post',
        data
    })
};
//  新增付款单
export const addReceipt = data => {
    return service({
        url: '/linkerp/receipt/addReceipt',
        method: 'post',
        data
    })
};

//  新增费用单
export const financeBilladd = data => {
    return service({
        url: '/linkerp/financeBill/add',
        method: 'post',
        data: JSON.stringify(data)
    })
};

// 付款客户
export const customerPullDownds = params => {
    return service({
        url: '/linkerp/collectionPayment/customerPullDown',
        method: 'get',
        params
    })
};
// 收款公司
export const fuzzyCustomer = params => {
    return service({
        url: '/linkerp/client/fuzzyCustomer',
        method: 'get',
        params
    })
};

// 收益公司
export const ambiguousName = params => {
    return service({
        url: '/linkerp/supplier/ambiguousName',
        method: 'get',
        params
    })
};
// 44