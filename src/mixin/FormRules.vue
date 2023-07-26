<script>
import pattern from '@/data/pattern.js'

export default {
  data: () => ({
    rules: {}
  }),
  created () {
    this.rules = {
      required: (val) => (val || '').length > 0 || this.$t('errors.fieldRequired'),
      email: (val) => pattern.email.test(val) || this.$t('errors.emailFormatInvalid'),
      phone: (val) => pattern.phone.test(val) || this.$t('errors.phoneFormatInvalid'),
      // file預設的data type是array，但上傳之後，取得的是File Object, 裡面包含name跟size
      upload: (file) => (file.name && file.size ? true : this.$t('errors.fileRequired')),
      filesize: (file) => !file || file.size < 10000000 || this.$t('errors.fileExceed10MB'),
      textMax200: (val) => val.length <= 200 || this.$t('errors.textExceed200'),
      location: val => (val || '').length > 0 || this.$t('errors.locationRequired'),
      checked: (val) => val,
      passwordCheck: (pass1, pass2) => pass1 === pass2 || this.$t('errors.passwordMismatch')
    }
  }
}
</script>
