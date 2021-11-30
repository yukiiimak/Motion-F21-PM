!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,(function(exports){"use strict";
/*!
	 * EaselPlugin 3.7.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/var e,t,r,i,n,l,o="redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset".split(","),s=function(){return"undefined"!=typeof window},u=function(){return e||s()&&(e=window.gsap)&&e.registerPlugin&&e},a=function(){return i||r&&r.createjs||r||{}},f=function(e){return console.warn(e)},c=function(e){var t=e.getBounds&&e.getBounds();t||(t=e.nominalBounds||{x:0,y:0,width:100,height:100},e.setBounds&&e.setBounds(t.x,t.y,t.width,t.height)),e.cache&&e.cache(t.x,t.y,t.width,t.height),f("EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. "+e)},d=function(t,r,i){n||(n=a().ColorFilter)||f("EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.");for(var l,s,u,d,h,p,g=t.filters||[],b=g.length;b--;)if(g[b]instanceof n){s=g[b];break}if(s||(s=new n,g.push(s),t.filters=g),u=s.clone(),null!=r.tint)l=e.utils.splitColor(r.tint),d=null!=r.tintAmount?+r.tintAmount:1,u.redOffset=+l[0]*d,u.greenOffset=+l[1]*d,u.blueOffset=+l[2]*d,u.redMultiplier=u.greenMultiplier=u.blueMultiplier=1-d;else for(h in r)"exposure"!==h&&"brightness"!==h&&(u[h]=+r[h]);for(null!=r.exposure?(u.redOffset=u.greenOffset=u.blueOffset=255*(+r.exposure-1),u.redMultiplier=u.greenMultiplier=u.blueMultiplier=1):null!=r.brightness&&(d=+r.brightness-1,u.redOffset=u.greenOffset=u.blueOffset=d>0?255*d:0,u.redMultiplier=u.greenMultiplier=u.blueMultiplier=1-Math.abs(d)),b=8;b--;)s[h=o[b]]!==u[h]&&(p=i.add(s,h,s[h],u[h]))&&(p.op="easel_colorFilter");i._props.push("easel_colorFilter"),t.cacheID||c(t)},h=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],p=.212671,g=.71516,b=.072169,M=function(e,t){if(!(e instanceof Array&&t instanceof Array))return t;var r,i,n=[],l=0,o=0;for(r=0;r<4;r++){for(i=0;i<5;i++)o=4===i?e[l+4]:0,n[l+i]=e[l]*t[i]+e[l+1]*t[i+5]+e[l+2]*t[i+10]+e[l+3]*t[i+15]+o;l+=5}return n},m=function(t,r,i){l||(l=a().ColorMatrixFilter)||f("EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.");for(var n,o,s,u,d,m,w=t.filters||[],x=w.length;--x>-1;)if(w[x]instanceof l){s=w[x];break}for(s||(s=new l(h.slice()),w.push(s),t.filters=w),o=s.matrix,n=h.slice(),null!=r.colorize&&(n=function(t,r,i){isNaN(i)&&(i=1);var n=e.utils.splitColor(r),l=n[0]/255,o=n[1]/255,s=n[2]/255,u=1-i;return M([u+i*l*p,i*l*g,i*l*b,0,0,i*o*p,u+i*o*g,i*o*b,0,0,i*s*p,i*s*g,u+i*s*b,0,0,0,0,0,1,0],t)}(n,r.colorize,Number(r.colorizeAmount))),null!=r.contrast&&(d=n,m=Number(r.contrast),n=isNaN(m)?d:M([m+=.01,0,0,0,128*(1-m),0,m,0,0,128*(1-m),0,0,m,0,128*(1-m),0,0,0,1,0],d)),null!=r.hue&&(n=function(e,t){if(isNaN(t))return e;t*=Math.PI/180;var r=Math.cos(t),i=Math.sin(t);return M([p+r*(1-p)+i*-p,g+r*-g+i*-g,b+r*-b+i*(1-b),0,0,p+r*-p+.143*i,g+.28484*r+.14*i,b+r*-b+-.283*i,0,0,p+r*-p+-.787329*i,g+r*-g+i*g,b+r*(1-b)+i*b,0,0,0,0,0,1,0,0,0,0,0,1],e)}(n,Number(r.hue))),null!=r.saturation&&(n=function(e,t){if(isNaN(t))return e;var r=1-t,i=r*p,n=r*g,l=r*b;return M([i+t,n,l,0,0,i,n+t,l,0,0,i,n,l+t,0,0,0,0,0,1,0],e)}(n,Number(r.saturation))),x=n.length;--x>-1;)n[x]!==o[x]&&(u=i.add(o,x,o[x],n[x]))&&(u.op="easel_colorMatrixFilter");i._props.push("easel_colorMatrixFilter"),t.cacheID||c(),i._matrix=o},w=function(i){e=i||u(),s()&&(r=window),e&&(t=1)},x={version:"3.7.1",name:"easel",init:function(r,i,n,l,o){var s,u,a,c,h,p,g;for(s in t||(w(),e||f("Please gsap.registerPlugin(EaselPlugin)")),this.target=r,i)if(h=i[s],"colorFilter"===s||"tint"===s||"tintAmount"===s||"exposure"===s||"brightness"===s)a||(d(r,i.colorFilter||i,this),a=!0);else if("saturation"===s||"contrast"===s||"hue"===s||"colorize"===s||"colorizeAmount"===s)c||(m(r,i.colorMatrixFilter||i,this),c=!0);else if("frame"===s){if("string"==typeof h&&"="!==h.charAt(1)&&(p=r.labels))for(g=0;g<p.length;g++)p[g].label===h&&(h=p[g].position);(u=this.add(r,"gotoAndStop",r.currentFrame,h,l,o,Math.round))&&(u.op=s)}else null!=r[s]&&this.add(r,s,"get",h)},render:function(e,t){for(var r=t._pt;r;)r.r(e,r.d),r=r._next;t.target.cacheID&&t.target.updateCache()},register:w,registerCreateJS:function(e){i=e}};u()&&e.registerPlugin(x),exports.EaselPlugin=x,exports.default=x,Object.defineProperty(exports,"__esModule",{value:!0})}));