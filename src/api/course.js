import request from '../utils/request.js'

export function changeCourseInfo(data) {
    let param = new URLSearchParams(data);
    console.log('paras', param);
    console.log('data', data);

    return request({
        url: '/changeCourseInfo',
        method: 'POST',
        data: param
    })
}
export function getCourses() {
    return request({
        url:'/getCourses',
        method:'GET'
    })
}
export function getProjectList(data) {
    let param = new URLSearchParams(data);
    console.log('paras', param);
    console.log('data', data);

    return request({
        url: '/getProjectList',
        method: 'POST',
        data: param
    })
}