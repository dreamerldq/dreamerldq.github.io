(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{146:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("h3",{attrs:{id:"正则表示的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正则表示的使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 正则表示的使用")]),e("ul",[e("li",[this._v("微信支付正则表达式： 只能展示小数点后两位，首位输入‘.’自动补全0")])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("    if (/^\\./.test(inputValue)) {  //如果输入的第一位是'.',则自动在输入的前边补一个0\n      inputValue = `0${inputValue}`;\n      if (!/^\\d+\\.?\\d{0,2}$/.test(inputValue)) { //这个正则表达式的意识是： 必须以数字开头，小数点可有可无，如果写了小数点，则后续的小数只能有两位。如果不满足这个条件的话，也就是当输入的小数点超过两位的时候， \n        inputValue = inputValue.substring(0, inputValue.length - 1);\n      }\n    } else if (!/^\\d+\\.?\\d{0,2}$/.test(inputValue)) {\n      inputValue = inputValue.substring(0, inputValue.length - 1);\n    }\n")])])])])}],!1,null,null,null);e.default=s.exports}}]);