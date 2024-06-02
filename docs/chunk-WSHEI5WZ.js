import{a as C,b as d,c as _,d as y,f as F,g as A,h as P,i as q,k as V}from"./chunk-YUYN7RT6.js";import{Ha as u,Ja as w,La as p,Ma as r,Na as t,Oa as c,Qa as v,Ra as f,Sa as s,Ua as g,Y as b,Za as E,ua as l,va as h,vb as S}from"./chunk-E65UEM5O.js";function U(e,a){if(e&1&&(r(0,"p",7),s(1),t()),e&2){let m=f();l(),g(" ",m.getFieldError("email")," ")}}function k(e,a){if(e&1&&(r(0,"p",7),s(1),t()),e&2){let m=f();l(),g(" ",m.getFieldError("username")," ")}}function T(e,a){if(e&1&&(r(0,"p",7),s(1),t()),e&2){let m=f();l(),g(" ",m.getFieldError("newPassword")," ")}}function I(e,a){if(e&1&&(r(0,"p",7),s(1),t()),e&2){let m=f();l(),g(" ",m.getFieldError("confirmPass")," ")}}var z=(()=>{let a=class a{constructor(i){this.fb=i,this.signup=this.fb.group({username:["",[d.required,d.minLength(4)]],email:["",[d.required,d.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],newPassword:["",[d.required,d.minLength(8)]],confirmPass:["",[d.required]]},{validators:[this.paswordEqual("newPassword","confirmPass")]})}paswordEqual(i,o){return n=>{let x=n.get(i)?.value,N=n.get(o)?.value;return x!==N?(n.get(o)?.setErrors({notEqual:!0}),{notEqual:!0}):(n.get(o)?.setErrors(null),null)}}isValidField(i){return this.signup.controls[i].errors&&this.signup.controls[i].touched}getFieldError(i){if(!this.signup.controls[i])return null;let o=this.signup.controls[i].errors||{};for(let n of Object.keys(o))switch(n){case"required":return"Este campo es requerido";case"minlength":return`Minimo ${o.minlength.requiredLength} caracteres`;case"pattern":return"Ingrese un correo Valido";case"notEqual":return"Las constrase\xF1as deben ser iguales"}return null}onSave(){if(this.signup.invalid){this.signup.markAllAsTouched();return}console.log(this.signup.value),this.signup.reset()}};a.\u0275fac=function(o){return new(o||a)(h(q))},a.\u0275cmp=b({type:a,selectors:[["app-sign-up"]],standalone:!0,features:[E],decls:26,vars:5,consts:[[1,"bg-[#1A1B1B]"],[1,"flex","justify-center","items-center","max-w-screen-2xl","m-auto"],["autocomplete","off",1,"px-8","pt-6","pb-8","min-w-3/12","max-w-xl",3,"ngSubmit","formGroup"],[1,"grid","gap-6","mb-6","md:grid-cols-2"],[1,"mb-4"],["for","email",1,"text-[#519A73]","block","text-sm","font-bold","mb-2"],["type","email","formControlName","email","id","email","placeholder","example@example.com",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-[#519A73]","leading-tight","focus:outline-none","bg-[#1c2124]","focus:shadow-outline"],[1,"text-[#c65956]","text-xs"],["for","user",1,"text-[#519A73]","block","text-sm","font-bold","mb-2"],["type","text","formControlName","username","id","user","placeholder","Username",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-[#519A73]","leading-tight","focus:outline-none","bg-[#1c2124]","focus:shadow-outline"],[1,"mb-6"],["for","pass",1,"text-[#519A73]","block","text-sm","font-bold","mb-2"],["type","password","formControlName","newPassword","id","pass","placeholder","*******",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-[#519A73]","bg-[#1c2124]","mb-3","leading-tight","focus:outline-none","focus:shadow-outline"],["for","password",1,"text-[#519A73]","block","text-sm","font-bold","mb-2"],["type","password","formControlName","confirmPass","id","confirmPass","placeholder","*******",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-[#519A73]","bg-[#1c2124]","mb-3","leading-tight","focus:outline-none","focus:shadow-outline"],[1,"bg-[#519A73]","hover:text-[#519A73]","hover:bg-[#1c2124]","text-[#1c2124]","font-bold","py-2","px-7","rounded","focus:outline-none","focus:shadow-outline"]],template:function(o,n){o&1&&(r(0,"div",0)(1,"div",1)(2,"form",2),v("ngSubmit",function(){return n.onSave()}),r(3,"div",3)(4,"div",4)(5,"label",5),s(6,"Email: "),t(),c(7,"input",6),u(8,U,2,1,"p",7),t(),r(9,"div",4)(10,"label",8),s(11,"Username: "),t(),c(12,"input",9),u(13,k,2,1,"p",7),t(),r(14,"div",10)(15,"label",11),s(16,"Password: "),t(),c(17,"input",12),u(18,T,2,1,"p",7),t(),r(19,"div",10)(20,"label",13),s(21,"Password confirmation: "),t(),c(22,"input",14),u(23,I,2,1,"p",7),t()(),r(24,"button",15),s(25," Sign Up "),t()()()()),o&2&&(l(2),w("formGroup",n.signup),l(6),p(8,n.isValidField("email")?8:-1),l(5),p(13,n.isValidField("username")?13:-1),l(5),p(18,n.isValidField("newPassword")?18:-1),l(5),p(23,n.isValidField("confirmPass")?23:-1))},dependencies:[S,V,F,C,_,y,A,P]});let e=a;return e})();export{z as default};
