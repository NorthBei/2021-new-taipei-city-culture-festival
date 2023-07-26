<template>
  <v-sheet id="background" color="primary" :class="`pa-${bodyMargin} pb-${bodyMargin} pb-md-0 mb-0`">
    <v-navigation-drawer v-model="drawer" width="80vw" style="max-width: 500px" touchless temporary right app>
      <div class="d-flex flex-column h-100">
        <FilterPanel />
        <v-spacer></v-spacer>
        <WebInfo />
      </div>
    </v-navigation-drawer>
    <div id="top-left-panel" :class="`ma-${bodyMargin + 4}`">
      <v-img :width="logoWidth" :src="logoUrl" @click="reload" alt="logo" position="left center" lazy-src contain></v-img>
      <v-btn href="http://culturefestivalinntpc.tw" target="_blank" class="d-none d-md-flex mt-2" small rounded depressed>
        {{ $t('map.eventSiteButton') }}
        <v-icon right>mdi-play</v-icon>
      </v-btn>
    </div>
    <v-main id="main" color="white">
      <GmapMap id="googlemap" ref="googlemap" :center="center" :zoom="13" :options="options">
        <GmapMarker :key="sound.id" v-for="sound in soundList" :position="sound.location" :clickable="true"
          :icon="sound.icon" @click="soundSelected(sound)" />
      </GmapMap>
      <v-sheet v-if="isFirstView" id="map-welcome-info" color="primary"
        class="rounded-circle d-flex flex-column justify-center align-center">
        <div class="text-body-2 text-sm-h5 text-center">
          <div class="font-weight-black">2021新北市多元文化節</div>
          <div class="font-weight-light">Culture Festival in New Taipei City</div>
        </div>
        <v-img src="@/assets/welcome.png" alt="welcome image" :max-height="welcomeImgMaxHeight" class="my-0 my-md-3"
          contain></v-img>
        <div class="text-caption text-sm-subtitle-1 text-center">
          <div class="mb-2">{{ $t('map.welcome.subtitle') }}</div>
          <v-btn @click="start" rounded depressed>
            {{ $t('map.welcome.button') }}
            <v-icon right>mdi-play</v-icon>
          </v-btn>
        </div>
      </v-sheet>
      <div id="map-components-wrapper" v-else>
        <v-btn id="nav-btn" color="primary" class="d-block d-sm-block d-md-none" :class="`ma-${bodyMargin + 4}`"
          @click="showDrawer" x-large fab>
          <v-icon dark>mdi-menu</v-icon>
        </v-btn>
        <v-card id="panel" width="300" max-width="45vw" class="d-none d-sm-none d-md-block"
          :class="`ma-${bodyMargin + 4}`" elevation="4">
          <FilterPanel />
        </v-card>
        <div id="bottom">
          <MarqueeMsg id="message" class="d-md-none" outlined />
          <div id="upload-button">
            <div class="tooltips"></div>
            <v-tooltip v-model="isShowTooltip" :nudge-top="15" :nudge-left="15" content-class="upload-button-tooltip"
              :top="!isMobile" :left="isMobile" attach="#upload-button .tooltips">
              <template v-slot:activator="{ on, attrs }">
                <v-fab-transition>
                  <v-btn @click="goToSoundsList" v-if="!isFirstView" class="ma-3 ma-sm-3" height="100" width="100"
                    color="primary" elevation="4" fab v-bind="attrs" v-on="on">
                    <div class="d-flex flex-column justify-center align-center">
                      <v-img src="@/assets/music-icon-red.png" max-width="30px"></v-img>
                      <div
                        class="text-body-2 text-grey-darken-1 font-weight-bold d-flex flex-column align-center justify-center">
                        <div>{{ $t('map.uploadButton.text[0]') }}</div>
                        <div>{{ $t('map.uploadButton.text[1]') }}</div>
                      </div>
                    </div>
                  </v-btn>
                </v-fab-transition>
              </template>
              <div class="d-flex align-center">
                <div class="d-flex flex-column">
                  <span class="text-no-wrap">{{ $t('map.uploadButton.tooltips[0]') }}</span>
                  <span class="text-no-wrap">{{ $t('map.uploadButton.tooltips[1]') }}</span>
                </div>
                <v-btn @click="isShowTooltip = false" class="ml-3" icon x-small dark>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </div>
            </v-tooltip>
          </div>
          <div id="slides-group-wrapper" class="flex-grow-1">
            <v-slide-group id="slides-group" :show-arrows="!isMobile" center-active>
              <v-slide-item v-for="(sound, i) in recommendSounds" :key="i">
                <v-card elevation="4" @click="soundSelected(sound)" :class="{ 'ml-3': i === 0 }"
                  class="slide pa-2 ma-3 ml-0" :style="{ 'border-color': `var(--v-${sound.mood}-base)` }" width="300"
                  max-width="85vw">
                  <div class="h-100 d-flex justify-space-between align-center fill-height">
                    <div class="left d-flex flex-column">
                      <div class="d-flex align-center">
                        <v-chip class="flex-shrink-0" :color="sound.mood" dark>
                          {{ langCodeToText(sound.lang) }}
                        </v-chip>
                        <span class="name text-subtitle-2 ml-3 text-grey-darken-2">
                          {{ sound.name }}
                        </span>
                      </div>
                      <div class="mt-3 text-caption text-grey-darken-3">
                        {{ dateToText(sound.createdAt) }} | {{ sound.provider.nickname }}
                      </div>
                    </div>
                    <div class="right">
                      <v-btn class="mx-2" :color="sound.mood" depressed fab small dark>
                        <v-icon large dark>mdi-play</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </div>
        </div>
      </div>
    </v-main>
    <v-footer id="footer" color="primary" :class="`px-${bodyMargin}`" class="d-none d-sm-none d-md-flex align-center"
      padless app>
      <WebInfo />
    </v-footer>
    <v-dialog v-if="sound" id="sound-info-dialog" v-model="isShowDialog" :max-width="560" overlay-opacity="0.85"
      scrollable :fullscreen="isXS" :persistent="isXS" attach>
      <v-card class="pa-4 pa-sm-8" :class="isXS ? 'rounded-0' : 'rounded-xl'">
        <v-card-title class="pa-0">
          <v-toolbar class="d-sm-none" :color="sound.mood" dark>
            <v-toolbar-title>{{ sound.storyTitle }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="cloaseDialog">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <Player ref="soundplayer" class="w-100" :sound="sound" :key="sound.id" />
        </v-card-title>
        <v-tabs v-model="currentItem" class="flex-grow-0" :color="sound.mood" :slider-color="sound.mood" grow>
          <v-tab>{{ $t('map.sound.intro') }}</v-tab>
          <v-tab>{{ $t('map.sound.lyrics') }}</v-tab>
        </v-tabs>
        <v-card-text class="pa-3 pt-0 pa-sm-0 rounded-0">
          <v-tabs-items v-model="currentItem">
            <v-tab-item>
              <div class="my-4 d-flex align-center">
                <v-avatar size="70" :color="sound.mood" class="mr-3">
                  <img v-if="sound.provider.avatar" :src="sound.provider.avatar" alt="author avatar" />
                  <img v-else src="@/assets/avatar.png" alt="author avatar" />
                </v-avatar>
                <div>
                  <div class="d-flex align-center mb-1">
                    <span class="mr-3 text-subtitle-1 font-weight-bold">
                      {{ sound.storyTitle }}
                    </span>
                  </div>
                  <div class="d-flex align-center">
                    <v-chip :color="sound.mood" dark>{{ moodCodeToText(sound.mood) }}</v-chip>
                    <span class="ml-3">
                      {{ ageCodeToText(sound.provider.age) }} |
                      <a v-if="sound.provider.website" :href="sound.provider.website" :class="`${sound.mood}--text`"
                        class="font-weight-bold text-decoration-underline" target="_blank">
                        {{ sound.provider.nickname }}
                      </a>
                      <span v-else>{{ sound.provider.nickname }}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <span class="d-inline-block mb-2 font-weight-bold">
                  {{ $t('map.sound.name') }}
                </span>
                ｜{{ sound.name }}
                <br />
                <span class="d-inline-block mb-2 font-weight-bold">
                  {{ $t('map.sound.lang') }}
                </span>
                ｜{{ langCodeToText(sound.lang) }}
                <br />
                <span class="d-inline-block mb-2 font-weight-bold">
                  {{ $t('map.sound.location') }}
                </span>
                ｜
                <span>{{ areaCodeToText(sound.area.type, sound.area.code) }}</span>
                <br />
                <span class="d-inline-block font-weight-bold">{{ $t('map.sound.story') }}</span>
                ｜
                <br />
                <br />
                <pre class="text-pre-wrap">{{ sound.storyContent }}</pre>
              </div>
            </v-tab-item>
            <v-tab-item>
              <h6 class="d-inline-block my-4 text-h6 font-weight-bold">{{ sound.name }}</h6>
              <pre class="text-pre-wrap">{{ sound.lyrics }}
              </pre>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>
<script>
import { mapGetters } from 'vuex'
import FilterPanel from '@/components/FilterPanel.vue'
import WebInfo from '@/components/WebInfo.vue'
import MarqueeMsg from '@/components/MarqueeMsg.vue'
import Player from '@/components/Player.vue'
import Router from '@/mixin/Router.vue'
import SoundInfoTransform from '@/mixin/SoundInfoTransform.vue'
import { gmapApi } from 'vue2-google-maps'
import tracker from '@/analytics'
import styles from '@/map/style.json'
import { Yonghe } from '@/map/center.json'
import recommends from '@/map/recommends.json'
import logo1 from '@/assets/logo-1.png'
import logo2 from '@/assets/logo-2.png'

const MAP_OPTIONS = {
  zoomControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
  disableDefaultUi: true,
  gestureHandling: 'greedy',
  // styles from here: https://snazzymaps.com/style/8097/wy
  styles
}

export default {
  data: () => ({
    center: Yonghe,
    sound: null,
    currentItem: 0,
    isShowDialog: false,
    isShowTooltip: true,
    options: MAP_OPTIONS
  }),
  watch: {
    isShowDialog (isShowDialog) {
      // 如果dialog關掉，0.5秒之後就把音檔刪除，然後把網址上的sound id移除掉
      if (isShowDialog) return
      this.recoverySoundUrl()
      // 將dialog的tab恢復選擇成第一個預設的tab
      this.currentItem = 0
      setTimeout(() => {
        this.sound = null
      }, 500)
    }
  },
  created () {
    this.$store.dispatch('map/getSounds').then(() => {
      const soundId = this.$route.params.id
      if (!soundId) return
      const sound = this.sounds.find((sound) => sound.id === soundId)
      if (sound) this.soundSelected(sound)
    })
  },
  methods: {
    reload () {
      window.location.reload()
    },
    start () {
      this.$store.commit('map/isFirstView', false)
    },
    async soundSelected (sound) {
      this.sound = sound
      this.replaceSoundUrl(sound.id)
      await this.$refs.googlemap.$mapPromise.then((map) => {
        map.panTo(sound.location)
      })
      this.openDialog()
      tracker.soundView(sound)
    },
    showDrawer () {
      this.drawer = true
    },
    openDialog () {
      this.isShowDialog = true
    },
    cloaseDialog () {
      this.isShowDialog = false
    }
  },
  computed: {
    ...mapGetters('map', ['isFirstView', 'isDrawerShow', 'sounds']),
    google: gmapApi,
    drawer: {
      get () {
        return this.isDrawerShow
      },
      set (val) {
        this.$store.commit('map/isDrawerShow', val)
      }
    },
    soundList () {
      if (!this.google) return []
      const sounds = this.sounds.map((sound) => {
        sound.icon = {
          path: this.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: this.$vuetify.theme.themes.light[sound.mood],
          strokeColor: this.$vuetify.theme.themes.light[sound.mood],
          fillOpacity: 1,
          strokeWeight: 1
        }
        return sound
      })
      return sounds
    },
    recommendSounds () {
      return this.sounds
        .filter((sound) => recommends.includes(sound.id))
        .sort((sound1, sound2) => {
          // 按照recommends的item順序排序
          return recommends.indexOf(sound1.id) - recommends.indexOf(sound2.id)
        })
    },
    isXS () {
      return this.$vuetify.breakpoint.xs
    },
    isMobile () {
      return this.$vuetify.breakpoint.mobile
    },
    logoUrl () {
      return this.isFirstView ? logo1 : logo2
    },
    logoWidth () {
      return this.$vuetify.breakpoint.smAndDown ? 180 : 250
    },
    welcomeImgMaxHeight () {
      return this.isXS ? '25vmin' : '30vmin'
    },
    bodyMargin () {
      // 手機3，其他6
      return this.$vuetify.breakpoint.smAndDown ? 3 : 6
    }
  },
  mixins: [Router, SoundInfoTransform],
  components: {
    FilterPanel,
    WebInfo,
    MarqueeMsg,
    Player
  }
}
</script>
<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

$topSectionMargin: 40px;
$footerHeight: 50px;
$tooltipsTriangleWidth: 10px;
$tooltipsTriangleColor: rgba(97, 97, 97, 0.9);

#background {
  padding-bottom: $footerHeight;
}

#background,
#main,
#googlemap {
  height: 100%;
  width: 100%;
  position: relative;
}

#top-left-panel {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

#map-welcome-info {
  max-height: 600px;
  max-width: 600px;
  height: 80vmin;
  width: 80vmin;
  opacity: 0.8;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
}

#map-components-wrapper {
  position: relative;

  #nav-btn {
    position: fixed;
    top: 0;
    right: 0;
  }

  #panel {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 80;
    border-radius: 15px;
    width: 350px;
    overflow: hidden;
  }

  #bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'message message'
      'upload-button slides';
    align-items: center;

    #message {
      grid-area: message;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -100%);
      max-width: 50vw;
    }

    #upload-button {
      grid-area: upload-button;
    }

    #slides-group-wrapper {
      grid-area: slides;
      position: relative;
      right: 0;
      width: 100%;
      max-width: 100%;
      min-width: 100px;

      // 為什麼要給min-width: 100px;我也不知道...，總之如果要搭配max-width: 100%; ＆ width: 100%;，讓子元素不能超過母元素寬度最大值，就要給一個寬度才會work
      .slide {
        border: 2px solid;
        border-radius: 12px;

        .left {
          overflow: hidden;

          .name {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
      }
    }
  }
}

.upload-button-tooltip.v-tooltip__content {
  // overrid vuetify算出來的結果
  top: 0 !important;
  transform: translateY(-120%);
  // override 原本tooltips的設定(pointer-events: none)
  pointer-events: auto;
  // override 原本tooltips的設定(z-index: 8)
  z-index: 2 !important;

  &:after {
    content: '';
    position: absolute;
    // 最後的10px，是手動調整的，按照UI給這個數值，三角形才會對齊按鈕
    left: 45px;
    bottom: 0;
    transform: translate(-50%, 100%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: $tooltipsTriangleWidth $tooltipsTriangleWidth 0 $tooltipsTriangleWidth;
    border-color: $tooltipsTriangleColor transparent transparent transparent;
  }
}

#footer {
  height: $footerHeight;
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  #map-components-wrapper #bottom #message {
    max-width: 88vw;
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  #map-components-wrapper {
    #bottom {
      grid-template-columns: auto;
      grid-template-rows: auto auto auto;
      grid-template-areas:
        'upload-button'
        'message'
        'slides';

      #upload-button {
        position: absolute;
        top: 0;
        right: 0;
        transform: translateY(-100%);
      }

      #message {
        position: static;
        transform: none;
        justify-self: center;
      }
    }
  }

  .upload-button-tooltip.v-tooltip__content {
    top: 50% !important;
    left: initial !important;
    transform: translate(-100%, -50%);

    &:after {
      left: initial;
      bottom: 50%;
      right: 1px;
      transform: translate(100%, 50%);
      border-width: $tooltipsTriangleWidth 0 $tooltipsTriangleWidth $tooltipsTriangleWidth;
      border-color: transparent transparent transparent $tooltipsTriangleColor;
    }
  }
}
</style>
<style>
#sound-info-dialog .v-dialog {
  height: 100%;
}
</style>
