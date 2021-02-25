function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{hO9l:function(e,n,t){"use strict";t.r(n),t.d(n,"TabsPageModule",(function(){return f}));var i,o,l,r=t("TEn/"),a=t("ofXK"),u=t("3Pt+"),c=t("tyNb"),s=t("tk/3"),d=t("fXoL"),h=[{path:"",component:(i=function(){function e(n){_classCallCheck(this,e),this.menu=n}return _createClass(e,[{key:"ionViewWillEnter",value:function(){this.menu.enable(!0)}}]),e}(),i.\u0275fac=function(e){return new(e||i)(d.Kb(r.X))},i.\u0275cmp=d.Eb({type:i,selectors:[["app-tabs"]],decls:14,vars:0,consts:[["slot","bottom"],["tab","categories"],["name","list-outline"],[1,"tab-title"],["tab","user"],["name","person-outline"],["tab","notifications"],["name","notifications-outline"]],template:function(e,n){1&e&&(d.Qb(0,"ion-tabs"),d.Qb(1,"ion-tab-bar",0),d.Qb(2,"ion-tab-button",1),d.Lb(3,"ion-icon",2),d.Qb(4,"ion-label",3),d.yc(5,"Categories"),d.Pb(),d.Pb(),d.Qb(6,"ion-tab-button",4),d.Lb(7,"ion-icon",5),d.Qb(8,"ion-label",3),d.yc(9,"Profile"),d.Pb(),d.Pb(),d.Qb(10,"ion-tab-button",6),d.Lb(11,"ion-icon",7),d.Qb(12,"ion-label",3),d.yc(13,"Notifications"),d.Pb(),d.Pb(),d.Pb(),d.Pb())},directives:[r.O,r.M,r.N,r.m,r.r],styles:["ion-tab-button[_ngcontent-%COMP%]{--color:var(--ion-color-medium-shade);--color-selected:var(--ion-color-dark)}"]}),i),children:[{path:"categories",children:[{path:"",loadChildren:function(){return t.e(29).then(t.bind(null,"kMJQ")).then((function(e){return e.CategoriesPageModule}))}},{path:"fashion",loadChildren:function(){return Promise.all([t.e(1),t.e(0),t.e(21)]).then(t.bind(null,"0toQ")).then((function(e){return e.FashionListingPageModule}))}},{path:"fashion/:productId",loadChildren:function(){return Promise.all([t.e(1),t.e(0),t.e(20)]).then(t.bind(null,"8DSg")).then((function(e){return e.FashionDetailsPageModule}))}},{path:"food",loadChildren:function(){return Promise.all([t.e(1),t.e(3),t.e(0),t.e(33)]).then(t.bind(null,"6i+d")).then((function(e){return e.FoodListingPageModule}))}},{path:"food/:productId",loadChildren:function(){return Promise.all([t.e(1),t.e(3),t.e(0),t.e(32)]).then(t.bind(null,"OQzY")).then((function(e){return e.FoodDetailsPageModule}))}},{path:"travel",loadChildren:function(){return Promise.all([t.e(1),t.e(0),t.e(26)]).then(t.bind(null,"HbU+")).then((function(e){return e.TravelListingPageModule}))}},{path:"travel/:productId",loadChildren:function(){return Promise.all([t.e(1),t.e(0),t.e(25)]).then(t.bind(null,"Tsqc")).then((function(e){return e.TravelDetailsPageModule}))}},{path:"deals",loadChildren:function(){return Promise.all([t.e(1),t.e(3),t.e(0),t.e(19)]).then(t.bind(null,"bkrf")).then((function(e){return e.DealsListingPageModule}))}},{path:"deals/:productId",loadChildren:function(){return Promise.all([t.e(1),t.e(3),t.e(0),t.e(31)]).then(t.bind(null,"pvlM")).then((function(e){return e.DealsDetailsPageModule}))}},{path:"real-estate",loadChildren:function(){return Promise.all([t.e(1),t.e(0),t.e(24)]).then(t.bind(null,"+Dkm")).then((function(e){return e.RealEstateListingPageModule}))}},{path:"real-estate/:productId",loadChildren:function(){return Promise.all([t.e(1),t.e(0),t.e(23)]).then(t.bind(null,"lkbD")).then((function(e){return e.RealEstateDetailsPageModule}))}}]},{path:"user",children:[{path:"",loadChildren:function(){return Promise.all([t.e(1),t.e(0),t.e(28)]).then(t.bind(null,"sSds")).then((function(e){return e.UserProfilePageModule}))}},{path:"friends",loadChildren:function(){return Promise.all([t.e(1),t.e(0),t.e(27)]).then(t.bind(null,"SJx6")).then((function(e){return e.UserFriendsPageModule}))}}]},{path:"notifications",children:[{path:"",loadChildren:function(){return t.e(38).then(t.bind(null,"wMrW")).then((function(e){return e.NotificationsPageModule}))}}]}]},{path:"",redirectTo:"app/categories",pathMatch:"full"}],b=((l=function e(){_classCallCheck(this,e)}).\u0275mod=d.Ib({type:l}),l.\u0275inj=d.Hb({factory:function(e){return new(e||l)},providers:[],imports:[[c.i.forChild(h),s.b],c.i]}),l),f=((o=function e(){_classCallCheck(this,e)}).\u0275mod=d.Ib({type:o}),o.\u0275inj=d.Hb({factory:function(e){return new(e||o)},imports:[[r.U,a.c,u.f,b]]}),o)}}]);