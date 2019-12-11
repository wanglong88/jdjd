export function add(store, option) {
    setTimeout(() => {
        store.commit('add', option)
    }, 1000)
}