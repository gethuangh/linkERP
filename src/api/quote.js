import service from './request'
import qs from 'qs'

// 报价-已报价
export const groupList = params => {
    return service({
        url: '/linkerp/salesOffer/group/list',
        method: 'get',
        params
    })
};

// 原厂型号下拉
export const product = params => {
    return service({
        url: '/linkerp/product/model/all',
        method: 'get',
        params
    })
};

// 预览报价
export const info = params => {
    return service({
        url: '/linkerp/salesOffer/info',
        method: 'get',
        params
    })
};

//查询报价列表（全部报价，历史报价）
export const salesOffer = params => {
    return service({
        url: '/linkerp/salesOffer/list',
        method: 'get',
        params
    })
};

// 历史报价，全部报价导出为Excel
export const salesOfferExport = data => {
    return service({
        url: '/linkerp/salesOffer/export',
        method: 'post',
        data,
        responseType: 'blob'
    })
};

//查询用户列表（用于下拉）
export const selectData = params => {
    return service({
        url: '/linkerp/user/selectData',
        method: 'get',
        params
    })
};

//去报价时显示信息
export const pushEntity = params => {
    return service({
        url: '/linkerp/salesOffer/pushEntity',
        method: 'get',
        params
    })
};
// 询价单批量新增
export const bulkInsert = data => {
    return service({
        url: '/linkerp/enquiry/bulkInsert',
        method: 'post',
        data
    })
};
// 8