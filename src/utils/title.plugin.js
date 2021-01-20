import prossesCurrency from "../store/prosses/currency.prosses"
import localizeFilter from '@/filters/localize.filter'

export default {
  install(Vue) {
    Vue.prototype.$title = function(titleKey) {
      const appName = 'CRM System';
      return `${localizeFilter(titleKey)} | ${appName}`;
    }
  }
}