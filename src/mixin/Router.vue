<script>
export default {
  methods: {
    goToMap () {
      this.$router.push({ name: 'Map' })
    },
    goToSoundCreate () {
      this.$router.push({ name: 'ManagementCreate' })
    },
    goToSoundEdit (id) {
      this.$router.push({ name: 'ManagementEdit', params: { id } })
    },
    goToSoundsList () {
      this.$router.push({ name: 'ManagementList' })
    },
    replaceSoundUrl (soundId) {
      location.href = `/#/sound/${soundId}`
    },
    recoverySoundUrl () {
      location.href = '/#/'
    }
  }
}
</script>
