(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{JgOp:function(n,o,t){"use strict";t.r(o),t.d(o,"ForgotPasswordPageModule",(function(){return m}));var e=t("ofXK"),r=t("3Pt+"),a=t("tyNb"),i=t("TEn/"),s=t("j1ZV"),c=t("fXoL");function g(n,o){if(1&n&&(c.Qb(0,"div",13),c.Lb(1,"ion-icon",14),c.Qb(2,"span"),c.yc(3),c.Pb(),c.Pb()),2&n){const n=c.cc().$implicit;c.zb(3),c.zc(n.message)}}function p(n,o){if(1&n&&(c.Ob(0),c.wc(1,g,4,1,"div",12),c.Nb()),2&n){const n=o.$implicit,t=c.cc();c.zb(1),c.jc("ngIf",t.forgotPasswordForm.get("email").hasError(n.type)&&(t.forgotPasswordForm.get("email").dirty||t.forgotPasswordForm.get("email").touched))}}const d=[{path:"",component:(()=>{class n{constructor(n,o){this.router=n,this.menu=o,this.validation_messages={email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Enter a valid email."}]},this.forgotPasswordForm=new r.c({email:new r.a("test@test.com",r.n.compose([r.n.required,r.n.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]))})}ionViewDidEnter(){this.menu.enable(!1)}ionViewDidLeave(){this.menu.enable(!0)}recoverPassword(){console.log(this.forgotPasswordForm.value),this.router.navigate(["app/categories"])}}return n.\u0275fac=function(o){return new(o||n)(c.Kb(a.f),c.Kb(i.X))},n.\u0275cmp=c.Eb({type:n,selectors:[["app-forgot-password"]],decls:19,vars:3,consts:[["color","primary"],["slot","start"],[1,"forgot-password-content"],[1,"auth-title"],[1,"recover-message"],[3,"formGroup","ngSubmit"],["lines","full",1,"inputs-list"],[1,"input-item"],["type","email","placeholder","Email","formControlName","email","clearInput","","autocapitalize","off","inputmode","email"],[1,"error-container"],[4,"ngFor","ngForOf"],["type","submit","expand","block",1,"reset-password-btn",3,"disabled"],["class","error-message",4,"ngIf"],[1,"error-message"],["name","information-circle-outline"]],template:function(n,o){1&n&&(c.Qb(0,"ion-header"),c.Qb(1,"ion-toolbar",0),c.Qb(2,"ion-buttons",1),c.Lb(3,"ion-back-button"),c.Pb(),c.Qb(4,"ion-title"),c.yc(5,"Forgot Password?"),c.Pb(),c.Pb(),c.Pb(),c.Qb(6,"ion-content",2),c.Qb(7,"h2",3),c.yc(8,"Recover your password"),c.Pb(),c.Qb(9,"p",4),c.yc(10," Please enter your email address and we'll send you an email to reset your password. "),c.Pb(),c.Qb(11,"form",5),c.Yb("ngSubmit",(function(){return o.recoverPassword()})),c.Qb(12,"ion-list",6),c.Qb(13,"ion-item",7),c.Lb(14,"ion-input",8),c.Pb(),c.Qb(15,"div",9),c.wc(16,p,2,1,"ng-container",10),c.Pb(),c.Pb(),c.Qb(17,"ion-button",11),c.yc(18,"Reset Password"),c.Pb(),c.Pb(),c.Pb()),2&n&&(c.zb(11),c.jc("formGroup",o.forgotPasswordForm),c.zb(5),c.jc("ngForOf",o.validation_messages.email),c.zb(1),c.jc("disabled",!o.forgotPasswordForm.valid))},directives:[i.l,i.T,i.h,i.d,i.e,i.R,i.k,r.o,r.j,r.d,i.s,i.o,i.n,i.cb,r.i,r.b,e.l,i.g,e.m,i.m],styles:["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background-shade)}.forgot-password-content[_ngcontent-%COMP%]{--background:var(--page-background);--padding-start:var(--page-margin);--padding-end:var(--page-margin);--padding-top:var(--page-margin);--padding-bottom:var(--page-margin)}.forgot-password-content[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-weight:700;margin-top:calc(var(--page-margin)/2);margin-bottom:calc(var(--page-margin)*1.5);letter-spacing:.6px}.forgot-password-content[_ngcontent-%COMP%]   .recover-message[_ngcontent-%COMP%]{color:var(--ion-color-medium);margin:calc(var(--page-margin)/2) 0}.forgot-password-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]{--ion-item-background:var(--page-background)}.forgot-password-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;--inner-padding-end:0px}.forgot-password-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{margin:calc(var(--page-margin)/2) 0;display:flex;align-items:center;color:var(--ion-color-danger);font-size:14px}.forgot-password-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{-webkit-padding-end:calc(var(--page-margin)/2);padding-inline-end:calc(var(--page-margin)/2)}.forgot-password-content[_ngcontent-%COMP%]   .reset-password-btn[_ngcontent-%COMP%]{margin:calc(var(--page-margin)/2) 0}"]}),n})()}];let m=(()=>{class n{}return n.\u0275mod=c.Ib({type:n}),n.\u0275inj=c.Hb({factory:function(o){return new(o||n)},imports:[[e.c,r.f,r.l,i.U,a.i.forChild(d),s.a]]}),n})()}}]);