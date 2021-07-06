/**
 *@Author    : fengjinqi
 *@Time      : 2021/7/2 5:41 下午
 *@Email     : 1218525402@qq.com
 *@File      : base.js
 *@Software  : WebStorm
 */

import axios from 'axios'

const ERR_OK = 0
const baseURL = process.env.NODE_ENV === 'production' ? 'http://ustbhuangyi.com/music-next/' : '/'

axios.defaults.baseURL = baseURL

export function get(url, params) {
    return axios.get(url, {
        params
    }).then((res) => {
        const serverData = res.data
        if (serverData.code === ERR_OK) {
            return serverData.result
        }
    }).catch((e) => {
        console.log(e)
    })
}
