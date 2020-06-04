import axios from "axios";
import Vue from 'vue'
import {
    Loading,
    Message
} from 'element-ui'

Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;

const service = axios.create({
    // baseURL: 'http://192.168.0.125:8080',  //旭阳
    // baseURL: 'http://192.168.0.199:8080',  //铭灏
    baseURL: 'http://47.113.116.202:8080', //铭灏
    timeout: 5000
});

service.interceptors.request.use(
    config => {

        Loading.service

        config.headers['Content-Type'] = 'application/json';
        // config.headers['token'] = '';

        return config;

    }, error => { //请求错误处理

        Message({
            showClose: true,
            message: '请求发生错误',
            type: 'error'
        });

        Promise.reject(error)
    });

service.interceptors.response.use(
    response => { //成功请求到数据

        Loading.service().close()



        if (response.data.code === 0) {
            return response.data
        } else {

            if (response.data.type == 'application/octet-stream') {
                Message({
                    showClose: true,
                    message: '文件',
                    type: 'warning'
                });
                return response.data
            } else {
                Message({
                    showClose: true,
                    message: response.data.code + " " + response.data.message,
                    type: 'error'
                });
            }

        }
    },
    error => { //响应错误处理

        console.log('error');
        console.log(error);
        console.log(JSON.stringify(error));

        Message({
            showClose: true,
            message: '响应异常',
            type: 'error'
        });

        return Promise.reject(error)
    }
);

export default service;