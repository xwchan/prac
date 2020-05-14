
[CSS Snapshot 2018](https://www.w3.org/TR/css-2018/)（2019年1月22日）

翻译 + 整理 + 备注

### 流程
缩写|全称|备注
---|---|---
FPWD|First Public Working Draft|第一次公开的工作草案
**WD**|**Working Draft**|**工作草案**
**CR**|**Candidate Recommendation**|**候选推荐书**
PR|Proposed Recommendation|建议推荐书 
**REC**|**Recommendation**|**推荐书**
SPSD|Superseded Recommendation|作废了的推荐书

注：加粗为稳定性阶段

###### [W3C流程](https://www.w3.org/TR/css-2018/#w3c-process)：工作草案（设计阶段） → 候选推荐书（测试阶段）→ 推荐书（维护阶段，勘误）


### CSS的级别
>Cascading Style Sheets does not have versions in the traditional sense; instead it has levels. Each level of CSS builds on the previous, refining definitions and adding features. The feature set of each higher level is a superset of any lower level, and the behavior allowed for a given feature in a higher level is a subset of that allowed in the lower levels. A user agent conforming to a higher level of CSS is thus also conformant to all lower levels.

CSS没有传统意义上的版本（version），取而代之的是级别（level）。（这也意味着CSS规范一直处于完善之中）。每个level都是在先前level的基础上完善定义和添加功能。每个较高level的特性集是任何较低level的超集。

```
注释：version vs. level
    [version]: A version of something is a particular form of it in which some details are different from earlier or later forms.（同一个对象的不同表现形式，都是完结的状态）
    [level]: A level is a point on a scale, for example a scale of amount, quality, or difficulty.（同一个对象所处的不同阶段，是从发展的角度来看的）
```

级别 | 指路 | 说明
---|---|---
CSS Level 1 | [<del>CSS1 specification</del>](https://www.w3.org/TR/2008/REC-CSS1-20080411/)  | CSS1规范定义了CSS1所有特性（像属性、值、规则等等），但是CSS1的语法和定义用的是CSS2.1规范
CSS Level 2 | [<del>CSS2 specification</del>](https://www.w3.org/TR/2008/REC-CSS2-20080411/) [CSS2.1 specification](https://www.w3.org/TR/CSS2/) |因为CSS2规范在实践中出现许多问题，直接出了一版CSS2.1规范代替了CSS2规范的勘误。CSS2以CSS2.1规范为准
CSS Level 3 | [CSS Level 3](https://www.w3.org/TR/css-2018/#css-levels) | **当前版本**，在CSS2模块的基础上构建，以CSS2.1规范为核心，向下兼容。最主要的特点是模块化，各个独立模块的level不一致。**每个模块完成后，将被插入CSS2.1的现有体系以及先前完成的模块中**，以此来拉平各个模块之间的level
CSS Level 4 及以上 |  - |  独立模块能达到level 4，但是CSS语言就只到level 3。（"CSS Level 3”一词仅用于区别于以前的整体版本，类似“ES6"）

注：CSS3 = CSS Level 3（其它类似）

### CSS3的模块
👉   [CSS3模块](https://www.w3.org/Style/CSS/current-work) 