!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,(function(exports){"use strict";var t,e,n,i,r,o,s,a,l,p="transform",u=p+"Origin",c=function(r){var o=r.ownerDocument||r;!(p in r.style)&&"msTransform"in r.style&&(u=(p="msTransform")+"Origin");for(;o.parentNode&&(o=o.parentNode););if(e=window,s=new C,o){t=o,n=o.documentElement,i=o.body,(a=t.createElementNS("http://www.w3.org/2000/svg","g")).style.transform="none";var c=o.createElement("div"),f=o.createElement("div");i.appendChild(c),c.appendChild(f),c.style.position="static",c.style[p]="translate3d(0,0,1px)",l=f.offsetParent!==c,i.removeChild(c)}return o},f=[],d=[],h=function(){return e.pageYOffset||t.scrollTop||n.scrollTop||i.scrollTop||0},m=function(){return e.pageXOffset||t.scrollLeft||n.scrollLeft||i.scrollLeft||0},g=function(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)},y=function t(n){return"fixed"===e.getComputedStyle(n).position||((n=n.parentNode)&&1===n.nodeType?t(n):void 0)},x=function e(n,i){if(n.parentNode&&(t||c(n))){var s=g(n),a=s?s.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",l=s?i?"rect":"g":"div",p=2!==i?0:100,u=3===i?100:0,f="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",d=t.createElementNS?t.createElementNS(a.replace(/^https/,"http"),l):t.createElement(l);return i&&(s?(o||(o=e(n)),d.setAttribute("width",.01),d.setAttribute("height",.01),d.setAttribute("transform","translate("+p+","+u+")"),o.appendChild(d)):(r||((r=e(n)).style.cssText=f),d.style.cssText=f+"width:0.1px;height:0.1px;top:"+u+"px;left:"+p+"px",r.appendChild(d))),d}throw"Need document and parent."},w=function(t){var e,n=t.getCTM();return n||(e=t.style[p],t.style[p]="none",t.appendChild(a),n=a.getCTM(),t.removeChild(a),e?t.style[p]=e:t.style.removeProperty(p.replace(/([A-Z])/g,"-$1").toLowerCase())),n},v=function(t,n){var i,a,c,h,m,y,v=g(t),b=t===v,S=v?f:d,B=t.parentNode;if(t===e)return t;if(S.length||S.push(x(t,1),x(t,2),x(t,3)),i=v?o:r,v)b?(h=-(c=w(t)).e/c.a,m=-c.f/c.d,a=s):(c=t.getBBox(),h=(a=(a=t.transform?t.transform.baseVal:{}).numberOfItems?a.numberOfItems>1?function(t){for(var e=new C,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e}(a):a.getItem(0).matrix:s).a*c.x+a.c*c.y,m=a.b*c.x+a.d*c.y),n&&"g"===t.tagName.toLowerCase()&&(h=m=0),(b?v:B).appendChild(i),i.setAttribute("transform","matrix("+a.a+","+a.b+","+a.c+","+a.d+","+(a.e+h)+","+(a.f+m)+")");else{if(h=m=0,l)for(a=t.offsetParent,c=t;c&&(c=c.parentNode)&&c!==a&&c.parentNode;)(e.getComputedStyle(c)[p]+"").length>4&&(h=c.offsetLeft,m=c.offsetTop,c=0);if("absolute"!==(y=e.getComputedStyle(t)).position&&"fixed"!==y.position)for(a=t.offsetParent;B&&B!==a;)h+=B.scrollLeft||0,m+=B.scrollTop||0,B=B.parentNode;(c=i.style).top=t.offsetTop-m+"px",c.left=t.offsetLeft-h+"px",c[p]=y[p],c[u]=y[u],c.position="fixed"===y.position?"fixed":"absolute",t.parentNode.appendChild(i)}return i},b=function(t,e,n,i,r,o,s){return t.a=e,t.b=n,t.c=i,t.d=r,t.e=o,t.f=s,t},C=function(){function t(t,e,n,i,r,o){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===i&&(i=1),void 0===r&&(r=0),void 0===o&&(o=0),b(this,t,e,n,i,r,o)}var e=t.prototype;return e.inverse=function(){var t=this.a,e=this.b,n=this.c,i=this.d,r=this.e,o=this.f,s=t*i-e*n||1e-10;return b(this,i/s,-e/s,-n/s,t/s,(n*o-i*r)/s,-(t*o-e*r)/s)},e.multiply=function(t){var e=this.a,n=this.b,i=this.c,r=this.d,o=this.e,s=this.f,a=t.a,l=t.c,p=t.b,u=t.d,c=t.e,f=t.f;return b(this,a*e+p*i,a*n+p*r,l*e+u*i,l*n+u*r,o+c*e+f*i,s+c*n+f*r)},e.clone=function(){return new t(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(t){var e=this.a,n=this.b,i=this.c,r=this.d,o=this.e,s=this.f;return e===t.a&&n===t.b&&i===t.c&&r===t.d&&o===t.e&&s===t.f},e.apply=function(t,e){void 0===e&&(e={});var n=t.x,i=t.y,r=this.a,o=this.b,s=this.c,a=this.d,l=this.e,p=this.f;return e.x=n*r+i*s+l||0,e.y=n*o+i*a+p||0,e},t}();function S(e,n,r,o){if(!e||!e.parentNode||(t||c(e)).documentElement===e)return new C;var s=function(t){for(var e,n;t&&t!==i;)(n=t._gsap)&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e}(e),a=g(e)?f:d,l=v(e,r),p=a[0].getBoundingClientRect(),u=a[1].getBoundingClientRect(),x=a[2].getBoundingClientRect(),w=l.parentNode,b=!o&&y(e),S=new C((u.left-p.left)/100,(u.top-p.top)/100,(x.left-p.left)/100,(x.top-p.top)/100,p.left+(b?0:m()),p.top+(b?0:h()));if(w.removeChild(l),s)for(p=s.length;p--;)(u=s[p]).scaleX=u.scaleY=0,u.renderTransform(1,u);return n?S.inverse():S}
/*!
	 * Flip 3.7.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/var B,E,T,k=1,I=180/Math.PI,N=Math.PI/180,P={},L={},X={},V="onStart,onUpdate,onComplete,onReverseComplete,onInterrupt".split(","),M="transform,transformOrigin,width,height,position,top,left,opacity,zIndex".split(","),A=function(t){return B(t)[0]||console.warn("Element not found:",t)},Y=function(t){return Math.round(1e4*t)/1e4||0},F=function(t,e,n){return t.forEach((function(t){return t.classList[n](e)}))},R={zIndex:1,clear:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1},O={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},z=function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()},_=function(t,e){var n,i={};for(n in t)e[n]||(i[n]=t[n]);return i},j={},D=function(t){var e,n=j[t]="string"==typeof(e=t)?e.split(" ").join("").split(","):e;return X[t]=n.concat(M),n},q=function t(e,n,i){void 0===i&&(i=0);for(var r=e.parentNode,o=1e3*Math.pow(10,i)*(n?-1:1),s=n?900*-o:0;e;)s+=o,e=e.previousSibling;return r?s+t(r,n,i+1):s},U=function(t,e,n){return t.forEach((function(t){return t.d=q(n?t.element:t.t,e)})),t.sort((function(t,e){return t.d-e.d})),t},Z=function(t,e){for(var n,i,r=t.element.style,o=t.css=t.css||[],s=e.length;s--;)i=r[n=e[s]]||r.getPropertyValue(n),o.push(i?n:L[n]||(L[n]=z(n)),i);return r},G=function(t){var e=t.css,n=t.element.style,i=0;for(t.cache.uncache=1;i<e.length;i+=2)e[i+1]?n[e[i]]=e[i+1]:n.removeProperty(e[i])},H=function(t,e){var n,i,r=t.element,o=t.width,s=t.height,a=t.uncache,l=t.getProp,p=r.style;if("object"!=typeof e&&(e=t),"absolute"!==l("position")){if(i="none"===l("display"),t.isVisible&&!i||(i&&(Z(t,["display"]).display=e.display),t.matrix=e.matrix,t.width=o=t.width||e.width,t.height=s=t.height||e.height),p.position="absolute",p.width=o+"px",p.height=s+"px",p.top||(p.top="0px"),p.left||(p.left="0px"),a)n=new at(r);else if((n=_(t,P)).position="absolute",t.simple){var u=r.getBoundingClientRect();n.matrix=new C(1,0,0,1,u.left+m(),u.top+h())}else n.matrix=S(r,!1,!1,!0);n=et(n,t,!0),t.x=parseFloat(n.x),t.y=parseFloat(n.y)}return r},J=function(t,e){return e&&t.idLookup[K(e).id]||t.elementStates[0]},K=function(t,e,n,i){return t instanceof at?t:t instanceof st?J(t,i):new at("string"==typeof t?A(t)||console.warn(t+" not found"):t,e,n)},Q=function(t,e){var n,i=t.style||t;for(n in e)i[n]=e[n]},W=function(t){return t.map((function(t){return t.element}))},tt=function(t,e,n){return t&&e.length&&n.add(t(W(e),n,new st(e,0,!0)),0)},et=function(t,e,n,i,r,o){var s,a,l,p,u,c,f,d=t.element,g=t.cache,y=t.parent,x=t.x,w=t.y,v=e.width,b=e.height,C=e.scaleX,T=e.scaleY,k=e.rotation,P=o&&d.style.cssText,L=o&&d.getBBox&&d.getAttribute("transform"),X=t,V=e.matrix,M=V.e,A=V.f,F=t.width!==v||t.height!==b||t.scaleX!==C||t.scaleY!==T||t.rotation!==k,R=!F&&t.simple&&e.simple&&!r;return R?(C=T=1,k=s=0):(u=function(t){var e=t._gsap||E.core.getCache(t);return e.gmCache===E.ticker.frame?e.gMatrix:(e.gmCache=E.ticker.frame,e.gMatrix=S(t,!0,!1,!0))}(y),c=u.clone().multiply(e.ctm?e.matrix.clone().multiply(e.ctm):e.matrix),k=Y(Math.atan2(c.b,c.a)*I),s=Y(Math.atan2(c.c,c.d)*I+k)%360,C=Math.sqrt(Math.pow(c.a,2)+Math.pow(c.b,2)),T=Math.sqrt(Math.pow(c.c,2)+Math.pow(c.d,2))*Math.cos(s*N),r&&(r=B(r)[0],p=E.getProperty(r),f=r.getBBox&&"function"==typeof r.getBBox&&r.getBBox(),X={scaleX:p("scaleX"),scaleY:p("scaleY"),width:f?f.width:Math.ceil(parseFloat(p("width","px"))),height:f?f.height:parseFloat(p("height","px"))}),g.rotation=k+"deg",g.skewX=s+"deg"),n?(C*=v/(X.width||1e-9),T*=b/(X.height||1e-9),g.scaleX=C,g.scaleY=T):(v*=C/X.scaleX,b*=T/X.scaleY,d.style.width=v+"px",d.style.height=b+"px"),t.isFixed&&(M-=m(),A-=h()),i&&Q(d,e.props),R?(x+=M-t.matrix.e,w+=A-t.matrix.f):F||y!==e.parent?(g.renderTransform(1,g),c=S(r||d),a=u.apply({x:c.e,y:c.f}),l=u.apply({x:M,y:A}),x+=Y(l.x-a.x),w+=Y(l.y-a.y)):(u.e=u.f=0,l=u.apply({x:M-t.matrix.e,y:A-t.matrix.f}),x+=Y(l.x),w+=Y(l.y)),!o||o instanceof at?(g.x=x+"px",g.y=w+"px",g.renderTransform(1,g)):(d.style.cssText=P,d.getBBox&&d.setAttribute("transform",L||""),g.uncache=1),o&&(o.x=x,o.y=w,o.rotation=k,o.skewX=s,n?(o.scaleX=C,o.scaleY=T):(o.width=v,o.height=b)),o||g},nt=function(t,e){return t instanceof st?t:new st(t,e)},it=function(t,e,n){var i=t.idLookup[n],r=t.alt[n];return!r.isVisible||(e.getElementState(r.element)||r).isVisible&&i.isVisible?i:r},rt=function(t,e,n,i){t instanceof st&&e instanceof st||console.warn("Not a valid state object.");var r,o,s,a,l,p,u,c,f,d,h,m=n=n||{},g=m.clearProps,y=m.onEnter,x=m.onLeave,w=m.absolute,v=m.custom,b=m.delay,C=m.paused,B=m.repeat,T=m.repeatDelay,k=m.yoyo,I=m.toggleClass,N=m.nested,P=m.zIndex,L=m.scale,X=m.fade,M=m.stagger,A=m.spin,Y=("props"in n?n:t).props,z=_(n,R),q=E.timeline({delay:b,paused:C,repeat:B,repeatDelay:T,yoyo:k}),Z=z,J=[],K=[],Q=[],W=[],nt=!0===A?1:A||0,rt="function"==typeof A?A:function(){return nt},ot=t.interrupted||e.interrupted,lt=q[1!==i?"to":"from"];for(o in i||(e=new st(e.targets,Y).fit(e,L)),e.idLookup)l=(h=e.alt[o]?it(e,t,o):e.idLookup[o]).element,d=t.idLookup[o],t.alt[o]&&l===d.element&&(d=t.alt[o]),d?(p={t:l,b:d,a:h,sd:d.element===l?0:h.isVisible?1:-1},Q.push(p),p.sd&&(p.sd<0&&(p.b=h,p.a=d),X&&Q.push(p.swap={t:d.element,b:p.b,a:p.a,sd:-1*p.sd,swap:p})),l._flip=d.element._flip=q):h.isVisible&&(Q.push({t:l,b:_(h,{isVisible:1}),a:h,sd:0}),l._flip=q);for(Y&&(j[Y]||D(Y)).forEach((function(t){return z[t]=function(e){return Q[e].a.props[t]}})),Q.finalStates=f=[],w&&U(Q,!0).forEach((function(t){return(t.a.isVisible||t.b.isVisible)&&H(t.sd<0?t.b:t.a,t.b)})),U(Q),a=0;a<Q.length;a++)l=(p=Q[a]).t,N&&!(p.sd<0)&&(p.a.matrix=S(l,!1,!1,!0)),p.sd||p.b.isVisible&&p.a.isVisible?(p.sd<0?(u=new at(l,Y,t.simple),et(u,p.a,L,0,0,u),u.matrix=S(l,!1,!1,!0),u.css=p.b.css,p.a=u,X&&(l.style.opacity=ot?p.b.opacity:p.a.opacity),M&&W.push(l)):p.sd>0&&X&&(l.style.opacity=ot?p.a.opacity-p.b.opacity:"0"),et(p.a,p.b,L,Y)):p.b.isVisible?p.a.isVisible||(p.b.css=p.a.css,K.push(p.b),Q.splice(a--,1),w&&N&&et(p.a,p.b,L,Y)):(p.a.isVisible&&J.push(p.a),Q.splice(a--,1)),f.push(p.a);if(L?(z.scaleX=function(t){return Q[t].a.scaleX},z.scaleY=function(t){return Q[t].a.scaleY}):(z.width=function(t){return Q[t].a.width+"px"},z.height=function(t){return Q[t].a.height+"px"},z.autoRound=n.autoRound||!1),z.x=function(t){return Q[t].a.x+"px"},z.y=function(t){return Q[t].a.y+"px"},z.rotation=function(t){return Q[t].a.rotation+(A?360*rt(t,c[t],c):0)},z.skewX=function(t){return Q[t].a.skewX},c=Q.map((function(t){return t.t})),(P||0===P)&&(z.modifiers={zIndex:function(){return P}},z.zIndex=P,z.immediateRender=!1!==n.immediateRender),X&&(z.opacity=function(t){return Q[t].sd<0?0:Q[t].sd>0?Q[t].a.opacity:"+=0"}),W.length){M=E.utils.distribute(M);var pt=c.slice(W.length);z.stagger=function(t,e){return M(~W.indexOf(e)?c.indexOf(Q[t].swap.t):t,e,pt)}}if(V.forEach((function(t){return n[t]&&q.eventCallback(t,n[t],n[t+"Params"])})),v&&c.length)for(o in Z=_(z,R),"scale"in v&&(v.scaleX=v.scaleY=v.scale,delete v.scale),v)(r=_(v[o],O))[o]=z[o],!("duration"in r)&&"duration"in z&&(r.duration=z.duration),r.stagger=z.stagger,lt.call(q,c,r,0),delete Z[o];return(c.length||K.length||J.length)&&(I&&q.add((function(){return F(c,I,q._zTime<0?"remove":"add")}),0)&&!C&&F(c,I,"add"),c.length&&lt.call(q,c,Z,0)),tt(y,J,q),tt(x,K,q),s=q.duration(),q.call((function(){var t=q.time()>=s;t&&function(t,e){for(var n=t.length;n--;)t[n].a.cache.uncache=1;e||t.finalStates.forEach(G)}(Q,!g),I&&F(c,I,t?"remove":"add")})),q},ot=function(t){for(var e,n=t.idLookup={},i=t.alt={},r=t.elementStates,o=r.length;o--;)n[(e=r[o]).id]?i[e.id]=e:n[e.id]=e},st=function(){function t(t,e,n){this.props=e&&e.props,this.simple=!(!e||!e.simple),n?(this.targets=W(t),this.elementStates=t,ot(this)):(this.targets=B(t),this.update(!e||!1!==e.clear))}var e=t.prototype;return e.update=function(t){var e=this;return this.elementStates=this.targets.map((function(t){return new at(t,e.props,e.simple)})),ot(this),this.killFlips(t),this.recordInlineStyles(),this},e.fit=function(t,e,n){for(var i,r,o=U(this.elementStates.slice(0),!1,!0),s=(t||this).idLookup,a=0;a<o.length;a++)i=o[a],n&&(i.matrix=S(i.element,!1,!1,!0)),(r=s[i.id])&&et(i,r,e,!0,0,i),i.matrix=S(i.element,!1,!1,!0);return this},e.getProperty=function(t,e){var n=this.getElementState(t)||P;return e in n?n[e]:(n.props||P)[e]},e.recordInlineStyles=function(){for(var t=X[this.props]||M,e=this.elementStates.length;e--;)Z(this.elementStates[e],t)},e.killFlips=function(t){var e;this.targets.forEach((function(n){(n=n._flip)&&n.progress()<1&&!n.paused()&&(e=1,n.vars.onInterrupt&&n.vars.onInterrupt.apply(n,n.vars.onInterruptParams||[]),t&&n.progress(1),n.kill())})),e&&t&&this.elementStates.forEach((function(t){var e=t.element.getBoundingClientRect();t.isVisible=e.width||e.height||e.top||e.left,t.uncache=1})),this.interrupted=!!e},e.getElementState=function(t){return this.elementStates[this.targets.indexOf(A(t))]},e.makeAbsolute=function(){return U(this.elementStates.slice(0),!0,!0).map(H)},t}(),at=function(){function t(t,e,n){this.element=t,this.update(e,n)}return t.prototype.update=function(t,e){var n,i,r=this.element,o=E.getProperty(r),s=E.core.getCache(r),a=r.getBoundingClientRect(),l=r.getBBox&&"function"==typeof r.getBBox&&"svg"!==r.nodeName.toLowerCase()&&r.getBBox(),p=e?new C(1,0,0,1,a.left+m(),a.top+h()):S(r,!1,!1,!0);this.getProp=o,this.element=r,this.id=((i=(n=r).getAttribute("data-flip-id"))||n.setAttribute("data-flip-id",i="auto-"+k++),i),this.matrix=p,this.cache=s,this.bounds=a,this.isVisible=!!(a.width||a.height||a.left||a.top),this.display=o("display"),this.position=o("position"),this.isFixed=y(r),this.parent=r.parentNode,this.x=o("x"),this.y=o("y"),this.scaleX=s.scaleX,this.scaleY=s.scaleY,this.rotation=o("rotation"),this.skewX=o("skewX"),this.opacity=o("opacity"),this.width=l?l.width:T(parseFloat(o("width","px"))+.04),this.height=l?l.height:parseFloat(o("height","px")),t&&function(t,e){for(var n=E.getProperty(t.element,null,"native"),i=t.props={},r=e.length;r--;)i[e[r]]=(n(e[r])+"").trim();i.zIndex&&(i.zIndex=parseFloat(i.zIndex)||0)}(this,j[t]||D(t)),this.ctm=function(t){return t.getCTM&&"svg"===t.nodeName.toLowerCase()&&w(t).inverse()}(r),this.simple=e||1===Y(p.a)&&!Y(p.b)&&!Y(p.c)&&1===Y(p.d),this.uncache=0},t}(),lt=function(){function t(){}return t.getState=function(t,e){return nt(t,"string"==typeof e?{props:e}:e)},t.from=function(t,e){return"clearProps"in(e=e||{})||(e.clearProps=!0),rt(t,nt(e.targets||t.targets,{props:e.props||t.props,simple:e.simple,clear:!!e.clear}),e,-1)},t.to=function(t,e){return rt(t,nt(e.targets||t.targets,{props:e.props||t.props,simple:e.simple,clear:!!e.clear}),e,1)},t.fromTo=function(t,e,n){return rt(t,e,n)},t.fit=function(t,e,n){var i=n?_(n,O):{},r=n||i,o=r.absolute,s=r.scale,a=r.getVars,l=r.props,p=r.runBackwards,u=r.onComplete,c=r.simple,f=n&&n.fitChild&&A(n.fitChild),d=K(e,l,c,t),h=K(t,0,c,d),m=l?X[l]:M;return l&&Q(i,d.props),p&&(Z(h,m),"immediateRender"in i||(i.immediateRender=!0),i.onComplete=function(){G(h),u&&u.apply(this,arguments)}),o&&H(h,d),i=et(h,d,s||f,l,f,i.duration||a?i:0),a?i:i.duration?E.to(h.element,i):null},t.makeAbsolute=function(t,e){return(t instanceof st?t:new st(t,e)).makeAbsolute()},t.isFlipping=function(e){var n=t.getByTarget(e);return!!n&&n.isActive()},t.getByTarget=function(t){return(A(t)||P)._flip},t.getElementState=function(t,e){return new at(A(t),e)},t.convertCoordinates=function(t,e,n){var i=S(e,!0,!0).multiply(S(t));return n?i.apply(n):i},t.register=function(t){E=t,c(document.body||document.documentElement),B=E.utils.toArray,T=E.utils.snap(.1)},t}();lt.version="3.7.1","undefined"!=typeof window&&window.gsap&&window.gsap.registerPlugin(lt),exports.Flip=lt,exports.default=lt,Object.defineProperty(exports,"__esModule",{value:!0})}));