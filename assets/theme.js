/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-csstransforms-csstransforms3d-touch-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-cssclassprefix:supports!
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransforms=function(){return!!F("transform")},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.fontface=function(){var a;return w('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" supports-"+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" supports-js supports-"+t.join(" supports-"):""),e}(this,this.document);

/*!
 * headroom.js v0.9.3 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2016 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.Headroom=b()}(this,function(){"use strict";function b(a){this.callback=a,this.ticking=!1}function c(a){return a&&"undefined"!=typeof window&&(a===window||a.nodeType)}function d(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var e,f,b=a||{};for(f=1;f<arguments.length;f++){var g=arguments[f]||{};for(e in g)"object"!=typeof b[e]||c(b[e])?b[e]=b[e]||g[e]:b[e]=d(b[e],g[e])}return b}function e(a){return a===Object(a)?a:{down:a,up:a}}function f(a,b){b=d(b,f.options),this.lastKnownScrollY=0,this.elem=a,this.tolerance=e(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop,this.onBottom=b.onBottom,this.onNotBottom=b.onNotBottom}var a={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,b.prototype={constructor:b,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},f.prototype={constructor:f,init:function(){if(f.cutsTheMustard)return this.debouncer=new b(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.notTop,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;!a.contains(b.pinned)&&a.contains(b.unpinned)||(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.bottom)||(a.add(b.bottom),a.remove(b.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notBottom)||(a.add(b.notBottom),a.remove(b.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(a){return Math.max(a.offsetHeight,a.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var a=document.body,b=document.documentElement;return Math.max(a.scrollHeight,b.scrollHeight,a.offsetHeight,b.offsetHeight,a.clientHeight,b.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=a<0,c=a+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),a+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},f.options={tolerance:{up:0,down:50},offset:400,scroller:window,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},f.cutsTheMustard="undefined"!=typeof a&&a.rAF&&a.bind&&a.classList,f});
/*!
 * jQuery Headroom
 */
!function(a){a&&(a.fn.headroom=function(b){return this.each(function(){var c=a(this),d=c.data("headroom"),e="object"==typeof b&&b;e=a.extend(!0,{},Headroom.options,e),d||(d=new Headroom(this,e),d.init(),c.data("headroom",d)),"string"==typeof b&&(d[b](),"destroy"===b&&c.removeData("headroom"))})},a("[data-headroom]").each(function(){var b=a(this);b.headroom(b.data())}))}(window.Zepto||window.jQuery);
/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
try {
!function(a){var b=!1;if("function"==typeof define&&define.amd&&(define(a),b=!0),"object"==typeof exports&&(module.exports=a(),b=!0),!b){var c=window.Cookies,d=window.Cookies=a();d.noConflict=function(){return window.Cookies=c,d}}}(function(){function a(){for(var a=0,b={};a<arguments.length;a++){var c=arguments[a];for(var d in c)b[d]=c[d]}return b}function b(c){function d(b,e,f){var g;if("undefined"!=typeof document){if(arguments.length>1){if(f=a({path:"/"},d.defaults,f),"number"==typeof f.expires){var h=new Date;h.setMilliseconds(h.getMilliseconds()+864e5*f.expires),f.expires=h}f.expires=f.expires?f.expires.toUTCString():"";try{g=JSON.stringify(e),/^[\{\[]/.test(g)&&(e=g)}catch(a){}e=c.write?c.write(e,b):encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),b=encodeURIComponent(String(b)),b=b.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),b=b.replace(/[\(\)]/g,escape);var i="";for(var j in f)f[j]&&(i+="; "+j,f[j]!==!0&&(i+="="+f[j]));return document.cookie=b+"="+e+i}b||(g={});for(var k=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,m=0;m<k.length;m++){var n=k[m].split("="),o=n.slice(1).join("=");'"'===o.charAt(0)&&(o=o.slice(1,-1));try{var p=n[0].replace(l,decodeURIComponent);if(o=c.read?c.read(o,p):c(o,p)||o.replace(l,decodeURIComponent),this.json)try{o=JSON.parse(o)}catch(a){}if(b===p){g=o;break}b||(g[p]=o)}catch(a){}}return g}}return d.set=d,d.get=function(a){return d.call(d,a)},d.getJSON=function(){return d.apply({json:!0},[].slice.call(arguments))},d.defaults={},d.remove=function(b,c){d(b,"",a(c,{expires:-1}))},d.withConverter=b,d}return b(function(){})});
} catch (e) { }
;try{
!function(){"use strict";function e(n){return"undefined"==typeof this||Object.getPrototypeOf(this)!==e.prototype?new e(n):(O=this,O.version="3.3.2",O.tools=new E,O.isSupported()?(O.tools.extend(O.defaults,n||{}),O.defaults.container=t(O.defaults),O.store={elements:{},containers:[]},O.sequences={},O.history=[],O.uid=0,O.initialized=!1):"undefined"!=typeof console&&null!==console,O)}function t(e){if(e&&e.container){if("string"==typeof e.container)return window.document.documentElement.querySelector(e.container);if(O.tools.isNode(e.container))return e.container}return O.defaults.container}function n(e,t){return"string"==typeof e?Array.prototype.slice.call(t.querySelectorAll(e)):O.tools.isNode(e)?[e]:O.tools.isNodeList(e)?Array.prototype.slice.call(e):[]}function i(){return++O.uid}function o(e,t,n){t.container&&(t.container=n),e.config?e.config=O.tools.extendClone(e.config,t):e.config=O.tools.extendClone(O.defaults,t),"top"===e.config.origin||"bottom"===e.config.origin?e.config.axis="Y":e.config.axis="X"}function r(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!==t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=s(e,0),e.styles.transition.delayed=s(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",a(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",a(e)}function s(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function a(e){var t,n=e.config,i=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(i.initial+=" translate"+n.axis+"("+t+")",i.target+=" translate"+n.axis+"(0)"),n.scale&&(i.initial+=" scale("+n.scale+")",i.target+=" scale(1)"),n.rotate.x&&(i.initial+=" rotateX("+n.rotate.x+"deg)",i.target+=" rotateX(0)"),n.rotate.y&&(i.initial+=" rotateY("+n.rotate.y+"deg)",i.target+=" rotateY(0)"),n.rotate.z&&(i.initial+=" rotateZ("+n.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+n.opacity+";",i.target+="; opacity: "+e.styles.computed.opacity+";"}function l(e){var t=e.config.container;t&&O.store.containers.indexOf(t)===-1&&O.store.containers.push(e.config.container),O.store.elements[e.id]=e}function c(e,t,n){var i={target:e,config:t,interval:n};O.history.push(i)}function f(){if(O.isSupported()){y();for(var e=0;e<O.store.containers.length;e++)O.store.containers[e].addEventListener("scroll",d),O.store.containers[e].addEventListener("resize",d);O.initialized||(window.addEventListener("scroll",d),window.addEventListener("resize",d),O.initialized=!0)}return O}function d(){T(y)}function u(){var e,t,n,i;O.tools.forOwn(O.sequences,function(o){i=O.sequences[o],e=!1;for(var r=0;r<i.elemIds.length;r++)n=i.elemIds[r],t=O.store.elements[n],q(t)&&!e&&(e=!0);i.active=e})}function y(){var e,t;u(),O.tools.forOwn(O.store.elements,function(n){t=O.store.elements[n],e=w(t),g(t)?(t.config.beforeReveal(t.domEl),e?t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.delayed):t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.instant),p("reveal",t,e),t.revealing=!0,t.seen=!0,t.sequence&&m(t,e)):v(t)&&(t.config.beforeReset(t.domEl),t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.initial+t.styles.transition.instant),p("reset",t),t.revealing=!1)})}function m(e,t){var n=0,i=0,o=O.sequences[e.sequence.id];o.blocked=!0,t&&"onload"===e.config.useDelay&&(i=e.config.delay),e.sequence.timer&&(n=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer)),e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){o.blocked=!1,e.sequence.timer=null,d()},Math.abs(o.interval)+i-n)}function p(e,t,n){var i=0,o=0,r="after";switch(e){case"reveal":o=t.config.duration,n&&(o+=t.config.delay),r+="Reveal";break;case"reset":o=t.config.duration,r+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[r](t.domEl),t.timer=null},o-i)}function g(e){if(e.sequence){var t=O.sequences[e.sequence.id];return t.active&&!t.blocked&&!e.revealing&&!e.disabled}return q(e)&&!e.revealing&&!e.disabled}function w(e){var t=e.config.useDelay;return"always"===t||"onload"===t&&!O.initialized||"once"===t&&!e.seen}function v(e){if(e.sequence){var t=O.sequences[e.sequence.id];return!t.active&&e.config.reset&&e.revealing&&!e.disabled}return!q(e)&&e.config.reset&&e.revealing&&!e.disabled}function b(e){return{width:e.clientWidth,height:e.clientHeight}}function h(e){if(e&&e!==window.document.documentElement){var t=x(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function x(e){var t=0,n=0,i=e.offsetHeight,o=e.offsetWidth;do isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent;while(e);return{top:t,left:n,height:i,width:o}}function q(e){function t(){var t=c+a*s,n=f+l*s,i=d-a*s,y=u-l*s,m=r.y+e.config.viewOffset.top,p=r.x+e.config.viewOffset.left,g=r.y-e.config.viewOffset.bottom+o.height,w=r.x-e.config.viewOffset.right+o.width;return t<g&&i>m&&n>p&&y<w}function n(){return"fixed"===window.getComputedStyle(e.domEl).position}var i=x(e.domEl),o=b(e.config.container),r=h(e.config.container),s=e.config.viewFactor,a=i.height,l=i.width,c=i.top,f=i.left,d=c+a,u=f+l;return t()||n()}function E(){}var O,T;e.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},e.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},e.prototype.reveal=function(e,s,a,d){var u,y,m,p,g,w;if(void 0!==s&&"number"==typeof s?(a=s,s={}):void 0!==s&&null!==s||(s={}),u=t(s),y=n(e,u),!y.length)return O;a&&"number"==typeof a&&(w=i(),g=O.sequences[w]={id:w,interval:a,elemIds:[],active:!1});for(var v=0;v<y.length;v++)p=y[v].getAttribute("data-sr-id"),p?m=O.store.elements[p]:(m={id:i(),domEl:y[v],seen:!1,revealing:!1},m.domEl.setAttribute("data-sr-id",m.id)),g&&(m.sequence={id:g.id,index:g.elemIds.length},g.elemIds.push(m.id)),o(m,s,u),r(m),l(m),O.tools.isMobile()&&!m.config.mobile||!O.isSupported()?(m.domEl.setAttribute("style",m.styles.inline),m.disabled=!0):m.revealing||m.domEl.setAttribute("style",m.styles.inline+m.styles.transform.initial);return!d&&O.isSupported()&&(c(e,s,a),O.initTimeout&&window.clearTimeout(O.initTimeout),O.initTimeout=window.setTimeout(f,0)),O},e.prototype.sync=function(){if(O.history.length&&O.isSupported()){for(var e=0;e<O.history.length;e++){var t=O.history[e];O.reveal(t.target,t.config,t.interval,!0)}f()}return O},E.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},E.prototype.isNode=function(e){return"object"==typeof window.Node?e instanceof window.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},E.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"==typeof window.NodeList?e instanceof window.NodeList:e&&"object"==typeof e&&n.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},E.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},E.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},E.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},E.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},T=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:window.ScrollReveal=e}();
} catch(e) {}
/*
 FastClick: polyfill to remove click delays on browsers with touch UIs.

 @version 1.0.3
 @codingstandard ftlabs-jsv2
 @copyright The Financial Times Limited [All Rights Reserved]
 @license MIT License (see LICENSE.txt)
*/
(function(){"use strict";function e(t,r){function s(e,t){return function(){return e.apply(t,arguments)}}var i;r=r||{};this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=r.touchBoundary||10;this.layer=t;this.tapDelay=r.tapDelay||200;this.tapTimeout=r.tapTimeout||700;if(e.notNeeded(t)){return}var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"];var u=this;for(var a=0,f=o.length;a<f;a++){u[o[a]]=s(u[o[a]],u)}if(n){t.addEventListener("mouseover",this.onMouse,true);t.addEventListener("mousedown",this.onMouse,true);t.addEventListener("mouseup",this.onMouse,true)}t.addEventListener("click",this.onClick,true);t.addEventListener("touchstart",this.onTouchStart,false);t.addEventListener("touchmove",this.onTouchMove,false);t.addEventListener("touchend",this.onTouchEnd,false);t.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){t.removeEventListener=function(e,n,r){var i=Node.prototype.removeEventListener;if(e==="click"){i.call(t,e,n.hijacked||n,r)}else{i.call(t,e,n,r)}};t.addEventListener=function(e,n,r){var i=Node.prototype.addEventListener;if(e==="click"){i.call(t,e,n.hijacked||(n.hijacked=function(e){if(!e.propagationStopped){n(e)}}),r)}else{i.call(t,e,n,r)}}}if(typeof t.onclick==="function"){i=t.onclick;t.addEventListener("click",function(e){i(e)},false);t.onclick=null}}var t=navigator.userAgent.indexOf("Windows Phone")>=0;var n=navigator.userAgent.indexOf("Android")>0&&!t;var r=/iP(ad|hone|od)/.test(navigator.userAgent)&&!t;var i=r&&/OS 4_\d(_\d)?/.test(navigator.userAgent);var s=r&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);var o=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled){return true}break;case"input":if(r&&e.type==="file"||e.disabled){return true}break;case"label":case"iframe":case"video":return true}return/\bneedsclick\b/.test(e.className)};e.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return true;case"select":return!n;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}};e.prototype.sendClick=function(e,t){var n,r;if(document.activeElement&&document.activeElement!==e){document.activeElement.blur()}r=t.changedTouches[0];n=document.createEvent("MouseEvents");n.initMouseEvent(this.determineEventType(e),true,true,window,1,r.screenX,r.screenY,r.clientX,r.clientY,false,false,false,false,0,null);n.forwardedTouchEvent=true;e.dispatchEvent(n)};e.prototype.determineEventType=function(e){if(n&&e.tagName.toLowerCase()==="select"){return"mousedown"}return"click"};e.prototype.focus=function(e){var t;if(r&&e.setSelectionRange&&e.type.indexOf("date")!==0&&e.type!=="time"&&e.type!=="month"){t=e.value.length;e.setSelectionRange(t,t)}else{e.focus()}};e.prototype.updateScrollParent=function(e){var t,n;t=e.fastClickScrollParent;if(!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n;e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}if(t){t.fastClickLastScrollTop=t.scrollTop}};e.prototype.getTargetElementFromEventTarget=function(e){if(e.nodeType===Node.TEXT_NODE){return e.parentNode}return e};e.prototype.onTouchStart=function(e){var t,n,s;if(e.targetTouches.length>1){return true}t=this.getTargetElementFromEventTarget(e.target);n=e.targetTouches[0];if(r){s=window.getSelection();if(s.rangeCount&&!s.isCollapsed){return true}if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier){e.preventDefault();return false}this.lastTouchIdentifier=n.identifier;this.updateScrollParent(t)}}this.trackingClick=true;this.trackingClickStart=e.timeStamp;this.targetElement=t;this.touchStartX=n.pageX;this.touchStartY=n.pageY;if(e.timeStamp-this.lastClickTime<this.tapDelay){e.preventDefault()}return true};e.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;if(Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n){return true}return false};e.prototype.onTouchMove=function(e){if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e)){this.trackingClick=false;this.targetElement=null}return true};e.prototype.findControl=function(e){if(e.control!==undefined){return e.control}if(e.htmlFor){return document.getElementById(e.htmlFor)}return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};e.prototype.onTouchEnd=function(e){var t,o,u,a,f,l=this.targetElement;if(!this.trackingClick){return true}if(e.timeStamp-this.lastClickTime<this.tapDelay){this.cancelNextClick=true;return true}if(e.timeStamp-this.trackingClickStart>this.tapTimeout){return true}this.cancelNextClick=false;this.lastClickTime=e.timeStamp;o=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(s){f=e.changedTouches[0];l=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||l;l.fastClickScrollParent=this.targetElement.fastClickScrollParent}u=l.tagName.toLowerCase();if(u==="label"){t=this.findControl(l);if(t){this.focus(l);if(n){return false}l=t}}else if(this.needsFocus(l)){if(e.timeStamp-o>100||r&&window.top!==window&&u==="input"){this.targetElement=null;return false}this.focus(l);this.sendClick(l,e);if(!r||u!=="select"){this.targetElement=null;e.preventDefault()}return false}if(r&&!i){a=l.fastClickScrollParent;if(a&&a.fastClickLastScrollTop!==a.scrollTop){return true}}if(!this.needsClick(l)){e.preventDefault();this.sendClick(l,e)}return false};e.prototype.onTouchCancel=function(){this.trackingClick=false;this.targetElement=null};e.prototype.onMouse=function(e){if(!this.targetElement){return true}if(e.forwardedTouchEvent){return true}if(!e.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(e.stopImmediatePropagation){e.stopImmediatePropagation()}else{e.propagationStopped=true}e.stopPropagation();e.preventDefault();return false}return true};e.prototype.onClick=function(e){var t;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(e.target.type==="submit"&&e.detail===0){return true}t=this.onMouse(e);if(!t){this.targetElement=null}return t};e.prototype.destroy=function(){var e=this.layer;if(n){e.removeEventListener("mouseover",this.onMouse,true);e.removeEventListener("mousedown",this.onMouse,true);e.removeEventListener("mouseup",this.onMouse,true)}e.removeEventListener("click",this.onClick,true);e.removeEventListener("touchstart",this.onTouchStart,false);e.removeEventListener("touchmove",this.onTouchMove,false);e.removeEventListener("touchend",this.onTouchEnd,false);e.removeEventListener("touchcancel",this.onTouchCancel,false)};e.notNeeded=function(e){var t;var r;var i;if(typeof window.ontouchstart==="undefined"){return true}r=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(r){if(n){t=document.querySelector("meta[name=viewport]");if(t){if(t.content.indexOf("user-scalable=no")!==-1){return true}if(r>31&&document.documentElement.scrollWidth<=window.outerWidth){return true}}}else{return true}}if(o){i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);if(i[1]>=10&&i[2]>=3){t=document.querySelector("meta[name=viewport]");if(t){if(t.content.indexOf("user-scalable=no")!==-1){return true}if(document.documentElement.scrollWidth<=window.outerWidth){return true}}}}if(e.style.msTouchAction==="none"){return true}if(e.style.touchAction==="none"){return true}return false};e.attach=function(t,n){return new e(t,n)};if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){define(function(){return e})}else if(typeof module!=="undefined"&&module.exports){module.exports=e.attach;module.exports.FastClick=e}else{window.FastClick=e}})()

/**
 * Owl Carousel v2.2.0
 * Copyright 2013-2016 David Deutsch
 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e&&this.preloadAutoWidthImages(b)}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.$element.is(":visible")?(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized"))):!1:!1},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&b>h-e&&h+e>b?d=a:"right"===c&&b>h-f-e&&h-f+e>b?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),-1===d},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||1>c?a=d:(0>a||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.$element.width();b--&&(c+=this._items[b].width()+this.settings.margin,!(c>d)););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(0>e),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&i>=d-e&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.leave("animating"),void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}}))},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null);
},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;e>a;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):0>b&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){return g[b]!==d?(e=c?b:!0,!1):void 0}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else if(typeof exports==='object'){factory(require('jquery'))}else{factory(window.jQuery||window.Zepto)}}(function($){var CLOSE_EVENT='Close',BEFORE_CLOSE_EVENT='BeforeClose',AFTER_CLOSE_EVENT='AfterClose',BEFORE_APPEND_EVENT='BeforeAppend',MARKUP_PARSE_EVENT='MarkupParse',OPEN_EVENT='Open',CHANGE_EVENT='Change',NS='mfp',EVENT_NS='.'+NS,READY_CLASS='mfp-ready',REMOVING_CLASS='mfp-removing',PREVENT_CLOSE_CLASS='mfp-prevent-close';var mfp,MagnificPopup=function(){},_isJQ=!!(window.jQuery),_prevStatus,_window=$(window),_document,_prevContentType,_wrapClasses,_currPopupType;var _mfpOn=function(name,f){mfp.ev.on(NS+name+EVENT_NS,f)},_getEl=function(className,appendTo,html,raw){var el=document.createElement('div');el.className='mfp-'+className;if(html){el.innerHTML=html}
if(!raw){el=$(el);if(appendTo){el.appendTo(appendTo)}}else if(appendTo){appendTo.appendChild(el)}
return el},_mfpTrigger=function(e,data){mfp.ev.triggerHandler(NS+e,data);if(mfp.st.callbacks){e=e.charAt(0).toLowerCase()+e.slice(1);if(mfp.st.callbacks[e]){mfp.st.callbacks[e].apply(mfp,$.isArray(data)?data:[data])}}},_getCloseBtn=function(type){if(type!==_currPopupType||!mfp.currTemplate.closeBtn){mfp.currTemplate.closeBtn=$(mfp.st.closeMarkup.replace('%title%',mfp.st.tClose));_currPopupType=type}
return mfp.currTemplate.closeBtn},_checkInstance=function(){if(!$.magnificPopup.instance){mfp=new MagnificPopup();mfp.init();$.magnificPopup.instance=mfp}},supportsTransitions=function(){var s=document.createElement('p').style,v=['ms','O','Moz','Webkit'];if(s.transition!==undefined){return!0}
while(v.length){if(v.pop()+'Transition' in s){return!0}}
return!1};MagnificPopup.prototype={constructor:MagnificPopup,init:function(){var appVersion=navigator.appVersion;mfp.isLowIE=mfp.isIE8=document.all&&!document.addEventListener;mfp.isAndroid=(/android/gi).test(appVersion);mfp.isIOS=(/iphone|ipad|ipod/gi).test(appVersion);mfp.supportsTransition=supportsTransitions();mfp.probablyMobile=(mfp.isAndroid||mfp.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));_document=$(document);mfp.popupsCache={}},open:function(data){var i;if(data.isObj===!1){mfp.items=data.items.toArray();mfp.index=0;var items=data.items,item;for(i=0;i<items.length;i++){item=items[i];if(item.parsed){item=item.el[0]}
if(item===data.el[0]){mfp.index=i;break}}}else{mfp.items=$.isArray(data.items)?data.items:[data.items];mfp.index=data.index||0}
if(mfp.isOpen){mfp.updateItemHTML();return}
mfp.types=[];_wrapClasses='';if(data.mainEl&&data.mainEl.length){mfp.ev=data.mainEl.eq(0)}else{mfp.ev=_document}
if(data.key){if(!mfp.popupsCache[data.key]){mfp.popupsCache[data.key]={}}
mfp.currTemplate=mfp.popupsCache[data.key]}else{mfp.currTemplate={}}
mfp.st=$.extend(!0,{},$.magnificPopup.defaults,data);mfp.fixedContentPos=mfp.st.fixedContentPos==='auto'?!mfp.probablyMobile:mfp.st.fixedContentPos;if(mfp.st.modal){mfp.st.closeOnContentClick=!1;mfp.st.closeOnBgClick=!1;mfp.st.showCloseBtn=!1;mfp.st.enableEscapeKey=!1}
if(!mfp.bgOverlay){mfp.bgOverlay=_getEl('bg').on('click'+EVENT_NS,function(){mfp.close()});mfp.wrap=_getEl('wrap').attr('tabindex',-1).on('click'+EVENT_NS,function(e){if(mfp._checkIfClose(e.target)){mfp.close()}});mfp.container=_getEl('container',mfp.wrap)}
mfp.contentContainer=_getEl('content');if(mfp.st.preloader){mfp.preloader=_getEl('preloader',mfp.container,mfp.st.tLoading)}
var modules=$.magnificPopup.modules;for(i=0;i<modules.length;i++){var n=modules[i];n=n.charAt(0).toUpperCase()+n.slice(1);mfp['init'+n].call(mfp)}
_mfpTrigger('BeforeOpen');if(mfp.st.showCloseBtn){if(!mfp.st.closeBtnInside){mfp.wrap.append(_getCloseBtn())}else{_mfpOn(MARKUP_PARSE_EVENT,function(e,template,values,item){values.close_replaceWith=_getCloseBtn(item.type)});_wrapClasses+=' mfp-close-btn-in'}}
if(mfp.st.alignTop){_wrapClasses+=' mfp-align-top'}
if(mfp.fixedContentPos){mfp.wrap.css({overflow:mfp.st.overflowY,overflowX:'hidden',overflowY:mfp.st.overflowY})}else{mfp.wrap.css({top:_window.scrollTop(),position:'absolute'})}
if(mfp.st.fixedBgPos===!1||(mfp.st.fixedBgPos==='auto'&&!mfp.fixedContentPos)){mfp.bgOverlay.css({height:_document.height(),position:'absolute'})}
if(mfp.st.enableEscapeKey){_document.on('keyup'+EVENT_NS,function(e){if(e.keyCode===27){mfp.close()}})}
_window.on('resize'+EVENT_NS,function(){mfp.updateSize()});if(!mfp.st.closeOnContentClick){_wrapClasses+=' mfp-auto-cursor'}
if(_wrapClasses)
mfp.wrap.addClass(_wrapClasses);var windowHeight=mfp.wH=_window.height();var windowStyles={};if(mfp.fixedContentPos){if(mfp._hasScrollBar(windowHeight)){var s=mfp._getScrollbarSize();if(s){windowStyles.marginRight=s}}}
if(mfp.fixedContentPos){if(!mfp.isIE7){windowStyles.overflow='hidden'}else{$('body, html').css('overflow','hidden')}}
var classesToadd=mfp.st.mainClass;if(mfp.isIE7){classesToadd+=' mfp-ie7'}
if(classesToadd){mfp._addClassToMFP(classesToadd)}
mfp.updateItemHTML();_mfpTrigger('BuildControls');$('html').css(windowStyles);mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo||$(document.body));mfp._lastFocusedEl=document.activeElement;setTimeout(function(){if(mfp.content){mfp._addClassToMFP(READY_CLASS);mfp._setFocus()}else{mfp.bgOverlay.addClass(READY_CLASS)}
_document.on('focusin'+EVENT_NS,mfp._onFocusIn)},16);mfp.isOpen=!0;mfp.updateSize(windowHeight);_mfpTrigger(OPEN_EVENT);return data},close:function(){if(!mfp.isOpen)return;_mfpTrigger(BEFORE_CLOSE_EVENT);mfp.isOpen=!1;if(mfp.st.removalDelay&&!mfp.isLowIE&&mfp.supportsTransition){mfp._addClassToMFP(REMOVING_CLASS);setTimeout(function(){mfp._close()},mfp.st.removalDelay)}else{mfp._close()}},_close:function(){_mfpTrigger(CLOSE_EVENT);var classesToRemove=REMOVING_CLASS+' '+READY_CLASS+' ';mfp.bgOverlay.detach();mfp.wrap.detach();mfp.container.empty();if(mfp.st.mainClass){classesToRemove+=mfp.st.mainClass+' '}
mfp._removeClassFromMFP(classesToRemove);if(mfp.fixedContentPos){var windowStyles={marginRight:''};if(mfp.isIE7){$('body, html').css('overflow','')}else{windowStyles.overflow=''}
$('html').css(windowStyles)}
_document.off('keyup'+EVENT_NS+' focusin'+EVENT_NS);mfp.ev.off(EVENT_NS);mfp.wrap.attr('class','mfp-wrap').removeAttr('style');mfp.bgOverlay.attr('class','mfp-bg');mfp.container.attr('class','mfp-container');if(mfp.st.showCloseBtn&&(!mfp.st.closeBtnInside||mfp.currTemplate[mfp.currItem.type]===!0)){if(mfp.currTemplate.closeBtn)
mfp.currTemplate.closeBtn.detach()}
if(mfp.st.autoFocusLast&&mfp._lastFocusedEl){$(mfp._lastFocusedEl).focus()}
mfp.currItem=null;mfp.content=null;mfp.currTemplate=null;mfp.prevHeight=0;_mfpTrigger(AFTER_CLOSE_EVENT)},updateSize:function(winHeight){if(mfp.isIOS){var zoomLevel=document.documentElement.clientWidth/window.innerWidth;var height=window.innerHeight*zoomLevel;mfp.wrap.css('height',height);mfp.wH=height}else{mfp.wH=winHeight||_window.height()}
if(!mfp.fixedContentPos){mfp.wrap.css('height',mfp.wH)}
_mfpTrigger('Resize')},updateItemHTML:function(){var item=mfp.items[mfp.index];mfp.contentContainer.detach();if(mfp.content)
mfp.content.detach();if(!item.parsed){item=mfp.parseEl(mfp.index)}
var type=item.type;_mfpTrigger('BeforeChange',[mfp.currItem?mfp.currItem.type:'',type]);mfp.currItem=item;if(!mfp.currTemplate[type]){var markup=mfp.st[type]?mfp.st[type].markup:!1;_mfpTrigger('FirstMarkupParse',markup);if(markup){mfp.currTemplate[type]=$(markup)}else{mfp.currTemplate[type]=!0}}
if(_prevContentType&&_prevContentType!==item.type){mfp.container.removeClass('mfp-'+_prevContentType+'-holder')}
var newContent=mfp['get'+type.charAt(0).toUpperCase()+type.slice(1)](item,mfp.currTemplate[type]);mfp.appendContent(newContent,type);item.preloaded=!0;_mfpTrigger(CHANGE_EVENT,item);_prevContentType=item.type;mfp.container.prepend(mfp.contentContainer);_mfpTrigger('AfterChange')},appendContent:function(newContent,type){mfp.content=newContent;if(newContent){if(mfp.st.showCloseBtn&&mfp.st.closeBtnInside&&mfp.currTemplate[type]===!0){if(!mfp.content.find('.mfp-close').length){mfp.content.append(_getCloseBtn())}}else{mfp.content=newContent}}else{mfp.content=''}
_mfpTrigger(BEFORE_APPEND_EVENT);mfp.container.addClass('mfp-'+type+'-holder');mfp.contentContainer.append(mfp.content)},parseEl:function(index){var item=mfp.items[index],type;if(item.tagName){item={el:$(item)}}else{type=item.type;item={data:item,src:item.src,srcset:item.srcset}}
if(item.el){var types=mfp.types;for(var i=0;i<types.length;i++){if(item.el.hasClass('mfp-'+types[i])){type=types[i];break}}
item.src=item.el.attr('data-mfp-src');item.srcset=item.el.attr('data-mfp-srcset');if(!item.src){item.src=item.el.attr('href')}}
item.type=type||mfp.st.type||'inline';item.index=index;item.parsed=!0;mfp.items[index]=item;_mfpTrigger('ElementParse',item);return mfp.items[index]},addGroup:function(el,options){var eHandler=function(e){e.mfpEl=this;mfp._openClick(e,el,options)};if(!options){options={}}
var eName='click.magnificPopup';options.mainEl=el;if(options.items){options.isObj=!0;el.off(eName).on(eName,eHandler)}else{options.isObj=!1;if(options.delegate){el.off(eName).on(eName,options.delegate,eHandler)}else{options.items=el;el.off(eName).on(eName,eHandler)}}},_openClick:function(e,el,options){var midClick=options.midClick!==undefined?options.midClick:$.magnificPopup.defaults.midClick;if(!midClick&&(e.which===2||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)){return}
var disableOn=options.disableOn!==undefined?options.disableOn:$.magnificPopup.defaults.disableOn;if(disableOn){if($.isFunction(disableOn)){if(!disableOn.call(mfp)){return!0}}else{if(_window.width()<disableOn){return!0}}}
if(e.type){e.preventDefault();if(mfp.isOpen){e.stopPropagation()}}
options.el=$(e.mfpEl);if(options.delegate){options.items=el.find(options.delegate)}
mfp.open(options)},updateStatus:function(status,text){if(mfp.preloader){if(_prevStatus!==status){mfp.container.removeClass('mfp-s-'+_prevStatus)}
if(!text&&status==='loading'){text=mfp.st.tLoading}
var data={status:status,text:text};_mfpTrigger('UpdateStatus',data);status=data.status;text=data.text;mfp.preloader.html(text);mfp.preloader.find('a').on('click',function(e){e.stopImmediatePropagation()});mfp.container.addClass('mfp-s-'+status);_prevStatus=status}},_checkIfClose:function(target){if($(target).hasClass(PREVENT_CLOSE_CLASS)){return}
var closeOnContent=mfp.st.closeOnContentClick;var closeOnBg=mfp.st.closeOnBgClick;if(closeOnContent&&closeOnBg){return!0}else{if(!mfp.content||$(target).hasClass('mfp-close')||(mfp.preloader&&target===mfp.preloader[0])){return!0}
if((target!==mfp.content[0]&&!$.contains(mfp.content[0],target))){if(closeOnBg){if($.contains(document,target)){return!0}}}else if(closeOnContent){return!0}}
return!1},_addClassToMFP:function(cName){mfp.bgOverlay.addClass(cName);mfp.wrap.addClass(cName)},_removeClassFromMFP:function(cName){this.bgOverlay.removeClass(cName);mfp.wrap.removeClass(cName)},_hasScrollBar:function(winHeight){return((mfp.isIE7?_document.height():document.body.scrollHeight)>(winHeight||_window.height()))},_setFocus:function(){(mfp.st.focus?mfp.content.find(mfp.st.focus).eq(0):mfp.wrap).focus()},_onFocusIn:function(e){if(e.target!==mfp.wrap[0]&&!$.contains(mfp.wrap[0],e.target)){mfp._setFocus();return!1}},_parseMarkup:function(template,values,item){var arr;if(item.data){values=$.extend(item.data,values)}
_mfpTrigger(MARKUP_PARSE_EVENT,[template,values,item]);$.each(values,function(key,value){if(value===undefined||value===!1){return!0}
arr=key.split('_');if(arr.length>1){var el=template.find(EVENT_NS+'-'+arr[0]);if(el.length>0){var attr=arr[1];if(attr==='replaceWith'){if(el[0]!==value[0]){el.replaceWith(value)}}else if(attr==='img'){if(el.is('img')){el.attr('src',value)}else{el.replaceWith($('<img>').attr('src',value).attr('class',el.attr('class')))}}else{el.attr(arr[1],value)}}}else{template.find(EVENT_NS+'-'+key).html(value)}})},_getScrollbarSize:function(){if(mfp.scrollbarSize===undefined){var scrollDiv=document.createElement("div");scrollDiv.style.cssText='width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';document.body.appendChild(scrollDiv);mfp.scrollbarSize=scrollDiv.offsetWidth-scrollDiv.clientWidth;document.body.removeChild(scrollDiv)}
return mfp.scrollbarSize}};$.magnificPopup={instance:null,proto:MagnificPopup.prototype,modules:[],open:function(options,index){_checkInstance();if(!options){options={}}else{options=$.extend(!0,{},options)}
options.isObj=!0;options.index=index||0;return this.instance.open(options)},close:function(){return $.magnificPopup.instance&&$.magnificPopup.instance.close()},registerModule:function(name,module){if(module.options){$.magnificPopup.defaults[name]=module.options}
$.extend(this.proto,module.proto);this.modules.push(name)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:'',preloader:!0,focus:'',closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:'auto',fixedBgPos:'auto',overflowY:'auto',closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:'Close (Esc)',tLoading:'Loading...',autoFocusLast:!0}};$.fn.magnificPopup=function(options){_checkInstance();var jqEl=$(this);if(typeof options==="string"){if(options==='open'){var items,itemOpts=_isJQ?jqEl.data('magnificPopup'):jqEl[0].magnificPopup,index=parseInt(arguments[1],10)||0;if(itemOpts.items){items=itemOpts.items[index]}else{items=jqEl;if(itemOpts.delegate){items=items.find(itemOpts.delegate)}
items=items.eq(index)}
mfp._openClick({mfpEl:items},jqEl,itemOpts)}else{if(mfp.isOpen)
mfp[options].apply(mfp,Array.prototype.slice.call(arguments,1))}}else{options=$.extend(!0,{},options);if(_isJQ){jqEl.data('magnificPopup',options)}else{jqEl[0].magnificPopup=options}
mfp.addGroup(jqEl,options)}
return jqEl};var INLINE_NS='inline',_hiddenClass,_inlinePlaceholder,_lastInlineElement,_putInlineElementsBack=function(){if(_lastInlineElement){_inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();_lastInlineElement=null}};$.magnificPopup.registerModule(INLINE_NS,{options:{hiddenClass:'hide',markup:'',tNotFound:'Content not found'},proto:{initInline:function(){mfp.types.push(INLINE_NS);_mfpOn(CLOSE_EVENT+'.'+INLINE_NS,function(){_putInlineElementsBack()})},getInline:function(item,template){_putInlineElementsBack();if(item.src){var inlineSt=mfp.st.inline,el=$(item.src);if(el.length){var parent=el[0].parentNode;if(parent&&parent.tagName){if(!_inlinePlaceholder){_hiddenClass=inlineSt.hiddenClass;_inlinePlaceholder=_getEl(_hiddenClass);_hiddenClass='mfp-'+_hiddenClass}
_lastInlineElement=el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass)}
mfp.updateStatus('ready')}else{mfp.updateStatus('error',inlineSt.tNotFound);el=$('<div>')}
item.inlineElement=el;return el}
mfp.updateStatus('ready');mfp._parseMarkup(template,{},item);return template}}});var AJAX_NS='ajax',_ajaxCur,_removeAjaxCursor=function(){if(_ajaxCur){$(document.body).removeClass(_ajaxCur)}},_destroyAjaxRequest=function(){_removeAjaxCursor();if(mfp.req){mfp.req.abort()}};$.magnificPopup.registerModule(AJAX_NS,{options:{settings:null,cursor:'mfp-ajax-cur',tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){mfp.types.push(AJAX_NS);_ajaxCur=mfp.st.ajax.cursor;_mfpOn(CLOSE_EVENT+'.'+AJAX_NS,_destroyAjaxRequest);_mfpOn('BeforeChange.'+AJAX_NS,_destroyAjaxRequest)},getAjax:function(item){if(_ajaxCur){$(document.body).addClass(_ajaxCur)}
mfp.updateStatus('loading');var opts=$.extend({url:item.src,success:function(data,textStatus,jqXHR){var temp={data:data,xhr:jqXHR};_mfpTrigger('ParseAjax',temp);mfp.appendContent($(temp.data),AJAX_NS);item.finished=!0;_removeAjaxCursor();mfp._setFocus();setTimeout(function(){mfp.wrap.addClass(READY_CLASS)},16);mfp.updateStatus('ready');_mfpTrigger('AjaxContentAdded')},error:function(){_removeAjaxCursor();item.finished=item.loadError=!0;mfp.updateStatus('error',mfp.st.ajax.tError.replace('%url%',item.src))}},mfp.st.ajax.settings);mfp.req=$.ajax(opts);return''}}});var _imgInterval,_getTitle=function(item){if(item.data&&item.data.title!==undefined)
return item.data.title;var src=mfp.st.image.titleSrc;if(src){if($.isFunction(src)){return src.call(mfp,item)}else if(item.el){return item.el.attr(src)||''}}
return''};$.magnificPopup.registerModule('image',{options:{markup:'<div class="mfp-figure">'+'<div class="mfp-close"></div>'+'<figure>'+'<div class="mfp-img"></div>'+'<figcaption>'+'<div class="mfp-bottom-bar">'+'<div class="mfp-title"></div>'+'<div class="mfp-counter"></div>'+'</div>'+'</figcaption>'+'</figure>'+'</div>',cursor:'mfp-zoom-out-cur',titleSrc:'title',verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var imgSt=mfp.st.image,ns='.image';mfp.types.push('image');_mfpOn(OPEN_EVENT+ns,function(){if(mfp.currItem.type==='image'&&imgSt.cursor){$(document.body).addClass(imgSt.cursor)}});_mfpOn(CLOSE_EVENT+ns,function(){if(imgSt.cursor){$(document.body).removeClass(imgSt.cursor)}
_window.off('resize'+EVENT_NS)});_mfpOn('Resize'+ns,mfp.resizeImage);if(mfp.isLowIE){_mfpOn('AfterChange',mfp.resizeImage)}},resizeImage:function(){var item=mfp.currItem;if(!item||!item.img)return;if(mfp.st.image.verticalFit){var decr=0;if(mfp.isLowIE){decr=parseInt(item.img.css('padding-top'),10)+parseInt(item.img.css('padding-bottom'),10)}
item.img.css('max-height',mfp.wH-decr)}},_onImageHasSize:function(item){if(item.img){item.hasSize=!0;if(_imgInterval){clearInterval(_imgInterval)}
item.isCheckingImgSize=!1;_mfpTrigger('ImageHasSize',item);if(item.imgHidden){if(mfp.content)
mfp.content.removeClass('mfp-loading');item.imgHidden=!1}}},findImageSize:function(item){var counter=0,img=item.img[0],mfpSetInterval=function(delay){if(_imgInterval){clearInterval(_imgInterval)}
_imgInterval=setInterval(function(){if(img.naturalWidth>0){mfp._onImageHasSize(item);return}
if(counter>200){clearInterval(_imgInterval)}
counter++;if(counter===3){mfpSetInterval(10)}else if(counter===40){mfpSetInterval(50)}else if(counter===100){mfpSetInterval(500)}},delay)};mfpSetInterval(1)},getImage:function(item,template){var guard=0,onLoadComplete=function(){if(item){if(item.img[0].complete){item.img.off('.mfploader');if(item===mfp.currItem){mfp._onImageHasSize(item);mfp.updateStatus('ready')}
item.hasSize=!0;item.loaded=!0;_mfpTrigger('ImageLoadComplete')}
else{guard++;if(guard<200){setTimeout(onLoadComplete,100)}else{onLoadError()}}}},onLoadError=function(){if(item){item.img.off('.mfploader');if(item===mfp.currItem){mfp._onImageHasSize(item);mfp.updateStatus('error',imgSt.tError.replace('%url%',item.src))}
item.hasSize=!0;item.loaded=!0;item.loadError=!0}},imgSt=mfp.st.image;var el=template.find('.mfp-img');if(el.length){var img=document.createElement('img');img.className='mfp-img';if(item.el&&item.el.find('img').length){img.alt=item.el.find('img').attr('alt');img.srcset=item.el.find('img').attr('srcset')}
item.img=$(img).on('load.mfploader',onLoadComplete).on('error.mfploader',onLoadError);img.src=item.src;img.srcset=item.srcset;if(el.is('img')){item.img=item.img.clone()}
img=item.img[0];if(img.naturalWidth>0){item.hasSize=!0}else if(!img.width){item.hasSize=!1}}
mfp._parseMarkup(template,{title:_getTitle(item),img_replaceWith:item.img},item);mfp.resizeImage();if(item.hasSize){if(_imgInterval)clearInterval(_imgInterval);if(item.loadError){template.addClass('mfp-loading');mfp.updateStatus('error',imgSt.tError.replace('%url%',item.src))}else{template.removeClass('mfp-loading');mfp.updateStatus('ready')}
return template}
mfp.updateStatus('loading');item.loading=!0;if(!item.hasSize){item.imgHidden=!0;template.addClass('mfp-loading');mfp.findImageSize(item)}
return template}}});var hasMozTransform,getHasMozTransform=function(){if(hasMozTransform===undefined){hasMozTransform=document.createElement('p').style.MozTransform!==undefined}
return hasMozTransform};$.magnificPopup.registerModule('zoom',{options:{enabled:!1,easing:'ease-in-out',duration:300,opener:function(element){return element.is('img')?element:element.find('img')}},proto:{initZoom:function(){var zoomSt=mfp.st.zoom,ns='.zoom',image;if(!zoomSt.enabled||!mfp.supportsTransition){return}
var duration=zoomSt.duration,getElToAnimate=function(image){var newImg=image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),transition='all '+(zoomSt.duration/1000)+'s '+zoomSt.easing,cssObj={position:'fixed',zIndex:9999,left:0,top:0,'-webkit-backface-visibility':'hidden'},t='transition';cssObj['-webkit-'+t]=cssObj['-moz-'+t]=cssObj['-o-'+t]=cssObj[t]=transition;newImg.css(cssObj);return newImg},showMainContent=function(){mfp.content.css('visibility','visible')},openTimeout,animatedImg;_mfpOn('BuildControls'+ns,function(){if(mfp._allowZoom()){clearTimeout(openTimeout);mfp.content.css('visibility','hidden');image=mfp._getItemToZoom();if(!image){showMainContent();return}
animatedImg=getElToAnimate(image);animatedImg.css(mfp._getOffset());mfp.wrap.append(animatedImg);openTimeout=setTimeout(function(){animatedImg.css(mfp._getOffset(!0));openTimeout=setTimeout(function(){showMainContent();setTimeout(function(){animatedImg.remove();image=animatedImg=null;_mfpTrigger('ZoomAnimationEnded')},16)},duration)},16)}});_mfpOn(BEFORE_CLOSE_EVENT+ns,function(){if(mfp._allowZoom()){clearTimeout(openTimeout);mfp.st.removalDelay=duration;if(!image){image=mfp._getItemToZoom();if(!image){return}
animatedImg=getElToAnimate(image)}
animatedImg.css(mfp._getOffset(!0));mfp.wrap.append(animatedImg);mfp.content.css('visibility','hidden');setTimeout(function(){animatedImg.css(mfp._getOffset())},16)}});_mfpOn(CLOSE_EVENT+ns,function(){if(mfp._allowZoom()){showMainContent();if(animatedImg){animatedImg.remove()}
image=null}})},_allowZoom:function(){return mfp.currItem.type==='image'},_getItemToZoom:function(){if(mfp.currItem.hasSize){return mfp.currItem.img}else{return!1}},_getOffset:function(isLarge){var el;if(isLarge){el=mfp.currItem.img}else{el=mfp.st.zoom.opener(mfp.currItem.el||mfp.currItem)}
var offset=el.offset();var paddingTop=parseInt(el.css('padding-top'),10);var paddingBottom=parseInt(el.css('padding-bottom'),10);offset.top-=($(window).scrollTop()-paddingTop);var obj={width:el.width(),height:(_isJQ?el.innerHeight():el[0].offsetHeight)-paddingBottom-paddingTop};if(getHasMozTransform()){obj['-moz-transform']=obj.transform='translate('+offset.left+'px,'+offset.top+'px)'}else{obj.left=offset.left;obj.top=offset.top}
return obj}}});var IFRAME_NS='iframe',_emptyPage='//about:blank',_fixIframeBugs=function(isShowing){if(mfp.currTemplate[IFRAME_NS]){var el=mfp.currTemplate[IFRAME_NS].find('iframe');if(el.length){if(!isShowing){el[0].src=_emptyPage}
if(mfp.isIE8){el.css('display',isShowing?'block':'none')}}}};$.magnificPopup.registerModule(IFRAME_NS,{options:{markup:'<div class="mfp-iframe-scaler">'+'<div class="mfp-close"></div>'+'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+'</div>',srcAction:'iframe_src',patterns:{youtube:{index:'youtube.com',id:'v=',src:'//www.youtube.com/embed/%id%?autoplay=1'},vimeo:{index:'vimeo.com/',id:'/',src:'//player.vimeo.com/video/%id%?autoplay=1'},gmaps:{index:'//maps.google.',src:'%id%&output=embed'}}},proto:{initIframe:function(){mfp.types.push(IFRAME_NS);_mfpOn('BeforeChange',function(e,prevType,newType){if(prevType!==newType){if(prevType===IFRAME_NS){_fixIframeBugs()}else if(newType===IFRAME_NS){_fixIframeBugs(!0)}}});_mfpOn(CLOSE_EVENT+'.'+IFRAME_NS,function(){_fixIframeBugs()})},getIframe:function(item,template){var embedSrc=item.src;var iframeSt=mfp.st.iframe;$.each(iframeSt.patterns,function(){if(embedSrc.indexOf(this.index)>-1){if(this.id){if(typeof this.id==='string'){embedSrc=embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length,embedSrc.length)}else{embedSrc=this.id.call(this,embedSrc)}}
embedSrc=this.src.replace('%id%',embedSrc);return!1}});var dataObj={};if(iframeSt.srcAction){dataObj[iframeSt.srcAction]=embedSrc}
mfp._parseMarkup(template,dataObj,item);mfp.updateStatus('ready');return template}}});var _getLoopedId=function(index){var numSlides=mfp.items.length;if(index>numSlides-1){return index-numSlides}else if(index<0){return numSlides+index}
return index},_replaceCurrTotal=function(text,curr,total){return text.replace(/%curr%/gi,curr+1).replace(/%total%/gi,total)};$.magnificPopup.registerModule('gallery',{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:'Previous (Left arrow key)',tNext:'Next (Right arrow key)',tCounter:'%curr% of %total%'},proto:{initGallery:function(){var gSt=mfp.st.gallery,ns='.mfp-gallery';mfp.direction=!0;if(!gSt||!gSt.enabled)return!1;_wrapClasses+=' mfp-gallery';_mfpOn(OPEN_EVENT+ns,function(){if(gSt.navigateByImgClick){mfp.wrap.on('click'+ns,'.mfp-img',function(){if(mfp.items.length>1){mfp.next();return!1}})}
_document.on('keydown'+ns,function(e){if(e.keyCode===37){mfp.prev()}else if(e.keyCode===39){mfp.next()}})});_mfpOn('UpdateStatus'+ns,function(e,data){if(data.text){data.text=_replaceCurrTotal(data.text,mfp.currItem.index,mfp.items.length)}});_mfpOn(MARKUP_PARSE_EVENT+ns,function(e,element,values,item){var l=mfp.items.length;values.counter=l>1?_replaceCurrTotal(gSt.tCounter,item.index,l):''});_mfpOn('BuildControls'+ns,function(){if(mfp.items.length>1&&gSt.arrows&&!mfp.arrowLeft){var markup=gSt.arrowMarkup,arrowLeft=mfp.arrowLeft=$(markup.replace(/%title%/gi,gSt.tPrev).replace(/%dir%/gi,'left')).addClass(PREVENT_CLOSE_CLASS),arrowRight=mfp.arrowRight=$(markup.replace(/%title%/gi,gSt.tNext).replace(/%dir%/gi,'right')).addClass(PREVENT_CLOSE_CLASS);arrowLeft.click(function(){mfp.prev()});arrowRight.click(function(){mfp.next()});mfp.container.append(arrowLeft.add(arrowRight))}});_mfpOn(CHANGE_EVENT+ns,function(){if(mfp._preloadTimeout)clearTimeout(mfp._preloadTimeout);mfp._preloadTimeout=setTimeout(function(){mfp.preloadNearbyImages();mfp._preloadTimeout=null},16)});_mfpOn(CLOSE_EVENT+ns,function(){_document.off(ns);mfp.wrap.off('click'+ns);mfp.arrowRight=mfp.arrowLeft=null})},next:function(){mfp.direction=!0;mfp.index=_getLoopedId(mfp.index+1);mfp.updateItemHTML()},prev:function(){mfp.direction=!1;mfp.index=_getLoopedId(mfp.index-1);mfp.updateItemHTML()},goTo:function(newIndex){mfp.direction=(newIndex>=mfp.index);mfp.index=newIndex;mfp.updateItemHTML()},preloadNearbyImages:function(){var p=mfp.st.gallery.preload,preloadBefore=Math.min(p[0],mfp.items.length),preloadAfter=Math.min(p[1],mfp.items.length),i;for(i=1;i<=(mfp.direction?preloadAfter:preloadBefore);i++){mfp._preloadItem(mfp.index+i)}
for(i=1;i<=(mfp.direction?preloadBefore:preloadAfter);i++){mfp._preloadItem(mfp.index-i)}},_preloadItem:function(index){index=_getLoopedId(index);if(mfp.items[index].preloaded){return}
var item=mfp.items[index];if(!item.parsed){item=mfp.parseEl(index)}
_mfpTrigger('LazyLoad',item);if(item.type==='image'){item.img=$('<img class="mfp-img" />').on('load.mfploader',function(){item.hasSize=!0}).on('error.mfploader',function(){item.hasSize=!0;item.loadError=!0;_mfpTrigger('LazyLoadError',item)}).attr({src:item.src,srcset:item.srcset})}
item.preloaded=!0}}});var RETINA_NS='retina';$.magnificPopup.registerModule(RETINA_NS,{options:{replaceSrc:function(item){return item.src.replace(/\.\w+$/,function(m){return'@2x'+m})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var st=mfp.st.retina,ratio=st.ratio;ratio=!isNaN(ratio)?ratio:ratio();if(ratio>1){_mfpOn('ImageHasSize'+'.'+RETINA_NS,function(e,item){item.img.css({'max-width':item.img[0].naturalWidth/ratio,'width':'100%'})});_mfpOn('ElementParse'+'.'+RETINA_NS,function(e,item){item.src=st.replaceSrc(item,ratio)})}}}}});_checkInstance()})) 
/*
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
/*!
 * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!function(t,i,e,s){function o(i,e){var h=this;"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this,e)),this.$element=t(i),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var r=(this.position+"").toLowerCase().match(/\S+/g)||[];if(r.length<1&&r.push("center"),1==r.length&&r.push(r[0]),("top"==r[0]||"bottom"==r[0]||"left"==r[1]||"right"==r[1])&&(r=[r[1],r[0]]),this.positionX!=s&&(r[0]=this.positionX.toLowerCase()),this.positionY!=s&&(r[1]=this.positionY.toLowerCase()),h.positionX=r[0],h.positionY=r[1],"left"!=this.positionX&&"right"!=this.positionX&&(this.positionX=isNaN(parseInt(this.positionX))?"center":parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(this.positionY=isNaN(parseInt(this.positionY))?"center":parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/))return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;this.$mirror=t("<div />").prependTo("body");var a=this.$element.find(">.parallax-slider"),n=!1;0==a.length?this.$slider=t("<img />").prependTo(this.$mirror):(this.$slider=a.prependTo(this.$mirror),n=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){h.naturalHeight&&h.naturalWidth||(h.naturalHeight=this.naturalHeight||this.height||1,h.naturalWidth=this.naturalWidth||this.width||1),h.aspectRatio=h.naturalWidth/h.naturalHeight,o.isSetup||o.setup(),o.sliders.push(h),o.isFresh=!1,o.requestRender()}),n||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||a.length>0)&&this.$slider.trigger("load")}function h(s){return this.each(function(){var h=t(this),r="object"==typeof s&&s;this==i||this==e||h.is("body")?o.configure(r):h.data("px.parallax")?"object"==typeof s&&t.extend(h.data("px.parallax"),r):(r=t.extend({},h.data(),r),h.data("px.parallax",new o(this,r))),"string"==typeof s&&("destroy"==s?o.destroy(this):o[s]())})}!function(){for(var t=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!i.requestAnimationFrame;++s)i.requestAnimationFrame=i[e[s]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[s]+"CancelAnimationFrame"]||i[e[s]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e){var s=(new Date).getTime(),o=Math.max(0,16-(s-t)),h=i.setTimeout(function(){e(s+o)},o);return t=s+o,h}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(o.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t=o.winHeight,i=o.docHeight,e=Math.min(this.boxOffsetTop,i-t),s=Math.max(this.boxOffsetTop+this.boxHeight-t,0),h=this.boxHeight+(e-s)*(1-this.speed)|0,r=(this.boxOffsetTop-e)*(1-this.speed)|0;if(h*this.aspectRatio>=this.boxWidth){this.imageWidth=h*this.aspectRatio|0,this.imageHeight=h,this.offsetBaseTop=r;var a=this.imageWidth-this.boxWidth;this.offsetLeft="left"==this.positionX?0:"right"==this.positionX?-a:isNaN(this.positionX)?-a/2|0:Math.max(this.positionX,-a)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var a=this.imageHeight-h;this.offsetBaseTop="top"==this.positionY?r:"bottom"==this.positionY?r-a:isNaN(this.positionY)?r-a/2|0:r+Math.max(this.positionY,-a)}},render:function(){var t=o.scrollTop,i=o.scrollLeft,e=this.overScrollFix?o.overScroll:0,s=t+o.winHeight;this.boxOffsetBottom>t&&this.boxOffsetTop<=s?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-e,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(o,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var s=t(e),h=t(i),r=function(){o.winHeight=h.height(),o.winWidth=h.width(),o.docHeight=s.height(),o.docWidth=s.width()},a=function(){var t=h.scrollTop(),i=o.docHeight-o.winHeight,e=o.docWidth-o.winWidth;o.scrollTop=Math.max(0,Math.min(i,t)),o.scrollLeft=Math.max(0,Math.min(e,h.scrollLeft())),o.overScroll=Math.max(t-i,Math.min(t,0))};h.on("resize.px.parallax load.px.parallax",function(){r(),o.isFresh=!1,o.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){a(),o.requestRender()}),r(),a(),this.isReady=!0}},configure:function(i){"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this.prototype,i))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;this.isBusy||(this.isBusy=!0,i.requestAnimationFrame(function(){t.render(),t.isBusy=!1}))},destroy:function(e){var s,h=t(e).data("px.parallax");for(h.$mirror.remove(),s=0;s<this.sliders.length;s+=1)this.sliders[s]==h&&this.sliders.splice(s,1);t(e).data("px.parallax",!1),0===this.sliders.length&&(t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),this.isReady=!1,o.isSetup=!1)}});var r=t.fn.parallax;t.fn.parallax=h,t.fn.parallax.Constructor=o,t.fn.parallax.noConflict=function(){return t.fn.parallax=r,this},t(e).on("ready.px.parallax.data-api",function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document);
/*!
 * Product Zoom
 * https://github.com/kingdido999/zooming
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Zooming=e()}(this,function(){"use strict";function t(t,e){if(t){var n=new Image;n.onload=function(){e&&e(n)},n.src=t}}function e(t){return t.hasAttribute("data-original")?t.getAttribute("data-original"):"A"===t.parentNode.tagName?t.parentNode.getAttribute("href"):null}function n(t,e,n){o(e);var i=t.style,s={};for(var r in e)n&&(s[r]=i[r]||""),i[r]=e[r];return s}function i(t,e){Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(function(n){t[n]=t[n].bind(e)})}function o(t){var e=y.transitionProp,n=y.transformProp,i=void 0;t.transition&&(i=t.transition,delete t.transition,t[e]=i),t.transform&&(i=t.transform,delete t.transform,t[n]=i)}function s(t){var e={},n=["webkitTransition","transition","mozTransition"],i=["webkitTransform","transform","mozTransform"],o={transition:"transitionend",mozTransition:"transitionend",webkitTransition:"webkitTransitionEnd"};return n.some(function(n){if(void 0!==t.style[n])return e.transitionProp=n,e.transEndEvent=o[n],!0}),i.some(function(n){if(void 0!==t.style[n])return e.transformProp=n,e.transformCssProp=n.replace(/(.*)Transform/,"-$1-transform"),!0}),e}function r(t){return 0===t.button}function a(t){return t.metaKey||t.ctrlKey}function l(t){return"Escape"===(t.key||t.code)||27===t.keyCode}function c(t){return t.targetTouches.length>0}function h(t,e,n){for(var i=t.length,o=t[0],s=i>1,r=e,a=t.length,l=0,c=0,h={x:o.clientX,y:o.clientY},u={x:o.clientX,y:o.clientY};a--;){var d=t[a],f=[d.clientX,d.clientY],v=f[0],m=f[1];l+=v,c+=m,s&&(v<h.x?h.x=v:v>u.x&&(u.x=v),m<h.y?h.y=m:m>u.y&&(u.y=m))}if(s){var p=u.x-h.x,y=u.y-h.y;r=p>y?p/window.innerWidth*2:y/window.innerHeight*2}n(l/i,c/i,r)}function u(t){var e=f(),n={x:t.left+t.width/2,y:t.top+t.height/2};return{x:e.x-n.x,y:e.y-n.y}}function d(t,e,n){if(n)return{x:n.width/t.width,y:n.height/t.height};var i=t.width/2,o=t.height/2,s=f(),r={x:s.x-i,y:s.y-o},a=r.x/i,l=r.y/o,c=e+Math.min(a,l);return{x:c,y:c}}function f(){return{x:Math.min(document.documentElement.clientWidth,window.innerWidth)/2,y:Math.min(document.documentElement.clientHeight,window.innerHeight)/2}}function v(t,e,n){["mousedown","mousemove","mouseup","touchstart","touchmove","touchend"].forEach(function(i){n?t.addEventListener(i,e[i],{passive:!1}):t.removeEventListener(i,e[i],{passive:!1})})}var m="WebkitAppearance"in document.documentElement.style?"-webkit-":"",p={default:"auto",zoomIn:m+"zoom-in",zoomOut:m+"zoom-out",grab:m+"grab",move:"move"},y=s(document.createElement("div")),g=y.transformCssProp,b=y.transEndEvent,w={defaultZoomable:'img[data-action="zoom"]',enableGrab:!0,preloadImage:!1,transitionDuration:.4,transitionTimingFunction:"cubic-bezier(0.4, 0, 0, 1)",bgColor:"rgb(255, 255, 255)",bgOpacity:1,scaleBase:1,scaleExtra:.5,scrollThreshold:40,zIndex:998,customSize:null,onOpen:null,onClose:null,onRelease:null,onBeforeOpen:null,onBeforeClose:null,onBeforeGrab:null,onBeforeMove:null,onBeforeRelease:null},x={init:function(t){i(this,t)},click:function(t){if(t.preventDefault(),a(t))return window.open(this.target.srcOriginal||t.currentTarget.src,"_blank");this.shown?this.released?this.close():this.release():this.open(t.currentTarget)},scroll:function(){var t=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop;null===this.lastScrollPosition&&(this.lastScrollPosition=t);var e=this.lastScrollPosition-t;Math.abs(e)>=this.options.scrollThreshold&&(this.lastScrollPosition=null,this.close())},keydown:function(t){var e=this;l(t)&&(this.released?this.close():this.release(function(){return e.close()}))},mousedown:function(t){var e=this;r(t)&&!a(t)&&(t.preventDefault(),this.pressTimer=setTimeout(function(){e.grab(t.clientX,t.clientY)},200))},mousemove:function(t){this.released||this.move(t.clientX,t.clientY)},mouseup:function(t){r(t)&&!a(t)&&(clearTimeout(this.pressTimer),this.released?this.close():this.release())},touchstart:function(t){var e=this;t.preventDefault(),this.pressTimer=setTimeout(function(){h(t.touches,e.options.scaleExtra,function(t,n,i){e.grab(t,n,i)})},200)},touchmove:function(t){var e=this;this.released||h(t.touches,this.options.scaleExtra,function(t,n,i){e.move(t,n,i)})},touchend:function(t){c(t)||(clearTimeout(this.pressTimer),this.released?this.close():this.release())}},k={init:function(t){var e=this;this.el=document.createElement("div"),this.el.addEventListener("click",function(){return e.instance.close()}),this.instance=t,this.parent=document.body,n(this.el,{position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0}),this.updateStyle(t.options)},updateStyle:function(t){n(this.el,{zIndex:t.zIndex,backgroundColor:t.bgColor,transition:"opacity\n        "+t.transitionDuration+"s\n        "+t.transitionTimingFunction})},create:function(){this.parent.appendChild(this.el)},destroy:function(){this.parent.removeChild(this.el)},show:function(){var t=this;setTimeout(function(){return t.el.style.opacity=t.instance.options.bgOpacity},30)},hide:function(){this.el.style.opacity=0}},E={init:function(t,n){this.el=t,this.instance=n,this.srcThumbnail=this.el.getAttribute("src"),this.srcOriginal=e(this.el),this.rect=t.getBoundingClientRect(),this.translate=null,this.scale=null,this.styleOpen=null,this.styleClose=null},zoomIn:function(){var t=this.instance.options;this.translate=u(this.rect),this.scale=d(this.rect,t.scaleBase,t.customSize),this.el.offsetWidth,this.styleOpen={position:"relative",zIndex:t.zIndex+1,cursor:t.enableGrab?p.grab:p.zoomOut,transition:g+"\n        "+t.transitionDuration+"s\n        "+t.transitionTimingFunction,transform:"translate("+this.translate.x+"px, "+this.translate.y+"px)\n        scale("+this.scale.x+","+this.scale.y+")",width:this.rect.width+"px",height:this.rect.height+"px"},this.styleClose=n(this.el,this.styleOpen,!0)},zoomOut:function(){this.el.offsetWidth,n(this.el,{transform:"none"})},grab:function(t,e,i){var o=f(),s=o.x-t,r=o.y-e;n(this.el,{cursor:p.move,transform:"translate(\n        "+(this.translate.x+s)+"px, "+(this.translate.y+r)+"px)\n        scale("+(this.scale.x+i)+","+(this.scale.y+i)+")"})},move:function(t,e,i){var o=f(),s=o.x-t,r=o.y-e;n(this.el,{transition:g,transform:"translate(\n        "+(this.translate.x+s)+"px, "+(this.translate.y+r)+"px)\n        scale("+(this.scale.x+i)+","+(this.scale.y+i)+")"})},restoreCloseStyle:function(){n(this.el,this.styleClose)},restoreOpenStyle:function(){n(this.el,this.styleOpen)},upgradeSource:function(){var t=this;if(this.srcOriginal){var e=this.el.parentNode,n=this.el.cloneNode(!1);n.setAttribute("src",this.srcOriginal),n.style.position="fixed",n.style.visibility="hidden",e.appendChild(n),setTimeout(function(){t.el.setAttribute("src",t.srcOriginal),e.removeChild(n)},100)}},downgradeSource:function(){this.srcOriginal&&this.el.setAttribute("src",this.srcThumbnail)}},O=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},T=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},z=function(){function n(t){O(this,n),this.target=Object.create(E),this.overlay=Object.create(k),this.eventHandler=Object.create(x),this.body=document.body,this.shown=!1,this.lock=!1,this.released=!0,this.lastScrollPosition=null,this.pressTimer=null,this.options=C({},w,t),this.overlay.init(this),this.eventHandler.init(this),this.listen(this.options.defaultZoomable)}return T(n,[{key:"listen",value:function(n){if("string"==typeof n){for(var i=document.querySelectorAll(n),o=i.length;o--;)this.listen(i[o]);return this}if("IMG"===n.tagName)return n.style.cursor=p.zoomIn,n.addEventListener("click",this.eventHandler.click,{passive:!1}),this.options.preloadImage&&t(e(n)),this}},{key:"config",value:function(t){return t?(C(this.options,t),this.overlay.updateStyle(this.options),this):this.options}},{key:"open",value:function(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.onOpen;if(!this.shown&&!this.lock){var o="string"==typeof e?document.querySelector(e):e;if("IMG"===o.tagName){this.options.onBeforeOpen&&this.options.onBeforeOpen(o),this.target.init(o,this),this.options.preloadImage||t(this.target.srcOriginal),this.shown=!0,this.lock=!0,this.target.zoomIn(),this.overlay.create(),this.overlay.show(),document.addEventListener("scroll",this.eventHandler.scroll),document.addEventListener("keydown",this.eventHandler.keydown);var s=function t(){o.removeEventListener(b,t),n.lock=!1,n.target.upgradeSource(),n.options.enableGrab&&v(document,n.eventHandler,!0),i&&i(o)};return o.addEventListener(b,s),this}}}},{key:"close",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.onClose;if(this.shown&&!this.lock){var n=this.target.el;this.options.onBeforeClose&&this.options.onBeforeClose(n),this.lock=!0,this.body.style.cursor=p.default,this.overlay.hide(),this.target.zoomOut(),document.removeEventListener("scroll",this.eventHandler.scroll),document.removeEventListener("keydown",this.eventHandler.keydown);var i=function i(){n.removeEventListener(b,i),t.shown=!1,t.lock=!1,t.target.downgradeSource(),t.options.enableGrab&&v(document,t.eventHandler,!1),t.target.restoreCloseStyle(),t.overlay.destroy(),e&&e(n)};return n.addEventListener(b,i),this}}},{key:"grab",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.options.scaleExtra,i=arguments[3];if(this.shown&&!this.lock){var o=this.target.el;this.options.onBeforeGrab&&this.options.onBeforeGrab(o),this.released=!1,this.target.grab(t,e,n);var s=function t(){o.removeEventListener(b,t),i&&i(o)};o.addEventListener(b,s)}}},{key:"move",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.options.scaleExtra,i=arguments[3];if(this.shown&&!this.lock){var o=this.target.el;this.options.onBeforeMove&&this.options.onBeforeMove(o),this.released=!1,this.target.move(t,e,n),this.body.style.cursor=p.move;var s=function t(){o.removeEventListener(b,t),i&&i(o)};o.addEventListener(b,s)}}},{key:"release",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.onRelease;if(this.shown&&!this.lock){var n=this.target.el;this.options.onBeforeRelease&&this.options.onBeforeRelease(n),this.lock=!0,this.target.restoreOpenStyle(),this.body.style.cursor=p.default;var i=function i(){n.removeEventListener(b,i),t.lock=!1,t.released=!0,e&&e(n)};return n.addEventListener(b,i),this}}}]),n}();return document.addEventListener("DOMContentLoaded",function(){new z}),z});
// Generated by CoffeeScript 1.9.3
(function(){var e;e=function(){function e(e,t){var n,r;this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1};if(typeof e=="object")for(n in e)r=e[n],this.options[n]=r;this.context=t!=null?t:this,this.unique=this._genKey()}return e.prototype.hasNext=function(){return typeof this.context.nextUrl=="string"&&this.context.nextUrl.length>0},e.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},e.prototype.run=function(t){var n,r,i;if(typeof this.options.clientId!="string"&&typeof this.options.accessToken!="string")throw new Error("Missing clientId or accessToken.");if(typeof this.options.accessToken!="string"&&typeof this.options.clientId!="string")throw new Error("Missing clientId or accessToken.");return this.options.before!=null&&typeof this.options.before=="function"&&this.options.before.call(this),typeof document!="undefined"&&document!==null&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=t||this._buildUrl(),n=document.getElementsByTagName("head"),n[0].appendChild(i),r="instafeedCache"+this.unique,window[r]=new e(this.options,this),window[r].unique=this.unique),!0},e.prototype.parse=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D;if(typeof e!="object"){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(e.meta.code!==200){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,e.meta.error_message),!1;throw new Error("Error from Instagram: "+e.meta.error_message)}if(e.data.length===0){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}this.options.success!=null&&typeof this.options.success=="function"&&this.options.success.call(this,e),this.context.nextUrl="",e.pagination!=null&&(this.context.nextUrl=e.pagination.next_url);if(this.options.sortBy!=="none"){this.options.sortBy==="random"?M=["","random"]:M=this.options.sortBy.split("-"),O=M[0]==="least"?!0:!1;switch(M[1]){case"random":e.data.sort(function(){return.5-Math.random()});break;case"recent":e.data=this._sortBy(e.data,"created_time",O);break;case"liked":e.data=this._sortBy(e.data,"likes.count",O);break;case"commented":e.data=this._sortBy(e.data,"comments.count",O);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}}if(typeof document!="undefined"&&document!==null&&this.options.mock===!1){m=e.data,A=parseInt(this.options.limit,10),this.options.limit!=null&&m.length>A&&(m=m.slice(0,A)),u=document.createDocumentFragment(),this.options.filter!=null&&typeof this.options.filter=="function"&&(m=this._filter(m,this.options.filter));if(this.options.template!=null&&typeof this.options.template=="string"){f="",d="",w="",D=document.createElement("div");for(c=0,N=m.length;c<N;c++){h=m[c],p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);E=p.width,y=p.height,b="square",E>y&&(b="landscape"),E<y&&(b="portrait"),v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),d=this._makeTemplate(this.options.template,{model:h,id:h.id,link:h.link,type:h.type,image:v,width:E,height:y,orientation:b,caption:this._getObjectProperty(h,"caption.text"),likes:h.likes.count,comments:h.comments.count,location:this._getObjectProperty(h,"location.name")}),f+=d}D.innerHTML=f,i=[],r=0,n=D.childNodes.length;while(r<n)i.push(D.childNodes[r]),r+=1;for(x=0,C=i.length;x<C;x++)L=i[x],u.appendChild(L)}else for(T=0,k=m.length;T<k;T++){h=m[T],g=document.createElement("img"),p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),g.src=v,this.options.links===!0?(t=document.createElement("a"),t.href=h.link,t.appendChild(g),u.appendChild(t)):u.appendChild(g)}_=this.options.target,typeof _=="string"&&(_=document.getElementById(_));if(_==null)throw o='No element with id="'+this.options.target+'" on page.',new Error(o);_.appendChild(u),a=document.getElementsByTagName("head")[0],a.removeChild(document.getElementById("instafeed-fetcher")),S="instafeedCache"+this.unique,window[S]=void 0;try{delete window[S]}catch(P){s=P}}return this.options.after!=null&&typeof this.options.after=="function"&&this.options.after.call(this),!0},e.prototype._buildUrl=function(){var e,t,n;e="https://api.instagram.com/v1";switch(this.options.get){case"popular":t="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");t="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");t="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");t="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return n=e+"/"+t,this.options.accessToken!=null?n+="?access_token="+this.options.accessToken:n+="?client_id="+this.options.clientId,this.options.limit!=null&&(n+="&count="+this.options.limit),n+="&callback=instafeedCache"+this.unique+".parse",n},e.prototype._genKey=function(){var e;return e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)},""+e()+e()+e()+e()},e.prototype._makeTemplate=function(e,t){var n,r,i,s,o;r=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,n=e;while(r.test(n))s=n.match(r)[1],o=(i=this._getObjectProperty(t,s))!=null?i:"",n=n.replace(r,function(){return""+o});return n},e.prototype._getObjectProperty=function(e,t){var n,r;t=t.replace(/\[(\w+)\]/g,".$1"),r=t.split(".");while(r.length){n=r.shift();if(!(e!=null&&n in e))return null;e=e[n]}return e},e.prototype._sortBy=function(e,t,n){var r;return r=function(e,r){var i,s;return i=this._getObjectProperty(e,t),s=this._getObjectProperty(r,t),n?i>s?1:-1:i<s?1:-1},e.sort(r.bind(this)),e},e.prototype._filter=function(e,t){var n,r,i,s,o;n=[],r=function(e){if(t(e))return n.push(e)};for(i=0,o=e.length;i<o;i++)s=e[i],r(s);return n},e}(),function(e,t){return typeof define=="function"&&define.amd?define([],t):typeof module=="object"&&module.exports?module.exports=t():e.Instafeed=t()}(this,function(){return e})}).call(this);
/**!
 * trunk8 v1.3.2
 * https://github.com/rviscomi/trunk8
 * 
 * Copyright 2012 Rick Viscomi
 * Released under the MIT License.
 * 
 * Date: October 21, 2012
 */

(function($){var methods,utils,SIDES={center:'center',left:'left',right:'right'},WIDTH={auto:'auto'};function trunk8(element){this.$element=$(element);this.original_text=this.$element.html();this.settings=$.extend({},$.fn.trunk8.defaults);}trunk8.prototype.updateSettings=function(options){this.settings=$.extend(this.settings,options);};function truncate(){var data=this.data('trunk8'),settings=data.settings,width=settings.width,side=settings.side,fill=settings.fill,line_height=utils.getLineHeight(this)*settings.lines,str=data.original_text,length=str.length,max_bite='',lower,upper,bite_size,bite;this.html(str);if(width===WIDTH.auto){if(this.height()<=line_height){return;}lower=0;upper=length-1;while(lower<=upper){bite_size=lower+((upper-lower)>>1);bite=utils.eatStr(str,side,length-bite_size,fill);this.html(bite);if(this.height()>line_height){upper=bite_size-1;}else{lower=bite_size+1;max_bite=(max_bite.length>bite.length)?max_bite:bite;}}this.html('');this.html(max_bite);if(settings.tooltip){this.attr('title',str);}}else if(!isNaN(width)){bite_size=length-width;bite=utils.eatStr(str,side,bite_size,fill);this.html(bite);if(settings.tooltip){this.attr('title',str);}}else{$.error('Invalid width "'+width+'".');}}methods={init:function(options){return this.each(function(){var $this=$(this),data=$this.data('trunk8');if(!data){$this.data('trunk8',(data=new trunk8(this)));}data.updateSettings(options);truncate.call($this);});},update:function(new_string){return this.each(function(){var $this=$(this);if(new_string){$this.data('trunk8').original_text=new_string;}truncate.call($this);});},revert:function(){return this.each(function(){var text=$(this).data('trunk8').original_text;$(this).html(text);});},getSettings:function(){return this.get(0).data('trunk8').settings;}};utils={eatStr:function(str,side,bite_size,fill){var length=str.length,key=utils.eatStr.generateKey.apply(null,arguments),half_length,half_bite_size;if(utils.eatStr.cache[key]){return utils.eatStr.cache[key];}if((typeof str!=='string')||(length===0)){$.error('Invalid source string "'+str+'".');}if((bite_size<0)||(bite_size>length)){$.error('Invalid bite size "'+bite_size+'".');}else if(bite_size===0){return str;}if(typeof(fill+'')!=='string'){$.error('Fill unable to be converted to a string.');}switch(side){case SIDES.right:return utils.eatStr.cache[key]=$.trim(str.substr(0,length-bite_size))+fill;case SIDES.left:return utils.eatStr.cache[key]=fill+$.trim(str.substr(bite_size));case SIDES.center:half_length=length>>1;half_bite_size=bite_size>>1;return utils.eatStr.cache[key]=$.trim(utils.eatStr(str.substr(0,length-half_length),SIDES.right,bite_size-half_bite_size,''))+fill+$.trim(utils.eatStr(str.substr(length-half_length),SIDES.left,half_bite_size,''));default:$.error('Invalid side "'+side+'".');}},getLineHeight:function(elem){var $elem=$(elem),float=$elem.css('float'),position=$elem.css('position'),html=$elem.html(),wrapper_id='line-height-test',line_height;if(float!=='none'){$elem.css('float','none');}if(position==='absolute'){$elem.css('position','static');}$elem.html('i').wrap('<div id="'+wrapper_id+'" />');line_height=$('#'+wrapper_id).innerHeight();$elem.html(html).css({'float':float,'position':position}).unwrap();return line_height;}};utils.eatStr.cache={};utils.eatStr.generateKey=function(){return Array.prototype.join.call(arguments,'');};$.fn.trunk8=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}else{$.error('Method '+method+' does not exist on jQuery.trunk8');}};$.fn.trunk8.defaults={fill:'&hellip;',lines:1,side:SIDES.right,tooltip:true,width:WIDTH.auto};})(jQuery);

/*
  textfill
 @name      jquery.textfill.js
 @author    Russ Painter (GeekyMonkey)
 @author    Yu-Jie Lin
 @author    Alexandre Dantas
 @version   0.6.2
 @date      2018-02-24
 @copyright (c) 2009
 @license   MIT License
 @homepage  https://github.com/jquery-textfill/jquery-textfill
 @example   http://jquery-textfill.github.io/jquery-textfill/index.html
*/
(function(k){k.fn.textfill=function(q){function e(){a.debug&&"undefined"!=typeof console&&"undefined"!=typeof console.debug&&console.debug.apply(console,arguments)}function n(b,a,f,l,m,g){function c(a,b){var c=" / ";a>b?c=" > ":a==b&&(c=" = ");return c}e("[TextFill] "+b+" { font-size: "+a.css("font-size")+",Height: "+a.height()+"px "+c(a.height(),f)+f+"px,Width: "+a.width()+c(a.width(),l)+l+",minFontPixels: "+m+"px, maxFontPixels: "+g+"px }")}function p(a,c,f,l,e,g,h,d){for(n(a,c,e,g,h,d);h<Math.floor(d)-
1;){var b=Math.floor((h+d)/2);c.css("font-size",b);var k=f.call(c);if(k<=l){if(h=b,k==l)break}else d=b;n(a,c,e,g,h,d)}c.css("font-size",d);f.call(c)<=l&&(h=d,n(a+"* ",c,e,g,h,d));return h}var a=k.extend({debug:!1,maxFontPixels:40,minFontPixels:4,innerTag:"span",widthOnly:!1,success:null,fail:null,complete:null,explicitWidth:null,explicitHeight:null,changeLineHeight:!1,truncateOnFail:!1,allowOverflow:!1},q);e("[TextFill] Start Debug");this.each(function(){var b=k(a.innerTag+":first",this);e("[TextFill] Inner text: "+
b.text());e("[TextFill] All options: ",a);e("[TextFill] Maximum sizes: { Height: "+c+"px, Width: "+f+"px }");if(b.is(":visible")){var c=a.explicitHeight||k(this).height(),f=a.explicitWidth||k(this).width(),l=b.css("font-size"),m=parseFloat(b.css("line-height"))/parseFloat(l),g=a.minFontPixels,h=0>=a.maxFontPixels?c:a.maxFontPixels,d=void 0;a.widthOnly?b.css("white-space","nowrap"):d=p("Height",b,k.fn.height,c,c,f,g,h);g=p("Width",b,k.fn.width,f,c,f,g,h);a.widthOnly?(b.css({"font-size":g}),a.changeLineHeight&&
b.parent().css("line-height",m*g+"px")):(d=Math.min(d,g),b.css("font-size",d),a.changeLineHeight&&b.parent().css("line-height",m*d+"px"));e("[TextFill] Finished { Old font-size: "+l+", New font-size: "+b.css("font-size")+" }");b.width()>f&&!a.allowOverflow||b.height()>c&&!a.widthOnly&&!a.allowOverflow?(b.css("font-size",l),a.fail&&a.fail(this),e("[TextFill] Failure { Current Width: "+b.width()+", Maximum Width: "+f+", Current Height: "+b.height()+", Maximum Height: "+c+" }")):a.success&&a.success(this)}else a.fail&&
a.fail(this),e("[TextFill] Failure { Current Width: "+b.width()+", Maximum Width: "+f+", Current Height: "+b.height()+", Maximum Height: "+c+" }")});a.complete&&a.complete(this);e("[TextFill] End Debug");return this}})(function(){return"undefined"!==typeof module&&module.exports?require("jquery"):window.jQuery}());

/*! lazysizes - v3.0.0 */
!function(){"use strict";function a(a){var b=getComputedStyle(a,null)||{},c=b.fontFamily||"",d=c.match(f)||"",e=d&&c.match(g)||"";return e&&(e=e[1]),{fit:d&&d[1]||"",position:j[e]||e||"center"}}function b(a,b){var c,d=lazySizes.cfg,e=a.cloneNode(!1),f=e.style,g=function(){var b=a.currentSrc||a.src;b&&(f.backgroundImage="url("+(i.test(b)?JSON.stringify(b):b)+")",c||(c=!0,lazySizes.rC(e,d.loadingClass),lazySizes.aC(e,d.loadedClass)))};a._lazysizesParentFit=b.fit,a.addEventListener("load",function(){lazySizes.rAF(g)},!0),e.addEventListener("load",function(){var a=e.currentSrc||e.src;a&&a!=h&&(e.src=h,e.srcset="")}),lazySizes.rAF(function(){var c=a,i=a.parentNode;"PICTURE"==i.nodeName.toUpperCase()&&(c=i,i=i.parentNode),lazySizes.rC(e,d.loadedClass),lazySizes.rC(e,d.lazyClass),lazySizes.aC(e,d.loadingClass),lazySizes.aC(e,d.objectFitClass||"lazysizes-display-clone"),e.getAttribute(d.srcsetAttr)&&e.setAttribute(d.srcsetAttr,""),e.getAttribute(d.srcAttr)&&e.setAttribute(d.srcAttr,""),e.src=h,e.srcset="",f.backgroundRepeat="no-repeat",f.backgroundPosition=b.position,f.backgroundSize=b.fit,c.style.display="none",a.setAttribute("data-parent-fit",b.fit),a.setAttribute("data-parent-container","prev"),i.insertBefore(e,c),a._lazysizesParentFit&&delete a._lazysizesParentFit,a.complete&&g()})}var c=document.createElement("a").style,d="objectFit"in c,e=d&&"objectPosition"in c,f=/object-fit["']*\s*:\s*["']*(contain|cover)/,g=/object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,h="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",i=/\(|\)|'/,j={center:"center","50% 50%":"center"};d&&e||addEventListener("lazyunveilread",function(c){var e=c.target,f=a(e);!f.fit||d&&"center"==f.position||b(e,f)},!0)}();
/*! lazysizes - v3.0.0 */
!function(a,b,c){"use strict";function d(b,c){var d,e,f,g,h=a.getComputedStyle(b);e=b.parentNode,g={isPicture:!(!e||!m.test(e.nodeName||""))},f=function(a,c){var d=b.getAttribute("data-"+a);if(!d){var e=h.getPropertyValue("--ls-"+a);e&&(d=e.trim())}if(d){if("true"==d)d=!0;else if("false"==d)d=!1;else if(l.test(d))d=parseFloat(d);else if("function"==typeof j[a])d=j[a](b,d);else if(q.test(d))try{d=JSON.parse(d)}catch(f){}g[a]=d}else a in j&&"function"!=typeof j[a]?g[a]=j[a]:c&&"function"==typeof j[a]&&(g[a]=j[a](b,d))};for(d in j)f(d);return c.replace(p,function(a,b){b in g||f(b,!0)}),g}function e(a,b){var c=[],d=function(a,c){return k[typeof b[c]]?b[c]:a};return c.srcset=[],b.absUrl&&(s.setAttribute("href",a),a=s.href),a=((b.prefix||"")+a+(b.postfix||"")).replace(p,d),b.widths.forEach(function(d){var e=b.widthmap[d]||d,f={u:a.replace(n,e).replace(o,b.ratio?Math.round(d*b.ratio):""),w:d};c.push(f),c.srcset.push(f.c=f.u+" "+d+"w")}),c}function f(a,c,d){var f=0,g=0,h=d;if(a){if("container"===c.ratio){for(f=h.scrollWidth,g=h.scrollHeight;!(f&&g||h===b);)h=h.parentNode,f=h.scrollWidth,g=h.scrollHeight;f&&g&&(c.ratio=g/f)}a=e(a,c),a.isPicture=c.isPicture,u&&"IMG"==d.nodeName.toUpperCase()?d.removeAttribute(i.srcsetAttr):d.setAttribute(i.srcsetAttr,a.srcset.join(", ")),Object.defineProperty(d,"_lazyrias",{value:a,writable:!0})}}function g(a,b){var c=d(a,b);return j.modifyOptions.call(a,{target:a,details:c,detail:c}),lazySizes.fire(a,"lazyriasmodifyoptions",c),c}function h(a){return a.getAttribute(a.getAttribute("data-srcattr")||j.srcAttr)||a.getAttribute(i.srcsetAttr)||a.getAttribute(i.srcAttr)||a.getAttribute("data-pfsrcset")||""}if(b.addEventListener){var i,j,k={string:1,number:1},l=/^\-*\+*\d+\.*\d*$/,m=/^picture$/i,n=/\s*\{\s*width\s*\}\s*/i,o=/\s*\{\s*height\s*\}\s*/i,p=/\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,q=/^\[.*\]|\{.*\}$/,r=/^(?:auto|\d+(px)?)$/,s=b.createElement("a"),t=b.createElement("img"),u="srcset"in t&&!("sizes"in t),v=!!a.HTMLPictureElement&&!u;!function(){var b,c=function(){},d={prefix:"",postfix:"",srcAttr:"data-src",absUrl:!1,modifyOptions:c,widthmap:{},ratio:!1};i=a.lazySizes&&lazySizes.cfg||a.lazySizesConfig,i||(i={},a.lazySizesConfig=i),i.supportsType||(i.supportsType=function(a){return!a}),i.rias||(i.rias={}),j=i.rias,"widths"in j||(j.widths=[],function(a){for(var b,c=0;!b||3e3>b;)c+=5,c>30&&(c+=1),b=36*c,a.push(b)}(j.widths));for(b in d)b in j||(j[b]=d[b])}(),addEventListener("lazybeforesizes",function(a){var b,c,d,e,k,l,m,o,p,q,s,t,u;if(b=a.target,a.detail.dataAttr&&!a.defaultPrevented&&!j.disabled&&(p=b.getAttribute(i.sizesAttr)||b.getAttribute("sizes"))&&r.test(p)){if(c=h(b),d=g(b,c),s=n.test(d.prefix)||n.test(d.postfix),d.isPicture&&(e=b.parentNode))for(k=e.getElementsByTagName("source"),l=0,m=k.length;m>l;l++)(s||n.test(o=h(k[l])))&&(f(o,d,k[l]),t=!0);s||n.test(c)?(f(c,d,b),t=!0):t&&(u=[],u.srcset=[],u.isPicture=!0,Object.defineProperty(b,"_lazyrias",{value:u,writable:!0})),t&&(v?b.removeAttribute(i.srcAttr):"auto"!=p&&(q={width:parseInt(p,10)},w({target:b,detail:q})))}},!0);var w=function(){var c=function(a,b){return a.w-b.w},d=function(a){var b,c,d=a.length,e=a[d-1],f=0;for(f;d>f;f++)if(e=a[f],e.d=e.w/a.w,e.d>=a.d){!e.cached&&(b=a[f-1])&&b.d>a.d-.13*Math.pow(a.d,2.2)&&(c=Math.pow(b.d-.6,1.6),b.cached&&(b.d+=.15*c),b.d+(e.d-a.d)*c>a.d&&(e=b));break}return e},e=function(a,b){var c;return!a._lazyrias&&lazySizes.pWS&&(c=lazySizes.pWS(a.getAttribute(i.srcsetAttr||""))).length&&(Object.defineProperty(a,"_lazyrias",{value:c,writable:!0}),b&&a.parentNode&&(c.isPicture="PICTURE"==a.parentNode.nodeName.toUpperCase())),a._lazyrias},f=function(b){var c=a.devicePixelRatio||1,d=lazySizes.getX&&lazySizes.getX(b);return Math.min(d||c,2.4,c)},g=function(b,g){var h,i,j,k,l,m;if(l=b._lazyrias,l.isPicture&&a.matchMedia)for(i=0,h=b.parentNode.getElementsByTagName("source"),j=h.length;j>i;i++)if(e(h[i])&&!h[i].getAttribute("type")&&(!(k=h[i].getAttribute("media"))||(matchMedia(k)||{}).matches)){l=h[i]._lazyrias;break}return(!l.w||l.w<g)&&(l.w=g,l.d=f(b),m=d(l.sort(c))),m},h=function(c){var d,f=c.target;return!u&&(a.respimage||a.picturefill||lazySizesConfig.pf)?void b.removeEventListener("lazybeforesizes",h):void(("_lazyrias"in f||c.detail.dataAttr&&e(f,!0))&&(d=g(f,c.detail.width),d&&d.u&&f._lazyrias.cur!=d.u&&(f._lazyrias.cur=d.u,d.cached=!0,lazySizes.rAF(function(){f.setAttribute(i.srcAttr,d.u),f.setAttribute("src",d.u)}))))};return v?h=function(){}:addEventListener("lazybeforesizes",h),h}()}}(window,document);
/*! lazysizes - v3.0.0 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d=b.documentElement,e=a.Date,f=a.HTMLPictureElement,g="addEventListener",h="getAttribute",i=a[g],j=a.setTimeout,k=a.requestAnimationFrame||j,l=a.requestIdleCallback,m=/^picture$/i,n=["load","error","lazyincluded","_lazyloaded"],o={},p=Array.prototype.forEach,q=function(a,b){return o[b]||(o[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),o[b].test(a[h]("class")||"")&&o[b]},r=function(a,b){q(a,b)||a.setAttribute("class",(a[h]("class")||"").trim()+" "+b)},s=function(a,b){var c;(c=q(a,b))&&a.setAttribute("class",(a[h]("class")||"").replace(c," "))},t=function(a,b,c){var d=c?g:"removeEventListener";c&&t(a,b),n.forEach(function(c){a[d](c,b)})},u=function(a,c,d,e,f){var g=b.createEvent("CustomEvent");return g.initCustomEvent(c,!e,!f,d||{}),a.dispatchEvent(g),g},v=function(b,d){var e;!f&&(e=a.picturefill||c.pf)?e({reevaluate:!0,elements:[b]}):d&&d.src&&(b.src=d.src)},w=function(a,b){return(getComputedStyle(a,null)||{})[b]},x=function(a,b,d){for(d=d||a.offsetWidth;d<c.minSize&&b&&!a._lazysizesWidth;)d=b.offsetWidth,b=b.parentNode;return d},y=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?j:k)(g)))};return h._lsFlush=g,h}(),z=function(a,b){return b?function(){y(a)}:function(){var b=this,c=arguments;y(function(){a.apply(b,c)})}},A=function(a){var b,c=0,d=125,f=666,g=f,h=function(){b=!1,c=e.now(),a()},i=l?function(){l(h,{timeout:g}),g!==f&&(g=f)}:z(function(){j(h)},!0);return function(a){var f;(a=a===!0)&&(g=44),b||(b=!0,f=d-(e.now()-c),0>f&&(f=0),a||9>f&&l?i():j(i,f))}},B=function(a){var b,c,d=99,f=function(){b=null,a()},g=function(){var a=e.now()-c;d>a?j(g,d-a):(l||f)(f)};return function(){c=e.now(),b||(b=j(g,d))}},C=function(){var f,k,l,n,o,x,C,E,F,G,H,I,J,K,L,M=/^img$/i,N=/^iframe$/i,O="onscroll"in a&&!/glebot/.test(navigator.userAgent),P=0,Q=0,R=0,S=-1,T=function(a){R--,a&&a.target&&t(a.target,T),(!a||0>R||!a.target)&&(R=0)},U=function(a,c){var e,f=a,g="hidden"==w(b.body,"visibility")||"hidden"!=w(a,"visibility");for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=d;)g=(w(f,"opacity")||1)>0,g&&"visible"!=w(f,"overflow")&&(e=f.getBoundingClientRect(),g=H>e.left&&G<e.right&&I>e.top-1&&F<e.bottom+1);return g},V=function(){var a,e,g,i,j,m,n,p,q;if((o=c.loadMode)&&8>R&&(a=f.length)){e=0,S++,null==K&&("expand"in c||(c.expand=d.clientHeight>500&&d.clientWidth>500?500:370),J=c.expand,K=J*c.expFactor),K>Q&&1>R&&S>2&&o>2&&!b.hidden?(Q=K,S=0):Q=o>1&&S>1&&6>R?J:P;for(;a>e;e++)if(f[e]&&!f[e]._lazyRace)if(O)if((p=f[e][h]("data-expand"))&&(m=1*p)||(m=Q),q!==m&&(C=innerWidth+m*L,E=innerHeight+m,n=-1*m,q=m),g=f[e].getBoundingClientRect(),(I=g.bottom)>=n&&(F=g.top)<=E&&(H=g.right)>=n*L&&(G=g.left)<=C&&(I||H||G||F)&&(l&&3>R&&!p&&(3>o||4>S)||U(f[e],m))){if(ba(f[e]),j=!0,R>9)break}else!j&&l&&!i&&4>R&&4>S&&o>2&&(k[0]||c.preloadAfterLoad)&&(k[0]||!p&&(I||H||G||F||"auto"!=f[e][h](c.sizesAttr)))&&(i=k[0]||f[e]);else ba(f[e]);i&&!j&&ba(i)}},W=A(V),X=function(a){r(a.target,c.loadedClass),s(a.target,c.loadingClass),t(a.target,Z)},Y=z(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,d,e=a[h](c.srcsetAttr);(b=c.customMedia[a[h]("data-media")||a[h]("media")])&&a.setAttribute("media",b),e&&a.setAttribute("srcset",e),b&&(d=a.parentNode,d.insertBefore(a.cloneNode(),a),d.removeChild(a))},aa=z(function(a,b,d,e,f){var g,i,k,l,o,q;(o=u(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(d?r(a,c.autosizesClass):a.setAttribute("sizes",e)),i=a[h](c.srcsetAttr),g=a[h](c.srcAttr),f&&(k=a.parentNode,l=k&&m.test(k.nodeName||"")),q=b.firesLoad||"src"in a&&(i||g||l),o={target:a},q&&(t(a,T,!0),clearTimeout(n),n=j(T,2500),r(a,c.loadingClass),t(a,Z,!0)),l&&p.call(k.getElementsByTagName("source"),_),i?a.setAttribute("srcset",i):g&&!l&&(N.test(a.nodeName)?$(a,g):a.src=g),(i||l)&&v(a,{src:g})),a._lazyRace&&delete a._lazyRace,s(a,c.lazyClass),y(function(){(!q||a.complete&&a.naturalWidth>1)&&(q?T(o):R--,X(o))},!0)}),ba=function(a){var b,d=M.test(a.nodeName),e=d&&(a[h](c.sizesAttr)||a[h]("sizes")),f="auto"==e;(!f&&l||!d||!a.src&&!a.srcset||a.complete||q(a,c.errorClass))&&(b=u(a,"lazyunveilread").detail,f&&D.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,R++,aa(a,b,f,e,d))},ca=function(){if(!l){if(e.now()-x<999)return void j(ca,999);var a=B(function(){c.loadMode=3,W()});l=!0,c.loadMode=3,W(),i("scroll",function(){3==c.loadMode&&(c.loadMode=2),a()},!0)}};return{_:function(){x=e.now(),f=b.getElementsByClassName(c.lazyClass),k=b.getElementsByClassName(c.lazyClass+" "+c.preloadClass),L=c.hFac,i("scroll",W,!0),i("resize",W,!0),a.MutationObserver?new MutationObserver(W).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d[g]("DOMNodeInserted",W,!0),d[g]("DOMAttrModified",W,!0),setInterval(W,999)),i("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[g](a,W,!0)}),/d$|^c/.test(b.readyState)?ca():(i("load",ca),b[g]("DOMContentLoaded",W),j(ca,2e4)),f.length?(V(),y._lsFlush()):W()},checkElems:W,unveil:ba}}(),D=function(){var a,d=z(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),m.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;g>f;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||v(a,c.detail)}),e=function(a,b,c){var e,f=a.parentNode;f&&(c=x(a,f,c),e=u(a,"lazybeforesizes",{width:c,dataAttr:!!b}),e.defaultPrevented||(c=e.detail.width,c&&c!==a._lazysizesWidth&&d(a,f,e,c)))},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)e(a[b])},g=B(f);return{_:function(){a=b.getElementsByClassName(c.autosizesClass),i("resize",g)},checkElems:g,updateElem:e}}(),E=function(){E.i||(E.i=!0,D._(),C._())};return function(){var b,d={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};c=a.lazySizesConfig||a.lazysizesConfig||{};for(b in d)b in c||(c[b]=d[b]);a.lazySizesConfig=c,j(function(){c.init&&E()})}(),{cfg:c,autoSizer:D,loader:C,init:E,uP:v,aC:r,rC:s,hC:q,fire:u,gW:x,rAF:y}}});
/*! lazysizes - v3.0.0 */
!function(a,b){"use strict";if(a.addEventListener){var c=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,d=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,e=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,f=/^picture$/i,g=function(a){return getComputedStyle(a,null)||{}},h={getParent:function(b,c){var d=b,e=b.parentNode;return c&&"prev"!=c||!e||!f.test(e.nodeName||"")||(e=e.parentNode),"self"!=c&&(d="prev"==c?b.previousElementSibling:c&&(e.closest||a.jQuery)?(e.closest?e.closest(c):jQuery(e).closest(c)[0])||e:e),d},getFit:function(a){var b,c,f=g(a),i=f.content||f.fontFamily,j={fit:a._lazysizesParentFit||a.getAttribute("data-parent-fit")};return!j.fit&&i&&(b=i.match(d))&&(j.fit=b[1]),j.fit?(c=a._lazysizesParentContainer||a.getAttribute("data-parent-container"),!c&&i&&(b=i.match(e))&&(c=b[1]),j.parent=h.getParent(a,c)):j.fit=f.objectFit,j},getImageRatio:function(b){var d,e,g,h,i=b.parentNode,j=i&&f.test(i.nodeName||"")?i.querySelectorAll("source, img"):[b];for(d=0;d<j.length;d++)if(b=j[d],e=b.getAttribute(lazySizesConfig.srcsetAttr)||b.getAttribute("srcset")||b.getAttribute("data-pfsrcset")||b.getAttribute("data-risrcset")||"",g=b.getAttribute("media"),g=lazySizesConfig.customMedia[b.getAttribute("data-media")||g]||g,e&&(!g||(a.matchMedia&&matchMedia(g)||{}).matches)){h=parseFloat(b.getAttribute("data-aspectratio")),!h&&e.match(c)&&(h="w"==RegExp.$2?RegExp.$1/RegExp.$3:RegExp.$3/RegExp.$1);break}return h},calculateSize:function(a,b){var c,d,e,f,g=this.getFit(a),h=g.fit,i=g.parent;return"width"==h||("contain"==h||"cover"==h)&&(e=this.getImageRatio(a))?(i?b=i.clientWidth:i=a,f=b,"width"==h?f=b:(d=i.clientHeight,d>40&&(c=b/d)&&("cover"==h&&e>c||"contain"==h&&c>e)&&(f=b*(e/c))),f):b}},i=function(){a.lazySizes&&(lazySizes.parentFit||(lazySizes.parentFit=h),a.removeEventListener("lazyunveilread",i,!0))};a.addEventListener("lazyunveilread",i,!0),b.addEventListener("lazybeforesizes",function(a){if(!a.defaultPrevented){var b=a.target;a.detail.width=h.calculateSize(b,a.detail.width)}}),setTimeout(i)}}(window,document);
/*! lazysizes - v3.0.0 */
!function(a,b,c){"use strict";var d,e=a.lazySizes&&lazySizes.cfg||a.lazySizesConfig,f=b.createElement("img"),g="sizes"in f&&"srcset"in f,h=/\s+\d+h/g,i=function(){var a=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,c=Array.prototype.forEach;return function(d){var e=b.createElement("img"),f=function(b){var c,d=b.getAttribute(lazySizesConfig.srcsetAttr);d&&(d.match(a)&&(c="w"==RegExp.$2?RegExp.$1/RegExp.$3:RegExp.$3/RegExp.$1,c&&b.setAttribute("data-aspectratio",c)),b.setAttribute(lazySizesConfig.srcsetAttr,d.replace(h,"")))},g=function(a){var b=a.target.parentNode;b&&"PICTURE"==b.nodeName&&c.call(b.getElementsByTagName("source"),f),f(a.target)},i=function(){e.currentSrc&&b.removeEventListener("lazybeforeunveil",g)};d[1]&&(b.addEventListener("lazybeforeunveil",g),e.onload=i,e.onerror=i,e.srcset="data:,a 1w 1h",e.complete&&i())}}();if(e||(e={},a.lazySizesConfig=e),e.supportsType||(e.supportsType=function(a){return!a}),!a.picturefill&&!e.pf){if(a.HTMLPictureElement&&g)return b.msElementsFromPoint&&i(navigator.userAgent.match(/Edge\/(\d+)/)),void(e.pf=function(){});e.pf=function(b){var c,e;if(!a.picturefill)for(c=0,e=b.elements.length;e>c;c++)d(b.elements[c])},d=function(){var c=function(a,b){return a.w-b.w},f=/^\s*\d+\.*\d*px\s*$/,i=function(a){var b,c,d=a.length,e=a[d-1],f=0;for(f;d>f;f++)if(e=a[f],e.d=e.w/a.w,e.d>=a.d){!e.cached&&(b=a[f-1])&&b.d>a.d-.13*Math.pow(a.d,2.2)&&(c=Math.pow(b.d-.6,1.6),b.cached&&(b.d+=.15*c),b.d+(e.d-a.d)*c>a.d&&(e=b));break}return e},j=function(){var a,b=/(([^,\s].[^\s]+)\s+(\d+)w)/g,c=/\s/,d=function(b,c,d,e){a.push({c:c,u:d,w:1*e})};return function(e){return a=[],e=e.trim(),e.replace(h,"").replace(b,d),a.length||!e||c.test(e)||a.push({c:e,u:e,w:99}),a}}(),k=function(){k.init||(k.init=!0,addEventListener("resize",function(){var a,c=b.getElementsByClassName("lazymatchmedia"),e=function(){var a,b;for(a=0,b=c.length;b>a;a++)d(c[a])};return function(){clearTimeout(a),a=setTimeout(e,66)}}()))},l=function(b,c){var d,f=b.getAttribute("srcset")||b.getAttribute(e.srcsetAttr);!f&&c&&(f=b._lazypolyfill?b._lazypolyfill._set:b.getAttribute(e.srcAttr)||b.getAttribute("src")),b._lazypolyfill&&b._lazypolyfill._set==f||(d=j(f||""),c&&b.parentNode&&(d.isPicture="PICTURE"==b.parentNode.nodeName.toUpperCase(),d.isPicture&&a.matchMedia&&(lazySizes.aC(b,"lazymatchmedia"),k())),d._set=f,Object.defineProperty(b,"_lazypolyfill",{value:d,writable:!0}))},m=function(b){var c=a.devicePixelRatio||1,d=lazySizes.getX&&lazySizes.getX(b);return Math.min(d||c,2.5,c)},n=function(b){return a.matchMedia?(n=function(a){return!a||(matchMedia(a)||{}).matches})(b):!b},o=function(a){var b,d,g,h,j,k,o;if(h=a,l(h,!0),j=h._lazypolyfill,j.isPicture)for(d=0,b=a.parentNode.getElementsByTagName("source"),g=b.length;g>d;d++)if(e.supportsType(b[d].getAttribute("type"),a)&&n(b[d].getAttribute("media"))){h=b[d],l(h),j=h._lazypolyfill;break}return j.length>1?(o=h.getAttribute("sizes")||"",o=f.test(o)&&parseInt(o,10)||lazySizes.gW(a,a.parentNode),j.d=m(a),!j.src||!j.w||j.w<o?(j.w=o,k=i(j.sort(c)),j.src=k):k=j.src):k=j[0],k},p=function(a){if(!g||!a.parentNode||"PICTURE"==a.parentNode.nodeName.toUpperCase()){var b=o(a);b&&b.u&&a._lazypolyfill.cur!=b.u&&(a._lazypolyfill.cur=b.u,b.cached=!0,a.setAttribute(e.srcAttr,b.u),a.setAttribute("src",b.u))}};return p.parse=j,p}(),e.loadedClass&&e.loadingClass&&!function(){var a=[];['img[sizes$="px"][srcset].',"picture > img:not([srcset])."].forEach(function(b){a.push(b+e.loadedClass),a.push(b+e.loadingClass)}),e.pf({elements:b.querySelectorAll(a.join(", "))})}()}}(window,document),function(a){"use strict";var b,c=a.createElement("img");!("srcset"in c)||"sizes"in c||window.HTMLPictureElement||(b=/^picture$/i,a.addEventListener("lazybeforeunveil",function(c){var d,e,f,g,h,i,j;!c.defaultPrevented&&!lazySizesConfig.noIOSFix&&(d=c.target)&&(f=d.getAttribute(lazySizesConfig.srcsetAttr))&&(e=d.parentNode)&&((h=b.test(e.nodeName||""))||(g=d.getAttribute("sizes")||d.getAttribute(lazySizesConfig.sizesAttr)))&&(i=h?e:a.createElement("picture"),d._lazyImgSrc||Object.defineProperty(d,"_lazyImgSrc",{value:a.createElement("source"),writable:!0}),j=d._lazyImgSrc,g&&j.setAttribute("sizes",g),j.setAttribute(lazySizesConfig.srcsetAttr,f),d.setAttribute("data-pfsrcset",f),d.removeAttribute(lazySizesConfig.srcsetAttr),h||(e.insertBefore(i,d),i.appendChild(d)),i.insertBefore(j,d))}))}(document);
/*! lazysizes - v3.0.0 */
!function(){"use strict";if(window.addEventListener){var a=/\s+/g,b=/\s*\|\s+|\s+\|\s*/g,c=/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,d=/\(|\)|'/,e={contain:1,cover:1},f=function(a){var b=lazySizes.gW(a,a.parentNode);return(!a._lazysizesWidth||b>a._lazysizesWidth)&&(a._lazysizesWidth=b),a._lazysizesWidth},g=function(a){var b;return b=(getComputedStyle(a)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!e[b]&&e[a.style.backgroundSize]&&(b=a.style.backgroundSize),b},h=function(d,e,f){var g=document.createElement("picture"),h=e.getAttribute(lazySizesConfig.sizesAttr),i=e.getAttribute("data-ratio"),j=e.getAttribute("data-optimumx");e._lazybgset&&e._lazybgset.parentNode==e&&e.removeChild(e._lazybgset),Object.defineProperty(f,"_lazybgset",{value:e,writable:!0}),Object.defineProperty(e,"_lazybgset",{value:g,writable:!0}),d=d.replace(a," ").split(b),g.style.display="none",f.className=lazySizesConfig.lazyClass,1!=d.length||h||(h="auto"),d.forEach(function(a){var b=document.createElement("source");h&&"auto"!=h&&b.setAttribute("sizes",h),a.match(c)&&(b.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&b.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),g.appendChild(b)}),h&&(f.setAttribute(lazySizesConfig.sizesAttr,h),e.removeAttribute(lazySizesConfig.sizesAttr),e.removeAttribute("sizes")),j&&f.setAttribute("data-optimumx",j),i&&f.setAttribute("data-ratio",i),g.appendChild(f),e.appendChild(g)},i=function(a){if(a.target._lazybgset){var b=a.target,c=b._lazybgset,e=b.currentSrc||b.src;e&&(c.style.backgroundImage="url("+(d.test(e)?JSON.stringify(e):e)+")"),b._lazybgsetLoading&&(lazySizes.fire(c,"_lazyloaded",{},!1,!0),delete b._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(a){var b,c,d;!a.defaultPrevented&&(b=a.target.getAttribute("data-bgset"))&&(d=a.target,c=document.createElement("img"),c.alt="",c._lazybgsetLoading=!0,a.detail.firesLoad=!0,h(b,d,c),setTimeout(function(){lazySizes.loader.unveil(c),lazySizes.rAF(function(){lazySizes.fire(c,"_lazyloaded",{},!0,!0),c.complete&&i({target:c})})}))}),document.addEventListener("load",i,!0),window.addEventListener("lazybeforesizes",function(a){if(a.target._lazybgset&&a.detail.dataAttr){var b=a.target._lazybgset,c=g(b);e[c]&&(a.target._lazysizesParentFit=c,lazySizes.rAF(function(){a.target.setAttribute("data-parent-fit",c),a.target._lazysizesParentFit&&delete a.target._lazysizesParentFit}))}},!0),document.documentElement.addEventListener("lazybeforesizes",function(a){!a.defaultPrevented&&a.target._lazybgset&&(a.detail.width=f(a.target._lazybgset))})}}();


// ==================================================
// fancyBox v3.1.28
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t){var e=t.currentTarget,o=t.data?t.data.options:{},i=o.selector?n(o.selector):t.data?t.data.items:[],a=n(e).attr("data-fancybox")||"",s=0,r=n.fancybox.getInstance();t.preventDefault(),r&&r.current.opts.$orig.is(e)||(a?(i=i.length?i.filter('[data-fancybox="'+a+'"]'):n('[data-fancybox="'+a+'"]'),s=i.index(e),s<0&&(s=0)):i=[e],n.fancybox.open(i,o,s))}if(n){if(n.fn.fancybox)return void n.error("fancyBox already initialized");var a={loop:!1,margin:[44,0],gutter:50,keyboard:!0,arrows:!0,infobar:!1,toolbar:!0,buttons:["slideShow","fullScreen","thumbs","close"],idleTime:4,smallBtn:"auto",protect:!1,modal:!1,image:{preload:"auto"},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar"></div><div class="fancybox-navigation"><button data-fancybox-prev title="" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p><p></div>',btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title=""></button>',fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title=""></button>',thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title=""></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title=""></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title=""></button>'},parentEl:"body",autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4e3},thumbs:{autoStart:!1,hideOnClose:!0},onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},u=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),d=function(){var t,n=e.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(n.style[t]!==o)return i[t]}(),f=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,o,i){var s=this;s.opts=n.extend(!0,{index:i},a,o||{}),o&&n.isArray(o.buttons)&&(s.opts.buttons=o.buttons),s.id=s.opts.id||++c,s.group=[],s.currIndex=parseInt(s.opts.index,10)||0,s.prevIndex=null,s.prevPos=null,s.currPos=0,s.firstRun=null,s.createGroup(t),s.group.length&&(s.$lastFocus=n(e.activeElement).blur(),s.slides={},s.init(t))};n.extend(h.prototype,{init:function(){var t,e,o,i=this,a=i.group[i.currIndex].opts;i.scrollTop=r.scrollTop(),i.scrollLeft=r.scrollLeft(),n.fancybox.getInstance()||n.fancybox.isMobile||"hidden"===n("body").css("overflow")||(t=n("body").width(),n("html").addClass("fancybox-enabled"),t=n("body").width()-t,t>1&&n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: '+t+"px; }</style>")),o="",n.each(a.buttons,function(t,e){o+=a.btnTpl[e]||""}),e=n(i.translate(i,a.baseTpl.replace("",o))).addClass("fancybox-is-hidden").attr("id","fancybox-container-"+i.id).addClass(a.baseClass).data("FancyBox",i).prependTo(a.parentEl),i.$refs={container:e},["bg","inner","infobar","toolbar","stage","caption"].forEach(function(t){i.$refs[t]=e.find(".fancybox-"+t)}),(!a.arrows||i.group.length<2)&&e.find(".fancybox-navigation").remove(),a.infobar||i.$refs.infobar.remove(),a.toolbar||i.$refs.toolbar.remove(),i.trigger("onInit"),i.activate(),i.jumpTo(i.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var i=n[e];return i===o?t:i})},createGroup:function(t){var e=this,i=n.makeArray(t);n.each(i,function(t,i){var a,s,r,c,l={},u={},d=[];n.isPlainObject(i)?(l=i,u=i.opts||i):"object"===n.type(i)&&n(i).length?(a=n(i),d=a.data(),u="options"in d?d.options:{},u="object"===n.type(u)?u:{},l.src="src"in d?d.src:u.src||a.attr("href"),["width","height","thumb","type","filter"].forEach(function(t){t in d&&(u[t]=d[t])}),"srcset"in d&&(u.image={srcset:d.srcset}),u.$orig=a,l.type||l.src||(l.type="inline",l.src=i)):l={type:"html",src:i+""},l.opts=n.extend(!0,{},e.opts,u),n.fancybox.isMobile&&(l.opts=n.extend(!0,{},l.opts,l.opts.mobile)),s=l.type||l.opts.type,r=l.src||"",!s&&r&&(r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":r.match(/\.(pdf)((\?|#).*)?$/i)?s="pdf":"#"===r.charAt(0)&&(s="inline")),l.type=s,l.index=e.group.length,l.opts.$orig&&!l.opts.$orig.length&&delete l.opts.$orig,!l.opts.$thumb&&l.opts.$orig&&(l.opts.$thumb=l.opts.$orig.find("img:first")),l.opts.$thumb&&!l.opts.$thumb.length&&delete l.opts.$thumb,"function"===n.type(l.opts.caption)?l.opts.caption=l.opts.caption.apply(i,[e,l]):"caption"in d&&(l.opts.caption=d.caption),l.opts.caption=l.opts.caption===o?"":l.opts.caption+"","ajax"===s&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),"auto"==l.opts.smallBtn&&(n.inArray(s,["html","inline","ajax"])>-1?(l.opts.toolbar=!1,l.opts.smallBtn=!0):l.opts.smallBtn=!1),"pdf"===s&&(l.type="iframe",l.opts.iframe.preload=!1),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),e.group.push(l)})},addEvents:function(){var o=this;o.removeEvents(),o.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),o.close(t)}).on("click.fb-prev touchend.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),o.previous()}).on("click.fb-next touchend.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),o.next()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?u(function(){o.update()}):(o.$refs.stage.hide(),setTimeout(function(){o.$refs.stage.show(),o.update()},500))}),r.on("focusin.fb",function(t){var i=n.fancybox?n.fancybox.getInstance():null;i.isClosing||!i.current||!i.current.opts.trapFocus||n(t.target).hasClass("fancybox-container")||n(t.target).is(e)||i&&"fixed"!==n(t.target).css("position")&&!i.$refs.container.has(t.target).length&&(t.stopPropagation(),i.focus(),s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))}),r.on("keydown.fb",function(t){var e=o.current,i=t.keyCode||t.which;if(e&&e.opts.keyboard&&!n(t.target).is("input")&&!n(t.target).is("textarea"))return 8===i||27===i?(t.preventDefault(),void o.close(t)):37===i||38===i?(t.preventDefault(),void o.previous()):39===i||40===i?(t.preventDefault(),void o.next()):void o.trigger("afterKeydown",t,i)}),o.group[o.currIndex].opts.idleTime&&(o.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(){o.idleSecondsCounter=0,o.isIdle&&o.showControls(),o.isIdle=!1}),o.idleInterval=t.setInterval(function(){o.idleSecondsCounter++,o.idleSecondsCounter>=o.group[o.currIndex].opts.idleTime&&(o.isIdle=!0,o.idleSecondsCounter=0,o.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("focusin.fb keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e,i){var a,s,r,c,l,u,d,h=this,p=h.group.length;if(!(h.isSliding||h.isClosing||h.isAnimating&&h.firstRun)){if(t=parseInt(t,10),s=h.current?h.current.opts.loop:h.opts.loop,!s&&(t<0||t>=p))return!1;if(a=h.firstRun=null===h.firstRun,!(p<2&&!a&&h.isSliding)){if(c=h.current,h.prevIndex=h.currIndex,h.prevPos=h.currPos,r=h.createSlide(t),p>1&&((s||r.index>0)&&h.createSlide(t-1),(s||r.index<p-1)&&h.createSlide(t+1)),h.current=r,h.currIndex=r.index,h.currPos=r.pos,h.trigger("beforeShow",a),h.updateControls(),u=n.fancybox.getTranslate(r.$slide),r.isMoved=(0!==u.left||0!==u.top)&&!r.$slide.hasClass("fancybox-animated"),r.forcedDuration=o,n.isNumeric(e)?r.forcedDuration=e:e=r.opts[a?"animationDuration":"transitionDuration"],e=parseInt(e,10),a)return r.opts.animationEffect&&e&&h.$refs.container.css("transition-duration",e+"ms"),h.$refs.container.removeClass("fancybox-is-hidden"),f(h.$refs.container),h.$refs.container.addClass("fancybox-is-open"),r.$slide.addClass("fancybox-slide--current"),h.loadSlide(r),void h.preload();n.each(h.slides,function(t,e){n.fancybox.stop(e.$slide)}),r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),r.isMoved?(l=Math.round(r.$slide.width()),n.each(h.slides,function(t,o){var i=o.pos-r.pos;n.fancybox.animate(o.$slide,{top:0,left:i*l+i*o.opts.gutter},e,function(){o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===h.currPos&&(r.isMoved=!1,h.complete())})})):h.$refs.stage.children().removeAttr("style"),r.isLoaded?h.revealContent(r):h.loadSlide(r),h.preload(),c.pos!==r.pos&&(d="fancybox-slide--"+(c.pos>r.pos?"next":"previous"),c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),c.isComplete=!1,e&&(r.isMoved||r.opts.transitionEffect)&&(r.isMoved?c.$slide.addClass(d):(d="fancybox-animated "+d+" fancybox-fx-"+r.opts.transitionEffect,n.fancybox.animate(c.$slide,d,e,function(){c.$slide.removeClass(d).removeAttr("style")}))))}}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,i){var a,s,r,c,l,u=this,d=u.current,f=d.$content,h=parseInt(d.$slide.width(),10),p=parseInt(d.$slide.height(),10),g=d.width,b=d.height;"image"!=d.type||d.hasError||!f||u.isAnimating||(n.fancybox.stop(f),u.isAnimating=!0,t=t===o?.5*h:t,e=e===o?.5*p:e,a=n.fancybox.getTranslate(f),c=g/a.width,l=b/a.height,s=.5*h-.5*g,r=.5*p-.5*b,g>h&&(s=a.left*c-(t*c-t),s>0&&(s=0),s<h-g&&(s=h-g)),b>p&&(r=a.top*l-(e*l-e),r>0&&(r=0),r<p-b&&(r=p-b)),u.updateCursor(g,b),n.fancybox.animate(f,{top:r,left:s,scaleX:c,scaleY:l},i||330,function(){u.isAnimating=!1}),u.SlideShow&&u.SlideShow.isActive&&u.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;"image"!=i.type||i.hasError||!a||o.isAnimating||(n.fancybox.stop(a),o.isAnimating=!0,e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||330,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,r,c=this,l=t.$content,u=t.width,d=t.height,f=t.opts.margin;return!(!l||!l.length||!u&&!d)&&("number"===n.type(f)&&(f=[f,f]),2==f.length&&(f=[f[0],f[1],f[0],f[1]]),s.width()<800&&(f=[0,0,0,0]),e=parseInt(c.$refs.stage.width(),10)-(f[1]+f[3]),o=parseInt(c.$refs.stage.height(),10)-(f[0]+f[2]),i=Math.min(1,e/u,o/d),a=Math.floor(i*u),r=Math.floor(i*d),{top:Math.floor(.5*(o-r))+f[0],left:Math.floor(.5*(e-a))+f[3],width:a,height:r})},update:function(){var t=this;n.each(t.slides,function(e,n){t.updateSlide(n)})},updateSlide:function(t){var e=this,o=t.$content;o&&(t.width||t.height)&&(n.fancybox.stop(o),n.fancybox.setTranslate(o,e.getFitPos(t)),t.pos===e.currPos&&e.updateCursor()),t.$slide.trigger("refresh"),e.trigger("onUpdate",t)},updateCursor:function(t,e){var n,i=this,a=i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");i.current&&!i.isClosing&&(i.isZoomable()?(a.addClass("fancybox-is-zoomable"),n=t!==o&&e!==o?t<i.current.width&&e<i.current.height:i.isScaledDown(),n?a.addClass("fancybox-can-zoomIn"):i.current.opts.touch?a.addClass("fancybox-can-drag"):a.addClass("fancybox-can-zoomOut")):i.current.opts.touch&&a.addClass("fancybox-can-drag"))},isZoomable:function(){var t,e=this,o=e.current;if(o&&!e.isClosing)return!!("image"===o.type&&o.isLoaded&&!o.hasError&&("zoom"===o.opts.clickContent||n.isFunction(o.opts.clickContent)&&"zoom"===o.opts.clickContent(o))&&(t=e.getFitPos(o),o.width>t.width||o.height>t.height))},isScaledDown:function(){var t=this,e=t.current,o=e.$content,i=!1;return o&&(i=n.fancybox.getTranslate(o),i=i.width<e.width||i.height<e.height),i},canPan:function(){var t=this,e=t.current,n=e.$content,o=!1;return n&&(o=t.getFitPos(e),o=Math.abs(n.width()-o.width)>1||Math.abs(n.height()-o.height)>1),o},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){switch(t.isLoading=!0,a.trigger("beforeLoad",t),e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass("fancybox-slide--"+(e||"unknown")).addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(e){var o,i,a,s,r=this,c=e.opts.image.srcset;if(c){a=t.devicePixelRatio||1,s=t.innerWidth*a,i=c.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),i.sort(function(t,e){return t.value-e.value});for(var l=0;l<i.length;l++){var u=i[l];if("w"===u.postfix&&u.value>=s||"x"===u.postfix&&u.value>=a){o=u;break}}!o&&i.length&&(o=i[i.length-1]),o&&(e.src=o.url,e.width&&e.height&&"w"==o.postfix&&(e.height=e.width/e.height*o.value,e.width=o.value))}e.$content=n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide),e.opts.preload!==!1&&e.opts.width&&e.opts.height&&(e.opts.thumb||e.opts.$thumb)?(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("error",function(){n(this).remove(),e.$ghost=null,r.setBigImage(e)}).one("load",function(){r.afterLoad(e),r.setBigImage(e)}).addClass("fancybox-image").appendTo(e.$content).attr("src",e.opts.thumb||e.opts.$thumb.attr("src"))):r.setBigImage(e)},setBigImage:function(t){var e=this,o=n("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){clearTimeout(t.timouts),t.timouts=null,e.isClosing||(t.width=this.naturalWidth,t.height=this.naturalHeight,t.opts.image.srcset&&o.attr("sizes","100vw").attr("srcset",t.opts.image.srcset),e.hideLoading(t),t.$ghost?t.timouts=setTimeout(function(){t.timouts=null,t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))):e.afterLoad(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(o[0].complete||"complete"==o[0].readyState)&&o[0].naturalWidth&&o[0].naturalHeight?o.trigger("load"):o[0].error?o.trigger("error"):t.timouts=setTimeout(function(){o[0].complete||t.hasError||e.showLoading(t)},100)},setIframe:function(t){var e,i=this,a=t.opts.iframe,s=t.$slide;t.$content=n('<div class="fancybox-content'+(a.preload?" fancybox-is-hidden":"")+'"></div>').css(a.css).appendTo(s),e=n(a.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(a.attr).appendTo(t.$content),a.preload?(i.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),i.afterLoad(t)}),s.on("refresh.fb",function(){var n,i,s,r=t.$content,c=a.css.width,l=a.css.height;if(1===e[0].isReady){try{i=e.contents(),s=i.find("body")}catch(t){}s&&s.length&&(c===o&&(n=e[0].contentWindow.document.documentElement.scrollWidth,c=Math.ceil(s.outerWidth(!0)+(r.width()-n)),c+=r.outerWidth()-r.innerWidth()),l===o&&(l=Math.ceil(s.outerHeight(!0)),l+=r.outerHeight()-r.innerHeight()),c&&r.width(c),l&&r.height(l)),r.removeClass("fancybox-is-hidden")}})):this.afterLoad(t),e.attr("src",t.src),t.opts.smallBtn===!0&&t.$content.prepend(i.translate(t,t.opts.btnTpl.smallBtn)),s.one("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank")}catch(t){}n(this).empty(),t.isLoaded=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$slide.empty(),l(e)&&e.parent().length?(e.parent(".fancybox-slide--inline").trigger("onReset"),t.$placeholder=n("<div></div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents(),3===e[0].nodeType&&(e=n("<div>").html(e))),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){t.$placeholder&&(t.$placeholder.after(e.hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1)}),t.$content=n(e).appendTo(t.$slide),t.opts.smallBtn&&!t.$smallBtn&&(t.$smallBtn=n(o.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div").first())),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.removeClass("fancybox-slide--"+t.type),this.setContent(t,this.translate(t,t.opts.errorTpl))},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.opts.spinnerTpl).appendTo(t.$slide))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.revealContent(t))},revealContent:function(t){var e,i,a,s,r,c=this,l=t.$slide,u=!1;return e=t.opts[c.firstRun?"animationEffect":"transitionEffect"],a=t.opts[c.firstRun?"animationDuration":"transitionDuration"],a=parseInt(t.forcedDuration===o?a:t.forcedDuration,10),!t.isMoved&&t.pos===c.currPos&&a||(e=!1),"zoom"!==e||t.pos===c.currPos&&a&&"image"===t.type&&!t.hasError&&(u=c.getThumbPos(t))||(e="fade"),"zoom"===e?(r=c.getFitPos(t),r.scaleX=r.width/u.width,r.scaleY=r.height/u.height,delete r.width,delete r.height,s=t.opts.zoomOpacity,"auto"==s&&(s=Math.abs(t.width/t.height-u.width/u.height)>.1),s&&(u.opacity=.1,r.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),u),f(t.$content),void n.fancybox.animate(t.$content,r,a,function(){c.complete()})):(c.updateSlide(t),e?(n.fancybox.stop(l),i="fancybox-animated fancybox-slide--"+(t.pos>c.prevPos?"next":"previous")+" fancybox-fx-"+e,l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i),t.$content.removeClass("fancybox-is-hidden"),f(l),void n.fancybox.animate(l,"fancybox-slide--current",a,function(e){l.removeClass(i).removeAttr("style"),t.pos===c.currPos&&c.complete()},!0)):(f(l),t.$content.removeClass("fancybox-is-hidden"),void(t.pos===c.currPos&&c.complete())))},getThumbPos:function(o){var i,a=this,s=!1,r=function(e){for(var o,i=e[0],a=i.getBoundingClientRect(),s=[];null!==i.parentElement;)"hidden"!==n(i.parentElement).css("overflow")&&"auto"!==n(i.parentElement).css("overflow")||s.push(i.parentElement.getBoundingClientRect()),i=i.parentElement;return o=s.every(function(t){var e=Math.min(a.right,t.right)-Math.max(a.left,t.left),n=Math.min(a.bottom,t.bottom)-Math.max(a.top,t.top);return e>0&&n>0}),o&&a.bottom>0&&a.right>0&&a.left<n(t).width()&&a.top<n(t).height()},c=o.opts.$thumb,l=c?c.offset():0;return l&&c[0].ownerDocument===e&&r(c)&&(i=a.$refs.stage.offset(),s={top:l.top-i.top+parseFloat(c.css("border-top-width")||0),left:l.left-i.left+parseFloat(c.css("border-left-width")||0),width:c.width(),height:c.height(),scaleX:1,scaleY:1}),s},complete:function(){var t=this,o=t.current,i={};o.isMoved||!o.isLoaded||o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),f(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(t.slides,function(e,o){o.pos>=t.currPos-1&&o.pos<=t.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),t.slides=i,t.updateCursor(),t.trigger("afterShow"),(n(e.activeElement).is("[disabled]")||o.opts.autoFocus&&"image"!=o.type&&"iframe"!==o.type)&&t.focus())},preload:function(){var t,e,n=this;n.group.length<2||(t=n.slides[n.currPos+1],e=n.slides[n.currPos-1],t&&"image"===t.type&&n.loadSlide(t),e&&"image"===e.type&&n.loadSlide(e))},focus:function(){var t,e=this.current;this.isClosing||(e&&e.isComplete&&(t=e.$slide.find("input[autofocus]:enabled:visible:first"),t.length||(t=e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))),t=t&&t.length?t:this.$refs.container,t.focus())},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.uid!==t.uid&&!e.isClosing&&e.trigger("onDeactivate")}),t.current&&(t.$refs.container.index()>0&&t.$refs.container.prependTo(e.body),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l=this,f=l.current,h=function(){l.cleanUp(t)};return!l.isClosing&&(l.isClosing=!0,l.trigger("beforeClose",t)===!1?(l.isClosing=!1,u(function(){l.update()}),!1):(l.removeEvents(),f.timouts&&clearTimeout(f.timouts),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),f.$slide.siblings().trigger("onReset").remove(),i&&l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),l.hideLoading(f),l.hideControls(),l.updateCursor(),"zoom"!==o||t!==!0&&a&&i&&"image"===f.type&&!f.hasError&&(c=l.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),r=n.fancybox.getTranslate(a),r.width=r.width*r.scaleX,r.height=r.height*r.scaleY,s=f.opts.zoomOpacity,"auto"==s&&(s=Math.abs(f.width/f.height-c.width/c.height)>.1),s&&(c.opacity=0),r.scaleX=r.width/c.width,r.scaleY=r.height/c.height,r.width=c.width,r.height=c.height,n.fancybox.setTranslate(f.$content,r),n.fancybox.animate(f.$content,c,i,h),!0):(o&&i?t===!0?setTimeout(h,i):n.fancybox.animate(f.$slide.removeClass("fancybox-slide--current"),"fancybox-animated fancybox-slide--previous fancybox-fx-"+o,i,h):h(),!0)))},cleanUp:function(t){var e,o=this;o.current.$slide.trigger("onReset"),o.$refs.container.empty().remove(),o.trigger("afterClose",t),o.$lastFocus&&o.current.opts.backFocus&&o.$lastFocus.focus(),o.current=null,e=n.fancybox.getInstance(),e?e.activate():(s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft),n("html").removeClass("fancybox-enabled"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;return s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),o===!1?o:void("afterClose"===t?r.trigger(t+".fb",i):a.$refs.container.trigger(t+".fb",i))},updateControls:function(t){var e=this,o=e.current,i=o.index,a=o.opts,s=a.caption,r=e.$refs.caption;o.$slide.trigger("refresh"),e.$caption=s&&s.length?r.html(s):null,e.isHiddenControls||e.showControls(),n("[data-fancybox-count]").html(e.group.length),n("[data-fancybox-index]").html(i+1),n("[data-fancybox-prev]").prop("disabled",!a.loop&&i<=0),n("[data-fancybox-next]").prop("disabled",!a.loop&&i>=e.group.length-1)},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.isHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal),t.$caption?n.addClass("fancybox-show-caption "):n.removeClass("fancybox-show-caption")},toggleControls:function(){this.isHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.1.28",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof h&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new h(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close())},destroy:function(){this.close(!0),r.off("click.fb-start")},isMobile:e.createTouch!==o&&/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;if(!t||!t.length)return!1;if(e=t.eq(0).css("transform"),e&&e.indexOf("matrix")!==-1?(e=e.split("(")[1],e=e.split(")")[0],e=e.split(",")):e=[],e.length)e=e.length>10?[e[13],e[12],e[0],e[5]]:[e[5],e[4],e[0],e[3]],e=e.map(parseFloat);else{e=[0,0,1,1];var n=/\.*translate\((.*)px,(.*)px\)/i,o=n.exec(t.eq(0).attr("style"));o&&(e[0]=parseFloat(o[2]),e[1]=parseFloat(o[1]))}return{top:e[0],left:e[1],scaleX:e[2],scaleY:e[3],opacity:parseFloat(t.css("opacity")),width:t.width(),height:t.height()}},setTranslate:function(t,e){var n="",i={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().left:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(i.transform=n),e.opacity!==o&&(i.opacity=e.opacity),e.width!==o&&(i.width=e.width),e.height!==o&&(i.height=e.height),t.css(i)},animate:function(t,e,i,a,s){var r=d||"transitionend";n.isFunction(i)&&(a=i,i=null),n.isPlainObject(e)||t.removeAttr("style"),t.on(r,function(i){(!i||!i.originalEvent||t.is(i.originalEvent.target)&&"z-index"!=i.originalEvent.propertyName)&&(t.off(r),n.isPlainObject(e)?e.scaleX!==o&&e.scaleY!==o&&(t.css("transition-duration","0ms"),e.width=Math.round(t.width()*e.scaleX),e.height=Math.round(t.height()*e.scaleY),e.scaleX=1,e.scaleY=1,n.fancybox.setTranslate(t,e)):s!==!0&&t.removeClass(e),n.isFunction(a)&&a(i))}),n.isNumeric(i)&&t.css("transition-duration",i+"ms"),n.isPlainObject(e)?n.fancybox.setTranslate(t,e):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger("transitionend")},i+16))},stop:function(t){clearTimeout(t.data("timer")),t.off(d)}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i)}}(window,document,window.jQuery||jQuery),function(t){"use strict";var e=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12])+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};t(document).on("onInit.fb",function(o,i){t.each(i.group,function(o,i){var a,s,r,c,l,u,d,f=i.src||"",h=!1;i.type||(a=t.extend(!0,{},n,i.opts.media),t.each(a,function(n,o){if(r=f.match(o.matcher),u={},d=n,r){if(h=o.type,o.paramPlace&&r[o.paramPlace]){l=r[o.paramPlace],"?"==l[0]&&(l=l.substring(1)),l=l.split("&");for(var a=0;a<l.length;++a){var p=l[a].split("=",2);2==p.length&&(u[p[0]]=decodeURIComponent(p[1].replace(/\+/g," ")))}}return c=t.extend(!0,{},o.params,i.opts[n],u),f="function"===t.type(o.url)?o.url.call(this,r,c,i):e(o.url,r,c),s="function"===t.type(o.thumb)?o.thumb.call(this,r,c,i):e(o.thumb,r),"vimeo"===d&&(f=f.replace("&%23","#")),!1}}),h?(i.src=f,i.type=h,i.opts.thumb||i.opts.$thumb&&i.opts.$thumb.length||(i.opts.thumb=s),"iframe"===h&&(t.extend(!0,i.opts,{
iframe:{preload:!1,attr:{scrolling:"no"}}}),i.contentProvider=d,i.opts.slideClass+=" fancybox-slide--"+("gmap_place"==d||"gmap_search"==d?"map":"video"))):i.type="image")})})}(window.jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is("a,button,input,select,textarea,label")||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},u=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};u.prototype.destroy=function(){this.$container.off(".fb.touch")},u.prototype.ontouchstart=function(o){var i=this,c=n(o.target),u=i.instance,d=u.current,f=d.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),!d||i.instance.isAnimating||i.instance.isClosing)return o.stopPropagation(),void o.preventDefault();if((!o.originalEvent||2!=o.originalEvent.button)&&c.length&&!r(c)&&!r(c.parent())&&!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left)&&(i.startPoints=a(o),i.startPoints&&!(i.startPoints.length>1&&u.isSliding))){if(i.$target=c,i.$content=f,i.canTap=!0,n(e).off(".fb.touch"),n(e).on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")),n(e).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),!u.current.opts.touch&&!u.canPan()||!c.is(i.$stage)&&!i.$stage.find(c).length)return void(c.is("img")&&o.preventDefault());o.stopPropagation(),n.fancybox.isMobile&&(l(i.$target)||l(i.$target.parent()))||o.preventDefault(),i.canvasWidth=Math.round(d.$slide[0].clientWidth),i.canvasHeight=Math.round(d.$slide[0].clientHeight),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.sliderStartPos=i.sliderLastPos||{top:0,left:0},i.contentStartPos=n.fancybox.getTranslate(i.$content),i.contentLastPos=null,1!==i.startPoints.length||i.isZooming||(i.canTap=!u.isSliding,"image"===d.type&&(i.contentStartPos.width>i.canvasWidth+1||i.contentStartPos.height>i.canvasHeight+1)?(n.fancybox.stop(i.$content),i.$content.css("transition-duration","0ms"),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-controls--isGrabbing")),2!==i.startPoints.length||u.isAnimating||d.hasError||"image"!==d.type||!d.isLoaded&&!d.$ghost||(i.isZooming=!0,i.isSwiping=!1,i.isPanning=!1,n.fancybox.stop(i.$content),i.$content.css("transition-duration","0ms"),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))}},u.prototype.ontouchmove=function(t){var e=this;if(e.newPoints=a(t),n.fancybox.isMobile&&(l(e.$target)||l(e.$target.parent())))return t.stopPropagation(),void(e.canTap=!1);if((e.instance.current.opts.touch||e.instance.canPan())&&e.newPoints&&e.newPoints.length&&(e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0)){if(!e.$target.is(e.$stage)&&!e.$stage.find(e.$target).length)return;t.stopPropagation(),t.preventDefault(),e.isSwiping?e.onSwipe():e.isPanning?e.onPan():e.isZooming&&e.onZoom()}},u.prototype.onSwipe=function(){var e,a=this,s=a.isSwiping,r=a.sliderStartPos.left||0;s===!0?Math.abs(a.distance)>10&&(a.canTap=!1,a.instance.group.length<2&&a.instance.opts.touch.vertical?a.isSwiping="y":a.instance.isSliding||a.instance.opts.touch.vertical===!1||"auto"===a.instance.opts.touch.vertical&&n(t).width()>800?a.isSwiping="x":(e=Math.abs(180*Math.atan2(a.distanceY,a.distanceX)/Math.PI),a.isSwiping=e>45&&e<135?"y":"x"),a.instance.isSliding=a.isSwiping,a.startPoints=a.newPoints,n.each(a.instance.slides,function(t,e){n.fancybox.stop(e.$slide),e.$slide.css("transition-duration","0ms"),e.inTransition=!1,e.pos===a.instance.current.pos&&(a.sliderStartPos.left=n.fancybox.getTranslate(e.$slide).left)}),a.instance.SlideShow&&a.instance.SlideShow.isActive&&a.instance.SlideShow.stop()):("x"==s&&(a.distanceX>0&&(a.instance.group.length<2||0===a.instance.current.index&&!a.instance.current.opts.loop)?r+=Math.pow(a.distanceX,.8):a.distanceX<0&&(a.instance.group.length<2||a.instance.current.index===a.instance.group.length-1&&!a.instance.current.opts.loop)?r-=Math.pow(-a.distanceX,.8):r+=a.distanceX),a.sliderLastPos={top:"x"==s?0:a.sliderStartPos.top+a.distanceY,left:r},a.requestId&&(i(a.requestId),a.requestId=null),a.requestId=o(function(){a.sliderLastPos&&(n.each(a.instance.slides,function(t,e){var o=e.pos-a.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:a.sliderLastPos.top,left:a.sliderLastPos.left+o*a.canvasWidth+o*e.opts.gutter})}),a.$container.addClass("fancybox-is-sliding"))}))},u.prototype.onPan=function(){var t,e,a,s=this;s.canTap=!1,t=s.contentStartPos.width>s.canvasWidth?s.contentStartPos.left+s.distanceX:s.contentStartPos.left,e=s.contentStartPos.top+s.distanceY,a=s.limitMovement(t,e,s.contentStartPos.width,s.contentStartPos.height),a.scaleX=s.contentStartPos.scaleX,a.scaleY=s.contentStartPos.scaleY,s.contentLastPos=a,s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){n.fancybox.setTranslate(s.$content,s.contentLastPos)})},u.prototype.limitMovement=function(t,e,n,o){var i,a,s,r,c=this,l=c.canvasWidth,u=c.canvasHeight,d=c.contentStartPos.left,f=c.contentStartPos.top,h=c.distanceX,p=c.distanceY;return i=Math.max(0,.5*l-.5*n),a=Math.max(0,.5*u-.5*o),s=Math.min(l-n,.5*l-.5*n),r=Math.min(u-o,.5*u-.5*o),n>l&&(h>0&&t>i&&(t=i-1+Math.pow(-i+d+h,.8)||0),h<0&&t<s&&(t=s+1-Math.pow(s-d-h,.8)||0)),o>u&&(p>0&&e>a&&(e=a-1+Math.pow(-a+f+p,.8)||0),p<0&&e<r&&(e=r+1-Math.pow(r-f-p,.8)||0)),{top:e,left:t}},u.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},u.prototype.onZoom=function(){var e=this,a=e.contentStartPos.width,r=e.contentStartPos.height,c=e.contentStartPos.left,l=e.contentStartPos.top,u=s(e.newPoints[0],e.newPoints[1]),d=u/e.startDistanceBetweenFingers,f=Math.floor(a*d),h=Math.floor(r*d),p=(a-f)*e.percentageOfImageAtPinchPointX,g=(r-h)*e.percentageOfImageAtPinchPointY,b=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),m=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=b-e.centerPointStartX,v=m-e.centerPointStartY,x=c+(p+y),w=l+(g+v),$={top:w,left:x,scaleX:e.contentStartPos.scaleX*d,scaleY:e.contentStartPos.scaleY*d};e.canTap=!1,e.newWidth=f,e.newHeight=h,e.contentLastPos=$,e.requestId&&(i(e.requestId),e.requestId=null),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},u.prototype.ontouchend=function(t){var o=this,s=Math.max((new Date).getTime()-o.startTime,1),r=o.isSwiping,c=o.isPanning,l=o.isZooming;return o.endPoints=a(t),o.$container.removeClass("fancybox-controls--isGrabbing"),n(e).off(".fb.touch"),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.canTap?o.onTap(t):(o.speed=366,o.velocityX=o.distanceX/s*.5,o.velocityY=o.distanceY/s*.5,o.speedX=Math.max(.5*o.speed,Math.min(1.5*o.speed,1/Math.abs(o.velocityX)*o.speed)),void(c?o.endPanning():l?o.endZooming():o.endSwiping(r)))},u.prototype.endSwiping=function(t){var e=this,o=!1;e.instance.isSliding=!1,e.sliderLastPos=null,"y"==t&&Math.abs(e.distanceY)>50?(n.fancybox.animate(e.instance.current.$slide,{top:e.sliderStartPos.top+e.distanceY+150*e.velocityY,opacity:0},150),o=e.instance.close(!0,300)):"x"==t&&e.distanceX>50&&e.instance.group.length>1?o=e.instance.previous(e.speedX):"x"==t&&e.distanceX<-50&&e.instance.group.length>1&&(o=e.instance.next(e.speedX)),o!==!1||"x"!=t&&"y"!=t||e.instance.jumpTo(e.instance.current.index,150),e.$container.removeClass("fancybox-is-sliding")},u.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(i.instance.current.opts.touch.momentum===!1?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+i.velocityX*i.speed,e=i.contentLastPos.top+i.velocityY*i.speed),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,330))},u.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.setTranslate(a.content,n.fancybox.getTranslate(a.$content)),n.fancybox.animate(a.$content,o,150)))},u.prototype.onTap=function(t){var e,o=this,i=n(t.target),s=o.instance,r=s.current,c=t&&a(t)||o.startPoints,l=c[0]?c[0].x-o.$stage.offset().left:0,u=c[0]?c[0].y-o.$stage.offset().top:0,d=function(e){var i=r.opts[e];if(n.isFunction(i)&&(i=i.apply(s,[r,t])),i)switch(i){case"close":s.close(o.startEvent);break;case"toggleControls":s.toggleControls(!0);break;case"next":s.next();break;case"nextOrClose":s.group.length>1?s.next():s.close(o.startEvent);break;case"zoom":"image"==r.type&&(r.isLoaded||r.$ghost)&&(s.canPan()?s.scaleToFit():s.isScaledDown()?s.scaleToActual(l,u):s.group.length<2&&s.close(o.startEvent))}};if(!(t.originalEvent&&2==t.originalEvent.button||s.isSliding||l>i[0].clientWidth+i.offset().left)){if(i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))e="Outside";else if(i.is(".fancybox-slide"))e="Slide";else{if(!s.current.$content||!s.current.$content.has(t.target).length)return;e="Content"}if(o.tapped){if(clearTimeout(o.tapped),o.tapped=null,Math.abs(l-o.tapX)>50||Math.abs(u-o.tapY)>50||s.isSliding)return this;d("dblclick"+e)}else o.tapX=l,o.tapY=u,r.opts["dblclick"+e]&&r.opts["dblclick"+e]!==r.opts["click"+e]?o.tapped=setTimeout(function(){o.tapped=null,d("click"+e)},300):d("click"+e);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new u(e))}),n(e).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,speed:3e3,init:function(){var t=this;t.$button=t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),(t.instance.group.length<2||!t.instance.group[t.instance.currIndex].opts.slideShow)&&t.$button.hide()},set:function(){var t=this;t.instance&&t.instance.current&&(t.instance.current.opts.loop||t.instance.currIndex<t.instance.group.length-1)?t.timer=setTimeout(function(){t.instance.next()},t.instance.current.opts.slideShow.speed||t.speed):(t.stop(),t.instance.idleSecondsCounter=0,t.instance.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this,e=t.instance.current;t.instance&&e&&(e.opts.loop||e.index<t.instance.group.length-1)&&(t.isActive=!0,t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"),e.isComplete&&t.set())},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,window.jQuery),function(t,e){"use strict";var n=function(){var e,n,o,i=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],a={};for(n=0;n<i.length;n++)if(e=i[n],e&&e[1]in t){for(o=0;o<e.length;o++)a[i[0][o]]=e[o];return a}return!1}();if(!n)return void(e&&e.fancybox&&(e.fancybox.defaults.btnTpl.fullScreen=!1));var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e(t).on({"onInit.fb":function(t,e){var n,i=e.$refs.toolbar.find("[data-fancybox-fullscreen]");e&&!e.FullScreen&&e.group[e.currIndex].opts.fullScreen?(n=e.$refs.container,n.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle(n[0])}),e.opts.fullScreen&&e.opts.fullScreen.autoStart===!0&&o.request(n[0]),e.FullScreen=o):i.hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle(e.$refs.container[0]))},"beforeClose.fb":function(t){t&&t.FullScreen&&o.exit()}}),e(t).on(n.fullscreenchange,function(){var t=e.fancybox.getInstance();t.current&&"image"===t.current.type&&t.isAnimating&&(t.current.$content.css("transition","none"),t.isAnimating=!1,t.update(!0,!0,0)),t.trigger("onFullscreenChange",o.isFullscreen())})}(document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,init:function(){var t=this,e=t.instance.group[0],n=t.instance.group[1];t.$button=t.instance.$refs.toolbar.find("[data-fancybox-thumbs]"),t.instance.group.length>1&&t.instance.group[t.instance.currIndex].opts.thumbs&&("image"==e.type||e.opts.thumb||e.opts.$thumb)&&("image"==n.type||n.opts.thumb||n.opts.$thumb)?(t.$button.on("click",function(){t.toggle()}),t.isActive=!0):(t.$button.hide(),t.isActive=!1)},create:function(){var t,n,o=this.instance;this.$grid=e('<div class="fancybox-thumbs"></div>').appendTo(o.$refs.container),t="<ul>",e.each(o.group,function(e,o){n=o.opts.thumb||(o.opts.$thumb?o.opts.$thumb.attr("src"):null),n||"image"!==o.type||(n=o.src),n&&n.length&&(t+='<li data-index="'+e+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+n+'" /></li>')}),t+="</ul>",this.$list=e(t).appendTo(this.$grid).on("click","li",function(){o.jumpTo(e(this).data("index"))}),this.$list.find("img").hide().one("load",function(){var t,n,o,i,a=e(this).parent().removeClass("fancybox-thumbs-loading"),s=a.outerWidth(),r=a.outerHeight();t=this.naturalWidth||this.width,n=this.naturalHeight||this.height,o=t/s,i=n/r,o>=1&&i>=1&&(o>i?(t/=i,n=r):(t=s,n/=o)),e(this).css({width:Math.floor(t),height:Math.floor(n),"margin-top":Math.min(0,Math.floor(.3*r-.3*n)),"margin-left":Math.min(0,Math.floor(.5*s-.5*t))}).show()}).each(function(){this.src=e(this).data("src")})},focus:function(){this.instance.current&&this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+this.instance.current.index+'"]').addClass("fancybox-thumbs-active").focus()},close:function(){this.$grid.hide()},update:function(){this.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),this.isVisible?(this.$grid||this.create(),this.instance.trigger("onThumbsShow"),this.focus()):this.$grid&&this.instance.trigger("onThumbsHide"),this.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.Thumbs&&(e.Thumbs=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;if(i&&i.isActive){if(n.modal)return i.$button.hide(),void i.hide();o&&n.opts.thumbs.autoStart===!0&&i.show(),i.isVisible&&i.focus()}},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&e.opts.thumbs.hideOnClose!==!1&&n.close()}})}(document,window.jQuery),function(t,e,n){"use strict";function o(){var t=e.location.hash.substr(1),n=t.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return o<1&&(o=1),{hash:t,index:o,gallery:i}}function i(t){var e;""!==t.gallery&&(e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1),e.length||(e=n("#"+n.escapeSelector(t.gallery))),e.length&&(s=!1,e.trigger("click")))}function a(t){var e;return!!t&&(e=t.current?t.current.opts:t.opts,e.hash||(e.$orig?e.$orig.data("fancybox"):""))}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)});var s=!0,r=null,c=null;n(function(){setTimeout(function(){n.fancybox.defaults.hash!==!1&&(n(t).on({"onInit.fb":function(t,e){var n,i;e.group[e.currIndex].opts.hash!==!1&&(n=o(),i=a(e),i&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i){var l;i&&i.opts.hash!==!1&&(l=a(o),l&&""!==l&&(e.location.hash.indexOf(l)<0&&(o.opts.origHash=e.location.hash),r=l+(o.group.length>1?"-"+(i.index+1):""),"replaceState"in e.history?(c&&clearTimeout(c),c=setTimeout(function(){e.history[s?"pushState":"replaceState"]({},t.title,e.location.pathname+e.location.search+"#"+r),c=null,s=!1},300)):e.location.hash=r))},"beforeClose.fb":function(o,i,s){var l,u;c&&clearTimeout(c),s.opts.hash!==!1&&(l=a(i),u=i&&i.opts.origHash?i.opts.origHash:"",l&&""!==l&&("replaceState"in history?e.history.replaceState({},t.title,e.location.pathname+e.location.search+u):(e.location.hash=u,n(e).scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))),r=null)}}),n(e).on("hashchange.fb",function(){var t=o();n.fancybox.getInstance()?!r||r===t.gallery+"-"+t.index||1===t.index&&r==t.gallery||(r=null,n.fancybox.close()):""!==t.gallery&&i(t)}),i(o()))},50)})}(document,window,window.jQuery);

/* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
(function(a){a.fn.prepareTransition=function(){return this.each(function(){var b=a(this);b.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd",function(){b.removeClass("is-transitioning")});var c=["transition-duration","-moz-transition-duration","-webkit-transition-duration","-o-transition-duration"];var d=0;a.each(c,function(a,c){d=parseFloat(b.css(c))||d});if(d!=0){b.addClass("is-transitioning");b[0].offsetWidth}})}})(jQuery);

/* replaceUrlParam - http://stackoverflow.com/questions/7171099/how-to-replace-url-parameter-with-javascript-jquery */
function replaceUrlParam(e,r,a){var n=new RegExp("("+r+"=).*?(&|$)"),c=e;return c=e.search(n)>=0?e.replace(n,"$1"+a+"$2"):c+(c.indexOf("?")>0?"&":"?")+r+"="+a};

/*============================================================================
  Money Format
  - Shopify.format money is defined in option_selection.js.
    If that file is not included, it is redefined here.
==============================================================================*/




if ((typeof Shopify) === 'undefined') { Shopify = {}; }
if (!Shopify.formatMoney) {
  Shopify.formatMoney = function(cents, format) {
    var value = '',
        placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
        formatString = (format || this.money_format);

    if (typeof cents == 'string') {
      cents = cents.replace('.','');
    }

    function defaultOption(opt, def) {
      return (typeof opt == 'undefined' ? def : opt);
    }

    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = defaultOption(precision, 2);
      thousands = defaultOption(thousands, ',');
      decimal   = defaultOption(decimal, '.');

      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number/100.0).toFixed(precision);

      var parts   = number.split('.'),
          dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
          cents   = parts[1] ? (decimal + parts[1]) : '';

      return dollars + cents;
    }

    switch(formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  };
}

// Timber functions
window.timber = window.timber || {};

timber.cacheSelectors = function () {
  timber.cache = {
    // General
    $html                    : $('html'),
    $body                    : $(document.body),

    // Navigation
    $navigation              : $('#AccessibleNav'),
    $mobileSubNavToggle      : $('.mobile-nav__toggle'),


    // Collection Pages
    $changeView              : $('.change-view'),

    // Product Page
    $productImage            : $('#ProductPhotoImg'),
    $thumbImages             : $('#ProductThumbs').find('a.product-single__thumbnail'),

    // Customer Pages
    $recoverPasswordLink     : $('#RecoverPassword'),
    $hideRecoverPasswordLink : $('#HideRecoverPasswordLink'),
    $recoverPasswordForm     : $('#RecoverPasswordForm'),
    $customerLoginForm       : $('#CustomerLoginForm'),
    $passwordResetSuccess    : $('#ResetSuccess')
  };
};

timber.init = function () {
  //FastClick.attach(document.body);
  timber.cacheSelectors();
  //timber.accessibleNav();
  timber.drawersInit();
  timber.mobileNavToggle();
  timber.productImageSwitch();
  timber.responsiveVideos();
  timber.collectionViews();
  timber.loginForms();
  //timber.searchNav();
};

timber.searchNav = function () { 
  var searchDropdown = $('#search-wrapper'),
      headerBG = $('.site-header'),
      searchContainer = $('.search-dropdown');

  var navClose = function(event){
    $(searchContainer).removeClass('searching');
    $(headerBG).removeClass('mega-nav-bg');
    $('.dimSearch').css("display","none");
    $('.dim').css("display","none");
    $('body').unbind('click', navOpen);
  }

  var navOpen = function(event) {
    var $eventTarget = $(event.target);
    if($eventTarget.closest('#search-wrapper').length == 0) {
      if($('.search-dropdown').is(':visible')) {
        navClose();
      }  
    }
  }

  searchDropdown.click(function(event){
    event.stopPropagation();
    $('body').unbind('click', navOpen); //Clear it just in case
    $('.dim').css("display","none");
    $(searchContainer).addClass('searching');
    $('.dimSearch').css("display","block");
    $(headerBG).addClass('mega-nav-bg');

    $("body").click (navOpen);

  });

  $(window).scroll(function(e) {
    if($('.search-dropdown').is(':visible')) {
      $('.dim').css("display","none");
      $('.dimSearch').css("display","block");
      navClose();
    }  
  })

};



timber.drawersInit = function () {
  timber.LeftDrawer = new timber.Drawers('NavDrawer', 'left');
  
  if(typeof ajaxCart !== 'undefined') {
    timber.RightDrawer = new timber.Drawers('CartDrawer', 'right', {
      'onDrawerOpen': ajaxCart.load
    });
  }
  
};

timber.mobileNavToggle = function () {
  timber.cache.$mobileSubNavToggle.on('click', function() {
    $(this).parent().toggleClass('mobile-nav--expanded');
  });
};

timber.getHash = function () {
  return window.location.hash;
};

timber.productPage = function (options) {
  var moneyFormat = options.money_format,
      variant = options.variant,
      selector = options.selector,
      section_id = $('.ProductSection').data('section-id');

  // Selectors
  var $productImage = $('#ProductPhotoImg'),
      $addToCart = $('#AddToCart'),      
      $addToCartDesk = $('#AddToCartDesk'),
      $AddToCartSold = $('#AddToCartSold'),
      $smart = $('.shopify-payment-button'),
      $productPrice = $('#ProductPrice, #ProductPriceMobile'),
      $comparePrice = $('#ComparePrice'),
      $quantityElements = $('.quantity-selector, label + .js-qty'),
      $addToCartText = $('#AddToCartText'),
      $addToCartTextDesk = $('#AddToCartTextDesk');

  if (variant) {
    // Update variant image, if one is set
    if (variant.featured_image) {
      var prodImg = ".ProductImg-" + $('.product-template__container').data('section-id');
      var v_img = $(prodImg + '[data-image-id="' + variant.featured_image.id + '"]');
      var newPosition = v_img.parent().attr('data-slick-index');
      if(newPosition !== undefined) {
        $('.product__slides').slick('slickGoTo', newPosition);
      }
    } 
    var $this = $(this);
    var $option_selected = $this.find('option:selected');
    if($option_selected.data('img-id')) {
        var img_id = $this.find('option:selected').data('img-id');
        var $prod_slider = $details_container.find('.featured-product-slider');
        var newPosition = $prod_slider.find('img[data-fimg-id="' + img_id + '"]').parent().attr('data-slick-index');
        if(newPosition !== undefined) {
          $prod_slider.slick('slickGoTo', newPosition);
        }
      }

    // Select a valid variant if available
    if (variant.available) {
      // Available, enable the submit button, change text, show quantity elements
      $addToCart.removeClass('disabled').prop('disabled', false);
      $smart.show();
      $addToCartDesk.show();
      $AddToCartSold.hide();
      $addToCartText.html("Add to Cart");
      $quantityElements.show();
    } else {
      // Sold out, disable the submit button, change text, hide quantity elements
      $smart.addClass('disabled').prop('disabled', true).hide();
      $addToCart.addClass('disabled').prop('disabled', true);
      $addToCartDesk.hide();
      $addToCartDesk.addClass('disabled').prop('disabled', true);;
      $AddToCartSold.show();
      $AddToCartSold.addClass('disabled').prop('disabled', true);
      $addToCartText.html("Sold Out");
      $addToCartTextDesk.html("Sold Out");
      $quantityElements.hide();
    }

    // Regardless of stock, update the product price
    $productPrice.html( Shopify.formatMoney(variant.price, moneyFormat) );

    // Also update and show the product's compare price if necessary
    if (variant.compare_at_price > variant.price) {
      $comparePrice
      .html("Compare at" + ' ' + Shopify.formatMoney(variant.compare_at_price, moneyFormat))
      .show();
    } else {
      $comparePrice.hide();
    }

  } else {
    // The variant doesn't exist, disable submit button.
    // This may be an error or notice that a specific variant is not available.
    // To only show available variants, implement linked product options:
    //   - http://docs.shopify.com/manual/configuration/store-customization/advanced-navigation/linked-product-options
    $addToCart.addClass('disabled').prop('disabled', true);
    $addToCartText.html("Unavailable");
    $quantityElements.hide();
  }
};

timber.productImageSwitch = function () {
  if (timber.cache.$thumbImages.length) {
    // Switch the main image with one of the thumbnails
    // Note: this does not change the variant selected, just the image
    timber.cache.$thumbImages.on('click', function(evt) {
      evt.preventDefault();
      var newImage = $(this).attr('href');
      
      timber.switchImage(newImage, null, timber.cache.$productImage);
    });
  }
};

timber.switchImage = function (src, imgObject, el) {
  // Make sure element is a jquery object
  var $el = $(el);
  $el.attr('src', src);
};

timber.responsiveVideos = function () {
  var $iframeVideo = $('iframe[src*="youtube.com/embed"], iframe[src*="player.vimeo"]');
  var $iframeReset = $iframeVideo.add('iframe#admin_bar_iframe');

  $iframeVideo.each(function () {
    // Add wrapper to make video responsive
    $(this).wrap('<div class="video-wrapper"></div>');
  });

  $iframeReset.each(function () {
    // Re-set the src attribute on each iframe after page load
    // for Chrome's "incorrect iFrame content on 'back'" bug.
    // https://code.google.com/p/chromium/issues/detail?id=395791
    // Need to specifically target video and admin bar
    this.src = this.src;
  });
};

timber.collectionViews = function () {
  if (timber.cache.$changeView.length) {
    timber.cache.$changeView.on('click', function() {
      var view = $(this).data('view'),
          url = document.URL,
          hasParams = url.indexOf('?') > -1;

      if (hasParams) {
        window.location = replaceUrlParam(url, 'view', view);
      } else {
        window.location = url + '?view=' + view;
      }
    });
  }
};

timber.loginForms = function() {
  function showRecoverPasswordForm() {
    timber.cache.$recoverPasswordForm.show();
    timber.cache.$customerLoginForm.hide();
  }

  function hideRecoverPasswordForm() {
    timber.cache.$recoverPasswordForm.hide();
    timber.cache.$customerLoginForm.show();
  }

  timber.cache.$recoverPasswordLink.on('click', function(evt) {
    evt.preventDefault();
    showRecoverPasswordForm();
  });

  timber.cache.$hideRecoverPasswordLink.on('click', function(evt) {
    evt.preventDefault();
    hideRecoverPasswordForm();
  });

  // Allow deep linking to recover password form
  if (timber.getHash() == '#recover') {
    showRecoverPasswordForm();
  }
};

timber.resetPasswordSuccess = function() {
  timber.cache.$passwordResetSuccess.show();
};

/*============================================================================
  Drawer modules
  - Docs http://shopify.github.io/Timber/#drawers
==============================================================================*/
timber.Drawers = (function () {
  var Drawer = function (id, position, options) {
    var defaults = {
      close: '.js-drawer-close',
      open: '.js-drawer-open-' + position,
      openClass: 'js-drawer-open',
      dirOpenClass: 'js-drawer-open-bottom'
    };

    this.$nodes = {
      parent: $('body, html'),
      page: $('#PageContainer'),
      moved: $('.is-moved-by-drawer')
    };

    this.config = $.extend(defaults, options);
    this.position = position;

    this.$drawer = $('#' + id);

    if (!this.$drawer.length) {
      return false;
    }

    this.drawerIsOpen = $('html').hasClass('js-drawer-open');
    //this.drawerIsOpen = false;
    this.init();
  };

  Drawer.prototype.init = function () {
    //Clear events just in case this is a re-init
    $('.js-drawer-open-left').off('click');
    this.$drawer.find(this.config.close).off('click');
    //Set the events
    $('.js-drawer-open-left').on('click', $.proxy(this.open, this));
    this.$drawer.find(this.config.close).on('click', $.proxy(this.close, this));
  };

  Drawer.prototype.open = function (evt) {
    // Keep track if drawer was opened from a click, or called by another function
    var externalCall = false;

    // Prevent following href if link is clicked
    if (evt) {
      evt.preventDefault();
    } else {
      externalCall = true;
    }

    // Without this, the drawer opens, the click event bubbles up to $nodes.page
    // which closes the drawer.
    if (evt && evt.stopPropagation) {
      evt.stopPropagation();
      // save the source of the click, we'll focus to this on close
      this.$activeSource = $(evt.currentTarget);
    }

    if (this.drawerIsOpen && !externalCall) {
      return this.close();
    }

    // Notify the drawer is going to open
    timber.cache.$body.trigger('beforeDrawerOpen.timber', this);

    // Run function when draw opens if set
    if (this.config.onDrawerOpen && typeof(this.config.onDrawerOpen) == 'function') {
      if (!externalCall) {
        this.config.onDrawerOpen();
      }
    }

    if (this.$activeSource && this.$activeSource.attr('aria-expanded')) {
      this.$activeSource.attr('aria-expanded', 'true');
    }

    // Lock scrolling on mobile
    this.$nodes.page.on('touchmove.drawer', function () {
      return false;
    });

    this.$nodes.page.on('click.drawer', $.proxy(function () {
      this.close();
      return false;
    }, this));

    // Set focus on drawer
    this.trapFocus(this.$drawer, 'drawer_focus');

    // Add is-transitioning class to moved elements on open so drawer can have
    // transition for close animation
    this.$nodes.moved.addClass('is-transitioning');
    this.$drawer.prepareTransition();

    this.$nodes.parent.addClass(this.config.openClass + ' ' + this.config.dirOpenClass);
    this.drawerIsOpen = true;

    // Notify the drawer has opened
    timber.cache.$body.trigger('afterDrawerOpen.timber', this);
  };

  Drawer.prototype.close = function () {
    if (!this.drawerIsOpen) { // don't close a closed drawer
      return;
    }

    // Notify the drawer is going to close
    timber.cache.$body.trigger('beforeDrawerClose.timber', this);

    // deselect any focused form elements
    $(document.activeElement).trigger('blur');

    // Ensure closing transition is applied to moved elements, like the nav
    this.$nodes.moved.prepareTransition({ disableExisting: true });
    this.$drawer.prepareTransition({ disableExisting: true });

    this.$nodes.parent.removeClass(this.config.dirOpenClass + ' ' + this.config.openClass);

    this.drawerIsOpen = false;

    // Remove focus on drawer
    this.removeTrapFocus(this.$drawer, 'drawer_focus');

    this.$nodes.page.off('.drawer');

    // Notify the drawer is closed now
    timber.cache.$body.trigger('afterDrawerClose.timber', this);
  };

  Drawer.prototype.trapFocus = function ($container, eventNamespace) {
    var eventName = eventNamespace ? 'focusin.' + eventNamespace : 'focusin';

    $container.attr('tabindex', '-1');

    $container.focus();

    $(document).on(eventName, function (evt) {
      if ($container[0] !== evt.target && !$container.has(evt.target).length) {
        $container.focus();
      }
    });
  };

  Drawer.prototype.removeTrapFocus = function ($container, eventNamespace) {
    var eventName = eventNamespace ? 'focusin.' + eventNamespace : 'focusin';

    $container.removeAttr('tabindex');
    $(document).off(eventName);
  };

  return Drawer;
})();


// Initialize Timber's JS on docready
$(timber.init);



var theme = window.theme || theme || {} ;

theme.Utilities = (function () {
	function Utilities() { }

	Utilities.prototype = {
		runAtNewDocHeight: function(func, timesPerSecond, seconds) {
			var startHeight = $(document).height();
			var repeatRate = 1000 / (timesPerSecond || 5);
			var maxRepeat = (timesPerSecond || 5) * (seconds || 5);
			this._counter = 0;
			this._doRunAtNewDocHeight(this, func, startHeight, repeatRate, maxRepeat);
		},
		_doRunAtNewDocHeight: function(self, func, startHeight, repeatRate, maxRepeat) {
			if(startHeight != $(document).height()) {
				clearTimeout(this._docHeightTimeout);
				func();
			} else {
				this._counter += 1;
				if(this._counter < maxRepeat) {
					this._docHeightTimeout = setTimeout(function() {
						self._doRunAtNewDocHeight(self, func, startHeight, repeatRate, maxRepeat);
					}, repeatRate);
				}
			}
		},
		runAfterStoppedScrolling: function(func, timesPerSecond, seconds) {
			var startTop = $(window).scrollTop();
			this._counter = 0;
			var repeatRate = 1000 / (timesPerSecond || 5);
			var maxRepeat = (timesPerSecond || 5) * (seconds || 5);
			this._doRunAfterStoppedScrolling(this, func, startTop, repeatRate, maxRepeat);
		},
		_doRunAfterStoppedScrolling: function(self, func, prevTop, repeatRate, maxRepeat) {
			var currTop = $(window).scrollTop();
			if(prevTop == currTop) {
				clearTimeout(this._docScrollTimeout);
				func();
			} else {
				this._counter += 1;
				prevTop = currTop;
				if(this._counter < maxRepeat) {
					this._docScrollTimeout = setTimeout(function() {
						self._doRunAfterStoppedScrolling(self, func, prevTop, repeatRate, maxRepeat);
					}, repeatRate);
				}
			}
		}
	}

	return new Utilities();
}());



/*
    theme.AjaxCart
    Performs ajax calls to Shopify.
*/
theme.AjaxCart = (function () {
    return {
        /***** Public Properties *****/
        // Custom event types. NOTE: Events are tied to the
        // document's body.
        eventStrs: {
            addToCartSuccess: 'theme:ajaxCart:addSuccess',
            addToCartError: 'theme:ajaxCart:addError',
            updateCartSuccess: 'theme:ajaxCart:updateSuccess',
            updateCartError: 'theme:ajaxCart:updateError',
            getCartSuccess: 'theme:ajaxCart:getCartSuccess',
            getCartError: 'theme:ajaxCart:getCartError'
        },
        /***** Public Methods *****/
        /*
            =function addToCart(variantId, qty)
            Adds qty amount of the variant that has the passed in ID
            to the cart. Also adds line properties if any are available.
            Triggers an add to cart success or error event when done.
            =Params
            (int) variantId: The ID of the variant to add
            (int) qty: The amount of the variant to add
            (jQuery object) properties: The line properties for the product
        */
        addToCart: function (variantId, qty, properties) {
            var self = this;
            var data = {
                id: variantId,
                quantity: qty
            };
            //Only do this code if we have properties to use
            if(properties && !$.isEmptyObject(properties)) {
                data["properties"] = properties;
            }
            //Perform the AJAX call
            this._doAjax('/cart/add.js', data, 
            function(resultObj) {
                $('body').trigger(self.eventStrs.addToCartSuccess);
            }, function(resultObj) {
                $('body').trigger(self.eventStrs.addToCartError);
            });
        },
        /*
            =function updateCart(cartStr)
            Updates the cart to reflect the passed in string. Triggers an
            update cart succes or error event when done.
            =Params
            (string) cartStr: The string that the cart should reflect
        */
        updateCart: function(cartStr) {
            var self = this;
            this._doAjax('/cart/update.js', cartStr, function(resultObj) {
                $('body').trigger(self.eventStrs.updateCartSuccess, [resultObj]);
            }, function(resultObj) {
                $('body').trigger(self.eventStrs.updateCartError, [resultObj]);
            });
        },
        /*
            =function getCartData()
            Gets the cart object from Shopify. Triggers a get cart
            data succes or error event when done.
        */
        getCartData: function() {
            var self = this;
            this._doAjax('/cart.js', null, function(cart) {
                $('body').trigger(self.eventStrs.getCartSuccess, [cart]);
            }, function(cart) {
                $('body').trigger(self.eventStrs.getCartError, [cart]);
            });
        },
        
        /***** Private Methods *****/
        /*
            =function _doAjax(url, data, successFunc, errorFunc)
            Performs an ajax call using the passed in information
            =Params
            (string) url: The URL to post to
            (object) data: The data to post
            (function) successFunc: (optional) The function to call on
                                    success
            (function) errorFunc: (optional) The function to call on
                                  error
        */
        _doAjax: function (url, data, successFunc, errorFunc) {
            var self = this;
            $.ajax({
                type: 'POST',
                url: url,
                data: data,
                dataType: 'json',
                success: function(resultObj) {
                    if($.isFunction(successFunc)) {
                        successFunc(resultObj);
                    }
                },
                error: function(resultObj) {
                    if($.isFunction(errorFunc)) {
                        errorFunc(resultObj);
                    }
                }
            });
        }
    };
}());


/*
    theme.Currency
    Modified version of theme.Currency provided by Shopify's
    Slate framework. Adjusts include:
      -changes how the code is made available
      -"var moneyFormat" modified to be accessible so it can
       be adjusted as needed
      -fixes a bug around setting a default "precision" value
    
*/
theme.Currency = (function () {
    return {
        moneyFormat: '${{amount}}',
        formatMoney: function (cents, format) {
            if (typeof cents === 'string') {
                cents = cents.replace('.', '');
            }
            var value = '';
            var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
            var formatString = (format || this.moneyFormat);

            function formatWithDelimiters(number, precision, thousands, decimal) {
                precision = precision === undefined ? 2 : precision;
                thousands = thousands || ',';
                decimal = decimal || '.';

                if (isNaN(number) || number == null) {
                    return 0;
                }

                number = (number / 100.0).toFixed(precision);

                var parts = number.split('.');
                var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
                var centsAmount = parts[1] ? (decimal + parts[1]) : '';

                return dollarsAmount + centsAmount;
            }

            switch (formatString.match(placeholderRegex)[1]) {
                case 'amount':
                    value = formatWithDelimiters(cents, 2);
                    break;
                case 'amount_no_decimals':
                    value = formatWithDelimiters(cents, 0);
                    break;
                case 'amount_with_comma_separator':
                    value = formatWithDelimiters(cents, 2, '.', ',');
                    break;
                case 'amount_no_decimals_with_comma_separator':
                    value = formatWithDelimiters(cents, 0, '.', ',');
                    break;
                case 'amount_no_decimals_with_space_separator':
                    value = formatWithDelimiters(cents, 0, ' ');
                    break;
            }

            return formatString.replace(placeholderRegex, value);
        }
    };
})();


/*
    theme.Variants
    
    Contains all the methods needed to initialize variant
    controls, which includes changing the variant and
    changing the quantity that will be added to the cart.
    
    =Requirements
      *The quantity field and plus and minus buttons should be
       within some targetable container set in qtyContainer
      *When there are multiple options, the select element
       for each option MUST have a selector that ends with the
       0 index of that option. For instance,
           <select id="productSelect-op1" ...>
           <select id="productSelect-op2" ...>
           <select id="productSelect-op3" ...>
       or
           <select class="prod-option1" ...>
           <select class="prod-option2" ...>
           <select class="prod-option3" ...>
    
    Related directly to:
    /snippets/variant-qty-controls.liquid
    /snippets/variant-selects.liquid
*/
theme.Variants = (function () {
    return {
        /***** Public Properties *****/
        // Custom event types. NOTE: Events are tied to the
        // section's container (selector: [data-section-id])
        eventStrs: {
            onQtyChanged: 'theme:variants:qtyChanged',
            onVariantChanged: 'theme:variants:changed'
        },
        /***** Private Properties *****/
        //Selectors used for jQuery targeting
        _selectors: {
            //Variant Selection
            multiOpRealProdSelect: '#actualProdSelect',
            multiOpAllSelects: '.multiop-select',
            multiOpSelect: '#productSelect-op',
            prodSelect: '#productSelect',
            smart: '.shopify-payment-button',
            //Quantity Controls
            qtyContainer: '#quantity-container',
            qtyField: '#quantity',
            qtyMinus: '#quantity-minus',
            qtyPlus: '#quantity-plus'
        },
        
        /***** Public Methods *****/
        /*
            =function init(container)
            Initializes the select events for the variation dropdowns.
            Automatically determines whether to initialize a multi-option
            select or single-option based on id based selectors.
            =Params
            (mixed) container: Value can be a jQuery selector string, jQuery
                               object, or element. The value should return the
                               container that may have variant select(s) when
                               passed to jQuery.
            (bool) initControls: (optional) If true, the quantity controls will
                                 be initialized.
        */
        init: function (container, initControls) {
            var self = this;
            var $container = $(container);
            var $swatch = $('.variant-group').data('swatch');
            // Check to see if the hidden select exists for multi-option. If it does,
            // init the multi-option selects. Otherwise, init single-option.
            var $select = $container.find(self._selectors.multiOpRealProdSelect);
            if ($select.length > 0) {
				self._initMultiOpSelect($container, $container.find(self._determineAllSelectorFromStr(self._selectors.multiOpAllSelects)));
				
            } else {
                self._initSingleOpSelect($container, $container.find(self._selectors.prodSelect));
            }
            if(initControls) {
                self.initQtyControls($container);
            }
			jQuery('.variant-group-multiple .swatch :radio').change(function() {
			    jQuery(this).closest('.swatch').find('.swatch-element.selected').removeClass('.selected');
			    var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
			    var optionValue = jQuery(this).val();

				$(this).closest('.swatch-element').addClass('selected')

			    jQuery(this)
			      .closest('form')
			      .eq(optionIndex)
			      .val(optionValue)
			      .trigger('change');
			  });


        },
        /*
            =function initQtyControls(container)
            Initializes the events that control quantity changes
            =Params
            (mixed) container: Value can be a jQuery selector string, jQuery
                               object, or element. The value should return the
                               container that may have the quantity controls
                               when passed to jQuery
        */
        initQtyControls: function (container) {
            var self = this;
            var $container = $(container);
            //Init the plus button click event
            $container.find(this._selectors.qtyPlus).click(function (e) {
                e.preventDefault();
                self._adjustQty($(self._selectors.qtyField, $(this).closest(self._selectors.qtyContainer)), 1);
            });
            //Init the minus button click event
            $container.find(this._selectors.qtyMinus).click(function (e) {
                e.preventDefault();
                self._adjustQty($(self._selectors.qtyField, $(this).closest(self._selectors.qtyContainer)), -1);
            });
            //Init the change event for the quantity number field
            $container.find(this._selectors.qtyField).change(function (e) {
                e.preventDefault();
                self._adjustQty($(this), 0);
            });
        },
        /*
            =function getSelectedVariant(container)
            Convenience function that will return the currently selected variant
            within the provided container. Automatically determines whether to
            check against a multi-option or single-option select. If neither are valid,
            it will return whatever input has name="id".
            =Params
            (mixed) container: Value can be a jQuery selector string, jQuery
                               object, or element. The value should return the
                               container(s) that may have variant select(s) when
                               passed to jQuery
        */
        getSelectedVariant: function (container) {
            // Check to see if the hidden select exists for multi-option. If it does,
            // return it's current selection
            var $select = $(this._selectors.multiOpRealProdSelect, container);
            if ($select.length > 0) {
            		 if($select.find('option').length > 0){
               			 return $select.find('option:selected');
		            }else{
		            	 return $select.find('input:checked');
		            }
            } else {
                // If it doesn't, return the single-option's selection
                $select = $(this._selectors.prodSelect);
                if ($select.length > 0) {
                	 if($select.find('option').length > 0){
               			 return $select.find('option:selected');
		            }else{
		            	 return $select.find('input:checked');
		            }
                } else {
                    // If neither exist, return the default input used in forms
                    return $('input[name="id"]');
                }
            }
        },
        /*
            =function getVariantQuantity(container)
            Gets the current quantity from the quantity field. Returns 1 if
            none can be found.
            =Params
            (mixed) container: Value can be a jQuery selector string, jQuery
                               object, or element. The value should return the
                               container(s) that may have variant select(s) when
                               passed to jQuery
        */
        getVariantQuantity: function(container) {
            var $qtyField = $(this._selectors.qtyField, container);
            if($qtyField.length > 0) {
                return parseInt($qtyField.val());
            } else {
                return 1;
            }
        },
        /*
            =function gatherQuantityFields(container)
            Returns all the quantity fields found within the container
            =Params
            (mixed) container: Value can be a jQuery selector string, jQuery
                               object, or element. The value should return the
                               container(s) that may have variant select(s) when
                               passed to jQuery
        */
        gatherQuantityFields: function(container) {
            return $(this._determineAllSelectorFromStr(this._selectors.qtyField), container);
        },
        /*
            =function enableControl($control)
            Enables the passed in control
            =Params
            (jQuery) $control: The control to enable
        */
        enableControl: function($control) {
            $control.prop('disabled', false);
        },
        /*
            =function disableControl($control)
            Disables the passed in control
            =Params
            (jQuery) $control: The control to disable
        */
        disableControl: function($control) {
            $control.prop('disabled', true);
        },
        /*
            =function enableAllControls()
            Enables ALL quantity controls on the page
        */
        enableAllControls: function() {
            var self = this;
            var selector = self._determineAllSelectorFromStr(this._selectors.qtyContainer);
            $(selector).each(function() {
                var $this = $(this);
                self._performOnQtyControls($this, self.enableControl);
            });
        },
        /*
            =function disableAllControls()
            Disables ALL quantity controls on the page
        */
        disableAllControls: function() {
            var self = this;
            var selector = self._determineAllSelectorFromStr(this._selectors.qtyContainer);
            $(selector).each(function() {
                var $this = $(this);
                self._performOnQtyControls($this, self.disableControl);
            });
        },
        
        /***** Private Methods *****/
        /*
            =function _initSingleOpSelect($select)
            Initializes the single-option variant select
            =Params
            (jQuery) $select: The single-option select
        */
        _initSingleOpSelect: function ($container, $select) {
            var self = this;
            $select.change(function (evt) {
                var $this = $(this);
	            if($this.find('option').length > 0){
	                self._fireChangeEvent($container, self._getBaseVariantObj($this.find('option:selected')));
	            }else{
	            	 self._fireChangeEvent($container, self._getBaseVariantObj($this.find('input:checked')));
	            }
            });
        },
        /*
            =function _initMultiOpSelect($container, $select)
            Initializes the single-option variant select
            =Params
            (jQuery) $container: The container housing the select 
            (jQuery) $select: The multi-option select
        */
        _initMultiOpSelect: function ($container, $select) {
            var self = this;
            var selectLen = $select.length;
            var $swatch = $('.variant-group').data('swatch');
            $select.change(function () {
                var $this = $(this);
                //Get the option string from the selected options
                var opId = '';
                for (var i = 0; i < selectLen; ++i) {
                    var $currSelect = $container.find(self._selectors.multiOpSelect + i);
                    if ($currSelect.length > 0) {
                        if (i > 0) {
                            opId += ' / ';
                        }
                        if ($swatch){
	                        opId += $currSelect.find('input:checked').val();

	                    }else{
	                    	opId += $currSelect.find('option:selected').val();

	                    }
	                }
                }
                //Properly escape quotes to keep selector string from breaking
                opId = opId.replace(/"/g, '\\"');
                opId = opId.replace("\'", "\\'");
                //Get the real variant select
                var $actualSelector = $container.find(self._selectors.multiOpRealProdSelect);
                //In that select find the option that matches the option string
                var $selection = $actualSelector.find('option[data-opid="' + opId + '"]');
                if($selection.length > 0) {
                    //Update the real variant select's value to the correct value
                    $actualSelector.val($selection.val());
                    //Prepare and fire the change event
                    var variantObj = self._getBaseVariantObj($selection);
                    variantObj.options = opId;
                    self._fireChangeEvent($container, variantObj);
                } else {
                    self._fireChangeEvent($container, null);
                }
            });
        },

        /*
            =function _adjustQty($qtyField, offset)
            Adjusts the quantity by offset in the $qtyField and keeps it
            within at or above the minimum
            =Params
            (jQuery) $qtyField: The input that is storing the quantity
            (int) offset: The amount to adjust the quantity by
        */
        _adjustQty: function($qtyInput, offset) {
            var currentVal = parseInt($qtyInput.val());
            var min = $qtyInput.attr('min');
            if (isNaN(currentVal)) {
                //If the value is somehow invalid, set it to the min
                $qtyInput.val(min);
                this._fireQtyChangeEvent(min);
            } else {
                //Add the offset and if it it below the minimum, set to min
                currentVal += offset;
                if(currentVal < min) {
                    currentVal = min;
                }
                //Update the number input with the new quantity
                $qtyInput.val(currentVal);
                this._fireQtyChangeEvent($qtyInput.mySection(), currentVal);
            }
        },
        /*
            =function _determineAllSelectorFromStr(str)
            If we need to select ALL of a selector, and if it is an ID selector,
            we cannot simply pass it in as jQuery will return only the first
            object found. This function will alter the selector to return
            all elements with the same ID. If it is not an ID, it returns str
            =Params
            (string) str: The selector to check
        */
        _determineAllSelectorFromStr: function(str) {
            if(str[0] == '#') {
                return '[id="' + str.substring(1) + '"]';
            } else {
                return str;
            }
        },
        /*
            =function _performOnQtyControls($container, func)
            Will find the 3 quantity controls within the container and
            then pass them into the passed in function "func"
            =Params
            (jQuery) $container: The container that has the quantity controls
            (function) func: The function to pass the controls into
        */
        _performOnQtyControls: function($container, func) {
            func($container.find(this._selectors.qtyMinus));
            func($container.find(this._selectors.qtyField))
            func($container.find(this._selectors.qtyPlus))
        },
        /*
            =function _getBaseVariantObj($selection)
            Creates and returns an object containing the base information on
            the passed in selection. Object is used in variant change events
            =Params
            (jQuery) $selection: The selected variant
        */
        _getBaseVariantObj: function ($selection) {
            return {
                available: !$selection.data('unavailable'),
                compareAtPrice: $selection.data('compare-price'),
                id: $selection.val(),
                imageId: $selection.data('img-id'),
                price: $selection.data('base-price'),
                sku: $selection.data('sku'),
                title: $selection.data('title')
            };
        },
        /*
            =function _fireChangeEvent($container, variantObj)
            Fires the custom event on the element's section for variant select change.
            =Params
            (jQuery) $container: The container to trigger the event on
            (obj) variantObj: Object containing the selected variant's data to
                              be passed to the event
        */
        _fireChangeEvent: function ($container, variantObj) {
            $container.trigger(this.eventStrs.onVariantChanged, [variantObj]);
        },
        /*
            =function _fireQtyChangeEvent(newQty)
            Fires the custom event on the element's section for quantity change.
            =Params
            (jQuery) $container:  The container to trigger the event on
            (int) newQty: The new quantity
        */
        _fireQtyChangeEvent: function ($container, newQty) {
            $container.trigger(this.eventStrs.onQtyChanged, [newQty]);
        }
    };
}());


theme.Filters = (function () {
    var constants = {
        SORT_BY: 'sort_by'
    };
    var selectors = {
        filterSelection: '.coll-filter',
        sortSelection: '#SortBy',
        defaultSort: '#default-sort-by'
    };

    function Filters(container) {
        var $container = this.$container = $(container);

        Shopify.queryParams = {};
        if (location.search.length) {
            var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&');
            for (; i < aCouples.length; i++) {
              aKeyValue = aCouples[i].split('=');
              if (aKeyValue.length > 1) {
                Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
              }
            }
        }
        this.$filterSelect = $(selectors.filterSelection, $container);
        this.$sortSelect = $(selectors.sortSelection, $container);

        this.$filterSelect.on('change', this._onFilterChange.bind(this));
        this.$sortSelect.on('change', this._onSortChange);
    }

    Filters.prototype = {
        _onSortChange: function (evt) {
            Shopify.queryParams.sort_by = jQuery(this).val();
            location.search = jQuery.param(Shopify.queryParams);
        },
        _onFilterChange: function (evt) {
            var newTags = [];
            this.$filterSelect.each(function() {
                if (jQuery(this).val()) {
                    newTags.push(jQuery(this).val());
                }
            });
            var query = newTags.join('+');
            window.location.href = '/collections/' + this.$filterSelect.data('handle') + '/' + query;
        }
    };

    return Filters;
})();


/*
theme.Site

Initializes and provides site-wide functionality.
*/
theme.Site = (function () {
return {
    /***** Public Methods *****/
    /*
        =function init()
        Initializes all site-wide functionality.
    */
    init: function () {
        this._initScrollFixed();
        this._initPlugins();
        this._extendjQuery();
        this.Newsletter.init();
    },
    
    /***** Private Methods *****/
    /*
        =function _initPlugins()
        Initializes the plugins used site-wide.
    */
    _initPlugins: function() {
        //Headroom init
        $('#header').headroom();
        //Owl Carousel init
        $('.owl-carousel').owlCarousel();
        if(navigator.appVersion.indexOf("MSIE 9.") === -1) {
            //Scroll Reveal init
            window.sr = ScrollReveal();
            sr.reveal('.home-reveal');
        }
    },
    /*
        =function _initScrollFixed()
        Initializes scrolling fix.
    */
    _initScrollFixed: function() {
        var scrollFixedSelector = '.scroll_fixed';
        if ($(scrollFixedSelector).offset()) {
            var leftInit = $(scrollFixedSelector).offset().left,
                top = $(scrollFixedSelector).offset().top - parseFloat($(scrollFixedSelector).css('margin-top').replace(/auto/, 0));

            $(window).scroll(function (event) {
                var x = 0 - $(this).scrollLeft();
                var y = $(this).scrollTop();

                // whether that's below the form
                if (y >= top) {
                    // if so, ad the fixed class
                    $(scrollFixedSelector).addClass('fixed');
                } else {
                    // otherwise remove it
                    $(scrollFixedSelector).removeClass('fixed');
                }

                $(this.selectors.scrollFixed).offset({
                    left: x + leftInit
                });
            });
        }
    },
    /*
        =function _extendjQuery()
        Extends the jQuery object with custom functions to
        give additional functionality.
    */
    _extendjQuery: function () {
        $.fn.extend({
            /* 
                =function mySection()
                Returns the section's container that the calling element
                is in.
            */
            mySection: function () {
                return this.closest('[data-section-id]');
            },
            /* 
                =function animateCss(animationName, callBack)
                Convenience function for adding animate.css animations. Will
                cause the passed in animation to start on the calling element.
                =Params
                    (string) animationName: The animation to start
                    (function) onEndCallback: (optional) The function to call when
                                              the animation is over
            */
            animateCss: function (animationName, onEndCallback) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass('animated ' + animationName);
                    if ($.isFunction(onEndCallback)) {
                        onEndCallback.apply(this);
                    }
                });
            }
        });
    },

    /*
        theme.Site.Newsletter
        
        Controls the display of the newsletter modal
        and also controls the cookie used to prompt
        the user for signing up for the newsletter.
    */
    Newsletter: {
        /***** Private Properties *****/
        //Selectors used for jQuery targeting of the modals
        _modalSelectors: {
            container: '.tbm_modal-container',
            rightCol: '.tbm_modal-right-col',
            leftCol: '.tbm_modal-left-col',
            closeClickables: '.tbm_modal-close, .tbm_modal-clickable'
        },
        //Cookie indentifier
        _loftModalNewsletterCookie: '__loft_modal-newsletter-cookie',
        _bodyClickHandler: null,
        /***** Public Methods *****/
        /*
            =function init()
            Determines whether to display the modal based on the user's
            cookies for the site's newsletter. Also initializes the
            sizing and click events events. Will open the modal if
            needed.
        */
        init: function () {
        var self = this;
            //Set up the cookies
            if (cookieExpires == '-1') {
                Cookies.remove(self._loftModalNewsletterCookie, {
                    path: ''
                });
            }
            // set cookie, show popup
            if (Cookies.get(self._loftModalNewsletterCookie) != '-1') {
                setTimeout(function () {
                    self._resize();
                    $(self._modalSelectors.container).fadeIn(600);
                    self._resize();

                }, cookieModalDelay);
                Cookies.set(self._loftModalNewsletterCookie, '-1', {
                    expires: cookieExpireSet
                });
                _bodyClickHandler = function(e) {
                    if($(e.target).closest(self._modalSelectors.container).length > 0) {
                        self._closeModal();
                    }
                };
                $('body').click();
            }
            //Resize to fit the current screen
            self._resize();
            //Setup events
            $(self._modalSelectors.closeClickables).click(function () {
                self._closeModal();
                $('body').off('click', self._bodyClickHandler);
            });
            $(window).resize(function () {
                self._resize();
            });
        },
        
        /***** Private Methods *****/
        /*
            =function _resize()
            Resizes the modal.
        */
        _resize: function () {
            $(this._modalSelectors.leftCol).height($(this._modalSelectors.rightCol).height());
        },
        /*
            =function _closeModal()
            Closes the modal with a fadout effect.
        */
        _closeModal: function () {
            $(this._modalSelectors.container).fadeOut(400);
        }
    }
};
}());
$(function () {
theme.Site.init();
	function logoText(){
		/* $('.textFill-parent').css('width', $('.header-store-name').innerWidth());
		$('.textFill-parent').css('height', $('.header-store-name').innerHeight()); */
			$('.textFill-parent').textfill({
				explicitHeight: 50

			});
	}
		logoText();
		$(window).resize(function() {
			if($(window).width() > 700){
				  logoText();
			}
	});
  $('.quick-desc .short-description').trunk8({
        lines: 5,
        fill: '&hellip;',
        parseHTML: 'true',
          width:'auto'                
      });
  $('.collection-ad-text.rte').trunk8({
                lines: 4,
                fill: '&hellip;',
                parseHTML: 'true',
                width:'auto'
  });
  
  var $badge;
  $("[data-fancybox]").click(function(){
    $badge = $(this).find('.quick-star').html();
  });
   $("[data-fancybox]").fancybox({
     transitionEffect: false,
     animationEffect:false,
    afterLoad : function( instance, current ) {
    var $container = $('#quick'); 
    var badge = $badge;
    var smartEnable = $('#quick').data('quicksmart');
    theme.Products.init($container);
    if($container.closest('[data-section-id="product-template"]').length > 0) {
        theme.Slick.initProdPhotoQuick($container);
        theme.Slick.initVariant($container);
        theme.Variants.init($container, true);
        theme.ProductPage.init($container);
         $('.fancybox-container .product-smart-wrapper').remove();
        if(smartEnable){
	       $('.fancybox-container .quick-smart-wrapper').css('display','block');
	       	Shopify.PaymentButton.init();
    	}else{
    		  $('.fancybox-container .shopify-payment-button').css('display','none');
    		  $('.fancybox-container .quick-smart-wrapper').css('display','block');
    	}
    } else {
        theme.Slick.initFeaturedCollection($container);
        theme.Variants.init($container);
    }
       $('.fancybox-container .shopify-product-reviews-badge').html(badge);
       $('.fancybox-container .product-featured-image img').off('click')
       $('.fancybox-container .product-featured-image img').removeData('magnificPopup');
       $('.fancybox-container #tabs,.fancybox-container ul.tabs').css('display','none');
       $('.fancybox-container .act-desc').css('display','none');
       $('.fancybox-container .act-desc').removeClass('large--show');      
       $('.fancybox-container .quick-desc').show();
       $('.fancybox-container .quick-desc .short-description').trunk8({
        lines: 8,
        fill: '&hellip;',
        parseHTML: 'true',
          width:'auto'                
      });
    },
        afterClose: function () {
      $('.fancybox-container .act-desc').addClass('large--show');      
      $('.fancybox-container .quick-desc').hide();
        }
  
    });
});

// Get IE or Edge browser version
var version = detectIE();

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  
  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  
  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}


 /* IE EDGE Object Fit fallback */
 $(function(){ 
      if ( !Modernizr.objectfit && version != false ) {
        $('.masonryh div.masonry-collection-target, .collection-box-2, .collection-box-1, .page-list-collection-featured .content-class, .page-list-collection .content-class').each(function () {
          var $container = $(this),            
              imgUrl = $container.find('img').prop('src');
          if (imgUrl) {
            $container
            .css('backgroundImage', 'url(' + imgUrl + ')')
            .addClass('compat-object-fit');
          }  
        });
      }       
    });

/*
    theme.Tabs
    Controls the behavior of tabs. Switches the active
    content with a fade transition.
*/
theme.Tabs = (function () {
    return {
        /***** Private Properties *****/
        //Selectors used for jQuery targeting
        _selectors: {
            tabsContainer: '.js-tabs-container',
            tabLinks: '.js-tabs-link',
            tabContentsContainer: '.js-tabs-content-container',
            tabHeight: '.checkMyHeight',
            activeTab: '.active',
            activeContent: '.current'
        },
        //Classes used to be added/removed/checked against
        _classes: {
            checkHeight: 'checkMyHeight',
            activeTab: 'active',
            activeContent: 'current'
        },
        /*
            =function init(container)
            Initializes the click events for the tabs, which controls the fade
            animation. Also sets up the window resize event to resize the content
            =Params
            (mixed) container: Value can be a jQuery selector string, jQuery
                               object, or element. The value should return the
                               container of the cart.
        */
        init: function (container) {
            var self = this;
            var tabSpeed = 200;
            var $container = $(container);
            var $tabsContainer = $container.find(self._selectors.tabsContainer);
            var $tabCotentsContainer = $container.find(self._selectors.tabContentsContainer);
            var $tabLinks = $tabsContainer.find(self._selectors.tabLinks);
            //Set up the tab clicks
            $tabLinks.click(function (e) {
                var $this = $(this);
                //Get the currently active tab
                var $activeTab = $tabsContainer.find(self._selectors.activeTab);
                //Get the tab contents and their IDs
                var activeContentTab = '.js-tab-' + $activeTab.data('tab');
                var newContentTab = '.js-tab-' + $this.data('tab');
                //Only switch the tabs if they aren't the same tabs
                if (activeContentTab !== newContentTab) {
                    var $activeContent = $tabCotentsContainer.find(self._selectors.activeContent);
                    var $newContent = $tabCotentsContainer.find(newContentTab);
                    //Switch the active tab link
                    $activeTab.removeClass(self._classes.activeTab);
                    $this.addClass(self._classes.activeTab);
                    //Set up the content height class
                    $newContent.addClass(self._classes.checkHeight);
                    $activeContent.removeClass(self._classes.checkHeight);
                    //Resize to fit the new content
                    self._resize($tabCotentsContainer);
                    //Perform the fade transition
                    $activeContent.fadeOut(tabSpeed, function () {
                        $activeContent.removeClass(self._classes.activeContent);
                        $newContent.fadeIn(tabSpeed, function () {
                            $newContent.addClass(self._classes.activeContent);
                            //Resize to fit the new content
                            self._resize($tabCotentsContainer);
                        });
                    });
                }
                return false;
            });
            //Set up the resize event
            $(window).resize(self._resize.bind(this, $tabCotentsContainer));
        },
        _resize: function ($tabCotentsContainer) {
            $tabCotentsContainer.height($tabCotentsContainer.find(this._selectors.tabHeight).outerHeight());
        }
    };
}());
theme.Maps = (function() {
  var apiStatus = null;
  var mapsToLoad = [];

  var errors = {
    addressNoResults: 'No results for that address',
    addressQueryLimit: 'You have exceeded the Google API usage limit. Consider upgrading to a <a href=\"https:\/\/developers.google.com\/maps\/premium\/usage-limits\">Premium Plan<\/a>.',
    addressError: '"Error looking up that address',
    authError: 'There was a problem authenticating your Google Maps account.'
  };

  var selectors = {
    section: '[data-section-type="map"]',
    map: '[data-map]',
    mapOverlay: '[data-map-overlay]',
    mapType: '[data-type]'
  };

  var classes = {
    mapError: 'map-section--load-error',
    errorMsg: 'map-section__error errors text-center'
  };

  // Global function called by Google on auth errors.
  // Show an auto error message on all map instances.
  // eslint-disable-next-line camelcase, no-unused-vars
  window.gm_authFailure = function() {
    if (!Shopify.designMode) {
      return;
    }

    $(selectors.section).addClass(classes.mapError);
    $(selectors.map).remove();
    $(selectors.mapOverlay).after(
      '<div class="' +
        classes.errorMsg +
        '">' +
        theme.strings.authError +
        '</div>'
    );
  };

  function Map(container) {
    this.$container = $(container);
    this.$type = this.$container.find(selectors.mapType);
    this.$map = this.$container.find(selectors.map);
    this.key = this.$map.data('api-key');

    if (typeof this.key === 'undefined') {
      return;
    }

    if (apiStatus === 'loaded') {
      this.createMap();
    } else {
      mapsToLoad.push(this);

      if (apiStatus !== 'loading') {
        apiStatus = 'loading';
        if (typeof window.google === 'undefined') {
          $.getScript(
            'https://maps.googleapis.com/maps/api/js?key=' + this.key
          ).then(function() {
            apiStatus = 'loaded';
            initAllMaps();
          });
        }
      }
    }
  }

  function initAllMaps() {
    // API has loaded, load all Map instances in queue
    $.each(mapsToLoad, function(index, instance) {
      instance.createMap();
    });
  }

  function geolocate($map) {
    var deferred = $.Deferred();
    var geocoder = new google.maps.Geocoder();
    var address = $map.data('address-setting');

    geocoder.geocode({ address: address }, function(results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
        deferred.reject(status);
      }

      deferred.resolve(results);
    });

    return deferred;
  }

  Map.prototype = {
    createMap: function() {
      var $map = this.$map,
          $type = this.$type;
      return geolocate($map)
        .then(
          function(results) {
            var mapOptions = {
              zoom: $map.data('zoom'),
              center: results[0].geometry.location,
              draggable: false,
              clickableIcons: false,
              scrollwheel: false,
              disableDoubleClickZoom: true,
              disableDefaultUI: true,
              mapTypeId: $map.data('type')
            };

            var map = (this.map = new google.maps.Map($map[0], mapOptions));
            var center = (this.center = map.getCenter());

            //eslint-disable-next-line no-unused-vars
            var marker = new google.maps.Marker({
              map: map,
              position: map.getCenter()
            });
            google.maps.event.addDomListener(
              window,
              'resize',
               (function() {
                google.maps.event.trigger(map, 'resize');
                map.setCenter(center);
                $map.removeAttr('style');
              })
            );
		
          
          }.bind(this)
        )
        .fail(function() {
          var errorMessage;

          switch (status) {
            case 'ZERO_RESULTS':
              errorMessage = errors.addressNoResults;
              break;
            case 'OVER_QUERY_LIMIT':
              errorMessage = errors.addressQueryLimit;
              break;
            case 'REQUEST_DENIED':
              errorMessage = errors.authError;
              break;
            default:
              errorMessage = errors.addressError;
              break;
          }

          // Show errors only to merchant in the editor.
          if (Shopify.designMode) {
            $map
              .parent()
              .addClass(classes.mapError)
              .html(
                '<div class="' +
                  classes.errorMsg +
                  '">' +
                  errorMessage +
                  '</div>'
              );
          }
        });
    },

    onUnload: function() {
      if (this.$map.length === 0) {
        return;
      }
      google.maps.event.clearListeners(this.map, 'resize');
    }
  };

  return Map;
})();


/*
    theme.Products
    
    Adjusts the shown image and price to reflect the currently
    selected variant. Also adjusts items based on avaiability.
    
    Depends on:
    theme.Currency
    theme.Slick
    theme.Variants
    
    Related directly to:
    /sections/home-featured-products.liquid
    /sections/product-template.liquid
    /snippets/jim-form.liquid
    /snippets/product-details.liquid
    /snippets/tbm-icons.liquid
    
*/
theme.Products = (function () {
    return {
        /***** Private Properties *****/
        //Selectors used for jQuery targeting
        _selectors: {
            soldOutBtnText: '.js-prod-soldout-btn-text',
            productSlides: '.product__slides',
            smart: '.smart-wrapper',
            comparePrice: '#ComparePrice',
            disableOnSoldOut: '.js-prod-disable-on-soldout',
            priceDisplays: '.js-prod-price',
            showAvailable: '.js-prod-show-available', // Elements to .show() when variant is available
            showSoldOut: '.js-prod-show-soldout', // Elements to .show() when variant is sold out
            showOnSale: '.js-prod-show-sale', // Elements to .show() when variant is on sale
            badge: '.js-prod-badge'
        },
        
        /***** Public Methods *****/
        /*
            =function init(container)
            Initializes the listeners for product sections that contain an
            image, price, and cart button to update on variant related changes.
            =Params
            (mixed) container: Value can be a jQuery selector string, jQuery
                               object, or element. The value should return the
                               container that has the elements that need to be 
                               adjusted on variant changes
        */
        init: function(container) {
            var self = this;
            var $container = $(container);
            //Setup magnify popup
            $container.find('.product-featured-image img').magnificPopup({
                type: 'image',
                mainClass: 'mfp-fade',
                closeOnBgClick: true,
                closeBtnInside: false,
                closeOnContentClick: true,
                tLoading: '',
                removalDelay: 200
            });

            //Set up the listener for when a new variant is selected
            $container.on(theme.Variants.eventStrs.onVariantChanged, function(e, variant) {
                if(variant) {
                    self._changeImage($container, variant);
                    self._changePrice($container, variant);
                    self._updateAvailability($container, variant.available);
                     $('.shopify-payment-button').show();
                } else {
                	 $('.shopify-payment-button').hide();
                    self._changePrice($container, null);
                    self._updateAvailability($container, false, 'Unavailable');
                }
            });
            //Set up the listener for when a new quantity is entered
            $container.on(theme.Variants.eventStrs.onQtyChanged, function(e, newQuantity) {
                var $selection = theme.Variants.getSelectedVariant($container);
                self._updatePrice($container, $selection.data('base-price'), $selection.data('compare-price'), newQuantity);
            });
        },
        
        /***** Private Methods *****/
        /*
            =function _changeImage($container, variant)
            Tells Slick to go to the correct image based on the passed in variant
            =Params
            (jQuery) $container: The container that has the Slick element to adjust
            (obj) variant: The variant object that has the image id to look for
        */
        _changeImage: function ($container, variant) {
            var $prod_slider = $container.find(this._selectors.productSlides);
            var newPosition = $prod_slider.find('img[data-image-id="' + variant.imageId + '"]').parent().attr('data-slick-index');
            if (newPosition !== undefined) {
                var currPos = $prod_slider.slick('slickCurrentSlide');
                if(currPos != newPosition) {
                    $prod_slider.slick('slickGoTo', newPosition);
                }
            }
        },
        /***** Private Methods *****/
        /*
            =function init($container, variant)
            Looks for the price related elements and shows/hides them based on
            the passed in variant
            =Params
            (jQuery) $container: The container that has the price elements to adjust
            (obj) variant: The variant object that has the image id to look for
        */
        _changePrice: function ($container, variant) {
            if(variant) {
                var price = variant.price;
                var compareAtPrice = variant.compareAtPrice;
                if (compareAtPrice && compareAtPrice > price) {
                    $container.find(this._selectors.showOnSale).show();
                    var $comparePrice = $container.find(this._selectors.comparePrice);
                    if ($comparePrice.length > 0) {
                        $comparePrice.show();
                    }
                } else {
                    $container.find(this._selectors.showOnSale + ', ' + this._selectors.comparePrice).hide();
                }
                this._updatePrice($container, price, compareAtPrice);
            } else {
                // The variant given doesn't exist, so tell the code to update the
                // price with some text to reflect this
                this._updatePrice($container, null);
            }
        },
        /*
            =function _updatePrice($container, price, compareAtPrice, qty)
            Looks for the price related elements and shows/hides them based on
            the passed in variant
            =Params
            (jQuery) $container: The container that has the price elements to adjust
            (int) price: The price of the variant in cents
            (int) compareAtPrice: (optional) The variant's compare at price in cents
            (int) qty: (optional) The current variant's quantity in the form
        */
        _updatePrice: function($container, price, compareAtPrice, qty) {
            //The variant exists (and thus price), so update the price correctly
            if(price !== undefined && price !== null) {
                //If qty wasn't passed in, get the quantity from the form
                qty = qty || theme.Variants.getVariantQuantity($container);
                price = theme.Currency.formatMoney(price * qty);
                //Adjust each price display with the new formatted price
                $container.find(this._selectors.priceDisplays).each(function () {
                    var $this = $(this);
                    $this.text(price);
                    $this.attr('content', price);
                });
                // If there is a compareAtPrice, adjust each price display with the 
                // formatted compare at price
                if(compareAtPrice) {
                    var $comparePrice = $container.find(this._selectors.comparePrice);
                    $comparePrice.text($comparePrice.data('compare-text') + ' ' + theme.Currency.formatMoney(compareAtPrice * qty));
                }
            } else {
                //The variant doesn't exist, so update the price to say so
                $container.find(this._selectors.comparePrice + ',' + 
                    this._selectors.showOnSale + ',' +
                    this._selectors.showSoldOut).hide();
                $container.find(this._selectors.priceDisplays).text('Unavailable');
            }
        },
        /*
            =function _updateAvailability($container, inStock, soldOutBtnText)
            Adjusts buttons and shows/hides elements based on if the variant is in
            stock
            =Params
            (jQuery) $container: The container that has the elements to adjust
            (bool) inStock: true if the product is in stock; false otherwise
            (string) soldOutBtnText: (optional) The text to display if the variant doesn't
                                     exist. Also used to check if the variable doesn't exist.
        */
        _updateAvailability: function ($container, inStock, soldOutBtnText) {
            var $showSoldOut = $container.find(this._selectors.showSoldOut);
            var $showAvailable = $container.find(this._selectors.showAvailable);
             var $smart = $container.find(this._selectors.smart);
            if (inStock) {
            	$smart.show();
                $showSoldOut.hide();
                $showAvailable.show();
                $container.find(this._selectors.disableOnSoldOut).prop('disabled', false);
            } else {
                var $soldOutBadge = $container.find(this._selectors.showSoldOut + ' ' + this._selectors.badge);
                if(soldOutBtnText) {
                    $showSoldOut = $showSoldOut.not(this._selectors.badge);
                } else {
                    soldOutBtnText = 'Sold Out';
                }
                $container.find(this._selectors.soldOutBtnText).text(soldOutBtnText);
                $showSoldOut.show();
                 $smart.hide();
                $showAvailable.hide();
                $container.find(this._selectors.showOnSale).hide();
                $container.find(this._selectors.disableOnSoldOut).prop('disabled', true);
            }
        }
    };
}());


/*
    theme.ProductPage
    
    Specificly for the product page. Handles the adding of
    the product to the cart, the display of the cart
    related effects, and updates the cart count on a 
    successful add to cart.
    
    Depends on:
    theme.AjaxCart
    theme.Cart
    theme.Tabs
    theme.Variants
    
    Related to:
    /sections/product-template.liquid
*/
theme.ProductPage = (function () {
    return {
        /***** Private Properties *****/
        //Selectors used for jQuery targeting
        _selectors: {
            addToCartBtn: '.add-to-cart-btn',
            mobileAddToCartBtn: '.mobile-add-to-cart-btn',
            prodAjaxBtn: '.js-prod-ajax-btn',
            prodFormBtn: '.js-prod-form-btn',
            cartErrors: '.cart-errors'
        },
        //Classes used to be added/removed/checked against
        _classes: {
            cartExtraPad: 'cart-extra-pad',
            cartErr: 'added-to-cart-error',
            cartSuccess: 'added-to-cart-success',
            mobileSuccess: 'mobile-success',
            mobileErr:'mobile-error'
        },
        
        /***** Public Methods *****/
        /*
            =function init()
            Initializes the the ajax cart events and the click event
            for the addd to cart button
        */
        init: function(container) {
        	$('.quick-smart-wrapper').css('display','none');
            var self = this;
            //Set up ajax cart events
            $('body').on(theme.AjaxCart.eventStrs.addToCartSuccess, function () {
                self._displayCartSuccess();
                self._updateCartCount();
            });
            $('body').on(theme.AjaxCart.eventStrs.addToCartError, function () {
                self._displayCartError('There was a problem adding the product to the cart. Make sure your selection is correct and try again.');
            });
            //Setup click event for the add to cart button

            $(self._selectors.prodAjaxBtn, container).click(function () {
            event.preventDefault();
                self._addProductToCart.apply(this, container);
            });
            $(self._selectors.prodAjaxBtn, container).keypress(function (e) {
                if(e.which == 13) {
                    self._addProductToCart.apply(this, container);
                }
            });
          
            theme.Tabs.init(container);
        },
        /***** Private Methods *****/
        /*
            =function _addProductToCart()
            Adds the selected product to the cart, or displays an error 
            if the selection isn't valid
            (object) container: the product page section
        */
        _addProductToCart: function(container) {
            var $form = $(this).closest('form');
            var $selection = theme.Variants.getSelectedVariant($form);
            //Make sure we actually have a selection
            if ($selection.length > 0) {
                if ($selection.data('unavailable')) {
                    //Display an error if the product is actually unavailable
                    self._displayCartError('The selected product is not available.');
                } else {
                    //Gather the line properties, if needed
                    var props = {};
                    var $properties = $('[name^="properties["]', container);
                    if($properties.length > 0) {
                        var $this;
                        var nameAttr = '';
                        $properties.each(function() {
                            $this = $(this);
                            nameAttr = $this.attr('name');
                            nameAttr = nameAttr.replace('properties[','');
                            nameAttr = nameAttr.replace(']','');
                            if($this.attr('type') === 'radio') {
                                if($this.is(':checked')) {
                                    props[nameAttr] = $this.val();
                                }
                            } else if($this.attr('type') === 'checkbox') {
                                if($this.is(':checked')) {
                                    if(props[nameAttr]) {
                                        if($('[type="hidden"][name="properties[' + nameAttr +']"]', container).length === 1) {
                                            //If there is a hidden element of the same name, and it's the only other
                                            //element with the same name, then the hidden element is likely a default 
                                            //value. We'll override it with the checkbox value.
                                            props[nameAttr] = $this.val();
                                        } else {
                                            props[nameAttr] += ', ' + $this.val();
                                        }
                                    } else {
                                        props[nameAttr] = $this.val();
                                    }
                                }
                            } else {
                                props[nameAttr] = $this.val();
                            }
                        });
                    }
                    //Add the selected variant to the cart
                    theme.AjaxCart.addToCart($selection.val(), theme.Variants.getVariantQuantity($form), props);
                }
            } else {
                self._displayCartError('There was no product selected.');
            }
        },
        /*
            =function _updateCartCount()
            Update the cart count in the car item count and icon
        */
        _updateCartCount: function() {
            var self = this;
            //Reset the event, just in case it was already set
            $('body').off(theme.AjaxCart.eventStrs.getCartSuccess);
            //Setup the event for getting the cart data from Shopify
            $('body').on(theme.AjaxCart.eventStrs.getCartSuccess, function(e, cart) {
                theme.Cart.updateCartItemCount(cart.item_count, cart.total_price);
            });
            //Get the cart data
            theme.AjaxCart.getCartData();
        },
        /*
            =function _displayCartSuccess()
            Sets up the success effect for the add to cart button
        */
        _displayCartSuccess: function () {
            var self = this;
            $(self._selectors.addToCartBtn).addClass(self._classes.cartSuccess);
            $(self._selectors.mobileAddToCartBtn).addClass(self._classes.mobileSuccess);
            $(self._selectors.cartErrors).empty();
            setTimeout(function () {
                $(self._selectors.addToCartBtn).removeClass(self._classes.cartSuccess);
                $(self._selectors.mobileAddToCartBtn).removeClass(self._classes.mobileSuccess);
            }, 900);
        },
        /*
            =function _displayCartError(msg)
            Sets up the error effect for the add to cart button and displays
            the error message.
            (string) msg: The error message to display
        */
        _displayCartError: function (msg) {
            var self = this;
            $(self._selectors.addToCartBtn).addClass(self._classes.cartErr);
            $(self._selectors.mobileAddToCartBtn).addClass(self._classes.mobileErr);
            $(self._selectors.cartErrors).html(msg);
            setTimeout(function () {
                $(self._selectors.addToCartBtn).removeClass(self._classes.cartErr);
                $(self._selectors.mobileAddToCartBtn).removeClass(self._classes.mobileErr);
            }, 900);
        }
    };
}());


/*
    theme.Cart
    Controls the updating of cart quantities. When a quantity
    is changed on one of the cart items, all quantity controls
    are locked until the cart is updated on Shopify's end. Will
    unlock controls on either success or error of updating the
    cart. Also contains code to adjust the cart item count and
    icon in the header.
    
    Depends on:
    theme.AjaxCart
    theme.Currency
    theme.Variants
    
    Related directly to:
    /sections/cart-template.liquid
    /sections/header.liquid (Cart item count and SVG code)
*/
theme.Cart = (function () {
    return {
        /***** Private Properties *****/
        //Selectors used for jQuery targeting
        _selectors: {
            /* Cart Selectors */
            cartItemsContainer: '.js-cart-items-container',
            cartItem: '.js-cart-item-info-container',
            cartItemPrice: '.js-cart-item-price',
            cartItemOrigPrice: '.js-cart-item-orig-price',
            hideOnEmpty: '.js-cart-hide-on-empty',
            showOnEmpty: '.js-cart-show-on-empty',
            subtotal: '.js-cart-subtotal',
            cartBtnSubtotal: '.js-cart-btn-subtotal',
            note: '#CartSpecialInstructions',
            /* Cart Item Count Icon - Header Selectors */
            cartItemIconSVG: '.js-cart-icon #cart-svg',
            cartItemIconWrapper: '.js-cart-icon',
            cartItemIconCount: '.js-cart-icon #cart-svg-count',

            cartItemIconMobileCount: '.js-cart-mobile-icon #mobile-cart-svg-count',
            
            cartItemCount: '.js-cart-count #CartCount',
            cartItemCost: '.js-cart-count #CartCost'
        },
        //Classes used to be added/removed/checked against
        _classes: {
            cartItemCountExtraPad: 'cart-extra-pad'
        },
        
        /***** Public Methods *****/
        /*
            =function init(container)
            Initializes the quantity controls for each cart item. Also 
            initializes the listener for the quantity change event.
            =Params
            (mixed) container: Value can be a jQuery selector string, jQuery
                               object, or element. The value should return the
                               container of the cart.
        */
        init: function (container) {
            var self = this;
            var $container = $(container);
            $container.find(self._selectors.cartItem).each(function() {
                theme.Variants.initQtyControls($(this));
            });
            $container.find('#AddToCart').click(function(e) {
                $("input#mobile-cart-submit-button" ).trigger( "click" );
            });
            $container.mySection().on(theme.Variants.eventStrs.onQtyChanged, function() {
                self._updateCart();
            });
            $('body').on(theme.AjaxCart.eventStrs.updateCartSuccess, function() {
                self._updateCartValues();
                theme.Variants.enableAllControls();
            });
            $('body').on(theme.AjaxCart.eventStrs.updateCartError, function() {
                theme.Variants.enableAllControls();
            });
        },
        /*
            =function updateCartItemCount(newCount, cartTotalCost)
            Updates the display for the cart item count and its icon
            =Params
            (int) newCount: The new total of items in the cart
            (int) cartTotalCost: The total cost of the cart in cents
        */
         updateCartItemCount: function(newCount, cartTotalCost) {
            $(this._selectors.cartItemIconCount + ',' + this._selectors.cartItemCount).html(newCount);
              $(this._selectors.cartItemIconMobileCount + ',' + this._selectors.cartItemCount).html(newCount);
            $(this._selectors.cartItemCost).text(theme.Currency.formatMoney(cartTotalCost));
            if (newCount == 0) {
                $(this._selectors.cartItemIconSVG).attr({
                    color: "#292929",
                    stroke: "#292929"
                });
                $(this._selectors.cartItemIconSVG + ' ' + 'path').attr({
                    fill: "#292929"
                });
                $(this._selectors.cartItemIconCount + ',' + this._selectors.cartItemCount).hide();
                $(this._selectors.cartItemIconMobileCount + ',' + this._selectors.cartItemCount).hide();
                $(this._selectors.cartItemIconWrapper).removeClass('cart-show');
            } else {
                $(this._selectors.cartItemIconSVG).attr({
                    color: "#ea9e33",
                    stroke: "#ea9e33"
                });
                  $(this._selectors.cartItemIconSVG + ' ' + 'path').attr({
                    fill: "#ea9e33"
                });
                $(this._selectors.cartItemIconCount + ',' + this._selectors.cartItemCount).show();
                $(this._selectors.cartItemIconMobileCount + ',' + this._selectors.cartItemCount).show();
                $(this._selectors.cartItemIconWrapper).addClass('cart-show');

            }
            if (newCount > 9) {
                $(this._selectors.cartItemCount).addClass(this._classes.cartItemCountExtraPad);
            }
        },
        
        /***** Private Methods *****/
        /*
            =function _updateCart()
            Begins the process of updating the cart data on Shopify,
            and then on the page itself. Disables quantity controls,
            sets up the listeners for the ajax calls, and then starts
            the ajax call to update the cart.
        */
        _updateCart: function() {
            theme.Variants.disableAllControls();
            theme.AjaxCart.updateCart(this._getCartValsStr());
        },
        /*
            =function _updateCartValues()
            Goes through the items in the cart and updates their price
            displays while determining the new cart total cost and item count.
        */
        _updateCartValues: function () {
            var self = this;
            var total = 0, qty = 0, 
                totalQty = 0, newPrice = 0;
            var $this, $productInfo;
            // Goes through all quantity fields and updates their corresponding
            // product's price display. Also tallies the new cart total
            // and new cart price
            theme.Variants.gatherQuantityFields().each(function () {
                $this = $(this);
                qty = parseInt($this.val());
                if(qty > 0) {
                    $productInfo = $this.closest(self._selectors.cartItem);
                    newPrice = qty * $productInfo.data('price');
                    total += newPrice;
                    totalQty += qty;
                    if($productInfo.data('orig-price')) {
                        var newOrigPrice = qty * $productInfo.data('orig-price');
                        $productInfo.find(self._selectors.cartItemOrigPrice).text(theme.Currency.formatMoney(newOrigPrice));
                    }
                    $productInfo.find(self._selectors.cartItemPrice).text(
                    theme.Currency.formatMoney(newPrice));
                } else {
                    $this.closest(self._selectors.cartItemsContainer).remove();
                }
            });
            //Hide the cart and display empty cart if empty. Otherwise, update price
            if (totalQty == 0) {
                $(self._selectors.showOnEmpty).show();
                $(self._selectors.hideOnEmpty).hide();
            } else {
                var totalFormatted = theme.Currency.formatMoney(total)
                $(self._selectors.subtotal).text(totalFormatted);
                $(self._selectors.cartBtnSubtotal).text('Total: ' + totalFormatted);
            }
            self.updateCartItemCount(totalQty, total);
        },
        /*
            =function _getCartValsStr()
            Returns a string representation of the cart to be used in
            the ajax calls.
        */
        _getCartValsStr: function () {
            var self = this;
            var toReturn = '';
            var id, $this, $productInfo;
            //Gather all the variants and their qunatities
            theme.Variants.gatherQuantityFields().each(function () {
                $this = $(this);
                $productInfo = $this.closest(self._selectors.cartItem);
                id = $productInfo.data('id');
                if (toReturn != '') {
                    toReturn += '&';
                }
                toReturn += 'updates[' + id + ']=' + $this.val();
            });
            //Get the cart note
            var note_str = $(self._selectors.note).val();
            if (note_str != '') {
                if (toReturn != '') {
                    toReturn += '&';
                }
                toReturn += 'note=' + note_str;
            }
            return toReturn;
        }
    };
}());
(function () {

//Misc
theme.HashScrolling = function () {
$('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
};


//Slick init
theme.Slick = {
_selectors: {
    slidesContainer: '.js-slides-container',
    prodThumbSquare: '.product__thumbs--square',
    prodSlides: '.product__slides',
    variantImgSlider: '.variant-image-slider',
    masonrySlider: '.masonry-slider',
    blogSlider: '.blog-slider'
},
_prodPhotoConfig: {
    dots: true,
    infinite:false,
    customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<img src="' + thumb + '">';
    },
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            adaptiveHeight: true
        }
    }]
},
    _prodPhotoQuickConfig: {
    dots: true,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            adaptiveHeight: true
        }
    }]
},
_generalConfig: {
    dots: true,
    arrows: false,
    adaptiveHeight: false,
    autoplay: false,
    speed: 700,
    responsive: [{
        breakpoint: 768,
        settings: {
            adaptiveHeight: true
        }
    }]
},
_blogConfig: {
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            adaptiveHeight: true
        }
    }]
},
_initSlick: function($container, slidesSelector, config) {
    //Get the container
    var $slidesContainer = $container.find(slidesSelector);
    //Only init if we have a container
    if($slidesContainer.length > 0) {
        //Init the container's Slick
        $slidesContainer.slick(config);
        //Set resize event for when the window is resized
        $(window).resize(function() {
           $slidesContainer.slick('resize');
        });
        setTimeout(function() {
            //Force a post-init resize to try to initially set the size
            $slidesContainer.slick('resize');
            //Have a resize run after the doc height changes, if needed
            theme.Utilities.runAtNewDocHeight(function() { 
                $slidesContainer.slick('resize');
            });
        }, 250);
    }
},
/* Initializers */
initFeaturedCollection: function(container) {
    this._initSlick($(container), this._selectors.slidesContainer, this._generalConfig);
},
initProdPhoto: function(container) {
    var $container = $(container);
    this._prodPhotoConfig.appendDots = $container.find(this._selectors.prodThumbSquare);
    this._initSlick($container, this._selectors.prodSlides, this._prodPhotoConfig);
},
 initProdPhotoQuick: function(container) {
    var $container = $(container);
    this._prodPhotoQuickConfig.appendDots = $container.find(this._selectors.prodThumbSquare);
    this._initSlick($container, this._selectors.prodSlides, this._prodPhotoQuickConfig);
},
initVariant: function(container) {
    var $container = $(container);
    this._initSlick($container, this._selectors.variantImgSlider, this._generalConfig);
},
initMasonry: function(container) {   
    $('.collection-grid-desc').trunk8({
        lines: 4,
        fill: '&hellip;',
        parseHTML: 'true',
        width:'auto'
      });              
      $('.collection-in-grid h2').trunk8({
        lines: 2,
        fill: '&hellip;',
        parseHTML: 'true',
          width:'auto'                
      });

    var $container = $(container);
    if ($(this._selectors.masonrySlider, container).data('auto') == 'enable'){
        this._generalConfig['autoplaySpeed'] = $('.masonry-slider', container).data('speed');
        this._generalConfig['autoplay'] = true;
     }
     if ($(this._selectors.masonrySlider, container).data('adapt') == true){
    	this._generalConfig['adaptiveHeight'] = true;
      }
        this._initSlick($container, this._selectors.masonrySlider, this._generalConfig);  
},
initMobileBlog: function(container) {
    var $container = $(container);
    this._initSlick($container, this._selectors.blogSlider, this._blogConfig);
},
/* Uninitializers */
_unslick: function($slidesContainer) {
    $slidesContainer.slick('unslick');
},
uninitFeaturedCollection: function(container) {
    this._unslick($(this._selectors.slidesContainer, container));
},
uninitProdPhoto: function(container) {
    this._unslick($(this._selectors.prodSlides, container));
},
uninitVariant: function(container) {
    this._unslick($(this._selectors.variantImgSlider, container));
},
uninitMasonry: function(container) {
    this._unslick($(this._selectors.masonrySlider, container));
},
unintMobileBlog: function(container) {
    this._unslick($(this._selectors.blogSlider, container));
},
/* Slick Controls */
_gotoSlide: function($slidesContainer, ndx) {
    $slidesContainer.slick('slickGoTo', ndx);
},
masonryGotoNdx: function(container, ndx) {
    this._gotoSlide($(this._selectors.masonrySlider, container), ndx);
}
};
}());


/*
    theme.Navigation
    
    Container and controller of all navgiation code. This section 
    contains very basic initializations, but also has many of the 
    selectors used in other sections of the navigation code.
    
    Depends on:
    timber
*/
   theme.Navigation = (function () {    
          return {
            /***** Private Properties *****/
            //Selectors used for jQuery targeting
            _selectors: {
              id: '#AccessibleNav',
              dim: '.dim',
              openedNav: '#AccessibleNav .nav-hover',
              closeOnMouseLeave: '.main-menu-dropdown, .site-nav--has-dropdown',
              nextNav: ".site-header .header-icons",
              topLevelMenuItems: '.site-nav--has-dropdown',
              childNavLinks: '.child-site-nav__link',
              subMenuDiv: '.child-div',
              sectionHeaderMenuItems: '.nav-section-header',
              bottomLevelMenuItems: '.grandchild-link .site-nav__link',
              siteHeaderId: '#header',
              mainMenuDropdown: '.main-menu-dropdown',
              generalMenu: '.nav-menu-js',
              singleDropdown: '.single-dropdown',
            },
            //Classes used to be added/removed/checked against
            _classes: {
              hover: 'nav-hover',
              navBg: 'mega-nav-bg',
            },
            //Event handler for scrolling the window
            _scrollHandler: null,

            /***** Public Methods *****/
            /*
            =function init()

        */
            init: function () {
              var self = this;
              self._scrollHandler = self.exitNav.bind(self);
               var navUL = $('#AccessibleNav').height(),
               navRows = navUL / 37,
               singleDMenu = false,
               multiNav = false;

               if ($(self._selectors.singleDropdown).length > 0){
                  var singleDMenu = true; 
               }             
               if (navRows > 1.2){
                  var multiNav = true;
                $('#AccessibleNav').addClass('multinav');
               }            

              if (!multiNav || singleDMenu) { 
               $('#AccessibleNav > .site-nav--active').mouseenter(function(){
                  if($('.search-dropdown').hasClass('searching') == false && !$('#AccessibleNav').hasClass('multinav')){
                  self.exitNav();
                }
               });
                  // If single row of link OR single dropdown                       
                $(self._selectors.topLevelMenuItems).mouseenter(function () {
                  // Close all open elements
                  theme.Search._closeSearch($('[data-section-type="header"]'));
                  $(self._selectors.topLevelMenuItems).removeClass(self._classes.hover);

                  if (singleDMenu){
                    // Add navBg to single dropdown link
                    $(this).addClass(self._classes.navBg);
                  }else{
                     // Add navBg to entire header for mega-menu
                    $(self._selectors.siteHeaderId).addClass(self._classes.navBg);
                  }
                  $(this).addClass(self._classes.hover);
                  $(self._selectors.dim).show();
                  $(window).scroll(self._scrollHandler);
                });               
                if (!singleDMenu){
                $(self._selectors.topLevelMenuItems).mouseleave(function () {  
                    setTimeout(function(){   
                    if ($('.main-menu-dropdown:hover').length == 0 && $('#AccessibleNav > .site-nav--has-dropdown:hover').length == 0){            
                        self.exitNav();     
                    }           
                    }, 500);
                  });
                }         

                if (singleDMenu){
                   // Remove single menu hover and exit nav
                 $(self._selectors.closeOnMouseLeave).mouseleave(function () {
                       $(this).removeClass(self._classes.navBg);
                         self.exitNav();
                });  
                }
                $(self._selectors.siteHeaderId).mouseleave(function () {
                 if ($('.search-dropdown').hasClass('searching') == false && $('#searchInput:hover').length == 0 && $('main-menu-dropdown:hover').length == 0 && !$('#AccessibleNav').hasClass('multinav')) {
                  self.exitNav();
                 }
                });                
              } else {
                 $(self._selectors.topLevelMenuItems, self._selectors.id,'#AccessibleNav > li').unbind("mouseenter mouseleave");
                  $(self._selectors.topLevelMenuItems).click(function (e) {
                    return false;                   
                  });
                  $(self._selectors.childNavLinks).click(function (e) {
                    e.stopPropagation();
                    return true;                   
                  });
                $(self._selectors.topLevelMenuItems, self._selectors.id).click(function () {
                  theme.Search._closeSearch($('[data-section-type="header"]'));
                    self.exitNav();
                     $(self._selectors.siteHeaderId).addClass(self._classes.navBg);
                    $(this).addClass(self._classes.hover);
                    $(self._selectors.dim).show();
                    $(window).scroll(self._scrollHandler);
                });   
                   $(window).click(function () {
                  if ($(self._selectors.topLevelMenuItems, self._selectors.id).hasClass(self._classes.hover)){
                    self.exitNav();
                  }
                 });
              }
              $(window).resize(function() {
                if ($(window).width() > 768){
               var naviUL = $('#AccessibleNav').height(),
               naviRows = naviUL / 37,
               singleDMenus = false,
               multiNavi = false;

               if ($(self._selectors.singleDropdown).length > 0){
                  var singleDMenus = true; 
               }            
               if (naviRows > 1.2){
                  var multiNavi = true;
                  $('#AccessibleNav').addClass('multinav');
               }else{
                  $('#AccessibleNav').removeClass('multinav');
               }

              if (!multiNavi || singleDMenus) {
                if (!multiNavi){
                 $('#AccessibleNav > .site-nav--active').mouseenter(function(){
                  if($('.search-dropdown').hasClass('searching') == false && !$('#AccessibleNav').hasClass('multinav')){
                  self.exitNav();
                }
               });
               }
                  // If single row of link OR single dropdown                       
                $(self._selectors.topLevelMenuItems).mouseenter(function () {
                  // Close all open elements
                  theme.Search._closeSearch($('[data-section-type="header"]'));
                  $(self._selectors.topLevelMenuItems).removeClass(self._classes.hover);

                  if (singleDMenus){
                    // Add navBg to single dropdown link
                    $(this).addClass(self._classes.navBg);
                  }else{
                     // Add navBg to entire header for mega-menu
                    $(self._selectors.siteHeaderId).addClass(self._classes.navBg);
                  }
                  $(this).addClass(self._classes.hover);
                  $(self._selectors.dim).show();
                  $(window).scroll(self._scrollHandler);
                });               
             if (!singleDMenus){
                $(self._selectors.topLevelMenuItems).mouseleave(function () {
                    setTimeout(function(){   
                    if ($('.main-menu-dropdown:hover').length == 0 && $('#AccessibleNav > li:hover').length == 0){            
                        self.exitNav();     
                    }           
                    }, 500);
                  });
                }    

                if (singleDMenus){
                   // Remove single menu hover and exit nav
                 $(self._selectors.closeOnMouseLeave).mouseleave(function () {
                       $(this).removeClass(self._classes.navBg);
                         self.exitNav();
                });  
                }
                $(self._selectors.siteHeaderId).mouseleave(function () {
                 if ($('.search-dropdown').hasClass('searching') == false && $('#searchInput:hover').length == 0 && $('main-menu-dropdown:hover').length == 0 && !$('#AccessibleNav').hasClass('multinav')){
                  self.exitNav();
                 }
                });                
              } else {
                 $(self._selectors.topLevelMenuItems, self._selectors.id, '#AccessibleNav > .site-nav--active').unbind("mouseenter mouseleave");
                  $(self._selectors.topLevelMenuItems).click(function (e) {
                    return false;                   
                  });
                  $(self._selectors.childNavLinks).click(function (e) {
                    e.stopPropagation();
                    return true;                   
                  });
                $(self._selectors.topLevelMenuItems, self._selectors.id).click(function () {
                 
                  theme.Search._closeSearch($('[data-section-type="header"]'));
                    self.exitNav();
                     $(self._selectors.siteHeaderId).addClass(self._classes.navBg);
                    $(this).addClass(self._classes.hover);
                    $(self._selectors.dim).show();
                    $(window).scroll(self._scrollHandler);
                });   
                   $(window).click(function () {
                  if ($(self._selectors.topLevelMenuItems, self._selectors.id).hasClass(self._classes.hover)){
                    self.exitNav();
                  }
                 });
              }
              }
              });
             
              //Init keyboard accessibility
              this.Keyboard.init();
              //Init the mobile nav
              this.Mobile.init();
              //Init the touch menu
              this.TouchMenu.init();
            },
            /*
            =function displayOrHideSharedElements()
            Displays the shared elements between the nav and search, 
            such as background dims. Hides them if "hide" is true.
            =Params
            (bool) hide: (optional) If true, the shared elements are hidden
        */
            displayOrHideSharedElements: function (hide) {
              if (hide) {
                $(this._selectors.dim).hide();
                $(this._selectors.siteHeaderId).removeClass(this._classes.navBg);
              } else {
                $(this._selectors.dim).show();
                $(this._selectors.siteHeaderId).addClass(this._classes.navBg);

              }
            },
            /*
            =function exitNav()
            Completely hides all aspects of the nav, essentially closing it.
        */
            exitNav: function () {
              var $mainNavBar = $(this._selectors.id);
              this.displayOrHideSharedElements($mainNavBar.mySection(), true);              
              $mainNavBar.find(this._selectors.topLevelMenuItems).removeClass(this._classes.navBg);
              $mainNavBar.find(this._selectors.topLevelMenuItems).removeClass(this._classes.hover);
              $mainNavBar.find(this._selectors.mainMenuDropdown + ', ' +  this._selectors.singleDropdown).css('display','');
              $(window).off('scroll', this._scrollHandler);
            },
            /*
            =function initTimber()
            Some of the theme's functionality relies on timber. This
            function calls the appropriate timber functions to fully
            initialize the navigation. Used by the sections initialization
            code.
        */
            initTimber: function () {
              timber.cacheSelectors();
              timber.drawersInit();
              timber.mobileNavToggle();
            },

            /*
            theme.Navigation.Keyboard

            Initiates the controls needed to navigate the main menu.
        */
            Keyboard: {
              /***** "Parent" References *****/
              _selectors: null,
              _classes: null,
              _scrollHandler: null,

              /***** Public Methods *****/
              /*
                =function init()

            */
              init: function () {
                var self = this;
                //Init the "parent" references
                self._selectors = theme.Navigation._selectors,
                  self._classes = $.extend(theme.Navigation._classes, {
                  subMenuDiv: 'child-div'
                })
                self._scrollHandler = theme.Navigation._scrollHandler;

                //Close the nav if ESC is pressed
                $(document).keyup(function (e) {
                  if (e.keyCode === 27) {
                    theme.Navigation.exitNav();
                    return false;
                  }
                });

                //Setup the keydown events
                $(self._selectors.topLevelMenuItems, self._selectors.id).each(function () {
                  var $this = $(this);
                  //Keydown event handler for top level menu items
                  $this.keydown(function (e) {
                    //If the input is one of the arrow keys, react to it
                    if (37 <= e.keyCode && e.keyCode <= 40) {
                      e.preventDefault();
                      var $this = $(this);
                      switch (e.keyCode) {
                        case 38: //Up - Close the nav
                          self._closeMainNav($(this));
                          break;
                        case 40: //Down - Open the nav
                          //If the nav is already opened, focus the first available menu item or header
                          if ($this.hasClass(self._classes.hover)) {
                            self._focusFirstAvailableSubMenu($this);
                          } else {
                            self._openMainNav($(this));
                          }
                          break;
                        case 37: //Left - Move to the nav on the left
                        case 39: //Right - Move to the nav on the right
                          self._openAdjacentNav($this, e.keyCode == 37, $this.hasClass(self._classes.hover));
                          break;
                      }
                    }
                  });
                  //Keydown event handler for menu section headers
                  $this.find(self._selectors.sectionHeaderMenuItems).keydown(function (e) {
                    if (37 <= e.keyCode && e.keyCode <= 40) {
                      e.preventDefault();
                      e.stopPropagation();
                      switch (e.keyCode) {
                        case 38: //Up - Focus the top level nav for this menu
                          var $topNav = $(this).closest(self._selectors.topLevelMenuItems);
                          $topNav.children('a').focus();
                          break;
                        case 40: //Down - Go to the first bottom level menu item
                          $(this).parent().find(self._selectors.bottomLevelMenuItems + ':first').focus();
                          break;
                        case 37: //Left - Focus the menu title to the left
                        case 39: //Right - Focus the menu title to the right
                          self._focusNextTitle($(this).parent(), e.keyCode == 37);
                          break;
                      }
                    }
                  });


                  $this.find(self._selectors.bottomLevelMenuItems).keydown(function (e) {
                    if (37 <= e.keyCode && e.keyCode <= 40) {
                      e.preventDefault();
                      e.stopPropagation();
                      var $this = $(this);
                      var myIndex = $this.parent().index();
                      switch (e.keyCode) {
                        case 38: //Up - Focus the menu item above this one
                        case 40: //Down - Focus the menu item below this one
                          self._focusSiblingMenuItem($this.parent(), e.keyCode == 38);
                          break;
                        case 37: //Left - Focus the menu item to the left of this one
                        case 39: //Right - Focus the menu item to the right of this one
                          self._focusAdjacentMenuItem($this.closest(self._selectors.subMenuDiv), e.keyCode == 37, myIndex)
                          break;
                      }
                    }
                  });
                });
              },
              /*
                =function _focusFirstAvailableSubMenu($nav)
                Finds the first focusable item in $nav and focuses it
                =Params
                (jQuery) $nav - The nav container to search in
              */
              _focusFirstAvailableSubMenu: function ($nav) {
                var toFocus = $nav.find(this._selectors.sectionHeaderMenuItems + ':first');
                if (toFocus && toFocus.length > 0) {
                  toFocus.focus();
                } else {
                  $nav.find(this._selectors.bottomLevelMenuItems + ':first').focus();
                }
              },
              /*
                =function _openMainNav($nav, ignoreFocus)
                Opens and displays the $nav passed in
                =Params
                (jQuery) $nav - The nav container to display
                (bool) ignoreFocus - (optional) If true, focuses closest sub menu 
                                     item. Otherwise it focuses the top level menu 
                                     item.
              */
              _openMainNav: function ($nav, ignoreFocus) {
                //Set styles for outside of the nav
                theme.Navigation.displayOrHideSharedElements();
                //Open the nav itself
                $nav.find(this._selectors.mainMenuDropdown).show();
                $nav.addClass(this._classes.hover);
                //Focus the first element
                if (!ignoreFocus) {
                  this._focusFirstAvailableSubMenu($nav);
                } else {
                  $nav.children('a').focus();
                }
                $(window).scroll(this._scrollHandler);
              },
              /*
                =function _closeMainNav($nav)
                Closes the $nav passed in.
                =Params
                (jQuery) $nav - The nav container to close
            */
              _closeMainNav: function ($nav) {
                //Unset styles for outside of the nav
                theme.Navigation.displayOrHideSharedElements($nav.mySection(), true);
                //Close the nav itself
                $nav.find(this._selectors.mainMenuDropdown).hide();
                $nav.removeClass(this._classes.hover);
                $(window).off('scroll', theme.Navigation._scrollHandler);
              },
              /*
                =function _getAdjacentElement($nav, goLeft, selector)
                Get the adjacent element matching the selector of the 
                passed in element $nav.
                =Params
                (jQuery) $nav - The element to get the adjacent of
                (bool) goLeft - If true, get the "previous" element. Otherwise
                                get the "next" element
                (string) selector - The element to search for
            */
              _getAdjacentElement: function ($nav, goLeft, selector) {
                if (goLeft) {
                  return $nav.prev(selector);
                } else {
                  return $nav.next(selector);
                }
              },
              /*
                =function _openAdjacentNav($nav, goLeft, ignoreFocus)
                Opens the nav adjacent to the current one
                =Params
                (jQuery) $nav - The currently opened menu nav
                (bool) goLeft - If true, get the "previous" menu nav. 
                                Otherwise get the "next" one
                (bool) ignoreFocus - (optional) If true, focuses closest sub menu 
                                     item. Otherwise it focuses the top level menu 
                                     item.
            */
              _openAdjacentNav: function ($nav, goLeft, ignoreFocus) {
                var $adjacent = this._getAdjacentElement($nav, goLeft, this._selectors.topLevelMenuItems);
                if ($adjacent.length > 0) {
                  this._closeMainNav($nav);
                  this._openMainNav($adjacent, ignoreFocus);
                }
              },
              /*
                =function _focusNextTitle($nav, goLeft)
                Focuses the menu title adjacent to the current one
                =Params
                (jQuery) $nav - The currently focused menu title
                (bool) goLeft - If true, focus the menu title to the left.
                                Otherwise focus the one on the right
            */
              _focusNextTitle: function ($nav, goLeft) {
                var $adjacent = this._getAdjacentElement($nav, goLeft, this._selectors.subMenuDiv);
                if ($adjacent.length > 0) {
                  $adjacent.find(this._selectors.sectionHeaderMenuItems).focus();
                } else {
                  this._openAdjacentNav($nav.closest(this._selectors.topLevelMenuItems), goLeft);
                }
              },
              /*
                =function _focusSiblingMenuItem($nav, goUp)
                Focuses the menu item above or below one
                =Params
                (jQuery) $nav - The currently focused menu item
                (bool) goUp - If true, focus the menu item above $nav. 
                              Otherwise get the one below
            */
              _focusSiblingMenuItem: function ($nav, goUp) {
                var $sibling;
                if (goUp) {
                  $sibling = $nav.prev();
                  if ($sibling.length > 0) {
                    $sibling.children('a').focus();
                  } else {
                    var $closestTitle = $nav.closest(this._selectors.subMenuDiv).children('a');
                    if($closestTitle.length > 0) {
                      $closestTitle.focus();
                    } else {
                      $nav.closest(this._selectors.topLevelMenuItems).children('a').focus();
                    }
                  }
                } else {
                  $sibling = $nav.next();
                  if ($sibling.length > 0) {
                    $sibling.children('a').focus();
                  }
                }
              },
              /*
                =function _performAdjacentMenuItemFocus($adjacentList, index)
                Performs the actual focusing of the adjacement menu element
                =Params
                (jQuery) $adjacentList - The list that contains the menu item to focus
                (int) index - The index to focus in the adjacent list
            */
              _performAdjacentMenuItemFocus: function($adjacentList, index) {
                var $menuItems;
                if($adjacentList.hasClass(this._classes.subMenuDiv)) {
                  $menuItems = $adjacentList.find(this._selectors.bottomLevelMenuItems);
                } else {
                  $menuItems = $adjacentList;
                }
                index = $menuItems.length - 1 < index ? $menuItems.length - 1 : index;
                $menuItems.eq(index).focus();
              },
              /*
                =function _focusSiblingMenuItem($nav, goUp)
                Focuses the menu item above or below one
                =Params
                (jQuery) $nav - The currently focused menu item
                (bool) goUp - If true, focus the menu item above $nav. 
                              Otherwise get the one below
            */
              _focusAdjacentMenuItem: function ($nav, goLeft, index) {
                var $adjacentList = this._getAdjacentElement($nav, goLeft, this._selectors.subMenuDiv + ',' + this._selectors.bottomLevelMenuItems);
                if ($adjacentList.length > 0) {
                  this._performAdjacentMenuItemFocus($adjacentList, index);
                } else {
                  this._openAdjacentNav($nav.closest(this._selectors.topLevelMenuItems), goLeft);
                  /*if(!$nav.is(':focus')) {
                        var $newNav = $(':focus', $nav.closest(this._selectors.id));
                        this._performAdjacentMenuItemFocus($newNav, index);
                    }*/
                }
              },
            },//END Keyboard
            initMobileNav: function () {

			function docSpacing(){
              // Init header height script
              var hHeight = $("#header").height(),
              hPosition = $("#header").data('position'),
              mobileSticky = $(".mobile-cart-buttons").data('sticky'),
              mobileLocation = $(".sticky-footer").data("mobile"),
              mobileNavDiv = $('.sticky-footer'),
              mobilehHeight = $(".sticky-footer").height(),
              mobileProdBtns = $('.product-top-buttons'),
              mobilePromoDiv = $('.mobile-promo'),
              mobilePromo = $('.mobile-promo').height(),
              deskPromo = $('.desk-promo').height(),
              mobileCartBtns = $(".cart-top-buttons");

			  // Set main menu dropdown to always append below header
			 $('.main-menu-dropdown, .js-search-dropdown').css("top", hHeight);

              if (window.innerWidth  > 768) {
              	// If desktop 
                if (hPosition) {
                	// If sticky header
                  $('main.main-content').css('margin-top', hHeight);
                } else {
                  $('main.main-content').css('margin-top', 'initial');
                }
                	$('main.main-content').css('padding-top', 0);
                	$('body').css('margin-bottom', 0);
                	$('#PageContainer').css({
                    		    'margin-top': '0',
                    		    'padding-top': 0
                    	});
              }else if($('body').hasClass('template-product') || $('body').hasClass('template-cart')){
              	// If product or cart page
                if($('body').hasClass('template-product') && !(mobileSticky) && window.innerWidth < 769){
                	// If product page without sticky add to cart buttons (mobile)
                	if (mobileLocation == 'top'){
                		// If mobile nav is on top
 						$('main.main-content').css('margin-top', mobilehHeight + mobilePromo);
 						$('main.main-content').css('margin-bottom', 0 );
 						 $('main.main-content').css('padding-top', 0);
 						 $('body').css('margin-bottom', 0 );
 						 mobileNavDiv.css('bottom', 'initial');
                	}else{
                		if (mobilePromo){
                			// if product promo bar is turned on
							$('main.main-content').css('margin-top', mobilePromo);
							$('main.main-content').css('padding-top', '4%');
                		}else{
                    		$('main.main-content').css('margin-top', '4%');
                    		$('main.main-content').css('padding-top', 0);
                   		 }
                    	$('body').css('margin-bottom', mobilehHeight );
                    	mobileNavDiv.css('top', 'initial');
                    }
                }else if ($('body').hasClass('template-product') && mobileSticky && window.innerWidth < 769){
                	// If product page with sticky add to cart buttons (mobile)
					if (mobileLocation == 'top'){
						var newHeight = mobilehHeight + mobileProdBtns.outerHeight() + mobilePromo;
               			$('main.main-content').css('margin-top', newHeight); 
               			$('main.main-content').css('margin-bottom', 0 );
               			$('main.main-content').css('padding-top', 0);
               			mobileProdBtns.css("top", mobilehHeight + mobilePromo);
               			$('body').css('margin-bottom', 0);
               			mobileNavDiv.css('bottom', 'initial');
               		}else{
               			if (mobileProdBtns.outerHeight() != 0){
               				mobileProdBtns.css("padding-top", '15px');
               			}

               			if ((mobileProdBtns.outerHeight() + mobilePromo) == 0){
							$('main.main-content').css('margin-top','4%')
               			}else{
               				$('main.main-content').css('margin-top', mobileProdBtns.outerHeight() + mobilePromo); 

               			}
               			mobileProdBtns.css("top", 0 + mobilePromo);
               			$('body').css('margin-bottom', mobilehHeight );
               			mobileNavDiv.css('top', 'initial');
             	  	}
             	  }
	             if($('body').hasClass('template-cart') && window.innerWidth < 769){
	             	// If cart page
			           if (mobileLocation == 'top'){
			           		var newCartHeight = mobilehHeight + mobileCartBtns.outerHeight() + mobilePromo;
			           		$('main.main-content').css('margin-top', newCartHeight); 
			           		$('main.main-content').css('margin-bottom', 0 );
			           		$('body').css('margin-bottom', 0);
			           		mobileCartBtns.css("top", mobilehHeight + mobilePromo);
			           		mobileNavDiv.css('bottom', 'initial');
			            }else{
							$('main.main-content').css('margin-top', mobileCartBtns.outerHeight() + mobilePromo);
							$('body').css('margin-bottom', mobilehHeight );
							mobileCartBtns.css("top", mobilePromo);
							mobileNavDiv.css('top', 'initial');
			            }
			         }

			  }else if($('body').hasClass('template-article') && window.innerWidth  < 769){
			    	if (mobileLocation == 'top'){
                		// If mobile nav is on top
                		mobilePromoDiv.css('top', 0);
                		mobileNavDiv.css('bottom', 'initial');
                		$('main.main-content').css('margin-top', 0);
 						$('#PageContainer').css({
 							'margin-top': mobilehHeight + mobilePromo,
 							'margin-bottom': '4%',
 							'padding-top': 0
 						});
 						$('body').css('margin-bottom', 0 );

                	}else{
                		if (mobilePromo){
                			// if product promo bar is turned on
                			$('main.main-content').css('margin-top', '4%');
							$('#PageContainer').css('margin-top', mobilePromo);

							mobilePromoDiv.css('top', 0);
                		}else{
                			$('main.main-content').css('margin-top', '4%');
                    		$('#PageContainer').css({
                    		    'margin-top': 0,
                    		    'padding-top': 0
                    	});
                   		}
                   		$('#PageContainer').css('margin-bottom', '4%');
                      $('body').css('margin-bottom', mobilehHeight );
                      mobileNavDiv.css('top', 'initial');
                    }
              }else{
              	// If any other page
              	if (window.innerWidth < 769){
					if (mobileLocation == 'top'){
 						$('main.main-content').css('margin-top', mobilehHeight + mobilePromo );
 						$('main.main-content').css('margin-bottom', '4%' );
 						$('body').css('margin-bottom', 0);
 						mobileNavDiv.css('bottom', 'initial');
 				    }else{
 				    	if (mobilePromo){
                			// if product promo bar is turned on
							$('main.main-content').css('margin-top', mobilePromo);
							$('main.main-content').css('padding-top', '4%');
                		}else{
                    		$('main.main-content').css('margin-top', '4%');
                    		$('main.main-content').css('padding-top', 0);
                   		}
						$('body').css('margin-bottom', mobilehHeight );
						mobileNavDiv.css('top', 'initial');
               		}
                  }
         	  }
			}
			docSpacing();
              //Run on resize
              $(window).resize(function() {
               docSpacing();
              });
            },
        /*
          theme.Navigation.Mobile
        */
            Mobile: {
              _selectors: null,
              _animations: {
                swapEnterAnim: 'slideInRight',
                swapExitAnim: 'slideOutLeft',
                goBackEnterAnim: 'slideInLeft',
                goBackExitAnim: 'slideOutRight'
              },
              _prevNavs: [],
              /***** Public Methods *****/
              /*
                =function init()

            */
              init: function() {
                var self = this;
                //Init "Parent" ref
                self._selectors = $.extend(theme.Navigation._selectors, {
                  goBack: '.go-back',
                  mobileNavHasSublist: '.mobile-nav__has-sublist',
                  mobilNavLinkGroup: '.mobile-nav__link-group',
                  navDrawerId: '#NavDrawer'
                });

                self._prevNavs = [];
                $(this._selectors.mobileNavHasSublist + ' [type="button"]').click(function (e) {
                  var $closest_li = $(this).closest('li');
                  var div_id = $closest_li.attr('id');
                  div_id = '#' + div_id.substring(0, div_id.lastIndexOf('-')) + '-mnav';
                  self._swapInNav($(div_id));
                });

                $(this._selectors.mobilNavLinkGroup + ' ' + this._selectors.goBack).click(function (e) {
                  self._goBackNav();
                });

                if(self._prevNavs.length == 0) {
                  var mainMenuNav = $(self._selectors.navDrawerId + ' .js-mobile-nav-mm');
                  if(mainMenuNav.length == 0) {
                    mainMenuNav = $(self._selectors.navDrawerId + ' ' + self._selectors.mobilNavLinkGroup + ':first');
                  }
                  self._prevNavs.push(mainMenuNav);
                }
              },
              initFooter: function (container) {
                var self = this;
                //Re-init timber
                theme.Navigation.initTimber();
                //Reset the close handler
                $('body').off('afterDrawerClose.timber', self._timberDrawerCloseHandler.bind(this));
                $('body').on('afterDrawerClose.timber', self._timberDrawerCloseHandler.bind(this));
              },

              /***** Private Methods *****/
              _timberDrawerCloseHandler: function (e) {
                var self = this;
                setTimeout(function () {
                  self._currNav().hide();
                  self._prevNavs.length = 0;
                  var mainMenuNav = $(self._selectors.navDrawerId + ' .js-mobile-nav-mm');
                  if(mainMenuNav.length == 0) {
                    mainMenuNav = $(self._selectors.navDrawerId + ' ' + self._selectors.mobilNavLinkGroup + ':first');
                  }
                  self._prevNavs.push(mainMenuNav);
                  self._currNav().show();
                }, 500);
              },
              /*
                =function _currNav()
                Get the currently displayed navigation
            */
              _currNav: function () {
                return this._prevNavs[this._prevNavs.length - 1];
              },
              /*
                =function _swapInNav()
                Hides the previous navigation and displays the new one
                =Params
                (object) newNav: The new navigation to display
            */
              _swapInNav: function (newNav) {
                var curr = this._currNav();
                if (curr != newNav) {
                  curr.animateCss(this._animations.swapExitAnim, function () {
                    curr.hide();
                  });
                  newNav.show();
                  newNav.animateCss(this._animations.swapEnterAnim);
                  this._prevNavs.push(newNav);
                }
              },
              /*
                =function _goBackNav()
                Hides the current navigation and then displays the previous one
            */
              _goBackNav: function () {
                var curr = this._prevNavs.pop();
                curr.animateCss(this._animations.goBackExitAnim, function () {
                  curr.hide();
                });
                var newNav = this._currNav();
                newNav.show();
                newNav.animateCss(this._animations.goBackEnterAnim);
              }
            },//END Mobile

            /*
            theme.Navigation.TouchMenu


        */
            TouchMenu: {
              _selectors: null,
              _classes: null,
              init: function() {
                if ($('html').hasClass('supports-touch')){
                var self = this;
                self._classes = $.extend(theme.Navigation._classes, {
                  showMenu: 'showMenu',
                  supportsTouch: 'supports-touch'
                });
              
                self._selectors = $.extend(theme.Navigation._selectors, {
                  showMenu: '.showMenu',
                  topLevelNavLinks: 'site-nav--has-dropdown_link',
                  childNavLinks: '.child-site-nav__link'
                });

                var winW = $(window).width();            
                  // prevent clicks
                  $(self._selectors.topLevelMenuItems).click(function (e) {
                    return false;                   
                  });
                  $(self._selectors.childNavLinks).click(function (e) {
                    e.stopPropagation();
                    return true;                   
                  });
                  $(self._selectors.topLevelMenuItems).click('touchend', function () {
                    //hide current menu
                    $(self._selectors.topLevelMenuItems + self._selectors.showMenu).removeClass(self._classes.showMenu);
                    self._hideMenu();
                    //show current menu
                    $(this).addClass(self._classes.showMenu);
                    self._showMenu();
                  });
                     $(window).click(function () {
                    self._hideMenu();
                 });
                  // hide menu on scroll
                  $(window).scroll(function () {
                    self._hideMenu();
                  });
                  // hide on clicking dim
                  $(self._selectors.dim).click(function () {
                    self._hideMenu();
                  });
                }
              },
              _showMenu: function () {
                $(this._selectors.dim).show();
                //$(this._selectors.showMenu + '>' + this._selectors.mainMenuDropdown).show();            
                $(this._selectors.showMenu + '>' + this._selectors.generalMenu).show();
                $(this).addClass(this._classes.hover);
                $(this._selectors.siteHeaderId).addClass(this._classes.navBg);
                $(this).find(this._selectors.sectionHeaderMenuItems + ':first').focus();
              },
              _hideMenu: function() {
                $(this._selectors.dim).hide();
                //$(this._selectors.mainMenuDropdown).hide();
                $(this._selectors.generalMenu).hide();
                $(this).removeClass(this._classes.hover);
                $(this._selectors.siteHeaderId).removeClass(this._classes.navBg);
                $(this).find(this._selectors.sectionHeaderMenuItems + ':first').blur();
                $(this._selectors.showMenu).removeClass(this._classes.showMenu);
              }
            }//END TouchMenu
          };
        }());


/*
    theme.Search
    
    Controls the search form's display and submission.
    
    Depends on:
    theme.Navigation    
*/
theme.Search = (function () {
    return {
        /***** Private Properties *****/
        //Selectors used for jQuery targeting
        _selectors: $.extend(theme.Navigation._selectors, {
            //Search viewing controls
            openSearch: '.js-search-open',
            mobileSearchOpen: '.js-mobile-search-open',
            mobileSearchExit: '.js-mobile-search-exit',
            //Containers
            searchWrapper: '#search-wrapper',
            searchContainer: '.js-search-dropdown',
            searchContainerMobile: '.js-mobile-search-dropdown',
            stickyHeader: '.sticky-header',
            //Inputs
            searchTextInput: '.js-search-query',
            searchTypeSelect: '.js-search-type',
            searchVendorSelect: '.js-search-vendor',
            searchProdTypeSelect: '.js-search-product-type',
            searchNavSubmit: '.js-search-submit',
            searchBaseSubmit: '.js-base-search'
        }),
        //Classes used to be added/removed/checked against
        _classes: $.extend(theme.Navigation.classes, {
            mobileSearchActive: 'mobile-search-active',
            searchIsOpen: 'search-is-open',
            searching: 'searching'
        }),
        //Event Handlers
        _bodyClickHandler: null,
        _scrollHandler: null,
        
        /***** Public Methods *****/
        /*
            =function init(container)
            Initializes the event handlers used by search. 
        */
        init: function(container) {
            var self = this;
            // Used when the search is open. If any click occurs and it's not within
            // the search, close the search.
            self._bodyClickHandler = function(evt) {
                if ($(evt.target).closest(self._selectors.searchWrapper).length === 0) {
                    self._closeSearch($('[data-section-type="header"]'));
                }
            };
            //When opened, we want the window scrolling to close it.
            self._scrollHandler = self._closeSearch.bind(self, $('[data-section-type="header"]'));
        },
        initSearchPage: function(container) {
            $('[name="q"]', container).focus(function() {
                $('body').addClass('fixfixed');
            });
            $('[name="q"]', container).blur(function() {
                $('body').removeClass('fixfixed');
            });
        },
        /*
            =function initHeader(container)
            Initializes the events for the header's search for both desktop and
            mobile. Also contains the events for searching with filters.
            =Params
            (mixed) container: Value can be a jQuery selector string, jQuery
                               object, or element. The value should return the
                               container that may have the main search form
       */
        initHeader: function(container) {
            var self = this;
            var $container = $(container);
            var isAndroid = navigator.userAgent.indexOf("Android") > -1;
            if(isAndroid) {
                $('#searchInputMobile', container).focus(function(){
                  $('body').addClass("fixfixed");
                });

               $('#searchInputMobile', container).blur(function(){
                  $('body').removeClass("fixfixed");
                });
            }
            $container.find(self._selectors.openSearch).click(
                function (e) {
                    e.stopPropagation();
                    if($container.find(self._selectors.searchContainer).hasClass(self._classes.searching)) {
                        self._closeSearch($container);
                    } else {
                        self._openSearch($container);
                    }
                }
            );
            $container.find(self._selectors.mobileSearchOpen).click(function () { self._openMobileSearch($container); });
            $container.find(self._selectors.mobileSearchExit).click(function () { self._closeMobileSearch($container); });
            //Search submission
            $container.find(self._selectors.searchNavSubmit).click(function (e) {
                e.preventDefault();
                var $container = $(this).closest('form');

                //Get the base search text
                var searchText = $(self._selectors.searchTextInput, $container).val();
                var searchQuery = "q=" + (searchText === '' ? '**' : encodeURIComponent(searchText));
                
                //Gather the filters
                var searchFilters = '';
                var typeSelection = $(self._selectors.searchTypeSelect + ' option:selected', $container).val();
                var vendorSelection = $(self._selectors.searchVendorSelect + ' option:selected', $container).val();
                var productType = $(self._selectors.searchProdTypeSelect + ' option:selected', $container).val();

                if (vendorSelection && vendorSelection !== '') {
                    searchFilters += " vendor:" + encodeURIComponent(vendorSelection);
                }
                if (productType && productType !== '') {
                    if(searchFilters != '') searchFilters += ' '
                    searchFilters += 'product_type:' + encodeURIComponent(productType);
                }
                if (typeSelection && typeSelection !== '') {
                    searchFilters += '&type=' + encodeURIComponent(typeSelection);
                }
                if(searchFilters != '') {
                    searchQuery += '??' + searchFilters;
                }

                window.location.href = '/search?' + searchQuery;
            });
        },
        initBanner: function (container) {
            this.initBaseSearch(container);
            this.initOpenSearches(container);
        },

        initBaseSearch: function(container) {
            var $container = $(container);
            $container.find(this._selectors.searchBaseSubmit).click(function(e) {
                e.preventDefault();
                var $form = $(this).closest('form');
                var searchQuery = $form.find('input[name="q"]').val();
                searchQuery = 'q=' + (searchQuery === '' ? '**' : encodeURIComponent(searchQuery));
                window.location.href = '/search?' + searchQuery;
            });
        },

        /*
            =function initFooter(container)
            Initializes the events to open the search in the footer
            =Params
            (mixed) container: Value can be a jQuery selector string, jQuery
                               object, or element. The value should return the
                               container that may have the sticky footer that
                               opens the search on mobile.
       */
        initFooter: function(container) {
            var self = this;
            $(self._selectors.mobileSearchOpen, container).click(function () {
                self._openMobileSearch(container);
            });
        },
        /*
            =function initOpenSearches(container)
            Initializes the events for the open buttons for mobile used primarily
            by the mobil banners.
            =Params
            (mixed) container: Value can be a jQuery selector string, jQuery
                               object, or element. The value should return the
                               container that may have a banner with a search
                               button.
       */
        initOpenSearches: function (container) {
            var self = this;
            $(self._selectors.mobileSearchOpen, container).each(function () {
                $(this).click(function () {
                    self._openMobileSearch($('[data-section-type="header"]:first'));
                });
            });
        },
        /***** Private Methods *****/
        /*
            =function _openSearch()
            Opens the desktop search.
        */
        _openSearch: function ($container) {
            var self = this;
            theme.Navigation.exitNav();
            theme.Navigation.displayOrHideSharedElements();

            $(self._selectors.searchContainer, $container).addClass(self._classes.searching);
            $('body').click(self._bodyClickHandler);
            setTimeout(function() {
                theme.Utilities.runAfterStoppedScrolling(function() {
                    $(window).scroll(self._scrollHandler);
                });
            }, 100);
            //$(window).scroll(this._scrollHandler);
        },
        /*
            =function _closeSearch()
            Closes the desktop search.
        */
        _closeSearch: function ($container) {
            theme.Navigation.displayOrHideSharedElements(true);
            $(this._selectors.searchContainer, $container).removeClass(this._classes.searching);
            $('body').off('click', this._bodyClickHandler);
            $(window).off('scroll', this._scrollHandler);
        },
        /*
            =function _openMobileSearch()
            Opens the mobile search.
        */
        _openMobileSearch: function ($container) {
            $(this._selectors.searchContainerMobile, $container).addClass(this._classes.mobileSearchActive).show().animateCss('slideInUp');
            $(this._selectors.stickyHeader, $container).addClass(this._classes.searchIsOpen);
            $('body').addClass(this._classes.searchIsOpen);
        },
        /*
            =function _closeMobileSearch()
            Closes the mobile search.
        */
        _closeMobileSearch: function ($container) {
            // Set to variables to be used within 
            // the anonymous function block
            var mobileSearchActive = this._classes.mobileSearchActive;
            var searchIsOpen = this._classes.searchIsOpen;
            var stickyHeader = this._selectors.stickyHeader;
            $(this._selectors.searchContainerMobile, $container).animateCss('slideOutDown', function() { 
               $(this).removeClass(mobileSearchActive);
               $(stickyHeader, $container).removeClass(searchIsOpen);
            });
            $('body').removeClass(searchIsOpen);
        }
    };
}());
//Add the init code to $.ready
$(function() {
    theme.Search.init();
});


/*
Functionality pulled from the theme Debut, slightly
modified for our theme.
*/
theme.SectionManager = function SectionManager() {
    this.constructors = {};
    this.sections = [];

    $(document)
      .on('shopify:section:load', this._onSectionLoad.bind(this))
      .on('shopify:section:unload', this._onSectionUnload.bind(this))
      .on('shopify:block:select', this._onBlockSelect.bind(this))
      .on('shopify:block:deselect', this._onBlockDeselect.bind(this));

};
theme.SectionManager.prototype = {
    _findSectionIndex: function(sectionId) {
        return this.sections.findIndex(function (element) {
            return element.id === parseInt(sectionId);
        });
    },
    _runEventFunction: function(func, evt) {
        if (func && typeof func === 'function') {
            func(evt);
        }
    },
    _createSection: function (container, constructor) {
        var $container = $(container);
        var type = $container.data('section-type');
        constructor = constructor || this.constructors[type];

        if (!constructor) {
            return;
        }

        var newInstance = new constructor(container);
        newInstance.id = $container.data('section-id');
        this.sections.push(newInstance);
    },
    _onSectionLoad: function (evt) {
        var container = $('[data-section-id]', evt.target)[0];
        if (container) {
            this._createSection(container);
        }
    },
    _onSectionUnload: function (evt) {
        var instanceNdx = this._findSectionIndex(evt.originalEvent.detail.sectionId)
        if (instanceNdx !== -1) {
            this._runEventFunction(this.sections[instanceNdx].onUnload, evt);
            this.sections.splice(instanceNdx, 1);
        }
    },
    _onBlockSelect: function(evt) {
        var instanceNdx = this._findSectionIndex(evt.originalEvent.detail.sectionId)
        if (instanceNdx !== -1) {
            this._runEventFunction(this.sections[instanceNdx].onBlockSelect, evt);
        }
    },
    _onBlockDeselect: function(evt) {
        var instanceNdx = this._findSectionIndex(evt.originalEvent.detail.sectionId)

        if (instanceNdx !== -1) {
            this._runEventFunction(this.sections[instanceNdx].onBlockDeselect, evt);
        }
    },
    register: function (type, constructor) {
        this.constructors[type] = constructor;
        $('[data-section-type=' + type + ']').each(function (index, container) {
            this._createSection(container, constructor);
        }.bind(this));
    }
};

//Theme sections
theme.Sections = {};
theme.Sections.Banner = function (container) {
  var $win = $(window);
      // Parallax
    var $parallax = $('.section-parallax .section__image');

    if ($parallax) {
      $parallax.each(function() {
        var $this         = $(this);
        var startValue = -400;
        var parallaxValue = startValue - (50 - (startValue - 50));
        
        $win
          .on('scroll', function() {
            var winST        = $win.scrollTop();
            var elementOT        = $this.offset().top;
            var elementOB        = $this.offset().top + $this.outerHeight();
            var winHeight        = $win.outerHeight();
            var winSB            = winST + winHeight;
            var scrollVisibility = elementOB - (elementOT - winHeight);

            if (winSB > elementOT && winST < elementOB) {
              $this.css({
                'transform' : 'translate3d(0px, ' + (startValue - (parallaxValue * ((winST - (elementOT - winHeight)) / scrollVisibility))) + 'px, 0px)'
              });
            }
          });
      });
    }
 
   $('.section-parallax').addClass('loaded');
   var self = this;
    $(window).resize(self.resize);
    setTimeout(function() {
        self.resize();
    }, 500);
  theme.Search.initBanner(container);

  /*
    var checkIfiPad = navigator.userAgent.match(/iPad/i);
    if (checkIfiPad != null) {
      $('.banner-content').css('background-attachment', 'scroll');
    }
    */
};
theme.Sections.Banner.prototype = {
    resize: function() {
        setTimeout(function() {
            $(window).trigger('resize.px.parallax');
            $(window).trigger('scroll');
        }, 375);
    },
    reset: function() {
        self._oldHeight = $(document).height();
        self._stopper = 0;
    },
    onLoad: function(evt) {
         $('.section-parallax').addClass('loaded');
    }
};

theme.Sections.Blog = function(container) {
    (function() {
        var $filterBy = $('#BlogTagFilter');
        if ($filterBy.length > 0) {
            $filterBy.on('change', function() {
                location.href =  $(this).val();
            });
        }
    })();

    theme.Tabs.init(container);
    theme.Slick.initMobileBlog(container);
};
theme.Sections.Blog.prototype = {
    onUnload: function(evt) {
        theme.Slick.unintMobileBlog($('[data-section-id]', evt.target)[0]);
    }
}

theme.Sections.Cart = function(container) {
    theme.Cart.init(container);
};

theme.Sections.Maps = function(container) {
    theme.Maps();
};

theme.Sections.FeaturedCollection = function(container) {
    theme.Slick.initFeaturedCollection(container);
};
theme.Sections.FeaturedCollection.prototype = {
    onUnload: function(evt) {
        theme.Slick.uninitFeaturedCollection($('[data-section-id]', evt.target)[0]);
    },
};

theme.Sections.Footer = function(container) {
    theme.Search.initFooter(container);
    theme.Navigation.Mobile.initFooter(container);
};

theme.Sections.Header = function (container) {
    theme.Navigation.init(container);
    theme.Navigation.initTimber(container);
    theme.Navigation.initMobileNav(container);
    theme.Search.initHeader(container);
};

theme.Sections.Instafeed = function (container) {
    var $container = $(container);
    var loft_instaTok = $container.data('insta-token');
    if (loft_instaTok && loft_instaTok !== '') {
        var target_id = $container.attr('id');
        var limit = $container.data('amount');
        var images = $container.data('images');
        var imageOutput;
        if (images == 3) {
            imageOutput = '<a href="{{link}}" target="_blank" data-bgset="{{image}}" data-sizes="auto" data-parent-fit="cover" style="background-image: url({{model.images.low_resolution.url}});" class=" lazyload instagram--square flex-item width--large-3 width--medium-3"><img src="//cdn.shopify.com/s/files/1/0024/8247/1030/t/6/assets/instagram-feed.svg?6324046816603645140"><h2 class="insta-two">{{model.short_caption}}</h2></a>';
        } else {
            imageOutput = '<a href="{{link}}" target="_blank" data-bgset="{{image}}" data-sizes="auto" data-parent-fit="cover" style="background-image: url({{model.images.low_resolution.url}});"  class="lazyload instagram--square flex-item width--large-4 width--medium-6"><img src="//cdn.shopify.com/s/files/1/0024/8247/1030/t/6/assets/instagram-feed.svg?6324046816603645140"><h2 class="insta-two">{{model.short_caption}}</h2></a>';
        }

        var userFeed = new Instafeed({
            get: 'user',
            userId: 'self',
            accessToken: loft_instaTok,
            sortBy: 'most-recent',
            resolution: 'standard_resolution',
            limit: limit,
            filter: function (image) {
                var MAX_LENGTH = 100;
                if (image.caption && image.caption.text) {
                    if(image.caption.text.length > MAX_LENGTH) {
                        //Fit an ellipses to the end
                        var i = MAX_LENGTH - 3;
                        for(; i >= 0; --i) {
                            if(image.caption.text[i] === ' ') {
                                break;
                            }
                        }
                        if(i <= 0) {
                            image.short_caption = image.caption.text.slice(0, MAX_LENGTH);
                        } else {
                            image.short_caption = image.caption.text.slice(0, i) + '...';
                        }
                    } else {
                        image.short_caption = image.caption.text;
                    }
                } else {
                    image.short_caption = "";
                }
                // ensure the filter doesn't reject any images
                return true;
            },
            template: imageOutput,
            target: target_id
        });
        userFeed.run();
    }
};
theme.Sections.Masonry = function(container) {
    theme.Slick.initMasonry(container);
      /* handle browser resize too */
          $(window).resize(function (event) {
            if($(window).width() >= 769){
              $('.collection-in-grid h2').trunk8({
                lines: 2,
                fill: '&hellip;',
                parseHTML: 'true',
                width:'auto'
              });
              $('.collection-grid-desc').trunk8({
                lines: 4,
                fill: '&hellip;',
                parseHTML: 'true',
                width:'auto'
              });
            };
          });
};
theme.Sections.Masonry.prototype = {
    onUnload: function(evt) {
        theme.Slick.uninitMasonry($('[data-section-id]', evt.target)[0]);
    },
    onBlockSelect: function(evt) {
        var $target = $(evt.target);
        var ndx = $target.data('slick-index');
        theme.Slick.masonryGotoNdx($target.closest('[data-section-id]'), ndx);
    }
};

theme.Sections.ProductTemplate = function (container) {
    var $mainContainer = $(container);    
    if($mainContainer.closest('[data-section-id="product-template"]').length > 0) {
        theme.Products.init(container);
        theme.Slick.initProdPhoto(container);
        theme.Slick.initVariant(container);
        theme.Variants.init(container, true);
        theme.ProductPage.init(container);
    } else {
        $mainContainer.find('.desktop-featured-product').each(function() {
            var $container = $(this);
            theme.Products.init($container);
            theme.Slick.initFeaturedCollection($container);
            theme.Variants.init($container);
        });
    }
    theme.Navigation.initMobileNav();
};
theme.Sections.ProductTemplate.prototype = {
    onUnload: function(evt) {
        var container = $('[data-section-id]', evt.target)[0];
        theme.Slick.uninitFeaturedCollection(container);
        theme.Slick.uninitProdPhoto(container);
        theme.Slick.uninitVariant(container);
    }
};

theme.Sections.SearchTemplate = function(container) {
    theme.Search.initBaseSearch(container);
    theme.Search.initSearchPage(container);
};

$(function() {
    var sections = new theme.SectionManager();
    sections.register('instafeed', theme.Sections.Instafeed);
    sections.register('header', theme.Sections.Header);
    sections.register('product', theme.Sections.ProductTemplate);
    sections.register('banner', theme.Sections.Banner);
    sections.register('masonry', theme.Sections.Masonry);
    sections.register('blog', theme.Sections.Blog);
    sections.register('blogs', theme.Sections.Blog);
    sections.register('cart', theme.Sections.Cart);
    sections.register('map', theme.Maps);
    sections.register('collection', theme.Filters);
    sections.register('featured-collection', theme.Sections.FeaturedCollection);
    sections.register('search-template', theme.Sections.SearchTemplate);
});
