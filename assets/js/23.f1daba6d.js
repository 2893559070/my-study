(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{418:function(t,s,a){"use strict";a.r(s);var r=a(56),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"typescript打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript打包"}},[t._v("#")]),t._v(" TypeScript打包")]),t._v(" "),a("h3",{attrs:{id:"webpack整合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack整合"}},[t._v("#")]),t._v(" webpack整合")]),t._v(" "),a("p",[t._v("通常情况下，实际开发中我们都需要使用构建工具对代码进行打包；\nTS同样也可以结合构建工具一起使用，下边以webpack为例介绍一下如何结合构建工具使用TS；\n步骤如下：")]),t._v(" "),a("h3",{attrs:{id:"初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[t._v("#")]),t._v(" 初始化项目")]),t._v(" "),a("p",[t._v("进入项目根目录，执行命令 npm init -y，创建package.json文件")]),t._v(" "),a("h3",{attrs:{id:"下载构建工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载构建工具"}},[t._v("#")]),t._v(" 下载构建工具")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" webpack webpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cli webpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("server typescript ts"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("loader clean"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("webpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin\n")])])]),a("h3",{attrs:{id:"共安装了7个包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#共安装了7个包"}},[t._v("#")]),t._v(" 共安装了7个包:")]),t._v(" "),a("ul",[a("li",[t._v("webpack：构建工具webpack")]),t._v(" "),a("li",[t._v("webpack-cli：webpack的命令行工具")]),t._v(" "),a("li",[t._v("webpack-dev-server：webpack的开发服务器")]),t._v(" "),a("li",[t._v("typescript：ts编译器")]),t._v(" "),a("li",[t._v("ts-loader：ts加载器，用于在webpack中编译ts文件")]),t._v(" "),a("li",[t._v("html-webpack-plugin：webpack中html插件，用来自动创建html文件")]),t._v(" "),a("li",[t._v("clean-webpack-plugin：webpack中的清除插件，每次构建都会先清除目录")])]),t._v(" "),a("h3",{attrs:{id:"配置webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置webpack"}},[t._v("#")]),t._v(" 配置webpack")]),t._v(" "),a("p",[t._v("根目录下创建webpack的配置文件webpack.config.js：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HtmlWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"html-webpack-plugin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CleanWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clean-webpack-plugin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("optimization")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("minimize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭代码压缩，可选")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/index.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("devtool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inline-source-map"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("devServer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("contentBase")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dist'")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("output")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bundle.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("arrowFunction")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭webpack的箭头函数，可选")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("extensions")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.ts$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loader")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ts-loader"')]),t._v("     \n               "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CleanWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TS测试'")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"配置ts编译选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置ts编译选项"}},[t._v("#")]),t._v(" 配置TS编译选项")]),t._v(" "),a("p",[t._v("根目录下创建tsconfig.json，配置可以根据自己需要")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ES2015"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ES2015"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"strict"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"修改package-json配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改package-json配置"}},[t._v("#")]),t._v(" 修改package.json配置")]),t._v(" "),a("p",[t._v("修改package.json添加如下配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo \\"Error: no test specified\\" && exit 1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"start"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack serve --open chrome.exe"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"项目使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目使用"}},[t._v("#")]),t._v(" 项目使用")]),t._v(" "),a("p",[t._v("在src下创建ts文件，并在并命令行执行npm run build对代码进行编译；\n或者执行npm start来启动开发服务器；")]),t._v(" "),a("h3",{attrs:{id:"babel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[t._v("#")]),t._v(" Babel")]),t._v(" "),a("p",[t._v("除了webpack，开发中还经常需要结合babel来对代码进行转换；\n以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将babel引入到项目中；")]),t._v(" "),a("blockquote",[a("p",[t._v("虽然TS在编译时也支持代码转换，但是只支持简单的代码转换；\n对于例如：Promise等ES6特性，TS无法直接转换，这时还要用到babel来做转换；")])]),t._v(" "),a("p",[t._v("安装依赖包：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" @babel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("core @babel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("preset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("env babel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("loader core"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("js\n")])])]),a("p",[t._v("共安装了4个包，分别是：")]),t._v(" "),a("ul",[a("li",[t._v("@babel/core：babel的核心工具")]),t._v(" "),a("li",[t._v("@babel/preset-env：babel的预定义环境")]),t._v(" "),a("li",[t._v("@babel-loader：babel在webpack中的加载器")]),t._v(" "),a("li",[t._v("core-js：core-js用来使老版本的浏览器支持新版ES语法")])]),t._v(" "),a("p",[t._v("修改webpack.config.js配置文件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.ts$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loader")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("presets")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/preset-env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                                    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"targets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                                        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"chrome"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"58"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"ie"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11"')]),t._v("\n                                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"corejs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"useBuiltIns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"usage"')]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loader")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ts-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("p",[t._v("如此一来，使用ts编译后的文件将会再次被babel处理；\n使得代码可以在大部分浏览器中直接使用；\n同时可以在配置选项的targets中指定要兼容的浏览器版本；")])])}),[],!1,null,null,null);s.default=e.exports}}]);