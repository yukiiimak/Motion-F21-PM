/*!
 * EaselPlugin 3.7.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,(function(e){"use strict";function t(){return"undefined"!=typeof window}function r(){return f||t()&&(f=window.gsap)&&f.registerPlugin&&f}function i(){return p||d&&d.createjs||d||{}}function n(e){return console.warn(e)}function l(e){var t=e.getBounds&&e.getBounds();t||(t=e.nominalBounds||{x:0,y:0,width:100,height:100},e.setBounds&&e.setBounds(t.x,t.y,t.width,t.height)),e.cache&&e.cache(t.x,t.y,t.width,t.height),n("EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. "+e)}function o(e,t,r){(h=h||i().ColorFilter)||n("EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.");for(var o,s,u,a,c,d,p=e.filters||[],g=p.length;g--;)if(p[g]instanceof h){s=p[g];break}if(s||(s=new h,p.push(s),e.filters=p),u=s.clone(),null!=t.tint)o=f.utils.splitColor(t.tint),a=null!=t.tintAmount?+t.tintAmount:1,u.redOffset=o[0]*a,u.greenOffset=o[1]*a,u.blueOffset=o[2]*a,u.redMultiplier=u.greenMultiplier=u.blueMultiplier=1-a;else for(c in t)"exposure"!==c&&"brightness"!==c&&(u[c]=+t[c]);for(null!=t.exposure?(u.redOffset=u.greenOffset=u.blueOffset=255*(t.exposure-1),u.redMultiplier=u.greenMultiplier=u.blueMultiplier=1):null!=t.brightness&&(a=t.brightness-1,u.redOffset=u.greenOffset=u.blueOffset=0<a?255*a:0,u.redMultiplier=u.greenMultiplier=u.blueMultiplier=1-Math.abs(a)),g=8;g--;)s[c=b[g]]!==u[c]&&(d=r.add(s,c,s[c],u[c]))&&(d.op="easel_colorFilter");r._props.push("easel_colorFilter"),e.cacheID||l(e)}function s(e,t){if(!(e instanceof Array&&t instanceof Array))return t;var r,i,n=[],l=0,o=0;for(r=0;r<4;r++){for(i=0;i<5;i++)o=4===i?e[l+4]:0,n[l+i]=e[l]*t[i]+e[l+1]*t[i+5]+e[l+2]*t[i+10]+e[l+3]*t[i+15]+o;l+=5}return n}function u(e,t,r){(g=g||i().ColorMatrixFilter)||n("EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.");for(var o,u,a,c,d=e.filters||[],p=d.length;-1<--p;)if(d[p]instanceof g){a=d[p];break}for(a||(a=new g(M.slice()),d.push(a),e.filters=d),u=a.matrix,o=M.slice(),null!=t.colorize&&(o=function(e,t,r){isNaN(r)&&(r=1);var i=f.utils.splitColor(t),n=i[0]/255,l=i[1]/255,o=i[2]/255,u=1-r;return s([u+r*n*m,r*n*w,r*n*x,0,0,r*l*m,u+r*l*w,r*l*x,0,0,r*o*m,r*o*w,u+r*o*x,0,0,0,0,0,1,0],e)}(o,t.colorize,Number(t.colorizeAmount))),null!=t.contrast&&(o=function(e,t){return isNaN(t)?e:s([t+=.01,0,0,0,128*(1-t),0,t,0,0,128*(1-t),0,0,t,0,128*(1-t),0,0,0,1,0],e)}(o,Number(t.contrast))),null!=t.hue&&(o=function(e,t){if(isNaN(t))return e;t*=Math.PI/180;var r=Math.cos(t),i=Math.sin(t);return s([m+r*(1-m)+i*-m,w+r*-w+i*-w,x+r*-x+i*(1-x),0,0,m+r*-m+.143*i,w+r*(1-w)+.14*i,x+r*-x+-.283*i,0,0,m+r*-m+i*-(1-m),w+r*-w+i*w,x+r*(1-x)+i*x,0,0,0,0,0,1,0,0,0,0,0,1],e)}(o,Number(t.hue))),null!=t.saturation&&(o=function(e,t){if(isNaN(t))return e;var r=1-t,i=r*m,n=r*w,l=r*x;return s([i+t,n,l,0,0,i,n+t,l,0,0,i,n,l+t,0,0,0,0,0,1,0],e)}(o,Number(t.saturation))),p=o.length;-1<--p;)o[p]!==u[p]&&(c=r.add(u,p,u[p],o[p]))&&(c.op="easel_colorMatrixFilter");r._props.push("easel_colorMatrixFilter"),e.cacheID||l(),r._matrix=u}function a(e){f=e||r(),t()&&(d=window),f&&(c=1)}var f,c,d,p,h,g,b="redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset".split(","),M=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],m=.212671,w=.71516,x=.072169,y={version:"3.7.1",name:"easel",init:function(e,t,r,i,l){var s,d,p,h,g,b,M;for(s in c||(a(),f||n("Please gsap.registerPlugin(EaselPlugin)")),this.target=e,t)if(g=t[s],"colorFilter"===s||"tint"===s||"tintAmount"===s||"exposure"===s||"brightness"===s)p||(o(e,t.colorFilter||t,this),p=!0);else if("saturation"===s||"contrast"===s||"hue"===s||"colorize"===s||"colorizeAmount"===s)h||(u(e,t.colorMatrixFilter||t,this),h=!0);else if("frame"===s){if("string"==typeof g&&"="!==g.charAt(1)&&(b=e.labels))for(M=0;M<b.length;M++)b[M].label===g&&(g=b[M].position);(d=this.add(e,"gotoAndStop",e.currentFrame,g,i,l,Math.round))&&(d.op=s)}else null!=e[s]&&this.add(e,s,"get",g)},render:function(e,t){for(var r=t._pt;r;)r.r(e,r.d),r=r._next;t.target.cacheID&&t.target.updateCache()},register:a,registerCreateJS:function(e){p=e}};r()&&f.registerPlugin(y),e.EaselPlugin=y,e.default=y,"undefined"==typeof window||window!==e?Object.defineProperty(e,"__esModule",{value:!0}):delete e.default}));