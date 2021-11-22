!function(){function r(r,i){for(var o=0;o<i.length;o++){var n=i[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function i(i,o,n){return o&&r(i.prototype,o),n&&r(i,n),i}function o(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}(self.webpackChunktcc=self.webpackChunktcc||[]).push([[656],{1656:function(r,n,e){"use strict";e.r(n),e.d(n,{OsModule:function(){return j}});var t=e(1116),a=function r(){o(this,r)},u=e(1462),s=e(7368),l=e(1279),c=e(5522),f=e(1423),m=e(611),p=e(529),g=e(2693),d=function(){var r=function(){function r(i){o(this,r),this.http=i,this.API="".concat(p.N.API,"os")}return i(r,[{key:"list",value:function(){return this.http.get(this.API).pipe((0,m.q)(1))}},{key:"busca",value:function(r){return this.http.get("".concat(this.API,"/busca/").concat(r)).pipe((0,m.q)(1))}},{key:"salvarOs",value:function(r){return this.http.post(this.API,JSON.stringify(r),{headers:(new g.WM).set("Content-Type","application/json"),responseType:"text"}).pipe((0,m.q)(1))}},{key:"getOs",value:function(r){return this.http.get("".concat(this.API,"/").concat(r)).pipe((0,m.q)(1))}}]),r}();return r.\u0275fac=function(i){return new(i||r)(s.LFG(g.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r}();function v(r,i){if(1&r&&(s.TgZ(0,"option",16),s._uU(1),s.qZA()),2&r){var o=i.$implicit;s.Q6J("ngValue",o),s.xp6(1),s.Oqu(o.sigla)}}function Z(r,i){if(1&r&&(s.TgZ(0,"option"),s._uU(1),s.qZA()),2&r){var o=i.$implicit;s.xp6(1),s.Oqu(o)}}var h=function(r){return{"is-invalid":r}};function q(r,i){if(1&r){var o=s.EpF();s.TgZ(0,"form",3),s.NdJ("ngSubmit",function(){return s.CHM(o),s.oxw().onSubmit()}),s.TgZ(1,"legend"),s._uU(2,"Gerar nova OS"),s.qZA(),s.TgZ(3,"div",4),s.TgZ(4,"label",5),s._uU(5,"Maquina:"),s.qZA(),s.TgZ(6,"div",6),s.TgZ(7,"select",7),s.YNc(8,v,2,2,"option",8),s.qZA(),s.TgZ(9,"div",9),s._uU(10,"Selecione a Maquina"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(11,"div",4),s.TgZ(12,"label",10),s._uU(13,"Problema:"),s.qZA(),s.TgZ(14,"div",6),s._UZ(15,"textarea",11),s.TgZ(16,"div",9),s._uU(17,"Descreva o problema da maquina "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(18,"div",4),s.TgZ(19,"label",12),s._uU(20,"Oficina:"),s.qZA(),s.TgZ(21,"div",6),s.TgZ(22,"select",13),s.YNc(23,Z,2,1,"option",14),s.qZA(),s.qZA(),s.qZA(),s.TgZ(24,"button",15),s._uU(25,"Salvar"),s.qZA(),s.qZA()}if(2&r){var n=i.ngIf,e=s.oxw();s.Q6J("formGroup",e.formulario),s.xp6(7),s.Q6J("ngClass",s.VKq(5,h,e.submitted&&e.hasError("maquina"))),s.xp6(1),s.Q6J("ngForOf",n),s.xp6(7),s.Q6J("ngClass",s.VKq(7,h,e.submitted&&e.hasError("problema"))),s.xp6(8),s.Q6J("ngForOf",e.oficina)}}function b(r,i){1&r&&(s.TgZ(0,"div",17),s.TgZ(1,"span",18),s._uU(2,"Loading..."),s.qZA(),s.qZA())}var A=function(){var r=function(){function r(i,n,e,t,a,u){o(this,r),this.formBuilder=i,this.route=n,this.router=e,this.funcionarioService=t,this.maquinaService=a,this.osService=u,this.submitted=!1,this.oficina=["","Eletrica","Mecanica"]}return i(r,[{key:"ngOnInit",value:function(){this.maquina$=this.maquinaService.list().pipe(),this.formulario=this.formBuilder.group({problema:[null,[u.kI.required,u.kI.minLength(3),u.kI.maxLength(250)]],maquina:[null,u.kI.required],oficina:[null,u.kI.required]})}},{key:"onSubmit",value:function(){var r=this;if(this.submitted=!0,this.formulario.valid){var i=new a;i.maquina=this.formulario.value.maquina,i.problema=this.formulario.value.problema,i.oficina=this.formulario.value.oficina,i.statusOs="A",this.osService.salvarOs(i).subscribe(function(i){r.formulario.reset(),r.router.navigate(["os"])},function(r){})}}},{key:"hasError",value:function(r){var i;return null===(i=this.formulario.get(r))||void 0===i?void 0:i.errors}}]),r}();return r.\u0275fac=function(i){return new(i||r)(s.Y36(u.qu),s.Y36(l.gz),s.Y36(l.F0),s.Y36(c.w),s.Y36(f.P),s.Y36(d))},r.\u0275cmp=s.Xpm({type:r,selectors:[["app-os-cadastrar"]],decls:5,vars:4,consts:[[1,"container",2,"padding-top","10px","width","60%"],[3,"formGroup","ngSubmit",4,"ngIf","ngIfElse"],["loading",""],[3,"formGroup","ngSubmit"],[1,"row","md-6"],["for","maquina",1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["id","maquina","formControlName","maquina",1,"form-control",2,"margin","5px",3,"ngClass"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"invalid-feedback"],["for","problema",1,"col-sm-3","col-form-label"],["type","text","placeholder","Descreva o problema da maquina","formControlName","problema",1,"form-control",2,"margin","5px",3,"ngClass"],["for","oficia",1,"col-sm-3","col-form-label"],["id","oficina","formControlName","oficina",1,"form-control",2,"margin","5px"],[4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-primary"],[3,"ngValue"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(r,i){if(1&r&&(s.TgZ(0,"div",0),s.YNc(1,q,26,9,"form",1),s.ALo(2,"async"),s.qZA(),s.YNc(3,b,3,0,"ng-template",null,2,s.W1O)),2&r){var o=s.MAs(4);s.xp6(1),s.Q6J("ngIf",s.lcZ(2,2,i.maquina$))("ngIfElse",o)}},directives:[t.O5,u._Y,u.JL,u.sg,u.EJ,u.JJ,u.u,t.mk,t.sg,u.Fj,u.YN,u.Kr],pipes:[t.Ov],styles:[""]}),r}(),T=e(9996),_=e(7701),U=e(8720),y=e(6599),x=e(7727),k=e(653),I=e(3193),O=e(1483),E=e(9479);function C(r,i){if(1&r&&(s.TgZ(0,"button",13),s._uU(1,"\n                Finalizar\n              "),s.qZA()),2&r){var o=s.oxw(2).$implicit;s.Q6J("routerLink","finalizar/"+o.id)}}function J(r,i){if(1&r&&(s.TgZ(0,"td"),s._uU(1,"\n            "),s.TgZ(2,"span",11),s._uU(3,"\n              "),s.YNc(4,C,2,1,"button",12),s._uU(5,"\n            "),s.qZA(),s._uU(6,"\n          "),s.qZA()),2&r){var o=s.oxw().$implicit;s.xp6(4),s.Q6J("ngIf","A"==o.statusOs)}}function S(r,i){if(1&r&&(s.TgZ(0,"tr"),s._uU(1,"\n          "),s.TgZ(2,"td"),s._uU(3),s.qZA(),s._uU(4,"\n          "),s.TgZ(5,"td"),s._uU(6),s.qZA(),s._uU(7,"\n          "),s.TgZ(8,"td"),s._uU(9),s.qZA(),s._uU(10,"\n          "),s.TgZ(11,"td"),s._uU(12),s.qZA(),s._uU(13,"\n          "),s.TgZ(14,"td"),s._uU(15),s.qZA(),s._uU(16,"\n          "),s.YNc(17,J,7,1,"td",10),s._uU(18,"\n        "),s.qZA()),2&r){var o=i.$implicit,n=s.oxw(2);s.xp6(3),s.Oqu(o.id),s.xp6(3),s.Oqu(o.maquina.sigla),s.xp6(3),s.Oqu(o.oficina),s.xp6(3),s.Oqu(o.statusOs),s.xp6(3),s.Oqu(o.problema),s.xp6(2),s.Q6J("ngIf",n.permissao>1)}}function N(r,i){if(1&r&&(s.TgZ(0,"table",8),s._uU(1,"\n      "),s.TgZ(2,"thead"),s._uU(3,"\n        "),s.TgZ(4,"tr"),s._uU(5,"\n          "),s.TgZ(6,"th"),s._uU(7,"Os"),s.qZA(),s._uU(8,"\n          "),s.TgZ(9,"th"),s._uU(10,"Sigla"),s.qZA(),s._uU(11,"\n          "),s.TgZ(12,"th"),s._uU(13,"Oficina"),s.qZA(),s._uU(14,"\n          "),s.TgZ(15,"th"),s._uU(16,"Status"),s.qZA(),s._uU(17,"\n          "),s.TgZ(18,"th"),s._uU(19,"Problema"),s.qZA(),s._uU(20,"\n          "),s._UZ(21,"th"),s._uU(22,"\n        "),s.qZA(),s._uU(23,"\n      "),s.qZA(),s._uU(24,"\n      "),s.TgZ(25,"tbody"),s._uU(26,"\n        "),s.YNc(27,S,19,6,"tr",9),s._uU(28,"\n      "),s.qZA(),s._uU(29,"\n    "),s.qZA()),2&r){var o=i.ngIf;s.xp6(27),s.Q6J("ngForOf",o)}}function Y(r,i){1&r&&(s._uU(0,"\n  "),s.TgZ(1,"div",14),s._uU(2,"\n    "),s.TgZ(3,"span",15),s._uU(4,"Loading..."),s.qZA(),s._uU(5,"\n  "),s.qZA(),s._uU(6,"\n"))}var R=function(){var r=function(){function r(i,n,e){o(this,r),this.osService=i,this.modalService=n,this.authService=e,this.permissao=0,this.queryField=new u.NI}return i(r,[{key:"ngOnInit",value:function(){var r=this;this.permissao=this.authService.usuario.permissao,this.onRefresh(),this.queryField.valueChanges.pipe((0,T.U)(function(r){return r.trim()}),(0,_.b)(300),(0,U.x)(),(0,y.b)(function(i){return r.consulta(i)})).subscribe()}},{key:"consulta",value:function(r){var i=this;r.length>0?this.os$=this.osService.busca(r).pipe((0,x.K)(function(r){return i.handleError("Erro ao carregar"),(0,k.c)()})):this.onRefresh()}},{key:"onRefresh",value:function(){var r=this;this.os$=this.osService.list().pipe((0,x.K)(function(i){return r.handleError("Erro ao carregar"),(0,k.c)()}))}},{key:"buscar",value:function(){var r,i=this;(null===(r=this.queryField.value)||void 0===r?void 0:r.length)>1&&(this.os$=this.osService.busca(this.queryField.value).pipe((0,x.K)(function(r){return i.handleError("Erro ao carregar"),(0,k.c)()})))}},{key:"handleError",value:function(r){this.bsModalRef=this.modalService.show(I.F),this.bsModalRef.content.type="danger",this.bsModalRef.content.message=r}}]),r}();return r.\u0275fac=function(i){return new(i||r)(s.Y36(d),s.Y36(O.tT),s.Y36(E.e))},r.\u0275cmp=s.Xpm({type:r,selectors:[["app-os"]],decls:29,vars:6,consts:[[1,"container"],[1,"navbar","navbar-light","bg-light"],[1,"form-inline"],["type","search","placeholder","Busca os/sigla","aria-label","Search",1,"form-control","mr-sm-2",3,"formControl"],[1,"btn","btn-outline-success","my-2","my-sm-0",3,"click"],[1,"btn","btn-outline-success","my-2","my-sm-0",3,"routerLink"],["class","table table-hover",4,"ngIf","ngIfElse"],["loading",""],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"float-end"],["class","btn btn-outline-warning mb-1 btn-sm",3,"routerLink",4,"ngIf"],[1,"btn","btn-outline-warning","mb-1","btn-sm",3,"routerLink"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(r,i){if(1&r&&(s.TgZ(0,"div",0),s._uU(1,"\n  "),s.TgZ(2,"legend"),s._uU(3,"Ordem de Servi\xe7o"),s.qZA(),s._UZ(4,"br"),s._uU(5,"\n  "),s.TgZ(6,"nav",1),s._uU(7,"\n    "),s.TgZ(8,"div",2),s._uU(9,"\n      "),s._UZ(10,"input",3),s._uU(11,"\n\n      "),s.TgZ(12,"button",4),s.NdJ("click",function(){return i.buscar()}),s._uU(13,"Procurar"),s.qZA(),s._uU(14,"\n      "),s.TgZ(15,"button",5),s._uU(16,"\n        Novo\n      "),s.qZA(),s._uU(17,"\n    "),s.qZA(),s._uU(18,"\n  "),s.qZA(),s._uU(19,"\n\n  "),s.TgZ(20,"div",0),s._uU(21,"\n    "),s.YNc(22,N,30,1,"table",6),s.ALo(23,"async"),s._uU(24,"\n  "),s.qZA(),s._uU(25,"\n\n"),s.qZA(),s._uU(26,"\n\n\n\n"),s.YNc(27,Y,7,0,"ng-template",null,7,s.W1O)),2&r){var o=s.MAs(28);s.xp6(10),s.Q6J("formControl",i.queryField),s.xp6(5),s.Q6J("routerLink","cadastrar"),s.xp6(7),s.Q6J("ngIf",s.lcZ(23,4,i.os$))("ngIfElse",o)}},directives:[u.Fj,u.JJ,u.oH,l.rH,t.O5,t.sg],pipes:[t.Ov],styles:[""]}),r}();function w(r,i){if(1&r&&(s.TgZ(0,"option",33),s._uU(1),s.qZA()),2&r){var o=i.$implicit;s.Q6J("ngValue",o),s.xp6(1),s.AsE(" ",o.matricula," - ",o.pessoa.nome," ")}}var F=function(r){return{"is-invalid":r}};function Q(r,i){if(1&r){var o=s.EpF();s.TgZ(0,"form",4),s.NdJ("ngSubmit",function(){return s.CHM(o),s.oxw(2).onSubmit()}),s.TgZ(1,"div",5),s.TgZ(2,"div",6),s.TgZ(3,"label",7),s._uU(4,"OS:"),s.qZA(),s._UZ(5,"input",8),s.qZA(),s.TgZ(6,"div",9),s.TgZ(7,"label",10),s._uU(8,"Maquina:"),s.qZA(),s._UZ(9,"input",11),s.qZA(),s.qZA(),s.TgZ(10,"div",5),s.TgZ(11,"div",12),s.TgZ(12,"label",13),s._uU(13,"Problema:"),s.qZA(),s._UZ(14,"textarea",14),s.TgZ(15,"div",15),s._uU(16,"Descreva o problema da maquina "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(17,"div",5),s.TgZ(18,"div",16),s.TgZ(19,"label",17),s._uU(20,"Defeito:"),s.qZA(),s._UZ(21,"input",18),s.TgZ(22,"div",15),s._uU(23,"Descreva o Defeito da maquina "),s.qZA(),s.qZA(),s.TgZ(24,"div",19),s.TgZ(25,"label",17),s._uU(26,"Responsavel:"),s.qZA(),s.TgZ(27,"select",20),s.YNc(28,w,2,3,"option",21),s.qZA(),s.TgZ(29,"div",15),s._uU(30,"Seleciona um responsavel "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(31,"div",5),s.TgZ(32,"div",12),s.TgZ(33,"label",22),s._uU(34,"Reparo:"),s.qZA(),s._UZ(35,"textarea",23),s.TgZ(36,"div",15),s._uU(37,"Descreva o reparo da maquina "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(38,"div",5),s.TgZ(39,"div",24),s.TgZ(40,"label",25),s._uU(41,"Inicio Reparo:"),s.qZA(),s._UZ(42,"input",26),s.TgZ(43,"div",15),s._uU(44,"Entre com a data inicio "),s.qZA(),s._UZ(45,"input",27),s.TgZ(46,"div",15),s._uU(47,"Entre com a data inicio "),s.qZA(),s.qZA(),s.TgZ(48,"div",24),s.TgZ(49,"label",25),s._uU(50,"Fim Reparo:"),s.qZA(),s._UZ(51,"input",28),s.TgZ(52,"div",15),s._uU(53,"Entre com a data final "),s.qZA(),s._UZ(54,"input",29),s.TgZ(55,"div",15),s._uU(56,"Entre com a data final "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(57,"div",30),s.TgZ(58,"div",31),s.TgZ(59,"button",32),s._uU(60,"Finalizar"),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&r){var n=i.ngIf,e=s.oxw(2);s.Q6J("formGroup",e.formulario),s.xp6(14),s.Q6J("ngClass",s.VKq(11,F,e.submitted&&e.hasError("problema"))),s.xp6(7),s.Q6J("ngClass",s.VKq(13,F,e.submitted&&e.hasError("defeito"))),s.xp6(6),s.Q6J("compareWith",e.comparar)("ngClass",s.VKq(15,F,e.submitted&&e.hasError("funcionario"))),s.xp6(1),s.Q6J("ngForOf",n),s.xp6(7),s.Q6J("ngClass",s.VKq(17,F,e.submitted&&e.hasError("reparo"))),s.xp6(7),s.Q6J("ngClass",s.VKq(19,F,e.submitted&&e.hasError("iniReparoDate"))),s.xp6(3),s.Q6J("ngClass",s.VKq(21,F,e.submitted&&e.hasError("iniReparoTime"))),s.xp6(6),s.Q6J("ngClass",s.VKq(23,F,e.submitted&&e.hasError("fimReparoDate"))),s.xp6(3),s.Q6J("ngClass",s.VKq(25,F,e.submitted&&e.hasError("fimReparoTime")))}}function M(r,i){if(1&r&&(s.TgZ(0,"div",2),s.TgZ(1,"legend"),s._uU(2,"Finalizar Os"),s.qZA(),s._UZ(3,"br"),s.YNc(4,Q,61,27,"form",3),s.ALo(5,"async"),s.qZA()),2&r){var o=s.oxw(),n=s.MAs(2);s.xp6(4),s.Q6J("ngIf",s.lcZ(5,2,o.funcionarios$))("ngIfElse",n)}}function V(r,i){1&r&&(s.TgZ(0,"div",34),s.TgZ(1,"span",35),s._uU(2,"Loading..."),s.qZA(),s.qZA())}var L=function(){var r=function(){function r(i,n,e,t,a,u){var s=this;o(this,r),this.osService=i,this.funcionarioService=n,this.modalService=e,this.formBuilder=t,this.route=a,this.router=u,this.submitted=!1,this.inscricao=this.route.params.subscribe(function(r){s.os$=s.osService.getOs(r.id).pipe((0,x.K)(function(r){return s.handleError("Erro ao carregar"),s.router.navigate(["os"]),(0,k.c)()}))})}return i(r,[{key:"ngOnInit",value:function(){var r=this;this.formulario=this.formBuilder.group({problema:[null,[u.kI.required,u.kI.minLength(3),u.kI.maxLength(250)]],id:[null,u.kI.required],sigla:[null,u.kI.required],defeito:[null,u.kI.required],funcionario:[null,u.kI.required],reparo:[null,u.kI.required],iniReparoDate:[null,u.kI.required],iniReparoTime:[null,u.kI.required],fimReparoTime:[null,u.kI.required],fimReparoDate:[null,u.kI.required]}),this.os$.subscribe(function(i){r.os=i,i&&r.povoar()}),this.funcionarios$=this.funcionarioService.list()}},{key:"onSubmit",value:function(){var r,i,o=this;(this.submitted=!0,this.formulario.valid)&&(r=this.formulario.value.iniReparoDate+" "+this.formulario.value.iniReparoTime,i=this.formulario.value.fimReparoDate+" "+this.formulario.value.fimReparoTime,this.os.defeito=this.formulario.value.defeito,this.os.manutentor=this.formulario.value.funcionario,this.os.problema=this.formulario.value.problema,this.os.reparo=this.formulario.value.reparo,this.os.dataIniManutencao=r,this.os.dataFimManutencao=i,this.os.statusOs="C",this.osService.salvarOs(this.os).subscribe(function(r){o.formulario.reset(),o.router.navigate(["os"])},function(r){o.handleError("Erro ao salvar Os")}))}},{key:"comparar",value:function(r,i){return r&&i?r.matricula===i.matricula:r===i}},{key:"povoar",value:function(){var r,i,o;null===(r=this.formulario.get("id"))||void 0===r||r.setValue(this.os.id),null===(i=this.formulario.get("sigla"))||void 0===i||i.setValue(this.os.maquina.sigla),null===(o=this.formulario.get("problema"))||void 0===o||o.setValue(this.os.problema)}},{key:"handleError",value:function(r){this.bsModalRef=this.modalService.show(I.F),this.bsModalRef.content.type="danger",this.bsModalRef.content.message=r}},{key:"hasError",value:function(r){var i;return null===(i=this.formulario.get(r))||void 0===i?void 0:i.errors}}]),r}();return r.\u0275fac=function(i){return new(i||r)(s.Y36(d),s.Y36(c.w),s.Y36(O.tT),s.Y36(u.qu),s.Y36(l.gz),s.Y36(l.F0))},r.\u0275cmp=s.Xpm({type:r,selectors:[["app-os-finalizar"]],decls:3,vars:2,consts:[["class","container",4,"ngIf","ngIfElse"],["loading",""],[1,"container"],[3,"formGroup","ngSubmit",4,"ngIf","ngIfElse"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col-md-3"],["for","osNumero"],["type","text","readonly","","formControlName","id","id","osNumero",1,"form-control"],[1,"form-group","col-md-6"],["for","maquina"],["type","text","readonly","","formControlName","sigla","id","maquina",1,"form-control"],[1,"form-group","col-md-9"],["for","problema"],["type","text","id","problema","placeholder","Descreva o problema da maquina","formControlName","problema",1,"form-control",2,"margin","5px",3,"ngClass"],[1,"invalid-feedback"],[1,"form-group","col-md-5"],["for","defeito"],["type","text","formControlName","defeito","id","defeito",1,"form-control",3,"ngClass"],[1,"col-sm-4"],["id","funcionario","formControlName","funcionario",1,"form-control",2,"margin","5px",3,"compareWith","ngClass"],[3,"ngValue",4,"ngFor","ngForOf"],["for","reparo"],["type","text","id","reparo","placeholder","Descreva o reparo da maquina","formControlName","reparo",1,"form-control",2,"margin","5px",3,"ngClass"],[1,"form-group","col-md-2"],["for","iniReparo"],["type","date","formControlName","iniReparoDate","id","iniReparo",1,"form-control",3,"ngClass"],["type","time","formControlName","iniReparoTime","id","iniReparo",1,"form-control",3,"ngClass"],["type","date","formControlName","fimReparoDate","id","iniReparo",1,"form-control",3,"ngClass"],["type","time","formControlName","fimReparoTime","id","iniReparo",1,"form-control",3,"ngClass"],[1,"form-group","row"],[1,"col-sm-9"],["type","submit",1,"btn","btn-primary"],[3,"ngValue"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(r,i){if(1&r&&(s.YNc(0,M,6,4,"div",0),s.YNc(1,V,3,0,"ng-template",null,1,s.W1O)),2&r){var o=s.MAs(2);s.Q6J("ngIf",i.os$)("ngIfElse",o)}},directives:[t.O5,u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,t.mk,u.EJ,t.sg,u.YN,u.Kr],pipes:[t.Ov],styles:[""]}),r}(),$=function(r){return{"is-invalid":r}};function D(r,i){if(1&r&&(s.TgZ(0,"div",2),s.TgZ(1,"legend"),s._uU(2,"Atualizar Os"),s.qZA(),s._UZ(3,"br"),s.TgZ(4,"form",3),s.TgZ(5,"div",4),s.TgZ(6,"div",5),s.TgZ(7,"label",6),s._uU(8,"OS:"),s.qZA(),s._UZ(9,"input",7),s.qZA(),s.TgZ(10,"div",8),s.TgZ(11,"label",9),s._uU(12,"Maquina:"),s.qZA(),s._UZ(13,"input",10),s.qZA(),s.qZA(),s.TgZ(14,"div",4),s.TgZ(15,"div",11),s.TgZ(16,"label",12),s._uU(17,"Problema:"),s.qZA(),s._UZ(18,"textarea",13),s.TgZ(19,"div",14),s._uU(20,"Descreva o problema da maquina "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&r){var o=s.oxw();s.xp6(4),s.Q6J("formGroup",o.formulario),s.xp6(14),s.Q6J("ngClass",s.VKq(2,$,o.submitted&&o.hasError("problema")))}}function K(r,i){1&r&&(s.TgZ(0,"div",15),s.TgZ(1,"span",16),s._uU(2,"Loading..."),s.qZA(),s.qZA())}var z,P,B=[{path:"",component:R},{path:"cadastrar",component:A},{path:"atualizar/:id",component:(z=function(){function r(i,n,e,t,a){var u=this;o(this,r),this.osService=i,this.modalService=n,this.formBuilder=e,this.route=t,this.router=a,this.submitted=!1,this.inscricao=this.route.params.subscribe(function(r){u.os$=u.osService.getOs(r.id).pipe((0,x.K)(function(r){return u.handleError(),u.router.navigate(["os"]),(0,k.c)()}))})}return i(r,[{key:"ngOnInit",value:function(){var r=this;this.formulario=this.formBuilder.group({problema:[null,[u.kI.required,u.kI.minLength(3),u.kI.maxLength(250)]],id:[null,u.kI.required],sigla:[null,u.kI.required],oficina:[null,u.kI.required]}),this.os$.subscribe(function(i){r.os=i,i&&r.povoar()}),console.log(this.os)}},{key:"povoar",value:function(){var r,i,o;null===(r=this.formulario.get("id"))||void 0===r||r.setValue(this.os.id),null===(i=this.formulario.get("sigla"))||void 0===i||i.setValue(this.os.maquina.sigla),null===(o=this.formulario.get("problema"))||void 0===o||o.setValue(this.os.problema)}},{key:"handleError",value:function(){this.bsModalRef=this.modalService.show(I.F),this.bsModalRef.content.type="danger",this.bsModalRef.content.message="Erro ao carregar"}},{key:"hasError",value:function(r){var i;return null===(i=this.formulario.get(r))||void 0===i?void 0:i.errors}}]),r}(),z.\u0275fac=function(r){return new(r||z)(s.Y36(d),s.Y36(O.tT),s.Y36(u.qu),s.Y36(l.gz),s.Y36(l.F0))},z.\u0275cmp=s.Xpm({type:z,selectors:[["app-os-atualizar"]],decls:3,vars:2,consts:[["class","container",4,"ngIf","ngIfElse"],["loading",""],[1,"container"],[3,"formGroup"],[1,"form-row"],[1,"form-group","col-md-3"],["for","osNumero"],["type","text","readonly","","formControlName","id","id","osNumero",1,"form-control"],[1,"form-group","col-md-6"],["for","maquina"],["type","text","readonly","","formControlName","sigla","id","maquina",1,"form-control"],[1,"form-group","col-md-9"],["for","problema"],["type","text","id","problema","placeholder","Descreva o problema da maquina","formControlName","problema",1,"form-control",2,"margin","5px",3,"ngClass"],[1,"invalid-feedback"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(r,i){if(1&r&&(s.YNc(0,D,21,4,"div",0),s.YNc(1,K,3,0,"ng-template",null,1,s.W1O)),2&r){var o=s.MAs(2);s.Q6J("ngIf",i.os$)("ngIfElse",o)}},directives:[t.O5,u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,t.mk],styles:[""]}),z)},{path:"finalizar/:id",component:L}],G=function(){var r=function r(){o(this,r)};return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[[l.Bz.forChild(B)],l.Bz]}),r}(),j=((P=function r(){o(this,r)}).\u0275fac=function(r){return new(r||P)},P.\u0275mod=s.oAB({type:P}),P.\u0275inj=s.cJS({imports:[[t.ez,G,u.u5,u.UX]]}),P)}}])}();