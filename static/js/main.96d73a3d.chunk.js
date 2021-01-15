(this["webpackJsonpgoit-react-hw-06-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-06-hooks-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={textInput:"Filter_textInput__34RNH",formInput:"Filter_formInput__dCodg"}},19:function(t,e,n){t.exports={list:"ContactsList_list__2RiYd",contact:"ContactsList_contact__2MNvd"}},24:function(t,e,n){t.exports={title:"Contacts_title__34Twh"}},25:function(t,e,n){t.exports={IconButton:"IconButton_IconButton__3sU0k"}},41:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),a=n.n(r),o=n(10),i=n.n(o),l=n(3),s=n(22),u=n(20),d=n(23),b=n.n(d),j=(n(38),n(4)),f=n(43),h={addContact:Object(j.b)("contacts/add",(function(t,e){return{payload:{id:Object(f.a)(),name:t,number:e}}})),deleteContact:Object(j.b)("contacts/delete"),changeFilter:Object(j.b)("contacts/changeFilter")},O=function(t){return t.contacts.items},p=function(t){return t.contacts.filter},m=function(t){var e=O(t),n=p(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},x=n(6),v=n.n(x),_=function(t){var e=t.title,n=Object(r.useState)(""),a=Object(u.a)(n,2),o=a[0],i=a[1],s=Object(r.useState)(""),d=Object(u.a)(s,2),j=d[0],f=d[1],p=Object(l.d)(O),m=Object(l.c)(),x=function(){if(p.find((function(t){return t.name===o})))return alert("".concat(o," is already in contacts!")),!0};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:v.a.title,children:e}),Object(c.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),!x()){if(""===o||""===j)return alert("Please fill in the required fields!");m(h.addContact(o,j)),i(""),f("")}},className:v.a.container,children:[Object(c.jsxs)("label",{className:v.a.textInput,children:["Name",Object(c.jsx)("input",{type:"text",value:o,name:"name",placeholder:"Rosie Simpson",onChange:function(t){return i(t.currentTarget.value)},className:v.a.formInput})]}),Object(c.jsxs)("label",{className:v.a.textInput,children:["Number",Object(c.jsx)(b.a,{country:"ua",value:j,name:"number",placeholder:"4591256",onChange:f,className:v.a.formInput_phone})]}),Object(c.jsx)("button",{type:"submit",className:v.a.addButton,children:"Add contact"})]})]})},g=n(7),y=n.n(g),C=n(24),k=n.n(C),I=function(t){var e=t.title,n=t.children;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:k.a.title,children:e}),n]})};I.protoTypes={title:y.a.string.isRequired,children:y.a.node};var w=I,N=n(17),P=n.n(N),B=function(t){var e=t.title,n=Object(l.d)(p),r=Object(l.c)();return Object(c.jsx)("div",{children:Object(c.jsxs)("label",{className:P.a.textInput,children:[e,Object(c.jsx)("input",{type:"text",value:n,onChange:function(t){return r(h.changeFilter(t.currentTarget.value))},className:P.a.formInput})]})})};B.protoTypes={title:y.a.string.isRequired};var F=B,S=n(18),E=n(27),R=n(25),T=n.n(R),z=function(t){var e=t.children,n=t.onClick,r=Object(E.a)(t,["children","onClick"]);return Object(c.jsx)("button",Object(S.a)(Object(S.a)({type:"button",className:T.a.IconButton,onClick:n},r),{},{children:e}))};z.defaultProps={onClick:function(){return null},children:null};var H=z;function M(){return(M=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t}).apply(this,arguments)}function J(t,e){if(null==t)return{};var n,c,r=function(t,e){if(null==t)return{};var n,c,r={},a=Object.keys(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var L=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),q=r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"});function A(t,e){var n=t.title,c=t.titleId,a=J(t,["title","titleId"]);return r.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,L,q)}var D,Y=r.forwardRef(A),V=(n.p,n(19)),K=n.n(V),U=function(){var t=Object(l.d)(m),e=Object(l.c)();return Object(c.jsx)("ul",{className:K.a.list,children:t.map((function(t){var n=t.id,r=t.name,a=t.number;return Object(c.jsxs)("li",{className:K.a.contact,children:[r,": ",a,Object(c.jsx)(H,{onClick:function(){return e(h.deleteContact(n))},"aria-label":"Delete contact",children:Object(c.jsx)(Y,{width:"30",height:"30"})})]},n)}))})},G=Object(l.b)()((function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(_,{title:"Pnonebook"}),Object(c.jsxs)(w,{title:"Contacts",children:[Object(c.jsx)(F,{title:"Find contacts by name"}),Object(c.jsx)(U,{})]})]})})),Q=n(12),W=n(5),X=n(26),Z=n.n(X),$=n(8),tt=n(2),et=Object(j.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(D={},Object($.a)(D,h.addContact,(function(t,e){var n=e.payload;return[].concat(Object(Q.a)(t),[n])})),Object($.a)(D,h.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),D)),nt=Object(j.c)("",Object($.a)({},h.changeFilter,(function(t,e){return e.payload}))),ct=Object(tt.c)({items:et,filter:nt}),rt=Object(Q.a)(Object(j.d)({serializableCheck:{ignoredActions:[W.a,W.f,W.b,W.c,W.d,W.e]}})),at={key:"contacts",storage:Z.a,blacklist:["filter"]},ot=Object(j.a)({reducer:{contacts:Object(W.g)(at,ct)},middleware:rt,devTools:!1}),it=Object(W.h)(ot);i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(l.a,{store:ot,children:Object(c.jsx)(s.a,{loading:null,persistor:it,children:Object(c.jsx)(G,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={title:"Phonebook_title__OJYud",container:"Phonebook_container__Yb216",textInput:"Phonebook_textInput__39_1s",formInput:"Phonebook_formInput__5nfaD",addButton:"Phonebook_addButton__31JzT"}}},[[41,1,2]]]);
//# sourceMappingURL=main.96d73a3d.chunk.js.map