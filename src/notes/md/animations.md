[动画](https://www.w3.org/TR/css-animations-1/)     

> Level 1 >> WD <sub>current status</sub> >> WD <sub>next status</sub>

### 关键帧 keyframes
1. 用于指定动画过程中各个点的动画属性的值。
2. 使用@keyframes规则指定

        @keyframes = @keyframes < keyframes-name > { < rule-list > }

        keyframes-name = < custom-ident > | string 
            1. 两者等效，如foo === “foo”
            2. 大小写敏感，如foo != FOO
            3. 不能使用关键字，如initial、None
            4. 但是可以用把关键字变成字符串后使用，是有效的，如"initial"、"None"
        
        rule-list = < keyframe-block >s

            < keyframe-block > = < keyframe-selector ># { < declaration-list > }

            < keyframe-selector > = from | to | < percentage >
                1. from === 0%
                2. to === 100%
                3. 必须加百分号，如0 != 0%
                4. 某个时刻重复定义了规则，将会整合这些规则，规则中重复的属性会由后者覆盖前者
                    
                      50% {
                        margin-left: 110px;
                        opacity: 1;
                      }

                      50% {
                         opacity: 0.9;
                      }

                      最终是

                      50% {
                        margin-left: 110px;
                        opacity: 0.9;
                      }

3. keyframe-block里的属性使用!important无效并将被无视
4. 重复定义关键帧，后者会覆盖前者

        @keyframes foo { ...} /* 被忽略 */
        @keyframes "foo" { ...}

5. 如果未为关键帧指定属性，或者指定了无效属性，则动画过程将无视该帧继续进行

#### 1. animation-timing-function
> 指定动画过程的效果，如缓入、缓出
> 
> animation-timing-function: < [timing-function](https://www.w3.org/TR/css-easing-1/#typedef-timing-function >
> 
> timing-function取值有：linear ease ease-in ease-out ease-in-out cubic-bezier() step-start step-end steps()
> 
> 初始值：ease
> 
> 注： to 或 100% 时刻上定义的定时功能将会被无视，也就是说，定时功能生效在时刻起点到下一时刻之间的这段时间
> 
> animation-timing-function接收一个或多个用逗号分隔的timing-function序列

缓动函数：接收输入进度值（input progress value）产生输出进度值（output progress value）

> < easing-function> = linear | < cubic-bezier-easing-function> | < step-easing-function>

##### 线性缓动函数 linear
> linear
> 
> 匀速

##### 贝塞尔曲线缓动函数 cubic-bezier-easing-function
> 贝塞尔曲线方便控制开始和结尾的动画速度
> 
> < cubic-bezier-easing-function> = ease | ease-in | ease-out | ease-in-out | cubic-bezier(< number>, < number>, < number>, < number>)

![](https://www.w3.org/TR/css-easing-1/curve-keywords.svg)

###### ease
> ease === cubic-bezier(0.25, 0.1, 0.25, 1)
> 
> 跟ease-in-out有点像，不过一开始不是那么慢

###### ease-in
> ease-in === cubic-bezier(0.42, 0, 1, 1)
> 
> 先慢后快

###### ease-out
> ease-out === cubic-bezier(0, 0, 0.58, 1)
> 
> 先快后慢

###### ease-in-out
> ease-in-out === cubic-bezier(0.42, 0, 0.58, 1)
> 
> 先慢后快再慢

###### cubic-bezier()
> cubic-bezier(< number>, < number>, < number>, < number>)
> 
> 参数是P1、P2的坐标,范围[0,1]
> 
> 记原点（0，0）为O，（1，1）为A
> 
> 贝塞尔曲线必须与OP1和AP2相切，即OP1、AP2是贝塞尔曲线的两条切线

##### 步进缓动函数 step-easing-function
> 线性和贝塞尔曲线都是连续地动，步进不是连续地动（断断续续的这种）
> 
> < step-easing-function> = step-start | step-end | steps(< integer>[, < step-position>]?)
> 
> < step-position> = jump-start | jump-end | jump-none | jump-both | start | end
> 
> 位置就是指在一段时间中，动画何时发生

![](https://www.w3.org/TR/css-easing-1/step-easing-keyword-examples.svg)

###### step-start
> step-start === steps(1, start)

###### step-end
> step-end === steps(1, end)

###### steps()
> steps(< integer>[, < step-position> ]?)

![](https://www.w3.org/TR/css-easing-1/step-easing-func-examples.svg)

#### 2. animation-name
> 指定动画名称
> 
> animation-name: [ none | < keyframes-name > ]
> 
> 初始值：none
> 
> 注：可以定义多个动画名称，如果动画列表中多个动画修改了同一属性，则靠近动画列表末尾的动画会覆盖前面的。

#### 3. animation-duration
> 指定动画播放时长
> 
> animation-duration: < time >
> 
> 初始值：0s

#### 4. animation-iteration-count
> 指定动画迭代（循环）次数
> 
> animation-iteration-count: infinite | < number>
> 
> 初始值：1
> 
> 注：如果数字不是整数，将会在最后一个循环中途结束；负数无效；如果为0，动画会瞬发（animation-duration:0s也是瞬发）

#### 5. animation-direction
> 指定动画的关键帧顺序
> 
> animation-direction: normal | reverse | alternate | alternate-reverse
> 
> 分别是 正序 逆序 奇数正序、偶数逆序 奇数逆序、偶数正序
> 
> 初始值：normal
> 
> 注： 迭代从1开始

#### 6. animation-play-state
> 控制动画播放或暂定
> 
> animation-play-state: running | paused
> 
> 初始值：running

#### 7. animation-delay
> 控制动画何时开始播放
> 
> animation-delay: < time>
> 
> 初始值：0s
> 
> 注：负数也可，等效于0s

#### 8. animation-fill-mode
> 定义动画执行时间之外的动画
> 
> animation-fill-mode: none | forwards | backwards | both
> 
> 初始值：none
> 
> none：无
> 
> forwards：动画将在动画结束时（如果animation-iteration-count>1则是在所有迭代完成后），保持最后一个属性值（关键帧规则表的最后一个，如果设置了animation-direction，相应要变一下）
> 
> backwards：在animati-delay所指定的这段时间内，在动画显示之前，应用第一个属性值（关键帧规则表的第一个，如果设置了animation-direction，相应要变一下）
> 
> both： forwards和backwards都应用

#### 9. animation
> 是以上属性的速记
> 
> animation:  < time> || < timing-function> || < time> || < single-animation-iteration-count> || < single-animation-direction> || < single-animation-fill-mode> || < single-animation-play-state> || [ none | < keyframes-name> ]
> 
> 例如："animation: 3s none backwards"表示animation-duration为3s，animation-fill-mode为none，animation-name为backwards。
> 
> 按值类型匹配，像上面的backwards还是animation-fill-mode的属性值关键字，这种情况下，为了避免误会，必须给出animatio-fill-mode的属性值
> 
> 注： 按顺序

### 5 & 6（AnimationEvent & api） 没看