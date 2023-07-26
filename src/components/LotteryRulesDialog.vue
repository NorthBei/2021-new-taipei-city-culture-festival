<template>
  <div>
    <v-dialog v-model="isDialogShow" width="500" scrollable>
      <v-card>
        <v-card-title>{{ $t('login.dialog.lottery.title') }}</v-card-title>
        <v-card-text>
          <div>
            {{ $t('login.dialog.lottery.content.desc') }}
          </div>
          <br />
          <section>
            <div>{{ $t('login.dialog.lottery.content.sec1') }}</div>
          </section>
          <section>
            <div>{{ $t('login.dialog.lottery.content.sec2.title') }}</div>
            <div class="pl-3">
              {{ $t('login.dialog.lottery.content.sec2.content') }}
            </div>
          </section>
          <section>
            <div>{{ $t('login.dialog.lottery.content.sec3.title') }}</div>
            <ul>
              <li>
                <span>{{ $t('login.dialog.lottery.content.sec3.content.1') }}</span>
              </li>
              <li>
                <span>{{ $t('login.dialog.lottery.content.sec3.content.2') }}</span>
              </li>
              <li>
                <span>{{ $t('login.dialog.lottery.content.sec3.content.3') }}</span>
              </li>
              <li>
                <span>{{ $t('login.dialog.lottery.content.sec3.content.4') }}</span>
              </li>
              <li>
                <span>{{ $t('login.dialog.lottery.content.sec3.content.5.title') }}</span>
                <div>
                  <span>{{ $t('login.dialog.lottery.content.sec3.content.5.content') }}</span>
                  <ol type="a">
                    <li>{{ $t('login.dialog.lottery.content.sec3.content.5.list[0]') }}</li>
                    <li>{{ $t('login.dialog.lottery.content.sec3.content.5.list[1]') }}</li>
                    <li>{{ $t('login.dialog.lottery.content.sec3.content.5.list[2]') }}</li>
                    <li>{{ $t('login.dialog.lottery.content.sec3.content.5.list[3]') }}</li>
                    <li>{{ $t('login.dialog.lottery.content.sec3.content.5.list[4]') }}</li>
                    <li>{{ $t('login.dialog.lottery.content.sec3.content.5.list[5]') }}</li>
                  </ol>
                </div>
              </li>
              <li>
                <span>{{ $t('login.dialog.lottery.content.sec3.content.6.title') }}</span>
                <div>
                  <span>{{ $t('login.dialog.lottery.content.sec3.content.6.content') }}</span>
                  <ol type="a">
                    <li>{{ $t('login.dialog.lottery.content.sec3.content.6.list[0]') }}</li>
                    <li>{{ $t('login.dialog.lottery.content.sec3.content.6.list[1]') }}</li>
                    <li>{{ $t('login.dialog.lottery.content.sec3.content.6.list[2]') }}</li>
                  </ol>
                </div>
              </li>
            </ul>
          </section>
          <section>
            <div>{{ $t('login.dialog.lottery.content.sec4.title') }}</div>
            <ol>
              <li>
                {{ $t('login.dialog.lottery.content.sec4.content.1-1') }}
                <a href="https://www.facebook.com/rollinginlife" target="_blank">
                  {{ $t('login.dialog.lottery.content.sec4.content.website') }}
                </a>
                {{ $t('login.dialog.lottery.content.sec4.content.1-2') }}
              </li>
              <li>
                {{ $t('login.dialog.lottery.content.sec4.content.2') }}
              </li>
              <li>
                {{ $t('login.dialog.lottery.content.sec4.content.3') }}
              </li>
              <li>
                {{ $t('login.dialog.lottery.content.sec4.content.4') }}
              </li>
            </ol>
          </section>
          <section>
            <div>{{ $t('login.dialog.lottery.content.sec5.title') }}</div>
            <ol>
              <li>
                {{ $t('login.dialog.lottery.content.sec5.content.1') }}
              </li>
              <li>
                {{ $t('login.dialog.lottery.content.sec5.content.2') }}
              </li>
              <li>
                {{ $t('login.dialog.lottery.content.sec5.content.3') }}
              </li>
              <li>
                {{ $t('login.dialog.lottery.content.sec5.content.4') }}
              </li>
              <li>
                {{ $t('login.dialog.lottery.content.sec5.content.5') }}
              </li>
              <li>
                {{ $t('login.dialog.lottery.content.sec5.content.6') }}
              </li>
            </ol>
          </section>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeDialog">
            {{ $t('login.dialog.lottery.confirmButton') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: 'LotteryRulesDialog',
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
