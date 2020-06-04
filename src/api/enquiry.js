import service from './request'
import qs from 'qs'


// 询价和报价共用部分
//  询价列表（待回复页，待处理页）
export const unlist = data => {
    return service({
        url: '/linkerp/enquiry/list',
        method: 'post',
        data
    })
};

//  根据客户型号，查询增值渠道
export const specType = params => {
    return service({
        url: '/linkerp/enquiry/specType',
        method: 'get',
        params
    })
};

// 查询询价单报价和历史报价
export const historyOffer = params => {
    return service({
        url: '/linkerp/enquiry/historyOffer',
        method: 'get',
        params
    })
};

// 保存采购报价
export const InsertOfferBuyer = data => {
    return service({
        url: '/linkerp/enquiry/InsertOfferBuyer',
        method: 'post',
        data
    })
};

// 完成询报价
export const achieveEnquiry = params => {
    return service({
        url: '/linkerp/enquiry/achieveEnquiryGroup',
        method: 'post',
        params
    })
};

// 询价单进程下拉
export const enquiryCourse = params => {
    return service({
        url: '/linkerp/dict/enquiryCourse',
        method: 'get',
        params
    })
};

//  询价单优先级下拉
export const enquiryPriority = params => {
    return service({
        url: '/linkerp/dict/enquiryPriority',
        method: 'get',
        params
    })
};

//  询价单期货要求下拉
export const enquiryDeliveryRequire = params => {
    return service({
        url: '/linkerp/dict/enquiryDeliveryRequire',
        method: 'get',
        params
    })
};

//  品牌 所有品牌信息 下拉
export const brand = params => {
    return service({
        url: '/linkerp/product/brand/all',
        method: 'get',
        params
    })
};

//  客户名称下拉
export const client = params => {
    return service({
        url: '/linkerp/client/all',
        method: 'get',
        params
    })
};

// 税率下拉
export const taxRate = params => {
    return service({
        url: '/linkerp/dict/taxRate',
        method: 'get',
        params
    })
};

//公司下拉
export const companyAll = params => {
    return service({
        url: '/linkerp/user/companyAll',
        method: 'get',
        params
    })
};
// 共用结束


//  已完成询价单
export const achieveEnquiryList = params => {
    return service({
        url: '/linkerp/enquiry/achieveEnquiryList',
        method: 'get',
        params
    })
};

//  已完成询价单 保存
export const updateOfferBuyer = data => {
    return service({
        url: '/linkerp/enquiry/updateOfferBuyer',
        method: 'post',
        data
    })
};

//  已完成询价单 检索
export const enquiryAllList = data => {
    return service({
        url: '/linkerp/enquiry/enquiryAllList',
        method: 'post',
        data
    })
};

//  已完成询价单 检索
export const turnReplyEnquiryGroup = params => {
    return service({
        url: '/linkerp/enquiry/turnReplyEnquiryGroup',
        method: 'post',
        params
    })
};

//  币别下拉
export const currencyCode = params => {
    return service({
        url: '/linkerp/dict/currencyCode',
        method: 'get',
        params
    })
};
// 17

// 历史报价导出
export const historyOfferExport = params => {
    return service({
        url: '/linkerp/enquiry/historyOfferExport',
        method: 'post',
        params
    })
};