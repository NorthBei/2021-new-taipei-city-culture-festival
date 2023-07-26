import Vue from 'vue'
import Vuex from 'vuex'
import map from '@/store/modules/map'
import admin from '@/store/modules/admin'
import firebase from '@/firebase'
import storage from 'local-storage'
import i18n from '@/plugins/i18n'

Vue.use(Vuex)

const LANG = 'language'
const language = storage.get(LANG) || process.env.VUE_APP_I18N_LOCALE
i18n.locale = language

export default new Vuex.Store({
  state: {
    language,
    isDataLoading: false,
    user: null,
    sounds: []
  },
  mutations: {
    setLanguage (state, language) {
      state.language = language
      storage.set(LANG, language)
    },
    isDataLoading (state, isDataLoading) {
      state.isDataLoading = isDataLoading
    },
    setUser (state, user) {
      state.user = user
    },
    setSounds (state, sounds) {
      state.sounds = sounds
    },
    setSound (state, newSound) {
      for (const [i, sound] of state.sounds.entries()) {
        if (sound.id === newSound.id) {
          state.sounds[i] = newSound
          break
        }
      }
    },
    addSound (state, sound) {
      state.sounds.push(sound)
    }
  },
  actions: {
    async init ({ commit, state }) {
      commit('isDataLoading', true)
      if (state.user) {
        await this.dispatch('getUserSounds')
        commit('isDataLoading', false)
        return
      }
      firebase.auth.onAuthStateChanged(async user => {
        commit('setUser', user)
        if (user) await this.dispatch('getUserSounds')
        commit('isDataLoading', false)
      })
    },
    async addUserSound ({ commit, getters }, { sound, file }) {
      commit('admin/setDialogLoading')
      const user = getters.user
      try {
        if (!user) return false
        sound.provider.uid = user.uid
        const soundObj = await firebase.addUserSound(sound, file)
        console.log(soundObj)
        commit('addSound', soundObj)
        commit('admin/setDialogShow', { isShow: false })
        return true
      } catch (error) {
        commit('admin/setDialogShow', { title: '抱歉QQ，發生了一些問題', content: `[${error.code}]: ${error.message}` })
        // alert(`[${error.code}]: ${error.message}`)
      }
      return false
    },
    async getUserSounds ({ commit, getters }) {
      console.log('start loading')
      const user = getters.user
      try {
        if (!user) return false
        const sounds = await firebase.getUserSounds(user.uid)
        commit('setSounds', sounds)
        return true
      } catch (error) {
        console.log(error.code, error.message)
        alert(`[${error.code}]: ${error.message}`)
      }
      console.log('end loading')
      return false
    },
    async updateUserSound ({ commit, getters, state }, { sound, file }) {
      commit('admin/setDialogLoading')
      const orginSound = getters.getSoundById(sound.id)
      const isFileUpdated = !(orginSound.file.name === sound.file.name)
      try {
        const newSound = await firebase.updateUserSound(sound, file, isFileUpdated, orginSound.file.name)
        commit('setSound', newSound)
        commit('map/setSound', newSound)
        commit('admin/setDialogShow', { isShow: false })
        return true
      } catch (error) {
        commit('admin/setDialogShow', { title: '抱歉QQ，發生了一些問題', content: `[${error.code}]: ${error.message}` })
        // alert(`[${error.code}]: ${error.message}`)
      }
      console.log('end loading')
      return false
    },
    async deleteUserSound ({ commit, state }, sound) {
      commit('admin/setDialogLoading')
      try {
        const soundId = sound.id
        await firebase.deleteUserSound(sound)
        const sounds = state.sounds.filter((sound) => sound.id !== soundId)
        commit('setSounds', sounds)
        commit('admin/setDialogShow', { isShow: false })
        return true
      } catch (error) {
        commit('admin/setDialogShow', { title: '抱歉QQ，發生了一些問題', content: `[${error.code}]: ${error.message}` })
        // alert(`[${error.code}]: ${error.message}`)
      }
      return false
    },
    async loginByEmail ({ commit }, { email, password }) {
      try {
        const user = await firebase.loginByEmail(email, password)
        commit('setUser', user)
        return true
      } catch (error) {
        console.log(error.code, error.message)
        alert(`[${error.code}]: ${error.message}`)
        return false
      }
    },
    async loginByFacebook ({ commit, state }) {
      try {
        await firebase.loginByFacebook()
        return true
      } catch (error) {
        alert(`[${error.code}]: ${error.message}`)
        return false
      }
    },
    async getUserAfterFacebookRedirect ({ commit, state }) {
      try {
        const user = await firebase.getUserAfterFacebookRedirect()
        if (user) commit('setUser', user)
        return !!user
      } catch (error) {
        alert(`[${error.code}]: ${error.message}`)
        return false
      }
    },
    async register ({ commit, state }, { email, password }) {
      try {
        const user = await firebase.register(email, password)
        commit('setUser', user)
        return true
      } catch (error) {
        alert(`[${error.code}]: ${error.message}`)
        return false
      }
    },
    async signOut ({ commit, state }) {
      try {
        await firebase.signOut()
        commit('setUser', null)
        return true
      } catch (error) {
        alert(`[${error.code}]: ${error.message}`)
        return false
      }
    }
  },
  modules: {
    map,
    admin
  },
  getters: {
    language: state => state.language,
    isDataLoading: state => state.isDataLoading,
    user: state => state.user ? state.user : firebase.auth.currentUser,
    sounds: state => state.sounds,
    getSoundById: (state) => (id) => {
      return state.sounds.find(sound => sound.id === id)
    }
  }
})
