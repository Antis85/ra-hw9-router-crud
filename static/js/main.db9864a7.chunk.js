(this["webpackJsonpra-hw9-router-crud"]=this["webpackJsonpra-hw9-router-crud"]||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),r=t(10),n=t.n(r),i=(t(16),t(8)),l=t(11),j=t(3),o=t(5),d=t(2),m=t(0);function p(){return Object(m.jsxs)("div",{className:"page-404",children:[Object(m.jsx)("div",{className:"page-404__header",children:"404"}),Object(m.jsx)("div",{className:"page-404__main",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430..."}),Object(m.jsx)(o.b,{to:"/",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"})]})}function b(e){var a=e.addPost,t=Object(c.useState)(""),s=Object(j.a)(t,2),r=s[0],n=s[1],i=Object(d.f)();return Object(m.jsxs)("article",{className:"article create-page",children:[Object(m.jsxs)("div",{className:"create-page__header-wrapper",children:[Object(m.jsxs)("div",{className:"create-page__header-wrapper__category-wrapper",children:[Object(m.jsx)("span",{className:"material-icons",children:"edit"}),Object(m.jsx)("span",{className:"category-name",children:"\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f"})]}),Object(m.jsxs)("div",{className:"create-page__header-wrapper__category-wrapper",children:[Object(m.jsx)("span",{className:"material-icons",children:"photo_camera"}),Object(m.jsx)("span",{className:"category-name",children:"\u0424\u043e\u0442\u043e/\u0432\u0438\u0434\u0435\u043e"})]}),Object(m.jsxs)("div",{className:"create-page__header-wrapper__category-wrapper",children:[Object(m.jsx)("span",{className:"material-icons",children:"video_camera_front"}),Object(m.jsx)("span",{className:"category-name",children:"\u041f\u0440\u044f\u043c\u043e\u0439 \u044d\u0444\u0438\u0440"})]}),Object(m.jsxs)("div",{className:"create-page__header-wrapper__category-wrapper",children:[Object(m.jsx)("span",{className:"material-icons",children:"more"}),Object(m.jsx)("span",{className:"category-name",children:"\u0415\u0449\u0435"})]}),Object(m.jsx)("div",{className:"create-page__header-wrapper__category-wrapper",children:Object(m.jsx)(o.b,{to:"/",children:Object(m.jsx)("span",{className:"material-icons",children:"close"})})})]}),Object(m.jsxs)("form",{className:"create-page__form",onSubmit:function(e){e.preventDefault(),r&&(a({content:r,id:"0"}),n(""),i("/"))},children:[Object(m.jsx)("div",{className:"create-page__form__inputs-wrapper",children:Object(m.jsx)("div",{className:"create-page__form__input-wrapper",children:Object(m.jsx)("label",{className:"create-page__form__label label-post",children:Object(m.jsx)("textarea",{className:"create-page__form__input input-post",name:"post",value:r,type:"text",required:!0,placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, Lorem ipsum...",onChange:function(e){var a=e.target;n(a.value)}})})})}),Object(m.jsx)("button",{className:"create-page__form__button-submit button-submit",type:"submit",children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]})]})}function _(e){var a=e.posts,t=e.deletePost,c=Object(d.f)(),s=Object(d.g)(),r=a.find((function(e){return e.id===Number(s.id)}));return r?Object(m.jsxs)("article",{className:"article view-page",children:[Object(m.jsxs)("div",{className:"article__header",children:[Object(m.jsx)("img",{className:"article__avatar",src:r.avatar,alt:"avatar"}),Object(m.jsxs)("div",{className:"article__header-wrapper",children:[Object(m.jsx)("span",{className:"article__name",children:r.name}),Object(m.jsx)("span",{className:"article__timestamp",children:r.created})]}),Object(m.jsx)("div",{className:"button-close",children:Object(m.jsx)("span",{className:"material-icons",onClick:function(){c(-1)},children:"close"})})]}),Object(m.jsx)("p",{className:"article__paragraph",children:r.content}),Object(m.jsxs)("div",{className:"article__like-and-comment",children:[Object(m.jsx)("span",{className:"material-icons",children:"thumb_up_off_alt"}),Object(m.jsx)("span",{className:"article__like-and-comment__text",children:"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f"}),Object(m.jsx)("span",{className:"material-icons",children:"chat_bubble_outline"}),Object(m.jsx)("span",{className:"article__like-and-comment__text",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(m.jsxs)("div",{className:"article__paragraph-footer",children:[Object(m.jsx)(o.b,{to:"/posts/edit/".concat(r.id),className:"view-page_button-edit",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(m.jsx)("button",{className:"view-page_button-delete",onClick:function(){t({id:r.id}),c("/")},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]}):Object(m.jsx)(p,{})}function h(e){var a=e.posts,t=e.addPost,s=Object(c.useState)(""),r=Object(j.a)(s,2),n=r[0],i=r[1],l=Object(d.f)(),o=Object(d.g)(),b=a.find((function(e){return e.id===Number(o.id)}));return b?Object(m.jsxs)("article",{className:"article edit-page",children:[Object(m.jsxs)("div",{className:"edit-page__header-wrapper",children:[Object(m.jsx)("div",{className:"edit-page__header-wrapper__title",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044e"}),Object(m.jsx)("div",{className:"edit-page__header-wrapper__button-close",children:Object(m.jsx)("span",{className:"material-icons",onClick:function(){l(-1)},children:"close"})})]}),Object(m.jsxs)("form",{className:"edit-page__form",onSubmit:function(e){e.preventDefault(),n&&b.id&&(t({content:n,id:b.id}),i(""),l("/"))},children:[Object(m.jsxs)("div",{className:"edit-page__form__inputs-wrapper",children:[Object(m.jsx)("img",{className:"article__avatar",src:b.avatar,alt:"avatar"}),Object(m.jsx)("div",{className:"edit-page__form__input-wrapper",children:Object(m.jsx)("label",{className:"edit-page__form__label label-post",children:Object(m.jsx)("textarea",{className:"edit-page__form__input input-post",name:"post",defaultValue:b.content,type:"text",required:!0,placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, Lorem ipsum...",onChange:function(e){var a=e.target;i(a.value)}})})})]}),Object(m.jsxs)("div",{className:"edit-page__categories-wrapper",children:[Object(m.jsxs)("div",{className:"edit-page__category-wrapper",children:[Object(m.jsx)("span",{className:"material-icons",children:"image"}),Object(m.jsx)("span",{className:"",children:"\u0424\u043e\u0442\u043e/\u0432\u0438\u0434\u0435\u043e"})]}),Object(m.jsxs)("div",{className:"edit-page__category-wrapper",children:[Object(m.jsx)("span",{className:"material-icons",children:"person_add_alt_1"}),Object(m.jsx)("span",{className:"",children:"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0434\u0440\u0443\u0437\u0435\u0439"})]}),Object(m.jsxs)("div",{className:"edit-page__category-wrapper",children:[Object(m.jsx)("span",{className:"material-icons",children:"mood"}),Object(m.jsx)("span",{className:"",children:"\u0427\u0443\u0432\u0441\u0442\u0432\u0430/\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f"})]}),Object(m.jsxs)("div",{className:"edit-page__category-wrapper",children:[Object(m.jsx)("span",{className:"material-icons",children:"place"}),Object(m.jsx)("span",{className:"",children:"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0435"})]}),Object(m.jsxs)("div",{className:"edit-page__category-wrapper",children:[Object(m.jsx)("span",{className:"material-icons",children:"gif_box"}),Object(m.jsx)("span",{className:"",children:"GIF"})]})]}),Object(m.jsx)("button",{className:"edit-page__form__button-submit button-submit",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]}):Object(m.jsx)(p,{})}function O(e){var a=e.post,t=function(e){var a=((new Date).getTime()-new Date(e).getTime())/1e3/60,t=a/60,c=t/24;return c>=1?{text:"\u0434\u043d.",num:c.toFixed(0)}:t>=1?{text:"\u0447.",num:t.toFixed(0)}:{text:"\u043c\u0438\u043d.",num:a.toFixed(0)}}(a.created);return Object(m.jsxs)("article",{className:"article",children:[Object(m.jsxs)("div",{className:"article__header",children:[Object(m.jsx)("img",{className:"article__avatar",src:a.avatar,alt:"avatar"}),Object(m.jsxs)("div",{className:"article__header-wrapper",children:[Object(m.jsx)("span",{className:"article__name",children:a.name}),Object(m.jsx)("span",{className:"article__timestamp",children:"0"!==t.num?"".concat(t.num," ").concat(t.text):"\u0441\u0435\u0439\u0447\u0430\u0441"})]})]}),Object(m.jsx)("p",{className:"article__paragraph",children:a.content}),Object(m.jsxs)("div",{className:"article__like-and-comment",children:[Object(m.jsx)("span",{className:"material-icons",children:"thumb_up_off_alt"}),Object(m.jsx)("span",{className:"article__like-and-comment__text",children:"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f"}),Object(m.jsx)("span",{className:"material-icons",children:"chat_bubble_outline"}),Object(m.jsx)("span",{className:"article__like-and-comment__text",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(m.jsxs)("div",{className:"article__paragraph-footer",children:[Object(m.jsx)("img",{className:"article__avatar avatar-small",src:a.avatar,alt:"avatar"}),Object(m.jsx)("span",{className:"article__paragraph-footer__fake-input",children:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439..."}),Object(m.jsxs)("div",{className:"article__paragraph-footer__icon-wrapper",children:[Object(m.jsx)("span",{className:"material-icons",children:"sentiment_satisfied_alt"}),Object(m.jsx)("span",{className:"material-icons",children:"photo_camera"}),Object(m.jsx)("span",{className:"material-icons",children:"gif_box"}),Object(m.jsx)("span",{className:"material-icons",children:"sticky_note_2"})]})]})]})}function x(){return Object(m.jsx)("div",{className:"loading",children:"Loading..."})}function u(e){var a=e.error;return console.log("ErrorPage_error_text: ",a),Object(m.jsxs)("div",{className:"error-page",children:[Object(m.jsx)("div",{className:"error-page__header",children:"\u041e\u0448\u0438\u0431\u043a\u0430!"}),Object(m.jsxs)("div",{className:"error-page__main",children:[Object(m.jsx)("span",{children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."}),Object(m.jsx)("p",{children:a})]})]})}function g(e){var a=e.posts,t=e.handleView,c=e.loading,s=e.error,r=a.map((function(e){return Object(m.jsx)(o.b,{to:"/posts/".concat(e.id),children:Object(m.jsx)(O,{post:e,handleView:t})},e.id)}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("section",{className:"header-page",children:Object(m.jsx)(o.b,{to:"/posts/new",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})}),Object(m.jsx)("section",{className:"main-page",children:c?Object(m.jsx)(x,{}):s?Object(m.jsx)(u,{error:s}):r})]})}function N(){var e=Object(c.useState)([]),a=Object(j.a)(e,2),t=a[0],s=a[1],r=Object(c.useState)(!1),n=Object(j.a)(r,2),O=n[0],x=n[1],u=Object(c.useState)(""),N=Object(j.a)(u,2),f=N[0],v=N[1],w="https://antis-ra-hw-router.herokuapp.com/posts";Object(c.useEffect)((function(){y()}),[]);var y=function(e){if(x(!0),v(""),!e||!e.method)return fetch(w).then((function(e){return e.json()})).then((function(e){s(Object(l.a)(e))})).catch((function(e){console.log("Error_text: ",e.message),v(e.message)})).finally((function(){x(!1)}));var a=e.id,t=e.content,c=e.method;return fetch("DELETE"!==c?w:w+"/"+a,{method:c,headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({id:a,content:t})}).catch((function(e){console.log("Error_text: ",e.message)})).finally((function(){x(!1)}))},k=function(e){y(Object(i.a)(Object(i.a)({},e),{},{method:"POST"})).then((function(e){if(!e)throw new Error("Server not responding");e.ok?y():console.log(e)})).catch((function(e){console.log("Error_text: ",e.message),v(f+"\n"+e.message)}))};return Object(m.jsx)(o.a,{children:Object(m.jsx)("div",{className:"page",children:Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{path:"/posts/new",element:Object(m.jsx)(b,{addPost:k})}),Object(m.jsx)(d.a,{path:"/posts/:id",element:Object(m.jsx)(_,{posts:t,deletePost:function(e){y(Object(i.a)(Object(i.a)({},e),{},{method:"DELETE"})).then((function(e){if(!e)throw new Error("Server not responding");e.ok?y():console.log(e)})).catch((function(e){console.log("Error_text: ",e.message),v(f+"\n"+e.message)}))}})}),Object(m.jsx)(d.a,{path:"/posts/edit/:id",element:Object(m.jsx)(h,{posts:t,addPost:k})}),Object(m.jsx)(d.a,{path:"/",element:Object(m.jsx)(g,{posts:t,loading:O,error:f})}),Object(m.jsx)(d.a,{path:"*",element:Object(m.jsx)(p,{})})]})})})}n.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.db9864a7.chunk.js.map