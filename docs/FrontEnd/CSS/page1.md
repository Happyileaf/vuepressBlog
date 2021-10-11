## CSS布局
### Flex布局
Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。


#### 一、几个基本概念

容器（flex container）

项目（flex item）

主轴（main axis）

交叉轴（cross axis）

主轴空间（main size）

交叉轴空间（cross size）

<img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png">

#### 二、属性介绍
1. 容器的属性

    - flex-direction
    - flex-wrap
    - flex-flow
    - justify-content
    - align-items
    - align-content

2. 项目的属性

    - order
    - flex-grow
    - flex-shrink
    - flex-basis
    - flex
    - align-self
   
3. 注意点
- `flex-flow` 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，
  默认值为 row nowrap
- `flex` 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，后两个属性可选。
  默认值：0 1 auto。
  快捷值：auto (1 1 auto), none (0 0 auto)
- align-self 可以覆盖 align-items 的效果
- `flex-basis` 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

#### 三、flex-item-size 如何计算的
考虑这些情况
1. flex-basis 的优先级比 width[height]: 非auto;
   
2. 元素存在默认宽高
   以固定宽高为下限

3. 元素存在 min-width[height] 或者 max-width[height]
   min-width[height]为下限
   max-width[height]为上限

4. width[height]: auto; 优先级等于 flex-basis。CSS解析器对比两者的值，两者谁大取谁 作为item的基本尺寸。

#### 四、可用空间
如果 items 所占的空间是大于Flexbox的 那么说明Flexbox 被填满了，CSS解析器就会计算超出了多少空间，根据每一个item所设置的flex-shrink设置的值，将这些空间分配按比例缩小每一个item

#### 五、超出的空间
flex-grow计算流程是：

`可用空间 = 将flexbox-content - 每个item-size的总和`

将每一个item所设置的 grow 全部加起来，将可用空间除以grow，得到单位分配空间。




参考文章

[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

[深入理解 flex 布局以及计算](https://www.w3cplus.com/css3/flexbox-layout-and-calculation.html)

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[ A Visual Guide to CSS3 Flexbox Properties。](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)