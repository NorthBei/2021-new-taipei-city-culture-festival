import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueGtm from 'vue-gtm'
import VueSocialSharing from 'vue-social-sharing'
import i18n from '@/plugins/i18n'

Vue.config.productionTip = false
// Handle all Vue errors
Vue.config.errorHandler = (error) => alert(error.message)

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAP_API_KEY,
    libraries: 'geometry'
  }
})

Vue.use(VueGtm, {
  id: process.env.VUE_APP_GTM_ID,
  queryParams: {
    gtm_auth: process.env.VUE_APP_GTM_AUTH,
    gtm_preview: process.env.VUE_APP_GTM_PREVIEW,
    gtm_cookies_win: process.env.VUE_APP_GTM_COOKIES_WIX
  },
  debug: process.env.NODE_ENV === 'development',
  loadScript: true // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
})

Vue.use(VueSocialSharing)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
