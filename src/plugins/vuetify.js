import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import zhHant from 'vuetify/lib/locale/zh-Hant'
import moods from '@/data/moods.json'

const moodColors = moods.reduce((obj, mood) => {
  obj[mood.value] = mood.color
  return obj
}, {})

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#f2c465',
        secondary: '#d56b64',
        accent: '#f2f2f2',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        grey: '#f2f2f2',
        ...moodColors
      }
    }
  },
  lang: {
    locales: { zhHant },
    current: 'zhHant'
  }
})
