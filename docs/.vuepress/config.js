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
          { text: 'HTML5', link: '/FrontEnd/HTML/' },
          { text: 'CSS3', link: '/FrontEnd/CSS/' },
          { text: 'Javascript', link: '/FrontEnd/Javascript/' },
        ]
      },
      {
        text: '计算机基础', link: '/CS/',
        items: [
          { text: '计算机网络', link: '/CS/ComputerNetwork/' },
          { text: '操作系统', link: '/CS/OperatingSystem/' },
        ]
      },
      { text: '浏览器', link: '/Browser/' }, // 外部链接

      { text: '算法', link: '/Algorithm/' }, // 外部链接
      { text: '笔经面经', link: '/Interview/2021秋招' }, // 外部链接
      { text: '掘金', link: 'https://juejin.cn/user/2524134429703063' },
      { text: 'Github', link: 'https://github.com/Happyileaf' },
    ],
    sidebar: {
      '/FrontEnd/HTML/': [
        {
          title: 'HTML5基础',
          path: '/FrontEnd/HTML/',
          collapsable: true,
          children: [
            { title: "HTML5新特性", path: "/FrontEnd/HTML/HTML5新特性" }
          ]
        },
        {
          title: 'HTML5进阶',
          path: '/FrontEnd/HTML/page1',
          collapsable: true, // 不折叠
          children: [
            { title: "HTML5新特性", path: "/FrontEnd/HTML/HTML5新特性" }
          ]
        },
        {
          title: 'HTML5拓展',
          path: '/FrontEnd/HTML/page2',
          collapsable: true, // 不折叠
          children: [
            { title: "HTML5新特性", path: "/FrontEnd/HTML/HTML5新特性" }
          ]
        },
        // '',     /* /foo/ */
        // 'page1',  /* /foo/one.html */
        // 'page2'   /* /foo/two.html */
      ],
      '/FrontEnd/CSS/': [
        {
          title: 'CSS基础',
          path: '/FrontEnd/CSS/',
          collapsable: true, // 不折叠
          children: [
            { title: "水平垂直居中的方法", path: "/FrontEnd/CSS/CSS 水平垂直居中的方法" }
          ]
        },
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
        {
          title: '2021秋招',
          path: '/Interview/2021秋招',
          collapsable: true,
          children: [
            { title: "2021秋招", path: "/Interview/2021秋招" }
          ]
        },
      ],
      // fallback
      '/': [
        '',        /* / */
        // 'contact', /* /contact.html */
        // 'about'    /* /about.html */
      ],

    },
    subSidebar: 'auto',
    sidebarDepth: 2
  },


}