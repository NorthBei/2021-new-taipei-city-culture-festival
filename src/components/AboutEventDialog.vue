<template>
  <div>
    <v-dialog v-model="isDialogShow" width="500" scrollable>
      <v-card>
        <v-card-title>{{ $t('login.dialog.event.title') }}</v-card-title>
        <v-card-text>
          <div>{{ $t('login.dialog.event.content.desc1') }}</div>
          <br />
          <div>{{ $t('login.dialog.event.content.desc2-1') }}</div>
          <div>{{ $t('login.dialog.event.content.desc2-2') }}</div>
          <div>{{ $t('login.dialog.event.content.desc2-3') }}</div>
          <br />
          <div>{{ $t('login.dialog.event.content.desc3-1') }}</div>
          <div>{{ $t('login.dialog.event.content.desc3-2') }}</div>
          <br />
          <div>{{ $t('login.dialog.event.content.sec1.title') }}</div>
          <div class="my-5">{{ $t('login.dialog.event.content.sec1.content') }}</div>
          <div>{{ $t('login.dialog.event.content.sec2.title') }}</div>
          <div class="my-5">{{ $t('login.dialog.event.content.sec2.content') }}</div>
          <div>{{ $t('login.dialog.event.content.sec3.title') }}</div>
          <div class="my-5">
            {{ $t('login.dialog.event.content.sec3.content[0]') }}
            <a href="http://culturefestivalinntpc.tw/" target="_blank">
              {{ $t('login.dialog.event.content.sec3.website') }}
            </a>
            {{ $t('login.dialog.event.content.sec3.content[1]') }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeDialog">
            {{ $t('login.dialog.event.confirmButton') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: 'AboutEventDialog',
  data: () => ({
    isDialogShow: false
  }),
  methods: {
    openDialog () {
      this.isDialogShow = true
    },
    closeDialog () {
      this.isDialogShow = false
    }
  }
}
</script>
