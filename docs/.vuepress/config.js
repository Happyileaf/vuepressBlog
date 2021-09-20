/*
 * @Author: your name
 * @Date: 2021-09-12 17:33:37
 * @LastEditTime: 2021-09-20 19:19:39
 * @LastEditors: Please set LastEditors
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
      {
        text: '前端基础', link: '/FrontEnd/', items: [
          { text: 'HTML基础', link: '/FrontEnd/HTML/' },
          { text: 'CSS基础', link: '/FrontEnd/CSS/' },
          { text: 'Javascript基础', link: '/FrontEnd/Javascript/' },
        ]
      },
      {
        text: '计算机基础', link: '/CS/',
        items: [
          { text: '计算机网络', link: '/ComputerNetwork/' },
          { text: '操作系统', link: '/OperatingSystem/' },
        ]
      },
      { text: '浏览器', link: '/Browser/' }, // 外部链接

      { text: '算法', link: '/Algorithm/' }, // 外部链接
      { text: '笔经面经', link: '/Interview/record' }, // 外部链接
      { text: 'Github', link: 'https://github.com/Happyileaf' },
    ],
    sidebar: {
      '/FrontEnd/HTML/': [
        '',     /* /foo/ */
        'page1',  /* /foo/one.html */
        'page2'   /* /foo/two.html */
      ],
      '/FrontEnd/CSS/': [
        '',     /* /foo/ */
        'page1',  /* /foo/one.html */
        'page2'   /* /foo/two.html */
      ],
      '/FrontEnd/Javascript/': [
        '',     /* /foo/ */
        'page1',  /* /foo/one.html */
        'page2'   /* /foo/two.html */
      ],
      '/CS/ComputerNetwork/': [
        '',     /* /foo/ */
        'page1',  /* /foo/one.html */
        'page2'   /* /foo/two.html */
      ],
      '/CS/OperatingSystem/': [
        '',     /* /foo/ */
        'page1',  /* /foo/one.html */
        'page2'   /* /foo/two.html */
      ],
      '/Browser/HTML/': [
        '',     /* /foo/ */
        'page1',  /* /foo/one.html */
        'page2'   /* /foo/two.html */
      ],
      '/Algorithm/': [
        '',     /* /foo/ */
        'page1',  /* /foo/one.html */
        'page2'   /* /foo/two.html */
      ],
      '/Interview/': [
        '',     /* /foo/ */
        'record',  /* /foo/one.html */
        'page2'   /* /foo/two.html */
      ],
      // fallback
      '/': [
        '',        /* / */
        // 'contact', /* /contact.html */
        // 'about'    /* /about.html */
      ],

    },
  },


}