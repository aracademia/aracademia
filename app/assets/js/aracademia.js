/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
    if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.flexboxlegacy=function(){return I("boxDirection")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*
 HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 */
(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
    a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
    c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
    "undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",version:"3.6.2pre",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();
    for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||function(a){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);

/*! Respond.js v1.3.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var b=m.shift();v(b.href,function(c){p(c,b.href,b.media),h[b.href]=!0,a.setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(b){var h="clientWidth",k=d[h],m="CSS1Compat"===c.compatMode&&k||c.body[h]||k,n={},o=l[l.length-1],p=(new Date).getTime();if(b&&q&&i>p-q)return a.clearTimeout(r),r=a.setTimeout(u,i),void 0;q=p;for(var v in e)if(e.hasOwnProperty(v)){var w=e[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?t||s():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?t||s():1)),w.hasquery&&(z&&A||!(z||m>=x)||!(A||y>=m))||(n[w.media]||(n[w.media]=[]),n[w.media].push(f[w.rules]))}for(var C in g)g.hasOwnProperty(C)&&g[C]&&g[C].parentNode===j&&j.removeChild(g[C]);for(var D in n)if(n.hasOwnProperty(D)){var E=c.createElement("style"),F=n[D].join("\n");E.type="text/css",E.media=D,j.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(c.createTextNode(F)),g.push(E)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);

/*
 By Osvaldas Valutis, www.osvaldas.info
 Available for use under the MIT License
 */



;(function( $, window, document, undefined )
{
    $.fn.doubleTapToGo = function( params )
    {
        if( !( 'ontouchstart' in window ) &&
            !navigator.msMaxTouchPoints &&
            !navigator.userAgent.toLowerCase().match( /windows phone os 7/i ) ) return false;

        this.each( function()
        {
            var curItem = false;

            $( this ).on( 'click', function( e )
            {
                var item = $( this );
                if( item[ 0 ] != curItem[ 0 ] )
                {
                    e.preventDefault();
                    curItem = item;
                }
            });

            $( document ).on( 'click touchstart MSPointerDown', function( e )
            {
                var resetItem = true,
                    parents	  = $( e.target ).parents();

                for( var i = 0; i < parents.length; i++ )
                    if( parents[ i ] == curItem[ 0 ] )
                        resetItem = false;

                if( resetItem )
                    curItem = false;
            });
        });
        return this;
    };
})( jQuery, window, document );


/*! DataTables 1.10.0
 * Â©2008-2014 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     DataTables
 * @description Paginate, search and order HTML tables
 * @version     1.10.0
 * @file        jquery.dataTables.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2008-2014 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

/*jslint evil: true, undef: true, browser: true */
/*globals $,require,jQuery,define,_selector_run,_selector_opts,_selector_first,_selector_row_indexes,_ext,_Api,_api_register,_api_registerPlural,_re_new_lines,_re_html,_re_formatted_numeric,_re_escape_regex,_empty,_intVal,_numToDecimal,_isNumber,_isHtml,_htmlNumeric,_pluck,_pluck_order,_range,_stripHtml,_unique,_fnBuildAjax,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnAjaxDataSrc,_fnAddColumn,_fnColumnOptions,_fnAdjustColumnSizing,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnVisbleColumns,_fnGetColumns,_fnColumnTypes,_fnApplyColumnDefs,_fnHungarianMap,_fnCamelToHungarian,_fnLanguageCompat,_fnBrowserDetect,_fnAddData,_fnAddTr,_fnNodeToDataIndex,_fnNodeToColumnIndex,_fnGetCellData,_fnSetCellData,_fnSplitObjNotation,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnGetDataMaster,_fnClearTable,_fnDeleteIndex,_fnInvalidateRow,_fnGetRowElements,_fnCreateTr,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAddOptionsHtml,_fnDetectHeader,_fnGetUniqueThs,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnFilterCreateSearch,_fnEscapeRegex,_fnFilterData,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnInfoMacros,_fnInitialise,_fnInitComplete,_fnLengthChange,_fnFeatureHtmlLength,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnFeatureHtmlTable,_fnScrollDraw,_fnApplyToChildren,_fnCalculateColumnWidths,_fnThrottle,_fnConvertToWidth,_fnScrollingWidthAdjust,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnScrollBarWidth,_fnSortFlatten,_fnSort,_fnSortAria,_fnSortListener,_fnSortAttachListener,_fnSortingClasses,_fnSortData,_fnSaveState,_fnLoadState,_fnSettingsFromNode,_fnLog,_fnMap,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnLengthOverflow,_fnRenderer,_fnDataSource,_fnRowAttributes*/

(/** @lends <global> */function( window, document, undefined ) {

    (function( factory ) {
        "use strict";

        if ( typeof define === 'function' && define.amd ) {
            // Define as an AMD module if possible
            define( 'datatables', ['jquery'], factory );
        }
        else if ( typeof exports === 'object' ) {
            // Node/CommonJS
            factory( require( 'jquery' ) );
        }
        else if ( jQuery && !jQuery.fn.dataTable ) {
            // Define using browser globals otherwise
            // Prevent multiple instantiations if the script is loaded twice
            factory( jQuery );
        }
    }
    (/** @lends <global> */function( $ ) {
        "use strict";

        /**
         * DataTables is a plug-in for the jQuery Javascript library. It is a highly
         * flexible tool, based upon the foundations of progressive enhancement,
         * which will add advanced interaction controls to any HTML table. For a
         * full list of features please refer to
         * [DataTables.net](href="http://datatables.net).
         *
         * Note that the `DataTable` object is not a global variable but is aliased
         * to `jQuery.fn.DataTable` and `jQuery.fn.dataTable` through which it may
         * be  accessed.
         *
         *  @class
         *  @param {object} [init={}] Configuration object for DataTables. Options
         *    are defined by {@link DataTable.defaults}
         *  @requires jQuery 1.7+
         *
         *  @example
         *    // Basic initialisation
         *    $(document).ready( function {
	 *      $('#example').dataTable();
	 *    } );
         *
         *  @example
         *    // Initialisation with configuration options - in this case, disable
         *    // pagination and sorting.
         *    $(document).ready( function {
	 *      $('#example').dataTable( {
	 *        "paginate": false,
	 *        "sort": false
	 *      } );
	 *    } );
         */
        var DataTable;


        /*
         * It is useful to have variables which are scoped locally so only the
         * DataTables functions can access them and they don't leak into global space.
         * At the same time these functions are often useful over multiple files in the
         * core and API, so we list, or at least document, all variables which are used
         * by DataTables as private variables here. This also ensures that there is no
         * clashing of variable names and that they can easily referenced for reuse.
         */


        // Defined else where
        //  _selector_run
        //  _selector_opts
        //  _selector_first
        //  _selector_row_indexes

        var _ext; // DataTable.ext
        var _Api; // DataTable.Api
        var _api_register; // DataTable.Api.register
        var _api_registerPlural; // DataTable.Api.registerPlural

        var _re_dic = {};
        var _re_new_lines = /[\r\n]/g;
        var _re_html = /<.*?>/g;
        var _re_date_start = /^[\d\+\-a-zA-Z]/;

        // Escape regular expression special characters
        var _re_escape_regex = new RegExp( '(\\' + [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-' ].join('|\\') + ')', 'g' );

        // U+2009 is thin space and U+202F is narrow no-break space, both used in many
        // standards as thousands separators
        var _re_formatted_numeric = /[',$Â£â‚¬Â¥%\u2009\u202F]/g;


        var _empty = function ( d ) {
            return !d || d === '-' ? true : false;
        };


        var _intVal = function ( s ) {
            var integer = parseInt( s, 10 );
            return !isNaN(integer) && isFinite(s) ? integer : null;
        };

        // Convert from a formatted number with characters other than `.` as the
        // decimal place, to a Javascript number
        var _numToDecimal = function ( num, decimalPoint ) {
            // Cache created regular expressions for speed as this function is called often
            if ( ! _re_dic[ decimalPoint ] ) {
                _re_dic[ decimalPoint ] = new RegExp( _fnEscapeRegex( decimalPoint ), 'g' );
            }
            return typeof num === 'string' ?
                num.replace( /\./g, '' ).replace( _re_dic[ decimalPoint ], '.' ) :
                num;
        };


        var _isNumber = function ( d, decimalPoint, formatted ) {
            var strType = typeof d === 'string';

            if ( decimalPoint && strType ) {
                d = _numToDecimal( d, decimalPoint );
            }

            if ( formatted && strType ) {
                d = d.replace( _re_formatted_numeric, '' );
            }

            return !d || d==='-' || (!isNaN( parseFloat(d) ) && isFinite( d ));
        };


        // A string without HTML in it can be considered to be HTML still
        var _isHtml = function ( d ) {
            return !d || typeof d === 'string';
        };


        var _htmlNumeric = function ( d, decimalPoint, formatted ) {
            if ( _empty( d ) ) {
                return true;
            }

            var html = _isHtml( d );
            return ! html ?
                null :
                _isNumber( _stripHtml( d ), decimalPoint, formatted ) ?
                    true :
                    null;
        };


        var _pluck = function ( a, prop, prop2 ) {
            var out = [];
            var i=0, ien=a.length;

            // Could have the test in the loop for slightly smaller code, but speed
            // is essential here
            if ( prop2 !== undefined ) {
                for ( ; i<ien ; i++ ) {
                    if ( a[i] && a[i][ prop ] ) {
                        out.push( a[i][ prop ][ prop2 ] );
                    }
                }
            }
            else {
                for ( ; i<ien ; i++ ) {
                    if ( a[i] ) {
                        out.push( a[i][ prop ] );
                    }
                }
            }

            return out;
        };


        // Basically the same as _pluck, but rather than looping over `a` we use `order`
        // as the indexes to pick from `a`
        var _pluck_order = function ( a, order, prop, prop2 )
        {
            var out = [];
            var i=0, ien=order.length;

            // Could have the test in the loop for slightly smaller code, but speed
            // is essential here
            if ( prop2 !== undefined ) {
                for ( ; i<ien ; i++ ) {
                    out.push( a[ order[i] ][ prop ][ prop2 ] );
                }
            }
            else {
                for ( ; i<ien ; i++ ) {
                    out.push( a[ order[i] ][ prop ] );
                }
            }

            return out;
        };


        var _range = function ( len, start )
        {
            var out = [];
            var end;

            if ( start === undefined ) {
                start = 0;
                end = len;
            }
            else {
                end = start;
                start = len;
            }

            for ( var i=start ; i<end ; i++ ) {
                out.push( i );
            }

            return out;
        };


        var _stripHtml = function ( d ) {
            return d.replace( _re_html, '' );
        };


        /**
         * Find the unique elements in a source array.
         *
         * @param  {array} src Source array
         * @return {array} Array of unique items
         * @ignore
         */
        var _unique = function ( src )
        {
            // A faster unique method is to use object keys to identify used values,
            // but this doesn't work with arrays or objects, which we must also
            // consider. See jsperf.com/compare-array-unique-versions/4 for more
            // information.
            var
                out = [],
                val,
                i, ien=src.length,
                j, k=0;

            again: for ( i=0 ; i<ien ; i++ ) {
                val = src[i];

                for ( j=0 ; j<k ; j++ ) {
                    if ( out[j] === val ) {
                        continue again;
                    }
                }

                out.push( val );
                k++;
            }

            return out;
        };



        /**
         * Create a mapping object that allows camel case parameters to be looked up
         * for their Hungarian counterparts. The mapping is stored in a private
         * parameter called `_hungarianMap` which can be accessed on the source object.
         *  @param {object} o
         *  @memberof DataTable#oApi
         */
        function _fnHungarianMap ( o )
        {
            var
                hungarian = 'a aa ai ao as b fn i m o s ',
                match,
                newKey,
                map = {};

            $.each( o, function (key, val) {
                match = key.match(/^([^A-Z]+?)([A-Z])/);

                if ( match && hungarian.indexOf(match[1]+' ') !== -1 )
                {
                    newKey = key.replace( match[0], match[2].toLowerCase() );
                    map[ newKey ] = key;

                    //console.log( key, match );
                    if ( match[1] === 'o' )
                    {
                        _fnHungarianMap( o[key] );
                    }
                }
            } );

            o._hungarianMap = map;
        }


        /**
         * Convert from camel case parameters to Hungarian, based on a Hungarian map
         * created by _fnHungarianMap.
         *  @param {object} src The model object which holds all parameters that can be
         *    mapped.
         *  @param {object} user The object to convert from camel case to Hungarian.
         *  @param {boolean} force When set to `true`, properties which already have a
         *    Hungarian value in the `user` object will be overwritten. Otherwise they
         *    won't be.
         *  @memberof DataTable#oApi
         */
        function _fnCamelToHungarian ( src, user, force )
        {
            if ( ! src._hungarianMap ) {
                _fnHungarianMap( src );
            }

            var hungarianKey;

            $.each( user, function (key, val) {
                hungarianKey = src._hungarianMap[ key ];

                if ( hungarianKey !== undefined && (force || user[hungarianKey] === undefined) )
                {
                    // For objects, we need to buzz down into the object to copy parameters
                    if ( hungarianKey.charAt(0) === 'o' )
                    {
                        // Copy the camelCase options over to the hungarian
                        if ( ! user[ hungarianKey ] ) {
                            user[ hungarianKey ] = {};
                        }
                        $.extend( true, user[hungarianKey], user[key] );

                        _fnCamelToHungarian( src[hungarianKey], user[hungarianKey], force );
                    }
                    else {
                        user[hungarianKey] = user[ key ];
                    }
                }
            } );
        }


        /**
         * Language compatibility - when certain options are given, and others aren't, we
         * need to duplicate the values over, in order to provide backwards compatibility
         * with older language files.
         *  @param {object} oSettings dataTables settings object
         *  @memberof DataTable#oApi
         */
        function _fnLanguageCompat( lang )
        {
            var defaults = DataTable.defaults.oLanguage;
            var zeroRecords = lang.sZeroRecords;

            /* Backwards compatibility - if there is no sEmptyTable given, then use the same as
             * sZeroRecords - assuming that is given.
             */
            if ( ! lang.sEmptyTable && zeroRecords &&
                defaults.sEmptyTable === "No data available in table" )
            {
                _fnMap( lang, lang, 'sZeroRecords', 'sEmptyTable' );
            }

            /* Likewise with loading records */
            if ( ! lang.sLoadingRecords && zeroRecords &&
                defaults.sLoadingRecords === "Loading..." )
            {
                _fnMap( lang, lang, 'sZeroRecords', 'sLoadingRecords' );
            }

            // Old parameter name of the thousands separator mapped onto the new
            if ( lang.sInfoThousands ) {
                lang.sThousands = lang.sInfoThousands;
            }

            var decimal = lang.sDecimal;
            if ( decimal ) {
                _addNumericSort( decimal );
            }
        }


        /**
         * Map one parameter onto another
         *  @param {object} o Object to map
         *  @param {*} knew The new parameter name
         *  @param {*} old The old parameter name
         */
        var _fnCompatMap = function ( o, knew, old ) {
            if ( o[ knew ] !== undefined ) {
                o[ old ] = o[ knew ];
            }
        };


        /**
         * Provide backwards compatibility for the main DT options. Note that the new
         * options are mapped onto the old parameters, so this is an external interface
         * change only.
         *  @param {object} init Object to map
         */
        function _fnCompatOpts ( init )
        {
            _fnCompatMap( init, 'ordering',      'bSort' );
            _fnCompatMap( init, 'orderMulti',    'bSortMulti' );
            _fnCompatMap( init, 'orderClasses',  'bSortClasses' );
            _fnCompatMap( init, 'orderCellsTop', 'bSortCellsTop' );
            _fnCompatMap( init, 'order',         'aaSorting' );
            _fnCompatMap( init, 'orderFixed',    'aaSortingFixed' );
            _fnCompatMap( init, 'paging',        'bPaginate' );
            _fnCompatMap( init, 'pagingType',    'sPaginationType' );
            _fnCompatMap( init, 'pageLength',    'iDisplayLength' );
            _fnCompatMap( init, 'searching',     'bFilter' );
        }


        /**
         * Provide backwards compatibility for column options. Note that the new options
         * are mapped onto the old parameters, so this is an external interface change
         * only.
         *  @param {object} init Object to map
         */
        function _fnCompatCols ( init )
        {
            _fnCompatMap( init, 'orderable',     'bSortable' );
            _fnCompatMap( init, 'orderData',     'aDataSort' );
            _fnCompatMap( init, 'orderSequence', 'asSorting' );
            _fnCompatMap( init, 'orderDataType', 'sortDataType' );
        }


        /**
         * Browser feature detection for capabilities, quirks
         *  @param {object} settings dataTables settings object
         *  @memberof DataTable#oApi
         */
        function _fnBrowserDetect( settings )
        {
            var browser = settings.oBrowser;

            // Scrolling feature / quirks detection
            var n = $('<div/>')
                .css( {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: 1,
                    width: 1,
                    overflow: 'hidden'
                } )
                .append(
                    $('<div/>')
                        .css( {
                            position: 'absolute',
                            top: 1,
                            left: 1,
                            width: 100,
                            overflow: 'scroll'
                        } )
                        .append(
                            $('<div class="test"/>')
                                .css( {
                                    width: '100%',
                                    height: 10
                                } )
                        )
                )
                .appendTo( 'body' );

            var test = n.find('.test');

            // IE6/7 will oversize a width 100% element inside a scrolling element, to
            // include the width of the scrollbar, while other browsers ensure the inner
            // element is contained without forcing scrolling
            browser.bScrollOversize = test[0].offsetWidth === 100;

            // In rtl text layout, some browsers (most, but not all) will place the
            // scrollbar on the left, rather than the right.
            browser.bScrollbarLeft = test.offset().left !== 1;

            n.remove();
        }


        /**
         * Array.prototype reduce[Right] method, used for browsers which don't support
         * JS 1.6. Done this way to reduce code size, since we iterate either way
         *  @param {object} settings dataTables settings object
         *  @memberof DataTable#oApi
         */
        function _fnReduce ( that, fn, init, start, end, inc )
        {
            var
                i = start,
                value,
                isSet = false;

            if ( init !== undefined ) {
                value = init;
                isSet = true;
            }

            while ( i !== end ) {
                if ( ! that.hasOwnProperty(i) ) {
                    continue;
                }

                value = isSet ?
                    fn( value, that[i], i, that ) :
                    that[i];

                isSet = true;
                i += inc;
            }

            return value;
        }

        /**
         * Add a column to the list used for the table with default values
         *  @param {object} oSettings dataTables settings object
         *  @param {node} nTh The th element for this column
         *  @memberof DataTable#oApi
         */
        function _fnAddColumn( oSettings, nTh )
        {
            // Add column to aoColumns array
            var oDefaults = DataTable.defaults.column;
            var iCol = oSettings.aoColumns.length;
            var oCol = $.extend( {}, DataTable.models.oColumn, oDefaults, {
                "nTh": nTh ? nTh : document.createElement('th'),
                "sTitle":    oDefaults.sTitle    ? oDefaults.sTitle    : nTh ? nTh.innerHTML : '',
                "aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
                "mData": oDefaults.mData ? oDefaults.mData : iCol,
                idx: iCol
            } );
            oSettings.aoColumns.push( oCol );

            // Add search object for column specific search. Note that the `searchCols[ iCol ]`
            // passed into extend can be undefined. This allows the user to give a default
            // with only some of the parameters defined, and also not give a default
            var searchCols = oSettings.aoPreSearchCols;
            searchCols[ iCol ] = $.extend( {}, DataTable.models.oSearch, searchCols[ iCol ] );

            // Use the default column options function to initialise classes etc
            _fnColumnOptions( oSettings, iCol, null );
        }


        /**
         * Apply options for a column
         *  @param {object} oSettings dataTables settings object
         *  @param {int} iCol column index to consider
         *  @param {object} oOptions object with sType, bVisible and bSearchable etc
         *  @memberof DataTable#oApi
         */
        function _fnColumnOptions( oSettings, iCol, oOptions )
        {
            var oCol = oSettings.aoColumns[ iCol ];
            var oClasses = oSettings.oClasses;
            var th = $(oCol.nTh);

            // Try to get width information from the DOM. We can't get it from CSS
            // as we'd need to parse the CSS stylesheet. `width` option can override
            if ( ! oCol.sWidthOrig ) {
                // Width attribute
                oCol.sWidthOrig = th.attr('width') || null;

                // Style attribute
                var t = (th.attr('style') || '').match(/width:\s*(\d+[pxem%])/);
                if ( t ) {
                    oCol.sWidthOrig = t[1];
                }
            }

            /* User specified column options */
            if ( oOptions !== undefined && oOptions !== null )
            {
                // Backwards compatibility
                _fnCompatCols( oOptions );

                // Map camel case parameters to their Hungarian counterparts
                _fnCamelToHungarian( DataTable.defaults.column, oOptions );

                /* Backwards compatibility for mDataProp */
                if ( oOptions.mDataProp !== undefined && !oOptions.mData )
                {
                    oOptions.mData = oOptions.mDataProp;
                }

                if ( oOptions.sType )
                {
                    oCol._sManualType = oOptions.sType;
                }

                // `class` is a reserved word in Javascript, so we need to provide
                // the ability to use a valid name for the camel case input
                if ( oOptions.className && ! oOptions.sClass )
                {
                    oOptions.sClass = oOptions.className;
                }

                $.extend( oCol, oOptions );
                _fnMap( oCol, oOptions, "sWidth", "sWidthOrig" );

                /* iDataSort to be applied (backwards compatibility), but aDataSort will take
                 * priority if defined
                 */
                if ( typeof oOptions.iDataSort === 'number' )
                {
                    oCol.aDataSort = [ oOptions.iDataSort ];
                }
                _fnMap( oCol, oOptions, "aDataSort" );
            }

            /* Cache the data get and set functions for speed */
            var mDataSrc = oCol.mData;
            var mData = _fnGetObjectDataFn( mDataSrc );
            var mRender = oCol.mRender ? _fnGetObjectDataFn( oCol.mRender ) : null;

            var attrTest = function( src ) {
                return typeof src === 'string' && src.indexOf('@') !== -1;
            };
            oCol._bAttrSrc = $.isPlainObject( mDataSrc ) && (
                attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter)
                );

            oCol.fnGetData = function (oData, sSpecific) {
                var innerData = mData( oData, sSpecific );

                if ( oCol.mRender && (sSpecific && sSpecific !== '') )
                {
                    return mRender( innerData, sSpecific, oData );
                }
                return innerData;
            };
            oCol.fnSetData = _fnSetObjectDataFn( mDataSrc );

            /* Feature sorting overrides column specific when off */
            if ( !oSettings.oFeatures.bSort )
            {
                oCol.bSortable = false;
                th.addClass( oClasses.sSortableNone ); // Have to add class here as order event isn't called
            }

            /* Check that the class assignment is correct for sorting */
            var bAsc = $.inArray('asc', oCol.asSorting) !== -1;
            var bDesc = $.inArray('desc', oCol.asSorting) !== -1;
            if ( !oCol.bSortable || (!bAsc && !bDesc) )
            {
                oCol.sSortingClass = oClasses.sSortableNone;
                oCol.sSortingClassJUI = "";
            }
            else if ( bAsc && !bDesc )
            {
                oCol.sSortingClass = oClasses.sSortableAsc;
                oCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;
            }
            else if ( !bAsc && bDesc )
            {
                oCol.sSortingClass = oClasses.sSortableDesc;
                oCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;
            }
            else
            {
                oCol.sSortingClass = oClasses.sSortable;
                oCol.sSortingClassJUI = oClasses.sSortJUI;
            }
        }


        /**
         * Adjust the table column widths for new data. Note: you would probably want to
         * do a redraw after calling this function!
         *  @param {object} settings dataTables settings object
         *  @memberof DataTable#oApi
         */
        function _fnAdjustColumnSizing ( settings )
        {
            /* Not interested in doing column width calculation if auto-width is disabled */
            if ( settings.oFeatures.bAutoWidth !== false )
            {
                var columns = settings.aoColumns;

                _fnCalculateColumnWidths( settings );
                for ( var i=0 , iLen=columns.length ; i<iLen ; i++ )
                {
                    columns[i].nTh.style.width = columns[i].sWidth;
                }
            }

            var scroll = settings.oScroll;
            if ( scroll.sY !== '' || scroll.sX !== '')
            {
                _fnScrollDraw( settings );
            }

            _fnCallbackFire( settings, null, 'column-sizing', [settings] );
        }


        /**
         * Covert the index of a visible column to the index in the data array (take account
         * of hidden columns)
         *  @param {object} oSettings dataTables settings object
         *  @param {int} iMatch Visible column index to lookup
         *  @returns {int} i the data index
         *  @memberof DataTable#oApi
         */
        function _fnVisibleToColumnIndex( oSettings, iMatch )
        {
            var aiVis = _fnGetColumns( oSettings, 'bVisible' );

            return typeof aiVis[iMatch] === 'number' ?
                aiVis[iMatch] :
                null;
        }


        /**
         * Covert the index of an index in the data array and convert it to the visible
         *   column index (take account of hidden columns)
         *  @param {int} iMatch Column index to lookup
         *  @param {object} oSettings dataTables settings object
         *  @returns {int} i the data index
         *  @memberof DataTable#oApi
         */
        function _fnColumnIndexToVisible( oSettings, iMatch )
        {
            var aiVis = _fnGetColumns( oSettings, 'bVisible' );
            var iPos = $.inArray( iMatch, aiVis );

            return iPos !== -1 ? iPos : null;
        }


        /**
         * Get the number of visible columns
         *  @param {object} oSettings dataTables settings object
         *  @returns {int} i the number of visible columns
         *  @memberof DataTable#oApi
         */
        function _fnVisbleColumns( oSettings )
        {
            return _fnGetColumns( oSettings, 'bVisible' ).length;
        }


        /**
         * Get an array of column indexes that match a given property
         *  @param {object} oSettings dataTables settings object
         *  @param {string} sParam Parameter in aoColumns to look for - typically
         *    bVisible or bSearchable
         *  @returns {array} Array of indexes with matched properties
         *  @memberof DataTable#oApi
         */
        function _fnGetColumns( oSettings, sParam )
        {
            var a = [];

            $.map( oSettings.aoColumns, function(val, i) {
                if ( val[sParam] ) {
                    a.push( i );
                }
            } );

            return a;
        }


        /**
         * Calculate the 'type' of a column
         *  @param {object} settings dataTables settings object
         *  @memberof DataTable#oApi
         */
        function _fnColumnTypes ( settings )
        {
            var columns = settings.aoColumns;
            var data = settings.aoData;
            var types = DataTable.ext.type.detect;
            var i, ien, j, jen, k, ken;
            var col, cell, detectedType, cache;

            // For each column, spin over the
            for ( i=0, ien=columns.length ; i<ien ; i++ ) {
                col = columns[i];
                cache = [];

                if ( ! col.sType && col._sManualType ) {
                    col.sType = col._sManualType;
                }
                else if ( ! col.sType ) {
                    for ( j=0, jen=types.length ; j<jen ; j++ ) {
                        for ( k=0, ken=data.length ; k<ken ; k++ ) {
                            // Use a cache array so we only need to get the type data
                            // from the formatter once (when using multiple detectors)
                            if ( cache[k] === undefined ) {
                                cache[k] = _fnGetCellData( settings, k, i, 'type' );
                            }

                            detectedType = types[j]( cache[k], settings );

                            // Doesn't match, so break early, since this type can't
                            // apply to this column. Also, HTML is a special case since
                            // it is so similar to `string`. Just a single match is
                            // needed for a column to be html type
                            if ( ! detectedType || detectedType === 'html' ) {
                                break;
                            }
                        }

                        // Type is valid for all data points in the column - use this
                        // type
                        if ( detectedType ) {
                            col.sType = detectedType;
                            break;
                        }
                    }

                    // Fall back - if no type was detected, always use string
                    if ( ! col.sType ) {
                        col.sType = 'string';
                    }
                }
            }
        }


        /**
         * Take the column definitions and static columns arrays and calculate how
         * they relate to column indexes. The callback function will then apply the
         * definition found for a column to a suitable configuration object.
         *  @param {object} oSettings dataTables settings object
         *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
         *  @param {array} aoCols The aoColumns array that defines columns individually
         *  @param {function} fn Callback function - takes two parameters, the calculated
         *    column index and the definition for that column.
         *  @memberof DataTable#oApi
         */
        function _fnApplyColumnDefs( oSettings, aoColDefs, aoCols, fn )
        {
            var i, iLen, j, jLen, k, kLen, def;
            var columns = oSettings.aoColumns;

            // Column definitions with aTargets
            if ( aoColDefs )
            {
                /* Loop over the definitions array - loop in reverse so first instance has priority */
                for ( i=aoColDefs.length-1 ; i>=0 ; i-- )
                {
                    def = aoColDefs[i];

                    /* Each definition can target multiple columns, as it is an array */
                    var aTargets = def.targets !== undefined ?
                        def.targets :
                        def.aTargets;

                    if ( ! $.isArray( aTargets ) )
                    {
                        aTargets = [ aTargets ];
                    }

                    for ( j=0, jLen=aTargets.length ; j<jLen ; j++ )
                    {
                        if ( typeof aTargets[j] === 'number' && aTargets[j] >= 0 )
                        {
                            /* Add columns that we don't yet know about */
                            while( columns.length <= aTargets[j] )
                            {
                                _fnAddColumn( oSettings );
                            }

                            /* Integer, basic index */
                            fn( aTargets[j], def );
                        }
                        else if ( typeof aTargets[j] === 'number' && aTargets[j] < 0 )
                        {
                            /* Negative integer, right to left column counting */
                            fn( columns.length+aTargets[j], def );
                        }
                        else if ( typeof aTargets[j] === 'string' )
                        {
                            /* Class name matching on TH element */
                            for ( k=0, kLen=columns.length ; k<kLen ; k++ )
                            {
                                if ( aTargets[j] == "_all" ||
                                    $(columns[k].nTh).hasClass( aTargets[j] ) )
                                {
                                    fn( k, def );
                                }
                            }
                        }
                    }
                }
            }

            // Statically defined columns array
            if ( aoCols )
            {
                for ( i=0, iLen=aoCols.length ; i<iLen ; i++ )
                {
                    fn( i, aoCols[i] );
                }
            }
        }

        /**
         * Add a data array to the table, creating DOM node etc. This is the parallel to
         * _fnGatherData, but for adding rows from a Javascript source, rather than a
         * DOM source.
         *  @param {object} oSettings dataTables settings object
         *  @param {array} aData data array to be added
         *  @param {node} [nTr] TR element to add to the table - optional. If not given,
         *    DataTables will create a row automatically
         *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
         *    if nTr is.
         *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
         *  @memberof DataTable#oApi
         */
        function _fnAddData ( oSettings, aDataIn, nTr, anTds )
        {
            /* Create the object for storing information about this new row */
            var iRow = oSettings.aoData.length;
            var oData = $.extend( true, {}, DataTable.models.oRow, {
                src: nTr ? 'dom' : 'data'
            } );

            oData._aData = aDataIn;
            oSettings.aoData.push( oData );

            /* Create the cells */
            var nTd, sThisType;
            var columns = oSettings.aoColumns;
            for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
            {
                // When working with a row, the data source object must be populated. In
                // all other cases, the data source object is already populated, so we
                // don't overwrite it, which might break bindings etc
                if ( nTr ) {
                    _fnSetCellData( oSettings, iRow, i, _fnGetCellData( oSettings, iRow, i ) );
                }
                columns[i].sType = null;
            }

            /* Add to the display array */
            oSettings.aiDisplayMaster.push( iRow );

            /* Create the DOM information */
            if ( !oSettings.oFeatures.bDeferRender )
            {
                _fnCreateTr( oSettings, iRow, nTr, anTds );
            }

            return iRow;
        }


        /**
         * Add one or more TR elements to the table. Generally we'd expect to
         * use this for reading data from a DOM sourced table, but it could be
         * used for an TR element. Note that if a TR is given, it is used (i.e.
         * it is not cloned).
         *  @param {object} settings dataTables settings object
         *  @param {array|node|jQuery} trs The TR element(s) to add to the table
         *  @returns {array} Array of indexes for the added rows
         *  @memberof DataTable#oApi
         */
        function _fnAddTr( settings, trs )
        {
            var row;

            // Allow an individual node to be passed in
            if ( ! (trs instanceof $) ) {
                trs = $(trs);
            }

            return trs.map( function (i, el) {
                row = _fnGetRowElements( settings, el );
                return _fnAddData( settings, row.data, el, row.cells );
            } );
        }


        /**
         * Take a TR element and convert it to an index in aoData
         *  @param {object} oSettings dataTables settings object
         *  @param {node} n the TR element to find
         *  @returns {int} index if the node is found, null if not
         *  @memberof DataTable#oApi
         */
        function _fnNodeToDataIndex( oSettings, n )
        {
            return (n._DT_RowIndex!==undefined) ? n._DT_RowIndex : null;
        }


        /**
         * Take a TD element and convert it into a column data index (not the visible index)
         *  @param {object} oSettings dataTables settings object
         *  @param {int} iRow The row number the TD/TH can be found in
         *  @param {node} n The TD/TH element to find
         *  @returns {int} index if the node is found, -1 if not
         *  @memberof DataTable#oApi
         */
        function _fnNodeToColumnIndex( oSettings, iRow, n )
        {
            return $.inArray( n, oSettings.aoData[ iRow ].anCells );
        }


        /**
         * Get the data for a given cell from the internal cache, taking into account data mapping
         *  @param {object} oSettings dataTables settings object
         *  @param {int} iRow aoData row id
         *  @param {int} iCol Column index
         *  @param {string} sSpecific data get type ('display', 'type' 'filter' 'sort')
         *  @returns {*} Cell data
         *  @memberof DataTable#oApi
         */
        function _fnGetCellData( oSettings, iRow, iCol, sSpecific )
        {
            var oCol = oSettings.aoColumns[iCol];
            var oData = oSettings.aoData[iRow]._aData;
            var sData = oCol.fnGetData( oData, sSpecific );

            if ( sData === undefined )
            {
                if ( oSettings.iDrawError != oSettings.iDraw && oCol.sDefaultContent === null )
                {
                    _fnLog( oSettings, 0, "Requested unknown parameter "+
                        (typeof oCol.mData=='function' ? '{function}' : "'"+oCol.mData+"'")+
                        " for row "+iRow, 4 );
                    oSettings.iDrawError = oSettings.iDraw;
                }
                return oCol.sDefaultContent;
            }

            /* When the data source is null, we can use default column data */
            if ( (sData === oData || sData === null) && oCol.sDefaultContent !== null )
            {
                sData = oCol.sDefaultContent;
            }
            else if ( typeof sData === 'function' )
            {
                // If the data source is a function, then we run it and use the return
                return sData();
            }

            if ( sData === null && sSpecific == 'display' )
            {
                return '';
            }
            return sData;
        }


        /**
         * Set the value for a specific cell, into the internal data cache
         *  @param {object} oSettings dataTables settings object
         *  @param {int} iRow aoData row id
         *  @param {int} iCol Column index
         *  @param {*} val Value to set
         *  @memberof DataTable#oApi
         */
        function _fnSetCellData( oSettings, iRow, iCol, val )
        {
            var oCol = oSettings.aoColumns[iCol];
            var oData = oSettings.aoData[iRow]._aData;

            oCol.fnSetData( oData, val );
        }


        // Private variable that is used to match action syntax in the data property object
        var __reArray = /\[.*?\]$/;
        var __reFn = /\(\)$/;

        /**
         * Split string on periods, taking into account escaped periods
         * @param  {string} str String to split
         * @return {array} Split string
         */
        function _fnSplitObjNotation( str )
        {
            return $.map( str.match(/(\\.|[^\.])+/g), function ( s ) {
                return s.replace('\\.', '.');
            } );
        }


        /**
         * Return a function that can be used to get data from a source object, taking
         * into account the ability to use nested objects as a source
         *  @param {string|int|function} mSource The data source for the object
         *  @returns {function} Data get function
         *  @memberof DataTable#oApi
         */
        function _fnGetObjectDataFn( mSource )
        {
            if ( $.isPlainObject( mSource ) )
            {
                /* Build an object of get functions, and wrap them in a single call */
                var o = {};
                $.each( mSource, function (key, val) {
                    if ( val ) {
                        o[key] = _fnGetObjectDataFn( val );
                    }
                } );

                return function (data, type, extra) {
                    var t = o[type] || o._;
                    return t !== undefined ?
                        t(data, type, extra) :
                        data;
                };
            }
            else if ( mSource === null )
            {
                /* Give an empty string for rendering / sorting etc */
                return function (data, type) {
                    return data;
                };
            }
            else if ( typeof mSource === 'function' )
            {
                return function (data, type, extra) {
                    return mSource( data, type, extra );
                };
            }
            else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
                mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
            {
                /* If there is a . in the source string then the data source is in a
                 * nested object so we loop over the data for each level to get the next
                 * level down. On each loop we test for undefined, and if found immediately
                 * return. This allows entire objects to be missing and sDefaultContent to
                 * be used if defined, rather than throwing an error
                 */
                var fetchData = function (data, type, src) {
                    var arrayNotation, funcNotation, out, innerSrc;

                    if ( src !== "" )
                    {
                        var a = _fnSplitObjNotation( src );

                        for ( var i=0, iLen=a.length ; i<iLen ; i++ )
                        {
                            // Check if we are dealing with special notation
                            arrayNotation = a[i].match(__reArray);
                            funcNotation = a[i].match(__reFn);

                            if ( arrayNotation )
                            {
                                // Array notation
                                a[i] = a[i].replace(__reArray, '');

                                // Condition allows simply [] to be passed in
                                if ( a[i] !== "" ) {
                                    data = data[ a[i] ];
                                }
                                out = [];

                                // Get the remainder of the nested object to get
                                a.splice( 0, i+1 );
                                innerSrc = a.join('.');

                                // Traverse each entry in the array getting the properties requested
                                for ( var j=0, jLen=data.length ; j<jLen ; j++ ) {
                                    out.push( fetchData( data[j], type, innerSrc ) );
                                }

                                // If a string is given in between the array notation indicators, that
                                // is used to join the strings together, otherwise an array is returned
                                var join = arrayNotation[0].substring(1, arrayNotation[0].length-1);
                                data = (join==="") ? out : out.join(join);

                                // The inner call to fetchData has already traversed through the remainder
                                // of the source requested, so we exit from the loop
                                break;
                            }
                            else if ( funcNotation )
                            {
                                // Function call
                                a[i] = a[i].replace(__reFn, '');
                                data = data[ a[i] ]();
                                continue;
                            }

                            if ( data === null || data[ a[i] ] === undefined )
                            {
                                return undefined;
                            }
                            data = data[ a[i] ];
                        }
                    }

                    return data;
                };

                return function (data, type) {
                    return fetchData( data, type, mSource );
                };
            }
            else
            {
                /* Array or flat object mapping */
                return function (data, type) {
                    return data[mSource];
                };
            }
        }


        /**
         * Return a function that can be used to set data from a source object, taking
         * into account the ability to use nested objects as a source
         *  @param {string|int|function} mSource The data source for the object
         *  @returns {function} Data set function
         *  @memberof DataTable#oApi
         */
        function _fnSetObjectDataFn( mSource )
        {
            if ( $.isPlainObject( mSource ) )
            {
                /* Unlike get, only the underscore (global) option is used for for
                 * setting data since we don't know the type here. This is why an object
                 * option is not documented for `mData` (which is read/write), but it is
                 * for `mRender` which is read only.
                 */
                return _fnSetObjectDataFn( mSource._ );
            }
            else if ( mSource === null )
            {
                /* Nothing to do when the data source is null */
                return function (data, val) {};
            }
            else if ( typeof mSource === 'function' )
            {
                return function (data, val) {
                    mSource( data, 'set', val );
                };
            }
            else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
                mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
            {
                /* Like the get, we need to get data from a nested object */
                var setData = function (data, val, src) {
                    var a = _fnSplitObjNotation( src ), b;
                    var aLast = a[a.length-1];
                    var arrayNotation, funcNotation, o, innerSrc;

                    for ( var i=0, iLen=a.length-1 ; i<iLen ; i++ )
                    {
                        // Check if we are dealing with an array notation request
                        arrayNotation = a[i].match(__reArray);
                        funcNotation = a[i].match(__reFn);

                        if ( arrayNotation )
                        {
                            a[i] = a[i].replace(__reArray, '');
                            data[ a[i] ] = [];

                            // Get the remainder of the nested object to set so we can recurse
                            b = a.slice();
                            b.splice( 0, i+1 );
                            innerSrc = b.join('.');

                            // Traverse each entry in the array setting the properties requested
                            for ( var j=0, jLen=val.length ; j<jLen ; j++ )
                            {
                                o = {};
                                setData( o, val[j], innerSrc );
                                data[ a[i] ].push( o );
                            }

                            // The inner call to setData has already traversed through the remainder
                            // of the source and has set the data, thus we can exit here
                            return;
                        }
                        else if ( funcNotation )
                        {
                            // Function call
                            a[i] = a[i].replace(__reFn, '');
                            data = data[ a[i] ]( val );
                        }

                        // If the nested object doesn't currently exist - since we are
                        // trying to set the value - create it
                        if ( data[ a[i] ] === null || data[ a[i] ] === undefined )
                        {
                            data[ a[i] ] = {};
                        }
                        data = data[ a[i] ];
                    }

                    // Last item in the input - i.e, the actual set
                    if ( aLast.match(__reFn ) )
                    {
                        // Function call
                        data = data[ aLast.replace(__reFn, '') ]( val );
                    }
                    else
                    {
                        // If array notation is used, we just want to strip it and use the property name
                        // and assign the value. If it isn't used, then we get the result we want anyway
                        data[ aLast.replace(__reArray, '') ] = val;
                    }
                };

                return function (data, val) {
                    return setData( data, val, mSource );
                };
            }
            else
            {
                /* Array or flat object mapping */
                return function (data, val) {
                    data[mSource] = val;
                };
            }
        }


        /**
         * Return an array with the full table data
         *  @param {object} oSettings dataTables settings object
         *  @returns array {array} aData Master data array
         *  @memberof DataTable#oApi
         */
        function _fnGetDataMaster ( settings )
        {
            return _pluck( settings.aoData, '_aData' );
        }


        /**
         * Nuke the table
         *  @param {object} oSettings dataTables settings object
         *  @memberof DataTable#oApi
         */
        function _fnClearTable( settings )
        {
            settings.aoData.length = 0;
            settings.aiDisplayMaster.length = 0;
            settings.aiDisplay.length = 0;
        }


        /**
         * Take an array of integers (index array) and remove a target integer (value - not
         * the key!)
         *  @param {array} a Index array to target
         *  @param {int} iTarget value to find
         *  @memberof DataTable#oApi
         */
        function _fnDeleteIndex( a, iTarget, splice )
        {
            var iTargetIndex = -1;

            for ( var i=0, iLen=a.length ; i<iLen ; i++ )
            {
                if ( a[i] == iTarget )
                {
                    iTargetIndex = i;
                }
                else if ( a[i] > iTarget )
                {
                    a[i]--;
                }
            }

            if ( iTargetIndex != -1 && splice === undefined )
            {
                a.splice( iTargetIndex, 1 );
            }
        }


        /**
         * Mark cached data as invalid such that a re-read of the data will occur when
         * the cached data is next requested. Also update from the data source object.
         *
         * @param {object} settings DataTables settings object
         * @param  {int}    rowIdx   Row index to invalidate
         * @memberof DataTable#oApi
         *
         * @todo For the modularisation of v1.11 this will need to become a callback, so
         *   the sort and filter methods can subscribe to it. That will required
         *   initialisation options for sorting, which is why it is not already baked in
         */
        function _fnInvalidateRow( settings, rowIdx, src, column )
        {
            var row = settings.aoData[ rowIdx ];
            var i, ien;

            // Are we reading last data from DOM or the data object?
            if ( src === 'dom' || ((! src || src === 'auto') && row.src === 'dom') ) {
                // Read the data from the DOM
                row._aData = _fnGetRowElements( settings, row ).data;
            }
            else {
                // Reading from data object, update the DOM
                var cells = row.anCells;

                if ( cells ) {
                    for ( i=0, ien=cells.length ; i<ien ; i++ ) {
                        cells[i].innerHTML = _fnGetCellData( settings, rowIdx, i, 'display' );
                    }
                }
            }

            row._aSortData = null;
            row._aFilterData = null;

            // Invalidate the type for a specific column (if given) or all columns since
            // the data might have changed
            var cols = settings.aoColumns;
            if ( column !== undefined ) {
                cols[ column ].sType = null;
            }
            else {
                for ( i=0, ien=cols.length ; i<ien ; i++ ) {
                    cols[i].sType = null;
                }
            }

            // Update DataTables special `DT_*` attributes for the row
            _fnRowAttributes( row );
        }


        /**
         * Build a data source object from an HTML row, reading the contents of the
         * cells that are in the row.
         *
         * @param {object} settings DataTables settings object
         * @param {node|object} TR element from which to read data or existing row
         *   object from which to re-read the data from the cells
         * @returns {object} Object with two parameters: `data` the data read, in
         *   document order, and `cells` and array of nodes (they can be useful to the
         *   caller, so rather than needing a second traversal to get them, just return
         *   them from here).
         * @memberof DataTable#oApi
         */
        function _fnGetRowElements( settings, row )
        {
            var
                d = [],
                tds = [],
                td = row.firstChild,
                name, col, o, i=0, contents,
                columns = settings.aoColumns;

            var attr = function ( str, data, td  ) {
                if ( typeof str === 'string' ) {
                    var idx = str.indexOf('@');

                    if ( idx !== -1 ) {
                        var src = str.substring( idx+1 );
                        o[ '@'+src ] = td.getAttribute( src );
                    }
                }
            };

            var cellProcess = function ( cell ) {
                col = columns[i];
                contents = $.trim(cell.innerHTML);

                if ( col && col._bAttrSrc ) {
                    o = {
                        display: contents
                    };

                    attr( col.mData.sort, o, cell );
                    attr( col.mData.type, o, cell );
                    attr( col.mData.filter, o, cell );

                    d.push( o );
                }
                else {
                    d.push( contents );
                }

                tds.push( cell );
                i++;
            };

            if ( td ) {
                // `tr` element passed in
                while ( td ) {
                    name = td.nodeName.toUpperCase();

                    if ( name == "TD" || name == "TH" ) {
                        cellProcess( td );
                    }

                    td = td.nextSibling;
                }
            }
            else {
                // Existing row object passed in
                tds = row.anCells;

                for ( var j=0, jen=tds.length ; j<jen ; j++ ) {
                    cellProcess( tds[j] );
                }
            }

            return {
                data: d,
                cells: tds
            };
        }
        /**
         * Create a new TR element (and it's TD children) for a row
         *  @param {object} oSettings dataTables settings object
         *  @param {int} iRow Row to consider
         *  @param {node} [nTrIn] TR element to add to the table - optional. If not given,
         *    DataTables will create a row automatically
         *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
         *    if nTr is.
         *  @memberof DataTable#oApi
         */
        function _fnCreateTr ( oSettings, iRow, nTrIn, anTds )
        {
            var
                row = oSettings.aoData[iRow],
                rowData = row._aData,
                cells = [],
                nTr, nTd, oCol,
                i, iLen;

            if ( row.nTr === null )
            {
                nTr = nTrIn || document.createElement('tr');

                row.nTr = nTr;
                row.anCells = cells;

                /* Use a private property on the node to allow reserve mapping from the node
                 * to the aoData array for fast look up
                 */
                nTr._DT_RowIndex = iRow;

                /* Special parameters can be given by the data source to be used on the row */
                _fnRowAttributes( row );

                /* Process each column */
                for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
                {
                    oCol = oSettings.aoColumns[i];

                    nTd = nTrIn ? anTds[i] : document.createElement( oCol.sCellType );
                    cells.push( nTd );

                    // Need to create the HTML if new, or if a rendering function is defined
                    if ( !nTrIn || oCol.mRender || oCol.mData !== i )
                    {
                        nTd.innerHTML = _fnGetCellData( oSettings, iRow, i, 'display' );
                    }

                    /* Add user defined class */
                    if ( oCol.sClass )
                    {
                        nTd.className += ' '+oCol.sClass;
                    }

                    // Visibility - add or remove as required
                    if ( oCol.bVisible && ! nTrIn )
                    {
                        nTr.appendChild( nTd );
                    }
                    else if ( ! oCol.bVisible && nTrIn )
                    {
                        nTd.parentNode.removeChild( nTd );
                    }

                    if ( oCol.fnCreatedCell )
                    {
                        oCol.fnCreatedCell.call( oSettings.oInstance,
                            nTd, _fnGetCellData( oSettings, iRow, i, 'display' ), rowData, iRow, i
                        );
                    }
                }

                _fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [nTr, rowData, iRow] );
            }

            // Remove once webkit bug 131819 and Chromium bug 365619 have been resolved
            // and deployed
            row.nTr.setAttribute( 'role', 'row' );
        }


        /**
         * Add attributes to a row based on the special `DT_*` parameters in a data
         * source object.
         *  @param {object} DataTables row object for the row to be modified
         *  @memberof DataTable#oApi
         */
        function _fnRowAttributes( row )
        {
            var tr = row.nTr;
            var data = row._aData;

            if ( tr ) {
                if ( data.DT_RowId ) {
                    tr.id = data.DT_RowId;
                }

                if ( data.DT_RowClass ) {
                    // Remove any classes added by DT_RowClass before
                    var a = data.DT_RowClass.split(' ');
                    row.__rowc = row.__rowc ?
                        _unique( row.__rowc.concat( a ) ) :
                        a;

                    $(tr)
                        .removeClass( row.__rowc.join(' ') )
                        .addClass( data.DT_RowClass );
                }

                if ( data.DT_RowData ) {
                    $(tr).data( data.DT_RowData );
                }
            }
        }


        /**
         * Create the HTML header for the table
         *  @param {object} oSettings dataTables settings object
         *  @memberof DataTable#oApi
         */
        function _fnBuildHead( oSettings )
        {
            var i, ien, cell, row, column;
            var thead = oSettings.nTHead;
            var tfoot = oSettings.nTFoot;
            var createHeader = $('th, td', thead).length === 0;
            var classes = oSettings.oClasses;
            var columns = oSettings.aoColumns;

            if ( createHeader ) {
                row = $('<tr/>').appendTo( thead );
            }

            for ( i=0, ien=columns.length ; i<ien ; i++ ) {
                column = columns[i];
                cell = $( column.nTh ).addClass( column.sClass );

                if ( createHeader ) {
                    cell.appendTo( row );
                }

                // 1.11 move into sorting
                if ( oSettings.oFeatures.bSort ) {
                    cell.addClass( column.sSortingClass );

                    if ( column.bSortable !== false ) {
                        cell
                            .attr( 'tabindex', oSettings.iTabIndex )
                            .attr( 'aria-controls', oSettings.sTableId );

                        _fnSortAttachListener( oSettings, column.nTh, i );
                    }
                }

                if ( column.sTitle != cell.html() ) {
                    cell.html( column.sTitle );
                }

                _fnRenderer( oSettings, 'header' )(
                    oSettings, cell, column, classes
                );
            }

            if ( createHeader ) {
                _fnDetectHeader( oSettings.aoHeader, thead );
            }

            /* ARIA role for the rows */
            $(thead).find('>tr').attr('role', 'row');

            /* Deal with the footer - add classes if required */
            $(thead).find('>tr>th, >tr>td').addClass( classes.sHeaderTH );
            $(tfoot).find('>tr>th, >tr>td').addClass( classes.sFooterTH );

            // Cache the footer cells. Note that we only take the cells from the first
            // row in the footer. If there is more than one row the user wants to
            // interact with, they need to use the table().foot() method. Note also this
            // allows cells to be used for multiple columns using colspan
            if ( tfoot !== null ) {
                var cells = oSettings.aoFooter[0];

                for ( i=0, ien=cells.length ; i<ien ; i++ ) {
                    column = columns[i];
                    column.nTf = cells[i].cell;

                    if ( column.sClass ) {
                        $(column.nTf).addClass( column.sClass );
                    }
                }
            }
        }


        /**
         * Draw the header (or footer) element based on the column visibility states. The
         * methodology here is to use the layout array from _fnDetectHeader, modified for
         * the instantaneous column visibility, to construct the new layout. The grid is
         * traversed over cell at a time in a rows x columns grid fashion, although each
         * cell insert can cover multiple elements in the grid - which is tracks using the
         * aApplied array. Cell inserts in the grid will only occur where there isn't
         * already a cell in that position.
         *  @param {object} oSettings dataTables settings object
         *  @param array {objects} aoSource Layout array from _fnDetectHeader
         *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc,
         *  @memberof DataTable#oApi
         */
        function _fnDrawHead( oSettings, aoSource, bIncludeHidden )
        {
            var i, iLen, j, jLen, k, kLen, n, nLocalTr;
            var aoLocal = [];
            var aApplied = [];
            var iColumns = oSettings.aoColumns.length;
            var iRowspan, iColspan;

            if ( ! aoSource )
            {
                return;
            }

            if (  bIncludeHidden === undefined )
            {
                bIncludeHidden = false;
            }

            /* Make a copy of the master layout array, but without the visible columns in it */
            for ( i=0, iLen=aoSource.length ; i<iLen ; i++ )
            {
                aoLocal[i] = aoSource[i].slice();
                aoLocal[i].nTr = aoSource[i].nTr;

                /* Remove any columns which are currently hidden */
                for ( j=iColumns-1 ; j>=0 ; j-- )
                {
                    if ( !oSettings.aoColumns[j].bVisible && !bIncludeHidden )
                    {
                        aoLocal[i].splice( j, 1 );
                    }
                }

                /* Prep the applied array - it needs an element for each row */
                aApplied.push( [] );
            }

            for ( i=0, iLen=aoLocal.length ; i<iLen ; i++ )
            {
                nLocalTr = aoLocal[i].nTr;

                /* All cells are going to be replaced, so empty out the row */
                if ( nLocalTr )
                {
                    while( (n = nLocalTr.firstChild) )
                    {
                        nLocalTr.removeChild( n );
                    }
                }

                for ( j=0, jLen=aoLocal[i].length ; j<jLen ; j++ )
                {
                    iRowspan = 1;
                    iColspan = 1;

                    /* Check to see if there is already a cell (row/colspan) covering our target
                     * insert point. If there is, then there is nothing to do.
                     */
                    if ( aApplied[i][j] === undefined )
                    {
                        nLocalTr.appendChild( aoLocal[i][j].cell );
                        aApplied[i][j] = 1;

                        /* Expand the cell to cover as many rows as needed */
                        while ( aoLocal[i+iRowspan] !== undefined &&
                            aoLocal[i][j].cell == aoLocal[i+iRowspan][j].cell )
                        {
                            aApplied[i+iRowspan][j] = 1;
                            iRowspan++;
                        }

                        /* Expand the cell to cover as many columns as needed */
                        while ( aoLocal[i][j+iColspan] !== undefined &&
                            aoLocal[i][j].cell == aoLocal[i][j+iColspan].cell )
                        {
                            /* Must update the applied array over the rows for the columns */
                            for ( k=0 ; k<iRowspan ; k++ )
                            {
                                aApplied[i+k][j+iColspan] = 1;
                            }
                            iColspan++;
                        }

                        /* Do the actual expansion in the DOM */
                        $(aoLocal[i][j].cell)
                            .attr('rowspan', iRowspan)
                            .attr('colspan', iColspan);
                    }
                }
            }
        }


        /**
         * Insert the required TR nodes into the table for display
         *  @param {object} oSettings dataTables settings object
         *  @memberof DataTable#oApi
         */
        function _fnDraw( oSettings )
        {
            /* Provide a pre-callback function which can be used to cancel the draw is false is returned */
            var aPreDraw = _fnCallbackFire( oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings] );
            if ( $.inArray( false, aPreDraw ) !== -1 )
            {
                _fnProcessingDisplay( oSettings, false );
                return;
            }

            var i, iLen, n;
            var anRows = [];
            var iRowCount = 0;
            var asStripeClasses = oSettings.asStripeClasses;
            var iStripes = asStripeClasses.length;
            var iOpenRows = oSettings.aoOpenRows.length;
            var oLang = oSettings.oLanguage;
            var iInitDisplayStart = oSettings.iInitDisplayStart;
            var bServerSide = _fnDataSource( oSettings ) == 'ssp';
            var aiDisplay = oSettings.aiDisplay;

            oSettings.bDrawing = true;

            /* Check and see if we have an initial draw position from state saving */
            if ( iInitDisplayStart !== undefined && iInitDisplayStart !== -1 )
            {
                oSettings._iDisplayStart = bServerSide ?
                    iInitDisplayStart :
                    iInitDisplayStart >= oSettings.fnRecordsDisplay() ?
                        0 :
                        iInitDisplayStart;

                oSettings.iInitDisplayStart = -1;
            }

            var iDisplayStart = oSettings._iDisplayStart;
            var iDisplayEnd = oSettings.fnDisplayEnd();

            /* Server-side processing draw intercept */
            if ( oSettings.bDeferLoading )
            {
                oSettings.bDeferLoading = false;
                oSettings.iDraw++;
                _fnProcessingDisplay( oSettings, false );
            }
            else if ( !bServerSide )
            {
                oSettings.iDraw++;
            }
            else if ( !oSettings.bDestroying && !_fnAjaxUpdate( oSettings ) )
            {
                return;
            }

            if ( aiDisplay.length !== 0 )
            {
                var iStart = bServerSide ? 0 : iDisplayStart;
                var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;

                for ( var j=iStart ; j<iEnd ; j++ )
                {
                    var iDataIndex = aiDisplay[j];
                    var aoData = oSettings.aoData[ iDataIndex ];
                    if ( aoData.nTr === null )
                    {
                        _fnCreateTr( oSettings, iDataIndex );
                    }

                    var nRow = aoData.nTr;

                    /* Remove the old striping classes and then add the new one */
                    if ( iStripes !== 0 )
                    {
                        var sStripe = asStripeClasses[ iRowCount % iStripes ];
                        if ( aoData._sRowStripe != sStripe )
                        {
                            $(nRow).removeClass( aoData._sRowStripe ).addClass( sStripe );
                            aoData._sRowStripe = sStripe;
                        }
                    }

                    /* Row callback functions - might want to manipulate the row */
                    _fnCallbackFire( oSettings, 'aoRowCallback', null,
                        [nRow, aoData._aData, iRowCount, j] );

                    anRows.push( nRow );
                    iRowCount++;
                }
            }
            else
            {
                /* Table is empty - create a row with an empty message in it */
                var sZero = oLang.sZeroRecords;
                if ( oSettings.iDraw == 1 &&  _fnDataSource( oSettings ) == 'ajax' )
                {
                    sZero = oLang.sLoadingRecords;
                }
                else if ( oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0 )
                {
                    sZero = oLang.sEmptyTable;
                }

                anRows[ 0 ] = $( '<tr/>', { 'class': iStripes ? asStripeClasses[0] : '' } )
                    .append( $('<td />', {
                        'valign':  'top',
                        'colSpan': _fnVisbleColumns( oSettings ),
                        'class':   oSettings.oClasses.sRowEmpty
                    } ).html( sZero ) )[0];
            }

            /* Header and footer callbacks */
            _fnCallbackFire( oSettings, 'aoHeaderCallback', 'header', [ $(oSettings.nTHead).children('tr')[0],
                _fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );

            _fnCallbackFire( oSettings, 'aoFooterCallback', 'footer', [ $(oSettings.nTFoot).children('tr')[0],
                _fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );

            var body = $(oSettings.nTBody);

            body.children().detach();
            body.append( $(anRows) );

            /* Call all required callback functions for the end of a draw */
            _fnCallbackFire( oSettings, 'aoDrawCallback', 'draw', [oSettings] );

            /* Draw is complete, sorting and filtering must be as well */
            oSettings.bSorted = false;
            oSettings.bFiltered = false;
            oSettings.bDrawing = false;
        }


        /**
         * Redraw the table - taking account of the various features which are enabled
         *  @param {object} oSettings dataTables settings object
         *  @param {boolean} [holdPosition] Keep the current paging position. By default
         *    the paging is reset to the first page
         *  @memberof DataTable#oApi
         */
        function _fnReDraw( settings, holdPosition )
        {
            var
                features = settings.oFeatures,
                sort     = features.bSort,
                filter   = features.bFilter;

            if ( sort ) {
                _fnSort( settings );
            }

            if ( filter ) {
                _fnFilterComplete( settings, settings.oPreviousSearch );
            }
            else {
                // No filtering, so we want to just use the display master
                settings.aiDisplay = settings.aiDisplayMaster.slice();
            }

            if ( holdPosition !== true ) {
                settings._iDisplayStart = 0;
            }

            _fnDraw( settings );
        }


        /**
         * Add the options to the page HTML for the table
         *  @param {object} oSettings dataTables settings object
         *  @memberof DataTable#oApi
         */
        function _fnAddOptionsHtml ( oSettings )
        {
            var classes = oSettings.oClasses;
            var table = $(oSettings.nTable);
            var holding = $('<div/>').insertBefore( table ); // Holding element for speed
            var features = oSettings.oFeatures;

            // All DataTables are wrapped in a div
            var insert = $('<div/>', {
                id:      oSettings.sTableId+'_wrapper',
                'class': classes.sWrapper + (oSettings.nTFoot ? '' : ' '+classes.sNoFooter)
            } );

            oSettings.nHolding = holding[0];
            oSettings.nTableWrapper = insert[0];
            oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;

            /* Loop over the user set positioning and place the elements as needed */
            var aDom = oSettings.sDom.split('');
            var featureNode, cOption, nNewNode, cNext, sAttr, j;
            for ( var i=0 ; i<aDom.length ; i++ )
            {
                featureNode = null;
                cOption = aDom[i];

                if ( cOption == '<' )
                {
                    /* New container div */
                    nNewNode = $('<div/>')[0];

                    /* Check to see if we should append an id and/or a class name to the container */
                    cNext = aDom[i+1];
                    if ( cNext == "'" || cNext == '"' )
                    {
                        sAttr = "";
                        j = 2;
                        while ( aDom[i+j] != cNext )
                        {
                            sAttr += aDom[i+j];
                            j++;
                        }

                        /* Replace jQuery UI constants @todo depreciated */
                        if ( sAttr == "H" )
                        {
                            sAttr = classes.sJUIHeader;
                        }
                        else if ( sAttr == "F" )
                        {
                            sAttr = classes.sJUIFooter;
                        }

                        /* The attribute can be in the format of "#id.class", "#id" or "class" This logic
                         * breaks the string into parts and applies them as needed
                         */
                        if ( sAttr.indexOf('.') != -1 )
                        {
                            var aSplit = sAttr.split('.');
                            nNewNode.id = aSplit[0].substr(1, aSplit[0].length-1);
                            nNewNode.className = aSplit[1];
                        }
                        else if ( sAttr.charAt(0) == "#" )
                        {
                            nNewNode.id = sAttr.substr(1, sAttr.length-1);
                        }
                        else
                        {
                            nNewNode.className = sAttr;
                        }

                        i += j; /* Move along the position array */
                    }

                    insert.append( nNewNode );
                    insert = $(nNewNode);
                }
                else if ( cOption == '>' )
                {
                    /* End container div */
                    insert = insert.parent();
                }
                // @todo Move options into their own plugins?
                else if ( cOption == 'l' && features.bPaginate && features.bLengthChange )
                {
                    /* Length */
                    featureNode = _fnFeatureHtmlLength( oSettings );
                }
                else if ( cOption == 'f' && features.bFilter )
                {
                    /* Filter */
                    featureNode = _fnFeatureHtmlFilter( oSettings );
                }
                else if ( cOption == 'r' && features.bProcessing )
                {
                    /* pRocessing */
                    featureNode = _fnFeatureHtmlProcessing( oSettings );
                }
                else if ( cOption == 't' )
                {
                    /* Table */
                    featureNode = _fnFeatureHtmlTable( oSettings );
                }
                else if ( cOption ==  'i' && features.bInfo )
                {
                    /* Info */
                    featureNode = _fnFeatureHtmlInfo( oSettings );
                }
                else if ( cOption == 'p' && features.bPaginate )
                {
                    /* Pagination */
                    featureNode = _fnFeatureHtmlPaginate( oSettings );
                }
                else if ( DataTable.ext.feature.length !== 0 )
                {
                    /* Plug-in features */
                    var aoFeatures = DataTable.ext.feature;
                    for ( var k=0, kLen=aoFeatures.length ; k<kLen ; k++ )
                    {
                        if ( cOption == aoFeatures[k].cFeature )
                        {
                            featureNode = aoFeatures[k].fnInit( oSettings );
                            break;
                        }
                    }
                }

                /* Add to the 2D features array */
                if ( featureNode )
                {
                    var aanFeatures = oSettings.aanFeatures;

                    if ( ! aanFeatures[cOption] )
                    {
                        aanFeatures[cOption] = [];
                    }

                    aanFeatures[cOption].push( featureNode );
                    insert.append( featureNode );
                }
            }

            /* Built our DOM structure - replace the holding div with what we want */
            holding.replaceWith( insert );
        }


        /**
         * Use the DOM source to create up an array of header cells. The idea here is to
         * create a layout grid (array) of rows x columns, which contains a reference
         * to the cell that that point in the grid (regardless of col/rowspan), such that
         * any column / row could be removed and the new grid constructed
         *  @param array {object} aLayout Array to store the calculated layout in
         *  @param {node} nThead The header/footer element for the table
         *  @memberof DataTable#oApi
         */
        function _fnDetectHeader ( aLayout, nThead )
        {
            var nTrs = $(nThead).children('tr');
            var nTr, nCell;
            var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
            var bUnique;
            var fnShiftCol = function ( a, i, j ) {
                var k = a[i];
                while ( k[j] ) {
                    j++;
                }
                return j;
            };

            aLayout.splice( 0, aLayout.length );

            /* We know how many rows there are in the layout - so prep it */
            for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
            {
                aLayout.push( [] );
            }

            /* Calculate a layout array */
            for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
            {
                nTr = nTrs[i];
                iColumn = 0;

                /* For every cell in the row... */
                nCell = nTr.firstChild;
                while ( nCell ) {
                    if ( nCell.nodeName.toUpperCase() == "TD" ||
                        nCell.nodeName.toUpperCase() == "TH" )
                    {
                        /* Get the col and rowspan attributes from the DOM and sanitise them */
                        iColspan = nCell.getAttribute('colspan') * 1;
                        iRowspan = nCell.getAttribute('rowspan') * 1;
                        iColspan = (!iColspan || iColspan===0 || iColspan===1) ? 1 : iColspan;
                        iRowspan = (!iRowspan || iRowspan===0 || iRowspan===1) ? 1 : iRowspan;

                        /* There might be colspan cells already in this row, so shift our target
                         * accordingly
                         */
                        iColShifted = fnShiftCol( aLayout, i, iColumn );

                        /* Cache calculation for unique columns */
                        bUnique = iColspan === 1 ? true : false;

                        /* If there is col / rowspan, copy the information into the layout grid */
                        for ( l=0 ; l<iColspan ; l++ )
                        {
                            for ( k=0 ; k<iRowspan ; k++ )
                            {
                                aLayout[i+k][iColShifted+l] = {
                                    "cell": nCell,
                                    "unique": bUnique
                                };
                                aLayout[i+k].nTr = nTr;
                            }
                        }
                    }
                    nCell = nCell.nextSibling;
                }
            }
        }


        /**
         * Get an array of unique th elements, one for each column
         *  @param {object} oSettings dataTables settings object
         *  @param {node} nHeader automatically detect the layout from this node - optional
         *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
         *  @returns array {node} aReturn list of unique th's
         *  @memberof DataTable#oApi
         */
        function _fnGetUniqueThs ( oSettings, nHeader, aLayout )
        {
            var aReturn = [];
            if ( !aLayout )
            {
                aLayout = oSettings.aoHeader;
                if ( nHeader )
                {
                    aLayout = [];
                    _fnDetectHeader( aLayout, nHeader );
                }
            }

            for ( var i=0, iLen=aLayout.length ; i<iLen ; i++ )
            {
                for ( var j=0, jLen=aLayout[i].length ; j<jLen ; j++ )
                {
                    if ( aLayout[i][j].unique &&
                        (!aReturn[j] || !oSettings.bSortCellsTop) )
                    {
                        aReturn[j] = aLayout[i][j].cell;
                    }
                }
            }

            return aReturn;
        }



        /**
         * Create an Ajax call based on the table's settings, taking into account that
         * parameters can have multiple forms, and backwards compatibility.
         *
         * @param {object} oSettings dataTables settings object
         * @param {array} data Data to send to the server, required by
         *     DataTables - may be augmented by developer callbacks
         * @param {function} fn Callback function to run when data is obtained
         */
        function _fnBuildAjax( oSettings, data, fn )
        {
            // Compatibility with 1.9-, allow fnServerData and event to manipulate
            _fnCallbackFire( oSettings, 'aoServerParams', 'serverParams', [data] );

            // Convert to object based for 1.10+ if using the old array scheme which can
            // come from server-side processing or serverParams
            if ( data && $.isArray(data) ) {
                var tmp = {};
                var rbracket = /(.*?)\[\]$/;

                $.each( data, function (key, val) {
                    var match = val.name.match(rbracket);

                    if ( match ) {
                        // Support for arrays
                        var name = match[0];

                        if ( ! tmp[ name ] ) {
                            tmp[ name ] = [];
                        }
                        tmp[ name ].push( val.value );
                    }
                    else {
                        tmp[val.name] = val.value;
                    }
                } );
                data = tmp;
            }

            var ajaxData;
            var ajax = oSettings.ajax;
            var instance = oSettings.oInstance;

            if ( $.isPlainObject( ajax ) && ajax.data )
            {
                ajaxData = ajax.data;

                var newData = $.isFunction( ajaxData ) ?
                    ajaxData( data ) :  // fn can manipulate data or return an object
                    ajaxData;           // object or array to merge

                // If the function returned an object, use that alone
                data = $.isFunction( ajaxData ) && newData ?
                    newData :
                    $.extend( true, data, newData );

                // Remove the data property as we've resolved it already and don't want
                // jQuery to do it again (it is restored at the end of the function)
                delete ajax.data;
            }

            var baseAjax = {
                "data": data,
                "success": function (json) {
                    var error = json.error || json.sError;
                    if ( error ) {
                        oSettings.oApi._fnLog( oSettings, 0, error );
                    }

                    oSettings.json = json;
                    _fnCallbackFire( oSettings, null, 'xhr', [oSettings, json] );
                    fn( json );
                },
                "dataType": "json",
                "cache": false,
                "type": oSettings.sServerMethod,
                "error": function (xhr, error, thrown) {
                    var log = oSettings.oApi._fnLog;

                    if ( error == "parsererror" ) {
                        log( oSettings, 0, 'Invalid JSON response', 1 );
                    }
                    else if ( xhr.readyState === 4 ) {
                        log( oSettings, 0, 'Ajax error', 7 );
                    }

                    _fnProcessingDisplay( oSettings, false );
                }
            };

            // Store the data submitted for the API
            oSettings.oAjaxData = data;

            // Allow plug-ins and external processes to modify the data
            _fnCallbackFire( oSettings, null, 'preXhr', [oSettings, data] );

            if ( oSettings.fnServerData )
            {
                // DataTables 1.9- compatibility
                oSettings.fnServerData.call( instance,
                    oSettings.sAjaxSource,
                    $.map( data, function (val, key) { // Need to convert back to 1.9 trad format
                        return { name: key, value: val };
                    } ),
                    fn,
                    oSettings
                );
            }
            else if ( oSettings.sAjaxSource || typeof ajax === 'string' )
            {
                // DataTables 1.9- compatibility
                oSettings.jqXHR = $.ajax( $.extend( baseAjax, {
                    url: ajax || oSettings.sAjaxSource
                } ) );
            }
            else if ( $.isFunction( ajax ) )
            {
                // Is a function - let the caller define what needs to be done
                oSettings.jqXHR = ajax.call( instance, data, fn, oSettings );
            }
            else
            {
                // Object to extend the base settings
                oSettings.jqXHR = $.ajax( $.extend( baseAjax, ajax ) );

                // Restore for next time around
                ajax.data = ajaxData;
            }
        }


        /**
         * Update the table using an Ajax call
         *  @param {object} oSettings dataTables settings object
         *  @returns {boolean} Block the table drawing or not
         *  @memberof DataTable#oApi
         */
        function _fnAjaxUpdate( oSettings )
        {
            if ( oSettings.bAjaxDataGet )
            {
                oSettings.iDraw++;
                _fnProcessingDisplay( oSettings, true );
                var iColumns = oSettings.aoColumns.length;
                var aoData = _fnAjaxParameters( oSettings );

                _fnBuildAjax( oSettings, aoData, function(json) {
                    _fnAjaxUpdateDraw( oSettings, json );
                }, oSettings );

                return false;
            }
            return true;
        }


        /**
         * Build up the parameters in an object needed for a server-side processing
         * request. Note that this is basically done twice, is different ways - a modern
         * method which is used by default in DataTables 1.10 which uses objects and
         * arrays, or the 1.9- method with is name / value pairs. 1.9 method is used if
         * the sAjaxSource option is used in the initialisation, or the legacyAjax
         * option is set.
         *  @param {object} oSettings dataTables settings object
         *  @returns {bool} block the table drawing or not
         *  @memberof DataTable#oApi
         */
        function _fnAjaxParameters( settings )
        {
            var
                columns = settings.aoColumns,
                columnCount = columns.length,
                features = settings.oFeatures,
                preSearch = settings.oPreviousSearch,
                preColSearch = settings.aoPreSearchCols,
                i, data = [], dataProp, column, columnSearch,
                sort = _fnSortFlatten( settings ),
                displayStart = settings._iDisplayStart,
                displayLength = features.bPaginate !== false ?
                    settings._iDisplayLength :
                    -1;

            var param = function ( name, value ) {
                data.push( { 'name': name, 'value': value } );
            };

            // DataTables 1.9- compatible method
            param( 'sEcho',          settings.iDraw );
            param( 'iColumns',       columnCount );
            param( 'sColumns',       _pluck( columns, 'sName' ).join(',') );
            param( 'iDisplayStart',  displayStart );
            param( 'iDisplayLength', displayLength );

            // DataTables 1.10+ method
            var d = {
                draw:    settings.iDraw,
                columns: [],
                order:   [],
                start:   displayStart,
                length:  displayLength,
                search:  {
                    value: preSearch.sSearch,
                    regex: preSearch.bRegex
                }
            };

            for ( i=0 ; i<columnCount ; i++ ) {
                column = columns[i];
                columnSearch = preColSearch[i];
                dataProp = typeof column.mData=="function" ? 'function' : column.mData ;

                d.columns.push( {
                    data:       dataProp,
                    name:       column.sName,
                    searchable: column.bSearchable,
                    orderable:  column.bSortable,
                    search:     {
                        value: columnSearch.sSearch,
                        regex: columnSearch.bRegex
                    }
                } );

                param( "mDataProp_"+i, dataProp );

                if ( features.bFilter ) {
                    param( 'sSearch_'+i,     columnSearch.sSearch );
                    param( 'bRegex_'+i,      columnSearch.bRegex );
                    param( 'bSearchable_'+i, column.bSearchable );
                }

                if ( features.bSort ) {
                    param( 'bSortable_'+i, column.bSortable );
                }
            }

            if ( features.bFilter ) {
                param( 'sSearch', preSearch.sSearch );
                param( 'bRegex', preSearch.bRegex );
            }

            if ( features.bSort ) {
                $.each( sort, function ( i, val ) {
                    d.order.push( { column: val.col, dir: val.dir } );

                    param( 'iSortCol_'+i, val.col );
                    param( 'sSortDir_'+i, val.dir );
                } );

                param( 'iSortingCols', sort.length );
            }

            // If the legacy.ajax parameter is null, then we automatically decide which
            // form to use, based on sAjaxSource
            var legacy = DataTable.ext.legacy.ajax;
            if ( legacy === null ) {
                return settings.sAjaxSource ? data : d;
            }

            // Otherwise, if legacy has been specified then we use that to decide on the
            // form
            return legacy ? data : d;
        }


        /**
         * Data the data from the server (nuking the old) and redraw the table
         *  @param {object} oSettings dataTables settings object
         *  @param {object} json json data return from the server.
         *  @param {string} json.sEcho Tracking flag for DataTables to match requests
         *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
         *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
         *  @param {array} json.aaData The data to display on this page
         *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
         *  @memberof DataTable#oApi
         */
        function _fnAjaxUpdateDraw ( settings, json )
        {
            // v1.10 uses camelCase variables, while 1.9 uses Hungarian notation.
            // Support both
            var compat = function ( old, modern ) {
                return json[old] !== undefined ? json[old] : json[modern];
            };

            var draw            = compat( 'sEcho',                'draw' );
            var recordsTotal    = compat( 'iTotalRecords',        'recordsTotal' );
            var rocordsFiltered = compat( 'iTotalDisplayRecords', 'recordsFiltered' );

            if ( draw ) {
                // Protect against out of sequence returns
                if ( draw*1 < settings.iDraw ) {
                    return;
                }
                settings.iDraw = draw * 1;
            }

            _fnClearTable( settings );
            settings._iRecordsTotal   = parseInt(recordsTotal, 10);
            settings._iRecordsDisplay = parseInt(rocordsFiltered, 10);

            var data = _fnAjaxDataSrc( settings, json );
            for ( var i=0, ien=data.length ; i<ien ; i++ ) {
                _fnAddData( settings, data[i] );
            }
            settings.aiDisplay = settings.aiDisplayMaster.slice();

            settings.bAjaxDataGet = false;
            _fnDraw( settings );

            if ( ! settings._bInitComplete ) {
                _fnInitComplete( settings, json );
            }

            settings.bAjaxDataGet = true;
            _fnProcessingDisplay( settings, false );
        }


        /**
         * Get the data from the JSON data source to use for drawing a table. Using
         * `_fnGetObjectDataFn` allows the data to be sourced from a property of the
         * source object, or from a processing function.
         *  @param {object} oSettings dataTables settings object
         *  @param  {object} json Data source object / array from the server
         *  @return {array} Array of data to use
         */
        function _fnAjaxDataSrc ( oSettings, json )
        {
            var dataSrc = $.isPlainObject( oSettings.ajax ) && oSettings.ajax.dataSrc !== undefined ?
                oSettings.ajax.dataSrc :
                oSettings.sAjaxDataProp; // Compatibility with 1.9-.

            // Compatibility with 1.9-. In order to read from aaData, check if the
            // default has been changed, if not, check for aaData
            if ( dataSrc === 'data' ) {
                return json.aaData || json[dataSrc];
            }

            return dataSrc !== "" ?
                _fnGetObjectDataFn( dataSrc )( json ) :
                json;
        }


        /**
         * Generate the node required for filtering text
         *  @returns {node} Filter control element
         *  @param {object} oSettings dataTables settings object
         *  @memberof DataTable#oApi
         */
        function _fnFeatureHtmlFilter ( settings )
        {
            var classes = settings.oClasses;
            var tableId = settings.sTableId;
            var previousSearch = settings.oPreviousSearch;
            var features = settings.aanFeatures;
            var input = '<input type="search" class="'+classes.sFilterInput+'"/>';

            var str = settings.oLanguage.sSearch;
            str = str.match(/_INPUT_/) ?
                str.replace('_INPUT_', input) :
                str+input;

            var filter = $('<div/>', {
                'id': ! features.f ? tableId+'_filter' : null,
                'class': classes.sFilter
            } )
                .append( $('<label/>' ).append( str ) );

            var searchFn = function() {
                /* Update all other filter input elements for the new display */
                var n = features.f;
                var val = !this.value ? "" : this.value; // mental IE8 fix :-(

                /* Now do the filter */
                if ( val != previousSearch.sSearch ) {
                    _fnFilterComplete( settings, {
                        "sSearch": val,
                        "bRegex": previousSearch.bRegex,
                        "bSmart": previousSearch.bSmart ,
                        "bCaseInsensitive": previousSearch.bCaseInsensitive
                    } );

                    // Need to redraw, without resorting
                    settings._iDisplayStart = 0;
                    _fnDraw( settings );
                }
            };
            var jqFilter = $('input', filter)
                .val( previousSearch.sSearch.replace('"','&quot;') )
                .bind(
                    'keyup.DT search.DT input.DT paste.DT cut.DT',
                    _fnDataSource( settings ) === 'ssp' ?
                        _fnThrottle( searchFn, 400 ):
                        searchFn
                )
                .bind( 'keypress.DT', function(e) {
                    /* Prevent form submission */
                    if ( e.keyCode == 13 ) {
                        return false;
                    }
                } )
                .attr('aria-controls', tableId);

            // Update the input elements whenever the table is filtered
            $(settings.nTable).on( 'filter.DT', function () {
                // IE9 throws an 'unknown error' if document.activeElement is used
                // inside an iframe or frame...
                try {
                    if ( jqFilter[0] !== document.activeElement ) {
                        jqFilter.val( previousSearch.sSearch );
                    }
                }
                catch ( e ) {}
            } );

            return filter[0];
        }


        /**
         * Filter the table using both the global filter and column based filtering
         *  @param {object} oSettings dataTables settings object
         *  @param {object} oSearch search information
         *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
         *  @memberof DataTable#oApi
         */
        function _fnFilterComplete ( oSettings, oInput, iForce )
        {
            var oPrevSearch = oSettings.oPreviousSearch;
            var aoPrevSearch = oSettings.aoPreSearchCols;
            var fnSaveFilter = function ( oFilter ) {
                /* Save the filtering values */
                oPrevSearch.sSearch = oFilter.sSearch;
                oPrevSearch.bRegex = oFilter.bRegex;
                oPrevSearch.bSmart = oFilter.bSmart;
                oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
            };
            var fnRegex = function ( o ) {
                // Backwards compatibility with the bEscapeRegex option
                return o.bEscapeRegex !== undefined ? !o.bEscapeRegex : o.bRegex;
            };

            // Resolve any column types that are unknown due to addition or invalidation
            // @todo As per sort - can this be moved into an event handler?
            _fnColumnTypes( oSettings );

            /* In server-side processing all filtering is done by the server, so no point hanging around here */
            if ( _fnDataSource( oSettings ) != 'ssp' )
            {
                /* Global filter */
                _fnFilter( oSettings, oInput.sSearch, iForce, fnRegex(oInput), oInput.bSmart, oInput.bCaseInsensitive );
                fnSaveFilter( oInput );

                /* Now do the individual column filter */
                for ( var i=0 ; i<aoPrevSearch.length ; i++ )
                {
                    _fnFilterColumn( oSettings, aoPrevSearch[i].sSearch, i, fnRegex(aoPrevSearch[i]),
                        aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive );
                }

                /* Custom filtering */
                _fnFilterCustom( oSettings );
            }
            else
            {
                fnSaveFilter( oInput );
            }

            /* Tell the draw function we have been filtering */
            oSettings.bFiltered = true;
            _fnCallbackFire( oSettings, null, 'search', [oSettings] );
        }


        /**
         * Apply custom filtering functions
         *  @param {object} oSettings dataTables settings object
         *  @memberof DataTable#oApi
         */
        function _fnFilterCustom( settings )
        {
            var filters = DataTable.ext.search;
            var displayRows = settings.aiDisplay;
            var row, rowIdx;

            for ( var i=0, iLen=filters.length ; i<iLen ; i++ ) {
                for ( var j=displayRows.length-1 ; j>=0 ; j-- ) {
                    rowIdx = displayRows[ j ];
                    row = settings.aoData[ rowIdx ];

                    if ( ! filters[i]( settings, row._aFilterData, rowIdx, row._aData ) ) {
                        displayRows.splice( j, 1 );
                    }
                }
            }
        }


        /**
         * Filter the table on a per-column basis
         *  @param {object} oSettings dataTables settings object
         *  @param {string} sInput string to filter on
         *  @param {int} iColumn column to filter
         *  @param {bool} bRegex treat search string as a regular expression or not
         *  @param {bool} bSmart use smart filtering or not
         *  @param {bool} bCaseInsensitive Do case insenstive matching or not
         *  @memberof DataTable#oApi
         */
        function _fnFilterColumn ( settings, searchStr, colIdx, regex, smart, caseInsensitive )
        {
            if ( searchStr === '' ) {
                return;
            }

            var data;
            var display = settings.aiDisplay;
            var rpSearch = _fnFilterCreateSearch( searchStr, regex, smart, caseInsensitive );

            for ( var i=display.length-1 ; i>=0 ; i-- ) {
                data = settings.aoData[ display[i] ]._aFilterData[ colIdx ];

                if ( ! rpSearch.test( data ) ) {
                    display.splice( i, 1 );
                }
            }
        }


        /**
         * Filter the data table based on user input and draw the table
         *  @param {object} settings dataTables settings object
         *  @param {string} input string to filter on
         *  @param {int} force optional - force a research of the master array (1) or not (undefined or 0)
         *  @param {bool} regex treat as a regular expression or not
         *  @param {bool} smart perform smart filtering or not
         *  @param {bool} caseInsensitive Do case insenstive matching or not
         *  @memberof DataTable#oApi
         */
        function _fnFilter( settings, input, force, regex, smart, caseInsensitive )
        {
            var rpSearch = _fnFilterCreateSearch( input, regex, smart, caseInsensitive );
            var prevSearch = settings.oPreviousSearch.sSearch;
            var displayMaster = settings.aiDisplayMaster;
            var display, invalidated, i;

            // Need to take account of custom filtering functions - always filter
            if ( DataTable.ext.search.length !== 0 ) {
                force = true;
            }

            // Check if any of the rows were invalidated
            invalidated = _fnFilterData( settings );

            // If the input is blank - we just want the full data set
            if ( input.length <= 0 ) {
                settings.aiDisplay = displayMaster.slice();
            }
            else {
                // New search - start from the master array
                if ( invalidated ||
                    force ||
                    prevSearch.length > input.length ||
                    input.indexOf(prevSearch) !== 0 ||
                    settings.bSorted // On resort, the display master needs to be
                // re-filtered since indexes will have changed
                    ) {
                    settings.aiDisplay = displayMaster.slice();
                }

                // Search the display array
                display = settings.aiDisplay;

                for ( i=display.length-1 ; i>=0 ; i-- ) {
                    if ( ! rpSearch.test( settings.aoData[ display[i] ]._sFilterRow ) ) {
                        display.splice( i, 1 );
                    }
                }
            }
        }


        /**
         * Build a regular expression object suitable for searching a table
         *  @param {string} sSearch string to search for
         *  @param {bool} bRegex treat as a regular expression or not
         *  @param {bool} bSmart perform smart filtering or not
         *  @param {bool} bCaseInsensitive Do case insensitive matching or not
         *  @returns {RegExp} constructed object
         *  @memberof DataTable#oApi
         */
        function _fnFilterCreateSearch( search, regex, smart, caseInsensitive )
        {
            search = regex ?
                search :
                _fnEscapeRegex( search );

            if ( smart ) {
                /* For smart filtering we want to allow the search to work regardless of
                 * word order. We also want double quoted text to be preserved, so word
                 * order is important - a la google. So this is what we want to
                 * generate:
                 *
                 * ^(?=.*?\bone\b)(?=.*?\btwo three\b)(?=.*?\bfour\b).*$
                 */
                var a = $.map( search.match( /"[^"]+"|[^ ]+/g ) || '', function ( word ) {
                    return word.charAt(0) === '"' ?
                        word.match( /^"(.*)"$/ )[1] :
                        word;
                } );

                search = '^(?=.*?'+a.join( ')(?=.*?' )+').*$';
            }

            return new RegExp( search, caseInsensitive ? 'i' : '' );
        }


        /**
         * scape a string such that it can be used in a regular expression
         *  @param {string} sVal string to escape
         *  @returns {string} escaped string
         *  @memberof DataTable#oApi
         */
        function _fnEscapeRegex ( sVal )
        {
            return sVal.replace( _re_escape_regex, '\\$1' );
        }



        var __filter_div = $('<div>')[0];
        var __filter_div_textContent = __filter_div.textContent !== undefined;

        // Update the filtering data for each row if needed (by invalidation or first run)
        function _fnFilterData ( settings )
        {
            var columns = settings.aoColumns;
            var column;
            var i, j, ien, jen, filterData, cellData, row;
            var fomatters = DataTable.ext.type.search;
            var wasInvalidated = false;

            for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
                row = settings.aoData[i];

                if ( ! row._aFilterData ) {
                    filterData = [];

                    for ( j=0, jen=columns.length ; j<jen ; j++ ) {
                        column = columns[j];

                        if ( column.bSearchable ) {
                            cellData = _fnGetCellData( settings, i, j, 'filter' );

                            cellData = fomatters[ column.sType ] ?
                                fomatters[ column.sType ]( cellData ) :
                                cellData !== null ?
                                    cellData :
                                    '';
                        }
                        else {
                            cellData = '';
                        }

                        // If it looks like there is an HTML entity in the string,
                        // attempt to decode it so sorting works as expected. Note that
                        // we could use a single line of jQuery to do this, but the DOM
                        // method used here is much faster http://jsperf.com/html-decode
                        if ( cellData.indexOf && cellData.indexOf('&') !== -1 ) {
                            __filter_div.innerHTML = cellData;
                            cellData = __filter_div_textContent ?
                                __filter_div.textContent :
                                __filter_div.innerText;
                        }

                        if ( cellData.replace ) {
                            cellData = cellData.replace(/[\r\n]/g, '');
                        }

                        filterData.push( cellData );
                    }

                    row._aFilterData = filterData;
                    row._sFilterRow = filterData.join('  ');
                    wasInvalidated = true;
                }
            }

            return wasInvalidated;
        }

        /**
         * Generate the node required for the info display
         *  @param {object} oSettings dataTables settings object
         *  @returns {node} Information element
         *  @memberof DataTable#oApi
         */
        function _fnFeatureHtmlInfo ( settings )
        {
            var
                tid = settings.sTableId,
                nodes = settings.aanFeatures.i,
                n = $('<div/>', {
                    'class': settings.oClasses.sInfo,
                    'id': ! nodes ? tid+'_info' : null
                } );

            if ( ! nodes ) {
                // Update display on each draw
                settings.aoDrawCallback.push( {
                    "fn": _fnUpdateInfo,
                    "sName": "information"
                } );

                n
                    .attr( 'role', 'status' )
                    .attr( 'aria-live', 'polite' );

                // Table is described by our info div
                $(settings.nTable).attr( 'aria-describedby', tid+'_info' );
            }

            return n[0];
        }


        /**
         * Update the information elements in the display
         *  @param {object} settings dataTables settings object
         *  @memberof DataTable#oApi
         */
        function _fnUpdateInfo ( settings )
        {
            /* Show information about the table */
            var nodes = settings.aanFeatures.i;
            if ( nodes.length === 0 ) {
                return;
            }

            var
                lang  = settings.oLanguage,
                start = settings._iDisplayStart+1,
                end   = settings.fnDisplayEnd(),
                max   = settings.fnRecordsTotal(),
                total = settings.fnRecordsDisplay(),
                out   = total ?
                    lang.sInfo :
                    lang.sInfoEmpty;

            if ( total !== max ) {
                /* Record set after filtering */
                out += ' ' + lang.sInfoFiltered;
            }

            // Convert the macros
            out += lang.sInfoPostFix;
            out = _fnInfoMacros( settings, out );

            var callback = lang.fnInfoCallback;
            if ( callback !== null ) {
                out = callback.call( settings.oInstance,
                    settings, start, end, max, total, out
                );
            }

            $(nodes).html( out );
        }


        function _fnInfoMacros ( settings, str )
        {
            // When infinite scrolling, we are always starting at 1. _iDisplayStart is used only
            // internally
            var
                formatter  = settings.fnFormatNumber,
                start      = settings._iDisplayStart+1,
                len        = settings._iDisplayLength,
                vis        = settings.fnRecordsDisplay(),
                all        = len === -1;

            return str.
                replace(/_START_/g, formatter.call( settings, start ) ).
                replace(/_END_/g,   formatter.call( settings, settings.fnDisplayEnd() ) ).
                replace(/_MAX_/g,   formatter.call( settings, settings.fnRecordsTotal() ) ).
                replace(/_TOTAL_/g, formatter.call( settings, vis ) ).
                replace(/_PAGE_/g,  formatter.call( settings, all ? 1 : Math.ceil( start / len ) ) ).
                replace(/_PAGES_/g, formatter.call( settings, all ? 1 : Math.ceil( vis / len ) ) );
        }



        /**
         * Draw the table for the first time, adding all required features
         *  @param {object} settings dataTables settings object
         *  @memberof DataTable#oApi
         */
        function _fnInitialise ( settings )
        {
            var i, iLen, iAjaxStart=settings.iInitDisplayStart;
            var columns = settings.aoColumns, column;
            var features = settings.oFeatures;

            /* Ensure that the table data is fully initialised */
            if ( ! settings.bInitialised ) {
                setTimeout( function(){ _fnInitialise( settings ); }, 200 );
                return;
            }

            /* Show the display HTML options */
            _fnAddOptionsHtml( settings );

            /* Build and draw the header / footer for the table */
            _fnBuildHead( settings );
            _fnDrawHead( settings, settings.aoHeader );
            _fnDrawHead( settings, settings.aoFooter );

            /* Okay to show that something is going on now */
            _fnProcessingDisplay( settings, true );

            /* Calculate sizes for columns */
            if ( features.bAutoWidth ) {
                _fnCalculateColumnWidths( settings );
            }

            for ( i=0, iLen=columns.length ; i<iLen ; i++ ) {
                column = columns[i];

                if ( column.sWidth ) {
                    column.nTh.style.width = _fnStringToCss( column.sWidth );
                }
            }

            // If there is default sorting required - let's do it. The sort function
            // will do the drawing for us. Otherwise we draw the table regardless of the
            // Ajax source - this allows the table to look initialised for Ajax sourcing
            // data (show 'loading' message possibly)
            _fnReDraw( settings );

            // Server-side processing init complete is done by _fnAjaxUpdateDraw
            var dataSrc = _fnDataSource( settings );
            if ( dataSrc != 'ssp' ) {
                // if there is an ajax source load the data
                if ( dataSrc == 'ajax' ) {
                    _fnBuildAjax( settings, [], function(json) {
                        var aData = _fnAjaxDataSrc( settings, json );

                        // Got the data - add it to the table
                        for ( i=0 ; i<aData.length ; i++ ) {
                            _fnAddData( settings, aData[i] );
                        }

                        // Reset the init display for cookie saving. We've already done
                        // a filter, and therefore cleared it before. So we need to make
                        // it appear 'fresh'
                        settings.iInitDisplayStart = iAjaxStart;

                        _fnReDraw( settings );

                        _fnProcessingDisplay( settings, false );
                        _fnInitComplete( settings, json );
                    }, settings );
                }
                else {
                    _fnProcessingDisplay( settings, false );
                    _fnInitComplete( settings );
                }
            }
        }


        /**
         * Draw the table for the first time, adding all required features
         *  @param {object} oSettings dataTables settings object
         *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
         *    with client-side processing (optional)
         *  @memberof DataTable#oApi
         */
        function _fnInitComplete ( settings, json )
        {
            settings._bInitComplete = true;

            // On an Ajax load we now have data and therefore want to apply the column
            // sizing
            if ( json ) {
                _fnAdjustColumnSizing( settings );
            }

            _fnCallbackFire( settings, 'aoInitComplete', 'init', [settings, json] );
        }


        function _fnLengthChange ( settings, val )
        {
            var len = parseInt( val, 10 );
            settings._iDisplayLength = len;

            _fnLengthOverflow( settings );

            // Fire length change event
            _fnCallbackFire( settings, null, 'length', [settings, len] );
        }


        /**
         * Generate the node required for user display length changing
         *  @param {object} settings dataTables settings object
         *  @returns {node} Display length feature node
         *  @memberof DataTable#oApi
         */
        function _fnFeatureHtmlLength ( settings )
        {
            var
                classes  = settings.oClasses,
                tableId  = settings.sTableId,
                menu     = settings.aLengthMenu,
                d2       = $.isArray( menu[0] ),
                lengths  = d2 ? menu[0] : menu,
                language = d2 ? menu[1] : menu;

            var select = $('<select/>', {
                'name':          tableId+'_length',
                'aria-controls': tableId,
                'class':         classes.sLengthSelect
            } );

            for ( var i=0, ien=lengths.length ; i<ien ; i++ ) {
                select[0][ i ] = new Option( language[i], lengths[i] );
            }

            var div = $('<div><label/></div>').addClass( classes.sLength );
            if ( ! settings.aanFeatures.l ) {
                div[0].id = tableId+'_length';
            }

            var a = settings.oLanguage.sLengthMenu.split(/(_MENU_)/);
            div.children().append( a.length > 1 ?
                [ a[0], select, a[2] ] :
                a[0]
            );

            // Can't use `select` variable, as user might provide their own select menu
            $('select', div)
                .val( settings._iDisplayLength )
                .bind( 'change.DT', function(e) {
                    _fnLengthChange( settings, $(this).val() );
                    _fnDraw( settings );
                } );

            // Update node value whenever anything changes the table's length
            $(settings.nTable).bind( 'length.dt.DT', function (e, s, len) {
                $('select', div).val( len );
            } );

            return div[0];
        }



        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         * Note that most of the paging logic is done in
         * DataTable.ext.pager
         */

        /**
         * Generate the node required for default pagination
         *  @param {object} oSettings dataTables settings object
         *  @returns {node} Pagination feature node
         *  @memberof DataTable#oApi
         */
        function _fnFeatureHtmlPaginate ( settings )
        {
            var
                type   = settings.sPaginationType,
                plugin = DataTable.ext.pager[ type ],
                modern = typeof plugin === 'function',
                redraw = function( settings ) {
                    _fnDraw( settings );
                },
                node = $('<div/>').addClass( settings.oClasses.sPaging + type )[0],
                features = settings.aanFeatures;

            if ( ! modern ) {
                plugin.fnInit( settings, node, redraw );
            }

            /* Add a draw callback for the pagination on first instance, to update the paging display */
            if ( ! features.p )
            {
                node.id = settings.sTableId+'_paginate';

                settings.aoDrawCallback.push( {
                    "fn": function( settings ) {
                        if ( modern ) {
                            var
                                start      = settings._iDisplayStart,
                                len        = settings._iDisplayLength,
                                visRecords = settings.fnRecordsDisplay(),
                                all        = len === -1,
                                page = all ? 0 : Math.ceil( start / len ),
                                pages = all ? 1 : Math.ceil( visRecords / len ),
                                buttons = plugin(page, pages),
                                i, ien;

                            for ( i=0, ien=features.p.length ; i<ien ; i++ ) {
                                _fnRenderer( settings, 'pageButton' )(
                                    settings, features.p[i], i, buttons, page, pages
                                );
                            }
                        }
                        else {
                            plugin.fnUpdate( settings, redraw );
                        }
                    },
                    "sName": "pagination"
                } );
            }

            return node;
        }


        /**
         * Alter the display settings to change the page
         *  @param {object} settings DataTables settings object
         *  @param {string|int} action Paging action to take: "first", "previous",
         *    "next" or "last" or page number to jump to (integer)
         *  @param [bool] redraw Automatically draw the update or not
         *  @returns {bool} true page has changed, false - no change
         *  @memberof DataTable#oApi
         */
        function _fnPageChange ( settings, action, redraw )
        {
            var
                start     = settings._iDisplayStart,
                len       = settings._iDisplayLength,
                records   = settings.fnRecordsDisplay();

            if ( records === 0 || len === -1 )
            {
                start = 0;
            }
            else if ( typeof action === "number" )
            {
                start = action * len;

                if ( start > records )
                {
                    start = 0;
                }
            }
            else if ( action == "first" )
            {
                start = 0;
            }
            else if ( action == "previous" )
            {
                start = len >= 0 ?
                    start - len :
                    0;

                if ( start < 0 )
                {
                    start = 0;
                }
            }
            else if ( action == "next" )
            {
                if ( start + len < records )
                {
                    start += len;
                }
            }
            else if ( action == "last" )
            {
                start = Math.floor( (records-1) / len) * len;
            }
            else
            {
                _fnLog( settings, 0, "Unknown paging action: "+action, 5 );
            }

            var changed = settings._iDisplayStart !== start;
            settings._iDisplayStart = start;

            if ( changed ) {
                _fnCallbackFire( settings, null, 'page', [settings] );

                if ( redraw ) {
                    _fnDraw( settings );
                }
            }

            return changed;
        }



        /**
         * Generate the node required for the processing node
         *  @param {object} settings dataTables settings object
         *  @returns {node} Processing element
         *  @memberof DataTable#oApi
         */
        function _fnFeatureHtmlProcessing ( settings )
        {
            return $('<div/>', {
                'id': ! settings.aanFeatures.r ? settings.sTableId+'_processing' : null,
                'class': settings.oClasses.sProcessing
            } )
                .html( settings.oLanguage.sProcessing )
                .insertBefore( settings.nTable )[0];
        }


        /**
         * Display or hide the processing indicator
         *  @param {object} settings dataTables settings object
         *  @param {bool} show Show the processing indicator (true) or not (false)
         *  @memberof DataTable#oApi
         */
        function _fnProcessingDisplay ( settings, show )
        {
            if ( settings.oFeatures.bProcessing ) {
                $(settings.aanFeatures.r).css( 'display', show ? 'block' : 'none' );
            }

            _fnCallbackFire( settings, null, 'processing', [settings, show] );
        }

        /**
         * Add any control elements for the table - specifically scrolling
         *  @param {object} settings dataTables settings object
         *  @returns {node} Node to add to the DOM
         *  @memberof DataTable#oApi
         */
        function _fnFeatureHtmlTable ( settings )
        {
            var table = $(settings.nTable);

            // Add the ARIA grid role to the table
            table.attr( 'role', 'grid' );

            // Scrolling from here on in
            var scroll = settings.oScroll;

            if ( scroll.sX === '' && scroll.sY === '' ) {
                return settings.nTable;
            }

            var scrollX = scroll.sX;
            var scrollY = scroll.sY;
            var classes = settings.oClasses;
            var caption = table.children('caption');
            var captionSide = caption.length ? caption[0]._captionSide : null;
            var headerClone = $( table[0].cloneNode(false) );
            var footerClone = $( table[0].cloneNode(false) );
            var footer = table.children('tfoot');
            var _div = '<div/>';
            var size = function ( s ) {
                return !s ? null : _fnStringToCss( s );
            };

            // This is fairly messy, but with x scrolling enabled, if the table has a
            // width attribute, regardless of any width applied using the column width
            // options, the browser will shrink or grow the table as needed to fit into
            // that 100%. That would make the width options useless. So we remove it.
            // This is okay, under the assumption that width:100% is applied to the
            // table in CSS (it is in the default stylesheet) which will set the table
            // width as appropriate (the attribute and css behave differently...)
            if ( scroll.sX && table.attr('width') === '100%' ) {
                table.removeAttr('width');
            }

            if ( ! footer.length ) {
                footer = null;
            }

            /*
             * The HTML structure that we want to generate in this function is:
             *  div - scroller
             *    div - scroll head
             *      div - scroll head inner
             *        table - scroll head table
             *          thead - thead
             *    div - scroll body
             *      table - table (master table)
             *        thead - thead clone for sizing
             *        tbody - tbody
             *    div - scroll foot
             *      div - scroll foot inner
             *        table - scroll foot table
             *          tfoot - tfoot
             */
            var scroller = $( _div, { 'class': classes.sScrollWrapper } )
                .append(
                    $(_div, { 'class': classes.sScrollHead } )
                        .css( {
                            overflow: 'hidden',
                            position: 'relative',
                            border: 0,
                            width: scrollX ? size(scrollX) : '100%'
                        } )
                        .append(
                            $(_div, { 'class': classes.sScrollHeadInner } )
                                .css( {
                                    'box-sizing': 'content-box',
                                    width: scroll.sXInner || '100%'
                                } )
                                .append(
                                    headerClone
                                        .removeAttr('id')
                                        .css( 'margin-left', 0 )
                                        .append(
                                            table.children('thead')
                                        )
                                )
                        )
                        .append( captionSide === 'top' ? caption : null )
                )
                .append(
                    $(_div, { 'class': classes.sScrollBody } )
                        .css( {
                            overflow: 'auto',
                            height: size( scrollY ),
                            width: size( scrollX )
                        } )
                        .append( table )
                );

            if ( footer ) {
                scroller.append(
                    $(_div, { 'class': classes.sScrollFoot } )
                        .css( {
                            overflow: 'hidden',
                            border: 0,
                            width: scrollX ? size(scrollX) : '100%'
                        } )
                        .append(
                            $(_div, { 'class': classes.sScrollFootInner } )
                                .append(
                                    footerClone
                                        .removeAttr('id')
                                        .css( 'margin-left', 0 )
                                        .append(
                                            table.children('tfoot')
                                        )
                                )
                        )
                        .append( captionSide === 'bottom' ? caption : null )
                );
            }

            var children = scroller.children();
            var scrollHead = children[0];
            var scrollBody = children[1];
            var scrollFoot = footer ? children[2] : null;

            // When the body is scrolled, then we also want to scroll the headers
            if ( scrollX ) {
                $(scrollBody).scroll( function (e) {
                    var scrollLeft = this.scrollLeft;

                    scrollHead.scrollLeft = scrollLeft;

                    if ( footer ) {
                        scrollFoot.scrollLeft = scrollLeft;
                    }
                } );
            }

            settings.nScrollHead = scrollHead;
            settings.nScrollBody = scrollBody;
            settings.nScrollFoot = scrollFoot;

            // On redraw - align columns
            settings.aoDrawCallback.push( {
                "fn": _fnScrollDraw,
                "sName": "scrolling"
            } );

            return scroller[0];
        }



        /**
         * Update the header, footer and body tables for resizing - i.e. column
         * alignment.
         *
         * Welcome to the most horrible function DataTables. The process that this
         * function follows is basically:
         *   1. Re-create the table inside the scrolling div
         *   2. Take live measurements from the DOM
         *   3. Apply the measurements to align the columns
         *   4. Clean up
         *
         *  @param {object} settings dataTables settings object
         *  @memberof DataTable#oApi
         */
        function _fnScrollDraw ( settings )
        {
            // Given that this is such a monster function, a lot of variables are use
            // to try and keep the minimised size as small as possible
            var
                scroll         = settings.oScroll,
                scrollX        = scroll.sX,
                scrollXInner   = scroll.sXInner,
                scrollY        = scroll.sY,
                barWidth       = scroll.iBarWidth,
                divHeader      = $(settings.nScrollHead),
                divHeaderStyle = divHeader[0].style,
                divHeaderInner = divHeader.children('div'),
                divHeaderInnerStyle = divHeaderInner[0].style,
                divHeaderTable = divHeaderInner.children('table'),
                divBodyEl      = settings.nScrollBody,
                divBody        = $(divBodyEl),
                divBodyStyle   = divBodyEl.style,
                divFooter      = $(settings.nScrollFoot),
                divFooterInner = divFooter.children('div'),
                divFooterTable = divFooterInner.children('table'),
                header         = $(settings.nTHead),
                table          = $(settings.nTable),
                tableEl        = table[0],
                tableStyle     = tableEl.style,
                footer         = settings.nTFoot ? $(settings.nTFoot) : null,
                browser        = settings.oBrowser,
                ie67           = browser.bScrollOversize,
                headerTrgEls, footerTrgEls,
                headerSrcEls, footerSrcEls,
                headerCopy, footerCopy,
                headerWidths=[], footerWidths=[],
                headerContent=[],
                idx, correction, sanityWidth,
                zeroOut = function(nSizer) {
                    var style = nSizer.style;
                    style.paddingTop = "0";
                    style.paddingBottom = "0";
                    style.borderTopWidth = "0";
                    style.borderBottomWidth = "0";
                    style.height = 0;
                };

            /*
             * 1. Re-create the table inside the scrolling div
             */

            // Remove the old minimised thead and tfoot elements in the inner table
            table.children('thead, tfoot').remove();

            // Clone the current header and footer elements and then place it into the inner table
            headerCopy = header.clone().prependTo( table );
            headerTrgEls = header.find('tr'); // original header is in its own table
            headerSrcEls = headerCopy.find('tr');
            headerCopy.find('th, td').removeAttr('tabindex');

            if ( footer ) {
                footerCopy = footer.clone().prependTo( table );
                footerTrgEls = footer.find('tr'); // the original tfoot is in its own table and must be sized
                footerSrcEls = footerCopy.find('tr');
            }


            /*
             * 2. Take live measurements from the DOM - do not alter the DOM itself!
             */

            // Remove old sizing and apply the calculated column widths
            // Get the unique column headers in the newly created (cloned) header. We want to apply the
            // calculated sizes to this header
            if ( ! scrollX )
            {
                divBodyStyle.width = '100%';
                divHeader[0].style.width = '100%';
            }

            $.each( _fnGetUniqueThs( settings, headerCopy ), function ( i, el ) {
                idx = _fnVisibleToColumnIndex( settings, i );
                el.style.width = settings.aoColumns[idx].sWidth;
            } );

            if ( footer ) {
                _fnApplyToChildren( function(n) {
                    n.style.width = "";
                }, footerSrcEls );
            }

            // If scroll collapse is enabled, when we put the headers back into the body for sizing, we
            // will end up forcing the scrollbar to appear, making our measurements wrong for when we
            // then hide it (end of this function), so add the header height to the body scroller.
            if ( scroll.bCollapse && scrollY !== "" ) {
                divBodyStyle.height = (divBody[0].offsetHeight + header[0].offsetHeight)+"px";
            }

            // Size the table as a whole
            sanityWidth = table.outerWidth();
            if ( scrollX === "" ) {
                // No x scrolling
                tableStyle.width = "100%";

                // IE7 will make the width of the table when 100% include the scrollbar
                // - which is shouldn't. When there is a scrollbar we need to take this
                // into account.
                if ( ie67 && (table.find('tbody').height() > divBodyEl.offsetHeight ||
                    divBody.css('overflow-y') == "scroll")
                    ) {
                    tableStyle.width = _fnStringToCss( table.outerWidth() - barWidth);
                }
            }
            else
            {
                // x scrolling
                if ( scrollXInner !== "" ) {
                    // x scroll inner has been given - use it
                    tableStyle.width = _fnStringToCss(scrollXInner);
                }
                else if ( sanityWidth == divBody.width() && divBody.height() < table.height() ) {
                    // There is y-scrolling - try to take account of the y scroll bar
                    tableStyle.width = _fnStringToCss( sanityWidth-barWidth );
                    if ( table.outerWidth() > sanityWidth-barWidth ) {
                        // Not possible to take account of it
                        tableStyle.width = _fnStringToCss( sanityWidth );
                    }
                }
                else {
                    // When all else fails
                    tableStyle.width = _fnStringToCss( sanityWidth );
                }
            }

            // Recalculate the sanity width - now that we've applied the required width,
            // before it was a temporary variable. This is required because the column
            // width calculation is done before this table DOM is created.
            sanityWidth = table.outerWidth();

            // Hidden header should have zero height, so remove padding and borders. Then
            // set the width based on the real headers

            // Apply all styles in one pass
            _fnApplyToChildren( zeroOut, headerSrcEls );

            // Read all widths in next pass
            _fnApplyToChildren( function(nSizer) {
                headerContent.push( nSizer.innerHTML );
                headerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
            }, headerSrcEls );

            // Apply all widths in final pass
            _fnApplyToChildren( function(nToSize, i) {
                nToSize.style.width = headerWidths[i];
            }, headerTrgEls );

            $(headerSrcEls).height(0);

            /* Same again with the footer if we have one */
            if ( footer )
            {
                _fnApplyToChildren( zeroOut, footerSrcEls );

                _fnApplyToChildren( function(nSizer) {
                    footerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
                }, footerSrcEls );

                _fnApplyToChildren( function(nToSize, i) {
                    nToSize.style.width = footerWidths[i];
                }, footerTrgEls );

                $(footerSrcEls).height(0);
            }


            /*
             * 3. Apply the measurements
             */

            // "Hide" the header and footer that we used for the sizing. We need to keep
            // the content of the cell so that the width applied to the header and body
            // both match, but we want to hide it completely. We want to also fix their
            // width to what they currently are
            _fnApplyToChildren( function(nSizer, i) {
                nSizer.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+headerContent[i]+'</div>';
                nSizer.style.width = headerWidths[i];
            }, headerSrcEls );

            if ( footer )
            {
                _fnApplyToChildren( function(nSizer, i) {
                    nSizer.innerHTML = "";
                    nSizer.style.width = footerWidths[i];
                }, footerSrcEls );
            }

            // Sanity check that the table is of a sensible width. If not then we are going to get
            // misalignment - try to prevent this by not allowing the table to shrink below its min width
            if ( table.outerWidth() < sanityWidth )
            {
                // The min width depends upon if we have a vertical scrollbar visible or not */
                correction = ((divBodyEl.scrollHeight > divBodyEl.offsetHeight ||
                    divBody.css('overflow-y') == "scroll")) ?
                    sanityWidth+barWidth :
                    sanityWidth;

                // IE6/7 are a law unto themselves...
                if ( ie67 && (divBodyEl.scrollHeight >
                    divBodyEl.offsetHeight || divBody.css('overflow-y') == "scroll")
                    ) {
                    tableStyle.width = _fnStringToCss( correction-barWidth );
                }

                // And give the user a warning that we've stopped the table getting too small
                if ( scrollX === "" || scrollXInner !== "" ) {
                    _fnLog( settings, 1, 'Possible column misalignment', 6 );
                }
            }
            else
            {
                correction = '100%';
            }

            // Apply to the container elements
            divBodyStyle.width = _fnStringToCss( correction );
            divHeaderStyle.width = _fnStringToCss( correction );

            if ( footer ) {
                settings.nScrollFoot.style.width = _fnStringToCss( correction );
            }


            /*
             * 4. Clean up
             */
            if ( ! scrollY ) {
                /* IE7< puts a vertical scrollbar in place (when it shouldn't be) due to subtracting
                 * the scrollbar height from the visible display, rather than adding it on. We need to
                 * set the height in order to sort this. Don't want to do it in any other browsers.
                 */
                if ( ie67 ) {
                    divBodyStyle.height = _fnStringToCss( tableEl.offsetHeight+barWidth );
                }
            }

            if ( scrollY && scroll.bCollapse ) {
                divBodyStyle.height = _fnStringToCss( scrollY );

                var iExtra = (scrollX && tableEl.offsetWidth > divBodyEl.offsetWidth) ?
                    barWidth :
                    0;

                if ( tableEl.offsetHeight < divBodyEl.offsetHeight ) {
                    divBodyStyle.height = _fnStringToCss( tableEl.offsetHeight+iExtra );
                }
            }

            /* Finally set the width's of the header and footer tables */
            var iOuterWidth = table.outerWidth();
            divHeaderTable[0].style.width = _fnStringToCss( iOuterWidth );
            divHeaderInnerStyle.width = _fnStringToCss( iOuterWidth );

            // Figure out if there are scrollbar present - if so then we need a the header and footer to
            // provide a bit more space to allow "overflow" scrolling (i.e. past the scrollbar)
            var bScrolling = table.height() > divBodyEl.clientHeight || divBody.css('overflow-y') == "scroll";
            var padding = 'padding' + (browser.bScrollbarLeft ? 'Left' : 'Right' );
            divHeaderInnerStyle[ padding ] = bScrolling ? barWidth+"px" : "0px";

            if ( footer ) {
                divFooterTable[0].style.width = _fnStringToCss( iOuterWidth );
                divFooterInner[0].style.width = _fnStringToCss( iOuterWidth );
                divFooterInner[0].style[padding] = bScrolling ? barWidth+"px" : "0px";
            }

            /* Adjust the position of the header in case we loose the y-scrollbar */
            divBody.scroll();

            /* If sorting or filtering has occurred, jump the scrolling back to the top */
            if ( settings.bSorted || settings.bFiltered ) {
                divBodyEl.scrollTop = 0;
            }
        }



        /**
         * Apply a given function to the display child nodes of an element array (typically
         * TD children of TR rows
         *  @param {function} fn Method to apply to the objects
         *  @param array {nodes} an1 List of elements to look through for display children
         *  @param array {nodes} an2 Another list (identical structure to the first) - optional
         *  @memberof DataTable#oApi
         */
        function _fnApplyToChildren( fn, an1, an2 )
        {
            var index=0, i=0, iLen=an1.length;
            var nNode1, nNode2;

            while ( i < iLen ) {
                nNode1 = an1[i].firstChild;
                nNode2 = an2 ? an2[i].firstChild : null;

                while ( nNode1 ) {
                    if ( nNode1.nodeType === 1 ) {
                        if ( an2 ) {
                            fn( nNode1, nNode2, index );
                        }
                        else {
                            fn( nNode1, index );
                        }

                        index++;
                    }

                    nNode1 = nNode1.nextSibling;
                    nNode2 = an2 ? nNode2.nextSibling : null;
                }

                i++;
            }
        }



        var __re_html_remove = /<.*?>/g;


        /**
         * Calculate the width of columns for the table
         *  @param {object} oSettings dataTables settings object
         *  @memberof DataTable#oApi
         */
        function _fnCalculateColumnWidths ( oSettings )
        {
            var
                table = oSettings.nTable,
                columns = oSettings.aoColumns,
                scroll = oSettings.oScroll,
                scrollY = scroll.sY,
                scrollX = scroll.sX,
                scrollXInner = scroll.sXInner,
                columnCount = columns.length,
                visibleColumns = _fnGetColumns( oSettings, 'bVisible' ),
                headerCells = $('th', oSettings.nTHead),
                tableWidthAttr = table.getAttribute('width'),
                tableContainer = table.parentNode,
                userInputs = false,
                i, column, columnIdx, width, outerWidth;

            /* Convert any user input sizes into pixel sizes */
            for ( i=0 ; i<visibleColumns.length ; i++ ) {
                column = columns[ visibleColumns[i] ];

                if ( column.sWidth !== null ) {
                    column.sWidth = _fnConvertToWidth( column.sWidthOrig, tableContainer );

                    userInputs = true;
                }
            }

            /* If the number of columns in the DOM equals the number that we have to
             * process in DataTables, then we can use the offsets that are created by
             * the web- browser. No custom sizes can be set in order for this to happen,
             * nor scrolling used
             */
            if ( ! userInputs && ! scrollX && ! scrollY &&
                columnCount == _fnVisbleColumns( oSettings ) &&
                columnCount == headerCells.length
                ) {
                for ( i=0 ; i<columnCount ; i++ ) {
                    columns[i].sWidth = _fnStringToCss( headerCells.eq(i).width() );
                }
            }
            else
            {
                // Otherwise construct a single row table with the widest node in the
                // data, assign any user defined widths, then insert it into the DOM and
                // allow the browser to do all the hard work of calculating table widths
                var tmpTable = $( table.cloneNode( false ) )
                    .css( 'visibility', 'hidden' )
                    .removeAttr( 'id' )
                    .append( $(oSettings.nTHead).clone( false ) )
                    .append( $(oSettings.nTFoot).clone( false ) )
                    .append( $('<tbody><tr/></tbody>') );

                // Remove any assigned widths from the footer (from scrolling)
                tmpTable.find('tfoot th, tfoot td').css('width', '');

                var tr = tmpTable.find( 'tbody tr' );

                // Apply custom sizing to the cloned header
                headerCells = _fnGetUniqueThs( oSettings, tmpTable.find('thead')[0] );

                for ( i=0 ; i<visibleColumns.length ; i++ ) {
                    column = columns[ visibleColumns[i] ];

                    headerCells[i].style.width = column.sWidthOrig !== null && column.sWidthOrig !== '' ?
                        _fnStringToCss( column.sWidthOrig ) :
                        '';
                }

                // Find the widest cell for each column and put it into the table
                if ( oSettings.aoData.length ) {
                    for ( i=0 ; i<visibleColumns.length ; i++ ) {
                        columnIdx = visibleColumns[i];
                        column = columns[ columnIdx ];

                        $( _fnGetWidestNode( oSettings, columnIdx ) )
                            .clone( false )
                            .append( column.sContentPadding )
                            .appendTo( tr );
                    }
                }

                // Table has been built, attach to the document so we can work with it
                tmpTable.appendTo( tableContainer );

                // When scrolling (X or Y) we want to set the width of the table as
                // appropriate. However, when not scrolling leave the table width as it
                // is. This results in slightly different, but I think correct behaviour
                if ( scrollX && scrollXInner ) {
                    tmpTable.width( scrollXInner );
                }
                else if ( scrollX ) {
                    tmpTable.css( 'width', 'auto' );

                    if ( tmpTable.width() < tableContainer.offsetWidth ) {
                        tmpTable.width( tableContainer.offsetWidth );
                    }
                }
                else if ( scrollY ) {
                    tmpTable.width( tableContainer.offsetWidth );
                }
                else if ( tableWidthAttr ) {
                    tmpTable.width( tableWidthAttr );
                }

                // Take into account the y scrollbar
                _fnScrollingWidthAdjust( oSettings, tmpTable[0] );

                // Browsers need a bit of a hand when a width is assigned to any columns
                // when x-scrolling as they tend to collapse the table to the min-width,
                // even if we sent the column widths. So we need to keep track of what
                // the table width should be by summing the user given values, and the
                // automatic values
                if ( scrollX )
                {
                    var total = 0;

                    for ( i=0 ; i<visibleColumns.length ; i++ ) {
                        column = columns[ visibleColumns[i] ];
                        outerWidth = $(headerCells[i]).outerWidth();

                        total += column.sWidthOrig === null ?
                            outerWidth :
                            parseInt( column.sWidth, 10 ) + outerWidth - $(headerCells[i]).width();
                    }

                    tmpTable.width( _fnStringToCss( total ) );
                    table.style.width = _fnStringToCss( total );
                }

                // Get the width of each column in the constructed table
                for ( i=0 ; i<visibleColumns.length ; i++ ) {
                    column = columns[ visibleColumns[i] ];
                    width = $(headerCells[i]).width();

                    if ( width ) {
                        column.sWidth = _fnStringToCss( width );
                    }
                }

                table.style.width = _fnStringToCss( tmpTable.css('width') );

                // Finished with the table - ditch it
                tmpTable.remove();
            }

            // If there is a width attr, we want to attach an event listener which
            // allows the table sizing to automatically adjust when the window is
            // resized. Use the width attr rather than CSS, since we can't know if the
            // CSS is a relative value or absolute - DOM read is always px.
            if ( tableWidthAttr ) {
                table.style.width = _fnStringToCss( tableWidthAttr );
            }

            if ( (tableWidthAttr || scrollX) && ! oSettings._reszEvt ) {
                $(window).bind('resize.DT-'+oSettings.sInstance, _fnThrottle( function () {
                    _fnAdjustColumnSizing( oSettings );
                } ) );

                oSettings._reszEvt = true;
            }
        }


        /**
         * Throttle the calls to a function. Arguments and context are maintained for
         * the throttled function
         *  @param {function} fn Function to be called
         *  @param {int} [freq=200] call frequency in mS
         *  @returns {function} wrapped function
         *  @memberof DataTable#oApi
         */
        function _fnThrottle( fn, freq ) {
            var
                frequency = freq || 200,
                last,
                timer;

            return function () {
                var
                    that = this,
                    now  = +new Date(),
                    args = arguments;

                if ( last && now < last + frequency ) {
                    clearTimeout( timer );

                    timer = setTimeout( function () {
                        last = undefined;
                        fn.apply( that, args );
                    }, frequency );
                }
                else if ( last ) {
                    last = now;
                    fn.apply( that, args );
                }
                else {
                    last = now;
                }
            };
        }


        /**
         * Convert a CSS unit width to pixels (e.g. 2em)
         *  @param {string} width width to be converted
         *  @param {node} parent parent to get the with for (required for relative widths) - optional
         *  @returns {int} width in pixels
         *  @memberof DataTable#oApi
         */
        function _fnConvertToWidth ( width, parent )
        {
            if ( ! width ) {
                return 0;
            }

            var n = $('<div/>')
                .css( 'width', _fnStringToCss( width ) )
                .appendTo( parent || document.body );

            var val = n[0].offsetWidth;
            n.remove();

            return val;
        }


        /**
         * Adjust a table's width to take account of vertical scroll bar
         *  @param {object} oSettings dataTables settings object
         *  @param {node} n table node
         *  @memberof DataTable#oApi
         */

        function _fnScrollingWidthAdjust ( settings, n )
        {
            var scroll = settings.oScroll;

            if ( scroll.sX || scroll.sY ) {
                // When y-scrolling only, we want to remove the width of the scroll bar
                // so the table + scroll bar will fit into the area available, otherwise
                // we fix the table at its current size with no adjustment
                var correction = ! scroll.sX ? scroll.iBarWidth : 0;
                n.style.width = _fnStringToCss( $(n).outerWidth() - correction );
            }
        }


        /**
         * Get the widest node
         *  @param {object} settings dataTables settings object
         *  @param {int} colIdx column of interest
         *  @returns {node} widest table node
         *  @memberof DataTable#oApi
         */
        function _fnGetWidestNode( settings, colIdx )
        {
            var idx = _fnGetMaxLenString( settings, colIdx );
            if ( idx < 0 ) {
                return null;
            }

            var data = settings.aoData[ idx ];
            return ! data.nTr ? // Might not have been created when deferred rendering
                $('<td/>').html( _fnGetCellData( settings, idx, colIdx, 'display' ) )[0] :
                data.anCells[ colIdx ];
        }


        /**
         * Get the maximum strlen for each data column
         *  @param {object} settings dataTables settings object
         *  @param {int} colIdx column of interest
         *  @returns {string} max string length for each column
         *  @memberof DataTable#oApi
         */
        function _fnGetMaxLenString( settings, colIdx )
        {
            var s, max=-1, maxIdx = -1;

            for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
                s = _fnGetCellData( settings, i, colIdx, 'display' )+'';
                s = s.replace( __re_html_remove, '' );

                if ( s.length > max ) {
                    max = s.length;
                    maxIdx = i;
                }
            }

            return maxIdx;
        }


        /**
         * Append a CSS unit (only if required) to a string
         *  @param {string} value to css-ify
         *  @returns {string} value with css unit
         *  @memberof DataTable#oApi
         */
        function _fnStringToCss( s )
        {
            if ( s === null ) {
                return '0px';
            }

            if ( typeof s == 'number' ) {
                return s < 0 ?
                    '0px' :
                    s+'px';
            }

            // Check it has a unit character already
            return s.match(/\d$/) ?
                s+'px' :
                s;
        }


        /**
         * Get the width of a scroll bar in this browser being used
         *  @returns {int} width in pixels
         *  @memberof DataTable#oApi
         */
        function _fnScrollBarWidth ()
        {
            // On first run a static variable is set, since this is only needed once.
            // Subsequent runs will just use the previously calculated value
            if ( ! DataTable.__scrollbarWidth ) {
                var inner = $('<p/>').css( {
                    width: '100%',
                    height: 200,
                    padding: 0
                } )[0];

                var outer = $('<div/>')
                    .css( {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 200,
                        height: 150,
                        padding: 0,
                        overflow: 'hidden',
                        visibility: 'hidden'
                    } )
                    .append( inner )
                    .appendTo( 'body' );

                var w1 = inner.offsetWidth;
                outer.css( 'overflow', 'scroll' );
                var w2 = inner.offsetWidth;

                if ( w1 === w2 ) {
                    w2 = outer[0].clientWidth;
                }

                outer.remove();

                DataTable.__scrollbarWidth = w1 - w2;
            }

            return DataTable.__scrollbarWidth;
        }



        function _fnSortFlatten ( settings )
        {
            var
                i, iLen, k, kLen,
                aSort = [],
                aiOrig = [],
                aoColumns = settings.aoColumns,
                aDataSort, iCol, sType, srcCol,
                fixed = settings.aaSortingFixed,
                fixedObj = $.isPlainObject( fixed ),
                nestedSort = [],
                add = function ( a ) {
                    if ( a.length && ! $.isArray( a[0] ) ) {
                        // 1D array
                        nestedSort.push( a );
                    }
                    else {
                        // 2D array
                        nestedSort.push.apply( nestedSort, a );
                    }
                };

            // Build the sort array, with pre-fix and post-fix options if they have been
            // specified
            if ( $.isArray( fixed ) ) {
                add( fixed );
            }

            if ( fixedObj && fixed.pre ) {
                add( fixed.pre );
            }

            add( settings.aaSorting );

            if (fixedObj && fixed.post ) {
                add( fixed.post );
            }

            for ( i=0 ; i<nestedSort.length ; i++ )
            {
                srcCol = nestedSort[i][0];
                aDataSort = aoColumns[ srcCol ].aDataSort;

                for ( k=0, kLen=aDataSort.length ; k<kLen ; k++ )
                {
                    iCol = aDataSort[k];
                    sType = aoColumns[ iCol ].sType || 'string';

                    aSort.push( {
                        src:       srcCol,
                        col:       iCol,
                        dir:       nestedSort[i][1],
                        index:     nestedSort[i][2],
                        type:      sType,
                        formatter: DataTable.ext.type.order[ sType+"-pre" ]
                    } );
                }
            }

            return aSort;
        }

        /**
         * Change the order of the table
         *  @param {object} oSettings dataTables settings object
         *  @memberof DataTable#oApi
         *  @todo This really needs split up!
         */
        function _fnSort ( oSettings )
        {
            var
                i, ien, iLen, j, jLen, k, kLen,
                sDataType, nTh,
                aiOrig = [],
                oExtSort = DataTable.ext.type.order,
                aoData = oSettings.aoData,
                aoColumns = oSettings.aoColumns,
                aDataSort, data, iCol, sType, oSort,
                formatters = 0,
                sortCol,
                displayMaster = oSettings.aiDisplayMaster,
                aSort;

            // Resolve any column types that are unknown due to addition or invalidation
            // @todo Can this be moved into a 'data-ready' handler which is called when
            //   data is going to be used in the table?
            _fnColumnTypes( oSettings );

            aSort = _fnSortFlatten( oSettings );

            for ( i=0, ien=aSort.length ; i<ien ; i++ ) {
                sortCol = aSort[i];

                // Track if we can use the fast sort algorithm
                if ( sortCol.formatter ) {
                    formatters++;
                }

                // Load the data needed for the sort, for each cell
                _fnSortData( oSettings, sortCol.col );
            }

            /* No sorting required if server-side or no sorting array */
            if ( _fnDataSource( oSettings ) != 'ssp' && aSort.length !== 0 )
            {
                // Create a value - key array of the current row positions such that we can use their
                // current position during the sort, if values match, in order to perform stable sorting
                for ( i=0, iLen=displayMaster.length ; i<iLen ; i++ ) {
                    aiOrig[ displayMaster[i] ] = i;
                }

                /* Do the sort - here we want multi-column sorting based on a given data source (column)
                 * and sorting function (from oSort) in a certain direction. It's reasonably complex to
                 * follow on it's own, but this is what we want (example two column sorting):
                 *  fnLocalSorting = function(a,b){
                 *    var iTest;
                 *    iTest = oSort['string-asc']('data11', 'data12');
                 *      if (iTest !== 0)
                 *        return iTest;
                 *    iTest = oSort['numeric-desc']('data21', 'data22');
                 *    if (iTest !== 0)
                 *      return iTest;
                 *    return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
                 *  }
                 * Basically we have a test for each sorting column, if the data in that column is equal,
                 * test the next column. If all columns match, then we use a numeric sort on the row
                 * positions in the original data array to provide a stable sort.
                 *
                 * Note - I know it seems excessive to have two sorting methods, but the first is around
                 * 15% faster, so the second is only maintained for backwards compatibility with sorting
                 * methods which do not have a pre-sort formatting function.
                 */
                if ( formatters === aSort.length ) {
                    // All sort types have formatting functions
                    displayMaster.sort( function ( a, b ) {
                        var
                            x, y, k, test, sort,
                            len=aSort.length,
                            dataA = aoData[a]._aSortData,
                            dataB = aoData[b]._aSortData;

                        for ( k=0 ; k<len ; k++ ) {
                            sort = aSort[k];

                            x = dataA[ sort.col ];
                            y = dataB[ sort.col ];

                            test = x<y ? -1 : x>y ? 1 : 0;
                            if ( test !== 0 ) {
                                return sort.dir === 'asc' ? test : -test;
                            }
                        }

                        x = aiOrig[a];
                        y = aiOrig[b];
                        return x<y ? -1 : x>y ? 1 : 0;
                    } );
                }
                else {
                    // Depreciated - remove in 1.11 (providing a plug-in option)
                    // Not all sort types have formatting methods, so we have to call their sorting
                    // methods.
                    displayMaster.sort( function ( a, b ) {
                        var
                            x, y, k, l, test, sort, fn,
                            len=aSort.length,
                            dataA = aoData[a]._aSortData,
                            dataB = aoData[b]._aSortData;

                        for ( k=0 ; k<len ; k++ ) {
                            sort = aSort[k];

                            x = dataA[ sort.col ];
                            y = dataB[ sort.col ];

                            fn = oExtSort[ sort.type+"-"+sort.dir ] || oExtSort[ "string-"+sort.dir ];
                            test = fn( x, y );
                            if ( test !== 0 ) {
                                return test;
                            }
                        }

                        x = aiOrig[a];
                        y = aiOrig[b];
                        return x<y ? -1 : x>y ? 1 : 0;
                    } );
                }
            }

            /* Tell the draw function that we have sorted the data */
            oSettings.bSorted = true;
        }


        function _fnSortAria ( settings )
        {
            var label;
            var nextSort;
            var columns = settings.aoColumns;
            var aSort = _fnSortFlatten( settings );
            var oAria = settings.oLanguage.oAria;

            // ARIA attributes - need to loop all columns, to update all (removing old
            // attributes as needed)
            for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
            {
                var col = columns[i];
                var asSorting = col.asSorting;
                var sTitle = col.sTitle.replace( /<.*?>/g, "" );
                var th = col.nTh;

                // IE7 is throwing an error when setting these properties with jQuery's
                // attr() and removeAttr() methods...
                th.removeAttribute('aria-sort');

                /* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */
                if ( col.bSortable ) {
                    if ( aSort.length > 0 && aSort[0].col == i ) {
                        th.setAttribute('aria-sort', aSort[0].dir=="asc" ? "ascending" : "descending" );
                        nextSort = asSorting[ aSort[0].index+1 ] || asSorting[0];
                    }
                    else {
                        nextSort = asSorting[0];
                    }

                    label = sTitle + ( nextSort === "asc" ?
                        oAria.sSortAscending :
                        oAria.sSortDescending
                        );
                }
                else {
                    label = sTitle;
                }

                th.setAttribute('aria-label', label);
            }
        }


        /**
         * Function to run on user sort request
         *  @param {object} settings dataTables settings object
         *  @param {node} attachTo node to attach the handler to
         *  @param {int} colIdx column sorting index
         *  @param {boolean} [append=false] Append the requested sort to the existing
         *    sort if true (i.e. multi-column sort)
         *  @param {function} [callback] callback function
         *  @memberof DataTable#oApi
         */
        function _fnSortListener ( settings, colIdx, append, callback )
        {
            var col = settings.aoColumns[ colIdx ];
            var sorting = settings.aaSorting;
            var asSorting = col.asSorting;
            var nextSortIdx;
            var next = function ( a ) {
                var idx = a._idx;
                if ( idx === undefined ) {
                    idx = $.inArray( a[1], asSorting );
                }

                return idx+1 >= asSorting.length ? 0 : idx+1;
            };

            // If appending the sort then we are multi-column sorting
            if ( append && settings.oFeatures.bSortMulti ) {
                // Are we already doing some kind of sort on this column?
                var sortIdx = $.inArray( colIdx, _pluck(sorting, '0') );

                if ( sortIdx !== -1 ) {
                    // Yes, modify the sort
                    nextSortIdx = next( sorting[sortIdx] );

                    sorting[sortIdx][1] = asSorting[ nextSortIdx ];
                    sorting[sortIdx]._idx = nextSortIdx;
                }
                else {
                    // No sort on this column yet
                    sorting.push( [ colIdx, asSorting[0], 0 ] );
                    sorting[sorting.length-1]._idx = 0;
                }
            }
            else if ( sorting.length && sorting[0][0] == colIdx ) {
                // Single column - already sorting on this column, modify the sort
                nextSortIdx = next( sorting[0] );

                sorting.length = 1;
                sorting[0][1] = asSorting[ nextSortIdx ];
                sorting[0]._idx = nextSortIdx;
            }
            else {
                // Single column - sort only on this column
                sorting.length = 0;
                sorting.push( [ colIdx, asSorting[0] ] );
                sorting[0]._idx = 0;
            }

            // Run the sort by calling a full redraw
            _fnReDraw( settings );

            // callback used for async user interaction
            if ( typeof callback == 'function' ) {
                callback( settings );
            }
        }


        /**
         * Attach a sort handler (click) to a node
         *  @param {object} settings dataTables settings object
         *  @param {node} attachTo node to attach the handler to
         *  @param {int} colIdx column sorting index
         *  @param {function} [callback] callback function
         *  @memberof DataTable#oApi
         */
        function _fnSortAttachListener ( settings, attachTo, colIdx, callback )
        {
            var col = settings.aoColumns[ colIdx ];

            _fnBindAction( attachTo, {}, function (e) {
                /* If the column is not sortable - don't to anything */
                if ( col.bSortable === false ) {
                    return;
                }

                // If processing is enabled use a timeout to allow the processing
                // display to be shown - otherwise to it synchronously
                if ( settings.oFeatures.bProcessing ) {
                    _fnProcessingDisplay( settings, true );

                    setTimeout( function() {
                        _fnSortListener( settings, colIdx, e.shiftKey, callback );

                        // In server-side processing, the draw callback will remove the
                        // processing display
                        if ( _fnDataSource( settings ) !== 'ssp' ) {
                            _fnProcessingDisplay( settings, false );
                        }
                    }, 0 );
                }
                else {
                    _fnSortListener( settings, colIdx, e.shiftKey, callback );
                }
            } );
        }


        /**
         * Set the sorting classes on table's body, Note: it is safe to call this function
         * when bSort and bSortClasses are false
         *  @param {object} oSettings dataTables settings object
         *  @memberof DataTable#oApi
         */
        function _fnSortingClasses( settings )
        {
            var oldSort = settings.aLastSort;
            var sortClass = settings.oClasses.sSortColumn;
            var sort = _fnSortFlatten( settings );
            var features = settings.oFeatures;
            var i, ien, colIdx;

            if ( features.bSort && features.bSortClasses ) {
                // Remove old sorting classes
                for ( i=0, ien=oldSort.length ; i<ien ; i++ ) {
                    colIdx = oldSort[i].src;

                    // Remove column sorting
                    $( _pluck( settings.aoData, 'anCells', colIdx ) )
                        .removeClass( sortClass + (i<2 ? i+1 : 3) );
                }

                // Add new column sorting
                for ( i=0, ien=sort.length ; i<ien ; i++ ) {
                    colIdx = sort[i].src;

                    $( _pluck( settings.aoData, 'anCells', colIdx ) )
                        .addClass( sortClass + (i<2 ? i+1 : 3) );
                }
            }

            settings.aLastSort = sort;
        }


        // Get the data to sort a column, be it from cache, fresh (populating the
        // cache), or from a sort formatter
        function _fnSortData( settings, idx )
        {
            // Custom sorting function - provided by the sort data type
            var column = settings.aoColumns[ idx ];
            var customSort = DataTable.ext.order[ column.sSortDataType ];
            var customData;

            if ( customSort ) {
                customData = customSort.call( settings.oInstance, settings, idx,
                    _fnColumnIndexToVisible( settings, idx )
                );
            }

            // Use / populate cache
            var row, cellData;
            var formatter = DataTable.ext.type.order[ column.sType+"-pre" ];

            for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
                row = settings.aoData[i];

                if ( ! row._aSortData ) {
                    row._aSortData = [];
                }

                if ( ! row._aSortData[idx] || customSort ) {
                    cellData = customSort ?
                        customData[i] : // If there was a custom sort function, use data from there
                        _fnGetCellData( settings, i, idx, 'sort' );

                    row._aSortData[ idx ] = formatter ?
                        formatter( cellData ) :
                        cellData;
                }
            }
        }



        /**
         * Save the state of a table
         *  @param {object} oSettings dataTables settings object
         *  @memberof DataTable#oApi
         */
        function _fnSaveState ( oSettings )
        {
            if ( !oSettings.oFeatures.bStateSave || oSettings.bDestroying )
            {
                return;
            }

            /* Store the interesting variables */
            var i, iLen;
            var oState = {
                "iCreate":      +new Date(),
                "iStart":       oSettings._iDisplayStart,
                "iLength":      oSettings._iDisplayLength,
                "aaSorting":    $.extend( true, [], oSettings.aaSorting ),
                "oSearch":      $.extend( true, {}, oSettings.oPreviousSearch ),
                "aoSearchCols": $.extend( true, [], oSettings.aoPreSearchCols ),
                "abVisCols":    _pluck( oSettings.aoColumns, 'bVisible' )
            };

            _fnCallbackFire( oSettings, "aoStateSaveParams", 'stateSaveParams', [oSettings, oState] );

            oSettings.fnStateSaveCallback.call( oSettings.oInstance, oSettings, oState );
        }


        /**
         * Attempt to load a saved table state
         *  @param {object} oSettings dataTables settings object
         *  @param {object} oInit DataTables init object so we can override settings
         *  @memberof DataTable#oApi
         */
        function _fnLoadState ( oSettings, oInit )
        {
            var i, ien;
            var columns = oSettings.aoColumns;

            if ( ! oSettings.oFeatures.bStateSave ) {
                return;
            }

            var oData = oSettings.fnStateLoadCallback.call( oSettings.oInstance, oSettings );
            if ( !oData ) {
                return;
            }

            /* Allow custom and plug-in manipulation functions to alter the saved data set and
             * cancelling of loading by returning false
             */
            var abStateLoad = _fnCallbackFire( oSettings, 'aoStateLoadParams', 'stateLoadParams', [oSettings, oData] );
            if ( $.inArray( false, abStateLoad ) !== -1 ) {
                return;
            }

            /* Reject old data */
            var duration = oSettings.iStateDuration;
            if ( duration > 0 && oData.iCreate < +new Date() - (duration*1000) ) {
                return;
            }

            // Number of columns have changed - all bets are off, no restore of settings
            if ( columns.length !== oData.aoSearchCols.length ) {
                return;
            }

            /* Store the saved state so it might be accessed at any time */
            oSettings.oLoadedState = $.extend( true, {}, oData );

            /* Restore key features */
            oSettings._iDisplayStart    = oData.iStart;
            oSettings.iInitDisplayStart = oData.iStart;
            oSettings._iDisplayLength   = oData.iLength;
            oSettings.aaSorting = $.map( oData.aaSorting, function ( col, i ) {
                return col[0] >= columns.length ?
                    [ 0, col[1] ] :
                    col;
            } );

            /* Search filtering  */
            $.extend( oSettings.oPreviousSearch, oData.oSearch );
            $.extend( true, oSettings.aoPreSearchCols, oData.aoSearchCols );

            /* Column visibility state */
            var visColumns = oData.abVisCols;
            for ( i=0, ien=visColumns.length ; i<ien ; i++ ) {
                columns[i].bVisible = visColumns[i];
            }

            _fnCallbackFire( oSettings, 'aoStateLoaded', 'stateLoaded', [oSettings, oData] );
        }


        /**
         * Return the settings object for a particular table
         *  @param {node} table table we are using as a dataTable
         *  @returns {object} Settings object - or null if not found
         *  @memberof DataTable#oApi
         */
        function _fnSettingsFromNode ( table )
        {
            var settings = DataTable.settings;
            var idx = $.inArray( table, _pluck( settings, 'nTable' ) );

            return idx !== -1 ?
                settings[ idx ] :
                null;
        }


        /**
         * Log an error message
         *  @param {object} settings dataTables settings object
         *  @param {int} level log error messages, or display them to the user
         *  @param {string} msg error message
         *  @param {int} tn Technical note id to get more information about the error.
         *  @memberof DataTable#oApi
         */
        function _fnLog( settings, level, msg, tn )
        {
            msg = 'DataTables warning: '+
                (settings!==null ? 'table id='+settings.sTableId+' - ' : '')+msg;

            if ( tn ) {
                msg += '. For more information about this error, please see '+
                    'http://datatables.net/tn/'+tn;
            }

            if ( ! level  ) {
                // Backwards compatibility pre 1.10
                var ext = DataTable.ext;
                var type = ext.sErrMode || ext.errMode;

                if ( type == 'alert' ) {
                    alert( msg );
                }
                else {
                    throw new Error(msg);
                }
            }
            else if ( window.console && console.log ) {
                console.log( msg );
            }
        }


        /**
         * See if a property is defined on one object, if so assign it to the other object
         *  @param {object} ret target object
         *  @param {object} src source object
         *  @param {string} name property
         *  @param {string} [mappedName] name to map too - optional, name used if not given
         *  @memberof DataTable#oApi
         */
        function _fnMap( ret, src, name, mappedName )
        {
            if ( $.isArray( name ) ) {
                $.each( name, function (i, val) {
                    if ( $.isArray( val ) ) {
                        _fnMap( ret, src, val[0], val[1] );
                    }
                    else {
                        _fnMap( ret, src, val );
                    }
                } );

                return;
            }

            if ( mappedName === undefined ) {
                mappedName = name;
            }

            if ( src[name] !== undefined ) {
                ret[mappedName] = src[name];
            }
        }


        /**
         * Extend objects - very similar to jQuery.extend, but deep copy objects, and
         * shallow copy arrays. The reason we need to do this, is that we don't want to
         * deep copy array init values (such as aaSorting) since the dev wouldn't be
         * able to override them, but we do want to deep copy arrays.
         *  @param {object} out Object to extend
         *  @param {object} extender Object from which the properties will be applied to
         *      out
         *  @param {boolean} breakRefs If true, then arrays will be sliced to take an
         *      independent copy with the exception of the `data` or `aaData` parameters
         *      if they are present. This is so you can pass in a collection to
         *      DataTables and have that used as your data source without breaking the
         *      references
         *  @returns {object} out Reference, just for convenience - out === the return.
         *  @memberof DataTable#oApi
         *  @todo This doesn't take account of arrays inside the deep copied objects.
         */
        function _fnExtend( out, extender, breakRefs )
        {
            var val;

            for ( var prop in extender ) {
                if ( extender.hasOwnProperty(prop) ) {
                    val = extender[prop];

                    if ( $.isPlainObject( val ) ) {
                        if ( ! $.isPlainObject( out[prop] ) ) {
                            out[prop] = {};
                        }
                        $.extend( true, out[prop], val );
                    }
                    else if ( breakRefs && prop !== 'data' && prop !== 'aaData' && $.isArray(val) ) {
                        out[prop] = val.slice();
                    }
                    else {
                        out[prop] = val;
                    }
                }
            }

            return out;
        }


        /**
         * Bind an event handers to allow a click or return key to activate the callback.
         * This is good for accessibility since a return on the keyboard will have the
         * same effect as a click, if the element has focus.
         *  @param {element} n Element to bind the action to
         *  @param {object} oData Data object to pass to the triggered function
         *  @param {function} fn Callback function for when the event is triggered
         *  @memberof DataTable#oApi
         */
        function _fnBindAction( n, oData, fn )
        {
            $(n)
                .bind( 'click.DT', oData, function (e) {
                    n.blur(); // Remove focus outline for mouse users
                    fn(e);
                } )
                .bind( 'keypress.DT', oData, function (e){
                    if ( e.which === 13 ) {
                        e.preventDefault();
                        fn(e);
                    }
                } )
                .bind( 'selectstart.DT', function () {
                    /* Take the brutal approach to cancelling text selection */
                    return false;
                } );
        }


        /**
         * Register a callback function. Easily allows a callback function to be added to
         * an array store of callback functions that can then all be called together.
         *  @param {object} oSettings dataTables settings object
         *  @param {string} sStore Name of the array storage for the callbacks in oSettings
         *  @param {function} fn Function to be called back
         *  @param {string} sName Identifying name for the callback (i.e. a label)
         *  @memberof DataTable#oApi
         */
        function _fnCallbackReg( oSettings, sStore, fn, sName )
        {
            if ( fn )
            {
                oSettings[sStore].push( {
                    "fn": fn,
                    "sName": sName
                } );
            }
        }


        /**
         * Fire callback functions and trigger events. Note that the loop over the
         * callback array store is done backwards! Further note that you do not want to
         * fire off triggers in time sensitive applications (for example cell creation)
         * as its slow.
         *  @param {object} settings dataTables settings object
         *  @param {string} callbackArr Name of the array storage for the callbacks in
         *      oSettings
         *  @param {string} event Name of the jQuery custom event to trigger. If null no
         *      trigger is fired
         *  @param {array} args Array of arguments to pass to the callback function /
         *      trigger
         *  @memberof DataTable#oApi
         */
        function _fnCallbackFire( settings, callbackArr, event, args )
        {
            var ret = [];

            if ( callbackArr ) {
                ret = $.map( settings[callbackArr].slice().reverse(), function (val, i) {
                    return val.fn.apply( settings.oInstance, args );
                } );
            }

            if ( event !== null ) {
                $(settings.nTable).trigger( event+'.dt', args );
            }

            return ret;
        }


        function _fnLengthOverflow ( settings )
        {
            var
                start = settings._iDisplayStart,
                end = settings.fnDisplayEnd(),
                len = settings._iDisplayLength;

            /* If we have space to show extra rows (backing up from the end point - then do so */
            if ( end === settings.fnRecordsDisplay() )
            {
                start = end - len;
            }

            if ( len === -1 || start < 0 )
            {
                start = 0;
            }

            settings._iDisplayStart = start;
        }


        function _fnRenderer( settings, type )
        {
            var renderer = settings.renderer;
            var host = DataTable.ext.renderer[type];

            if ( $.isPlainObject( renderer ) && renderer[type] ) {
                // Specific renderer for this type. If available use it, otherwise use
                // the default.
                return host[renderer[type]] || host._;
            }
            else if ( typeof renderer === 'string' ) {
                // Common renderer - if there is one available for this type use it,
                // otherwise use the default
                return host[renderer] || host._;
            }

            // Use the default
            return host._;
        }


        /**
         * Detect the data source being used for the table. Used to simplify the code
         * a little (ajax) and to make it compress a little smaller.
         *
         *  @param {object} settings dataTables settings object
         *  @returns {string} Data source
         *  @memberof DataTable#oApi
         */
        function _fnDataSource ( settings )
        {
            if ( settings.oFeatures.bServerSide ) {
                return 'ssp';
            }
            else if ( settings.ajax || settings.sAjaxSource ) {
                return 'ajax';
            }
            return 'dom';
        }


        DataTable = function( options )
        {
            /**
             * Perform a jQuery selector action on the table's TR elements (from the tbody) and
             * return the resulting jQuery object.
             *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
             *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
             *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
             *    criterion ("applied") or all TR elements (i.e. no filter).
             *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
             *    Can be either 'current', whereby the current sorting of the table is used, or
             *    'original' whereby the original order the data was read into the table is used.
             *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
             *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
             *    'current' and filter is 'applied', regardless of what they might be given as.
             *  @returns {object} jQuery object, filtered by the given selector.
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Highlight every second row
		 *      oTable.$('tr:odd').css('backgroundColor', 'blue');
		 *    } );
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to rows with 'Webkit' in them, add a background colour and then
		 *      // remove the filter, thus highlighting the 'Webkit' rows only.
		 *      oTable.fnFilter('Webkit');
		 *      oTable.$('tr', {"search": "applied"}).css('backgroundColor', 'blue');
		 *      oTable.fnFilter('');
		 *    } );
             */
            this.$ = function ( sSelector, oOpts )
            {
                return this.api(true).$( sSelector, oOpts );
            };


            /**
             * Almost identical to $ in operation, but in this case returns the data for the matched
             * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
             * rather than any descendants, so the data can be obtained for the row/cell. If matching
             * rows are found, the data returned is the original data array/object that was used to
             * create the row (or a generated array if from a DOM source).
             *
             * This method is often useful in-combination with $ where both functions are given the
             * same parameters and the array indexes will match identically.
             *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
             *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
             *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
             *    criterion ("applied") or all elements (i.e. no filter).
             *  @param {string} [oOpts.order=current] Order of the data in the processed array.
             *    Can be either 'current', whereby the current sorting of the table is used, or
             *    'original' whereby the original order the data was read into the table is used.
             *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
             *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
             *    'current' and filter is 'applied', regardless of what they might be given as.
             *  @returns {array} Data for the matched elements. If any elements, as a result of the
             *    selector, were not TR, TD or TH elements in the DataTable, they will have a null
             *    entry in the array.
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the data from the first row in the table
		 *      var data = oTable._('tr:first');
		 *
		 *      // Do something useful with the data
		 *      alert( "First cell is: "+data[0] );
		 *    } );
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to 'Webkit' and get all data for
		 *      oTable.fnFilter('Webkit');
		 *      var data = oTable._('tr', {"search": "applied"});
		 *
		 *      // Do something with the data
		 *      alert( data.length+" rows matched the search" );
		 *    } );
             */
            this._ = function ( sSelector, oOpts )
            {
                return this.api(true).rows( sSelector, oOpts ).data();
            };


            /**
             * Create a DataTables Api instance, with the currently selected tables for
             * the Api's context.
             * @param {boolean} [traditional=false] Set the API instance's context to be
             *   only the table referred to by the `DataTable.ext.iApiIndex` option, as was
             *   used in the API presented by DataTables 1.9- (i.e. the traditional mode),
             *   or if all tables captured in the jQuery object should be used.
             * @return {DataTables.Api}
             */
            this.api = function ( traditional )
            {
                return traditional ?
                    new _Api(
                        _fnSettingsFromNode( this[ _ext.iApiIndex ] )
                    ) :
                    new _Api( this );
            };


            /**
             * Add a single new row or multiple rows of data to the table. Please note
             * that this is suitable for client-side processing only - if you are using
             * server-side processing (i.e. "bServerSide": true), then to add data, you
             * must add it to the data source, i.e. the server-side, through an Ajax call.
             *  @param {array|object} data The data to be added to the table. This can be:
             *    <ul>
             *      <li>1D array of data - add a single row with the data provided</li>
             *      <li>2D array of arrays - add multiple rows in a single call</li>
             *      <li>object - data object when using <i>mData</i></li>
             *      <li>array of objects - multiple data objects when using <i>mData</i></li>
             *    </ul>
             *  @param {bool} [redraw=true] redraw the table or not
             *  @returns {array} An array of integers, representing the list of indexes in
             *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to
             *    the table.
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    // Global var for counter
             *    var giCount = 2;
             *
             *    $(document).ready(function() {
		 *      $('#example').dataTable();
		 *    } );
             *
             *    function fnClickAddRow() {
		 *      $('#example').dataTable().fnAddData( [
		 *        giCount+".1",
		 *        giCount+".2",
		 *        giCount+".3",
		 *        giCount+".4" ]
		 *      );
		 *
		 *      giCount++;
		 *    }
             */
            this.fnAddData = function( data, redraw )
            {
                var api = this.api( true );

                /* Check if we want to add multiple rows or not */
                var rows = $.isArray(data) && ( $.isArray(data[0]) || $.isPlainObject(data[0]) ) ?
                    api.rows.add( data ) :
                    api.row.add( data );

                if ( redraw === undefined || redraw ) {
                    api.draw();
                }

                return rows.flatten().toArray();
            };


            /**
             * This function will make DataTables recalculate the column sizes, based on the data
             * contained in the table and the sizes applied to the columns (in the DOM, CSS or
             * through the sWidth parameter). This can be useful when the width of the table's
             * parent element changes (for example a window resize).
             *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sScrollY": "200px",
		 *        "bPaginate": false
		 *      } );
		 *
		 *      $(window).bind('resize', function () {
		 *        oTable.fnAdjustColumnSizing();
		 *      } );
		 *    } );
             */
            this.fnAdjustColumnSizing = function ( bRedraw )
            {
                var api = this.api( true ).columns.adjust();
                var settings = api.settings()[0];
                var scroll = settings.oScroll;

                if ( bRedraw === undefined || bRedraw ) {
                    api.draw( false );
                }
                else if ( scroll.sX !== "" || scroll.sY !== "" ) {
                    /* If not redrawing, but scrolling, we want to apply the new column sizes anyway */
                    _fnScrollDraw( settings );
                }
            };


            /**
             * Quickly and simply clear a table
             *  @param {bool} [bRedraw=true] redraw the table or not
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
		 *      oTable.fnClearTable();
		 *    } );
             */
            this.fnClearTable = function( bRedraw )
            {
                var api = this.api( true ).clear();

                if ( bRedraw === undefined || bRedraw ) {
                    api.draw();
                }
            };


            /**
             * The exact opposite of 'opening' a row, this function will close any rows which
             * are currently 'open'.
             *  @param {node} nTr the table row to 'close'
             *  @returns {int} 0 on success, or 1 if failed (can't find the row)
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
             */
            this.fnClose = function( nTr )
            {
                this.api( true ).row( nTr ).child.hide();
            };


            /**
             * Remove a row for the table
             *  @param {mixed} target The index of the row from aoData to be deleted, or
             *    the TR element you want to delete
             *  @param {function|null} [callBack] Callback function
             *  @param {bool} [redraw=true] Redraw the table or not
             *  @returns {array} The row that was deleted
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately remove the first row
		 *      oTable.fnDeleteRow( 0 );
		 *    } );
             */
            this.fnDeleteRow = function( target, callback, redraw )
            {
                var api = this.api( true );
                var rows = api.rows( target );
                var settings = rows.settings()[0];
                var data = settings.aoData[ rows[0][0] ];

                rows.remove();

                if ( callback ) {
                    callback.call( this, settings, data );
                }

                if ( redraw === undefined || redraw ) {
                    api.draw();
                }

                return data;
            };


            /**
             * Restore the table to it's original state in the DOM by removing all of DataTables
             * enhancements, alterations to the DOM structure of the table and event listeners.
             *  @param {boolean} [remove=false] Completely remove the table from the DOM
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnDestroy();
		 *    } );
             */
            this.fnDestroy = function ( remove )
            {
                this.api( true ).destroy( remove );
            };


            /**
             * Redraw the table
             *  @param {bool} [complete=true] Re-filter and resort (if enabled) the table before the draw.
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
		 *      oTable.fnDraw();
		 *    } );
             */
            this.fnDraw = function( complete )
            {
                // Note that this isn't an exact match to the old call to _fnDraw - it takes
                // into account the new data, but can old position.
                this.api( true ).draw( ! complete );
            };


            /**
             * Filter the input based on data
             *  @param {string} sInput String to filter the table on
             *  @param {int|null} [iColumn] Column to limit filtering to
             *  @param {bool} [bRegex=false] Treat as regular expression or not
             *  @param {bool} [bSmart=true] Perform smart filtering or not
             *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
             *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sometime later - filter...
		 *      oTable.fnFilter( 'test string' );
		 *    } );
             */
            this.fnFilter = function( sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive )
            {
                var api = this.api( true );

                if ( iColumn === null || iColumn === undefined ) {
                    api.search( sInput, bRegex, bSmart, bCaseInsensitive );
                }
                else {
                    api.column( iColumn ).search( sInput, bRegex, bSmart, bCaseInsensitive );
                }

                api.draw();
            };


            /**
             * Get the data for the whole table, an individual row or an individual cell based on the
             * provided parameters.
             *  @param {int|node} [src] A TR row node, TD/TH cell node or an integer. If given as
             *    a TR node then the data source for the whole row will be returned. If given as a
             *    TD/TH cell node then iCol will be automatically calculated and the data for the
             *    cell returned. If given as an integer, then this is treated as the aoData internal
             *    data index for the row (see fnGetPosition) and the data for that row used.
             *  @param {int} [col] Optional column index that you want the data of.
             *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
             *    returned. If mRow is defined, just data for that row, and is iCol is
             *    defined, only data for the designated cell is returned.
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    // Row data
             *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('tr').click( function () {
		 *        var data = oTable.fnGetData( this );
		 *        // ... do something with the array / object of data for the row
		 *      } );
		 *    } );
             *
             *  @example
             *    // Individual cell data
             *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('td').click( function () {
		 *        var sData = oTable.fnGetData( this );
		 *        alert( 'The cell clicked on had the value of '+sData );
		 *      } );
		 *    } );
             */
            this.fnGetData = function( src, col )
            {
                var api = this.api( true );

                if ( src !== undefined ) {
                    var type = src.nodeName ? src.nodeName.toLowerCase() : '';

                    return col !== undefined || type == 'td' || type == 'th' ?
                        api.cell( src, col ).data() :
                        api.row( src ).data() || null;
                }

                return api.data().toArray();
            };


            /**
             * Get an array of the TR nodes that are used in the table's body. Note that you will
             * typically want to use the '$' API method in preference to this as it is more
             * flexible.
             *  @param {int} [iRow] Optional row index for the TR element you want
             *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
             *    in the table's body, or iRow is defined, just the TR element requested.
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the nodes from the table
		 *      var nNodes = oTable.fnGetNodes( );
		 *    } );
             */
            this.fnGetNodes = function( iRow )
            {
                var api = this.api( true );

                return iRow !== undefined ?
                    api.row( iRow ).node() :
                    api.rows().nodes().flatten().toArray();
            };


            /**
             * Get the array indexes of a particular cell from it's DOM element
             * and column index including hidden columns
             *  @param {node} node this can either be a TR, TD or TH in the table's body
             *  @returns {int} If nNode is given as a TR, then a single index is returned, or
             *    if given as a cell, an array of [row index, column index (visible),
             *    column index (all)] is given.
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      $('#example tbody td').click( function () {
		 *        // Get the position of the current data from the node
		 *        var aPos = oTable.fnGetPosition( this );
		 *
		 *        // Get the data array for this row
		 *        var aData = oTable.fnGetData( aPos[0] );
		 *
		 *        // Update the data array and return the value
		 *        aData[ aPos[1] ] = 'clicked';
		 *        this.innerHTML = 'clicked';
		 *      } );
		 *
		 *      // Init DataTables
		 *      oTable = $('#example').dataTable();
		 *    } );
             */
            this.fnGetPosition = function( node )
            {
                var api = this.api( true );
                var nodeName = node.nodeName.toUpperCase();

                if ( nodeName == 'TR' ) {
                    return api.row( node ).index();
                }
                else if ( nodeName == 'TD' || nodeName == 'TH' ) {
                    var cell = api.cell( node ).index();

                    return [
                        cell.row,
                        cell.columnVisible,
                        cell.column
                    ];
                }
                return null;
            };


            /**
             * Check to see if a row is 'open' or not.
             *  @param {node} nTr the table row to check
             *  @returns {boolean} true if the row is currently open, false otherwise
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
             */
            this.fnIsOpen = function( nTr )
            {
                return this.api( true ).row( nTr ).child.isShown();
            };


            /**
             * This function will place a new row directly after a row which is currently
             * on display on the page, with the HTML contents that is passed into the
             * function. This can be used, for example, to ask for confirmation that a
             * particular record should be deleted.
             *  @param {node} nTr The table row to 'open'
             *  @param {string|node|jQuery} mHtml The HTML to put into the row
             *  @param {string} sClass Class to give the new TD cell
             *  @returns {node} The row opened. Note that if the table row passed in as the
             *    first parameter, is not found in the table, this method will silently
             *    return.
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
             */
            this.fnOpen = function( nTr, mHtml, sClass )
            {
                return this.api( true )
                    .row( nTr )
                    .child( mHtml, sClass )
                    .show()
                    .child()[0];
            };


            /**
             * Change the pagination - provides the internal logic for pagination in a simple API
             * function. With this function you can have a DataTables table go to the next,
             * previous, first or last pages.
             *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
             *    or page number to jump to (integer), note that page 0 is the first page.
             *  @param {bool} [bRedraw=true] Redraw the table or not
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnPageChange( 'next' );
		 *    } );
             */
            this.fnPageChange = function ( mAction, bRedraw )
            {
                var api = this.api( true ).page( mAction );

                if ( bRedraw === undefined || bRedraw ) {
                    api.draw(false);
                }
            };


            /**
             * Show a particular column
             *  @param {int} iCol The column whose display should be changed
             *  @param {bool} bShow Show (true) or hide (false) the column
             *  @param {bool} [bRedraw=true] Redraw the table or not
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Hide the second column after initialisation
		 *      oTable.fnSetColumnVis( 1, false );
		 *    } );
             */
            this.fnSetColumnVis = function ( iCol, bShow, bRedraw )
            {
                var api = this.api( true ).column( iCol ).visible( bShow );

                if ( bRedraw === undefined || bRedraw ) {
                    api.columns.adjust().draw();
                }
            };


            /**
             * Get the settings for a particular table for external manipulation
             *  @returns {object} DataTables settings object. See
             *    {@link DataTable.models.oSettings}
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      var oSettings = oTable.fnSettings();
		 *
		 *      // Show an example parameter from the settings
		 *      alert( oSettings._iDisplayStart );
		 *    } );
             */
            this.fnSettings = function()
            {
                return _fnSettingsFromNode( this[_ext.iApiIndex] );
            };


            /**
             * Sort the table by a particular column
             *  @param {int} iCol the data index to sort on. Note that this will not match the
             *    'display index' if you have hidden data entries
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort immediately with columns 0 and 1
		 *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
		 *    } );
             */
            this.fnSort = function( aaSort )
            {
                this.api( true ).order( aaSort ).draw();
            };


            /**
             * Attach a sort listener to an element for a given column
             *  @param {node} nNode the element to attach the sort listener to
             *  @param {int} iColumn the column that a click on this node will sort on
             *  @param {function} [fnCallback] callback function when sort is run
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort on column 1, when 'sorter' is clicked on
		 *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
		 *    } );
             */
            this.fnSortListener = function( nNode, iColumn, fnCallback )
            {
                this.api( true ).order.listener( nNode, iColumn, fnCallback );
            };


            /**
             * Update a table cell or row - this method will accept either a single value to
             * update the cell with, an array of values with one element for each column or
             * an object in the same format as the original data source. The function is
             * self-referencing in order to make the multi column updates easier.
             *  @param {object|array|string} mData Data to update the cell/row with
             *  @param {node|int} mRow TR element you want to update or the aoData index
             *  @param {int} [iColumn] The column to update, give as null or undefined to
             *    update a whole row.
             *  @param {bool} [bRedraw=true] Redraw the table or not
             *  @param {bool} [bAction=true] Perform pre-draw actions or not
             *  @returns {int} 0 on success, 1 on error
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
		 *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], $('tbody tr')[0] ); // Row
		 *    } );
             */
            this.fnUpdate = function( mData, mRow, iColumn, bRedraw, bAction )
            {
                var api = this.api( true );

                if ( iColumn === undefined || iColumn === null ) {
                    api.row( mRow ).data( mData );
                }
                else {
                    api.cell( mRow, iColumn ).data( mData );
                }

                if ( bAction === undefined || bAction ) {
                    api.columns.adjust();
                }

                if ( bRedraw === undefined || bRedraw ) {
                    api.draw();
                }
                return 0;
            };


            /**
             * Provide a common method for plug-ins to check the version of DataTables being used, in order
             * to ensure compatibility.
             *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
             *    formats "X" and "X.Y" are also acceptable.
             *  @returns {boolean} true if this version of DataTables is greater or equal to the required
             *    version, or false if this version of DataTales is not suitable
             *  @method
             *  @dtopt API
             *  @deprecated Since v1.10
             *
             *  @example
             *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      alert( oTable.fnVersionCheck( '1.9.0' ) );
		 *    } );
             */
            this.fnVersionCheck = _ext.fnVersionCheck;


            var _that = this;
            var emptyInit = options === undefined;
            var len = this.length;

            if ( emptyInit ) {
                options = {};
            }

            this.oApi = this.internal = _ext.internal;

            // Extend with old style plug-in API methods
            for ( var fn in DataTable.ext.internal ) {
                if ( fn ) {
                    this[fn] = _fnExternApiFunc(fn);
                }
            }

            this.each(function() {
                // For each initialisation we want to give it a clean initialisation
                // object that can be bashed around
                var o = {};
                var oInit = len > 1 ? // optimisation for single table case
                    _fnExtend( o, options, true ) :
                    options;

                /*global oInit,_that,emptyInit*/
                var i=0, iLen, j, jLen, k, kLen;
                var sId = this.getAttribute( 'id' );
                var bInitHandedOff = false;
                var defaults = DataTable.defaults;


                /* Sanity check */
                if ( this.nodeName.toLowerCase() != 'table' )
                {
                    _fnLog( null, 0, 'Non-table node initialisation ('+this.nodeName+')', 2 );
                    return;
                }

                /* Backwards compatibility for the defaults */
                _fnCompatOpts( defaults );
                _fnCompatCols( defaults.column );

                /* Convert the camel-case defaults to Hungarian */
                _fnCamelToHungarian( defaults, defaults, true );
                _fnCamelToHungarian( defaults.column, defaults.column, true );

                /* Setting up the initialisation object */
                _fnCamelToHungarian( defaults, oInit );

                /* Check to see if we are re-initialising a table */
                var allSettings = DataTable.settings;
                for ( i=0, iLen=allSettings.length ; i<iLen ; i++ )
                {
                    /* Base check on table node */
                    if ( allSettings[i].nTable == this )
                    {
                        var bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;
                        var bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;

                        if ( emptyInit || bRetrieve )
                        {
                            return allSettings[i].oInstance;
                        }
                        else if ( bDestroy )
                        {
                            allSettings[i].oInstance.fnDestroy();
                            break;
                        }
                        else
                        {
                            _fnLog( allSettings[i], 0, 'Cannot reinitialise DataTable', 3 );
                            return;
                        }
                    }

                    /* If the element we are initialising has the same ID as a table which was previously
                     * initialised, but the table nodes don't match (from before) then we destroy the old
                     * instance by simply deleting it. This is under the assumption that the table has been
                     * destroyed by other methods. Anyone using non-id selectors will need to do this manually
                     */
                    if ( allSettings[i].sTableId == this.id )
                    {
                        allSettings.splice( i, 1 );
                        break;
                    }
                }

                /* Ensure the table has an ID - required for accessibility */
                if ( sId === null || sId === "" )
                {
                    sId = "DataTables_Table_"+(DataTable.ext._unique++);
                    this.id = sId;
                }

                /* Create the settings object for this table and set some of the default parameters */
                var oSettings = $.extend( true, {}, DataTable.models.oSettings, {
                    "nTable":        this,
                    "oApi":          _that.internal,
                    "oInit":         oInit,
                    "sDestroyWidth": $(this)[0].style.width,
                    "sInstance":     sId,
                    "sTableId":      sId
                } );
                allSettings.push( oSettings );

                // Need to add the instance after the instance after the settings object has been added
                // to the settings array, so we can self reference the table instance if more than one
                oSettings.oInstance = (_that.length===1) ? _that : $(this).dataTable();

                // Backwards compatibility, before we apply all the defaults
                _fnCompatOpts( oInit );

                if ( oInit.oLanguage )
                {
                    _fnLanguageCompat( oInit.oLanguage );
                }

                // If the length menu is given, but the init display length is not, use the length menu
                if ( oInit.aLengthMenu && ! oInit.iDisplayLength )
                {
                    oInit.iDisplayLength = $.isArray( oInit.aLengthMenu[0] ) ?
                        oInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];
                }

                // Apply the defaults and init options to make a single init object will all
                // options defined from defaults and instance options.
                oInit = _fnExtend( $.extend( true, {}, defaults ), oInit );


                // Map the initialisation options onto the settings object
                _fnMap( oSettings.oFeatures, oInit, [
                    "bPaginate",
                    "bLengthChange",
                    "bFilter",
                    "bSort",
                    "bSortMulti",
                    "bInfo",
                    "bProcessing",
                    "bAutoWidth",
                    "bSortClasses",
                    "bServerSide",
                    "bDeferRender"
                ] );
                _fnMap( oSettings, oInit, [
                    "asStripeClasses",
                    "ajax",
                    "fnServerData",
                    "fnFormatNumber",
                    "sServerMethod",
                    "aaSorting",
                    "aaSortingFixed",
                    "aLengthMenu",
                    "sPaginationType",
                    "sAjaxSource",
                    "sAjaxDataProp",
                    "iStateDuration",
                    "sDom",
                    "bSortCellsTop",
                    "iTabIndex",
                    "fnStateLoadCallback",
                    "fnStateSaveCallback",
                    "renderer",
                    [ "iCookieDuration", "iStateDuration" ], // backwards compat
                    [ "oSearch", "oPreviousSearch" ],
                    [ "aoSearchCols", "aoPreSearchCols" ],
                    [ "iDisplayLength", "_iDisplayLength" ],
                    [ "bJQueryUI", "bJUI" ]
                ] );
                _fnMap( oSettings.oScroll, oInit, [
                    [ "sScrollX", "sX" ],
                    [ "sScrollXInner", "sXInner" ],
                    [ "sScrollY", "sY" ],
                    [ "bScrollCollapse", "bCollapse" ]
                ] );
                _fnMap( oSettings.oLanguage, oInit, "fnInfoCallback" );

                /* Callback functions which are array driven */
                _fnCallbackReg( oSettings, 'aoDrawCallback',       oInit.fnDrawCallback,      'user' );
                _fnCallbackReg( oSettings, 'aoServerParams',       oInit.fnServerParams,      'user' );
                _fnCallbackReg( oSettings, 'aoStateSaveParams',    oInit.fnStateSaveParams,   'user' );
                _fnCallbackReg( oSettings, 'aoStateLoadParams',    oInit.fnStateLoadParams,   'user' );
                _fnCallbackReg( oSettings, 'aoStateLoaded',        oInit.fnStateLoaded,       'user' );
                _fnCallbackReg( oSettings, 'aoRowCallback',        oInit.fnRowCallback,       'user' );
                _fnCallbackReg( oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow,        'user' );
                _fnCallbackReg( oSettings, 'aoHeaderCallback',     oInit.fnHeaderCallback,    'user' );
                _fnCallbackReg( oSettings, 'aoFooterCallback',     oInit.fnFooterCallback,    'user' );
                _fnCallbackReg( oSettings, 'aoInitComplete',       oInit.fnInitComplete,      'user' );
                _fnCallbackReg( oSettings, 'aoPreDrawCallback',    oInit.fnPreDrawCallback,   'user' );

                var oClasses = oSettings.oClasses;

                // @todo Remove in 1.11
                if ( oInit.bJQueryUI )
                {
                    /* Use the JUI classes object for display. You could clone the oStdClasses object if
                     * you want to have multiple tables with multiple independent classes
                     */
                    $.extend( oClasses, DataTable.ext.oJUIClasses, oInit.oClasses );

                    if ( oInit.sDom === defaults.sDom && defaults.sDom === "lfrtip" )
                    {
                        /* Set the DOM to use a layout suitable for jQuery UI's theming */
                        oSettings.sDom = '<"H"lfr>t<"F"ip>';
                    }

                    if ( ! oSettings.renderer ) {
                        oSettings.renderer = 'jqueryui';
                    }
                    else if ( $.isPlainObject( oSettings.renderer ) && ! oSettings.renderer.header ) {
                        oSettings.renderer.header = 'jqueryui';
                    }
                }
                else
                {
                    $.extend( oClasses, DataTable.ext.classes, oInit.oClasses );
                }
                $(this).addClass( oClasses.sTable );

                /* Calculate the scroll bar width and cache it for use later on */
                if ( oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "" )
                {
                    oSettings.oScroll.iBarWidth = _fnScrollBarWidth();
                }
                if ( oSettings.oScroll.sX === true ) { // Easy initialisation of x-scrolling
                    oSettings.oScroll.sX = '100%';
                }

                if ( oSettings.iInitDisplayStart === undefined )
                {
                    /* Display start point, taking into account the save saving */
                    oSettings.iInitDisplayStart = oInit.iDisplayStart;
                    oSettings._iDisplayStart = oInit.iDisplayStart;
                }

                if ( oInit.iDeferLoading !== null )
                {
                    oSettings.bDeferLoading = true;
                    var tmp = $.isArray( oInit.iDeferLoading );
                    oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
                    oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
                }

                /* Language definitions */
                if ( oInit.oLanguage.sUrl !== "" )
                {
                    /* Get the language definitions from a file - because this Ajax call makes the language
                     * get async to the remainder of this function we use bInitHandedOff to indicate that
                     * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor
                     */
                    oSettings.oLanguage.sUrl = oInit.oLanguage.sUrl;
                    $.getJSON( oSettings.oLanguage.sUrl, null, function( json ) {
                        _fnLanguageCompat( json );
                        _fnCamelToHungarian( defaults.oLanguage, json );
                        $.extend( true, oSettings.oLanguage, oInit.oLanguage, json );
                        _fnInitialise( oSettings );
                    } );
                    bInitHandedOff = true;
                }
                else
                {
                    $.extend( true, oSettings.oLanguage, oInit.oLanguage );
                }


                /*
                 * Stripes
                 */
                if ( oInit.asStripeClasses === null )
                {
                    oSettings.asStripeClasses =[
                        oClasses.sStripeOdd,
                        oClasses.sStripeEven
                    ];
                }

                /* Remove row stripe classes if they are already on the table row */
                var stripeClasses = oSettings.asStripeClasses;
                var rowOne = $('tbody tr:eq(0)', this);
                if ( $.inArray( true, $.map( stripeClasses, function(el, i) {
                    return rowOne.hasClass(el);
                } ) ) !== -1 ) {
                    $('tbody tr', this).removeClass( stripeClasses.join(' ') );
                    oSettings.asDestroyStripes = stripeClasses.slice();
                }

                /*
                 * Columns
                 * See if we should load columns automatically or use defined ones
                 */
                var anThs = [];
                var aoColumnsInit;
                var nThead = this.getElementsByTagName('thead');
                if ( nThead.length !== 0 )
                {
                    _fnDetectHeader( oSettings.aoHeader, nThead[0] );
                    anThs = _fnGetUniqueThs( oSettings );
                }

                /* If not given a column array, generate one with nulls */
                if ( oInit.aoColumns === null )
                {
                    aoColumnsInit = [];
                    for ( i=0, iLen=anThs.length ; i<iLen ; i++ )
                    {
                        aoColumnsInit.push( null );
                    }
                }
                else
                {
                    aoColumnsInit = oInit.aoColumns;
                }

                /* Add the columns */
                for ( i=0, iLen=aoColumnsInit.length ; i<iLen ; i++ )
                {
                    _fnAddColumn( oSettings, anThs ? anThs[i] : null );
                }

                /* Apply the column definitions */
                _fnApplyColumnDefs( oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {
                    _fnColumnOptions( oSettings, iCol, oDef );
                } );

                /* HTML5 attribute detection - build an mData object automatically if the
                 * attributes are found
                 */
                if ( rowOne.length ) {
                    var a = function ( cell, name ) {
                        return cell.getAttribute( 'data-'+name ) ? name : null;
                    };

                    $.each( _fnGetRowElements( oSettings, rowOne[0] ).cells, function (i, cell) {
                        var col = oSettings.aoColumns[i];

                        if ( col.mData === i ) {
                            var sort = a( cell, 'sort' ) || a( cell, 'order' );
                            var filter = a( cell, 'filter' ) || a( cell, 'search' );

                            if ( sort !== null || filter !== null ) {
                                col.mData = {
                                    _:      i+'.display',
                                    sort:   sort !== null   ? i+'.@data-'+sort   : undefined,
                                    type:   sort !== null   ? i+'.@data-'+sort   : undefined,
                                    filter: filter !== null ? i+'.@data-'+filter : undefined
                                };

                                _fnColumnOptions( oSettings, i );
                            }
                        }
                    } );
                }

                var features = oSettings.oFeatures;

                /* Must be done after everything which can be overridden by the state saving! */
                if ( oInit.bStateSave )
                {
                    features.bStateSave = true;
                    _fnLoadState( oSettings, oInit );
                    _fnCallbackReg( oSettings, 'aoDrawCallback', _fnSaveState, 'state_save' );
                }


                /*
                 * Sorting
                 * @todo For modularisation (1.11) this needs to do into a sort start up handler
                 */

                // If aaSorting is not defined, then we use the first indicator in asSorting
                // in case that has been altered, so the default sort reflects that option
                if ( oInit.aaSorting === undefined )
                {
                    var sorting = oSettings.aaSorting;
                    for ( i=0, iLen=sorting.length ; i<iLen ; i++ )
                    {
                        sorting[i][1] = oSettings.aoColumns[ i ].asSorting[0];
                    }
                }

                /* Do a first pass on the sorting classes (allows any size changes to be taken into
                 * account, and also will apply sorting disabled classes if disabled
                 */
                _fnSortingClasses( oSettings );

                if ( features.bSort )
                {
                    _fnCallbackReg( oSettings, 'aoDrawCallback', function () {
                        if ( oSettings.bSorted ) {
                            var aSort = _fnSortFlatten( oSettings );
                            var sortedColumns = {};

                            $.each( aSort, function (i, val) {
                                sortedColumns[ val.src ] = val.dir;
                            } );

                            _fnCallbackFire( oSettings, null, 'order', [oSettings, aSort, sortedColumns] );
                            _fnSortAria( oSettings );
                        }
                    } );
                }

                _fnCallbackReg( oSettings, 'aoDrawCallback', function () {
                    if ( oSettings.bSorted || _fnDataSource( oSettings ) === 'ssp' || features.bDeferRender ) {
                        _fnSortingClasses( oSettings );
                    }
                }, 'sc' );


                /*
                 * Final init
                 * Cache the header, body and footer as required, creating them if needed
                 */

                /* Browser support detection */
                _fnBrowserDetect( oSettings );

                // Work around for Webkit bug 83867 - store the caption-side before removing from doc
                var captions = $(this).children('caption').each( function () {
                    this._captionSide = $(this).css('caption-side');
                } );

                var thead = $(this).children('thead');
                if ( thead.length === 0 )
                {
                    thead = $('<thead/>').appendTo(this);
                }
                oSettings.nTHead = thead[0];

                var tbody = $(this).children('tbody');
                if ( tbody.length === 0 )
                {
                    tbody = $('<tbody/>').appendTo(this);
                }
                oSettings.nTBody = tbody[0];

                var tfoot = $(this).children('tfoot');
                if ( tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") )
                {
                    // If we are a scrolling table, and no footer has been given, then we need to create
                    // a tfoot element for the caption element to be appended to
                    tfoot = $('<tfoot/>').appendTo(this);
                }

                if ( tfoot.length === 0 || tfoot.children().length === 0 ) {
                    $(this).addClass( oClasses.sNoFooter );
                }
                else if ( tfoot.length > 0 ) {
                    oSettings.nTFoot = tfoot[0];
                    _fnDetectHeader( oSettings.aoFooter, oSettings.nTFoot );
                }

                /* Check if there is data passing into the constructor */
                if ( oInit.aaData )
                {
                    for ( i=0 ; i<oInit.aaData.length ; i++ )
                    {
                        _fnAddData( oSettings, oInit.aaData[ i ] );
                    }
                }
                else if ( oSettings.bDeferLoading || _fnDataSource( oSettings ) == 'dom' )
                {
                    /* Grab the data from the page - only do this when deferred loading or no Ajax
                     * source since there is no point in reading the DOM data if we are then going
                     * to replace it with Ajax data
                     */
                    _fnAddTr( oSettings, $(oSettings.nTBody).children('tr') );
                }

                /* Copy the data index array */
                oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();

                /* Initialisation complete - table can be drawn */
                oSettings.bInitialised = true;

                /* Check if we need to initialise the table (it might not have been handed off to the
                 * language processor)
                 */
                if ( bInitHandedOff === false )
                {
                    _fnInitialise( oSettings );
                }
            } );
            _that = null;
            return this;
        };



        /**
         * Computed structure of the DataTables API, defined by the options passed to
         * `DataTable.Api.register()` when building the API.
         *
         * The structure is built in order to speed creation and extension of the Api
         * objects since the extensions are effectively pre-parsed.
         *
         * The array is an array of objects with the following structure, where this
         * base array represents the Api prototype base:
         *
         *     [
         *       {
	 *         name:      'data'                -- string   - Property name
	 *         val:       function () {},       -- function - Api method (or undefined if just an object
	 *         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	 *         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	 *       },
         *       {
	 *         name:     'row'
	 *         val:       {},
	 *         methodExt: [ ... ],
	 *         propExt:   [
	 *           {
	 *             name:      'data'
	 *             val:       function () {},
	 *             methodExt: [ ... ],
	 *             propExt:   [ ... ]
	 *           },
	 *           ...
	 *         ]
	 *       }
         *     ]
         *
         * @type {Array}
         * @ignore
         */
        var __apiStruct = [];


        /**
         * `Array.prototype` reference.
         *
         * @type object
         * @ignore
         */
        var __arrayProto = Array.prototype;


        /**
         * Abstraction for `context` parameter of the `Api` constructor to allow it to
         * take several different forms for ease of use.
         *
         * Each of the input parameter types will be converted to a DataTables settings
         * object where possible.
         *
         * @param  {string|node|jQuery|object} mixed DataTable identifier. Can be one
         *   of:
         *
         *   * `string` - jQuery selector. Any DataTables' matching the given selector
         *     with be found and used.
         *   * `node` - `TABLE` node which has already been formed into a DataTable.
         *   * `jQuery` - A jQuery object of `TABLE` nodes.
         *   * `object` - DataTables settings object
         *   * `DataTables.Api` - API instance
         * @return {array|null} Matching DataTables settings objects. `null` or
         *   `undefined` is returned if no matching DataTable is found.
         * @ignore
         */
        var _toSettings = function ( mixed )
        {
            var idx, jq;
            var settings = DataTable.settings;
            var tables = $.map( settings, function (el, i) {
                return el.nTable;
            } );

            if ( ! mixed ) {
                return [];
            }
            else if ( mixed.nTable && mixed.oApi ) {
                // DataTables settings object
                return [ mixed ];
            }
            else if ( mixed.nodeName && mixed.nodeName.toLowerCase() === 'table' ) {
                // Table node
                idx = $.inArray( mixed, tables );
                return idx !== -1 ? [ settings[idx] ] : null;
            }
            else if ( mixed && typeof mixed.settings === 'function' ) {
                return mixed.settings().toArray();
            }
            else if ( typeof mixed === 'string' ) {
                // jQuery selector
                jq = $(mixed);
            }
            else if ( mixed instanceof $ ) {
                // jQuery object (also DataTables instance)
                jq = mixed;
            }

            if ( jq ) {
                return jq.map( function(i) {
                    idx = $.inArray( this, tables );
                    return idx !== -1 ? settings[idx] : null;
                } ).toArray();
            }
        };


        /**
         * DataTables API class - used to control and interface with  one or more
         * DataTables enhanced tables.
         *
         * The API class is heavily based on jQuery, presenting a chainable interface
         * that you can use to interact with tables. Each instance of the API class has
         * a "context" - i.e. the tables that it will operate on. This could be a single
         * table, all tables on a page or a sub-set thereof.
         *
         * Additionally the API is designed to allow you to easily work with the data in
         * the tables, retrieving and manipulating it as required. This is done by
         * presenting the API class as an array like interface. The contents of the
         * array depend upon the actions requested by each method (for example
         * `rows().nodes()` will return an array of nodes, while `rows().data()` will
         * return an array of objects or arrays depending upon your table's
         * configuration). The API object has a number of array like methods (`push`,
         * `pop`, `reverse` etc) as well as additional helper methods (`each`, `pluck`,
         * `unique` etc) to assist your working with the data held in a table.
         *
         * Most methods (those which return an Api instance) are chainable, which means
         * the return from a method call also has all of the methods available that the
         * top level object had. For example, these two calls are equivalent:
         *
         *     // Not chained
         *     api.row.add( {...} );
         *     api.draw();
         *
         *     // Chained
         *     api.row.add( {...} ).draw();
         *
         * @class DataTable.Api
         * @param {array|object|string|jQuery} context DataTable identifier. This is
         *   used to define which DataTables enhanced tables this API will operate on.
         *   Can be one of:
         *
         *   * `string` - jQuery selector. Any DataTables' matching the given selector
         *     with be found and used.
         *   * `node` - `TABLE` node which has already been formed into a DataTable.
         *   * `jQuery` - A jQuery object of `TABLE` nodes.
         *   * `object` - DataTables settings object
         * @param {array} [data] Data to initialise the Api instance with.
         *
         * @example
         *   // Direct initialisation during DataTables construction
         *   var api = $('#example').DataTable();
         *
         * @example
         *   // Initialisation using a DataTables jQuery object
         *   var api = $('#example').dataTable().api();
         *
         * @example
         *   // Initialisation as a constructor
         *   var api = new $.fn.DataTable.Api( 'table.dataTable' );
         */
        DataTable.Api = _Api = function ( context, data )
        {
            if ( ! this instanceof _Api ) {
                throw 'DT API must be constructed as a new object';
                // or should it do the 'new' for the caller?
                // return new _Api.apply( this, arguments );
            }

            var settings = [];
            var ctxSettings = function ( o ) {
                var a = _toSettings( o );
                if ( a ) {
                    settings.push.apply( settings, a );
                }
            };

            if ( $.isArray( context ) ) {
                for ( var i=0, ien=context.length ; i<ien ; i++ ) {
                    ctxSettings( context[i] );
                }
            }
            else {
                ctxSettings( context );
            }

            // Remove duplicates
            this.context = _unique( settings );

            // Initial data
            if ( data ) {
                this.push.apply( this, data.toArray ? data.toArray() : data );
            }

            // selector
            this.selector = {
                rows: null,
                cols: null,
                opts: null
            };

            _Api.extend( this, this, __apiStruct );
        };


        _Api.prototype = /** @lends DataTables.Api */{
            /**
             * Return a new Api instance, comprised of the data held in the current
             * instance, join with the other array(s) and/or value(s).
             *
             * An alias for `Array.prototype.concat`.
             *
             * @type method
             * @param {*} value1 Arrays and/or values to concatenate.
             * @param {*} [...] Additional arrays and/or values to concatenate.
             * @returns {DataTables.Api} New API instance, comprising of the combined
             *   array.
             */
            concat:  __arrayProto.concat,


            context: [], // array of table settings objects


            each: function ( fn )
            {
                if ( __arrayProto.forEach ) {
                    // Where possible, use the built-in forEach
                    __arrayProto.forEach.call( this, fn, this );
                }
                else {
                    // Compatibility for browsers without EMCA-252-5 (JS 1.6)
                    for ( var i=0, ien=this.length ; i<ien; i++ ) {
                        // In strict mode the execution scope is the passed value
                        fn.call( this, this[i], i, this );
                    }
                }

                return this;
            },


            eq: function ( idx )
            {
                var ctx = this.context;

                return ctx.length > idx ?
                    new _Api( ctx[idx], this[idx] ) :
                    null;
            },


            filter: function ( fn )
            {
                var a = [];

                if ( __arrayProto.filter ) {
                    a = __arrayProto.filter.call( this, fn, this );
                }
                else {
                    // Compatibility for browsers without EMCA-252-5 (JS 1.6)
                    for ( var i=0, ien=this.length ; i<ien ; i++ ) {
                        if ( fn.call( this, this[i], i, this ) ) {
                            a.push( this[i] );
                        }
                    }
                }

                return new _Api( this.context, a );
            },


            flatten: function ()
            {
                var a = [];
                return new _Api( this.context, a.concat.apply( a, this.toArray() ) );
            },


            join:    __arrayProto.join,


            indexOf: __arrayProto.indexOf || function (obj, start)
            {
                for ( var i=(start || 0), ien=this.length ; i<ien ; i++ ) {
                    if ( this[i] === obj ) {
                        return i;
                    }
                }
                return -1;
            },

            // Internal only at the moment - relax?
            iterator: function ( flatten, type, fn ) {
                var
                    a = [], ret,
                    i, ien, j, jen,
                    context = this.context,
                    rows, items, item,
                    selector = this.selector;

                // Argument shifting
                if ( typeof flatten === 'string' ) {
                    fn = type;
                    type = flatten;
                    flatten = false;
                }

                for ( i=0, ien=context.length ; i<ien ; i++ ) {
                    if ( type === 'table' ) {
                        ret = fn( context[i], i );

                        if ( ret !== undefined ) {
                            a.push( ret );
                        }
                    }
                    else if ( type === 'columns' || type === 'rows' ) {
                        // this has same length as context - one entry for each table
                        ret = fn( context[i], this[i], i );

                        if ( ret !== undefined ) {
                            a.push( ret );
                        }
                    }
                    else if ( type === 'column' || type === 'column-rows' || type === 'row' || type === 'cell' ) {
                        // columns and rows share the same structure.
                        // 'this' is an array of column indexes for each context
                        items = this[i];

                        if ( type === 'column-rows' ) {
                            rows = _selector_row_indexes( context[i], selector.opts );
                        }

                        for ( j=0, jen=items.length ; j<jen ; j++ ) {
                            item = items[j];

                            if ( type === 'cell' ) {
                                ret = fn( context[i], item.row, item.column, i, j );
                            }
                            else {
                                ret = fn( context[i], item, i, j, rows );
                            }

                            if ( ret !== undefined ) {
                                a.push( ret );
                            }
                        }
                    }
                }

                if ( a.length ) {
                    var api = new _Api( context, flatten ? a.concat.apply( [], a ) : a );
                    var apiSelector = api.selector;
                    apiSelector.rows = selector.rows;
                    apiSelector.cols = selector.cols;
                    apiSelector.opts = selector.opts;
                    return api;
                }
                return this;
            },


            lastIndexOf: __arrayProto.lastIndexOf || function (obj, start)
            {
                // Bit cheeky...
                return this.indexOf.apply( this.toArray.reverse(), arguments );
            },


            length:  0,


            map: function ( fn )
            {
                var a = [];

                if ( __arrayProto.map ) {
                    a = __arrayProto.map.call( this, fn, this );
                }
                else {
                    // Compatibility for browsers without EMCA-252-5 (JS 1.6)
                    for ( var i=0, ien=this.length ; i<ien ; i++ ) {
                        a.push( fn.call( this, this[i], i ) );
                    }
                }

                return new _Api( this.context, a );
            },


            pluck: function ( prop )
            {
                return this.map( function ( el ) {
                    return el[ prop ];
                } );
            },

            pop:     __arrayProto.pop,


            push:    __arrayProto.push,


            // Does not return an API instance
            reduce: __arrayProto.reduce || function ( fn, init )
            {
                return _fnReduce( this, fn, init, 0, this.length, 1 );
            },


            reduceRight: __arrayProto.reduceRight || function ( fn, init )
            {
                return _fnReduce( this, fn, init, this.length-1, -1, -1 );
            },


            reverse: __arrayProto.reverse,


            // Object with rows, columns and opts
            selector: null,


            shift:   __arrayProto.shift,


            sort:    __arrayProto.sort, // ? name - order?


            splice:  __arrayProto.splice,


            toArray: function ()
            {
                return __arrayProto.slice.call( this );
            },


            to$: function ()
            {
                return $( this );
            },


            toJQuery: function ()
            {
                return $( this );
            },


            unique: function ()
            {
                return new _Api( this.context, _unique(this) );
            },


            unshift: __arrayProto.unshift
        };


        _Api.extend = function ( scope, obj, ext )
        {
            // Only extend API instances and static properties of the API
            if ( ! obj || ( ! (obj instanceof _Api) && ! obj.__dt_wrapper ) ) {
                return;
            }

            var
                i, ien,
                j, jen,
                struct, inner,
                methodScoping = function ( fn, struc ) {
                    return function () {
                        var ret = fn.apply( scope, arguments );

                        // Method extension
                        _Api.extend( ret, ret, struc.methodExt );
                        return ret;
                    };
                };

            for ( i=0, ien=ext.length ; i<ien ; i++ ) {
                struct = ext[i];

                // Value
                obj[ struct.name ] = typeof struct.val === 'function' ?
                    methodScoping( struct.val, struct ) :
                    $.isPlainObject( struct.val ) ?
                    {} :
                        struct.val;

                obj[ struct.name ].__dt_wrapper = true;

                // Property extension
                _Api.extend( scope, obj[ struct.name ], struct.propExt );
            }
        };


        // @todo - Is there need for an augment function?
        // _Api.augment = function ( inst, name )
        // {
        // 	// Find src object in the structure from the name
        // 	var parts = name.split('.');

        // 	_Api.extend( inst, obj );
        // };


        //     [
        //       {
        //         name:      'data'                -- string   - Property name
        //         val:       function () {},       -- function - Api method (or undefined if just an object
        //         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
        //         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
        //       },
        //       {
        //         name:     'row'
        //         val:       {},
        //         methodExt: [ ... ],
        //         propExt:   [
        //           {
        //             name:      'data'
        //             val:       function () {},
        //             methodExt: [ ... ],
        //             propExt:   [ ... ]
        //           },
        //           ...
        //         ]
        //       }
        //     ]

        _Api.register = _api_register = function ( name, val )
        {
            if ( $.isArray( name ) ) {
                for ( var j=0, jen=name.length ; j<jen ; j++ ) {
                    _Api.register( name[j], val );
                }
                return;
            }

            var
                i, ien,
                heir = name.split('.'),
                struct = __apiStruct,
                key, method;

            var find = function ( src, name ) {
                for ( var i=0, ien=src.length ; i<ien ; i++ ) {
                    if ( src[i].name === name ) {
                        return src[i];
                    }
                }
                return null;
            };

            for ( i=0, ien=heir.length ; i<ien ; i++ ) {
                method = heir[i].indexOf('()') !== -1;
                key = method ?
                    heir[i].replace('()', '') :
                    heir[i];

                var src = find( struct, key );
                if ( ! src ) {
                    src = {
                        name:      key,
                        val:       {},
                        methodExt: [],
                        propExt:   []
                    };
                    struct.push( src );
                }

                if ( i === ien-1 ) {
                    src.val = val;
                }
                else {
                    struct = method ?
                        src.methodExt :
                        src.propExt;
                }
            }

            // Rebuild the API with the new construct
            if ( _Api.ready ) {
                DataTable.api.build();
            }
        };


        _Api.registerPlural = _api_registerPlural = function ( pluralName, singularName, val ) {
            _Api.register( pluralName, val );

            _Api.register( singularName, function () {
                var ret = val.apply( this, arguments );

                if ( ret === this ) {
                    // Returned item is the API instance that was passed in, return it
                    return this;
                }
                else if ( ret instanceof _Api ) {
                    // New API instance returned, want the value from the first item
                    // in the returned array for the singular result.
                    return ret.length ?
                        $.isArray( ret[0] ) ?
                            new _Api( ret.context, ret[0] ) : // Array results are 'enhanced'
                            ret[0] :
                        undefined;
                }

                // Non-API return - just fire it back
                return ret;
            } );
        };


        /**
         * Selector for HTML tables. Apply the given selector to the give array of
         * DataTables settings objects.
         *
         * @param {string|integer} [selector] jQuery selector string or integer
         * @param  {array} Array of DataTables settings objects to be filtered
         * @return {array}
         * @ignore
         */
        var __table_selector = function ( selector, a )
        {
            // Integer is used to pick out a table by index
            if ( typeof selector === 'number' ) {
                return [ a[ selector ] ];
            }

            // Perform a jQuery selector on the table nodes
            var nodes = $.map( a, function (el, i) {
                return el.nTable;
            } );

            return $(nodes)
                .filter( selector )
                .map( function (i) {
                    // Need to translate back from the table node to the settings
                    var idx = $.inArray( this, nodes );
                    return a[ idx ];
                } )
                .toArray();
        };



        /**
         * Context selector for the API's context (i.e. the tables the API instance
         * refers to.
         *
         * @name    DataTable.Api#tables
         * @param {string|integer} [selector] Selector to pick which tables the iterator
         *   should operate on. If not given, all tables in the current context are
         *   used. This can be given as a jQuery selector (for example `':gt(0)'`) to
         *   select multiple tables or as an integer to select a single table.
         * @returns {DataTable.Api} Returns a new API instance if a selector is given.
         */
        _api_register( 'tables()', function ( selector ) {
            // A new instance is created if there was a selector specified
            return selector ?
                new _Api( __table_selector( selector, this.context ) ) :
                this;
        } );


        _api_register( 'table()', function ( selector ) {
            var tables = this.tables( selector );
            var ctx = tables.context;

            // Truncate to the first matched table
            return ctx.length ?
                new _Api( ctx[0] ) :
                tables;
        } );


        _api_registerPlural( 'tables().nodes()', 'table().node()' , function () {
            return this.iterator( 'table', function ( ctx ) {
                return ctx.nTable;
            } );
        } );


        _api_registerPlural( 'tables().body()', 'table().body()' , function () {
            return this.iterator( 'table', function ( ctx ) {
                return ctx.nTBody;
            } );
        } );


        _api_registerPlural( 'tables().header()', 'table().header()' , function () {
            return this.iterator( 'table', function ( ctx ) {
                return ctx.nTHead;
            } );
        } );


        _api_registerPlural( 'tables().footer()', 'table().footer()' , function () {
            return this.iterator( 'table', function ( ctx ) {
                return ctx.nTFoot;
            } );
        } );



        /**
         * Redraw the tables in the current context.
         *
         * @param {boolean} [reset=true] Reset (default) or hold the current paging
         *   position. A full re-sort and re-filter is performed when this method is
         *   called, which is why the pagination reset is the default action.
         * @returns {DataTables.Api} this
         */
        _api_register( 'draw()', function ( resetPaging ) {
            return this.iterator( 'table', function ( settings ) {
                _fnReDraw( settings, resetPaging===false );
            } );
        } );



        /**
         * Get the current page index.
         *
         * @return {integer} Current page index (zero based)
         *//**
         * Set the current page.
         *
         * Note that if you attempt to show a page which does not exist, DataTables will
         * not throw an error, but rather reset the paging.
         *
         * @param {integer|string} action The paging action to take. This can be one of:
         *  * `integer` - The page index to jump to
         *  * `string` - An action to take:
         *    * `first` - Jump to first page.
         *    * `next` - Jump to the next page
         *    * `previous` - Jump to previous page
         *    * `last` - Jump to the last page.
         * @returns {DataTables.Api} this
         */
        _api_register( 'page()', function ( action ) {
            if ( action === undefined ) {
                return this.page.info().page; // not an expensive call
            }

            // else, have an action to take on all tables
            return this.iterator( 'table', function ( settings ) {
                _fnPageChange( settings, action );
            } );
        } );


        /**
         * Paging information for the first table in the current context.
         *
         * If you require paging information for another table, use the `table()` method
         * with a suitable selector.
         *
         * @return {object} Object with the following properties set:
         *  * `page` - Current page index (zero based - i.e. the first page is `0`)
         *  * `pages` - Total number of pages
         *  * `start` - Display index for the first record shown on the current page
         *  * `end` - Display index for the last record shown on the current page
         *  * `length` - Display length (number of records). Note that generally `start
         *    + length = end`, but this is not always true, for example if there are
         *    only 2 records to show on the final page, with a length of 10.
         *  * `recordsTotal` - Full data set length
         *  * `recordsDisplay` - Data set length once the current filtering criterion
         *    are applied.
         */
        _api_register( 'page.info()', function ( action ) {
            if ( this.context.length === 0 ) {
                return undefined;
            }

            var
                settings   = this.context[0],
                start      = settings._iDisplayStart,
                len        = settings._iDisplayLength,
                visRecords = settings.fnRecordsDisplay(),
                all        = len === -1;

            return {
                "page":           all ? 0 : Math.floor( start / len ),
                "pages":          all ? 1 : Math.ceil( visRecords / len ),
                "start":          start,
                "end":            settings.fnDisplayEnd(),
                "length":         len,
                "recordsTotal":   settings.fnRecordsTotal(),
                "recordsDisplay": visRecords
            };
        } );


        /**
         * Get the current page length.
         *
         * @return {integer} Current page length. Note `-1` indicates that all records
         *   are to be shown.
         *//**
         * Set the current page length.
         *
         * @param {integer} Page length to set. Use `-1` to show all records.
         * @returns {DataTables.Api} this
         */
        _api_register( 'page.len()', function ( len ) {
            // Note that we can't call this function 'length()' because `length`
            // is a Javascript property of functions which defines how many arguments
            // the function expects.
            if ( len === undefined ) {
                return this.context.length !== 0 ?
                    this.context[0]._iDisplayLength :
                    undefined;
            }

            // else, set the page length
            return this.iterator( 'table', function ( settings ) {
                _fnLengthChange( settings, len );
            } );
        } );



        var __reload = function ( settings, holdPosition, callback ) {
            if ( _fnDataSource( settings ) == 'ssp' ) {
                _fnReDraw( settings, holdPosition );
            }
            else {
                // Trigger xhr
                _fnProcessingDisplay( settings, true );

                _fnBuildAjax( settings, [], function( json ) {
                    _fnClearTable( settings );

                    var data = _fnAjaxDataSrc( settings, json );
                    for ( var i=0, ien=data.length ; i<ien ; i++ ) {
                        _fnAddData( settings, data[i] );
                    }

                    _fnReDraw( settings, holdPosition );
                    _fnProcessingDisplay( settings, false );
                } );
            }

            // Use the draw event to trigger a callback, regardless of if it is an async
            // or sync draw
            if ( callback ) {
                var api = new _Api( settings );

                api.one( 'draw', function () {
                    callback( api.ajax.json() );
                } );
            }
        };


        /**
         * Get the JSON response from the last Ajax request that DataTables made to the
         * server. Note that this returns the JSON from the first table in the current
         * context.
         *
         * @return {object} JSON received from the server.
         */
        _api_register( 'ajax.json()', function () {
            var ctx = this.context;

            if ( ctx.length > 0 ) {
                return ctx[0].json;
            }

            // else return undefined;
        } );


        /**
         * Get the data submitted in the last Ajax request
         */
        _api_register( 'ajax.params()', function () {
            var ctx = this.context;

            if ( ctx.length > 0 ) {
                return ctx[0].oAjaxData;
            }

            // else return undefined;
        } );


        /**
         * Reload tables from the Ajax data source. Note that this function will
         * automatically re-draw the table when the remote data has been loaded.
         *
         * @param {boolean} [reset=true] Reset (default) or hold the current paging
         *   position. A full re-sort and re-filter is performed when this method is
         *   called, which is why the pagination reset is the default action.
         * @returns {DataTables.Api} this
         */
        _api_register( 'ajax.reload()', function ( callback, resetPaging ) {
            return this.iterator( 'table', function (settings) {
                __reload( settings, resetPaging===false, callback );
            } );
        } );


        /**
         * Get the current Ajax URL. Note that this returns the URL from the first
         * table in the current context.
         *
         * @return {string} Current Ajax source URL
         *//**
         * Set the Ajax URL. Note that this will set the URL for all tables in the
         * current context.
         *
         * @param {string} url URL to set.
         * @returns {DataTables.Api} this
         */
        _api_register( 'ajax.url()', function ( url ) {
            var ctx = this.context;

            if ( url === undefined ) {
                // get
                if ( ctx.length === 0 ) {
                    return undefined;
                }
                ctx = ctx[0];

                return ctx.ajax ?
                    $.isPlainObject( ctx.ajax ) ?
                        ctx.ajax.url :
                        ctx.ajax :
                    ctx.sAjaxSource;
            }

            // set
            return this.iterator( 'table', function ( settings ) {
                if ( $.isPlainObject( settings.ajax ) ) {
                    settings.ajax.url = url;
                }
                else {
                    settings.ajax = url;
                }
                // No need to consider sAjaxSource here since DataTables gives priority
                // to `ajax` over `sAjaxSource`. So setting `ajax` here, renders any
                // value of `sAjaxSource` redundant.
            } );
        } );


        /**
         * Load data from the newly set Ajax URL. Note that this method is only
         * available when `ajax.url()` is used to set a URL. Additionally, this method
         * has the same effect as calling `ajax.reload()` but is provided for
         * convenience when setting a new URL. Like `ajax.reload()` it will
         * automatically redraw the table once the remote data has been loaded.
         *
         * @returns {DataTables.Api} this
         */
        _api_register( 'ajax.url().load()', function ( callback, resetPaging ) {
            // Same as a reload, but makes sense to present it for easy access after a
            // url change
            return this.iterator( 'table', function ( ctx ) {
                __reload( ctx, resetPaging===false, callback );
            } );
        } );




        var _selector_run = function ( selector, select )
        {
            var
                out = [], res,
                a, i, ien, j, jen;

            // Can't just check for isArray here, as an API or jQuery instance might be
            // given with their array like look
            if ( ! selector || typeof selector === 'string' || selector.length === undefined ) {
                selector = [ selector ];
            }

            for ( i=0, ien=selector.length ; i<ien ; i++ ) {
                a = selector[i] && selector[i].split ?
                    selector[i].split(',') :
                    [ selector[i] ];

                for ( j=0, jen=a.length ; j<jen ; j++ ) {
                    res = select( typeof a[j] === 'string' ? $.trim(a[j]) : a[j] );

                    if ( res && res.length ) {
                        out.push.apply( out, res );
                    }
                }
            }

            return out;
        };


        var _selector_opts = function ( opts )
        {
            if ( ! opts ) {
                opts = {};
            }

            // Backwards compatibility for 1.9- which used the terminology filter rather
            // than search
            if ( opts.filter && ! opts.search ) {
                opts.search = opts.filter;
            }

            return {
                search: opts.search || 'none',
                order:  opts.order  || 'current',
                page:   opts.page   || 'all'
            };
        };


        var _selector_first = function ( inst )
        {
            // Reduce the API instance to the first item found
            for ( var i=0, ien=inst.length ; i<ien ; i++ ) {
                if ( inst[i].length > 0 ) {
                    // Assign the first element to the first item in the instance
                    // and truncate the instance and context
                    inst[0] = inst[i];
                    inst.length = 1;
                    inst.context = [ inst.context[i] ];

                    return inst;
                }
            }

            // Not found - return an empty instance
            inst.length = 0;
            return inst;
        };


        var _selector_row_indexes = function ( settings, opts )
        {
            var
                i, ien, tmp, a=[],
                displayFiltered = settings.aiDisplay,
                displayMaster = settings.aiDisplayMaster;

            var
                search = opts.search,  // none, applied, removed
                order  = opts.order,   // applied, current, index (original - compatibility with 1.9)
                page   = opts.page;    // all, current

            if ( _fnDataSource( settings ) == 'ssp' ) {
                // In server-side processing mode, most options are irrelevant since
                // rows not shown don't exist and the index order is the applied order
                // Removed is a special case - for consistency just return an empty
                // array
                return search === 'removed' ?
                    [] :
                    _range( 0, displayMaster.length );
            }
            else if ( page == 'current' ) {
                // Current page implies that order=current and fitler=applied, since it is
                // fairly senseless otherwise, regardless of what order and search actually
                // are
                for ( i=settings._iDisplayStart, ien=settings.fnDisplayEnd() ; i<ien ; i++ ) {
                    a.push( displayFiltered[i] );
                }
            }
            else if ( order == 'current' || order == 'applied' ) {
                a = search == 'none' ?
                    displayMaster.slice() :                      // no search
                    search == 'applied' ?
                        displayFiltered.slice() :                // applied search
                        $.map( displayMaster, function (el, i) { // removed search
                            return $.inArray( el, displayFiltered ) === -1 ? el : null;
                        } );
            }
            else if ( order == 'index' || order == 'original' ) {
                for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
                    if ( search == 'none' ) {
                        a.push( i );
                    }
                    else { // applied | removed
                        tmp = $.inArray( i, displayFiltered );

                        if ((tmp === -1 && search == 'removed') ||
                            (tmp === 1  && search == 'applied') )
                        {
                            a.push( i );
                        }
                    }
                }
            }

            return a;
        };


        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         * Rows
         *
         * {}          - no selector - use all available rows
         * {integer}   - row aoData index
         * {node}      - TR node
         * {string}    - jQuery selector to apply to the TR elements
         * {array}     - jQuery array of nodes, or simply an array of TR nodes
         *
         */


        var __row_selector = function ( settings, selector, opts )
        {
            return _selector_run( selector, function ( sel ) {
                var selInt = _intVal( sel );

                // Short cut - selector is a number and no options provided (default is
                // all records, so no need to check if the index is in there, since it
                // must be - dev error if the index doesn't exist).
                if ( selInt !== null && ! opts ) {
                    return [ selInt ];
                }

                var rows = _selector_row_indexes( settings, opts );

                if ( selInt !== null && $.inArray( selInt, rows ) !== -1 ) {
                    // Selector - integer
                    return [ selInt ];
                }
                else if ( ! sel ) {
                    // Selector - none
                    return rows;
                }

                // Get nodes in the order from the `rows` array (can't use `pluck`) @todo - use pluck_order
                var nodes = [];
                for ( var i=0, ien=rows.length ; i<ien ; i++ ) {
                    nodes.push( settings.aoData[ rows[i] ].nTr );
                }

                if ( sel.nodeName ) {
                    // Selector - node
                    if ( $.inArray( sel, nodes ) !== -1 ) {
                        return [ sel._DT_RowIndex ];// sel is a TR node that is in the table
                        // and DataTables adds a prop for fast lookup
                    }
                }

                // Selector - jQuery selector string, array of nodes or jQuery object/
                // As jQuery's .filter() allows jQuery objects to be passed in filter,
                // it also allows arrays, so this will cope with all three options
                return $(nodes)
                    .filter( sel )
                    .map( function () {
                        return this._DT_RowIndex;
                    } )
                    .toArray();
            } );
        };


        /**
         *
         */
        _api_register( 'rows()', function ( selector, opts ) {
            // argument shifting
            if ( selector === undefined ) {
                selector = '';
            }
            else if ( $.isPlainObject( selector ) ) {
                opts = selector;
                selector = '';
            }

            opts = _selector_opts( opts );

            var inst = this.iterator( 'table', function ( settings ) {
                return __row_selector( settings, selector, opts );
            } );

            // Want argument shifting here and in __row_selector?
            inst.selector.rows = selector;
            inst.selector.opts = opts;

            return inst;
        } );


        _api_register( 'rows().nodes()', function () {
            return this.iterator( 'row', function ( settings, row ) {
                return settings.aoData[ row ].nTr || undefined;
            } );
        } );

        _api_register( 'rows().data()', function () {
            return this.iterator( true, 'rows', function ( settings, rows ) {
                return _pluck_order( settings.aoData, rows, '_aData' );
            } );
        } );

        _api_registerPlural( 'rows().cache()', 'row().cache()', function ( type ) {
            return this.iterator( 'row', function ( settings, row ) {
                var r = settings.aoData[ row ];
                return type === 'search' ? r._aFilterData : r._aSortData;
            } );
        } );

        _api_registerPlural( 'rows().invalidate()', 'row().invalidate()', function ( src ) {
            return this.iterator( 'row', function ( settings, row ) {
                _fnInvalidateRow( settings, row, src );
            } );
        } );

        _api_registerPlural( 'rows().indexes()', 'row().index()', function () {
            return this.iterator( 'row', function ( settings, row ) {
                return row;
            } );
        } );

        _api_registerPlural( 'rows().remove()', 'row().remove()', function () {
            var that = this;

            return this.iterator( 'row', function ( settings, row, thatIdx ) {
                var data = settings.aoData;

                data.splice( row, 1 );

                // Update the _DT_RowIndex parameter on all rows in the table
                for ( var i=0, ien=data.length ; i<ien ; i++ ) {
                    if ( data[i].nTr !== null ) {
                        data[i].nTr._DT_RowIndex = i;
                    }
                }

                // Remove the target row from the search array
                var displayIndex = $.inArray( row, settings.aiDisplay );

                // Delete from the display arrays
                _fnDeleteIndex( settings.aiDisplayMaster, row );
                _fnDeleteIndex( settings.aiDisplay, row );
                _fnDeleteIndex( that[ thatIdx ], row, false ); // maintain local indexes

                // Check for an 'overflow' they case for displaying the table
                _fnLengthOverflow( settings );
            } );
        } );


        _api_register( 'rows.add()', function ( rows ) {
            var newRows = this.iterator( 'table', function ( settings ) {
                var row, i, ien;
                var out = [];

                for ( i=0, ien=rows.length ; i<ien ; i++ ) {
                    row = rows[i];

                    if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
                        out.push( _fnAddTr( settings, row )[0] );
                    }
                    else {
                        out.push( _fnAddData( settings, row ) );
                    }
                }

                return out;
            } );

            // Return an Api.rows() extended instance, so rows().nodes() etc can be used
            var modRows = this.rows( -1 );
            modRows.pop();
            modRows.push.apply( modRows, newRows.toArray() );

            return modRows;
        } );





        /**
         *
         */
        _api_register( 'row()', function ( selector, opts ) {
            return _selector_first( this.rows( selector, opts ) );
        } );


        _api_register( 'row().data()', function ( data ) {
            var ctx = this.context;

            if ( data === undefined ) {
                // Get
                return ctx.length && this.length ?
                    ctx[0].aoData[ this[0] ]._aData :
                    undefined;
            }

            // Set
            ctx[0].aoData[ this[0] ]._aData = data;

            // Automatically invalidate
            _fnInvalidateRow( ctx[0], this[0], 'data' );

            return this;
        } );


        _api_register( 'row().node()', function () {
            var ctx = this.context;

            return ctx.length && this.length ?
                ctx[0].aoData[ this[0] ].nTr || null :
                null;
        } );


        _api_register( 'row.add()', function ( row ) {
            // Allow a jQuery object to be passed in - only a single row is added from
            // it though - the first element in the set
            if ( row instanceof $ && row.length ) {
                row = row[0];
            }

            var rows = this.iterator( 'table', function ( settings ) {
                if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
                    return _fnAddTr( settings, row )[0];
                }
                return _fnAddData( settings, row );
            } );

            // Return an Api.rows() extended instance, with the newly added row selected
            return this.row( rows[0] );
        } );



        var __details_add = function ( ctx, row, data, klass )
        {
            // Convert to array of TR elements
            var rows = [];
            var addRow = function ( r, k ) {
                // If we get a TR element, then just add it directly - up to the dev
                // to add the correct number of columns etc
                if ( r.nodeName && r.nodeName.toLowerCase() === 'tr' ) {
                    rows.push( r );
                }
                else {
                    // Otherwise create a row with a wrapper
                    var created = $('<tr><td/></tr>');
                    $('td', created)
                        .addClass( k )
                        .html( r )
                        [0].colSpan = _fnVisbleColumns( ctx );

                    rows.push( created[0] );
                }
            };

            if ( $.isArray( data ) || data instanceof $ ) {
                for ( var i=0, ien=data.length ; i<ien ; i++ ) {
                    addRow( data[i], klass );
                }
            }
            else {
                addRow( data, klass );
            }

            if ( row._details ) {
                row._details.remove();
            }

            row._details = $(rows);

            // If the children were already shown, that state should be retained
            if ( row._detailsShow ) {
                row._details.insertAfter( row.nTr );
            }
        };


        var __details_display = function ( show ) {
            var ctx = this.context;

            if ( ctx.length && this.length ) {
                var row = ctx[0].aoData[ this[0] ];

                if ( row._details ) {
                    row._detailsShow = show;
                    if ( show ) {
                        row._details.insertAfter( row.nTr );
                    }
                    else {
                        row._details.remove();
                    }

                    __details_events( ctx[0] );
                }
            }

            return this;
        };


        var __details_events = function ( settings )
        {
            var api = new _Api( settings );
            var namespace = '.dt.DT_details';
            var drawEvent = 'draw'+namespace;
            var colvisEvent = 'column-visibility'+namespace;

            api.off( drawEvent +' '+ colvisEvent );

            if ( _pluck( settings.aoData, '_details' ).length > 0 ) {
                // On each draw, insert the required elements into the document
                api.on( drawEvent, function () {
                    api.rows( {page:'current'} ).eq(0).each( function (idx) {
                        // Internal data grab
                        var row = settings.aoData[ idx ];

                        if ( row._detailsShow ) {
                            row._details.insertAfter( row.nTr );
                        }
                    } );
                } );

                // Column visibility change - update the colspan
                api.on( colvisEvent, function ( e, settings, idx, vis ) {
                    // Update the colspan for the details rows (note, only if it already has
                    // a colspan)
                    var row, visible = _fnVisbleColumns( settings );

                    for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
                        row = settings.aoData[i];

                        if ( row._details ) {
                            row._details.children('td[colspan]').attr('colspan', visible );
                        }
                    }
                } );
            }
        };

        // data can be:
        //  tr
        //  string
        //  jQuery or array of any of the above
        _api_register( 'row().child()', function ( data, klass ) {
            var ctx = this.context;

            if ( data === undefined ) {
                // get
                return ctx.length && this.length ?
                    ctx[0].aoData[ this[0] ]._details :
                    undefined;
            }
            else if ( ctx.length && this.length ) {
                // set
                __details_add( ctx[0], ctx[0].aoData[ this[0] ], data, klass );
            }

            return this;
        } );

        _api_register( [
            'row().child.show()',
            'row().child().show()'
        ], function () {
            __details_display.call( this, true );
            return this;
        } );

        _api_register( [
            'row().child.hide()',
            'row().child().hide()'
        ], function () {
            __details_display.call( this, false );
            return this;
        } );

        _api_register( 'row().child.isShown()', function () {
            var ctx = this.context;

            if ( ctx.length && this.length ) {
                // _detailsShown as false or undefined will fall through to return false
                return ctx[0].aoData[ this[0] ]._detailsShow || false;
            }
            return false;
        } );



        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         * Columns
         *
         * {integer}           - column index (>=0 count from left, <0 count from right)
         * "{integer}:visIdx"  - visible column index (i.e. translate to column index)  (>=0 count from left, <0 count from right)
         * "{integer}:visible" - alias for {integer}:visIdx  (>=0 count from left, <0 count from right)
         * "{string}:name"     - column name
         * "{string}"          - jQuery selector on column header nodes
         *
         */

        // can be an array of these items, comma separated list, or an array of comma
        // separated lists

        var __re_column_selector = /^(.*):(name|visIdx|visible)$/;

        var __column_selector = function ( settings, selector, opts )
        {
            var
                columns = settings.aoColumns,
                names = _pluck( columns, 'sName' ),
                nodes = _pluck( columns, 'nTh' );

            return _selector_run( selector, function ( s ) {
                var selInt = _intVal( s );

                if ( s === '' ) {
                    // All columns
                    return _range( columns.length );
                }
                else if ( selInt !== null ) {
                    // Integer selector
                    return [ selInt >= 0 ?
                        selInt : // Count from left
                        columns.length + selInt // Count from right (+ because its a negative value)
                    ];
                }
                else {
                    var match = typeof s === 'string' ?
                        s.match( __re_column_selector ) :
                        '';

                    if ( match ) {
                        switch( match[2] ) {
                            case 'visIdx':
                            case 'visible':
                                var idx = parseInt( match[1], 10 );
                                // Visible index given, convert to column index
                                if ( idx < 0 ) {
                                    // Counting from the right
                                    var visColumns = $.map( columns, function (col,i) {
                                        return col.bVisible ? i : null;
                                    } );
                                    return [ visColumns[ visColumns.length + idx ] ];
                                }
                                // Counting from the left
                                return [ _fnVisibleToColumnIndex( settings, idx ) ];

                            case 'name':
                                // match by name. `names` is column index complete and in order
                                return $.map( names, function (name, i) {
                                    return name === match[1] ? i : null;
                                } );
                        }
                    }
                    else {
                        // jQuery selector on the TH elements for the columns
                        return $( nodes )
                            .filter( s )
                            .map( function () {
                                return $.inArray( this, nodes ); // `nodes` is column index complete and in order
                            } )
                            .toArray();
                    }
                }
            } );
        };





        var __setColumnVis = function ( settings, column, vis ) {
            var
                cols = settings.aoColumns,
                col  = cols[ column ],
                data = settings.aoData,
                row, cells, i, ien, tr;

            // Get
            if ( vis === undefined ) {
                return col.bVisible;
            }

            // Set
            // No change
            if ( col.bVisible === vis ) {
                return;
            }

            if ( vis ) {
                // Insert column
                // Need to decide if we should use appendChild or insertBefore
                var insertBefore = $.inArray( true, _pluck(cols, 'bVisible'), column+1 );

                for ( i=0, ien=data.length ; i<ien ; i++ ) {
                    tr = data[i].nTr;
                    cells = data[i].anCells;

                    if ( tr ) {
                        // insertBefore can act like appendChild if 2nd arg is null
                        tr.insertBefore( cells[ column ], cells[ insertBefore ] || null );
                    }
                }
            }
            else {
                // Remove column
                $( _pluck( settings.aoData, 'anCells', column ) ).detach();

                col.bVisible = false;
                _fnDrawHead( settings, settings.aoHeader );
                _fnDrawHead( settings, settings.aoFooter );

                _fnSaveState( settings );
            }

            // Common actions
            col.bVisible = vis;
            _fnDrawHead( settings, settings.aoHeader );
            _fnDrawHead( settings, settings.aoFooter );

            // Automatically adjust column sizing
            _fnAdjustColumnSizing( settings );

            // Realign columns for scrolling
            if ( settings.oScroll.sX || settings.oScroll.sY ) {
                _fnScrollDraw( settings );
            }

            _fnCallbackFire( settings, null, 'column-visibility', [settings, column, vis] );

            _fnSaveState( settings );
        };


        /**
         *
         */
        _api_register( 'columns()', function ( selector, opts ) {
            // argument shifting
            if ( selector === undefined ) {
                selector = '';
            }
            else if ( $.isPlainObject( selector ) ) {
                opts = selector;
                selector = '';
            }

            opts = _selector_opts( opts );

            var inst = this.iterator( 'table', function ( settings ) {
                return __column_selector( settings, selector, opts );
            } );

            // Want argument shifting here and in _row_selector?
            inst.selector.cols = selector;
            inst.selector.opts = opts;

            return inst;
        } );


        /**
         *
         */
        _api_registerPlural( 'columns().header()', 'column().header()', function ( selector, opts ) {
            return this.iterator( 'column', function ( settings, column ) {
                return settings.aoColumns[column].nTh;
            } );
        } );


        /**
         *
         */
        _api_registerPlural( 'columns().footer()', 'column().footer()', function ( selector, opts ) {
            return this.iterator( 'column', function ( settings, column ) {
                return settings.aoColumns[column].nTf;
            } );
        } );


        /**
         *
         */
        _api_registerPlural( 'columns().data()', 'column().data()', function () {
            return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
                var a = [];
                for ( var row=0, ien=rows.length ; row<ien ; row++ ) {
                    a.push( _fnGetCellData( settings, rows[row], column, '' ) );
                }
                return a;
            } );
        } );


        _api_registerPlural( 'columns().cache()', 'column().cache()', function ( type ) {
            return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
                return _pluck_order( settings.aoData, rows,
                    type === 'search' ? '_aFilterData' : '_aSortData', column
                );
            } );
        } );


        _api_registerPlural( 'columns().nodes()', 'column().nodes()', function () {
            return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
                return _pluck_order( settings.aoData, rows, 'anCells', column ) ;
            } );
        } );



        _api_registerPlural( 'columns().visible()', 'column().visible()', function ( vis ) {
            return this.iterator( 'column', function ( settings, column ) {
                return vis === undefined ?
                    settings.aoColumns[ column ].bVisible :
                    __setColumnVis( settings, column, vis );
            } );
        } );



        _api_registerPlural( 'columns().indexes()', 'column().index()', function ( type ) {
            return this.iterator( 'column', function ( settings, column ) {
                return type === 'visible' ?
                    _fnColumnIndexToVisible( settings, column ) :
                    column;
            } );
        } );


        // _api_register( 'columns().show()', function () {
        // 	var selector = this.selector;
        // 	return this.columns( selector.cols, selector.opts ).visible( true );
        // } );


        // _api_register( 'columns().hide()', function () {
        // 	var selector = this.selector;
        // 	return this.columns( selector.cols, selector.opts ).visible( false );
        // } );



        _api_register( 'columns.adjust()', function () {
            return this.iterator( 'table', function ( settings ) {
                _fnAdjustColumnSizing( settings );
            } );
        } );


        // Convert from one column index type, to another type
        _api_register( 'column.index()', function ( type, idx ) {
            if ( this.context.length !== 0 ) {
                var ctx = this.context[0];

                if ( type === 'fromVisible' || type === 'toData' ) {
                    return _fnVisibleToColumnIndex( ctx, idx );
                }
                else if ( type === 'fromData' || type === 'toVisible' ) {
                    return _fnColumnIndexToVisible( ctx, idx );
                }
            }
        } );


        _api_register( 'column()', function ( selector, opts ) {
            return _selector_first( this.columns( selector, opts ) );
        } );




        var __cell_selector = function ( settings, selector, opts )
        {
            var data = settings.aoData;
            var rows = _selector_row_indexes( settings, opts );
            var cells = _pluck_order( data, rows, 'anCells' );
            var allCells = $( [].concat.apply([], cells) );
            var row;
            var columns = settings.aoColumns.length;
            var a, i, ien, j;

            return _selector_run( selector, function ( s ) {
                if ( ! s ) {
                    // All cells
                    a = [];

                    for ( i=0, ien=rows.length ; i<ien ; i++ ) {
                        row = rows[i];

                        for ( j=0 ; j<columns ; j++ ) {
                            a.push( {
                                row: row,
                                column: j
                            } );
                        }
                    }

                    return a;
                }
                else if ( $.isPlainObject( s ) ) {
                    return [s];
                }

                // jQuery filtered cells
                return allCells
                    .filter( s )
                    .map( function (i, el) {
                        row = el.parentNode._DT_RowIndex;

                        return {
                            row: row,
                            column: $.inArray( el, data[ row ].anCells )
                        };
                    } )
                    .toArray();
            } );
        };




        _api_register( 'cells()', function ( rowSelector, columnSelector, opts ) {
            // Argument shifting
            if ( $.isPlainObject( rowSelector ) ) {
                // If passing in a cell index
                if ( rowSelector.row ) {
                    opts = columnSelector;
                    columnSelector = null;
                }
                else {
                    opts = rowSelector;
                    rowSelector = null;
                }
            }
            if ( $.isPlainObject( columnSelector ) ) {
                opts = columnSelector;
                columnSelector = null;
            }

            // Cell selector
            if ( columnSelector === null || columnSelector === undefined ) {
                return this.iterator( 'table', function ( settings ) {
                    return __cell_selector( settings, rowSelector, _selector_opts( opts ) );
                } );
            }

            // Row + column selector
            var columns = this.columns( columnSelector, opts );
            var rows = this.rows( rowSelector, opts );
            var a, i, ien, j, jen;

            var cells = this.iterator( 'table', function ( settings, idx ) {
                a = [];

                for ( i=0, ien=rows[idx].length ; i<ien ; i++ ) {
                    for ( j=0, jen=columns[idx].length ; j<jen ; j++ ) {
                        a.push( {
                            row:    rows[idx][i],
                            column: columns[idx][j]
                        } );
                    }
                }

                return a;
            } );

            $.extend( cells.selector, {
                cols: columnSelector,
                rows: rowSelector,
                opts: opts
            } );

            return cells;
        } );


        _api_registerPlural( 'cells().nodes()', 'cell().node()', function () {
            return this.iterator( 'cell', function ( settings, row, column ) {
                return settings.aoData[ row ].anCells[ column ];
            } );
        } );


        _api_register( 'cells().data()', function () {
            return this.iterator( 'cell', function ( settings, row, column ) {
                return _fnGetCellData( settings, row, column );
            } );
        } );


        _api_registerPlural( 'cells().cache()', 'cell().cache()', function ( type ) {
            type = type === 'search' ? '_aFilterData' : '_aSortData';

            return this.iterator( 'cell', function ( settings, row, column ) {
                return settings.aoData[ row ][ type ][ column ];
            } );
        } );


        _api_registerPlural( 'cells().indexes()', 'cell().index()', function () {
            return this.iterator( 'cell', function ( settings, row, column ) {
                return {
                    row: row,
                    column: column,
                    columnVisible: _fnColumnIndexToVisible( settings, column )
                };
            } );
        } );


        _api_register( [
            'cells().invalidate()',
            'cell().invalidate()'
        ], function ( src ) {
            var selector = this.selector;

            // Use the rows method of the instance to perform the invalidation, rather
            // than doing it here. This avoids needing to handle duplicate rows from
            // the cells.
            this.rows( selector.rows, selector.opts ).invalidate( src );

            return this;
        } );




        _api_register( 'cell()', function ( rowSelector, columnSelector, opts ) {
            return _selector_first( this.cells( rowSelector, columnSelector, opts ) );
        } );



        _api_register( 'cell().data()', function ( data ) {
            var ctx = this.context;
            var cell = this[0];

            if ( data === undefined ) {
                // Get
                return ctx.length && cell.length ?
                    _fnGetCellData( ctx[0], cell[0].row, cell[0].column ) :
                    undefined;
            }

            // Set
            _fnSetCellData( ctx[0], cell[0].row, cell[0].column, data );
            _fnInvalidateRow( ctx[0], cell[0].row, 'data', cell[0].column );

            return this;
        } );



        /**
         * Get current ordering (sorting) that has been applied to the table.
         *
         * @returns {array} 2D array containing the sorting information for the first
         *   table in the current context. Each element in the parent array represents
         *   a column being sorted upon (i.e. multi-sorting with two columns would have
         *   2 inner arrays). The inner arrays may have 2 or 3 elements. The first is
         *   the column index that the sorting condition applies to, the second is the
         *   direction of the sort (`desc` or `asc`) and, optionally, the third is the
         *   index of the sorting order from the `column.sorting` initialisation array.
         *//**
         * Set the ordering for the table.
         *
         * @param {integer} order Column index to sort upon.
         * @param {string} direction Direction of the sort to be applied (`asc` or `desc`)
         * @returns {DataTables.Api} this
         *//**
         * Set the ordering for the table.
         *
         * @param {array} order 1D array of sorting information to be applied.
         * @param {array} [...] Optional additional sorting conditions
         * @returns {DataTables.Api} this
         *//**
         * Set the ordering for the table.
         *
         * @param {array} order 2D array of sorting information to be applied.
         * @returns {DataTables.Api} this
         */
        _api_register( 'order()', function ( order, dir ) {
            var ctx = this.context;

            if ( order === undefined ) {
                // get
                return ctx.length !== 0 ?
                    ctx[0].aaSorting :
                    undefined;
            }

            // set
            if ( typeof order === 'number' ) {
                // Simple column / direction passed in
                order = [ [ order, dir ] ];
            }
            else if ( ! $.isArray( order[0] ) ) {
                // Arguments passed in (list of 1D arrays)
                order = Array.prototype.slice.call( arguments );
            }
            // otherwise a 2D array was passed in

            return this.iterator( 'table', function ( settings ) {
                settings.aaSorting = order.slice();
            } );
        } );


        /**
         * Attach a sort listener to an element for a given column
         *
         * @param {node|jQuery|string} node Identifier for the element(s) to attach the
         *   listener to. This can take the form of a single DOM node, a jQuery
         *   collection of nodes or a jQuery selector which will identify the node(s).
         * @param {integer} column the column that a click on this node will sort on
         * @param {function} [callback] callback function when sort is run
         * @returns {DataTables.Api} this
         */
        _api_register( 'order.listener()', function ( node, column, callback ) {
            return this.iterator( 'table', function ( settings ) {
                _fnSortAttachListener( settings, node, column, callback );
            } );
        } );


        // Order by the selected column(s)
        _api_register( [
            'columns().order()',
            'column().order()'
        ], function ( dir ) {
            var that = this;

            return this.iterator( 'table', function ( settings, i ) {
                var sort = [];

                $.each( that[i], function (j, col) {
                    sort.push( [ col, dir ] );
                } );

                settings.aaSorting = sort;
            } );
        } );



        _api_register( 'search()', function ( input, regex, smart, caseInsen ) {
            var ctx = this.context;

            if ( input === undefined ) {
                // get
                return ctx.length !== 0 ?
                    ctx[0].oPreviousSearch.sSearch :
                    undefined;
            }

            // set
            return this.iterator( 'table', function ( settings ) {
                if ( ! settings.oFeatures.bFilter ) {
                    return;
                }

                _fnFilterComplete( settings, $.extend( {}, settings.oPreviousSearch, {
                    "sSearch": input+"",
                    "bRegex":  regex === null ? false : regex,
                    "bSmart":  smart === null ? true  : smart,
                    "bCaseInsensitive": caseInsen === null ? true : caseInsen
                } ), 1 );
            } );
        } );


        _api_register( [
            'columns().search()',
            'column().search()'
        ], function ( input, regex, smart, caseInsen ) {
            return this.iterator( 'column', function ( settings, column ) {
                var preSearch = settings.aoPreSearchCols;

                if ( input === undefined ) {
                    // get
                    return preSearch[ column ].sSearch;
                }

                // set
                if ( ! settings.oFeatures.bFilter ) {
                    return;
                }

                $.extend( preSearch[ column ], {
                    "sSearch": input+"",
                    "bRegex":  regex === null ? false : regex,
                    "bSmart":  smart === null ? true  : smart,
                    "bCaseInsensitive": caseInsen === null ? true : caseInsen
                } );

                _fnFilterComplete( settings, settings.oPreviousSearch, 1 );
            } );
        } );



        /**
         * Provide a common method for plug-ins to check the version of DataTables being
         * used, in order to ensure compatibility.
         *
         *  @param {string} version Version string to check for, in the format "X.Y.Z".
         *    Note that the formats "X" and "X.Y" are also acceptable.
         *  @returns {boolean} true if this version of DataTables is greater or equal to
         *    the required version, or false if this version of DataTales is not
         *    suitable
         *  @static
         *  @dtopt API-Static
         *
         *  @example
         *    alert( $.fn.dataTable.versionCheck( '1.9.0' ) );
         */
        DataTable.versionCheck = DataTable.fnVersionCheck = function( version )
        {
            var aThis = DataTable.version.split('.');
            var aThat = version.split('.');
            var iThis, iThat;

            for ( var i=0, iLen=aThat.length ; i<iLen ; i++ ) {
                iThis = parseInt( aThis[i], 10 ) || 0;
                iThat = parseInt( aThat[i], 10 ) || 0;

                // Parts are the same, keep comparing
                if (iThis === iThat) {
                    continue;
                }

                // Parts are different, return immediately
                return iThis > iThat;
            }

            return true;
        };


        /**
         * Check if a `<table>` node is a DataTable table already or not.
         *
         *  @param {node|jquery|string} table Table node, jQuery object or jQuery
         *      selector for the table to test. Note that if more than more than one
         *      table is passed on, only the first will be checked
         *  @returns {boolean} true the table given is a DataTable, or false otherwise
         *  @static
         *  @dtopt API-Static
         *
         *  @example
         *    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {
	 *      $('#example').dataTable();
	 *    }
         */
        DataTable.isDataTable = DataTable.fnIsDataTable = function ( table )
        {
            var t = $(table).get(0);
            var is = false;

            $.each( DataTable.settings, function (i, o) {
                if ( o.nTable === t || o.nScrollHead === t || o.nScrollFoot === t ) {
                    is = true;
                }
            } );

            return is;
        };


        /**
         * Get all DataTable tables that have been initialised - optionally you can
         * select to get only currently visible tables.
         *
         *  @param {boolean} [visible=false] Flag to indicate if you want all (default)
         *    or visible tables only.
         *  @returns {array} Array of `table` nodes (not DataTable instances) which are
         *    DataTables
         *  @static
         *  @dtopt API-Static
         *
         *  @example
         *    $.each( $.fn.dataTable.tables(true), function () {
	 *      $(table).DataTable().columns.adjust();
	 *    } );
         */
        DataTable.tables = DataTable.fnTables = function ( visible )
        {
            return jQuery.map( DataTable.settings, function (o) {
                if ( !visible || (visible && $(o.nTable).is(':visible')) ) {
                    return o.nTable;
                }
            } );
        };


        /**
         * Convert from camel case parameters to Hungarian notation. This is made public
         * for the extensions to provide the same ability as DataTables core to accept
         * either the 1.9 style Hungarian notation, or the 1.10+ style camelCase
         * parameters.
         *
         *  @param {object} src The model object which holds all parameters that can be
         *    mapped.
         *  @param {object} user The object to convert from camel case to Hungarian.
         *  @param {boolean} force When set to `true`, properties which already have a
         *    Hungarian value in the `user` object will be overwritten. Otherwise they
         *    won't be.
         */
        DataTable.camelToHungarian = _fnCamelToHungarian;



        /**
         *
         */
        _api_register( '$()', function ( selector, opts ) {
            var
                rows   = this.rows( opts ).nodes(), // Get all rows
                jqRows = $(rows);

            return $( [].concat(
                jqRows.filter( selector ).toArray(),
                jqRows.find( selector ).toArray()
            ) );
        } );


        // jQuery functions to operate on the tables
        $.each( [ 'on', 'one', 'off' ], function (i, key) {
            _api_register( key+'()', function ( /* event, handler */ ) {
                var args = Array.prototype.slice.call(arguments);

                // Add the `dt` namespace automatically if it isn't already present
                if ( args[0].indexOf( '.dt' ) === -1 ) {
                    args[0] += '.dt';
                }

                var inst = $( this.tables().nodes() );
                inst[key].apply( inst, args );
                return this;
            } );
        } );


        _api_register( 'clear()', function () {
            return this.iterator( 'table', function ( settings ) {
                _fnClearTable( settings );
            } );
        } );


        _api_register( 'settings()', function () {
            return new _Api( this.context, this.context );
        } );


        _api_register( 'data()', function () {
            return this.iterator( 'table', function ( settings ) {
                return _pluck( settings.aoData, '_aData' );
            } ).flatten();
        } );


        _api_register( 'destroy()', function ( remove ) {
            remove = remove || false;

            return this.iterator( 'table', function ( settings ) {
                var orig      = settings.nTableWrapper.parentNode;
                var classes   = settings.oClasses;
                var table     = settings.nTable;
                var tbody     = settings.nTBody;
                var thead     = settings.nTHead;
                var tfoot     = settings.nTFoot;
                var jqTable   = $(table);
                var jqTbody   = $(tbody);
                var jqWrapper = $(settings.nTableWrapper);
                var rows      = $.map( settings.aoData, function (r) { return r.nTr; } );
                var i, ien;

                // Flag to note that the table is currently being destroyed - no action
                // should be taken
                settings.bDestroying = true;

                // Fire off the destroy callbacks for plug-ins etc
                _fnCallbackFire( settings, "aoDestroyCallback", "destroy", [settings] );

                // If not being removed from the document, make all columns visible
                if ( ! remove ) {
                    new _Api( settings ).columns().visible( true );
                }

                // Blitz all `DT` namespaced events (these are internal events, the
                // lowercase, `dt` events are user subscribed and they are responsible
                // for removing them
                jqWrapper.unbind('.DT').find(':not(tbody *)').unbind('.DT');
                $(window).unbind('.DT-'+settings.sInstance);

                // When scrolling we had to break the table up - restore it
                if ( table != thead.parentNode ) {
                    jqTable.children('thead').detach();
                    jqTable.append( thead );
                }

                if ( tfoot && table != tfoot.parentNode ) {
                    jqTable.children('tfoot').detach();
                    jqTable.append( tfoot );
                }

                // Remove the DataTables generated nodes, events and classes
                jqTable.detach();
                jqWrapper.detach();

                settings.aaSorting = [];
                settings.aaSortingFixed = [];
                _fnSortingClasses( settings );

                $( rows ).removeClass( settings.asStripeClasses.join(' ') );

                $('th, td', thead).removeClass( classes.sSortable+' '+
                    classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone
                );

                if ( settings.bJUI ) {
                    $('th span.'+classes.sSortIcon+ ', td span.'+classes.sSortIcon, thead).detach();
                    $('th, td', thead).each( function () {
                        var wrapper = $('div.'+classes.sSortJUIWrapper, this);
                        $(this).append( wrapper.contents() );
                        wrapper.detach();
                    } );
                }

                if ( ! remove && orig ) {
                    // insertBefore acts like appendChild if !arg[1]
                    orig.insertBefore( table, settings.nTableReinsertBefore );
                }

                // Add the TR elements back into the table in their original order
                jqTbody.children().detach();
                jqTbody.append( rows );

                // Restore the width of the original table - was read from the style property,
                // so we can restore directly to that
                jqTable
                    .css( 'width', settings.sDestroyWidth )
                    .removeClass( classes.sTable );

                // If the were originally stripe classes - then we add them back here.
                // Note this is not fool proof (for example if not all rows had stripe
                // classes - but it's a good effort without getting carried away
                ien = settings.asDestroyStripes.length;

                if ( ien ) {
                    jqTbody.children().each( function (i) {
                        $(this).addClass( settings.asDestroyStripes[i % ien] );
                    } );
                }

                /* Remove the settings object from the settings array */
                var idx = $.inArray( settings, DataTable.settings );
                if ( idx !== -1 ) {
                    DataTable.settings.splice( idx, 1 );
                }
            } );
        } );


        /**
         * Version string for plug-ins to check compatibility. Allowed format is
         * `a.b.c-d` where: a:int, b:int, c:int, d:string(dev|beta|alpha). `d` is used
         * only for non-release builds. See http://semver.org/ for more information.
         *  @member
         *  @type string
         *  @default Version number
         */
        DataTable.version = "1.10.0";

        /**
         * Private data store, containing all of the settings objects that are
         * created for the tables on a given page.
         *
         * Note that the `DataTable.settings` object is aliased to
         * `jQuery.fn.dataTableExt` through which it may be accessed and
         * manipulated, or `jQuery.fn.dataTable.settings`.
         *  @member
         *  @type array
         *  @default []
         *  @private
         */
        DataTable.settings = [];

        /**
         * Object models container, for the various models that DataTables has
         * available to it. These models define the objects that are used to hold
         * the active state and configuration of the table.
         *  @namespace
         */
        DataTable.models = {};



        /**
         * Template object for the way in which DataTables holds information about
         * search information for the global filter and individual column filters.
         *  @namespace
         */
        DataTable.models.oSearch = {
            /**
             * Flag to indicate if the filtering should be case insensitive or not
             *  @type boolean
             *  @default true
             */
            "bCaseInsensitive": true,

            /**
             * Applied search term
             *  @type string
             *  @default <i>Empty string</i>
             */
            "sSearch": "",

            /**
             * Flag to indicate if the search term should be interpreted as a
             * regular expression (true) or not (false) and therefore and special
             * regex characters escaped.
             *  @type boolean
             *  @default false
             */
            "bRegex": false,

            /**
             * Flag to indicate if DataTables is to use its smart filtering or not.
             *  @type boolean
             *  @default true
             */
            "bSmart": true
        };




        /**
         * Template object for the way in which DataTables holds information about
         * each individual row. This is the object format used for the settings
         * aoData array.
         *  @namespace
         */
        DataTable.models.oRow = {
            /**
             * TR element for the row
             *  @type node
             *  @default null
             */
            "nTr": null,

            /**
             * Array of TD elements for each row. This is null until the row has been
             * created.
             *  @type array nodes
             *  @default []
             */
            "anCells": null,

            /**
             * Data object from the original data source for the row. This is either
             * an array if using the traditional form of DataTables, or an object if
             * using mData options. The exact type will depend on the passed in
             * data from the data source, or will be an array if using DOM a data
             * source.
             *  @type array|object
             *  @default []
             */
            "_aData": [],

            /**
             * Sorting data cache - this array is ostensibly the same length as the
             * number of columns (although each index is generated only as it is
             * needed), and holds the data that is used for sorting each column in the
             * row. We do this cache generation at the start of the sort in order that
             * the formatting of the sort data need be done only once for each cell
             * per sort. This array should not be read from or written to by anything
             * other than the master sorting methods.
             *  @type array
             *  @default null
             *  @private
             */
            "_aSortData": null,

            /**
             * Per cell filtering data cache. As per the sort data cache, used to
             * increase the performance of the filtering in DataTables
             *  @type array
             *  @default null
             *  @private
             */
            "_aFilterData": null,

            /**
             * Filtering data cache. This is the same as the cell filtering cache, but
             * in this case a string rather than an array. This is easily computed with
             * a join on `_aFilterData`, but is provided as a cache so the join isn't
             * needed on every search (memory traded for performance)
             *  @type array
             *  @default null
             *  @private
             */
            "_sFilterRow": null,

            /**
             * Cache of the class name that DataTables has applied to the row, so we
             * can quickly look at this variable rather than needing to do a DOM check
             * on className for the nTr property.
             *  @type string
             *  @default <i>Empty string</i>
             *  @private
             */
            "_sRowStripe": "",

            /**
             * Denote if the original data source was from the DOM, or the data source
             * object. This is used for invalidating data, so DataTables can
             * automatically read data from the original source, unless uninstructed
             * otherwise.
             *  @type string
             *  @default null
             *  @private
             */
            "src": null
        };


        /**
         * Template object for the column information object in DataTables. This object
         * is held in the settings aoColumns array and contains all the information that
         * DataTables needs about each individual column.
         *
         * Note that this object is related to {@link DataTable.defaults.column}
         * but this one is the internal data store for DataTables's cache of columns.
         * It should NOT be manipulated outside of DataTables. Any configuration should
         * be done through the initialisation options.
         *  @namespace
         */
        DataTable.models.oColumn = {
            /**
             * Column index. This could be worked out on-the-fly with $.inArray, but it
             * is faster to just hold it as a variable
             *  @type integer
             *  @default null
             */
            "idx": null,

            /**
             * A list of the columns that sorting should occur on when this column
             * is sorted. That this property is an array allows multi-column sorting
             * to be defined for a column (for example first name / last name columns
             * would benefit from this). The values are integers pointing to the
             * columns to be sorted on (typically it will be a single integer pointing
             * at itself, but that doesn't need to be the case).
             *  @type array
             */
            "aDataSort": null,

            /**
             * Define the sorting directions that are applied to the column, in sequence
             * as the column is repeatedly sorted upon - i.e. the first value is used
             * as the sorting direction when the column if first sorted (clicked on).
             * Sort it again (click again) and it will move on to the next index.
             * Repeat until loop.
             *  @type array
             */
            "asSorting": null,

            /**
             * Flag to indicate if the column is searchable, and thus should be included
             * in the filtering or not.
             *  @type boolean
             */
            "bSearchable": null,

            /**
             * Flag to indicate if the column is sortable or not.
             *  @type boolean
             */
            "bSortable": null,

            /**
             * Flag to indicate if the column is currently visible in the table or not
             *  @type boolean
             */
            "bVisible": null,

            /**
             * Store for manual type assignment using the `column.type` option. This
             * is held in store so we can manipulate the column's `sType` property.
             *  @type string
             *  @default null
             *  @private
             */
            "_sManualType": null,

            /**
             * Flag to indicate if HTML5 data attributes should be used as the data
             * source for filtering or sorting. True is either are.
             *  @type boolean
             *  @default false
             *  @private
             */
            "_bAttrSrc": false,

            /**
             * Developer definable function that is called whenever a cell is created (Ajax source,
             * etc) or processed for input (DOM source). This can be used as a compliment to mRender
             * allowing you to modify the DOM element (add background colour for example) when the
             * element is available.
             *  @type function
             *  @param {element} nTd The TD node that has been created
             *  @param {*} sData The Data for the cell
             *  @param {array|object} oData The data for the whole row
             *  @param {int} iRow The row index for the aoData data store
             *  @default null
             */
            "fnCreatedCell": null,

            /**
             * Function to get data from a cell in a column. You should <b>never</b>
             * access data directly through _aData internally in DataTables - always use
             * the method attached to this property. It allows mData to function as
             * required. This function is automatically assigned by the column
             * initialisation method
             *  @type function
             *  @param {array|object} oData The data array/object for the array
             *    (i.e. aoData[]._aData)
             *  @param {string} sSpecific The specific data type you want to get -
             *    'display', 'type' 'filter' 'sort'
             *  @returns {*} The data for the cell from the given row's data
             *  @default null
             */
            "fnGetData": null,

            /**
             * Function to set data for a cell in the column. You should <b>never</b>
             * set the data directly to _aData internally in DataTables - always use
             * this method. It allows mData to function as required. This function
             * is automatically assigned by the column initialisation method
             *  @type function
             *  @param {array|object} oData The data array/object for the array
             *    (i.e. aoData[]._aData)
             *  @param {*} sValue Value to set
             *  @default null
             */
            "fnSetData": null,

            /**
             * Property to read the value for the cells in the column from the data
             * source array / object. If null, then the default content is used, if a
             * function is given then the return from the function is used.
             *  @type function|int|string|null
             *  @default null
             */
            "mData": null,

            /**
             * Partner property to mData which is used (only when defined) to get
             * the data - i.e. it is basically the same as mData, but without the
             * 'set' option, and also the data fed to it is the result from mData.
             * This is the rendering method to match the data method of mData.
             *  @type function|int|string|null
             *  @default null
             */
            "mRender": null,

            /**
             * Unique header TH/TD element for this column - this is what the sorting
             * listener is attached to (if sorting is enabled.)
             *  @type node
             *  @default null
             */
            "nTh": null,

            /**
             * Unique footer TH/TD element for this column (if there is one). Not used
             * in DataTables as such, but can be used for plug-ins to reference the
             * footer for each column.
             *  @type node
             *  @default null
             */
            "nTf": null,

            /**
             * The class to apply to all TD elements in the table's TBODY for the column
             *  @type string
             *  @default null
             */
            "sClass": null,

            /**
             * When DataTables calculates the column widths to assign to each column,
             * it finds the longest string in each column and then constructs a
             * temporary table and reads the widths from that. The problem with this
             * is that "mmm" is much wider then "iiii", but the latter is a longer
             * string - thus the calculation can go wrong (doing it properly and putting
             * it into an DOM object and measuring that is horribly(!) slow). Thus as
             * a "work around" we provide this option. It will append its value to the
             * text that is found to be the longest string for the column - i.e. padding.
             *  @type string
             */
            "sContentPadding": null,

            /**
             * Allows a default value to be given for a column's data, and will be used
             * whenever a null data source is encountered (this can be because mData
             * is set to null, or because the data source itself is null).
             *  @type string
             *  @default null
             */
            "sDefaultContent": null,

            /**
             * Name for the column, allowing reference to the column by name as well as
             * by index (needs a lookup to work by name).
             *  @type string
             */
            "sName": null,

            /**
             * Custom sorting data type - defines which of the available plug-ins in
             * afnSortData the custom sorting will use - if any is defined.
             *  @type string
             *  @default std
             */
            "sSortDataType": 'std',

            /**
             * Class to be applied to the header element when sorting on this column
             *  @type string
             *  @default null
             */
            "sSortingClass": null,

            /**
             * Class to be applied to the header element when sorting on this column -
             * when jQuery UI theming is used.
             *  @type string
             *  @default null
             */
            "sSortingClassJUI": null,

            /**
             * Title of the column - what is seen in the TH element (nTh).
             *  @type string
             */
            "sTitle": null,

            /**
             * Column sorting and filtering type
             *  @type string
             *  @default null
             */
            "sType": null,

            /**
             * Width of the column
             *  @type string
             *  @default null
             */
            "sWidth": null,

            /**
             * Width of the column when it was first "encountered"
             *  @type string
             *  @default null
             */
            "sWidthOrig": null
        };


        /*
         * Developer note: The properties of the object below are given in Hungarian
         * notation, that was used as the interface for DataTables prior to v1.10, however
         * from v1.10 onwards the primary interface is camel case. In order to avoid
         * breaking backwards compatibility utterly with this change, the Hungarian
         * version is still, internally the primary interface, but is is not documented
         * - hence the @name tags in each doc comment. This allows a Javascript function
         * to create a map from Hungarian notation to camel case (going the other direction
         * would require each property to be listed, which would at around 3K to the size
         * of DataTables, while this method is about a 0.5K hit.
         *
         * Ultimately this does pave the way for Hungarian notation to be dropped
         * completely, but that is a massive amount of work and will break current
         * installs (therefore is on-hold until v2).
         */

        /**
         * Initialisation options that can be given to DataTables at initialisation
         * time.
         *  @namespace
         */
        DataTable.defaults = {
            /**
             * An array of data to use for the table, passed in at initialisation which
             * will be used in preference to any data which is already in the DOM. This is
             * particularly useful for constructing tables purely in Javascript, for
             * example with a custom Ajax call.
             *  @type array
             *  @default null
             *
             *  @dtopt Option
             *  @name DataTable.defaults.data
             *
             *  @example
             *    // Using a 2D array data source
             *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
		 *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine" },
		 *          { "title": "Browser" },
		 *          { "title": "Platform" },
		 *          { "title": "Version" },
		 *          { "title": "Grade" }
		 *        ]
		 *      } );
		 *    } );
             *
             *  @example
             *    // Using an array of objects as a data source (`data`)
             *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 4.0",
		 *            "platform": "Win 95+",
		 *            "version":  4,
		 *            "grade":    "X"
		 *          },
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 5.0",
		 *            "platform": "Win 95+",
		 *            "version":  5,
		 *            "grade":    "C"
		 *          }
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine",   "data": "engine" },
		 *          { "title": "Browser",  "data": "browser" },
		 *          { "title": "Platform", "data": "platform" },
		 *          { "title": "Version",  "data": "version" },
		 *          { "title": "Grade",    "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
             */
            "aaData": null,


            /**
             * If ordering is enabled, then DataTables will perform a first pass sort on
             * initialisation. You can define which column(s) the sort is performed
             * upon, and the sorting direction, with this variable. The `sorting` array
             * should contain an array for each column to be sorted initially containing
             * the column's index and a direction string ('asc' or 'desc').
             *  @type array
             *  @default [[0,'asc']]
             *
             *  @dtopt Option
             *  @name DataTable.defaults.order
             *
             *  @example
             *    // Sort by 3rd column first, and then 4th column
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": [[2,'asc'], [3,'desc']]
		 *      } );
		 *    } );
             *
             *    // No initial sorting
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": []
		 *      } );
		 *    } );
             */
            "aaSorting": [[0,'asc']],


            /**
             * This parameter is basically identical to the `sorting` parameter, but
             * cannot be overridden by user interaction with the table. What this means
             * is that you could have a column (visible or hidden) which the sorting
             * will always be forced on first - any sorting after that (from the user)
             * will then be performed as required. This can be useful for grouping rows
             * together.
             *  @type array
             *  @default null
             *
             *  @dtopt Option
             *  @name DataTable.defaults.orderFixed
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderFixed": [[0,'asc']]
		 *      } );
		 *    } )
             */
            "aaSortingFixed": [],


            /**
             * DataTables can be instructed to load data to display in the table from a
             * Ajax source. This option defines how that Ajax call is made and where to.
             *
             * The `ajax` property has three different modes of operation, depending on
             * how it is defined. These are:
             *
             * * `string` - Set the URL from where the data should be loaded from.
             * * `object` - Define properties for `jQuery.ajax`.
             * * `function` - Custom data get function
             *
             * `string`
             * --------
             *
             * As a string, the `ajax` property simply defines the URL from which
             * DataTables will load data.
             *
             * `object`
             * --------
             *
             * As an object, the parameters in the object are passed to
             * [jQuery.ajax](http://api.jquery.com/jQuery.ajax/) allowing fine control
             * of the Ajax request. DataTables has a number of default parameters which
             * you can override using this option. Please refer to the jQuery
             * documentation for a full description of the options available, although
             * the following parameters provide additional options in DataTables or
             * require special consideration:
             *
             * * `data` - As with jQuery, `data` can be provided as an object, but it
             *   can also be used as a function to manipulate the data DataTables sends
             *   to the server. The function takes a single parameter, an object of
             *   parameters with the values that DataTables has readied for sending. An
             *   object may be returned which will be merged into the DataTables
             *   defaults, or you can add the items to the object that was passed in and
             *   not return anything from the function. This supersedes `fnServerParams`
             *   from DataTables 1.9-.
             *
             * * `dataSrc` - By default DataTables will look for the property `data` (or
             *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
             *   from an Ajax source or for server-side processing - this parameter
             *   allows that property to be changed. You can use Javascript dotted
             *   object notation to get a data source for multiple levels of nesting, or
             *   it my be used as a function. As a function it takes a single parameter,
             *   the JSON returned from the server, which can be manipulated as
             *   required, with the returned value being that used by DataTables as the
             *   data source for the table. This supersedes `sAjaxDataProp` from
             *   DataTables 1.9-.
             *
             * * `success` - Should not be overridden it is used internally in
             *   DataTables. To manipulate / transform the data returned by the server
             *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
             *
             * `function`
             * ----------
             *
             * As a function, making the Ajax call is left up to yourself allowing
             * complete control of the Ajax request. Indeed, if desired, a method other
             * than Ajax could be used to obtain the required data, such as Web storage
             * or an AIR database.
             *
             * The function is given four parameters and no return is required. The
             * parameters are:
             *
             * 1. _object_ - Data to send to the server
             * 2. _function_ - Callback function that must be executed when the required
             *    data has been obtained. That data should be passed into the callback
             *    as the only parameter
             * 3. _object_ - DataTables settings object for the table
             *
             * Note that this supersedes `fnServerData` from DataTables 1.9-.
             *
             *  @type string|object|function
             *  @default null
             *
             *  @dtopt Option
             *  @name DataTable.defaults.ajax
             *  @since 1.10.0
             *
             * @example
             *   // Get JSON data from a file via Ajax.
             *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
             *   $('#example').dataTable( {
		 *     "ajax": "data.json"
		 *   } );
             *
             * @example
             *   // Get JSON data from a file via Ajax, using `dataSrc` to change
             *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
             *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": "tableData"
		 *     }
		 *   } );
             *
             * @example
             *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
             *   // from a plain array rather than an array in an object
             *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": ""
		 *     }
		 *   } );
             *
             * @example
             *   // Manipulate the data returned from the server - add a link to data
             *   // (note this can, should, be done using `render` for the column - this
             *   // is just a simple example of how the data can be manipulated).
             *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": function ( json ) {
		 *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
		 *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
		 *         }
		 *         return json;
		 *       }
		 *     }
		 *   } );
             *
             * @example
             *   // Add data to the request
             *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "data": function ( d ) {
		 *         return {
		 *           "extra_search": $('#extra').val()
		 *         };
		 *       }
		 *     }
		 *   } );
             *
             * @example
             *   // Send request as POST
             *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "type": "POST"
		 *     }
		 *   } );
             *
             * @example
             *   // Get the data from localStorage (could interface with a form for
             *   // adding, editing and removing rows).
             *   $('#example').dataTable( {
		 *     "ajax": function (data, callback, settings) {
		 *       callback(
		 *         JSON.parse( localStorage.getItem('dataTablesData') )
		 *       );
		 *     }
		 *   } );
             */
            "ajax": null,


            /**
             * This parameter allows you to readily specify the entries in the length drop
             * down menu that DataTables shows when pagination is enabled. It can be
             * either a 1D array of options which will be used for both the displayed
             * option and the value, or a 2D array which will use the array in the first
             * position as the value, and the array in the second position as the
             * displayed options (useful for language strings such as 'All').
             *
             * Note that the `pageLength` property will be automatically set to the
             * first value given in this array, unless `pageLength` is also provided.
             *  @type array
             *  @default [ 10, 25, 50, 100 ]
             *
             *  @dtopt Option
             *  @name DataTable.defaults.lengthMenu
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
		 *      } );
		 *    } );
             */
            "aLengthMenu": [ 10, 25, 50, 100 ],


            /**
             * The `columns` option in the initialisation parameter allows you to define
             * details about the way individual columns behave. For a full list of
             * column options that can be set, please see
             * {@link DataTable.defaults.column}. Note that if you use `columns` to
             * define your columns, you must have an entry in the array for every single
             * column that you have in your table (these can be null if you don't which
             * to specify any options).
             *  @member
             *
             *  @name DataTable.defaults.column
             */
            "aoColumns": null,

            /**
             * Very similar to `columns`, `columnDefs` allows you to target a specific
             * column, multiple columns, or all columns, using the `targets` property of
             * each object in the array. This allows great flexibility when creating
             * tables, as the `columnDefs` arrays can be of any length, targeting the
             * columns you specifically want. `columnDefs` may use any of the column
             * options available: {@link DataTable.defaults.column}, but it _must_
             * have `targets` defined in each object in the array. Values in the `targets`
             * array may be:
             *   <ul>
             *     <li>a string - class name will be matched on the TH for the column</li>
             *     <li>0 or a positive integer - column index counting from the left</li>
             *     <li>a negative integer - column index counting from the right</li>
             *     <li>the string "_all" - all columns (i.e. assign a default)</li>
             *   </ul>
             *  @member
             *
             *  @name DataTable.defaults.columnDefs
             */
            "aoColumnDefs": null,


            /**
             * Basically the same as `search`, this parameter defines the individual column
             * filtering state at initialisation time. The array must be of the same size
             * as the number of columns, and each element be an object with the parameters
             * `search` and `escapeRegex` (the latter is optional). 'null' is also
             * accepted and the default will be used.
             *  @type array
             *  @default []
             *
             *  @dtopt Option
             *  @name DataTable.defaults.searchCols
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchCols": [
		 *          null,
		 *          { "search": "My filter" },
		 *          null,
		 *          { "search": "^[0-9]", "escapeRegex": false }
		 *        ]
		 *      } );
		 *    } )
             */
            "aoSearchCols": [],


            /**
             * An array of CSS classes that should be applied to displayed rows. This
             * array may be of any length, and DataTables will apply each class
             * sequentially, looping when required.
             *  @type array
             *  @default null <i>Will take the values determined by the `oClasses.stripe*`
             *    options</i>
             *
             *  @dtopt Option
             *  @name DataTable.defaults.stripeClasses
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
		 *      } );
		 *    } )
             */
            "asStripeClasses": null,


            /**
             * Enable or disable automatic column width calculation. This can be disabled
             * as an optimisation (it takes some time to calculate the widths) if the
             * tables widths are passed in using `columns`.
             *  @type boolean
             *  @default true
             *
             *  @dtopt Features
             *  @name DataTable.defaults.autoWidth
             *
             *  @example
             *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "autoWidth": false
		 *      } );
		 *    } );
             */
            "bAutoWidth": true,


            /**
             * Deferred rendering can provide DataTables with a huge speed boost when you
             * are using an Ajax or JS data source for the table. This option, when set to
             * true, will cause DataTables to defer the creation of the table elements for
             * each row until they are needed for a draw - saving a significant amount of
             * time.
             *  @type boolean
             *  @default false
             *
             *  @dtopt Features
             *  @name DataTable.defaults.deferRender
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajax": "sources/arrays.txt",
		 *        "deferRender": true
		 *      } );
		 *    } );
             */
            "bDeferRender": false,


            /**
             * Replace a DataTable which matches the given selector and replace it with
             * one which has the properties of the new initialisation object passed. If no
             * table matches the selector, then the new DataTable will be constructed as
             * per normal.
             *  @type boolean
             *  @default false
             *
             *  @dtopt Options
             *  @name DataTable.defaults.destroy
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "srollY": "200px",
		 *        "paginate": false
		 *      } );
		 *
		 *      // Some time later....
		 *      $('#example').dataTable( {
		 *        "filter": false,
		 *        "destroy": true
		 *      } );
		 *    } );
             */
            "bDestroy": false,


            /**
             * Enable or disable filtering of data. Filtering in DataTables is "smart" in
             * that it allows the end user to input multiple words (space separated) and
             * will match a row containing those words, even if not in the order that was
             * specified (this allow matching across multiple columns). Note that if you
             * wish to use filtering in DataTables this must remain 'true' - to remove the
             * default filtering input box and retain filtering abilities, please use
             * {@link DataTable.defaults.dom}.
             *  @type boolean
             *  @default true
             *
             *  @dtopt Features
             *  @name DataTable.defaults.searching
             *
             *  @example
             *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "searching": false
		 *      } );
		 *    } );
             */
            "bFilter": true,


            /**
             * Enable or disable the table information display. This shows information
             * about the data that is currently visible on the page, including information
             * about filtered data if that action is being performed.
             *  @type boolean
             *  @default true
             *
             *  @dtopt Features
             *  @name DataTable.defaults.info
             *
             *  @example
             *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "info": false
		 *      } );
		 *    } );
             */
            "bInfo": true,


            /**
             * Enable jQuery UI ThemeRoller support (required as ThemeRoller requires some
             * slightly different and additional mark-up from what DataTables has
             * traditionally used).
             *  @type boolean
             *  @default false
             *
             *  @dtopt Features
             *  @name DataTable.defaults.jQueryUI
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "jQueryUI": true
		 *      } );
		 *    } );
             */
            "bJQueryUI": false,


            /**
             * Allows the end user to select the size of a formatted page from a select
             * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
             *  @type boolean
             *  @default true
             *
             *  @dtopt Features
             *  @name DataTable.defaults.lengthChange
             *
             *  @example
             *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "lengthChange": false
		 *      } );
		 *    } );
             */
            "bLengthChange": true,


            /**
             * Enable or disable pagination.
             *  @type boolean
             *  @default true
             *
             *  @dtopt Features
             *  @name DataTable.defaults.paging
             *
             *  @example
             *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "paging": false
		 *      } );
		 *    } );
             */
            "bPaginate": true,


            /**
             * Enable or disable the display of a 'processing' indicator when the table is
             * being processed (e.g. a sort). This is particularly useful for tables with
             * large amounts of data where it can take a noticeable amount of time to sort
             * the entries.
             *  @type boolean
             *  @default false
             *
             *  @dtopt Features
             *  @name DataTable.defaults.processing
             *
             *  @example
             *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "processing": true
		 *      } );
		 *    } );
             */
            "bProcessing": false,


            /**
             * Retrieve the DataTables object for the given selector. Note that if the
             * table has already been initialised, this parameter will cause DataTables
             * to simply return the object that has already been set up - it will not take
             * account of any changes you might have made to the initialisation object
             * passed to DataTables (setting this parameter to true is an acknowledgement
             * that you understand this). `destroy` can be used to reinitialise a table if
             * you need.
             *  @type boolean
             *  @default false
             *
             *  @dtopt Options
             *  @name DataTable.defaults.retrieve
             *
             *  @example
             *    $(document).ready( function() {
		 *      initTable();
		 *      tableActions();
		 *    } );
             *
             *    function initTable ()
             *    {
		 *      return $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false,
		 *        "retrieve": true
		 *      } );
		 *    }
             *
             *    function tableActions ()
             *    {
		 *      var table = initTable();
		 *      // perform API operations with oTable
		 *    }
             */
            "bRetrieve": false,


            /**
             * When vertical (y) scrolling is enabled, DataTables will force the height of
             * the table's viewport to the given height at all times (useful for layout).
             * However, this can look odd when filtering data down to a small data set,
             * and the footer is left "floating" further down. This parameter (when
             * enabled) will cause DataTables to collapse the table's viewport down when
             * the result set will fit within the given Y height.
             *  @type boolean
             *  @default false
             *
             *  @dtopt Options
             *  @name DataTable.defaults.scrollCollapse
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200",
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
             */
            "bScrollCollapse": false,


            /**
             * Configure DataTables to use server-side processing. Note that the
             * `ajax` parameter must also be given in order to give DataTables a
             * source to obtain the required data for each draw.
             *  @type boolean
             *  @default false
             *
             *  @dtopt Features
             *  @dtopt Server-side
             *  @name DataTable.defaults.serverSide
             *
             *  @example
             *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "xhr.php"
		 *      } );
		 *    } );
             */
            "bServerSide": false,


            /**
             * Enable or disable sorting of columns. Sorting of individual columns can be
             * disabled by the `sortable` option for each column.
             *  @type boolean
             *  @default true
             *
             *  @dtopt Features
             *  @name DataTable.defaults.ordering
             *
             *  @example
             *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "ordering": false
		 *      } );
		 *    } );
             */
            "bSort": true,


            /**
             * Enable or display DataTables' ability to sort multiple columns at the
             * same time (activated by shift-click by the user).
             *  @type boolean
             *  @default true
             *
             *  @dtopt Options
             *  @name DataTable.defaults.orderMulti
             *
             *  @example
             *    // Disable multiple column sorting ability
             *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderMulti": false
		 *      } );
		 *    } );
             */
            "bSortMulti": true,


            /**
             * Allows control over whether DataTables should use the top (true) unique
             * cell that is found for a single column, or the bottom (false - default).
             * This is useful when using complex headers.
             *  @type boolean
             *  @default false
             *
             *  @dtopt Options
             *  @name DataTable.defaults.orderCellsTop
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderCellsTop": true
		 *      } );
		 *    } );
             */
            "bSortCellsTop": false,


            /**
             * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
             * `sorting\_3` to the columns which are currently being sorted on. This is
             * presented as a feature switch as it can increase processing time (while
             * classes are removed and added) so for large data sets you might want to
             * turn this off.
             *  @type boolean
             *  @default true
             *
             *  @dtopt Features
             *  @name DataTable.defaults.orderClasses
             *
             *  @example
             *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderClasses": false
		 *      } );
		 *    } );
             */
            "bSortClasses": true,


            /**
             * Enable or disable state saving. When enabled HTML5 `localStorage` will be
             * used to save table display information such as pagination information,
             * display length, filtering and sorting. As such when the end user reloads
             * the page the display display will match what thy had previously set up.
             *
             * Due to the use of `localStorage` the default state saving is not supported
             * in IE6 or 7. If state saving is required in those browsers, use
             * `stateSaveCallback` to provide a storage solution such as cookies.
             *  @type boolean
             *  @default false
             *
             *  @dtopt Features
             *  @name DataTable.defaults.stateSave
             *
             *  @example
             *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "stateSave": true
		 *      } );
		 *    } );
             */
            "bStateSave": false,


            /**
             * This function is called when a TR element is created (and all TD child
             * elements have been inserted), or registered if using a DOM source, allowing
             * manipulation of the TR element (adding classes etc).
             *  @type function
             *  @param {node} row "TR" element for the current row
             *  @param {array} data Raw data array for this row
             *  @param {int} dataIndex The index of this row in the internal aoData array
             *
             *  @dtopt Callbacks
             *  @name DataTable.defaults.createdRow
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "createdRow": function( row, data, dataIndex ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" )
		 *          {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
             */
            "fnCreatedRow": null,


            /**
             * This function is called on every 'draw' event, and allows you to
             * dynamically modify any aspect you want about the created DOM.
             *  @type function
             *  @param {object} settings DataTables settings object
             *
             *  @dtopt Callbacks
             *  @name DataTable.defaults.drawCallback
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "drawCallback": function( settings ) {
		 *          alert( 'DataTables has redrawn the table' );
		 *        }
		 *      } );
		 *    } );
             */
            "fnDrawCallback": null,


            /**
             * Identical to fnHeaderCallback() but for the table footer this function
             * allows you to modify the table footer on every 'draw' event.
             *  @type function
             *  @param {node} foot "TR" element for the footer
             *  @param {array} data Full table data (as derived from the original HTML)
             *  @param {int} start Index for the current display starting point in the
             *    display array
             *  @param {int} end Index for the current display ending point in the
             *    display array
             *  @param {array int} display Index array to translate the visual position
             *    to the full data array
             *
             *  @dtopt Callbacks
             *  @name DataTable.defaults.footerCallback
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "footerCallback": function( tfoot, data, start, end, display ) {
		 *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
		 *        }
		 *      } );
		 *    } )
             */
            "fnFooterCallback": null,


            /**
             * When rendering large numbers in the information element for the table
             * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
             * to have a comma separator for the 'thousands' units (e.g. 1 million is
             * rendered as "1,000,000") to help readability for the end user. This
             * function will override the default method DataTables uses.
             *  @type function
             *  @member
             *  @param {int} toFormat number to be formatted
             *  @returns {string} formatted string for DataTables to show the number
             *
             *  @dtopt Callbacks
             *  @name DataTable.defaults.formatNumber
             *
             *  @example
             *    // Format a number using a single quote for the separator (note that
             *    // this can also be done with the language.thousands option)
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "formatNumber": function ( toFormat ) {
		 *          return toFormat.toString().replace(
		 *            /\B(?=(\d{3})+(?!\d))/g, "'"
		 *          );
		 *        };
		 *      } );
		 *    } );
             */
            "fnFormatNumber": function ( toFormat ) {
                return toFormat.toString().replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    this.oLanguage.sThousands
                );
            },


            /**
             * This function is called on every 'draw' event, and allows you to
             * dynamically modify the header row. This can be used to calculate and
             * display useful information about the table.
             *  @type function
             *  @param {node} head "TR" element for the header
             *  @param {array} data Full table data (as derived from the original HTML)
             *  @param {int} start Index for the current display starting point in the
             *    display array
             *  @param {int} end Index for the current display ending point in the
             *    display array
             *  @param {array int} display Index array to translate the visual position
             *    to the full data array
             *
             *  @dtopt Callbacks
             *  @name DataTable.defaults.headerCallback
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fheaderCallback": function( head, data, start, end, display ) {
		 *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
		 *        }
		 *      } );
		 *    } )
             */
            "fnHeaderCallback": null,


            /**
             * The information element can be used to convey information about the current
             * state of the table. Although the internationalisation options presented by
             * DataTables are quite capable of dealing with most customisations, there may
             * be times where you wish to customise the string further. This callback
             * allows you to do exactly that.
             *  @type function
             *  @param {object} oSettings DataTables settings object
             *  @param {int} start Starting position in data for the draw
             *  @param {int} end End position in data for the draw
             *  @param {int} max Total number of rows in the table (regardless of
             *    filtering)
             *  @param {int} total Total number of rows in the data set, after filtering
             *  @param {string} pre The string that DataTables has formatted using it's
             *    own rules
             *  @returns {string} The string to be displayed in the information element.
             *
             *  @dtopt Callbacks
             *  @name DataTable.defaults.infoCallback
             *
             *  @example
             *    $('#example').dataTable( {
		 *      "infoCallback": function( settings, start, end, max, total, pre ) {
		 *        return start +" to "+ end;
		 *      }
		 *    } );
             */
            "fnInfoCallback": null,


            /**
             * Called when the table has been initialised. Normally DataTables will
             * initialise sequentially and there will be no need for this function,
             * however, this does not hold true when using external language information
             * since that is obtained using an async XHR call.
             *  @type function
             *  @param {object} settings DataTables settings object
             *  @param {object} json The JSON object request from the server - only
             *    present if client-side Ajax sourced data is used
             *
             *  @dtopt Callbacks
             *  @name DataTable.defaults.initComplete
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "initComplete": function(settings, json) {
		 *          alert( 'DataTables has finished its initialisation.' );
		 *        }
		 *      } );
		 *    } )
             */
            "fnInitComplete": null,


            /**
             * Called at the very start of each table draw and can be used to cancel the
             * draw by returning false, any other return (including undefined) results in
             * the full draw occurring).
             *  @type function
             *  @param {object} settings DataTables settings object
             *  @returns {boolean} False will cancel the draw, anything else (including no
             *    return) will allow it to complete.
             *
             *  @dtopt Callbacks
             *  @name DataTable.defaults.preDrawCallback
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "preDrawCallback": function( settings ) {
		 *          if ( $('#test').val() == 1 ) {
		 *            return false;
		 *          }
		 *        }
		 *      } );
		 *    } );
             */
            "fnPreDrawCallback": null,


            /**
             * This function allows you to 'post process' each row after it have been
             * generated for each table draw, but before it is rendered on screen. This
             * function might be used for setting the row class name etc.
             *  @type function
             *  @param {node} row "TR" element for the current row
             *  @param {array} data Raw data array for this row
             *  @param {int} displayIndex The display index for the current table draw
             *  @param {int} displayIndexFull The index of the data in the full list of
             *    rows (after filtering)
             *
             *  @dtopt Callbacks
             *  @name DataTable.defaults.rowCallback
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" ) {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
             */
            "fnRowCallback": null,


            /**
             * __Deprecated__ The functionality provided by this parameter has now been
             * superseded by that provided through `ajax`, which should be used instead.
             *
             * This parameter allows you to override the default function which obtains
             * the data from the server so something more suitable for your application.
             * For example you could use POST data, or pull information from a Gears or
             * AIR database.
             *  @type function
             *  @member
             *  @param {string} source HTTP source to obtain the data from (`ajax`)
             *  @param {array} data A key/value pair object containing the data to send
             *    to the server
             *  @param {function} callback to be called on completion of the data get
             *    process that will draw the data on the page.
             *  @param {object} settings DataTables settings object
             *
             *  @dtopt Callbacks
             *  @dtopt Server-side
             *  @name DataTable.defaults.serverData
             *
             *  @deprecated 1.10. Please use `ajax` for this functionality now.
             */
            "fnServerData": null,


            /**
             * __Deprecated__ The functionality provided by this parameter has now been
             * superseded by that provided through `ajax`, which should be used instead.
             *
             *  It is often useful to send extra data to the server when making an Ajax
             * request - for example custom filtering information, and this callback
             * function makes it trivial to send extra information to the server. The
             * passed in parameter is the data set that has been constructed by
             * DataTables, and you can add to this or modify it as you require.
             *  @type function
             *  @param {array} data Data array (array of objects which are name/value
             *    pairs) that has been constructed by DataTables and will be sent to the
             *    server. In the case of Ajax sourced data with server-side processing
             *    this will be an empty array, for server-side processing there will be a
             *    significant number of parameters!
             *  @returns {undefined} Ensure that you modify the data array passed in,
             *    as this is passed by reference.
             *
             *  @dtopt Callbacks
             *  @dtopt Server-side
             *  @name DataTable.defaults.serverParams
             *
             *  @deprecated 1.10. Please use `ajax` for this functionality now.
             */
            "fnServerParams": null,


            /**
             * Load the table state. With this function you can define from where, and how, the
             * state of a table is loaded. By default DataTables will load from `localStorage`
             * but you might wish to use a server-side database or cookies.
             *  @type function
             *  @member
             *  @param {object} settings DataTables settings object
             *  @return {object} The DataTables state object to be loaded
             *
             *  @dtopt Callbacks
             *  @name DataTable.defaults.stateLoadCallback
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadCallback": function (settings) {
		 *          var o;
		 *
		 *          // Send an Ajax request to the server to get the data. Note that
		 *          // this is a synchronous request.
		 *          $.ajax( {
		 *            "url": "/state_load",
		 *            "async": false,
		 *            "dataType": "json",
		 *            "success": function (json) {
		 *              o = json;
		 *            }
		 *          } );
		 *
		 *          return o;
		 *        }
		 *      } );
		 *    } );
             */
            "fnStateLoadCallback": function ( settings ) {
                try {
                    return JSON.parse(
                        (settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
                            'DataTables_'+settings.sInstance+'_'+location.pathname
                        )
                    );
                } catch (e) {}
            },


            /**
             * Callback which allows modification of the saved state prior to loading that state.
             * This callback is called when the table is loading state from the stored data, but
             * prior to the settings object being modified by the saved state. Note that for
             * plug-in authors, you should use the `stateLoadParams` event to load parameters for
             * a plug-in.
             *  @type function
             *  @param {object} settings DataTables settings object
             *  @param {object} data The state object that is to be loaded
             *
             *  @dtopt Callbacks
             *  @name DataTable.defaults.stateLoadParams
             *
             *  @example
             *    // Remove a saved filter, so filtering is never loaded
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
             *
             *  @example
             *    // Disallow state loading by returning false
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          return false;
		 *        }
		 *      } );
		 *    } );
             */
            "fnStateLoadParams": null,


            /**
             * Callback that is called when the state has been loaded from the state saving method
             * and the DataTables settings object has been modified as a result of the loaded state.
             *  @type function
             *  @param {object} settings DataTables settings object
             *  @param {object} data The state object that was loaded
             *
             *  @dtopt Callbacks
             *  @name DataTable.defaults.stateLoaded
             *
             *  @example
             *    // Show an alert with the filtering value that was saved
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoaded": function (settings, data) {
		 *          alert( 'Saved filter was: '+data.oSearch.sSearch );
		 *        }
		 *      } );
		 *    } );
             */
            "fnStateLoaded": null,


            /**
             * Save the table state. This function allows you to define where and how the state
             * information for the table is stored By default DataTables will use `localStorage`
             * but you might wish to use a server-side database or cookies.
             *  @type function
             *  @member
             *  @param {object} settings DataTables settings object
             *  @param {object} data The state object to be saved
             *
             *  @dtopt Callbacks
             *  @name DataTable.defaults.stateSaveCallback
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveCallback": function (settings, data) {
		 *          // Send an Ajax request to the server with the state object
		 *          $.ajax( {
		 *            "url": "/state_save",
		 *            "data": data,
		 *            "dataType": "json",
		 *            "method": "POST"
		 *            "success": function () {}
		 *          } );
		 *        }
		 *      } );
		 *    } );
             */
            "fnStateSaveCallback": function ( settings, data ) {
                try {
                    (settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
                        'DataTables_'+settings.sInstance+'_'+location.pathname,
                        JSON.stringify( data )
                    );
                } catch (e) {}
            },


            /**
             * Callback which allows modification of the state to be saved. Called when the table
             * has changed state a new state save is required. This method allows modification of
             * the state saving object prior to actually doing the save, including addition or
             * other state properties or modification. Note that for plug-in authors, you should
             * use the `stateSaveParams` event to save parameters for a plug-in.
             *  @type function
             *  @param {object} settings DataTables settings object
             *  @param {object} data The state object to be saved
             *
             *  @dtopt Callbacks
             *  @name DataTable.defaults.stateSaveParams
             *
             *  @example
             *    // Remove a saved filter, so filtering is never saved
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
             */
            "fnStateSaveParams": null,


            /**
             * Duration for which the saved state information is considered valid. After this period
             * has elapsed the state will be returned to the default.
             * Value is given in seconds.
             *  @type int
             *  @default 7200 <i>(2 hours)</i>
             *
             *  @dtopt Options
             *  @name DataTable.defaults.stateDuration
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateDuration": 60*60*24; // 1 day
		 *      } );
		 *    } )
             */
            "iStateDuration": 7200,


            /**
             * When enabled DataTables will not make a request to the server for the first
             * page draw - rather it will use the data already on the page (no sorting etc
             * will be applied to it), thus saving on an XHR at load time. `deferLoading`
             * is used to indicate that deferred loading is required, but it is also used
             * to tell DataTables how many records there are in the full table (allowing
             * the information element and pagination to be displayed correctly). In the case
             * where a filtering is applied to the table on initial load, this can be
             * indicated by giving the parameter as an array, where the first element is
             * the number of records available after filtering and the second element is the
             * number of records without filtering (allowing the table information element
             * to be shown correctly).
             *  @type int | array
             *  @default null
             *
             *  @dtopt Options
             *  @name DataTable.defaults.deferLoading
             *
             *  @example
             *    // 57 records available in the table, no filtering applied
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": 57
		 *      } );
		 *    } );
             *
             *  @example
             *    // 57 records after filtering, 100 without filtering (an initial filter applied)
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": [ 57, 100 ],
		 *        "search": {
		 *          "search": "my_filter"
		 *        }
		 *      } );
		 *    } );
             */
            "iDeferLoading": null,


            /**
             * Number of rows to display on a single page when using pagination. If
             * feature enabled (`lengthChange`) then the end user will be able to override
             * this to a custom setting using a pop-up menu.
             *  @type int
             *  @default 10
             *
             *  @dtopt Options
             *  @name DataTable.defaults.pageLength
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pageLength": 50
		 *      } );
		 *    } )
             */
            "iDisplayLength": 10,


            /**
             * Define the starting point for data display when using DataTables with
             * pagination. Note that this parameter is the number of records, rather than
             * the page number, so if you have 10 records per page and want to start on
             * the third page, it should be "20".
             *  @type int
             *  @default 0
             *
             *  @dtopt Options
             *  @name DataTable.defaults.displayStart
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "displayStart": 20
		 *      } );
		 *    } )
             */
            "iDisplayStart": 0,


            /**
             * By default DataTables allows keyboard navigation of the table (sorting, paging,
             * and filtering) by adding a `tabindex` attribute to the required elements. This
             * allows you to tab through the controls and press the enter key to activate them.
             * The tabindex is default 0, meaning that the tab follows the flow of the document.
             * You can overrule this using this parameter if you wish. Use a value of -1 to
             * disable built-in keyboard navigation.
             *  @type int
             *  @default 0
             *
             *  @dtopt Options
             *  @name DataTable.defaults.tabIndex
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "tabIndex": 1
		 *      } );
		 *    } );
             */
            "iTabIndex": 0,


            /**
             * Classes that DataTables assigns to the various components and features
             * that it adds to the HTML table. This allows classes to be configured
             * during initialisation in addition to through the static
             * {@link DataTable.ext.oStdClasses} object).
             *  @namespace
             *  @name DataTable.defaults.classes
             */
            "oClasses": {},


            /**
             * All strings that DataTables uses in the user interface that it creates
             * are defined in this object, allowing you to modified them individually or
             * completely replace them all as required.
             *  @namespace
             *  @name DataTable.defaults.language
             */
            "oLanguage": {
                /**
                 * Strings that are used for WAI-ARIA labels and controls only (these are not
                 * actually visible on the page, but will be read by screenreaders, and thus
                 * must be internationalised as well).
                 *  @namespace
                 *  @name DataTable.defaults.language.aria
                 */
                "oAria": {
                    /**
                     * ARIA label that is added to the table headers when the column may be
                     * sorted ascending by activing the column (click or return when focused).
                     * Note that the column header is prefixed to this string.
                     *  @type string
                     *  @default : activate to sort column ascending
                     *
                     *  @dtopt Language
                     *  @name DataTable.defaults.language.aria.sortAscending
                     *
                     *  @example
                     *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortAscending": " - click/return to sort ascending"
				 *          }
				 *        }
				 *      } );
				 *    } );
                     */
                    "sSortAscending": ": activate to sort column ascending",

                    /**
                     * ARIA label that is added to the table headers when the column may be
                     * sorted descending by activing the column (click or return when focused).
                     * Note that the column header is prefixed to this string.
                     *  @type string
                     *  @default : activate to sort column ascending
                     *
                     *  @dtopt Language
                     *  @name DataTable.defaults.language.aria.sortDescending
                     *
                     *  @example
                     *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortDescending": " - click/return to sort descending"
				 *          }
				 *        }
				 *      } );
				 *    } );
                     */
                    "sSortDescending": ": activate to sort column descending"
                },

                /**
                 * Pagination string used by DataTables for the built-in pagination
                 * control types.
                 *  @namespace
                 *  @name DataTable.defaults.language.paginate
                 */
                "oPaginate": {
                    /**
                     * Text to use when using the 'full_numbers' type of pagination for the
                     * button to take the user to the first page.
                     *  @type string
                     *  @default First
                     *
                     *  @dtopt Language
                     *  @name DataTable.defaults.language.paginate.first
                     *
                     *  @example
                     *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "first": "First page"
				 *          }
				 *        }
				 *      } );
				 *    } );
                     */
                    "sFirst": "First",


                    /**
                     * Text to use when using the 'full_numbers' type of pagination for the
                     * button to take the user to the last page.
                     *  @type string
                     *  @default Last
                     *
                     *  @dtopt Language
                     *  @name DataTable.defaults.language.paginate.last
                     *
                     *  @example
                     *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "last": "Last page"
				 *          }
				 *        }
				 *      } );
				 *    } );
                     */
                    "sLast": "Last",


                    /**
                     * Text to use for the 'next' pagination button (to take the user to the
                     * next page).
                     *  @type string
                     *  @default Next
                     *
                     *  @dtopt Language
                     *  @name DataTable.defaults.language.paginate.next
                     *
                     *  @example
                     *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "next": "Next page"
				 *          }
				 *        }
				 *      } );
				 *    } );
                     */
                    "sNext": "Next",


                    /**
                     * Text to use for the 'previous' pagination button (to take the user to
                     * the previous page).
                     *  @type string
                     *  @default Previous
                     *
                     *  @dtopt Language
                     *  @name DataTable.defaults.language.paginate.previous
                     *
                     *  @example
                     *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "previous": "Previous page"
				 *          }
				 *        }
				 *      } );
				 *    } );
                     */
                    "sPrevious": "Previous"
                },

                /**
                 * This string is shown in preference to `zeroRecords` when the table is
                 * empty of data (regardless of filtering). Note that this is an optional
                 * parameter - if it is not given, the value of `zeroRecords` will be used
                 * instead (either the default or given value).
                 *  @type string
                 *  @default No data available in table
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.emptyTable
                 *
                 *  @example
                 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "emptyTable": "No data available in table"
			 *        }
			 *      } );
			 *    } );
                 */
                "sEmptyTable": "No data available in table",


                /**
                 * This string gives information to the end user about the information
                 * that is current on display on the page. The following tokens can be
                 * used in the string and will be dynamically replaced as the table
                 * display updates. This tokens can be placed anywhere in the string, or
                 * removed as needed by the language requires:
                 *
                 * * `\_START\_` - Display index of the first record on the current page
                 * * `\_END\_` - Display index of the last record on the current page
                 * * `\_TOTAL\_` - Number of records in the table after filtering
                 * * `\_MAX\_` - Number of records in the table without filtering
                 * * `\_PAGE\_` - Current page number
                 * * `\_PAGES\_` - Total number of pages of data in the table
                 *
                 *  @type string
                 *  @default Showing _START_ to _END_ of _TOTAL_ entries
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.info
                 *
                 *  @example
                 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "info": "Showing page _PAGE_ of _PAGES_"
			 *        }
			 *      } );
			 *    } );
                 */
                "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",


                /**
                 * Display information string for when the table is empty. Typically the
                 * format of this string should match `info`.
                 *  @type string
                 *  @default Showing 0 to 0 of 0 entries
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.infoEmpty
                 *
                 *  @example
                 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoEmpty": "No entries to show"
			 *        }
			 *      } );
			 *    } );
                 */
                "sInfoEmpty": "Showing 0 to 0 of 0 entries",


                /**
                 * When a user filters the information in a table, this string is appended
                 * to the information (`info`) to give an idea of how strong the filtering
                 * is. The variable _MAX_ is dynamically updated.
                 *  @type string
                 *  @default (filtered from _MAX_ total entries)
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.infoFiltered
                 *
                 *  @example
                 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoFiltered": " - filtering from _MAX_ records"
			 *        }
			 *      } );
			 *    } );
                 */
                "sInfoFiltered": "(filtered from _MAX_ total entries)",


                /**
                 * If can be useful to append extra information to the info string at times,
                 * and this variable does exactly that. This information will be appended to
                 * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
                 * being used) at all times.
                 *  @type string
                 *  @default <i>Empty string</i>
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.infoPostFix
                 *
                 *  @example
                 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoPostFix": "All records shown are derived from real information."
			 *        }
			 *      } );
			 *    } );
                 */
                "sInfoPostFix": "",


                /**
                 * This decimal place operator is a little different from the other
                 * language options since DataTables doesn't output floating point
                 * numbers, so it won't ever use this for display of a number. Rather,
                 * what this parameter does is modify the sort methods of the table so
                 * that numbers which are in a format which has a character other than
                 * a period (`.`) as a decimal place will be sorted numerically.
                 *
                 * Note that numbers with different decimal places cannot be shown in
                 * the same table and still be sortable, the table must be consistent.
                 * However, multiple different tables on the page can use different
                 * decimal place characters.
                 *  @type string
                 *  @default
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.decimal
                 *
                 *  @example
                 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "decimal": ","
			 *          "thousands": "."
			 *        }
			 *      } );
			 *    } );
                 */
                "sDecimal": "",


                /**
                 * DataTables has a build in number formatter (`formatNumber`) which is
                 * used to format large numbers that are used in the table information.
                 * By default a comma is used, but this can be trivially changed to any
                 * character you wish with this parameter.
                 *  @type string
                 *  @default ,
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.thousands
                 *
                 *  @example
                 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "thousands": "'"
			 *        }
			 *      } );
			 *    } );
                 */
                "sThousands": ",",


                /**
                 * Detail the action that will be taken when the drop down menu for the
                 * pagination length option is changed. The '_MENU_' variable is replaced
                 * with a default select list of 10, 25, 50 and 100, and can be replaced
                 * with a custom select box if required.
                 *  @type string
                 *  @default Show _MENU_ entries
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.lengthMenu
                 *
                 *  @example
                 *    // Language change only
                 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": "Display _MENU_ records"
			 *        }
			 *      } );
			 *    } );
                 *
                 *  @example
                 *    // Language and options change
                 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": 'Display <select>'+
			 *            '<option value="10">10</option>'+
			 *            '<option value="20">20</option>'+
			 *            '<option value="30">30</option>'+
			 *            '<option value="40">40</option>'+
			 *            '<option value="50">50</option>'+
			 *            '<option value="-1">All</option>'+
			 *            '</select> records'
			 *        }
			 *      } );
			 *    } );
                 */
                "sLengthMenu": "Show _MENU_ entries",


                /**
                 * When using Ajax sourced data and during the first draw when DataTables is
                 * gathering the data, this message is shown in an empty row in the table to
                 * indicate to the end user the the data is being loaded. Note that this
                 * parameter is not used when loading data by server-side processing, just
                 * Ajax sourced data with client-side processing.
                 *  @type string
                 *  @default Loading...
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.loadingRecords
                 *
                 *  @example
                 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "loadingRecords": "Please wait - loading..."
			 *        }
			 *      } );
			 *    } );
                 */
                "sLoadingRecords": "Loading...",


                /**
                 * Text which is displayed when the table is processing a user action
                 * (usually a sort command or similar).
                 *  @type string
                 *  @default Processing...
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.processing
                 *
                 *  @example
                 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "processing": "DataTables is currently busy"
			 *        }
			 *      } );
			 *    } );
                 */
                "sProcessing": "Processing...",


                /**
                 * Details the actions that will be taken when the user types into the
                 * filtering input text box. The variable "_INPUT_", if used in the string,
                 * is replaced with the HTML text box for the filtering input allowing
                 * control over where it appears in the string. If "_INPUT_" is not given
                 * then the input box is appended to the string automatically.
                 *  @type string
                 *  @default Search:
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.search
                 *
                 *  @example
                 *    // Input text box will be appended at the end automatically
                 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Filter records:"
			 *        }
			 *      } );
			 *    } );
                 *
                 *  @example
                 *    // Specify where the filter should appear
                 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Apply filter _INPUT_ to table"
			 *        }
			 *      } );
			 *    } );
                 */
                "sSearch": "Search:",


                /**
                 * All of the language information can be stored in a file on the
                 * server-side, which DataTables will look up if this parameter is passed.
                 * It must store the URL of the language file, which is in a JSON format,
                 * and the object has the same properties as the oLanguage object in the
                 * initialiser object (i.e. the above parameters). Please refer to one of
                 * the example language files to see how this works in action.
                 *  @type string
                 *  @default <i>Empty string - i.e. disabled</i>
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.url
                 *
                 *  @example
                 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "url": "http://www.sprymedia.co.uk/dataTables/lang.txt"
			 *        }
			 *      } );
			 *    } );
                 */
                "sUrl": "",


                /**
                 * Text shown inside the table records when the is no information to be
                 * displayed after filtering. `emptyTable` is shown when there is simply no
                 * information in the table at all (regardless of filtering).
                 *  @type string
                 *  @default No matching records found
                 *
                 *  @dtopt Language
                 *  @name DataTable.defaults.language.zeroRecords
                 *
                 *  @example
                 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "zeroRecords": "No records to display"
			 *        }
			 *      } );
			 *    } );
                 */
                "sZeroRecords": "No matching records found"
            },


            /**
             * This parameter allows you to have define the global filtering state at
             * initialisation time. As an object the `search` parameter must be
             * defined, but all other parameters are optional. When `regex` is true,
             * the search string will be treated as a regular expression, when false
             * (default) it will be treated as a straight string. When `smart`
             * DataTables will use it's smart filtering methods (to word match at
             * any point in the data), when false this will not be done.
             *  @namespace
             *  @extends DataTable.models.oSearch
             *
             *  @dtopt Options
             *  @name DataTable.defaults.search
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "search": {"search": "Initial search"}
		 *      } );
		 *    } )
             */
            "oSearch": $.extend( {}, DataTable.models.oSearch ),


            /**
             * __Deprecated__ The functionality provided by this parameter has now been
             * superseded by that provided through `ajax`, which should be used instead.
             *
             * By default DataTables will look for the property `data` (or `aaData` for
             * compatibility with DataTables 1.9-) when obtaining data from an Ajax
             * source or for server-side processing - this parameter allows that
             * property to be changed. You can use Javascript dotted object notation to
             * get a data source for multiple levels of nesting.
             *  @type string
             *  @default data
             *
             *  @dtopt Options
             *  @dtopt Server-side
             *  @name DataTable.defaults.ajaxDataProp
             *
             *  @deprecated 1.10. Please use `ajax` for this functionality now.
             */
            "sAjaxDataProp": "data",


            /**
             * __Deprecated__ The functionality provided by this parameter has now been
             * superseded by that provided through `ajax`, which should be used instead.
             *
             * You can instruct DataTables to load data from an external
             * source using this parameter (use aData if you want to pass data in you
             * already have). Simply provide a url a JSON object can be obtained from.
             *  @type string
             *  @default null
             *
             *  @dtopt Options
             *  @dtopt Server-side
             *  @name DataTable.defaults.ajaxSource
             *
             *  @deprecated 1.10. Please use `ajax` for this functionality now.
             */
            "sAjaxSource": null,


            /**
             * This initialisation variable allows you to specify exactly where in the
             * DOM you want DataTables to inject the various controls it adds to the page
             * (for example you might want the pagination controls at the top of the
             * table). DIV elements (with or without a custom class) can also be added to
             * aid styling. The follow syntax is used:
             *   <ul>
             *     <li>The following options are allowed:
             *       <ul>
             *         <li>'l' - Length changing</li>
             *         <li>'f' - Filtering input</li>
             *         <li>'t' - The table!</li>
             *         <li>'i' - Information</li>
             *         <li>'p' - Pagination</li>
             *         <li>'r' - pRocessing</li>
             *       </ul>
             *     </li>
             *     <li>The following constants are allowed:
             *       <ul>
             *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
             *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
             *       </ul>
             *     </li>
             *     <li>The following syntax is expected:
             *       <ul>
             *         <li>'&lt;' and '&gt;' - div elements</li>
             *         <li>'&lt;"class" and '&gt;' - div with a class</li>
             *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
             *       </ul>
             *     </li>
             *     <li>Examples:
             *       <ul>
             *         <li>'&lt;"wrapper"flipt&gt;'</li>
             *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
             *       </ul>
             *     </li>
             *   </ul>
             *  @type string
             *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
             *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
             *
             *  @dtopt Options
             *  @name DataTable.defaults.dom
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
		 *      } );
		 *    } );
             */
            "sDom": "lfrtip",


            /**
             * DataTables features four different built-in options for the buttons to
             * display for pagination control:
             *
             * * `simple` - 'Previous' and 'Next' buttons only
             * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
             * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
             * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus
             *   page numbers
             *
             * Further methods can be added using {@link DataTable.ext.oPagination}.
             *  @type string
             *  @default simple_numbers
             *
             *  @dtopt Options
             *  @name DataTable.defaults.pagingType
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pagingType": "full_numbers"
		 *      } );
		 *    } )
             */
            "sPaginationType": "simple_numbers",


            /**
             * Enable horizontal scrolling. When a table is too wide to fit into a
             * certain layout, or you have a large number of columns in the table, you
             * can enable x-scrolling to show the table in a viewport, which can be
             * scrolled. This property can be `true` which will allow the table to
             * scroll horizontally when needed, or any CSS unit, or a number (in which
             * case it will be treated as a pixel measurement). Setting as simply `true`
             * is recommended.
             *  @type boolean|string
             *  @default <i>blank string - i.e. disabled</i>
             *
             *  @dtopt Features
             *  @name DataTable.defaults.scrollX
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": true,
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
             */
            "sScrollX": "",


            /**
             * This property can be used to force a DataTable to use more width than it
             * might otherwise do when x-scrolling is enabled. For example if you have a
             * table which requires to be well spaced, this parameter is useful for
             * "over-sizing" the table, and thus forcing scrolling. This property can by
             * any CSS unit, or a number (in which case it will be treated as a pixel
             * measurement).
             *  @type string
             *  @default <i>blank string - i.e. disabled</i>
             *
             *  @dtopt Options
             *  @name DataTable.defaults.scrollXInner
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": "100%",
		 *        "scrollXInner": "110%"
		 *      } );
		 *    } );
             */
            "sScrollXInner": "",


            /**
             * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
             * to the given height, and enable scrolling for any data which overflows the
             * current viewport. This can be used as an alternative to paging to display
             * a lot of data in a small area (although paging and scrolling can both be
             * enabled at the same time). This property can be any CSS unit, or a number
             * (in which case it will be treated as a pixel measurement).
             *  @type string
             *  @default <i>blank string - i.e. disabled</i>
             *
             *  @dtopt Features
             *  @name DataTable.defaults.scrollY
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false
		 *      } );
		 *    } );
             */
            "sScrollY": "",


            /**
             * __Deprecated__ The functionality provided by this parameter has now been
             * superseded by that provided through `ajax`, which should be used instead.
             *
             * Set the HTTP method that is used to make the Ajax call for server-side
             * processing or Ajax sourced data.
             *  @type string
             *  @default GET
             *
             *  @dtopt Options
             *  @dtopt Server-side
             *  @name DataTable.defaults.serverMethod
             *
             *  @deprecated 1.10. Please use `ajax` for this functionality now.
             */
            "sServerMethod": "GET",


            /**
             * DataTables makes use of renderers when displaying HTML elements for
             * a table. These renderers can be added or modified by plug-ins to
             * generate suitable mark-up for a site. For example the Bootstrap
             * integration plug-in for DataTables uses a paging button renderer to
             * display pagination buttons in the mark-up required by Bootstrap.
             *
             * For further information about the renderers available see
             * DataTable.ext.renderer
             *  @type string|object
             *  @default null
             *
             *  @name DataTable.defaults.renderer
             *
             */
            "renderer": null
        };

        _fnHungarianMap( DataTable.defaults );



        /*
         * Developer note - See note in model.defaults.js about the use of Hungarian
         * notation and camel case.
         */

        /**
         * Column options that can be given to DataTables at initialisation time.
         *  @namespace
         */
        DataTable.defaults.column = {
            /**
             * Define which column(s) an order will occur on for this column. This
             * allows a column's ordering to take multiple columns into account when
             * doing a sort or use the data from a different column. For example first
             * name / last name columns make sense to do a multi-column sort over the
             * two columns.
             *  @type array|int
             *  @default null <i>Takes the value of the column index automatically</i>
             *
             *  @name DataTable.defaults.column.orderData
             *  @dtopt Columns
             *
             *  @example
             *    // Using `columnDefs`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
		 *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
		 *          { "orderData": 2, "targets": [ 2 ] }
		 *        ]
		 *      } );
		 *    } );
             *
             *  @example
             *    // Using `columns`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderData": [ 0, 1 ] },
		 *          { "orderData": [ 1, 0 ] },
		 *          { "orderData": 2 },
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
             */
            "aDataSort": null,
            "iDataSort": -1,


            /**
             * You can control the default ordering direction, and even alter the
             * behaviour of the sort handler (i.e. only allow ascending ordering etc)
             * using this parameter.
             *  @type array
             *  @default [ 'asc', 'desc' ]
             *
             *  @name DataTable.defaults.column.orderSequence
             *  @dtopt Columns
             *
             *  @example
             *    // Using `columnDefs`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
		 *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
		 *        ]
		 *      } );
		 *    } );
             *
             *  @example
             *    // Using `columns`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          { "orderSequence": [ "asc" ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ] },
		 *          { "orderSequence": [ "desc" ] },
		 *          null
		 *        ]
		 *      } );
		 *    } );
             */
            "asSorting": [ 'asc', 'desc' ],


            /**
             * Enable or disable filtering on the data in this column.
             *  @type boolean
             *  @default true
             *
             *  @name DataTable.defaults.column.searchable
             *  @dtopt Columns
             *
             *  @example
             *    // Using `columnDefs`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "searchable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
             *
             *  @example
             *    // Using `columns`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "searchable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
             */
            "bSearchable": true,


            /**
             * Enable or disable ordering on this column.
             *  @type boolean
             *  @default true
             *
             *  @name DataTable.defaults.column.orderable
             *  @dtopt Columns
             *
             *  @example
             *    // Using `columnDefs`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
             *
             *  @example
             *    // Using `columns`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
             */
            "bSortable": true,


            /**
             * Enable or disable the display of this column.
             *  @type boolean
             *  @default true
             *
             *  @name DataTable.defaults.column.visible
             *  @dtopt Columns
             *
             *  @example
             *    // Using `columnDefs`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "visible": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
             *
             *  @example
             *    // Using `columns`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "visible": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
             */
            "bVisible": true,


            /**
             * Developer definable function that is called whenever a cell is created (Ajax source,
             * etc) or processed for input (DOM source). This can be used as a compliment to mRender
             * allowing you to modify the DOM element (add background colour for example) when the
             * element is available.
             *  @type function
             *  @param {element} td The TD node that has been created
             *  @param {*} cellData The Data for the cell
             *  @param {array|object} rowData The data for the whole row
             *  @param {int} row The row index for the aoData data store
             *  @param {int} col The column index for aoColumns
             *
             *  @name DataTable.defaults.column.createdCell
             *  @dtopt Columns
             *
             *  @example
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [3],
		 *          "createdCell": function (td, cellData, rowData, row, col) {
		 *            if ( cellData == "1.7" ) {
		 *              $(td).css('color', 'blue')
		 *            }
		 *          }
		 *        } ]
		 *      });
		 *    } );
             */
            "fnCreatedCell": null,


            /**
             * This parameter has been replaced by `data` in DataTables to ensure naming
             * consistency. `dataProp` can still be used, as there is backwards
             * compatibility in DataTables for this option, but it is strongly
             * recommended that you use `data` in preference to `dataProp`.
             *  @name DataTable.defaults.column.dataProp
             */


            /**
             * This property can be used to read data from any data source property,
             * including deeply nested objects / properties. `data` can be given in a
             * number of different ways which effect its behaviour:
             *
             * * `integer` - treated as an array index for the data source. This is the
             *   default that DataTables uses (incrementally increased for each column).
             * * `string` - read an object property from the data source. There are
             *   three 'special' options that can be used in the string to alter how
             *   DataTables reads the data from the source object:
             *    * `.` - Dotted Javascript notation. Just as you use a `.` in
             *      Javascript to read from nested objects, so to can the options
             *      specified in `data`. For example: `browser.version` or
             *      `browser.name`. If your object parameter name contains a period, use
             *      `\\` to escape it - i.e. `first\\.name`.
             *    * `[]` - Array notation. DataTables can automatically combine data
             *      from and array source, joining the data with the characters provided
             *      between the two brackets. For example: `name[, ]` would provide a
             *      comma-space separated list from the source array. If no characters
             *      are provided between the brackets, the original array source is
             *      returned.
             *    * `()` - Function notation. Adding `()` to the end of a parameter will
             *      execute a function of the name given. For example: `browser()` for a
             *      simple function on the data source, `browser.version()` for a
             *      function in a nested property or even `browser().version` to get an
             *      object property if the function called returns an object. Note that
             *      function notation is recommended for use in `render` rather than
             *      `data` as it is much simpler to use as a renderer.
             * * `null` - use the original data source for the row rather than plucking
             *   data directly from it. This action has effects on two other
             *   initialisation options:
             *    * `defaultContent` - When null is given as the `data` option and
             *      `defaultContent` is specified for the column, the value defined by
             *      `defaultContent` will be used for the cell.
             *    * `render` - When null is used for the `data` option and the `render`
             *      option is specified for the column, the whole data source for the
             *      row is used for the renderer.
             * * `function` - the function given will be executed whenever DataTables
             *   needs to set or get the data for a cell in the column. The function
             *   takes three parameters:
             *    * Parameters:
             *      * `{array|object}` The data source for the row
             *      * `{string}` The type call data requested - this will be 'set' when
             *        setting data or 'filter', 'display', 'type', 'sort' or undefined
             *        when gathering data. Note that when `undefined` is given for the
             *        type DataTables expects to get the raw data for the object back<
             *      * `{*}` Data to set when the second parameter is 'set'.
             *    * Return:
             *      * The return value from the function is not required when 'set' is
             *        the type of call, but otherwise the return is what will be used
             *        for the data requested.
             *
             * Note that `data` is a getter and setter option. If you just require
             * formatting of data for output, you will likely want to use `render` which
             * is simply a getter and thus simpler to use.
             *
             * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
             * name change reflects the flexibility of this property and is consistent
             * with the naming of mRender. If 'mDataProp' is given, then it will still
             * be used by DataTables, as it automatically maps the old name to the new
             * if required.
             *
             *  @type string|int|function|null
             *  @default null <i>Use automatically calculated column index</i>
             *
             *  @name DataTable.defaults.column.data
             *  @dtopt Columns
             *
             *  @example
             *    // Read table data from objects
             *    // JSON structure for each row:
             *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {value},
		 *    //      "version": {value},
		 *    //      "grade": {value}
		 *    //   }
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/objects.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform" },
		 *          { "data": "version" },
		 *          { "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
             *
             *  @example
             *    // Read information from deeply nested objects
             *    // JSON structure for each row:
             *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {
		 *    //         "inner": {value}
		 *    //      },
		 *    //      "details": [
		 *    //         {value}, {value}
		 *    //      ]
		 *    //   }
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform.inner" },
		 *          { "data": "platform.details.0" },
		 *          { "data": "platform.details.1" }
		 *        ]
		 *      } );
		 *    } );
             *
             *  @example
             *    // Using `data` as a function to provide different information for
             *    // sorting, filtering and display. In this case, currency (price)
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": function ( source, type, val ) {
		 *            if (type === 'set') {
		 *              source.price = val;
		 *              // Store the computed dislay and filter values for efficiency
		 *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
		 *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
		 *              return;
		 *            }
		 *            else if (type === 'display') {
		 *              return source.price_display;
		 *            }
		 *            else if (type === 'filter') {
		 *              return source.price_filter;
		 *            }
		 *            // 'sort', 'type' and undefined all just use the integer
		 *            return source.price;
		 *          }
		 *        } ]
		 *      } );
		 *    } );
             *
             *  @example
             *    // Using default content
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null,
		 *          "defaultContent": "Click to edit"
		 *        } ]
		 *      } );
		 *    } );
             *
             *  @example
             *    // Using array notation - outputting a list from an array
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "name[, ]"
		 *        } ]
		 *      } );
		 *    } );
             *
             */
            "mData": null,


            /**
             * This property is the rendering partner to `data` and it is suggested that
             * when you want to manipulate data for display (including filtering,
             * sorting etc) without altering the underlying data for the table, use this
             * property. `render` can be considered to be the the read only companion to
             * `data` which is read / write (then as such more complex). Like `data`
             * this option can be given in a number of different ways to effect its
             * behaviour:
             *
             * * `integer` - treated as an array index for the data source. This is the
             *   default that DataTables uses (incrementally increased for each column).
             * * `string` - read an object property from the data source. There are
             *   three 'special' options that can be used in the string to alter how
             *   DataTables reads the data from the source object:
             *    * `.` - Dotted Javascript notation. Just as you use a `.` in
             *      Javascript to read from nested objects, so to can the options
             *      specified in `data`. For example: `browser.version` or
             *      `browser.name`. If your object parameter name contains a period, use
             *      `\\` to escape it - i.e. `first\\.name`.
             *    * `[]` - Array notation. DataTables can automatically combine data
             *      from and array source, joining the data with the characters provided
             *      between the two brackets. For example: `name[, ]` would provide a
             *      comma-space separated list from the source array. If no characters
             *      are provided between the brackets, the original array source is
             *      returned.
             *    * `()` - Function notation. Adding `()` to the end of a parameter will
             *      execute a function of the name given. For example: `browser()` for a
             *      simple function on the data source, `browser.version()` for a
             *      function in a nested property or even `browser().version` to get an
             *      object property if the function called returns an object.
             * * `object` - use different data for the different data types requested by
             *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
             *   of the object is the data type the property refers to and the value can
             *   defined using an integer, string or function using the same rules as
             *   `render` normally does. Note that an `_` option _must_ be specified.
             *   This is the default value to use if you haven't specified a value for
             *   the data type requested by DataTables.
             * * `function` - the function given will be executed whenever DataTables
             *   needs to set or get the data for a cell in the column. The function
             *   takes three parameters:
             *    * Parameters:
             *      * {array|object} The data source for the row (based on `data`)
             *      * {string} The type call data requested - this will be 'filter',
             *        'display', 'type' or 'sort'.
             *      * {array|object} The full data source for the row (not based on
             *        `data`)
             *    * Return:
             *      * The return value from the function is what will be used for the
             *        data requested.
             *
             *  @type string|int|function|object|null
             *  @default null Use the data source value.
             *
             *  @name DataTable.defaults.column.render
             *  @dtopt Columns
             *
             *  @example
             *    // Create a comma separated list from an array of objects
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          {
		 *            "data": "platform",
		 *            "render": "[, ].name"
		 *          }
		 *        ]
		 *      } );
		 *    } );
             *
             *  @example
             *    // Execute a function to obtain data
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": "browserName()"
		 *        } ]
		 *      } );
		 *    } );
             *
             *  @example
             *    // As an object, extracting different data for the different types
             *    // This would be used with a data source such as:
             *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
             *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
             *    // (which has both forms) is used for filtering for if a user inputs either format, while
             *    // the formatted phone number is the one that is shown in the table.
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": {
		 *            "_": "phone",
		 *            "filter": "phone_filter",
		 *            "display": "phone_display"
		 *          }
		 *        } ]
		 *      } );
		 *    } );
             *
             *  @example
             *    // Use as a function to create a link from the data source
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "download_link",
		 *          "render": function ( data, type, full ) {
		 *            return '<a href="'+data+'">Download</a>';
		 *          }
		 *        } ]
		 *      } );
		 *    } );
             */
            "mRender": null,


            /**
             * Change the cell type created for the column - either TD cells or TH cells. This
             * can be useful as TH cells have semantic meaning in the table body, allowing them
             * to act as a header for a row (you may wish to add scope='row' to the TH elements).
             *  @type string
             *  @default td
             *
             *  @name DataTable.defaults.column.cellType
             *  @dtopt Columns
             *
             *  @example
             *    // Make the first column use TH cells
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "cellType": "th"
		 *        } ]
		 *      } );
		 *    } );
             */
            "sCellType": "td",


            /**
             * Class to give to each cell in this column.
             *  @type string
             *  @default <i>Empty string</i>
             *
             *  @name DataTable.defaults.column.class
             *  @dtopt Columns
             *
             *  @example
             *    // Using `columnDefs`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "class": "my_class", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
             *
             *  @example
             *    // Using `columns`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "class": "my_class" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
             */
            "sClass": "",

            /**
             * When DataTables calculates the column widths to assign to each column,
             * it finds the longest string in each column and then constructs a
             * temporary table and reads the widths from that. The problem with this
             * is that "mmm" is much wider then "iiii", but the latter is a longer
             * string - thus the calculation can go wrong (doing it properly and putting
             * it into an DOM object and measuring that is horribly(!) slow). Thus as
             * a "work around" we provide this option. It will append its value to the
             * text that is found to be the longest string for the column - i.e. padding.
             * Generally you shouldn't need this!
             *  @type string
             *  @default <i>Empty string<i>
             *
             *  @name DataTable.defaults.column.contentPadding
             *  @dtopt Columns
             *
             *  @example
             *    // Using `columns`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "contentPadding": "mmm"
		 *          }
		 *        ]
		 *      } );
		 *    } );
             */
            "sContentPadding": "",


            /**
             * Allows a default value to be given for a column's data, and will be used
             * whenever a null data source is encountered (this can be because `data`
             * is set to null, or because the data source itself is null).
             *  @type string
             *  @default null
             *
             *  @name DataTable.defaults.column.defaultContent
             *  @dtopt Columns
             *
             *  @example
             *    // Using `columnDefs`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit",
		 *            "targets": [ -1 ]
		 *          }
		 *        ]
		 *      } );
		 *    } );
             *
             *  @example
             *    // Using `columns`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit"
		 *          }
		 *        ]
		 *      } );
		 *    } );
             */
            "sDefaultContent": null,


            /**
             * This parameter is only used in DataTables' server-side processing. It can
             * be exceptionally useful to know what columns are being displayed on the
             * client side, and to map these to database fields. When defined, the names
             * also allow DataTables to reorder information from the server if it comes
             * back in an unexpected order (i.e. if you switch your columns around on the
             * client-side, your server-side code does not also need updating).
             *  @type string
             *  @default <i>Empty string</i>
             *
             *  @name DataTable.defaults.column.name
             *  @dtopt Columns
             *
             *  @example
             *    // Using `columnDefs`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "name": "engine", "targets": [ 0 ] },
		 *          { "name": "browser", "targets": [ 1 ] },
		 *          { "name": "platform", "targets": [ 2 ] },
		 *          { "name": "version", "targets": [ 3 ] },
		 *          { "name": "grade", "targets": [ 4 ] }
		 *        ]
		 *      } );
		 *    } );
             *
             *  @example
             *    // Using `columns`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "name": "engine" },
		 *          { "name": "browser" },
		 *          { "name": "platform" },
		 *          { "name": "version" },
		 *          { "name": "grade" }
		 *        ]
		 *      } );
		 *    } );
             */
            "sName": "",


            /**
             * Defines a data source type for the ordering which can be used to read
             * real-time information from the table (updating the internally cached
             * version) prior to ordering. This allows ordering to occur on user
             * editable elements such as form inputs.
             *  @type string
             *  @default std
             *
             *  @name DataTable.defaults.column.orderDataType
             *  @dtopt Columns
             *
             *  @example
             *    // Using `columnDefs`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
		 *          { "type": "numeric", "targets": [ 3 ] },
		 *          { "orderDataType": "dom-select", "targets": [ 4 ] },
		 *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
		 *        ]
		 *      } );
		 *    } );
             *
             *  @example
             *    // Using `columns`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          { "orderDataType": "dom-text" },
		 *          { "orderDataType": "dom-text", "type": "numeric" },
		 *          { "orderDataType": "dom-select" },
		 *          { "orderDataType": "dom-checkbox" }
		 *        ]
		 *      } );
		 *    } );
             */
            "sSortDataType": "std",


            /**
             * The title of this column.
             *  @type string
             *  @default null <i>Derived from the 'TH' value for this column in the
             *    original HTML table.</i>
             *
             *  @name DataTable.defaults.column.title
             *  @dtopt Columns
             *
             *  @example
             *    // Using `columnDefs`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "title": "My column title", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
             *
             *  @example
             *    // Using `columns`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "title": "My column title" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
             */
            "sTitle": null,


            /**
             * The type allows you to specify how the data for this column will be
             * ordered. Four types (string, numeric, date and html (which will strip
             * HTML tags before ordering)) are currently available. Note that only date
             * formats understood by Javascript's Date() object will be accepted as type
             * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
             * 'numeric', 'date' or 'html' (by default). Further types can be adding
             * through plug-ins.
             *  @type string
             *  @default null <i>Auto-detected from raw data</i>
             *
             *  @name DataTable.defaults.column.type
             *  @dtopt Columns
             *
             *  @example
             *    // Using `columnDefs`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "type": "html", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
             *
             *  @example
             *    // Using `columns`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "type": "html" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
             */
            "sType": null,


            /**
             * Defining the width of the column, this parameter may take any CSS value
             * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
             * been given a specific width through this interface ensuring that the table
             * remains readable.
             *  @type string
             *  @default null <i>Automatic</i>
             *
             *  @name DataTable.defaults.column.width
             *  @dtopt Columns
             *
             *  @example
             *    // Using `columnDefs`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "width": "20%", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
             *
             *  @example
             *    // Using `columns`
             *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "width": "20%" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
             */
            "sWidth": null
        };

        _fnHungarianMap( DataTable.defaults.column );



        /**
         * DataTables settings object - this holds all the information needed for a
         * given table, including configuration, data and current application of the
         * table options. DataTables does not have a single instance for each DataTable
         * with the settings attached to that instance, but rather instances of the
         * DataTable "class" are created on-the-fly as needed (typically by a
         * $().dataTable() call) and the settings object is then applied to that
         * instance.
         *
         * Note that this object is related to {@link DataTable.defaults} but this
         * one is the internal data store for DataTables's cache of columns. It should
         * NOT be manipulated outside of DataTables. Any configuration should be done
         * through the initialisation options.
         *  @namespace
         *  @todo Really should attach the settings object to individual instances so we
         *    don't need to create new instances on each $().dataTable() call (if the
         *    table already exists). It would also save passing oSettings around and
         *    into every single function. However, this is a very significant
         *    architecture change for DataTables and will almost certainly break
         *    backwards compatibility with older installations. This is something that
         *    will be done in 2.0.
         */
        DataTable.models.oSettings = {
            /**
             * Primary features of DataTables and their enablement state.
             *  @namespace
             */
            "oFeatures": {

                /**
                 * Flag to say if DataTables should automatically try to calculate the
                 * optimum table and columns widths (true) or not (false).
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bAutoWidth": null,

                /**
                 * Delay the creation of TR and TD elements until they are actually
                 * needed by a driven page draw. This can give a significant speed
                 * increase for Ajax source and Javascript source data, but makes no
                 * difference at all fro DOM and server-side processing tables.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bDeferRender": null,

                /**
                 * Enable filtering on the table or not. Note that if this is disabled
                 * then there is no filtering at all on the table, including fnFilter.
                 * To just remove the filtering input use sDom and remove the 'f' option.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bFilter": null,

                /**
                 * Table information element (the 'Showing x of y records' div) enable
                 * flag.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bInfo": null,

                /**
                 * Present a user control allowing the end user to change the page size
                 * when pagination is enabled.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bLengthChange": null,

                /**
                 * Pagination enabled or not. Note that if this is disabled then length
                 * changing must also be disabled.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bPaginate": null,

                /**
                 * Processing indicator enable flag whenever DataTables is enacting a
                 * user request - typically an Ajax request for server-side processing.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bProcessing": null,

                /**
                 * Server-side processing enabled flag - when enabled DataTables will
                 * get all data from the server for every draw - there is no filtering,
                 * sorting or paging done on the client-side.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bServerSide": null,

                /**
                 * Sorting enablement flag.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bSort": null,

                /**
                 * Multi-column sorting
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bSortMulti": null,

                /**
                 * Apply a class to the columns which are being sorted to provide a
                 * visual highlight or not. This can slow things down when enabled since
                 * there is a lot of DOM interaction.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bSortClasses": null,

                /**
                 * State saving enablement flag.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bStateSave": null
            },


            /**
             * Scrolling settings for a table.
             *  @namespace
             */
            "oScroll": {
                /**
                 * When the table is shorter in height than sScrollY, collapse the
                 * table container down to the height of the table (when true).
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bCollapse": null,

                /**
                 * Width of the scrollbar for the web-browser's platform. Calculated
                 * during table initialisation.
                 *  @type int
                 *  @default 0
                 */
                "iBarWidth": 0,

                /**
                 * Viewport width for horizontal scrolling. Horizontal scrolling is
                 * disabled if an empty string.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type string
                 */
                "sX": null,

                /**
                 * Width to expand the table to when using x-scrolling. Typically you
                 * should not need to use this.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type string
                 *  @deprecated
                 */
                "sXInner": null,

                /**
                 * Viewport height for vertical scrolling. Vertical scrolling is disabled
                 * if an empty string.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type string
                 */
                "sY": null
            },

            /**
             * Language information for the table.
             *  @namespace
             *  @extends DataTable.defaults.oLanguage
             */
            "oLanguage": {
                /**
                 * Information callback function. See
                 * {@link DataTable.defaults.fnInfoCallback}
                 *  @type function
                 *  @default null
                 */
                "fnInfoCallback": null
            },

            /**
             * Browser support parameters
             *  @namespace
             */
            "oBrowser": {
                /**
                 * Indicate if the browser incorrectly calculates width:100% inside a
                 * scrolling element (IE6/7)
                 *  @type boolean
                 *  @default false
                 */
                "bScrollOversize": false,

                /**
                 * Determine if the vertical scrollbar is on the right or left of the
                 * scrolling container - needed for rtl language layout, although not
                 * all browsers move the scrollbar (Safari).
                 *  @type boolean
                 *  @default false
                 */
                "bScrollbarLeft": false
            },


            "ajax": null,


            /**
             * Array referencing the nodes which are used for the features. The
             * parameters of this object match what is allowed by sDom - i.e.
             *   <ul>
             *     <li>'l' - Length changing</li>
             *     <li>'f' - Filtering input</li>
             *     <li>'t' - The table!</li>
             *     <li>'i' - Information</li>
             *     <li>'p' - Pagination</li>
             *     <li>'r' - pRocessing</li>
             *   </ul>
             *  @type array
             *  @default []
             */
            "aanFeatures": [],

            /**
             * Store data information - see {@link DataTable.models.oRow} for detailed
             * information.
             *  @type array
             *  @default []
             */
            "aoData": [],

            /**
             * Array of indexes which are in the current display (after filtering etc)
             *  @type array
             *  @default []
             */
            "aiDisplay": [],

            /**
             * Array of indexes for display - no filtering
             *  @type array
             *  @default []
             */
            "aiDisplayMaster": [],

            /**
             * Store information about each column that is in use
             *  @type array
             *  @default []
             */
            "aoColumns": [],

            /**
             * Store information about the table's header
             *  @type array
             *  @default []
             */
            "aoHeader": [],

            /**
             * Store information about the table's footer
             *  @type array
             *  @default []
             */
            "aoFooter": [],

            /**
             * Store the applied global search information in case we want to force a
             * research or compare the old search to a new one.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @namespace
             *  @extends DataTable.models.oSearch
             */
            "oPreviousSearch": {},

            /**
             * Store the applied search for each column - see
             * {@link DataTable.models.oSearch} for the format that is used for the
             * filtering information for each column.
             *  @type array
             *  @default []
             */
            "aoPreSearchCols": [],

            /**
             * Sorting that is applied to the table. Note that the inner arrays are
             * used in the following manner:
             * <ul>
             *   <li>Index 0 - column number</li>
             *   <li>Index 1 - current sorting direction</li>
             * </ul>
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type array
             *  @todo These inner arrays should really be objects
             */
            "aaSorting": null,

            /**
             * Sorting that is always applied to the table (i.e. prefixed in front of
             * aaSorting).
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type array
             *  @default []
             */
            "aaSortingFixed": [],

            /**
             * Classes to use for the striping of a table.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type array
             *  @default []
             */
            "asStripeClasses": null,

            /**
             * If restoring a table - we should restore its striping classes as well
             *  @type array
             *  @default []
             */
            "asDestroyStripes": [],

            /**
             * If restoring a table - we should restore its width
             *  @type int
             *  @default 0
             */
            "sDestroyWidth": 0,

            /**
             * Callback functions array for every time a row is inserted (i.e. on a draw).
             *  @type array
             *  @default []
             */
            "aoRowCallback": [],

            /**
             * Callback functions for the header on each draw.
             *  @type array
             *  @default []
             */
            "aoHeaderCallback": [],

            /**
             * Callback function for the footer on each draw.
             *  @type array
             *  @default []
             */
            "aoFooterCallback": [],

            /**
             * Array of callback functions for draw callback functions
             *  @type array
             *  @default []
             */
            "aoDrawCallback": [],

            /**
             * Array of callback functions for row created function
             *  @type array
             *  @default []
             */
            "aoRowCreatedCallback": [],

            /**
             * Callback functions for just before the table is redrawn. A return of
             * false will be used to cancel the draw.
             *  @type array
             *  @default []
             */
            "aoPreDrawCallback": [],

            /**
             * Callback functions for when the table has been initialised.
             *  @type array
             *  @default []
             */
            "aoInitComplete": [],


            /**
             * Callbacks for modifying the settings to be stored for state saving, prior to
             * saving state.
             *  @type array
             *  @default []
             */
            "aoStateSaveParams": [],

            /**
             * Callbacks for modifying the settings that have been stored for state saving
             * prior to using the stored values to restore the state.
             *  @type array
             *  @default []
             */
            "aoStateLoadParams": [],

            /**
             * Callbacks for operating on the settings object once the saved state has been
             * loaded
             *  @type array
             *  @default []
             */
            "aoStateLoaded": [],

            /**
             * Cache the table ID for quick access
             *  @type string
             *  @default <i>Empty string</i>
             */
            "sTableId": "",

            /**
             * The TABLE node for the main table
             *  @type node
             *  @default null
             */
            "nTable": null,

            /**
             * Permanent ref to the thead element
             *  @type node
             *  @default null
             */
            "nTHead": null,

            /**
             * Permanent ref to the tfoot element - if it exists
             *  @type node
             *  @default null
             */
            "nTFoot": null,

            /**
             * Permanent ref to the tbody element
             *  @type node
             *  @default null
             */
            "nTBody": null,

            /**
             * Cache the wrapper node (contains all DataTables controlled elements)
             *  @type node
             *  @default null
             */
            "nTableWrapper": null,

            /**
             * Indicate if when using server-side processing the loading of data
             * should be deferred until the second draw.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             *  @default false
             */
            "bDeferLoading": false,

            /**
             * Indicate if all required information has been read in
             *  @type boolean
             *  @default false
             */
            "bInitialised": false,

            /**
             * Information about open rows. Each object in the array has the parameters
             * 'nTr' and 'nParent'
             *  @type array
             *  @default []
             */
            "aoOpenRows": [],

            /**
             * Dictate the positioning of DataTables' control elements - see
             * {@link DataTable.model.oInit.sDom}.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type string
             *  @default null
             */
            "sDom": null,

            /**
             * Which type of pagination should be used.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type string
             *  @default two_button
             */
            "sPaginationType": "two_button",

            /**
             * The state duration (for `stateSave`) in seconds.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type int
             *  @default 0
             */
            "iStateDuration": 0,

            /**
             * Array of callback functions for state saving. Each array element is an
             * object with the following parameters:
             *   <ul>
             *     <li>function:fn - function to call. Takes two parameters, oSettings
             *       and the JSON string to save that has been thus far created. Returns
             *       a JSON string to be inserted into a json object
             *       (i.e. '"param": [ 0, 1, 2]')</li>
             *     <li>string:sName - name of callback</li>
             *   </ul>
             *  @type array
             *  @default []
             */
            "aoStateSave": [],

            /**
             * Array of callback functions for state loading. Each array element is an
             * object with the following parameters:
             *   <ul>
             *     <li>function:fn - function to call. Takes two parameters, oSettings
             *       and the object stored. May return false to cancel state loading</li>
             *     <li>string:sName - name of callback</li>
             *   </ul>
             *  @type array
             *  @default []
             */
            "aoStateLoad": [],

            /**
             * State that was loaded. Useful for back reference
             *  @type object
             *  @default null
             */
            "oLoadedState": null,

            /**
             * Source url for AJAX data for the table.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type string
             *  @default null
             */
            "sAjaxSource": null,

            /**
             * Property from a given object from which to read the table data from. This
             * can be an empty string (when not server-side processing), in which case
             * it is  assumed an an array is given directly.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type string
             */
            "sAjaxDataProp": null,

            /**
             * Note if draw should be blocked while getting data
             *  @type boolean
             *  @default true
             */
            "bAjaxDataGet": true,

            /**
             * The last jQuery XHR object that was used for server-side data gathering.
             * This can be used for working with the XHR information in one of the
             * callbacks
             *  @type object
             *  @default null
             */
            "jqXHR": null,

            /**
             * JSON returned from the server in the last Ajax request
             *  @type object
             *  @default undefined
             */
            "json": undefined,

            /**
             * Data submitted as part of the last Ajax request
             *  @type object
             *  @default undefined
             */
            "oAjaxData": undefined,

            /**
             * Function to get the server-side data.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type function
             */
            "fnServerData": null,

            /**
             * Functions which are called prior to sending an Ajax request so extra
             * parameters can easily be sent to the server
             *  @type array
             *  @default []
             */
            "aoServerParams": [],

            /**
             * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
             * required).
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type string
             */
            "sServerMethod": null,

            /**
             * Format numbers for display.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type function
             */
            "fnFormatNumber": null,

            /**
             * List of options that can be used for the user selectable length menu.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type array
             *  @default []
             */
            "aLengthMenu": null,

            /**
             * Counter for the draws that the table does. Also used as a tracker for
             * server-side processing
             *  @type int
             *  @default 0
             */
            "iDraw": 0,

            /**
             * Indicate if a redraw is being done - useful for Ajax
             *  @type boolean
             *  @default false
             */
            "bDrawing": false,

            /**
             * Draw index (iDraw) of the last error when parsing the returned data
             *  @type int
             *  @default -1
             */
            "iDrawError": -1,

            /**
             * Paging display length
             *  @type int
             *  @default 10
             */
            "_iDisplayLength": 10,

            /**
             * Paging start point - aiDisplay index
             *  @type int
             *  @default 0
             */
            "_iDisplayStart": 0,

            /**
             * Server-side processing - number of records in the result set
             * (i.e. before filtering), Use fnRecordsTotal rather than
             * this property to get the value of the number of records, regardless of
             * the server-side processing setting.
             *  @type int
             *  @default 0
             *  @private
             */
            "_iRecordsTotal": 0,

            /**
             * Server-side processing - number of records in the current display set
             * (i.e. after filtering). Use fnRecordsDisplay rather than
             * this property to get the value of the number of records, regardless of
             * the server-side processing setting.
             *  @type boolean
             *  @default 0
             *  @private
             */
            "_iRecordsDisplay": 0,

            /**
             * Flag to indicate if jQuery UI marking and classes should be used.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             */
            "bJUI": null,

            /**
             * The classes to use for the table
             *  @type object
             *  @default {}
             */
            "oClasses": {},

            /**
             * Flag attached to the settings object so you can check in the draw
             * callback if filtering has been done in the draw. Deprecated in favour of
             * events.
             *  @type boolean
             *  @default false
             *  @deprecated
             */
            "bFiltered": false,

            /**
             * Flag attached to the settings object so you can check in the draw
             * callback if sorting has been done in the draw. Deprecated in favour of
             * events.
             *  @type boolean
             *  @default false
             *  @deprecated
             */
            "bSorted": false,

            /**
             * Indicate that if multiple rows are in the header and there is more than
             * one unique cell per column, if the top one (true) or bottom one (false)
             * should be used for sorting / title by DataTables.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             */
            "bSortCellsTop": null,

            /**
             * Initialisation object that is used for the table
             *  @type object
             *  @default null
             */
            "oInit": null,

            /**
             * Destroy callback functions - for plug-ins to attach themselves to the
             * destroy so they can clean up markup and events.
             *  @type array
             *  @default []
             */
            "aoDestroyCallback": [],


            /**
             * Get the number of records in the current record set, before filtering
             *  @type function
             */
            "fnRecordsTotal": function ()
            {
                return _fnDataSource( this ) == 'ssp' ?
                    this._iRecordsTotal * 1 :
                    this.aiDisplayMaster.length;
            },

            /**
             * Get the number of records in the current record set, after filtering
             *  @type function
             */
            "fnRecordsDisplay": function ()
            {
                return _fnDataSource( this ) == 'ssp' ?
                    this._iRecordsDisplay * 1 :
                    this.aiDisplay.length;
            },

            /**
             * Get the display end point - aiDisplay index
             *  @type function
             */
            "fnDisplayEnd": function ()
            {
                var
                    len      = this._iDisplayLength,
                    start    = this._iDisplayStart,
                    calc     = start + len,
                    records  = this.aiDisplay.length,
                    features = this.oFeatures,
                    paginate = features.bPaginate;

                if ( features.bServerSide ) {
                    return paginate === false || len === -1 ?
                        start + records :
                        Math.min( start+len, this._iRecordsDisplay );
                }
                else {
                    return ! paginate || calc>records || len===-1 ?
                        records :
                        calc;
                }
            },

            /**
             * The DataTables object for this table
             *  @type object
             *  @default null
             */
            "oInstance": null,

            /**
             * Unique identifier for each instance of the DataTables object. If there
             * is an ID on the table node, then it takes that value, otherwise an
             * incrementing internal counter is used.
             *  @type string
             *  @default null
             */
            "sInstance": null,

            /**
             * tabindex attribute value that is added to DataTables control elements, allowing
             * keyboard navigation of the table and its controls.
             */
            "iTabIndex": 0,

            /**
             * DIV container for the footer scrolling table if scrolling
             */
            "nScrollHead": null,

            /**
             * DIV container for the footer scrolling table if scrolling
             */
            "nScrollFoot": null,

            /**
             * Last applied sort
             *  @type array
             *  @default []
             */
            "aLastSort": [],

            /**
             * Stored plug-in instances
             *  @type object
             *  @default {}
             */
            "oPlugins": {}
        };

        /**
         * Extension object for DataTables that is used to provide all extension
         * options.
         *
         * Note that the `DataTable.ext` object is available through
         * `jQuery.fn.dataTable.ext` where it may be accessed and manipulated. It is
         * also aliased to `jQuery.fn.dataTableExt` for historic reasons.
         *  @namespace
         *  @extends DataTable.models.ext
         */


        /**
         * DataTables extensions
         *
         * This namespace acts as a collection area for plug-ins that can be used to
         * extend DataTables capabilities. Indeed many of the build in methods
         * use this method to provide their own capabilities (sorting methods for
         * example).
         *
         * Note that this namespace is aliased to `jQuery.fn.dataTableExt` for legacy
         * reasons
         *
         *  @namespace
         */
        DataTable.ext = _ext = {
            /**
             * Element class names
             *
             *  @type object
             *  @default {}
             */
            classes: {},


            /**
             * Error reporting.
             *
             * How should DataTables report an error. Can take the value 'alert' or
             * 'throw'
             *
             *  @type string
             *  @default alert
             */
            errMode: "alert",


            /**
             * Feature plug-ins.
             *
             * This is an array of objects which describe the feature plug-ins that are
             * available to DataTables. These feature plug-ins are then available for
             * use through the `dom` initialisation option.
             *
             * Each feature plug-in is described by an object which must have the
             * following properties:
             *
             * * `fnInit` - function that is used to initialise the plug-in,
             * * `cFeature` - a character so the feature can be enabled by the `dom`
             *   instillation option. This is case sensitive.
             *
             * The `fnInit` function has the following input parameters:
             *
             * 1. `{object}` DataTables settings object: see
             *    {@link DataTable.models.oSettings}
             *
             * And the following return is expected:
             *
             * * {node|null} The element which contains your feature. Note that the
             *   return may also be void if your plug-in does not require to inject any
             *   DOM elements into DataTables control (`dom`) - for example this might
             *   be useful when developing a plug-in which allows table control via
             *   keyboard entry
             *
             *  @type array
             *
             *  @example
             *    $.fn.dataTable.ext.features.push( {
		 *      "fnInit": function( oSettings ) {
		 *        return new TableTools( { "oDTSettings": oSettings } );
		 *      },
		 *      "cFeature": "T"
		 *    } );
             */
            feature: [],


            /**
             * Row searching.
             *
             * This method of searching is complimentary to the default type based
             * searching, and a lot more comprehensive as it allows you complete control
             * over the searching logic. Each element in this array is a function
             * (parameters described below) that is called for every row in the table,
             * and your logic decides if it should be included in the searching data set
             * or not.
             *
             * Searching functions have the following input parameters:
             *
             * 1. `{object}` DataTables settings object: see
             *    {@link DataTable.models.oSettings}
             * 2. `{array|object}` Data for the row to be processed (same as the
             *    original format that was passed in as the data source, or an array
             *    from a DOM data source
             * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
             *    can be useful to retrieve the `TR` element if you need DOM interaction.
             *
             * And the following return is expected:
             *
             * * {boolean} Include the row in the searched result set (true) or not
             *   (false)
             *
             * Note that as with the main search ability in DataTables, technically this
             * is "filtering", since it is subtractive. However, for consistency in
             * naming we call it searching here.
             *
             *  @type array
             *  @default []
             *
             *  @example
             *    // The following example shows custom search being applied to the
             *    // fourth column (i.e. the data[3] index) based on two input values
             *    // from the end-user, matching the data in a certain range.
             *    $.fn.dataTable.ext.search.push(
             *      function( settings, data, dataIndex ) {
		 *        var min = document.getElementById('min').value * 1;
		 *        var max = document.getElementById('max').value * 1;
		 *        var version = data[3] == "-" ? 0 : data[3]*1;
		 *
		 *        if ( min == "" && max == "" ) {
		 *          return true;
		 *        }
		 *        else if ( min == "" && version < max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && "" == max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && version < max ) {
		 *          return true;
		 *        }
		 *        return false;
		 *      }
             *    );
             */
            search: [],


            /**
             * Internal functions, exposed for used in plug-ins.
             *
             * Please note that you should not need to use the internal methods for
             * anything other than a plug-in (and even then, try to avoid if possible).
             * The internal function may change between releases.
             *
             *  @type object
             *  @default {}
             */
            internal: {},


            /**
             * Legacy configuration options. Enable and disable legacy options that
             * are available in DataTables.
             *
             *  @type object
             */
            legacy: {
                /**
                 * Enable / disable DataTables 1.9 compatible server-side processing
                 * requests
                 *
                 *  @type boolean
                 *  @default null
                 */
                ajax: null
            },


            /**
             * Pagination plug-in methods.
             *
             * Each entry in this object is a function and defines which buttons should
             * be shown by the pagination rendering method that is used for the table:
             * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
             * buttons are displayed in the document, while the functions here tell it
             * what buttons to display. This is done by returning an array of button
             * descriptions (what each button will do).
             *
             * Pagination types (the four built in options and any additional plug-in
             * options defined here) can be used through the `paginationType`
             * initialisation parameter.
             *
             * The functions defined take two parameters:
             *
             * 1. `{int} page` The current page index
             * 2. `{int} pages` The number of pages in the table
             *
             * Each function is expected to return an array where each element of the
             * array can be one of:
             *
             * * `first` - Jump to first page when activated
             * * `last` - Jump to last page when activated
             * * `previous` - Show previous page when activated
             * * `next` - Show next page when activated
             * * `{int}` - Show page of the index given
             * * `{array}` - A nested array containing the above elements to add a
             *   containing 'DIV' element (might be useful for styling).
             *
             * Note that DataTables v1.9- used this object slightly differently whereby
             * an object with two functions would be defined for each plug-in. That
             * ability is still supported by DataTables 1.10+ to provide backwards
             * compatibility, but this option of use is now decremented and no longer
             * documented in DataTables 1.10+.
             *
             *  @type object
             *  @default {}
             *
             *  @example
             *    // Show previous, next and current page buttons only
             *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
		 *      return [ 'previous', page, 'next' ];
		 *    };
             */
            pager: {},


            renderer: {
                pageButton: {},
                header: {}
            },


            /**
             * Ordering plug-ins - custom data source
             *
             * The extension options for ordering of data available here is complimentary
             * to the default type based ordering that DataTables typically uses. It
             * allows much greater control over the the data that is being used to
             * order a column, but is necessarily therefore more complex.
             *
             * This type of ordering is useful if you want to do ordering based on data
             * live from the DOM (for example the contents of an 'input' element) rather
             * than just the static string that DataTables knows of.
             *
             * The way these plug-ins work is that you create an array of the values you
             * wish to be ordering for the column in question and then return that
             * array. The data in the array much be in the index order of the rows in
             * the table (not the currently ordering order!). Which order data gathering
             * function is run here depends on the `dt-init columns.orderDataType`
             * parameter that is used for the column (if any).
             *
             * The functions defined take two parameters:
             *
             * 1. `{object}` DataTables settings object: see
             *    {@link DataTable.models.oSettings}
             * 2. `{int}` Target column index
             *
             * Each function is expected to return an array:
             *
             * * `{array}` Data for the column to be ordering upon
             *
             *  @type array
             *
             *  @example
             *    // Ordering using `input` node values
             *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
             *    {
		 *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
		 *        return $('input', td).val();
		 *      } );
		 *    }
             */
            order: {},


            /**
             * Type based plug-ins.
             *
             * Each column in DataTables has a type assigned to it, either by automatic
             * detection or by direct assignment using the `type` option for the column.
             * The type of a column will effect how it is ordering and search (plug-ins
             * can also make use of the column type if required).
             *
             * @namespace
             */
            type: {
                /**
                 * Type detection functions.
                 *
                 * The functions defined in this object are used to automatically detect
                 * a column's type, making initialisation of DataTables super easy, even
                 * when complex data is in the table.
                 *
                 * The functions defined take two parameters:
                 *
                 *  1. `{*}` Data from the column cell to be analysed
                 *  2. `{settings}` DataTables settings object. This can be used to
                 *     perform context specific type detection - for example detection
                 *     based on language settings such as using a comma for a decimal
                 *     place. Generally speaking the options from the settings will not
                 *     be required
                 *
                 * Each function is expected to return:
                 *
                 * * `{string|null}` Data type detected, or null if unknown (and thus
                 *   pass it on to the other type detection functions.
                 *
                 *  @type array
                 *
                 *  @example
                 *    // Currency type detection plug-in:
                 *    $.fn.dataTable.ext.type.detect.push(
                 *      function ( data, settings ) {
			 *        // Check the numeric part
			 *        if ( ! $.isNumeric( data.substring(1) ) ) {
			 *          return null;
			 *        }
			 *
			 *        // Check prefixed by currency
			 *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
			 *          return 'currency';
			 *        }
			 *        return null;
			 *      }
                 *    );
                 */
                detect: [],


                /**
                 * Type based search formatting.
                 *
                 * The type based searching functions can be used to pre-format the
                 * data to be search on. For example, it can be used to strip HTML
                 * tags or to de-format telephone numbers for numeric only searching.
                 *
                 * Note that is a search is not defined for a column of a given type,
                 * no search formatting will be performed.
                 *
                 * Pre-processing of searching data plug-ins - When you assign the sType
                 * for a column (or have it automatically detected for you by DataTables
                 * or a type detection plug-in), you will typically be using this for
                 * custom sorting, but it can also be used to provide custom searching
                 * by allowing you to pre-processing the data and returning the data in
                 * the format that should be searched upon. This is done by adding
                 * functions this object with a parameter name which matches the sType
                 * for that target column. This is the corollary of <i>afnSortData</i>
                 * for searching data.
                 *
                 * The functions defined take a single parameter:
                 *
                 *  1. `{*}` Data from the column cell to be prepared for searching
                 *
                 * Each function is expected to return:
                 *
                 * * `{string|null}` Formatted string that will be used for the searching.
                 *
                 *  @type object
                 *  @default {}
                 *
                 *  @example
                 *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
			 *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
			 *    }
                 */
                search: {},


                /**
                 * Type based ordering.
                 *
                 * The column type tells DataTables what ordering to apply to the table
                 * when a column is sorted upon. The order for each type that is defined,
                 * is defined by the functions available in this object.
                 *
                 * Each ordering option can be described by three properties added to
                 * this object:
                 *
                 * * `{type}-pre` - Pre-formatting function
                 * * `{type}-asc` - Ascending order function
                 * * `{type}-desc` - Descending order function
                 *
                 * All three can be used together, only `{type}-pre` or only
                 * `{type}-asc` and `{type}-desc` together. It is generally recommended
                 * that only `{type}-pre` is used, as this provides the optimal
                 * implementation in terms of speed, although the others are provided
                 * for compatibility with existing Javascript sort functions.
                 *
                 * `{type}-pre`: Functions defined take a single parameter:
                 *
                 *  1. `{*}` Data from the column cell to be prepared for ordering
                 *
                 * And return:
                 *
                 * * `{*}` Data to be sorted upon
                 *
                 * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
                 * functions, taking two parameters:
                 *
                 *  1. `{*}` Data to compare to the second parameter
                 *  2. `{*}` Data to compare to the first parameter
                 *
                 * And returning:
                 *
                 * * `{*}` Ordering match: <0 if first parameter should be sorted lower
                 *   than the second parameter, ===0 if the two parameters are equal and
                 *   >0 if the first parameter should be sorted height than the second
                 *   parameter.
                 *
                 *  @type object
                 *  @default {}
                 *
                 *  @example
                 *    // Numeric ordering of formatted numbers with a pre-formatter
                 *    $.extend( $.fn.dataTable.ext.type.order, {
			 *      "string-pre": function(x) {
			 *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
			 *        return parseFloat( a );
			 *      }
			 *    } );
                 *
                 *  @example
                 *    // Case-sensitive string ordering, with no pre-formatting method
                 *    $.extend( $.fn.dataTable.ext.order, {
			 *      "string-case-asc": function(x,y) {
			 *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			 *      },
			 *      "string-case-desc": function(x,y) {
			 *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
			 *      }
			 *    } );
                 */
                order: {}
            },

            /**
             * Unique DataTables instance counter
             *
             * @type int
             * @private
             */
            _unique: 0,


            //
            // Depreciated
            // The following properties are retained for backwards compatiblity only.
            // The should not be used in new projects and will be removed in a future
            // version
            //

            /**
             * Version check function.
             *  @type function
             *  @depreciated Since 1.10
             */
            fnVersionCheck: DataTable.fnVersionCheck,


            /**
             * Index for what 'this' index API functions should use
             *  @type int
             *  @deprecated Since v1.10
             */
            iApiIndex: 0,


            /**
             * jQuery UI class container
             *  @type object
             *  @deprecated Since v1.10
             */
            oJUIClasses: {},


            /**
             * Software version
             *  @type string
             *  @deprecated Since v1.10
             */
            sVersion: DataTable.version
        };


        //
        // Backwards compatibility. Alias to pre 1.10 Hungarian notation counter parts
        //
        $.extend( _ext, {
            afnFiltering: _ext.search,
            aTypes:       _ext.type.detect,
            ofnSearch:    _ext.type.search,
            oSort:        _ext.type.order,
            afnSortData:  _ext.order,
            aoFeatures:   _ext.feature,
            oApi:         _ext.internal,
            oStdClasses:  _ext.classes,
            oPagination:  _ext.pager
        } );


        $.extend( DataTable.ext.classes, {
            "sTable": "dataTable",
            "sNoFooter": "no-footer",

            /* Paging buttons */
            "sPageButton": "paginate_button",
            "sPageButtonActive": "current",
            "sPageButtonDisabled": "disabled",

            /* Striping classes */
            "sStripeOdd": "odd",
            "sStripeEven": "even",

            /* Empty row */
            "sRowEmpty": "dataTables_empty",

            /* Features */
            "sWrapper": "dataTables_wrapper",
            "sFilter": "dataTables_filter",
            "sInfo": "dataTables_info",
            "sPaging": "dataTables_paginate paging_", /* Note that the type is postfixed */
            "sLength": "dataTables_length",
            "sProcessing": "dataTables_processing",

            /* Sorting */
            "sSortAsc": "sorting_asc",
            "sSortDesc": "sorting_desc",
            "sSortable": "sorting", /* Sortable in both directions */
            "sSortableAsc": "sorting_asc_disabled",
            "sSortableDesc": "sorting_desc_disabled",
            "sSortableNone": "sorting_disabled",
            "sSortColumn": "sorting_", /* Note that an int is postfixed for the sorting order */

            /* Filtering */
            "sFilterInput": "",

            /* Page length */
            "sLengthSelect": "",

            /* Scrolling */
            "sScrollWrapper": "dataTables_scroll",
            "sScrollHead": "dataTables_scrollHead",
            "sScrollHeadInner": "dataTables_scrollHeadInner",
            "sScrollBody": "dataTables_scrollBody",
            "sScrollFoot": "dataTables_scrollFoot",
            "sScrollFootInner": "dataTables_scrollFootInner",

            /* Misc */
            "sHeaderTH": "",
            "sFooterTH": "",

            // Deprecated
            "sSortJUIAsc": "",
            "sSortJUIDesc": "",
            "sSortJUI": "",
            "sSortJUIAscAllowed": "",
            "sSortJUIDescAllowed": "",
            "sSortJUIWrapper": "",
            "sSortIcon": "",
            "sJUIHeader": "",
            "sJUIFooter": ""
        } );


        (function() {

            // Reused strings for better compression. Closure compiler appears to have a
            // weird edge case where it is trying to expand strings rather than use the
            // variable version. This results in about 200 bytes being added, for very
            // little preference benefit since it this run on script load only.
            var _empty = '';
            _empty = '';

            var _stateDefault = _empty + 'ui-state-default';
            var _sortIcon     = _empty + 'css_right ui-icon ui-icon-';
            var _headerFooter = _empty + 'fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix';

            $.extend( DataTable.ext.oJUIClasses, DataTable.ext.classes, {
                /* Full numbers paging buttons */
                "sPageButton":         "fg-button ui-button "+_stateDefault,
                "sPageButtonActive":   "ui-state-disabled",
                "sPageButtonDisabled": "ui-state-disabled",

                /* Features */
                "sPaging": "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi "+
                    "ui-buttonset-multi paging_", /* Note that the type is postfixed */

                /* Sorting */
                "sSortAsc":            _stateDefault+" sorting_asc",
                "sSortDesc":           _stateDefault+" sorting_desc",
                "sSortable":           _stateDefault+" sorting",
                "sSortableAsc":        _stateDefault+" sorting_asc_disabled",
                "sSortableDesc":       _stateDefault+" sorting_desc_disabled",
                "sSortableNone":       _stateDefault+" sorting_disabled",
                "sSortJUIAsc":         _sortIcon+"triangle-1-n",
                "sSortJUIDesc":        _sortIcon+"triangle-1-s",
                "sSortJUI":            _sortIcon+"carat-2-n-s",
                "sSortJUIAscAllowed":  _sortIcon+"carat-1-n",
                "sSortJUIDescAllowed": _sortIcon+"carat-1-s",
                "sSortJUIWrapper":     "DataTables_sort_wrapper",
                "sSortIcon":           "DataTables_sort_icon",

                /* Scrolling */
                "sScrollHead": "dataTables_scrollHead "+_stateDefault,
                "sScrollFoot": "dataTables_scrollFoot "+_stateDefault,

                /* Misc */
                "sHeaderTH":  _stateDefault,
                "sFooterTH":  _stateDefault,
                "sJUIHeader": _headerFooter+" ui-corner-tl ui-corner-tr",
                "sJUIFooter": _headerFooter+" ui-corner-bl ui-corner-br"
            } );

        }());



        var extPagination = DataTable.ext.pager;

        function _numbers ( page, pages ) {
            var
                numbers = [],
                buttons = extPagination.numbers_length,
                half = Math.floor( buttons / 2 ),
                i = 1;

            if ( pages <= buttons ) {
                numbers = _range( 0, pages );
            }
            else if ( page <= half ) {
                numbers = _range( 0, buttons-2 );
                numbers.push( 'ellipsis' );
                numbers.push( pages-1 );
            }
            else if ( page >= pages - 1 - half ) {
                numbers = _range( pages-(buttons-2), pages );
                numbers.splice( 0, 0, 'ellipsis' ); // no unshift in ie6
                numbers.splice( 0, 0, 0 );
            }
            else {
                numbers = _range( page-1, page+2 );
                numbers.push( 'ellipsis' );
                numbers.push( pages-1 );
                numbers.splice( 0, 0, 'ellipsis' );
                numbers.splice( 0, 0, 0 );
            }

            numbers.DT_el = 'span';
            return numbers;
        }


        $.extend( extPagination, {
            simple: function ( page, pages ) {
                return [ 'previous', 'next' ];
            },

            full: function ( page, pages ) {
                return [  'first', 'previous', 'next', 'last' ];
            },

            simple_numbers: function ( page, pages ) {
                return [ 'previous', _numbers(page, pages), 'next' ];
            },

            full_numbers: function ( page, pages ) {
                return [ 'first', 'previous', _numbers(page, pages), 'next', 'last' ];
            },

            // For testing and plug-ins to use
            _numbers: _numbers,
            numbers_length: 7
        } );


        $.extend( true, DataTable.ext.renderer, {
            pageButton: {
                _: function ( settings, host, idx, buttons, page, pages ) {
                    var classes = settings.oClasses;
                    var lang = settings.oLanguage.oPaginate;
                    var btnDisplay, btnClass, counter=0;

                    var attach = function( container, buttons ) {
                        var i, ien, node, button;
                        var clickHandler = function ( e ) {
                            _fnPageChange( settings, e.data.action, true );
                        };

                        for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
                            button = buttons[i];

                            if ( $.isArray( button ) ) {
                                var inner = $( '<'+(button.DT_el || 'div')+'/>' )
                                    .appendTo( container );
                                attach( inner, button );
                            }
                            else {
                                btnDisplay = '';
                                btnClass = '';

                                switch ( button ) {
                                    case 'ellipsis':
                                        container.append('<span>&hellip;</span>');
                                        break;

                                    case 'first':
                                        btnDisplay = lang.sFirst;
                                        btnClass = button + (page > 0 ?
                                            '' : ' '+classes.sPageButtonDisabled);
                                        break;

                                    case 'previous':
                                        btnDisplay = lang.sPrevious;
                                        btnClass = button + (page > 0 ?
                                            '' : ' '+classes.sPageButtonDisabled);
                                        break;

                                    case 'next':
                                        btnDisplay = lang.sNext;
                                        btnClass = button + (page < pages-1 ?
                                            '' : ' '+classes.sPageButtonDisabled);
                                        break;

                                    case 'last':
                                        btnDisplay = lang.sLast;
                                        btnClass = button + (page < pages-1 ?
                                            '' : ' '+classes.sPageButtonDisabled);
                                        break;

                                    default:
                                        btnDisplay = button + 1;
                                        btnClass = page === button ?
                                            classes.sPageButtonActive : '';
                                        break;
                                }

                                if ( btnDisplay ) {
                                    node = $('<a>', {
                                        'class': classes.sPageButton+' '+btnClass,
                                        'aria-controls': settings.sTableId,
                                        'data-dt-idx': counter,
                                        'tabindex': settings.iTabIndex,
                                        'id': idx === 0 && typeof button === 'string' ?
                                            settings.sTableId +'_'+ button :
                                            null
                                    } )
                                        .html( btnDisplay )
                                        .appendTo( container );

                                    _fnBindAction(
                                        node, {action: button}, clickHandler
                                    );

                                    counter++;
                                }
                            }
                        }
                    };

                    // Because this approach is destroying and recreating the paging
                    // elements, focus is lost on the select button which is bad for
                    // accessibility. So we want to restore focus once the draw has
                    // completed
                    var activeEl = $(document.activeElement).data('dt-idx');

                    attach( $(host).empty(), buttons );

                    if ( activeEl !== null ) {
                        $(host).find( '[data-dt-idx='+activeEl+']' ).focus();
                    }
                }
            }
        } );



        var __numericReplace = function ( d, decimalPlace, re1, re2 ) {
            if ( !d || d === '-' ) {
                return -Infinity;
            }

            // If a decimal place other than `.` is used, it needs to be given to the
            // function so we can detect it and replace with a `.` which is the only
            // decimal place Javascript recognises - it is not locale aware.
            if ( decimalPlace ) {
                d = _numToDecimal( d, decimalPlace );
            }

            if ( d.replace ) {
                if ( re1 ) {
                    d = d.replace( re1, '' );
                }

                if ( re2 ) {
                    d = d.replace( re2, '' );
                }
            }

            return d * 1;
        };


        // Add the numeric 'deformatting' functions for sorting. This is done in a
        // function to provide an easy ability for the language options to add
        // additional methods if a non-period decimal place is used.
        function _addNumericSort ( decimalPlace ) {
            $.each(
                {
                    // Plain numbers
                    "num": function ( d ) {
                        return __numericReplace( d, decimalPlace );
                    },

                    // Formatted numbers
                    "num-fmt": function ( d ) {
                        return __numericReplace( d, decimalPlace, _re_formatted_numeric );
                    },

                    // HTML numeric
                    "html-num": function ( d ) {
                        return __numericReplace( d, decimalPlace, _re_html );
                    },

                    // HTML numeric, formatted
                    "html-num-fmt": function ( d ) {
                        return __numericReplace( d, decimalPlace, _re_html, _re_formatted_numeric );
                    }
                },
                function ( key, fn ) {
                    _ext.type.order[ key+decimalPlace+'-pre' ] = fn;
                }
            );
        }


        // Default sort methods
        $.extend( _ext.type.order, {
            // Dates
            "date-pre": function ( d ) {
                return Date.parse( d ) || 0;
            },

            // html
            "html-pre": function ( a ) {
                return ! a ?
                    '' :
                    a.replace ?
                        a.replace( /<.*?>/g, "" ).toLowerCase() :
                        a+'';
            },

            // string
            "string-pre": function ( a ) {
                return typeof a === 'string' ?
                    a.toLowerCase() :
                    ! a || ! a.toString ?
                        '' :
                        a.toString();
            },

            // string-asc and -desc are retained only for compatibility with the old
            // sort methods
            "string-asc": function ( x, y ) {
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            },

            "string-desc": function ( x, y ) {
                return ((x < y) ? 1 : ((x > y) ? -1 : 0));
            }
        } );


        // Numeric sorting types - order doesn't matter here
        _addNumericSort( '' );


        // Built in type detection. See model.ext.aTypes for information about
        // what is required from this methods.
        $.extend( DataTable.ext.type.detect, [
            // Plain numbers - first since V8 detects some plain numbers as dates
            // e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).
            function ( d, settings )
            {
                var decimal = settings.oLanguage.sDecimal;
                return _isNumber( d, decimal ) ? 'num'+decimal : null;
            },

            // Dates (only those recognised by the browser's Date.parse)
            function ( d, settings )
            {
                // V8 will remove any unknown characters at the start of the expression,
                // leading to false matches such as `$245.12` being a valid date. See
                // forum thread 18941 for detail.
                if ( d && ! _re_date_start.test(d) ) {
                    return null;
                }
                var parsed = Date.parse(d);
                return (parsed !== null && !isNaN(parsed)) || _empty(d) ? 'date' : null;
            },

            // Formatted numbers
            function ( d, settings )
            {
                var decimal = settings.oLanguage.sDecimal;
                return _isNumber( d, decimal, true ) ? 'num-fmt'+decimal : null;
            },

            // HTML numeric
            function ( d, settings )
            {
                var decimal = settings.oLanguage.sDecimal;
                return _htmlNumeric( d, decimal ) ? 'html-num'+decimal : null;
            },

            // HTML numeric, formatted
            function ( d, settings )
            {
                var decimal = settings.oLanguage.sDecimal;
                return _htmlNumeric( d, decimal, true ) ? 'html-num-fmt'+decimal : null;
            },

            // HTML (this is strict checking - there must be html)
            function ( d, settings )
            {
                return _empty( d ) || (typeof d === 'string' && d.indexOf('<') !== -1) ?
                    'html' : null;
            }
        ] );



        // Filter formatting functions. See model.ext.ofnSearch for information about
        // what is required from these methods.


        $.extend( DataTable.ext.type.search, {
            html: function ( data ) {
                return _empty(data) ?
                    '' :
                    typeof data === 'string' ?
                        data
                            .replace( _re_new_lines, " " )
                            .replace( _re_html, "" ) :
                        '';
            },

            string: function ( data ) {
                return _empty(data) ?
                    '' :
                    typeof data === 'string' ?
                        data.replace( _re_new_lines, " " ) :
                        data;
            }
        } );



        $.extend( true, DataTable.ext.renderer, {
            header: {
                _: function ( settings, cell, column, classes ) {
                    // No additional mark-up required
                    // Attach a sort listener to update on sort - note that using the
                    // `DT` namespace will allow the event to be removed automatically
                    // on destroy, while the `dt` namespaced event is the one we are
                    // listening for
                    $(settings.nTable).on( 'order.dt.DT', function ( e, settings, sorting, columns ) {
                        var colIdx = column.idx;

                        cell
                            .removeClass(
                                column.sSortingClass +' '+
                                    classes.sSortAsc +' '+
                                    classes.sSortDesc
                            )
                            .addClass( columns[ colIdx ] == 'asc' ?
                                classes.sSortAsc : columns[ colIdx ] == 'desc' ?
                                classes.sSortDesc :
                                column.sSortingClass
                            );
                    } );
                },

                jqueryui: function ( settings, cell, column, classes ) {
                    var colIdx = column.idx;

                    $('<div/>')
                        .addClass( classes.sSortJUIWrapper )
                        .append( cell.contents() )
                        .append( $('<span/>')
                            .addClass( classes.sSortIcon+' '+column.sSortingClassJUI )
                        )
                        .appendTo( cell );

                    // Attach a sort listener to update on sort
                    $(settings.nTable).on( 'order.dt.DT', function ( e, settings, sorting, columns ) {
                        cell
                            .removeClass( classes.sSortAsc +" "+classes.sSortDesc )
                            .addClass( columns[ colIdx ] == 'asc' ?
                                classes.sSortAsc : columns[ colIdx ] == 'desc' ?
                                classes.sSortDesc :
                                column.sSortingClass
                            );

                        cell
                            .find( 'span.'+classes.sSortIcon )
                            .removeClass(
                                classes.sSortJUIAsc +" "+
                                    classes.sSortJUIDesc +" "+
                                    classes.sSortJUI +" "+
                                    classes.sSortJUIAscAllowed +" "+
                                    classes.sSortJUIDescAllowed
                            )
                            .addClass( columns[ colIdx ] == 'asc' ?
                                classes.sSortJUIAsc : columns[ colIdx ] == 'desc' ?
                                classes.sSortJUIDesc :
                                column.sSortingClassJUI
                            );
                    } );
                }
            }
        } );

        /*
         * Public helper functions. These aren't used internally by DataTables, or
         * called by any of the options passed into DataTables, but they can be used
         * externally by developers working with DataTables. They are helper functions
         * to make working with DataTables a little bit easier.
         */

        /**
         * Helpers for `columns.render`.
         *
         * The options defined here can be used with the `columns.render` initialisation
         * option to provide a display renderer. The following functions are defined:
         *
         * * `number` - Will format numeric data (defined by `columns.data`) for
         *   display, retaining the original unformatted data for sorting and filtering.
         *   It takes 4 parameters:
         *   * `string` - Thousands grouping separator
         *   * `string` - Decimal point indicator
         *   * `integer` - Number of decimal points to show
         *   * `string` (optional) - Prefix.
         *
         * @example
         *   // Column definition using the number renderer
         *   {
	 *     data: "salary",
	 *     render: $.fn.dataTable.render.number( '\'', '.', 0, '$' )
	 *   }
         *
         * @namespace
         */
        DataTable.render = {
            number: function ( thousands, decimal, precision, prefix ) {
                return {
                    display: function ( d ) {
                        d = parseFloat( d );
                        var intPart = parseInt( d, 10 );
                        var floatPart = precision ?
                            (decimal+(d - intPart).toFixed( precision )).substring( 2 ):
                            '';

                        return (prefix||'') +
                            intPart.toString().replace(
                                /\B(?=(\d{3})+(?!\d))/g, thousands
                            ) +
                            floatPart;
                    }
                };
            }
        };


        /*
         * This is really a good bit rubbish this method of exposing the internal methods
         * publicly... - To be fixed in 2.0 using methods on the prototype
         */


        /**
         * Create a wrapper function for exporting an internal functions to an external API.
         *  @param {string} fn API function name
         *  @returns {function} wrapped function
         *  @memberof DataTable#internal
         */
        function _fnExternApiFunc (fn)
        {
            return function() {
                var args = [_fnSettingsFromNode( this[DataTable.ext.iApiIndex] )].concat(
                    Array.prototype.slice.call(arguments)
                );
                return DataTable.ext.internal[fn].apply( this, args );
            };
        }


        /**
         * Reference to internal functions for use by plug-in developers. Note that
         * these methods are references to internal functions and are considered to be
         * private. If you use these methods, be aware that they are liable to change
         * between versions.
         *  @namespace
         */
        $.extend( DataTable.ext.internal, {
            _fnExternApiFunc: _fnExternApiFunc,
            _fnBuildAjax: _fnBuildAjax,
            _fnAjaxUpdate: _fnAjaxUpdate,
            _fnAjaxParameters: _fnAjaxParameters,
            _fnAjaxUpdateDraw: _fnAjaxUpdateDraw,
            _fnAjaxDataSrc: _fnAjaxDataSrc,
            _fnAddColumn: _fnAddColumn,
            _fnColumnOptions: _fnColumnOptions,
            _fnAdjustColumnSizing: _fnAdjustColumnSizing,
            _fnVisibleToColumnIndex: _fnVisibleToColumnIndex,
            _fnColumnIndexToVisible: _fnColumnIndexToVisible,
            _fnVisbleColumns: _fnVisbleColumns,
            _fnGetColumns: _fnGetColumns,
            _fnColumnTypes: _fnColumnTypes,
            _fnApplyColumnDefs: _fnApplyColumnDefs,
            _fnHungarianMap: _fnHungarianMap,
            _fnCamelToHungarian: _fnCamelToHungarian,
            _fnLanguageCompat: _fnLanguageCompat,
            _fnBrowserDetect: _fnBrowserDetect,
            _fnAddData: _fnAddData,
            _fnAddTr: _fnAddTr,
            _fnNodeToDataIndex: _fnNodeToDataIndex,
            _fnNodeToColumnIndex: _fnNodeToColumnIndex,
            _fnGetCellData: _fnGetCellData,
            _fnSetCellData: _fnSetCellData,
            _fnSplitObjNotation: _fnSplitObjNotation,
            _fnGetObjectDataFn: _fnGetObjectDataFn,
            _fnSetObjectDataFn: _fnSetObjectDataFn,
            _fnGetDataMaster: _fnGetDataMaster,
            _fnClearTable: _fnClearTable,
            _fnDeleteIndex: _fnDeleteIndex,
            _fnInvalidateRow: _fnInvalidateRow,
            _fnGetRowElements: _fnGetRowElements,
            _fnCreateTr: _fnCreateTr,
            _fnBuildHead: _fnBuildHead,
            _fnDrawHead: _fnDrawHead,
            _fnDraw: _fnDraw,
            _fnReDraw: _fnReDraw,
            _fnAddOptionsHtml: _fnAddOptionsHtml,
            _fnDetectHeader: _fnDetectHeader,
            _fnGetUniqueThs: _fnGetUniqueThs,
            _fnFeatureHtmlFilter: _fnFeatureHtmlFilter,
            _fnFilterComplete: _fnFilterComplete,
            _fnFilterCustom: _fnFilterCustom,
            _fnFilterColumn: _fnFilterColumn,
            _fnFilter: _fnFilter,
            _fnFilterCreateSearch: _fnFilterCreateSearch,
            _fnEscapeRegex: _fnEscapeRegex,
            _fnFilterData: _fnFilterData,
            _fnFeatureHtmlInfo: _fnFeatureHtmlInfo,
            _fnUpdateInfo: _fnUpdateInfo,
            _fnInfoMacros: _fnInfoMacros,
            _fnInitialise: _fnInitialise,
            _fnInitComplete: _fnInitComplete,
            _fnLengthChange: _fnLengthChange,
            _fnFeatureHtmlLength: _fnFeatureHtmlLength,
            _fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate,
            _fnPageChange: _fnPageChange,
            _fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing,
            _fnProcessingDisplay: _fnProcessingDisplay,
            _fnFeatureHtmlTable: _fnFeatureHtmlTable,
            _fnScrollDraw: _fnScrollDraw,
            _fnApplyToChildren: _fnApplyToChildren,
            _fnCalculateColumnWidths: _fnCalculateColumnWidths,
            _fnThrottle: _fnThrottle,
            _fnConvertToWidth: _fnConvertToWidth,
            _fnScrollingWidthAdjust: _fnScrollingWidthAdjust,
            _fnGetWidestNode: _fnGetWidestNode,
            _fnGetMaxLenString: _fnGetMaxLenString,
            _fnStringToCss: _fnStringToCss,
            _fnScrollBarWidth: _fnScrollBarWidth,
            _fnSortFlatten: _fnSortFlatten,
            _fnSort: _fnSort,
            _fnSortAria: _fnSortAria,
            _fnSortListener: _fnSortListener,
            _fnSortAttachListener: _fnSortAttachListener,
            _fnSortingClasses: _fnSortingClasses,
            _fnSortData: _fnSortData,
            _fnSaveState: _fnSaveState,
            _fnLoadState: _fnLoadState,
            _fnSettingsFromNode: _fnSettingsFromNode,
            _fnLog: _fnLog,
            _fnMap: _fnMap,
            _fnBindAction: _fnBindAction,
            _fnCallbackReg: _fnCallbackReg,
            _fnCallbackFire: _fnCallbackFire,
            _fnLengthOverflow: _fnLengthOverflow,
            _fnRenderer: _fnRenderer,
            _fnDataSource: _fnDataSource,
            _fnRowAttributes: _fnRowAttributes,
            _fnCalculateEnd: function () {} // Used by a lot of plug-ins, but redundant
            // in 1.10, so this dead-end function is
            // added to prevent errors
        } );


        // jQuery access
        $.fn.dataTable = DataTable;

        // Legacy aliases
        $.fn.dataTableSettings = DataTable.settings;
        $.fn.dataTableExt = DataTable.ext;

        // With a capital `D` we return a DataTables API instance rather than a
        // jQuery object
        $.fn.DataTable = function ( opts ) {
            return $(this).dataTable( opts ).api();
        };

        // All properties that are available to $.fn.dataTable should also be
        // available on $.fn.DataTable
        $.each( DataTable, function ( prop, val ) {
            $.fn.DataTable[ prop ] = val;
        } );


        // Information about events fired by DataTables - for documentation.
        /**
         * Draw event, fired whenever the table is redrawn on the page, at the same
         * point as fnDrawCallback. This may be useful for binding events or
         * performing calculations when the table is altered at all.
         *  @name DataTable#draw.dt
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
         */

        /**
         * Search event, fired when the searching applied to the table (using the
         * built-in global search, or column filters) is altered.
         *  @name DataTable#search.dt
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
         */

        /**
         * Page change event, fired when the paging of the table is altered.
         *  @name DataTable#page.dt
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
         */

        /**
         * Order event, fired when the ordering applied to the table is altered.
         *  @name DataTable#order.dt
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
         */

        /**
         * DataTables initialisation complete event, fired when the table is fully
         * drawn, including Ajax data loaded, if Ajax data is required.
         *  @name DataTable#init.dt
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} oSettings DataTables settings object
         *  @param {object} json The JSON object request from the server - only
         *    present if client-side Ajax sourced data is used</li></ol>
         */

        /**
         * State save event, fired when the table has changed state a new state save
         * is required. This event allows modification of the state saving object
         * prior to actually doing the save, including addition or other state
         * properties (for plug-ins) or modification of a DataTables core property.
         *  @name DataTable#stateSaveParams.dt
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} oSettings DataTables settings object
         *  @param {object} json The state information to be saved
         */

        /**
         * State load event, fired when the table is loading state from the stored
         * data, but prior to the settings object being modified by the saved state
         * - allowing modification of the saved state is required or loading of
         * state for a plug-in.
         *  @name DataTable#stateLoadParams.dt
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} oSettings DataTables settings object
         *  @param {object} json The saved state information
         */

        /**
         * State loaded event, fired when state has been loaded from stored data and
         * the settings object has been modified by the loaded data.
         *  @name DataTable#stateLoaded.dt
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} oSettings DataTables settings object
         *  @param {object} json The saved state information
         */

        /**
         * Processing event, fired when DataTables is doing some kind of processing
         * (be it, order, searcg or anything else). It can be used to indicate to
         * the end user that there is something happening, or that something has
         * finished.
         *  @name DataTable#processing.dt
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} oSettings DataTables settings object
         *  @param {boolean} bShow Flag for if DataTables is doing processing or not
         */

        /**
         * Ajax (XHR) event, fired whenever an Ajax request is completed from a
         * request to made to the server for new data. This event is called before
         * DataTables processed the returned data, so it can also be used to pre-
         * process the data returned from the server, if needed.
         *
         * Note that this trigger is called in `fnServerData`, if you override
         * `fnServerData` and which to use this event, you need to trigger it in you
         * success function.
         *  @name DataTable#xhr.dt
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
         *  @param {object} json JSON returned from the server
         *
         *  @example
         *     // Use a custom property returned from the server in another DOM element
         *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       $('#status').html( json.status );
	 *     } );
         *
         *  @example
         *     // Pre-process the data returned from the server
         *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       for ( var i=0, ien=json.aaData.length ; i<ien ; i++ ) {
	 *         json.aaData[i].sum = json.aaData[i].one + json.aaData[i].two;
	 *       }
	 *       // Note no return - manipulate the data directly in the JSON object.
	 *     } );
         */

        /**
         * Destroy event, fired when the DataTable is destroyed by calling fnDestroy
         * or passing the bDestroy:true parameter in the initialisation object. This
         * can be used to remove bound events, added DOM nodes, etc.
         *  @name DataTable#destroy.dt
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
         */

        /**
         * Page length change event, fired when number of records to show on each
         * page (the length) is changed.
         *  @name DataTable#length.dt
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
         *  @param {integer} len New length
         */

        /**
         * Column sizing has changed.
         *  @name DataTable#column-sizing.dt
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
         */

        /**
         * Column visibility has changed.
         *  @name DataTable#column-visibility.dt
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
         *  @param {int} column Column index
         *  @param {bool} vis `false` if column now hidden, or `true` if visible
         */

        return $.fn.dataTable;
    }));

}(window, document));


/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);


/*! Sidr - v1.2.1 - 2013-11-06
 * https://github.com/artberri/sidr
 * Copyright (c) 2013 Alberto Varela; Licensed MIT */
(function(e){var t=!1,i=!1,n={isUrl:function(e){var t=RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return t.test(e)?!0:!1},loadContent:function(e,t){e.html(t)},addPrefix:function(e){var t=e.attr("id"),i=e.attr("class");"string"==typeof t&&""!==t&&e.attr("id",t.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-id-$1")),"string"==typeof i&&""!==i&&"sidr-inner"!==i&&e.attr("class",i.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-class-$1")),e.removeAttr("style")},execute:function(n,s,a){"function"==typeof s?(a=s,s="sidr"):s||(s="sidr");var r,d,l,c=e("#"+s),u=e(c.data("body")),f=e("html"),p=c.outerWidth(!0),g=c.data("speed"),h=c.data("side"),m=c.data("displace"),v=c.data("onOpen"),y=c.data("onClose"),x="sidr"===s?"sidr-open":"sidr-open "+s+"-open";if("open"===n||"toggle"===n&&!c.is(":visible")){if(c.is(":visible")||t)return;if(i!==!1)return o.close(i,function(){o.open(s)}),void 0;t=!0,"left"===h?(r={left:p+"px"},d={left:"0px"}):(r={right:p+"px"},d={right:"0px"}),u.is("body")&&(l=f.scrollTop(),f.css("overflow-x","hidden").scrollTop(l)),m?u.addClass("sidr-animating").css({width:u.width(),position:"absolute"}).animate(r,g,function(){e(this).addClass(x)}):setTimeout(function(){e(this).addClass(x)},g),c.css("display","block").animate(d,g,function(){t=!1,i=s,"function"==typeof a&&a(s),u.removeClass("sidr-animating")}),v()}else{if(!c.is(":visible")||t)return;t=!0,"left"===h?(r={left:0},d={left:"-"+p+"px"}):(r={right:0},d={right:"-"+p+"px"}),u.is("body")&&(l=f.scrollTop(),f.removeAttr("style").scrollTop(l)),u.addClass("sidr-animating").animate(r,g).removeClass(x),c.animate(d,g,function(){c.removeAttr("style").hide(),u.removeAttr("style"),e("html").removeAttr("style"),t=!1,i=!1,"function"==typeof a&&a(s),u.removeClass("sidr-animating")}),y()}}},o={open:function(e,t){n.execute("open",e,t)},close:function(e,t){n.execute("close",e,t)},toggle:function(e,t){n.execute("toggle",e,t)},toogle:function(e,t){n.execute("toggle",e,t)}};e.sidr=function(t){return o[t]?o[t].apply(this,Array.prototype.slice.call(arguments,1)):"function"!=typeof t&&"string"!=typeof t&&t?(e.error("Method "+t+" does not exist on jQuery.sidr"),void 0):o.toggle.apply(this,arguments)},e.fn.sidr=function(t){var i=e.extend({name:"sidr",speed:200,side:"left",source:null,renaming:!0,body:"body",displace:!0,onOpen:function(){},onClose:function(){}},t),s=i.name,a=e("#"+s);if(0===a.length&&(a=e("<div />").attr("id",s).appendTo(e("body"))),a.addClass("sidr").addClass(i.side).data({speed:i.speed,side:i.side,body:i.body,displace:i.displace,onOpen:i.onOpen,onClose:i.onClose}),"function"==typeof i.source){var r=i.source(s);n.loadContent(a,r)}else if("string"==typeof i.source&&n.isUrl(i.source))e.get(i.source,function(e){n.loadContent(a,e)});else if("string"==typeof i.source){var d="",l=i.source.split(",");if(e.each(l,function(t,i){d+='<div class="sidr-inner">'+e(i).html()+"</div>"}),i.renaming){var c=e("<div />").html(d);c.find("*").each(function(t,i){var o=e(i);n.addPrefix(o)}),d=c.html()}n.loadContent(a,d)}else null!==i.source&&e.error("Invalid Sidr Source");return this.each(function(){var t=e(this),i=t.data("sidr");i||(t.data("sidr",s),"ontouchstart"in document.documentElement?(t.bind("touchstart",function(e){e.originalEvent.touches[0],this.touched=e.timeStamp}),t.bind("touchend",function(e){var t=Math.abs(e.timeStamp-this.touched);200>t&&(e.preventDefault(),o.toggle(s))})):t.click(function(e){e.preventDefault(),o.toggle(s)}))})}})(jQuery);


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
    {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c*(t/=d)*t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c*(t/=d)*t*t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    });

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */



/*
 * LayerSlider
 *
 * (c) 2011-2013 George Krupa, John Gera & Kreatura Media
 *
 * Plugin web:			http://kreaturamedia.com/
 * Licenses: 			http://codecanyon.net/licenses/
 */



eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('16 8A(e,t,n){10(24 e=="bI"){12 r=3g("#"+e)}19 10(24 e=="8C"){12 r=e}12 i,s;2E(t){1j"7y":i="bJ 3g 52";s="7l 7k 75 bH 4z 3c 3m 76 7b 5s 3m 7z bG 9o an 95 94 3c 2m 3g 6i 4R 7T a bE bF 4K 3e 6c 6b\'t 2N 3m 6I. <1V>8Y 91 5b 3m 4m 70 9m 32 9i 14 6I 4K 9c 2m \\"9b 80 9d 32 3r\\" 9e 3o 2m 9g 9f 8U 2m 8T 6X.</1V><br><br>4y 14 bK\'t 7g 3m 89, 7S 8f 32 bL bQ 76 5e 4z-by-4z 32 18 8e 4R 4z 7T 14 52. 4y 44 bR 9V 2m bP 5e, 7S 88 7u 2m 5e 8o 32 7g 14 1j. 4y 1F 3c 3m 7b 7T 14 89, 87 bO be 3m 7z 4K 44 bM 88 7u 2m 8o 3c 2m 7z. bD 8n 5k bC 32 5q bq bs 3c 2m 3g 6i.<br><br>4y bp 3O bo 4z 32 8n 44, 7S 8j a bl 3o 2m bm 6X 3c 2m bn 5b 8m.";1k;1j"8B":i="64 3g 52";s="7l 7k 75 44 8h 8g an 64 2u ("+n+\') 3c 2m 3g 6i. 3e bt at bu 2u 1.7.0 5s bA. 4y 44 8h 8g 2m 4m 2u 3c 3e, 44 6b 8f 8e 2m "3g bB" 5e 5k 2m 6c 5e bz. 4y 44 bx\\\'t bv bw 32 do, 44 6b 8j bS a bT ce 5k cf 8m cd cc. ca cb a 8l 6c 70 8c (5s a 8l cg 8c 3o ch cm) 32 7g 14 52.\';1k;1j"7Y":i="3g 8a 52";s=\'7l 7k 75 4z 3c 3m 76 7b ci cj 3g 8a 4K 9o an 95 94 3c 14 6i 4R 6b bY bk. 8Y 91 5b 3m 4m 70 9m 32 9i 14 6I 4K 9c 2m "9b 80 9d 32 3r" 9e 3o 3m 9g 9f 8U 2m 8T 6X.\';1k}r.1t("11-6Y");r.3C(\'<p 1n="11-c7">!</p>\');r.3C(\'<p 1n="11-6Y-c5">3e: \'+i+"</p>");r.3C(\'<p 1n="11-6Y-7r">\'+s+"</p>")}(16(e){e.8y.2R=16(n){12 r="1.7.0";12 i=e.8y.7y;12 s=e(14);12 o=16(e,t){12 n=e.1W(".");12 r=t.1W(".");2q(12 i=0;i<n.1o;++i){10(r.1o==i){1Q 1e}10(1c(n[i])==1c(r[i])){c2}19 10(1c(n[i])>1c(r[i])){1Q 1e}19{1Q 1a}}10(n.1o!=r.1o){1Q 1a}1Q 1a};10(!o("1.8.0",i)){s.1t("11-8w")}10(!o(r,i)){8A(s,"8B",i)}19{10((24 n).3p("8C|3b")){1Q 14.1X(16(e){3l t(14,n)})}19{10(n=="13"){12 u=e(14).13("3e").g;10(u){1Q u}}19{1Q 14.1X(16(t){12 r=e(14).13("3e");10(r){10(!r.g.30&&!r.g.3K){10(24 n=="3x"){10(n>0&&n<r.g.2H+1&&n!=r.g.2b){r.4f(n)}}19{2E(n){1j"1N":r.o.6k(r.g);r.1N("6y");1k;1j"1R":r.o.6m(r.g);r.1R("6y");1k;1j"27":10(!r.g.2F){r.o.9r(r.g);r.g.2U=1a;r.27()}1k}}}10(n=="4G"){r.d.6g()}10((r.g.2F||!r.g.2F&&r.g.2U)&&n=="1h"){r.o.9s(r.g);r.g.2U=1e;r.g.1H.18(\'2e[1l*="5v.4v"], 2e[1l*="5n.4u"]\').1X(16(){3f(e(14).13("61"))});r.1h()}10(n=="8u 1h"){r.93()}}})}}}};12 t=16(s,o){12 u=14;u.$8x=e(s).1t("11-2i");u.$8x.13("3e",u);u.2N=16(){u.o=e.4D({},t.9F,o);u.g=e.4D({},t.68);u.g.4h=e(s).4a("11-8w")?1e:1a;10(24 8r!="3b"){u.t=e.4D({},8r)}10(24 8q!="3b"){u.ct=e.4D({},8q)}10(!u.g.8s){u.g.8s=1a;u.4G();10(e("4e").18(\'8t[85*="4m"]\').1o){u.g.7L=e("4e").18(\'8t[85*="4m"]\').1f("85").1W("4m")[1]}10(e("4e").18(\'86[1l*="6s"]\').1o){10(e("4e").18(\'86[1l*="6s"]\').1f("1l").1v("?")!=-1){u.g.7M=e("4e").18(\'86[1l*="6s"]\').1f("1l").1W("?")[1].1W("=")[1]}}u.d.aT("3e bi");u.d.aU(\'<a 2g="#">1N</a> | <a 2g="#">1R</a> | <a 2g="#">27</a> | <a 2g="#">1h</a> | <a 2g="#">8u 1h</a>\');u.d.3B.18("a").1X(16(){e(14).2o(16(t){t.3h();e(s).2R(e(14).7r())})});u.d.aT("3e 2u aA");u.d.aU("80 2u: <1V>"+u.g.2u+"</1V>");10(u.g.7M){u.d.aL("6c 2u: <1V>"+u.g.7M+"</1V>")}10(u.g.7L){u.d.aL("4m 2u: <1V>"+u.g.7L+"</1V>")}u.d.aL("3g 2u: <1V>"+e().7y+"</1V>");10(e(s).1f("4l")){u.d.aT("3e 2i");u.d.aU("#"+e(s).1f("4l"))}10(!u.o.2I||u.o.2I==""||!u.o.3N||u.o.3N==""){u.d.aT("aq ap 2I. aw: am 2I 4K / 5s 3N.");u.4q()}19{u.d.aT("al 32 2N 7u 2I: "+u.o.2I,1a);e(s).1t("11-"+u.o.2I);12 n=u.o.3N+u.o.2I+"/2I.17";7s=e("8F");10(!e("8F").1o){7s=e("3r")}10(e(\'6d[2g="\'+n+\'"]\').1o){u.d.aU(\'au "\'+u.o.2I+\'" 3O aE 3G.\');r=e(\'6d[2g="\'+n+\'"]\');10(!u.g.3G){u.g.3G=1a;2f(16(){u.4q()},5r)}}19{10(2r.8P){2r.8P(n);12 r=e(\'6d[2g="\'+n+\'"]\')}19{12 r=e(\'<6d 6h="ar" 2g="\'+n+\'" 4d="7r/17" />\').1r(7s)}}r.2N(16(){10(!u.g.3G){u.d.aU("8O.2N(); 7A");u.g.3G=1a;2f(16(){u.4q()},5r)}});e(2V).2N(16(){10(!u.g.3G){u.d.aU("$(2V).2N(); 7A");u.g.3G=1a;2f(16(){u.4q()},5r)}});2f(16(){10(!u.g.3G){u.d.aT("b8 b6: b5 8O.2N(); 5s $(2V).2N(); b4 7A");u.g.3G=1a;u.4q()}},48)}}};u.4q=16(){10(!e("4e").1f("4l")){e("4e").1f("4l","11-68")}19 10(!e("3r").1f("4l")){e("3r").1f("4l","11-68")}u.g.1D=16(){10(u.g.4k&&u.g.3Z){1Q u.g.4k}19{1Q e(s).1b()}};u.g.1G=16(){10(u.g.4p&&u.g.3Z){1Q u.g.4p}19{1Q e(s).1d()}};10(e(s).18(".11-1P").1o==1){u.o.6a=1e;u.o.77=1e;u.o.6j=1e;u.o.6r=1e;u.o.40=0;u.o.6u=1e;u.o.47=1a;u.o.2c=1;u.o.2Y="bf"}10(u.o.1b){u.g.7h=u.g.2D=""+u.o.1b}19{u.g.7h=u.g.2D=e(s)[0].1I.1b}10(u.o.1d){u.g.46=""+u.o.1d}19{u.g.46=e(s)[0].1I.1d}10(u.g.2D.1v("%")==-1&&u.g.2D.1v("1A")==-1){u.g.2D+="1A"}10(u.g.46.1v("%")==-1&&u.g.46.1v("1A")==-1){u.g.46+="1A"}10(u.o.9L&&u.g.2D.1v("1A")!=-1&&u.g.46.1v("1A")!=-1){u.g.3J=1a}19{u.g.3J=1e}e(s).18(\'*[1n*="11-s"], *[1n*="11-bg"]\').1X(16(){10(!e(14).2v().4a("11-1P")){e(14).bd(e(14).2v())}});e(s).18(".11-1P").1X(16(){e(14).2T(\':a8([1n*="11-"])\').1X(16(){e(14).5q()})});e(s).18(\'.11-1P, *[1n*="11-s"]\').1X(16(){10(e(14).1f("6h")||e(14).1f("1I")){10(e(14).1f("6h")){12 t=e(14).1f("6h").3a().1W(";")}19{12 t=e(14).1f("1I").3a().1W(";")}2q(x=0;x<t.1o;x++){3q=t[x].1W(":");10(3q[0].1v("3V")!=-1){3q[1]=u.9n(3q[1])}12 n="";10(3q[2]){n=":"+e.4V(3q[2])}10(3q[0]!=" "&&3q[0]!=""){e(14).13(e.4V(3q[0]),e.4V(3q[1])+n)}}}12 r=e(14);r.13("3T",r[0].1I.1i);r.13("3P",r[0].1I.1u);10(e(14).3O("a")&&e(14).2T().1o>0){r=e(14).2T()}12 i=r.1b();12 s=r.1d();10(r[0].1I.1b&&r[0].1I.1b.1v("%")!=-1){i=r[0].1I.1b}10(r[0].1I.1d&&r[0].1I.1d.1v("%")!=-1){s=r[0].1I.1d}r.13("33",i);r.13("2Z",s);r.13("6O",r.17("22-1i"));r.13("6J",r.17("22-1J"));r.13("6N",r.17("22-1u"));r.13("6M",r.17("22-1s"));10(!u.g.1O){12 o=24 41(r.17("2z"))=="3x"?1x.55(41(r.17("2z"))*1Z)/1Z:1;e(14).13("5U",o)}10(r.17("38-1i-1b").1v("1A")==-1){r.13("5Y",r[0].1I.8X)}19{r.13("5Y",r.17("38-1i-1b"))}10(r.17("38-1J-1b").1v("1A")==-1){r.13("5E",r[0].1I.8V)}19{r.13("5E",r.17("38-1J-1b"))}10(r.17("38-1u-1b").1v("1A")==-1){r.13("5X",r[0].1I.8W)}19{r.13("5X",r.17("38-1u-1b"))}10(r.17("38-1s-1b").1v("1A")==-1){r.13("5I",r[0].1I.92)}19{r.13("5I",r.17("38-1s-1b"))}r.13("9l",r.17("9k-9a"));r.13("8p",r.17("99-1d"))});10(2r.7F.8R){2q(12 t=0;t<e(s).18(".11-1P").1o;t++){10(e(s).18(".11-1P").3z(t).13("bc")==2r.7F.8R.1W("#")[1]){u.o.2c=t+1}}}e(s).18(\'*[1n*="11-7K-"]\').1X(16(){12 t=e(14).1f("1n").1W(" ");2q(12 n=0;n<t.1o;n++){10(t[n].1v("11-7K-")!=-1){12 r=1c(t[n].1W("11-7K-")[1]);e(14).17({b1:"b0"}).2o(16(t){t.3h();e(s).2R(r)})}}});u.g.2H=e(s).18(".11-1P").1o;10(u.o.6q&&u.g.2H>2){u.o.2c=="2t";u.o.7c=1e}19{u.o.6q=1e}10(u.o.2c=="2t"){u.o.2c=1x.2a(1x.2t()*u.g.2H+1)}u.o.2c=u.o.2c<u.g.2H+1?u.o.2c:1;u.o.2c=u.o.2c<1?1:u.o.2c;u.g.3Y=1;10(u.o.4t){u.g.3Y=0}12 n=2r.7F.2g.1v("aO:")==-1?"":"aM:";e(s).18(\'2e[1l*="5v.4v"], 2e[1l*="4v.be"]\').1X(16(){e(14).2v().1t("11-6e-1P");10(e(14).2v(\'[1n*="11-s"]\')){12 t=e(14);e.8M(n+"//aK.8S.7Z/aH/8H/aI/"+e(14).1f("1l").1W("8N/")[1].1W("?")[0]+"?v=2&aJ=8I&8J=?",16(e){t.13("6v",1c(e["aP"]["aQ$aY"]["aZ$2k"]["aX"])*48)});12 r=e("<1g>").1t("11-5l").1r(e(14).2v());e("<28>").1r(r).1t("11-43").1f("1l",n+"//28.8S.7Z/aR/"+e(14).1f("1l").1W("8N/")[1].1W("?")[0]+"/"+u.o.9B);e("<1g>").1r(r).1t("11-8L");e(14).2v().17({1b:e(14).1b(),1d:e(14).1d()}).2o(16(){u.g.30=1a;10(u.g.3t){10(u.o.47!=1e){u.g.3t=1e}u.g.2U=1a}19{u.g.2U=u.g.2F}10(u.o.47!=1e){u.1h()}u.g.5w=1a;e(14).18("2e").1f("1l",e(14).18("2e").13("4o"));e(14).18(".11-5l").1C(u.g.v.d).2X(u.g.v.71,16(){10(u.o.47=="1U"&&u.g.2U==1a){12 e=2f(16(){u.27()},t.13("6v")-u.g.v.d);t.13("61",e)}u.g.30=1e;10(u.g.36==1a){u.3H(u.g.1H,16(){u.g.36=1e})}})});12 i="&";10(e(14).1f("1l").1v("?")==-1){i="?"}10(e(14).1f("1l").1v("3s=0")!=-1){e(14).13("4o",e(14).1f("1l").2n("3s=0","3s=1"))}19 10(e(14).1f("1l").1v("3s")==-1){e(14).13("4o",e(14).1f("1l")+i+"3s=1")}e(14).13("33",e(14).1f("1b"));e(14).13("2Z",e(14).1f("1d"));e(14).1f("1l","")}});e(s).18(\'2e[1l*="5n.4u"]\').1X(16(){e(14).2v().1t("11-6e-1P");10(e(14).2v(\'[1n*="11-s"]\')){12 t=e(14);12 r=e("<1g>").1t("11-5l").1r(e(14).2v());e.8M(n+"//4u.7Z/8H/dL/6e/"+e(14).1f("1l").1W("6e/")[1].1W("?")[0]+".8I?8J=?",16(n){e("<28>").1r(r).1t("11-43").1f("1l",n[0]["dK"]);t.13("6v",1c(n[0]["2k"])*48);e("<1g>").1r(r).1t("11-8L")});e(14).2v().17({1b:e(14).1b(),1d:e(14).1d()}).2o(16(){u.g.30=1a;10(u.g.3t){10(u.o.47!=1e){u.g.3t=1e}u.g.2U=1a}19{u.g.2U=u.g.2F}10(u.o.47!=1e){u.1h()}u.g.5w=1a;e(14).18("2e").1f("1l",e(14).18("2e").13("4o"));e(14).18(".11-5l").1C(u.g.v.d).2X(u.g.v.71,16(){10(u.o.47=="1U"&&u.g.2U==1a){12 e=2f(16(){u.27()},t.13("6v")-u.g.v.d);t.13("61",e)}u.g.30=1e;10(u.g.36==1a){u.3H(u.g.1H,16(){u.g.36=1e})}})});12 i="&";10(e(14).1f("1l").1v("?")==-1){i="?"}10(e(14).1f("1l").1v("3s=0")!=-1){e(14).13("4o",e(14).1f("1l").2n("3s=0","3s=1"))}19 10(e(14).1f("1l").1v("3s")==-1){e(14).13("4o",e(14).1f("1l")+i+"3s=1")}e(14).13("33",e(14).1f("1b"));e(14).13("2Z",e(14).1f("1d"));e(14).1f("1l","")}});10(u.o.4t){u.o.2c=u.o.2c-1==0?u.g.2H:u.o.2c-1}u.g.2b=u.o.2c;u.g.1H=e(s).18(".11-1P:3z("+(u.g.2b-1)+")");e(s).18(".11-1P").dQ(\'<1g 1n="11-23"></1g>\');e("<1g>").1t("11-3F-dV").5R(e(s));10(u.o.9P){u.g.3y=e("<1g>").1t("11-dU-5g").1r(e(s).18(".11-23"))}10(u.o.9S&&!u.g.1O){u.g.2P=e("<1g>").1t("11-ds-5g").1r(e(s).18(".11-23"));u.g.2P.3C(e(\'<1g 1n="11-ct-1i"><1g 1n="11-ct-3k"><1g 1n="11-ct-9j"><1g 1n="11-ct-8K"></1g></1g></1g></1g><1g 1n="11-ct-1J"><1g 1n="11-ct-3k"><1g 1n="11-ct-9j"><1g 1n="11-ct-8K"></1g></1g></1g></1g><1g 1n="11-ct-dD"></1g>\'))}u.g.3i=e("<1g>").17({aa:-1,1y:"1F"}).1t("11-8G-2i").1r(e(s));e("<1g>").1t("11-8G-dv").1r(u.g.3i);10(e(s).17("34")=="dx"){e(s).17("34","8Q")}10(u.o.6t){e(s).18(".11-23").17({dE:"5o("+u.o.6t+")"})}19{e(s).18(".11-23").17({dH:u.o.6E})}10(u.o.6E=="6S"&&u.o.6t==1e){e(s).18(".11-23").17({42:"1F 6S !dI"})}10(u.g.3J&&u.g.6Z()!=1a&&u.o.9u&&(24 4i(2r,"8i")!="3b"||24 4i(2r,"9h")!="3b")){12 r=e("<a>").17("1y","1F").1t("11-5L").2o(16(){u.8d()}).1r(e(s).18(".11-23"));e(s).1L(16(){10(u.g.1O){r.17({1y:"29"})}19{r.1h(1a,1a).2x(2l)}},16(){10(u.g.1O){r.17({1y:"1F"})}19{r.1h(1a,1a).2X(2l)}});2r.7I("dO",16(){10(!2r.5L){u.4P()}19{}},1e);2r.7I("dT",16(){10(!2r.dR){u.4P()}19{}},1e);2r.7I("dS",16(){10(!2r.dr){u.4P()}19{}},1e)}10(u.o.77){e(\'<a 1n="11-1m-1N" 2g="#" />\').2o(16(t){t.3h();e(s).2R("1N")}).1r(e(s));e(\'<a 1n="11-1m-1R" 2g="#" />\').2o(16(t){t.3h();e(s).2R("1R")}).1r(e(s));10(u.o.9H){e(s).18(".11-1m-1N, .11-1m-1R").17({1y:"1F"});e(s).1L(16(){10(!u.g.7d){10(u.g.1O){e(s).18(".11-1m-1N, .11-1m-1R").17("1y","29")}19{e(s).18(".11-1m-1N, .11-1m-1R").1h(1a,1a).2x(2l)}}},16(){10(u.g.1O){e(s).18(".11-1m-1N, .11-1m-1R").17("1y","1F")}19{e(s).18(".11-1m-1N, .11-1m-1R").1h(1a,1a).2X(2l)}})}}10(u.o.6j||u.o.6r){12 i=e(\'<1g 1n="11-1s-1m-2K" />\').1r(e(s));u.g.31=i;10(u.o.2Y=="4j"){i.1t("11-8Z-4I")}10(u.o.6r&&u.o.2Y!="4j"){e(\'<4L 1n="11-1s-4n" />\').1r(e(s).18(".11-1s-1m-2K"));10(u.o.2Y=="1L"){12 o=e(\'<1g 1n="11-1z-1L"><1g 1n="11-1z-1L-23"><1g 1n="11-1z-1L-bg"></1g><1g 1n="11-1z-1L-28"><28></1g><4L></4L></1g></1g>\').1r(e(s).18(".11-1s-4n"))}2q(x=1;x<u.g.2H+1;x++){12 a=e(\'<a 2g="#" />\').1r(e(s).18(".11-1s-4n")).2o(16(t){t.3h();e(s).2R(e(14).4U()+1)});10(u.o.2Y=="1L"){e(s).18(".11-1z-1L, .11-1z-1L-28").17({1b:u.o.7e,1d:u.o.5a});12 f=e(s).18(".11-1z-1L");12 l=f.18("28").17({1d:u.o.5a});12 c=e(s).18(".11-1z-1L-23").17({21:"2Q",1y:"29"});a.1L(16(){12 t=e(s).18(".11-1P").3z(e(14).4U());10(t.18(".11-66").1o){12 n=t.18(".11-66").1f("1l")}19 10(t.18(".11-43").1o){12 n=t.18(".11-43").1f("1l")}19 10(t.18(".11-bg").1o){12 n=t.18(".11-bg").1f("1l")}19{12 n=u.o.3N+u.o.2I+"/6T.5J"}e(s).18(".11-1z-1L-28").17({1i:1c(f.17("22-1i")),1u:1c(f.17("22-1u"))});l.2N(16(){10(e(14).1b()==0){l.17({34:"8Q",2S:"0 1U",1i:"1U"})}19{l.17({34:"dm",2B:-e(14).1b()/2,1i:"50%"})}}).1f("1l",n);f.17({1y:"29"}).1h().20({1i:e(14).34().1i+(e(14).1b()-f.4M())/2},7q,"6f");c.17({1y:"1F",21:"2w"}).1h().2x(7q)},16(){c.1h().2X(7q,16(){f.17({21:"2Q",1y:"29"})})})}}10(u.o.2Y=="1L"){o.1r(e(s).18(".11-1s-4n"))}e(s).18(".11-1s-4n a:3z("+(u.o.2c-1)+")").1t("11-1m-1S")}10(u.o.6j){12 h=e(\'<a 1n="11-1m-27" 2g="#" />\').2o(16(t){t.3h();e(s).2R("27")}).5R(e(s).18(".11-1s-1m-2K"));12 p=e(\'<a 1n="11-1m-1h" 2g="#" />\').2o(16(t){t.3h();e(s).2R("1h")}).1r(e(s).18(".11-1s-1m-2K"))}19 10(u.o.2Y!="4j"){e(\'<4L 1n="11-1m-8E 11-1m-di" />\').5R(e(s).18(".11-1s-1m-2K"));e(\'<4L 1n="11-1m-8E 11-1m-dk" />\').1r(e(s).18(".11-1s-1m-2K"))}10(u.o.6l&&u.o.2Y!="4j"){i.17({1y:"1F"});e(s).1L(16(){10(!u.g.7d){10(u.g.1O){i.17("1y","29")}19{i.1h(1a,1a).2x(2l)}}},16(){10(u.g.1O){i.17("1y","1F")}19{i.1h(1a,1a).2X(2l)}})}}10(u.o.2Y=="4j"){u.g.3v=e(\'<1g 1n="11-1z-2K"></1g>\').1r(e(s));12 o=e(\'<1g 1n="11-1z"><1g 1n="11-1z-23"><1g 1n="11-1z-1M-2i"><1g 1n="11-1z-1M"></1g></1g></1g></1g>\').1r(u.g.3v);u.g.4I=e(s).18(".11-1z-1M-2i");10(!("5A"3o 2V)){u.g.4I.1L(16(){e(14).1t("11-1z-1M-1L")},16(){e(14).2W("11-1z-1M-1L");u.7W()}).dl(16(t){12 n=1c(t.dt-e(14).8k().1i)/e(14).1b()*(e(14).1b()-e(14).18(".11-1z-1M").1b());e(14).18(".11-1z-1M").1h().17({2B:n})})}19{u.g.4I.1t("11-du")}e(s).18(".11-1P").1X(16(){12 t=e(14).4U()+1;10(e(14).18(".11-66").1o){12 n=e(14).18(".11-66").1f("1l")}19 10(e(14).18(".11-43").1o){12 n=e(14).18(".11-43").1f("1l")}19 10(e(14).18(".11-bg").1o){12 n=e(14).18(".11-bg").1f("1l")}10(n){12 r=e(\'<a 2g="#" 1n="11-3L-\'+t+\'"><28 1l="\'+n+\'"></a>\')}19{12 r=e(\'<a 2g="#" 1n="11-6T 11-3L-\'+t+\'"><28 1l="\'+u.o.3N+u.o.2I+\'/6T.5J"></a>\')}r.1r(e(s).18(".11-1z-1M"));10(!("5A"3o 2V)){r.1L(16(){e(14).2T().1h().5G(2l,u.o.7n/1Z)},16(){10(!e(14).2T().4a("11-3L-1S")){e(14).2T().1h().5G(2l,u.o.6L/1Z)}})}r.2o(16(n){n.3h();e(s).2R(t)})});10(h&&p){12 d=u.g.31=e(\'<1g 1n="11-1s-1m-2K 11-dA-4I"></1g>\').1r(e(s));h.7f().2o(16(t){t.3h();e(s).2R("27")}).1r(d);p.7f().2o(16(t){t.3h();e(s).2R("1h")}).1r(d)}10(u.o.6l){u.g.3v.17("1y","1F");10(d){u.g.31=d.17("1y")=="29"?d:e(s).18(".11-8Z-4I");u.g.31.17("1y","1F")}e(s).1L(16(){e(s).1t("11-1L");10(!u.g.7d){10(u.g.1O){u.g.3v.17("1y","29");10(u.g.31){u.g.31.17("1y","29")}}19{u.g.3v.1h(1a,1a).2x(2l);10(u.g.31){u.g.31.1h(1a,1a).2x(2l)}}}},16(){e(s).2W("11-1L");10(u.g.1O){u.g.3v.17("1y","1F");10(u.g.31){u.g.31.17("1y","1F")}}19{u.g.3v.1h(1a,1a).2X(2l);10(u.g.31){u.g.31.1h(1a,1a).2X(2l)}}})}}u.g.3E=e(\'<1g 1n="11-3E"></1g>\').1r(e(s));10(u.g.3E.17("1y")=="29"&&!u.g.3E.18("28").1o){u.g.65=16(){u.g.3E.17({1y:"1F",21:"2w"}).2x(3S,16(){u.g.65=1e})};u.g.4s=e("<28>").1f("1l",u.o.3N+u.o.2I+"/3E.5J").1r(u.g.3E);u.g.96=24 1c(e(s).17("22-1s"))=="3x"?1c(e(s).17("22-1s")):0}u.78();10(u.o.9U&&e(s).18(".11-1P").1o>1){e("3r").6C("dw",16(e){10(!u.g.30&&!u.g.3K){10(e.4R==37){u.o.6k(u.g);u.1N("6y")}19 10(e.4R==39){u.o.6m(u.g);u.1R("6y")}}})}10("5A"3o 2V&&e(s).18(".11-1P").1o>1&&u.o.9M){e(s).18(".11-23").6C("dq",16(e){12 t=e.4C?e.4C:e.98.4C;10(t.1o==1){u.g.6D=u.g.4X=t[0].97}});e(s).18(".11-23").6C("dF",16(e){12 t=e.4C?e.4C:e.98.4C;10(t.1o==1){u.g.4X=t[0].97}10(1x.3Q(u.g.6D-u.g.4X)>45){e.3h()}});e(s).18(".11-23").6C("dN",16(t){10(1x.3Q(u.g.6D-u.g.4X)>45){10(u.g.6D-u.g.4X>0){u.o.6m(u.g);e(s).2R("1R")}19{u.o.6k(u.g);e(s).2R("1N")}}})}10(u.o.9O==1a&&e(s).18(".11-1P").1o>1){e(s).18(".11-23").1L(16(){u.o.9y(u.g);10(u.g.2F){u.g.3t=1a;u.1h();10(u.g.3y){u.g.3y.1h()}10(u.g.2P){u.g.2P.18(".11-ct-3k").1h()}u.g.3w=(3l 4x).4E()}},16(){10(u.g.3t==1a){u.27();u.g.3t=1e}})}u.72();10(u.o.1p){u.g.1p=e("<28>").1t("11-dg").1r(e(s)).1f("1I",u.o.9J).17({21:"2Q",1y:"cJ"}).2N(16(){12 t=0;10(!u.g.1p){t=48}2f(16(){u.g.1p.13("33",u.g.1p.1b());u.g.1p.13("2Z",u.g.1p.1d());10(u.g.1p.17("1i")!="1U"){u.g.1p.13("3T",u.g.1p[0].1I.1i)}10(u.g.1p.17("1J")!="1U"){u.g.1p.13("5d",u.g.1p[0].1I.1J)}10(u.g.1p.17("1u")!="1U"){u.g.1p.13("3P",u.g.1p[0].1I.1u)}10(u.g.1p.17("1s")!="1U"){u.g.1p.13("5c",u.g.1p[0].1I.1s)}10(u.o.79!=1e){e("<a>").1r(e(s)).1f("2g",u.o.79).1f("cI",u.o.9K).17({cH:"1F",cF:"1F"}).3C(u.g.1p)}u.g.1p.17({1y:"1F",21:"2w"});u.7U()},t)}).1f("1l",u.o.1p)}e(2V).36(16(){u.g.36=1a;10(!u.g.30){u.3H(u.g.1H,16(){10(u.g.2y){u.g.2y.4Q()}u.g.36=1e});10(u.g.1p){u.7U()}}});u.g.8D=1a;10(u.o.4t==1a){10(u.o.6a){u.g.2F=1a;e(s).18(".11-1m-27").1t("11-1m-27-1S")}19{e(s).18(".11-1m-1h").1t("11-1m-1h-1S")}u.1R()}19{u.58(u.g.1H,16(){u.g.1H.2x(48,16(){u.g.3K=1e;e(14).1t("11-1S");10(u.o.73){e(14).1C(e(14).13("53")+25).cG(16(){e(14).18(".11-43").2o();e(14).7a()})}u.g.1H.18(\' > *[1n*="11-s"]\').1X(16(){10(e(14).13("5V")>0){12 t=e(14);t.13("5T",2f(16(){u.84(t)},t.13("5V")))}})});u.7R(u.g.2b);10(u.o.6a){u.g.3K=1e;u.27()}19{e(s).18(".11-1m-1h").1t("11-1m-1h-1S")}})}u.o.9q(e(s))};u.8d=16(){10(!u.g.30&&!u.g.3K){10(4i(2r,"8i")||4i(2r,"9h")){4i(2r,"cK");u.4P()}19{u.g.4k=u.g.1D();u.g.4p=u.g.1G();u.g.5y=u.g.1B;4i(e(s)[0],"cL");e(s).1t("11-2i-5L")}}};u.4P=16(){u.g.3Z=1a;e(s).2W("11-2i-5L")};u.27=16(){10(u.g.2F){10(u.g.2h=="1N"&&u.o.7c){u.1N()}19{u.1R()}}19{u.g.2F=1a;10(!u.g.30&&!u.g.3K){u.5g()}}e(s).18(".11-1m-27").1t("11-1m-27-1S");e(s).18(".11-1m-1h").2W("11-1m-1h-1S")};u.5g=16(){12 t=e(s).18(".11-1S").13("5H")?1c(e(s).18(".11-1S").13("5H")):u.o.7p;10(!u.o.4t&&!e(s).18(".11-1S").13("5H")){12 n=e(s).18(".11-1P:3z("+(u.o.2c-1)+")").13("5H");t=n?n:u.o.7p}3f(u.g.3X);10(u.g.3w){10(!u.g.3W){u.g.3W=(3l 4x).4E()}10(u.g.3W>u.g.3w){u.g.3w=(3l 4x).4E()}10(!u.g.2O){u.g.2O=t}u.g.2O-=u.g.3w-u.g.3W;u.g.3w=1e;u.g.3W=(3l 4x).4E()}19{u.g.2O=t;u.g.3W=(3l 4x).4E()}u.g.2O=1c(u.g.2O);u.g.3X=2V.2f(16(){u.g.3W=u.g.3w=u.g.2O=1e;u.27()},u.g.2O);10(u.g.3y){u.g.3y.20({1b:u.g.1D()},u.g.2O,"5P",16(){e(14).17({1b:0})})}10(u.g.2P){12 r=u.g.2P.18(".11-ct-1J .11-ct-3k");12 i=u.g.2P.18(".11-ct-1i .11-ct-3k");10(u.g.2P.17("1y")=="1F"){r.17({1K:0});i.17({1K:0});u.g.2P.2x(cP)}12 o=16(){i.20({1K:5B},t/2,"5P")};12 a=r;12 f=u.g.2O-t/2;10(u.g.2O<t/2){a=i;f=u.g.2O;o=16(){}}a.1h(1a,1a).20({1K:5B},f,"5P",16(){o()})}};u.1h=16(){u.g.3w=(3l 4x).4E();10(u.g.3y){u.g.3y.1h()}10(u.g.2P){u.g.2P.18(".11-ct-3k").1h()}10(!u.g.3t&&!u.g.2U){e(s).18(".11-1m-1h").1t("11-1m-1h-1S");e(s).18(".11-1m-27").2W("11-1m-27-1S")}3f(u.g.3X);u.g.2F=1e};u.93=16(){e(s).18("*").1h(1a,1e).7a();10(!u.g.3t&&!u.g.2U){e(s).18(".11-1m-1h").1t("11-1m-1h-1S");e(s).18(".11-1m-27").2W("11-1m-27-1S")}3f(u.g.3X);u.g.2F=1e};u.cO=16(){e(s).18("*").1h();3f(u.g.3X);u.4f(u.g.2b,u.g.2h)};u.9n=16(t){10(e.4V(t.3a())=="dh"||e.4V(t.3a())=="5P"){1Q t.3a()}19{1Q t.2n("cE","cD").2n("cv","cu").2n("cs","cq").2n("cr","cw").2n("cx","cC").2n("cB","cA").2n("cy","cz").2n("cQ","cR").2n("d9","d8").2n("d7","d5").2n("d6","da").2n("5x","db").2n("df","de")}};u.1N=16(e){10(u.g.2b<2){u.g.3Y+=1}10(u.g.3Y>u.o.40&&u.o.40>0&&!e){u.g.3Y=0;u.1h();10(u.o.6u==1e){u.o.40=0}}19{12 t=u.g.2b<2?u.g.2H:u.g.2b-1;u.g.2h="1N";u.4f(t,u.g.2h)}};u.1R=16(e){10(!u.o.6q){10(!(u.g.2b<u.g.2H)){u.g.3Y+=1}10(u.g.3Y>u.o.40&&u.o.40>0&&!e){u.g.3Y=0;u.1h();10(u.o.6u==1e){u.o.40=0}}19{12 t=u.g.2b<u.g.2H?u.g.2b+1:1;u.g.2h="1R";u.4f(t,u.g.2h)}}19 10(!e){12 t=u.g.2b;12 n=16(){t=1x.2a(1x.2t()*u.g.2H)+1;10(t==u.g.2b){n()}19{u.g.2h="1R";u.4f(t,u.g.2h)}};n()}19 10(e){12 t=u.g.2b<u.g.2H?u.g.2b+1:1;u.g.2h="1R";u.4f(t,u.g.2h)}};u.4f=16(t,n){u.g.3W=u.g.3w=u.g.2O=1e;10(u.g.3y){u.g.3y.1h().1C(2l).20({1b:0},8v)}10(u.g.2P){u.g.2P.1C(2l).2X(3S).18(".11-ct-3k").1h().1C(2l).20({1K:0},8v)}10(u.g.5w==1a){u.g.5w=1e;u.g.2F=u.g.2U;u.g.1H.18(\'2e[1l*="5v.4v"], 2e[1l*="5n.4u"]\').1X(16(){e(14).2v().18(".11-5l").2x(u.g.v.7m,16(){e(14).2v().18("2e").1f("1l","")})})}e(s).18(\'2e[1l*="5v.4v"], 2e[1l*="5n.4u"]\').1X(16(){3f(e(14).13("61"))});3f(u.g.3X);u.g.5i=t;u.g.1w=e(s).18(".11-1P:3z("+(u.g.5i-1)+")");10(!n){10(u.g.2b<u.g.5i){u.g.2h="1R"}19{u.g.2h="1N"}}12 r=0;10(e(s).18(\'2e[1l*="5v.4v"], 2e[1l*="5n.4u"]\').1o>0){r=u.g.v.7m}3f(u.g.7Q);u.g.7Q=2f(16(){12 e=16(){10(u.g.3Z){2f(16(){e()},3S)}19{u.58(u.g.1w,16(){u.20()})}};e()},r)};u.58=16(t,n){u.g.3K=1a;10(u.g.8D){e(s).17({21:"2w"})}10(u.o.58){12 r=[];12 i=0;10(t.17("42-4w")!="1F"&&t.17("42-4w").1v("5o")!=-1){12 o=t.17("42-4w");o=o.3p(/5o\\((.*)\\)/)[1].2n(/"/8z,"");r.4A(o)}t.18("28").1X(16(){r.4A(e(14).1f("1l"))});t.18("*").1X(16(){10(e(14).17("42-4w")!="1F"&&e(14).17("42-4w").1v("5o")!=-1){12 t=e(14).17("42-4w");t=t.3p(/5o\\((.*)\\)/)[1].2n(/"/8z,"");r.4A(t)}});10(r.1o==0){e(".11-1z-2K, .11-1m-1R, .11-1m-1N, .11-1s-1m-2K").17({21:"2w"});u.3H(t,n)}19{10(u.g.1O){u.g.3i.17("1y","29")}19{u.g.3i.1C(cW).2x(2l)}2q(x=0;x<r.1o;x++){e("<28>").2N(16(){10(++i==r.1o){u.g.3i.1h(1a,1a).17({1y:"1F"});e(".11-1z-2K, .11-1m-1R, .11-1m-1N, .11-1s-1m-2K").17({21:"2w"});u.3H(t,n)}}).1f("1l",r[x])}}}19{e(".11-1z-2K, .11-1m-1R, .11-1m-1N, .11-1s-1m-2K").17({21:"2w"});u.3H(t,n)}};u.3H=16(t,n){t.17({21:"2Q",1y:"29"});10(u.g.65){u.g.65()}u.72();10(u.o.2Y=="4j"){u.9G()}t.2T().1X(16(){12 t=e(14);12 n=t.13("3T")?t.13("3T"):"0";12 r=t.13("3P")?t.13("3P"):"0";10(t.3O("a")&&t.2T().1o>0){t.17({1y:"29"});t=t.2T()}12 i="1U";12 s="1U";10(t.13("33")){10(24 t.13("33")=="3x"){i=1c(t.13("33"))*u.g.1B}19 10(t.13("33").1v("%")!=-1){i=t.13("33")}}10(t.13("2Z")){10(24 t.13("2Z")=="3x"){s=1c(t.13("2Z"))*u.g.1B}19 10(t.13("2Z").1v("%")!=-1){s=t.13("2Z")}}12 o=t.13("6O")?1c(t.13("6O"))*u.g.1B:0;12 a=t.13("6J")?1c(t.13("6J"))*u.g.1B:0;12 f=t.13("6N")?1c(t.13("6N"))*u.g.1B:0;12 l=t.13("6M")?1c(t.13("6M"))*u.g.1B:0;12 c=t.13("5Y")?1c(t.13("5Y"))*u.g.1B:0;12 h=t.13("5E")?1c(t.13("5E"))*u.g.1B:0;12 p=t.13("5X")?1c(t.13("5X"))*u.g.1B:0;12 d=t.13("5I")?1c(t.13("5I"))*u.g.1B:0;12 v=t.13("9l");12 m=t.13("8p");10(u.g.3J||u.o.4c>0){10(t.3O("28")&&!t.4a("11-bg")){t.17({1b:"1U",1d:"1U"});10((i==0||i=="1U")&&24 s=="3x"&&s!=0){i=s/t.1d()*t.1b()}10((s==0||s=="1U")&&24 i=="3x"&&i!=0){s=i/t.1b()*t.1d()}10(i=="1U"){i=t.1b()*u.g.1B}10(s=="1U"){s=t.1d()*u.g.1B}t.17({1b:i,1d:s})}10(!t.3O("28")){t.17({1b:i,1d:s,"9k-9a":1c(v)*u.g.1B+"1A","99-1d":1c(m)*u.g.1B+"1A"})}10(t.3O("1g")&&t.18("2e").13("4o")){12 g=t.18("2e");g.1f("1b",1c(g.13("33"))*u.g.1B).1f("1d",1c(g.13("2Z"))*u.g.1B);t.17({1b:1c(g.13("33"))*u.g.1B,1d:1c(g.13("2Z"))*u.g.1B})}t.17({22:f+"1A "+a+"1A "+l+"1A "+o+"1A ",8X:c+"1A",8V:h+"1A",8W:p+"1A",92:d+"1A"})}10(!t.4a("11-bg")){12 y=t;10(t.2v().3O("a")){t=t.2v()}12 b=u.o.7i>0?(u.g.1D()-u.o.7i)/2:0;b=b<0?0:b;10(n.1v("%")!=-1){t.17({1i:u.g.1D()/1Z*1c(n)-y.1b()/2-o-c})}19 10(b>0||u.g.3J||u.o.4c>0){t.17({1i:b+1c(n)*u.g.1B})}10(r.1v("%")!=-1){t.17({1u:u.g.1G()/1Z*1c(r)-y.1d()/2-f-p})}19 10(u.g.3J||u.o.4c>0){t.17({1u:1c(r)*u.g.1B})}}19{t.17({1b:"1U",1d:"1U"});i=t.1b();s=t.1d();12 w=u.g.1B;10(u.g.2D.1v("%")!=-1){10(u.g.1D()>i){w=u.g.1D()/i;10(u.g.1G()>s*w){w=u.g.1G()/s}}19 10(u.g.1G()>s){w=u.g.1G()/s;10(u.g.1D()>i*w){w=u.g.1D()/i}}}t.17({1b:1x.55(i*w),1d:1x.55(s*w),2B:-1x.55(i*w)/2+"1A",2M:-1x.55(s*w)/2+"1A"})}});t.17({1y:"1F",21:"2w"});u.78();n();e(14).7a();10(u.g.4k&&u.g.3Z){u.g.4k=1e;u.g.4p=1e;u.g.5y=1e;u.g.3Z=1e}};u.78=16(){10(u.g.4s){12 e=16(){10(u.g.4s.1d()>0){10(u.g.96>0){u.g.3E.17({1d:u.g.4s.1d()/2})}19{u.g.3E.17({1d:u.g.4s.1d(),2M:-u.g.4s.1d()/2})}}19{2f(16(){e()},50)}};e()}};u.72=16(){10(u.o.4c>0){10(e(2V).1b()<u.o.4c){u.g.3J=1a;u.g.2D=u.o.4c+"1A"}19{u.g.3J=1e;u.g.2D=u.g.7h;u.g.1B=1}}10(u.g.3J){12 t=e(s).2v();10(u.g.5y&&u.g.3Z){e(s).17({1b:u.g.4k});u.g.1B=u.g.5y;e(s).17({1d:u.g.4p})}19{e(s).17({1b:t.1b()-1c(e(s).17("22-1i"))-1c(e(s).17("22-1J"))});u.g.1B=e(s).1b()/1c(u.g.2D);e(s).17({1d:u.g.1B*1c(u.g.46)})}}19{u.g.1B=1;e(s).17({1b:u.g.2D,1d:u.g.46})}10(e(s).59(".11-5h-5f-2i").1o){e(s).59(".11-5h-5f-8b").17({1d:e(s).4S(1a)});e(s).59(".11-5h-5f-2i").17({1d:e(s).4S(1a)});e(s).59(".11-5h-5f-8b").17({1b:e(2V).1b(),1i:-e(s).59(".11-5h-5f-2i").8k().1i});10(u.g.2D.1v("%")!=-1){12 n=1c(u.g.2D);12 r=e("3r").1b()/1Z*n-(e(s).4M()-e(s).1b());e(s).1b(r)}}e(s).18(".11-23, .11-74-2i").17({1b:u.g.1D(),1d:u.g.1G()});10(u.g.1H&&u.g.1w){u.g.1H.17({1b:u.g.1D(),1d:u.g.1G()});u.g.1w.17({1b:u.g.1D(),1d:u.g.1G()})}19{e(s).18(".11-1P").17({1b:u.g.1D(),1d:u.g.1G()})}};u.7U=16(){u.g.1p.17({1b:u.g.1p.13("33")*u.g.1B,1d:u.g.1p.13("2Z")*u.g.1B});10(u.g.1O){u.g.1p.17("1y","29")}19{u.g.1p.2x(2l)}12 t=5K=5N=5M="1U";10(u.g.1p.13("3T")&&u.g.1p.13("3T").1v("%")!=-1){t=u.g.1D()/1Z*1c(u.g.1p.13("3T"))-u.g.1p.1b()/2+1c(e(s).17("22-1i"))}19{t=1c(u.g.1p.13("3T"))*u.g.1B}10(u.g.1p.13("5d")&&u.g.1p.13("5d").1v("%")!=-1){5K=u.g.1D()/1Z*1c(u.g.1p.13("5d"))-u.g.1p.1b()/2+1c(e(s).17("22-1J"))}19{5K=1c(u.g.1p.13("5d"))*u.g.1B}10(u.g.1p.13("3P")&&u.g.1p.13("3P").1v("%")!=-1){5N=u.g.1G()/1Z*1c(u.g.1p.13("3P"))-u.g.1p.1d()/2+1c(e(s).17("22-1u"))}19{5N=1c(u.g.1p.13("3P"))*u.g.1B}10(u.g.1p.13("5c")&&u.g.1p.13("5c").1v("%")!=-1){5M=u.g.1G()/1Z*1c(u.g.1p.13("5c"))-u.g.1p.1d()/2+1c(e(s).17("22-1s"))}19{5M=1c(u.g.1p.13("5c"))*u.g.1B}u.g.1p.17({1i:t,1J:5K,1u:5N,1s:5M})};u.9G=16(){u.81("5b");12 t=u.g.2D.1v("%")==-1?1c(u.g.2D):u.g.1D();e(s).18(".11-1z-1M a").17({1b:1c(u.o.7e*u.g.1B),1d:1c(u.o.5a*u.g.1B)});e(s).18(".11-1z-1M a:3M").17({2S:0});e(s).18(".11-1z-1M").17({1d:1c(u.o.5a*u.g.1B)});12 n=e(s).18(".11-1z");12 r=u.o.6p.1v("%")==-1?1c(u.o.6p):1c(t/1Z*1c(u.o.6p));n.17({1b:r*1x.2a(u.g.1B*1Z)/1Z});10(n.1b()>e(s).18(".11-1z-1M").1b()){n.17({1b:e(s).18(".11-1z-1M").1b()})}u.81("a7")};u.7R=16(t){12 n=t?t:u.g.5i;e(s).18(".11-1z-1M a:a8(.11-3L-"+n+")").2T().1X(16(){e(14).2W("11-3L-1S").1h().5G(69,u.o.6L/1Z)});e(s).18(".11-1z-1M a.11-3L-"+n).2T().1t("11-3L-1S").1h().5G(69,u.o.7n/1Z)};u.7W=16(){10(!e(s).18(".11-1z-1M-2i").4a("11-1z-1M-1L")){12 t=e(s).18(".11-3L-1S").1o?e(s).18(".11-3L-1S").2v():1e;10(t){12 n=t.34().1i+t.1b()/2;12 r=e(s).18(".11-1z-1M-2i").1b()/2-n;r=r<e(s).18(".11-1z-1M-2i").1b()-e(s).18(".11-1z-1M").1b()?e(s).18(".11-1z-1M-2i").1b()-e(s).18(".11-1z-1M").1b():r;r=r>0?0:r;e(s).18(".11-1z-1M").20({2B:r},7C,"6f")}}};u.81=16(t){10(u.o.6l&&!e(s).4a("11-1L")){2E(t){1j"5b":u.g.3v.17({21:"2Q",1y:"29"});1k;1j"a7":u.g.3v.17({21:"2w",1y:"1F"});1k}}};u.20=16(){10(e(s).18(".11-1P").1o>1){u.g.30=1a}u.g.3K=1e;3f(u.g.3X);3f(u.g.7Q);u.g.ac=u.g.1H;u.o.9A(u.g);10(u.o.2Y=="4j"){u.7R();10(!("5A"3o 2V)){u.7W()}}u.g.1w.1t("11-ab");12 t=6V=5D=6W=5F=6H=5O=6F=5z=cZ=5C=d0="1U";12 o=6P=u.g.1D();12 a=6G=u.g.1G();12 f=u.g.2h=="1N"?u.g.1H:u.g.1w;12 l=f.13("3n")?f.13("3n"):u.o.7t;12 c=u.g.6K[u.g.2h][l];10(c=="1i"||c=="1J"){o=5D=6P=5O=0;5C=0}10(c=="1u"||c=="1s"){a=t=6G=5F=0;5z=0}2E(c){1j"1i":6V=5F=0;5z=-u.g.1D();1k;1j"1J":t=6H=0;5z=u.g.1D();1k;1j"1u":6W=5O=0;5C=-u.g.1G();1k;1j"1s":5D=6F=0;5C=u.g.1G();1k}u.g.1H.17({1i:t,1J:6V,1u:5D,1s:6W});u.g.1w.17({1b:6P,1d:6G,1i:5F,1J:6H,1u:5O,1s:6F});12 h=u.g.1H.13("62")?1c(u.g.1H.13("62")):u.o.7N;12 p=u.g.1H.13("4F")?1c(u.g.1H.13("4F")):u.o.6n;12 d=u.g.1H.13("4B")?u.g.1H.13("4B"):u.o.6o;12 v=u.g.1w.13("53")?1c(u.g.1w.13("53")):u.o.7P;12 m=u.g.1w.13("5Q")?1c(u.g.1w.13("5Q")):u.o.7w;12 g=u.g.1w.13("5S")?u.g.1w.13("5S"):u.o.83;12 y=16(){u.g.1H.1C(h+p/15).20({1b:o,1d:a},p,d,16(){b()})};12 b=16(){u.g.ac.18(\' > *[1n*="11-s"]\').1h(1a,1a);u.o.7O(u.g);u.g.1H=u.g.1w;u.g.2b=u.g.5i;e(s).18(".11-1P").2W("11-1S");e(s).18(".11-1P:3z("+(u.g.2b-1)+")").1t("11-1S").2W("11-ab");e(s).18(".11-1s-4n a").2W("11-1m-1S");e(s).18(".11-1s-4n a:3z("+(u.g.2b-1)+")").1t("11-1m-1S");10(u.g.2F){u.5g()}u.g.30=1e;10(u.g.36==1a){u.3H(u.g.1H,16(){u.g.36=1e})}};12 w=16(t){u.g.1H.18(\' > *[1n*="11-s"]\').1X(16(){12 n=e(14).13("3n")?e(14).13("3n"):c;12 r,i;2E(n){1j"1i":r=-u.g.1D();i=0;1k;1j"1J":r=u.g.1D();i=0;1k;1j"1u":i=-u.g.1G();r=0;1k;1j"1s":i=u.g.1G();r=0;1k}12 s=e(14).13("6A")?e(14).13("6A"):1e;2E(s){1j"1i":r=u.g.1D();i=0;1k;1j"1J":r=-u.g.1D();i=0;1k;1j"1u":i=u.g.1G();r=0;1k;1j"1s":i=-u.g.1G();r=0;1k}12 o=1c(e(14).1f("1n").1W("11-s")[1]);10(o==-1){12 a=1c(e(14).17("1i"));12 f=1c(e(14).17("1u"));10(i<0){i=-(u.g.1G()-f+1)}19 10(i>0){i=f+e(14).4S()+1}10(r<0){r=-(u.g.1D()-a+1)}19 10(r>0){r=a+e(14).4M()+1}12 l=1}19{12 h=u.g.1H.13("6z")?1c(u.g.1H.13("6z")):u.o.7J;12 l=o*h}12 p=e(14).13("62")?1c(e(14).13("62")):u.o.7N;12 d=e(14).13("4F")?1c(e(14).13("4F")):u.o.6n;12 v=e(14).13("4B")?e(14).13("4B"):u.o.6o;10(t){p=0;d=t}12 m="1F";10(!u.g.1O&&u.g.4h){m=e(14).13("6B")?e(14).13("6B"):0}12 g="1F";10(!u.g.1O&&u.g.4h){g=e(14).13("6x")?e(14).13("6x"):1}10(e(14).13("5T")){3f(e(14).13("5T"))}10(s=="4b"||!s&&n=="4b"){10(!u.g.1O){e(14).1h(1a,1e).1C(p).20({2z:0,1K:m,1Y:g},d,v,16(){e(14).17({21:"2Q",2z:e(14).13("5U")})})}19{e(14).1h(1a,1a).1C(p).2X(d,v,16(){e(14).17({21:"2Q",1y:"29"})})}}19{e(14).1h(1a,1e).1C(p).20({1K:m,1Y:g,2B:-r*l,2M:-i*l},d,v)}})};12 E=16(){u.g.1w.1C(h+v).20({1b:u.g.1D(),1d:u.g.1G()},m,g)};12 S=16(){10(u.g.3u){h=0}u.g.1w.18(\' > *[1n*="11-s"]\').1X(16(){12 t=e(14).13("3n")?e(14).13("3n"):c;12 n,r;2E(t){1j"1i":n=-u.g.1D();r=0;1k;1j"1J":n=u.g.1D();r=0;1k;1j"1u":r=-u.g.1G();n=0;1k;1j"1s":r=u.g.1G();n=0;1k;1j"4b":r=0;n=0;1k}12 i=1c(e(14).1f("1n").1W("11-s")[1]);10(i==-1){12 s=1c(e(14).17("1i"));12 o=1c(e(14).17("1u"));10(r<0){r=-(o+e(14).4S()+1)}19 10(r>0){r=u.g.1G()-o+1}10(n<0){n=-(s+e(14).4M()+1)}19 10(n>0){n=u.g.1D()-s+1}12 a=1}19{12 f=u.g.1w.13("a6")?1c(u.g.1w.13("a6")):u.o.ag;12 a=i*f}12 l=e(14).13("53")?1c(e(14).13("53")):u.o.7P;12 p=e(14).13("5Q")?1c(e(14).13("5Q")):u.o.7w;12 d=e(14).13("5S")?e(14).13("5S"):u.o.83;12 m=e(14);12 g=16(){10(u.o.73==1a){m.18(".11-43").2o()}10(m.13("5V")>0){m.13("5T",2f(16(){u.84(m)},m.13("5V")))}};12 y="1F";10(!u.g.1O&&u.g.4h){y=e(14).13("a5")?e(14).13("a5"):0}12 b="1F";10(!u.g.1O&&u.g.4h){b=e(14).13("a0")?e(14).13("a0"):1}10(t=="4b"){10(!u.g.1O){e(14).17({1T:"1K("+y+"1E) 1Y("+b+")","-4Y-1T":"1K("+y+"1E) 1Y("+b+")","-3F-1T":"1K("+y+"1E) 1Y("+b+")","-o-1T":"1K("+y+"1E) 1Y("+b+")","-5m-1T":"1K("+y+"1E) 1Y("+b+")",2z:0,21:"2w",2B:0,2M:0}).1h().1C(h+v+l).20({1Y:1,1K:0,2z:e(14).13("5U")},p,d,16(){g()})}19{e(14).17({1y:"1F",21:"2w",2B:0,2M:0}).1h(1a,1a).1C(h+v+l).2x(p,d,16(){g()})}}19{10(!u.g.1O){e(14).17({2z:e(14).13("5U")})}e(14).17({1T:"1K("+y+"1E) 1Y("+b+")","-4Y-1T":"1K("+y+"1E) 1Y("+b+")","-3F-1T":"1K("+y+"1E) 1Y("+b+")","-o-1T":"1K("+y+"1E) 1Y("+b+")","-5m-1T":"1K("+y+"1E) 1Y("+b+")",2B:n*a,2M:r*a,1y:"29",21:"2w"});e(14).1h().1C(h+v+l).20({2B:0,2M:0,1Y:1,1K:0},p,d,16(){g()})}})};12 x=16(){10(n(e(s))&&24 e.7Y!="3b"&&(u.g.1w.13("4H")||u.g.1w.13("4T"))){10(u.g.1w.13("4H")&&u.g.1w.13("4T")){12 t=1x.2a(1x.2t()*2);12 r=[["3d",u.g.1w.13("4H")],["9Z",u.g.1w.13("4T")]];N(r[t][0],r[t][1])}19 10(u.g.1w.13("4H")){N("3d",u.g.1w.13("4H"))}19{N("9Z",u.g.1w.13("4T"))}}19{10(u.g.1w.13("4O")&&u.g.1w.13("4W")){12 t=1x.2a(1x.2t()*2);12 r=[["2d",u.g.1w.13("4O")],["9Y",u.g.1w.13("4W")]];N(r[t][0],r[t][1])}19 10(u.g.1w.13("4O")){N("2d",u.g.1w.13("4O"))}19 10(u.g.1w.13("4W")){N("9Y",u.g.1w.13("4W"))}19{N("2d","5W")}}};12 T=16(){10(n(e(s))&&4N.1v("3d")!=-1){N("3d",4N.1W(":")[1])}19{10(4N.1v("3d")!=-1){N("2d","5W")}19{N("2d",4N.1W(":")[1])}}};12 N=16(e,t){12 n=e.1v("d1")==-1?u.t:u.ct;12 r="3d",s,o;10(e.1v("2d")!=-1){r="2d"}10(t.1v("3M")!=-1){o=n["t"+r].1o-1;s="3M"}19 10(t.1v("5W")!=-1){o=1x.2a(1x.2t()*i(n["t"+r]));s="2t 5k 5W"}19{12 a=t.1W(",");12 f=a.1o;o=1c(a[1x.2a(1x.2t()*f)])-1;s="2t 5k d2"}C(r,n["t"+r][o])};12 C=16(t,n){12 i=e(s).18(".11-23");12 o=u.g.1H.18(\'*[1n*="11-s"]\').1o>0?48:0;12 a=n.82.3a().1v("cY")==-1?1e:1a;12 f=24 n.4Z=="3x"?n.4Z:1x.2a(1x.2t()*(n.4Z[1]-n.4Z[0]+1))+n.4Z[0];12 l=24 n.54=="3x"?n.54:1x.2a(1x.2t()*(n.54[1]-n.54[0]+1))+n.54[0];10(u.g.6Z()==1a&&u.o.9Q==1a||u.g.1O&&u.o.9v==1a){10(f>=15){f=7}19 10(f>=5){f=4}19 10(f>=4){f=3}19 10(f>2){f=2}10(l>=15){l=7}19 10(l>=5){l=4}19 10(l>=4){l=3}19 10(l>2){l=2}10(l>2&&f>2){l=2;10(f>4){f=4}}}12 c=e(s).18(".11-23").1b()/f;12 h=e(s).18(".11-23").1d()/l;10(!u.g.2y){u.g.2y=e("<1g>").1t("11-74-2i").1t("11-49-2Q").17({1b:i.1b(),1d:i.1d()}).5R(i)}19{u.g.2y.4Q().17({1b:i.1b(),1d:i.1d()})}12 p=i.1b()-1x.2a(c)*f;12 d=i.1d()-1x.2a(h)*l;12 v=[];v.ad=16(){12 e=14.1o,t,n,r;10(e==0)1Q 1e;ae(--e){t=1x.2a(1x.2t()*(e+1));n=14[e];r=14[t];14[e]=r;14[t]=n}1Q 14};2q(12 m=0;m<f*l;m++){v.4A(m)}2E(n.3D.cX){1j"63":v.63();1k;1j"a3-7x":v=r(l,f,"7x");1k;1j"a3-63":v=r(l,f,"63");1k;1j"2t":v.ad();1k}12 g=u.g.1H.18(".11-bg");12 y=u.g.1w.18(".11-bg");10(g.1o==0&&y.1o==0){t="2d";n=e.4D(1a,{},u.t["cT"][0]);n.1q.2k=1;n.3D.1C=0}10(t=="3d"){u.g.3u=o+(f*l-1)*n.3D.1C;12 E=0;10(n.2J&&n.2J.2k){E+=n.2J.2k}10(n.26&&n.26.2k){E+=n.26.2k}10(n.3j&&n.3j.2k){E+=n.3j.2k}u.g.3u+=E;12 x=0;10(n.2J&&n.2J.1C){x+=n.2J.1C}10(n.26&&n.26.1C){x+=n.26.1C}10(n.3j&&n.3j.1C){x+=n.3j.1C}u.g.3u+=x}19{u.g.3u=o+(f*l-1)*n.3D.1C+n.1q.2k;u.g.4J=e("<1g>").1t("11-cS").1r(u.g.2y);u.g.7V=e("<1g>").1t("11-cU").1r(u.g.2y)}12 T=u.g.2h;2q(12 N=0;N<f*l;N++){12 C=N%f==0?p:0;12 k=N>(l-1)*f-1?d:0;12 L=e("<1g>").1t("11-74-3D").17({1b:1x.2a(c)+C,1d:1x.2a(h)+k}).1r(u.g.2y);12 A,O;10(t=="3d"){L.1t("11-3d-2i");12 M=1x.2a(c)+C;12 3A=1x.2a(h)+k;12 D;10(n.26.5u=="9C"){10(1x.3Q(n.26.1q.2s)>90&&n.3D.9p!="af"){D=1x.2a(M/7)+C}19{D=M}}19{10(1x.3Q(n.26.1q.2j)>90&&n.3D.9p!="af"){D=1x.2a(3A/7)+k}19{D=3A}}12 P=M/2;12 H=3A/2;12 B=D/2;12 j=16(t,n,r,i,s,o,u,a,f){e("<1g>").1t(t).17({1b:r,1d:i,1T:"57("+s+"1A, "+o+"1A, "+u+"1A) 2j("+a+"1E) 2s("+f+"1E) 56(5j) 4r(1, 1, 1)","-o-1T":"57("+s+"1A, "+o+"1A, "+u+"1A) 2j("+a+"1E) 2s("+f+"1E) 56(5j) 4r(1, 1, 1)","-4Y-1T":"57("+s+"1A, "+o+"1A, "+u+"1A) 2j("+a+"1E) 2s("+f+"1E) 56(5j) 4r(1, 1, 1)","-5m-1T":"57("+s+"1A, "+o+"1A, "+u+"1A) 2j("+a+"1E) 2s("+f+"1E) 56(5j) 4r(1, 1, 1)","-3F-1T":"57("+s+"1A, "+o+"1A, "+u+"1A) 2j("+a+"1E) 2s("+f+"1E) 56(5j) 4r(1, 1, 1)"}).1r(n)};j("11-3d-3I",L,0,0,0,0,-B,0,0);12 F=0;12 I=0;12 q=0;10(n.26.5u=="cV"&&1x.3Q(n.26.1q.2j)>90){j("11-3d-5x",L.18(".11-3d-3I"),M,3A,-P,-H,-B,5B,0)}19{j("11-3d-5x",L.18(".11-3d-3I"),M,3A,-P,-H,-B,0,5B)}j("11-3d-1s",L.18(".11-3d-3I"),M,D,-P,H-B,0,-90,0);j("11-3d-1u",L.18(".11-3d-3I"),M,D,-P,-H-B,0,90,0);j("11-3d-9X",L.18(".11-3d-3I"),M,3A,-P,-H,B,0,0);j("11-3d-1i",L.18(".11-3d-3I"),D,3A,-P-B,-H,0,0,-90);j("11-3d-1J",L.18(".11-3d-3I"),D,3A,P-B,-H,0,0,90);A=L.18(".11-3d-9X");10(n.26.5u=="9C"){10(1x.3Q(n.26.1q.2s)>90){O=L.18(".11-3d-5x")}19{O=L.18(".11-3d-1i, .11-3d-1J")}}19{10(1x.3Q(n.26.1q.2j)>90){O=L.18(".11-3d-5x")}19{O=L.18(".11-3d-1u, .11-3d-1s")}}12 R=o+v[N]*n.3D.1C;12 U=u.g.2y.18(".11-3d-2i:3z("+N+") .11-3d-3I");10(n.2J&&n.2J.1q){n.2J.1q.1C=n.2J.1q.1C?n.2J.1q.1C+R:R;U.1q(n.2J.1q,n.2J.2k,n.2J.3V)}19{n.26.1q.1C=n.26.1q.1C?n.26.1q.1C+R:R}U.1q(n.26.1q,n.26.2k,n.26.3V);10(n.3j){U.1q(e.4D({},{4r:1},n.3j.1q),n.3j.2k,n.3j.3V)}}19{12 z=2L=2A=2C="1U";12 W=5t=1;10(n.1q.5u=="2t"){12 X=["1u","1s","1J","1i"];12 V=X[1x.2a(1x.2t()*X.1o)]}19{12 V=n.1q.5u}10(n.82.3a().1v("9R")!=-1&&N%2==0){10(T=="1N"){T="1R"}19{T="1N"}}10(T=="1N"){2E(V){1j"1u":V="1s";1k;1j"1s":V="1u";1k;1j"1i":V="1J";1k;1j"1J":V="1i";1k;1j"6U":V="7o";1k;1j"6Q":V="6R";1k;1j"6R":V="6Q";1k;1j"7o":V="6U";1k}}2E(V){1j"1u":z=2A=-L.1d();2L=2C=0;1k;1j"1s":z=2A=L.1d();2L=2C=0;1k;1j"1i":z=2A=0;2L=2C=-L.1b();1k;1j"1J":z=2A=0;2L=2C=L.1b();1k;1j"6U":z=L.1d();2A=0;2L=L.1b();2C=0;1k;1j"6Q":z=L.1d();2A=0;2L=-L.1b();2C=0;1k;1j"6R":z=-L.1d();2A=0;2L=L.1b();2C=0;1k;1j"7o":z=-L.1d();2A=0;2L=-L.1b();2C=0;1k}u.g.2p=n.1q.9x?n.1q.9x:1;10(a==1a&&u.g.2p!=1){z=z/2;2A=2A/2;2L=2L/2;2C=2C/2}2E(n.1q.4d){1j"4b":z=2A=2L=2C=0;W=0;5t=1;1k;1j"d3":W=0;5t=1;10(u.g.2p==1){2A=2C=0}1k}10((n.1q.3k||n.1q.2j||n.1q.2s||u.g.2p!=1)&&!u.g.1O&&n.1q.4d!="1M"){L.17({49:"2w"})}19{L.17({49:"2Q"})}10(a==1a){u.g.4J.17({49:"2w"})}19{u.g.4J.17({49:"2Q"})}10(n.1q.4d=="1M"||a==1a){12 J=L.1r(u.g.4J);12 K=L.7f().1r(u.g.7V);A=e("<1g>").1t("11-d4").1r(J)}19{12 K=L.1r(u.g.7V)}O=e("<1g>").1t("11-dc").1r(K).17({1u:-z,1i:-2L,dd:"29",2z:W});12 Q=o+v[N]*n.3D.1C;10(u.g.9w&&24 e.7Y!="3b"){12 G=n.1q.3k?n.1q.3k:0;12 Y=n.1q.2j?n.1q.2j:0;12 Z=n.1q.2s?n.1q.2s:0;10(T=="1N"){G=-G;Y=-Y;Z=-Z}10(Y!=0||Z!=0||G!=0||u.g.2p!=1){O.17({1T:"1K("+G+"1E) 2j("+Y+"1E) 2s("+Z+"1E) 1Y("+u.g.2p+","+u.g.2p+")","-o-1T":"1K("+G+"1E) 2j("+Y+"1E) 2s("+Z+"1E) 1Y("+u.g.2p+","+u.g.2p+")","-4Y-1T":"1K("+G+"1E) 2j("+Y+"1E) 2s("+Z+"1E) 1Y("+u.g.2p+","+u.g.2p+")","-5m-1T":"1K("+G+"1E) 2j("+Y+"1E) 2s("+Z+"1E) 1Y("+u.g.2p+","+u.g.2p+")","-3F-1T":"1K("+G+"1E) 2j("+Y+"1E) 2s("+Z+"1E) 1Y("+u.g.2p+","+u.g.2p+")"})}O.1q({1C:Q,1u:0,1i:0,2z:5t,1K:0,2j:0,2s:0,1Y:1},n.1q.2k,n.1q.3V);10((n.1q.4d=="1M"||a==1a)&&n.82.3a().1v("9R")==-1){12 7v=0;10(G!=0){7v=-G}A.1q({1C:Q,1u:2A,1i:2C,1K:7v,1Y:u.g.2p,2z:W},n.1q.2k,n.1q.3V)}}19{O.1C(Q).20({1u:0,1i:0,2z:5t},n.1q.2k,n.1q.3V);10(n.1q.4d=="1M"){A.1C(Q).20({1u:2A,1i:2C},n.1q.2k,n.1q.3V)}}}10(g.1o){10(t=="3d"||t=="2d"&&(n.1q.4d=="1M"||a==1a)){A.3C(e("<28>").1f("1l",g.1f("1l")).17({1b:g[0].1I.1b,1d:g[0].1I.1d,2B:i.1b()/2+41(g.17("2S-1i"))-1c(L.34().1i),2M:i.1d()/2+41(g.17("2S-1u"))-1c(L.34().1u)}))}19 10(u.g.4J.2T().1o==0){u.g.4J.3C(e("<28>").1f("1l",g.1f("1l")).17({1b:g[0].1I.1b,1d:g[0].1I.1d,2B:i.1b()/2+41(g.17("2S-1i")),2M:i.1d()/2+41(g.17("2S-1u"))}))}}10(y.1o){O.3C(e("<28>").1f("1l",y.1f("1l")).17({1b:y[0].1I.1b,1d:y[0].1I.1d,2B:i.1b()/2+41(y.17("2S-1i"))-1c(L.34().1i),2M:i.1d()/2+41(y.17("2S-1u"))-1c(L.34().1u)}))}}12 7H=u.g.1H;12 2G=u.g.1w;2G.18(".11-bg").17({21:"2Q"});w(o);2f(16(){7H.17({1b:0});u.g.2y.2W("11-49-2Q")},o);12 7E=1c(2G.13("5Z"))?1c(2G.13("5Z")):0;12 87=u.g.3u+7E>0?u.g.3u+7E:0;2f(16(){10(u.g.36==1a){u.g.2y.4Q();7H.2W("11-1S");u.3H(2G,16(){u.g.36=1e})}S();10(2G.18(".11-bg").1o<1||2G.18(".11-bg").1o>0&&2G.18(".11-bg").1f("1l").3a().1v("5J")!=-1){u.g.2y.2X(69,"cM",16(){e(14).4Q().6g()})}2G.17({1b:u.g.1D(),1d:u.g.1G()})},87);2f(16(){u.g.2y.1t("11-49-2Q");2G.1t("11-1S");10(2G.18(".11-bg").1o){2G.18(".11-bg").17({1y:"1F",21:"2w"});10(u.g.1O){2G.18(".11-bg").17("1y","29");2f(16(){b()},3S)}19{2G.18(".11-bg").2x(3S,16(){b()})}}19{b()}},u.g.3u)};7j=(u.g.1w.13("4H")||u.g.1w.13("4O"))&&u.t||(u.g.1w.13("4T")||u.g.1w.13("4W"))&&u.ct?"3l":"64";10(u.o.4t&&!u.g.9W){10(u.g.2H==1){12 h=0;u.o.7O(u.g)}19{12 k=1c(u.g.1w.13("5Z"))?1c(u.g.1w.13("5Z")):0;12 L=7j=="3l"?0:p;2f(16(){b()},L+1x.3Q(k))}u.g.3u=1a;S();u.g.1w.17({1b:u.g.1D(),1d:u.g.1G()});10(!u.g.1O){u.g.1w.18(".11-bg").17({1y:"1F"}).2x(3S)}u.g.9W=1a;u.g.3K=1e}19{2E(7j){1j"64":u.g.3u=1e;10(u.g.2y){u.g.2y.4Q()}y();w();E();S();1k;1j"3l":10(24 4N!="3b"){T()}19{x()}1k}}};u.84=16(e){12 t=u.g.1H;10(u.g.2h!="1N"&&u.g.1w){t=u.g.1w}12 n=t.13("3n")?t.13("3n"):u.o.7t;12 r=u.g.6K[u.g.2h][n];12 i=e.13("3n")?e.13("3n"):r;12 s,o;2E(i){1j"1i":s=-u.g.1D();o=0;1k;1j"1J":s=u.g.1D();o=0;1k;1j"1u":o=-u.g.1G();s=0;1k;1j"1s":o=u.g.1G();s=0;1k}12 a=e.13("6A")?e.13("6A"):1e;2E(a){1j"1i":s=u.g.1D();o=0;1k;1j"1J":s=-u.g.1D();o=0;1k;1j"1u":o=u.g.1G();s=0;1k;1j"1s":o=-u.g.1G();s=0;1k}12 f=1c(e.1f("1n").1W("11-s")[1]);10(f==-1){12 l=1c(e.17("1i"));12 c=1c(e.17("1u"));10(o<0){o=-(u.g.1G()-c+1)}19 10(o>0){o=c+e.4S()+1}10(s<0){s=-(u.g.1D()-l+1)}19 10(s>0){s=l+e.4M()+1}12 h=1}19{12 p=u.g.1H.13("6z")?1c(u.g.1H.13("6z")):u.o.7J;12 h=f*p}12 d=e.13("4F")?1c(e.13("4F")):u.o.6n;12 v=e.13("4B")?e.13("4B"):u.o.6o;12 m="1F";10(!u.g.1O&&u.g.4h){m=e.13("6B")?e.13("6B"):0}12 g="1F";10(!u.g.1O&&u.g.4h){g=e.13("6x")?e.13("6x"):1}10(a=="4b"||!a&&i=="4b"){10(!u.g.1O){e.20({2z:0,1K:m,1Y:g},d,v)}19{e.2X(d,v)}}19{e.20({1K:m,1Y:g,2B:-s*h,2M:-o*h},d,v)}};u.4G=16(){u.d={3B:e("<1g>"),aT:16(t){e("<9z>"+t+"</9z>").1r(u.d.3B)},9N:16(){e("<4g>").1r(u.d.3B)},aU:16(t){e("<4g><3i>"+t+"</3i></4g>").1r(u.d.3B)},aL:16(t){e("<3i>"+t+"</3i>").1r(u.d.3B.18("4g:3M"))},7B:16(t){e("<4g>").1r(u.d.3B.18("4g:3M 3i:3M"))},aF:16(e){u.d.3B.18("4g:3M 3i:3M").1L(16(){e.17({38:"dG dP dj",2M:1c(e.17("2S-1u"))-2,2B:1c(e.17("2S-1i"))-2})},16(){e.17({38:"9t",2M:1c(e.17("2S-1u"))+2,2B:1c(e.17("2S-1i"))+2})})},6g:16(){10(!e("3r").18(".11-4G-7G").1o){10(!u.d.a2){u.d.aT("dz dy");u.d.9N();2q(12 t 3o u.o){u.d.aL(t+": <1V>"+u.o[t]+"</1V>")}u.d.aT("3e dp");u.d.aU("dC 3c dB 9V: <1V>"+e(s).18(".11-1P").1o+"</1V>");e(s).18(\'.11-23 .11-1P, .11-23 *[1n*="11-s"]\').1X(16(){10(e(14).4a("11-1P")){u.d.aU("<1V>9T "+(e(14).4U()+1)+"</1V>");u.d.7B();u.d.aL("<1V>9T "+(e(14).4U()+1)+" ai:</1V><br><br>")}19{u.d.aU("    dn ( "+e(14).aj("ak")+" )");u.d.aF(e(14));u.d.7B();u.d.aL("<1V>"+e(14).aj("ak")+" 1P ai:</1V><br><br>");u.d.aL("dJ / 1n: <1V>"+e(14).1f("1n")+"</1V>")}e.1X(e(14).13(),16(e,t){u.d.aL(e+": <1V>"+t+"</1V>")})});u.d.a2=1a}12 n=e("<1g>").1t("11-4G-7G").17({34:"dM",aa:"cN",1u:"51",1J:"51",1b:"cp",22:"aV",42:"aS","38-aW":"51",1d:e(2V).1d()-60,2z:0,7D:5r}).1r(e("3r")).20({7D:0,2z:.9},7C,"6f").2o(16(t){10(t.9E&&t.9D){e(14).20({7D:5r,2z:0},7C,"6f",16(){e(14).5q()})}});12 r=e("<1g>").17({1b:"1Z%",1d:"1Z%",49:"1U"}).1r(n);12 i=e("<1g>").17({1b:"1Z%"}).1r(r).3C(u.d.3B)}},aN:16(){e("3r").18(".11-4G-7G").5q()}};e(s).2o(16(e){10(e.9E&&e.9D){u.d.6g()}})};u.2N()};12 n=16(t){12 n=e("<1g>"),r=1e,i=1e,s=["bb","aG","bh","ba","b9"];1T=["b3","b2","b7","bj","ao"];2q(12 o=s.1o-1;o>=0;o--){r=r?r:n[0].1I[s[o]]!=3b}2q(12 o=1T.1o-1;o>=0;o--){n.17("1T-1I","9I-3d");i=i?i:n[0].1I[1T[o]]=="9I-3d"}10(r&&n[0].1I[s[4]]!=3b){n.1f("4l","11-av").1r(t);r=n[0].aB===3&&n[0].as===9;n.5q()}1Q r&&i};12 r=16(e,t,n){12 r=[];10(n=="7x"){2q(12 i=0;i<e;i++){2q(12 s=0;s<t;s++){r.4A(i+s*e)}}}19{2q(12 i=e-1;i>-1;i--){2q(12 s=t-1;s>-1;s--){r.4A(i+s*e)}}}1Q r};12 i=16(e){12 t=0;2q(12 n 3o e){10(e.aD(n)){++t}}1Q t};12 s=16(){a9=16(e){e=e.3a();12 t=/(a1)[ \\/]([\\w.]+)/.5p(e)||/(3F)[ \\/]([\\w.]+)/.5p(e)||/(ax)(?:.*2u|)[ \\/]([\\w.]+)/.5p(e)||/(6w) ([\\w.]+)/.5p(e)||e.1v("aC")<0&&/(ay)(?:.*? az:([\\w.]+)|)/.5p(e)||[];1Q{7X:t[1]||"",2u:t[2]||"0"}};12 e=a9(3R.3U),t={};10(e.7X){t[e.7X]=1a;t.2u=e.2u}10(t.a1){t.3F=1a}19 10(t.3F){t.co=1a}1Q t};4i=16(e,t){12 n=["3F","c3","5m","4Y","o",""];12 r=0,i,s;ae(r<n.1o&&!e[i]){i=t;10(n[r]==""){i=i.a4(0,1).3a()+i.a4(1)}i=n[r]+i;s=24 e[i];10(s!="3b"){n=[n[r]];1Q s=="16"?e[i]():e[i]}r++}};t.68={2u:"4.6.1",6Z:16(){10(3R.3U.3p(/c4/i)||3R.3U.3p(/c6/i)||3R.3U.3p(/c1/i)||3R.3U.3p(/c0/i)||3R.3U.3p(/bV/i)||3R.3U.3p(/bU/i)||3R.3U.3p(/bW bX/i)){1Q 1a}19{1Q 1e}},bZ:16(e){10(e.17("22-1s")=="1U"||e.17("22-1s")=="1F"||e.17("22-1s")==0||e.17("22-1s")=="9t"){1Q 1a}19{1Q 1e}},9w:!s().6w||s().6w&&s().2u>9?1a:1e,1O:s().6w&&s().2u<9?1a:1e,4k:1e,4p:1e,5y:1e,3Z:1e,3t:1e,5w:1e,2F:1e,30:1e,2H:67,2h:"1R",3X:67,1D:67,1G:67,6K:{1N:{1i:"1J",1J:"1i",1u:"1s",1s:"1u"},1R:{1i:"1i",1J:"1J",1u:"1u",1s:"1s"}},v:{d:3S,71:69,7m:3S}};t.9F={6a:1a,2c:1,7c:1a,9U:1a,58:1a,77:1a,6j:1a,6r:1a,2I:"c8",3N:"/6s/c9/",9O:1a,6E:"6S",6t:1e,4t:1a,1p:1e,9J:"1i: -51; 1u: -51;",79:1e,9K:"ck",9M:1a,40:0,6u:1a,73:1a,47:"1U",9B:"cl.cn",9L:1a,6q:1e,4c:0,7i:0,2Y:"1L",7e:1Z,5a:60,6p:"60%",7n:35,6L:1Z,9H:1a,6l:1e,9P:1e,9S:1a,9Q:1a,9v:1a,9u:1e,9q:16(e){},9r:16(e){},9s:16(e){},9y:16(e){},9A:16(e){},7O:16(e){},6k:16(e){},6m:16(e){},7t:"1J",7p:bN,ag:.45,7J:.45,7w:48,6n:48,83:"ah",6o:"ah",7P:0,7N:0}})(3g)',62,864,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||if|ls|var|data|this||function|css|find|else|true|width|parseInt|height|false|attr|div|stop|left|case|break|src|nav|class|length|yourLogo|transition|appendTo|bottom|addClass|top|indexOf|nextLayer|Math|display|thumbnail|px|ratio|delay|sliderWidth|deg|none|sliderHeight|curLayer|style|right|kmRotate|hover|slide|prev|ie78|layer|return|next|active|transform|auto|strong|split|each|kmScale|100|animate|visibility|padding|inner|typeof||animation|start|img|block|floor|curLayerIndex|firstLayer||iframe|setTimeout|href|prevNext|container|rotateX|duration|300|the|replace|click|scale2D|for|document|rotateY|random|version|parent|visible|fadeIn|ltContainer|opacity|T2|marginLeft|L2|sliderOriginalWidth|switch|autoSlideshow|nt|layersNum|skin|before|wrapper|L1|marginTop|load|curSlideTime|circleTimer|hidden|layerSlider|margin|children|originalAutoSlideshow|window|removeClass|fadeOut|thumbnailNavigation|originalHeight|isAnimating|bottomWrapper|to|originalWidth|position||resize||border||toLowerCase|undefined|of||LayerSlider|clearTimeout|jQuery|preventDefault|li|after|rotate|new|your|slidedirection|in|match|param|body|autoplay|paused|totalDuration|thumbsWrapper|pausedSlideTime|number|barTimer|eq|_|history|append|tile|shadow|webkit|loaded|makeResponsive|box|responsiveMode|isLoading|thumb|last|skinsPath|is|originalTop|abs|navigator|500|originalLeft|userAgent|easing|startSlideTime|slideTimer|nextLoop|goingNormal|loops|parseFloat|background|videopreview|you||sliderOriginalHeight|autoPauseSlideshow|1e3|overflow|hasClass|fade|responsiveUnder|type|html|change|ul|enableCSS3|lsPrefixes|always|normalWidth|id|WordPress|slidebuttons|videoSrc|normalHeight|init|scale3d|shadowImg|animateFirstLayer|vimeo|youtu|image|Date|If|one|push|easingout|touches|extend|getTime|durationout|debug|transition3d|thumbnails|curTiles|and|span|outerWidth|LSCustomTransition|transition2d|escFullScreen|empty|which|outerHeight|customtransition3d|index|trim|customtransition2d|touchEndX|ms|cols||10px|issue|delayin|rows|round|rotateZ|translate3d|imgPreload|closest|tnHeight|on|originalBottom|originalRight|plugin|fullwidth|timer|wp|nextLayerIndex|0deg|from|vpcontainer|moz|player|url|exec|remove|150|or|O2|direction|www|pausedByVideo|back|normalRatio|layerMarginLeft|ontouchstart|180|layerMarginTop|curLayerTop|originalBorderRight|nextLayerLeft|fadeTo|slidedelay|originalBorderBottom|png|oR|fullscreen|oB|oT|nextLayerTop|linear|durationin|prependTo|easingin|showUntilTimer|originalOpacity|showuntil|all|originalBorderTop|originalBorderLeft|timeshift||videoTimer|delayout|reverse|old|showShadow|tn|null|global|750|autoStart|can|WP|link|video|easeInOutQuad|show|rel|library|navStartStop|cbPrev|hoverBottomNav|cbNext|durationOut|easingOut|tnContainerWidth|randomSlideshow|navButtons|layerslider|globalBGImage|forceLoopNum|videoDuration|msie|scaleout|clicked|parallaxout|slideoutdirection|rotateout|bind|touchStartX|globalBGColor|nextLayerBottom|nextLayerHeight|nextLayerRight|slider|originalPaddingRight|slideDirections|tnInactiveOpacity|originalPaddingBottom|originalPaddingTop|originalPaddingLeft|nextLayerWidth|topright|bottomleft|transparent|nothumb|topleft|curLayerRight|curLayerBottom|section|error|isMobile|admin|fo|resizeSlider|autoPlayVideos|lt|like|other|navPrevNext|resizeShadow|yourLogoLink|dequeue|plugins|twoWaySlideshow|forceHideControls|tnWidth|clone|solve|sliderOriginalWidthRU|sublayerContainer|transitionType|looks|It|fi|tnActiveOpacity|bottomright|slideDelay|250|text|cssContainer|slideDirection|with|et|durationIn|forward|jquery|theme|fired|aUU|600|marginRight|rt|location|console|tt|addEventListener|parallaxOut|linkto|wpVersion|lswpVersion|delayOut|cbAnimStop|delayIn|changeTimer|changeThumb|please|causes|resizeYourLogo|nextTiles|scrollThumb|browser|transit|com|JS|bottomNavSizeHelper|name|easingIn|sublayerShowUntil|content|script|it|contact|problem|Transit|helper|account|goFullScreen|out|try|using|are|FullScreen|write|offset|temporary|CodeCanyon|help|author|originalLineHeight|layerSliderCustomTransitions|layerSliderTransitions|initialized|meta|force|450|norotate|el|fn|gi|lsShowNotice|oldjquery|object|showSlider|sides|head|loading|api|json|callback|half|playvideo|getJSON|embed|curSkin|createStyleSheet|relative|hash|youtube|Troubleshooting|under|borderRightWidth|borderTopWidth|borderLeftWidth|Please|above||navigate|borderBottomWidth|forcestop|copy|extra|shadowBtmMod|clientX|originalEvent|line|size|Put|enable|includes|option|Settings|Global|IsFullScreen|edit|hider|font|originalFontSize|area|ieEasing|loads|depth|cbInit|cbStart|cbStop|0px|allowFullScreenMode|optimizeForIE78|cssTransitions|scale|cbPause|h1|cbAnimStart|youtubePreview|horizontal|altKey|shiftKey|options|resizeThumb|hoverPrevNext|preserve|yourLogoStyle|yourLogoTarget|responsive|touchNav|aeU|pauseOnHover|showBarTimer|optimizeForMobile|mirror|showCircleTimer|SLIDE|keybNav|found|firstLayerAnimated|front|custom2d|custom3d|scalein|chrome|putData|col|substr|rotatein|parallaxin|off|not|uaMatch|zIndex|animating|stopLayer|randomize|while|large|parallaxIn|easeInOutQuint|properties|prop|tagName|Trying|mistyped||WebkitTransformStyle|without|Loading|stylesheet|offsetLeft||Skin|test3d|Possibilities|opera|mozilla|rv|information|offsetHeight|compatible|hasOwnProperty|already||OPerspective|feeds|videos|alt|gdata||http|hide|file|entry|media|vi|black|||20px|radius|seconds|group|yt|pointer|cursor|OTransformStyle|transformStyle|were|Neither|mode|msTransformStyle|Fallback|WebkitPerspective|MozPerspective|perspective|deeplink|insertBefore||disabled||msPerspective|controls|MozTransformStyle|issues|comment|comments|item|no|there|any||duplicates|requires|least|know|what|don||depository|newer|Updater|them|Ask|Javascript|conflict|itself|that|string|multiple|doesn|disable|should|4e3|must|corresponding|every|have|us|private|BlackBerry|iPod|Windows|Phone|cause|isHideOn3D|iPad|iPhone|continue|khtml|Android|title|webOS|exclam|glass|skins|We|need|page|profile|message|our|FTP|some|also|uses|_blank|maxresdefault|cases|jpg|safari|300px|easeOut|quad|easeout||easeIn|easein|Quad|quart|quint|Quint|Cubic|cubic|Quart|easeInOut|easeinout|outline|queue|textDecoration|target|bock|CancelFullScreen|RequestFullScreen|easeInExpo|10000000000|restart|350|sine|Sine|curtiles|t2d|nexttiles|vertical|400|sequence|carousel|layerMarginRight|layerMarginBottom|custom|specified|mixed|curtile|Circ|elastic|circ|Expo|expo|Elastic|Back|nexttile|dispay|Bounce|bounce|yourlogo|swing|sideleft|red|sideright|mousemove|absolute|Layer||Content|touchstart|webkitIsFullScreen|circle|pageX|touchscroll|indicator|keydown|static|code|Init|below|slides|Number|center|backgroundImage|touchmove|2px|backgroundColor|important|distance|thumbnail_large|v2|fixed|touchend|fullscreenchange|solid|wrapAll|mozFullScreen|webkitfullscreenchange|mozfullscreenchange|bar|hack'.split('|'),0,{}))





//custom scripts
$(document).ready(function() {
    $('.simple-menu').sidr();
    $('a').tooltip();
    $('.tableGrid').dataTable({
        "language": {
            "lengthMenu": " شاهد  " +
                " _MENU_  " +
                " في الصفحة ",
            "zeroRecords": "لا يوجد",
            "info": "الصفحة " +
                "_PAGE_ " +
                " من " +
                " _PAGES_",
            "infoEmpty": "لا يوجد",
            "infoFiltered": "(filtered from _MAX_ total records)"
        }
    });


    $('#layerslider').layerSlider({
        skinsPath : '/plugins/layerslider/skins/',
        skin : 'fullwidth',
        thumbnailNavigation : 'hover',
        hoverPrevNext : true,
        responsive : true,
        responsiveUnder : 1160,
        thumbnailNavigation : false,
        sublayerContainer : 1160
    });



});