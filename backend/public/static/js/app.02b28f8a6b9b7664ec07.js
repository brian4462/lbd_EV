webpackJsonp([1],{"4Lfe":function(t,n){},"9M+g":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("7+uW"),a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-button",{attrs:{variant:"outline-primary"}},[this._v("Button")]),this._v(" "),n("router-view")],1)},staticRenderFns:[]};var u=e("VU/8")({name:"App"},a,!1,function(t){e("4Lfe")},null,null).exports,o=e("/ocq"),s={data:function(){return{user:null}},created:function(){var t=this;this.$http.get("/api/login").then(function(n){var e=n.data.user;e&&(t.user=e)}).catch(function(t){console.error(t)})}},i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.user?e("div",[e("h1",[t._v("접속한 유저")]),t._v(" "),e("p",[t._v("아이디:"+t._s(t.user.id))]),t._v(" "),e("p",[t._v("비밀번호:"+t._s(t.user.password))]),t._v(" "),e("p",[t._v("이름:"+t._s(t.user.name))]),t._v(" "),e("b-button",[t._v("Button")]),t._v(" "),e("b-button",{attrs:{variant:"danger"}},[t._v("Button")]),t._v(" "),e("b-button",{attrs:{variant:"success"}},[t._v("Button")]),t._v(" "),e("b-button",{attrs:{variant:"outline-primary"}},[t._v("Button")])],1):t._e()},staticRenderFns:[]};var c=e("VU/8")(s,i,!1,function(t){e("tHx2")},null,null).exports;r.default.use(o.a);var v=new o.a({routes:[{path:"/",name:"IndexPage",component:c}]}),p=e("mtWM"),l=e.n(p),_=e("Tqaz");e("qb6w"),e("9M+g");r.default.prototype.$http=l.a,r.default.use(_.a),r.default.config.productionTip=!1,new r.default({el:"#app",router:v,components:{App:u},template:"<App/>"})},qb6w:function(t,n){},tHx2:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.02b28f8a6b9b7664ec07.js.map