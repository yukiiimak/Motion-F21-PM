/*!
 * Flip 3.7.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,(function(t){"use strict";function e(t){var e=t.ownerDocument||t;!(v in t.style)&&"msTransform"in t.style&&(b=(v="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););if(c=window,g=new B,e){f=(u=e).documentElement,d=e.body,(y=u.createElementNS("http://www.w3.org/2000/svg","g")).style.transform="none";var n=e.createElement("div"),i=e.createElement("div");d.appendChild(n),n.appendChild(i),n.style.position="static",n.style[v]="translate3d(0,0,1px)",x=i.offsetParent!==n,d.removeChild(n)}return e}function n(){return c.pageYOffset||u.scrollTop||f.scrollTop||d.scrollTop||0}function i(){return c.pageXOffset||u.scrollLeft||f.scrollLeft||d.scrollLeft||0}function r(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)}function o(t){return"fixed"===c.getComputedStyle(t).position||((t=t.parentNode)&&1===t.nodeType?o(t):void 0)}function s(t,n){if(t.parentNode&&(u||e(t))){var i=r(t),o=i?i.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",a=i?n?"rect":"g":"div",l=2!==n?0:100,p=3===n?100:0,c="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",f=u.createElementNS?u.createElementNS(o.replace(/^https/,"http"),a):u.createElement(a);return n&&(i?(m=m||s(t),f.setAttribute("width",.01),f.setAttribute("height",.01),f.setAttribute("transform","translate("+l+","+p+")"),m.appendChild(f)):(h||((h=s(t)).style.cssText=c),f.style.cssText=c+"width:0.1px;height:0.1px;top:"+p+"px;left:"+l+"px",h.appendChild(f))),f}throw"Need document and parent."}function a(t){var e,n=t.getCTM();return n||(e=t.style[v],t.style[v]="none",t.appendChild(y),n=y.getCTM(),t.removeChild(y),e?t.style[v]=e:t.style.removeProperty(v.replace(/([A-Z])/g,"-$1").toLowerCase())),n}function l(t,e){var n,i,o,l,p,u,f=r(t),d=t===f,y=f?C:S,w=t.parentNode;if(t===c)return t;if(y.length||y.push(s(t,1),s(t,2),s(t,3)),n=f?m:h,f)d?(l=-(o=a(t)).e/o.a,p=-o.f/o.d,i=g):(o=t.getBBox(),l=(i=(i=t.transform?t.transform.baseVal:{}).numberOfItems?1<i.numberOfItems?function(t){for(var e=new B,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e}(i):i.getItem(0).matrix:g).a*o.x+i.c*o.y,p=i.b*o.x+i.d*o.y),e&&"g"===t.tagName.toLowerCase()&&(l=p=0),(d?f:w).appendChild(n),n.setAttribute("transform","matrix("+i.a+","+i.b+","+i.c+","+i.d+","+(i.e+l)+","+(i.f+p)+")");else{if(l=p=0,x)for(i=t.offsetParent,o=t;(o=o&&o.parentNode)&&o!==i&&o.parentNode;)4<(c.getComputedStyle(o)[v]+"").length&&(l=o.offsetLeft,p=o.offsetTop,o=0);if("absolute"!==(u=c.getComputedStyle(t)).position&&"fixed"!==u.position)for(i=t.offsetParent;w&&w!==i;)l+=w.scrollLeft||0,p+=w.scrollTop||0,w=w.parentNode;(o=n.style).top=t.offsetTop-p+"px",o.left=t.offsetLeft-l+"px",o[v]=u[v],o[b]=u[b],o.position="fixed"===u.position?"fixed":"absolute",t.parentNode.appendChild(n)}return n}function p(t,e,n,i,r,o,s){return t.a=e,t.b=n,t.c=i,t.d=r,t.e=o,t.f=s,t}var u,c,f,d,h,m,g,y,x,w,v="transform",b=v+"Origin",C=[],S=[],B=((w=E.prototype).inverse=function(){var t=this.a,e=this.b,n=this.c,i=this.d,r=this.e,o=this.f,s=t*i-e*n||1e-10;return p(this,i/s,-e/s,-n/s,t/s,(n*o-i*r)/s,-(t*o-e*r)/s)},w.multiply=function(t){var e=this.a,n=this.b,i=this.c,r=this.d,o=this.e,s=this.f,a=t.a,l=t.c,u=t.b,c=t.d,f=t.e,d=t.f;return p(this,a*e+u*i,a*n+u*r,l*e+c*i,l*n+c*r,o+f*e+d*i,s+f*n+d*r)},w.clone=function(){return new E(this.a,this.b,this.c,this.d,this.e,this.f)},w.equals=function(t){var e=this.a,n=this.b,i=this.c,r=this.d,o=this.e,s=this.f;return e===t.a&&n===t.b&&i===t.c&&r===t.d&&o===t.e&&s===t.f},w.apply=function(t,e){void 0===e&&(e={});var n=t.x,i=t.y,r=this.a,o=this.b,s=this.c,a=this.d,l=this.e,p=this.f;return e.x=n*r+i*s+l||0,e.y=n*o+i*a+p||0,e},E);function E(t,e,n,i,r,o){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===i&&(i=1),void 0===r&&(r=0),void 0===o&&(o=0),p(this,t,e,n,i,r,o)}function T(t,s,a,p){if(!t||!t.parentNode||(u||e(t)).documentElement===t)return new B;var c=function(t){for(var e,n;t&&t!==d;)(n=t._gsap)&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e}(t),f=r(t)?C:S,h=l(t,a),m=f[0].getBoundingClientRect(),g=f[1].getBoundingClientRect(),y=f[2].getBoundingClientRect(),x=h.parentNode,w=!p&&o(t),v=new B((g.left-m.left)/100,(g.top-m.top)/100,(y.left-m.left)/100,(y.top-m.top)/100,m.left+(w?0:i()),m.top+(w?0:n()));if(x.removeChild(h),c)for(m=c.length;m--;)(g=c[m]).scaleX=g.scaleY=0,g.renderTransform(1,g);return s?v.inverse():v}function k(t){return D(t)[0]||console.warn("Element not found:",t)}function I(t){return Math.round(1e4*t)/1e4||0}function N(t,e,n){return t.forEach((function(t){return t.classList[n](e)}))}function P(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}function L(t,e){var n,i={};for(n in t)e[n]||(i[n]=t[n]);return i}function X(t){var e=rt[t]=function(t){return"string"==typeof t?t.split(" ").join("").split(","):t}(t);return W[t]=e.concat(et),e}function V(t,e,n){return t.forEach((function(t){return t.d=function t(e,n,i){void 0===i&&(i=0);for(var r=e.parentNode,o=1e3*Math.pow(10,i)*(n?-1:1),s=n?900*-o:0;e;)s+=o,e=e.previousSibling;return r?s+t(r,n,i+1):s}(n?t.element:t.t,e)})),t.sort((function(t,e){return t.d-e.d})),t}function $(t,e){for(var n,i,r=t.element.style,o=t.css=t.css||[],s=e.length;s--;)i=r[n=e[s]]||r.getPropertyValue(n),o.push(i?n:Q[n]||(Q[n]=P(n)),i);return r}function M(t){var e=t.css,n=t.element.style,i=0;for(t.cache.uncache=1;i<e.length;i+=2)e[i+1]?n[e[i]]=e[i+1]:n.removeProperty(e[i])}function A(t,e){var r,o,s=t.element,a=t.width,l=t.height,p=t.uncache,u=t.getProp,c=s.style;if("object"!=typeof e&&(e=t),"absolute"!==u("position")){if(o="none"===u("display"),t.isVisible&&!o||(o&&($(t,["display"]).display=e.display),t.matrix=e.matrix,t.width=a=t.width||e.width,t.height=l=t.height||e.height),c.position="absolute",c.width=a+"px",c.height=l+"px",c.top||(c.top="0px"),c.left||(c.left="0px"),p)r=new pt(s);else if((r=L(t,K)).position="absolute",t.simple){var f=s.getBoundingClientRect();r.matrix=new B(1,0,0,1,f.left+i(),f.top+n())}else r.matrix=T(s,!1,!1,!0);r=st(r,t,!0),t.x=parseFloat(r.x),t.y=parseFloat(r.y)}return s}function Y(t,e){var n,i=t.style||t;for(n in e)i[n]=e[n]}function F(t){return t.map((function(t){return t.element}))}function R(t,e,n){return t&&e.length&&n.add(t(F(e),n,new at(e,0,!0)),0)}function O(t,e){return t instanceof at?t:new at(t,e)}function z(t,e,n){var i=t.idLookup[n],r=t.alt[n];return!r.isVisible||(e.getElementState(r.element)||r).isVisible&&i.isVisible?i:r}function _(t,e,n,i){t instanceof at&&e instanceof at||console.warn("Not a valid state object.");var r,o,s,a,l,p,u,c,f,d,h,m=(n=n||{}).clearProps,g=n.onEnter,y=n.onLeave,x=n.absolute,w=n.custom,v=n.delay,b=n.paused,C=n.repeat,S=n.repeatDelay,B=n.yoyo,E=n.toggleClass,k=n.nested,I=n.zIndex,P=n.scale,Y=n.fade,F=n.stagger,O=n.spin,_=("props"in n?n:t).props,j=L(n,nt),D=q.timeline({delay:v,paused:b,repeat:C,repeatDelay:S,yoyo:B}),U=j,Z=[],G=[],H=[],J=[],K=!0===O?1:O||0,Q="function"==typeof O?O:function(){return K},W=t.interrupted||e.interrupted,$=D[1!==i?"to":"from"];for(o in i||(e=new at(e.targets,_).fit(e,P)),e.idLookup)l=(h=e.alt[o]?z(e,t,o):e.idLookup[o]).element,d=t.idLookup[o],t.alt[o]&&l===d.element&&(d=t.alt[o]),d?(p={t:l,b:d,a:h,sd:d.element===l?0:h.isVisible?1:-1},H.push(p),p.sd&&(p.sd<0&&(p.b=h,p.a=d),Y&&H.push(p.swap={t:d.element,b:p.b,a:p.a,sd:-1*p.sd,swap:p})),l._flip=d.element._flip=D):h.isVisible&&(H.push({t:l,b:L(h,{isVisible:1}),a:h,sd:0}),l._flip=D);for(_&&(rt[_]||X(_)).forEach((function(t){return j[t]=function(e){return H[e].a.props[t]}})),H.finalStates=f=[],x&&V(H,!0).forEach((function(t){return(t.a.isVisible||t.b.isVisible)&&A(t.sd<0?t.b:t.a,t.b)})),V(H),a=0;a<H.length;a++)l=(p=H[a]).t,!k||p.sd<0||(p.a.matrix=T(l,!1,!1,!0)),p.sd||p.b.isVisible&&p.a.isVisible?(p.sd<0?(u=new pt(l,_,t.simple),st(u,p.a,P,0,0,u),u.matrix=T(l,!1,!1,!0),u.css=p.b.css,p.a=u,Y&&(l.style.opacity=W?p.b.opacity:p.a.opacity),F&&J.push(l)):0<p.sd&&Y&&(l.style.opacity=W?p.a.opacity-p.b.opacity:"0"),st(p.a,p.b,P,_)):p.b.isVisible?p.a.isVisible||(p.b.css=p.a.css,G.push(p.b),H.splice(a--,1),x&&k&&st(p.a,p.b,P,_)):(p.a.isVisible&&Z.push(p.a),H.splice(a--,1)),f.push(p.a);if(P?(j.scaleX=function(t){return H[t].a.scaleX},j.scaleY=function(t){return H[t].a.scaleY}):(j.width=function(t){return H[t].a.width+"px"},j.height=function(t){return H[t].a.height+"px"},j.autoRound=n.autoRound||!1),j.x=function(t){return H[t].a.x+"px"},j.y=function(t){return H[t].a.y+"px"},j.rotation=function(t){return H[t].a.rotation+(O?360*Q(t,c[t],c):0)},j.skewX=function(t){return H[t].a.skewX},c=H.map((function(t){return t.t})),!I&&0!==I||(j.modifiers={zIndex:function(){return I}},j.zIndex=I,j.immediateRender=!1!==n.immediateRender),Y&&(j.opacity=function(t){return H[t].sd<0?0:0<H[t].sd?H[t].a.opacity:"+=0"}),J.length){F=q.utils.distribute(F);var et=c.slice(J.length);j.stagger=function(t,e){return F(~J.indexOf(e)?c.indexOf(H[t].swap.t):t,e,et)}}if(tt.forEach((function(t){return n[t]&&D.eventCallback(t,n[t],n[t+"Params"])})),w&&c.length)for(o in U=L(j,nt),"scale"in w&&(w.scaleX=w.scaleY=w.scale,delete w.scale),w)(r=L(w[o],it))[o]=j[o],!("duration"in r)&&"duration"in j&&(r.duration=j.duration),r.stagger=j.stagger,$.call(D,c,r,0),delete U[o];return(c.length||G.length||Z.length)&&(E&&D.add((function(){return N(c,E,D._zTime<0?"remove":"add")}),0)&&!b&&N(c,E,"add"),c.length&&$.call(D,c,U,0)),R(g,Z,D),R(y,G,D),s=D.duration(),D.call((function(){var t=D.time()>=s;t&&function(t,e){for(var n=t.length;n--;)t[n].a.cache.uncache=1;e||t.finalStates.forEach(M)}(H,!m),E&&N(c,E,t?"remove":"add")})),D}function j(t){for(var e,n=t.idLookup={},i=t.alt={},r=t.elementStates,o=r.length;o--;)n[(e=r[o]).id]?i[e.id]=e:n[e.id]=e}var D,q,U,Z,G=1,H=180/Math.PI,J=Math.PI/180,K={},Q={},W={},tt="onStart,onUpdate,onComplete,onReverseComplete,onInterrupt".split(","),et="transform,transformOrigin,width,height,position,top,left,opacity,zIndex".split(","),nt={zIndex:1,clear:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1},it={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},rt={},ot=function(t,e,n,i){return t instanceof pt?t:t instanceof at?function(t,e){return e&&t.idLookup[ot(e).id]||t.elementStates[0]}(t,i):new pt("string"==typeof t?k(t)||console.warn(t+" not found"):t,e,n)},st=function(t,e,r,o,s,a){var l,p,u,c,f,d,h,m=t.element,g=t.cache,y=t.parent,x=t.x,w=t.y,v=e.width,b=e.height,C=e.scaleX,S=e.scaleY,B=e.rotation,E=a&&m.style.cssText,k=a&&m.getBBox&&m.getAttribute("transform"),N=t,P=e.matrix,L=P.e,X=P.f,V=t.width!==v||t.height!==b||t.scaleX!==C||t.scaleY!==S||t.rotation!==B,M=!V&&t.simple&&e.simple&&!s;return M?(C=S=1,B=l=0):(d=(f=function(t){var e=t._gsap||q.core.getCache(t);return e.gmCache===q.ticker.frame?e.gMatrix:(e.gmCache=q.ticker.frame,e.gMatrix=T(t,!0,!1,!0))}(y)).clone().multiply(e.ctm?e.matrix.clone().multiply(e.ctm):e.matrix),B=I(Math.atan2(d.b,d.a)*H),l=I(Math.atan2(d.c,d.d)*H+B)%360,C=Math.sqrt(Math.pow(d.a,2)+Math.pow(d.b,2)),S=Math.sqrt(Math.pow(d.c,2)+Math.pow(d.d,2))*Math.cos(l*J),s&&(s=D(s)[0],c=q.getProperty(s),h=s.getBBox&&"function"==typeof s.getBBox&&s.getBBox(),N={scaleX:c("scaleX"),scaleY:c("scaleY"),width:h?h.width:Math.ceil(parseFloat(c("width","px"))),height:h?h.height:parseFloat(c("height","px"))}),g.rotation=B+"deg",g.skewX=l+"deg"),r?(C*=v/(N.width||1e-9),S*=b/(N.height||1e-9),g.scaleX=C,g.scaleY=S):(v*=C/N.scaleX,b*=S/N.scaleY,m.style.width=v+"px",m.style.height=b+"px"),t.isFixed&&(L-=i(),X-=n()),o&&Y(m,e.props),M?(x+=L-t.matrix.e,w+=X-t.matrix.f):V||y!==e.parent?(g.renderTransform(1,g),d=T(s||m),p=f.apply({x:d.e,y:d.f}),x+=I((u=f.apply({x:L,y:X})).x-p.x),w+=I(u.y-p.y)):(f.e=f.f=0,x+=I((u=f.apply({x:L-t.matrix.e,y:X-t.matrix.f})).x),w+=I(u.y)),!a||a instanceof pt?(g.x=x+"px",g.y=w+"px",g.renderTransform(1,g)):(m.style.cssText=E,m.getBBox&&m.setAttribute("transform",k||""),g.uncache=1),a&&(a.x=x,a.y=w,a.rotation=B,a.skewX=l,r?(a.scaleX=C,a.scaleY=S):(a.width=v,a.height=b)),a||g},at=((Z=lt.prototype).update=function(t){var e=this;return this.elementStates=this.targets.map((function(t){return new pt(t,e.props,e.simple)})),j(this),this.killFlips(t),this.recordInlineStyles(),this},Z.fit=function(t,e,n){for(var i,r,o=V(this.elementStates.slice(0),!1,!0),s=(t||this).idLookup,a=0;a<o.length;a++)i=o[a],n&&(i.matrix=T(i.element,!1,!1,!0)),(r=s[i.id])&&st(i,r,e,!0,0,i),i.matrix=T(i.element,!1,!1,!0);return this},Z.getProperty=function(t,e){var n=this.getElementState(t)||K;return e in n?n[e]:(n.props||K)[e]},Z.recordInlineStyles=function(){for(var t=W[this.props]||et,e=this.elementStates.length;e--;)$(this.elementStates[e],t)},Z.killFlips=function(t){var e;this.targets.forEach((function(n){(n=n._flip)&&n.progress()<1&&!n.paused()&&(e=1,n.vars.onInterrupt&&n.vars.onInterrupt.apply(n,n.vars.onInterruptParams||[]),t&&n.progress(1),n.kill())})),e&&t&&this.elementStates.forEach((function(t){var e=t.element.getBoundingClientRect();t.isVisible=e.width||e.height||e.top||e.left,t.uncache=1})),this.interrupted=!!e},Z.getElementState=function(t){return this.elementStates[this.targets.indexOf(k(t))]},Z.makeAbsolute=function(){return V(this.elementStates.slice(0),!0,!0).map(A)},lt);function lt(t,e,n){this.props=e&&e.props,this.simple=!(!e||!e.simple),n?(this.targets=F(t),this.elementStates=t,j(this)):(this.targets=D(t),this.update(!e||!1!==e.clear))}var pt=(ut.prototype.update=function(t,e){var r=this.element,s=q.getProperty(r),l=q.core.getCache(r),p=r.getBoundingClientRect(),u=r.getBBox&&"function"==typeof r.getBBox&&"svg"!==r.nodeName.toLowerCase()&&r.getBBox(),c=e?new B(1,0,0,1,p.left+i(),p.top+n()):T(r,!1,!1,!0);this.getProp=s,this.element=r,this.id=function(t){var e=t.getAttribute("data-flip-id");return e||t.setAttribute("data-flip-id",e="auto-"+G++),e}(r),this.matrix=c,this.cache=l,this.bounds=p,this.isVisible=!!(p.width||p.height||p.left||p.top),this.display=s("display"),this.position=s("position"),this.isFixed=o(r),this.parent=r.parentNode,this.x=s("x"),this.y=s("y"),this.scaleX=l.scaleX,this.scaleY=l.scaleY,this.rotation=s("rotation"),this.skewX=s("skewX"),this.opacity=s("opacity"),this.width=u?u.width:U(parseFloat(s("width","px"))+.04),this.height=u?u.height:parseFloat(s("height","px")),t&&function(t,e){for(var n=q.getProperty(t.element,null,"native"),i=t.props={},r=e.length;r--;)i[e[r]]=(n(e[r])+"").trim();i.zIndex&&(i.zIndex=parseFloat(i.zIndex)||0)}(this,rt[t]||X(t)),this.ctm=function(t){return t.getCTM&&"svg"===t.nodeName.toLowerCase()&&a(t).inverse()}(r),this.simple=e||1===I(c.a)&&!I(c.b)&&!I(c.c)&&1===I(c.d),this.uncache=0},ut);function ut(t,e,n){this.element=t,this.update(e,n)}var ct=(ft.getState=function(t,e){return O(t,"string"==typeof e?{props:e}:e)},ft.from=function(t,e){return"clearProps"in(e=e||{})||(e.clearProps=!0),_(t,O(e.targets||t.targets,{props:e.props||t.props,simple:e.simple,clear:!!e.clear}),e,-1)},ft.to=function(t,e){return _(t,O(e.targets||t.targets,{props:e.props||t.props,simple:e.simple,clear:!!e.clear}),e,1)},ft.fromTo=function(t,e,n){return _(t,e,n)},ft.fit=function(t,e,n){var i=n?L(n,it):{},r=n||i,o=r.absolute,s=r.scale,a=r.getVars,l=r.props,p=r.runBackwards,u=r.onComplete,c=r.simple,f=n&&n.fitChild&&k(n.fitChild),d=ot(e,l,c,t),h=ot(t,0,c,d),m=l?W[l]:et;return l&&Y(i,d.props),p&&($(h,m),"immediateRender"in i||(i.immediateRender=!0),i.onComplete=function(){M(h),u&&u.apply(this,arguments)}),o&&A(h,d),i=st(h,d,s||f,l,f,i.duration||a?i:0),a?i:i.duration?q.to(h.element,i):null},ft.makeAbsolute=function(t,e){return(t instanceof at?t:new at(t,e)).makeAbsolute()},ft.isFlipping=function(t){var e=ft.getByTarget(t);return!!e&&e.isActive()},ft.getByTarget=function(t){return(k(t)||K)._flip},ft.getElementState=function(t,e){return new pt(k(t),e)},ft.convertCoordinates=function(t,e,n){var i=T(e,!0,!0).multiply(T(t));return n?i.apply(n):i},ft.register=function(t){q=t,e(document.body||document.documentElement),D=q.utils.toArray,U=q.utils.snap(.1)},ft);function ft(){}ct.version="3.7.1","undefined"!=typeof window&&window.gsap&&window.gsap.registerPlugin(ct),t.Flip=ct,t.default=ct,"undefined"==typeof window||window!==t?Object.defineProperty(t,"__esModule",{value:!0}):delete t.default}));