<template>
  <div class="audio-player pa-3">
    <div class="d-flex justify-around-space align-center">
      <span v-if="wavesurfer" class="text-body-2 grey--text text--darken-4">
        {{ nowSecond | format }}
      </span>
      <div class="flex-grow-1 mx-3" ref="waveform"></div>
      <span v-if="wavesurfer" class="text-body-2 grey--text text--darken-4">
        {{ wavesurfer.getDuration() | format }}
      </span>
    </div>
    <div class="d-flex">
      <v-btn @click="playPause" :loading="isLoading" :color="sound.mood" class="white--text" height="45" width="45"
        depressed fab>
        <v-icon v-if="isPlaying" color="white" large>mdi-pause</v-icon>
        <v-icon v-else color="white" large>mdi-play</v-icon>
      </v-btn>
      <div class="d-flex flex-column justify-center ml-3">
        <div class="text-body-2 grey--text text--darken-4">{{ sound.provider.nickname }}</div>
        <div class="text-caption grey--text text--darken-2">
          {{ dateToText(sound.createdAt) }} {{ $t('admin.manage.sound.uploaded') }}
        </div>
      </div>
      <v-spacer></v-spacer>
      <ShareNetwork network="facebook" :url="getSharingUrl(sound.id)" :title="sound.storyTitle"
        :description="sound.storyContent" :quote="sound.lyrics" :hashtags="`2021新北市多元文化節,從${sound.area.name}來的母語歌`"
        style="text-decoration: none">
        <v-btn class="share-btn ma-1" :color="sound.mood" top right rounded outlined>
          {{ $t('admin.manage.sound.share') }}
          <v-icon small right>mdi-open-in-new</v-icon>
        </v-btn>
      </ShareNetwork>
    </div>
  </div>
</template>
<script>
import WaveSurfer from 'wavesurfer.js'
import SoundInfoTransform from '@/mixin/SoundInfoTransform.vue'
import tracker from '@/analytics'

export default {
  props: {
    sound: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isPlayed: false,
    isLoading: true,
    nowSecond: 0,
    wavesurfer: null
  }),
  mounted () {
    this.wavesurfer = WaveSurfer.create({
      container: this.$refs.waveform,
      waveColor: '#d1d6da',
      progressColor: this.$vuetify.theme.themes.light[this.sound.mood],
      height: 80,
      barWidth: 3,
      barMinHeight: 1,
      barRadius: 5,
      cursorWidth: 0,
      hideScrollbar: true,
      normalize: true
    })
    this.wavesurfer.load(this.sound.file.url)
    this.wavesurfer.on('ready', () => {
      this.isLoading = false
    })
    this.wavesurfer.on('audioprocess', (e) => {
      this.nowSecond = e
    })
  },
  beforeDestroy () {
    if (this.isPlayed) {
      const second = parseInt(this.nowSecond)
      tracker.soundPlay(this.sound, second)
    }
    this.wavesurfer.stop()
    this.wavesurfer.destroy()
  },
  methods: {
    playPause () {
      this.isPlayed = true
      this.wavesurfer.playPause()
    }
  },
  filters: {
    format (input) {
      if (!input) {
        return '00:00'
      }

      const minutes = Math.floor(input / 60)
      const seconds = Math.floor(input) % 60

      return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    }
  },
  computed: {
    isPlaying () {
      return this.wavesurfer ? this.wavesurfer.isPlaying() : false
    }
  },
  mixins: [SoundInfoTransform]
}
</script>
<style lang="scss" scoped>
.audio-player {
  height: 150px;

  .waveform-wrapper {
    height: 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
