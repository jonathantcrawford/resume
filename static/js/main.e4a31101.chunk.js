(this["webpackJsonpresume-react"]=this["webpackJsonpresume-react"]||[]).push([[1],{85:function(e,n,t){},97:function(e,n,t){"use strict";t.r(n);var r=t(12),c=t(4),i=t.n(c),a=t(74),o=t.n(a),s=(t(85),t(86),t(21)),u=function(e){var n=e.themeSchematic,a=n.type,o=n.configs,u=function(){switch(a){case"standard":return i.a.createElement(i.a.lazy((function(){return Promise.all([Promise.all([t.e(0),t.e(4)]).then(t.bind(null,141)),new Promise((function(e){return setTimeout(e,1e3)}))]).then((function(e){return Object(s.a)(e,1)[0]}))})),{configs:o});case"traditional":return i.a.createElement(i.a.lazy((function(){return Promise.all([Promise.all([t.e(0),t.e(5)]).then(t.bind(null,142)),new Promise((function(e){return setTimeout(e,1e3)}))]).then((function(e){return Object(s.a)(e,1)[0]}))})),{configs:o});default:return Object(r.jsx)("div",{children:"theme type does not exist"})}}();return Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)("div",{children:"Building Theme"}),children:u})},l=function(){var e={type:"traditional",configs:{}},n={type:"standard",configs:{}},t={type:"invalid",configs:{}},i=Object(c.useState)(n),a=Object(s.a)(i,2),o=a[0],l=a[1],d=Object(r.jsxs)("div",{style:{position:"fixed",top:"0",right:"0"},children:[Object(r.jsx)("button",{onClick:function(){return l(n)},children:"standard"}),Object(r.jsx)("button",{onClick:function(){return l(e)},children:"traditional"}),Object(r.jsx)("button",{onClick:function(){return l(t)},children:"invalid theme"})]});return Object(r.jsxs)(r.Fragment,{children:[d,Object(r.jsx)(u,{themeSchematic:o})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=t(9),h=t(3),f=t.n(h),b=t(6),m=t(56),p=t(33),j="resume-realm-nxcpz",v="https://realm.mongodb.com/api/client/v2.0/app/".concat(j,"/graphql"),x=new m.a({id:j}),O=function(){var e=Object(b.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.currentUser){e.next=5;break}return e.next=3,x.logIn(m.b.anonymous());case 3:e.next=7;break;case 5:return e.next=7,x.currentUser.refreshCustomData();case 7:return e.abrupt("return",null===(n=x.currentUser)||void 0===n?void 0:n.accessToken);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=new p.ApolloClient({link:new p.HttpLink({uri:v,fetch:function(e){function n(n,t){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}(function(){var e=Object(b.a)(f.a.mark((function e(n,t){var r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.headers||(t.headers={}),e.next=3,O();case 3:return r=e.sent,c=Object(d.a)(Object(d.a)({},t),{},{headers:Object(d.a)(Object(d.a)({},t.headers),{},{Authorization:"Bearer ".concat(r)})}),e.abrupt("return",fetch(n,c));case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())}),cache:new p.InMemoryCache}),w=function(e){var n=e.children;return console.log("building db provider"),Object(r.jsx)(p.ApolloProvider,{client:g,children:n})};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(w,{children:Object(r.jsx)(l,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[97,2,3]]]);
//# sourceMappingURL=main.e4a31101.chunk.js.map