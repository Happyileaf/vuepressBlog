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
    8. promise了解多少？原型方法有哪些(then, catch,)？静态方法有哪些(resolve,reject,all,race)？
    9. 数据库，join, 左连接，右连接，全连接，自然连接的区别？
    10. 编程题：给定一个对象，返回对象的深度（基本类型+1，引用类型+2）