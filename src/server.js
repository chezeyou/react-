import axios from "axios";
import qs from "qs";
import Config from './utils/config'
// react 中使用antd  此处自定义
// import { message } from "antd";
// 全局设定请求类型
axios.defaults.headers.post['Content-Type'] = 'application/json'
// 创建axios默认请求
axios.defaults.baseapi = "http://localhost:3000";
// 配置超时时间
axios.defaults.timeout = 100000;
// 配置请求拦截
axios.interceptors.request.use((config) => {
    // config.setHeaders([
    // 在这里设置请求头与携带token信息
    // ]);
    return config;
});
// 添加响应拦截器
axios.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);
/**
 * get请求
 * @method get
 * @param {api, params,loading} 请求地址，请求参数，是否需要加载层
 */
let get = function (api, param, loading) {
    let params = qs.stringify(param);
    let url=Config.rootPath+api;
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: params
            })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
};
/**
 * post请求
 * @method post
 * @param {api, params} 请求地址，请求参数，是否需要加载层
 */
let post = function (api, param) {
    let params = qs.stringify(param);
    let url=Config.rootPath+api;
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
};
/**
 * 多接口的并发请求
 * @method all
 * @requests [Axios.get(api,param),Axios.post(api,param)]请求地址，请求参数，是否需要加载层
 */
let all = function (requests = []) {
    // 使用 axios 的 all 方法
    return new Promise((resolve, reject) => {
        axios.all(requests).then(resultArr => {
            // 对结果做特殊化处理，此处是对返回接口 code 在一定范围内作信息弹框
            for (let result of resultArr) {
                let code = result.code
                if (code === -1) {
                    alert(result.msg)
                }
            }
            //  返回每个方法返回的接口数据
            resolve(resultArr)
        }).catch(error => {
            // 异常处理
            reject(error);
        });
    });
};
export default {
    get,post,all
};