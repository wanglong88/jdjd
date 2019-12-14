
import http from './http'
export function searchfn() {
    return http.get('/search')
}