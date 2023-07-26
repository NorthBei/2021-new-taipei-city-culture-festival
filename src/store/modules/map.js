import Vue from 'vue'
import firebase from '@/firebase'
import { country } from '@/data/areaCodes'

const module = {
  namespaced: true,
  state: {
    isFirstView: true,
    isDrawerShow: false,
    sounds: [],
    filter: {
      type: null,
      val: null
    }
  },
  mutations: {
    isFirstView (state, isFirstView) {
      state.isFirstView = isFirstView
    },
    isDrawerShow (state, isDrawerShow) {
      state.isDrawerShow = isDrawerShow
    },
    setSounds (state, sounds) {
      state.sounds = sounds
    },
    setSound (state, newSound) {
      for (const [i, sound] of state.sounds.entries()) {
        if (sound.id === newSound.id) {
          Vue.set(state.sounds, i, newSound)
          // state.sounds[i] = newSound
          break
        }
      }
    },
    setFilter (state, { type, val }) {
      state.filter = { type, val }
      state.isDrawerShow = false
    }
  },
  actions: {
    async getSounds ({ commit }) {
      console.log('start loading')
      try {
        const sounds = await firebase.getMapSounds()
        commit('setSounds', sounds)
        console.log('end loading')
        return true
      } catch (error) {
        console.log(error.code, error.message)
        alert(`[${error.code}]: ${error.message}`)
      }
      console.log('end loading')
      return false
    }
  },
  getters: {
    isFirstView: state => state.isFirstView,
    isDrawerShow: state => state.isDrawerShow,
    sounds: state => {
      const { type, val } = state.filter
      if (type === null && val === null) return state.sounds
      return state.sounds.filter(sound => {
        if (type === 'mood') return sound.mood === val
        else if (type === 'lang') return sound.lang.code === val
        // 如果type是area，country[val]就是世界各國家/台灣縣市的code array
        else if (type === 'area') return country[val].includes(sound.area.code)
        else return false
      })
    },
    soundsDistanceInM: state => state.sounds.reduce((total, sound) => total + sound.location.distance, 0),
    soundsCount: state => state.sounds.length
  }
}

export default module
