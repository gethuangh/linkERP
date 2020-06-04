import service from './request'
import qs from 'qs'
//  询价列表（待回复页，待处理页）
// export const unlist = data => {
//     return service({
//         url: '/linkerp/enquiry/list',
//         method: 'post',
//         data
//     })
// };

//  根据客户型号，查询增值渠道
// export const specType = params => {
//     return service({
//         url: '/linkerp/enquiry/specType',
//         method: 'get',
//         params
//     })
// };
//  品牌 所有品牌信息 下拉
export const brand = params => {
    return service({
        url: '/linkerp/product/brand/all',
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
// 供应商名称
export const vendorNameDropDown = params => {
    return service({
        url: '/linkerp/collectionPayment/vendorNameDropDown',
        method: 'get',
        params
    })
};
// 采购员
export const selectData = params => {
    return service({
        url: '/linkerp/user/selectData',
        method: 'get',
        params
    })
};
// 以上重复
//  根据型号名称查询型号信息
export const productmodel = params => {
    return service({
        url: '/linkerp/product/model',
        method: 'get',
        params
    })
};

//  首页即时库存
export const reserve = params => {
    return service({
        url: '/linkerp/supplierSpectype/reserve',
        method: 'get',
        params
    })
};
//   已接订单
export const receivedOrder = params => {
    return service({
        url: '/linkerp/supplierSpectype/receivedOrder',
        method: 'get',
        params
    })
};
//   特价渠道
export const specialChannel = params => {
    return service({
        url: '/linkerp/supplierSpectype/specialChannel',
        method: 'get',
        params
    })
};
//   虚拟库存
export const virtual = params => {
    return service({
        url: '/linkerp/supplierSpectype/virtual',
        method: 'get',
        params
    })
};
//   出库记录
export const stockOutRecord = params => {
    return service({
        url: '/linkerp/shippingOrder/stockOutRecord',
        method: 'get',
        params
    })
};

// 入库单
export const queryEntryList = data => {
    return service({
        url: '/linkerp/godownEntry/queryEntryList',
        method: 'post',
        data
    })
};

//   出库记录
export const supplierSpectypeList = params => {
    return service({
        url: '/linkerp/supplierSpectype/supplierSpectypeList',
        method: 'get',
        params
    })
};
// 删除型号
export const deleteOrNot = data => {
    return service({
        url: '/linkerp/supplierSpectype/deleteOrNot',
        method: 'post',
        data
    })
};
// 修改
export const modifySupplierSpectype = data => {
    return service({
        url: '/linkerp/supplierSpectype/modifySupplierSpectype',
        method: 'post',
        data
    })
};

//    查看虚拟库存
export const virtualAll = params => {
    return service({
        url: '/linkerp/virtual/virtualAll',
        method: 'get',
        params
    })
};
// 删除虚拟库存
export const virtualdeleteOrNot = data => {
    return service({
        url: '/linkerp/virtual/deleteOrNot',
        method: 'post',
        data
    })
};

//修改虚拟库存
export const modifyVirtual = data => {
    return service({
        url: '/linkerp/virtual/modifyVirtual',
        method: 'post',
        data
    })
};

//    今日新增
export const addedToday = params => {
    return service({
        url: '/linkerp/virtual/addedToday',
        method: 'get',
        params
    })
};

//    预计出库
export const forecastOutbound = params => {
    return service({
        url: '/linkerp/supplierSpectype/forecastOutbound',
        method: 'get',
        params
    })
};
//    预计入库
export const expectedStorage = params => {
    return service({
        url: '/linkerp/supplierSpectype/expectedStorage',
        method: 'get',
        params
    })
};

//新增特价型号
export const supplierSpectypeAddList = data => {
    return service({
        url: '/linkerp/supplierSpectype/supplierSpectypeAddList',
        method: 'post',
        data
    })
};
//虚拟库存新增
export const virtualAddList = data => {
    return service({
        url: '/linkerp/virtual/virtualAddList',
        method: 'post',
        data
    })
};
// 18
//导出
export const exportExcel = data => {
    return service({
        url: '/linkerp/virtual/exportExcel',
        method: 'post',
        data
    })
};
//导出今日新增
export const exportAddedToday = data => {
    return service({
        url: '/linkerp/virtual/exportAddedToday',
        method: 'post',
        data
    })
};
//特价导出
export const supplierSpectypeexport = data => {
    return service({
        url: '/linkerp/supplierSpectype/export',
        method: 'post',
        data
    })
};