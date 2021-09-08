(function(e){function t(t){for(var n,s,l=t[0],i=t[1],u=t[2],p=0,f=[];p<l.length;p++)s=l[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var i=r[l];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/agetrack/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("e792"),r("0cdd");var n=r("2b0e"),a=r("5f5b");r("ab8b"),r("2dd8");n["default"].use(a["a"]);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"mt-3"},[r("h3",[e._v("Age Track")]),r("b-table-simple",{attrs:{striped:""}},[r("b-thead",[r("b-tr",[r("b-th"),e._l(e.years,(function(t,n){return r("b-th",{key:"year_th"+n},[r("b-button",{staticClass:"float-left mr-1",staticStyle:{width:"60px"},attrs:{variant:"danger"},on:{click:function(t){return e.removeYear(n)}}},[e._v("Del")]),r("b-input",{staticStyle:{width:"80px"},model:{value:t.year,callback:function(r){e.$set(t,"year",r)},expression:"year.year"}})],1)}))],2)],1),r("b-tbody",e._l(e.people,(function(t,n){return r("b-tr",{key:"person_"+n},[r("b-td",[r("b-button",{staticClass:"float-left mr-1",attrs:{size:"sm",variant:"danger"},on:{click:function(t){return e.removePerson(n)}}},[e._v("Del")]),r("b-input",{staticClass:"float-left mr-1",staticStyle:{width:"180px"},attrs:{size:"sm"},model:{value:t.name,callback:function(r){e.$set(t,"name",r)},expression:"person.name"}}),r("b-input",{staticClass:"float-left",staticStyle:{width:"80px"},attrs:{size:"sm"},model:{value:t.year,callback:function(r){e.$set(t,"year",r)},expression:"person.year"}})],1),e._l(e.years,(function(e,n){return r("b-td",{key:"year_td"+n},[r("b-input",{staticStyle:{width:"145px"},attrs:{value:e.year-t.year>0?e.year-t.year:""},on:{change:function(r){t.year=parseInt(e.year)-parseInt(r)}}})],1)}))],2)})),1)],1),r("b-button-group",{staticClass:"float-left"},[r("b-button",{attrs:{variant:"success"},on:{click:e.addPerson}},[e._v("Add Person")]),r("b-button",{attrs:{variant:"success"},on:{click:e.addYear}},[e._v("Add Year")])],1),r("b-button-group",{staticClass:"float-right"},[r("b-button",{attrs:{variant:"danger"},on:{click:e.reset}},[e._v("Reset Group")])],1)],1)},s=[],l=r("5530"),i=r("2f62"),u={name:"AgeTrack",data:function(){return{people:this.$store.state.people,years:this.$store.state.years}},methods:Object(l["a"])({},Object(i["b"])(["addYear","addPerson","removeYear","removePerson","reset"]))},c=u,p=r("2877"),f=Object(p["a"])(c,o,s,!1,null,null,null),d=f.exports;r("a434");function b(e){return JSON.parse(localStorage.getItem(e))||{people:[],years:[]}}function y(e,t){localStorage.setItem(e,JSON.stringify(t))}n["default"].use(i["a"]);var v=new i["a"].Store({state:b("default"),mutations:{addYear:function(e){e.years.push({year:0})},addPerson:function(e){e.people.push({name:"",year:9999})},removeYear:function(e,t){e.years.splice(t,1)},removePerson:function(e,t){e.people.splice(t,1)},reset:function(e){e.people.splice(0),e.years.splice(0)}},actions:{},modules:{}});v.watch((function(e){y("default",e)}));var h=v;n["default"].config.productionTip=!1,new n["default"]({store:h,render:function(e){return e(d)}}).$mount("#app")}});
//# sourceMappingURL=app.js.map