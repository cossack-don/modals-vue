(function(e){function t(t){for(var n,r,l=t[0],s=t[1],c=t[2],u=0,m=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,l=1;l<o.length;l++){var s=o[l];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},a={app:0},i=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/modals-vue/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"1e01":function(e,t,o){},3835:function(e,t,o){"use strict";o("1e01")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"wrapper"},[o("div",{staticClass:"wrapper-content"},[o("section",[o("div",{staticClass:"container"},[o("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.ModalFirst=!e.ModalFirst}}},[e._v("Show model first")]),o("Modals",{directives:[{name:"show",rawName:"v-show",value:e.ModalFirst,expression:"ModalFirst"}],attrs:{title:"Frist model"},on:{clickClosePopup:function(t){e.ModalFirst=!e.ModalFirst},clickAreaClosePopup:function(t){e.ModalFirst=!e.ModalFirst},clickBtnEscAndClosePopup:function(t){e.ModalFirst=!e.ModalFirst}}},[o("div",{attrs:{slot:"body"},slot:"body"},[o("p",[e._v("TEXT TEXT TEXT TEXT")]),o("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.ModalFirst=!e.ModalFirst}}},[e._v("Show model first")])]),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("p",[e._v("Footer")])])]),o("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.ModalSecond.show=!e.ModalSecond.show}}},[e._v("Show model second with form")]),o("Modals",{directives:[{name:"show",rawName:"v-show",value:e.ModalSecond.show,expression:"ModalSecond.show"}],attrs:{title:"Model with form"},on:{clickClosePopup:function(t){e.ModalSecond.show=!1},clickAreaClosePopup:function(t){e.ModalSecond.show=!1},clickBtnEscAndClosePopup:function(t){e.ModalSecond.show=!1}}},[o("div",{attrs:{slot:"body"},slot:"body"},[o("form",{on:{submit:function(t){return t.preventDefault(),e.submitSecondForm(t)}}},[o("label",[e._v("Name:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.ModalSecond.name,expression:"ModalSecond.name"}],attrs:{type:"text",required:""},domProps:{value:e.ModalSecond.name},on:{input:function(t){t.target.composing||e.$set(e.ModalSecond,"name",t.target.value)}}}),o("label",[e._v("Email:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.ModalSecond.email,expression:"ModalSecond.email"}],attrs:{type:"email",required:""},domProps:{value:e.ModalSecond.email},on:{input:function(t){t.target.composing||e.$set(e.ModalSecond,"email",t.target.value)}}}),o("button",{staticClass:"btn btnPrimary"},[e._v("Submit")])])]),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("p",[e._v("Footer")])])]),o("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.ModalValidateEvent=!e.ModalValidateEvent}}},[e._v("Show model + validate")]),e.ModalValidateEvent?o("ModalValidate",{on:{"clickClosePopup-two":function(t){e.ModalValidateEvent=!1},"clickBtnEscAndClosePopup-two":function(t){e.ModalValidateEvent=!1},"clickAreaClosePopup-two":function(t){e.ModalValidateEvent=!1}}}):e._e()],1)])])])},i=[],r=(o("b0c0"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal__wrapper",on:{click:function(t){return e.$emit("clickAreaClosePopup")}}},[o("div",{staticClass:"modal-content",on:{click:function(e){e.stopPropagation()}}},[o("div",{staticClass:"modal-header"},[o("span",{staticClass:"modal-title",staticStyle:{"margin-right":"10px"}},[e._v(" "+e._s(e.title)+" ")]),o("span",{staticClass:"button-close",staticStyle:{background:"red",padding:"6px","border-radius":"50%"},on:{click:function(t){return e.$emit("clickClosePopup")}}},[e._v(" × ")])]),o("div",{staticClass:"modal-body"},[e._t("body",[e._v("Default body")])],2),o("div",{staticClass:"modal-footer"},[e._t("footer",[e._v("footer body")])],2)])])])}),l=[],s={props:{title:{type:String,required:!0}},computed:{},methods:{},mounted:function(){var e=this;document.body.addEventListener("keyup",(function(t){27===t.keyCode&&e.$emit("clickBtnEscAndClosePopup")}))}},c=s,d=(o("3835"),o("2877")),u=Object(d["a"])(c,r,l,!1,null,"3db588ac",null),m=u.exports,p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("modal",{attrs:{title:"Model with form"},on:{clickClosePopup:function(t){return e.$emit("clickClosePopup-two")},clickBtnEscAndClosePopup:function(t){return e.$emit("clickBtnEscAndClosePopup-two")},clickAreaClosePopup:function(t){return e.$emit("clickAreaClosePopup-two")}}},[o("div",{attrs:{slot:"body"},slot:"body"},[o("form",{on:{submit:function(t){return t.preventDefault(),e.clickBtnForm(t)}}},[o("div",{staticClass:"form-item",class:{errorInput:e.$v.name.$error}},[o("label",[e._v("Name:")]),e.$v.name.required?e._e():o("p",{staticClass:"errorText"},[e._v("filed is required")]),e.$v.name.minLength?e._e():o("p",{staticClass:"errorText"},[e._v("name must have at leat не может быть меньще чем 4 символа $v-"+e._s(e.$v.name.$params.minLength.min)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],class:{error:e.$v.name.$error},domProps:{value:e.name},on:{change:function(t){return e.$v.name.$touch()},input:function(t){t.target.composing||(e.name=t.target.value)}}})]),o("div",{staticClass:"form-item",class:{errorInput:e.$v.email.$error}},[o("label",[e._v("Email:")]),e.$v.email.required?e._e():o("p",{staticClass:"errorText"},[e._v("filed is required")]),e.$v.email.email?e._e():o("p",{staticClass:"errorText"},[e._v("емейл не корректный")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{error:e.$v.email.$error},domProps:{value:e.email},on:{change:function(t){return e.$v.email.$touch()},input:function(t){t.target.composing||(e.email=t.target.value)}}})]),o("button",{staticClass:"btn btnPrimary"},[e._v("Submit")])])]),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("p",[e._v("Footer")])])])},v=[],f=o("4126"),h={components:{modal:m},data:function(){return{email:"",name:""}},validations:{name:{required:f["required"],minLength:Object(f["minLength"])(4)},email:{required:f["required"],email:f["email"]}},methods:{clickBtnForm:function(){if(this.$v.$touch(),!this.$v.$invalid){var e={name:this.name,email:this.email};console.log(e),this.name="",this.email="",this.$v.$reset(),this.$emit("clickClosePopup-two")}}}},b=h,M=(o("900c"),Object(d["a"])(b,p,v,!1,null,null,null)),w=M.exports,_={name:"App",components:{Modals:m,ModalValidate:w},data:function(){return{ModalFirst:!1,ModalSecond:{show:!1,email:"",name:""},ModalValidateEvent:!1}},methods:{submitSecondForm:function(){console.log({name:this.ModalSecond.name,email:this.ModalSecond.email}),this.ModalSecond.name="",this.ModalSecond.email="",this.ModalSecond.show=!1}}},C=_,y=Object(d["a"])(C,a,i,!1,null,null,null),g=y.exports,$=o("8c0a"),P=o.n($);o("c1c3");n["a"].use(P.a),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(g)}}).$mount("#app")},"900c":function(e,t,o){"use strict";o("fe41")},c1c3:function(e,t,o){},fe41:function(e,t,o){}});
//# sourceMappingURL=app.e6f0ecb3.js.map