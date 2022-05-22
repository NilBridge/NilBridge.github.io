(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{523:function(_,v,a){"use strict";a.r(v);var t=a(33),e=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h2",{attrs:{id:"获取机器人配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取机器人配置"}},[_._v("#")]),_._v(" 获取机器人配置")]),_._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("let")]),_._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[_._v("NIL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("_vanilla"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("cfg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])])]),a("p",[a("em",[_._v("里面其实就是你的"),a("code",[_._v("modules/vanilla/config.json")]),_._v("啦")])]),_._v(" "),a("h2",{attrs:{id:"添加玩家白名单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加玩家白名单"}},[_._v("#")]),_._v(" 添加玩家白名单")]),_._v(" "),a("p",[a("code",[_._v("NIL._vanilla.wl_add(qq,xboxid)")])]),_._v(" "),a("ul",[a("li",[_._v("参数\n"),a("ul",[a("li",[_._v("qq : "),a("code",[_._v("Number")]),_._v("\n玩家QQ号")]),_._v(" "),a("li",[_._v("xboxid : "),a("code",[_._v("String")]),_._v("\n玩家代号")])])]),_._v(" "),a("li",[_._v("返回 : 无")])]),_._v(" "),a("h2",{attrs:{id:"获取玩家白名单数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取玩家白名单数据"}},[_._v("#")]),_._v(" 获取玩家白名单数据")]),_._v(" "),a("p",[a("code",[_._v("NIL._vanila.get_xboxid(qq)")])]),_._v(" "),a("ul",[a("li",[_._v("参数\n"),a("ul",[a("li",[_._v("qq : "),a("code",[_._v("Number")]),_._v("\n玩家QQ号")])])]),_._v(" "),a("li",[_._v("返回 : QQ号成员对应的玩家代号")]),_._v(" "),a("li",[_._v("返回值类型 : "),a("code",[_._v("string")]),_._v("/空")])]),_._v(" "),a("h2",{attrs:{id:"检查玩家是否绑定白名单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查玩家是否绑定白名单"}},[_._v("#")]),_._v(" 检查玩家是否绑定白名单")]),_._v(" "),a("p",[a("code",[_._v("NIL._vanilla.wl_exists(qq)")])]),_._v(" "),a("ul",[a("li",[_._v("参数\n"),a("ul",[a("li",[_._v("qq : "),a("code",[_._v("Number")]),_._v("\n玩家QQ号")])])]),_._v(" "),a("li",[_._v("返回 : 玩家是否绑定白名单")]),_._v(" "),a("li",[_._v("返回值类型 : "),a("code",[_._v("Boolean")])])]),_._v(" "),a("h2",{attrs:{id:"移除玩家白名单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除玩家白名单"}},[_._v("#")]),_._v(" 移除玩家白名单")]),_._v(" "),a("p",[a("code",[_._v("NIL._vanilla.wl_remove(qq)")])]),_._v(" "),a("ul",[a("li",[_._v("参数\n"),a("ul",[a("li",[_._v("qq : "),a("code",[_._v("Number")]),_._v("\n玩家QQ号")])])]),_._v(" "),a("li",[_._v("返回 : 无")])]),_._v(" "),a("h2",{attrs:{id:"获取玩家数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取玩家数据"}},[_._v("#")]),_._v(" 获取玩家数据")]),_._v(" "),a("p",[a("code",[_._v("NIL._vanilla.get_player(xboxid)")])]),_._v(" "),a("ul",[a("li",[_._v("参数\n"),a("ul",[a("li",[_._v("xboxid : "),a("code",[_._v("String")]),_._v("\n玩家代号")])])]),_._v(" "),a("li",[_._v("返回 : 玩家数据对象/空")]),_._v(" "),a("li",[_._v("返回值类型 : "),a("RouterLink",{attrs:{to:"/pages/c23fa5/#playerdataargs"}},[a("code",[_._v("PlayerData?")])])],1)]),_._v(" "),a("h2",{attrs:{id:"检查玩家代号是否已被绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查玩家代号是否已被绑定"}},[_._v("#")]),_._v(" 检查玩家代号是否已被绑定")]),_._v(" "),a("p",[a("code",[_._v("NIL._vanilla.xbox_exists(xboxid)")])]),_._v(" "),a("ul",[a("li",[_._v("参数\n"),a("ul",[a("li",[_._v("xboxid : "),a("code",[_._v("String")]),_._v("\n玩家代号")])])]),_._v(" "),a("li",[_._v("返回 : 是否已被绑定")]),_._v(" "),a("li",[_._v("返回值类型 : "),a("code",[_._v("Boolean")])])]),_._v(" "),a("h2",{attrs:{id:"从玩家代号获取玩家qq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从玩家代号获取玩家qq"}},[_._v("#")]),_._v(" 从玩家代号获取玩家QQ")]),_._v(" "),a("p",[a("code",[_._v("NIL._vanilla.get_qq(xboxid)")])]),_._v(" "),a("ul",[a("li",[_._v("参数\n"),a("ul",[a("li",[_._v("xboxid : "),a("code",[_._v("String")]),_._v("\n玩家代号")])])]),_._v(" "),a("li",[_._v("返回 : 玩家QQ/空")]),_._v(" "),a("li",[_._v("返回值类型 : "),a("code",[_._v("Number")])])]),_._v(" "),a("h2",{attrs:{id:"判断成员是否有管理员权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断成员是否有管理员权限"}},[_._v("#")]),_._v(" 判断成员是否有管理员权限")]),_._v(" "),a("p",[a("code",[_._v("NIL._vanilla.isAdmin(qq)")])]),_._v(" "),a("ul",[a("li",[_._v("参数\n"),a("ul",[a("li",[_._v("qq : "),a("code",[_._v("Number")]),_._v("\n玩家QQ号")])])]),_._v(" "),a("li",[_._v("返回 : 成员是否有管理员权限")]),_._v(" "),a("li",[_._v("返回值类型 : "),a("code",[_._v("Boolean")])])]),_._v(" "),a("h2",{attrs:{id:"获取所有成员数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取所有成员数据"}},[_._v("#")]),_._v(" 获取所有成员数据")]),_._v(" "),a("p",[a("code",[_._v("NIL._vanilla,get_all()")])]),_._v(" "),a("ul",[a("li",[_._v("返回 : 所有玩家数据，相当于直接返回"),a("code",[_._v("playerdata.json")])]),_._v(" "),a("li",[_._v("返回值类型 : "),a("code",[_._v("Object")])])])])}),[],!1,null,null,null);v.default=e.exports}}]);