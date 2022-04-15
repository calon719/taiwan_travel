const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/taiwan_travel/'
    : '/',
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        const [obj] = args;

        obj.title = 'Taiwan Travel';
        obj.icon = 'favicon.png';
        obj.meta = {
          keywords: '臺灣, 台灣, 旅遊, 景點, 活動, 住宿, 美食',
          robots: 'index',
          HandheldFriendly: true,
          MobileOptimized: 320,
          description: '臺灣旅遊景點介紹',
          og: {
            type: 'website',
            url: 'https://calon719.github.io/taiwan_travel/',
            title: '拉麵屋',
            image: 'images/logo_2.png',
            description: '臺灣旅遊景點介紹',
          },
        };

        return args;
      });
  },
});
