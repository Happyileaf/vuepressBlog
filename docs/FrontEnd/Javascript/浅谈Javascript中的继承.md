---
theme: smartblue
---
**这是我参与8月更文挑战的第5天，活动详情查看：[8月更文挑战](https://juejin.cn/post/6987962113788493831 "https://juejin.cn/post/6987962113788493831")**

## 继承
继承是OO语言中非常重要的一个概念。由于Javascript的函数没有函数签名的概念，所以Javascript中的继承都是实现继承，主要是依靠原型链来实现。

这里先区分两个概念

**实例属性和方法**：实例对象自身所拥有的属性和方法，实例之间互不影响。

**原型属性和方法**：实例对象的原型所拥有的属性和方法，相同原型的构造函数所创造的实例对象之间共享的属性和方法。

## 实现继承的六种方法

### 1. 原型链继承


```js
function Parent () {
    this.name = 'Kevin';
    this.colors = ['red','green','blue']
}

Parent.prototype.getName = function () {
    console.log(this.name);
}

function Child () {
    this.name = 'Alice';
}

Child.prototype = new Parent();

var child1 = new Child();

console.log(child1.getName()) // Kevin

```

注意：
1. 原型链继承的本质是重写了子类的原型对象，把超类的实例作为子类的原型对象。
2. 子类所继承的属性和方法全部都在子类的原型上，子类实例自身是没有超类中的属性和方法的。
3. 重写子类的原型对象后，子类的构造器会丢失，所以需要根据情况恢复正确的构造器。
4. 在通过原型链继承时，不能使用对象字面量来设置原型方法，这样会再次重写原型对象，而且对象字面量的原型是Object，这样原来子类和超类的继承关系就被破坏了。



缺点：
1. 超类实例的属性被所有子类实例共享，因为原型上的属性是所有实例共享的，一个实例修改了原型，其他实例也会收到影响。
2. 无法向超类的构造函数传参
3. 继承比较单一


### 2. 借用构造函数继承

```js
function Parent () {
    this.name = 'Kevin';
    this.colors = ['red','green','blue']
}

function Child () {
    Parent.call(this);
}

var child1 = new Child();

child1.colors.push('purple');

console.log(child1.colors); // ['red','green','blue','purple']

var child2 = new Child();

console.log(child2.colors); // ['red','green','blue']

```
注意：
1. 借用构造函数继承的本质是在子类构造函数中调用超类的构造函数。超类的实例属性和方法就可以被继承到子类实例自身上。
2. 子类从超类继承的实例属性和方法全部都在子类的实例自身上，避免了原型属性被所有实例共享。这个例子中每一个子类实例自身都有colors数组，这样就可以避免共享原型上的属性。

优点：
1. 可以向超类的构造函数传参
2. 可以多次调用不同的超类构造函数，多次call()
2. 解决了原型链继承缺点1、2、3。

缺点：
1. 只能继承超类的实例属性和方法，没有继承超类的原型属性和方法。
2. 方法都在构造函数中定义，无法实现构造函数的复用，每次创建实例都会创建一遍方法。
3. 超类的实例方法会继承给每一个子类，这样在每一个子类中都会有超类实例方法的副本，可能影响性能。这些函数的功能是相同的，但是本质上是不同的函数（在堆内存中开辟了新的空间）。


### 3. 组合继承


```js
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;

}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child1 = new Child('kevin', '18');

child1.colors.push('black');

var child2 = new Child('daisy', '20');

```

注意：
1. 组合继承将原型链继承和借用构造函数继承的技术组合到一起，发挥这两种方法的优点。
主要的思路是通过原型链实现原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承。
这样可以在原型上定义通用的方法，让所有实例共享，实现了函数的复用，而不必将父类的实例方法都保存到子类实例上。在子类构造函数中定义自身的属性，保证每个实例都有它自己的属性。

优点：
1. 可以向超类的构造函数传参
2. 可以实现多继承
3. 可以继承超类的实例属性和方法，也可以继承超类的原型属性和方法。
4. 实现了函数复用
5. 解决了共享原型属性的问题，子类实例中的属性会覆盖原型中的属性（属性同名的情况），在原型链的读取中会先读取子类的实例属性。

缺点：
1.调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了），比较消耗内存

### 4. 原型式继承


```js
function createObj(o) {
    function F(){}
    F.prototype = o;
    return new F();
}

```

注意：
1. 原型式继承和ES5 Object.create()的原理一样，将传入的对象做为新创建的对象的原型。
2. 通过函数进行包装，返回新创建的对象。

缺点：
1. 和原型链继承一样，超类实例的属性被所有子类实例共享。

### 5. 寄生式继承


```js

function createObj (o) {
    var clone = Object.create(o);
    clone.sayName = function () {
        console.log('hi');
    }
    return clone;
}

```

注意：
1. 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。通俗一点说就是在原型式继承的外部又套了一层函数，在这个函数里面可以增强原型式继承返回的对象（添加属性或方法）。

缺点：
1. 跟借用构造函数模式一样，每次创建对象都会创建一遍实例方法，没有体现函数的复用性。

### 6. 寄生组合式继承


```js

function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

// 组合
function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

// 寄生
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

// 组合
function prototype(child, parent) {
    var prototype = object(parent.prototype);    // 创建对象
    prototype.constructor = child;               // 增强对象
    child.prototype = prototype;                 // 指定对象
}

prototype(Child, Parent);

```

注意：
1. 子类继承的原型属性和方法并不在子类的原型上，而是在子类的原型的原型上。


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5132b3abb3e4144a5ab344b6e46686c~tplv-k3u1fbpfcp-watermark.image)
优点：
1. 开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。————《javascript高级程序设计》
2. 只调用了一次超类的构造函数，避免在子类的prototype中创建不必要的属性或方法。
3. 保持了原型链的继承关系，可以正常使用 instanceof 和 isPrototypeOf。

## 继承的基本思想

1. 属性一般通过调用构造函数继承，可以将属性继承到子类实例，体现的是属性的专有性。
2. 方法一般通过原型来继承，可以实现函数的复用，体现的是函数的通用性。
3. 如果重写了原型对象，要考虑修复构造器。

当然这些不是一定的，可以根据情况调整。