<template>
  <v-sheet color="primary" class="wh-100" :class="`pa-${bodyMargin} mb-0`">
    <v-sheet id="login-view" class="wh-100" color="white">
      <v-btn
        @click="goToMap"
        class="ma-3"
        color="primary"
        rounded
        depressed
        dark
        top
        left
      >
        <v-icon>mdi-chevron-left</v-icon>
        {{ $t('login.backButton') }}
      </v-btn>
      <v-row class="d-flex justify-center">
        <v-col
          class="d-flex flex-column justify-center align-center"
          cols="12"
          sm="8"
          md="6"
        >
          <v-img src="@/assets/logo-2.png" max-width="280"></v-img>
          <div class="d-flex justify-center">
            <v-btn
              @click="showAboutEventInfo"
              class="my-3 mx-2"
              color="primary"
              rounded
              depressed
              dark
            >
              {{ $t('login.dialog.event.activeButton') }}
            </v-btn>
            <v-btn
              @click="showLotteryRule"
              class="my-3 mx-2"
              color="primary"
              rounded
              depressed
              dark
            >
              {{ $t('login.dialog.lottery.activeButton') }}
            </v-btn>
          </div>
          <v-sheet class="wh-100" max-width="350">
            <v-tabs class="px-4 px-sm-0" grow>
              <v-tab>{{ $t('login.form.login.title') }}</v-tab>
              <v-tab>{{ $t('login.form.register.title') }}</v-tab>
              <v-tab-item>
                <v-form ref="loginForm">
                  <section class="section">
                    <v-subheader class="name pl-0">{{ $t('login.form.login.email') }}</v-subheader>
                    <v-text-field
                      class="field"
                      v-model="login.email"
                      :rules="[rules.required, rules.email]"
                      name="email"
                      hide-details="auto"
                      validate-on-blur
                      filled
                      dense
                      flat
                      solo
                    ></v-text-field>
                  </section>
                  <section class="section">
                    <v-subheader class="name pl-0">{{ $t('login.form.login.password') }}</v-subheader>
                    <v-text-field
                      class="field"
                      v-model="login.password"
                      :rules="[rules.required]"
                      name="password"
                      type="password"
                      hide-details="auto"
                      validate-on-blur
                      filled
                      dense
                      flat
                      solo
                    ></v-text-field>
                  </section>
                  <v-btn
                    @click="loginByEmail"
                    :loading="login.isLoading"
                    class="my-6 font-weight-bold"
                    color="primary"
                    depressed
                    block
                    >{{ $t('login.form.login.button') }}</v-btn
                  >
                </v-form>
                <v-divider></v-divider>
                <v-btn
                  @click="loginByFacebook"
                  :loading="isFacebookLoginLoading"
                  class="my-6 font-weight-bold"
                  color="#0071bc"
                  dark
                  depressed
                  block
                  >{{ $t('login.form.login.facebookButton') }}</v-btn
                >
              </v-tab-item>
              <v-tab-item>
                <v-form ref="registerForm">
                  <section class="section">
                    <v-subheader class="name pl-0">
                      {{ $t('login.form.register.email') }}
                    </v-subheader>
                    <v-text-field
                      class="field"
                      v-model="register.email"
                      :rules="[rules.required, rules.email]"
                      hide-details="auto"
                      validate-on-blur
                      filled
                      dense
                      flat
                      solo
                    ></v-text-field>
                  </section>
                  <section class="section">
                    <v-subheader class="name pl-0">
                      {{ $t('login.form.register.password') }}
                    </v-subheader>
                    <v-text-field
                      class="field"
                      v-model="register.password"
                      :rules="[rules.required]"
                      type="password"
                      hide-details="auto"
                      filled
                      dense
                      flat
                      solo
                    ></v-text-field>
                  </section>
                  <section class="section">
                    <v-subheader class="name pl-0">
                      {{ $t('login.form.register.checkpassword') }}
                    </v-subheader>
                    <v-text-field
                      class="field"
                      v-model="register.passwordCheck"
                      :rules="[rules.required, rules.passwordCheck.bind(this, register.password, register.passwordCheck)]"
                      type="password"
                      hide-details="auto"
                      filled
                      dense
                      flat
                      solo
                    ></v-text-field>
                  </section>
                  <v-btn
                    @click="registerByEmail"
                    :loading="register.isLoading"
                    class="my-6 text-grey-darken-1 font-weight-bold"
                    color="primary"
                    depressed
                    block
                    >{{ $t('login.form.register.button') }}</v-btn
                  >
                </v-form>
              </v-tab-item>
            </v-tabs>
          </v-sheet>
        </v-col>
      </v-row>
    </v-sheet>
    <AboutEventDialog ref="aboutEventDialog"/>
    <LotteryRulesDialog ref="lotteryRulesDialog"/>
  </v-sheet>
</template>
<script>
import LotteryRulesDialog from '@/components/LotteryRulesDialog.vue'
import AboutEventDialog from '@/components/AboutEventDialog.vue'
import Router from '@/mixin/Router.vue'
import FormRules from '@/mixin/FormRules.vue'

export default {
  name: 'Login',
  data: () => ({
    isFacebookLoginLoading: false,
    login: {
      isLoading: false,
      email: '',
      password: ''
    },
    register: {
      isLoading: false,
      email: '',
      password: '',
      passwordCheck: ''
    }
  }),
  created () {
    this.$store.dispatch('getUserAfterFacebookRedirect').then((isGetUser) => {
      if (isGetUser) this.goToSoundsList()
    })
  },
  methods: {
    showAboutEventInfo () {
      this.$refs.aboutEventDialog.openDialog()
    },
    showLotteryRule () {
      this.$refs.lotteryRulesDialog.openDialog()
    },
    async loginByEmail () {
      if (!this.$refs.loginForm.validate()) return
      this.login.isLoading = true
      const isSuccess = await this.$store.dispatch('loginByEmail', this.login)
      this.login.isLoading = false
      if (isSuccess) this.goToSoundsList()
    },
    async loginByFacebook () {
      this.isFacebookLoginLoading = true
      const isSuccess = await this.$store.dispatch('loginByFacebook')
      this.isFacebookLoginLoading = false
      if (isSuccess) this.goToSoundsList()
    },
    async registerByEmail () {
      if (!this.$refs.registerForm.validate()) return
      this.register.isLoading = true
      const isSuccess = await this.$store.dispatch('register', this.register)
      this.register.isLoading = false
      if (isSuccess) this.goToSoundsList()
    }
  },
  computed: {
    bodyMargin () {
      // 手機3，其他6
      return this.$vuetify.breakpoint.smAndDown ? 3 : 6
    }
  },
  mixins: [Router, FormRules],
  components: {
    LotteryRulesDialog,
    AboutEventDialog
  }
}
</script>
<style lang="scss" scoped>
</style>
<style>
.section .field .v-input__slot {
  background: #f2f2f2 !important;
}
</style>
