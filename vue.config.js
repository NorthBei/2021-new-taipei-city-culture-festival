const title = '2021找找不能忘記的母語歌 - 新北多元文化節'
const description = '母語歌地圖, 聲音地圖, 找找新北, 新北市多元文化節, 找找不能忘記的母語歌'
const publicPath = 'https://2021-new-taipei-city-culture-festival.netlify.app/' // 'http://soundstory.culturefestivalinntpc.tw'

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = title
        args[0].meta = [
          { property: 'title', content: title },
          { property: 'description', content: description },
          { property: 'keyword', content: '母語歌地圖, 聲音地圖, 找找新北, 新北市多元文化節, 找找不能忘記的母語歌' },
          { property: 'og:title', content: '找找不能忘記的母語歌——聲音地圖｜2021新北多元文化節' },
          { property: 'og:site_name', content: title },
          { property: 'og:url', content: publicPath },
          { property: 'og:description', content: description },
          { property: 'og:type', content: 'website' },
          { property: 'og:image', content: `${publicPath}/img/fb-1200x627.png` },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '627' },
          { property: 'fb:app_id', content: '668587773556290' },
          { property: 'og:locale', content: 'zh_TW' }
        ]
        return args
      })
    config.plugins.delete('pwa')
    config.plugins.delete('workbox')
  },
  pwa: {
    name: title,
    themeColor: '#e2b86f',
    msTileColor: '#e2b86f'
  },
  devServer: {
    disableHostCheck: true
  },
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    i18n: {
      locale: 'tw',
      fallbackLocale: 'tw',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
