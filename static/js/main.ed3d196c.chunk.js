(this["webpackJsonpreact-first-project"]=this["webpackJsonpreact-first-project"]||[]).push([[0],{12:function(e,t,r){e.exports={navBar:"Navbar_navBar__8l4cZ",navBar__item:"Navbar_navBar__item__17lx_",active:"Navbar_active__1pXni",navBar__friendsItems:"Navbar_navBar__friendsItems__3zwys",navBar__friends:"Navbar_navBar__friends__1GE3d"}},126:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var n=r(25),a=r(26),o=r(28),s=r(27),i=r(29),c=r(0),u=r.n(c),l=r(31),p=r(10),f=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var t=function(t){function r(){return Object(n.a)(this,r),Object(o.a)(this,Object(s.a)(r).apply(this,arguments))}return Object(i.a)(r,t),Object(a.a)(r,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(l.a,{to:"/login"})}}]),r}(u.a.Component);return Object(p.b)(f)(t)}},13:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return i}));var n=r(132),a=n.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"a3b59b28-fda3-496d-8604-62213f44ac80"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t))},unfollowAtUser:function(e){return a.delete("follow/".concat(e))},followAtUser:function(e){return a.post("follow/".concat(e),{})}},s={getUserProfile:function(e){return a.get("profile/"+e)},getUserStatus:function(e){return a.get("/profile/status/"+e)},updeteStatus:function(e){return a.put("/profile/status",{status:e})}},i={getUserLogin:function(){return a.get("auth/me")},getUserLoginPhoto:function(e){return a.get("profile/"+e).then((function(e){return e.data.photos}))},authorizeOnService:function(e){var t=e.login,r=e.Password,n=e.rememberMe;return a.post("auth/login",{email:t,password:r,rememberMe:n,captcha:!0})},logout:function(){return a.delete("auth/login")}}},136:function(e,t,r){e.exports={wrapper:"Music_wrapper__2u6CV"}},137:function(e,t,r){e.exports={wrapper:"Settings_wrapper__2UwEl"}},138:function(e,t,r){},139:function(e,t,r){e.exports={dialog:"DialogItem_dialog__3V3gj"}},140:function(e,t,r){e.exports={selectPage:"Paginator_selectPage__uvdEO"}},141:function(e,t,r){e.exports={wrapper:"Users_wrapper__2MNVp"}},142:function(e,t,r){e.exports=r.p+"static/media/preloader.99509660.svg"},144:function(e,t,r){e.exports=r.p+"static/media/logo.840c9b5f.svg"},171:function(e,t,r){e.exports=r(297)},176:function(e,t,r){},22:function(e,t,r){e.exports={header_container:"Header_header_container__CiM54",header__content:"Header_header__content__5ECsT",header__logoData:"Header_header__logoData__6EWxj",header__UserDara:"Header_header__UserDara__2LPpo",header__logo:"Header_header__logo__3x44F",header__name:"Header_header__name__3su02",header__UserPhoto:"Header_header__UserPhoto__3n3CS",header__select:"Header_header__select__kNt-E",header__btn:"Header_header__btn__25g53"}},297:function(e,t,r){"use strict";r.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=r(0),a=r.n(n),o=r(65),s=r.n(o),i=(r(176),r(25)),c=r(26),u=r(28),l=r(27),p=r(29),f=r(71),g=r.n(f),m=r(31),d=r(9),v=r(10),h=r(7),b=r(130),A=r(95),E=r(38),w=r(20);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(r,!0).forEach((function(t){Object(w.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k="social_network/dialogs/ADD-MESSAGE",_={messages:[{id:1,message:"Hi, my name is Dima."},{id:2,message:"Hi, my name is Anton."},{id:3,message:"How are you?"},{id:4,message:"not bad"},{id:5,message:"ok"},{id:6,message:"okokok"}],users:[{id:1,name:"Dimas"},{id:2,name:"Alex"},{id:3,name:"Sergy"},{id:4,name:"Anton"},{id:5,name:"Kate"},{id:6,name:"Mark"}]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return O({},e,{messages:[].concat(Object(E.a)(e.messages),[{id:99,message:t.formData.newMessageBody}])});default:return e}},j={user:[{id:1,name:"Kate"},{id:2,name:"Valera"},{id:3,name:"Mark"}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;arguments.length>1&&arguments[1];return e},S=r(8),I=r.n(S),D=r(18),N=r(13);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var T=function(e,t,r,n){return e.map((function(e){return e[r]===t?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(r,!0).forEach((function(t){Object(w.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{},n):e}))};function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(r,!0).forEach((function(t){Object(w.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U="social_network/users/FOLLOW",Q="social_network/users/UNFOLLOW",F="social_network/users/SET_USERS",R="social_network/users/SET_CURRENT_PAGE",H="social_network/users/SET_TOTAL_USERS_COUNT",K="social_network/users/TOGGLE_IS_FETCHING",V={users:[],pageSize:8,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[],portionSize:10},W=function(e){return{type:U,userId:e}},z=function(e){return{type:Q,userId:e}},L=function(e){return{type:K,isFetching:e}},J=function(e,t){return{type:"social_network/users/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},Y=function(){var e=Object(D.a)(I.a.mark((function e(t,r,n,a){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(J(!0,r)),e.next=3,n(r);case 3:0===e.sent.data.resultCode&&t(a(r)),t(J(!1,r));case 6:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}(),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return B({},e,{users:T(e.users,t.userId,"id",{followed:!0})});case Q:return B({},e,{users:T(e.users,t.userId,"id",{followed:!1})});case F:return B({},e,{users:Object(E.a)(t.users)});case R:return B({},e,{currentPage:t.pageNumber});case H:return B({},e,{totalUsersCount:t.totalCount});case K:return B({},e,{isFetching:t.isFetching});case"social_network/users/TOGGLE_IS_FOLLOWING_PROGRESS":return B({},e,{followingInProgress:t.isFetching?[].concat(Object(E.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return!t.userId}))});default:return e}},Z=r(47);function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(r,!0).forEach((function(t){Object(w.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $="social_network/auth/SET_USER_DATA",ee="social_network/auth/SET_USER_PHOTO",te={id:null,email:null,login:null,photos:null,isAuth:!1},re=function(e,t,r,n){return{type:$,data:{id:e,login:t,email:r,isAuth:n}}},ne=function(){return function(){var e=Object(D.a)(I.a.mark((function e(t){var r,n,a,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.getUserLogin();case 2:0===(r=e.sent).data.resultCode&&(n=r.data.data.id,a=r.data.data.login,o=r.data.data.email,t(re(n,a,o,!0)),N.a.getUserLoginPhoto(n).then((function(e){var r;t((r=e.small,{type:ee,photo:r}))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return q({},e,{},t.data);case ee:return q({},e,{photos:t.photo});case"social_network/auth/AUTHORIZE_ON_SERVICE":return q({},e,{id:t.id});default:return e}},oe=r(133);function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(r,!0).forEach((function(t){Object(w.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce={initialized:!1},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"social_network/app/SET_INITIALIZED_SUCCESS":return ie({},e,{initialized:!0});default:return e}},le=Object(h.c)({profilePage:A.e,dialogsPage:y,sideBar:C,usersPage:X,auth:ae,form:b.a,app:ue}),pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.d,fe=Object(h.e)(le,pe(Object(h.a)(oe.a)));window.__store__=fe;var ge=fe,me=r(12),de=r.n(me),ve=r(90),he=r.n(ve),be=r(42),Ae=r.n(be),Ee=function(e){return a.a.createElement("div",{className:he.a.friendsItem},a.a.createElement("img",{src:Ae.a}),a.a.createElement(d.b,{to:"/dialogs/",activeClassName:he.a.active},e.name))},we=function(e){var t=e.state.user.map((function(e){return a.a.createElement(Ee,{name:e.name,key:e.id,id:e.id})}));return a.a.createElement("nav",{className:de.a.navBar},a.a.createElement("div",{className:de.a.navBar__item},a.a.createElement(d.b,{to:"/profile",activeClassName:de.a.active},"Profile")," "),a.a.createElement("div",{className:de.a.navBar__item},a.a.createElement(d.b,{to:"/dialogs",activeClassName:de.a.active},"Message")),a.a.createElement("div",{className:de.a.navBar__item},a.a.createElement(d.b,{to:"/users",activeClassName:de.a.active},"Users")),a.a.createElement("div",{className:de.a.navBar__item},a.a.createElement(d.b,{to:"/news",activeClassName:de.a.active},"News")),a.a.createElement("div",{className:de.a.navBar__item},a.a.createElement(d.b,{to:"/music",activeClassName:de.a.active},"Music")),a.a.createElement("div",{className:de.a.navBar__item},a.a.createElement(d.b,{to:"/settings",activeClassName:de.a.active},"Settings")),a.a.createElement("div",{className:de.a.navBar__friends},a.a.createElement("h3",null," Friends "),a.a.createElement("div",{className:de.a.navBar__friendsItems},t)))},Pe=r(136),Oe=r.n(Pe),ke=function(){return a.a.createElement("div",{className:Oe.a.wrapper},"Muzon")},_e=r(137),ye=r.n(_e),je=function(){return a.a.createElement("div",{className:ye.a.wrapper},"Settings")},Ce=r(56),Se=r.n(Ce),Ie=r(138),De=r.n(Ie),Ne=function(e){return a.a.createElement("div",{className:De.a.message},e.content)},Me=r(139),Te=r.n(Me),xe=function(e){return a.a.createElement("div",{className:Te.a.dialog},a.a.createElement("img",{src:"https://c.wallhere.com/photos/1e/7d/1600x1200_px_action_adventure_alien_Aliens_Avatar_fantasy_fi-1635355.jpg!d"}),a.a.createElement(d.b,{to:"/dialogs/"+e.id},e.name))},Be=r(127),Ue=r(128),Qe=r(51),Fe=r(43),Re=Object(Fe.a)(5),He=Object(Ue.a)({form:"dialogsAddMessageForm"})((function(e){return a.a.createElement("form",{onSubmit:e.handleSubmit},a.a.createElement("div",null,a.a.createElement(Be.a,{component:Qe.b,name:"newMessageBody",placeholder:"Enter your message",validate:[Fe.b,Re]})),a.a.createElement("div",null,a.a.createElement("button",null,"Send message")))})),Ke=function(e){return a.a.createElement("div",{className:Se.a.dialogs},a.a.createElement("div",{className:Se.a.dialogsItems},e.dialogsPage.users.map((function(e){return a.a.createElement(xe,{name:e.name,key:e.id,id:e.id})}))),a.a.createElement("div",{className:Se.a.messages},a.a.createElement("div",null,e.dialogsPage.messages.map((function(e){return a.a.createElement(Ne,{content:e.message,key:e.id,id:e.id})}))),a.a.createElement("div",{className:Se.a.textTupe},a.a.createElement(He,{onSubmit:function(t){e.addMessage(t)}}))))},Ve=r(126),We=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(Ke,{dialogsPage:this.props.dialogsPage,addMessage:this.props.addMessage})}}]),t}(a.a.Component),ze=Object(h.d)(Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),{addMessage:function(e){return{type:k,formData:e}}}),Ve.a)(We),Le=r(129),Je=r(140),Ye=r.n(Je),Xe=function(e){for(var t=Math.ceil(e.totalItemsCount/e.pageSize),r=[],o=1;o<=t;o++)r.push(o);var s=Math.ceil(t/e.portionSize),i=Object(n.useState)(1),c=Object(Le.a)(i,2),u=c[0],l=c[1],p=(u-1)*e.portionSize+1,f=u*e.portionSize;return a.a.createElement("div",null,u>1&&a.a.createElement("button",{onClick:function(){l(u-1)}},"LEFT"),r.filter((function(e){return e>=p&&e<=f})).map((function(t){return a.a.createElement("span",{className:e.currentPage===t&&Ye.a.selectPage,onClick:function(){e.onPageChanget(t)}},t)})),u<s&&a.a.createElement("button",{onClick:function(){l(u+1)}},"RIGHT"))},Ze=r(141),Ge=r.n(Ze),qe=function(e){return a.a.createElement("div",null,a.a.createElement("div",{className:Ge.a.wrapper},a.a.createElement("div",null,a.a.createElement(d.b,{to:"/profile/"+e.user.id},a.a.createElement("img",{src:null!=e.user.photos.small?e.user.photos.small:Ae.a}))),a.a.createElement("div",null,e.user.followed?a.a.createElement("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.unfollowCreator(e.user.id)}},"Unfollow"):a.a.createElement("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.followThunkCreator(e.user.id)}},"Follow"))),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("div",null,e.user.name),a.a.createElement("div",null,e.user.status)),a.a.createElement("div",null,a.a.createElement("div",null,"u.location.country"),a.a.createElement("div",null,"u.location.city"))))},$e=function(e){return a.a.createElement("div",null,a.a.createElement(Xe,{currentPage:e.currentPage,onPageChanget:e.onPageChanget,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,portionSize:e.portionSize}),e.users.map((function(t){return a.a.createElement(qe,{key:t.id,user:t,followingInProgress:e.followingInProgress,unfollowCreator:e.unfollowCreator,followThunkCreator:e.followThunkCreator})})))},et=r(67),tt=r(143),rt=function(e){return e.usersPage.users},nt=function(e){return e.usersPage.pageSize},at=function(e){return e.usersPage.totalUsersCount},ot=function(e){return e.usersPage.currentPage},st=function(e){return e.usersPage.isFetching},it=function(e){return e.usersPage.followingInProgress},ct=(Object(tt.a)(rt,st,(function(e,t){return e.filter((function(e){return!0}))})),function(e){function t(){var e,r;Object(i.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPageChanget=function(e){r.props.setCurrentPage(e),r.props.getUsersThunkCreator(e,r.props.pageSize)},r}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(et.a,null):null,a.a.createElement($e,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanget:this.onPageChanget,followingInProgress:this.props.followingInProgress,unfollowCreator:this.props.unfollowCreator,followThunkCreator:this.props.followThunkCreator,portionSize:this.props.portionSize}))}}]),t}(a.a.Component)),ut=Object(v.b)((function(e){return{users:rt(e),pageSize:nt(e),totalUsersCount:at(e),currentPage:ot(e),isFetching:st(e),followingInProgress:it(e),portionSize:e.usersPage.portionSize}}),{setCurrentPage:function(e){return{type:R,pageNumber:e}},getUsersThunkCreator:function(e,t){return function(){var r=Object(D.a)(I.a.mark((function r(n){var a;return I.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n(L(!0)),r.next=3,N.c.getUsers(e,t);case 3:a=r.sent,n(L(!1)),n((s=a.data.items,{type:F,users:s})),n((o=a.data.totalCount,{type:H,totalCount:o}));case 7:case"end":return r.stop()}var o,s}),r)})));return function(e){return r.apply(this,arguments)}}()},unfollowCreator:function(e){return function(){var t=Object(D.a)(I.a.mark((function t(r){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=N.c.unfollowAtUser.bind(N.c),Y(r,e,n,z);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},followThunkCreator:function(e){return function(){var t=Object(D.a)(I.a.mark((function t(r){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=N.c.followAtUser.bind(N.c),Y(r,e,n,W);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(ct),lt=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(e,t))}},pt=r(22),ft=r.n(pt),gt=r(144),mt=r.n(gt),dt=function(e){return a.a.createElement("header",{className:ft.a.header_container},a.a.createElement("div",{className:ft.a.header__content},a.a.createElement("div",{className:ft.a.header__logoData},a.a.createElement("img",{className:ft.a.header__logo,src:mt.a}),a.a.createElement("span",{className:ft.a.header__name},"Social network")),a.a.createElement("div",{className:ft.a.header__UserDara},e.isAuth?a.a.createElement("div",{className:ft.a.header__select},e.login,a.a.createElement("img",{className:ft.a.header__UserPhoto,src:null!=e.photo?e.photo:Ae.a,alt:""}),a.a.createElement("button",{className:ft.a.header__btn,onClick:e.logoutThunkCreator},"Log out")):a.a.createElement(d.b,{className:ft.a.header__btn,to:"/Login"},"Log in"))))},vt=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(dt,this.props)}}]),t}(a.a.Component),ht=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,photo:e.auth.photos}}),{logoutThunkCreator:function(){return function(){var e=Object(D.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.logout();case 2:0===e.sent.data.resultCode&&t(re(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(vt),bt=r(145),At=r(39),Et=r.n(At),wt=Object(Ue.a)({form:"login"})((function(e){var t=e.handleSubmit,r=e.error;return a.a.createElement("form",{onSubmit:t},a.a.createElement("div",null,a.a.createElement(Be.a,{placeholder:"login",name:"login",component:Qe.a,validate:[Fe.b]})),a.a.createElement("div",null,a.a.createElement(Be.a,{placeholder:"Password",name:"Password",component:Qe.a,type:"password",validate:[Fe.b]})),a.a.createElement("div",null,a.a.createElement(Be.a,{component:"input",type:"checkbox",name:"rememberMe"})," remember me "),r&&a.a.createElement("div",{className:Et.a.loginError}," ",r),a.a.createElement("div",null,a.a.createElement("button",null," Log in")))})),Pt=Object(v.b)((function(e){return{isAuth:e.auth.isAuth}}),{authorizeOnServiceThunkCreator:function(e){return function(){var t=Object(D.a)(I.a.mark((function t(r){var n,a;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.authorizeOnService(e);case 2:0===(n=t.sent).data.resultCode?r(ne()):(a=n.data.messages.length>0?n.data.messages[0]:"Some error",r(Object(Z.a)("login",{_error:a})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(bt.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(wt,{onSubmit:function(t){console.log(t),e.authorizeOnServiceThunkCreator(t)}}))})),Ot=a.a.lazy((function(){return r.e(4).then(r.bind(null,303))})),kt=a.a.lazy((function(){return r.e(3).then(r.bind(null,304))})),_t=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeAppThunkCreator()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(ht,null),a.a.createElement("main",{className:g.a.page_Main},a.a.createElement("div",{className:g.a.navBar},a.a.createElement(we,{state:this.props.state.sideBar})),a.a.createElement("div",{className:g.a.content},a.a.createElement(m.b,{path:"/login",render:function(){return a.a.createElement(Pt,null)}}),a.a.createElement(m.b,{path:"/profile/:userId?",render:lt(kt)})," ",a.a.createElement(m.b,{path:"/dialogs",render:function(){return a.a.createElement(ze,null)}})," ",a.a.createElement(m.b,{path:"/users",render:function(){return a.a.createElement(ut,null)}}),a.a.createElement(m.b,{path:"/news",render:lt(Ot)}),a.a.createElement(m.b,{path:"/music",render:function(){return a.a.createElement(ke,null)}}),a.a.createElement(m.b,{path:"/settings",render:function(){return a.a.createElement(je,null)}})))):a.a.createElement(et.a,null)}}]),t}(a.a.Component),yt=Object(h.d)(m.f,Object(v.b)((function(e){return{initialized:e.app.initialized}}),{initializeAppThunkCreator:function(){return function(e){var t=e(ne());Promise.all([t]).then((function(){e({type:"social_network/app/SET_INITIALIZED_SUCCESS"})}))}}}))(_t),jt=function(){return a.a.createElement(d.a,{basename:"/React-project"},"  ",a.a.createElement(v.a,{store:ge},a.a.createElement(yt,{state:ge.getState(),dispatch:ge.dispatch.bind(ge)})))};s.a.render(a.a.createElement(jt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},39:function(e,t,r){e.exports={formControl:"FormsControls_formControl__1TLvR",error:"FormsControls_error__2Tgz9",loginError:"FormsControls_loginError__f8jNE"}},42:function(e,t){e.exports="data:image/png;base64,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"},43:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},51:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return u}));var n=r(94),a=r(0),o=r.n(a),s=r(39),i=r.n(s),c=function(e){var t=e.input,r=e.meta,a=Object(n.a)(e,["input","meta"]);return o.a.createElement("div",{className:i.a.formControl+" "+(r.error&&r.touched?i.a.error:"")},o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},t,a))),r.error&&r.touched&&o.a.createElement("span",null,r.error)," ")},u=function(e){var t=e.input,r=e.meta,a=Object(n.a)(e,["input","meta"]);return o.a.createElement("div",{className:i.a.formControl+" "+(r.error&&r.touched?i.a.error:"")},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,a))),r.error&&r.touched&&o.a.createElement("span",null,r.error)," ")}},56:function(e,t,r){e.exports={dialogs:"Dialogs_dialogs__kcDDu",dialogsItems:"Dialogs_dialogsItems__14Q4t",messages:"Dialogs_messages__26W2u"}},67:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(142),s=r.n(o);t.a=function(e){return a.a.createElement("img",{src:s.a})}},71:function(e,t,r){e.exports={"app-wrapper":"App_app-wrapper__2m5HR",page_Main:"App_page_Main__1PKxi"}},90:function(e,t,r){e.exports={friendsItem:"FriendsSiteBar_friendsItem__87vA9"}},95:function(e,t,r){"use strict";r.d(t,"d",(function(){return d})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return b})),r.d(t,"a",(function(){return A}));var n=r(8),a=r.n(n),o=r(18),s=r(38),i=r(20),c=r(13);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p="social_network/profile/ADD-POST",f="social_network/profile/SET_USER_PROFILE",g="social_network/profile/ADD_USER_STATUS",m={posts:[{id:1,message:"Dorow, my name is React",likesCount:1},{id:2,message:"It is first post",likesCount:16},{id:3,message:"It is thirst post",likesCount:9},{id:3,message:"yes",likesCount:111}],profile:null,status:""},d=function(e){return{type:p,formData:e}},v=function(e){return{type:g,status:e}},h=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getUserProfile(e);case 2:n=t.sent,r((a=n.data,{type:f,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getUserStatus(e);case 2:n=t.sent,r(v(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updeteStatus(e);case 2:0===t.sent.data.resultCode&&r(v(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return l({},e,{posts:[].concat(Object(s.a)(e.posts),[{id:5,message:t.formData.newPostText,likesCount:7}])});case f:return l({},e,{profile:t.profile});case g:return l({},e,{status:t.status});default:return e}}}},[[171,1,2]]]);
//# sourceMappingURL=main.ed3d196c.chunk.js.map