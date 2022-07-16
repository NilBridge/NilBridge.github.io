(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{333:function(a,s,t){"use strict";t.r(s);var r=t(6),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("原生命令是NilBridge提供的一种用户与模块交互的方式")]),a._v(" "),s("p",[a._v("模块可以注册原生命令，从而使正则表达式可以调用")]),a._v(" "),s("p",[a._v("在群聊中发送"),s("code",[a._v("/nbcmd xxx")]),a._v("会返回执行结果，或者在控制台也可以直接执行")]),a._v(" "),s("p",[a._v("这里列举一些自带的命令")]),a._v(" "),s("h2",{attrs:{id:"stop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stop"}},[a._v("#")]),a._v(" stop")]),a._v(" "),s("p",[a._v("关闭"),s("code",[a._v("NilBridge")]),a._v("，一定要用这个关闭框架，否则数据不会被保存")]),a._v(" "),s("h2",{attrs:{id:"module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[a._v("#")]),a._v(" module")]),a._v(" "),s("p",[a._v("模块管理器，有如下子命令")]),a._v(" "),s("h3",{attrs:{id:"加载一个模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载一个模块"}},[a._v("#")]),a._v(" 加载一个模块")]),a._v(" "),s("p",[s("em",[a._v("模块存放在modules文件夹中")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("module load "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("moduleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h3",{attrs:{id:"卸载一个模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载一个模块"}},[a._v("#")]),a._v(" 卸载一个模块")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("module unload "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("moduleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h3",{attrs:{id:"重载所有模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重载所有模块"}},[a._v("#")]),a._v(" 重载所有模块")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("module reload\n")])])]),s("h3",{attrs:{id:"列出所有已经加载的模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列出所有已经加载的模块"}},[a._v("#")]),a._v(" 列出所有已经加载的模块")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("module list\n")])])]),s("h2",{attrs:{id:"qq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qq"}},[a._v("#")]),a._v(" qq")]),a._v(" "),s("p",[a._v("QQ管理器，有如下子命令")]),a._v(" "),s("h3",{attrs:{id:"登录一个qq-不会被保存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录一个qq-不会被保存"}},[a._v("#")]),a._v(" 登录一个qq（不会被保存）")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("qq login "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("qq"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h3",{attrs:{id:"下线一个qq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下线一个qq"}},[a._v("#")]),a._v(" 下线一个qq")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("qq "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("logout")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("qq"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h3",{attrs:{id:"添加一个自动登录项-添加后不会自动登录-需要重启或者手动登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加一个自动登录项-添加后不会自动登录-需要重启或者手动登录"}},[a._v("#")]),a._v(" 添加一个自动登录项（添加后不会自动登录，需要重启或者手动登录）")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("qq autologin "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("qq"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h3",{attrs:{id:"移除一个自动登录项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移除一个自动登录项"}},[a._v("#")]),a._v(" 移除一个自动登录项")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("qq autologin remove "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("qq"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"start-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-server"}},[a._v("#")]),a._v(" start_server")]),a._v(" "),s("h3",{attrs:{id:"开启一个服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启一个服务器"}},[a._v("#")]),a._v(" 开启一个服务器")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("start_server "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("服务器名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"stop-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stop-server"}},[a._v("#")]),a._v(" stop_server")]),a._v(" "),s("h3",{attrs:{id:"关闭一个服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭一个服务器"}},[a._v("#")]),a._v(" 关闭一个服务器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("stop_server <服务器名称>\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);