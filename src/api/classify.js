import http from './index'
export function classifyfn() {
    return http.get('/classify')
}
