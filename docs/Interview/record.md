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

```
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

```
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

