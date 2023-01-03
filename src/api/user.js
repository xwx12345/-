import request from '../utils/request.js'

export function UserAdd(data) {
    let param = new URLSearchParams(data);
    console.log('paras', param);
    console.log('data', data);

    return request({
        url: '/addUser',
        method: 'POST',
        data: param
    })
}
export function createCourse(data) {
    let param = new URLSearchParams(data);
    console.log('paras', param);
    console.log('data', data);

    return request({
        url: '/createCourse',
        method: 'POST',
        data: param
    })
}
export function CourseAddStudent(data) {
    let param = new URLSearchParams(data);
    console.log('paras', param);
    console.log('data', data);

    return request({
        url: '/courseAddStudents',
        method: 'POST',
        data: param
    })
}