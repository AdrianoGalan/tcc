!function(){function n(n,r){for(var i=0;i<r.length;i++){var t=r[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function r(r,i,t){return i&&n(r.prototype,i),t&&n(r,t),r}function i(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(self.webpackChunktcc=self.webpackChunktcc||[]).push([[656],{1656:function(n,t,o){"use strict";o.r(t),o.d(t,{OsModule:function(){return L}});var e=o(1116),a=function n(){i(this,n)},u=o(1462),s=o(7368),l=o(4354),c=o(5522),f=o(1423),m=o(611),g=o(529),p=o(2693),d=function(){var n=function(){function n(r){i(this,n),this.http=r,this.API="".concat(g.N.API,"os")}return r(n,[{key:"list",value:function(){return this.http.get(this.API).pipe((0,m.q)(1))}},{key:"salvarFuncionario",value:function(n){return this.http.post(this.API,JSON.stringify(n),{headers:(new p.WM).set("Content-Type","application/json"),responseType:"text"}).pipe((0,m.q)(1))}},{key:"getOs",value:function(n){return this.http.get("".concat(this.API,"/").concat(n)).pipe((0,m.q)(1))}}]),n}();return n.\u0275fac=function(r){return new(r||n)(s.LFG(p.eN))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n}();function Z(n,r){if(1&n&&(s.TgZ(0,"option",16),s._uU(1),s.qZA()),2&n){var i=r.$implicit;s.Q6J("ngValue",i),s.xp6(1),s.Oqu(i.sigla)}}function v(n,r){if(1&n&&(s.TgZ(0,"option"),s._uU(1),s.qZA()),2&n){var i=r.$implicit;s.xp6(1),s.Oqu(i)}}var h=function(n){return{"is-invalid":n}};function q(n,r){if(1&n){var i=s.EpF();s.TgZ(0,"form",3),s.NdJ("ngSubmit",function(){return s.CHM(i),s.oxw().onSubmit()}),s.TgZ(1,"legend"),s._uU(2,"Gerar nova OS"),s.qZA(),s.TgZ(3,"div",4),s.TgZ(4,"label",5),s._uU(5,"Maquina:"),s.qZA(),s.TgZ(6,"div",6),s.TgZ(7,"select",7),s.YNc(8,Z,2,2,"option",8),s.qZA(),s.TgZ(9,"div",9),s._uU(10,"Selecione a Maquina"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(11,"div",4),s.TgZ(12,"label",10),s._uU(13,"Problema:"),s.qZA(),s.TgZ(14,"div",6),s._UZ(15,"textarea",11),s.TgZ(16,"div",9),s._uU(17,"Descreva o problema da maquina "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(18,"div",4),s.TgZ(19,"label",12),s._uU(20,"Oficina:"),s.qZA(),s.TgZ(21,"div",6),s.TgZ(22,"select",13),s.YNc(23,v,2,1,"option",14),s.qZA(),s.qZA(),s.qZA(),s.TgZ(24,"button",15),s._uU(25,"Salvar"),s.qZA(),s.qZA()}if(2&n){var t=r.ngIf,o=s.oxw();s.Q6J("formGroup",o.formulario),s.xp6(7),s.Q6J("ngClass",s.VKq(5,h,o.submitted&&o.hasError("maquina"))),s.xp6(1),s.Q6J("ngForOf",t),s.xp6(7),s.Q6J("ngClass",s.VKq(7,h,o.submitted&&o.hasError("problema"))),s.xp6(8),s.Q6J("ngForOf",o.oficina)}}function b(n,r){1&n&&(s.TgZ(0,"div",17),s.TgZ(1,"span",18),s._uU(2,"Loading..."),s.qZA(),s.qZA())}var _=function(){var n=function(){function n(r,t,o,e,a,u){i(this,n),this.formBuilder=r,this.route=t,this.router=o,this.funcionarioService=e,this.maquinaService=a,this.osService=u,this.submitted=!1,this.oficina=["Calderaria","Eletrica","Mecanica"]}return r(n,[{key:"ngOnInit",value:function(){this.maquina$=this.maquinaService.list().pipe(),this.formulario=this.formBuilder.group({problema:[null,[u.kI.required,u.kI.minLength(3),u.kI.maxLength(250)]],maquina:[null,u.kI.required],oficina:[null,u.kI.required]})}},{key:"onSubmit",value:function(){var n=this;if(this.submitted=!0,this.formulario.valid){var r=new a;r.maquina=this.formulario.value.maquina,r.problema=this.formulario.value.problema,r.oficina=this.formulario.value.oficina,this.osService.salvarFuncionario(r).subscribe(function(r){n.formulario.reset(),n.router.navigate(["os"])},function(n){})}}},{key:"hasError",value:function(n){var r;return null===(r=this.formulario.get(n))||void 0===r?void 0:r.errors}}]),n}();return n.\u0275fac=function(r){return new(r||n)(s.Y36(u.qu),s.Y36(l.gz),s.Y36(l.F0),s.Y36(c.w),s.Y36(f.P),s.Y36(d))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-os-cadastrar"]],decls:5,vars:4,consts:[[1,"container",2,"padding-top","10px","width","60%"],[3,"formGroup","ngSubmit",4,"ngIf","ngIfElse"],["loading",""],[3,"formGroup","ngSubmit"],[1,"row","md-6"],["for","maquina",1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["id","maquina","formControlName","maquina",1,"form-control",2,"margin","5px",3,"ngClass"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"invalid-feedback"],["for","problema",1,"col-sm-3","col-form-label"],["type","text","placeholder","Descreva o problema da maquina","formControlName","problema",1,"form-control",2,"margin","5px",3,"ngClass"],["for","oficia",1,"col-sm-3","col-form-label"],["id","oficina","formControlName","oficina",1,"form-control",2,"margin","5px"],[4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-primary"],[3,"ngValue"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(n,r){if(1&n&&(s.TgZ(0,"div",0),s.YNc(1,q,26,9,"form",1),s.ALo(2,"async"),s.qZA(),s.YNc(3,b,3,0,"ng-template",null,2,s.W1O)),2&n){var i=s.MAs(4);s.xp6(1),s.Q6J("ngIf",s.lcZ(2,2,r.maquina$))("ngIfElse",i)}},directives:[e.O5,u._Y,u.JL,u.sg,u.EJ,u.JJ,u.u,e.mk,e.sg,u.Fj,u.YN,u.Kr],pipes:[e.Ov],styles:[""]}),n}(),U=o(7727),A=o(653),T=o(3193),y=o(1483);function k(n,r){if(1&n&&(s.TgZ(0,"tr"),s._uU(1,"\n          "),s.TgZ(2,"td"),s._uU(3),s.qZA(),s._uU(4,"\n          "),s.TgZ(5,"td"),s._uU(6),s.qZA(),s._uU(7,"\n          "),s.TgZ(8,"td"),s._uU(9),s.qZA(),s._uU(10,"\n          "),s.TgZ(11,"td"),s._uU(12),s.qZA(),s._uU(13,"\n          "),s.TgZ(14,"td"),s._uU(15,"\n            "),s.TgZ(16,"span",10),s._uU(17,"\n              "),s.TgZ(18,"button",11),s._uU(19,"\n                Atualizar\n              "),s.qZA(),s._uU(20,"\n            "),s.qZA(),s._uU(21,"\n\n            "),s.TgZ(22,"button",11),s._uU(23,"\n              Finalizar\n            "),s.qZA(),s._uU(24,"\n          "),s.qZA(),s._uU(25,"\n        "),s.qZA()),2&n){var i=r.$implicit;s.xp6(3),s.Oqu(i.id),s.xp6(3),s.Oqu(i.maquina.sigla),s.xp6(3),s.Oqu(i.oficina),s.xp6(3),s.Oqu(i.statusOs),s.xp6(6),s.Q6J("routerLink","atualizar/"+i.id),s.xp6(4),s.Q6J("routerLink","finalizar/"+i.id)}}function O(n,r){if(1&n&&(s.TgZ(0,"table",8),s._uU(1,"\n      "),s.TgZ(2,"thead"),s._uU(3,"\n        "),s.TgZ(4,"tr"),s._uU(5,"\n          "),s.TgZ(6,"th"),s._uU(7,"Os"),s.qZA(),s._uU(8,"\n          "),s.TgZ(9,"th"),s._uU(10,"Sigla"),s.qZA(),s._uU(11,"\n          "),s.TgZ(12,"th"),s._uU(13,"Oficina"),s.qZA(),s._uU(14,"\n          "),s.TgZ(15,"th"),s._uU(16,"Status"),s.qZA(),s._uU(17,"\n          "),s._UZ(18,"th"),s._uU(19,"\n        "),s.qZA(),s._uU(20,"\n      "),s.qZA(),s._uU(21,"\n      "),s.TgZ(22,"tbody"),s._uU(23,"\n        "),s.YNc(24,k,26,6,"tr",9),s._uU(25,"\n      "),s.qZA(),s._uU(26,"\n    "),s.qZA()),2&n){var i=r.ngIf;s.xp6(24),s.Q6J("ngForOf",i)}}function x(n,r){1&n&&(s._uU(0,"\n  "),s.TgZ(1,"div",12),s._uU(2,"\n    "),s.TgZ(3,"span",13),s._uU(4,"Loading..."),s.qZA(),s._uU(5,"\n  "),s.qZA(),s._uU(6,"\n"))}var I=function(){var n=function(){function n(r,t){i(this,n),this.osService=r,this.modalService=t}return r(n,[{key:"ngOnInit",value:function(){var n=this;this.os$=this.osService.list().pipe((0,U.K)(function(r){return n.handleError(),(0,A.c)()}))}},{key:"handleError",value:function(){this.bsModalRef=this.modalService.show(T.F),this.bsModalRef.content.type="danger",this.bsModalRef.content.message="Erro ao carregar"}}]),n}();return n.\u0275fac=function(r){return new(r||n)(s.Y36(d),s.Y36(y.tT))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-os"]],decls:30,vars:5,consts:[[1,"container"],[1,"navbar","navbar-light","bg-light"],[1,"form-inline"],["type","search","placeholder","Search","aria-label","Search",1,"form-control","mr-sm-2"],[1,"btn","btn-outline-success","my-2","my-sm-0"],[1,"btn","btn-outline-success","my-2","my-sm-0",3,"routerLink"],["class","table table-hover",4,"ngIf","ngIfElse"],["loading",""],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[1,"float-end"],[1,"btn","btn-outline-warning","mb-1","btn-sm",3,"routerLink"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(n,r){if(1&n&&(s._uU(0,"\n"),s.TgZ(1,"div",0),s._uU(2,"\n  "),s.TgZ(3,"legend"),s._uU(4,"Os"),s.qZA(),s._UZ(5,"br"),s._uU(6,"\n  "),s.TgZ(7,"nav",1),s._uU(8,"\n    "),s.TgZ(9,"div",2),s._uU(10,"\n      "),s._UZ(11,"input",3),s._uU(12,"\n\n      "),s.TgZ(13,"button",4),s._uU(14,"Procurar"),s.qZA(),s._uU(15,"\n      "),s.TgZ(16,"button",5),s._uU(17,"\n        Novo\n      "),s.qZA(),s._uU(18,"\n    "),s.qZA(),s._uU(19,"\n  "),s.qZA(),s._uU(20,"\n\n  "),s.TgZ(21,"div",0),s._uU(22,"\n    "),s.YNc(23,O,27,1,"table",6),s.ALo(24,"async"),s._uU(25,"\n  "),s.qZA(),s._uU(26,"\n\n"),s.qZA(),s._uU(27,"\n\n\n\n"),s.YNc(28,x,7,0,"ng-template",null,7,s.W1O)),2&n){var i=s.MAs(29);s.xp6(16),s.Q6J("routerLink","cadastrar"),s.xp6(7),s.Q6J("ngIf",s.lcZ(24,3,r.os$))("ngIfElse",i)}},directives:[l.rH,e.O5,e.sg],pipes:[e.Ov],styles:[""]}),n}(),S=function(){var n=function(){function n(){i(this,n)}return r(n,[{key:"ngOnInit",value:function(){}}]),n}();return n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-os-finalizar"]],decls:2,vars:0,template:function(n,r){1&n&&(s.TgZ(0,"p"),s._uU(1,"os-finalizar works!"),s.qZA())},styles:[""]}),n}(),J=function(n){return{"is-invalid":n}};function Y(n,r){if(1&n&&(s.TgZ(0,"div",2),s.TgZ(1,"legend"),s._uU(2,"Atualizar Os"),s.qZA(),s._UZ(3,"br"),s.TgZ(4,"form",3),s.TgZ(5,"div",4),s.TgZ(6,"div",5),s.TgZ(7,"label",6),s._uU(8,"OS:"),s.qZA(),s._UZ(9,"input",7),s.qZA(),s.TgZ(10,"div",8),s.TgZ(11,"label",9),s._uU(12,"Maquina:"),s.qZA(),s._UZ(13,"input",10),s.qZA(),s.qZA(),s.TgZ(14,"div",4),s.TgZ(15,"div",11),s.TgZ(16,"label",12),s._uU(17,"Problema:"),s.qZA(),s._UZ(18,"textarea",13),s.TgZ(19,"div",14),s._uU(20,"Descreva o problema da maquina "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&n){var i=s.oxw();s.xp6(4),s.Q6J("formGroup",i.formulario),s.xp6(14),s.Q6J("ngClass",s.VKq(2,J,i.submitted&&i.hasError("problema")))}}function w(n,r){1&n&&(s.TgZ(0,"div",15),s.TgZ(1,"span",16),s._uU(2,"Loading..."),s.qZA(),s.qZA())}var N,E,F=[{path:"",component:I},{path:"cadastrar",component:_},{path:"atualizar/:id",component:(N=function(){function n(r,t,o,e,a){var u=this;i(this,n),this.osService=r,this.modalService=t,this.formBuilder=o,this.route=e,this.router=a,this.submitted=!1,this.inscricao=this.route.params.subscribe(function(n){u.os$=u.osService.getOs(n.id).pipe((0,U.K)(function(n){return u.handleError(),u.router.navigate(["os"]),(0,A.c)()}))})}return r(n,[{key:"ngOnInit",value:function(){var n=this;this.formulario=this.formBuilder.group({problema:[null,[u.kI.required,u.kI.minLength(3),u.kI.maxLength(250)]],id:[null,u.kI.required],sigla:[null,u.kI.required],oficina:[null,u.kI.required]}),this.os$.subscribe(function(r){n.os=r,r&&n.povoar()}),console.log(this.os)}},{key:"povoar",value:function(){var n,r,i;null===(n=this.formulario.get("id"))||void 0===n||n.setValue(this.os.id),null===(r=this.formulario.get("sigla"))||void 0===r||r.setValue(this.os.maquina.sigla),null===(i=this.formulario.get("problema"))||void 0===i||i.setValue(this.os.problema)}},{key:"handleError",value:function(){this.bsModalRef=this.modalService.show(T.F),this.bsModalRef.content.type="danger",this.bsModalRef.content.message="Erro ao carregar"}},{key:"hasError",value:function(n){var r;return null===(r=this.formulario.get(n))||void 0===r?void 0:r.errors}}]),n}(),N.\u0275fac=function(n){return new(n||N)(s.Y36(d),s.Y36(y.tT),s.Y36(u.qu),s.Y36(l.gz),s.Y36(l.F0))},N.\u0275cmp=s.Xpm({type:N,selectors:[["app-os-atualizar"]],decls:3,vars:2,consts:[["class","container",4,"ngIf","ngIfElse"],["loading",""],[1,"container"],[3,"formGroup"],[1,"form-row"],[1,"form-group","col-md-3"],["for","osNumero"],["type","text","readonly","","formControlName","id","id","osNumero",1,"form-control"],[1,"form-group","col-md-6"],["for","maquina"],["type","text","readonly","","formControlName","sigla","id","maquina",1,"form-control"],[1,"form-group","col-md-9"],["for","problema"],["type","text","id","problema","placeholder","Descreva o problema da maquina","formControlName","problema",1,"form-control",2,"margin","5px",3,"ngClass"],[1,"invalid-feedback"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(n,r){if(1&n&&(s.YNc(0,Y,21,4,"div",0),s.YNc(1,w,3,0,"ng-template",null,1,s.W1O)),2&n){var i=s.MAs(2);s.Q6J("ngIf",r.os$)("ngIfElse",i)}},directives:[e.O5,u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,e.mk],styles:[""]}),N)},{path:"finalizar/:id",component:S}],C=function(){var n=function n(){i(this,n)};return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[l.Bz.forChild(F)],l.Bz]}),n}(),L=((E=function n(){i(this,n)}).\u0275fac=function(n){return new(n||E)},E.\u0275mod=s.oAB({type:E}),E.\u0275inj=s.cJS({imports:[[e.ez,C,u.u5,u.UX]]}),E)}}])}();