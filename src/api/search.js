
import http from './index'
export function searchfn() {
    return http.get('/search')
}