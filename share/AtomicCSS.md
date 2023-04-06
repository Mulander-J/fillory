# CSS设计模式

## OOCSS

全称object-oriented-css,面向对象的CSS。既然是面向对象，那什么是OOCSS中的对象呢？OOCSS中所说的对象是一种可复用的视觉模型。OOCSS讲究复用，并快速高效的书写样式，且在日后便于修改、添加和维护。

Before:

```css
#button {

    width: 200px;

    height: 50px;

    padding: 10px;

    border: 1px solid #ccc;

    background: linear-gradient(#ccc, #222);

    box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;

}

#box {

    width: 400px;

    overflow: hidden;

    border: solid 1px #ccc;

    background: linear-gradient(#ccc, #222);

    box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;

}
```

After:

```css
.button {

    width: 200px;

    height: 50px;

}

.box {

    width: 400px;

    overflow: hidden;

}

.skin {

    border: solid 1px #ccc;

    background: linear-gradient(#ccc, #222);

    box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;

}
```

## SMACSS

SMACSS中把样式根据逻辑划分为了5个类别：

- base
- layout
- module
- state
- theme

### 1.base

base类似于我们常用的reset，就是设定标签的预设值。
在这一部分样式的要求是：不要出现任何的id selector和class selector，但可使用 属性选择器和伪类选择器。

```css
html{ … },   input[type=text]{ … },  a:hover { … }
```

### 2.layout

大区块的位置、布局样式。

```css
#header { margin-top: 20px 0; }, .container { margin: 0 auto; width: 960px; }
```

### 3.module

module即组件样式，需要能在任何地方复用的，自觉和bootstrap中的components非常相似。

```css
 .button { background-color: #foo; border: …; width: …;  box-shadow: …; padding: …;}

 .button a { color: #ddd; }
  /*或者 (多用class,少用tag)*/ 
 .button .link { color: #ddd; } 
```

### 4.state

状态，故控制module各个状态下的表现的样式。

```css
.button.hovered { background: …; }

.button.actived { background: …; }
```

### 5.theme

主题，也就是项目特有的主题下的样式，主视觉效果，主题的样式去override上面的样式，来达成需要的视觉效果，就类似于皮肤skin。

## BEM（Block____Element——Modifier）

BEM本身是有一套自己的工作流的，指的是由Yandex团队提出的一种前端命名方法论。
BEM的命名约定更严格，包含更多的信息。

- Block（块）：独立的、更高级别的组件化抽象。Class selector only。
- Element（元素）：Block的后代，是Block的构成元素。Class selector only。
- Modifier（修饰符）：注明了Block的不同状态或不同版本。

```css
.block {}

.block____element {}

.block——modifier {}
```

Example:

```css
.car {} //  创建了一个car block

.car____tire {} //car里面有组成元素（后代元素）  tire

.car——china {} //car有一个china造 的形态

.car——china____tire {}  //既然car有tire组成元素，那china car当然也有tire噢

.car____tire——new  //car里的tire 有new(old)的状态
```

## ACSS(atomic CSS、原子CSS)

ACSS即为原子CSS，就像自然界中把整个的物体不断拆分最后都是由原子之类构成的（化学没学好），这样也就不存在物体之间的差别了，所有事物都是原子，也就方便了描述。ACSS把每一条CSS rule都看做一个原子，给rule一个class类名

```css
.text-red { color: red; }   .text-blue { color: blue; }
```

```html
<div class="text-red">RED</div>
<div class="text-blue">BLUE</div>
```

ACSS最大的优点是，应对变化相当灵活，在页面较简单的情况下，很适合使用，但在复杂的场景中，html的混乱也会导致严重后果。我个人更愿意在项目或者模块开发之初使用ACSS，这样可以应对频繁修改的需求和设计。当需求和设计趋于完整稳定时，再去用模块化的思想重构它，把杂乱无章的class抽丝剥茧。所以ACSS让CSS代码的重构变得更容易了。

```bash
npx windicss-analysis
```

[State of CSS 2022](https://2022.stateofcss.com/en-US/)

[TailwindCSS](https://www.tailwindcss.cn/docs/configuration)

[UnoCSS](https://unocss.dev/guide/why)