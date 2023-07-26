<template>
  <div>
    <v-btn
      id="marquee"
      class="d-flex"
      color="white"
      :elevation="elevation"
      :outlined="outlined"
      rounded
      dense
    >
      <v-img
        src="@/assets/marquee-icon.png"
        max-width="65px"
        max-height="30px"
        class="mr-2"
        contain
      ></v-img>
      <span class="flex-grow-1 text-grey-darken-1 d-flex align-center">
        <marquee scrollamount="3">
          {{ $t('map.filterPanel.marquee', { soundsCount, distanceInKM }) }}
          <!-- 我們已經收集到{{soundsCount}}首母語歌。母語歌從各地遠道而來，總飛行里程為{{distanceInKM}}公里。 -->
        </marquee>
      </span>
    </v-btn>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MarqueeMessage',
  props: {
    outlined: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters('map', ['soundsDistanceInM', 'soundsCount']),
    distanceInKM () {
      return (this.soundsDistanceInM / 1000).toFixed(1)
    },
    elevation () {
      return this.outlined ? 4 : 0
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";

#marquee {
  border: 2px solid var(--v-primary-base);
  width: 100%;
  background: white;
  pointer-events: none;
}
</style>
<style>
#marquee .v-btn__content {
  max-width: 100%;
}
</style>
