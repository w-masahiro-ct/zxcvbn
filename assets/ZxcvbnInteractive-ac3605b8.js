import{e as F,g as ee,t as te,z as D,a as re,d as se,b as ne,c as oe}from"./commonjsHelpers-4904f670.js";import{_ as ae,r as q,o as H,c as L,b as u,d as _,w as g,v as V,h as A,F as ie,a as N,g as ue}from"./app-482771be.js";var le=(n,r,f)=>{let d;return function(...b){const h=this,l=()=>{d=void 0,f||n.apply(h,b)},a=f&&!d;if(d!==void 0&&clearTimeout(d),d=setTimeout(l,r),a)return n.apply(h,b)}},ce={warnings:{straightRow:"Straight rows of keys on your keyboard are easy to guess.",keyPattern:"Short keyboard patterns are easy to guess.",simpleRepeat:'Repeated characters like "aaa" are easy to guess.',extendedRepeat:'Repeated character patterns like "abcabcabc" are easy to guess.',sequences:'Common character sequences like "abc" are easy to guess.',recentYears:"Recent years are easy to guess.",dates:"Dates are easy to guess.",topTen:"This is a heavily used password.",topHundred:"This is a frequently used password.",common:"This is a commonly used password.",similarToCommon:"This is similar to a commonly used password.",wordByItself:"Single words are easy to guess.",namesByThemselves:"Single names or surnames are easy to guess.",commonNames:"Common names and surnames are easy to guess.",userInputs:"There should not be any personal or page related data.",pwned:"Your password was exposed by a data breach on the Internet."},suggestions:{l33t:"Avoid predictable letter substitutions like '@' for 'a'.",reverseWords:"Avoid reversed spellings of common words.",allUppercase:"Capitalize some, but not all letters.",capitalization:"Capitalize more than the first letter.",dates:"Avoid dates and years that are associated with you.",recentYears:"Avoid recent years.",associatedYears:"Avoid years that are associated with you.",sequences:"Avoid common character sequences.",repeated:"Avoid repeated words and characters.",longerKeyboardPattern:"Use longer keyboard patterns and change typing direction multiple times.",anotherWord:"Add more words that are less common.",useWords:"Use multiple words, but avoid common phrases.",noNeed:"You can create strong passwords without using symbols, numbers, or uppercase letters.",pwned:"If you use this password elsewhere, you should change it."},timeEstimation:{ltSecond:"less than a second",second:"{base} second",seconds:"{base} seconds",minute:"{base} minute",minutes:"{base} minutes",hour:"{base} hour",hours:"{base} hours",day:"{base} day",days:"{base} days",month:"{base} month",months:"{base} months",year:"{base} year",years:"{base} years",centuries:"centuries"}},I={exports:{}};(function(n,r){var f=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof F<"u"&&F,d=function(){function b(){this.fetch=!1,this.DOMException=f.DOMException}return b.prototype=f,new b}();(function(b){(function(h){var l=typeof b<"u"&&b||typeof self<"u"&&self||typeof l<"u"&&l,a={searchParams:"URLSearchParams"in l,iterable:"Symbol"in l&&"iterator"in Symbol,blob:"FileReader"in l&&"Blob"in l&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in l,arrayBuffer:"ArrayBuffer"in l};function k(e){return e&&DataView.prototype.isPrototypeOf(e)}if(a.arrayBuffer)var T=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],S=ArrayBuffer.isView||function(e){return e&&T.indexOf(Object.prototype.toString.call(e))>-1};function x(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||e==="")throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function U(e){return typeof e!="string"&&(e=String(e)),e}function P(e){var t={next:function(){var s=e.shift();return{done:s===void 0,value:s}}};return a.iterable&&(t[Symbol.iterator]=function(){return t}),t}function y(e){this.map={},e instanceof y?e.forEach(function(t,s){this.append(s,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}y.prototype.append=function(e,t){e=x(e),t=U(t);var s=this.map[e];this.map[e]=s?s+", "+t:t},y.prototype.delete=function(e){delete this.map[x(e)]},y.prototype.get=function(e){return e=x(e),this.has(e)?this.map[e]:null},y.prototype.has=function(e){return this.map.hasOwnProperty(x(e))},y.prototype.set=function(e,t){this.map[x(e)]=U(t)},y.prototype.forEach=function(e,t){for(var s in this.map)this.map.hasOwnProperty(s)&&e.call(t,this.map[s],s,this)},y.prototype.keys=function(){var e=[];return this.forEach(function(t,s){e.push(s)}),P(e)},y.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),P(e)},y.prototype.entries=function(){var e=[];return this.forEach(function(t,s){e.push([s,t])}),P(e)},a.iterable&&(y.prototype[Symbol.iterator]=y.prototype.entries);function O(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function C(e){return new Promise(function(t,s){e.onload=function(){t(e.result)},e.onerror=function(){s(e.error)}})}function z(e){var t=new FileReader,s=C(t);return t.readAsArrayBuffer(e),s}function Z(e){var t=new FileReader,s=C(t);return t.readAsText(e),s}function Y(e){for(var t=new Uint8Array(e),s=new Array(t.length),c=0;c<t.length;c++)s[c]=String.fromCharCode(t[c]);return s.join("")}function M(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function j(){return this.bodyUsed=!1,this._initBody=function(e){this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:a.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:a.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:a.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():a.arrayBuffer&&a.blob&&k(e)?(this._bodyArrayBuffer=M(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||S(e))?this._bodyArrayBuffer=M(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):a.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a.blob&&(this.blob=function(){var e=O(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=O(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(z)}),this.text=function(){var e=O(this);if(e)return e;if(this._bodyBlob)return Z(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(Y(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a.formData&&(this.formData=function(){return this.text().then(X)}),this.json=function(){return this.text().then(JSON.parse)},this}var J=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function W(e){var t=e.toUpperCase();return J.indexOf(t)>-1?t:e}function v(e,t){if(!(this instanceof v))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t=t||{};var s=t.body;if(e instanceof v){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new y(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!s&&e._bodyInit!=null&&(s=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new y(t.headers)),this.method=W(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&s)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(s),(this.method==="GET"||this.method==="HEAD")&&(t.cache==="no-store"||t.cache==="no-cache")){var c=/([?&])_=[^&]*/;if(c.test(this.url))this.url=this.url.replace(c,"$1_="+new Date().getTime());else{var p=/\?/;this.url+=(p.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})};function X(e){var t=new FormData;return e.trim().split("&").forEach(function(s){if(s){var c=s.split("="),p=c.shift().replace(/\+/g," "),i=c.join("=").replace(/\+/g," ");t.append(decodeURIComponent(p),decodeURIComponent(i))}}),t}function K(e){var t=new y,s=e.replace(/\r?\n[\t ]+/g," ");return s.split("\r").map(function(c){return c.indexOf(`
`)===0?c.substr(1,c.length):c}).forEach(function(c){var p=c.split(":"),i=p.shift().trim();if(i){var E=p.join(":").trim();t.append(i,E)}}),t}j.call(v.prototype);function w(e,t){if(!(this instanceof w))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=t.status===void 0?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText===void 0?"":""+t.statusText,this.headers=new y(t.headers),this.url=t.url||"",this._initBody(e)}j.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new y(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var Q=[301,302,303,307,308];w.redirect=function(e,t){if(Q.indexOf(t)===-1)throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})},h.DOMException=l.DOMException;try{new h.DOMException}catch{h.DOMException=function(t,s){this.message=t,this.name=s;var c=Error(t);this.stack=c.stack},h.DOMException.prototype=Object.create(Error.prototype),h.DOMException.prototype.constructor=h.DOMException}function R(e,t){return new Promise(function(s,c){var p=new v(e,t);if(p.signal&&p.signal.aborted)return c(new h.DOMException("Aborted","AbortError"));var i=new XMLHttpRequest;function E(){i.abort()}i.onload=function(){var m={status:i.status,statusText:i.statusText,headers:K(i.getAllResponseHeaders()||"")};m.url="responseURL"in i?i.responseURL:m.headers.get("X-Request-URL");var B="response"in i?i.response:i.responseText;setTimeout(function(){s(new w(B,m))},0)},i.onerror=function(){setTimeout(function(){c(new TypeError("Network request failed"))},0)},i.ontimeout=function(){setTimeout(function(){c(new TypeError("Network request failed"))},0)},i.onabort=function(){setTimeout(function(){c(new h.DOMException("Aborted","AbortError"))},0)};function $(m){try{return m===""&&l.location.href?l.location.href:m}catch{return m}}i.open(p.method,$(p.url),!0),p.credentials==="include"?i.withCredentials=!0:p.credentials==="omit"&&(i.withCredentials=!1),"responseType"in i&&(a.blob?i.responseType="blob":a.arrayBuffer&&p.headers.get("Content-Type")&&p.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(i.responseType="arraybuffer")),t&&typeof t.headers=="object"&&!(t.headers instanceof y)?Object.getOwnPropertyNames(t.headers).forEach(function(m){i.setRequestHeader(m,U(t.headers[m]))}):p.headers.forEach(function(m,B){i.setRequestHeader(B,m)}),p.signal&&(p.signal.addEventListener("abort",E),i.onreadystatechange=function(){i.readyState===4&&p.signal.removeEventListener("abort",E)}),i.send(typeof p._bodyInit>"u"?null:p._bodyInit)})}return R.polyfill=!0,l.fetch||(l.fetch=R,l.Headers=y,l.Request=v,l.Response=w),h.Headers=y,h.Request=v,h.Response=w,h.fetch=R,h})({})})(d),d.fetch.ponyfill=!0,delete d.fetch.polyfill;var o=f.fetch?f:d;r=o.fetch,r.default=o.fetch,r.fetch=o.fetch,r.Headers=o.Headers,r.Request=o.Request,r.Response=o.Response,n.exports=r})(I,I.exports);var de=I.exports;const he=ee(de),G=typeof process<"u"&&process.release&&process.release.name==="node",fe=n=>{if(G){const r=decodeURI(encodeURIComponent(n)),f=new Uint8Array(r.length);for(let d=0;d<r.length;d+=1)f[d]=r.charCodeAt(d);return f}try{return new TextEncoder().encode(n)}catch(r){throw new Error(`No encoder found, ${r}`)}},pe=async n=>{const r=fe(n);let f="";if(G)f=require("crypto").createHash("sha1").update(n).digest("hex").toUpperCase();else if(crypto){const d=await crypto.subtle.digest("SHA-1",r);f=Array.from(new Uint8Array(d)).map(b=>b.toString(16).padStart(2,"0")).join("").toUpperCase()}return f},ye="https://api.pwnedpasswords.com/range/",be=n=>!1;var me=async(n,{universalFetch:r,url:f=ye,networkErrorHandler:d=be})=>{if(!r||n.length<2)return null;const o=(await pe(n)).toUpperCase(),b=o.slice(0,5),h=o.slice(5),l=await r(`${f}${b}`,{method:"GET",headers:{"Add-Padding":"true"}}).catch(T=>d(T));return typeof l=="boolean"?!1:l.status>=400?d(l):(await l.text()).split(`\r
`).find(T=>T.split(":")[0]===h)},we=(n,{url:r,networkErrorHandler:f})=>class{async match({password:o}){const b=[],h=await me(o,{universalFetch:n,url:r,networkErrorHandler:f});return h&&b.push({pattern:"pwned",pwnedAmount:parseInt(h.split(":")[1],10),i:0,j:o.length-1,token:o}),b}},ve=()=>1,ge=n=>()=>({warning:n.translations.warnings.pwned,suggestions:[n.translations.suggestions.pwned]});const _e=(n,r,f={})=>({Matching:we(n,f),feedback:ge(r),scoring:ve});const Ae={name:"ZxcvbnInteractive",data(){return{password:"",result:null,useTranslations:!0,useGraphs:!0,useDictionaries:!0,useDebounce:!0,usePwned:!0,useLevenshteinDistance:!0,debounce:le(this.useZxcvbn,200),userInputs:""}},mounted(){this.setOptions(),this.addPwnedMatcher()},methods:{setResult(n){this.result=n},setOptions(){const n={dictionary:{},translations:te,graphs:{},useLevenshteinDistance:this.useLevenshteinDistance};this.useDictionaries&&(n.dictionary={...se,...ne}),this.useTranslations&&(n.translations=ce),this.useGraphs&&(n.graphs=oe),D.setOptions(n)},async useZxcvbn(){if(this.password){const n=this.userInputs.split(",");this.result=await re(this.password,n)}else this.result=null;console.log(this.result)},addPwnedMatcher(){const n=_e(he,D);D.addMatcher("pwned",n)}},watch:{password(){this.useDebounce?this.debounce():this.useZxcvbn()},useTranslations(){this.password="",this.setOptions()},useDictionaries(){this.password="",this.setOptions()},useGraphs(){this.password="",this.setOptions()},useLevenshteinDistance(){this.password="",this.setOptions()},usePwned(n){this.password="",n?this.addPwnedMatcher():delete D.matchers.pwned}}},Te={class:"example"},xe=u("label",null,[u("b",null,"Options")],-1),Ee=u("hr",{style:{width:"100%"}},null,-1),Be={class:"demo-options"},De=u("hr",{style:{width:"100%"}},null,-1),Ue=u("b",null,"Password",-1);function Pe(n,r,f,d,o,b){const h=q("Result"),l=q("Sequence");return H(),L("div",Te,[xe,Ee,u("label",null,[_(" userInputs separated by a comma like John,Smith "),g(u("input",{"onUpdate:modelValue":r[0]||(r[0]=a=>o.userInputs=a),type:"text"},null,512),[[V,o.userInputs]])]),u("ul",Be,[u("li",null,[u("label",null,[g(u("input",{"onUpdate:modelValue":r[1]||(r[1]=a=>o.useDictionaries=a),type:"checkbox"},null,512),[[A,o.useDictionaries]]),_(" Use recommended dictionary ")])]),u("li",null,[u("label",null,[g(u("input",{"onUpdate:modelValue":r[2]||(r[2]=a=>o.useGraphs=a),type:"checkbox"},null,512),[[A,o.useGraphs]]),_(" Use recommended graphs ")])]),u("li",null,[u("label",null,[g(u("input",{"onUpdate:modelValue":r[3]||(r[3]=a=>o.useTranslations=a),type:"checkbox"},null,512),[[A,o.useTranslations]]),_(" Use english translations ")])]),u("li",null,[u("label",null,[g(u("input",{"onUpdate:modelValue":r[4]||(r[4]=a=>o.useDebounce=a),type:"checkbox"},null,512),[[A,o.useDebounce]]),_(" Use debounce helper ")])]),u("li",null,[u("label",null,[g(u("input",{"onUpdate:modelValue":r[5]||(r[5]=a=>o.useLevenshteinDistance=a),type:"checkbox"},null,512),[[A,o.useLevenshteinDistance]]),_(" Use levenstein distance ")])]),u("li",null,[u("label",null,[g(u("input",{"onUpdate:modelValue":r[6]||(r[6]=a=>o.usePwned=a),type:"checkbox"},null,512),[[A,o.usePwned]]),_(" Use pwned matcher ")])])]),De,u("label",null,[Ue,g(u("input",{"onUpdate:modelValue":r[7]||(r[7]=a=>o.password=a),type:"text"},null,512),[[V,o.password]])]),o.result?(H(),L(ie,{key:0},[N(h,{result:o.result},null,8,["result"]),N(l,{result:o.result},null,8,["result"])],64)):ue("",!0)])}const ke=ae(Ae,[["render",Pe],["__file","ZxcvbnInteractive.vue"]]);export{ke as default};
