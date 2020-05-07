// module.exports = {
//     chainWebpack:config=> {
//         config.resolve.alias.set('views', '@/views').set('components', '@/components').set('network', '@/network').set('common', '@/common').set('assets', '@/assets')
//     //   resolve: {
//     //     alias: {
//     //       'views': '@/views',
//     //       'components': '@/components',
//     //       'network': '@/network',
//     //       'common': '@/common',
//     //       'assets': '@/assets',
//     //     }
//     //   }
//     }
//   }

module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          'views': '@/views',
          'components': '@/components',
          'network': '@/network',
          'common': '@/common',
          'assets': '@/assets',
        }
      }
    }
} 