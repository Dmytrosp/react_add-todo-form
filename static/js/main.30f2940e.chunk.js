(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(6),c=a(2),s=a(1),o=(a(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],l=a(8),u=a.n(l),m=a(0),j=function(e){var t=e.user,a=t.email,n=t.name;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},b=function(e){var t=e.todo,a=t.id,n=t.title,i=t.userId,r=t.completed,c=o.find((function(e){return e.id===i}));return Object(m.jsxs)("article",{"data-id":a,className:u()("TodoInfo",{"TodoInfo--completed":r}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:n}),c&&Object(m.jsx)(j,{user:c})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})},O=function(){var e=Object(s.useState)(d),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(!1),l=Object(c.a)(i,2),u=l[0],j=l[1],b=Object(s.useState)(!1),O=Object(c.a)(b,2),f=O[0],p=O[1],v=Object(s.useState)(!1),x=Object(c.a)(v,2),S=x[0],y=x[1],I=Object(s.useState)(!1),N=Object(c.a)(I,2),g=N[0],C=N[1],_=Object(s.useState)(0),k=Object(c.a)(_,2),D=k[0],w=k[1],T=Object(s.useState)(""),B=Object(c.a)(T,2),L=B[0],P=B[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/todos",method:"POST",children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:L,onChange:function(e){return t=e.target.value,g&&p(!1),void P(t);var t}}),f&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("select",{"data-cy":"userSelect",required:!0,value:D,name:"userId",onChange:function(e){return t=+e.target.value,S&&j(!1),void w(t);var t},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),o.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),u&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",onClick:function(e){e.preventDefault(),y(!0),C(!0);var t=!1;if(D?j(!1):(j(!0),t=!0),L.length?p(!1):(p(!0),t=!0),!t){var i={id:Object(r.a)(a).sort((function(e,t){return t.id-e.id}))[0].id+1,title:L,completed:!1,userId:D};n((function(e){return[].concat(Object(r.a)(e),[i])})),w(0),P(""),y(!1),C(!1)}},children:"Add"})]}),Object(m.jsx)(h,{todos:a})]})};i.a.render(Object(m.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.30f2940e.chunk.js.map