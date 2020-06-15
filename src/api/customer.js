import service from './request'
import qs from 'qs'

//主页客户下拉
export const all = params => {
    return service({
        url: '/linkerp/client/all',
        method: 'get',
        params
    })
};

//主页联系人下拉
export const selectData = params => {
    return service({
        url: '/linkerp/contact/selectData',
        method: 'get',
        params
    })
};

//所有客户
export const clientList = params => {
    return service({
        url: '/linkerp/client/selectall',
        method: 'get',
        params
    })
};

//潜在客户
export const potentialQuery = params => {
    return service({
        url: '/linkerp/client/potentialQuery',
        method: 'get',
        params
    })
};

//公共客户
export const selectall = params => {
    return service({
        url: '/linkerp/client/selectall',
        method: 'get',
        params
    })
};

//合作客户
export const partner = params => {
    return service({
        url: '/linkerp/client/partner',
        method: 'get',
        params
    })
}

// 询价单批量新增
export const customerAdd = data => {
    return service({
        url: '/linkerp/client/customerAdd',
        method: 'post',
        data
    })
};