function _classCallCheck(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,o){for(var t=0;t<o.length;t++){var e=o[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,o,t){return o&&_defineProperties(n.prototype,o),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"F/Sz":function(n,o,t){"use strict";t.r(o),t.d(o,"FormsFiltersPageModule",(function(){return _}));var e=t("ofXK"),i=t("tyNb"),a=t("3Pt+"),r=t("TEn/"),c=t("j1ZV"),g=t("lfmG"),l=t("fXoL");function b(n,o){if(1&n){var t=l.Rb();l.Qb(0,"ion-button",1),l.Yb("click",(function(){l.rc(t);var n=o.index;return l.cc().rate(n+1)})),l.Lb(1,"ion-icon",2),l.Pb()}if(2&n){var e=o.$implicit,i=o.index,a=l.cc();l.zb(1),l.jc("name",void 0===a.value?1===e?"star":2===e?"star-half":"star-outline":a.value>i?a.value<i+1?"star-half":"star":"star-outline")}}var d,s,P,p=((d=function(){function n(){_classCallCheck(this,n),this.max=5,this.readOnly=!1,this.propagateChange=function(){}}return _createClass(n,[{key:"ngOnInit",value:function(){for(var n=[],o=0;o<this.max;o++)n[o]=this.innerValue>o&&this.innerValue<o+1?2:this.innerValue>o?1:0;this.range=n}},{key:"writeValue",value:function(n){n!==this.innerValue&&(this.innerValue=n)}},{key:"registerOnChange",value:function(n){this.propagateChange=n}},{key:"registerOnTouched",value:function(){}},{key:"rate",value:function(n){!this.readOnly&&n>=0&&n<=this.range.length&&(this.value=n)}},{key:"value",get:function(){return this.innerValue},set:function(n){n!==this.innerValue&&(this.innerValue=n,this.propagateChange(n))}}]),n}()).\u0275fac=function(n){return new(n||d)},d.\u0275cmp=l.Eb({type:d,selectors:[["app-rating-input"]],inputs:{max:"max",readOnly:"readOnly"},features:[l.yb([{provide:a.h,useExisting:Object(l.S)((function(){return d})),multi:!0}])],decls:1,vars:1,consts:[["class","rating-icon","fill","clear","shape","round",3,"click",4,"ngFor","ngForOf"],["fill","clear","shape","round",1,"rating-icon",3,"click"],["slot","icon-only",3,"name"]],template:function(n,o){1&n&&l.wc(0,b,2,1,"ion-button",0),2&n&&l.jc("ngForOf",o.range)},directives:[e.l,r.g,r.m],styles:["app-rating-input{--rating-background:transparent;--rating-color:#000;--rating-size:32px;display:flex;align-items:center;justify-content:flex-end}app-rating-input ion-button.rating-icon{--background:var(--rating-background);--color:var(--rating-color);--color-activated:var(--rating-color);--box-shadow:none;--padding-bottom:0px;--padding-end:4px;--padding-start:4px;--padding-top:0px;margin:0;flex:1;width:var(--rating-size)}"],encapsulation:2}),d),m=t("B7gC"),u=function(){return{w:1,h:1}},C=[{path:"",component:(s=function(){function n(){_classCallCheck(this,n),this.rangeForm=new a.c({single:new a.a(25),dual:new a.a({lower:12,upper:23})}),this.checkboxForm=new a.c({person_1:new a.a(!0),person_2:new a.a(!1),person_3:new a.a(!1),person_4:new a.a(!0),person_5:new a.a(!1)}),this.radioForm=new a.c({selected_option:new a.a("apple")}),this.checkboxTagsForm=new a.c({tag_1:new a.a(!0),tag_2:new a.a(!1),tag_3:new a.a(!0),tag_4:new a.a(!0),tag_5:new a.a(!1),tag_6:new a.a(!1),tag_7:new a.a({value:!0,disabled:!0}),tag_8:new a.a(!1)}),this.radioTagsForm=new a.c({selected_option:new a.a("any")}),this.switchersForm=new a.c({notifications:new a.a(!0),email_notifications:new a.a(!1)}),this.counterForm=new a.c({counter:new a.a(5,Object(g.b)(1,7)),counter2:new a.a(2,Object(g.b)(1,5))}),this.ratingForm=new a.c({rate:new a.a(2.5),rate2:new a.a(1.5)}),this.radioColorForm=new a.c({selected_color:new a.a("#fc9961")})}return _createClass(n,[{key:"rangeChange",value:function(n){console.log("range change",n)}}]),n}(),s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=l.Eb({type:s,selectors:[["forms-filters-page"]],decls:267,vars:32,consts:[["color","primary"],["slot","start"],[1,"filters-content"],[1,"filters-group"],[1,"range-list",3,"formGroup"],[1,"range-item"],["size","12"],[1,"range-header"],[1,"range-value"],[1,"range-label"],["formControlName","dual","color","secondary","dualKnobs","true","min","1","max","40","step","1",1,"range-control",3,"ionChange"],["formControlName","single","color","secondary","min","0","max","50","step","1",1,"range-control",3,"ionChange"],[3,"formGroup"],["lines","full",1,"checkbox-list"],[1,"checkbox-item"],[1,"checkbox-label"],["color","secondary","formControlName","person_1"],["color","secondary","formControlName","person_2"],["color","secondary","formControlName","person_3"],["color","secondary","formControlName","person_4"],["color","secondary","formControlName","person_5"],["lines","full",1,"radio-list"],["formControlName","selected_option",1,"radio-group"],[1,"radio-item"],[1,"radio-label"],["slot","start","color","secondary","value","apple"],["slot","start","color","secondary","value","banana"],["slot","start","color","secondary","value","orange","disabled","true"],["slot","start","color","secondary","value","kiwi"],[1,"checkbox-tags","square-checkbox-tags"],["lines","none",1,"checkbox-tag"],[1,"tag-label"],["formControlName","tag_1"],["formControlName","tag_2"],["formControlName","tag_3"],["formControlName","tag_4"],["formControlName","tag_5"],["formControlName","tag_6"],["formControlName","tag_7"],["formControlName","tag_8"],[1,"checkbox-tags","rounded-checkbox-tags"],["lines","none",1,"checkbox-tag","rounded-tag"],["formControlName","selected_option"],[1,"radio-tags"],["lines","none",1,"radio-tag"],["value","any"],["value","1"],["value","2","disabled","true"],["value","3"],["lines","full",1,"toggle-list"],[1,"toggle-item"],[1,"toggle-label"],["color","secondary","formControlName","notifications"],["color","secondary","formControlName","email_notifications"],["lines","full",1,"counter-list"],[1,"counter-item"],[1,"counter-label"],["formControlName","counter"],[1,"counter-value"],["formControlName","counter2","basic",""],["lines","full",1,"ratings-list"],[1,"rating-item"],[1,"rating-label"],["formControlName","rate","max","5"],["formControlName","rate2","max","3","readOnly","true"],["formControlName","selected_color"],[1,"color-radio-group"],[1,"color-radio",2,"--color-radio-background","#fc6161"],[3,"ratio"],[1,"color-radio-inner-wrapper"],[1,"color-label"],["value","#fc6161"],[1,"color-radio",2,"--color-radio-background","#fc9961"],["value","#fc9961"],[1,"color-radio",2,"--color-radio-background","#fcea61"],["value","#fcea61","disabled","true"],[1,"color-radio",2,"--color-radio-background","#affc61"],["value","#affc61"],[1,"color-radio",2,"--color-radio-background","#61fcc5"],["value","#61fcc5"],[1,"color-radio",2,"--color-radio-background","#fc61ad"],["value","#fc61ad"],[1,"color-radio",2,"--color-radio-background","#b561fc"],["value","#b561fc"],[1,"color-radio",2,"--color-radio-background","#6182fc"],["value","#6182fc"],[1,"color-radio",2,"--color-radio-background","#61d1fc"],["value","#61d1fc"]],template:function(n,o){1&n&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar",0),l.Qb(2,"ion-buttons",1),l.Lb(3,"ion-menu-button"),l.Pb(),l.Qb(4,"ion-title"),l.yc(5,"Filters"),l.Pb(),l.Pb(),l.Pb(),l.Qb(6,"ion-content",2),l.Qb(7,"ion-item-group",3),l.Qb(8,"ion-item-divider"),l.Qb(9,"ion-label"),l.yc(10,"Range"),l.Pb(),l.Pb(),l.Qb(11,"form",4),l.Qb(12,"ion-row",5),l.Qb(13,"ion-col",6),l.Qb(14,"div",7),l.Qb(15,"span",8),l.yc(16),l.Pb(),l.Qb(17,"span",9),l.yc(18,"Quantity"),l.Pb(),l.Qb(19,"span",8),l.yc(20),l.Pb(),l.Pb(),l.Pb(),l.Qb(21,"ion-col",6),l.Qb(22,"ion-range",10),l.Yb("ionChange",(function(n){return o.rangeChange(n)})),l.Pb(),l.Pb(),l.Pb(),l.Qb(23,"ion-row",5),l.Qb(24,"ion-col",6),l.Qb(25,"div",7),l.Qb(26,"span",9),l.yc(27,"Amount"),l.Pb(),l.Qb(28,"span",8),l.yc(29),l.Pb(),l.Pb(),l.Pb(),l.Qb(30,"ion-col",6),l.Qb(31,"ion-range",11),l.Yb("ionChange",(function(n){return o.rangeChange(n)})),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(32,"ion-item-divider"),l.Qb(33,"ion-label"),l.yc(34,"Multiple Items"),l.Pb(),l.Pb(),l.Qb(35,"form",12),l.Qb(36,"ion-list",13),l.Qb(37,"ion-item",14),l.Qb(38,"ion-label",15),l.yc(39,"Sophia Martin"),l.Pb(),l.Lb(40,"ion-checkbox",16),l.Pb(),l.Qb(41,"ion-item",14),l.Qb(42,"ion-label",15),l.yc(43,"Mattie Abbott"),l.Pb(),l.Lb(44,"ion-checkbox",17),l.Pb(),l.Qb(45,"ion-item",14),l.Qb(46,"ion-label",15),l.yc(47,"Marguerite Alvarez"),l.Pb(),l.Lb(48,"ion-checkbox",18),l.Pb(),l.Qb(49,"ion-item",14),l.Qb(50,"ion-label",15),l.yc(51,"Lewis Padilla"),l.Pb(),l.Lb(52,"ion-checkbox",19),l.Pb(),l.Qb(53,"ion-item",14),l.Qb(54,"ion-label",15),l.yc(55,"Nannie Willis"),l.Pb(),l.Lb(56,"ion-checkbox",20),l.Pb(),l.Pb(),l.Pb(),l.Qb(57,"ion-item-divider"),l.Qb(58,"ion-label"),l.yc(59,"Pick One"),l.Pb(),l.Pb(),l.Qb(60,"form",12),l.Qb(61,"ion-list",21),l.Qb(62,"ion-radio-group",22),l.Qb(63,"ion-item",23),l.Qb(64,"ion-label",24),l.yc(65,"Apple"),l.Pb(),l.Lb(66,"ion-radio",25),l.Pb(),l.Qb(67,"ion-item",23),l.Qb(68,"ion-label",24),l.yc(69,"Banana"),l.Pb(),l.Lb(70,"ion-radio",26),l.Pb(),l.Qb(71,"ion-item",23),l.Qb(72,"ion-label",24),l.yc(73,"Orange"),l.Pb(),l.Lb(74,"ion-radio",27),l.Pb(),l.Qb(75,"ion-item",23),l.Qb(76,"ion-label",24),l.yc(77,"Kiwi"),l.Pb(),l.Lb(78,"ion-radio",28),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(79,"ion-item-divider"),l.Qb(80,"ion-label"),l.yc(81,"Multiple Tags"),l.Pb(),l.Pb(),l.Qb(82,"form",12),l.Qb(83,"ion-row",29),l.Qb(84,"ion-item",30),l.Qb(85,"ion-label",31),l.yc(86,"Indonesia"),l.Pb(),l.Lb(87,"ion-checkbox",32),l.Pb(),l.Qb(88,"ion-item",30),l.Qb(89,"ion-label",31),l.yc(90,"Pitcairn Islands"),l.Pb(),l.Lb(91,"ion-checkbox",33),l.Pb(),l.Qb(92,"ion-item",30),l.Qb(93,"ion-label",31),l.yc(94,"Malta"),l.Pb(),l.Lb(95,"ion-checkbox",34),l.Pb(),l.Qb(96,"ion-item",30),l.Qb(97,"ion-label",31),l.yc(98,"Sierra Leone"),l.Pb(),l.Lb(99,"ion-checkbox",35),l.Pb(),l.Qb(100,"ion-item",30),l.Qb(101,"ion-label",31),l.yc(102,"Dominican Republic"),l.Pb(),l.Lb(103,"ion-checkbox",36),l.Pb(),l.Qb(104,"ion-item",30),l.Qb(105,"ion-label",31),l.yc(106,"Antigua and Barbuda"),l.Pb(),l.Lb(107,"ion-checkbox",37),l.Pb(),l.Qb(108,"ion-item",30),l.Qb(109,"ion-label",31),l.yc(110,"Macedonia"),l.Pb(),l.Lb(111,"ion-checkbox",38),l.Pb(),l.Qb(112,"ion-item",30),l.Qb(113,"ion-label",31),l.yc(114,"Vietnam"),l.Pb(),l.Lb(115,"ion-checkbox",39),l.Pb(),l.Pb(),l.Pb(),l.Qb(116,"ion-item-divider"),l.Qb(117,"ion-label"),l.yc(118,"Multiple Tags (rounded)"),l.Pb(),l.Pb(),l.Qb(119,"form",12),l.Qb(120,"ion-row",40),l.Qb(121,"ion-item",41),l.Qb(122,"ion-label",31),l.yc(123,"Indonesia"),l.Pb(),l.Lb(124,"ion-checkbox",32),l.Pb(),l.Qb(125,"ion-item",41),l.Qb(126,"ion-label",31),l.yc(127,"Pitcairn Islands"),l.Pb(),l.Lb(128,"ion-checkbox",33),l.Pb(),l.Qb(129,"ion-item",41),l.Qb(130,"ion-label",31),l.yc(131,"Malta"),l.Pb(),l.Lb(132,"ion-checkbox",34),l.Pb(),l.Qb(133,"ion-item",41),l.Qb(134,"ion-label",31),l.yc(135,"Sierra Leone"),l.Pb(),l.Lb(136,"ion-checkbox",35),l.Pb(),l.Qb(137,"ion-item",41),l.Qb(138,"ion-label",31),l.yc(139,"Dominican Republic"),l.Pb(),l.Lb(140,"ion-checkbox",36),l.Pb(),l.Qb(141,"ion-item",41),l.Qb(142,"ion-label",31),l.yc(143,"Antigua and Barbuda"),l.Pb(),l.Lb(144,"ion-checkbox",37),l.Pb(),l.Qb(145,"ion-item",41),l.Qb(146,"ion-label",31),l.yc(147,"Macedonia"),l.Pb(),l.Lb(148,"ion-checkbox",38),l.Pb(),l.Qb(149,"ion-item",41),l.Qb(150,"ion-label",31),l.yc(151,"Vietnam"),l.Pb(),l.Lb(152,"ion-checkbox",39),l.Pb(),l.Pb(),l.Pb(),l.Qb(153,"ion-item-divider"),l.Qb(154,"ion-label"),l.yc(155,"Budget (Radio Tags)"),l.Pb(),l.Pb(),l.Qb(156,"form",12),l.Qb(157,"ion-radio-group",42),l.Qb(158,"ion-row",43),l.Qb(159,"ion-item",44),l.Qb(160,"ion-label",31),l.yc(161,"Any"),l.Pb(),l.Lb(162,"ion-radio",45),l.Pb(),l.Qb(163,"ion-item",44),l.Qb(164,"ion-label",31),l.Qb(165,"span"),l.yc(166,"$"),l.Pb(),l.Pb(),l.Lb(167,"ion-radio",46),l.Pb(),l.Qb(168,"ion-item",44),l.Qb(169,"ion-label",31),l.Qb(170,"span"),l.yc(171,"$$"),l.Pb(),l.Pb(),l.Lb(172,"ion-radio",47),l.Pb(),l.Qb(173,"ion-item",44),l.Qb(174,"ion-label",31),l.Qb(175,"span"),l.yc(176,"$$$"),l.Pb(),l.Pb(),l.Lb(177,"ion-radio",48),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(178,"ion-item-divider"),l.Qb(179,"ion-label"),l.yc(180,"Toggle"),l.Pb(),l.Pb(),l.Qb(181,"form",12),l.Qb(182,"ion-list",49),l.Qb(183,"ion-item",50),l.Qb(184,"ion-label",51),l.yc(185,"Notifications"),l.Pb(),l.Lb(186,"ion-toggle",52),l.Pb(),l.Qb(187,"ion-item",50),l.Qb(188,"ion-label",51),l.yc(189,"Email notifications"),l.Pb(),l.Lb(190,"ion-toggle",53),l.Pb(),l.Pb(),l.Pb(),l.Qb(191,"ion-item-divider"),l.Qb(192,"ion-label"),l.yc(193,"Add & Subtract"),l.Pb(),l.Pb(),l.Qb(194,"form",12),l.Qb(195,"ion-list",54),l.Qb(196,"ion-item",55),l.Qb(197,"ion-label",56),l.yc(198,"Amount"),l.Pb(),l.Lb(199,"app-counter-input",57),l.Pb(),l.Qb(200,"ion-item",55),l.Qb(201,"ion-label",56),l.yc(202,"Bedrooms"),l.Pb(),l.Qb(203,"ion-label",58),l.yc(204),l.Pb(),l.Lb(205,"app-counter-input",59),l.Pb(),l.Pb(),l.Pb(),l.Qb(206,"ion-item-divider"),l.Qb(207,"ion-label"),l.yc(208,"Rating Component"),l.Pb(),l.Pb(),l.Qb(209,"form",12),l.Qb(210,"ion-list",60),l.Qb(211,"ion-item",61),l.Qb(212,"ion-label",62),l.yc(213,"Rate"),l.Pb(),l.Lb(214,"app-rating-input",63),l.Pb(),l.Qb(215,"ion-item",61),l.Qb(216,"ion-label",62),l.yc(217,"Read Only"),l.Pb(),l.Lb(218,"app-rating-input",64),l.Pb(),l.Pb(),l.Pb(),l.Qb(219,"ion-item-divider"),l.Qb(220,"ion-label"),l.yc(221,"Color chooser"),l.Pb(),l.Pb(),l.Qb(222,"form",12),l.Qb(223,"ion-radio-group",65),l.Qb(224,"ion-row",66),l.Qb(225,"ion-item",67),l.Qb(226,"app-aspect-ratio",68),l.Qb(227,"div",69),l.Qb(228,"ion-label",70),l.yc(229,"Red"),l.Pb(),l.Lb(230,"ion-radio",71),l.Pb(),l.Pb(),l.Pb(),l.Qb(231,"ion-item",72),l.Qb(232,"app-aspect-ratio",68),l.Qb(233,"div",69),l.Lb(234,"ion-radio",73),l.Pb(),l.Pb(),l.Pb(),l.Qb(235,"ion-item",74),l.Qb(236,"app-aspect-ratio",68),l.Qb(237,"div",69),l.Lb(238,"ion-radio",75),l.Pb(),l.Pb(),l.Pb(),l.Qb(239,"ion-item",76),l.Qb(240,"app-aspect-ratio",68),l.Qb(241,"div",69),l.Lb(242,"ion-radio",77),l.Pb(),l.Pb(),l.Pb(),l.Qb(243,"ion-item",78),l.Qb(244,"app-aspect-ratio",68),l.Qb(245,"div",69),l.Lb(246,"ion-radio",79),l.Pb(),l.Pb(),l.Pb(),l.Qb(247,"ion-item",80),l.Qb(248,"app-aspect-ratio",68),l.Qb(249,"div",69),l.Lb(250,"ion-radio",81),l.Pb(),l.Pb(),l.Pb(),l.Qb(251,"ion-item",82),l.Qb(252,"app-aspect-ratio",68),l.Qb(253,"div",69),l.Qb(254,"ion-label",70),l.yc(255,"Purple"),l.Pb(),l.Lb(256,"ion-radio",83),l.Pb(),l.Pb(),l.Pb(),l.Qb(257,"ion-item",84),l.Qb(258,"app-aspect-ratio",68),l.Qb(259,"div",69),l.Qb(260,"ion-label",70),l.yc(261,"Blue"),l.Pb(),l.Lb(262,"ion-radio",85),l.Pb(),l.Pb(),l.Pb(),l.Qb(263,"ion-item",86),l.Qb(264,"app-aspect-ratio",68),l.Qb(265,"div",69),l.Lb(266,"ion-radio",87),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb()),2&n&&(l.zb(11),l.jc("formGroup",o.rangeForm),l.zb(5),l.zc(o.rangeForm.controls.dual.value.lower),l.zb(4),l.zc(o.rangeForm.controls.dual.value.upper),l.zb(9),l.zc(o.rangeForm.controls.single.value),l.zb(6),l.jc("formGroup",o.checkboxForm),l.zb(25),l.jc("formGroup",o.radioForm),l.zb(22),l.jc("formGroup",o.checkboxTagsForm),l.zb(37),l.jc("formGroup",o.checkboxTagsForm),l.zb(37),l.jc("formGroup",o.radioTagsForm),l.zb(25),l.jc("formGroup",o.switchersForm),l.zb(13),l.jc("formGroup",o.counterForm),l.zb(10),l.zc(o.counterForm.controls.counter2.value),l.zb(5),l.jc("formGroup",o.ratingForm),l.zb(13),l.jc("formGroup",o.radioColorForm),l.zb(4),l.jc("ratio",l.lc(23,u)),l.zb(6),l.jc("ratio",l.lc(24,u)),l.zb(4),l.jc("ratio",l.lc(25,u)),l.zb(4),l.jc("ratio",l.lc(26,u)),l.zb(4),l.jc("ratio",l.lc(27,u)),l.zb(4),l.jc("ratio",l.lc(28,u)),l.zb(4),l.jc("ratio",l.lc(29,u)),l.zb(6),l.jc("ratio",l.lc(30,u)),l.zb(6),l.jc("ratio",l.lc(31,u)))},directives:[r.l,r.T,r.h,r.v,r.R,r.k,r.q,r.p,r.r,a.o,a.j,a.d,r.C,r.j,r.A,r.bb,a.i,a.b,r.s,r.o,r.i,r.b,r.z,r.y,r.Z,r.S,g.a,p,m.a],styles:["[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background-shade);--page-tags-gutter:5px;--page-color-radio-items-per-row:5;--page-color-radio-gutter:2%;--page-color-radio-width:calc((100% - 2*var(--page-color-radio-gutter)*var(--page-color-radio-items-per-row))/var(--page-color-radio-items-per-row))}.filters-content[_ngcontent-%COMP%], .filters-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%]{--background:var(--page-background)}.filters-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%]{--padding-bottom:calc(var(--page-margin)/2);--padding-top:calc(var(--page-margin)/2);--padding-start:var(--page-margin);--padding-end:var(--page-margin);border:none}.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%]{background-color:var(--ion-color-lightest)}.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%]   .range-item[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding-top:var(--page-margin);-webkit-padding-start:var(--page-margin);padding-inline-start:var(--page-margin);-webkit-padding-end:var(--page-margin);padding-inline-end:var(--page-margin);box-shadow:inset 0 6px 3px -8px var(--ion-color-darkest)}.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%]   .range-item[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:calc(var(--page-margin)/2)}.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%]   .range-item[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-value[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%]   .range-item[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%]   .range-item[_ngcontent-%COMP%]   .range-control[_ngcontent-%COMP%]{--ion-text-color:var(--ion-color-medium);padding-top:0;padding-bottom:0}.filters-content[_ngcontent-%COMP%]   .checkbox-list[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%]{--padding-start:var(--page-margin);--padding-end:var(--page-margin);--inner-padding-end:0px}.filters-content[_ngcontent-%COMP%]   .checkbox-list[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-content[_ngcontent-%COMP%]   .checkbox-list[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{-webkit-margin-end:0;margin-inline-end:0}.filters-content[_ngcontent-%COMP%]   .radio-list[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]{display:block}.filters-content[_ngcontent-%COMP%]   .radio-list[_ngcontent-%COMP%]   .radio-item[_ngcontent-%COMP%]{--padding-start:var(--page-margin);--padding-end:var(--page-margin);--inner-padding-end:0px}.filters-content[_ngcontent-%COMP%]   .radio-list[_ngcontent-%COMP%]   .radio-item[_ngcontent-%COMP%]   .radio-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-content[_ngcontent-%COMP%]   .radio-list[_ngcontent-%COMP%]   .radio-item[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]{-webkit-margin-start:0;margin-inline-start:0}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]{padding:calc(var(--page-margin)/2) calc(var(--page-margin) - var(--page-tags-gutter));--checkbox-tag-color:#000;--checkbox-tag-background:#fff;--checkbox-tag-active-color:#fff;--checkbox-tag-active-background:#000}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--padding-start:0px;--inner-padding-end:8px;--inner-padding-start:8px;--ion-item-background:var(--checkbox-tag-background);--ion-item-color:var(--checkbox-tag-color)}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.rounded-tag[_ngcontent-%COMP%]{--border-radius:2.2rem}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%]{--ion-item-background:var(--checkbox-tag-active-background);--ion-item-color:var(--checkbox-tag-active-color)}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]{opacity:.5}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{opacity:1}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{margin:5px;font-size:14px;font-weight:500;letter-spacing:.2px;text-align:center}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{margin:0;width:0;--border-width:0px;height:0;--color-checked:transparent}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{padding:0 var(--page-tags-gutter);margin:var(--page-tags-gutter) 0}.filters-content[_ngcontent-%COMP%]   .checkbox-tags.square-checkbox-tags[_ngcontent-%COMP%]{background-color:var(--page-background)}.filters-content[_ngcontent-%COMP%]   .checkbox-tags.square-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--checkbox-tag-color:var(--ion-color-medium);--checkbox-tag-background:var(--ion-color-lightest);--checkbox-tag-active-color:var(--ion-color-lightest);--checkbox-tag-active-background:var(--ion-color-secondary)}.filters-content[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]{background-color:var(--ion-color-lightest)}.filters-content[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--checkbox-tag-color:var(--ion-color-lightest);--checkbox-tag-background:var(--ion-color-light-shade);--checkbox-tag-active-color:var(--ion-color-lightest);--checkbox-tag-active-background:var(--ion-color-secondary)}.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]{padding:0 calc(var(--page-margin) - var(--page-tags-gutter));background-color:var(--page-background);justify-content:space-between;--radio-tag-color:#000;--radio-tag-background:#fff;--radio-tag-active-color:#fff;--radio-tag-active-background:#000}.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag[_ngcontent-%COMP%]{--padding-start:0px;--inner-padding-end:8px;--inner-padding-start:8px;--min-height:38px;--border-radius:8px;--border-width:1px;--border-style:solid;--border-color:var(--radio-tag-color);--ion-item-background:var(--radio-tag-background);--ion-item-color:var(--radio-tag-color);flex:1}.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag.item-radio-checked[_ngcontent-%COMP%]{--ion-item-background:var(--radio-tag-active-background);--ion-item-color:var(--radio-tag-active-color)}.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag.item-interactive-disabled[_ngcontent-%COMP%]{opacity:.5}.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag.item-interactive-disabled[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{opacity:1}.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{margin:5px;font-size:14px;font-weight:500;letter-spacing:.2px;text-align:center}.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]{margin:0;width:0;--border-width:0px;height:0;--color-checked:transparent}.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag[_ngcontent-%COMP%]{--radio-tag-color:var(--ion-color-secondary);--radio-tag-background:var(--ion-color-lightest);--radio-tag-active-color:var(--ion-color-lightest);--radio-tag-active-background:var(--ion-color-secondary);padding:0 var(--page-tags-gutter);margin:var(--page-tags-gutter) 0}.filters-content[_ngcontent-%COMP%]   .toggle-list[_ngcontent-%COMP%]   .toggle-item[_ngcontent-%COMP%]{--padding-start:var(--page-margin);--padding-end:var(--page-margin);--inner-padding-end:0px}.filters-content[_ngcontent-%COMP%]   .toggle-list[_ngcontent-%COMP%]   .toggle-item[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-content[_ngcontent-%COMP%]   .toggle-list[_ngcontent-%COMP%]   .toggle-item[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%]{-webkit-padding-end:0;padding-inline-end:0}.filters-content[_ngcontent-%COMP%]   .counter-list[_ngcontent-%COMP%]   .counter-item[_ngcontent-%COMP%]{--padding-start:var(--page-margin);--padding-end:var(--page-margin);--inner-padding-end:0px}.filters-content[_ngcontent-%COMP%]   .counter-list[_ngcontent-%COMP%]   .counter-item[_ngcontent-%COMP%]   .counter-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-content[_ngcontent-%COMP%]   .counter-list[_ngcontent-%COMP%]   .counter-item[_ngcontent-%COMP%]   .counter-value[_ngcontent-%COMP%]{text-align:center;color:var(--ion-color-secondary)}.filters-content[_ngcontent-%COMP%]   .counter-list[_ngcontent-%COMP%]   .counter-item[_ngcontent-%COMP%]   app-counter-input[_ngcontent-%COMP%]{--counter-background:transparent;--counter-color:var(--ion-color-secondary);--counter-border-color:var(--ion-color-secondary)}.filters-content[_ngcontent-%COMP%]   .ratings-list[_ngcontent-%COMP%]   .rating-item[_ngcontent-%COMP%]{--padding-start:var(--page-margin);--padding-end:var(--page-margin);--inner-padding-end:0px}.filters-content[_ngcontent-%COMP%]   .ratings-list[_ngcontent-%COMP%]   .rating-item[_ngcontent-%COMP%]   .rating-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-content[_ngcontent-%COMP%]   .ratings-list[_ngcontent-%COMP%]   .rating-item[_ngcontent-%COMP%]   app-rating-input[_ngcontent-%COMP%]{--rating-color:var(--ion-color-secondary)}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]{padding:var(--page-margin) calc(var(--page-margin) - var(--page-color-radio-gutter));background-color:var(--ion-color-lightest);--color-radio-color:#fff;--color-radio-background:#ccc;--color-radio-active-border-rgb:255,255,255;--color-radio-border-radius:50%}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   .color-radio[_ngcontent-%COMP%]{--color-radio-color:#fff;--color-radio-background:#ccc;--color-radio-active-border-rgb:var(--ion-color-darkest-rgb);--color-radio-border-radius:40%;flex:0 0 var(--page-color-radio-width);max-width:var(--page-color-radio-width);margin:var(--page-color-radio-gutter)}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   .color-radio[_ngcontent-%COMP%]   .color-radio-inner-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio[_ngcontent-%COMP%]{--padding-bottom:0px;--padding-end:0px;--padding-top:0px;--padding-start:0px;--border-width:4px;--border-style:solid;--border-color:var(--color-radio-background);--background:var(--color-radio-background);--inner-padding-end:0px;--inner-border-width:0px;--min-height:initial;--border-radius:var(--color-radio-border-radius);border-radius:var(--color-radio-border-radius)}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio.item-radio-checked[_ngcontent-%COMP%]{--border-color:rgba(var(--color-radio-active-border-rgb),.3)!important;--box-shadow:none}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio.item-radio-checked[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{opacity:1}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio.item-interactive-disabled[_ngcontent-%COMP%]{opacity:.5}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio.item-interactive-disabled[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{opacity:1}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{--color:var(--color-radio-color);font-size:12px;opacity:.7}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]{margin:0;width:0;--border-width:0px;height:0;--color-checked:transparent}.md[_nghost-%COMP%]   .checkbox-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .checkbox-list[_ngcontent-%COMP%], .md[_nghost-%COMP%]   .counter-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .counter-list[_ngcontent-%COMP%], .md[_nghost-%COMP%]   .radio-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .radio-list[_ngcontent-%COMP%], .md[_nghost-%COMP%]   .range-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .range-list[_ngcontent-%COMP%], .md[_nghost-%COMP%]   .ratings-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .ratings-list[_ngcontent-%COMP%], .md[_nghost-%COMP%]   .toggle-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .toggle-list[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.ios[_nghost-%COMP%]   .checkbox-tags[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .checkbox-tags[_ngcontent-%COMP%], .ios[_nghost-%COMP%]   .radio-tags[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .radio-tags[_ngcontent-%COMP%]{margin-bottom:calc(var(--page-margin)*2)}"]}),s)}],_=((P=function n(){_classCallCheck(this,n)}).\u0275mod=l.Ib({type:P}),P.\u0275inj=l.Hb({factory:function(n){return new(n||P)},imports:[[e.c,r.U,a.f,a.l,i.i.forChild(C),c.a]]}),P)}}]);