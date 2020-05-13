[弹性伸缩盒](https://www.w3.org/TR/css-flexbox-1/)

> Level 1 >> WD <sub>current status</sub> >> CR <sub>next status</sub>


### 布局模式
1. block layout，用于文档布局
2. inline layout，用于文本
3. table layout，用于二维数据和表格
4. position layout，用于定位
5. flex layout, 用于更复杂的应用程序和网页
    - 可以在任何方向上进行布局（向左、向右、向下、向上）
    - 可以样式层面上逆转或重排显示顺序
    - 可以沿主轴单行排布，也可以沿交叉轴多行排布
    - 可以响应可用空间改变大小
    - 可以按主轴和交叉轴对齐
    - 可以沿主轴动态折叠或展开，同时保持容器大小不变

### flex布局模型
> 开启弹性盒模型布局
> 
> display: flex | inline-flex; 

![](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)

#### 主轴 main axis
水平方向，从左至右
#### 交叉轴 cross axis
垂直方向，垂直于主轴，从上到下

#### flex container
1. flex：块级flex容器
2. inline-flex：内联级flex容器

> 创建一个flex容器会创建新的flex格式化上下文
> 
> 1. float不会入侵flex容器
> 
> 2. 容器的边距（margin）不会折叠
> 
> 3. overflow也适用
> 
> 以下将失效（被无视）
> 
> 1. float 和 clear -> flex items
> 
> 2. vertical-align -> flex items
> 
> 3. ::first-line 和 ::first-letter -> flex containers

#### flex items
1. flex容器中的子元素即flex items
2. 文本节点会被包裹在一个匿名块容器中作为一个flex item。仅空白文本节点则不会显示它

        <div style="display:flex">

            <!-- flex item: block child -->
            <div id="item1">block</div>

            <!-- flex item: floated element; floating is ignored -->
            <div id="item2" style="float: left;">float</div>

            <!-- flex item: anonymous block box around inline content -->
            anonymous item 3

            <!-- flex item: inline child -->
            <span>
                item 4
                <!-- flex items do not split around blocks -->
                <q style="display: block" id=not-an-item>item 4</q>
                item 4
            </span>
        </div>

    - 匿名块容器不可设置样式规则，样式将从flex容器继承而来

3. 绝对定位的flex item将脱离流，不参与flex布局
4. flex items边距不会折叠
5. [visibility:collapse](https://www.w3.org/TR/css-flexbox-1/#visibility-collapse)仅不渲染（与display:none不同）被折叠的flex items，不影响cross size
        
        /* menu items use flex layout so that visibility:collapse will work */
        nav > ul > li {
          display: flex;
          flex-flow: column;
        }
        /* dynamically collapse submenus when not targetted */
        nav > ul > li:not(:target):not(:hover) > ul {
          visibility: collapse;
        }

        <nav>
            <ul>
              <li id="nav-about"><a href="#nav-about">About</a>
                …
              <li id="nav-projects"><a href="#nav-projects">Projects</a>
                <ul>
                  <li><a href="…">Art</a>
                  <li><a href="…">Architecture</a>
                  <li><a href="…">Music</a>
                </ul>
              <li id="nav-interact"><a href="#nav-interact">Interact</a>
                …
            </ul>
          </nav>


### 属性
#### 作用于 flex container 的属性
1. flex-direction 
> 决定主轴方向
> 
> flex-direction: row | row-reverse | column | column-reverse
> 
> 分别是 → ← ↓ ↑
> 
> 初始值：row

2. flex-wrap
> 控制单行或多行
> 
> flex-wrap: nowrap | wrap | wrap-reverse
> 
> 分别是 单行 多行 多行且交叉轴方向逆转
> 
> 初始值：nowrap
> 
> 注：换行与writing-mode有关，horizontal-tb（水平，从上至下）| vertical-rl(竖直，从右向左) | vertical-lr(竖直，从左到右)

3. flex-flow（速记，代替1.2）
> flex-direction 和 flex-wrap的速记
> 
> flex-flow: < flex-direction> || < flex-wrap >
> 
> 例 flex-flow: column wrap;

4. justify-content
> 主轴对齐
> 
> justify-content: flex-start | flex-end | center | space-between | space-around
> 
> 初始值： flex-start
> 
> 对齐示意图如下，flex item以彩色块表示

    ![](https://www.w3.org/TR/css-flexbox-1/images/flex-pack.svg)

5. align-items
> 交叉轴对齐
> 
> align-items: flex-start | flex-end | center | baseline | stretch
> 
> 分别是： 左对齐 右对齐 居中 两端对齐 每个item两侧间隔相等
> 
> 初始值：stretch

    ![](https://www.w3.org/TR/css-flexbox-1/images/flex-align.svg)

6. align-content
> 控制多轴的对齐方式
> 
> flex-start | flex-end | center | space-between | space-around | stretch
> 
> 初始值：stretch

    ![](https://www.w3.org/TR/css-flexbox-1/images/align-content-example.svg)

#### 作用于 flex items 的属性
1. order
> 决定flex items的排布优先顺序
> 
> order: < integer >
> 
> 初始值：0

2. flex-grow
> 增长因子（flex grow factor），容器内空间剩余时，决定flex item增长
> 
> flex-grow: < number >
> 
> 初始值：0?1?(文档矛盾了)
> 
> 注: 当值在0~1时，如果总和小于1，则它们不会占满（<100%）剩余空间；（建议值≥1）

3. flex-shrink
> 收缩因子（flex shrink factor），容器内空间不足时，决定flex item收缩
> 
> flex-shrink: < number >
> 
> 初始值：1
> 
> 注：收缩时，flex shrink factor * flex basis

4. flex-basis
> 指定初始main size
> 
> flex-basis: content | < width >
> 
> content = 最大内容的尺寸
> 
> 初始值：auto
> 
> 百分比参照物是flex container的main size

5. flex（速记，推荐适用，代替2.3.4）
> flex-grow flex-shrink 和 flex-basis的速记
> 
> 作用于flex items
> 
> flex: none | [ < flex-grow > < flex-shrink >? || < flex-basis > ]
> 
> flex值的情况
> 
> initial： 0 1 auto
> 
> auto: 1 1 auto
> 
> none: 0 0 auto
> 
> 其它: < positive-number > 1 0

6. align-self
> 交叉轴对齐
> 
> align-self: auto | flex-start | flex-end | center | baseline | stretch
> 
> 初始值：auto（继承父级align-item的值）

    ![](https://www.w3.org/TR/css-flexbox-1/images/flex-align.svg)


### flex布局算法

