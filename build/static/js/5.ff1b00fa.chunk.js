(this["webpackJsonpnew-project"]=this["webpackJsonpnew-project"]||[]).push([[5],{219:function(e,t,a){"use strict";var n=a(0),c=a.n(n),o=a(11),i=a.n(o),l=a(177),r=a(5),u=a(234),s=a.n(u),m=a(192),d=(a(220),Object(l.a)((function(e){return{button:{margin:e.spacing(1)}}})));t.a=function(e){var t=e.handleSave,a=e.validation,n=d(),o=Object(r.a)((function(e){return{root:{color:"#673ab7",backgroundColor:"#f7f7f7;","&:disabled":{color:"#dad9d9"},"&:hover":{backgroundColor:"#dad9d9"}}}}))(m.a);return i.a.createPortal(c.a.createElement("div",{className:"save-button"},c.a.createElement(o,{variant:"contained",size:"medium",color:"primary",className:n.button,onClick:t,disabled:a,startIcon:c.a.createElement(s.a,null)},"Save")),document.getElementById("header-button-content"))}},220:function(e,t,a){},221:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(25),c=a(0),o=a.n(c),i=function(e,t){var a=o.a.useState((function(){var a=window.localStorage.getItem(t);return null!==a?JSON.parse(a):e})),c=Object(n.a)(a,2),i=c[0],l=c[1];return o.a.useEffect((function(){window.localStorage.setItem(t,JSON.stringify(i))}),[t,i]),[i,l]}},224:function(e,t,a){"use strict";var n=a(0),c=a.n(n),o=a(212),i=a.n(o),l=a(141),r=a(266);a(225);t.a=function(e){var t=e.handleAddQuestion;return c.a.createElement("div",{className:"add_quiz_config"},c.a.createElement("div",null,c.a.createElement("div",{id:"add_button_content"},c.a.createElement(r.a,{title:"Add Question",placement:"top"},c.a.createElement(l.a,{"aria-label":"show more",onClick:function(){t(),setTimeout((function(){var e=document.getElementById("add_button_content");e&&e.scrollIntoView({behavior:"smooth"})}),0)}},c.a.createElement(i.a,{style:{fontSize:20}}))))))}},225:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){},228:function(e,t,a){},229:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={quizDescription:"",questionData:"",questionType:"2",answerList:["","","",""],id:1,comment:"",correct_answer:[0]}},230:function(e,t,a){"use strict";var n=a(12),c=a(8),o=a(210),i=a(25),l=a(0),r=a.n(l),u=a(205),s=a(235),m=a.n(s),d=a(236),f=(a(237),a(238),a(226),Object(l.memo)((function(e){var t=e.questionCode,a=e.isOnChange,n=e.onSetQuestionState;return r.a.createElement("div",{className:"editor-content"},r.a.createElement(m.a,{padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:20},value:t,highlight:function(e){return Object(d.highlight)(e,d.languages.js)},onValueChange:function(e){return a&&n(e)}}))})),a(266)),p=a(141),b=a(239),v=a.n(b),g=a(211),E=a.n(g),O=a(177),j=a(191),h=a(185),w=a(23),C=a(186),_=a(198),y=a(183),q=(function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n={};return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=t.reduce((function(t,a,c,o){return t[c+e]=a,n[a]=c+e,o.length===c+1&&Object.setPrototypeOf(t,n),t}),{});return Object.defineProperty(a,"keys",{enumerable:!1,get:function(){return Object.keys(a)}}),Object.defineProperty(a,"values",{enumerable:!1,get:function(){return t}}),Object.freeze(a)}}("Single Choice","Multiple Choice")(1),a(201)),S=(a(227),Object(O.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:150,maxWidth:300},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)}}}))),N=[2,3,4,5],I={PaperProps:{style:{maxHeight:224,width:250}}};function z(e,t,a){return{fontWeight:-1===t.indexOf(e)?a.typography.fontWeightRegular:a.typography.fontWeightMedium}}var D=function(e){var t=e.options,a=e.quizIndex,n=e.optionType,c=e.setOptionCount,u=e.answerListCount,s=(e.setOptionType,e.correctAnswer),m=e.handlePushCorrectAnswer,d=Object(l.useState)(s),f=Object(i.a)(d,2),p=f[0],b=f[1],v=Object(w.a)(),g=function(e){b(e.target.value),1==n&&(m(a,[0]),b([0]))};Object(l.useEffect)((function(){m(a,Object(o.a)(p))}),[p]);var E={1:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:O.formControl},r.a.createElement(C.a,{id:"demo-simple-select-label"},"Select Option"),r.a.createElement(q.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:s[0],onChange:function(e){return m(a,[e.target.value])}},t.map((function(e,t){return r.a.createElement(_.a,{value:t},"Option ",t+1)})))))},2:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:O.formControl},r.a.createElement(C.a,{id:"demo-mutiple-name-label"},"Select Options"),r.a.createElement(q.a,{labelId:"demo-mutiple-name-label",id:"demo-mutiple-name",multiple:!0,value:p,onChange:g,input:r.a.createElement(y.a,null),MenuProps:I},t.map((function(e,t){return r.a.createElement(_.a,{key:t,value:t,style:z(t,p,v)},"Option ",t+1)})))))},3:function(){return null}},O=S();return r.a.createElement("div",{className:"quiz_option_config_content"},r.a.createElement("h3",null,"Untitled Question"),r.a.createElement("div",null,r.a.createElement(h.a,{className:O.formControl},r.a.createElement(C.a,{id:"demo-simple-select-label"},"Option Count"),r.a.createElement(q.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:u,onChange:function(e){return c(e.target.value,a)}},N.map((function(e){return r.a.createElement(_.a,{value:e},e)})))),E[n]()))},L=a(192),k=a(264),x=a(140),T=a(265),M=a(213),Q=a.n(M),U=a(49),A=(a(228),"1"),P="2",F=Object(O.a)((function(e){return{root:{"& .MuiTextField-root":{width:"100%"}}}}));t.a=function(e){var t,a=e.questions,s=e.setQuestions,m=F(),d=Object(l.useState)(!1),b=Object(i.a)(d,2),g=b[0],O=b[1],w=Object(l.useState)(P),C=Object(i.a)(w,2),_=C[0],y=C[1],q=Object(l.useState)(1),S=Object(i.a)(q,2),N=S[0],I=S[1],z=Object(l.useState)(4),M=Object(i.a)(z,2),W=M[0],V=M[1],J=Object(l.useState)(null),R=Object(i.a)(J,2),B=R[0],H=R[1],G=Object(l.useState)(""),K=Object(i.a)(G,2),X=K[0],Y=K[1];console.log(X,"valueImg");var Z=function(e){e.target.files[0]&&H(e.target.files[0])},$=function(e,t){var n=a;n[e].correct_answer=Object(o.a)(t),s(Object(o.a)(n))},ee=function(e,t){V(e),Object(o.a)(a)[t].answerList=Array.from({length:e},(function(){return""}))},te=function(e){console.log(123456789),Y(e)};Object(l.useEffect)((function(){null!==B&&(O(!0),U.d.ref("images/".concat(B.name)).put(B).on("state_changed",(function(e){}),(function(e){console.log("error")}),(function(){U.d.ref("images").child(B.name).getDownloadURL().then(te),O(!1)})))}),[B]);var ae=(t={},Object(n.a)(t,A,(function(e){return r.a.createElement("div",{className:"upload_img_content"},r.a.createElement("input",{type:"file",id:"imgUploadContent",onChange:Z}),r.a.createElement("div",null,r.a.createElement("label",{for:"imgUploadContent"},g?r.a.createElement("div",null,"loading..."):r.a.createElement("div",null,r.a.createElement("span",null,"Upload Img"),r.a.createElement(Q.a,null))),r.a.createElement(L.a,{variant:"contained",onClick:function(){return function(e){var t=Object(o.a)(a);t[e].questionData=X,s(Object(o.a)(t))}(e)}},"Save image")))})),Object(n.a)(t,P,(function(e){return r.a.createElement(u.a,{id:"outlined-basic",label:"Text",variant:"outlined",multiline:!0,value:a[e].questionData,rows:2,onChange:function(t){return function(e,t){var n=Object(o.a)(a);n[t].questionData=e,s(Object(o.a)(n))}(t.target.value,e)}})})),t);return r.a.createElement("div",{className:"create_content"},a.map((function(e,t){return r.a.createElement("div",{className:"create_quiz_content"},r.a.createElement("span",{className:"section_number_info"},"Section ",t+1),r.a.createElement("span",{className:"remove_quiz_content"},r.a.createElement(f.a,{title:"Duplicate",onClick:function(){return function(e){var t=Object(o.a)(a);t.splice(e,0,Object(c.a)({},t[e])),s(Object(o.a)(t))}(t)}},r.a.createElement(p.a,{"aria-label":"copy"},r.a.createElement(v.a,null))),r.a.createElement(f.a,{title:"Delete",onClick:function(){return function(e){var t=Object(o.a)(a);t.length>1&&(t.splice(e,1),s(Object(o.a)(t)))}(t)}},r.a.createElement(p.a,{"aria-label":"delete",disabled:1===a.length},r.a.createElement(E.a,null)))),r.a.createElement("div",{className:"top_content"}),r.a.createElement("form",{className:m.root,noValidate:!0,autoComplete:"off"},r.a.createElement("div",{className:"question_data_type_content"},r.a.createElement(h.a,{component:"fieldset"},r.a.createElement(x.a,{component:"legend"},"Question Data Type"),r.a.createElement(T.a,{row:!0,"aria-label":"position",name:"position",defaultValue:_,onChange:function(e){y(e.target.value)}},r.a.createElement(j.a,{value:A,control:r.a.createElement(k.a,{color:"primary"}),label:"Img"}),r.a.createElement(j.a,{value:P,control:r.a.createElement(k.a,{color:"primary"}),label:"Text"}))),r.a.createElement("div",{className:"question_data"},ae[_](t))),r.a.createElement("div",null,r.a.createElement(u.a,{id:"outlined-multiline-static",label:"Quiz Description",multiline:!0,rows:2,variant:"outlined",value:e.quizDescription,onChange:function(e){return function(e,t){var n=e.target.value,c=Object(o.a)(a);c[t].quizDescription=n,s(Object(o.a)(c))}(e,t)}})),r.a.createElement("div",{style:{marginTop:"15px"}},r.a.createElement(u.a,{id:"outlined-multiline-static",label:"Quiz Comment",multiline:!0,rows:2,variant:"outlined",value:e.comment,onChange:function(e){return function(e,t){var n=e.target.value,c=Object(o.a)(a);c[t].comment=n,s(Object(o.a)(c))}(e,t)}})),r.a.createElement("div",{className:"untitled_question_content"},r.a.createElement(D,{optionCount:W,optionType:N,setOptionType:I,options:e.answerList,quizIndex:t,setOptionCount:ee,answerListCount:a[t].answerList.length,handlePushCorrectAnswer:$,correctAnswer:a[t].correct_answer}),e.answerList.map((function(n,c){return r.a.createElement("div",{className:"option_list"},r.a.createElement("div",null,r.a.createElement(u.a,{id:"standard-basic",label:"Option ".concat(c+1),value:e.answerList[c],onChange:function(e){return function(e,t,n){var c=n.target.value,i=Object(o.a)(a[e].answerList);i[t]=c;var l=Object(o.a)(a);l[e].answerList=i,s(Object(o.a)(l))}(t,c,e)}})))})))))})))}},231:function(e,t,a){"use strict";var n=a(8),c=a(25),o=a(0),i=a.n(o),l=a(205),r=a(177),u=a(192),s=a(49),m=a(213),d=a.n(m),f=a(202);a(221);function p(){return Math.round(20*Math.random())-10}function b(){var e=50+p(),t=50+p();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var v=Object(r.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),g=function(e){var t=e.openModal,a=e.setOpenModal,n=e.quizDataInfo.imgUrl,o=v(),l=i.a.useState(b),r=Object(c.a)(l,1)[0],u=i.a.createElement("div",{style:r,className:o.paper},i.a.createElement("div",{className:"upload_img_content"},i.a.createElement("img",{src:n})));return i.a.createElement(f.a,{open:t,onClose:function(){a(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},u)};a(222),t.a=function(e){var t=e.setQuizDataInfo,a=e.quizDataInfo,m=Object(o.useState)(null),f=Object(c.a)(m,2),p=f[0],b=f[1],v=Object(o.useState)(!1),E=Object(c.a)(v,2),O=E[0],j=E[1],h=Object(o.useState)(!1),w=Object(c.a)(h,2),C=w[0],_=w[1],y=Object(r.a)((function(e){return{root:{"& .MuiTextField-root":{width:"100%",marginTop:"10px"}}}}))(),q=function(e){j(!1),t((function(t){return Object(n.a)(Object(n.a)({},t),{},{imgUrl:e})}))};return Object(o.useEffect)((function(){null!==p&&(j(!0),s.d.ref("images/".concat(p.name)).put(p).on("state_changed",(function(e){}),(function(e){console.log("error")}),(function(){s.d.ref("images").child(p.name).getDownloadURL().then(q)})))}),[p]),i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{openModal:C,quizDataInfo:a,setOpenModal:_}),i.a.createElement("div",{className:"question_header"},i.a.createElement("form",{className:y.root,noValidate:!0,autoComplete:"off"},i.a.createElement(l.a,{rows:1,id:"outlined-multiline-static",placeholder:"Quiz Title",multiline:!0,variant:"outlined",h:!0,value:a.title,onChange:function(e){var a=e.target.value;t((function(e){return Object(n.a)(Object(n.a)({},e),{},{title:a})}))}}),i.a.createElement(l.a,{id:"outlined-multiline-static",multiline:!0,rows:1,variant:"outlined",value:a.description,onChange:function(e){var a=e.target.value;t((function(e){return Object(n.a)(Object(n.a)({},e),{},{description:a})}))}}),i.a.createElement("div",{className:"upload_img_avatar_content"},i.a.createElement("div",{className:"upload_img_content"},i.a.createElement("input",{type:"file",id:"fileInput",onChange:function(e){e.target.files[0]&&b(e.target.files[0])}}),i.a.createElement("div",null,i.a.createElement("label",{for:"fileInput"},O?i.a.createElement("div",null,"loading..."):i.a.createElement("div",null,i.a.createElement("span",null,"Upload Img"),i.a.createElement(d.a,null)))),a.imgUrl&&i.a.createElement("div",null,i.a.createElement(u.a,{variant:"contained",onClick:function(){_(!0)}},"Show image")))))))}},262:function(e,t,a){"use strict";a.r(t);var n=a(210),c=a(92),o=a(8),i=a(25),l=a(0),r=a.n(l),u=a(49),s=a(14),m=a(223),d=a(231),f=a(219),p=a(230),b=a(224),v=a(229),g=a(90);t.default=Object(s.i)((function(e){var t=e.match.params.quizId,a=(Object(g.b)().enqueueSnackbar,Object(m.a)([Object(o.a)({},v.a)],"questionsList")),s=Object(i.a)(a,2),E=s[0],O=s[1],j=Object(l.useState)(!1),h=Object(i.a)(j,2),w=(h[0],h[1]),C=Object(l.useState)({},"quizDataInfo"),_=Object(i.a)(C,2),y=_[0],q=_[1];Object(l.useEffect)((function(){w(!0),u.c.once("value").then((function(e){var a=e.child(t).val(),n=a.questionsList,o=Object(c.a)(a,["questionsList"]);w(!1),O(n),q(o)}))}),[t]);var S=Object(l.useMemo)((function(){var e=!0;return y.title&&y.description&&(e=!1),e}),[y]);return r.a.createElement("div",{className:"create_question"},r.a.createElement(d.a,{quizDataInfo:y,setQuizDataInfo:q}),r.a.createElement(f.a,{handleSave:function(){u.b.ref("/questions/".concat(t)).update(Object(o.a)(Object(o.a)({},y),{},{id:t,questionsList:E})).then((function(){}))},validation:S}),r.a.createElement(p.a,{questions:E,setQuestions:O}),r.a.createElement(b.a,{handleAddQuestion:function(){O([].concat(Object(n.a)(E),[Object(o.a)(Object(o.a)({},v.a),{},{id:E.length+1})]))}}))}))}}]);
//# sourceMappingURL=5.ff1b00fa.chunk.js.map