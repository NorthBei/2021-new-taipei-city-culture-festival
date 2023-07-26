<template>
  <div id="webinfo">
    <v-btn
      href="http://culturefestivalinntpc.tw"
      target="_blank"
      class="website d-flex d-md-none"
      small
      rounded
      depressed
    >
      <!-- 2021新北市多元文化節活動網站 -->
      {{ $t('map.eventSiteButton') }}
      <v-icon right>mdi-play</v-icon>
    </v-btn>
    <span class="gov1 d-flex align-center">
      <span class="text-body-2 font-weight-bold mr-4">{{ $t('map.footer.organizer') }}</span>
      <v-img max-width="150px" src="@/assets/footer-logo-1.png" alt="新北市政府" contain></v-img>
    </span>
    <span class="gov2 d-flex align-center" clxxass="d-flex ml-md-8 ml-xl-12">
      <span class="text-body-2 font-weight-bold mr-4">{{ $t('map.footer.implementer') }}</span>
      <div class="d-flex flex-column flex-sm-row">
        <v-img
          max-width="150px"
          src="@/assets/footer-logo-2.png"
          alt="新北市政府 文化局"
          contain
        ></v-img>
        <span class="mx-0 mx-sm-2 my-2 my-sm-0"></span>
        <v-img
          max-width="150px"
          src="@/assets/footer-logo-3.png"
          alt="新北市政府 教育局"
          contain
        ></v-img>
      </div>
    </span>
    <div class="copyright text-body-2 text-center">{{ $t('map.footer.copyright') }}</div>
  </div>
</template>
<script>
export default {
  name: 'WebInfo',
  data: () => ({})
}
</script>
<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

#webinfo {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto 40px auto 1fr auto auto;
  grid-template-rows: auto;
  grid-template-areas: 'website gov1 . gov2 . copyright';
  align-items: center;

  .website {
    grid-area: website;
  }

  .gov1 {
    grid-area: gov1;
    justify-self: end;
  }

  .gov2 {
    grid-area: gov2;
    justify-self: start;
  }

  .copyright {
    grid-area: copyright;
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  #webinfo {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      'website'
      'gov1'
      'gov2'
      'copyright';
    grid-row-gap: 20px;
    justify-content: center;
    margin-bottom: 20px;

    .gov1,
    .gov2 {
      justify-self: start;
    }
  }
}
</style>
