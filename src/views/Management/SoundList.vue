<template>
  <div>
    <div class="d-flex justify-space-between align-center mt-1">
      <h1 class="text-h5 font-weight-bold">{{ $t('admin.manage.title') }}</h1>
      <v-btn @click="goToMap" color="primary" depressed>
        {{ $t('admin.manage.returnButton') }}
      </v-btn>
    </div>
    <v-divider class="my-3"></v-divider>
    <v-row class="my-3">
      <v-col class="order-md-last" cols="12" sm="6" md="4">
        <v-card class="sound upload mx-auto h-100" :elevation="0" min-height="300">
          <v-btn @click="create" class="btn wh-100" color="white" depressed>
            <v-icon>mdi-plus</v-icon>
            {{ $t('admin.manage.uploadButton') }}
          </v-btn>
        </v-card>
      </v-col>
      <v-col v-for="sound in sounds" :key="sound.id" cols="12" sm="6" md="4">
        <v-card class="sound mx-auto">
          <Player :sound="sound" />
          <v-divider></v-divider>
          <v-card-title>{{ sound.name }}</v-card-title>
          <v-card-subtitle>
            {{ dateToText(sound.createdAt) }} {{ $t('admin.manage.sound.uploaded') }}
          </v-card-subtitle>
          <v-card-text>
            <div>
              <span class="font-weight-bold mr-1">{{ $t('admin.manage.sound.lang') }}</span>
              <span>|</span>
              {{ langCodeToText(sound.lang) }}
            </div>
            <div>
              <span class="font-weight-bold mr-1">{{ $t('admin.manage.sound.location') }}</span>
              <span>|</span>
              {{ areaCodeToText(sound.area.type, sound.area.code) }}
              <!-- {{ sound.country }} {{ sound.city }} -->
            </div>
            <div class="mt-3">
              <v-chip :color="sound.mood" dark small>{{ moodCodeToText(sound.mood) }}</v-chip>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey" class="text--darken-3" text @click="remove(sound)">
              {{ $t('admin.manage.sound.delete') }}
            </v-btn>
            <v-btn :color="sound.mood" text @click="edit(sound)">
              {{ $t('admin.manage.sound.edit') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-fab-transition>
      <v-btn @click="create" class="mb-12 mr-6" color="primary" fixed right bottom dark fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Player from '@/components/Player.vue'
import Router from '@/mixin/Router.vue'
import SoundInfoTransform from '@/mixin/SoundInfoTransform.vue'

export default {
  name: 'SoundList',
  data: () => ({}),
  methods: {
    create () {
      this.goToSoundCreate()
    },
    edit (sound) {
      this.goToSoundEdit(sound.id)
    },
    remove (sound) {
      this.$store.dispatch('deleteUserSound', sound)
    }
  },
  computed: {
    ...mapGetters(['sounds'])
  },
  mixins: [Router, SoundInfoTransform],
  components: {
    Player
  }
}
</script>
<style lang="scss" scoped>
.sound.upload {
  border: 2px dashed grey;

  .btn {
    height: 100% !important;
  }
}
</style>
