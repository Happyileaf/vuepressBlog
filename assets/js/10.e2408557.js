(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{381:function(t,_,v){"use strict";v.r(_);var r=v(46),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("这是我参与更文挑战的第2天，活动详情查看： "),v("a",{attrs:{href:"https://juejin.cn/post/6967194882926444557",target:"_blank",rel:"noopener noreferrer"}},[t._v("更文挑战"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"一、http报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、http报文"}},[t._v("#")]),t._v(" 一、HTTP报文")]),t._v(" "),v("p",[t._v("HTTP报文分为请求报文和响应报文。HTTP状态码存在于"),v("strong",[t._v("响应报文")]),t._v("中。")]),t._v(" "),v("p",[t._v("我们先来了解一下HTTP"),v("strong",[t._v("请求报文和响应报文的基本结构")]),t._v("。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a6c8ef00c7bf48d1a73de6d1c486a871~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),t._v(" "),v("p",[t._v("其中响应报文中的状态行的基本结构为")]),t._v(" "),v("p",[v("strong",[t._v("HTTP版本 状态码 原因短语")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44bac029436343169debfb1f9035b551~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),t._v(" "),v("h2",{attrs:{id:"二、http状态码分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、http状态码分类"}},[t._v("#")]),t._v(" 二、HTTP状态码分类")]),t._v(" "),v("p",[t._v("HTTP状态码可以分为以下五类")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("分类")]),t._v(" "),v("th",[t._v("已定义范围")]),t._v(" "),v("th",[t._v("类别")]),t._v(" "),v("th",[t._v("原因短语")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1XX")]),t._v(" "),v("td",[t._v("100-101")]),t._v(" "),v("td",[t._v("信息性状态码 Informational")]),t._v(" "),v("td",[t._v("接收的请求正在处理，需要请求者继续执行操作")])]),t._v(" "),v("tr",[v("td",[t._v("2XX")]),t._v(" "),v("td",[t._v("200-206")]),t._v(" "),v("td",[t._v("成功状态码   Success")]),t._v(" "),v("td",[t._v("请求正常处理完毕")])]),t._v(" "),v("tr",[v("td",[t._v("2XX")]),t._v(" "),v("td",[t._v("300-307")]),t._v(" "),v("td",[t._v("重定向状态码 Redirection")]),t._v(" "),v("td",[t._v("需要进行附加操作以完成请求")])]),t._v(" "),v("tr",[v("td",[t._v("2XX")]),t._v(" "),v("td",[t._v("400-417")]),t._v(" "),v("td",[t._v("客户端错误状态码 Client Error")]),t._v(" "),v("td",[t._v("服务器无法处理请求，请求包含语法错误或无法完成请求")])]),t._v(" "),v("tr",[v("td",[t._v("2XX")]),t._v(" "),v("td",[t._v("500-505")]),t._v(" "),v("td",[t._v("服务器错误状态码 Server Error")]),t._v(" "),v("td",[t._v("服务器处理请求出错")])])])]),t._v(" "),v("h2",{attrs:{id:"三、常用http状态码列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、常用http状态码列表"}},[t._v("#")]),t._v(" 三、常用HTTP状态码列表")]),t._v(" "),v("p",[t._v("介绍一些比较常见的HTTP状态码")]),t._v(" "),v("h3",{attrs:{id:"_1-1xx状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1xx状态码"}},[t._v("#")]),t._v(" 1. 1XX状态码")]),t._v(" "),v("h4",{attrs:{id:"_100continue"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_100continue"}},[t._v("#")]),t._v(" 100\tContinue")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 收到了请求的起始部分，客户端应该继续请求。")]),t._v(" "),v("p",[t._v("客户端可以利用"),v("strong",[t._v("Expect")]),t._v("首部字段，写明所期望的扩展。虽然HTTP/1.1\n规范只定义了100-continue (状态码100 Continue之意)。")]),t._v(" "),v("p",[t._v("等待状态码100响应的客户端在发生请求时，需要指定Expect:\n100-continue。")]),t._v(" "),v("h4",{attrs:{id:"_101switching-protocols"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_101switching-protocols"}},[t._v("#")]),t._v(" 101\tSwitching Protocols")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 切换通信协议。")]),t._v(" "),v("p",[t._v("服务器根据客户端的请求切换协议。\n只能切换到更高级的协议，例如，切换到HTTP的新版本协议，切换到SSL/TSL加密通信。")]),t._v(" "),v("p",[t._v("首部字段Upgrade用于指定升级通信协议。\n对于附有首部字段Upgrade的请求，服务器可用101 Switching\nProtocols状态码作为响应返回。")]),t._v(" "),v("h3",{attrs:{id:"_2-2xx状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2xx状态码"}},[t._v("#")]),t._v(" 2. 2XX状态码")]),t._v(" "),v("h4",{attrs:{id:"_200ok"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_200ok"}},[t._v("#")]),t._v(" 200\tOK")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 请求成功。")]),t._v(" "),v("p",[t._v("表示从客户端发来的请求在服务器端被正常处理了。一般用于GET与POST请求。")]),t._v(" "),v("br"),t._v(" "),v("h4",{attrs:{id:"_204no-content"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_204no-content"}},[t._v("#")]),t._v(" 204\tNo Content")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 无内容。服务器成功处理，但未返回内容。")]),t._v(" "),v("p",[t._v("该状态码代表服务器接收的请求已成功处理，但在返回的响应报文中不含实体的主体部分。\n比如，当从浏览器发出请求处理后，返回204响应，那么浏览器显示的页面不发生更新。\n在未更新网页的情况下，可确保浏览器继续显示当前文档。\n一般在只需要从客户端往服务器发送信息，而对客户端不需要发送新信息内容的情况”下使用。")]),t._v(" "),v("br"),t._v(" "),v("h4",{attrs:{id:"_206partial-content"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_206partial-content"}},[t._v("#")]),t._v(" 206\tPartial Content")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 部分内容。该状态码表示客户端进行了范围请求，而服务器成功执行了这部分\n的GET请求。")]),t._v(" "),v("p",[t._v("响应报文中包含由Content-Range指定范围的实体内容。")]),t._v(" "),v("h3",{attrs:{id:"_3-3xx状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3xx状态码"}},[t._v("#")]),t._v(" 3. 3XX状态码")]),t._v(" "),v("h4",{attrs:{id:"_301moved-permanently"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_301moved-permanently"}},[t._v("#")]),t._v(" 301\tMoved Permanently")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 永久移动。（永久性重定向）")]),t._v(" "),v("p",[t._v("请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。\n今后任何新的请求都应使用新的URI代替。")]),t._v(" "),v("p",[t._v("新的URI会在响应报文中的Location首部字段中给出。")]),t._v(" "),v("br"),t._v(" "),v("h4",{attrs:{id:"_302found"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_302found"}},[t._v("#")]),t._v(" 302\tFound")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 临时移动。（临时性重定向）")]),t._v(" "),v("p",[t._v("与301类似。但资源只是临时被移动。客户端应继续使用原有URI。")]),t._v(" "),v("p",[t._v("但是希望用户(本次)能使用新的URI访问。")]),t._v(" "),v("p",[t._v("新的URI会在响应报文中的Location首部字段中给出。")]),t._v(" "),v("br"),t._v(" "),v("h4",{attrs:{id:"_303see-other"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_303see-other"}},[t._v("#")]),t._v(" 303\tSee Other")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 查看其它地址。")]),t._v(" "),v("p",[t._v("与301类似。使用GET和POST请求查看。")]),t._v(" "),v("p",[t._v("该状态码表示由于请求对应的资源存在着另一一个URI,应使用GET\n方法定向获取请求的资源。")]),t._v(" "),v("p",[t._v("303状态码和302 Found状态码有着相同的功能，但303状态码明\n确表示客户端应当采用GET方法获取资源，这点与302状态码有区别。")]),t._v(" "),v("br"),t._v(" "),v("h4",{attrs:{id:"_304not-modified"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_304not-modified"}},[t._v("#")]),t._v(" 304\tNot Modified")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 资源未更新。")]),t._v(" "),v("p",[t._v("该状态码表示客户端发送附带条件的请求时，服务器端允许请求\n访问资源，但未满足条件的情况。")]),t._v(" "),v("p",[t._v("304状态码返回时，不包含任何响应的主体部分。304虽然被划分在3XX类别中，但是和重定向没有关系。")]),t._v(" "),v("p",[v("strong",[t._v("附带条件的请求：")]),t._v(" 采用GET方法的请求报文中包含"),v("code",[t._v("If-Match")]),t._v(", "),v("code",[t._v("If-Modified- Since")]),t._v("，"),v("code",[t._v("If-None-Match")]),t._v(", "),v("code",[t._v("If-Range")]),t._v(", "),v("code",[t._v("If-Unmodifed-Since")]),t._v(" 中任一首部。")]),t._v(" "),v("br"),t._v(" "),v("h4",{attrs:{id:"_307temporary-redirect"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_307temporary-redirect"}},[t._v("#")]),t._v(" 307\tTemporary Redirect")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 临时重定向。")]),t._v(" "),v("p",[t._v("与302类似。使用GET请求重定向。")]),t._v(" "),v("p",[t._v("该状态码与302 Found有着相同的含义。\n307会遵照浏览器标准，不会从POST变成GET。")]),t._v(" "),v("h4",{attrs:{id:"注意点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[t._v("#")]),t._v(" 注意点")]),t._v(" "),v("p",[t._v("当301、302、 303 响应状态码返回时，几乎所有的浏览器都会把\nPOST改成GET,并删除请求报文内的主体，之后请求会自动再次发送。")]),t._v(" "),v("p",[t._v("301、302 标准是禁止将POST方法改变成GET方法的，但实际使用时大家都会把POST改成GET。")]),t._v(" "),v("p",[t._v("307会遵照浏览器标准，不会从POST变成GET。但是，对于处理响应时的行为，每种浏览器有可能出现不同的情况。")]),t._v(" "),v("h3",{attrs:{id:"_4-4xx状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-4xx状态码"}},[t._v("#")]),t._v(" 4. 4XX状态码")]),t._v(" "),v("h4",{attrs:{id:"_400bad-request"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_400bad-request"}},[t._v("#")]),t._v(" 400\tBad Request")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 客户端请求的语法错误，服务器无法理解。")]),t._v(" "),v("p",[t._v("浏览器会像200 OK 一样对待该状态码。")]),t._v(" "),v("br"),t._v(" "),v("h4",{attrs:{id:"_401unauthorized"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_401unauthorized"}},[t._v("#")]),t._v(" 401\tUnauthorized")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 请求要求用户的身份认证")]),t._v(" "),v("p",[t._v("该状态码表示发送的请求需要有通过HTTP认证( "),v("code",[t._v("BASIC认证")]),t._v("、"),v("code",[t._v("DIGEST认证")]),t._v(")的认证信息。")]),t._v(" "),v("p",[t._v("另外若之前已进行过1次请求，则表示用户认证失败。")]),t._v(" "),v("p",[t._v("返回含有401的响应必须包含一个适用于被请求资源的"),v("code",[t._v("WWW-Authenticate")]),t._v("首部用以质询( challenge)用户信息。")]),t._v(" "),v("p",[t._v("当浏览器初次接收到401响应，会弹出认证用的对话窗口。")]),t._v(" "),v("br"),t._v(" "),v("h4",{attrs:{id:"_403forbidden"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_403forbidden"}},[t._v("#")]),t._v(" 403\tForbidden")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 服务器理解请求客户端的请求，但是拒绝执行此请求。")]),t._v(" "),v("p",[t._v("该状态码表明对请求资源的访问被服务器拒绝了。")]),t._v(" "),v("p",[t._v("服务器端没有必要给出拒绝的详细理由，但如果想作说明的话，可以在实体的主体部分对原因进行描述。")]),t._v(" "),v("p",[t._v("未获得文件系统的访问授权,访问权限出现某些问题(从未授权的发送源IP地址试图访问)等列举的情况都可能是发生403的原因。")]),t._v(" "),v("br"),t._v(" "),v("h4",{attrs:{id:"_404not-found"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_404not-found"}},[t._v("#")]),t._v(" 404\tNot Found")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 请求资源未找到。")]),t._v(" "),v("p",[t._v("服务器无法根据客户端的请求找到资源（网页）。")]),t._v(" "),v("p",[t._v("该状态码表明服务器上无法找到请求的资源。")]),t._v(" "),v("p",[t._v("也可以在服务器端拒绝请求且不想说明理由时使用。")]),t._v(" "),v("h3",{attrs:{id:"_5-5xx状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-5xx状态码"}},[t._v("#")]),t._v(" 5. 5XX状态码")]),t._v(" "),v("h4",{attrs:{id:"_500internal-server-error"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_500internal-server-error"}},[t._v("#")]),t._v(" 500\tInternal Server Error")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 服务器内部错误，无法完成请求。")]),t._v(" "),v("p",[t._v("该状态码表明服务器端在执行请求时发生了错误。")]),t._v(" "),v("p",[t._v("也有可能是Web应用存在的bug或某些临时的故障。")]),t._v(" "),v("br"),t._v(" "),v("h4",{attrs:{id:"_501not-implemented"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_501not-implemented"}},[t._v("#")]),t._v(" 501\tNot Implemented")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 服务器不支持请求的功能，无法完成请求。")]),t._v(" "),v("br"),t._v(" "),v("h4",{attrs:{id:"_502bad-gateway"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_502bad-gateway"}},[t._v("#")]),t._v(" 502\tBad Gateway")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 网关或者代理服务器尝试执行请求时，从远程服务器接收到了一个无效的响应。")]),t._v(" "),v("br"),t._v(" "),v("h4",{attrs:{id:"_503service-unavailable"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_503service-unavailable"}},[t._v("#")]),t._v(" 503\tService Unavailable")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 由于超载或系统维护，服务器暂时的无法处理客户端的请求。")]),t._v(" "),v("p",[t._v("该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。")]),t._v(" "),v("p",[t._v("如果事先得知解除以上状况需要的时间，最好写入Retry-After首部字段再返回给客户端。")]),t._v(" "),v("br"),t._v(" "),v("h4",{attrs:{id:"_504gateway-time-out"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_504gateway-time-out"}},[t._v("#")]),t._v(" 504\tGateway Time-out")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 请求超时，网关或代理服务器，未及时从远端服务器获取请求。")]),t._v(" "),v("br"),t._v(" "),v("h4",{attrs:{id:"_505http-version-not-supported"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_505http-version-not-supported"}},[t._v("#")]),t._v(" 505\tHTTP Version not supported")]),t._v(" "),v("p",[v("strong",[t._v("含义：")]),t._v(" 服务器不支持请求的HTTP协议的版本，无法完成处理。")])])}),[],!1,null,null,null);_.default=a.exports}}]);