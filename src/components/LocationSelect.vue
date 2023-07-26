<template>
  <div>
    <v-text-field
      v-model="latlng"
      @click="openDialog"
      prepend-icon="mdi-map-marker"
      :rules="[rules.location]"
      :placeholder="$t('admin.form.fields.provider.location.placeholder')"
      readonly
      hide-details="auto"
      validate-on-blur
      dense
      flat
      solo
    ></v-text-field>
    <v-dialog v-model="dialog" width="700" max-width="100vw">
      <v-card>
        <v-card-title class="text-h6">
          {{ $t('admin.form.fields.provider.location.dialog.title') }}
        </v-card-title>
        <v-card-text class="py-0">
          <div id="center-marker">
            <img class="img" src="@/assets/google-maps-marker.png" alt="Google Map標記" />
          </div>
          <GmapMap id="googlemap" ref="mapRef" :center="center" :zoom="14" :options="options">
            <!-- <GmapMarker :position="location" /> -->
          </GmapMap>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="closeDialog">
            <!-- 取消 -->
            {{ $t('admin.form.fields.provider.location.dialog.cancelButton') }}
          </v-btn>
          <v-btn text @click="closeDialog(false)">
            <!-- 確定 -->
            {{ $t('admin.form.fields.provider.location.dialog.confirmButton') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { gmapApi } from 'vue2-google-maps'
import * as geofire from 'geofire-common'
import { isEmpty } from 'lodash'
import FormRules from '@/mixin/FormRules.vue'
import { Banqiao } from '@/map/center.json'

// refer1: https://developers.google.com/maps/documentation/javascript/examples/control-bounds-restriction
// refer2: https://developers.google.com/maps/documentation/javascript/examples/poly-containsLocation
// refer3: https://stackoverflow.com/questions/51323941/how-to-limit-marker-to-a-specific-city-in-google-map-javascript-api
const NEW_TAIPEI_BOUNDS = {
  north: 25.339296,
  south: 24.651334,
  west: 121.204635,
  east: 122.051421
}

const MAP_OPTIONS = {
  zoomControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
  disableDefaultUi: true,
  gestureHandling: 'greedy',
  restriction: {
    latLngBounds: NEW_TAIPEI_BOUNDS,
    strictBounds: true
  }
}

// 板橋(新北市政府)
const MAP_CENTER = Banqiao

export default {
  props: {
    coordinates: {
      type: Object,
      required: true
    }
  },
  model: {
    prop: 'coordinates',
    event: 'change'
  },
  data: () => ({
    center: MAP_CENTER,
    options: MAP_OPTIONS,
    dialog: false,
    location: {}
  }),
  created () {
    if (isEmpty(this.coordinates)) return
    this.center = this.coordinates
    this.location = this.coordinates
  },
  methods: {
    openDialog () {
      this.dialog = true
    },
    closeDialog (isCancel = true) {
      this.dialog = false
      if (isCancel) return
      this.$refs.mapRef.$mapPromise.then((map) => {
        const location = map.getCenter()
        const banqiao = new this.google.maps.LatLng(MAP_CENTER)
        const distance = this.google.maps.geometry.spherical.computeDistanceBetween(
          banqiao,
          location
        )
        const lat = location.lat()
        const lng = location.lng()
        this.location = {
          lat,
          lng,
          distance: parseInt(distance),
          geohash: geofire.geohashForLocation([lat, lng])
        }
        this.$emit('change', this.location)
      })
    }
  },
  mixins: [FormRules],
  computed: {
    google: gmapApi,
    latlng () {
      return isEmpty(this.location) ? '' : `${this.location.lat}, ${this.location.lng}`
    }
  }
}
</script>
<style lang="scss" scoped>
#googlemap {
  min-height: 400px;
  height: 70vh;
}

#center-marker {
  height: 0;
  width: 30px;
  // pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  .img {
    // image refer: https://www.google.com/search?q=map%20marker%20image&tbm=isch&tbs=ic:trans&hl=zh-TW&sa=X&ved=0CAIQpwVqFwoTCPjJuIiP0e8CFQAAAAAdAAAAABAJ&biw=1425&bih=732#imgrc=BTtYnjzFvtveuM
    width: inherit;
    position: absolute;
    bottom: 0;
  }
}
</style>
