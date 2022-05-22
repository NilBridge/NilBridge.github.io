(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{519:function(t,a,s){"use strict";s.r(a);var n=s(33),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("主文件作为模块的索引而存在")]),t._v(" "),s("p",[s("code",[t._v("NilBridge")]),t._v("的模块加载机制完全遵守"),s("code",[t._v("NodeJS")]),t._v("的"),s("code",[t._v("require")]),t._v("机制")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://nodejs.cn/api/module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeJs模块机制"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"http://nodejs.cn/api/modules.html#requireid",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeJs require机制"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("如果没有指定，模块默认主文件为文件夹下的"),s("code",[t._v("index.js")])])]),t._v(" "),s("p",[t._v("接着我们创建"),s("code",[t._v("index.js")]),t._v("写入下列代码")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("example")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NIL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ModuleBase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onStart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onStop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("example")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("现在你的模块已经可以被加载了，"),s("s",[t._v("只不过它什么都干不了")])]),t._v(" "),s("p",[t._v("我们一起来看这个文件")]),t._v(" "),s("p",[t._v("我们定义了"),s("code",[t._v("example")]),t._v("这个自定义类继承自基类"),s("code",[t._v("NIL.ModuleBase")])]),t._v(" "),s("p",[t._v("其中包含了两个重载函数，"),s("code",[t._v("onStart")]),t._v("和"),s("code",[t._v("onStop")]),t._v("，分别在加载和卸载时被触发")]),t._v(" "),s("p",[t._v("并且"),s("code",[t._v("初始化API")]),t._v("在加载时被传入，它可以帮助你注册命令，设置监听器等。")]),t._v(" "),s("p",[t._v("在下一节，我们会详细讲解如何使用它")]),t._v(" "),s("p",[t._v("对于一个初始化API"),s("code",[t._v("api")]),t._v("，有如下这些方法可以调用")]),t._v(" "),s("h2",{attrs:{id:"logger对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logger对象"}},[t._v("#")]),t._v(" "),s("code",[t._v("Logger")]),t._v("对象")]),t._v(" "),s("p",[t._v("详见"),s("RouterLink",{attrs:{to:"/pages/1f9276/"}},[s("code",[t._v("Logger对象")])])],1),t._v(" "),s("p",[t._v("附带的logger对象会自动注册插件名称")]),t._v(" "),s("p",[t._v("调用就像下面这样。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'这是一条正常的日志'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'这是一条警告日志'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'这是一个错误输出'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"监听事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监听事件"}},[t._v("#")]),t._v(" 监听事件")]),t._v(" "),s("p",[s("code",[t._v("api.listen(event,callback)")])]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[t._v("event : "),s("code",[t._v("String")]),t._v("\n事件名称")]),t._v(" "),s("li",[t._v("callback : "),s("code",[t._v("Function")]),t._v("\n事件回调，目前所有事件均为"),s("strong",[t._v("单参数")]),t._v("回调")])])]),t._v(" "),s("li",[t._v("注意\n"),s("ul",[s("li",[t._v("监听的事件回调会自动执行"),s("code",[t._v("try-catch")])]),t._v(" "),s("li",[t._v("插件卸载时，监听器会一并注销")])])]),t._v(" "),s("li",[t._v("返回：监听器是否注册成功")]),t._v(" "),s("li",[t._v("返回值类型 : "),s("code",[t._v("Boolean")])])]),t._v(" "),s("h2",{attrs:{id:"注册事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册事件"}},[t._v("#")]),t._v(" 注册事件")]),t._v(" "),s("p",[s("code",[t._v("api.addEvent(name)")])]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[t._v("name : "),s("code",[t._v("String")]),t._v("\n事件名称")])])]),t._v(" "),s("li",[t._v("返回 : 是否注册成功")]),t._v(" "),s("li",[t._v("返回值类型 : "),s("code",[t._v("Boolean")])]),t._v(" "),s("li",[t._v("注意 : 由于模块加载的先后顺序，如果一个事件还未注册就被其他模块监听，会监听失败（待改进）")])]),t._v(" "),s("h2",{attrs:{id:"触发事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触发事件"}},[t._v("#")]),t._v(" 触发事件")]),t._v(" "),s("p",[t._v("注意：此操作接触到"),s("code",[t._v("NilBridge")]),t._v("底层API，非必要请勿使用")]),t._v(" "),s("p",[s("code",[t._v("NIL.EventManager.on(event,param)")])]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[t._v("event : "),s("code",[t._v("String")]),t._v("\n事件名称，必须是已经注册的")]),t._v(" "),s("li",[t._v("param : "),s("code",[t._v("Object")]),t._v("\n向事件回调中传入的参数")])])]),t._v(" "),s("li",[t._v("注意 : 当使用此方法后，"),s("code",[t._v("NilBridge")]),t._v("会寻找监听此事件的函数并调用它们")])]),t._v(" "),s("h2",{attrs:{id:"注册命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册命令"}},[t._v("#")]),t._v(" 注册命令")]),t._v(" "),s("p",[s("code",[t._v("api.regCMD(cmd,desc,callback)")])]),t._v(" "),s("ul",[s("li",[t._v("参数\n"),s("ul",[s("li",[t._v("cmd : "),s("code",[t._v("String")]),t._v("\n命令字符串")]),t._v(" "),s("li",[t._v("desc : "),s("code",[t._v("String")]),t._v("\n命令描述")]),t._v(" "),s("li",[t._v("callback : "),s("code",[t._v("Function")]),t._v("\n回调函数")])])]),t._v(" "),s("li",[t._v("返回 ： 是否注册成功")]),t._v(" "),s("li",[t._v("返回值类型 : "),s("code",[t._v("Boolean")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);