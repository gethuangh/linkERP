import service from './request'
import qs from 'qs'

//
// export const listWithOrderType = params => {
//     return service({
//         url: '/linkerp/shippingOrder/listWithOrderType',
//         method: 'get',
//         params
//     })
// };

//   登录
export const login = data => {
    return service({
        url: '/linkerp/account/login',
        method: 'post',
        data
    })
};