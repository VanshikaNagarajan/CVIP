var aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ca=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");
},m=ca(this),n=function(a,b){if(b)a:{var c=m;a=a.split(".");for(var d=0;d<a.length-1;d++){var h=a[d];if(!(h in c))break a;c=c[h]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}};
n("Symbol",function(a){if(a)return a;var b=function(l,f){this.g=l;ba(this,"description",{configurable:!0,writable:!0,value:f})};b.prototype.toString=function(){return this.g};var c="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",d=0,h=function(l){if(this instanceof h)throw new TypeError("Symbol is not a constructor");return new b(c+(l||"")+"_"+d++,l)};return h});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=m[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return da(aa(this))}})}return a});
var da=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a},q=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=fa,r=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype};
n("Promise",function(a){function b(){this.g=null}function c(f){return f instanceof h?f:new h(function(e){e(f)})}if(a)return a;b.prototype.i=function(f){if(null==this.g){this.g=[];var e=this;this.l(function(){e.N()})}this.g.push(f)};var d=m.setTimeout;b.prototype.l=function(f){d(f,0)};b.prototype.N=function(){for(;this.g&&this.g.length;){var f=this.g;this.g=[];for(var e=0;e<f.length;++e){var g=f[e];f[e]=null;try{g()}catch(k){this.u(k)}}}this.g=null};b.prototype.u=function(f){this.l(function(){throw f;
})};var h=function(f){this.i=0;this.l=void 0;this.g=[];this.W=!1;var e=this.u();try{f(e.resolve,e.reject)}catch(g){e.reject(g)}};h.prototype.u=function(){function f(k){return function(p){g||(g=!0,k.call(e,p))}}var e=this,g=!1;return{resolve:f(this.oa),reject:f(this.N)}};h.prototype.oa=function(f){if(f===this)this.N(new TypeError("A Promise cannot resolve to itself"));else if(f instanceof h)this.ta(f);else{a:switch(typeof f){case "object":var e=null!=f;break a;case "function":e=!0;break a;default:e=
!1}e?this.na(f):this.V(f)}};h.prototype.na=function(f){var e=void 0;try{e=f.then}catch(g){this.N(g);return}"function"==typeof e?this.ua(e,f):this.V(f)};h.prototype.N=function(f){this.ha(2,f)};h.prototype.V=function(f){this.ha(1,f)};h.prototype.ha=function(f,e){if(0!=this.i)throw Error("Cannot settle("+f+", "+e+"): Promise already settled in state"+this.i);this.i=f;this.l=e;2===this.i&&this.qa();this.ka()};h.prototype.qa=function(){var f=this;d(function(){if(f.ma()){var e=m.console;"undefined"!==typeof e&&
e.error(f.l)}},1)};h.prototype.ma=function(){if(this.W)return!1;var f=m.CustomEvent,e=m.Event,g=m.dispatchEvent;if("undefined"===typeof g)return!0;"function"===typeof f?f=new f("unhandledrejection",{cancelable:!0}):"function"===typeof e?f=new e("unhandledrejection",{cancelable:!0}):(f=m.document.createEvent("CustomEvent"),f.initCustomEvent("unhandledrejection",!1,!0,f));f.promise=this;f.reason=this.l;return g(f)};h.prototype.ka=function(){if(null!=this.g){for(var f=0;f<this.g.length;++f)l.i(this.g[f]);
this.g=null}};var l=new b;h.prototype.ta=function(f){var e=this.u();f.O(e.resolve,e.reject)};h.prototype.ua=function(f,e){var g=this.u();try{f.call(e,g.resolve,g.reject)}catch(k){g.reject(k)}};h.prototype.then=function(f,e){function g(w,F){return"function"==typeof w?function(ua){try{k(w(ua))}catch(va){p(va)}}:F}var k,p,y=new h(function(w,F){k=w;p=F});this.O(g(f,k),g(e,p));return y};h.prototype.catch=function(f){return this.then(void 0,f)};h.prototype.O=function(f,e){function g(){switch(k.i){case 1:f(k.l);
break;case 2:e(k.l);break;default:throw Error("Unexpected state: "+k.i);}}var k=this;null==this.g?l.i(g):this.g.push(g);this.W=!0};h.resolve=c;h.reject=function(f){return new h(function(e,g){g(f)})};h.race=function(f){return new h(function(e,g){for(var k=q(f),p=k.next();!p.done;p=k.next())c(p.value).O(e,g)})};h.all=function(f){var e=q(f),g=e.next();return g.done?c([]):new h(function(k,p){function y(ua){return function(va){w[ua]=va;F--;0==F&&k(w)}}var w=[],F=0;do w.push(void 0),F++,c(g.value).O(y(w.length-
1),p),g=e.next();while(!g.done)})};return h});var t=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
n("WeakMap",function(a){function b(){}function c(g){var k=typeof g;return"object"===k&&null!==g||"function"===k}function d(g){if(!t(g,l)){var k=new b;ba(g,l,{value:k})}}function h(g){var k=Object[g];k&&(Object[g]=function(p){if(p instanceof b)return p;Object.isExtensible(p)&&d(p);return k(p)})}if(function(){if(!a||!Object.seal)return!1;try{var g=Object.seal({}),k=Object.seal({}),p=new a([[g,2],[k,3]]);if(2!=p.get(g)||3!=p.get(k))return!1;p.delete(g);p.set(k,4);return!p.has(g)&&4==p.get(k)}catch(y){return!1}}())return a;
var l="$jscomp_hidden_"+Math.random();h("freeze");h("preventExtensions");h("seal");var f=0,e=function(g){this.g=(f+=Math.random()+1).toString();if(g){g=q(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}};e.prototype.set=function(g,k){if(!c(g))throw Error("Invalid WeakMap key");d(g);if(!t(g,l))throw Error("WeakMap key fail: "+g);g[l][this.g]=k;return this};e.prototype.get=function(g){return c(g)&&t(g,l)?g[l][this.g]:void 0};e.prototype.has=function(g){return c(g)&&t(g,l)&&t(g[l],this.g)};
e.prototype.delete=function(g){return c(g)&&t(g,l)&&t(g[l],this.g)?delete g[l][this.g]:!1};return e});
n("Map",function(a){if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var e=Object.seal({x:4}),g=new a(q([[e,"s"]]));if("s"!=g.get(e)||1!=g.size||g.get({x:4})||g.set({x:4},"t")!=g||2!=g.size)return!1;var k=g.entries(),p=k.next();if(p.done||p.value[0]!=e||"s"!=p.value[1])return!1;p=k.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!k.next().done?!1:!0}catch(y){return!1}}())return a;var b=new WeakMap,c=function(e){this[0]={};this[1]=
l();this.size=0;if(e){e=q(e);for(var g;!(g=e.next()).done;)g=g.value,this.set(g[0],g[1])}};c.prototype.set=function(e,g){e=0===e?0:e;var k=d(this,e);k.list||(k.list=this[0][k.id]=[]);k.o?k.o.value=g:(k.o={next:this[1],v:this[1].v,head:this[1],key:e,value:g},k.list.push(k.o),this[1].v.next=k.o,this[1].v=k.o,this.size++);return this};c.prototype.delete=function(e){e=d(this,e);return e.o&&e.list?(e.list.splice(e.index,1),e.list.length||delete this[0][e.id],e.o.v.next=e.o.next,e.o.next.v=e.o.v,e.o.head=
null,this.size--,!0):!1};c.prototype.clear=function(){this[0]={};this[1]=this[1].v=l();this.size=0};c.prototype.has=function(e){return!!d(this,e).o};c.prototype.get=function(e){return(e=d(this,e).o)&&e.value};c.prototype.entries=function(){return h(this,function(e){return[e.key,e.value]})};c.prototype.keys=function(){return h(this,function(e){return e.key})};c.prototype.values=function(){return h(this,function(e){return e.value})};c.prototype.forEach=function(e,g){for(var k=this.entries(),p;!(p=k.next()).done;)p=
p.value,e.call(g,p[1],p[0],this)};c.prototype[Symbol.iterator]=c.prototype.entries;var d=function(e,g){var k=g&&typeof g;"object"==k||"function"==k?b.has(g)?k=b.get(g):(k=""+ ++f,b.set(g,k)):k="p_"+g;var p=e[0][k];if(p&&t(e[0],k))for(e=0;e<p.length;e++){var y=p[e];if(g!==g&&y.key!==y.key||g===y.key)return{id:k,list:p,index:e,o:y}}return{id:k,list:p,index:-1,o:void 0}},h=function(e,g){var k=e[1];return da(function(){if(k){for(;k.head!=e[1];)k=k.v;for(;k.next!=k.head;)return k=k.next,{done:!1,value:g(k)};
k=null}return{done:!0,value:void 0}})},l=function(){var e={};return e.v=e.next=e.head=e},f=0;return c});n("Math.log2",function(a){return a?a:function(b){return Math.log(b)/Math.LN2}});n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)t(b,d)&&c.push(b[d]);return c}});n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var h=d.length;c=c||0;for(0>c&&(c=Math.max(c+h,0));c<h;c++){var l=d[c];if(l===b||Object.is(l,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(b,c||0)}});
var la=function(a,b){a instanceof String&&(a+="");var c=0,d=!1,h={next:function(){if(!d&&c<a.length){var l=c++;return{value:b(l,a[l]),done:!1}}d=!0;return{done:!0,value:void 0}}};h[Symbol.iterator]=function(){return h};return h};n("Array.prototype.entries",function(a){return a?a:function(){return la(this,function(b,c){return[b,c]})}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(e){return e};var h=[],l="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof l){b=l.call(b);for(var f=0;!(l=b.next()).done;)h.push(c.call(d,l.value,f++))}else for(l=b.length,f=0;f<l;f++)h.push(c.call(d,b[f],f));return h}});n("Array.prototype.keys",function(a){return a?a:function(){return la(this,function(b){return b})}});
n("Array.prototype.values",function(a){return a?a:function(){return la(this,function(b,c){return c})}});n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)t(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var u=this||self,v=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"},ma=function(a,b){function c(){}c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Na=function(d,h,l){for(var f=Array(arguments.length-2),e=2;e<arguments.length;e++)f[e-2]=arguments[e];return b.prototype[h].apply(d,f)}},na=function(a){return a};function x(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,x);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}ma(x,Error);x.prototype.name="CustomError";function oa(a,b){a=a.split("%s");for(var c="",d=a.length-1,h=0;h<d;h++)c+=a[h]+(h<b.length?b[h]:"%s");x.call(this,c+a[d])}ma(oa,x);oa.prototype.name="AssertionError";function z(a,b,c,d){var h="Assertion failed";if(c){h+=": "+c;var l=d}else a&&(h+=": "+a,l=b);throw new oa(""+h,l||[]);}
var A=function(a,b,c){a||z("",null,b,Array.prototype.slice.call(arguments,2))},pa=function(a,b){throw new oa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},B=function(a,b,c){"number"!==typeof a&&z("Expected number but got %s: %s.",[v(a),a],b,Array.prototype.slice.call(arguments,2));return a},qa=function(a,b,c){"string"!==typeof a&&z("Expected string but got %s: %s.",[v(a),a],b,Array.prototype.slice.call(arguments,2))},ra=function(a,b,c){"function"!==typeof a&&z("Expected function but got %s: %s.",
[v(a),a],b,Array.prototype.slice.call(arguments,2))},C=function(a,b,c){Array.isArray(a)||z("Expected array but got %s: %s.",[v(a),a],b,Array.prototype.slice.call(arguments,2));return a},ta=function(a,b,c,d){a instanceof b||z("Expected instanceof %s but got %s.",[sa(b),sa(a)],c,Array.prototype.slice.call(arguments,3));return a};
function sa(a){return a instanceof Function?a.displayName||a.name||"unknown type name":a instanceof Object?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):null===a?"null":typeof a};var wa,xa;a:{for(var ya=["CLOSURE_FLAGS"],za=u,Aa=0;Aa<ya.length;Aa++)if(za=za[ya[Aa]],null==za){xa=null;break a}xa=za}var Ba=xa&&xa[610401301];wa=null!=Ba?Ba:!1;function Ca(){var a=u.navigator;return a&&(a=a.userAgent)?a:""}var D,Da=u.navigator;D=Da?Da.userAgentData||null:null;function Ea(a){return wa?D?D.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}function E(a){return-1!=Ca().indexOf(a)};function G(){return wa?!!D&&0<D.brands.length:!1}function Fa(){return G()?Ea("Chromium"):(E("Chrome")||E("CriOS"))&&!(G()?0:E("Edge"))||E("Silk")};var Ga=G()?!1:E("Trident")||E("MSIE"),Ha=-1!=Ca().toLowerCase().indexOf("webkit")&&!E("Edge")&&E("Mobile");!E("Android")||Fa();Fa();E("Safari")&&(Fa()||(G()?0:E("Coast"))||(G()?0:E("Opera"))||(G()?0:E("Edge"))||(G()?Ea("Microsoft Edge"):E("Edg/"))||G()&&Ea("Opera"));var Ia={},Ja=null;var Ka="undefined"!==typeof Uint8Array,La=!Ga&&"function"===typeof btoa;A(!0);var H="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol("INTERNAL_ARRAY_STATE"):void 0,Ma=Math,Na=Ma.log2,Oa=Math.max,Pa=Oa.apply,Qa=Object.values({Ia:1,Ga:2,Fa:4,La:8,Ka:16,Ja:32,Ba:64,Ma:128,Ea:256,Da:512,Ha:1024,Ca:2048}),Ra;if(Qa instanceof Array)Ra=Qa;else{for(var Sa=q(Qa),Ta,Ua=[];!(Ta=Sa.next()).done;)Ua.push(Ta.value);Ra=Ua}A(11===Na.call(Ma,Pa.call(Oa,Math,Ra)));function Va(a){A((a&4194303)==a)}
var Wa=H?function(a,b){Va(b);C(a,"state is only maintained on arrays.");a[H]|=b}:function(a,b){Va(b);C(a,"state is only maintained on arrays.");void 0!==a.H?a.H|=b:Object.defineProperties(a,{H:{value:b,configurable:!0,writable:!0,enumerable:!1}})},Xa=Object.getOwnPropertyDescriptor(Array.prototype,"va");
Object.defineProperties(Array.prototype,{va:{get:function(){function a(h,l){h&b&&c.push(l)}var b=I(this),c=[];a(1,"IS_REPEATED_FIELD");a(2,"IS_IMMUTABLE_ARRAY");a(4,"IS_API_FORMATTED");a(8,"ONLY_MUTABLE_VALUES");a(32,"MUTABLE_REFERENCES_ARE_OWNED");a(64,"CONSTRUCTED");a(128,"TRANSFERRED");a(256,"HAS_SPARSE_OBJECT");a(512,"HAS_MESSAGE_ID");a(2048,"FROZEN_ARRAY");var d=Ya(b);536870912!==d&&c.push("pivot: "+d);d=c.join(",");return Xa?Xa.get.call(this)+"|"+d:d},configurable:!0,enumerable:!1}});
var I=H?function(a){C(a,"state is only maintained on arrays.");return a[H]|0}:function(a){C(a,"state is only maintained on arrays.");return a.H|0};
function Za(a,b){A(b&64,"state for messages must be constructed");A(0===(b&5),"state for messages should not contain repeated field state");var c=Ya(b),d=a.length;A(c+(+!!(b&512)-1)>=d-1,"pivot %s is pointing at an index earlier than the last index of the array, length: %s",c,d);b&512&&A("string"===typeof a[0],"arrays with a message_id bit must have a string in the first position, got: %s",a[0]);a=d?a[d-1]:void 0;A((null!=a&&"object"===typeof a&&a.constructor===Object)===!!(b&256),"arraystate and array disagree on sparseObject presence")}
var $a=H?function(a){C(a,"state is only maintained on arrays.");var b=a[H];Za(a,b);return b}:function(a){C(a,"state is only maintained on arrays.");var b=a.H;Za(a,b);return b},ab=H?function(a,b){C(a,"state is only maintained on arrays.");Va(b);a[H]=b}:function(a,b){C(a,"state is only maintained on arrays.");Va(b);void 0!==a.H?a.H=b:Object.defineProperties(a,{H:{value:b,configurable:!0,writable:!0,enumerable:!1}})};
function bb(a,b){B(b);A(0<b&&1023>=b||536870912===b);return a&-4190209|(b&1023)<<12}function Ya(a){a=a>>12&1023;return 0===a?536870912:a};var cb,db={};function eb(a){var b=a.wa===db;A(!cb||b===a instanceof cb);return b}var fb={};function gb(a){var b=!(!a||"object"!==typeof a||a.Oa!==fb);A(b===a instanceof Map);return b&&0===ta(a,Map).size}function hb(a,b){B(a);A(0<=a);A(0===b||-1===b);return a-b}function ib(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
function jb(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=I(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;ab(a,d|1);return!0}var kb=[];ab(kb,55);Object.freeze(kb);function lb(){}function mb(a){var b=I(C(a));A(!(b&2&&b&4||b&2048)||Object.isFrozen(a));var c=!!(b&8);b=!!(b&16&&b&32);if(c||b){var d,h,l;a.forEach(function(f){Array.isArray(f)?l=!0:f&&eb(f)&&(I(f.T)&2?h=!0:d=!0)});l&&A(!h&&!d);b&&A(!l&&!d);c&&A(!l&&!h)}};var nb;var ob=function(){throw Error("please construct maps as mutable then call toImmutable");};
if("undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance){var pb=function(){throw Error("Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information");},qb={};Object.defineProperties(ob,(qb[Symbol.hasInstance]={value:pb,configurable:!1,writable:!1,enumerable:!1},qb));A(ob[Symbol.hasInstance]===pb,"defineProperties did not work: was it monkey-patched?")};function rb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return jb(a,void 0,9999)?void 0:a;if(Ka&&null!=a&&a instanceof Uint8Array){if(La){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else{c=v(a);A("array"==c||"object"==c&&"number"==typeof a.length,"encodeByteArray takes an array as a parameter");
void 0===b&&(b=0);if(!Ja){Ja={};c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");d=["+/=","+/","-_=","-_.","-_"];for(var h=0;5>h;h++){var l=c.concat(d[h].split(""));Ia[h]=l;for(var f=0;f<l.length;f++){var e=l[f],g=Ja[e];void 0===g?Ja[e]=f:A(g===f)}}}b=Ia[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(h=l=0;l<a.length-2;l+=3){g=a[l];var k=a[l+1];e=a[l+2];f=b[g>>2];g=b[(g&3)<<4|k>>4];k=b[(k&15)<<2|e>>6];e=b[e&63];c[h++]=""+f+g+k+e}f=0;e=d;switch(a.length-l){case 2:f=
a[l+1],e=b[(f&15)<<2]||d;case 1:a=a[l],c[h]=""+b[a>>2]+b[(a&3)<<4|f>>4]+e+d}a=c.join("")}return a}}}return a};function sb(a,b,c,d,h,l){if(null!=a){if(Array.isArray(a))a=h&&0==a.length&&I(a)&1?void 0:l&&I(a)&2?a:tb(a,b,c,void 0!==d,h,l);else if(ib(a)){var f={},e;for(e in a)f[e]=sb(a[e],b,c,d,h,l);a=f}else a=b(a,d);return a}}function tb(a,b,c,d,h,l){var f=d||c?I(a):0;d=d?!!(f&32):void 0;for(var e=Array.prototype.slice.call(a),g=0;g<e.length;g++)e[g]=sb(e[g],b,c,d,h,l);c&&(C(e),C(a),c(f,e));return e}function ub(a){return eb(a)?a.toJSON():rb(a)};Object.freeze({});if("undefined"!==typeof Proxy){var J=vb;new Proxy({},{getPrototypeOf:J,setPrototypeOf:J,isExtensible:J,preventExtensions:J,getOwnPropertyDescriptor:J,defineProperty:J,has:J,get:J,set:J,deleteProperty:J,apply:J,construct:J})}function vb(){throw Error("this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array");throw Error();};var K=function(a,b,c){ta(this,K,"The message constructor should only be used by subclasses");A(this.constructor!==K,"Message is an abstract class and cannot be directly constructed");a:{null==a&&(a=nb);nb=void 0;if(null!=a)for(var d=0;d<a.length;d++){var h=a[d];Array.isArray(h)&&mb(h)}if(null==a)d=96,c?(a=[c],d|=512):a=[],b&&(d=bb(d,b));else{if(!Array.isArray(a))throw Error("data passed to JSPB constructors must be an Array, got '"+JSON.stringify(a)+"' a "+v(a));if(Object.isFrozen(a)||!Object.isExtensible(a)||
Object.isSealed(a))throw Error("data passed to JSPB constructors must be mutable");d=I(a);if(d&64){Za(a,d);break a}d|=64;if(c&&(d|=512,c!==a[0]))throw Error('Expected message to have a message id: "'+c+'" in the array, got: '+JSON.stringify(a[0])+" a "+v(a[0])+", are you parsing with the wrong proto?");b:{c=d;if(d=a.length)if(h=d-1,ib(a[h])){c|=256;b=hb(h,+!!(c&512)-1);if(1024<=b)throw Error("Found a message with a sparse object at fieldNumber "+b+" is >= the limit 1024");d=bb(c,b);break b}if(b){b=
Math.max(b,hb(d,+!!(c&512)-1));if(1024<b)throw Error("a message was constructed with an array of length "+d+" which is longer than 1024, are you using a supported serializer?");d=bb(c,b)}else d=c}}ab(a,d);A(d&64)}this.T=a;this.preventPassingToStructuredClone=lb};K.prototype.toJSON=function(){var a=this.T;C(a);a=tb(a,ub,void 0,void 0,!1,!1);return wb(this,a,!0)};cb=K;K.prototype.wa=db;K.prototype.toString=function(){return wb(this,this.T,!1).toString()};
function wb(a,b,c){var d=a.constructor.ya,h=$a(c?a.T:b);a=b.length;if(!a)return b;var l;if(ib(c=b[a-1])){a:{var f=c;var e={},g=!1,k;for(k in f){var p=f[k];if(Array.isArray(p)){var y=p;if(jb(p,d,+k)||gb(p))p=null;p!=y&&(g=!0)}null!=p?e[k]=p:g=!0}if(g){for(var w in e){f=e;break a}f=null}}f!=c&&(l=!0);a--}for(k=+!!(h&512)-1;0<a;a--){w=a-1;c=b[w];if(null!=c&&!jb(c,d,w-k)&&!gb(c))break;var F=!0}if(!l&&!F)return b;b=Array.prototype.slice.call(b,0,a);f&&b.push(f);return b};function xb(a){if(a instanceof K)return a.constructor.g};(function(){var a=u.jspbGetTypeName;u.jspbGetTypeName=a?function(b){return a(b)||xb(b)}:xb})();var yb=K;var L=function(a,b){this.key=a;this.defaultValue=b},M=function(a,b){this.key=a;this.defaultValue=b},N=function(a,b){this.key=a;this.defaultValue=b};var O=function(a){yb.call(this,a)};r(O,yb);var zb=function(a){return function(b){ra(a);if(null==b||""==b)b=ta(new a,K);else{qa(b);b=JSON.parse(b);if(!Array.isArray(b))throw Error("Expected to deserialize an Array but got "+v(b)+": "+b);Wa(b,32);A(!!(I(b)&32));nb=b;b=new a(b);nb=void 0}return b}}(O);O.g="experiments.proto.StringListParam";O.ya=[1];var Ab=new N("45427660",""),Bb=new N("45427664",""),Cb=new N("45427663",""),Db=new function(a,b){this.key=a;this.defaultValue=b}("45425558",zb('[["huggingface.co","dagshub.com"]]'),O,"experiments.proto.StringListParam","CthsRb"),Eb=new N("45425541",""),Fb=new N("45425537",""),Gb=new N("45425538",""),Hb=new M("45425588",9E5),Ib=new M("45425587",6E4),Jb=new L("45425491",!1),Kb=new N("45425545",""),Lb=new N("45425470","undefined"),Mb=new N("45425471","undefined"),Nb=new L("45425544",!1),Ob=new M("45425589",
3E4),Pb=new N("45425478",""),Qb=new N("45425473",""),Rb=new N("45425479",""),Sb=new N("45425629",""),Tb=new L("45425560",!1),Ub=new L("45425492",!0),Vb=new M("45425561",6E5),Wb=new L("45425559",!0),Xb=new L("45429104",!1),Yb=new N("45425557","compiled"),Zb=new L("45425630",!1),$b=new L("45425550",!1),ac=new L("45425631",!1),P=new L("45425493",!1),bc=new L("45425562",!1),cc=new L("45425540",!1),dc=new N("45425584",""),ec=new N("45425585",""),fc=new N("45425591",""),gc=new L("45425592",!1),hc=new M("45425582",
0),ic=new N("45425581","6LfQttQUAAAAADuPanA_VZMaZgBAOnHZNuuqUewp"),jc=new N("45425580","6LfQPtEUAAAAAHBpAdFng54jyuB1V5w5dofknpip"),kc=new M("45425539",300),lc=new M("45428124",0),mc=new M("45425590",1E4),nc=new N("45425583",""),oc=new N("45425586",""),pc=new L("45425543",!1),qc=new L("45425483",!1),rc=new L("45425542",!1),sc=new N("45425546",""),tc=new N("45425547",""),uc=new N("45425548",""),vc=new N("45425549",""),wc=new L("45425551",!1);var xc=new L("45425577",!0),yc=new L("45425510",!1),zc=new N("45425509",""),Ac=new N("45425508",""),Bc=new L("45425507",!1),Cc=new L("45459615",!1),Dc=new L("45425617",!0),Ec=new L("45425779",!1),Fc=new L("45425490",!0),Gc=new L("45425499",!1),Hc=new L("45425512",!1),Ic=new M("45425628",100),Jc=new L("45425502",!1),Kc=new L("45425506",!1),Lc=new L("45425505",!1),Mc=new L("45425487",!0),Nc=new L("45425488",!0),Oc=new L("45425503",!0),Pc=new L("45425504",!1),Qc=new L("45430267",!1),Rc=new L("45425625",
!1),Sc=new L("45430411",!1),Tc=new L("45425579",!0),Uc=new L("45425578",!1),Vc=new L("45425570",!1),Wc=new M("45425612",0),Xc=new L("45425602",!1),Yc=new L("45425604",!1),Zc=new L("45425608",!1),$c=new L("45425623",!1),ad=new L("45425609",!1),bd=new M("45425622",100),cd=new L("45428239",!1),dd=new L("45459627",!1),ed=new L("45425501",!0),fd=new L("45425489",!0),gd=new L("45426219",!1),hd=new L("45425624",!1),id=new L("45425600",!1),jd=new L("45425603",!1),kd=new L("45428502",!0),ld=new L("45428128",
!0),md=new L("45425620",!0),nd=new L("45425569",!1),od=new L("45425497",!1),pd=new L("45425498",!1),qd=new N("45425615",""),rd=new N("45425616",""),sd=new M("45425568",1E4),td=new L("45425601",!1),ud=new L("45425627",!1),vd=new L("45425606",!1),wd=new L("45425610",!1),xd=new L("45425618",!1),yd=new L("45425613",!1),zd=new L("45425614",!1),Ad=new L("45446491",!1),Bd=new L("45425626",!1);var Cd=new N("45425555","GoogleChrome/CrUX,google/generative-ai-docs"),Dd=new N("45425556","");var Ed=function(a){this.g=a};var Fd="closure_listenable_"+(1E6*Math.random()|0);var Gd=function(a){this.g=a};r(Gd,Ed);Gd.prototype[Fd]=!0;var Hd=function(a){this.g=a};r(Hd,Gd);var Id=function(a,b){this.g=a;this.i=b||null};r(Id,Ed);Id.prototype.then=function(a,b,c){var d;a&&(d=Jd(this,a));this.g.aa(d,b,c)};var Jd=function(a,b){var c=a.i;return c?function(d){b.call(this,new c(d))}:b};var Kd=[];var Q=function(a){this.g=a||gbar.a;this.l=this.i=null};r(Q,Ed);var Md=function(){var a=Ld();a.i||(a.i=new Id(a.g.bf(),Hd));return a.i},Nd=function(){var a=Ld();a.l||(a.l=new Id(a.g.bh()));return a.l},Ld=function(){A(!Object.isSealed(Q),"Cannot use getInstance() with a sealed constructor.");var a="U";if(Q.U&&Q.hasOwnProperty(a))a=Q.U;else{Kd.push(Q);var b=new Q;Q.U=b;A(Q.hasOwnProperty(a),"Could not instantiate singleton.");a=b}return a};var Od;var R=function(a,b){this.g=a===Pd&&b||"";this.i=Qd};R.prototype.toString=function(){return"Const{"+this.g+"}"};var Rd=function(a){if(a instanceof R&&a.constructor===R&&a.i===Qd)return a.g;pa("expected object of type Const, got '"+a+"'");return"type_error:Const"},Qd={},Pd={};var Td=function(a,b){if(b!==Sd)throw Error("TrustedResourceUrl is not meant to be built directly");this.g=a};Td.prototype.toString=function(){return this.g+""};var Sd={},Ud=function(a){if(void 0===Od){var b=null;var c=u.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:na,createScript:na,createScriptURL:na})}catch(d){u.console&&u.console.error(d.message)}Od=b}else Od=b}a=(b=Od)?b.createScriptURL(a):a;return new Td(a,Sd)};var Wd=function(a){if(Vd!==Vd)throw Error("SafeUrl is not meant to be built directly");this.g=a};Wd.prototype.toString=function(){return this.g.toString()};var Vd={};new Wd("about:invalid#zClosurez");new Wd("about:blank");var Xd={},Yd=function(){if(Xd!==Xd)throw Error("SafeStyle is not meant to be built directly");};Yd.prototype.toString=function(){return"".toString()};new Yd;var Zd={},$d=function(){if(Zd!==Zd)throw Error("SafeStyleSheet is not meant to be built directly");};$d.prototype.toString=function(){return"".toString()};new $d;var ae={},be=function(){var a=u.trustedTypes&&u.trustedTypes.emptyHTML||"";if(ae!==ae)throw Error("SafeHtml is not meant to be built directly");this.g=a};be.prototype.toString=function(){return this.g.toString()};new be;var ce=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),h=null;if(0<=d){var l=a[c].substring(0,d);h=a[c].substring(d+1)}else l=a[c];b(l,h?decodeURIComponent(h.replace(/\+/g," ")):"")}}};var S=function(){var a=self.location.search.slice(1);this.i=this.g=null;this.l=a||null},T=function(a){a.g||(a.g=new Map,a.i=0,a.l&&ce(a.l,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))};S.prototype.add=function(a,b){T(this);this.l=null;a=String(a);var c=this.g.get(a);c||this.g.set(a,c=[]);c.push(b);this.i=B(this.i)+1;return this};var de=function(a,b){T(a);b=String(b);return a.g.has(b)};
S.prototype.forEach=function(a,b){T(this);this.g.forEach(function(c,d){c.forEach(function(h){a.call(b,h,d,this)},this)},this)};var ee=function(a,b){T(a);var c=[];if("string"===typeof b)de(a,b)&&(c=c.concat(a.g.get(String(b))));else for(a=Array.from(a.g.values()),b=0;b<a.length;b++)c=c.concat(a[b]);return c};S.prototype.set=function(a,b){T(this);this.l=null;a=String(a);de(this,a)&&(this.i=B(this.i)-this.g.get(a).length);this.g.set(a,[b]);this.i=B(this.i)+1;return this};
S.prototype.get=function(a,b){if(!a)return b;a=ee(this,a);return 0<a.length?String(a[0]):b};S.prototype.toString=function(){if(this.l)return this.l;if(!this.g)return"";for(var a=[],b=Array.from(this.g.keys()),c=0;c<b.length;c++){var d=b[c],h=encodeURIComponent(String(d));d=ee(this,d);for(var l=0;l<d.length;l++){var f=h;""!==d[l]&&(f+="="+encodeURIComponent(String(d[l])));a.push(f)}}return this.l=a.join("&")};var fe=function(a,b,c){var d,h=null!=(d=a.i.get(b))?d:b;b=a.l[h];null==b&&(a.u.push(h),b=c);a.g.set(h,b);return b},V=function(a,b){var c=U,d=void 0===b?{}:b;b=d.s;var h;d=null!=(h=d.j)?h:a.defaultValue;a=!!fe(c,a.key,d);if(null==b)return a;var l;h=null!=(l=c.i.get(b.key))?l:b.key;if(!c.g.has(h))throw Error("Flag dependency "+b.key+" not found.");return!!c.g.get(h)&&a},W=function(a,b){var c;fe(U,a.key,null!=(c=null==b?void 0:b.j)?c:a.defaultValue)},X=function(a,b){var c;fe(U,a.key,null!=(c=null==b?
void 0:b.j)?c:a.defaultValue)},U=new function(){var a=u.colabExperiments||{};this.u=[];this.i=new Map;this.l=a;this.g=new Map;if(a=this.l.flag_ids)for(var b=q(Object.keys(a)),c=b.next();!c.done;c=b.next())c=c.value,a[c]&&this.i.set(String(a[c]),c)};W({key:"ids",defaultValue:""});W(Lb,{j:""});W(Mb,{j:""});V(Xb);W(Qb);W(Pb);W(Rb);V(qc);W(Fb);W(Gb);V($b);V(wc);V(bc,{j:Ha});W(Yb);W(Eb);V(Tb,{j:!0});V(Wb,{j:!1});X(Vb,{j:0});V(td);W(Dd);var ge={key:Db.key,defaultValue:[]};fe(U,ge.key,ge.defaultValue);W(Cd);
W(oc);V(Jb);X(Ib);X(Hb);X(Ob);X(mc,{j:6E4});W(nc);V(id);W(dc,{j:""});W(ec,{j:""});W(fc);W(jc,{j:""});W(ic,{j:""});V(Nb);V(gc);X(kc);X(hc);V(cc);V(nd);V(Xc);V(jd);V(rc);V(Yc);V(pc);W(sc);W(tc);W(uc);W(vc);V(vd);V(Zc);V(md,{j:!1});V(wd);X(Wc);V(xd);V(ed,{j:!1});W(Kb);V(yd);V(zd);W(qd);W(rd);V(ad);X(bd,{j:0});V($c,{j:!0});V(Dc,{j:!1});V(hd);W(Sb);V(Rc,{j:!0});V(Bd);V(gd);V(Zb);V(ud);X(Ic,{j:0});V(Jc);V(ac);V(P);V(Ec,{j:!0});V(Hc,{s:P});V(Oc,{s:P});V(Pc,{s:P});V(Lc,{s:P});V(Mc,{s:P,j:!1});V(yc,{s:P});
V(Bc,{s:P});V(Fc,{s:P,j:!1});V(Ub,{s:P,j:!1});V(Gc,{s:P});X(sd);V(Nc,{j:!1});V(fd,{s:P,j:!1});W(Ac,{j:""});W(zc,{j:""});W(Ab,{j:""});W(Cb,{j:""});W(Bb,{j:""});V(Vc);V(xc,{j:!0});V(Uc);V(Tc);V(Kc);V(od);V(pd,{s:od});X(lc);V(ld,{j:!1});V(cd,{s:P});V(kd);V(Sc);V(Ad);var he=V(dd);V(Qc);V(Cc);var ie=U,je=new S;T(je);for(var ke=Array.from(je.g.values()),le=Array.from(je.g.keys()),me=[],ne=0;ne<le.length;ne++)for(var oe=ke[ne],pe=0;pe<oe.length;pe++)me.push(le[ne]);
for(var qe=q(me),re=qe.next();!re.done;re=qe.next()){var se=re.value;if(!ie.g.has(se)){var Y=je,te=se;T(Y);te=String(te);Y.g.has(te)&&(Y.l=null,Y.i=B(Y.i)-Y.g.get(te).length,Y.g.delete(te))}};var ue=function(a,b){this.name=a;this.value=b};ue.prototype.toString=function(){return this.name};
var ve=new ue("OFF",Infinity),we=new ue("WARNING",900),xe=new ue("CONFIG",700),ye=function(){},ze,Ae=function(){},Be=function(a,b){this.g=null;this.u=[];this.i=(void 0===b?null:b)||null;this.l=[];this.N={g:function(){return a}}},Ce=function(a){if(a.g)return a.g;if(a.i)return Ce(a.i);pa("Root logger has no level set.");return ve},De=function(a){for(var b=new Ae;a;)a.u.forEach(function(c){c(b)}),a=a.i},Ee=function(){this.entries={};var a=new Be("");a.g=xe;this.entries[""]=a},Fe,Ge=function(a,b){var c=
a.entries[b];if(c)return c;c=Ge(a,b.slice(0,Math.max(b.lastIndexOf("."),0)));var d=new Be(b,c);a.entries[b]=d;c.l.push(d);return d},He=function(){Fe||(Fe=new Ee);return Fe};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Ie=[],Je=function(a){var b;if(b=Ge(He(),"safevalues").N){a="A URL with content '"+a+"' was sanitized away.";var c;if(c=b)if(c=b&&we){c=we.value;var d=b?Ce(Ge(He(),b.g())):ve;c=c>=d.value}c&&(b=Ge(He(),b.g()),"function"===typeof a&&a(),ze||(ze=new ye),De(b))}};-1===Ie.indexOf(Je)&&Ie.push(Je);function Ke(){window.performance.mark("gapi_load_end");window.performance.measure("gapi_load","gapi_load_start","gapi_load_end");Le?(Me=!0,Ne&&Oe()):Oe()}var Oe,Pe=null,Z=window,Qe=Z.colabExperiments&&Z.colabExperiments.gis_auth,Re=Z.colabExperiments&&Z.colabExperiments.first_party_auth,Se=Z.colabExperiments&&Z.colabExperiments.rt,Le=Qe&&(!Re||Se),Ne=!1,Me=!1,Te=document.getElementsByTagName("script")[0],Ue=Ud(Rd(new R(Pd,"https://accounts.google.com/gsi/client")));
function Ve(){if(Pe)return Pe;window.performance.mark("gapi_load_start");return Pe=new Promise(function(a,b){Oe=a;Le&&We(function(){b(Error("Error loading "+Ue))});if(Re&&"undefined"!==typeof gbar)Nd().then(function(){Qe?gapi.load("client",Ke):gapi.load("auth:client",Ke)}),he&&Md().then(function(d){var h="dark"===document.documentElement.getAttribute("theme");h&&(d.g.pp(h),d.g.pd("#383838"))});else{Z.gapi_onload=Ke;var c=Ud(Rd(new R(Pd,"https://apis.google.com/js/client.js")));Xe({src:c,onerror:function(){b(Error("Error loading "+
c))}})}})}function We(a){Xe({src:Ue,onload:function(){Ne=!0;Me&&Oe()},onerror:a})}
function Xe(a){var b=document;var c="SCRIPT";"application/xhtml+xml"===b.contentType&&(c=c.toLowerCase());c=b.createElement(c);b=a.src;b instanceof Td&&b.constructor===Td?b=b.g:(pa("expected object of type TrustedResourceUrl, got '%s' of type %s",b,v(b)),b="type_error:TrustedResourceUrl");c.src=b;var d,h;(d=(b=null==(h=(d=(c.ownerDocument&&c.ownerDocument.defaultView||window).document).querySelector)?void 0:h.call(d,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&c.setAttribute("nonce",
d);c.async=!0;a.onload&&(c.onload=a.onload);a.onerror&&(c.onerror=a.onerror);Te.parentNode.insertBefore(c,Te)}Z.colab_gapi_loader={load:Ve};Ve().then(function(){},function(){});
