!function(D,u){"object"==typeof exports&&"undefined"!=typeof module?u(exports):"function"==typeof define&&define.amd?define(["exports"],u):u((D=D||self).window=D.window||{})}(this,(function(exports){"use strict";var D=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function u(D){var e=D.nodeType,F="";if(1===e||9===e||11===e){if("string"==typeof D.textContent)return D.textContent;for(D=D.firstChild;D;D=D.nextSibling)F+=u(D)}else if(3===e||4===e)return D.nodeValue;return F}
/*!
	 * SplitText: 3.7.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/var e,F,t,C=/(?:\r|\n|\t\t)/g,i=/(?:\s\s+)/g,n=function(D){return F.getComputedStyle(D)},E=Array.isArray,s=[].slice,r=function(D,u){var F;return E(D)?D:"string"==(F=typeof D)&&!u&&D?s.call(e.querySelectorAll(D),0):D&&"object"===F&&"length"in D?s.call(D,0):D?[D]:[]},l=function(D){return"absolute"===D.position||!0===D.absolute},o=function(D,u){for(var e,F=u.length;--F>-1;)if(e=u[F],D.substr(0,e.length)===e)return e.length},d=function(D,u){void 0===D&&(D="");var e=~D.indexOf("++"),F=1;return e&&(D=D.split("++").join("")),function(){return"<"+u+" style='position:relative;display:inline-block;'"+(D?" class='"+D+(e?F++:"")+"'>":">")}},a=function D(u,e,F){var t=u.nodeType;if(1===t||9===t||11===t)for(u=u.firstChild;u;u=u.nextSibling)D(u,e,F);else 3!==t&&4!==t||(u.nodeValue=u.nodeValue.split(e).join(F))},p=function(D,u){for(var e=u.length;--e>-1;)D.push(u[e])},h=function(D,u,e){for(var F;D&&D!==u;){if(F=D._next||D.nextSibling)return F.textContent.charAt(0)===e;D=D.parentNode||D._parent}},B=function D(u){var e,F,t=r(u.childNodes),C=t.length;for(e=0;e<C;e++)(F=t[e])._isSplit?D(F):e&&F.previousSibling&&3===F.previousSibling.nodeType?(F.previousSibling.nodeValue+=3===F.nodeType?F.nodeValue:F.firstChild.nodeValue,u.removeChild(F)):3!==F.nodeType&&(u.insertBefore(F.firstChild,F),u.removeChild(F))},f=function(D,u){return parseFloat(u[D])||0},A=function(D,u,F,t,C,i,E){var s,r,o,d,A,c,g,x,y,v,b,_,S=n(D),m=f("paddingLeft",S),N=-999,T=f("borderBottomWidth",S)+f("borderTopWidth",S),w=f("borderLeftWidth",S)+f("borderRightWidth",S),L=f("paddingTop",S)+f("paddingBottom",S),W=f("paddingLeft",S)+f("paddingRight",S),H=f("fontSize",S)*(u.lineThreshold||.2),O=S.textAlign,V=[],j=[],M=[],R=u.wordDelimiter||" ",k=u.tag?u.tag:u.span?"span":"div",P=u.type||u.split||"chars,words,lines",q=C&&~P.indexOf("lines")?[]:null,z=~P.indexOf("words"),G=~P.indexOf("chars"),I=l(u),J=u.linesClass,K=~(J||"").indexOf("++"),Q=[],U="flex"===S.display,X=D.style.display;for(K&&(J=J.split("++").join("")),U&&(D.style.display="block"),o=(r=D.getElementsByTagName("*")).length,A=[],s=0;s<o;s++)A[s]=r[s];if(q||I)for(s=0;s<o;s++)((c=(d=A[s]).parentNode===D)||I||G&&!z)&&(_=d.offsetTop,q&&c&&Math.abs(_-N)>H&&("BR"!==d.nodeName||0===s)&&(g=[],q.push(g),N=_),I&&(d._x=d.offsetLeft,d._y=_,d._w=d.offsetWidth,d._h=d.offsetHeight),q&&((d._isSplit&&c||!G&&c||z&&c||!z&&d.parentNode.parentNode===D&&!d.parentNode._isSplit)&&(g.push(d),d._x-=m,h(d,D,R)&&(d._wordEnd=!0)),"BR"===d.nodeName&&(d.nextSibling&&"BR"===d.nextSibling.nodeName||0===s)&&q.push([])));for(s=0;s<o;s++)if(c=(d=A[s]).parentNode===D,"BR"!==d.nodeName)if(I&&(y=d.style,z||c||(d._x+=d.parentNode._x,d._y+=d.parentNode._y),y.left=d._x+"px",y.top=d._y+"px",y.position="absolute",y.display="block",y.width=d._w+1+"px",y.height=d._h+"px"),!z&&G)if(d._isSplit)for(d._next=r=d.nextSibling,d.parentNode.appendChild(d);r&&3===r.nodeType&&" "===r.textContent;)d._next=r.nextSibling,d.parentNode.appendChild(r),r=r.nextSibling;else d.parentNode._isSplit?(d._parent=d.parentNode,!d.previousSibling&&d.firstChild&&(d.firstChild._isFirst=!0),d.nextSibling&&" "===d.nextSibling.textContent&&!d.nextSibling.nextSibling&&Q.push(d.nextSibling),d._next=d.nextSibling&&d.nextSibling._isFirst?null:d.nextSibling,d.parentNode.removeChild(d),A.splice(s--,1),o--):c||(_=!d.nextSibling&&h(d.parentNode,D,R),d.parentNode._parent&&d.parentNode._parent.appendChild(d),_&&d.parentNode.appendChild(e.createTextNode(" ")),"span"===k&&(d.style.display="inline"),V.push(d));else d.parentNode._isSplit&&!d._isSplit&&""!==d.innerHTML?j.push(d):G&&!d._isSplit&&("span"===k&&(d.style.display="inline"),V.push(d));else q||I?(d.parentNode&&d.parentNode.removeChild(d),A.splice(s--,1),o--):z||D.appendChild(d);for(s=Q.length;--s>-1;)Q[s].parentNode.removeChild(Q[s]);if(q){for(I&&(v=e.createElement(k),D.appendChild(v),b=v.offsetWidth+"px",_=v.offsetParent===D?0:D.offsetLeft,D.removeChild(v)),y=D.style.cssText,D.style.cssText="display:none;";D.firstChild;)D.removeChild(D.firstChild);for(x=" "===R&&(!I||!z&&!G),s=0;s<q.length;s++){for(g=q[s],(v=e.createElement(k)).style.cssText="display:block;text-align:"+O+";position:"+(I?"absolute;":"relative;"),J&&(v.className=J+(K?s+1:"")),M.push(v),o=g.length,r=0;r<o;r++)"BR"!==g[r].nodeName&&(d=g[r],v.appendChild(d),x&&d._wordEnd&&v.appendChild(e.createTextNode(" ")),I&&(0===r&&(v.style.top=d._y+"px",v.style.left=m+_+"px"),d.style.top="0px",_&&(d.style.left=d._x-_+"px")));0===o?v.innerHTML="&nbsp;":z||G||(B(v),a(v,String.fromCharCode(160)," ")),I&&(v.style.width=b,v.style.height=d._h+"px"),D.appendChild(v)}D.style.cssText=y}I&&(E>D.clientHeight&&(D.style.height=E-L+"px",D.clientHeight<E&&(D.style.height=E+T+"px")),i>D.clientWidth&&(D.style.width=i-W+"px",D.clientWidth<i&&(D.style.width=i+w+"px"))),U&&(X?D.style.display=X:D.style.removeProperty("display")),p(F,V),z&&p(t,j),p(C,M)},c=function(F,t,n,E){var s,r,d,p,h,B,f,A,c=t.tag?t.tag:t.span?"span":"div",g=~(t.type||t.split||"chars,words,lines").indexOf("chars"),x=l(t),y=t.wordDelimiter||" ",v=" "!==y?"":x?"&#173; ":" ",b="</"+c+">",_=1,S=t.specialChars?"function"==typeof t.specialChars?t.specialChars:o:null,m=e.createElement("div"),N=F.parentNode;for(N.insertBefore(m,F),m.textContent=F.nodeValue,N.removeChild(F),f=-1!==(s=u(F=m)).indexOf("<"),!1!==t.reduceWhiteSpace&&(s=s.replace(i," ").replace(C,"")),f&&(s=s.split("<").join("{{LT}}")),h=s.length,r=(" "===s.charAt(0)?v:"")+n(),d=0;d<h;d++)if(B=s.charAt(d),S&&(A=S(s.substr(d),t.specialChars)))B=s.substr(d,A||1),r+=g&&" "!==B?E()+B+"</"+c+">":B,d+=A-1;else if(B===y&&s.charAt(d-1)!==y&&d){for(r+=_?b:"",_=0;s.charAt(d+1)===y;)r+=v,d++;d===h-1?r+=v:")"!==s.charAt(d+1)&&(r+=v+n(),_=1)}else"{"===B&&"{{LT}}"===s.substr(d,6)?(r+=g?E()+"{{LT}}</"+c+">":"{{LT}}",d+=5):B.charCodeAt(0)>=55296&&B.charCodeAt(0)<=56319||s.charCodeAt(d+1)>=65024&&s.charCodeAt(d+1)<=65039?(p=((s.substr(d,12).split(D)||[])[1]||"").length||2,r+=g&&" "!==B?E()+s.substr(d,p)+"</"+c+">":s.substr(d,p),d+=p-1):r+=g&&" "!==B?E()+B+"</"+c+">":B;F.outerHTML=r+(_?b:""),f&&a(N,"{{LT}}","<")},g=function D(u,e,F,t){var C,i,E=r(u.childNodes),s=E.length,o=l(e);if(3!==u.nodeType||s>1){for(e.absolute=!1,C=0;C<s;C++)(i=E[C])._next=i._isFirst=i._parent=i._wordEnd=null,(3!==i.nodeType||/\S+/.test(i.nodeValue))&&(o&&3!==i.nodeType&&"inline"===n(i).display&&(i.style.display="inline-block",i.style.position="relative"),i._isSplit=!0,D(i,e,F,t));return e.absolute=o,void(u._isSplit=!0)}c(u,e,F,t)},x=function(){function D(D,u){t||(e=document,F=window,t=1),this.elements=r(D),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=u||{},this.split(u)}var u=D.prototype;return u.split=function(D){this.isSplit&&this.revert(),this.vars=D=D||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var u,e,F,t=this.elements.length,C=D.tag?D.tag:D.span?"span":"div",i=d(D.wordsClass,C),n=d(D.charsClass,C);--t>-1;)F=this.elements[t],this._originals[t]=F.innerHTML,u=F.clientHeight,e=F.clientWidth,g(F,D,i,n),A(F,D,this.chars,this.words,this.lines,e,u);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},u.revert=function(){var D=this._originals;if(!D)throw"revert() call wasn't scoped properly.";return this.elements.forEach((function(u,e){return u.innerHTML=D[e]})),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},D.create=function(u,e){return new D(u,e)},D}();x.version="3.7.1",exports.SplitText=x,exports.default=x,Object.defineProperty(exports,"__esModule",{value:!0})}));