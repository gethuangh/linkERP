import service from './request'
import qs from 'qs'

//供应商列表
export const suppliersList = params => {
    return service({
        url: '/linkerp/supplier/suppliers',
        method: 'get',
        params
    })
};

//供应商名称
export const suppliersName = params => {
    return service({
        url: '/linkerp/supplier/allSupplier',
        method: 'get',
        params
    })
};

//供应商类别
export const supplierType = params => {
    return service({
        url: '/linkerp/dict/supplierType',
        method: 'get',
        params
    })
};

//品牌
export const brandList = params => {
    return service({
        url: '/linkerp/product/brand/all',
        method: 'get',
        params
    })
};

//供应商联系人列表
export const supLinkmans = params => {
    return service({
        url: '/linkerp/supplier/supLinkmans',
        method: 'get',
        params
    })
};
// 供应商新增
export const insertSupplier = data => {
    return service({
        url: '/linkerp/supplier/insertSupplier',
        method: 'post',
        data
    })
};
// 新建供应商联系人
export const supLinkman = data => {
    return service({
        url: '/linkerp/supplier/supLinkman',
        method: 'post',
        data
    })
};