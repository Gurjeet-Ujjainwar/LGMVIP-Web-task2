(this["webpackJsonpreact-task2"]=this["webpackJsonpreact-task2"]||[]).push([[0],{24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var A=n(2),c=n.n(A),r=n(17),s=n.n(r),a=(n(24),n(7)),i=n.n(a),o=n(18),j=n(5),u=(n(8),n(19)),l=n.n(u),d=n.p+"static/media/loading.18011e4e.gif",b=n(0),x=function(){return Object(b.jsx)(A.Fragment,{children:Object(b.jsx)("img",{src:d,alt:"loading..."})})},v={display:"grid",gridGap:"2rem",gridTemplateColumns:"repeat(2,1fr)",marginTop:"20px",marginBottom:"20px"},K=function(){var e=Object(A.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(A.useState)(!1),s=Object(j.a)(r,2),a=s[0],u=s[1],d=Object(A.useState)(!1),K=Object(j.a)(d,2),g=K[0],E=K[1],p=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=8;break}return e.next=3,l.a.get("https://reqres.in/api/users?page=1");case 3:return t=e.sent,5e3,e.next=7,new Promise((function(e){return setTimeout(e,5e3)}));case 7:c(t.data.data);case 8:E(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(A.useEffect)((function(){a&&p()}),[g]);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)("img",{className:"logo",src:"data:image/jpeg;base64,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"}),Object(b.jsx)("h1",{style:{color:"white"},children:"Task 2 React App"}),Object(b.jsx)("button",{type:"button",class:"btn btn-outline-info",className:"btn",style:{backgroundColor:"#6ed1ff"},onClick:function(){u(!0),E(!0)},children:"Get Users"})]}),Object(b.jsx)("body",{children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{className:"hel",children:["Deltails of Users Below ",Object(b.jsx)("i",{class:"far fa-hand-point-down"})]}),Object(b.jsx)("hr",{style:{width:"2px"}}),g?Object(b.jsx)(x,{}):null,Object(b.jsx)("div",{className:"container",style:v,children:g?null:n.map((function(e){return g?x:Object(b.jsxs)("div",{className:"displaybox",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"avatar",src:e.avatar}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h4",{children:e.first_name}),Object(b.jsx)("h4",{children:e.last_name}),Object(b.jsx)("h4",{children:e.email})]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"userbtn",children:"Get to know more"})]})}))})]})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,A=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),A(e),c(e),r(e),s(e)}))};document.getElementById("root");s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(K,{})}),document.getElementById("root")),g()},8:function(e,t,n){}},[[45,1,2]]]);
//# sourceMappingURL=main.9d6385da.chunk.js.map