!function(){function t(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function n(n,i,e){return i&&t(n.prototype,i),e&&t(n,e),n}function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(self.webpackChunktcc=self.webpackChunktcc||[]).push([[724],{4724:function(t,e,r){"use strict";r.r(e),r.d(e,{MaquinaModule:function(){return Q}});var o=r(7617),a=r(1116),u=r(1462),s=function t(){i(this,t)},l=function t(){i(this,t)},c=r(7368),m=r(1483),f=r(611),d=r(529),g=r(2693),p=function(){var t=function(){function t(n){i(this,t),this.http=n,this.API="".concat(d.N.API,"setor")}return n(t,[{key:"list",value:function(){return this.http.get(this.API).pipe((0,f.q)(1))}},{key:"salvarSetor",value:function(t){return this.http.post(this.API,JSON.stringify(t),{headers:(new g.WM).set("Content-Type","application/json"),responseType:"text"}).pipe((0,f.q)(1))}}]),t}();return t.\u0275fac=function(n){return new(n||t)(c.LFG(g.eN))},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),h=function(t){return{"is-invalid":t}},Z=function(){var t=function(){function t(n,e,r,o){i(this,t),this.formBuilder=n,this.modalService=e,this.setorservice=r,this.bsModalRef=o,this.submitted=!1,this.config={keyboard:!0}}return n(t,[{key:"ngOnInit",value:function(){this.formulario=this.formBuilder.group({nome:[null,[u.kI.required,u.kI.minLength(3)]],ramal:[null,[u.kI.required,u.kI.minLength(4)]]})}},{key:"onSubmit",value:function(){var t=this;if(this.submitted=!0,this.formulario.valid){var n=new l;n.nome=this.formulario.value.nome,n.ramal=this.formulario.value.ramal,this.setorservice.salvarSetor(n).subscribe(function(n){t.bsModalRef.hide()},function(t){console.log("4"),console.log(t)})}}},{key:"hasError",value:function(t){var n;return null===(n=this.formulario.get(t))||void 0===n?void 0:n.errors}}]),t}();return t.\u0275fac=function(n){return new(n||t)(c.Y36(u.qu),c.Y36(m.tT),c.Y36(p),c.Y36(m.UZ))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-setor"]],decls:26,vars:7,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"close","btn-close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"row","md-6"],["for","nome",1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","nome",1,"form-control",2,"margin","5px",3,"ngClass"],[1,"invalid-feedback"],["for","ramal",1,"col-sm-3","col-form-label"],["type","number","formControlName","ramal",1,"form-control",2,"margin","5px",3,"ngClass"],["type","submit",1,"btn","btn-primary"]],template:function(t,n){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"h4",1),c._uU(2,"Novo Setor"),c.qZA(),c.TgZ(3,"button",2),c.NdJ("click",function(){return n.bsModalRef.hide()}),c.TgZ(4,"span",3),c._uU(5,"\xd7"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(6,"div",4),c.TgZ(7,"form",5),c.NdJ("ngSubmit",function(){return n.onSubmit()}),c.TgZ(8,"legend"),c._uU(9,"Cadastro de Setor"),c.qZA(),c.TgZ(10,"div",6),c.TgZ(11,"label",7),c._uU(12,"Nome:"),c.qZA(),c.TgZ(13,"div",8),c._UZ(14,"input",9),c.TgZ(15,"div",10),c._uU(16,"Digite o nome do setor"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(17,"div",6),c.TgZ(18,"label",11),c._uU(19,"Ramal:"),c.qZA(),c.TgZ(20,"div",8),c._UZ(21,"input",12),c.TgZ(22,"div",10),c._uU(23,"Digite numero do ramal"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(24,"button",13),c._uU(25,"Salvar"),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(7),c.Q6J("formGroup",n.formulario),c.xp6(7),c.Q6J("ngClass",c.VKq(3,h,n.submitted&&n.hasError("nome"))),c.xp6(7),c.Q6J("ngClass",c.VKq(5,h,n.submitted&&n.hasError("ramal"))))},directives:[u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,a.mk,u.wV],styles:[""]}),t}(),v=function t(){i(this,t)},b=r(2623),q=function(){var t=function(){function t(n){i(this,t),this.http=n,this.API="".concat(d.N.API,"fabricante")}return n(t,[{key:"list",value:function(){return this.http.get(this.API).pipe((0,f.q)(1))}},{key:"salvarFabricante",value:function(t){return this.http.post(this.API,JSON.stringify(t),{headers:(new g.WM).set("Content-Type","application/json"),responseType:"text"}).pipe((0,f.q)(1))}}]),t}();return t.\u0275fac=function(n){return new(n||t)(c.LFG(g.eN))},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),A=function(t){return{"is-invalid":t}},T=function(){var t=function(){function t(n,e,r,o){i(this,t),this.formBuilder=n,this.modalService=e,this.fabricanteService=r,this.bsModalRef=o,this.submitted=!1,this.config={keyboard:!0}}return n(t,[{key:"ngOnInit",value:function(){this.formulario=this.formBuilder.group({nome:[null,[u.kI.required,u.kI.minLength(3),u.kI.maxLength(10)]]})}},{key:"onSubmit",value:function(){var t=this;if(this.submitted=!0,this.formulario.valid){this.fabricante=new v;var n=new b.Z;this.fabricante.pessoa=n,this.fabricante.pessoa.nome=this.formulario.value.nome,console.log(this.fabricante),this.fabricanteService.salvarFabricante(this.fabricante).subscribe(function(n){t.bsModalRef.hide()},function(t){console.log(t)})}}},{key:"hasError",value:function(t){var n;return null===(n=this.formulario.get(t))||void 0===n?void 0:n.errors}}]),t}();return t.\u0275fac=function(n){return new(n||t)(c.Y36(u.qu),c.Y36(m.tT),c.Y36(q),c.Y36(m.UZ))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-fabricante"]],decls:19,vars:4,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"close","btn-close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"row","md-6"],["for","nome",1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","nome",1,"form-control",2,"margin","5px",3,"ngClass"],[1,"invalid-feedback"],["type","submit",1,"btn","btn-primary"]],template:function(t,n){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"h4",1),c._uU(2,"Novo Fabricante"),c.qZA(),c.TgZ(3,"button",2),c.NdJ("click",function(){return n.bsModalRef.hide()}),c.TgZ(4,"span",3),c._uU(5,"\xd7"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(6,"div",4),c.TgZ(7,"form",5),c.NdJ("ngSubmit",function(){return n.onSubmit()}),c.TgZ(8,"legend"),c._uU(9,"Cadastro de Fabricante"),c.qZA(),c.TgZ(10,"div",6),c.TgZ(11,"label",7),c._uU(12,"Nome:"),c.qZA(),c.TgZ(13,"div",8),c._UZ(14,"input",9),c.TgZ(15,"div",10),c._uU(16,"Digite o nome do Fabricante"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(17,"button",11),c._uU(18,"Salvar"),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(7),c.Q6J("formGroup",n.formulario),c.xp6(7),c.Q6J("ngClass",c.VKq(2,A,n.submitted&&n.hasError("nome"))))},directives:[u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,a.mk],styles:[""]}),t}(),U=r(4354),_=r(1423);function y(t,n){if(1&t&&(c.TgZ(0,"option",19),c._uU(1),c.qZA()),2&t){var i=n.$implicit;c.Q6J("ngValue",i),c.xp6(1),c.AsE(" ",i.id," - ",i.pessoa.nome," ")}}function k(t,n){if(1&t&&(c.TgZ(0,"option",19),c._uU(1),c.qZA()),2&t){var i=n.$implicit;c.Q6J("ngValue",i),c.xp6(1),c.AsE(" ",i.id," - ",i.nome," ")}}function S(t,n){1&t&&(c.TgZ(0,"div",20),c.TgZ(1,"span",21),c._uU(2,"Loading..."),c.qZA(),c.qZA())}var C=function(t){return{"is-invalid":t}},J=function(){var t=function(){function t(n,e,r,o,a,u,l){var c=this;i(this,t),this.formBuilder=n,this.route=e,this.router=r,this.maquinaService=o,this.setorService=a,this.fabricanteService=u,this.modalService=l,this.submitted=!1,this.novo=!1,this.inscricao=this.route.params.subscribe(function(t){var n=t.sigla;null==n?(c.novo=!0,c.maquina=new s):c.maquinaService.getMaquina(n).subscribe(function(t){c.maquina=t,t&&c.povoar()})})}return n(t,[{key:"ngOnInit",value:function(){this.formulario=this.formBuilder.group({sigla:[null,[u.kI.required,u.kI.minLength(3),u.kI.maxLength(3)]],dataCompra:[null,u.kI.required],fabricante:[null,u.kI.required],setor:[null,u.kI.required]}),this.onRefresh()}},{key:"onRefresh",value:function(){this.setor$=this.setorService.list().pipe(),this.fabricante$=this.fabricanteService.list().pipe()}},{key:"povoar",value:function(){var t,n,i,e;this.onRefresh(),null===(t=this.formulario.get("sigla"))||void 0===t||t.setValue(this.maquina.sigla),null===(n=this.formulario.get("dataCompra"))||void 0===n||n.setValue(this.maquina.dataCompra),null===(i=this.formulario.get("fabricante"))||void 0===i||i.setValue(this.maquina.fabricante),null===(e=this.formulario.get("setor"))||void 0===e||e.setValue(this.maquina.setor)}},{key:"onSubmit",value:function(){var t=this;this.submitted=!0,this.formulario.valid&&(this.maquina.sigla=this.formulario.value.sigla,this.maquina.dataCompra=this.formulario.value.dataCompra,this.maquina.setor=this.formulario.value.setor,this.maquina.fabricante=this.formulario.value.fabricante,this.maquinaService.salvarMaquina(this.maquina).subscribe(function(n){t.formulario.reset(),t.router.navigate(["/maquina"])},function(t){console.log(t)}))}},{key:"addSetor",value:function(){this.bsModalRef=this.modalService.show(Z)}},{key:"comparar",value:function(t,n){return t&&n?t.id===n.id:t===n}},{key:"addFabricante",value:function(){this.bsModalRef=this.modalService.show(T)}},{key:"hasError",value:function(t){var n;return null===(n=this.formulario.get(t))||void 0===n?void 0:n.errors}}]),t}();return t.\u0275fac=function(n){return new(n||t)(c.Y36(u.qu),c.Y36(U.gz),c.Y36(U.F0),c.Y36(_.P),c.Y36(p),c.Y36(q),c.Y36(m.tT))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-maquina-cadastro"]],decls:46,vars:21,consts:[[3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","sigla",1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","autocomplete","off","placeholder","Digite uma Sigla","formControlName","sigla","id","siglaNova",1,"form-control",3,"ngClass"],[1,"invalid-feedback"],["for","dataCompra",1,"col-sm-3","col-form-label"],["type","date","autocomplete","off","formControlName","dataCompra","id","dataCompra",1,"form-control",3,"ngClass"],["for","fabricante",1,"col-sm-3","col-form-label"],[1,"col-sm-8"],["id","fabricante","formControlName","fabricante",1,"form-control",2,"margin","5px",3,"compareWith","ngClass"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"col-sm-1"],["tooltip","adicionar novo Fabricante",1,"bi","bi-plus-circle-fill",2,"font-size","2rem","color","rgb(30, 126, 11)",3,"click"],["for","setor",1,"col-sm-3","col-form-label"],["id","setor","formControlName","setor",1,"form-control",2,"margin","5px",3,"compareWith","ngClass"],["tooltip","adicionar novo setor",1,"bi","bi-plus-circle-fill",2,"font-size","2rem","color","rgb(30, 126, 11)",3,"click"],["type","submit",1,"btn","btn-primary"],["novoFabricante",""],[3,"ngValue"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(t,n){1&t&&(c.TgZ(0,"form",0),c.NdJ("ngSubmit",function(){return n.onSubmit()}),c.TgZ(1,"legend"),c._uU(2,"Cadastro Maquina"),c.qZA(),c._UZ(3,"br"),c.TgZ(4,"div",1),c.TgZ(5,"label",2),c._uU(6,"Sigla:"),c.qZA(),c.TgZ(7,"div",3),c._UZ(8,"input",4),c.TgZ(9,"div",5),c._uU(10,"Digite a sigla"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(11,"div",1),c.TgZ(12,"label",6),c._uU(13,"Data Compra:"),c.qZA(),c.TgZ(14,"div",3),c._UZ(15,"input",7),c.TgZ(16,"div",5),c._uU(17,"Digite a Data da compra"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(18,"div",1),c.TgZ(19,"label",8),c._uU(20,"Fabricante:"),c.qZA(),c.TgZ(21,"div",9),c.TgZ(22,"select",10),c.YNc(23,y,2,3,"option",11),c.ALo(24,"async"),c.qZA(),c.TgZ(25,"div",5),c._uU(26,"Selecione um Fabricante"),c.qZA(),c.qZA(),c.TgZ(27,"div",12),c.TgZ(28,"i",13),c.NdJ("click",function(){return n.addFabricante()}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(29,"div",1),c.TgZ(30,"label",14),c._uU(31,"Setor:"),c.qZA(),c.TgZ(32,"div",9),c.TgZ(33,"select",15),c.YNc(34,k,2,3,"option",11),c.ALo(35,"async"),c.qZA(),c.TgZ(36,"div",5),c._uU(37,"Selecione um Setor"),c.qZA(),c.qZA(),c.TgZ(38,"div",12),c.TgZ(39,"i",16),c.NdJ("click",function(){return n.addSetor()}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(40,"div",1),c.TgZ(41,"div",3),c.TgZ(42,"button",17),c._uU(43,"Salvar"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.YNc(44,S,3,0,"ng-template",null,18,c.W1O)),2&t&&(c.Q6J("formGroup",n.formulario),c.xp6(8),c.Q6J("ngClass",c.VKq(13,C,n.submitted&&n.hasError("sigla"))),c.xp6(7),c.Q6J("ngClass",c.VKq(15,C,n.submitted&&n.hasError("dataCompra"))),c.xp6(7),c.Q6J("compareWith",n.comparar)("ngClass",c.VKq(17,C,n.submitted&&n.hasError("fabricante"))),c.xp6(1),c.Q6J("ngForOf",c.lcZ(24,9,n.fabricante$)),c.xp6(10),c.Q6J("compareWith",n.comparar)("ngClass",c.VKq(19,C,n.submitted&&n.hasError("setor"))),c.xp6(1),c.Q6J("ngForOf",c.lcZ(35,11,n.setor$)))},directives:[u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,a.mk,u.EJ,a.sg,o.i9,u.YN,u.Kr],pipes:[a.Ov],styles:[""]}),t}(),x=r(7727),N=r(653),I=r(3193);function Y(t,n){if(1&t&&(c.TgZ(0,"tr"),c._uU(1,"\n          "),c.TgZ(2,"td"),c._uU(3),c.qZA(),c._uU(4,"\n          "),c.TgZ(5,"td"),c._uU(6),c.qZA(),c._uU(7,"\n          "),c.TgZ(8,"td"),c._uU(9),c.qZA(),c._uU(10,"\n          "),c.TgZ(11,"td"),c._uU(12),c.qZA(),c._uU(13,"\n          "),c.TgZ(14,"td"),c._uU(15,"\n            "),c.TgZ(16,"span",10),c._uU(17,"\n              "),c.TgZ(18,"button",11),c._uU(19,"\n                Atualizar\n              "),c.qZA(),c._uU(20,"\n\n              "),c.TgZ(21,"button",11),c._uU(22,"\n                Previs\xf5es de quebra\n              "),c.qZA(),c._uU(23,"\n\n            "),c.qZA(),c._uU(24,"\n          "),c.qZA(),c._uU(25,"\n        "),c.qZA()),2&t){var i=n.$implicit;c.xp6(3),c.Oqu(i.sigla),c.xp6(3),c.Oqu(i.fabricante.pessoa.nome),c.xp6(3),c.Oqu(i.setor.nome),c.xp6(3),c.Oqu(i.dataCompra),c.xp6(6),c.Q6J("routerLink","atualizar/"+i.sigla),c.xp6(3),c.Q6J("routerLink","atualizar/"+i.sigla)}}function w(t,n){if(1&t&&(c.TgZ(0,"table",8),c._uU(1,"\n      "),c.TgZ(2,"thead"),c._uU(3,"\n        "),c.TgZ(4,"tr"),c._uU(5,"\n          "),c.TgZ(6,"th"),c._uU(7,"Sigla"),c.qZA(),c._uU(8,"\n          "),c.TgZ(9,"th"),c._uU(10,"Fabricante"),c.qZA(),c._uU(11,"\n          "),c.TgZ(12,"th"),c._uU(13,"Setor"),c.qZA(),c._uU(14,"\n          "),c.TgZ(15,"th"),c._uU(16,"data"),c.qZA(),c._uU(17,"\n          "),c._UZ(18,"th"),c._uU(19,"\n        "),c.qZA(),c._uU(20,"\n      "),c.qZA(),c._uU(21,"\n      "),c.TgZ(22,"tbody"),c._uU(23,"\n        "),c.YNc(24,Y,26,6,"tr",9),c._uU(25,"\n      "),c.qZA(),c._uU(26,"\n    "),c.qZA()),2&t){var i=n.ngIf;c.xp6(24),c.Q6J("ngForOf",i)}}function F(t,n){1&t&&(c._uU(0,"\n  "),c.TgZ(1,"div",12),c._uU(2,"\n    "),c.TgZ(3,"span",13),c._uU(4,"Loading..."),c.qZA(),c._uU(5,"\n  "),c.qZA(),c._uU(6,"\n"))}var L,O,M=[{path:"",component:(L=function(){function t(n,e){i(this,t),this.service=n,this.modalService=e}return n(t,[{key:"ngOnInit",value:function(){var t=this;this.maquina$=this.service.list().pipe((0,x.K)(function(n){return t.handleError(),(0,N.c)()}))}},{key:"handleError",value:function(){this.bsModalRef=this.modalService.show(I.F),this.bsModalRef.content.type="danger",this.bsModalRef.content.message="Erro ao carregar"}}]),t}(),L.\u0275fac=function(t){return new(t||L)(c.Y36(_.P),c.Y36(m.tT))},L.\u0275cmp=c.Xpm({type:L,selectors:[["app-maquina"]],decls:29,vars:5,consts:[[1,"container"],[1,"navbar","navbar-light","bg-light"],[1,"form-inline"],["type","search","placeholder","Search","aria-label","Search",1,"form-control","mr-sm-2"],[1,"btn","btn-outline-success","my-2","my-sm-0"],[1,"btn","btn-outline-success","my-2","my-sm-0",3,"routerLink"],["class","table table-hover",4,"ngIf","ngIfElse"],["loading",""],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[1,"float-end"],[1,"btn","btn-outline-warning","mb-1","btn-sm",3,"routerLink"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(t,n){if(1&t&&(c.TgZ(0,"div",0),c._uU(1,"\n  "),c.TgZ(2,"legend"),c._uU(3,"Maquinas"),c.qZA(),c._UZ(4,"br"),c._uU(5,"\n  "),c.TgZ(6,"nav",1),c._uU(7,"\n    "),c.TgZ(8,"div",2),c._uU(9,"\n      "),c._UZ(10,"input",3),c._uU(11,"\n\n      "),c.TgZ(12,"button",4),c._uU(13,"Procurar"),c.qZA(),c._uU(14,"\n      "),c.TgZ(15,"button",5),c._uU(16,"\n        Novo\n      "),c.qZA(),c._uU(17,"\n    "),c.qZA(),c._uU(18,"\n  "),c.qZA(),c._uU(19,"\n\n  "),c.TgZ(20,"div",0),c._uU(21,"\n    "),c.YNc(22,w,27,1,"table",6),c.ALo(23,"async"),c._uU(24,"\n  "),c.qZA(),c._uU(25,"\n"),c.qZA(),c._uU(26,"\n\n"),c.YNc(27,F,7,0,"ng-template",null,7,c.W1O)),2&t){var i=c.MAs(28);c.xp6(15),c.Q6J("routerLink","cadastrar"),c.xp6(7),c.Q6J("ngIf",c.lcZ(23,3,n.maquina$))("ngIfElse",i)}},directives:[U.rH,a.O5,a.sg],pipes:[a.Ov],styles:[""]}),L)},{path:"cadastrar",component:J},{path:"atualizar/:sigla",component:J}],E=function(){var t=function t(){i(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[U.Bz.forChild(M)],U.Bz]}),t}(),Q=((O=function t(){i(this,t)}).\u0275fac=function(t){return new(t||O)},O.\u0275mod=c.oAB({type:O}),O.\u0275inj=c.cJS({imports:[[a.ez,E,u.u5,u.UX,o.z8]]}),O)}}])}();