<script>
import dateformat from 'dateformat'
import LANGUAGES from '@/data/languages.json'
import MOODS from '@/data/moods.json'
import AGE_LIST from '@/data/ageList.json'

export default {
  methods: {
    langCodeToText ({ code, value }) {
      if (code === 'others') return value
      const lang = LANGUAGES.find(lang => lang.value === code)
      return lang ? this.$t(`dataTransform.langs.${lang.value}`) : ''
    },
    moodCodeToText (moodCode) {
      const mood = MOODS.find(mood => mood.value === moodCode)
      return mood ? this.$t(`dataTransform.moods.${mood.value}`) : ''
    },
    ageCodeToText (ageCode) {
      const age = AGE_LIST.find(age => age.value === ageCode)
      return age ? this.$t(`dataTransform.ages.${age.value}`) : ''
    },
    areaCodeToText (areaType, areaCode) {
      const type = this.$t(`dataTransform.areas.types.${areaType}`)
      const name = this.$t(`dataTransform.areas.list.${areaCode}`)
      // type是臺灣，就是顯示 e.g. 臺灣 台北市，type是其他國家 就只顯示name
      return areaType === 'others' ? `${name}` : `${type} ${name}`
    },
    dateToText (timestamp, format = 'yyyy-mm-dd') {
      if (!timestamp) return ''
      return dateformat(timestamp.toDate(), format)
    },
    getSharingUrl (soundId) {
      return `https://2021-new-taipei-city-culture-festival.netlify.app/#/sound/${soundId}`
    }
  }
}
</script>
