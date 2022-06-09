(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{508:function(r,t,e){"use strict";e.r(t);var a=e(56),s=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[r._v("#")]),r._v(" vue")]),r._v(" "),e("h2",{attrs:{id:"_1-vue2和vue3的区别-vue3快在哪"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue2和vue3的区别-vue3快在哪"}},[r._v("#")]),r._v(" 1. vue2和vue3的区别 (vue3快在哪)")]),r._v(" "),e("ul",[e("li",[r._v("diff算法增加patchFlag静态标识，只对比有静态标识的dom元素")]),r._v(" "),e("li",[r._v("事件增加缓存")]),r._v(" "),e("li",[r._v("很多文本节点提升 只定义一次，渲染时不需要再次定义，vue2每次都需要重新定义")]),r._v(" "),e("li",[r._v("ssr渲染 以字符串方式渲染")]),r._v(" "),e("li",[r._v("proxy替换了之前的defineProterty")]),r._v(" "),e("li",[r._v("vite")]),r._v(" "),e("li",[r._v("ts")])]),r._v(" "),e("h2",{attrs:{id:"_2-vue-和-react-技术原理解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue-和-react-技术原理解析"}},[r._v("#")]),r._v(" 2. vue 和 react 技术原理解析")]),r._v(" "),e("p",[e("a",{attrs:{href:"https://ustbhuangyi.github.io/vue-analysis/v2/prepare/",target:"_blank",rel:"noopener noreferrer"}},[r._v("vue 和 react 技术原理解析"),e("OutboundLink")],1)]),r._v(" "),e("h2",{attrs:{id:"_3-vuex的一些知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-vuex的一些知识"}},[r._v("#")]),r._v(" 3. vuex的一些知识")]),r._v(" "),e("p",[e("a",{attrs:{href:"https://vuex.vuejs.org/zh/guide/#%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84-store",target:"_blank",rel:"noopener noreferrer"}},[r._v("vuex的一些知识"),e("OutboundLink")],1)]),r._v(" "),e("h2",{attrs:{id:"_4-axios-fetch-ajax区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-axios-fetch-ajax区别"}},[r._v("#")]),r._v(" 4. axios fetch ajax区别")]),r._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/bala/p/11650296.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("axios fetch ajax区别"),e("OutboundLink")],1)]),r._v(" "),e("h2",{attrs:{id:"_5-v-if和v-show的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-v-if和v-show的区别"}},[r._v("#")]),r._v(" 5. v-if和v-show的区别")]),r._v(" "),e("ul",[e("li",[e("p",[r._v("有无渲染")]),r._v(" "),e("ul",[e("li",[r._v("v-if DOM树种移除 v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译（编译被缓存？编译被缓存后，然后再切换的时候进行局部卸载);")]),r._v(" "),e("li",[r._v("v-show dispaly 隐藏 v-show是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且DOM元素保留；")])])]),r._v(" "),e("li",[e("p",[r._v("建议使用的场景")]),r._v(" "),e("ul",[e("li",[r._v("如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。")])])])]),r._v(" "),e("h2",{attrs:{id:"_6-v-for的key的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-v-for的key的作用"}},[r._v("#")]),r._v(" 6. v-for的key的作用")]),r._v(" "),e("ul",[e("li",[e("p",[r._v("Vue很大的一个特点就是双向数据绑定，数据一旦改变，那么页面就渲染新的数据呈现在页面上。对于用v-for渲染的列表数据来说，数据量可能一般很庞大，而且我们经常还要对这个数据进行一些增删改操作。假设我们给列表增加一条数据，整个列表都要重新渲染一遍，浪费性能。")])]),r._v(" "),e("li",[e("p",[r._v("key值 根据关于Diff简析 去判断某个值是否修改，如果修改，则重新渲染这一项，否则复用之前的元素。")])]),r._v(" "),e("li",[e("p",[r._v("有id用id 无id用index")]),r._v(" "),e("ul",[e("li",[r._v("页面在去渲染数据的时候，通过index定义的key的比较，会有：")])]),r._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[r._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[r._v("// 之前的数据                   之后的数据")]),r._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("key")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("0")]),r._v("  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("index")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("0")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("num")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("1")]),r._v("     "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("key")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("0")]),r._v("  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("index")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("0")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("num")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("1")]),r._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("key")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("1")]),r._v("  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("index")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("1")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("num")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("2")]),r._v("     "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("key")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("1")]),r._v("  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("index")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("1")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("num")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[r._v("'新增加的数据4'")]),r._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("key")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("2")]),r._v("  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("index")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("2")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("num")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("3")]),r._v("     "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("key")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("2")]),r._v("  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("index")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("2")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("num")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("2")]),r._v("\n                                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("key")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("3")]),r._v("  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("index")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("3")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[r._v("num")]),e("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("3")]),r._v("\n")])])]),e("p",[e("code",[r._v("通过上面清晰的对比，发现除了第一个数据可以复用之前的之外，另外三条数据都需要重新渲染。")])])])]),r._v(" "),e("h2",{attrs:{id:"_7-diff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-diff"}},[r._v("#")]),r._v(" 7. Diff")]),r._v(" "),e("ul",[e("li",[r._v("（1）当页面的数据发生变化时，Diff算法只会比较同一层级的节点。")]),r._v(" "),e("li",[r._v("（2）如果节点类型不同，直接干掉前面的节点，再创建并插入新的节点，不会再比较这个节点的子节点了。")]),r._v(" "),e("li",[r._v("（3）如果节点类型相同，则会重新设置该节点的属性，从而实现节点的更新。")])]),r._v(" "),e("h2",{attrs:{id:"_8-diff算法和虚拟dom的一些知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-diff算法和虚拟dom的一些知识"}},[r._v("#")]),r._v(" 8. diff算法和虚拟dom的一些知识")]),r._v(" "),e("ul",[e("li",[r._v("创建dom树")]),r._v(" "),e("li",[r._v("生成样式表")]),r._v(" "),e("li",[r._v("把dom树和样式表关联起来，生成Render树")]),r._v(" "),e("li",[r._v("布局layout")]),r._v(" "),e("li",[r._v("paint 绘制")])]),r._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.cn/post/6844903806132568072",target:"_blank",rel:"noopener noreferrer"}},[r._v("diff原理分析"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);