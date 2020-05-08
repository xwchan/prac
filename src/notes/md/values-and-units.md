[值与单位模块](https://www.w3.org/TR/css-values-3/)       

> Level 3 >> CR <sub>current status</sub> >> PR <sub>next status</sub>
> 
> <sub>[Level 4 >> FPWD <sub>current status</sub> >> WD <sub>next status</sub>](https://www.w3.org/TR/css-values-4/)</sub>

### 语法
> CSS属性值包含关键字、数据类型（放在‘<‘与’>‘之间）以及组合关系

#### 值的组合器

分隔符|含义
---|---
并列 | 所给选项必须全部出现，按给定顺序
&&  | 所给选项全部出现，无顺序要求
\|\|  |   所给选项至少出现一个，无顺序要求
\|   |   所给选项只出现一个，无顺序要求
[]  |   分组

- 优先级：并列 > && > || > |
 
    ```
    例：  a b   |   c ||   d &&   e f        等价于         [ a b ] | [ c || [ d && [ e f ]]]
    ```

#### 值的乘数器

修饰符|含义
---|---
n*  |   n出现0次或多次
n+  |   nc出现1次或多次
n?  |   n出现0次或1次
n{A}    |   n出现A次
n{A,B}  |   n出现至少A次，至多B次
n{A,}   |   n至少出现A次，无上限
n#  |   n出现一次或多次
n#{A,B} | 精确指出n重复几次
n!  |   n必须出现至少一次

- UA必须支持至少20次重复

#### 组合+乘数

&nbsp;| in order | any order
---|---|---
zero or more | A? B? C? | A? || B? || C?
one or more | [ A? B? C? ]! | A || B || C
all | A B C | A && B && C

#### 示例

Property  |  Value definition field | Example value
---|---|---
orphans | < integer > | '3'
text-align | left \| right \| center \| justify |center
padding-top | < length > \| < percentage > | '5%'
outline-color |  < color > \| invert   | '#fefefe'
text-decoration | none \| underline \|\| overline \|\| line-through \|\| blink  | 'overline underline'
font-family | [ < family-name > \| < generic-family > ]#  | '"Gill Sans", Futura, sans-serif'
border-width  |  [ < length > \| thick \| medium \| thin ]{1,4} |  '2px medium 4px'
text-shadow | [ inset? && [ < length >{2,4} && < color >? ] ]# \| none | '3px 3px rgba(50%, 50%, 50%, 50%), lemonchiffon 0 0 4px inset'

### 文本数据类型
1. 关键字
    - 预定义关键字   
            
            
            /* for example */
            'collapse', 'separate'
            border-collapse: collapse;
            
    - CSS关键字

            'initial'： 代表被指定为属性初始值的值
            'inherit'： 继承父元素该属性的计算值
            'unset'： 代表'initial'或'inherit'，取决于有没有继承值

2. 标识符：< ident >

    - 作者自定义的标识符< custom-ident >
        + 非预定义关键字
        + 大小写敏感
        + ASCII范围
        + 非CSS关键字
        + 简写与全称等价
                
                /* for example */
                animation: ease-in ease-out;

                等同于

                animation-timing-function: ease-in;
                animation-name: ease-out;
                /*ease-in由‘animation-timing-function的easing-function声明’*/
                /*ease-out由‘animation-name’的< custom-ident >声明*/

3. 字符串：< string >

        /* for example */
        content: "this is a 'string'.";
        content: "this is a \"string\".";
        content: 'this is a "string".';
        content: 'this is a \'string\'.'
    
    - 与JS字符串规则一样
    - 由" "或' '包含
    - 由双引号作字符串分隔符时，双引号不能在双引号内出现；同理，单引号不能在单引号内出现。必须使用反斜杠‘\’进行转义
    - 单双引号成对出现，可以嵌套，不能交叉
    - 字符串可以分行，换行处加‘\’; 另外，如需要在字符串中显示换行符，使用转义符‘\A’(Unicode)

            /* for example */
            a[title="a not s\
            o very long title"]

            等同于

            a[title="a not so very long title"]

4. 资源定位符URL：< url >

    - < url > = url(< string >  < url-modifier > *)
    - url("")和url()都是允许的，不带引号时会被解析成< url-token >，且无法添加< url-modifier >，并且有额外的转义要求：url中出现括号、空格、单引号、双引号必须用反斜杠转义（带引号时，只要转义换行符）
    - @import

            @import url("base-theme.css");
            @import "base-theme.css"; /*字符串规则与url()包裹时一样*/

    - relative url：当< url >出现在属性的计算值中时，利用基本url，将其解析为绝对url
    - fragment url： 以‘#’开始，解析时只看#部分的url片段，且只定位到当前文档
    - empty url：如url("")或url()，必须解析成无效资源如"about:invalid"
    - url modifier: 可以是标识符或功能符（CSS函数）
    
            /* for example */   
            background: url("http://www.example.com/pinkish.gif" prefetch);
            background-image: url("http://www.example.com/pinkish.gif" param(--color var(--primary-color)));

### 数字数据类型

    tips:
    1. 值有范围，超过范围后，声明无效并忽视
    2. 范围表示只有方括号，即闭区间
    3. 理论上支持无限精度和无限范围，实际上，实现能力有限
    4. 若未指定范围，则是[-∞，+∞]
    5. 例如< integer[0,10] >表示整数类型，值在0~10之间，包括0和10.


1. < integer >： 整数
2. < number >： 实数，包括整数、小数、指数（e或E）
3. < percentage >： 百分比，如果用了百分比，最终会被解析成< dimension >，如果父元素宽度为1000px,则calc（500px +50%）=> calc(500px + 500px) => 1000px
4. < dimension >：带单位的数，用来标识下列维度
    1.  < length >：例如'margin: 0;'中的‘0’最终会被解析成< length >， 为0px
    2.  < angle >
    3.  < time >
    4.  < frequency > 频率
    5.  < resolution > 分辨率
    6.  compatible unit
5. 混合类型
    1. < length-percentage > === < length > | < percentage >
    2. < frequency-percentage > === < frequency > | < percentage >
    3. < angle-percentage > === < angle > | < percentage >
    4. < time-percentage > === < time > | < percentage >
    5. < number-percentage > === < number > | < percentage >

### 长度单位
#### 相对单位
单位 | 参照物
---|---
em | 元素的字体大小
rem| 根元素的字体大小
ex | 元素字体中‘x’（小写字母x）的高度
ch | 元素字体中‘0’（U+0030）字符的宽
vw | 视口（viewport）**宽度**的1%
vh | 视口**高度**的1%
vmin| 视口宽度和高度中较小尺寸的1%
vmax| 视口宽度和高度中较大尺寸的1%

#### 绝对单位
单位 | 名称 | 标准
---|---|---
cm | centimeters-厘米 | 1cm = 96px/2.54
mm | millimeters-毫米 | 1mm = 1/10cm
Q | quarter-millimeters-四分之一毫米 | 1Q = 1/4mm
in | inches-英寸 | 1in = 2.54cm = 96px
pc | picas | 1pc = 1/6 in ≈ 0.423cm
pt | points | 1pt = 1/72 in ≈ 0.035cm
px | pixels-像素 | 1px = 1/96 in ≈ 0.026cm


### 其它度量单位
1. 角度单位

    单位 | 名称 | 范围
    ---|---|---
    deg | degrees - 度 | 360°/circle
    grad | gradians - 梯度 | 400/circle
    rad | radians - 弧度 | 2Π/circle
    turn | 转 | a circle

2. 时间单位

    单位 | 名称 | 标准
    ---|---|---
    s | seconds - 秒 | 
    ms | milliseconds - 毫秒 | 1s = 1000ms

3. 频率单位

    单位 | 名称 | 标准
    ---|---|---
    Hz | Hertz | 次/秒
    kHz | kiloHertz | 1kHz = 1000Hz

    该单位不区分大小写，即Hz === hz

4. **分辨率单位**

单位 | 名称 | 含义 | 标准
---|---|---|---
dpi | Dots per inch | 每英寸点数 | 
dpcm | Dots per centimeter | 每厘米点数 | 
dppx | Dots per px unit | 每像素点数 | 1dppx = 96dpi

 
### 其它数据类型
1. < color >
2. < image >：不支持CSS3的UA会将其解释成< url >
3. < position>：先水平分量，后垂直分量

        <position> = [
              [ left | center | right ] || [ top | center | bottom ]
            |
              [ left | center | right | <length-percentage> ]
              [ top | center | bottom | <length-percentage> ]?
            |
              [ [ left | right ] <length-percentage> ] &&
              [ [ top | bottom ] <length-percentage> ]
        ]

### 函数
1. calc()：计算值
    - ‘+’‘-’左右必须有空格，‘*’‘/’可以不用；UA应至少支持20项数学表达式，超出支持范围则无效
    - 数学表达式的类型范围：< length>，< frequency>，< angle>，< time>，< percentage>，< number>或< integer>
    - ‘+’‘-’： 两边类型不同时，有一边为< number>，则结果为< number>
    - ‘*’：两边至少有一个是< number >；如果都是< integer >，则结果为< integer >
    - ‘/’：右侧是< number >
    - 计算值超过范围则声明无效

            /*for example*/
            以下效果一致
            width: calc(5px - 10px);
            width: calc(-5px); ≠ width: -5px; // 因宽度不能小于0
            width: 0px;

2. attr()：返回属性值
    - attr( <attr-name> <type-or-unit>? [ , <attr-fallback> ]? )

            p:before {
                content:attr(data-foo) " ";
            }
            <p data-foo="hello">world</p>

            // 结果
            hello world