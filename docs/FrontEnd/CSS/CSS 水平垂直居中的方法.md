---
theme: juejin
---


![abe8eb28-341e-4797-a327-3b0492cdb2ab.jpg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d78b3b624144113a74ac26a317c3f38~tplv-k3u1fbpfcp-watermark.image)



# CSS 水平垂直居中的方法

CSS 水平垂直居中一直是一个值得讨论的问题，面试的时候也经常被问到。这里做一个小总结。

![在这里插入图片描述](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4d5f3a0fad154fa5aad04c910342b608~tplv-k3u1fbpfcp-zoom-1.image)


在实现居中的时候要考虑
1. 元素的宽高是否确定
2. 元素是行内还是块级元素等


## 水平居中

利用块级元素撑满父级元素的特点，设置子元素的 ` margin:0 auto; `平分左右空间

## 水平垂直居中

>  居中元素宽高确定
>  
>  - absolute + margin(负)
>  
>  - absolute + margin auto
>  
>  - absolute + calc

> 居中元素宽高不确定
> 
>  - absolute + transform 
>  
>   - flex
>  
>  - grid
>  
>  - lineheight 
>  
>   - css-table 
>   
>  - table 
> 
>   - writing-mode 

## HTML文件模板

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 这里是公共样式 */

        .wraper {
            border: 1px solid red;
            width: 300px;
            height: 300px;
        }

        .box {
            background: green;
        }

        .size {
            width: 100px;
            height: 100px;
        }

        /* 这里是公共样式 */
    </style>
</head>

<body>
    <div class="wraper">
        <div class="box size">hello!</div>
    </div>
</body>

</html>
```

### 居中元素宽高确定
##### 1. ` absolute + margin(负) `

```css
.wraper {
    position: relative;
}
.box {
    position: absolute;;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
}

```

> 绝对定位的百分比是相对于父元素的宽高，通过这个特性可以让子元素的居中显示，但绝对定位是基于子元素的左上角，期望的效果是子元素的中心居中显示
> 为了修正这个问题，可以借助外边距的负值，负的外边距可以让元素向相反方向定位，通过指定子元素的外边距为子元素宽度一半的负值，就可以让子元素居中了
> 

> 优点：比较好理解，兼容性也很好
> 缺点：需要知道子元素的宽高（如果不知道宽高无法计算margin的值，用百分比设置无法达到效果）


##### 2. ` absolute + margin auto `

```css
.wraper {
    position: relative;
}
.box {
    position: absolute;;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

```

> 这种方式通过设置各个方向的距离都是0，此时再讲margin设为auto，就可以在各个方向上居中了
> 

> 
> 优点：比较好理解，兼容性也很好
> 缺点：需要知道子元素的宽高（如果不指定宽高box会撑满整个外部元素）

##### 3. ` absolute + calc `

```css
.wraper {
    position: relative;
}
.box {
    position: absolute;;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
}

```

> 本质上和第一种一样，通过定位实现。区别在于第一种先移动再往回调整，这一种先精确计算然后移动。
> 感谢css3带来了计算属性，top的百分比是基于元素的左上角，那么在减去宽度的一半就好了

> 
> 优点：比较好理解，依赖calc的兼容性
> 缺点：需要知道子元素的宽高（如果不知道宽高无法计算修正偏移量，用百分比设置无法达到效果）



### 居中元素宽高不确定
##### 4. ` absolute + transform `

```css
.wraper {
    position: relative;
}
.box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

> 修复绝对定位的问题，还可以使用css3新增的transform，transform的translate属性也可以设置百分比，其是相对于自身的宽和高，所以可以将translate设置为-50%，就可以做到居中了

> 
> 优点：比较好理解，依赖translate2d的兼容性
> 缺点：



##### 5. ` flex `

```css
.wraper {
    display: flex;
    justify-content: center;
    align-items: center;
}

```

> 优点：非常强大的布局能力
> 缺点：兼容性问题（flex在移动端的兼容性较好）


##### 6. ` grid `

```css
.weaper {
    display: grid;
}
.box {
    align-self: center;
    justify-self: center;
}

```

> 优点：非常强大的布局能力
> 缺点：兼容性问题


##### 7. ` lineheight  `
###### 单行/N行文本对齐

```css
.box {
            text-align: center;
            line-height: 300px;
}
```

```css
.box {
            text-align: center;
            line-height: 50px;
            /* 文本为6行 */            
}
```

> 行内单行文本垂直居中：父元素高度确定，子元素的line-height等于父元素的height

> 优点：比较好理解 
> 缺点：box元素的高度变化了，如果存在背景颜色可能会影响布局效果

###### 对于行内元素

```css
.wraper {
            line-height: 300px;
            text-align: center;
}

.box {
            display: inline;
            vertical-align: middle;
}
```

> vertical-align: middle;
> 注意需要设置外部元素的行高


> 优点：
> 缺点：




##### 8. ` css-table `

```css
.wraper {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.box {
    display: inline-block;
}

```

> css新增的table属性，可以让我们把普通元素，变为table元素的现实效果，通过这个特性也可以实现水平垂直居中

> 优点：比较好理解 兼容性也很好
> 缺点：




##### 9. ` table `

```html
<table>
    <tbody>
        <tr>
            <td class="wraper">
                <div class="box">123123</div>
            </td>
        </tr>
    </tbody>
</table>

```

```css
.wraper {
    text-align: center;
}
.box {
    display: inline-block;
}

```

> table可以被用来做页面布局，现在没人这么做了，但table也能够实现水平垂直居中

> 优点：比较好理解 兼容性也很好
> 缺点：增加很多冗余代码




##### 10. ` writing-mode `
不是特别熟悉，先做个记录




