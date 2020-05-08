[过渡](https://www.w3.org/TR/css-transitions-1/)

> Level ? >> WD <sub>current status</sub> >> CR <sub>next status</sub>

### 过渡
> 通常，当CSS属性的值更改时，呈现的结果会立即更新。transition使旧状态能够平滑过渡到新状态。

1. 每个过渡属性都接收一个逗号分隔的列表
        
        div {
          transition-property: opacity, left;
          transition-duration: 2s, 4s;
        }
2. 如果值列表长度不同
        
        /* for example */
        div {
          transition-property: opacity, left, top, width;
          transition-duration: 2s, 1s;
        }
        实际上是
        div {
          transition-property: opacity, left, top, width;
          transition-duration: 2s, 1s, 2s, 1s;
        }

        /* for example */
        div {
          transition-property: opacity, left, top, width;
          transition-duration: 2s, 1s, 4s, 3s, 1s,2s;
        }
        实际上是
        div {
          transition-property: opacity, left, top, width;
          transition-duration: 2s, 1s, 4s, 3s; /* 多余的值忽略 */
        }

#### 1. transition-property
> 指定过渡将应用的属性
> 
> transition-property: none | all |< ident >
> 
> 初始值: all（所有属性都需要过渡）
> 
> 注：就算某个属性无法被识别，也必需保存在列表中，为了和duration匹配上

#### 2. transition-duration
> 定义过渡过程的时间长度
> 
> transition-duration: < time >
> 
> 初始值：0s

#### 3. transition-timing-funtion
> 定义过渡过程中的变化速度
> 
> transition-timing-function: < timing-function >
> 
> 初始值：ease

#### 4. transition-delay
> 定义过渡的启动时间
> 
> transition-delay: < time >
> 
> 初始值：0s

#### 5. transition
> 上述属性的速记
> 
> transition: [ none | < single-transition-property> ] || < time> || < timing-function> || < time>
> 
> 注：按顺序

### 6 & 7（TransitionEvent & api）没看



