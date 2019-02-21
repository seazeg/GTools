window.egUtils=function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e,r){"use strict";e.__esModule=!0;var n=function(){function t(){}return t.prototype.isString=function(t){return"String"===Object.prototype.toString.call(t).slice(8,-1)},t.prototype.isNumber=function(t){return"Number"===Object.prototype.toString.call(t).slice(8,-1)},t.prototype.isBoolean=function(t){return"Boolean"===Object.prototype.toString.call(t).slice(8,-1)},t.prototype.isFunction=function(t){return"Function"===Object.prototype.toString.call(t).slice(8,-1)},t.prototype.isNull=function(t){return"Null"===Object.prototype.toString.call(t).slice(8,-1)},t.prototype.isUndefined=function(t){return"Undefined"===Object.prototype.toString.call(t).slice(8,-1)},t.prototype.isObject=function(t){return"Object"===Object.prototype.toString.call(t).slice(8,-1)},t.prototype.isArray=function(t){return"Array"===Object.prototype.toString.call(t).slice(8,-1)},t.prototype.isDate=function(t){return"Date"===Object.prototype.toString.call(t).slice(8,-1)},t.prototype.isRegExp=function(t){return"RegExp"===Object.prototype.toString.call(t).slice(8,-1)},t.prototype.isError=function(t){return"Error"===Object.prototype.toString.call(t).slice(8,-1)},t.prototype.isSymbol=function(t){return"Symbol"===Object.prototype.toString.call(t).slice(8,-1)},t.prototype.isPromise=function(t){return"Promise"===Object.prototype.toString.call(t).slice(8,-1)},t.prototype.isSet=function(t){return"Set"===Object.prototype.toString.call(t).slice(8,-1)},t.prototype.isEmpty=function(t){return void 0===t||null==t||""==t},t.prototype.isIos=function(){return!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},t.prototype.isAndroid=function(){return-1<navigator.userAgent.indexOf("Android")||-1<navigator.userAgent.indexOf("Linux")},t.prototype.isPC=function(){for(var t=!0,e=navigator.userAgent,r=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=0;n<r.length;n++)if(0<e.indexOf(r[n])){t=!1;break}return t},t.prototype.isLeapYear=function(t){return t%400==0||t%4==0&&t%100!=0},t.prototype.isHtml=function(t){return/<("[^"]*"|'[^']*'|[^'">])*>/.test(t)},t.prototype.isCardID=function(t){if(this.isNumber(t)&&(t=new String(t)),!/^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/.test(t))return!1;var e=t.substr(6,4),r=t.substr(10,2),n=t.substr(12,2),o=Date.parse(r+"-"+n+"-"+e),a=Date.parse((new Date).toString()),i=new Date(e,r,0).getDate();if(a<o||i<n)return!1;for(var u=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],c=t.split(""),p=0,s=0;s<17;s++)p+=parseInt(c[s])*u[s];return c[17].toUpperCase()==["1","0","X","9","8","7","6","5","4","3","2"][p%11].toUpperCase()},t.prototype.isVerify=function(t,e){switch(e){case"num":return/^[0-9]$/.test(t);case"en":return/^[a-zA-Z]+$/.test(t);case"chn":return/^[\u4E00-\u9FA5]+$/.test(t);case"lower":return/^[a-z]+$/.test(t);case"upper":return/^[A-Z]+$/.test(t);case"phone":return/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$/.test(t);case"tel":return/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(t);case"url":return/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(t);case"ip":return/((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(t);case"date":return/^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(t)||/^(\d{4})\-(\d{2})\-(\d{2})$/.test(t);case"email":return/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(t);case"postal":return/[1-9]\d{5}(?!\d)/.test(t);default:return!1}},t}();e.BaseMod=n},function(t,e,r){"use strict";var n=r(0),o=r(2),a=r(3),i=r(4),u=r(5),c=r(6),p=function(){function t(){}return t.prototype._extend=function(t,e){if("[object Object]"===Object.prototype.toString.call(t)&&"[object Object]"===Object.prototype.toString.call(e))for(var r in e)t[r]=t[r]&&"[object Object]"===t[r].toString()?this._extend(t[r],e[r]):t[r]=e[r];return t},t.prototype._init=function(){var t={BaseMod:n.BaseMod,StringMod:o.StringMod,NumberMod:a.NumberMod,DateMod:i.DateMod,ArrayMod:u.ArrayMod,OtherMod:c.OtherMod},e={};for(var r in t)e=this._extend(e,new t[r]);return e},t}();t.exports=(new p)._init()},function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});e.__esModule=!0;var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.trim=function(t,e){switch(e=e||1){case 1:return t.replace(/\s+/g,"");case 2:return t.replace(/(^\s*)|(\s*$)/g,"");case 3:return t.replace(/(^\s*)/g,"");case 4:return t.replace(/(\s*$)/g,"");default:return t}},t.prototype.replaceAll=function(t,e,r){return t.replace(new RegExp(e,"gm"),r)},t.prototype.replaceSubString=function(t){return t.str.substring(t.subStart,t.subEnd).replace(t.beforeStr,t.afterStr)},t.prototype.filterHtmlCode=function(t){var e={"<":"&lt;",">":"&gt","&":"&amp;","(":"&#40;",")":"&#41;"," ":"&nbsp;",'"':"&quot;","'":"&#39;"};return t.replace(/[<>&|() '"]/g,function(t){return e[t]})},t.prototype.fristCharUpperCase=function(t){return e.prototype.isEmpty.call(this,t)?t:t.replace(/^[a-z]/,function(t){return t.toLocaleUpperCase()})},t.prototype.fristCharLowerCase=function(t){return e.prototype.isEmpty.call(this,t)?t:t.replace(/^[A-Z]/,function(t){return t.toLocaleLowerCase()})},t.prototype.compressRepeatedStr=function(t,e){var r=new RegExp("([a-z])\\1+",e?"gi":"g");return t.replace(r,function(t,e){return t.length+e})},t}(r(0).BaseMod);e.StringMod=a},function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});e.__esModule=!0;var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.getPlaceRandomNum=function(t,e){return"float"==e?Math.random()*t:Math.ceil(Math.random()*t)},e.prototype.getRangeRandomNum=function(t,e){return Math.floor(t+Math.random()*(e+1-t))},e.prototype.getFormatCurrency=function(t){return t.split("").reverse().join("").replace(/(\d{3}(?=\d)(?!\d+\.|$))/g,"$1,").split("").reverse().join("")},e.prototype.changeToChnCurrency=function(t){if("number"==typeof t&&(t=new String(t)),t=t.replace(/,/g,"").replace(/ /g,"").replace(/￥/g,""),isNaN(t))return"";for(var e=String(t).split("."),r="",n=e[0].length-1;0<=n;n--){if(10<e[0].length)return"";var o="",a=e[0].charAt(n);switch(a){case"0":o="零"+o;break;case"1":o="壹"+o;break;case"2":o="贰"+o;break;case"3":o="叁"+o;break;case"4":o="肆"+o;break;case"5":o="伍"+o;break;case"6":o="陆"+o;break;case"7":o="柒"+o;break;case"8":o="捌"+o;break;case"9":o="玖"+o}switch(e[0].length-n-1){case 0:o+="元";break;case 1:0!=a&&(o+="拾");break;case 2:0!=a&&(o+="佰");break;case 3:0!=a&&(o+="仟");break;case 4:o+="万";break;case 5:0!=a&&(o+="拾");break;case 6:0!=a&&(o+="佰");break;case 7:0!=a&&(o+="仟");break;case 8:o+="亿";break;case 9:o+="拾"}r=o+r}if(-1!=t.indexOf(".")){2<e[1].length&&(e[1]=e[1].substr(0,2));for(n=0;n<e[1].length;n++){o="";switch(e[1].charAt(n)){case"0":o="零"+o;break;case"1":o="壹"+o;break;case"2":o="贰"+o;break;case"3":o="叁"+o;break;case"4":o="肆"+o;break;case"5":o="伍"+o;break;case"6":o="陆"+o;break;case"7":o="柒"+o;break;case"8":o="捌"+o;break;case"9":o="玖"+o}0==n&&(o+="角"),1==n&&(o+="分"),r+=o}}for(;-1!=r.search("零零");)r=r.replace("零零","零").replace("零亿","亿").replace("亿万","亿").replace("零万","万").replace("零元","元").replace("零角","").replace("零分","");return"元"==r.charAt(r.length-1)&&(r+="整"),r},e}(r(0).BaseMod);e.NumberMod=a},function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});e.__esModule=!0;var a=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return o(t,n),t.prototype.formatDate=function(t,e){if(0===arguments.length)return null;10===(t+"").length&&(t=1e3*Number(t));var r,n=e||"yyyy-MM-dd hh:mm:ss",o={yyyy:(r="object"==typeof t?t:new Date(t)).getFullYear(),MM:r.getMonth()+1,dd:r.getDate(),hh:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds()};return n.replace(/(yyyy|MM|dd|hh|mm|ss)+/g,function(t,e){var r=o[e];return 0<t.length&&r<10&&(r="0"+r),r||0})},t.prototype.formatTime=function(t){return 3600<=t?Math.floor(t/3600)+"小时"+Math.floor(t%3600/60)+"分"+t%60+"秒":60<=t?Math.floor(t/60)+"分"+t%60+"秒":t%60+"秒"},t.prototype.getDayMinus=function(t,e){return Math.floor((Number(new Date(e))-Number(new Date(t)))/864e5)},t.prototype.getYearDays=function(t){var e=365;return 29==this.getMonthDays(t+"-2")&&(e=366),e},t.prototype.getMonthDays=function(t){var e=new Date(t),r=e.getFullYear();return[31,null,31,30,31,30,31,31,30,31,30,31][e.getMonth()]||(n.prototype.isLeapYear.call(this,r)?29:28)},t.prototype.getWhichWeek=function(t){for(var e=new Date(t),r=e.getFullYear(),n=e.getMonth(),o=e.getDate(),a=new Date(r,0,1).getDay()||7,i=0;i<n;i++)o+=this.getMonthDays(r+"-"+i);return 1==a?Math.ceil(o/a):(o-=7-a+1,Math.ceil(o/7)+1)},t}(r(0).BaseMod);e.DateMod=a},function(t,e,r){"use strict";e.__esModule=!0;var n=function(){function t(){}return t.prototype.arrUnique=function(t){for(var e=[],r=0;r<t.length;r++)-1==e.indexOf(t[r])&&e.push(t[r]);return e},t.prototype.arrSort=function(r,n){return r.sort(function(t,e){switch(n){case 1:return e-t;case 2:return t-e;case 3:return Math.random()-.5;default:return r}})},t.prototype.arrRemove=function(t,e){var r=t.indexOf(e);return-1<r&&t.splice(r,1),t},t.prototype.arrUnion=function(t,e){return this.arrUnique(t.concat(e))},t.prototype.arrIntersect=function(e,t){return t.filter(function(t){return-1!==e.indexOf(t)})},t.prototype.arrMax=function(t){return Math.max.apply(null,t)},t.prototype.arrMin=function(t){return Math.min.apply(null,t)},t.prototype.arrSum=function(t){return t.reduce(function(t,e){return t+e})},t.prototype.arrAverage=function(t){return this.arrSum(t)/t.length},t.prototype.mergeJSON=function(t,e){var r={};if(t&&e){for(var n in e)t[n]=e[n];r=t}return r},t.prototype.deepCopy=function(t){return JSON.parse(JSON.stringify(t))},t}();e.ArrayMod=n},function(t,e,r){"use strict";e.__esModule=!0;var n=function(){function t(){}return t.prototype.htmlToStirng=function(t){var e=document.createElement("div");return e.appendChild(t),e.innerHTML},t.prototype.stringToHtml=function(t){var e=document.createElement("div");return e.innerHTML=t,e.children[0]},t.prototype.getQueryParam=function(t){var e=window.location.search.substr(1).match(new RegExp("(^|&)"+t+"=([^&]*)(&|$)"));return null!=e?decodeURIComponent(e[2]):null},t.prototype.getRandomColor=function(){return"#"+function(t){return(t+="0123456789abcdef"[Math.floor(16*Math.random())])&&6==t.length?t:arguments.callee(t)}("")},t.prototype.getBrowserType=function(){var t=navigator.userAgent,e=-1<t.indexOf("Opera"),r=-1<t.indexOf("compatible")&&-1<t.indexOf("MSIE")&&!e,n=-1<t.indexOf("Trident")&&-1<t.indexOf("rv:11.0"),o=-1<t.indexOf("Edge")&&!r,a=-1<t.indexOf("Firefox"),i=-1<t.indexOf("Safari")&&-1==t.indexOf("Chrome"),u=-1<t.indexOf("Chrome")&&-1<t.indexOf("Safari");if(r){new RegExp("MSIE (\\d+\\.\\d+);").test(t);var c=parseFloat(RegExp.$1);return 7==c?"IE7":8==c?"IE8":9==c?"IE9":10==c?"IE10":"IE7以下"}return n?"IE11":o?"Edge":a?"FF":e?"Opera":i?"Safari":u?"Chrome":void 0},t.prototype.relativePathToFullPath=function(t){var e=new Image;return e.src=t,t=e.src,e.src="",t},t.prototype.checkPwd=function(t){var e=0;return t.length<6||(/[0-9]/.test(t)&&e++,/[a-z]/.test(t)&&e++,/[A-Z]/.test(t)&&e++,/[\.|-|_]/.test(t)&&e++),e},t}();e.OtherMod=n}]);