"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[452],{92452:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var c=function(){var e=this,t=e._self._c;return t("div",{staticClass:"big-screen",staticStyle:{width:"100%"}},[e.showFullScreen?t("a-icon",{attrs:{type:"fullscreen"},on:{click:e.changeFull}}):e._e(),t("img",{staticStyle:{width:"inherit"},attrs:{id:"big-screen",src:e.imgUrl}})],1)},l=[],u=n(15575),s={data:function(){return{imgUrl:u.$o,showFullScreen:!1}},mounted:function(){var e={"/operateCenter/bigScreen":u.$o,"/devopsCenter/bigScreen":u.X8,"/monitor/show-pic1":u.eR,"/monitor/show-pic2":u.PQ,"/monitor/show-pic3":u.QQ,"/monitor/show-pic4":u.WP,"/my-request/workspace":u.Xs,"/my-request/request-list":u.wi,"/pay":u.Gy};this.imgUrl=e[this.$route.path],this.$route.path&&this.$route.path.indexOf("bigScreen")>-1&&(this.showFullScreen=!0)},methods:{enable:function(e){e.requestFullScreen?e.requestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},cancel:function(){document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},changeFull:function(){this.isFull?this.cancel():this.enable(document.getElementById("big-screen"))}}},r=s,i=n(1001),o=(0,i.Z)(r,c,l,!1,null,"76f653e0",null),a=o.exports}}]);