import localizeFilter from '@/filters/localize.filter'

export default {
  install(Vue) {
    Vue.prototype.$message = function(html) {
      if (html.includes('Messages_')) {
        M.toast( { html: localizeFilter(html) } )
      } else {
        M.toast( { html } )
      }
    }

    Vue.prototype.$error = function(html) {
      if (html.includes('Messages_')) {
        M.toast( { html: `[Ошибка]: ${localizeFilter(html)}` } )
      } else {
        M.toast( { html: `[Ошибка]: ${html}` } )
      }
    }
  }
}