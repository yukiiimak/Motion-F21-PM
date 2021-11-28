!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).window=e.window||{})}(this,(function(exports){"use strict";
/*!
	 * EasePack 3.7.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/var e,n,t=function(){return e||"undefined"!=typeof window&&(e=window.gsap)&&e.registerPlugin&&e},o=function(e,n){return!!(void 0===e?n:e&&!~(e+"").indexOf("false"))},r=function(o){if(e=o||t()){n=e.registerEase;var r,i=e.parseEase(),a=function(e){return function(n){var t=.5+n/2;e.config=function(n){return e(2*(1-n)*n*t+n*n)}}};for(r in i)i[r].config||a(i[r]);for(r in n("slow",u),n("expoScale",c),n("rough",p),v)"version"!==r&&e.core.globals(r,v[r])}},i=function(e,n,t){var r=(e=Math.min(1,e||.7))<1?n||0===n?n:.7:0,i=(1-e)/2,a=i+e,f=o(t);return function(e){var n=e+(.5-e)*r;return e<i?f?1-(e=1-e/i)*e:n-(e=1-e/i)*e*e*e*n:e>a?f?1===e?0:1-(e=(e-a)/i)*e:n+(e-n)*(e=(e-a)/i)*e*e*e:f?1:n}},a=function(n,t,o){var r=Math.log(t/n),i=t-n;return o&&(o=e.parseEase(o)),function(e){return(n*Math.exp(r*(o?o(e):e))-n)/i}},f=function(e,n,t){this.t=e,this.v=n,t&&(this.next=t,t.prev=this,this.c=t.v-n,this.gap=t.t-e)},s=function(n){"object"!=typeof n&&(n={points:+n||20});for(var t,r,i,a,s,u,c,p=n.taper||"none",v=[],l=0,d=0|(+n.points||20),g=d,h=o(n.randomize,!0),x=o(n.clamp),w=e?e.parseEase(n.template):0,E=.4*(+n.strength||1);--g>-1;)t=h?Math.random():1/d*g,r=w?w(t):t,i="none"===p?E:"out"===p?(a=1-t)*a*E:"in"===p?t*t*E:t<.5?(a=2*t)*a*.5*E:(a=2*(1-t))*a*.5*E,h?r+=Math.random()*i-.5*i:g%2?r+=.5*i:r-=.5*i,x&&(r>1?r=1:r<0&&(r=0)),v[l++]={x:t,y:r};for(v.sort((function(e,n){return e.x-n.x})),u=new f(1,1,null),g=d;g--;)s=v[g],u=new f(s.x,s.y,u);return c=new f(0,0,u.t?u:u.next),function(e){var n=c;if(e>n.t){for(;n.next&&e>=n.t;)n=n.next;n=n.prev}else for(;n.prev&&e<=n.t;)n=n.prev;return c=n,n.v+(e-n.t)/n.gap*n.c}},u=i(.7);u.ease=u,u.config=i;var c=a(1,2);c.config=a;var p=s();p.ease=p,p.config=s;var v={SlowMo:u,RoughEase:p,ExpoScaleEase:c};for(var l in v)v[l].register=r,v[l].version="3.7.1";t()&&e.registerPlugin(u),exports.EasePack=v,exports.ExpoScaleEase=c,exports.RoughEase=p,exports.SlowMo=u,exports.default=v,Object.defineProperty(exports,"__esModule",{value:!0})}));