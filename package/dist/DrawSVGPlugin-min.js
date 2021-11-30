!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,(function(exports){"use strict";
/*!
	 * DrawSVGPlugin 3.7.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/var e,t,n,r,i,s=function(){return"undefined"!=typeof window},o=function(){return e||s()&&(e=window.gsap)&&e.registerPlugin&&e},a=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,f={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},h=function(e){return Math.round(1e4*e)/1e4},d=function(e){return parseFloat(e)||0},l=function(e,t){var n=d(e);return~e.indexOf("%")?n/100*t:n},u=function(e,t){return d(e.getAttribute(t))},c=Math.sqrt,g=function(e,t,n,r,i,s){return c(Math.pow((d(n)-d(e))*i,2)+Math.pow((d(r)-d(t))*s,2))},p=function(e){return console.warn(e)},_=function(e){return"non-scaling-stroke"===e.getAttribute("vector-effect")},y=function(e){if(!(e=t(e)[0]))return 0;var n,r,i,s,o,h,d,l=e.tagName.toLowerCase(),y=e.style,w=1,x=1;_(e)&&(x=e.getScreenCTM(),w=c(x.a*x.a+x.b*x.b),x=c(x.d*x.d+x.c*x.c));try{r=e.getBBox()}catch(e){p("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var v=r||{x:0,y:0,width:0,height:0},b=v.x,k=v.y,m=v.width,P=v.height;if(r&&(m||P)||!f[l]||(m=u(e,f[l][0]),P=u(e,f[l][1]),"rect"!==l&&"line"!==l&&(m*=2,P*=2),"line"===l&&(b=u(e,"x1"),k=u(e,"y1"),m=Math.abs(m-b),P=Math.abs(P-k))),"path"===l)s=y.strokeDasharray,y.strokeDasharray="none",n=e.getTotalLength()||0,w!==x&&p("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),n*=(w+x)/2,y.strokeDasharray=s;else if("rect"===l)n=2*m*w+2*P*x;else if("line"===l)n=g(b,k,b+m,k+P,w,x);else if("polyline"===l||"polygon"===l)for(i=e.getAttribute("points").match(a)||[],"polygon"===l&&i.push(i[0],i[1]),n=0,o=2;o<i.length;o+=2)n+=g(i[o-2],i[o-1],i[o],i[o+1],w,x)||0;else"circle"!==l&&"ellipse"!==l||(h=m/2*w,d=P/2*x,n=Math.PI*(3*(h+d)-c((3*h+d)*(h+3*d))));return n||0},w=function(e,r){if(!(e=t(e)[0]))return[0,0];r||(r=y(e)+1);var i=n.getComputedStyle(e),s=i.strokeDasharray||"",o=d(i.strokeDashoffset),a=s.indexOf(",");return a<0&&(a=s.indexOf(" ")),(s=a<0?r:d(s.substr(0,a)))>r&&(s=r),[-o||0,s-o||0]},x=function(){s()&&(n=window,i=e=o(),t=e.utils.toArray,r=-1!==((n.navigator||{}).userAgent||"").indexOf("Edge"))},v={version:"3.7.1",name:"drawSVG",register:function(t){e=t,x()},init:function(e,t,s,o,a){if(!e.getBBox)return!1;i||x();var f,u,c,g=y(e);return this._style=e.style,this._target=e,t+""=="true"?t="0 100%":t?-1===(t+"").indexOf(" ")&&(t="0 "+t):t="0 0",u=function(e,t,n){var r,i,s=e.indexOf(" ");return s<0?(r=void 0!==n?n+"":e,i=e):(r=e.substr(0,s),i=e.substr(s+1)),(r=l(r,t))>(i=l(i,t))?[i,r]:[r,i]}(t,g,(f=w(e,g))[0]),this._length=h(g),this._dash=h(f[1]-f[0]),this._offset=h(-f[0]),this._dashPT=this.add(this,"_dash",this._dash,h(u[1]-u[0])),this._offsetPT=this.add(this,"_offset",this._offset,h(-u[0])),r&&(c=n.getComputedStyle(e)).strokeLinecap!==c.strokeLinejoin&&(u=d(c.strokeMiterlimit),this.add(e.style,"strokeMiterlimit",u,u+.01)),this._live=_(e)||~(t+"").indexOf("live"),this._nowrap=~(t+"").indexOf("nowrap"),this._props.push("drawSVG"),1},render:function(e,t){var n,r,i,s,o=t._pt,a=t._style;if(o){for(t._live&&(n=y(t._target))!==t._length&&(r=n/t._length,t._length=n,t._offsetPT&&(t._offsetPT.s*=r,t._offsetPT.c*=r),t._dashPT?(t._dashPT.s*=r,t._dashPT.c*=r):t._dash*=r);o;)o.r(e,o.d),o=o._next;i=t._dash||e&&1!==e&&1e-4||0,n=t._length-i+.1,s=t._offset,i&&s&&i+Math.abs(s%t._length)>t._length-.2&&(s+=s<0?.1:-.1)&&(n+=.1),a.strokeDashoffset=i?s:s+.001,a.strokeDasharray=n<.2?"none":i?i+"px,"+(t._nowrap?999999:n)+"px":"0px, 999999px"}},getLength:y,getPosition:w};o()&&e.registerPlugin(v),exports.DrawSVGPlugin=v,exports.default=v,Object.defineProperty(exports,"__esModule",{value:!0})}));