(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-remenshetuan-add-or-update"],{"0cae":function(r,e,t){"use strict";var i=t("a9b8"),a=t.n(i);a.a},"26a0":function(r,e,t){var i=t("24fb");e=i(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-38aa7992]{padding:%?20?%}.content[data-v-38aa7992]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-38aa7992]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-38aa7992]{width:%?180?%}.avator[data-v-38aa7992]{width:%?150?%;height:%?60?%}.right-input[data-v-38aa7992]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-38aa7992]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-38aa7992]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-38aa7992]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-38aa7992]{border:0}.cu-form-group uni-input[data-v-38aa7992]{padding:0 %?30?%}.uni-input[data-v-38aa7992]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-38aa7992]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-38aa7992]::after{line-height:%?80?%}.select .uni-input[data-v-38aa7992]{line-height:%?80?%}.input .right-input[data-v-38aa7992]{line-height:%?88?%}',""]),r.exports=e},"48f7":function(r,e,t){"use strict";t.r(e);var i=t("6368"),a=t("8f36");for(var n in a)"default"!==n&&function(r){t.d(e,r,(function(){return a[r]}))}(n);t("0cae");var o,s=t("f0c5"),d=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"38aa7992",null,!1,i["a"],o);e["default"]=d.exports},6368:function(r,e,t){"use strict";var i={"w-picker":t("e2b1").default},a=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("社团名称")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.shetuanmingcheng,placeholder:"社团名称"},model:{value:r.ruleForm.shetuanmingcheng,callback:function(e){r.$set(r.ruleForm,"shetuanmingcheng",e)},expression:"ruleForm.shetuanmingcheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.tupianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("图片")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.tupian?t("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.tupian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("社团类别")]),t("v-uni-picker",{attrs:{value:r.shetuanleibieIndex,range:r.shetuanleibieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.shetuanleibieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(71, 177, 60, 1)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"dashed "}},[r._v(r._s(r.ruleForm.shetuanleibie?r.ruleForm.shetuanleibie:"请选择社团类别"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("社团人数")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.shetuanrenshu,placeholder:"社团人数"},model:{value:r.ruleForm.shetuanrenshu,callback:function(e){r.$set(r.ruleForm,"shetuanrenshu",e)},expression:"ruleForm.shetuanrenshu"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("成立时间")]),t("v-uni-picker",{attrs:{mode:"date",value:r.ruleForm.chenglishijian},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.chenglishijianChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(71, 177, 60, 1)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"dashed "}},[r._v(r._s(r.ruleForm.chenglishijian?r.ruleForm.chenglishijian:"请选择成立时间"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("社团地址")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.shetuandizhi,placeholder:"社团地址"},model:{value:r.ruleForm.shetuandizhi,callback:function(e){r.$set(r.ruleForm,"shetuandizhi",e)},expression:"ruleForm.shetuandizhi"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("社长账号")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.shezhangzhanghao,placeholder:"社长账号"},model:{value:r.ruleForm.shezhangzhanghao,callback:function(e){r.$set(r.ruleForm,"shezhangzhanghao",e)},expression:"ruleForm.shezhangzhanghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("社长姓名")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.shezhangxingming,placeholder:"社长姓名"},model:{value:r.ruleForm.shezhangxingming,callback:function(e){r.$set(r.ruleForm,"shezhangxingming",e)},expression:"ruleForm.shezhangxingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"308rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("社团宗旨")]),t("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(71, 177, 60, 1)",borderRadius:"16rpx",color:"rgba(161, 161, 161, 1)",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"280rpx"},attrs:{placeholder:"社团宗旨"},model:{value:r.ruleForm.shetuanzongzhi,callback:function(e){r.$set(r.ruleForm,"shetuanzongzhi",e)},expression:"ruleForm.shetuanzongzhi"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"308rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("社团风采")]),t("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(71, 177, 60, 1)",borderRadius:"16rpx",color:"rgba(161, 161, 161, 1)",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"280rpx"},attrs:{placeholder:"社团风采"},model:{value:r.ruleForm.shetuanfengcai,callback:function(e){r.$set(r.ruleForm,"shetuanfengcai",e)},expression:"ruleForm.shetuanfengcai"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0 auto",backgroundColor:"rgba(71, 177, 60, 1)",borderColor:"rgba(71, 177, 60, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1),t("w-picker",{ref:"clicktime",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(e){arguments[0]=e=r.$handleEvent(e),r.clicktimeConfirm.apply(void 0,arguments)}}})],1)},n=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return n})),t.d(e,"a",(function(){return i}))},"8f36":function(r,e,t){"use strict";t.r(e);var i=t("9321"),a=t.n(i);for(var n in i)"default"!==n&&function(r){t.d(e,r,(function(){return i[r]}))}(n);e["default"]=a.a},9321:function(r,e,t){"use strict";var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("a481"),t("c5f6"),t("f559"),t("ac6a"),t("96cf");var a=i(t("3b8d")),n=i(t("e2b1")),o={data:function(){return{cross:"",ruleForm:{shetuanmingcheng:"",tupian:"",shetuanleibie:"",shetuanrenshu:"",shetuanzongzhi:"",chenglishijian:"",shetuandizhi:"",shetuanfengcai:"",shezhangzhanghao:"",shezhangxingming:""},shetuanleibieOptions:[],shetuanleibieIndex:0,user:{},ro:{shetuanmingcheng:!1,tupian:!1,shetuanleibie:!1,shetuanrenshu:!1,shetuanzongzhi:!1,chenglishijian:!1,shetuandizhi:!1,shetuanfengcai:!1,shezhangzhanghao:!1,shezhangxingming:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:n.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(e){var t,i,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(t);case 3:return i=r.sent,this.user=i.data,this.ruleForm.shezhangzhanghao=this.user.shezhangzhanghao,this.ro.shezhangzhanghao=!0,this.ruleForm.shezhangxingming=this.user.shezhangxingming,this.ro.shezhangxingming=!0,r.next=11,this.$api.option("shetuanleibie","shetuanleibie",{});case 11:if(i=r.sent,this.shetuanleibieOptions=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=21;break}return this.ruleForm.id=e.id,r.next=19,this.$api.info("remenshetuan",this.ruleForm.id);case 19:i=r.sent,this.ruleForm=i.data;case 21:if(this.cross=e.cross,!e.cross){r.next=77;break}a=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(a);case 25:if((r.t1=r.t0()).done){r.next=77;break}if(n=r.t1.value,"shetuanmingcheng"!=n){r.next=31;break}return this.ruleForm.shetuanmingcheng=a[n],this.ro.shetuanmingcheng=!0,r.abrupt("continue",25);case 31:if("tupian"!=n){r.next=35;break}return this.ruleForm.tupian=a[n],this.ro.tupian=!0,r.abrupt("continue",25);case 35:if("shetuanleibie"!=n){r.next=39;break}return this.ruleForm.shetuanleibie=a[n],this.ro.shetuanleibie=!0,r.abrupt("continue",25);case 39:if("shetuanrenshu"!=n){r.next=43;break}return this.ruleForm.shetuanrenshu=a[n],this.ro.shetuanrenshu=!0,r.abrupt("continue",25);case 43:if("shetuanzongzhi"!=n){r.next=47;break}return this.ruleForm.shetuanzongzhi=a[n],this.ro.shetuanzongzhi=!0,r.abrupt("continue",25);case 47:if("chenglishijian"!=n){r.next=51;break}return this.ruleForm.chenglishijian=a[n],this.ro.chenglishijian=!0,r.abrupt("continue",25);case 51:if("shetuandizhi"!=n){r.next=55;break}return this.ruleForm.shetuandizhi=a[n],this.ro.shetuandizhi=!0,r.abrupt("continue",25);case 55:if("shetuanfengcai"!=n){r.next=59;break}return this.ruleForm.shetuanfengcai=a[n],this.ro.shetuanfengcai=!0,r.abrupt("continue",25);case 59:if("shezhangzhanghao"!=n){r.next=63;break}return this.ruleForm.shezhangzhanghao=a[n],this.ro.shezhangzhanghao=!0,r.abrupt("continue",25);case 63:if("shezhangxingming"!=n){r.next=67;break}return this.ruleForm.shezhangxingming=a[n],this.ro.shezhangxingming=!0,r.abrupt("continue",25);case 67:if("clicktime"!=n){r.next=71;break}return this.ruleForm.clicktime=a[n],this.ro.clicktime=!0,r.abrupt("continue",25);case 71:if("clicknum"!=n){r.next=75;break}return this.ruleForm.clicknum=a[n],this.ro.clicknum=!0,r.abrupt("continue",25);case 75:r.next=25;break;case 77:this.styleChange();case 78:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},chenglishijianChange:function(r){this.ruleForm.chenglishijian=r.target.value,this.$forceUpdate()},clicktimeConfirm:function(r){console.log(r),this.ruleForm.clicktime=r.result,this.$forceUpdate()},shetuanleibieChange:function(r){this.shetuanleibieIndex=r.target.value,this.ruleForm.shetuanleibie=this.shetuanleibieOptions[this.shetuanleibieIndex]},tupianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.tupian="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){var e,t,i,a,n,o,s,d,u,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.ruleForm.shetuanrenshu||this.$validate.isIntNumer(this.ruleForm.shetuanrenshu)){r.next=3;break}return this.$utils.msg("社团人数应输入整数"),r.abrupt("return");case 3:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){r.next=6;break}return this.$utils.msg("点击次数应输入整数"),r.abrupt("return");case 6:if(!this.cross){r.next=22;break}if(a=uni.getStorageSync("statusColumnName"),n=uni.getStorageSync("statusColumnValue"),""==a){r.next=22;break}if(o=uni.getStorageSync("crossObj"),a.startsWith("[")){r.next=18;break}for(s in o)s==a&&(o[s]=n);return d=uni.getStorageSync("crossTable"),r.next=16,this.$api.update("".concat(d),o);case 16:r.next=22;break;case 18:e=Number(uni.getStorageSync("userid")),t=o["id"],i=uni.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 22:if(!t||!e){r.next=44;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=t,u={page:1,limit:10,crossuserid:e,crossrefid:t},r.next=28,this.$api.list("remenshetuan",u);case 28:if(l=r.sent,!(l.data.total>=i)){r.next=34;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 34:if(!this.ruleForm.id){r.next=39;break}return r.next=37,this.$api.update("remenshetuan",this.ruleForm);case 37:r.next=41;break;case 39:return r.next=41,this.$api.add("remenshetuan",this.ruleForm);case 41:this.$utils.msgBack("提交成功");case 42:r.next=52;break;case 44:if(!this.ruleForm.id){r.next=49;break}return r.next=47,this.$api.update("remenshetuan",this.ruleForm);case 47:r.next=51;break;case 49:return r.next=51,this.$api.add("remenshetuan",this.ruleForm);case 51:this.$utils.msgBack("提交成功");case 52:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();return"start"===r?t-=60:"end"===r&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(r){this.$refs[r].show()}}};e.default=o},a9b8:function(r,e,t){var i=t("26a0");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var a=t("4f06").default;a("c9938726",i,!0,{sourceMap:!1,shadowMode:!1})}}]);