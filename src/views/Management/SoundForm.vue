<template>
  <div>
    <div class="d-flex justify-space-between align-center mt-1">
      <h1 class="text-h5 font-weight-bold" v-if="isEdit">{{ $t('admin.form.title.edit') }}</h1>
      <h1 class="text-h5 font-weight-bold" v-else>{{ $t('admin.form.title.create') }}</h1>
      <v-btn @click="goToSoundsList" color="primary" depressed>
        {{ $t('admin.form.returnButton') }}
      </v-btn>
    </div>
    <v-divider class="my-3"></v-divider>
    <v-row class="d-flex flex-column flex-sm-column flex-md-row">
      <v-col class="order-md-2">
        <v-alert id="alert" class="rounded-xl">
          <div class="d-flex align-center">
            <v-img max-width="50" src="@/assets/alert-cat.png" contain></v-img>
            <span class="ml-2 font-weight-bold">{{ $t('admin.form.tooltips.title') }}</span>
          </div>
          <v-expansion-panels color="red" flat accordion>
            <v-expansion-panel class="expanel text-grey-darken-1 text-body-2">
              <v-expansion-panel-header class="px-1 py-0" expand-icon="mdi-menu-down">
                <v-subheader class="pa-0 font-weight-bold">
                  {{ $t('admin.form.tooltips.sec1.title') }}
                </v-subheader>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ol>
                  <li>{{ $t('admin.form.tooltips.sec1.content.1') }}</li>
                  <li>{{ $t('admin.form.tooltips.sec1.content.2') }}</li>
                  <li>{{ $t('admin.form.tooltips.sec1.content.3') }}</li>
                  <li>{{ $t('admin.form.tooltips.sec1.content.4') }}</li>
                </ol>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel class="expanel text-grey-darken-1 text-body-2">
              <v-expansion-panel-header class="px-1 py-0" expand-icon="mdi-menu-down">
                <v-subheader class="pa-0 font-weight-bold">
                  {{ $t('admin.form.tooltips.sec2.title') }}
                </v-subheader>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ol>
                  <li>
                    <span class="d-inline-block mt-4">
                      {{ $t('admin.form.tooltips.sec2.content.1.title') }}
                    </span>
                    <div class="my-3">
                      {{ $t('admin.form.tooltips.sec2.content.1.content') }}
                    </div>
                  </li>
                  <li>
                    <span class="d-inline-block mt-4">
                      {{ $t('admin.form.tooltips.sec2.content.2.title') }}
                    </span>
                    <div class="my-3">
                      {{ $t('admin.form.tooltips.sec2.content.2.content') }}
                    </div>
                  </li>
                  <li>
                    <span class="d-inline-block mt-4">
                      {{ $t('admin.form.tooltips.sec2.content.3.title') }}
                    </span>
                    <div class="my-3">
                      {{ $t('admin.form.tooltips.sec2.content.3.content') }}
                    </div>
                  </li>
                  <li>
                    <span class="d-inline-block mt-4">
                      {{ $t('admin.form.tooltips.sec2.content.4.title') }}
                    </span>
                    <div class="my-3">
                      {{ $t('admin.form.tooltips.sec2.content.4.content') }}
                    </div>
                  </li>
                </ol>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel class="expanel text-grey-darken-1 text-body-2">
              <v-expansion-panel-header class="px-1 py-0" expand-icon="mdi-menu-down">
                <v-subheader class="pa-0 font-weight-bold">
                  {{ $t('admin.form.tooltips.sec3.title') }}
                </v-subheader>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ol>
                  <li>
                    <span class="d-inline-block mt-4">
                      {{ $t('admin.form.tooltips.sec3.content.1.title') }}
                    </span>
                    <div class="my-3">
                      {{ $t('admin.form.tooltips.sec3.content.1.content[0]') }}
                      <a class="grey--text text--darken-4" href="http://culturefestivalinntpc.tw/">
                        {{ $t('admin.form.tooltips.sec3.content.1.content[1]') }}
                      </a>
                      {{ $t('admin.form.tooltips.sec3.content.1.content[2]') }}
                    </div>
                  </li>
                  <li>
                    <span class="d-inline-block mt-4">
                      {{ $t('admin.form.tooltips.sec3.content.2.title') }}
                    </span>
                    <div class="my-3">
                      {{ $t('admin.form.tooltips.sec3.content.2.content') }}
                    </div>
                  </li>
                </ol>
                <v-btn @click="showLotteryRules" depressed>
                  {{ $t('admin.form.tooltips.rulesInfoButton') }}
                </v-btn>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-alert>
      </v-col>
      <v-col class="order-md-1">
        <v-form ref="form" lazy-validation>
          <section class="section mb-3">
            <v-subheader class="name pl-0">
              *{{ $t('admin.form.fields.provider.nickname.title') }}
            </v-subheader>
            <v-text-field
              class="field"
              v-model="sound.provider.nickname"
              :rules="[rules.required]"
              name="nickname"
              :placeholder="$t('admin.form.fields.provider.nickname.placeholder')"
              hide-details="auto"
              validate-on-blur
              dense
              flat
              solo
            ></v-text-field>
          </section>
          <section class="section mb-3">
            <v-subheader class="name pl-0">
              *{{ $t('admin.form.fields.provider.name.title') }}
            </v-subheader>
            <v-text-field
              class="field"
              v-model="sound.provider.name"
              :rules="[rules.required]"
              name="name"
              :placeholder="$t('admin.form.fields.provider.name.placeholder')"
              hide-details="auto"
              validate-on-blur
              dense
              flat
              solo
            ></v-text-field>
          </section>
          <section class="section mb-3">
            <v-subheader class="name pl-0">
              *{{ $t('admin.form.fields.provider.phone.title') }}
            </v-subheader>
            <v-text-field
              class="field"
              v-model="sound.provider.phone"
              :rules="[rules.required, rules.phone]"
              name="phone"
              hide-details="auto"
              :placeholder="$t('admin.form.fields.provider.phone.placeholder')"
              validate-on-blur
              dense
              flat
              solo
            ></v-text-field>
          </section>
          <section class="section mb-3">
            <v-subheader class="name pl-0">
              *{{ $t('admin.form.fields.provider.email.title') }}
            </v-subheader>
            <v-text-field
              class="field"
              v-model="sound.provider.email"
              :rules="[rules.required, rules.email]"
              name="email"
              hide-details="auto"
              :placeholder="$t('admin.form.fields.provider.email.placeholder')"
              validate-on-blur
              dense
              flat
              solo
            ></v-text-field>
          </section>
          <section class="section mb-3">
            <v-subheader class="name pl-0">
              {{ $t('admin.form.fields.provider.address.title') }}
            </v-subheader>
            <v-text-field
              class="field"
              v-model="sound.provider.address"
              name="address"
              hide-details="auto"
              :placeholder="$t('admin.form.fields.provider.address.placeholder')"
              validate-on-blur
              dense
              flat
              solo
            ></v-text-field>
          </section>
          <section class="section mb-3">
            <v-subheader class="name pl-0">
              *{{ $t('admin.form.fields.provider.age.title') }}
            </v-subheader>
            <v-radio-group v-model="sound.provider.age" class="ma-0" hide-details="auto" row>
              <div class="d-flex flex-wrap">
                <v-radio
                  class="mb-3"
                  v-for="age in ageList"
                  :key="age.value"
                  :label="$t(`admin.form.fields.provider.age.list.${age.value}`)"
                  :value="age.value"
                ></v-radio>
              </div>
            </v-radio-group>
          </section>
          <section class="section mb-3">
            <v-subheader class="name pl-0">
              *{{ $t('admin.form.fields.provider.location.title') }}
            </v-subheader>
            <LocationSelect v-model="sound.location" class="field" />
          </section>
          <div class="my-2"></div>
          <section class="section mb-3">
            <v-subheader class="name pl-0">
              *{{ $t('admin.form.fields.sound.file.title') }}
            </v-subheader>
            <!-- 問題說明: Apple的錄音檔案的副檔名是m4a，而一般的m4a檔案格式是「MPEG-4音訊」但是Apple的錄音檔案格式是「Apple MPEG-4音訊」 -->
            <!-- 簡單來說就是Apple的特立獨行搞自己的檔案格式，但是相容m4a -->
            <!-- 而擴充檔案的格式是「audio/x-{file format}」所以file upload的accept要用「audio/x-m4a」，才能讓大家上傳Apple的錄音檔案 -->
            <!-- refer: https://stackoverflow.com/questions/39885749/m4a-is-considered-audio-m4a-or-audio-mp4 -->
            <v-file-input
              v-model="file"
              :rules="[rules.upload, rules.filesize]"
              accept="audio/x-m4a, audio/m4a, audio/mpeg3, audio/wav, audio/aac"
              class="field"
              prepend-icon="mdi-music"
              hide-details="auto"
              :placeholder="$t('admin.form.fields.sound.file.placeholder')"
              validate-on-blur
              dense
              flat
              solo
            ></v-file-input>
          </section>
          <div class="my-2"></div>
          <section class="section mb-3">
            <v-subheader class="name pl-0">*{{ $t('admin.form.fields.sound.name') }}</v-subheader>
            <v-text-field
              class="field"
              v-model="sound.name"
              :rules="[rules.required]"
              hide-details="auto"
              validate-on-blur
              dense
              flat
              solo
            ></v-text-field>
          </section>
          <section class="section mb-3">
            <v-subheader class="name pl-0">
              *{{ $t('admin.form.fields.sound.langs.title') }}
            </v-subheader>
            <v-row>
              <v-col>
                <v-select
                  @change="onLangChange"
                  v-model="sound.lang.code"
                  class="field"
                  :items="langs"
                  item-text="name"
                  hide-details="auto"
                  validate-on-blur
                  dense
                  flat
                  solo
                ></v-select>
              </v-col>
              <v-col v-if="isLangSelectedOthers">
                <v-text-field
                  class="field"
                  v-model="sound.lang.value"
                  :rules="[rules.required]"
                  :placeholder="$t('admin.form.fields.sound.langs.placeholder')"
                  hide-details="auto"
                  validate-on-blur
                  dense
                  flat
                  solo
                ></v-text-field>
              </v-col>
            </v-row>
          </section>
          <section class="section mb-3">
            <v-subheader class="name pl-0">
              <!-- *歌曲故事地（該歌曲的相關故事是發生在什麼地方？） -->
              *{{ $t('admin.form.fields.sound.area.title') }}
            </v-subheader>
            <v-row>
              <v-col>
                <v-select
                  @change="onAreaTypeChange"
                  v-model="sound.area.type"
                  class="field"
                  :items="areaTypes"
                  item-text="name"
                  hide-details="auto"
                  validate-on-blur
                  dense
                  flat
                  solo
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  @change="onAreaChange"
                  v-model="sound.area.code"
                  class="field"
                  :items="areaList"
                  item-text="name"
                  hide-details="auto"
                  validate-on-blur
                  dense
                  flat
                  solo
                ></v-select>
              </v-col>
            </v-row>
          </section>
          <section class="section mb-3">
            <v-subheader class="name pl-0">
              *{{ $t('admin.form.fields.sound.moods.title') }}
            </v-subheader>
            <v-radio-group v-model="sound.mood" class="ma-0" hide-details="auto" row>
              <v-radio
                v-for="mood in moodList"
                :key="mood.value"
                :label="$t(`admin.form.fields.sound.moods.list.${mood.value}`)"
                :value="mood.value"
                class="mb-2"
              ></v-radio>
            </v-radio-group>
          </section>
          <section class="section mb-3">
            <v-subheader v-model="sound.storyTitle" class="name pl-0">
              *{{ $t('admin.form.fields.sound.storyTitle.title') }}
            </v-subheader>
            <v-text-field
              class="field"
              v-model="sound.storyTitle"
              :rules="[rules.required]"
              hide-details="auto"
              :placeholder="$t('admin.form.fields.sound.storyTitle.placeholder')"
              validate-on-blur
              dense
              flat
              solo
            ></v-text-field>
          </section>
          <section class="section mb-3">
            <v-subheader class="name pl-0">
              {{ $t('admin.form.fields.sound.storyContent.title') }}
            </v-subheader>
            <v-textarea
              v-model="sound.storyContent"
              :counter="200"
              :rows="6"
              :rules="[rules.textMax200]"
              class="field rounded-sm ma-0"
              :placeholder="$t('admin.form.fields.sound.storyContent.placeholder')"
              hide-details="auto"
              validate-on-blur
              dense
              flat
              solo
            ></v-textarea>
          </section>
          <section class="section d-flex flex-column">
            <v-subheader class="name pl-0">{{ $t('admin.form.fields.sound.lyrics') }}</v-subheader>
            <v-textarea
              v-model="sound.lyrics"
              class="field rounded-sm ma-0"
              hide-details="auto"
              validate-on-blur
              dense
              flat
              solo
            ></v-textarea>
          </section>
          <section class="section mb-3">
            <v-subheader class="name pl-0">
              {{ $t('admin.form.fields.provider.website') }}
            </v-subheader>
            <v-text-field
              class="field"
              v-model="sound.provider.website"
              placeholder="https://"
              hide-details="auto"
              validate-on-blur
              dense
              flat
              solo
            ></v-text-field>
          </section>
          <section class="section" v-if="!isEdit">
            <v-checkbox
              v-model="sound.provider.agree"
              :rules="[rules.checked]"
              hide-details="auto"
              validate-on-blur
            >
              <template v-slot:label>
                <div class="d-flex align-center flex-wrap">
                  <span>{{ $t('admin.form.fields.provider.agreeText[0]') }}</span>
                  <v-btn
                    @click="showDataAuthorizationRules"
                    class="pa-0 ma-0"
                    color="primary"
                    text
                    dense
                    depressed
                  >
                    {{ $t('admin.form.fields.provider.agreeText[1]') }}
                  </v-btn>
                </div>
              </template>
            </v-checkbox>
          </section>
          <section class="my-6 d-flex justify-center">
            <v-btn
              v-if="isEdit"
              @click="submitUpdate"
              class="grey--text text--darken-4 font-weight-bold"
              color="primary"
              rounded
              depressed
            >
              {{ $t('admin.form.confirmEditButton') }}
            </v-btn>
            <v-btn
              v-else
              @click="submitAdd"
              class="grey--text text--darken-4 font-weight-bold"
              color="primary"
              rounded
              depressed
            >
              {{ $t('admin.form.confirmUploadButton') }}
            </v-btn>
          </section>
        </v-form>
      </v-col>
    </v-row>
    <LotteryRulesDialog ref="lotteryRulesDialog" />
    <DataAuthorizationRulesDialog ref="dataAuthorizationRulesDialog" />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import LocationSelect from '@/components/LocationSelect.vue'
import LotteryRulesDialog from '@/components/LotteryRulesDialog.vue'
import DataAuthorizationRulesDialog from '@/components/DataAuthorizationRulesDialog.vue'
import Router from '@/mixin/Router.vue'
import FormRules from '@/mixin/FormRules.vue'
import { cloneDeep } from 'lodash'
import { areaCategory } from '@/data/areaCodes'
import LANGUAGES from '@/data/languages.json'
import MOODS from '@/data/moods.json'
import AGE_LIST from '@/data/ageList.json'

const areaTypeCodes = Object.keys(areaCategory)
const areaCode = areaCategory[areaTypeCodes[0]][0]

export default {
  data: () => ({
    sound: {
      id: '', // 預留給firebase填空
      provider: {
        uid: '', // 預留給firebase填空
        name: '',
        nickname: '',
        avatar: '',
        phone: '',
        email: '',
        address: '',
        age: AGE_LIST[0].value,
        website: '',
        agree: false
      },
      location: {},
      file: {
        name: '', // 預留給firebase填空
        url: '' // 預留給firebase填空
      },
      name: '',
      lang: {
        code: LANGUAGES[0].value,
        value: LANGUAGES[0].value
      },
      area: {
        type: areaTypeCodes[0],
        code: areaCode,
        name: ''
      },
      mood: MOODS[0].value,
      storyTitle: '',
      storyContent: '',
      lyrics: ''
    },
    file: [],
    isEdit: false,
    ageList: AGE_LIST,
    moodList: MOODS
  }),
  watch: {
    user: {
      immediate: true,
      handler (user) {
        if (!user) return
        this.sound.provider.name = user.displayName
        this.sound.provider.nickname = user.displayName
        this.sound.provider.avatar = user.photoURL
        this.sound.provider.email = user.email
      }
    }
  },
  created () {
    // init sound.area's data
    this.onAreaTypeChange(areaTypeCodes[0])
    // init isEdit
    this.isEdit = this.$route.meta.isEdit
    if (this.isEdit) {
      const id = this.$route.params.id
      const sound = this.getSoundById(id)
      if (!sound) this.goToSoundsList()
      const soundObj = cloneDeep(sound)
      for (const key of Object.keys(this.sound)) {
        this.sound[key] = soundObj[key]
      }
      this.file = new File(['Its just stuff'], soundObj.file.name)
    }
  },
  methods: {
    ...mapActions(['addUserSound', 'updateUserSound']),
    async submitAdd () {
      if (!this.$refs.form.validate()) return
      const sound = cloneDeep(this.sound)
      this.sound.file.name = this.file.name
      const isSuccess = await this.addUserSound({
        sound,
        file: this.file
      })
      if (isSuccess) this.goToSoundsList()
    },
    async submitUpdate () {
      if (!this.$refs.form.validate()) return
      const sound = cloneDeep(this.sound)
      sound.file.name = this.file.name
      const isSuccess = await this.updateUserSound({
        sound,
        file: this.file
      })
      if (isSuccess) this.goToSoundsList()
    },
    showLotteryRules () {
      this.$refs.lotteryRulesDialog.openDialog()
    },
    showDataAuthorizationRules () {
      this.$refs.dataAuthorizationRulesDialog.openDialog()
    },
    onLangChange (langCode) {
      this.sound.lang.value = langCode === 'others' ? '' : langCode
    },
    onAreaTypeChange (areaTypeCode) {
      const areaCode = areaCategory[areaTypeCode][0]
      this.onAreaChange(areaCode)
    },
    onAreaChange (areaCode) {
      this.sound.area.code = areaCode
      this.sound.area.name = this.$t(`admin.form.fields.sound.area.list.${areaCode}`, 'tw')
    }
  },
  computed: {
    ...mapGetters(['user', 'getSoundById']),
    langs () {
      return LANGUAGES.map(lang => {
        return {
          name: this.$t(`admin.form.fields.sound.langs.list.${lang.value}`),
          value: lang.value
        }
      })
    },
    isLangSelectedOthers () {
      return this.sound.lang.code === 'others'
    },
    areaTypes () {
      return areaTypeCodes.map((areaTypeCode) => {
        return {
          name: this.$t(`admin.form.fields.sound.area.types.${areaTypeCode}`),
          value: areaTypeCode
        }
      })
    },
    areaList () {
      const areaType = this.sound.area.type
      const areas = areaCategory[areaType].map(areaCode => {
        return {
          name: this.$t(`admin.form.fields.sound.area.list.${areaCode}`),
          value: areaCode
        }
      })
      if (areaType === 'taiwan') return areas
      return areas.sort((a, b) => a.name > b.name ? 1 : -1)
    }
  },
  mixins: [Router, FormRules],
  components: {
    LocationSelect,
    LotteryRulesDialog,
    DataAuthorizationRulesDialog
  }
}
</script>
<style lang="scss" scoped>
#alert {
  background: rgba(242, 196, 101, 0.6);
}
</style>
<style>
#alert .v-expansion-panels .expanel.v-expansion-panel {
  background: transparent !important;
}
.section .field .v-input__slot {
  background: #f2f2f2 !important;
}
</style>
