(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,function(e,a,t){e.exports={someClass:"Affairs_someClass__l4fwN",todo:"Affairs_todo__3tWLv",affairs:"Affairs_affairs__HryGq",affair:"Affairs_affair__179X1",affairName:"Affairs_affairName__36syi",affairPriorityWrapper:"Affairs_affairPriorityWrapper__3ohrb",priority:"Affairs_priority__3sWkT",btn:"Affairs_btn__2fsK5",controlPanel:"Affairs_controlPanel__-KI7L"}},,function(e,a,t){e.exports={message:"Message_message__8WR15",MsgCloud:"Message_MsgCloud__2iVXX",Message:"Message_Message__28P02",avatar:"Message_avatar__3FT3j"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__uGflL",body:"Greeting_body__1uV80",greeting:"Greeting_greeting__21ydZ",wrapper:"Greeting_wrapper__3Dbfg",counter:"Greeting_counter__2pKsv",error:"Greeting_error__1uvQ8",btn:"Greeting_btn__1zEPl"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S",formGroup:"SuperInputText_formGroup__2ZGsZ",formField:"SuperInputText_formField__2v_EU",formLabel:"SuperInputText_formLabel__36rR_",formFieldError:"SuperInputText_formFieldError__2I0O4"}},,,function(e,a,t){e.exports={bodyBlock:"HW4_bodyBlock__tCzvY",blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",checkbox:"HW4_checkbox__2jLC6"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",check:"SuperCheckbox_check__2kWCJ",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},function(e,a,t){e.exports={App:"App_App__1Sc4o",container:"App_container__3ntu_"}},function(e,a,t){e.exports={red:"SuperButton_red__1kaz_",btn:"SuperButton_btn__3MgTu"}},,,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(14),l=t.n(c),o=(t(21),t(11)),s=t.n(o),i=t(3),m=t.n(i);var u=function(e){return n.a.createElement("div",{className:m.a.Message},n.a.createElement("img",{className:m.a.avatar,src:e.avatar,alt:"avatar"}),n.a.createElement("div",{className:m.a.MsgCloud},n.a.createElement("h3",null,e.name),n.a.createElement("p",null,e.message),n.a.createElement("time",null,e.time)))};var _=function(e){return n.a.createElement("div",{className:m.a.Message},n.a.createElement("img",{className:m.a.avatar,src:e.avatar,alt:"avatar"}),n.a.createElement("div",{className:m.a.MsgCloud},n.a.createElement("h3",null,e.name),n.a.createElement("p",null,e.message),n.a.createElement("time",null,e.time)))},f="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0149-CUSA09988_00-AV00000000000004/1553541605000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000",p="Morty",d="What are you talking about?",h="22:00",E="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPsV0Gjy9q6uTSI_pO3o7SivkvMnNFmZj5ow&usqp=CAU",g="Rick",b="I turned myself into a pickle. I'm Pickle Riiiiick!",v="22:12";var k=function(){return n.a.createElement("div",{className:m.a.message},n.a.createElement("hr",null),"homeworks 1",n.a.createElement(u,{avatar:f,name:p,message:d,time:h}),n.a.createElement("hr",null),n.a.createElement(_,{avatar:E,name:g,message:b,time:v}),n.a.createElement("hr",null))},N=t(2),C=t(1),y=t.n(C),x=t(5),w=t(12),S=t.n(w),j=function(e){var a=e.red,t=e.className,r=Object(x.a)(e,["red","className"]),c="".concat(t," ").concat(a?S.a.red:S.a.btn);return n.a.createElement("button",Object.assign({className:c},r))};var A=function(e){return n.a.createElement("div",null,n.a.createElement("li",{className:y.a.affair},n.a.createElement("div",{className:y.a.affairPriorityWrapper},n.a.createElement("span",{className:y.a.affairName},e.affair.name,n.a.createElement("sup",{className:y.a.priority},e.affair.priority))),n.a.createElement(j,{className:y.a.btn,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X")))};var O=function(e){var a=e.data.map((function(a){return n.a.createElement(A,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return n.a.createElement("div",{className:y.a.todo},n.a.createElement("ul",{className:y.a.affairs},a),n.a.createElement("div",{className:y.a.controlPanel},n.a.createElement(j,{onClick:function(){e.setFilter("all")}},"All"),n.a.createElement(j,{onClick:function(){e.setFilter("high")}},"High"),n.a.createElement(j,{onClick:function(){e.setFilter("middle")}},"Middle"),n.a.createElement(j,{onClick:function(){e.setFilter("low")}},"Low")))},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"Anime",priority:"low"},{_id:3,name:"Games",priority:"low"},{_id:4,name:"Work",priority:"high"},{_id:5,name:"HTML & CSS",priority:"middle"}];var T=function(){var e=Object(r.useState)(I),a=Object(N.a)(e,2),t=a[0],c=a[1],l=Object(r.useState)("all"),o=Object(N.a)(l,2),s=o[0],i=o[1],m=function(e,a){if("all"===a)return e;if("high"===a)return e.filter((function(e){return"high"===e.priority}));if("middle"===a)return e.filter((function(e){return"middle"===e.priority}));if("low"===a)return e.filter((function(e){return"low"===e.priority}));throw new Error("\u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a")}(t,s);return n.a.createElement("div",{className:y.a.body},n.a.createElement("hr",null),"homeworks 2",n.a.createElement(O,{data:m,setFilter:i,deleteAffairCallback:function(e){return c(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),n.a.createElement("hr",null),n.a.createElement("hr",null))},M=t(15),G=t(4),F=t.n(G),P=t(6),W=t.n(P),U=function(e){e.type;var a=e.onChange,t=e.onChangeText,r=e.onKeyPress,c=e.onEnter,l=e.error,o=(e.className,e.spanClassName),s=e.placeholder,i=Object(x.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","placeholder"]),m=("".concat(W.a.error," ").concat(o||""),"".concat(l?W.a.formFieldError:W.a.formField));return n.a.createElement("div",{className:W.a.formGroup},n.a.createElement("input",Object.assign({id:"lineInput",placeholder:"Name",type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),"Enter"===e.key&&c&&c()},className:m},i)),n.a.createElement("label",{className:W.a.formLabel,htmlFor:"lineInput"},s))},H=function(e){var a=e.name,t=e.setNameCallback,r=e.addUser,c=e.error,l=e.totalUsers;return n.a.createElement("div",{className:F.a.greeting},n.a.createElement("span",{className:F.a.counter},l),n.a.createElement("div",{className:F.a.wrapper},n.a.createElement(U,{className:F.a.formField,onKeyPress:function(e){13===e.charCode&&r()},error:c,value:a,onChange:t,placeholder:"Name"}),n.a.createElement(j,{className:F.a.btn,onClick:r},"add")),n.a.createElement("span",{className:F.a.error},c))},L=function(e){var a=e.users,t=e.addUserCallback,c=Object(r.useState)(""),l=Object(N.a)(c,2),o=l[0],s=l[1],i=Object(r.useState)(""),m=Object(N.a)(i,2),u=m[0],_=m[1],f=a.length;return n.a.createElement(H,{name:o,setNameCallback:function(e){var a=e.currentTarget.value;s(a),_(""!==a?"":"Enter your name")},addUser:function(){""!==o?(alert("Hello ".concat(o," !")),t(o)):_("Enter your name"),s("")},error:u,totalUsers:f})},K=t(24);var B=function(){var e=Object(r.useState)([]),a=Object(N.a)(e,2),t=a[0],c=a[1];return n.a.createElement("div",{className:F.a.body},n.a.createElement("hr",null),"homeworks 3",n.a.createElement(L,{users:t,addUserCallback:function(e){var a={_id:Object(K.a)(),name:e};c([a].concat(Object(M.a)(t)))}}),n.a.createElement("hr",null),n.a.createElement("hr",null))},R=t(9),J=t.n(R),X=t(10),Z=t.n(X),q=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),l=Object(x.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(Z.a.checkbox," ").concat(r||"");return n.a.createElement("label",{className:o},n.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)}},l)),n.a.createElement("span",{className:Z.a.check}),c&&n.a.createElement("span",{className:Z.a.spanClassName},c))};var V=function(){var e=Object(r.useState)(""),a=Object(N.a)(e,2),t=a[0],c=a[1],l=t?"":"error",o=function(){l?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(r.useState)(!1),i=Object(N.a)(s,2),m=i[0],u=i[1];return n.a.createElement("div",{className:J.a.bodyBlock},n.a.createElement("hr",null),"homeworks 4",n.a.createElement("div",{className:J.a.column},n.a.createElement(U,{value:t,onChangeText:c,onEnter:o,error:l,placeholder:"Input"}),n.a.createElement(j,{onClick:o},"delete "),n.a.createElement("div",{className:J.a.checkbox},n.a.createElement(q,{checked:m,onChangeChecked:u},"some text "),n.a.createElement(q,{checked:m,onChange:function(e){return u(e.currentTarget.checked)}}))),n.a.createElement("hr",null),n.a.createElement("hr",null))};var z=function(){return n.a.createElement("div",{className:s.a.App},n.a.createElement("div",{className:s.a.container},n.a.createElement("div",null,"react homeworks:"),n.a.createElement(k,null),n.a.createElement(T,null),n.a.createElement(B,null),n.a.createElement(V,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.fe2c3e2c.chunk.js.map