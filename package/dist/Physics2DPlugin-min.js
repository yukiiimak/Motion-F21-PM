!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,(function(exports){"use strict";
/*!
	 * Physics2DPlugin 3.7.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/var e,t,i,s=Math.PI/180,n=function(){return e||"undefined"!=typeof window&&(e=window.gsap)&&e.registerPlugin&&e},a=function(e){return Math.round(1e4*e)/1e4},p=function(s){e=s||n(),t||(i=e.utils.getUnit,t=1)},r=function(e,t,s,n,a){var p=e._gsap,r=p.get(e,t);this.p=t,this.set=p.set(e,t),this.s=this.val=parseFloat(r),this.u=i(r)||0,this.vel=s||0,this.v=this.vel/a,n||0===n?(this.acc=n,this.a=this.acc/(a*a)):this.acc=this.a=0},o={version:"3.7.1",name:"physics2D",register:p,init:function(e,i,n){t||p();var a=this,o=+i.angle||0,c=+i.velocity||0,l=+i.acceleration||0,v=i.xProp||"x",u=i.yProp||"y",f=i.accelerationAngle||0===i.accelerationAngle?+i.accelerationAngle:o;a.target=e,a.tween=n,a.step=0,a.sps=30,i.gravity&&(l=+i.gravity,f=90),o*=s,f*=s,a.fr=1-(+i.friction||0),a._props.push(v,u),a.xp=new r(e,v,Math.cos(o)*c,Math.cos(f)*l,a.sps),a.yp=new r(e,u,Math.sin(o)*c,Math.sin(f)*l,a.sps),a.skipX=a.skipY=0},render:function(e,t){var i,s,n,p,r,o,c=t.xp,l=t.yp,v=t.tween,u=t.target,f=t.step,h=t.sps,d=t.fr,g=t.skipX,y=t.skipY,w=v._from?v._dur-v._time:v._time;if(1===d)n=w*w*.5,i=c.s+c.vel*w+c.acc*n,s=l.s+l.vel*w+l.acc*n;else{for(p=o=(0|(w*=h))-f,o<0&&(c.v=c.vel/h,l.v=l.vel/h,c.val=c.s,l.val=l.s,t.step=0,p=o=0|w),r=w%1*d;o--;)c.v+=c.a,l.v+=l.a,c.v*=d,l.v*=d,c.val+=c.v,l.val+=l.v;i=c.val+c.v*r,s=l.val+l.v*r,t.step+=p}g||c.set(u,c.p,a(i)+c.u),y||l.set(u,l.p,a(s)+l.u)},kill:function(e){this.xp.p===e&&(this.skipX=1),this.yp.p===e&&(this.skipY=1)}};n()&&e.registerPlugin(o),exports.Physics2DPlugin=o,exports.default=o,Object.defineProperty(exports,"__esModule",{value:!0})}));