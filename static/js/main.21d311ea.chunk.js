(this["webpackJsonpsorting-visualizer"]=this["webpackJsonpsorting-visualizer"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),o=n(5),u=n.n(o),s=n(8),l=n(1);n(15),n(16);var h=function(e){var t=e.currentAlgorithm;return r.a.createElement("button",{className:(t===e.text?"sidebarButton sidebarButtonActive ":"sidebarButton ")+e.className,onClick:function(n){""===t&&e.action(n.target.value)},value:e.text},e.text)};n(17),n(18);var m=function(e){var t=e.value;return r.a.createElement("input",{type:"range",min:"5",max:"100",className:"slider slider"+e.sliderType,id:"myRange",onChange:""===e.currentAlgorithm?function(t){e.onChange(t.target.value)}:null,onMouseUp:""===e.currentAlgorithm?function(t){e.onMouseUp(t.target.value)}:null,value:t})};var b=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],i=n[1];return r.a.createElement("div",{className:"dropdown"},r.a.createElement(h,{className:(c?"sidebarButton sidebarButtonActive ":"sidebarButton ")+e.className,text:e.text,action:function(){var e="";!0===c?e=!1:!1===c&&(e=!0),i(e)},currentAlgorithm:""}),r.a.createElement("ul",{className:"dropdownList",style:c?{background:"visible"}:{display:"none"}},r.a.createElement("div",{className:"popTagTriangle"}),r.a.createElement("li",{className:"dropDownItem"},"Speed"===e.text&&r.a.createElement("label",{className:"right"},"Fast"),r.a.createElement(m,{value:e.sliderValue,currentAlgorithm:e.currentAlgorithm,onChange:e.handleSliderChange,onMouseUp:e.handleSliderOnMouseUp,sliderType:e.text}),"Speed"===e.text&&r.a.createElement("label",{className:"right"},"Slow")),e.displayValueInOutput&&r.a.createElement("div",{className:"sliderOutput"},e.sliderValue)))};var g=function(e){var t=Object(a.useState)(50),n=Object(l.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)(10),u=Object(l.a)(o,2),s=u[0],m=u[1];function g(t){e.onSortButtonPress(t)}function f(){e.onReset(c)}return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null," Sorting Algorithm Visualizer ")," "),r.a.createElement("label",{className:"sidebarSectionTitle"},"ALGORITHMS"),r.a.createElement(h,{text:"Insertion",action:g,currentAlgorithm:e.currentAlgorithm}),r.a.createElement(h,{text:"Bubble",action:g,currentAlgorithm:e.currentAlgorithm}),r.a.createElement(h,{text:"Quick",action:g,currentAlgorithm:e.currentAlgorithm}),r.a.createElement(h,{text:"Merge",action:g,currentAlgorithm:e.currentAlgorithm,className:"btn-last"}),r.a.createElement("label",{className:"sidebarSectionTitle"},"COLLECTION"),r.a.createElement(h,{text:"Reset",action:f,currentAlgorithm:e.currentAlgorithm}),r.a.createElement(b,{text:"Speed",action:f,handleSliderChange:function(e){m(e)},handleSliderOnMouseUp:function(t){e.onSpeedChange(t)},currentAlgorithm:e.currentAlgorithm,sliderValue:s,displayValueInOutput:!1}),r.a.createElement(b,{text:"Size",action:f,handleSliderChange:function(e){i(e)},handleSliderOnMouseUp:function(t){e.onReset(t)},currentAlgorithm:e.currentAlgorithm,sliderValue:c,displayValueInOutput:!0}))};n(19),n(20);var f=function(e){var t={marginLeft:e.margin,width:e.width,height:e.height};return r.a.createElement("div",{className:"bar slowTransition",style:t})};var d=function(e){var t=e.bars,n=Object(a.useRef)(),c=Object(a.useState)({marginSpace:0,barWidth:0}),i=Object(l.a)(c,2),o=i[0],u=i[1];return Object(a.useLayoutEffect)((function(){if(n.current){var e=n.current.offsetWidth,t=e/100*20;u({marginSpace:t,barWidth:e-t})}}),[]),r.a.createElement("div",{ref:n,className:"visualizer"},e.bars.map((function(e,n){return r.a.createElement(f,{key:n,height:e,width:o.barWidth,margin:o.marginSpace/t.length})})))},p=n(2),v=[];function x(e){v.length=0;var t=Object(p.a)(e);return function e(t,n,a){if(n<a){var r=function(e,t,n){for(var a=n,r=t-1,c=t;c<n;c++)e[c]<e[a]&&(r++,v.push([a,c,e[r]]),v.push([a,r,e[c]]),k(e,r,c));return v.push([a,r+1,e[a]]),v.push([a,a,e[r+1]]),k(e,r+1,n),a=r+1}(t,n,a),c=r+1;e(t,n,r-1),e(t,c,a)}}(t,0,t.length-1),{timeLine:v,bars:t}}function k(e,t,n){var a=e[t];e[t]=e[n],e[n]=a}var E=[];function O(e){E.length=0;for(var t=Object(p.a)(e),n=0;n<t.length;n++)for(var a=0;a<t.length;a++)t[a]>=t[a+1]&&(E.push([a,a+1,t[a],t[a+1]]),S(t,a,a+1));return{timeLine:E,bars:t}}function S(e,t,n){var a=e[t];e[t]=e[n],e[n]=a}var y=[];function j(e){y.length=0;var t=Object(p.a)(e);return function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.length-1;if(n<a){var r=Math.floor((n+a)/2);e(t,n,r),e(t,r+1,a),A(t,n,a)}}(t),{timeLine:y,bars:t}}function A(e,t,n){for(var a=[],r=t,c=t,i=Math.floor((t+n)/2),o=i+1;r<=i&&o<=n;)e[r]<=e[o]?(y.push([c,r,e[r]]),a[c++]=e[r++]):(y.push([c,o,e[o]]),a[c++]=e[o++]);for(;r<=i;)y.push([c,r,e[r]]),a[c++]=e[r++];for(;o<=n;)y.push([c,o,e[o]]),a[c++]=e[o++];for(var u=t;u<c;u++)e[u]=a[u]}var N=[];function w(e){N.length=0;for(var t=Object(p.a)(e),n=1;n<t.length;n++){for(var a=t[n],r=n-1;r>=0&&t[r]>a;)t[r+1]=t[r],N.push([r+1,t[r]]),r-=1;t[r+1]=a,N.push([r+1,a])}return{timeLine:N,bars:t}}var B=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),h=o[0],m=o[1],b=Object(a.useState)(10),f=Object(l.a)(b,2),p=f[0],v=f[1];function k(e){for(var t=document.getElementsByClassName("bar"),n=0;n<t.length;n++)t[n].className=e}function E(e){k("bar slowTransition");for(var t=[],n=0;n<e;n++){var a=Math.floor(700*Math.random());t.push(a)}c(t)}function S(e){return new Promise((function(t){return setTimeout(t,e)}))}function y(){return(y=Object(s.a)(u.a.mark((function e(t){var a,r,i,o,s,h,b,g,f,d,v,E,y,A,N,B,T,C,L,M,I,V,R,U,W,z,P,J,Q,D,F,G,H,$;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k("bar fastTransition"),m(t),a=[],r=[],i=document.getElementsByClassName("bar"),e.t0=t,e.next="Merge"===e.t0?8:"Bubble"===e.t0?29:"Quick"===e.t0?51:"Insertion"===e.t0?70:88;break;case 8:o=j(n),a=o.timeLine,r=o.bars,s=0;case 12:if(!(s<a.length)){e.next=28;break}return h=Object(l.a)(a[s],3),b=h[0],g=h[1],f=h[2],d=i[b].style,v=i[g].style,d.height="".concat(f,"px"),d.background="#ff2e63",v.background="#ff2e63",e.next=21,S(p);case 21:return d.background="",v.background="",e.next=25,S(p);case 25:s++,e.next=12;break;case 28:return e.abrupt("break",90);case 29:E=O(n),a=E.timeLine,r=E.bars,y=0;case 33:if(!(y<a.length)){e.next=50;break}return A=Object(l.a)(a[y],4),N=A[0],B=A[1],T=A[2],C=A[3],L=i[N].style,M=i[B].style,L.height="".concat(C,"px"),M.height="".concat(T,"px"),L.background="#ff2e63",M.background="#ff2e63",e.next=43,S(p);case 43:return L.background="",M.background="",e.next=47,S(p);case 47:y++,e.next=33;break;case 50:return e.abrupt("break",90);case 51:I=x(n),a=I.timeLine,r=I.bars,V=0;case 55:if(!(V<a.length)){e.next=69;break}return R=Object(l.a)(a[V],3),U=R[0],W=R[1],z=R[2],P=i[W].style,J=i[U].style,P.height="".concat(z,"px"),P.background="##ff2e63",J.background="#1b1b2f",e.next=64,S(p);case 64:P.background="",J.background="";case 66:V++,e.next=55;break;case 69:return e.abrupt("break",90);case 70:Q=w(n),a=Q.timeLine,r=Q.bars,D=0;case 74:if(!(D<a.length)){e.next=87;break}return F=Object(l.a)(a[D],2),G=F[0],H=F[1],($=i[G].style).height="".concat(H,"px"),$.background="#ff2e63",e.next=81,S(p);case 81:return $.background="",e.next=84,S(p);case 84:D++,e.next=74;break;case 87:return e.abrupt("break",90);case 88:return alert("There has been an error please refresh"),e.abrupt("break",90);case 90:k("bar slowTransition colouredIn"),m(""),c(r);case 93:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){E(50)}),[]),Object(a.useEffect)((function(){for(var e=document.getElementsByClassName("bar"),t=function(t){e[t].style.height="350px",setTimeout((function(){e[t].style.height="".concat(n[t],"px")}),.1)},a=0;a<e.length;a++)t(a)}),[n]),r.a.createElement("div",null,r.a.createElement(g,{onReset:E,onSortButtonPress:function(e){return y.apply(this,arguments)},currentAlgorithm:h,onSpeedChange:v,algorithmSpeed:p}),r.a.createElement(d,{bars:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(21);i.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.21d311ea.chunk.js.map