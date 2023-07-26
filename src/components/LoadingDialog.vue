<template>
  <div>
    <v-dialog
      v-model="isShow"
      width="500"
      persistent
    >
      <v-card v-if="isDialogLoading">
        <v-card-text class="pa-0 ">
          <v-sheet height="150" class="d-flex justify-center align-center">
          <v-progress-circular
            :size="70"
            color="primary"
            indeterminate
          ></v-progress-circular>
          </v-sheet>
        </v-card-text>
      </v-card>
      <v-card v-else>
        <v-card-title class="grey lighten-2">{{dialogTitle}}</v-card-title>
        <v-card-text>{{dialogContent}}</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="closeDialog"
          >
            關閉
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LoadingDialog',
  data: () => ({
  }),
  methods: {
    openDialog () {
      this.isShow = true
    },
    closeDialog () {
      this.isShow = false
    }
  },
  computed: {
    ...mapGetters('admin', ['isDialogLoading', 'isDialogShow', 'dialogTitle', 'dialogContent']),
    isShow: {
      get () {
        return this.isDialogShow
      },
      set (isShow) {
        this.$store.commit('admin/setDialogShow', { isShow })
      }
    }
  }
}
</script>
