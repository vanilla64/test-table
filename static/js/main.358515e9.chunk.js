(this["webpackJsonptest-task-aero-trade"]=this["webpackJsonptest-task-aero-trade"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var i=a(2),c=a.n(i),l=a(11),s=a.n(l),n=(a(19),a(8)),r=a(3),d=(a(20),a.p+"static/media/s13-pic.6c852926.jpg"),o=a.p+"static/media/car-pic.d18fd59d.jpg",j=a.p+"static/media/s15.4e26aa40.jpg",b=a.p+"static/media/r34.29eff04f.gif",h=a.p+"static/media/180sx.6972186e.jpg",m={email:{visible:!0,title:"Email"},phone:{visible:!0,title:"Phone"},gender:{visible:!0,title:"Gender"},ipAddress:{visible:!0,title:"IP Address"},dollars:{visible:!0,title:"Dollars"},euro:{visible:!0,title:"Euro"},jpy:{visible:!0,title:"JPY"},carImage:{visible:!0,title:"Car Image",src:[d,o,j,b,h]},carModel:{visible:!0,title:"Car Model"},carYear:{visible:!0,title:"Car Year"},carVin:{visible:!0,title:"Car VIN"}},u=a(0);var O=function(e){var t=e.user,a=e.index,i=e.type,c=e.columnsRender,l=t.id,s=t.firstName,n=t.lastName,r=t.email,d=t.phone,o=t.gender,j=t.ipAddress,b=t.dollars,h=t.euro,m=t.jpy,O=t.carModel,p=t.carYear,x=t.carVin,f={tableRow:a%2===0?"table__row table__row_type_odd":"table__row table__row_type_even"};return Object(u.jsx)("tr",{className:f.tableRow,children:function(e){switch(e){case"fixed":return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("td",{children:a+1}),Object(u.jsx)("td",{children:l}),Object(u.jsx)("td",{children:s}),Object(u.jsx)("td",{children:n})]});case"scroll":return Object(u.jsxs)(u.Fragment,{children:[c.email.visible&&Object(u.jsx)("td",{className:"table__cell_type_email",children:r}),c.phone.visible&&Object(u.jsx)("td",{className:"table__cell_type_phone",children:d}),c.gender.visible&&Object(u.jsx)("td",{className:"table__cell_type_gender",children:o}),c.ipAddress.visible&&Object(u.jsx)("td",{className:"table__cell_type_ip",children:j}),c.dollars.visible&&Object(u.jsx)("td",{className:"table__cell_type_price",children:b}),c.euro.visible&&Object(u.jsx)("td",{className:"table__cell_type_price",children:h}),c.jpy.visible&&Object(u.jsx)("td",{className:"table__cell_type_price",children:m}),c.carImage.visible&&Object(u.jsx)("td",{className:"table__cell_type_img",children:Object(u.jsx)("img",{className:"table__img",src:c.carImage.src[Math.floor(5*Math.random())],alt:"Car"})}),c.carModel.visible&&Object(u.jsx)("td",{children:O}),c.carYear.visible&&Object(u.jsx)("td",{children:p}),c.carVin.visible&&Object(u.jsx)("td",{children:x})]})}}(i)})},p=a(4);a(22);var x=function(e){var t=e.tableHeaders,a=e.columnsRender,c=e.setColumnsRender,l=Object(i.useState)(a),s=Object(r.a)(l,2),n=s[0],d=s[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(n)},onChange:function(e){var t=e.target,a=t.name,i=t.checked;d((function(e){return Object(p.a)(Object(p.a)({},e),e[a].visible=i)}))},className:"row",children:[Object(u.jsx)("button",{className:"dropdown-trigger col s4 btn deep-purple lighten-2","data-target":"dropdown1",children:"Select columns"}),Object(u.jsx)("button",{type:"submit",className:"col s4 btn green lighten-2",children:"Submit"}),Object(u.jsx)("ul",{id:"dropdown1",className:"dropdown-content",children:t.map((function(e,i){return Object(u.jsx)("li",{className:"dropdown-content__list-item",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",name:t[i],className:"filled-in",defaultChecked:a[e].visible}),Object(u.jsx)("span",{className:"dropdown-content__text",children:a[e].title})]})},i)}))})]})};var f=function(){return Object(u.jsx)("div",{className:"preloader-wrapper active",children:Object(u.jsxs)("div",{className:"spinner-layer spinner-red-only",children:[Object(u.jsx)("div",{className:"circle-clipper left",children:Object(u.jsx)("div",{className:"circle"})}),Object(u.jsx)("div",{className:"gap-patch",children:Object(u.jsx)("div",{className:"circle"})}),Object(u.jsx)("div",{className:"circle-clipper right",children:Object(u.jsx)("div",{className:"circle"})})]})})};var v=function(e){var t=e.data,a=e.usersToRender,c=e.setUsersToRender,l=e.columnsRender,s=e.setColumnsRender,n=e.isTableLoading,d=e.setIsTableLoading,o=e.isTableScrollActive,j=Object(i.useState)(!1),b=Object(r.a)(j,2),h=b[0],m=b[1],p=Object.keys(l),v=function(e,t){return e.map((function(e){return e[t]}))},g=function(e,t){var a=0;return v(e,t).forEach((function(e){var t=parseFloat(e.replace(e.charAt(0),""));a+=t})),a},N=function(e,t){var a={male:0,female:0};return v(e,t).forEach((function(e){switch(e.toLowerCase()){case"male":a.male++;break;case"female":a.female++}})),a};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x,{columnsRender:l,setColumnsRender:s,tableHeaders:p}),Object(u.jsxs)("div",{onScroll:o?function(e){var i=e.target,l=e.target.querySelector("table");if(!(t.length<=a.length)&&!n&&i.scrollTop+i.offsetHeight>=l.offsetHeight){var s=t.slice(a.length,a.length+100),r=a.concat(s);return d(!0),void setTimeout((function(){c(r),d(!1)}),1500)}}:null,className:"row table-container",children:[Object(u.jsxs)("table",{className:"striped table_type_fixed",children:[Object(u.jsx)("thead",{className:"table__header",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"\u2116"}),Object(u.jsxs)("th",{onClick:function(){var e;if(h)return e=a.map((function(e){return e})).reverse(),c(e),void m(!1);e=a.sort((function(e,t){return e.id>t.id?1:e.id<t.id?-1:0})).map((function(e){return e})),c(e),m(!0)},className:"table__cell_type_id",children:["ID ",Object(u.jsx)("i",{className:"material-icons table__icon",children:h?"arrow_drop_up":"arrow_drop_down"})]}),Object(u.jsx)("th",{children:"First Name"}),Object(u.jsx)("th",{children:"Last Name"})]})}),Object(u.jsx)("thead",{className:"table__header",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Total"}),Object(u.jsx)("th",{children:v(a,"id").length}),Object(u.jsx)("th",{children:v(a,"firstName").length}),Object(u.jsx)("th",{children:v(a,"lastName").length})]})}),Object(u.jsx)("tbody",{children:a.map((function(e,t){return Object(u.jsx)(O,{type:"fixed",user:e,index:t},t)}))})]}),Object(u.jsxs)("table",{className:"striped table_type_scroll",children:[Object(u.jsx)("thead",{className:"table__header",children:Object(u.jsxs)("tr",{children:[l.email.visible&&Object(u.jsx)("th",{children:l.email.title}),l.phone.visible&&Object(u.jsx)("th",{children:l.phone.title}),l.gender.visible&&Object(u.jsx)("th",{className:"tooltipped","data-position":"bottom","data-tooltip":"\n                  Male: ".concat(N(a,"gender").male,"\n                  Female: ").concat(N(a,"gender").female,"\n                  "),children:l.gender.title}),l.ipAddress.visible&&Object(u.jsx)("th",{children:l.ipAddress.title}),l.dollars.visible&&Object(u.jsx)("th",{children:l.dollars.title}),l.euro.visible&&Object(u.jsx)("th",{children:l.euro.title}),l.jpy.visible&&Object(u.jsx)("th",{children:l.jpy.title}),l.carImage.visible&&Object(u.jsx)("th",{children:l.carImage.title}),l.carModel.visible&&Object(u.jsx)("th",{children:l.carModel.title}),l.carYear.visible&&Object(u.jsx)("th",{children:l.carYear.title}),l.carVin.visible&&Object(u.jsx)("th",{children:l.carVin.title})]})}),Object(u.jsx)("thead",{className:"table__header",children:Object(u.jsxs)("tr",{children:[l.email.visible&&Object(u.jsx)("th",{children:v(a,"email").length}),l.phone.visible&&Object(u.jsx)("th",{children:v(a,"phone").length}),l.gender.visible&&Object(u.jsx)("th",{children:v(a,"gender").length}),l.ipAddress.visible&&Object(u.jsx)("th",{children:v(a,"ipAddress").length}),l.dollars.visible&&Object(u.jsx)("th",{children:"$"+g(a,"dollars").toFixed(2)}),l.euro.visible&&Object(u.jsx)("th",{children:"\u20ac"+g(a,"euro").toFixed(2)}),l.jpy.visible&&Object(u.jsx)("th",{children:"\xa5"+g(a,"jpy").toFixed(2)}),l.carImage.visible&&Object(u.jsx)("th",{}),l.carModel.visible&&Object(u.jsx)("th",{children:v(a,"carModel").length}),l.carYear.visible&&Object(u.jsx)("th",{children:function(e,t){var a=0,i=v(e,t).map((function(e){return a+=e,e}));return a/i.length}(a,"carYear").toFixed(0)}),l.carVin.visible&&Object(u.jsx)("th",{children:v(a,"carVin").length})]})}),Object(u.jsx)("tbody",{children:a.map((function(e,t){return Object(u.jsx)(O,{type:"scroll",columnsRender:l,user:e,index:t},t)}))})]}),n&&Object(u.jsx)("div",{className:"table-container__preloader",children:Object(u.jsx)(f,{})})]}),t.length<=a.length&&Object(u.jsx)("h5",{children:"No data anymore..."})]})},g=a(12),N=new function e(t){var a=this;Object(g.a)(this,e),this._initialRequest=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},this.getData=function(){return fetch(a._url,{method:"GET"}).then((function(e){return a._initialRequest(e)}))},this._url=t}("https://my.api.mockaroo.com/test.json?key=94d3b3a0"),_=a(6),y=a(14);var w=function(e){var t=Object(i.useState)({id:"",firstName:"",lastName:"",email:"",phone:""}),a=Object(r.a)(t,2),c=a[0],l=a[1],s=Object(i.useState)(!1),n=Object(r.a)(s,2),d=n[0],o=n[1],j=""===c.id||""===c.firstName||""===c.lastName||""===c.email||""===c.phone,b=function(e){var t=e.target,a=t.name,i=t.value;l((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(_.a)({},a,i))}))};return e.isVisible&&Object(u.jsx)("section",{children:Object(u.jsxs)("form",{onChange:b,onSubmit:function(t){t.preventDefault(),e.onSubmit(c),l({id:"",firstName:"",lastName:"",email:"",phone:""})},onReset:function(){l({id:"",firstName:"",lastName:"",email:"",phone:""})},className:"row",children:[Object(u.jsx)("h4",{children:"Add user"}),Object(u.jsxs)("div",{className:"input-field col s2",children:[Object(u.jsx)("input",{onChange:b,value:c.id,name:"id",id:"id",type:"number",className:"validate",required:!0}),Object(u.jsx)("label",{htmlFor:"id",children:"Id"})]}),Object(u.jsxs)("div",{className:"input-field col s2",children:[Object(u.jsx)("input",{onChange:b,value:c.firstName,name:"firstName",id:"first-name",type:"text",className:"validate",required:!0}),Object(u.jsx)("label",{htmlFor:"first-name",children:"First Name"})]}),Object(u.jsxs)("div",{className:"input-field col s2",children:[Object(u.jsx)("input",{onChange:b,value:c.lastName,name:"lastName",id:"last-name",type:"text",className:"validate",required:!0}),Object(u.jsx)("label",{htmlFor:"last-name",children:"Last Name"})]}),Object(u.jsxs)("div",{className:"input-field col s3",children:[Object(u.jsx)("input",{onChange:b,value:c.email,name:"email",id:"email",type:"email",className:"validate",required:!0}),Object(u.jsx)("label",{htmlFor:"email",children:"Email"})]}),Object(u.jsxs)("div",{className:"input-field col s3",children:[Object(u.jsx)(y.a,{id:"phone",onFocus:function(){o(!0)},onBlur:function(e){0===e.target.value.length&&o(!1)},mask:"(000)000-0000",radix:".",value:c.phone,unmask:!1,onAccept:function(e){l((function(t){return Object(p.a)(Object(p.a)({},t),{},{phone:e})}))}}),Object(u.jsx)("label",{className:d?"active":"",htmlFor:"phone",children:"Phone"})]}),Object(u.jsx)("button",{type:"submit",disabled:j,className:"col s4 waves-effect waves-light btn green lighten-2",children:"Add"}),Object(u.jsx)("button",{type:"reset",className:"col s4 waves-effect waves-light btn black-text transparent",children:"Reset"})]})})},F=a(5),S=a.n(F);var C=function(e){var t=e.data,a=e.setDataForRender,c=e.setIsTableScrollActive,l=e.usersToRender,s=Object(i.useState)({}),d=Object(r.a)(s,2),o=d[0],j=d[1],b="col s1 waves-effect waves-light btn green lighten-2",h="col s2 waves-effect waves-light btn black-text transparent",m="input-field col s1",O=function(e){var t=e.target,a=t.name,i=t.value;j((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(_.a)({},a,i))}))};return Object(u.jsxs)("form",{onChange:O,onSubmit:function(e){e.preventDefault(),c(!1);var t={};Object.keys(o).forEach((function(e){""!==o[e]&&(t[e]=o[e])}));var i=Object.keys(t),s=[];if(i.forEach((function(e){l.filter((function(t){return t[e].toString().toLowerCase().includes(o[e].toLowerCase())})).forEach((function(e){return s.push(e)}))})),0===s.length)return S.a.toast({html:"User not found"});var r=s.reduce((function(e,t){return e.includes(t)?e:[].concat(Object(n.a)(e),[t])}),[]);a(r)},onReset:function(){c(!0),a(t.slice(0,100)),j({})},className:"row",children:[Object(u.jsx)("h4",{children:"Filter"}),Object(u.jsxs)("div",{className:m,children:[Object(u.jsx)("input",{onChange:O,value:o.id?o.id:"",name:"id",id:"filterId",type:"number",className:"validate"}),Object(u.jsx)("label",{htmlFor:"filterId",children:"Id"})]}),Object(u.jsxs)("div",{className:"input-field col s2",children:[Object(u.jsx)("input",{onChange:O,value:o.firstName?o.firstName:"",name:"firstName",id:"filterFirst-name",type:"text",className:"validate"}),Object(u.jsx)("label",{htmlFor:"filterFirst-name",children:"First Name"})]}),Object(u.jsxs)("div",{className:"input-field col s2",children:[Object(u.jsx)("input",{onChange:O,value:o.lastName?o.lastName:"",name:"lastName",id:"filterLast-name",type:"text",className:"validate"}),Object(u.jsx)("label",{htmlFor:"filterLast-name",children:"Last Name"})]}),Object(u.jsxs)("div",{className:"input-field col s2",children:[Object(u.jsx)("input",{onChange:O,value:o.email?o.email:"",name:"email",id:"filterEmail",type:"email",className:"validate"}),Object(u.jsx)("label",{htmlFor:"filterEmail",children:"Email"})]}),Object(u.jsxs)("div",{className:"input-field col s2",children:[Object(u.jsx)("input",{onChange:O,value:o.phone?o.phone:"",name:"phone",id:"filterPhone",type:"tel",className:"validate"}),Object(u.jsx)("label",{htmlFor:"filterPhone",children:"Phone"})]}),Object(u.jsx)("button",{type:"submit",className:b,children:"Find"}),Object(u.jsx)("button",{type:"reset",className:h,children:"Show table"})]})},R=a(13),k=a.n(R);var A=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1],l=Object(i.useState)([]),s=Object(r.a)(l,2),d=s[0],o=s[1],j=Object(i.useState)(!1),b=Object(r.a)(j,2),h=b[0],O=b[1],p=Object(i.useState)(!1),x=Object(r.a)(p,2),g=x[0],_=x[1],y=Object(i.useState)(!1),F=Object(r.a)(y,2),R=F[0],A=F[1],T=Object(i.useState)(m),I=Object(r.a)(T,2),L=I[0],E=I[1],M=Object(i.useState)(!0),D=Object(r.a)(M,2),V=D[0],q=D[1],P=document.querySelectorAll(".dropdown-trigger");S.a.Dropdown.init(P,{closeOnClick:!1,constrainWidth:!1});var Y=document.querySelectorAll(".tooltipped");return S.a.Tooltip.init(Y),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Test task for \u0410\u044d\u0440\u043e-\u0422\u0440\u0435\u0439\u0434"}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("button",{onClick:function(){c([]),o([]),O(!0),N.getData().then((function(e){c(e),o(e.slice(0,100))})).then((function(){var e=document.querySelector(".table_type_scroll");k()(e,{animation:1}).on("drag",(function(){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty()}))})).finally((function(){return O(!1)})).catch((function(e){return S.a.toast({html:e.message})}))},className:"col s6 waves-effect waves-light btn pink lighten-2",children:"Get data"}),Object(u.jsx)("button",{onClick:function(){if(R)return A(!1);A(!0)},className:"col s6 waves-effect waves-light btn blue lighten-2",children:R?"Close form":"Add user"})]}),Object(u.jsx)(w,{isVisible:R,onSubmit:function(e){e.gender="test",e.ipAddress="test",e.dollars="$0.00",e.euro="\u20ac0.00",e.jpy="\xa50.00",e.carImage="",e.carModel="test",e.carYear=2e3,e.carVin="test",c([e].concat(Object(n.a)(a))),o([e].concat(Object(n.a)(a))),S.a.toast({html:"User added!"})}}),h&&Object(u.jsx)(f,{}),a.length>0&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(C,{setDataForRender:o,usersToRender:d,data:a,setIsTableScrollActive:q}),Object(u.jsx)(v,{columnsRender:L,setColumnsRender:E,setUsersToRender:o,usersToRender:d,data:a,isTableLoading:g,setIsTableLoading:_,isTableScrollActive:V})]})]})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),i(e),c(e),l(e),s(e)}))};a(26);s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(A,{})}),document.getElementById("root")),T()}},[[27,1,2]]]);
//# sourceMappingURL=main.358515e9.chunk.js.map