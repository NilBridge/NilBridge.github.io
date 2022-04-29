const htmlModules = require('./config/htmlModules.js');

const { path } = require('@vuepress/utils')
module.exports = {

  theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../vdoing'), // 使用本地主题

  title: "NilHub",
  description: '简洁高效的基岩板群聊互通框架 ',
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: 'vuepress,theme,blog,vdoing' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ],

  // 主题配置
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '使用', link: '/pages/fdb077/', items: [
          {
            text: '装载', items: [
              { text: '安装Nillauncher', link: '/pages/fdb077/' },
              { text: '安装NilBridge', link: '/pages/9e9f72/' }
            ]
          },
          {
            text: '命令', items: [
              { text: '原生命令', link: '/pages/cf0c33/' },
              { text: '用户命令', link: '/pages/23903b/' }
            ]
          },
          {
            text: '正则表达式', items: [
              { text: "执行主体", link: '/pages/305618/' },
              { text: '执行模式', link: '/pages/44e819/' }
            ]
          }
        ]
      },
      {
        text: '开发', link: '/pages/5e0beb/', items: [
          { text: '初始化', link: '/pages/5e0beb/' },
          { text: "主文件", link: '/pages/81428a/' },
          { text: "监听器", link: "/pages/4665f6/" },
          { text: '日志', link: '/pages/1f9276/' },
          { text: "参数对象", link: '/pages/c23fa5/' },
          { text: 'vanilla', link: '/pages/7614f8/' },
          { text: '文件IO', link: '/pages/c96dd0/' },
          { text: '服务器对象', link: '/pages/1b0b22/' }
        ]
      },
      { text: '插件', link: '/pages/db78e2/' },
      { text: '案例', link: '/pages/5d571c/' },
      { text: '问答', link: '/pages/9cc27d/' },
      { text: '增值服务', link: "/pages/396361/" },
      { text: '💖支持', link: '/pages/1b12ed/' },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    repo: 'http://github.com/nilbridge/', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // docsDir: 'docs', // 编辑的文件夹
    // editLinks: true, // 编辑链接
    // editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: 'structuring', collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    updateBar: { // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。


    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // contentBgStyle: 1,

    category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: 'NilDev', // 必需
      href: 'https://github.com/nilbridge' // 可选的
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [

        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/nilbridge'
        }
      ]
    },
    footer: { // 页脚信息
      createYear: 2019, // 博客创建年份
      copyrightInfo: 'NilDev | MIT License', // 博客版权信息，支持a标签
    },
    htmlModules,
  },

  // 插件
  plugins: [
    [require('./plugins/love-me'), { // 鼠标点击爱心特效
      color: '#11a8cd', // 爱心颜色，默认随机色
      excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    }],
    ['fulltext-search'], // 全文搜索

    // ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    //   thirdparty: [ // 可选，默认 []
    //     {
    //       title: '在GitHub中搜索',
    //       frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
    //       behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在npm中搜索',
    //       frontUrl: 'https://www.npmjs.com/search?q=',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q='
    //     }
    //   ]
    // }],

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      }
    ],
    [
      '@vuepress/plugin-register-components',
      {
          components: [
            {
              name: 'all-plugins',
              path: path.resolve(__dirname,'components','pluginsBar.vue')
            },
            {
              name : 'test',
              path:path.resolve(__dirname,'components','Temp.vue')
            }
          ]
      }
    ]
  ],

  markdown: {
    // lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/htmlModules.js',
  ]
}
