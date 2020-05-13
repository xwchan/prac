# CSS Snapshot 2018（2019年1月22日）
【W3C】 翻译+备注

## W3C简介
缩写|全称|备注
---|---|---
FPWD|First Public Working Draft|第一次公开的工作草案
**WD**|**Working Draft**|**工作草案**
**CR**|**Candidate Recommendation**|**候选推荐书**
PR|Proposed Recommendation|建议推荐书 
**REC**|**Recommendation**|**推荐书**
SPSD|Superseded Recommendation|作废了的推荐书

注：加粗为稳定性阶段。

###### [W3C流程](https://www.w3.org/TR/css-2018/#w3c-process)：工作草案（设计阶段） → 候选推荐书（测试阶段）→ 推荐书（维护阶段，勘误）


## CSS的级别
>Cascading Style Sheets does not have versions in the traditional sense; instead it has levels. Each level of CSS builds on the previous, refining definitions and adding features. The feature set of each higher level is a superset of any lower level, and the behavior allowed for a given feature in a higher level is a subset of that allowed in the lower levels. A user agent conforming to a higher level of CSS is thus also conformant to all lower levels.

CSS没有传统意义上的版本（version），取而代之的是级别（level）。（这也意味着CSS规范一直处于完善之中）。每个level都是在先前level的基础上完善定义和添加功能。每个较高level的特性集是任何较低level的超集。


```
version vs. level
    [version]: A version of something is a particular form of it in which some details are different from earlier or later forms.（同一个对象的不同表现形式，都是完结的状态）
    [level]: A level is a point on a scale, for example a scale of amount, quality, or difficulty.（同一个对象所处的不同阶段，是从发展的角度来看的）
```


级别 | 指路 | 说明
---|---|---
CSS Level 1 | [CSS1 specification](https://www.w3.org/TR/2008/REC-CSS1-20080411/) （过时了）| CSS1规范定义了CSS1所有特性（像属性、值、规则等等），但是CSS1的语法和定义用的是CSS2.1规范
CSS Level 2 | [CSS2 specification](https://www.w3.org/TR/2008/REC-CSS2-20080411/) （过时了）→  [CSS2.1 specification](https://www.w3.org/TR/CSS2/) |因为CSS2规范在实践中出现许多问题，直接再出一版CSS2.1规范，代替了CSS2规范的勘误。CSS2以CSS2.1规范为准
CSS Level 3 | [CSS Level 3](https://www.w3.org/TR/css-2018/#css-levels) | **当前版本**，在CSS2模块的基础上构建，以CSS2.1规范为核心，向下兼容。最主要的特点是模块化，各个独立模块的level不一致。**每个模块完成后，将被插入CSS2.1的现有体系以及先前完成的模块中**，以此来拉平各个模块之间的level
CSS Level 4 及以上 |  null |  独立模块能达到level 4，但是CSS语言就只到level 3。（"CSS Level 3”一词仅用于区别于以前的整体版本，类似“ES6"）

注：CSS3 = CSS Lever 3（其它类似）

## CSS3的模块
👉   [CSS所有模块](https://www.w3.org/Style/CSS/current-work) 




下面列出一些模块，从稳定到不稳定（待修改）

Module | Level | 模块 | 当前状态 | 备注
---|---|---|---|---|---
Completed |
[CSS Color Module](https://www.w3.org/TR/css-color-3/) | Level 3 | 颜色模块 | REC |  
[CSS Namespaces Module](https://www.w3.org/TR/css-namespaces/) | Level 3 | 命名空间模块 | REC | 已完成
[Selectors](https://www.w3.org/TR/selectors-3/) | Level 3 | 选择器 | REC |已完成
[Media Queries](https://www.w3.org/TR/css3-mediaqueries/) | Level 5 | 媒体查询 |  REC | 已完成
[CSS Fonts Module](https://www.w3.org/TR/css-fonts-3/) | Level 3 | 字体模块 | REC | 已完成
[CSS Writing Modes](https://www.w3.org/TR/css-writing-modes-3/) | Level 3 | 书写模式模块 | REC | 已完成
[CSS Basic User Interface Module](https://www.w3.org/TR/css-ui-3/) | Level 3 | UI模块 | REC | 已完成
[CSS Containment Module](https://www.w3.org/TR/css-contain-1/) | Level 1 |  | REC | 已完成
Stable |
[CSS Backgrounds and Borders Module](https://www.w3.org/TR/css-backgrounds-3/) |  Level 3 | 背景和边框模块 | CR | 
[CSS Conditional Rules Module](https://www.w3.org/TR/css3-conditional/) | Level 3 | 条件规则模块 | CR | 
[CSS Multi-column Layout Module](https://www.w3.org/TR/css-multicol-1/) |  Level 1 | 多列布局模块 | WD |
[CSS Values and Units Module](https://www.w3.org/TR/css-values-3/) | Level 3 | 值和单位模块 | CR |
[CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox-1/) | Level 1 | 伸缩盒布局模块 | CR |
[CSS Cascading and Inheritance](https://www.w3.org/TR/css-cascade-3/) | Level 3 | 层叠和继承魔 | CR | [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/geometry-1/) WD
[CSS Counter Styles](https://www.w3.org/TR/css-counter-styles-3/) | Level 3 | 计数器样式 | CR |
Testing |
[CSS Images Module](https://www.w3.org/TR/css-images-3/) | Level 3 | 图片模块 | CR |
[CSS Speech Module](https://www.w3.org/TR/css-speech/) |  | 语音模块 | CR | 
[CSS Text Decoration Module](https://www.w3.org/TR/css-text-decor-3/) | Level 3 | 文字描述 | CR | 
[CSS Shapes Module](https://www.w3.org/TR/css-shapes-1/) | Level 1 | 形状模块 | CR |
[CSS Masking Module](https://www.w3.org/TR/css-masking-1/) | Level 1 | 遮罩模块 | CR |
[CSS Fragmentation Module](https://www.w3.org/TR/css-break-3/) | Level 3 | 碎片模块 | CR | 
[CSS Transforms Module](https://www.w3.org/TR/css-transforms-1/) | Level 1 |  | CR
[CSS Custom Properties for Cascading Variables Module](https://www.w3.org/TR/css-variables-1/) | Level 1 | 变量 | CR |
[Compositing and Blending](https://www.w3.org/TR/compositing-1/) | Level 1 | 合成和混合 | CR |
[CSS Syntax Module](https://www.w3.org/TR/css-syntax-3/) | Level 3 | 语法模块 | CR |
[CSS Grid Layout Module](https://www.w3.org/TR/css-grid-1/) | Level 1 | 网格布局模块 | CR |
[CSS Display Module](https://www.w3.org/TR/css-display-3/) | Level 3 | 展示模块 | CR | 
[CSS Will Change Module](https://www.w3.org/TR/css-will-change-1/) | Level 1 |  | CR | 
[Geometry Interfaces Module](https://www.w3.org/TR/geometry-1/) | Level 1 | 几何接口模块 | CR | 







