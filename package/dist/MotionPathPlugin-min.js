!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,(function(exports){"use strict";var t=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,e=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,n=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,r=/(^[#\.][a-z]|[a-y][a-z])/i,o=Math.PI/180,i=180/Math.PI,a=Math.sin,s=Math.cos,l=Math.abs,h=Math.sqrt,u=Math.atan2,f=1e8,p=function(t){return"string"==typeof t},g=function(t){return"number"==typeof t},c={},d={},m=1e5,v=function(t){return Math.round((t+f)%1*m)/m||(t<0?0:1)},y=function(t){return Math.round(t*m)/m||0},x=function(t){return Math.round(1e10*t)/1e10||0},w=function(t,e,n,r){var o=t[e],i=1===r?6:O(o,n,r);if(i&&i+n+2<o.length)return t.splice(e,0,o.slice(0,n+i+2)),o.splice(0,n+i),1},P=function(t,e,n){var r=t.length,o=~~(n*r);if(t[o]>e)for(;--o&&t[o]>e;);else for(;t[++o]<e&&o<r;);return o},b=function(t,e){return e.totalLength=t.totalLength,t.samples?(e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):t.totalPoints&&(e.totalPoints=t.totalPoints),e},L=function(t,e){var n=t.length,r=t[n-1]||[],o=r.length;n&&e[0]===r[o-2]&&e[1]===r[o-1]&&(e=r.concat(e.slice(2)),n--),t[n]=e};function M(t){var e,n=(t=p(t)&&r.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return n&&(t=t.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(e=n._gsPath[t])&&!e._dirty?e:n._gsPath[t]=V(t)):t?p(t)?V(t):g(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")}function N(t){var e,n=0;for(t.reverse();n<t.length;n+=2)e=t[n],t[n]=t[n+1],t[n+1]=e;t.reversed=!t.reversed}var C={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function T(t,n){var r,o,i,a,s,l,h,u,f,p,g,c,d,m,v,y,x,w,P,b,L,M,N=t.tagName.toLowerCase(),T=.552284749831;return"path"!==N&&t.getBBox?(l=function(t,e){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),o=[].slice.call(t.attributes),i=o.length;for(e=","+e+",";--i>-1;)n=o[i].nodeName.toLowerCase(),e.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,o[i].nodeValue);return r}(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),M=function(t,e){for(var n=e?e.split(","):[],r={},o=n.length;--o>-1;)r[n[o]]=+t.getAttribute(n[o])||0;return r}(t,C[N]),"rect"===N?(a=M.rx,s=M.ry||a,o=M.x,i=M.y,p=M.width-2*a,g=M.height-2*s,r=a||s?"M"+(y=(m=(d=o+a)+p)+a)+","+(w=i+s)+" V"+(P=w+g)+" C"+[y,b=P+s*T,v=m+a*T,L=P+s,m,L,m-(m-d)/3,L,d+(m-d)/3,L,d,L,c=o+a*(1-T),L,o,b,o,P,o,P-(P-w)/3,o,w+(P-w)/3,o,w,o,x=i+s*(1-T),c,i,d,i,d+(m-d)/3,i,m-(m-d)/3,i,m,i,v,i,y,x,y,w].join(",")+"z":"M"+(o+p)+","+i+" v"+g+" h"+-p+" v"+-g+" h"+p+"z"):"circle"===N||"ellipse"===N?("circle"===N?u=(a=s=M.r)*T:(a=M.rx,u=(s=M.ry)*T),r="M"+((o=M.cx)+a)+","+(i=M.cy)+" C"+[o+a,i+u,o+(h=a*T),i+s,o,i+s,o-h,i+s,o-a,i+u,o-a,i,o-a,i-u,o-h,i-s,o,i-s,o+h,i-s,o+a,i-u,o+a,i].join(",")+"z"):"line"===N?r="M"+M.x1+","+M.y1+" L"+M.x2+","+M.y2:"polyline"!==N&&"polygon"!==N||(r="M"+(o=(f=(t.getAttribute("points")+"").match(e)||[]).shift())+","+(i=f.shift())+" L"+f.join(","),"polygon"===N&&(r+=","+o+","+i+"z")),l.setAttribute("d",Y(l._gsRawPath=V(r))),n&&t.parentNode&&(t.parentNode.insertBefore(l,t),t.parentNode.removeChild(t)),l):t}function A(t,e,n){var r,o=t[e],a=t[e+2],s=t[e+4];return o+=(a-o)*n,o+=((a+=(s-a)*n)-o)*n,r=a+(s+(t[e+6]-s)*n-a)*n-o,o=t[e+1],o+=((a=t[e+3])-o)*n,o+=((a+=((s=t[e+5])-a)*n)-o)*n,y(u(a+(s+(t[e+7]-s)*n-a)*n-o,r)*i)}function B(t,e,n){n=void 0===n?1:x(n)||0,e=x(e)||0;var r=Math.max(0,~~(l(n-e)-1e-8)),o=function(t){for(var e=[],n=0;n<t.length;n++)e[n]=b(t[n],t[n].slice(0));return b(t,e)}(t);if(e>n&&(e=1-e,n=1-n,function(t,e){var n=t.length;for(e||t.reverse();n--;)t[n].reversed||N(t[n])}(o),o.totalLength=0),e<0||n<0){var i=Math.abs(~~Math.min(e,n))+1;e+=i,n+=i}o.totalLength||_(o);var a,s,h,u,f,p,g,m,v=n>1,y=R(o,e,c,!0),P=R(o,n,d),M=P.segment,C=y.segment,T=P.segIndex,B=y.segIndex,S=P.i,E=y.i,I=B===T,k=S===E&&I;if(v||r){for(a=T<B||I&&S<E||k&&P.t<y.t,w(o,B,E,y.t)&&(B++,a||(T++,k?(P.t=(P.t-y.t)/(1-y.t),S=0):I&&(S-=E))),1-(n-e)<1e-5?T=B-1:!P.t&&T?T--:w(o,T,S,P.t)&&a&&B++,1===y.t&&(B=(B+1)%o.length),f=[],g=1+(p=o.length)*r,m=B,g+=(p-B+T)%p,u=0;u<g;u++)L(f,o[m++%p]);o=f}else if(h=1===P.t?6:O(M,S,P.t),e!==n)for(s=O(C,E,k?y.t/P.t:y.t),I&&(h+=s),M.splice(S+h+2),(s||E)&&C.splice(0,E+s),u=o.length;u--;)(u<B||u>T)&&o.splice(u,1);else M.angle=A(M,S+h,0),y=M[S+=h],P=M[S+1],M.length=M.totalLength=0,M.totalPoints=o.totalPoints=8,M.push(y,P,y,P,y,P,y,P);return o.totalLength=0,o}function S(t,e,n){e=e||0,t.samples||(t.samples=[],t.lookup=[]);var r,o,i,a,s,u,p,g,c,d,m,v,y,x,w,P,b,L=~~t.resolution||12,M=1/L,N=n?e+6*n+1:t.length,C=t[e],T=t[e+1],A=e?e/6*L:0,B=t.samples,S=t.lookup,_=(e?t.minLength:f)||f,O=B[A+n*L-1],R=e?B[A-1]:0;for(B.length=S.length=0,o=e+2;o<N;o+=6){if(i=t[o+4]-C,a=t[o+2]-C,s=t[o]-C,g=t[o+5]-T,c=t[o+3]-T,d=t[o+1]-T,u=p=m=v=0,l(i)<.01&&l(g)<.01&&l(s)+l(d)<.01)t.length>8&&(t.splice(o,6),o-=6,N-=6);else for(r=1;r<=L;r++)u=p-(p=((x=M*r)*x*i+3*(y=1-x)*(x*a+y*s))*x),m=v-(v=(x*x*g+3*y*(x*c+y*d))*x),(P=h(m*m+u*u))<_&&(_=P),R+=P,B[A++]=R;C+=i,T+=g}if(O)for(O-=R;A<B.length;A++)B[A]+=O;if(B.length&&_){if(t.totalLength=b=B[B.length-1]||0,t.minLength=_,b/_<9999)for(P=w=0,r=0;r<b;r+=_)S[P++]=B[w]<r?++w:w}else t.totalLength=B[0]=0;return e?R-B[e/2-1]:R}function _(t,e){var n,r,o;for(o=n=r=0;o<t.length;o++)t[o].resolution=~~e||12,r+=t[o].length,n+=S(t[o]);return t.totalPoints=r,t.totalLength=n,t}function O(t,e,n){if(n<=0||n>=1)return 0;var r=t[e],o=t[e+1],i=t[e+2],a=t[e+3],s=t[e+4],l=t[e+5],h=r+(i-r)*n,u=i+(s-i)*n,f=o+(a-o)*n,p=a+(l-a)*n,g=h+(u-h)*n,c=f+(p-f)*n,d=s+(t[e+6]-s)*n,m=l+(t[e+7]-l)*n;return u+=(d-u)*n,p+=(m-p)*n,t.splice(e+2,4,y(h),y(f),y(g),y(c),y(g+(u-g)*n),y(c+(p-c)*n),y(u),y(p),y(d),y(m)),t.samples&&t.samples.splice(e/6*t.resolution|0,0,0,0,0,0,0,0),6}function R(t,e,n,r){n=n||{},t.totalLength||_(t),(e<0||e>1)&&(e=v(e));var o,i,a,s,l,h,u,f=0,p=t[0];if(e)if(1===e)u=1,h=(p=t[f=t.length-1]).length-8;else{if(t.length>1){for(a=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<a;)f=h;e=(a-(s=l-(p=t[f]).totalLength))/(l-s)||0}o=p.samples,i=p.resolution,a=p.totalLength*e,s=(h=p.lookup.length?p.lookup[~~(a/p.minLength)]||0:P(o,a,e))?o[h-1]:0,(l=o[h])<a&&(s=l,l=o[++h]),u=1/i*((a-s)/(l-s)+h%i),h=6*~~(h/i),r&&1===u&&(h+6<p.length?(h+=6,u=0):f+1<t.length&&(h=u=0,p=t[++f]))}else u=h=f=0,p=t[0];return n.t=u,n.i=h,n.path=t,n.segment=p,n.segIndex=f,n}function E(t,e,n,r){var o,i,a,s,l,h,u,f,p,g=t[0],c=r||{};if((e<0||e>1)&&(e=v(e)),t.length>1){for(a=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<a;)g=t[h];e=(a-(s=l-g.totalLength))/(l-s)||0}return o=g.samples,i=g.resolution,a=g.totalLength*e,s=(h=g.lookup.length?g.lookup[e<1?~~(a/g.minLength):g.lookup.length-1]||0:P(o,a,e))?o[h-1]:0,(l=o[h])<a&&(s=l,l=o[++h]),p=1-(u=1/i*((a-s)/(l-s)+h%i)||0),f=g[h=6*~~(h/i)],c.x=y((u*u*(g[h+6]-f)+3*p*(u*(g[h+4]-f)+p*(g[h+2]-f)))*u+f),c.y=y((u*u*(g[h+7]-(f=g[h+1]))+3*p*(u*(g[h+5]-f)+p*(g[h+3]-f)))*u+f),n&&(c.angle=g.totalLength?A(g,h,u>=1?1-1e-9:u||1e-9):g.angle||0),c}function I(t,e,n,r,o,i,a){for(var s,l,h,u,f,p=t.length;--p>-1;)for(l=(s=t[p]).length,h=0;h<l;h+=2)u=s[h],f=s[h+1],s[h]=u*e+f*r+i,s[h+1]=u*n+f*o+a;return t._dirty=1,t}function k(t,e,n,r,i,u,f,p,g){if(t!==p||e!==g){n=l(n),r=l(r);var c=i%360*o,d=s(c),m=a(c),v=Math.PI,y=2*v,x=(t-p)/2,w=(e-g)/2,P=d*x+m*w,b=-m*x+d*w,L=P*P,M=b*b,N=L/(n*n)+M/(r*r);N>1&&(n=h(N)*n,r=h(N)*r);var C=n*n,T=r*r,A=(C*T-C*M-T*L)/(C*M+T*L);A<0&&(A=0);var B=(u===f?-1:1)*h(A),S=B*(n*b/r),_=B*(-r*P/n),O=(t+p)/2+(d*S-m*_),R=(e+g)/2+(m*S+d*_),E=(P-S)/n,I=(b-_)/r,k=(-P-S)/n,V=(-b-_)/r,z=E*E+I*I,X=(I<0?-1:1)*Math.acos(E/h(z)),Y=(E*V-I*k<0?-1:1)*Math.acos((E*k+I*V)/h(z*(k*k+V*V)));isNaN(Y)&&(Y=v),!f&&Y>0?Y-=y:f&&Y<0&&(Y+=y),X%=y,Y%=y;var j,G=Math.ceil(l(Y)/(y/4)),q=[],F=Y/G,Z=4/3*a(F/2)/(1+s(F/2)),H=d*n,U=m*n,D=m*-r,Q=d*r;for(j=0;j<G;j++)P=s(i=X+j*F),b=a(i),E=s(i+=F),I=a(i),q.push(P-Z*b,b+Z*P,E+Z*I,I-Z*E,E,I);for(j=0;j<q.length;j+=2)P=q[j],b=q[j+1],q[j]=P*H+b*D+O,q[j+1]=P*U+b*Q+R;return q[j-2]=p,q[j-1]=g,q}}function V(e){var r,o,i,a,s,h,u,f,p,g,c,d,m,v,y,x=(e+"").replace(n,(function(t){var e=+t;return e<1e-4&&e>-1e-4?0:e})).match(t)||[],w=[],P=0,b=0,L=2/3,M=x.length,N=0,C="ERROR: malformed path: "+e,T=function(t,e,n,r){g=(n-t)/3,c=(r-e)/3,u.push(t+g,e+c,n-g,r-c,n,r)};if(!e||!isNaN(x[0])||isNaN(x[1]))return console.log(C),w;for(r=0;r<M;r++)if(m=s,isNaN(x[r])?h=(s=x[r].toUpperCase())!==x[r]:r--,i=+x[r+1],a=+x[r+2],h&&(i+=P,a+=b),r||(f=i,p=a),"M"===s)u&&(u.length<8?w.length-=1:N+=u.length),P=f=i,b=p=a,u=[i,a],w.push(u),r+=2,s="L";else if("C"===s)u||(u=[0,0]),h||(P=b=0),u.push(i,a,P+1*x[r+3],b+1*x[r+4],P+=1*x[r+5],b+=1*x[r+6]),r+=6;else if("S"===s)g=P,c=b,"C"!==m&&"S"!==m||(g+=P-u[u.length-4],c+=b-u[u.length-3]),h||(P=b=0),u.push(g,c,i,a,P+=1*x[r+3],b+=1*x[r+4]),r+=4;else if("Q"===s)g=P+(i-P)*L,c=b+(a-b)*L,h||(P=b=0),P+=1*x[r+3],b+=1*x[r+4],u.push(g,c,P+(i-P)*L,b+(a-b)*L,P,b),r+=4;else if("T"===s)g=P-u[u.length-4],c=b-u[u.length-3],u.push(P+g,b+c,i+(P+1.5*g-i)*L,a+(b+1.5*c-a)*L,P=i,b=a),r+=2;else if("H"===s)T(P,b,P=i,b),r+=1;else if("V"===s)T(P,b,P,b=i+(h?b-P:0)),r+=1;else if("L"===s||"Z"===s)"Z"===s&&(i=f,a=p,u.closed=!0),("L"===s||l(P-i)>.5||l(b-a)>.5)&&(T(P,b,i,a),"L"===s&&(r+=2)),P=i,b=a;else if("A"===s){if(v=x[r+4],y=x[r+5],g=x[r+6],c=x[r+7],o=7,v.length>1&&(v.length<3?(c=g,g=y,o--):(c=y,g=v.substr(2),o-=2),y=v.charAt(1),v=v.charAt(0)),d=k(P,b,+x[r+1],+x[r+2],+x[r+3],+v,+y,(h?P:0)+1*g,(h?b:0)+1*c),r+=o,d)for(o=0;o<d.length;o++)u.push(d[o]);P=u[u.length-2],b=u[u.length-1]}else console.log(C);return(r=u.length)<6?(w.pop(),r=0):u[0]===u[r-2]&&u[1]===u[r-1]&&(u.closed=!0),w.totalPoints=N+r,w}function z(t,e){void 0===e&&(e=1);for(var n=t[0],r=0,o=[n,r],i=2;i<t.length;i+=2)o.push(n,r,t[i],r=(t[i]-n)*e/2,n=t[i],-r);return o}function X(t,e,n){l(t[0]-t[2])<1e-4&&l(t[1]-t[3])<1e-4&&(t=t.slice(2));var r,o,i,f,p,g,c,d,m,v,x,w,P,b,L=t.length-2,M=+t[0],N=+t[1],C=+t[2],T=+t[3],A=[M,N,M,N],B=C-M,S=T-N,_=Math.abs(t[L]-M)<.001&&Math.abs(t[L+1]-N)<.001;for(isNaN(n)&&(n=Math.PI/10),_&&(t.push(C,T),C=M,T=N,M=t[L-2],N=t[L-1],t.unshift(M,N),L+=4),e=e||0===e?+e:1,p=2;p<L;p+=2)r=M,o=N,M=C,N=T,C=+t[p+2],T=+t[p+3],M===C&&N===T||(w=(g=B)*g+(d=S)*d,P=(B=C-M)*B+(S=T-N)*S,b=(c=C-r)*c+(m=T-o)*m,x=(i=Math.acos((w+P-b)/h(4*w*P)))/Math.PI*e,v=h(w)*x,x*=h(P),M===r&&N===o||(i>n?(f=u(m,c),A.push(y(M-s(f)*v),y(N-a(f)*v),y(M),y(N),y(M+s(f)*x),y(N+a(f)*x))):(f=u(d,g),A.push(y(M-s(f)*v),y(N-a(f)*v)),f=u(S,B),A.push(y(M),y(N),y(M+s(f)*x),y(N+a(f)*x)))));return M!==C||N!==T||A.length<4?A.push(y(C),y(T),y(C),y(T)):A.length-=2,_&&(A.splice(0,6),A.length=A.length-6),A}function Y(t){g(t[0])&&(t=[t]);var e,n,r,o,i="",a=t.length;for(n=0;n<a;n++){for(o=t[n],i+="M"+y(o[0])+","+y(o[1])+" C",e=o.length,r=2;r<e;r++)i+=y(o[r++])+","+y(o[r++])+" "+y(o[r++])+","+y(o[r++])+" "+y(o[r++])+","+y(o[r])+" ";o.closed&&(i+="z")}return i}var j,G,q,F,Z,H,U,D,Q,W="transform",J=W+"Origin",K=function(t){var e=t.ownerDocument||t;!(W in t.style)&&"msTransform"in t.style&&(J=(W="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););if(G=window,U=new st,e){j=e,q=e.documentElement,F=e.body,(D=j.createElementNS("http://www.w3.org/2000/svg","g")).style.transform="none";var n=e.createElement("div"),r=e.createElement("div");F.appendChild(n),n.appendChild(r),n.style.position="static",n.style[W]="translate3d(0,0,1px)",Q=r.offsetParent!==n,F.removeChild(n)}return e},tt=[],et=[],nt=function(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)},rt=function t(e){return"fixed"===G.getComputedStyle(e).position||((e=e.parentNode)&&1===e.nodeType?t(e):void 0)},ot=function t(e,n){if(e.parentNode&&(j||K(e))){var r=nt(e),o=r?r.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",i=r?n?"rect":"g":"div",a=2!==n?0:100,s=3===n?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",h=j.createElementNS?j.createElementNS(o.replace(/^https/,"http"),i):j.createElement(i);return n&&(r?(H||(H=t(e)),h.setAttribute("width",.01),h.setAttribute("height",.01),h.setAttribute("transform","translate("+a+","+s+")"),H.appendChild(h)):(Z||((Z=t(e)).style.cssText=l),h.style.cssText=l+"width:0.1px;height:0.1px;top:"+s+"px;left:"+a+"px",Z.appendChild(h))),h}throw"Need document and parent."},it=function(t,e){var n,r,o,i,a,s,l=nt(t),h=t===l,u=l?tt:et,f=t.parentNode;if(t===G)return t;if(u.length||u.push(ot(t,1),ot(t,2),ot(t,3)),n=l?H:Z,l)h?(o=function(t){var e,n=t.getCTM();return n||(e=t.style[W],t.style[W]="none",t.appendChild(D),n=D.getCTM(),t.removeChild(D),e?t.style[W]=e:t.style.removeProperty(W.replace(/([A-Z])/g,"-$1").toLowerCase())),n}(t),i=-o.e/o.a,a=-o.f/o.d,r=U):(o=t.getBBox(),i=(r=(r=t.transform?t.transform.baseVal:{}).numberOfItems?r.numberOfItems>1?function(t){for(var e=new st,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e}(r):r.getItem(0).matrix:U).a*o.x+r.c*o.y,a=r.b*o.x+r.d*o.y),e&&"g"===t.tagName.toLowerCase()&&(i=a=0),(h?l:f).appendChild(n),n.setAttribute("transform","matrix("+r.a+","+r.b+","+r.c+","+r.d+","+(r.e+i)+","+(r.f+a)+")");else{if(i=a=0,Q)for(r=t.offsetParent,o=t;o&&(o=o.parentNode)&&o!==r&&o.parentNode;)(G.getComputedStyle(o)[W]+"").length>4&&(i=o.offsetLeft,a=o.offsetTop,o=0);if("absolute"!==(s=G.getComputedStyle(t)).position&&"fixed"!==s.position)for(r=t.offsetParent;f&&f!==r;)i+=f.scrollLeft||0,a+=f.scrollTop||0,f=f.parentNode;(o=n.style).top=t.offsetTop-a+"px",o.left=t.offsetLeft-i+"px",o[W]=s[W],o[J]=s[J],o.position="fixed"===s.position?"fixed":"absolute",t.parentNode.appendChild(n)}return n},at=function(t,e,n,r,o,i,a){return t.a=e,t.b=n,t.c=r,t.d=o,t.e=i,t.f=a,t},st=function(){function t(t,e,n,r,o,i){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===r&&(r=1),void 0===o&&(o=0),void 0===i&&(i=0),at(this,t,e,n,r,o,i)}var e=t.prototype;return e.inverse=function(){var t=this.a,e=this.b,n=this.c,r=this.d,o=this.e,i=this.f,a=t*r-e*n||1e-10;return at(this,r/a,-e/a,-n/a,t/a,(n*i-r*o)/a,-(t*i-e*o)/a)},e.multiply=function(t){var e=this.a,n=this.b,r=this.c,o=this.d,i=this.e,a=this.f,s=t.a,l=t.c,h=t.b,u=t.d,f=t.e,p=t.f;return at(this,s*e+h*r,s*n+h*o,l*e+u*r,l*n+u*o,i+f*e+p*r,a+f*n+p*o)},e.clone=function(){return new t(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(t){var e=this.a,n=this.b,r=this.c,o=this.d,i=this.e,a=this.f;return e===t.a&&n===t.b&&r===t.c&&o===t.d&&i===t.e&&a===t.f},e.apply=function(t,e){void 0===e&&(e={});var n=t.x,r=t.y,o=this.a,i=this.b,a=this.c,s=this.d,l=this.e,h=this.f;return e.x=n*o+r*a+l||0,e.y=n*i+r*s+h||0,e},t}();function lt(t,e,n,r){if(!t||!t.parentNode||(j||K(t)).documentElement===t)return new st;var o=function(t){for(var e,n;t&&t!==F;)(n=t._gsap)&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e}(t),i=nt(t)?tt:et,a=it(t,n),s=i[0].getBoundingClientRect(),l=i[1].getBoundingClientRect(),h=i[2].getBoundingClientRect(),u=a.parentNode,f=!r&&rt(t),p=new st((l.left-s.left)/100,(l.top-s.top)/100,(h.left-s.left)/100,(h.top-s.top)/100,s.left+(f?0:G.pageXOffset||j.scrollLeft||q.scrollLeft||F.scrollLeft||0),s.top+(f?0:G.pageYOffset||j.scrollTop||q.scrollTop||F.scrollTop||0));if(u.removeChild(a),o)for(s=o.length;s--;)(l=o[s]).scaleX=l.scaleY=0,l.renderTransform(1,l);return e?p.inverse():p}
/*!
	 * MotionPathPlugin 3.7.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/var ht,ut,ft,pt,gt="x,translateX,left,marginLeft,xPercent".split(","),ct="y,translateY,top,marginTop,yPercent".split(","),dt=Math.PI/180,mt=function(t,e,n,r){for(var o=e.length,i=2===r?0:r,a=0;a<o;a++)t[i]=parseFloat(e[a][n]),2===r&&(t[i+1]=0),i+=2;return t},vt=function(t,e,n){return parseFloat(t._gsap.get(t,e,n||"px"))||0},yt=function(t){var e,n=t[0],r=t[1];for(e=2;e<t.length;e+=2)n=t[e]+=n,r=t[e+1]+=r},xt=function(t,e,n,r,o,i,a,s,l){"cubic"===a.type?e=[e]:(!1!==a.fromCurrent&&e.unshift(vt(n,r,s),o?vt(n,o,l):0),a.relative&&yt(e),e=[(o?X:z)(e,a.curviness)]);return e=i(Mt(e,n,a)),Nt(t,n,r,e,"x",s),o&&Nt(t,n,o,e,"y",l),_(e,a.resolution||(0===a.curviness?20:12))},wt=function(t){return t},Pt=/[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,bt=function(t,e,n){var r,o,i,a=lt(t);return"svg"===(t.tagName+"").toLowerCase()?(o=(r=t.viewBox.baseVal).x,i=r.y,r.width||(r={width:+t.getAttribute("width"),height:+t.getAttribute("height")})):(r=e&&t.getBBox&&t.getBBox(),o=i=0),e&&"auto"!==e&&(o+=e.push?e[0]*(r?r.width:t.offsetWidth||0):e.x,i+=e.push?e[1]*(r?r.height:t.offsetHeight||0):e.y),n.apply(o||i?a.apply({x:o,y:i}):{x:a.e,y:a.f})},Lt=function(t,e,n,r){var o,i=lt(t.parentNode,!0,!0),a=i.clone().multiply(lt(e)),s=bt(t,n,i),l=bt(e,r,i),h=l.x,u=l.y;return a.e=a.f=0,"auto"===r&&e.getTotalLength&&"path"===e.tagName.toLowerCase()&&(o=e.getAttribute("d").match(Pt)||[],h+=(o=a.apply({x:+o[0],y:+o[1]})).x,u+=o.y),(o||e.getBBox&&t.getBBox&&e.ownerSVGElement===t.ownerSVGElement)&&(h-=(o=a.apply(e.getBBox())).x,u-=o.y),a.e=h-s.x,a.f=u-s.y,a},Mt=function(t,e,n){var r,o,i,a=n.align,s=n.matrix,l=n.offsetX,h=n.offsetY,u=n.alignOrigin,f=t[0][0],p=t[0][1],g=vt(e,"x"),c=vt(e,"y");return t&&t.length?(a&&("self"===a||(r=pt(a)[0]||e)===e?I(t,1,0,0,1,g-f,c-p):(u&&!1!==u[2]?ht.set(e,{transformOrigin:100*u[0]+"% "+100*u[1]+"%"}):u=[vt(e,"xPercent")/-100,vt(e,"yPercent")/-100],i=(o=Lt(e,r,u,"auto")).apply({x:f,y:p}),I(t,o.a,o.b,o.c,o.d,g+o.e-(i.x-o.e),c+o.f-(i.y-o.f)))),s?I(t,s.a,s.b,s.c,s.d,s.e,s.f):(l||h)&&I(t,1,0,0,1,l||0,h||0),t):M("M0,0L0,0")},Nt=function(t,e,n,r,o,i){var a=e._gsap,s=a.harness,l=s&&s.aliases&&s.aliases[n],h=l&&l.indexOf(",")<0?l:n,u=t._pt=new ut(t._pt,e,h,0,0,wt,0,a.set(e,h,t));u.u=ft(a.get(e,h,i))||0,u.path=r,u.pp=o,t._props.push(h)},Ct={version:"3.7.1",name:"motionPath",register:function(t,e,n){ft=(ht=t).utils.getUnit,pt=ht.utils.toArray,ut=n},init:function(t,e){if(!ht)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;"object"==typeof e&&!e.style&&e.path||(e={path:e});var n,r,o,i,a=[],s=e,l=s.path,h=s.autoRotate,u=s.unitX,f=s.unitY,p=s.x,g=s.y,c=l[0],d=(o=e.start,i="end"in e?e.end:1,function(t){return o||1!==i?B(t,o,i):t});if(this.rawPaths=a,this.target=t,(this.rotate=h||0===h)&&(this.rOffset=parseFloat(h)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=ft(t._gsap.get(t,this.rProp))||0),Array.isArray(l)&&!("closed"in l)&&"number"!=typeof c){for(r in c)!p&&~gt.indexOf(r)?p=r:!g&&~ct.indexOf(r)&&(g=r);for(r in p&&g?a.push(xt(this,mt(mt([],l,p,0),l,g,1),t,p,g,d,e,u||ft(l[0][p]),f||ft(l[0][g]))):p=g=0,c)r!==p&&r!==g&&a.push(xt(this,mt([],l,r,2),t,r,0,d,e,ft(l[0][r])))}else _(n=d(Mt(M(e.path),t,e)),e.resolution),a.push(n),Nt(this,t,e.x||"x",n,"x",e.unitX||"px"),Nt(this,t,e.y||"y",n,"y",e.unitY||"px")},render:function(t,e){var n=e.rawPaths,r=n.length,o=e._pt;for(t>1?t=1:t<0&&(t=0);r--;)E(n[r],t,!r&&e.rotate,n[r]);for(;o;)o.set(o.t,o.p,o.path[o.pp]+o.u,o.d,t),o=o._next;e.rotate&&e.rSet(e.target,e.rProp,n[0].angle*(e.radians?dt:1)+e.rOffset+e.ru,e,t)},getLength:function(t){return _(M(t)).totalLength},sliceRawPath:B,getRawPath:M,pointsToSegment:X,stringToRawPath:V,rawPathToString:Y,transformRawPath:I,getGlobalMatrix:lt,getPositionOnPath:E,cacheRawPathMeasurements:_,convertToPath:function(t,e){return pt(t).map((function(t){return T(t,!1!==e)}))},convertCoordinates:function(t,e,n){var r=lt(e,!0,!0).multiply(lt(t));return n?r.apply(n):r},getAlignMatrix:Lt,getRelativePosition:function(t,e,n,r){var o=Lt(t,e,n,r);return{x:o.e,y:o.f}},arrayToRawPath:function(t,e){var n=mt(mt([],t,(e=e||{}).x||"x",0),t,e.y||"y",1);return e.relative&&yt(n),["cubic"===e.type?n:X(n,e.curviness)]}};(ht||"undefined"!=typeof window&&(ht=window.gsap)&&ht.registerPlugin&&ht)&&ht.registerPlugin(Ct),exports.MotionPathPlugin=Ct,exports.default=Ct,Object.defineProperty(exports,"__esModule",{value:!0})}));