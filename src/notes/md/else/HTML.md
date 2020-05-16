[指路](https://html.spec.whatwg.org/multipage/)

[toc]

1引言
2通用基础架构
3 HTML文档的语义，结构和API
4 HTML的元素
5个微数据
6用户互动
7加载网页
8个 Web应用程序API
9沟通
10名网络工作者
11 Web存储
12 HTML语法
13 XML语法
14渲染
15个过时的功能
IANA的16个注意事项
指数
参考文献
致谢

### 4 HTML的元素
- 4.1 文件元素
    - 4.1.1         html
- 4.2 文档元数据
    - 4.2.1         head
    - 4.2.2         title
    - 4.2.3         base
    - 4.2.4         link
    - 4.2.5         meta
    - 4.2.6         style
- 4.3 文章
    - 4.3.1         body
    - 4.3.2         article
    - 4.3.3         section
    - 4.3.4         nav
    - 4.3.5         aside
    - 4.3.6         h1, h2, h3, h4, h5, h6
    - 4.3.7         hgroup
    - 4.3.8         header
    - 4.3.9         footer
    - 4.3.10        address
- 4.4 分组
    - 4.4.1         p
    - 4.4.2         hr
    - 4.4.3         pre
    - 4.4.4         blockquote
    - 4.4.5         ol
    - 4.4.6         ul
    - 4.4.7         menu
    - 4.4.8         li
    - 4.4.9         dl
    - 4.4.10        dt
    - 4.4.11        dd
    - 4.4.12        figure
    - 4.4.13        figcaption
    - 4.4.14        main
    - 4.4.15        div
- 4.5 文本语义
    - 4.5.1          a
    - 4.5.2          em
    - 4.5.3          strong
    - 4.5.4          small
    - 4.5.5          s
    - 4.5.6          cite
    - 4.5.7          q
    - 4.5.8          dfn
    - 4.5.9          abbr
    - 4.5.10         ruby
    - 4.5.11         rt
    - 4.5.12         rp
    - 4.5.13         data
    - 4.5.14         time
    - 4.5.15         code
    - 4.5.16         var
    - 4.5.17         samp
    - 4.5.18         kbd
    - 4.5.19         sub and sup
    - 4.5.20         i
    - 4.5.21         b
    - 4.5.22         u
    - 4.5.23         mark
    - 4.5.24         bdi
    - 4.5.25         bdo
    - 4.5.26         span
    - 4.5.27         br
    - 4.5.28         wbr
- 4.6 link标签
    - 4.6.6 link标签的类型
        - 4.6.6.1   "alternate"
        - 4.6.6.2   "author"
        - 4.6.6.3   "bookmark"
        - 4.6.6.4   "canonical"
        - 4.6.6.5   "dns-prefetch"
        - 4.6.6.6   "external"
        - 4.6.6.7   "help"
        - 4.6.6.8   "icon"
        - 4.6.6.9   "license"
        - 4.6.6.10  "modulepreload"
        - 4.6.6.11  "nofollow"
        - 4.6.6.12  "noopener"
        - 4.6.6.13  "noreferrer"
        - 4.6.6.14  "opener"
        - 4.6.6.15  "pingback"
        - 4.6.6.16  "preconnect"
        - 4.6.6.17  "prefetch"
        - 4.6.6.18  "preload"
        - 4.6.6.19  "prerender"
        - 4.6.6.20  "search"
        - 4.6.6.21  "stylesheet"
        - 4.6.6.22  "tag"
        - 4.6.6.23 Sequential link types
            - 4.6.6.23.1 "next"
            - 4.6.6.23.2 "prev"
- 4.7 编辑
    - 4.7.1         ins
    - 4.7.2         del
- 4.8 嵌入
    - 4.8.1             picture
    - 4.8.2             source
    - 4.8.3             img
    - 4.8.5             iframe
    - 4.8.6             embed
    - 4.8.7             object
    - 4.8.8             param
    - 4.8.9             video
    - 4.8.10            audio
    - 4.8.11            track
    - 4.8.13            map
    - 4.8.14            area
    - 4.8.16            MathML
    - 4.8.17            SVG
- 4.9 表格
    - 4.9.1             table
    - 4.9.2             caption
    - 4.9.3             colgroup
    - 4.9.4             col
    - 4.9.5             tbody
    - 4.9.6                         ad
    - 4.9.7             tfoot
    - 4.9.8             tr
    - 4.9.9             td
    - 4.9.10            th
- 4.10 表单
    - 4.10.3            form
    - 4.10.4            label
    - 4.10.5            input
        - 4.10.5.1 type属性
            - (type=hidden)
            - (type=text) 和 (type=search)
            - (type=tel)
            - (type=url)
            - (type=email)
            - (type=password)
            - (type=date)
            - (type=month)
            - (type=week)
            - (type=time)
            - (type=datetime-local)
            - (type=number)
            - (type=range)
            - (type=color)
            - (type=checknox)
            - (type=radio)
            - (type=file)
            - (type=submit)
            - (type=image)
            - (type=reset)
            - (type=button)
        - 通用input属性
            - maxlength 和 minlength
            - size
            - readonly
            - required
            - multiple
            - pattern
            - min 和 max
            - step
            - list
            - placeholder
    - 4.10.6             button
    - 4.10.7             select
    - 4.10.8             datalist
    - 4.10.9             optgroup
    - 4.10.10            option
    - 4.10.11            textarea
    - 4.10.12            output
    - 4.10.13            progress
    - 4.10.14            meter
    - 4.10.15            fieldset
    - 4.10.16            legend
- 4.11 交互
    - 4.11.1 details
    - 4.11.2 summary
    - 4.11.3 命令
        - 4.11.3.1 Facets
        - 4.11.3.2 Using the a element to define a command
        - 4.11.3.3 Using the button element to define a command
        - 4.11.3.4 Using the input element to define a command
        - 4.11.3.5 Using the option element to define a command
        - 4.11.3.6 Using the accesskey attribute on a legend element to define a command
        - 4.11.3.7 Using the accesskey attribute to define a command on other elements
    - 4.11.4 dialog
- 4.12 脚本
    - 4.12.1 script
    - 4.12.2 noscript
    - 4.12.3 template
    - 4.12.4 slot
    - 4.12.5 canvas
- 4.13自定义元素
