import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    prroducts: []
  },
  mutations: {
    storeProducts(state, resultArr) {
      state.products = [].concat.apply([], resultArr)
    },
    
  },
  actions: {
    fetchProducts({commit}) {
      Vue.http.get('https://madagascar-test.firebaseio.com/All_Products.json')
        .then(response => {
          return response.json()
        }).then(data => {
           const resultArr = Object.values(data)
            .map((el) => Object.values(el))
           commit('storeProducts',resultArr)
        })
        
    }
  },
  getters: {

  }
})