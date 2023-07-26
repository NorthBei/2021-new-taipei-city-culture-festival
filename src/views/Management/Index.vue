<template>
  <div>
    <v-app-bar color="primary" dense app>
      <v-container class="d-flex align-center">
        <v-toolbar-title>
          <v-img
            @click="goToMap"
            src="@/assets/dashboard-logo.png"
            height="40"
            max-width="250"
          ></v-img>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="signOut" color="primary" depressed>{{ $t('admin.logoutButton') }}</v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <div id="loading" v-if="isDataLoading">
          <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
        </div>
        <div v-else>
          <keep-alive include="ManagementList">
            <router-view />
          </keep-alive>
        </div>
      </v-container>
    </v-main>
    <v-footer class="d-flex justify-center" color="primary" app>
      {{ $t('admin.footer.copyright') }}
    </v-footer>
    <LoadingDialog />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import LoadingDialog from '@/components/LoadingDialog.vue'
import Router from '@/mixin/Router.vue'

export default {
  data: () => ({}),
  created () {
    this.$store.dispatch('init')
  },
  methods: {
    async signOut () {
      const isSuccess = await this.$store.dispatch('signOut')
      if (isSuccess) this.goToMap()
    }
  },
  computed: {
    ...mapGetters(['isDataLoading'])
  },
  mixins: [Router],
  components: {
    LoadingDialog
  }
}
</script>
<style lang="scss" scoped>
#loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
