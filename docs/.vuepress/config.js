/*
 * @Author: your name
 * @Date: 2021-09-12 17:33:37
 * @LastEditTime: 2021-09-12 19:22:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vuepress Blog/docs/.vuepress/config.js
 */
// .vuepress/config.js
module.exports = {
    title: '前端学习笔记',
    description: '练习文档',
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', { rel: 'icon', href: '/img/geass-bg.ico' }],
    ],
    base: '/vuepressBlog/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },                      // 根路径
            { text: '前端基础', link: '/FrontEnd/' },
            {
                text: '计算机基础', link: '/CS/',
                items: [
                    { text: '计算机网络', link: '/ComputerNetwork/' },
                    { text: '操作系统', link: '/OperatingSystem/' },
                ]
            }, // 外部链接
            { text: 'Github', link: 'https://github.com/Happyileaf' },
        ]
    },
    sidebar: {
        // /bar/ 一个侧边栏，里面的三个页面共用一个侧边栏
        '/FrontEnd/': [
          '',           // ./bar/README.md文件，对应页面上/bar/路径
          'page1',        // ./bar/one.md文件，对应页面上/bar/one.html
          'page2',        // ./bar/two.md文件，对应页面上/bar/two.html
        ],
        '/CS/': [
          '',
          'a',
          'b',
        ],
        // 确保'/'侧边栏被最后定义。VuePress 会按顺序遍历侧边栏配置来寻找匹配的配置。
        '/': [
          '',
          'home1',
          'home2',
          'home3',
        ],
      },
}