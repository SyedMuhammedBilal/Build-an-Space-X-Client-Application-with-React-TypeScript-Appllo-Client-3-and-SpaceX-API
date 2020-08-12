(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,a,n){e.exports=n.p+"static/media/logo.47a5ed68.png"},46:function(e,a,n){e.exports=n(62)},51:function(e,a,n){},52:function(e,a,n){},62:function(e,a,n){"use strict";n.r(a);var t=n(1),c=n.n(t),l=n(37),r=n.n(l),s=(n(51),n(45)),m=n(7),u=n(19),i=n(6),o=n(38),h=n.n(o),p=(n(52),n(21)),E=n(22),d=n(28),g=n(27),_=n(23),f=n(18),b=n.n(f),y=n(63),N=n(24),v=n.n(N),k=n(39),w=n.n(k),x=function(e){var a=e.launch,n=a.flight_number,t=a.mission_name,l=a.launch_date_local,r=a.launch_success,s=a.launch_site;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null," Mission:",c.a.createElement("span",{className:v()({"text-success":r,"text-danger":!r})},t)),c.a.createElement("p",null," Date: ",c.a.createElement(w.a,{format:"YYYY-MM-DD HH:mm"},l)," "),c.a.createElement("p",null," Launch Site: ",s.site_name," ")),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(u.b,{to:"/launch/".concat(n),className:"btn btn-secondary"}," Launch Details "))))};function j(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"))}function L(){var e=Object(_.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number,\n      mission_name,\n      launch_year,\n      launch_date_local,\n      launch_site {\n        site_name\n      }\n      launch_success\n    }\n  }\n"]);return L=function(){return e},e}var O=b()(L()),D=function(e){Object(d.a)(n,e);var a=Object(g.a)(n);function n(){return Object(p.a)(this,n),a.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"}," Launches "),c.a.createElement(j,null),c.a.createElement(y.a,{query:O},(function(e){var a=e.loading,n=e.error,t=e.data;return a?c.a.createElement("h4",null,"Loading..."):(n&&console.log(n),console.log(t),c.a.createElement(c.a.Fragment,null,t.launches.map((function(e){return c.a.createElement(x,{key:e.flight_number,launch:e})}))))})))}}]),n}(t.Component);function Y(){var e=Object(_.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number,\n      mission_name,\n      launch_year,\n      launch_success,\n      launch_failure_details {\n        time,\n        reason\n      }\n      launch_date_local,\n      rocket {\n        rocket_id,\n        rocket_name,\n        rocket_type\n      }\n    }\n  }\n"]);return Y=function(){return e},e}var q=b()(Y()),F=function(e){Object(d.a)(n,e);var a=Object(g.a)(n);function n(){return Object(p.a)(this,n),a.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{query:q,variables:{flight_number:e}},(function(e){var a=e.loading,n=e.error,t=e.data;if(a)return c.a.createElement("h4",null,"Loading...");n&&console.log(n);var l=t.launch,r=l.mission_name,s=l.flight_number,m=l.launch_year,i=l.launch_success,o=l.rocket,h=o.rocket_id,p=o.rocket_name,E=o.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission:"),r),c.a.createElement("h4",{className:"mb-3"}," Launch Details "),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Successful: ",c.a.createElement("span",{className:v()({"text-success":i,"text-danger":!i})},i?"Yes":"No"))),c.a.createElement("h4",{className:"h4 my-3"}," Rocket Details "),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"}," Rocket ID: ",h," "),c.a.createElement("li",{className:"list-group-item"}," Rocket Name: ",p," "),c.a.createElement("li",{className:"list-group-item"}," Rocket Type: ",E," ")),c.a.createElement("hr",null),c.a.createElement(u.b,{className:"btn btn-secondary",to:"/"},"Back"))})))}}]),n}(t.Component),M=new s.a({uri:"http://localhost:5000/graphql"});var I=function(){return c.a.createElement(m.a,{client:M},c.a.createElement(u.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:h.a,alt:"spaceX",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(i.a,{exact:!0,path:"/",component:D}),c.a.createElement(i.a,{exact:!0,path:"/launch/:flight_number",component:F}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.401642cd.chunk.js.map