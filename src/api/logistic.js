import service from './request'
import qs from 'qs'


//物流首页列表
export const listWithOrderType = params => {
    return service({
        url: '/linkerp/shippingOrder/listWithOrderType',
        method: 'get',
        params
    })
};