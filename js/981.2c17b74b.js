"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[981],{32981:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var a=function(){var e=this,t=e._self._c;return t("a-list",{staticClass:"card-list",attrs:{rowKey:"id",grid:{gutter:24,lg:4,md:2,sm:1,xs:1},dataSource:e.dataSource},scopedSlots:e._u([{key:"renderItem",fn:function(s){return t("a-list-item",{on:{click:function(t){return e.select(s)}}},[s&&void 0!==s.title?[t("a-card",{class:{"cc-selected":s.selected},attrs:{hoverable:!0}},[t("a-card-meta",[t("a",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(s.title+(s.index||"")))]),t("div",{staticClass:"meta-content",attrs:{slot:"description"},slot:"description"},[e._v(e._s(s.des))]),t("div",{staticClass:"overfolw-cc",attrs:{slot:"description"},slot:"description"},[t("div",{staticClass:"cc-card",attrs:{slot:"description"},slot:"description"},[t("div",{staticClass:"label"},[e._v("数据中心")]),t("ul",{staticClass:"content dataCenters"},e._l(s.dataCenters,(function(s,a){return t("li",[e._v(e._s(s))])})),0)]),t("div",{staticClass:"cc-card",attrs:{slot:"description"},slot:"description"},[t("div",{staticClass:"label"},[t("div",[e._v("资源池")]),t("i",{staticClass:"resourceBundle"},[e._v(e._s(s.resourceBundle))])]),t("ul",{staticClass:"content"},[e._l(s.power,(function(s,a){return t("li",["all"===a?t("span",[e._v("总算力："+e._s(s)+" MFLOPS")]):e._e(),"on"===a?t("span",[e._v("已售算力："+e._s(s))]):e._e(),"off"===a?t("span",[e._v("剩余算力："+e._s(s))]):e._e()])})),t("li",[e._v("GPU："+e._s(s.num.gpu)+" 卡")]),t("li",[e._v("VCPU："+e._s(s.num.vcpu)+" 核")]),t("li",[e._v("存储："+e._s(s.num.mem)+" GB")]),t("li",[e._v("带宽："+e._s(s.num.bandwidth)+" M")]),t("li",[e._v("延迟："+e._s(s.num.delay)+" ms")])],2)])]),t("div",{staticClass:"cc-card",attrs:{slot:"description"},slot:"description"},[t("div",{staticClass:"label line-height-2"},[e._v("总销售额")]),t("div",{staticClass:"content pad40L green-font"},[t("span",{staticClass:"unit"},[e._v(e._s(s.unit))]),e._v(" "+e._s(s.sales))])])])],1)]:[t("a-button",{staticClass:"new-btn",staticStyle:{height:"403px"},attrs:{type:"dashed"}},[t("a-icon",{attrs:{type:"plus"}}),e._v(" 新增 ")],1)]],2)}}])},[t("a-modal",{attrs:{width:640,title:"新增",cancelText:"取消",okText:"确定"},on:{ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("a-form",e._b({attrs:{form:e.form}},"a-form",e.formLayout,!1),[t("a-form-item",{attrs:{label:"名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title"],expression:"['title']"}]})],1),t("a-form-item",{attrs:{label:"描述"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["des"],expression:"['des']"}]})],1),t("a-form-item",{attrs:{label:"数据中心"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["dataCenters",{rules:[{required:!0,message:"请选择数据中心"}]}],expression:"[ 'dataCenters', {rules: [{ required: true, message: '请选择数据中心'}]} ]"}],attrs:{mode:"multiple",placeholder:"请选择数据中心"}},[t("a-select-option",{attrs:{value:"和林格尔数据中心1"}},[e._v("和林格尔数据中心1")]),t("a-select-option",{attrs:{value:"和林格尔数据中心2"}},[e._v("和林格尔数据中心2")]),t("a-select-option",{attrs:{value:"和林格尔数据中心3"}},[e._v("和林格尔数据中心3")]),t("a-select-option",{attrs:{value:"和林格尔数据中心4"}},[e._v("和林格尔数据中心4")])],1)],1)],1)],1)],1)},i=[],l=(s(41539),s(54747),s(40561),[]),n={title:"直营店",des:"说明文字：最高配置4张NVIDIA 16G显存T4计算卡，372G DDR4内存",dataCenters:["和林格尔数据中心1","和林格尔数据中心2"],resourceBundle:"5.0",num:{gpu:4,vcpu:128,mem:256,disk:3e3,bandwidth:3e3,delay:33},power:{all:"200,305",on:"77,654",off:"122,651"},sales:"346,742.99",unit:"¥",selected:!1},d={title:"阿里云",des:"说明文字：最高配置4张NVIDIA 16G显存T4计算卡，372G DDR4内存",dataCenters:["和林格尔数据中心1","和林格尔数据中心2"],resourceBundle:"5.0",num:{gpu:4,vcpu:128,mem:256,disk:3e3,bandwidth:3e3,delay:33},power:{all:"36,544",on:"11,600",off:"24,944"},sales:"346,572.15",unit:"¥",selected:!1},r={title:"华为云",des:"说明文字：最高配置4张NVIDIA 16G显存T4计算卡，372G DDR4内存",dataCenters:["华为云数据中心1","华为云数据中心2"],resourceBundle:"5.0",num:{gpu:4,vcpu:128,mem:256,disk:3e3,bandwidth:3e3,delay:33},power:{all:"19,343",on:"8,001",off:"11,342"},sales:"266,990.03",unit:"¥",selected:!1},o={title:"腾讯云",des:"说明文字：最高配置4张NVIDIA 16G显存T4计算卡，372G DDR4内存",dataCenters:["和林格尔数据中心1","和林格尔数据中心2"],resourceBundle:"5.0",num:{gpu:4,vcpu:128,mem:256,disk:3e3,bandwidth:3e3,delay:33},power:{all:"36,544",on:"11,600",off:"24,944"},sales:"346,572.15",unit:"¥",selected:!1};l.push({}),l.push(Object.assign({id:1,index:1},n)),l.push(Object.assign({id:2,index:2},n)),l.push(Object.assign({id:3,index:3},n)),l.push(Object.assign({id:4,index:1},d)),l.push(Object.assign({id:5,index:2},d)),l.push(Object.assign({id:6,index:3},d)),l.push(Object.assign({id:7,index:1},r)),l.push(Object.assign({id:8,index:2},r)),l.push(Object.assign({id:9,index:1},o)),l.push(Object.assign({id:10,index:2},o));var c=["title","des","dataCenters"],u={name:"SuperManagement",data:function(){return{dataSource:l,visible:!1,formLayout:{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}}},form:this.$form.createForm(this)}},mounted:function(){"/my-shop"===this.$route.path&&(this.dataSource=[{},{id:1,index:1,title:"阿里云",des:"说明文字：最高配置4张NVIDIA 16G显存T4计算卡，372G DDR4内存",dataCenters:["和林格尔数据中心1","和林格尔数据中心2"],resourceBundle:"5.0",num:{gpu:4,vcpu:128,mem:256,disk:3e3,bandwidth:3e3,delay:33},power:{all:"36,544",on:"11,600",off:"24,944"},sales:"346,572.15",unit:"¥",selected:!1},{id:2,index:2,title:"阿里云",des:"说明文字：最高配置4张NVIDIA 16G显存T4计算卡，372G DDR4内存",dataCenters:["和林格尔数据中心1","和林格尔数据中心2"],resourceBundle:"5.0",num:{gpu:4,vcpu:128,mem:256,disk:3e3,bandwidth:3e3,delay:33},power:{all:"36,544",on:"11,600",off:"24,944"},sales:"346,572.15",unit:"¥",selected:!1},{id:3,index:3,title:"阿里云",des:"说明文字：最高配置4张NVIDIA 16G显存T4计算卡，372G DDR4内存",dataCenters:["和林格尔数据中心1","和林格尔数据中心2"],resourceBundle:"5.0",num:{gpu:4,vcpu:128,mem:256,disk:3e3,bandwidth:3e3,delay:33},power:{all:"36,544",on:"11,600",off:"24,944"},sales:"346,572.15",unit:"¥",selected:!1}])},methods:{select:function(e){this.dataSource.forEach((function(t){t.selected=t.id===e.id})),e.title||this.handleAdd()},handleAdd:function(){this.visible=!0},handleOk:function(){var e=this.form.getFieldsValue(c);this.dataSource.splice(1,0,{title:e.title,des:e.des,dataCenters:e.dataCenters,resourceBundle:"5.0",num:{gpu:8,vcpu:128,mem:1024,disk:3e3,bandwidth:3e3,delay:13},power:{all:"3,067,588",on:"123,346",off:"2,944,242"},sales:"646,572.15",unit:"¥",selected:!1}),this.visible=!1,this.form.resetFields()},handleCancel:function(){this.visible=!1,this.form.resetFields()}}},p=u,m=s(1001),v=(0,m.Z)(p,a,i,!1,null,"0bd3861d",null),f=v.exports}}]);