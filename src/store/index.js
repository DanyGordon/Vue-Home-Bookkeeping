import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import category from './category'
import record from './record'

import prossesCurrency from './prosses/currency.prosses'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    async fetchCurrency() {
      // const key = process.env.VUE_APP_CURRENCY_API;
      let currentDate = `${new Date().getFullYear()}` + 
      `${(new Date().getMonth() + 1).toString().padStart(2, "0")}` + 
      `${new Date().getDate().toString().padStart(2, "0")}`;
      const result = await fetch(
        `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${currentDate}&json`
      );
      let data = await result.json();
      return prossesCurrency(data);
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, info, category, record
  }
})