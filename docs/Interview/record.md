---
sidebar: auto
---

# 记录

## 杭州利珀科技有限公司
### 笔试

    请用您熟悉的语言完成如下功能，并提供源代码

    这是一个将参数配置json文件，转换成列表格式json的需求。
    读取文件params.json
    提取其中的信息，转换成target.json，格式范例见target_sample.json
    规则如下：
    没有id的对象不需要转换
    id>=8000的对象不需要转换
    在id转换成name的时候，在id前加上“flaw_type_”拼接成name
    nickName是show属性的转换
    子对象的nickName 是父对象的属性名为Attributes的兄弟对象的show属性加上“_”下划线，再加自身的show属性拼接而成。
    在实际应用中，params.json 是因每个项目不同，子对象嵌套层数可能不同(可能嵌套两层、三层、四层......)，但是格式不会发生变化，请在代码中考虑到通用化的情况。

```javascript
    let preData = {
    "g_unKown": {
        "Attributes": {
            "alarmnum": 10,
            "analysis": false,
            "color": "#ff6600",
            "id": 8000
        }
    },
    "主要缺陷": {
        "Attributes": {
            "color": "#aa0000",
            "enable": true,
            "algorithm_id": 1913,
            "id": 1300,
            "show": "大型缺陷"
        },
        "Level_0": {
            "Attributes": {
                "color": "#bb0000",
                "enable": true,
                "algorithm_id": 1913,
                "id": 1301,
                "show": "可见"
            }
        },
        "Level_1": {
            "Attributes": {
                "color": "#aa0010",
                "enable": true,
                "algorithm_id": 1413,
                "id": 1302,
                "show": "不可见"
            }
        },
        "min": {
            "show": "最小像素数",
            "unit": "个",
            "value": 25
        }
    },
    "颜色缺陷": {
        "Attributes": {
            "color": "#aa0010",
            "enable": true,
            "algorithm_id": 913,
            "id": 1200,
            "show": "白点"
        },
        "Level_0": {
            "Attributes": {
                "color": "#aa0010",
                "enable": true,
                "algorithm_id": 1413,
                "id": 1201,
                "show": "微小白点"
            }
        },
        "Level_1": {
            "Attributes": {
                "color": "#aa0010",
                "enable": true,
                "algorithm_id": 1413,
                "id": 1202,
                "show": "小白点"
            }
        },
        "Level_2": {
            "Attributes": {
                "color": "#aa0010",
                "enable": true,
                "algorithm_id": 1413,
                "id": 1203,
                "show": "中白点"
            }
        },
        "Level_3": {
            "Attributes": {
                "color": "#aa0010",
                "enable": true,
                "algorithm_id": 63,
                "id": 1204,
                "show": "大白点"
            }
        },
        "Level_4": {
            "Attributes": {
                "color": "#aa0010",
                "enable": true,
                "algorithm_id": 213,
                "id": 1205,
                "show": "超大白点"
            }
        }
    },
    "纹路": {
        "Attributes": {
            "color": "#aa0010",
            "enable": true,
            "algorithm_id": 1413,
            "id": 1700,
            "show": "划痕/划伤"
        },
        "Level_0": {
            "Attributes": {
                "color": "#aa0010",
                "enable": true,
                "algorithm_id": 23,
                "id": 1701,
                "show": "条纹"
            }
        },
        "ashow": {
            "max": 50,
            "show": "横条纹灵敏度",
            "unit": "等级",
            "value": 10
        },
        "minLineHeight": {
            "max": 50,
            "show": "最小条纹长度",
            "unit": "等级",
            "value": 10
        },
        "verLineFliterGradient": {
            "max": 50,
            "show": "竖条纹灵敏度",
            "unit": "等级",
            "value": 0
        }
    },
    "webconfig": {
        "Attributes": {
            "host": "192.168.1.1",
            "port": "8008"
        }
    }
}

    const format = function (preData) {
        const dfs = function (obj, hash = "") {
        if (!isObject(obj)) return

        // 选取符合要求的数据
        if (obj.hasOwnProperty("id") && obj.id < 8000) {
            let nickName = hash !== "" ?`${hash}`:`${obj.show}`
            res.push({
                "name": `flaw_type_${obj.id}`,
                nickName
            })
        }

        // 获取当前层的Attributes?.showshow, 用来传入下一层
        if (obj.hasOwnProperty("Attributes")) {
            hash = hash === ""? `${obj.Attributes?.show}`:`${hash}_${obj.Attributes?.show}` || ""
        }

        // 递归遍历对象
        Reflect.ownKeys(obj).forEach(key => {
                dfs(obj[key],hash)
        })
    }
        let res = []
        dfs(preData)
        return res
    }

    let isObject = function (obj) {
        return typeof obj === 'object' && obj !== null
    }

    let x = format(preData)
    console.log(x)
    console.log(x.length)



```

## 乐信集团

### 笔试

选择题：

    1. 网页重定向的方法

算法：

    1.给定一个正整数n，判断n是不是4的幂次方

        初始化a=1,b=4,区间[1,4]持续向右移动，每次移动判断n是落在区间的边界上还是在区间内部

```javascript
function isPowerOfFour(n) {
    // write code here
    let a = 1
    let b = 4
    while (1) {
        if (n === a || n === b) {
            return true
        } else {
            if (a < n && n < b) {
                return false
            }
            a = b
            b = b * 4
        }
    }

}
```

    2.给定一个字符串，统计每个字符出现的次数，倒序拼接输出（相同次数的字符按编码排序）

        Map统计字符出现次数，利用数组的sort方法排序（次数排序+编码排序），拼接返回值res


    3.给定一个数组，统计奇数长度子数组的和（子数组必须是连续的）

        类似滑动窗口
        let len = arr.length
        初始化窗口[i,j]
        窗口向右滑动，j=len-1时停止滑动，滑动期间统计数据。
        扩大窗口长度（依次为1，3，5...）,窗口长度<=数组长度且为奇数，超出时不再扩大
        算法终止

### 一面 ( 30min )
    1. vue nextTick
    2. js数据类型
    3. 项目的难点
    4. class继承为什么要调用super
    5. java作为更标准的OO语言和js有什么不同？
    6. 前端跨域，说了配置代理
    7. cookie和localstorage有什么不同
    8. localstorage和sessionstorage有什么不同
    9. 不同的tab页，sessionstorage可不可以共享
    10. vue兄弟组件之间的通信，说了vuex和ref，面试官好像不是特别满意
    11. 生产环境怎么跨域

    感觉答得非常一般。面试官说要加强技术深度。

## 云账户

### 笔试

问答题：

    1.浅拷贝和深拷贝的概念
    2.Get和Post的区别
    3.三次握手的过程？为什么要三次握手
    4.多线程和多进程
    5.var, let, const的区别

算法：
  
    1.给定一个字符串，找出出现次数最多的字符和次数

        Map 统计 + 遍历找出最大值




## 富途
### 一面（凉经）
    1. vue生命周期，为什么要分这些周期
    2. vueRouter，有什么模式，是怎么实现的？
    3. vue的双向数据绑定，怎么实现的？
    4. vue虚拟dom
    5. 虚拟内存，怎么知道哪些是需要调入内存的？
    6. 为什么要3次握手？2次，4次？timewait？如果有多个timewait是什么情况
    7. codeReview的时候主要做了什么，发现了什么问题？
    8. 推理题 [红帽子和黑帽子](https://www.51test.net/show/47044.html) 这题真的震惊了
    
这次面试计算机基础答得一塌糊涂，确实有点久没有复习了


## 灵雀云
### 一面 （1h）
    1. 实习做了什么事情？
    2. 用过的技术栈 html+css+javassscript sass vue node
    3. position的属性值，有什么作用？
    4. z-index？z-index会不会受postion定位的影响
    5. box-sizing，盒模型，两种盒模型有什么区别？
    6. onload,onDownContentLoaded
    7. onload,哪些资源加载完？
    8. 遍历数组的方法？
    9. 判断是不是数组？Object.prototype.toString.call(), Array.isArray(), instanceof, 还有没有其他的？
    10. js事件代理的概念，作用，使用场景
    11. http，401,403
    12. promise,all,race
    13. 笔试题
            - 拍平数组，分了一层和多层数组
            - 实现评分打星星，最后写出来了，但是思路不清楚，面试官nice，还允许百度查api
                - 主要是获取用户点击的是哪个元素，以及怎么把分数和元素绑定
                - 想的方法是给元素加一个属性，属性值就是分数。这样就写定了，不是动态的。
                - 通过event.taget取到触发事件的元素，getAttribute()方法取出分数
    14. 第二个笔试题为什么是先写的外层逻辑再写的回调函数（因为一开始没想清楚怎么获取具体的点击元素）
    15. 除了加一个自定义属性标记分数，有没有什么其他的方法
    16. 实习遇到的问题，树形表格+懒加载的问题，面试官说用map存储的方法听起来有点hack，可能会有性能的问题
    17. 前端的学习路径
    18. git merge 和 git rebase
    19. 对容器有什么了解？（docker）
    20. 反问环节：
            - Q:公司是做云原生的，前端工程师主要负责什么工作？
            - A:可以参考阿里云，C端，对UI有比较多要求，云技术中台，PaaS平台

## 字节跳动 - TikTok（正式批）

### 一面（1h）
    1. script标签有哪些属性？
    2. script标签的src属性是怎么拼接出完整的请求URL来的（相对路径和绝对路径）？
    3. async 和 defer 的区别？分别在什么场景下应用？
    4. 遍历对象的方法和区别？是否可以遍历到原型属性，Symbol类型？
    5. 遍历器的概念
    6. Map对象了解多少？和普通的对象有什么不同？
    7. 水平垂直居中，写一下？（越多越好，CSS属性要熟悉，不要太依赖flex）
    8. 元素的 margin , padding 如果采用百分比，是相对什么的百分比（包括水平和垂直方向）？
    9. promise了解多少？原型方法有哪些(then, catch,)？静态方法有哪些(resolve,reject,all,race)？
    10. 数据库，join, 左连接，右连接，全连接，自然连接的区别？
    11. 编程题：给定一个对象，返回对象的深度（基本类型+1，引用类型+2）

面试官评价：  
补基础知识 广度不够，编码速度需加快

<br>
<br>
<br>

### 二面（1h）
    1. 进程和线程的异同
    2. 页面调度算法有哪些，LRU实现过没有，最近最不常用你会怎么实现？
    3. virtual DOM的引入是为了什么？diff算法的原理
    4. http的请求方法
    5. 从地址栏输入到最后页面渲染发生了什么？ 
    6. 编程题：
    7. promise延时处理 function(ms,promise)，面试官提示之后写出来了
    8. 事件调度中心，写了有点久才写出来

面试官评价：  
2面没有太大亮点，包括编码习惯和过往实习 项目。你补一下。  
3面除了稳定发挥可能需要突出的地方 否则通过了也有可能审批不下来。  
基础知识和编码能力一般 ，赶紧补一下哈加油。  

<br>
<br>
<br>

### 三面（1h） 凉
    1. 讲一讲项目
    2. 实习经历
    3. 在学校和在公司有什么不同？有什么感受？
    4. 职业方面对未来有什么规划？
    5. 平常是怎么学习的？
    6. 实现一个裁剪的组件（类似于QQ截图）？有什么思路？
    7. 实现一个拖拽的组件？有什么思路？怎么提高流畅度和性能？
    8. 对前端路由了解多少？存储路由信息你会选择什么数据结构？实现类似history模式的功能
    9. 在线实时通讯（类似QQ聊天），从A发出消息到B接收到消息，这个过程发生了什么？从计网的分层模型来分析
    10. 算法题：在快排的基础上，找出数组中第K大的数，数组中可能会有重复元素（草，快排都忘记了）
        方法一：快排然后倒序统计出现的元素
        方法二：先去重再快排

面试官评价：  
面试官应该没有评价，答得一塌糊涂


## 奇安信 BBFE前端团队
### 一面(40min)
    1. 问实习经历
    2. 问项目，负责什么模块，有什么难点或印象深刻的点
    3. 盒子模型（讲了讲八股文，面试官说就这些？然后面试官提到了一个匿名内联盒子的概念）
    4. 行内元素和块级元素分别有哪些？
    5. 除了display，还有什么方法转换元素类型，行内和块级
    6. 笔试题复盘，（面试官问了没有做出来的那题,让重新思考，后来面试官看了代码说思路基本是对的（hashMap））
    7. Map是怎么做到查找效率极高的？对应什么数据结构（说的是记录hash表，记录索引，面试官说不太准确，可以类比内存寻址）

面试官建议：
1. 对新兴技术保持好奇心
2. 要有钻研精神（盒子模型的内容还是比较丰富有趣的）

提到的笔试题：

    以下是一个常数列表：
    char_list=[32, 39, 45, 33, 34, 35, 36, 37, 38, 40, 41, 42, 44, 46, 47, 58, 59, 63, 64, 91, 92, 10, 9, 93, 94, 95, 96, 123, 124, 125, 126, 43, 60, 61, 62, 215, 247, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 65, 98, 66, 99, 67, 100, 68, 101, 69, 102, 70, 103, 71,104, 72, 105, 73, 106, 74, 107, 75, 108, 76, 109, 77, 110, 78, 111, 79, 112, 80, 113, 81, 114, 82, 115, 83, 116, 84, 117, 85, 118, 86,119, 87, 120, 88, 121, 89, 122, 90];
    总共 有99个元素，将对应的数字转为以1为起点的下标，即，32的下标为1, 90的下标为99
    不借助任何库函数，编写 尽量高效的算法，对于每一个数字，期望算法复杂度为O(1)，不因上面的常数表的长度变化 而变化 ，即使上表元素个数为9999
    如 输入 [ 32,45] 需要输出 1,3 ，需要的复杂 度为 2个操作，即完成整个输出的时间只与输入 的序列 长度有关而与常数表的长度无关。


## 北森云计算
### 一面（45min）

1. 有没有发布过npm包？读过开源项目代码？
2. 数组和链表的区别？
3. 跨域是怎么做的？
4. TCP是否可以实现跨域？（这里没有太听清楚，感觉像是说TCP）
5. 有没有封装过组件？设计一个Model（遮罩）组件？
6. axios拦截器怎么配置？
7. axios请求拦截？


面试官建议：
1. 打好基础，有好多问题都可以答得上7，80，就是最后一点答不清楚
2. 保持探索的热情

## 政采云
### 一面（30min）
1. 前端框架用的是哪个？React有没有了解呢？
2. 计算属性和监听属性,什么场景中使用？
3. 在项目场景中怎么用的计算属性和监听属性
4. v-for的作用,key值的作用？v-for的原理
5. vue data 为什么要是一个方法？
6. created 和 mounted 
7. vue 通信方式(要重点复习兄弟组件的通信)
8. vuex，在哪里声明状态，在哪里调异步接口请求（这个完全忘记了）。
9. 前端早早聊，vue的新特性有没有了解
10. vite有没有了解，前端比较前沿的技术
11. vite为什么打包速度会变快？
12. vue表单提交是怎么实现？有些输入框要校验。
13. 有没有做过分页表格？需要后端给哪些数据？
14. 删除表格的某一项后要做什么处理？
15. 如果删除的正好是最后一页最后一条数据还要做什么处理
16. ES6箭头函数有什么了解
17. Promise有没有用过？有哪几种状态
18. 在什么场景中用到过arguements对象
19. 同时发出10个请求，全部成功之后做一些处理（Promise.all）
20. 刚刚提到了静态方法，什么是静态方法？
21. 刚刚说到了原型链，有什么了解
22. 学过什么数据结构？了解比较多的是什么
23. 树学过哪些？链表呢？双向链表和环
24. 样式这一块用过什么什么布局方式
25. flex布局，主轴和交叉轴
26. 实现一个左中右布局，左右固定，中间自适应
27. 从master切一个新的分支，完整的命令是什么？
28. 分支推到远程仓库
29. 修改完提交代码的过程
30. 代码冲突了怎么办
31. 访问环节：
    技术栈：前台vue,后台react,移动端flluter

面试官建议：
1. 对前端新的方向的东西多了解


## 收钱吧
### 1. 一面（50min）
   1. 笔试题回顾：声明字符串的方法有哪些？字面量，String包装类，String类，类型转换...
   2. 字面量和String类创建的字符串有什么区别？创建的过程有什么区别
   3. js数据类型
   4. 内存泄漏的定义，场景，优化
   5. 垃圾回收机制，基本类型和引用类型的回收有什么区别？
   6. 前端本地存储，区别，用法和场景
   7. webpack相关
   8. babel是什么，在项目中怎么配置？
   9. npm相关，--dev加了和没加有什么区别？
   10. dependencies 和 devDependencies的区别
   11. 安装的时候怎么指定安装devDependencies
   12. SSR，为什么要SSR，有没有用过SSR
   13. SSR除了SEO优化，还有什么作用
   14. 输入URL到页面渲染的过程
   15. 客户端渲染和服务端渲染的区别？返回的数据有什么区别？

从问webpack就开始不会了，弄得前面问了什么都忘了，都不敢问面试官有什么建议了哈哈哈