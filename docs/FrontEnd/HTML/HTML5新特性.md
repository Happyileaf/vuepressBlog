---
theme: vue-pro
---


![abe8eb28-341e-4797-a327-3b0492cdb2ab.jpg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f4a2cb3b8f2b4a5ebe1d9d4031cb7add~tplv-k3u1fbpfcp-watermark.image)

# HTML5新特性

## HTML5
先来看看MDN上面对[HTML5](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5#%E8%AF%AD%E4%B9%89)的定义

> HTML5 是定义 HTML 标准的最新的版本。 该术语通过两个不同的概念来表现： 
> 
> 
> - 它是一个新版本的HTML语言，具有新的元素，属性和行为，
> - 它有更大的技术集，允许构建更多样化和更强大的网站和应用程序。这个集合有时称为HTML5和它的朋友们，不过大多数时候仅缩写为一个词HTML5。
> 

> 关于HTML5技术的资源，根据其功能分为几个组。
> 
>  - 语义：能够让你更恰当地描述你的内容是什么。
>  - 连通性：能够让你和服务器之间通过创新的新技术方法进行通信。
>  - 离线 & 存储：能够让网页在客户端本地存储数据以及更高效地离线运行。
>  - 多媒体：使 video 和 audio 成为了在所有 Web 中的一等公民。
>  - 2D/3D 绘图 & 效果：提供了一个更加分化范围的呈现选择。
>  - 性能 & 集成：提供了非常显著的性能优化和更有效的计算机硬件使用。
>  - 设备访问 Device Access：能够处理各种输入和输出设备。
>  - 样式设计: 让作者们来创作更加复杂的主题吧！

## W3C对HTML5的需求整体原则

 - 新特性应该基于 HTML、CSS、DOM 以及 JavaScript。
 - 减少对外部插件的需求（比如 Flash）
 - 更优秀的错误处理
 - 更多取代脚本的标记
 - HTML5 应该独立于设备
 - 开发进程应对公众透明

## HTML5新特性
### 1.语义化标签（HTML5 中的区块和段落元素）
|元素|  介绍|
|--|--|
| `<section> `|  |
| `<article>`|  |
| `<nav> `|  |
| `<header>`|  |
| `<footer> `|  |
| `<aside> `|  |
| `<hgroup> `|  |
| `<dialog> `|  |
| `<detailes> `|  |
| `<summary>`|  |


除了节段，媒体和表单元素之外，还有众多的新元素，例如 `<mark>`， `<figure>`， `<figcaption>`， `<data>`， `<time>`， `<output>`， `<progress>`， 或者 `<meter>`和`<main>`，这增加了有效的 HTML5 元素的数量。

<br>

### 2.增强的表单
1.新增的input类型
| 输入类型type | 描述 |
|--|--|
| color | 主要用于选取颜色 |
|date | 从一个日期选择器选择一个日期|
|datetime | 选择一个日期（UTC 时间）|
|datetime-local | 选择一个日期和时间 (无时区)|
|email | 包含 e-mail 地址的输入域|
|month | 选择一个月份|
|number | 数值的输入域|
|range | 一定范围内数字值的输入域|
|search | 用于搜索域|
|tel | 定义输入电话号码字段|
|time | 选择一个时间|
|urlURL |  地址的输入域|
|week | 选择周和年|

2.新增的表单属性
| 属性attribute | 描述 |
|--|--|
|placehoder | 简短的提示在用户输入值前会显示在输入域上。输入框默认提示，在用户输入后消失。|
|required  | boolean 属性。要求填写的输入域不能为空|
|pattern |描述了一个正则表达式用于验证`<input>` 元素的值。|
|min 和 max |设置元素最小值与最大值。|
|step |为输入域规定合法的数字间隔。|
|height 和 width |用于 image 类型的 `<input>` 标签的图像高度和宽度。|
|autofocus | boolean 属性。规定在页面加载时，域自动地获得焦点。|
|multiple  | boolean 属性。规定`<input>` 元素中可选择多个值。|

3.新增的表单元素
| 表单元素 | 描述 |
|--|--|
| `<datalist>`| 元素规定输入域的选项列表。使用 `<input>` 元素的 list 属性与 `<datalist>` 元素的 id 绑定
| `<keygen>`| 提供一种验证用户的可靠方法。标签规定用于表单的密钥对生成器字段。| 
| `<output>`| 用于不同类型的输出比如计算或脚本输出| 

<br>
<br>

### 3.多媒体音频和视频
`<audio>` 和 `<video>` 元素嵌入和允许操作新的多媒体内容。

<br>

##### \<audio>音频
`<audio>` 元素用于在文档中嵌入音频内容。 
`<audio>` 元素可以包含一个或多个音频资源， 
这些音频资源可以使用 src 属性或者`<source>` 元素来进行描述：浏览器将会选择最合适的一个来使用。
也可以使用 MediaStream 将这个元素用于流式媒体。


```html
<audio controls>
 <source src="foo.opus" type="audio/ogg; codecs=opus"/>
 <source src="foo.ogg" type="audio/ogg; codecs=vorbis"/>
 <source src="foo.mp3" type="audio/mpeg"/>
 Your browser does not support the <code>audio</code> element.
</audio>
```

>  - control 属性供添加播放、暂停和音量控件。
>  - 在`<audio>` 与 `</audio>` 之间你需要插入浏览器不支持的`<audio>`元素的提示文本 。
>  - `<audio>` 元素允许使用多个 `<source>` 元素. `<source>` 元素可以链接不同的音频文件，浏览器将使用第一个支持的音频文件
> 
>  - `<audio>`元素支持三种音频格式文件: MP3, Wav, 和 Ogg

> `<audio>` 元素与 `<source>` 元素
>  
> 这个例子指出了在嵌套的 `<source>` 元素的 src属性上设置嵌入音轨，而非直接在 `<audio>` 元素上设置。
> 通过这种方法可以同时在 type 属性上包含文件的 MIME
> 类型，这通常很有用，因为浏览器就能立即决策：自己究竟是能够播放该文件，还是不在不能播放的文件上浪费时间。

<br>

##### \<video>视频
 `<video>` 元素 用于在HTML或者XHTML文档中嵌入媒体播放器，用于支持文档内的视频播放。你也可以将 `<video>`  标签用于音频内容，但是 `<audio>` 元素可能在用户体验上更合适。


```html
<video controls>
  <source src="myVideo.mp4" type="video/mp4">
  <source src="myVideo.webm" type="video/webm">
  <p>Your browser doesn't support HTML5 video. Here is
     a <a href="myVideo.mp4">link to the video</a> instead.</p>
</video>
```


> 	 - control 提供了 播放、暂停和音量控件来控制视频。也可以使用dom操作来控制视频的播放暂停，如 play() 和 pause() 方法。
>  - 同时 video 元素也提供了 width 和 height 属性控制视频的尺寸.如果设置的高度和宽度，所需的视频空间会在页面加载时保留。如果没有设置这些属性，浏览器不知道大小的视频，浏览器就不能再加载时保留特定的空间，页面就会根据原始视频的大小而改变。
>  - 与 `<video>` 标签之间插入的内容是提供给不支持 video 元素的浏览器显示的。
>  - 浏览器并不是都支持相同的视频格式，所以你可以在 `<source>` 元素里提供多个视频源，然后浏览器将会使用它所支持的第一个源。浏览器将使用第一个可识别的格式（ MP4, WebM, 和 Ogg）

```html
<!-- Simple video example -->
<video src="videofile.ogg" autoplay poster="posterimage.jpg">
  抱歉，您的浏览器不支持内嵌视频，不过不用担心，你可以 <a href="videofile.ogg">下载</a>
  并用你喜欢的播放器观看!
</video>

```

> 例子播放一个视频，视频一收到，允许播放的时候就会立马开始播放，而不会停下来直到下载更多内容。 图片 "posterimage.jpg" 会一直展示在视频区域，直到开始播放。

<br>
<br>

### 4.3D, 图像 & 效果
##### Canvas 
`<canvas>`元素可被用来通过JavaScript（Canvas API 或 WebGL API）绘制图形及图形动画。

> Canvas 通过 JavaScript 来绘制 2D 图形。
> 
> Canvas 是逐像素进行渲染的。
> 
> 在 canvas中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

<br>

##### SVG
一个基于 XML 的可以直接嵌入到 HTML 中的矢量图像格式。

> SVG 是一种使用 XML 描述 2D 图形的语言。
> 
> SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。
> 
> 在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。


| Canvas | SVG |
|--|--|
| 依赖分辨率 | 不依赖分辨率 |
| 不支持事件处理器 | 支持事件处理器 |
| 弱的文本渲染能力 | 最适合带有大型渲染区域的应用程序（比如谷歌地图） |
| 能够以 .png 或 .jpg 格式保存结果图像 | 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快） |
| 最适合图像密集型的游戏，其中的许多对象会被频繁重绘 | 不适合游戏应用 |

<br>

##### WebGL
WebGL 通过引入了一套非常地符合 OpenGL ES 2.0 并且可以用在 HTML5 `<canvas>` 元素中的 API 给 Web 带来了 3D 图像功能。

<br>
<br>

### 5.通信
##### Web Sockets (en-US)
允许在页面和服务器之间建立持久连接并通过这种方法来交换非 HTML 数据。

> WebSockets 是一种先进的技术。它可以在用户的浏览器和服务器之间打开交互式通信会话。使用此API，您可以向服务器发送消息并接收事件驱动的响应，而无需通过轮询服务器的方式以获得响应。

##### Server-sent events
允许服务器向客户端推送事件，而不是仅在响应客户端请求时服务器才能发送数据的传统范式。
##### WebRTC
这项技术，其中的 RTC 代表的是即时通信，允许连接到其他人，直接在浏览器中控制视频会议，而不需要一个插件或是外部的应用程序。

<br>
<br>

### 6.离线 & 存储

<br>

#### 离线
部分浏览器根据 WHATWG Web Applications 1.0 规范 实现了`Online/Offline` 事件。

```javascript
navigator.onLine
```

> `navigator.onLine` 是一个值为 true/false  (true 表示在线， false 表示离线) 的属性。
> 当用户通过选择对应的菜单项 (Firefox 中为 文件 -> 离线工作) 切换到「离线模式」时，这个值就会被更新。
> 
> 此外，当浏览器长时间无法连接到网络时，该值也会被更新。

<br>

#### 存储
##### sessionStorage

> sessionStorage 是个全局对象，它维护着在页面会话(page session)期间有效的存储空间。只要浏览器开着，页面会话周期就会一直持续。当页面重新载入(reload)或者被恢复(restores)时，页面会话也是一直存在的。每在新标签或者新窗口中打开一个新页面，都会初始化一个新的会话。 

<br>

##### localStorage

> 只读的localStorage 属性允许你访问一个Document 源（origin）的对象 Storage；存储的数据将保存在浏览器会话中。
> 

> localStorage 类似 sessionStorage，但其区别在于：存储在 localStorage 的数据可以长期保留；而当页面会话结束——也就是说，当页面被关闭时，存储在 sessionStorage 的数据会被清除 。

<br>

##### IndexedDB

> IndexedDB 是一种底层 API，用于在客户端存储大量的结构化数据（也包括文件/二进制大型对象（blobs））。该 API使用索引实现对数据的高性能搜索。
> IndexedDB 是一个事务型数据库系统，类似于基于 SQL 的 RDBMS。 然而，不像 RDBMS 使用固定列表，IndexedDB是一个基于 JavaScript 的面向对象数据库。


<br>
<br>

### 7.性能 & 集成
<br>

##### HTML Drag and Drop API

> HTML 拖放（Drag and Drop）接口使应用程序能够在浏览器中使用拖放功能。例如，用户可使用鼠标选择可拖拽（draggable）元素，将元素拖拽到可放置（droppable）元素，并释放鼠标按钮以放置这些元素。拖拽操作期间，会有一个可拖拽元素的半透明快照跟随着鼠标指针。

在 HTML5 中，拖放是标准的一部分，任何元素都能够拖放。
拖放的过程分为源对象和目标对象。源对象是指你即将拖动元素，而目标对象则是指拖动之后要放置的目标位置。

> 拖放的源对象(可能发生移动的)可以触发的事件——3个：
> dragstart：拖动开始
drag：拖动中
dragend：拖动结束
整个拖动过程的组成： dragstart*1 + drag*n + dragend*1

> 拖放的目标对象(不会发生移动)可以触发的事件——4个：
dragenter：拖动着进入
dragover：拖动着悬停
dragleave：拖动着离开
drop：释放
整个拖动过程的组成1： dragenter*1 + dragover*n + dragleave*1
整个拖动过程的组成2： dragenter*1 + dragover*n + drop*1

<br>

##### 地理位置 API
地理位置 API 允许用户向 Web 应用程序提供他们的位置。出于隐私考虑，报告地理位置前会先请求用户许可。

地理位置 API 通过 `navigator.geolocation` 提供。

如果该对象存在，那么地理位置服务可用。

```javascript
if ("geolocation" in navigator) {
  /* 地理位置服务可用 */
} else {
  /* 地理位置服务不可用 */
}
```

<br>

##### Web Workers
Web Worker为Web内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面。

> 当在 HTML 页面中执行脚本时，页面的状态是不可响应的，直到脚本已完成。web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行。（在后台运行不会影响页面的性能，相当于并发执行）

<br>


参考文件

[HTML5相关知识点](https://blog.csdn.net/sanjun_done/article/details/115022483)

<br>
<br>
<br>

补充一点点小知识：

**src和href的区别：**

> href: 指向网络资源的的位置，建立当前文档和资源的连接，用于超链接。 src：
> 将资源嵌入到当前文件中，src请求的资源会将其指向的资源下载到当前文档中，如img图片。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载编译执行完成，这就是为什么要把js脚本放在底部而不是头部的原因。

**<!DOCDYTE>作用：**

> 声明必须位于HTML5文档的第一行，该标签告知浏览器文档所使用的HTML 规范 HTML4.01 中的doctype
> 需要对DTD（文档类型定义:告知浏览器应该用哪种文档类型规范来解析文档），因为HTML4.01是基于SGML。而HTML5
> 不急于SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为。
