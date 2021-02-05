(this["webpackJsonpgoit-react-hw-08-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-08-hooks-phonebook"]||[]).push([[1],{161:function(t,e,n){t.exports={IconButton:"IconButton_IconButton__3sU0k"}},162:function(t,e,n){t.exports={list:"ContactsList_list__2RiYd",contact:"ContactsList_contact__2MNvd"}},163:function(t,e,n){t.exports={backdrop:"Modal_backdrop__3FAPo",content:"Modal_content__1VIbZ"}},183:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return W}));var r={};n.r(r),n.d(r,"getContacts",(function(){return j})),n.d(r,"getValue",(function(){return b})),n.d(r,"getLoading",(function(){return f})),n.d(r,"getError",(function(){return h})),n.d(r,"getFilteredContact",(function(){return O}));var c=n(152),o=n(2),a=n(0),i=n(159),l=n.n(i),s=(n(160),n(15)),u=n(10),d=n(41),j=function(t){return t.contacts.items},b=function(t){return t.contacts.filter},f=function(t){return t.contacts.loading},h=function(t){return t.contacts.error},O=Object(d.a)([j,b],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),m=n(150),v=n(182),p=n(180),x=Object(p.a)((function(){return{root:{"& .MuiTextField-root":{width:"25ch",display:"flex",flexDirection:"column",marginBottom:15}}}})),g=function(){var t=Object(a.useState)(""),e=Object(c.a)(t,2),n=e[0],i=e[1],d=Object(a.useState)(""),j=Object(c.a)(d,2),b=j[0],f=j[1],h=x(),O=Object(s.c)(r.getContacts),p=Object(s.b)(),g=function(){if(O.find((function(t){return t.name===n})))return alert("".concat(n," is already in contacts!")),!0};return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),!g()){if(""===n||""===b)return alert("Please fill in the required fields!");p(u.addContact({name:n,number:b})),i(""),f("")}},className:h.root,children:[Object(o.jsxs)("div",{style:{marginBottom:"20px",color:"red"},children:[Object(o.jsx)(v.a,{id:"name",label:"name",value:n,name:"email",onChange:function(t){return i(t.currentTarget.value)},variant:"outlined",color:"secondary"}),Object(o.jsx)(l.a,{country:"ua",value:b,name:"number",placeholder:"4591256",onChange:f})]}),Object(o.jsx)(m.a,{type:"submit",variant:"contained",color:"secondary",children:"Add contact"})]})})},y=n(3),w=n.n(y),C=function(t){var e=t.children;return Object(o.jsx)(o.Fragment,{children:e})};C.protoTypes={children:w.a.node};var k=C,_=n(66),E=function(t){var e=t.title,n=Object(s.c)(r.getValue),c=Object(s.b)();return Object(o.jsx)("div",{style:{marginBottom:"20px"},children:Object(o.jsx)(v.a,{id:"email",label:e,value:n,onChange:function(t){return c(Object(_.a)(t.currentTarget.value))},variant:"outlined",color:"secondary",size:"small"})})};E.protoTypes={title:w.a.string.isRequired};var B=E,F=n(33),I=n(42),L=n(161),M=n.n(L),N=function(t){var e=t.children,n=t.onClick,r=Object(I.a)(t,["children","onClick"]);return Object(o.jsx)("button",Object(F.a)(Object(F.a)({type:"button",className:M.a.IconButton,onClick:n},r),{},{children:e}))};N.defaultProps={onClick:function(){return null},children:null};var P=N;function S(){return(S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function T(t,e){if(null==t)return{};var n,r,c=function(t,e){if(null==t)return{};var n,r,c={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}var R=a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),V=a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"});function z(t,e){var n=t.title,r=t.titleId,c=T(t,["title","titleId"]);return a.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,R,V)}var q=a.forwardRef(z),A=(n.p,n(64)),D=n(162),H=n.n(D),J=function(){var t=Object(s.c)(r.getFilteredContact),e=Object(s.c)(r.getLoading),n=Object(s.c)(r.getError),c=Object(s.b)();return Object(a.useEffect)((function(){return c(u.fetchContacts())}),[c]),Object(o.jsxs)(o.Fragment,{children:[t.length>0&&Object(o.jsx)("ul",{className:H.a.list,children:t.map((function(t){var e=t.id,n=t.name,r=t.number;return Object(o.jsxs)("li",{className:H.a.contact,children:[n,": ",r,Object(o.jsx)(P,{onClick:function(){return c(u.deleteContact(e))},"aria-label":"Delete contact",children:Object(o.jsx)(q,{width:"20",height:"20"})})]},e)}))}),e&&Object(o.jsx)(A.a,{}),Object(o.jsx)("div",{children:n&&Object(o.jsx)("h1",{children:n.message})})]})},U=n(29),Y=n(163),Z=n.n(Y);var G=function(t){var e=t.onClose,n=t.children;return Object(a.useEffect)((function(){var t=function(t){"Escape"===t.code&&e()};return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}}),[e]),Object(U.createPortal)(Object(o.jsx)("div",{className:Z.a.backdrop,onClick:function(t){t.target===t.currentTarget&&e()},children:Object(o.jsx)("div",{className:Z.a.content,children:n})}),document.querySelector("#modal-root"))},K={display:"flex",flexFlow:"column",alignItems:"center",marginBottom:20},Q={paddingLeft:"10px",paddingRight:"10px",display:"flex",justifyContent:"space-between"};function W(t){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),r=n[0],i=n[1],l=function(){i((function(t){return!t}))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{style:K,children:[Object(o.jsxs)("div",{style:Q,children:[Object(o.jsx)("h1",{style:{marginRight:"20px"},children:"My Contacts"}),Object(o.jsx)("div",{style:{marginTop:"20px"},children:Object(o.jsx)(m.a,{onClick:l,"aria-label":"Open Modal",variant:"contained",color:"secondary",children:"Add contact"})})]}),r&&Object(o.jsx)(G,{onClose:l,children:Object(o.jsx)(g,{})}),Object(o.jsxs)(k,{children:[Object(o.jsx)(B,{title:"Find contacts by name"}),Object(o.jsx)(J,{})]})]})})}}}]);
//# sourceMappingURL=contacts-view.b998ae79.chunk.js.map