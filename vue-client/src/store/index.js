import Vue from 'vue'
import Vuex from 'vuex'

import instagram from './modules/instagram.store.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        instagram
    }
})
