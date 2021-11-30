/*!
 * MotionPathPlugin 3.7.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,(function(t){"use strict";function e(t){return"string"==typeof t}function n(t){return Math.round(1e10*t)/1e10||0}function r(t,e,n,r){var o=t[e],i=1===r?6:_(o,n,r);if(i&&i+n+2<o.length)return t.splice(e,0,o.slice(0,n+i+2)),o.splice(0,n+i),1}function o(t,e){var n=t.length,r=t[n-1]||[],o=r.length;n&&e[0]===r[o-2]&&e[1]===r[o-1]&&(e=r.concat(e.slice(2)),n--),t[n]=e}var i=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,a=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,s=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,l=/(^[#\.][a-z]|[a-y][a-z])/i,h=Math.PI/180,u=180/Math.PI,f=Math.sin,p=Math.cos,g=Math.abs,$=Math.sqrt,c=Math.atan2,d=1e8,m=function(t){return"number"==typeof t},v={},y={},x=1e5,w=function(t){return Math.round((t+d)%1*x)/x||(t<0?0:1)},P=function(t){return Math.round(t*x)/x||0},b=function(t,e,n){var r=t.length,o=~~(n*r);if(t[o]>e)for(;--o&&t[o]>e;);else for(;t[++o]<e&&o<r;);return o},L=function(t,e){return e.totalLength=t.totalLength,t.samples?(e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):t.totalPoints&&(e.totalPoints=t.totalPoints),e};function M(t){var n,r=(t=e(t)&&l.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return r&&(t=t.getAttribute("d"))?(r._gsPath||(r._gsPath={}),(n=r._gsPath[t])&&!n._dirty?n:r._gsPath[t]=k(t)):t?e(t)?k(t):m(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")}function N(t){var e,n=0;for(t.reverse();n<t.length;n+=2)e=t[n],t[n]=t[n+1],t[n+1]=e;t.reversed=!t.reversed}var C={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function T(t,e,n){var r,o=t[e],i=t[e+2],a=t[e+4];return o+=(i-o)*n,o+=((i+=(a-i)*n)-o)*n,r=i+(a+(t[e+6]-a)*n-i)*n-o,o=t[e+1],o+=((i=t[e+3])-o)*n,o+=((i+=((a=t[e+5])-i)*n)-o)*n,P(c(i+(a+(t[e+7]-a)*n-i)*n-o,r)*u)}function A(t,e,i){i=function(t){return void 0===t}(i)?1:n(i)||0,e=n(e)||0;var a=Math.max(0,~~(g(i-e)-1e-8)),s=function(t){for(var e=[],n=0;n<t.length;n++)e[n]=L(t[n],t[n].slice(0));return L(t,e)}(t);if(i<e&&(e=1-e,i=1-i,function(t,e){var n=t.length;for(e||t.reverse();n--;)t[n].reversed||N(t[n])}(s),s.totalLength=0),e<0||i<0){var l=Math.abs(~~Math.min(e,i))+1;e+=l,i+=l}s.totalLength||S(s);var h,u,f,p,c,d,m,x,w=1<i,P=O(s,e,v,!0),b=O(s,i,y),M=b.segment,C=P.segment,A=b.segIndex,B=P.segIndex,R=b.i,E=P.i,I=B===A,k=R===E&&I;if(w||a){for(h=A<B||I&&R<E||k&&b.t<P.t,r(s,B,E,P.t)&&(B++,h||(A++,k?(b.t=(b.t-P.t)/(1-P.t),R=0):I&&(R-=E))),1-(i-e)<1e-5?A=B-1:!b.t&&A?A--:r(s,A,R,b.t)&&h&&B++,1===P.t&&(B=(B+1)%s.length),c=[],m=1+(d=s.length)*a,m+=(d-(x=B)+A)%d,p=0;p<m;p++)o(c,s[x++%d]);s=c}else if(f=1===b.t?6:_(M,R,b.t),e!==i)for(u=_(C,E,k?P.t/b.t:P.t),I&&(f+=u),M.splice(R+f+2),(u||E)&&C.splice(0,E+u),p=s.length;p--;)(p<B||A<p)&&s.splice(p,1);else M.angle=T(M,R+f,0),P=M[R+=f],b=M[R+1],M.length=M.totalLength=0,M.totalPoints=s.totalPoints=8,M.push(P,b,P,b,P,b,P,b);return s.totalLength=0,s}function B(t,e,n){e=e||0,t.samples||(t.samples=[],t.lookup=[]);var r,o,i,a,s,l,h,u,f,p,c,m,v,y,x,w,P,b=~~t.resolution||12,L=1/b,M=n?e+6*n+1:t.length,N=t[e],C=t[e+1],T=e?e/6*b:0,A=t.samples,B=t.lookup,S=(e?t.minLength:d)||d,_=A[T+n*b-1],O=e?A[T-1]:0;for(A.length=B.length=0,o=e+2;o<M;o+=6){if(i=t[o+4]-N,a=t[o+2]-N,s=t[o]-N,u=t[o+5]-C,f=t[o+3]-C,p=t[o+1]-C,l=h=c=m=0,g(i)<.01&&g(u)<.01&&g(s)+g(p)<.01)8<t.length&&(t.splice(o,6),o-=6,M-=6);else for(r=1;r<=b;r++)l=h-(h=((y=L*r)*y*i+3*(v=1-y)*(y*a+v*s))*y),c=m-(m=(y*y*u+3*v*(y*f+v*p))*y),(w=$(c*c+l*l))<S&&(S=w),O+=w,A[T++]=O;N+=i,C+=u}if(_)for(_-=O;T<A.length;T++)A[T]+=_;if(A.length&&S){if(t.totalLength=P=A[A.length-1]||0,P/(t.minLength=S)<9999)for(w=x=0,r=0;r<P;r+=S)B[w++]=A[x]<r?++x:x}else t.totalLength=A[0]=0;return e?O-A[e/2-1]:O}function S(t,e){var n,r,o;for(o=n=r=0;o<t.length;o++)t[o].resolution=~~e||12,r+=t[o].length,n+=B(t[o]);return t.totalPoints=r,t.totalLength=n,t}function _(t,e,n){if(n<=0||1<=n)return 0;var r=t[e],o=t[e+1],i=t[e+2],a=t[e+3],s=t[e+4],l=t[e+5],h=r+(i-r)*n,u=i+(s-i)*n,f=o+(a-o)*n,p=a+(l-a)*n,g=h+(u-h)*n,c=f+(p-f)*n,d=s+(t[e+6]-s)*n,m=l+(t[e+7]-l)*n;return u+=(d-u)*n,p+=(m-p)*n,t.splice(e+2,4,P(h),P(f),P(g),P(c),P(g+(u-g)*n),P(c+(p-c)*n),P(u),P(p),P(d),P(m)),t.samples&&t.samples.splice(e/6*t.resolution|0,0,0,0,0,0,0,0),6}function O(t,e,n,r){n=n||{},t.totalLength||S(t),(e<0||1<e)&&(e=w(e));var o,i,a,s,l,h,u,f=0,p=t[0];if(e)if(1===e)u=1,h=(p=t[f=t.length-1]).length-8;else{if(1<t.length){for(a=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<a;)f=h;e=(a-(s=l-(p=t[f]).totalLength))/(l-s)||0}o=p.samples,i=p.resolution,a=p.totalLength*e,s=(h=p.lookup.length?p.lookup[~~(a/p.minLength)]||0:b(o,a,e))?o[h-1]:0,(l=o[h])<a&&(s=l,l=o[++h]),u=1/i*((a-s)/(l-s)+h%i),h=6*~~(h/i),r&&1===u&&(h+6<p.length?(h+=6,u=0):f+1<t.length&&(h=u=0,p=t[++f]))}else u=h=f=0,p=t[0];return n.t=u,n.i=h,n.path=t,n.segment=p,n.segIndex=f,n}function R(t,e,n,r){var o,i,a,s,l,h,u,f,p,g=t[0],c=r||{};if((e<0||1<e)&&(e=w(e)),1<t.length){for(a=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<a;)g=t[h];e=(a-(s=l-g.totalLength))/(l-s)||0}return o=g.samples,i=g.resolution,a=g.totalLength*e,s=(h=g.lookup.length?g.lookup[e<1?~~(a/g.minLength):g.lookup.length-1]||0:b(o,a,e))?o[h-1]:0,(l=o[h])<a&&(s=l,l=o[++h]),p=1-(u=1/i*((a-s)/(l-s)+h%i)||0),f=g[h=6*~~(h/i)],c.x=P((u*u*(g[h+6]-f)+3*p*(u*(g[h+4]-f)+p*(g[h+2]-f)))*u+f),c.y=P((u*u*(g[h+7]-(f=g[h+1]))+3*p*(u*(g[h+5]-f)+p*(g[h+3]-f)))*u+f),n&&(c.angle=g.totalLength?T(g,h,1<=u?1-1e-9:u||1e-9):g.angle||0),c}function E(t,e,n,r,o,i,a){for(var s,l,h,u,f,p=t.length;-1<--p;)for(l=(s=t[p]).length,h=0;h<l;h+=2)u=s[h],f=s[h+1],s[h]=u*e+f*r+i,s[h+1]=u*n+f*o+a;return t._dirty=1,t}function I(t,e,n,r,o,i,a,s,l){if(t!==s||e!==l){n=g(n),r=g(r);var u=o%360*h,c=p(u),d=f(u),m=Math.PI,v=2*m,y=(t-s)/2,x=(e-l)/2,w=c*y+d*x,P=-d*y+c*x,b=w*w,L=P*P,M=b/(n*n)+L/(r*r);1<M&&(n=$(M)*n,r=$(M)*r);var N=n*n,C=r*r,T=(N*C-N*L-C*b)/(N*L+C*b);T<0&&(T=0);var A=(i===a?-1:1)*$(T),B=n*P/r*A,S=-r*w/n*A,_=c*B-d*S+(t+s)/2,O=d*B+c*S+(e+l)/2,R=(w-B)/n,E=(P-S)/r,I=(-w-B)/n,k=(-P-S)/r,V=R*R+E*E,z=(E<0?-1:1)*Math.acos(R/$(V)),X=(R*k-E*I<0?-1:1)*Math.acos((R*I+E*k)/$(V*(I*I+k*k)));isNaN(X)&&(X=m),!a&&0<X?X-=v:a&&X<0&&(X+=v),z%=v,X%=v;var Y,j=Math.ceil(g(X)/(v/4)),G=[],q=X/j,F=4/3*f(q/2)/(1+p(q/2)),Z=c*n,H=d*n,U=d*-r,D=c*r;for(Y=0;Y<j;Y++)w=p(o=z+Y*q),P=f(o),R=p(o+=q),E=f(o),G.push(w-F*P,P+F*w,R+F*E,E-F*R,R,E);for(Y=0;Y<G.length;Y+=2)w=G[Y],P=G[Y+1],G[Y]=w*Z+P*U+_,G[Y+1]=w*H+P*D+O;return G[Y-2]=s,G[Y-1]=l,G}}function k(t){function e(t,e,n,r){c=(n-t)/3,d=(r-e)/3,u.push(t+c,e+d,n-c,r-d,n,r)}var n,r,o,a,l,h,u,f,p,c,d,m,v,y,x,w=(t+"").replace(s,(function(t){var e=+t;return e<1e-4&&-1e-4<e?0:e})).match(i)||[],P=[],b=0,L=0,M=w.length,N=0,C="ERROR: malformed path: "+t;if(!t||!isNaN(w[0])||isNaN(w[1]))return console.log(C),P;for(n=0;n<M;n++)if(v=l,isNaN(w[n])?h=(l=w[n].toUpperCase())!==w[n]:n--,o=+w[n+1],a=+w[n+2],h&&(o+=b,a+=L),n||(f=o,p=a),"M"===l)u&&(u.length<8?--P.length:N+=u.length),b=f=o,L=p=a,u=[o,a],P.push(u),n+=2,l="L";else if("C"===l)h||(b=L=0),(u=u||[0,0]).push(o,a,b+1*w[n+3],L+1*w[n+4],b+=1*w[n+5],L+=1*w[n+6]),n+=6;else if("S"===l)c=b,d=L,"C"!==v&&"S"!==v||(c+=b-u[u.length-4],d+=L-u[u.length-3]),h||(b=L=0),u.push(c,d,o,a,b+=1*w[n+3],L+=1*w[n+4]),n+=4;else if("Q"===l)c=b+2/3*(o-b),d=L+2/3*(a-L),h||(b=L=0),b+=1*w[n+3],L+=1*w[n+4],u.push(c,d,b+2/3*(o-b),L+2/3*(a-L),b,L),n+=4;else if("T"===l)c=b-u[u.length-4],d=L-u[u.length-3],u.push(b+c,L+d,o+2/3*(b+1.5*c-o),a+2/3*(L+1.5*d-a),b=o,L=a),n+=2;else if("H"===l)e(b,L,b=o,L),n+=1;else if("V"===l)e(b,L,b,L=o+(h?L-b:0)),n+=1;else if("L"===l||"Z"===l)"Z"===l&&(o=f,a=p,u.closed=!0),("L"===l||.5<g(b-o)||.5<g(L-a))&&(e(b,L,o,a),"L"===l&&(n+=2)),b=o,L=a;else if("A"===l){if(y=w[n+4],x=w[n+5],c=w[n+6],d=w[n+7],r=7,1<y.length&&(y.length<3?(d=c,c=x,r--):(d=x,c=y.substr(2),r-=2),x=y.charAt(1),y=y.charAt(0)),m=I(b,L,+w[n+1],+w[n+2],+w[n+3],+y,+x,(h?b:0)+1*c,(h?L:0)+1*d),n+=r,m)for(r=0;r<m.length;r++)u.push(m[r]);b=u[u.length-2],L=u[u.length-1]}else console.log(C);return(n=u.length)<6?(P.pop(),n=0):u[0]===u[n-2]&&u[1]===u[n-1]&&(u.closed=!0),P.totalPoints=N+n,P}function V(t,e){void 0===e&&(e=1);for(var n=t[0],r=0,o=[n,r],i=2;i<t.length;i+=2)o.push(n,r,t[i],r=(t[i]-n)*e/2,n=t[i],-r);return o}function z(t,e,n){g(t[0]-t[2])<1e-4&&g(t[1]-t[3])<1e-4&&(t=t.slice(2));var r,o,i,a,s,l,h,u,d,m,v,y,x,w,b=t.length-2,L=+t[0],M=+t[1],N=+t[2],C=+t[3],T=[L,M,L,M],A=N-L,B=C-M,S=Math.abs(t[b]-L)<.001&&Math.abs(t[b+1]-M)<.001;for(isNaN(n)&&(n=Math.PI/10),S&&(t.push(N,C),N=L,C=M,L=t[b-2],M=t[b-1],t.unshift(L,M),b+=4),e=e||0===e?+e:1,s=2;s<b;s+=2)r=L,o=M,L=N,M=C,N=+t[s+2],C=+t[s+3],L===N&&M===C||(y=(l=A)*l+(u=B)*u,x=(A=N-L)*A+(B=C-M)*B,w=(h=N-r)*h+(d=C-o)*d,v=(i=Math.acos((y+x-w)/$(4*y*x)))/Math.PI*e,m=$(y)*v,v*=$(x),L===r&&M===o||(n<i?(a=c(d,h),T.push(P(L-p(a)*m),P(M-f(a)*m),P(L),P(M),P(L+p(a)*v),P(M+f(a)*v))):(a=c(u,l),T.push(P(L-p(a)*m),P(M-f(a)*m)),a=c(B,A),T.push(P(L),P(M),P(L+p(a)*v),P(M+f(a)*v)))));return L!==N||M!==C||T.length<4?T.push(P(N),P(C),P(N),P(C)):T.length-=2,S&&(T.splice(0,6),T.length=T.length-6),T}function X(t){m(t[0])&&(t=[t]);var e,n,r,o,i="",a=t.length;for(n=0;n<a;n++){for(o=t[n],i+="M"+P(o[0])+","+P(o[1])+" C",e=o.length,r=2;r<e;r++)i+=P(o[r++])+","+P(o[r++])+" "+P(o[r++])+","+P(o[r++])+" "+P(o[r++])+","+P(o[r])+" ";o.closed&&(i+="z")}return i}function Y(t){var e=t.ownerDocument||t;!(nt in t.style)&&"msTransform"in t.style&&(rt=(nt="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););if(H=window,J=new at,e){U=(Z=e).documentElement,D=e.body,(K=Z.createElementNS("http://www.w3.org/2000/svg","g")).style.transform="none";var n=e.createElement("div"),r=e.createElement("div");D.appendChild(n),n.appendChild(r),n.style.position="static",n.style[nt]="translate3d(0,0,1px)",tt=r.offsetParent!==n,D.removeChild(n)}return e}function j(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)}function G(t,e){if(t.parentNode&&(Z||Y(t))){var n=j(t),r=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",o=n?e?"rect":"g":"div",i=2!==e?0:100,a=3===e?100:0,s="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",l=Z.createElementNS?Z.createElementNS(r.replace(/^https/,"http"),o):Z.createElement(o);return e&&(n?(W=W||G(t),l.setAttribute("width",.01),l.setAttribute("height",.01),l.setAttribute("transform","translate("+i+","+a+")"),W.appendChild(l)):(Q||((Q=G(t)).style.cssText=s),l.style.cssText=s+"width:0.1px;height:0.1px;top:"+a+"px;left:"+i+"px",Q.appendChild(l))),l}throw"Need document and parent."}function q(t,e){var n,r,o,i,a,s,l=j(t),h=t===l,u=l?ot:it,f=t.parentNode;if(t===H)return t;if(u.length||u.push(G(t,1),G(t,2),G(t,3)),n=l?W:Q,l)h?(i=-(o=function(t){var e,n=t.getCTM();return n||(e=t.style[nt],t.style[nt]="none",t.appendChild(K),n=K.getCTM(),t.removeChild(K),e?t.style[nt]=e:t.style.removeProperty(nt.replace(/([A-Z])/g,"-$1").toLowerCase())),n}(t)).e/o.a,a=-o.f/o.d,r=J):(o=t.getBBox(),i=(r=(r=t.transform?t.transform.baseVal:{}).numberOfItems?1<r.numberOfItems?function(t){for(var e=new at,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e}(r):r.getItem(0).matrix:J).a*o.x+r.c*o.y,a=r.b*o.x+r.d*o.y),e&&"g"===t.tagName.toLowerCase()&&(i=a=0),(h?l:f).appendChild(n),n.setAttribute("transform","matrix("+r.a+","+r.b+","+r.c+","+r.d+","+(r.e+i)+","+(r.f+a)+")");else{if(i=a=0,tt)for(r=t.offsetParent,o=t;(o=o&&o.parentNode)&&o!==r&&o.parentNode;)4<(H.getComputedStyle(o)[nt]+"").length&&(i=o.offsetLeft,a=o.offsetTop,o=0);if("absolute"!==(s=H.getComputedStyle(t)).position&&"fixed"!==s.position)for(r=t.offsetParent;f&&f!==r;)i+=f.scrollLeft||0,a+=f.scrollTop||0,f=f.parentNode;(o=n.style).top=t.offsetTop-a+"px",o.left=t.offsetLeft-i+"px",o[nt]=s[nt],o[rt]=s[rt],o.position="fixed"===s.position?"fixed":"absolute",t.parentNode.appendChild(n)}return n}function F(t,e,n,r,o,i,a){return t.a=e,t.b=n,t.c=r,t.d=o,t.e=i,t.f=a,t}var Z,H,U,D,Q,W,J,K,tt,et,nt="transform",rt=nt+"Origin",ot=[],it=[],at=((et=st.prototype).inverse=function(){var t=this.a,e=this.b,n=this.c,r=this.d,o=this.e,i=this.f,a=t*r-e*n||1e-10;return F(this,r/a,-e/a,-n/a,t/a,(n*i-r*o)/a,-(t*i-e*o)/a)},et.multiply=function(t){var e=this.a,n=this.b,r=this.c,o=this.d,i=this.e,a=this.f,s=t.a,l=t.c,h=t.b,u=t.d,f=t.e,p=t.f;return F(this,s*e+h*r,s*n+h*o,l*e+u*r,l*n+u*o,i+f*e+p*r,a+f*n+p*o)},et.clone=function(){return new st(this.a,this.b,this.c,this.d,this.e,this.f)},et.equals=function(t){var e=this.a,n=this.b,r=this.c,o=this.d,i=this.e,a=this.f;return e===t.a&&n===t.b&&r===t.c&&o===t.d&&i===t.e&&a===t.f},et.apply=function(t,e){void 0===e&&(e={});var n=t.x,r=t.y,o=this.a,i=this.b,a=this.c,s=this.d,l=this.e,h=this.f;return e.x=n*o+r*a+l||0,e.y=n*i+r*s+h||0,e},st);function st(t,e,n,r,o,i){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===r&&(r=1),void 0===o&&(o=0),void 0===i&&(i=0),F(this,t,e,n,r,o,i)}function lt(t,e,n,r){if(!t||!t.parentNode||(Z||Y(t)).documentElement===t)return new at;var o=function(t){for(var e,n;t&&t!==D;)(n=t._gsap)&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e}(t),i=j(t)?ot:it,a=q(t,n),s=i[0].getBoundingClientRect(),l=i[1].getBoundingClientRect(),h=i[2].getBoundingClientRect(),u=a.parentNode,f=!r&&function t(e){return"fixed"===H.getComputedStyle(e).position||((e=e.parentNode)&&1===e.nodeType?t(e):void 0)}(t),p=new at((l.left-s.left)/100,(l.top-s.top)/100,(h.left-s.left)/100,(h.top-s.top)/100,s.left+(f?0:H.pageXOffset||Z.scrollLeft||U.scrollLeft||D.scrollLeft||0),s.top+(f?0:H.pageYOffset||Z.scrollTop||U.scrollTop||D.scrollTop||0));if(u.removeChild(a),o)for(s=o.length;s--;)(l=o[s]).scaleX=l.scaleY=0,l.renderTransform(1,l);return e?p.inverse():p}function ht(t,e,n,r){for(var o=e.length,i=2===r?0:r,a=0;a<o;a++)t[i]=parseFloat(e[a][n]),2===r&&(t[i+1]=0),i+=2;return t}function ut(t,e,n){return parseFloat(t._gsap.get(t,e,n||"px"))||0}function ft(t){var e,n=t[0],r=t[1];for(e=2;e<t.length;e+=2)n=t[e]+=n,r=t[e+1]+=r}function pt(t,e,n,r,o,i,a,s,l){return e="cubic"===a.type?[e]:(!1!==a.fromCurrent&&e.unshift(ut(n,r,s),o?ut(n,o,l):0),a.relative&&ft(e),[(o?z:V)(e,a.curviness)]),e=i(Mt(e,n,a)),Nt(t,n,r,e,"x",s),o&&Nt(t,n,o,e,"y",l),S(e,a.resolution||(0===a.curviness?20:12))}function gt(t){return t}function ct(t,e,n){var r,o,i,a=lt(t);return"svg"===(t.tagName+"").toLowerCase()?(o=(r=t.viewBox.baseVal).x,i=r.y,r.width||(r={width:+t.getAttribute("width"),height:+t.getAttribute("height")})):(r=e&&t.getBBox&&t.getBBox(),o=i=0),e&&"auto"!==e&&(o+=e.push?e[0]*(r?r.width:t.offsetWidth||0):e.x,i+=e.push?e[1]*(r?r.height:t.offsetHeight||0):e.y),n.apply(o||i?a.apply({x:o,y:i}):{x:a.e,y:a.f})}function dt(t,e,n,r){var o,i=lt(t.parentNode,!0,!0),a=i.clone().multiply(lt(e)),s=ct(t,n,i),l=ct(e,r,i),h=l.x,u=l.y;return a.e=a.f=0,"auto"===r&&e.getTotalLength&&"path"===e.tagName.toLowerCase()&&(o=e.getAttribute("d").match(Lt)||[],h+=(o=a.apply({x:+o[0],y:+o[1]})).x,u+=o.y),(o||e.getBBox&&t.getBBox&&e.ownerSVGElement===t.ownerSVGElement)&&(h-=(o=a.apply(e.getBBox())).x,u-=o.y),a.e=h-s.x,a.f=u-s.y,a}var mt,vt,yt,xt,wt="x,translateX,left,marginLeft,xPercent".split(","),Pt="y,translateY,top,marginTop,yPercent".split(","),bt=Math.PI/180,Lt=/[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,Mt=function(t,e,n){var r,o,i,a=n.align,s=n.matrix,l=n.offsetX,h=n.offsetY,u=n.alignOrigin,f=t[0][0],p=t[0][1],g=ut(e,"x"),c=ut(e,"y");return t&&t.length?(a&&("self"===a||(r=xt(a)[0]||e)===e?E(t,1,0,0,1,g-f,c-p):(u&&!1!==u[2]?mt.set(e,{transformOrigin:100*u[0]+"% "+100*u[1]+"%"}):u=[ut(e,"xPercent")/-100,ut(e,"yPercent")/-100],i=(o=dt(e,r,u,"auto")).apply({x:f,y:p}),E(t,o.a,o.b,o.c,o.d,g+o.e-(i.x-o.e),c+o.f-(i.y-o.f)))),s?E(t,s.a,s.b,s.c,s.d,s.e,s.f):(l||h)&&E(t,1,0,0,1,l||0,h||0),t):M("M0,0L0,0")},Nt=function(t,e,n,r,o,i){var a=e._gsap,s=a.harness,l=s&&s.aliases&&s.aliases[n],h=l&&l.indexOf(",")<0?l:n,u=t._pt=new vt(t._pt,e,h,0,0,gt,0,a.set(e,h,t));u.u=yt(a.get(e,h,i))||0,u.path=r,u.pp=o,t._props.push(h)},Ct={version:"3.7.1",name:"motionPath",register:function(t,e,n){yt=(mt=t).utils.getUnit,xt=mt.utils.toArray,vt=n},init:function(t,e){if(!mt)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;"object"==typeof e&&!e.style&&e.path||(e={path:e});var n,r,o=[],i=e.path,a=e.autoRotate,s=e.unitX,l=e.unitY,h=e.x,u=e.y,f=i[0],p=function(t,e){return function(n){return t||1!==e?A(n,t,e):n}}(e.start,"end"in e?e.end:1);if(this.rawPaths=o,this.target=t,(this.rotate=a||0===a)&&(this.rOffset=parseFloat(a)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=yt(t._gsap.get(t,this.rProp))||0),!Array.isArray(i)||"closed"in i||"number"==typeof f)S(n=p(Mt(M(e.path),t,e)),e.resolution),o.push(n),Nt(this,t,e.x||"x",n,"x",e.unitX||"px"),Nt(this,t,e.y||"y",n,"y",e.unitY||"px");else{for(r in f)!h&&~wt.indexOf(r)?h=r:!u&&~Pt.indexOf(r)&&(u=r);for(r in h&&u?o.push(pt(this,ht(ht([],i,h,0),i,u,1),t,h,u,p,e,s||yt(i[0][h]),l||yt(i[0][u]))):h=u=0,f)r!==h&&r!==u&&o.push(pt(this,ht([],i,r,2),t,r,0,p,e,yt(i[0][r])))}},render:function(t,e){var n=e.rawPaths,r=n.length,o=e._pt;for(1<t?t=1:t<0&&(t=0);r--;)R(n[r],t,!r&&e.rotate,n[r]);for(;o;)o.set(o.t,o.p,o.path[o.pp]+o.u,o.d,t),o=o._next;e.rotate&&e.rSet(e.target,e.rProp,n[0].angle*(e.radians?bt:1)+e.rOffset+e.ru,e,t)},getLength:function(t){return S(M(t)).totalLength},sliceRawPath:A,getRawPath:M,pointsToSegment:z,stringToRawPath:k,rawPathToString:X,transformRawPath:E,getGlobalMatrix:lt,getPositionOnPath:R,cacheRawPathMeasurements:S,convertToPath:function(t,e){return xt(t).map((function(t){return function(t,e){var n,r,o,i,s,l,h,u,f,p,g,c,d,m,v,y,x,w,P,b,L,M,N=t.tagName.toLowerCase(),T=.552284749831;return"path"!==N&&t.getBBox?(l=function(t,e){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),o=[].slice.call(t.attributes),i=o.length;for(e=","+e+",";-1<--i;)n=o[i].nodeName.toLowerCase(),e.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,o[i].nodeValue);return r}(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),M=function(t,e){for(var n=e?e.split(","):[],r={},o=n.length;-1<--o;)r[n[o]]=+t.getAttribute(n[o])||0;return r}(t,C[N]),"rect"===N?(i=M.rx,s=M.ry||i,r=M.x,o=M.y,p=M.width-2*i,g=M.height-2*s,n=i||s?"M"+(y=(m=(d=r+i)+p)+i)+","+(w=o+s)+" V"+(P=w+g)+" C"+[y,b=P+s*T,v=m+i*T,L=P+s,m,L,m-(m-d)/3,L,d+(m-d)/3,L,d,L,c=r+i*(1-T),L,r,b,r,P,r,P-(P-w)/3,r,w+(P-w)/3,r,w,r,x=o+s*(1-T),c,o,d,o,d+(m-d)/3,o,m-(m-d)/3,o,m,o,v,o,y,x,y,w].join(",")+"z":"M"+(r+p)+","+o+" v"+g+" h"+-p+" v"+-g+" h"+p+"z"):"circle"===N||"ellipse"===N?(u="circle"===N?(i=s=M.r)*T:(i=M.rx,(s=M.ry)*T),n="M"+((r=M.cx)+i)+","+(o=M.cy)+" C"+[r+i,o+u,r+(h=i*T),o+s,r,o+s,r-h,o+s,r-i,o+u,r-i,o,r-i,o-u,r-h,o-s,r,o-s,r+h,o-s,r+i,o-u,r+i,o].join(",")+"z"):"line"===N?n="M"+M.x1+","+M.y1+" L"+M.x2+","+M.y2:"polyline"!==N&&"polygon"!==N||(n="M"+(r=(f=(t.getAttribute("points")+"").match(a)||[]).shift())+","+(o=f.shift())+" L"+f.join(","),"polygon"===N&&(n+=","+r+","+o+"z")),l.setAttribute("d",X(l._gsRawPath=k(n))),e&&t.parentNode&&(t.parentNode.insertBefore(l,t),t.parentNode.removeChild(t)),l):t}(t,!1!==e)}))},convertCoordinates:function(t,e,n){var r=lt(e,!0,!0).multiply(lt(t));return n?r.apply(n):r},getAlignMatrix:dt,getRelativePosition:function(t,e,n,r){var o=dt(t,e,n,r);return{x:o.e,y:o.f}},arrayToRawPath:function(t,e){var n=ht(ht([],t,(e=e||{}).x||"x",0),t,e.y||"y",1);return e.relative&&ft(n),["cubic"===e.type?n:z(n,e.curviness)]}};!(mt||"undefined"!=typeof window&&(mt=window.gsap)&&mt.registerPlugin&&mt)||mt.registerPlugin(Ct),t.MotionPathPlugin=Ct,t.default=Ct,"undefined"==typeof window||window!==t?Object.defineProperty(t,"__esModule",{value:!0}):delete t.default}));