(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d3f5"],{f74b:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h2",[t._v("Manager für angelegte Arbeiten")]),s("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v("Wissenschaftliche Betreuer, sowie unternehmensinterne Ansprechpartner können den Studenten im jeweiligen Assignment zugeordnet werden.")]),t._l(t.courses,(function(e){return s("table",{key:e.id,staticClass:"table"},[t._m(0,!0),s("tbody",t._l(e.assignments,(function(n){return s("tr",{key:n.id},[s("td",[t._v(t._s(n.id))]),s("td",[t._v(t._s(n.cmid))]),s("td",[t._v(t._s(e.fullname))]),s("td",[t._v(t._s(n.name))]),s("td",[t._v(t._s(n.duedate))]),s("td",[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.showStudents(n)}}},[t._v("Studenten")])])])})),0)])})),s("div",{ref:"modalStudents",staticClass:"modal fade",attrs:{id:"modalStudents",tabindex:"-1",role:"dialog","aria-labelledby":"modalStudents","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(1),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"container"},[s("table",{staticClass:"table table-responsive"},[t._m(2),s("tbody",t._l(t.students,(function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.id))]),s("td",[t._v(t._s(e.firstname)+" "+t._s(e.lastname))]),s("td"),s("div",{staticClass:"form-group"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.newSupervisor,expression:"student.newSupervisor"}],staticClass:"form-control form-control-sm mt-2",attrs:{name:"supervisors",id:"supervisors"},on:{change:[function(s){var n=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"newSupervisor",s.target.multiple?n:n[0])},function(t){e.changed=!0}]}},[s("option",{attrs:{value:"NULL"}}),t._l(t.supervisors,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.firstname)+" "+t._s(e.lastname))])}))],2)]),s("td",[t._v(t._s())]),s("td",[t._v(t._s(e.changed?"Geändert":""))])])})),0)])])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.saveData}},[t._v("Änderungen sichern")]),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Schließen")])])])])])],2)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Assignment ID")]),s("th",{attrs:{scope:"col"}},[t._v("Assignment CMID")]),s("th",{attrs:{scope:"col"}},[t._v("Kurs")]),s("th",{attrs:{scope:"col"}},[t._v("Assignment Name")]),s("th",{attrs:{scope:"col"}},[t._v("Abgabe")]),s("th",{attrs:{scope:"col"}},[t._v("Studenten")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("Diesem Assignment zugewiesene Studenten")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Student ID")]),s("th",{attrs:{scope:"col"}},[t._v("Student Name")]),s("th",{attrs:{scope:"col"}},[t._v("Aktueller Wiss. Betreuer")]),s("th",{attrs:{scope:"col"}},[t._v("Neuer Wiss. Betreuer")]),s("th",{attrs:{scope:"col"}},[t._v("Unternehmensbetreuer")]),s("th",{attrs:{scope:"col"}},[t._v("Geändert")])])])}],o=s("bc3a"),r=s.n(o),i=s("1157"),c=s.n(i),d={name:"About",components:{},data:function(){return{students:[],showModal:!1,supervisors:[],courses:[],selectedAssignment:""}},props:{token:{type:String,default:""}},beforeCreate:function(){},mounted:function(){this.getSupervisors(),this.getCourses()},created:function(){},methods:{saveData:function(){for(var t=this,e=[],s=0;s<this.students.length;s++)this.students[s].changed&&e.push({studentid:this.students[s].id,supervisorid:this.students[s].newSupervisor,assignid:this.selectedAssignment,corporatepartnerid:1});var n={changes:e},a={variables:{dbchanges:{value:JSON.stringify(n),type:"String"}}};this.$emit("loading","10%",!1),r.a.post((Object({NODE_ENV:"production",BASE_URL:"/mod/spam/static/"}).VUE_APP_CAMUNDA_URL||"https://camunda.scientific-paper.swimdhbw.de/")+"engine-rest/process-definition/key/application_for_paper/start",a,{headers:{"Content-type":"application/json"}}).then((function(e){t.$emit("loading","100%",!0),console.log(e)}))},showStudents:function(t){var e=this,s=t.course;this.selectedAssignment=t.id,this.$emit("loading","10%",!1),this.students=[];var n={headers:{"Content-Type":"application/json;charset=UTF-8"}};r.a.get((Object({NODE_ENV:"production",BASE_URL:"/mod/spam/static/"}).VUE_APP_MOODEL_URL||"")+"/webservice/rest/server.php",{params:{wstoken:this.token,wsfunction:"core_enrol_get_enrolled_users",moodlewsrestformat:"json",courseid:s}},n).then((function(t){t.exception||(e.students=e.filterStudents(t.data),console.log(e.students),c()("#modalStudents").modal("show"),e.$emit("loading","100%",!0))})).catch((function(t){console.log(t),e.$emit("loading","100%",!0),e.$emit("ajaxerror")}))},getSupervisors:function(){var t=this;this.$emit("loading","10%",!1),this.supervisors=[];var e={headers:{"Content-Type":"application/json;charset=UTF-8"}};r.a.get((Object({NODE_ENV:"production",BASE_URL:"/mod/spam/static/"}).VUE_APP_MOODEL_URL||"")+"/webservice/rest/server.php",{params:{wstoken:this.token,wsfunction:"local_spsupman_get_supervisors",moodlewsrestformat:"json"}},e).then((function(e){e.data.exception?(t.$emit("loading","100%",!0),t.$emit("ajaxerror")):(t.supervisors=e.data,t.$emit("loading","100%",!0))})).catch((function(e){console.log(e),t.$emit("loading","100%",!0),t.$emit("ajaxerror")}))},filterStudents:function(t){for(var e=[],s=0;s<t.length;s++){for(var n=!1,a=0;a<t[s].roles.length;a++)5==t[s].roles[a].roleid&&(n=!0);n&&(t[s].changed=!1,t[s].newSupervisor="",e.push(t[s]))}return e},getCourses:function(){var t=this;this.$emit("loading","10%",!1);var e={headers:{"Content-Type":"application/json;charset=UTF-8"}};r.a.get((Object({NODE_ENV:"production",BASE_URL:"/mod/spam/static/"}).VUE_APP_MOODEL_URL||"")+"/webservice/rest/server.php",{params:{wstoken:this.token,wsfunction:"mod_assign_get_assignments",moodlewsrestformat:"json"}},e).then((function(e){t.$emit("loading","100%",!0),e.exception||(t.courses=e.data.courses,console.log(t.courses))})).catch((function(e){t.$emit("loading","100%",!0),t.$emit("ajaxerror"),console.log(e)}))}}},l=d,u=s("2877"),m=Object(u["a"])(l,n,a,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d22d3f5.7b0e0b49.js.map