!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,(function(exports){"use strict";
/*!
	 * CSSRulePlugin 3.7.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/var e,t,n,s,i=function(){return"undefined"!=typeof window},r=function(){return e||i()&&(e=window.gsap)&&e.registerPlugin&&e},o=function(){return t||(l(),s||console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")),t},l=function(o){e=o||r(),i()&&(n=document),e&&(s=e.plugins.css)&&(t=1)},u={version:"3.7.1",name:"cssRule",init:function(e,t,i,r,l){if(!o()||void 0===e.cssText)return!1;var u=e._gsProxy=e._gsProxy||n.createElement("div");this.ss=e,this.style=u.style,u.style.cssText=e.cssText,s.prototype.init.call(this,u,t,i,r,l)},render:function(e,t){for(var n,s=t._pt,i=t.style,r=t.ss;s;)s.r(e,s.d),s=s._next;for(n=i.length;--n>-1;)r[i[n]]=i[i[n]]},getRule:function(e){o();var t,s,i,r,l=n.all?"rules":"cssRules",u=n.styleSheets,c=u.length,f=":"===e.charAt(0);for(e=(f?"":",")+e.split("::").join(":").toLowerCase()+",",f&&(r=[]);c--;){try{if(!(s=u[c][l]))continue;t=s.length}catch(e){console.warn(e);continue}for(;--t>-1;)if((i=s[t]).selectorText&&-1!==(","+i.selectorText.split("::").join(":").toLowerCase()+",").indexOf(e)){if(!f)return i.style;r.push(i.style)}}return r},register:l};r()&&e.registerPlugin(u),exports.CSSRulePlugin=u,exports.default=u,Object.defineProperty(exports,"__esModule",{value:!0})}));