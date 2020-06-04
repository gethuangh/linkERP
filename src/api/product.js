import service from './request'
import qs from 'qs'

//test
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

// 品牌 所有品牌信息（用于下拉搜索）
export const productbrandall = () => {
    return service({
        url: '/linkerp/product/brand/all',
        method: 'get'
    })
};

// 产品列表 （首字母分组）
export const productlist = params => {
    return service({
        url: '/linkerp/product/list',
        method: 'get',
        params
    })
};

// 删除型号
export const productmodeldelete = modelId => {
    return service({
        url: '/linkerp/product/model/delete/' + modelId,
        method: 'post'
    })
};

// 编辑型号
export const productmodelupdate = data => {
    return service({
        url: '/linkerp/product/model/update',
        method: 'post',
        data
    })
};

// 型号导入
export const productmodelimport = data => {
    return service({
        url: '/linkerp/product/model/import',
        method: 'post',
        data: qs.stringify(data, {
            indices: false
        })
    })
};


//  根据ID查询型号信息
export const productmodel = params => {
    return service({
        url: '/linkerp/product/model',
        method: 'get',
        params
    })
};


// 在途采购订单
export const orderList = data => {
    return service({
        url: '/linkerp/buyerOrder/orderList',
        method: 'post',
        data
    })
};

// 未交客户订单
export const SalesOrdersOfBeing = data => {
    return service({
        url: '/linkerp/salesOrder/SalesOrdersOfBeing',
        method: 'post',
        data
    })
};

//  全部询价单
export const enquiryAllList = data => {
    return service({
        url: '/linkerp/enquiry/enquiryAllList',
        method: 'post',
        data
    })
};

//  查询报价列表
export const salesOfferlist = params => {
    return service({
        url: '/linkerp/salesOffer/list',
        method: 'get',
        params
    })
};

//   查询采购订单列表处理中
export const buyerOrderorderList = data => {
    return service({
        url: '/linkerp/buyerOrder/orderList',
        method: 'post',
        data
    })
};

//   查询处理中(已完成)销售订单
export const salesOrderSalesOrdersOfBeing = data => {
    return service({
        url: '/linkerp/salesOrder/SalesOrdersOfBeing',
        method: 'post',
        data
    })
};

//  优势供应商
export const advantageSupplier = params => {
    return service({
        url: '/linkerp/product/model/advantageSupplier',
        method: 'get',
        params
    })
};
//  获取产品型号列表
export const productmodellist = params => {
    return service({
        url: '/linkerp/product/model/list',
        method: 'get',
        params
    })
};

//  编辑型号
export const update = data => {
    return service({
        url: '/linkerp/product/model/update',
        method: 'post',
        data
    })
};
//  删除型号
export const modeldelete = data => {
    return service({
        url: '/linkerp/product/model/delete',
        method: 'post',
        data
    })
};
//  删除品牌
export const productbranddelete = data => {
    return service({
        url: '/linkerp/product/brand/delete',
        method: 'post',
        data
    })
};
//  品牌查看列表
export const brandlist = params => {
    return service({
        url: '/linkerp/product/brand/list',
        method: 'get',
        params
    })
};

//  查询包装类型（下拉框）
export const packType = params => {
    return service({
        url: '/linkerp/dict/packType',
        method: 'get',
        params
    })
};

//  根据品牌ID查询品牌信息
export const productbrand = params => {
    return service({
        url: '/linkerp/product/brand',
        method: 'get',
        params
    })
};
// 根据品牌ID查询代理商和联系人
export const agentAndLinkmanList = params => {
    return service({
        url: '/linkerp/product/brand/agentAndLinkmanList',
        method: 'get',
        params
    })
};
//  根据品牌ID查询贸易商和联系人
export const tradeAndLinkmanList = params => {
    return service({
        url: '/linkerp/product/brand/tradeAndLinkmanList',
        method: 'get',
        params
    })
};
// 根据品牌ID查询特价型号
export const spectype = params => {
    return service({
        url: '/linkerp/product/brand/spectype',
        method: 'get',
        params
    })
};
// 根据品牌ID查询子母品牌
export const relation = params => {
    return service({
        url: '/linkerp/product/brand/relation',
        method: 'get',
        params
    })
};
// 销售询价/采购报价 比例图
export const enquiryAndOfferBuyerScale = params => {
    return service({
        url: '/linkerp/product/brand/enquiryAndOfferBuyerScale',
        method: 'get',
        params
    })
};
// 销售 报价/成交 比例图
export const offerSalesAndDealScale = params => {
    return service({
        url: '/linkerp/product/brand/offerSalesAndDealScale',
        method: 'get',
        params
    })
};

// 销售询价 / 采购报价 线形图
export const enquiryAndOfferBuyerItemNum = params => {
    return service({
        url: '/linkerp/product/brand/enquiryAndOfferBuyerItemNum',
        method: 'get',
        params
    })
};
// 销售询价 / 采购报价 线形图
export const offerSalesAndDealItemNum = params => {
    return service({
        url: '/linkerp/product/brand/offerSalesAndDealItemNum',
        method: 'get',
        params
    })
};

// 成交金额 线形图
export const dealTotal = params => {
    return service({
        url: '/linkerp/product/brand/dealTotal',
        method: 'get',
        params
    })
};
// 销售利润线形图
export const salesGross = params => {
    return service({
        url: '/linkerp/product/brand/salesGross',
        method: 'get',
        params
    })
};
// 销售利润线形图
export const salesTotalAndGross = params => {
    return service({
        url: '/linkerp/product/brand/salesTotalAndGross',
        method: 'get',
        params
    })
};

// 价格趋势线形图
export const priceTrend = params => {
    return service({
        url: '/linkerp/product/model/priceTrend',
        method: 'get',
        params
    })
};

//  询价/下单客户比例
export const enquiryAndClientPlaceOrderScale = params => {
    return service({
        url: '/linkerp/product/model/enquiryAndClientPlaceOrderScale',
        method: 'get',
        params
    })
};

//询价/成交次数统计
export const enquiryAndDealTimesCount = params => {
    return service({
        url: '/linkerp/product/model/enquiryAndDealTimesCount',
        method: 'get',
        params
    })
};

// 询价/成交总额统计
export const enquiryAndDealCount = params => {
    return service({
        url: '/linkerp/product/model/enquiryAndDealCount',
        method: 'get',
        params
    })
};
// 新增添加型号
export const productmodeladd = data => {
    return service({
        url: '/linkerp/product/model/add',
        method: 'post',
        data
    })
};
// 36
// export const name = data => {
//     return service({
//         url: '',
//         method: 'post',
//         data
//     })
// };

// GET
// export const name = params => {
//     return service({
//         url: '',
//         method: 'get',
//         params
//     })
// };