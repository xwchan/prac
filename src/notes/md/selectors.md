[选择器模块](https://www.w3.org/TR/selectors-3/)       

> Level 3 >> REC <sub>current status</sub> >> REC <sub>next status</sub>
> 
> <sub>[Level 4 >> WD <sub>current status</sub> >> WD <sub>next status</sub>](https://www.w3.org/TR/selectors-4/)</sub>


### 选择器

> E / F: 元素/标签
> 
> foo : 属性


选择器 | 含义 | 类型 | Level
---|---|---|---
*  | 任何元素 | 通用选择器 | 2
E | 元素E | 类型选择器 | 1
E[foo] | 具有"foo"属性的元素E | 属性选择器 | 2
E[foo="bar"] | 元素E, 其"foo"属性值等于"bar" | 属性选择器 | 2
E[foo~="bar"] | 元素E, 其"foo"属性值是由空格分隔的值列表，其中一个值是"bar" | 属性选择器 | 2
E[foo^="bar"] | 元素E, 其"foo"属性值恰好以"bar"开头的 | 属性选择器 | 3
E[foo$="bar"] | 元素E, 其"foo"属性值恰好以"bar"结尾的 | 属性选择器 | 3
E[foo*="bar"] | 元素E, 其"foo"属性值包含"bar"子字符串 | 属性选择器 | 3
E[foo\|="en"]  | 元素E, 其"foo"属性值是由连字符（‘-’）分割的值列表，且以"en"开头(从左开始) | 属性选择器 | 2
E:root | 文档根元素 | 结构化伪类选择器 | 3
E:nth-child(n) | 元素E, 且是其父元素的第n个子元素 | 结构化伪类选择器 | 3
E:nth-last-child(n) | 元素E, 且是其父元素的倒数第n个子元素 | 结构化伪类选择器 | 3
E:nth-of-type(n) | 元素E, 且是其同级里的第n个 | 结构化伪类选择器 | 3
E:nth-last-of-type(n) | 元素E, 且是其同级里的倒数第n个 | 结构化伪类选择器 | 3
E:first-child | 元素E, 且是其父元素的第一个孩子 | 结构化伪类选择器 | 2
E:last-child | 元素E, 且是其父元素的最后一个孩子 | 结构化伪类选择器 | 3
E:first-of-type | 元素E, 且是其同级里的第一个 | 结构化伪类选择器 | 3
E:last-of-type | 元素E, 且是其同级里的最后一个 | 结构化伪类选择器 | 3
E:only-child | 元素E, 且是其父元素的唯一一个子元素 | 结构化伪类选择器 | 3
E:only-of-type | 元素E, 且是其同级里的唯一一个类型 | 结构化伪类选择器 | 3
E:empty | 没有子元素（包括文本节点）的元素E | 结构化伪类选择器 | 3
E:link & E:visited | 目标尚未被访问（：link）或已被访问（：visited）的超链接源锚 | 链接伪类选择器 | 1
E:active & E:hover & E:focus | 用户操作期间的元素伪类 |用户操作伪类选择器 | 1 & 2
E:target | 元素E是引用URI的目标 | 目标伪类选择器 | 3
E:lang(fr) | 元素E, 且其语言是"fr" | 语言伪类选择器 | 2
E:enabled & E:disabled | 被启用（：enabled）或禁用（：disabled）的元素E | UI元素状态伪类选择器 | 3
E:checked | 被选中的元素E（例如单选按钮或复选框） | UI元素状态伪类选择器 | 3
E::first-line | 元素E的第一行 | 伪元素选择器 | 1
E::first-letter | 元素E的第一个字母 | 伪元素选择器 | 1
E::before | 在元素E前生成内容 | 伪元素选择器 | 2
E::after | 在元素E后生成内容 | 伪元素选择器 | 2
E.myClass | 类 | 类选择器 | 1
E#myid | ID为"myid"的元素E | ID选择器 | 1
E:not(s) | 与简单选择器s不匹配的元素E | 否定伪类 | 3
E F | 元素F（元素E的后代） | 后代选择器 | 1
E > F | 元素F（元素E的子元素） | 子选择器 | 2
E + F | 元素F（**紧跟** 在元素E之后） | 下一个兄弟选择器 | 2
E ~ F | 元素F（在元素E之后） | 后继选择器 | 3

#### 简单选择器
> 简单选择器通常以元素选择器或者通用选择器开始，且序列中不再出现元素选择器或通用选择器
##### 命名空间 @namespace

    @namespace foo url(http://www.example.com); /*@namespace 声明一个命名空间，命名空间后用竖线（|）作为分隔符*/
     foo|h1 { color: blue }  /*仅匹配h1“ http://www.example.com”命名空间中的h1元素*/
     foo|* { color: yellow } /*将匹配“ http://www.example.com”命名空间中的所有元素*/
     |h1 { color: red } /*将匹配没有命名空间的h1元素*/
     *|h1 { color: green } /*将匹配所有命名空间的h1元素*/
     h1 { color: green } /*同上，将匹配所有命名空间的h1元素*/

##### 1. 通用选择器 *

    *[hreflang|=en] === [hreflang|=en]
    *.warning === .warning
    *#myid === #myid

    /* 这类情况不能省略* */
    div :first-child === div *:first-child
    div:first-child

###### 通用选择器和命名空间

    ns|* /*ns名称空间中的所有元素*/
    *|* /*所有元素*/
    |* /*所有没有命名空间的元素*/
    * /*如果未指定默认名称空间，则等效于"*|*"。否则，等效于"ns|*"，其中ns是默认名称空间。*/

    包含先前未声明过的名称空间前缀的通用选择器是无效的选择器。

##### 2. ID选择器

1. '#'加CSS标识符

2. CSS中标识符只能包含字符 [a-zA-Z0-9]、ISO10646字符中 U+00A0 及之后的字符，以及 - 和 _，不能以 1 个数字、2 个连字符、或者后面跟着数字的连字符开头。

##### 3. 类型选择器

1. 类型 == 标签 == 元素

###### 类型选择器和命名空间

    ns|E { color: blue }  /*仅匹配h1命名空间ns中的E元素*/
    *|E { color: green } /*将匹配所有命名空间的E元素*/
    |E { color: red } /*将匹配没有命名空间的E元素*/
    E { color: green } /*同上，将匹配所有命名空间的E元素*/

##### 4. 属性选择器

1. [attr] 表示具有attr属性的元素，无论属性的值如何

2. [attr=val] 表示一个元素，其attr属性的值恰好是“val”。

3. [attr~=val] 表示一个元素，该元素的attr属性值为空格分隔的单词列表，其中一个单词恰好是“val”。如果“val”包含空格或空字符串，则它不是指任何内容（因为单词由空格分隔）。

4. [attr\|=val] 表示具有attr属性的元素，其值要么完全是“val”，要么以“val”开头，紧随其后的是“-”

###### 子字符串匹配属性选择器

5. [attr^=val] 表示具有attr属性的元素，其值以前缀“val”**开头**。如果“val”是空字符串，则选择器不代表任何内容。

6. [attr$=val] 表示具有attr属性的元素，其值以后缀“val”**结尾**。如果“val”是空字符串，则选择器不代表任何内容。

7. [attr*=val] 表示具有attr属性的元素，其值至少包含子字符串“val”的一个实例。如果“ val”是空字符串，则选择器不代表任何内容。

###### 属性选择器和命名空间

    @namespace foo “http://www.example.com”;
    [foo|attr=val] { color: blue } /*将仅匹配attr具有“ val”值的“ http://www.example.com”命名空间中属性的元素 */
    [*|attr] { color: yellow } /*将匹配任何命名空间具有该属性的元素*/
    [|attr] { color: green } /*将仅匹配具有属性的元素，该属性不在名称空间中。*/
    [attr] { color: green } /*同上*/

##### 5. 类选择器

1. .myclass === [class~="myclass"]

        h1.pastoral {color：green}

        < h1 >不是绿色< /h1 >
        < h1 class =“ pastoral”>是绿色< /h1> /*匹配到这个*/

##### 6. 伪类选择器

> 始终由冒号（：）开始

###### 动态伪类

1. 链接伪类 :link 和 :visited
    - ：link 未访问过的链接
    - ：visited 访问过的链接
    - 一段时间后，UA可以选择将链接返回到：link状态
    - 两种状态互斥

2. 用户操作伪类 :hover :active 和 :focus
    - ：hover 光标指针悬停在元素框上时触发
    - ：active 用户激活时触发，比如用户点击鼠标按钮到释放它之间的这段时间。多鼠标按钮情况下，仅适用于主要或主要激活按钮（通常是鼠标左键）
    - ：focus 适用于具有焦点的元素（能接受键盘或鼠标事件的，或其它形式的输入）
    - 这些状态不互斥

    a:link    /* unvisited links */
    a:visited /* visited links */
    a:hover   /* user hovers */
    a:active  /* active links */

    a:focus:hover /* 匹配处在:focus和:hover的a标签 */

###### 目标伪类 :target

1. 一些URI引用资源中的位置，以#开始，紧跟锚标识符

2. 目标元素，是指具有锚点的URI链接到文档中的某个特定元素

        /*for example*/

        *:target { color: red; }

        < a href="#hello" >跳转< /a >

        < section id="hello" >hello< /section >

        效果： 点击“跳转”后，导航栏地址由file:///C:/Users/zxw/Desktop/W3C/test.html变成file:///C:/Users/zxw/Desktop/W3C/test.html#hello，并且hello变红

###### 语言伪类 :lang()

1. 由lang属性定义语言

2. 属性不会继承
        
        /*for example*/
        // ：lang(fr)仅匹配body，不会匹配p标签，因为它没有lang属性
        < body lang = fr >
          < p > Je suisfrançais。< /p >
        < /body >

###### UI元素状态伪类

1. :enabled 和 :disabled

2. :checked

3. :indeterminate 单选和复选框元素可以由用户切换，但是有时处于不确定状态，既未选中也未选中。（兼容性不太好）


###### 结构化伪类

1. :root HTML文档中始终是html元素

2. :nth-child() 
    - odd 奇数
    - even 偶数
    - 2n+1 奇数
    - 2n+0 或 2n 偶数
    - 其它表达式，如ax+b
        - a==0，去掉ax；仅b，则b为正，省略'+'号
        - a==1 || a==-1，省略'1'
        - a==0 && b==0，则伪类不表示文档中的任何元素
        - b==0，省略b
        - b<0, b前面必须删去'+'号

                ：nth-​​child（10n-1）/ *代表第9、19、29等，元素* /
                ：nth-​​child（10n + 9）/ *相同* /
                ：nth-​​child（10n + -1）/ *语法无效，将被忽略* /

        - 空格的正确使用

                带空格的有效示例：

                ：nth-​​child（3n +1）
                ：nth-​​child（+ 3n-2）
                ：nth-​​child（-n + 6）
                ：nth-​​child（+6）
                带有空格的无效示例：

                ：nth-​​child（3 n）
                ：nth-​​child（+ 2n）
                ：nth-​​child（+ 2）

    - 值可以为负值，html | tr：nth-​​child（-n + 6）/* 代表XHTML表的前6行 */
    
3. :nth-last-child()

4. :first-child
    - :nth-child(1) === :first-child

5. :last-child
    - :nth-last-child(1) === :last-child

6. :only-child
    - first-child === last-child

7. :nth-of-type()

8. :nth-last-of-type()

9. :first-of-type
    - :nth-of-type(1) === :first-of-type

10. :last-of-type
    - :nth-last-of-type(1) === :last-of-type

11. :only-of-type
    - first-of-type === last-of-type

12. :empty
    - 没有子元素（包括空标签和文本节点）

###### 否定伪类 :not(selector)

1. selector代表一个简单选择器

2. not不能嵌套，即:not(:not(...))是无效的；另外，伪元素也不能作为not的参数

        /*for example*/
        html | *：not（：link）：not（：visited） /* 代表除链接之外的所有HTML元素 */

##### 7. 伪元素选择器

> 始终由双冒号（::）开始

1. ::before

2. ::after

3. ::first-line
    - 实际上，是展示到 **浏览器** 中的第一行，而不是代码中的第一行；除非代码中使用< br >分行了
4. ::first-letter

##### 8. 组合选择器

1. 后代选择器（空格）

2. 孩子选择器（>）

3. 兄弟选择器（+）
    - pre + e, 修饰紧跟在pre后的e

4. 后继选择器（~）

        ul, ol { list-style: none; }
        ul>li { color: brown; }
        ul li + li { color: red; }
        ul ~ ol { color: blue; }
   
           < section>
               < ul>
                   < li>1< /li>
                   < li>2< /li>
                   < li>3< /li>
               < /ul>
               < ol>
                   < li>4< /li>
                   < li>5< /li>
                   < li>6< /li>
               < /ol>
           < /section>
   
           效果
           1 棕色
           2 红色
           3 红色
           4 蓝色
           5 蓝色
           6 蓝色

### 大小写

1. ASCII码范围

2. Selectors语法不区分大小写

3. 选择器的元素名、属性名、属性值的大小写敏感性取决于文档语言（HTML大小写不敏感，XML大小写敏感）

### 选择器语法

1. 简单选择器，是指不被组合子分离的

        /*for example*/
        section#chapter1

2. 选择器，是由一个或多个简单选择器组成的序列，组合符包括 **空格** 、**大于号（>）** 、**加号（+）** 、**波浪线（~）**

3. 组合符和选择器周围的空白字符仅限 **空格** 、 **制表符** 、 **换行符** 、 **回车** 、**换页符**

4. 一个伪元素可以附加给选择器中的最后一个简单选择器

### 选择器组

1. 以逗号（，）分隔

2. 组中只要有一个选择器是无效的，则整个选择器组将无效（整个样式规则删除）

        h1 {font-family：sans-serif} /*有效*/
        h2..foo {font-family：sans-serif} /*无效*/
        h3 {font-family：sans-serif} /*有效*/

        不等于：

        h1，h2..foo，h3 {font-family：sans-serif} /*整个无效*/

### 选择器的specificity
1. ID选择器的数量 = a
2. 类选择器、属性选择器、伪类选择器 = b
3. 类型选择器、伪元素选择器 = c
4. 无视通用选择器
5. :not()内的选择器计数同上，但是not()伪类不参与计数

specificity = a 拼接 b 拼接 c

    *               /* a=0 b=0 c=0 -> specificity =   0 */
    LI              /* a=0 b=0 c=1 -> specificity =   1 */
    UL LI           /* a=0 b=0 c=2 -> specificity =   2 */
    UL OL+LI        /* a=0 b=0 c=3 -> specificity =   3 */
    H1 + *[REL=up]  /* a=0 b=1 c=1 -> specificity =  11 */
    UL OL LI.red    /* a=0 b=1 c=3 -> specificity =  13 */
    LI.red.level    /* a=0 b=2 c=1 -> specificity =  21 */
    #x34y           /* a=1 b=0 c=0 -> specificity = 100 */
    #s12:not(FOO)   /* a=1 b=0 c=1 -> specificity = 101 */

- 允许重复出现同一简单选择器，增加specificity

