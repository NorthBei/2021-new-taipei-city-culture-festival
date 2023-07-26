<template>
  <v-app id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </v-app>
</template>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<style>
* {
  text-transform: inherit !important;
}
</style>
