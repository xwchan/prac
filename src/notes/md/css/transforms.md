[变形](https://www.w3.org/TR/css-transforms-1/)
> Level 1 >> CR <sub>current status</sub> >> PR <sub>next status</sub>
> 
> <sub>[Level 2 >> FPWD <sub>current status</sub> >> WD <sub>next status</sub>](https://www.w3.org/TR/css-transforms-2/)</sub>

### 术语
#### 可变形元素
1. CSS盒模型元素，除行内盒子、表格栏盒子、表格栏组盒子外
2. SVG画布元素、< cliPath >和SVG渲染元素，除文本内容元素的任何后代元素外

#### 用户坐标系 / 局部坐标系
1. 原点：参考框的左上角
2. 一单位等于一个CSS像素

#### 变换矩阵
将一个坐标系映射到另一坐标系的矩阵，是一个过渡矩阵

##### CTM(current transformation matrix) 
定义从局部（local）坐标系到视口（viewport）坐标系得变换矩阵

##### 特征转换函数
4×4方阵

#### 右乘 vs 左乘 vs 乘
A · B = A左乘B = B右乘A = A乘B

### 原理
#### 变形渲染模型
> 给一个元素设置transform属性，给定一个非none的值，以建立局部坐标系，通过给定的变换矩阵计算从局部坐标系到渲染后的坐标

1. 坐标系方向： X轴向右，Y轴向下
2. 变形是累积的，都是再其父级坐标系内建立局部坐标系
    

        <svg xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(-10, 20)">
            <g transform="scale(2)">
              <rect width="200" height="200" transform="rotate(45)"/>
            </g>
          </g>
        </svg>

        等效于 

        <svg xmlns="http://www.w3.org/2000/svg">
          <g>
            <g>
              <rect width="200" height="200" transform="translate(-10px, 20px) scale(2) rotate(45deg)"/>
            </g>
          </g>
        </svg>

    ![](https://www.w3.org/TR/css-transforms-1/images/ctm.png)
    ![](https://www.w3.org/TR/css-transforms-1/images/ctm-map.png)

3. 变形可能会导致内容溢出，但不影响CSS布局，只是视觉上形状或位置变了。

### transform-origin(原点)
> 原点初始值 50% 50%

### transform-box(参考框)
> 参考框
> 
> 1. content-box
> 
> 2. border-box
> 
> 3. fill-box
>
> 4. stroke-box
>
> 5. view-box
>    

### SVG相关
略（回头再看）

### 变换函数
> 水平平移的百分比 相对于 参考框的宽度； 垂直平移的百分比 相对于 参考框的高度
#### 1. 平移
##### translate()
> translate( < length-percentage> [, < length-percentage> ]? )

1. 指定X方向和Y方向上的平移
2. 第二个参数可选， 默认为0

##### translateX()
> translateX( < length-percentage> )

1. 指定X方向的平移

##### translateY()
> translateY( < length-percentage> )

1. 指定Y方向的平移

#### 2. 缩放
##### scale()
> scale( < number> [, < number> ]? )

1. 第二个参数可选，默认等于第一个参数
2. scale(1,1) 不改变
3. scale(2,2) X轴放大2倍，Y轴放大2倍，面积放大4倍

##### scaleX()
> scaleX( < number> )
##### scaleY()
> scaleY( < number> )
#### 3. 旋转
##### rotate()
> rotate( [ < angle> | < zero> ] )

1. 顺时针旋转指定度数

#### 4. 歪斜
##### skew()
> skew( [ < angle> | < zero> ] [, [ < angle> | < zero> ] ]? )

1. 第二个参数可选，默认为0

##### skewX()
> skewX( [ < angle> | < zero> ] )
##### skewY()
> skewY( [ < angle> | < zero> ] )
#### 5. 自由变换
##### matrix()
> matrix( < number> [, < number> ]{5,5} )

1. 参数6个值，a,b,c,d,e,f
2. 等效于矩阵 [a c 0 e; b d 0 f; 0 0 1 0; 0 0 0 1]

