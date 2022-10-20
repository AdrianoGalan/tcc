(self.webpackChunktcc=self.webpackChunktcc||[]).push([[656],{1656:function(r,o,i){"use strict";i.r(o),i.d(o,{OsModule:function(){return z}});var e=i(1116);class t{}var n=i(1462),a=i(7368),s=i(1279),u=i(5522),l=i(1423),m=i(611),c=i(529),p=i(2693);let g=(()=>{class r{constructor(r){this.http=r,this.API=`${c.N.API}os`}list(){return this.http.get(this.API).pipe((0,m.q)(1))}busca(r){return this.http.get(`${this.API}/busca/${r}`).pipe((0,m.q)(1))}salvarOs(r){return this.http.post(this.API,JSON.stringify(r),{headers:(new p.WM).set("Content-Type","application/json"),responseType:"text"}).pipe((0,m.q)(1))}getOs(r){return this.http.get(`${this.API}/${r}`).pipe((0,m.q)(1))}}return r.\u0275fac=function(o){return new(o||r)(a.LFG(p.eN))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function f(r,o){if(1&r&&(a.TgZ(0,"option",16),a._uU(1),a.qZA()),2&r){const r=o.$implicit;a.Q6J("ngValue",r),a.xp6(1),a.Oqu(r.sigla)}}function d(r,o){if(1&r&&(a.TgZ(0,"option"),a._uU(1),a.qZA()),2&r){const r=o.$implicit;a.xp6(1),a.Oqu(r)}}const Z=function(r){return{"is-invalid":r}};function h(r,o){if(1&r){const r=a.EpF();a.TgZ(0,"form",3),a.NdJ("ngSubmit",function(){return a.CHM(r),a.oxw().onSubmit()}),a.TgZ(1,"legend"),a._uU(2,"Gerar nova OS"),a.qZA(),a.TgZ(3,"div",4),a.TgZ(4,"label",5),a._uU(5,"Maquina:"),a.qZA(),a.TgZ(6,"div",6),a.TgZ(7,"select",7),a.YNc(8,f,2,2,"option",8),a.qZA(),a.TgZ(9,"div",9),a._uU(10,"Selecione a Maquina"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(11,"div",4),a.TgZ(12,"label",10),a._uU(13,"Problema:"),a.qZA(),a.TgZ(14,"div",6),a._UZ(15,"textarea",11),a.TgZ(16,"div",9),a._uU(17,"Descreva o problema da maquina "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(18,"div",4),a.TgZ(19,"label",12),a._uU(20,"Oficina:"),a.qZA(),a.TgZ(21,"div",6),a.TgZ(22,"select",13),a.YNc(23,d,2,1,"option",14),a.qZA(),a.qZA(),a.qZA(),a.TgZ(24,"button",15),a._uU(25,"Salvar"),a.qZA(),a.qZA()}if(2&r){const r=o.ngIf,i=a.oxw();a.Q6J("formGroup",i.formulario),a.xp6(7),a.Q6J("ngClass",a.VKq(5,Z,i.submitted&&i.hasError("maquina"))),a.xp6(1),a.Q6J("ngForOf",r),a.xp6(7),a.Q6J("ngClass",a.VKq(7,Z,i.submitted&&i.hasError("problema"))),a.xp6(8),a.Q6J("ngForOf",i.oficina)}}function q(r,o){1&r&&(a.TgZ(0,"div",17),a.TgZ(1,"span",18),a._uU(2,"Loading..."),a.qZA(),a.qZA())}let v=(()=>{class r{constructor(r,o,i,e,t,n){this.formBuilder=r,this.route=o,this.router=i,this.funcionarioService=e,this.maquinaService=t,this.osService=n,this.submitted=!1,this.oficina=["","Eletrica","Mecanica"]}ngOnInit(){this.maquina$=this.maquinaService.list().pipe(),this.formulario=this.formBuilder.group({problema:[null,[n.kI.required,n.kI.minLength(3),n.kI.maxLength(250)]],maquina:[null,n.kI.required],oficina:[null,n.kI.required]})}onSubmit(){if(this.submitted=!0,this.formulario.valid){let r=new t;r.maquina=this.formulario.value.maquina,r.problema=this.formulario.value.problema,r.oficina=this.formulario.value.oficina,r.statusOs="A",this.osService.salvarOs(r).subscribe(r=>{this.formulario.reset(),this.router.navigate(["os"])},r=>{})}}hasError(r){var o;return null===(o=this.formulario.get(r))||void 0===o?void 0:o.errors}}return r.\u0275fac=function(o){return new(o||r)(a.Y36(n.qu),a.Y36(s.gz),a.Y36(s.F0),a.Y36(u.w),a.Y36(l.P),a.Y36(g))},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-os-cadastrar"]],decls:5,vars:4,consts:[[1,"container",2,"padding-top","10px","width","60%"],[3,"formGroup","ngSubmit",4,"ngIf","ngIfElse"],["loading",""],[3,"formGroup","ngSubmit"],[1,"row","md-6"],["for","maquina",1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["id","maquina","formControlName","maquina",1,"form-control",2,"margin","5px",3,"ngClass"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"invalid-feedback"],["for","problema",1,"col-sm-3","col-form-label"],["type","text","placeholder","Descreva o problema da maquina","formControlName","problema",1,"form-control",2,"margin","5px",3,"ngClass"],["for","oficia",1,"col-sm-3","col-form-label"],["id","oficina","formControlName","oficina",1,"form-control",2,"margin","5px"],[4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-primary"],[3,"ngValue"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(r,o){if(1&r&&(a.TgZ(0,"div",0),a.YNc(1,h,26,9,"form",1),a.ALo(2,"async"),a.qZA(),a.YNc(3,q,3,0,"ng-template",null,2,a.W1O)),2&r){const r=a.MAs(4);a.xp6(1),a.Q6J("ngIf",a.lcZ(2,2,o.maquina$))("ngIfElse",r)}},directives:[e.O5,n._Y,n.JL,n.sg,n.EJ,n.JJ,n.u,e.mk,e.sg,n.Fj,n.YN,n.Kr],pipes:[e.Ov],styles:[""]}),r})();var b=i(9996),A=i(7701),T=i(8720),_=i(6599),U=i(7727),x=i(653),I=i(3193),y=i(1483),O=i(9479);function E(r,o){if(1&r&&(a.TgZ(0,"button",13),a._uU(1,"\n                Finalizar\n              "),a.qZA()),2&r){const r=a.oxw(2).$implicit;a.Q6J("routerLink","finalizar/"+r.id)}}function J(r,o){if(1&r&&(a.TgZ(0,"td"),a._uU(1,"\n            "),a.TgZ(2,"span",11),a._uU(3,"\n              "),a.YNc(4,E,2,1,"button",12),a._uU(5,"\n            "),a.qZA(),a._uU(6,"\n          "),a.qZA()),2&r){const r=a.oxw().$implicit;a.xp6(4),a.Q6J("ngIf","A"==r.statusOs)}}function C(r,o){if(1&r&&(a.TgZ(0,"tr"),a._uU(1,"\n          "),a.TgZ(2,"td"),a._uU(3),a.qZA(),a._uU(4,"\n          "),a.TgZ(5,"td"),a._uU(6),a.qZA(),a._uU(7,"\n          "),a.TgZ(8,"td"),a._uU(9),a.qZA(),a._uU(10,"\n          "),a.TgZ(11,"td"),a._uU(12),a.qZA(),a._uU(13,"\n          "),a.TgZ(14,"td"),a._uU(15),a.qZA(),a._uU(16,"\n          "),a.YNc(17,J,7,1,"td",10),a._uU(18,"\n        "),a.qZA()),2&r){const r=o.$implicit,i=a.oxw(2);a.xp6(3),a.Oqu(r.id),a.xp6(3),a.Oqu(r.maquina.sigla),a.xp6(3),a.Oqu(r.oficina),a.xp6(3),a.Oqu(r.statusOs),a.xp6(3),a.Oqu(r.problema),a.xp6(2),a.Q6J("ngIf",i.permissao>1)}}function S(r,o){if(1&r&&(a.TgZ(0,"table",8),a._uU(1,"\n      "),a.TgZ(2,"thead"),a._uU(3,"\n        "),a.TgZ(4,"tr"),a._uU(5,"\n          "),a.TgZ(6,"th"),a._uU(7,"Os"),a.qZA(),a._uU(8,"\n          "),a.TgZ(9,"th"),a._uU(10,"Sigla"),a.qZA(),a._uU(11,"\n          "),a.TgZ(12,"th"),a._uU(13,"Oficina"),a.qZA(),a._uU(14,"\n          "),a.TgZ(15,"th"),a._uU(16,"Status"),a.qZA(),a._uU(17,"\n          "),a.TgZ(18,"th"),a._uU(19,"Problema"),a.qZA(),a._uU(20,"\n          "),a._UZ(21,"th"),a._uU(22,"\n        "),a.qZA(),a._uU(23,"\n      "),a.qZA(),a._uU(24,"\n      "),a.TgZ(25,"tbody"),a._uU(26,"\n        "),a.YNc(27,C,19,6,"tr",9),a._uU(28,"\n      "),a.qZA(),a._uU(29,"\n    "),a.qZA()),2&r){const r=o.ngIf;a.xp6(27),a.Q6J("ngForOf",r)}}function N(r,o){1&r&&(a._uU(0,"\n  "),a.TgZ(1,"div",14),a._uU(2,"\n    "),a.TgZ(3,"span",15),a._uU(4,"Loading..."),a.qZA(),a._uU(5,"\n  "),a.qZA(),a._uU(6,"\n"))}let k=(()=>{class r{constructor(r,o,i){this.osService=r,this.modalService=o,this.authService=i,this.permissao=0,this.queryField=new n.NI}ngOnInit(){this.permissao=this.authService.usuario.permissao,this.onRefresh(),this.queryField.valueChanges.pipe((0,b.U)(r=>r.trim()),(0,A.b)(300),(0,T.x)(),(0,_.b)(r=>this.consulta(r))).subscribe()}consulta(r){r.length>0?this.os$=this.osService.busca(r).pipe((0,U.K)(r=>(this.handleError("Erro ao carregar"),(0,x.c)()))):this.onRefresh()}onRefresh(){this.os$=this.osService.list().pipe((0,U.K)(r=>(this.handleError("Erro ao carregar"),(0,x.c)())))}buscar(){var r;(null===(r=this.queryField.value)||void 0===r?void 0:r.length)>1&&(this.os$=this.osService.busca(this.queryField.value).pipe((0,U.K)(r=>(this.handleError("Erro ao carregar"),(0,x.c)()))))}handleError(r){this.bsModalRef=this.modalService.show(I.F),this.bsModalRef.content.type="danger",this.bsModalRef.content.message=r}}return r.\u0275fac=function(o){return new(o||r)(a.Y36(g),a.Y36(y.tT),a.Y36(O.e))},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-os"]],decls:29,vars:6,consts:[[1,"container"],[1,"navbar","navbar-light","bg-light"],[1,"form-inline"],["type","search","placeholder","Busca os/sigla","aria-label","Search",1,"form-control","mr-sm-2",3,"formControl"],[1,"btn","btn-outline-success","my-2","my-sm-0",3,"click"],[1,"btn","btn-outline-success","my-2","my-sm-0",3,"routerLink"],["class","table table-hover",4,"ngIf","ngIfElse"],["loading",""],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"float-end"],["class","btn btn-outline-warning mb-1 btn-sm",3,"routerLink",4,"ngIf"],[1,"btn","btn-outline-warning","mb-1","btn-sm",3,"routerLink"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(r,o){if(1&r&&(a.TgZ(0,"div",0),a._uU(1,"\n  "),a.TgZ(2,"legend"),a._uU(3,"Ordem de Servi\xe7o"),a.qZA(),a._UZ(4,"br"),a._uU(5,"\n  "),a.TgZ(6,"nav",1),a._uU(7,"\n    "),a.TgZ(8,"div",2),a._uU(9,"\n      "),a._UZ(10,"input",3),a._uU(11,"\n\n      "),a.TgZ(12,"button",4),a.NdJ("click",function(){return o.buscar()}),a._uU(13,"Procurar"),a.qZA(),a._uU(14,"\n      "),a.TgZ(15,"button",5),a._uU(16,"\n        Novo\n      "),a.qZA(),a._uU(17,"\n    "),a.qZA(),a._uU(18,"\n  "),a.qZA(),a._uU(19,"\n\n  "),a.TgZ(20,"div",0),a._uU(21,"\n    "),a.YNc(22,S,30,1,"table",6),a.ALo(23,"async"),a._uU(24,"\n  "),a.qZA(),a._uU(25,"\n\n"),a.qZA(),a._uU(26,"\n\n\n\n"),a.YNc(27,N,7,0,"ng-template",null,7,a.W1O)),2&r){const r=a.MAs(28);a.xp6(10),a.Q6J("formControl",o.queryField),a.xp6(5),a.Q6J("routerLink","cadastrar"),a.xp6(7),a.Q6J("ngIf",a.lcZ(23,4,o.os$))("ngIfElse",r)}},directives:[n.Fj,n.JJ,n.oH,s.rH,e.O5,e.sg],pipes:[e.Ov],styles:[""]}),r})();function Y(r,o){if(1&r&&(a.TgZ(0,"option",33),a._uU(1),a.qZA()),2&r){const r=o.$implicit;a.Q6J("ngValue",r),a.xp6(1),a.AsE(" ",r.matricula," - ",r.pessoa.nome," ")}}const R=function(r){return{"is-invalid":r}};function F(r,o){if(1&r){const r=a.EpF();a.TgZ(0,"form",4),a.NdJ("ngSubmit",function(){return a.CHM(r),a.oxw(2).onSubmit()}),a.TgZ(1,"div",5),a.TgZ(2,"div",6),a.TgZ(3,"label",7),a._uU(4,"OS:"),a.qZA(),a._UZ(5,"input",8),a.qZA(),a.TgZ(6,"div",9),a.TgZ(7,"label",10),a._uU(8,"Maquina:"),a.qZA(),a._UZ(9,"input",11),a.qZA(),a.qZA(),a.TgZ(10,"div",5),a.TgZ(11,"div",12),a.TgZ(12,"label",13),a._uU(13,"Problema:"),a.qZA(),a._UZ(14,"textarea",14),a.TgZ(15,"div",15),a._uU(16,"Descreva o problema da maquina "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(17,"div",5),a.TgZ(18,"div",16),a.TgZ(19,"label",17),a._uU(20,"Defeito:"),a.qZA(),a._UZ(21,"input",18),a.TgZ(22,"div",15),a._uU(23,"Descreva o Defeito da maquina "),a.qZA(),a.qZA(),a.TgZ(24,"div",19),a.TgZ(25,"label",17),a._uU(26,"Responsavel:"),a.qZA(),a.TgZ(27,"select",20),a.YNc(28,Y,2,3,"option",21),a.qZA(),a.TgZ(29,"div",15),a._uU(30,"Seleciona um responsavel "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(31,"div",5),a.TgZ(32,"div",12),a.TgZ(33,"label",22),a._uU(34,"Reparo:"),a.qZA(),a._UZ(35,"textarea",23),a.TgZ(36,"div",15),a._uU(37,"Descreva o reparo da maquina "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(38,"div",5),a.TgZ(39,"div",24),a.TgZ(40,"label",25),a._uU(41,"Inicio Reparo:"),a.qZA(),a._UZ(42,"input",26),a.TgZ(43,"div",15),a._uU(44,"Entre com a data inicio "),a.qZA(),a._UZ(45,"input",27),a.TgZ(46,"div",15),a._uU(47,"Entre com a data inicio "),a.qZA(),a.qZA(),a.TgZ(48,"div",24),a.TgZ(49,"label",25),a._uU(50,"Fim Reparo:"),a.qZA(),a._UZ(51,"input",28),a.TgZ(52,"div",15),a._uU(53,"Entre com a data final "),a.qZA(),a._UZ(54,"input",29),a.TgZ(55,"div",15),a._uU(56,"Entre com a data final "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(57,"div",30),a.TgZ(58,"div",31),a.TgZ(59,"button",32),a._uU(60,"Finalizar"),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&r){const r=o.ngIf,i=a.oxw(2);a.Q6J("formGroup",i.formulario),a.xp6(14),a.Q6J("ngClass",a.VKq(11,R,i.submitted&&i.hasError("problema"))),a.xp6(7),a.Q6J("ngClass",a.VKq(13,R,i.submitted&&i.hasError("defeito"))),a.xp6(6),a.Q6J("compareWith",i.comparar)("ngClass",a.VKq(15,R,i.submitted&&i.hasError("funcionario"))),a.xp6(1),a.Q6J("ngForOf",r),a.xp6(7),a.Q6J("ngClass",a.VKq(17,R,i.submitted&&i.hasError("reparo"))),a.xp6(7),a.Q6J("ngClass",a.VKq(19,R,i.submitted&&i.hasError("iniReparoDate"))),a.xp6(3),a.Q6J("ngClass",a.VKq(21,R,i.submitted&&i.hasError("iniReparoTime"))),a.xp6(6),a.Q6J("ngClass",a.VKq(23,R,i.submitted&&i.hasError("fimReparoDate"))),a.xp6(3),a.Q6J("ngClass",a.VKq(25,R,i.submitted&&i.hasError("fimReparoTime")))}}function w(r,o){if(1&r&&(a.TgZ(0,"div",2),a.TgZ(1,"legend"),a._uU(2,"Finalizar Os"),a.qZA(),a._UZ(3,"br"),a.YNc(4,F,61,27,"form",3),a.ALo(5,"async"),a.qZA()),2&r){const r=a.oxw(),o=a.MAs(2);a.xp6(4),a.Q6J("ngIf",a.lcZ(5,2,r.funcionarios$))("ngIfElse",o)}}function Q(r,o){1&r&&(a.TgZ(0,"div",34),a.TgZ(1,"span",35),a._uU(2,"Loading..."),a.qZA(),a.qZA())}let M=(()=>{class r{constructor(r,o,i,e,t,n){this.osService=r,this.funcionarioService=o,this.modalService=i,this.formBuilder=e,this.route=t,this.router=n,this.submitted=!1,this.inscricao=this.route.params.subscribe(r=>{this.os$=this.osService.getOs(r.id).pipe((0,U.K)(r=>(this.handleError("Erro ao carregar"),this.router.navigate(["os"]),(0,x.c)())))})}ngOnInit(){this.formulario=this.formBuilder.group({problema:[null,[n.kI.required,n.kI.minLength(3),n.kI.maxLength(250)]],id:[null,n.kI.required],sigla:[null,n.kI.required],defeito:[null,n.kI.required],funcionario:[null,n.kI.required],reparo:[null,n.kI.required],iniReparoDate:[null,n.kI.required],iniReparoTime:[null,n.kI.required],fimReparoTime:[null,n.kI.required],fimReparoDate:[null,n.kI.required]}),this.os$.subscribe(r=>{this.os=r,r&&this.povoar()}),this.funcionarios$=this.funcionarioService.list()}onSubmit(){if(this.submitted=!0,this.formulario.valid){let r,o;r=this.formulario.value.iniReparoDate+" "+this.formulario.value.iniReparoTime,o=this.formulario.value.fimReparoDate+" "+this.formulario.value.fimReparoTime,this.os.defeito=this.formulario.value.defeito,this.os.manutentor=this.formulario.value.funcionario,this.os.problema=this.formulario.value.problema,this.os.reparo=this.formulario.value.reparo,this.os.dataIniManutencao=r,this.os.dataFimManutencao=o,this.os.statusOs="C",this.osService.salvarOs(this.os).subscribe(r=>{this.formulario.reset(),this.router.navigate(["os"])},r=>{this.handleError("Erro ao salvar Os")})}}comparar(r,o){return r&&o?r.matricula===o.matricula:r===o}povoar(){var r,o,i;null===(r=this.formulario.get("id"))||void 0===r||r.setValue(this.os.id),null===(o=this.formulario.get("sigla"))||void 0===o||o.setValue(this.os.maquina.sigla),null===(i=this.formulario.get("problema"))||void 0===i||i.setValue(this.os.problema)}handleError(r){this.bsModalRef=this.modalService.show(I.F),this.bsModalRef.content.type="danger",this.bsModalRef.content.message=r}hasError(r){var o;return null===(o=this.formulario.get(r))||void 0===o?void 0:o.errors}}return r.\u0275fac=function(o){return new(o||r)(a.Y36(g),a.Y36(u.w),a.Y36(y.tT),a.Y36(n.qu),a.Y36(s.gz),a.Y36(s.F0))},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-os-finalizar"]],decls:3,vars:2,consts:[["class","container",4,"ngIf","ngIfElse"],["loading",""],[1,"container"],[3,"formGroup","ngSubmit",4,"ngIf","ngIfElse"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col-md-3"],["for","osNumero"],["type","text","readonly","","formControlName","id","id","osNumero",1,"form-control"],[1,"form-group","col-md-6"],["for","maquina"],["type","text","readonly","","formControlName","sigla","id","maquina",1,"form-control"],[1,"form-group","col-md-9"],["for","problema"],["type","text","id","problema","placeholder","Descreva o problema da maquina","formControlName","problema",1,"form-control",2,"margin","5px",3,"ngClass"],[1,"invalid-feedback"],[1,"form-group","col-md-5"],["for","defeito"],["type","text","formControlName","defeito","id","defeito",1,"form-control",3,"ngClass"],[1,"col-sm-4"],["id","funcionario","formControlName","funcionario",1,"form-control",2,"margin","5px",3,"compareWith","ngClass"],[3,"ngValue",4,"ngFor","ngForOf"],["for","reparo"],["type","text","id","reparo","placeholder","Descreva o reparo da maquina","formControlName","reparo",1,"form-control",2,"margin","5px",3,"ngClass"],[1,"form-group","col-md-2"],["for","iniReparo"],["type","date","formControlName","iniReparoDate","id","iniReparo",1,"form-control",3,"ngClass"],["type","time","formControlName","iniReparoTime","id","iniReparo",1,"form-control",3,"ngClass"],["type","date","formControlName","fimReparoDate","id","iniReparo",1,"form-control",3,"ngClass"],["type","time","formControlName","fimReparoTime","id","iniReparo",1,"form-control",3,"ngClass"],[1,"form-group","row"],[1,"col-sm-9"],["type","submit",1,"btn","btn-primary"],[3,"ngValue"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(r,o){if(1&r&&(a.YNc(0,w,6,4,"div",0),a.YNc(1,Q,3,0,"ng-template",null,1,a.W1O)),2&r){const r=a.MAs(2);a.Q6J("ngIf",o.os$)("ngIfElse",r)}},directives:[e.O5,n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,e.mk,n.EJ,e.sg,n.YN,n.Kr],pipes:[e.Ov],styles:[""]}),r})();const $=function(r){return{"is-invalid":r}};function V(r,o){if(1&r&&(a.TgZ(0,"div",2),a.TgZ(1,"legend"),a._uU(2,"Atualizar Os"),a.qZA(),a._UZ(3,"br"),a.TgZ(4,"form",3),a.TgZ(5,"div",4),a.TgZ(6,"div",5),a.TgZ(7,"label",6),a._uU(8,"OS:"),a.qZA(),a._UZ(9,"input",7),a.qZA(),a.TgZ(10,"div",8),a.TgZ(11,"label",9),a._uU(12,"Maquina:"),a.qZA(),a._UZ(13,"input",10),a.qZA(),a.qZA(),a.TgZ(14,"div",4),a.TgZ(15,"div",11),a.TgZ(16,"label",12),a._uU(17,"Problema:"),a.qZA(),a._UZ(18,"textarea",13),a.TgZ(19,"div",14),a._uU(20,"Descreva o problema da maquina "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&r){const r=a.oxw();a.xp6(4),a.Q6J("formGroup",r.formulario),a.xp6(14),a.Q6J("ngClass",a.VKq(2,$,r.submitted&&r.hasError("problema")))}}function L(r,o){1&r&&(a.TgZ(0,"div",15),a.TgZ(1,"span",16),a._uU(2,"Loading..."),a.qZA(),a.qZA())}const D=[{path:"",component:k},{path:"cadastrar",component:v},{path:"atualizar/:id",component:(()=>{class r{constructor(r,o,i,e,t){this.osService=r,this.modalService=o,this.formBuilder=i,this.route=e,this.router=t,this.submitted=!1,this.inscricao=this.route.params.subscribe(r=>{this.os$=this.osService.getOs(r.id).pipe((0,U.K)(r=>(this.handleError(),this.router.navigate(["os"]),(0,x.c)())))})}ngOnInit(){this.formulario=this.formBuilder.group({problema:[null,[n.kI.required,n.kI.minLength(3),n.kI.maxLength(250)]],id:[null,n.kI.required],sigla:[null,n.kI.required],oficina:[null,n.kI.required]}),this.os$.subscribe(r=>{this.os=r,r&&this.povoar()}),console.log(this.os)}povoar(){var r,o,i;null===(r=this.formulario.get("id"))||void 0===r||r.setValue(this.os.id),null===(o=this.formulario.get("sigla"))||void 0===o||o.setValue(this.os.maquina.sigla),null===(i=this.formulario.get("problema"))||void 0===i||i.setValue(this.os.problema)}handleError(){this.bsModalRef=this.modalService.show(I.F),this.bsModalRef.content.type="danger",this.bsModalRef.content.message="Erro ao carregar"}hasError(r){var o;return null===(o=this.formulario.get(r))||void 0===o?void 0:o.errors}}return r.\u0275fac=function(o){return new(o||r)(a.Y36(g),a.Y36(y.tT),a.Y36(n.qu),a.Y36(s.gz),a.Y36(s.F0))},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-os-atualizar"]],decls:3,vars:2,consts:[["class","container",4,"ngIf","ngIfElse"],["loading",""],[1,"container"],[3,"formGroup"],[1,"form-row"],[1,"form-group","col-md-3"],["for","osNumero"],["type","text","readonly","","formControlName","id","id","osNumero",1,"form-control"],[1,"form-group","col-md-6"],["for","maquina"],["type","text","readonly","","formControlName","sigla","id","maquina",1,"form-control"],[1,"form-group","col-md-9"],["for","problema"],["type","text","id","problema","placeholder","Descreva o problema da maquina","formControlName","problema",1,"form-control",2,"margin","5px",3,"ngClass"],[1,"invalid-feedback"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(r,o){if(1&r&&(a.YNc(0,V,21,4,"div",0),a.YNc(1,L,3,0,"ng-template",null,1,a.W1O)),2&r){const r=a.MAs(2);a.Q6J("ngIf",o.os$)("ngIfElse",r)}},directives:[e.O5,n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,e.mk],styles:[""]}),r})()},{path:"finalizar/:id",component:M}];let K=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[[s.Bz.forChild(D)],s.Bz]}),r})(),z=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[[e.ez,K,n.u5,n.UX]]}),r})()}}]);