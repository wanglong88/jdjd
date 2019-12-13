import http from './http'
export function classifyfn() {
    return http.get('/classify')
}
