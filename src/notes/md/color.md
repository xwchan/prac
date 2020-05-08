[颜色](https://www.w3.org/TR/css-color-3/)

> Level 3 >> REC <sub>current status</sub> >> REC <sub>next status</sub>
> 
> <sub>[Level 4 >> WD <sub>current status</sub> >> WD <sub>next status</sub>](https://www.w3.org/TR/css-color-4/)</sub>

> <sub>[Level 5 >> FPWD <sub>current status</sub> >> WD <sub>next status</sub>](https://www.w3.org/TR/css-color-5/)</sub>

### 属性
#### 1. color
#### 2. opacity
> 不透明度
### 值
#### 关键字
1. 基础关键字： aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, purple, red, silver, teal, white, and yellow.
2. 大小写不敏感
3. 扩展关键字：aliceblue, antiquewhite, [...](https://www.w3.org/TR/css-color-3/#svg-color)

#### 数值
##### 1. RGB
1. RGB模型是 red、green、blue，红绿蓝三原色
2. ‘#’ + 6个十六进制数 --> 可缩写成3位， 如#ff0000 === #f00
3. rgb([< number > | < percentage >] , [< number > | < percentage >], [< number > | < percentage >])，其中< number >的值域为[0,255]，负数被剪切成0，超过255的被剪切成255; < percentage >的值域为[0%, 100%]，超范围同样会被剪切

##### 2. RGBA
1. rgba([< number > | < percentage >] , [< number > | < percentage >], [< number > | < percentage >], < number >)，其中最后一个是不透明度，默认为1

##### 3. transparent
background-color, border-color, color等均接收该关键字作为值

##### 4. HSL
1. HSL模型是色相、饱和度、亮度
2. hsl(< angle >, < percentage >, < percentage >)
> HSL颜色被编码为三色（色调，饱和度，亮度）。色相表示为色环的角度（即，以圆圈表示的彩虹）。该角度通常以度为单位进行度量，以致于该单位在CSS中是隐含的。从语法上讲，仅给出一个<number>。根据定义，红色= 0 = 360，其他颜色分布在圆周围，因此，绿色= 120，蓝色= 240等。作为一个角度，它隐式环绕，使得-120 = 240和480 = 120。一种实现方式可以将这样的角度x标准化为[0,360]范围（即零度（包括0到360度，不包括在内）是用于计算（（（x mod 360）+ 360）mod 360）。饱和度和亮度以百分比表示。100％是完全饱和度，0％是灰色阴影。0％亮度是黑色，100％亮度是白色，50％亮度是“正常”。

[HSL examples](https://www.w3.org/TR/css-color-3/#hsl-examples)

##### 5. HSLA
1. A是opacity，取值[0,1]，默认1

#### currentColor（关键字）
color属性的计算值，可以取到当前颜色的值（待测试）

#### CSS系统颜色（关键字，文档不推荐使用）
1. ActiveBorder 活动窗口边框。
2. ActiveCaption 活动的窗口标题。
3. AppWorkspace 多个文档界面的背景色。
4. Background 桌面背景。
5. ButtonFace 由于一层周围边界而显示3-D的3-D元素的面部背景颜色。
6. ButtonHighlight 3D元素面向光源的边框的颜色，这些元素由于一层环绕边框而显示为3D。
7. ButtonShadow 对于3-D元素（由于一层环绕边框而显示为3-D），远离光源的边框颜色。
8. ButtonText 按钮上的文字。
9. CaptionText 标题，大小框和滚动条箭头框中的文本。
10. GrayText 灰色（禁用）文本。如果当前的显示驱动程序不支持纯灰色，则将该颜色设置为＃000。
11. Highlight 在控件中选择的项目。
12. HighlightText 在控件中选择的项目的文本。
13. InactiveBorder 无效的窗口边框。
14. InactiveCaption 无效的窗口标题。
15. InactiveCaptionText 非活动标题中的文本颜色。
16. InfoBackground 工具提示控件的背景颜色。
17. InfoText 工具提示控件的文本颜色。
18. Menu 菜单背景。
19. MenuText 菜单中的文字。
20. Scrollbar 滚动条灰色区域。
21. ThreeDDarkShadow 对于由于周围边界的两个同心层而出现3-D的3-D元素，两个边界的较暗（通常是外部）的颜色远离光源。
22. ThreeDFace 由于周围边界的两个同心层而出现3-D的3-D元素的面部背景颜色。
23. ThreeDHighlight 面向光源的两个边界的三个边界中的较亮（通常是外部）的颜色，由于周围边界的两个同心层而显示为3-D的3-D元素。
24. ThreeDLightShadow 对于3-D元素，面对光源的两个边框的较暗（通常为内部）的颜色由于围绕边框的两个同心层而显示为3-D。
25. ThreeDShadow 对于3D元素，由于周围同心的两个同心层而出现3-D，因此两个边框中较亮（通常是内部）的颜色远离光源。
26. Window 窗口背景。
27. WindowFrame 窗口边框。
28. WindowText Windows中的文字。


