<template>
  <div>
    <v-sheet class="py-2 d-flex justify-center align-center" color="primary">
      <v-img src="@/assets/music-icon-blue.png" max-width="35px" width="35" class="mr-3"></v-img>
      <span class="font-weight-black">{{ $t('map.filterPanel.title') }}</span>
    </v-sheet>
    <MarqueeMsg class="mt-2 d-none d-md-block" />
    <v-list id="panel-list" flat dense>
      <v-list-group sub-group>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="text-grey-darken-1">
              {{ $t('map.filterPanel.moods.title') }}
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item class="list-item" @click="removeFilter('mood')">
          <v-list-item-icon>
            <v-icon>mdi-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-grey-darken-2">
              {{ $t('map.filterPanel.moods.list.all') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          class="list-item"
          @click="changeFilter('mood', mood.value)"
          v-for="mood in moods"
          :key="mood.value"
        >
          <v-list-item-icon>
            <v-icon :color="mood.value">mdi-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-grey-darken-2">
              {{ $t(`map.filterPanel.moods.list.${mood.value}`) }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-group sub-group>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="text-grey-darken-1">
              {{ $t('map.filterPanel.langs.title') }}
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item class="list-item" @click="removeFilter('lang')">
          <v-list-item-content>
            <v-list-item-title class="text-grey-darken-2">
              {{ $t('map.filterPanel.langs.list.all') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          class="list-item"
          @click="changeFilter('lang', lang.value)"
          v-for="lang in languages"
          :key="lang.value"
        >
          <v-list-item-content>
            <v-list-item-title class="text-grey-darken-2">
              {{ $t(`map.filterPanel.langs.list.${lang.value}`) }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-group sub-group>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="text-grey-darken-1">
              {{ $t('map.filterPanel.areas.title') }}
            </v-list-item-title>
          </v-list-item-content>
        </template>
        <div class="text-caption ml-4 text-grey-darken-2">
          {{ $t('map.filterPanel.areas.content') }}
        </div>
        <div id="slider" class="text-grey-darken-1">
          <v-slider
            v-model="range"
            :tick-labels="countries"
            class="mx-3"
            color="primary"
            track-color="white"
            tick-size="0"
            step="1"
            :max="countries.length - 1"
          ></v-slider>
        </div>
      </v-list-group>
      <v-list-item>
        <v-list-item-icon>
          <v-icon size="16" class="ml-3">mdi-translate</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-grey-darken-1 d-flex align-center justify-end">
            <span>中文</span>
            <v-switch
              v-model="language"
              false-value="tw"
              true-value="en"
              class="ma-0 ml-3 pa-0"
              inset
              dense
              hide-details
            ></v-switch>
            <span>English</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
import MarqueeMsg from '@/components/MarqueeMsg.vue'
import tracker from '@/analytics'
import moods from '@/data/moods.json'
import { range } from '@/data/areaCodes'
import languages from '@/data/languages.json'

export default {
  name: 'FilterList',
  data: () => ({
    moods,
    countries: [],
    languages,
    range: 0
  }),
  watch: {
    range (index) {
      const area = range[index].value
      if (area === 'all') {
        this.removeFilter('area')
      } else {
        this.changeFilter('area', area)
      }
    }
  },
  created () {
    const countries = this.$t('map.filterPanel.areas.list')
    this.countries = countries
    this.range = countries.length - 1
  },
  methods: {
    changeFilter (type, val) {
      this.$store.commit('map/setFilter', { type, val })
      tracker.soundFilter(type, val)
    },
    removeFilter (type) {
      this.$store.commit('map/setFilter', { type: null, val: null })
      tracker.soundFilter(type, 'all')
    }
  },
  computed: {
    language: {
      get () {
        return this.$store.getters.language
      },
      set (locale) {
        this.$store.commit('setLanguage', locale)
        this.$i18n.locale = locale
      }
    }
  },
  components: {
    MarqueeMsg
  }
}
</script>
<style lang="scss" scoped>
.list-item {
  cursor: pointer;
}
</style>
<style>
#slider .v-slider__ticks-container .v-slider__tick .v-slider__tick-label {
  /* same as '里程數歌單' 的文字*/
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1rem;
  color: #666666;
  /* 自己加上的，覺得這樣比較好看 */
  margin-top: 5px;
}

#panel-list .v-list-group.v-list-group--active {
  background: #f2f2f2;
}
</style>
