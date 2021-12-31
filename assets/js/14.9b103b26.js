(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{384:function(e,t,i){"use strict";i.r(t);var a=i(46),l=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h2",{attrs:{id:"css布局"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#css布局"}},[e._v("#")]),e._v(" CSS布局")]),e._v(" "),i("h3",{attrs:{id:"flex布局"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flex布局"}},[e._v("#")]),e._v(" Flex布局")]),e._v(" "),i("p",[e._v('Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。')]),e._v(" "),i("h4",{attrs:{id:"一、几个基本概念"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#一、几个基本概念"}},[e._v("#")]),e._v(" 一、几个基本概念")]),e._v(" "),i("p",[e._v("容器（flex container）")]),e._v(" "),i("p",[e._v("项目（flex item）")]),e._v(" "),i("p",[e._v("主轴（main axis）")]),e._v(" "),i("p",[e._v("交叉轴（cross axis）")]),e._v(" "),i("p",[e._v("主轴空间（main size）")]),e._v(" "),i("p",[e._v("交叉轴空间（cross size）")]),e._v(" "),i("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png"}}),e._v(" "),i("h4",{attrs:{id:"二、属性介绍"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#二、属性介绍"}},[e._v("#")]),e._v(" 二、属性介绍")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("容器的属性")]),e._v(" "),i("ul",[i("li",[e._v("flex-direction")]),e._v(" "),i("li",[e._v("flex-wrap")]),e._v(" "),i("li",[e._v("flex-flow")]),e._v(" "),i("li",[e._v("justify-content")]),e._v(" "),i("li",[e._v("align-items")]),e._v(" "),i("li",[e._v("align-content")])])]),e._v(" "),i("li",[i("p",[e._v("项目的属性")]),e._v(" "),i("ul",[i("li",[e._v("order")]),e._v(" "),i("li",[e._v("flex-grow")]),e._v(" "),i("li",[e._v("flex-shrink")]),e._v(" "),i("li",[e._v("flex-basis")]),e._v(" "),i("li",[e._v("flex")]),e._v(" "),i("li",[e._v("align-self")])])]),e._v(" "),i("li",[i("p",[e._v("注意点")])])]),e._v(" "),i("ul",[i("li",[i("code",[e._v("flex-flow")]),e._v(" 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，\n默认值为 row nowrap")]),e._v(" "),i("li",[i("code",[e._v("flex")]),e._v(" 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，后两个属性可选。\n默认值：0 1 auto。\n快捷值：auto (1 1 auto), none (0 0 auto)")]),e._v(" "),i("li",[e._v("align-self 可以覆盖 align-items 的效果")]),e._v(" "),i("li",[i("code",[e._v("flex-basis")]),e._v(" 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。")])]),e._v(" "),i("h4",{attrs:{id:"三、flex-item-size-如何计算的"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#三、flex-item-size-如何计算的"}},[e._v("#")]),e._v(" 三、flex-item-size 如何计算的")]),e._v(" "),i("p",[e._v("考虑这些情况")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("flex-basis 的优先级比 width[height]: 非auto;")])]),e._v(" "),i("li",[i("p",[e._v("元素存在默认宽高\n以固定宽高为下限")])]),e._v(" "),i("li",[i("p",[e._v("元素存在 min-width[height] 或者 max-width[height]\nmin-width[height]为下限\nmax-width[height]为上限")])]),e._v(" "),i("li",[i("p",[e._v("width[height]: auto; 优先级等于 flex-basis。CSS解析器对比两者的值，两者谁大取谁 作为item的基本尺寸。")])])]),e._v(" "),i("h4",{attrs:{id:"四、可用空间"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#四、可用空间"}},[e._v("#")]),e._v(" 四、可用空间")]),e._v(" "),i("p",[e._v("如果 items 所占的空间是大于Flexbox的 那么说明Flexbox 被填满了，CSS解析器就会计算超出了多少空间，根据每一个item所设置的flex-shrink设置的值，将这些空间分配按比例缩小每一个item")]),e._v(" "),i("h4",{attrs:{id:"五、超出的空间"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#五、超出的空间"}},[e._v("#")]),e._v(" 五、超出的空间")]),e._v(" "),i("p",[e._v("flex-grow计算流程是：")]),e._v(" "),i("p",[i("code",[e._v("可用空间 = 将flexbox-content - 每个item-size的总和")])]),e._v(" "),i("p",[e._v("将每一个item所设置的 grow 全部加起来，将可用空间除以grow，得到单位分配空间。")]),e._v(" "),i("p",[e._v("参考文章")]),e._v(" "),i("p",[i("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flex 布局教程：语法篇"),i("OutboundLink")],1)]),e._v(" "),i("p",[i("a",{attrs:{href:"https://www.w3cplus.com/css3/flexbox-layout-and-calculation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入理解 flex 布局以及计算"),i("OutboundLink")],1)]),e._v(" "),i("p",[i("a",{attrs:{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Complete Guide to Flexbox"),i("OutboundLink")],1)]),e._v(" "),i("p",[i("a",{attrs:{href:"https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties",target:"_blank",rel:"noopener noreferrer"}},[e._v(" A Visual Guide to CSS3 Flexbox Properties。"),i("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=l.exports}}]);