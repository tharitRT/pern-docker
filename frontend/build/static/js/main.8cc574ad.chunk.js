(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r,c=n(2),a=n.n(c),s=n(5),u=n.n(s),o=(n(13),n(0)),i=n.n(o),p=n(3),f=n(8),l=n.p+"static/media/logo.6ce24c58.svg",h=(n(15),n(6)),j=n(7);!function(e){e[e.OK=200]="OK"}(r||(r={}));var b=function(){var e=Object(p.a)(i.a.mark((function e(t,n){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return r=e.sent,e.next=5,r.json();case 5:if(c=e.sent,-1!==n.indexOf(r.status)){e.next=8;break}throw new Error(c.message);case 8:return e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){function e(){Object(h.a)(this,e)}return Object(j.a)(e,[{key:"getGreetingMessage",value:function(){var e=Object(p.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b("http://localhost:3001/",[r.OK]);case 3:return t=e.sent,e.abrupt("return",t.status);case 7:return e.prev=7,e.t0=e.catch(0),console.log("api err:".concat(e.t0)),e.abrupt("return","err");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),g=n(1);var O=function(){var e=new d,t=Object(c.useState)("Click Me!"),n=Object(f.a)(t,2),r=n[0],a=n[1],s=function(){var t=Object(p.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.getGreetingMessage().then((function(e){a(e)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsx)("img",{src:l,className:"App-logo",alt:"logo"}),Object(g.jsxs)("p",{children:["Edit ",Object(g.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(g.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:r})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};u.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(O,{})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.8cc574ad.chunk.js.map