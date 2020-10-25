export default {
    namespaced: true,
    state: {
        feeds: [],
    },
    mutations: {
        saveFeeds(state, payload) {
            console.log(`mutation state   ----- ${state}`)
            console.log(`mutation payload   ----- ${payload}`)
            state.feeds.push(payload)
        }
    },
    actions: {
        uploadFeed({commit}, payload) {
            console.log(` actions  -----   ${payload}`)
            console.log(typeof payload)
            commit('saveFeeds', payload)
        }
    },
    getters: {
        getFeeds: (state) => (state.feeds)
    }
}