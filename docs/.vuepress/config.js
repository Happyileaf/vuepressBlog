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
  title: 'Happyileaf Blog',
  description: '前端学习文档',
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
      { text: '掘金', link: 'https://juejin.cn/user/2524134429703063', icon: 'reco-juejin' },
      { text: 'Github', link: 'https://github.com/Happyileaf', icon: 'reco-github' },
    ],
    sidebar: {
      '/FrontEnd/HTML/': [
        {
          title: 'HTML5基础',
          path: '/FrontEnd/HTML/HTML5新特性',
          collapsable: true,
          children: [
            { title: "HTML5新特性", path: "/FrontEnd/HTML/HTML5新特性" }
          ]
        },
        {
          title: 'HTML5进阶',
          path: '/FrontEnd/HTML/',
          collapsable: true,
          children: [
            // { title: "HTML5新特性", path: "/FrontEnd/HTML/HTML5新特性" }
          ]
        },
        {
          title: 'HTML5拓展',
          path: '/FrontEnd/HTML/',
          collapsable: true,
          children: [
            // { title: "HTML5新特性", path: "/FrontEnd/HTML/HTML5新特性" }
          ]
        },
      ],
      '/FrontEnd/CSS/': [
        {
          title: 'CSS基础',
          path: '/FrontEnd/CSS/',
          collapsable: true,
          children: [
            { title: "水平垂直居中的方法", path: "/FrontEnd/CSS/CSS 水平垂直居中的方法" }
          ]
        },
        {
          title: 'CSS进阶',
          path: '/FrontEnd/CSS/',
          collapsable: true,
          children: [
            // { title: "水平垂直居中的方法", path: "/FrontEnd/CSS/CSS 水平垂直居中的方法" }
          ]
        },
        {
          title: 'CSS扩展',
          path: '/FrontEnd/CSS/',
          collapsable: true,
          children: [
            // { title: "水平垂直居中的方法", path: "/FrontEnd/CSS/CSS 水平垂直居中的方法" }
          ]
        },
      ],
      '/FrontEnd/Javascript/': [
        {
          title: 'Javascript基础',
          path: '/FrontEnd/Javascript/判断数据类型',
          collapsable: true,
          children: [
            { title: "判断数据类型", path: "/FrontEnd/Javascript/判断数据类型" },
            { title: "浅谈Javascript中的继承", path: "/FrontEnd/Javascript/浅谈Javascript中的继承" },
            { title: "箭头函数和普通函数的区别", path: "/FrontEnd/Javascript/箭头函数和普通函数的区别" }
          ]
        },
        {
          title: 'Javascript进阶',
          path: '/FrontEnd/Javascript/对象的循环遍历',
          collapsable: true,
          children: [
            { title: "对象的循环遍历", path: "/FrontEnd/Javascript/对象的循环遍历" },
            { title: "浅拷贝和深拷贝", path: "/FrontEnd/Javascript/浅拷贝和深拷贝" },
            { title: "观察者模式和发布-订阅模式", path: "/FrontEnd/Javascript/观察者模式和发布-订阅模式" }

          ]
        },
        {
          title: 'Javascript扩展',
          path: '/FrontEnd/Javascript/',
          collapsable: true,
          children: [
            // { title: "Javascript扩展", path: "/FrontEnd/Javascript/HTML5新特性" }
          ]
        },
      ],
      '/CS/ComputerNetwork/': [
        {
          title: '基础',
          path: '/CS/ComputerNetwork/浅析HTTP状态码',
          collapsable: true,
          children: [
            { title: "对象的循环遍历", path: "/CS/ComputerNetwork/浅析HTTP状态码" },
            { title: "TCP和UDP的区别", path: "/CS/ComputerNetwork/TCP和UDP的区别" },
          ]
        },

      ],
      '/CS/OperatingSystem/': [
        {
          title: '基础',
          path: '/Browser/输入URL之后发生了什么',
          collapsable: true,
          children: [
            { title: "输入URL之后发生了什么", path: "/Browser/输入URL之后发生了什么" },
          ]
        },

      ],
      '/Browser/': [
        {
          title: '基础',
          path: '/Browser/输入URL之后发生了什么',
          collapsable: true,
          children: [
            { title: "输入URL之后发生了什么", path: "/Browser/输入URL之后发生了什么" },
          ]
        },
      ],
      '/Algorithm/': [
        {
          title: '基础',
          path: '/Algorithm/数组乱序',
          collapsable: true,
          children: [
            { title: "数组乱序", path: "/Algorithm/数组乱序" },
          ]
        },

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
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ],

    },
    subSidebar: 'auto',
    sidebarDepth: 2
  },


}