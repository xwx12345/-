import request from '../utils/request.js'

export function postReport(data) {
    let param = new URLSearchParams(data);
    console.log('paras', param);
    console.log('data', data);

    return request({
        url: '/postReport',
        method: 'POST',
        data: param
    })
}